/* USA-only campus map. Self-contained state outlines. Detail opens in-page, not a new window. */
(function () {
  const L = () => window.AIDCLogic;
  const DATA = () => window.AIDC_SITES;
  let root, state, lastFocus = null;

  const BASIS = [
    ["IT_load", "IT load"],
    ["campus_power", "Campus power"],
    ["grid_connection", "Grid connection"],
    ["generation_power", "Generation"],
    ["unspecified", "Unspecified basis"]
  ];
  const DELIVERY = [["planned", "Planned"], ["energized", "Energized"]];
  const SCOPE = [
    ["campus", "Campus"],
    ["each of two buildings", "Each of two buildings"],
    ["per building", "Per building"]
  ];
  const RISK_MARK = {
    confirmed_cancelled_paused_delayed: "X",
    documented_compliance_issue: "C",
    documented_dependency: "D",
    reported_risk: "R",
    no_identified_material_issue: "L",
    unknown: "?",
    not_assessed: "–"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function sourceById(id) {
    const packs = [window.AIDC_US_CAMPUSES, DATA()];
    for (const pack of packs) {
      if (pack && pack.sources && pack.sources[id]) return pack.sources[id];
    }
    return null;
  }

  function sourceLinks(ids) {
    return (ids || []).map((id) => {
      const src = sourceById(id);
      if (!src) return esc(id);
      const when = src.publication_date || "publication date unknown";
      return `<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.title)}</a> <span class="d">(${esc(when)})</span>`;
    }).join("<br>");
  }

  function usStateName(site) {
    if (site.us_state) return site.us_state;
    const blob = `${site.location || ""} ${site.country || ""}`;
    const names = ((window.AIDC_US && window.AIDC_US.states) || []).map((item) => item.name).sort((a, b) => b.length - a.length);
    return names.find((name) => blob.includes(name)) || "";
  }

  function isUS(site) {
    return site.country === "United States";
  }

  function project(lat, lon) {
    const box = window.AIDC_US;
    const P = box && box.proj;
    if (!P) return { x: 0, y: 0 };
    const rad = Math.PI / 180;
    const phi = Number(lat) * rad;
    const lam = Number(lon) * rad;
    const rho = Math.sqrt(Math.max(P.C - 2 * P.nn * Math.sin(phi), 0)) / P.nn;
    const theta = P.nn * (lam - P.l0);
    const x = rho * Math.sin(theta);
    const y = P.rho0 - rho * Math.cos(theta);
    return { x: P.ox + (x - P.minx) * P.sc, y: P.oy + (P.maxy - y) * P.sc };
  }

  function defaultState() {
    return {
      usState: "all",
      operator: "all",
      status: "all",
      risk: "all",
      sizeOn: true,
      sizeBasis: "IT_load",
      sizeDelivery: "planned",
      sizeScope: "campus",
      riskOn: true,
      gridNote: false,
      hoverKey: "",
      returnState: "",
      panelState: "",
      opSort: { key: "op", dir: 1 },
      selectedId: null,
      clusterKey: null,
      level: null,
      mapFailed: false,
      sort: { key: "site_name", dir: 1 }
    };
  }

  function allSites() {
    const extra = window.AIDC_US_CAMPUSES && window.AIDC_US_CAMPUSES.sites;
    if (extra && extra.length) return extra;
    return (DATA() && DATA().sites) || [];
  }

  function otherSites() {
    return ((DATA() && DATA().sites) || []).filter((site) => !isUS(site));
  }

  function passes(site) {
    const logic = L();
    if (state.usState !== "all" && usStateName(site) !== state.usState) return false;
    if (state.operator !== "all" && (site.owner_group || site.operator) !== state.operator) return false;
    if (state.status !== "all" && logic.statusOf(site) !== state.status) return false;
    if (state.risk !== "all" && logic.riskOf(site) !== state.risk) return false;
    return true;
  }

  function itRecord(site) {
    const rows = (site.capacity_disclosures || []).filter((rec) => rec.basis === "IT_load" && rec.scope === "campus" && rec.value != null && rec.qualifier !== "qualitative_only");
    return rows.length === 1 ? rows[0] : null;
  }

  function usFiltered() {
    return allSites().filter((site) => isUS(site) && passes(site));
  }

  function pinRadius(site) {
    if (!state.sizeOn) return 11;
    const rec = itRecord(site);
    if (!rec) return 9;
    const values = usFiltered().map(itRecord).filter(Boolean).map((row) => row.value);
    const max = Math.max(...values, 1);
    return 8 + Math.sqrt(rec.value / max) * 18;
  }

  function hoverKeyFor(site) {
    return site.id;
  }

  function announce(text) {
    const live = root.querySelector("#map-live");
    if (live) live.textContent = text;
  }

  function setHover(key) {
    state.hoverKey = key || "";
    root.querySelectorAll("[data-hover]").forEach((node) => node.classList.toggle("lit", node.dataset.hover === state.hoverKey && !!state.hoverKey));
    const site = allSites().find((item) => item.id === state.hoverKey);
    const box = root.querySelector("#map-hover");
    if (!box) return;
    if (state.hoverKey.startsWith("cluster:")) {
      const key = state.hoverKey.slice("cluster:".length);
      const group = allSites().filter((site) => isUS(site) && L().clusterKey(site) === key);
      const place = group[0] && usStateName(group[0]);
      box.textContent = group.length
        ? `${group[0].coordinates.mapped_place}: ${group.map((item) => item.site_name).join(" · ")}. Click to choose one campus.`
        : "Shared city point.";
      root.querySelectorAll(".stp").forEach((path) => path.classList.toggle("on", path.dataset.state === place));
      return;
    }
    if (!site) {
      box.textContent = "Hover or focus a campus. The mark, the list row, and its state outline light together. Click opens the summary here, not a new browser window.";
      root.querySelectorAll(".stp").forEach((path) => path.classList.toggle("on", state.usState !== "all" && path.dataset.state === state.usState));
      return;
    }
    const logic = L();
    box.innerHTML = `<b>${esc(site.site_name)}</b> · ${esc(usStateName(site) || "state undisclosed")} · ${esc(site.operator || "Operator undisclosed")} · ${esc(logic.STATUS_LABEL[logic.statusOf(site)])} · ${esc(logic.RISK_LABEL[logic.riskOf(site)])}`;
    root.querySelectorAll(".stp").forEach((path) => path.classList.toggle("on", path.dataset.state === usStateName(site)));
  }

  function capacityLines(site) {
    const rows = site.capacity_disclosures || [];
    if (!rows.length) return "<p>Undisclosed / not verified</p>";
    return rows.map((rec) => {
      const value = rec.value == null ? "Undisclosed / not verified" : `${rec.value} ${rec.unit || ""}`.trim();
      const qual = rec.qualifier && rec.qualifier !== "exact" ? ` (${rec.qualifier.replaceAll("_", " ")})` : "";
      return `<li><b>${esc(value)}${esc(qual)}</b> — ${esc(rec.basis || "basis undisclosed")}, ${esc(rec.delivery_state || "delivery undisclosed")}, scope ${esc(rec.scope || "undisclosed")}. Phase: ${esc(rec.phase || "undisclosed")}. ${esc(rec.timeframe || "Timeframe undisclosed")}.<br><q>${esc(rec.source_wording || "")}</q>${rec.overlap_relation ? `<br>Overlap: ${esc(rec.overlap_relation)}` : ""}<br>${rec.measured_consumption ? "Marked as a measured reading." : "Not a measured consumption reading."}<br>${sourceLinks(rec.source_ids)}</li>`;
    }).join("");
  }

  function gpuLines(site) {
    const rows = site.gpu_disclosures || [];
    if (!rows.length) return "<p>Undisclosed / not verified. No installed GPU count is verified for this site.</p>";
    return `<ul>${rows.map((rec) => {
      const count = rec.count == null ? "Count undisclosed / not verified" : `${rec.qualifier === "more_than" ? "More than " : ""}${rec.count}`;
      return `<li>${esc(count)} · ${esc(rec.type || "type undisclosed")} · ${esc((rec.disclosure_state || "state undisclosed").replaceAll("_", " "))}${rec.scope ? ` · ${esc(rec.scope)}` : ""}${rec.timeframe ? ` · ${esc(rec.timeframe)}` : ""}${rec.note ? `<br>${esc(rec.note)}` : ""}<br>${sourceLinks(rec.source_ids)}</li>`;
    }).join("")}</ul>`;
  }

  function findingHtml(finding) {
    const logic = L();
    const label = logic.RISK_LABEL[finding.classification] || finding.classification;
    const dates = (finding.evidence_dates || []).map((d) => d || "date unknown").join(", ");
    return `<li><b>${esc(label)}</b> — ${esc(finding.summary || "")}<br>Scope: ${esc(finding.scope || "undisclosed")}. Confidence: ${esc(finding.confidence || "undisclosed")}. Evidence dates: ${esc(dates)}.<br>${sourceLinks(finding.source_ids)}</li>`;
  }

  function detailHtml(site) {
    const logic = L();
    const risk = site.risk_assessment || {};
    const asOf = (site.status && site.status.as_of_source_date) || "source date unknown";
    const checked = (site.status && site.status.checked_at_sgt) || (DATA() && DATA().checked_at_sgt) || "";
    const categories = Object.entries(risk.categories || {}).map(([key, value]) => {
      const assessment = (value && value.assessment) || "not_assessed";
      const readable = assessment === "screened_limited_unknown" ? "Limited screening — unresolved, not a finding of no risk" : assessment.replaceAll("_", " ");
      return `<li>${esc(key.replaceAll("_", " "))}: ${esc(readable)}</li>`;
    }).join("");
    const policies = (site.policy_risks || []).map((policy) => `<li>${esc(policy.jurisdiction)} — ${esc(policy.instrument)}. Effective ${esc(policy.effective_date || "unknown")}. Site action deadline ${esc(policy.site_action_deadline || "none stated")}. ${esc(policy.note || "")}<br>${sourceLinks(policy.source_ids)}</li>`).join("");
    const place = site.coordinates || {};
    return `<div class="site-detail">
      <p class="note">Settlement precision: ${esc((place.precision || "undisclosed").toString().replaceAll("_", " "))}. ${esc(place.note || "No city coordinate in this row.")} Mapped place: ${esc(place.mapped_place || "Undisclosed / not verified")}. Approximate, not a facility pin.</p>
      <h4>Who operates it, and who owns it</h4>
      <p>Operator: ${esc(logic.undisclosed(site.operator))}<br>Owner: ${esc(logic.undisclosed(site.owner))}<br>Partners: ${esc(logic.undisclosed(site.partners))}<br>Known tenants: ${esc(logic.undisclosed(site.known_tenants))}</p>
      <p class="note">A partner or memorandum is not a contracted tenant. Owner stays undisclosed when no source names one. Design capacity is not installed load.</p>
      <h4>Status</h4>
      <p>${esc(logic.STATUS_LABEL[logic.statusOf(site)])} as of source date ${esc(asOf)}. Checked ${esc(checked)}. Source date and check date are different. Status is not the risk class.</p>
      <h4>Milestones</h4>
      <ul>${(site.milestones || []).map((m) => `<li>${esc(m.description)} — source date ${esc(m.source_date || "unknown")}. ${esc(m.note || "")}</li>`).join("") || "<li>Undisclosed / not verified</li>"}</ul>
      <h4>Power — actual consumption, IT load, campus power, grid, generation</h4>
      <ul>${capacityLines(site)}</ul>
      <h4>Measured consumption</h4>
      <p>${site.measured_power_consumption == null ? "Undisclosed / not verified" : esc(site.measured_power_consumption)}</p>
      <h4>GPUs — installed count versus planned or design wording</h4>
      ${gpuLines(site)}
      <h4>Risk — ${esc(logic.RISK_LABEL[logic.riskOf(site)])}</h4>
      <p>Assessed ${esc(risk.assessed_at_sgt || "unknown")}. Confidence: ${esc(risk.confidence || "undisclosed")}. Scope: ${esc(risk.assessed_scope || "")}</p>
      <p>${risk.confirmed_cancelled_paused_delayed == null ? "No primary-confirmed whole-site cancellation, pause, or delay is recorded. That is not proof none exists. Election results are not a risk class." : esc(risk.confirmed_cancelled_paused_delayed)}</p>
      <ul>${(risk.findings || []).map(findingHtml).join("") || "<li>Not assessed</li>"}</ul>
      <h4>Screened categories</h4>
      <ul>${categories || "<li>Not assessed</li>"}</ul>
      <h4>Documented policy instruments</h4>
      ${policies ? `<ul>${policies}</ul>` : "<p>None populated for this site.</p>"}
      <h4>Caveats</h4>
      <ul>${(site.caveats || []).map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      <h4>Evidence</h4>
      <p>${sourceLinks(site.source_ids)}</p>
    </div>`;
  }

  function summaryBlock(site) {
    const logic = L();
    const asOf = (site.status && site.status.as_of_source_date) || "source date unknown";
    return `<h3 id="map-dialog-title">${esc(site.site_name)}</h3>
      <p>${esc(usStateName(site) || site.location)} · ${esc(logic.undisclosed(site.operator))}</p>
      <p><span class="badge st-${esc(logic.statusOf(site))}">${esc(logic.STATUS_LABEL[logic.statusOf(site)])}</span>
         <span class="badge rk-${esc(logic.riskOf(site))}">${esc(logic.RISK_LABEL[logic.riskOf(site)])}</span></p>
      <p class="note">Level 2 summary. Status as of source date ${esc(asOf)}. Owner: ${esc(logic.undisclosed(site.owner))}. Tenants: ${esc(logic.undisclosed(site.known_tenants))}. City reference only.</p>
      <button type="button" id="map-expand">Open full site detail</button>`;
  }

  function statePanelHtml() {
    const name = state.panelState || state.usState;
    const rows = allSites().filter((site) => isUS(site) && usStateName(site) === name && passes(site));
    const logic = L();
    return `<h3 id="map-dialog-title">${esc(name || "State")}</h3>
      <p>${rows.length} campus record${rows.length === 1 ? "" : "s"} in this selected sample. This is not a statewide inventory. Power figures are listed on each campus and are not added together.</p>
      <ul class="chooser">${rows.map((site) => `<li><button type="button" data-open="${esc(site.id)}">${esc(site.site_name)} — ${esc(logic.undisclosed(site.operator))}; ${esc(logic.STATUS_LABEL[logic.statusOf(site)])}; ${esc(logic.RISK_LABEL[logic.riskOf(site)])}</button></li>`).join("") || "<li>No campus in this sample matches the other dropdowns.</li>"}</ul>`;
  }

  function modalHtml() {
    if (state.level === "state") return statePanelHtml();
    if (state.level === "chooser" && state.clusterKey) {
      const group = usFiltered().filter((site) => L().clusterKey(site) === state.clusterKey);
      return `<h3 id="map-dialog-title">${esc(group[0] ? group[0].coordinates.mapped_place : "Sites")} — choose a campus</h3>
        <p>These campuses share one coarse city coordinate. Choosing one does not merge their records.</p>
        <ul class="chooser">${group.map((site) => `<li><button type="button" data-choose="${esc(site.id)}">${esc(site.site_name)} — ${esc(site.operator)}; ${esc(L().STATUS_LABEL[L().statusOf(site)])}</button></li>`).join("")}</ul>`;
    }
    const site = allSites().find((item) => item.id === state.selectedId);
    if (!site) return "";
    if (state.level === "detail") {
      const head = summaryBlock(site).replace("Level 2 summary. ", "").replace(/<button type="button" id="map-expand">[\s\S]*<\/button>/, "");
      return `${head}<div id="map-deep">${detailHtml(site)}</div>`;
    }
    return summaryBlock(site);
  }

  function openModal(kind, id, cluster) {
    state.level = kind;
    state.selectedId = id || null;
    state.clusterKey = cluster || null;
    draw();
    const dialog = root.querySelector("#map-modal");
    if (dialog) dialog.hidden = false;
    const title = root.querySelector("#map-dialog-title");
    if (title) title.focus();
  }

  function closeModal(restore) {
    const focusId = state.selectedId;
    const focusCluster = state.clusterKey;
    state.level = null;
    state.selectedId = null;
    state.clusterKey = null;
    state.returnState = "";
    draw();
    const dialog = root.querySelector("#map-modal");
    if (dialog) dialog.hidden = true;
    if (!restore) return;
    const next = (focusId && root.querySelector(`[data-open="${CSS.escape(focusId)}"]`))
      || (focusCluster && root.querySelector(`[data-cluster="${CSS.escape(focusCluster)}"]`))
      || lastFocus;
    if (next) next.focus();
  }

  function backModal() {
    if (state.level === "detail") {
      state.level = "summary";
      draw();
      const title = root.querySelector("#map-dialog-title");
      if (title) title.focus();
      return;
    }
    if (state.level === "summary" && state.clusterKey) {
      state.level = "chooser";
      state.selectedId = null;
      draw();
      const title = root.querySelector("#map-dialog-title");
      if (title) title.focus();
      return;
    }
    if (state.level === "summary" && state.returnState) {
      state.level = "state";
      state.panelState = state.returnState;
      state.selectedId = null;
      state.returnState = "";
      draw();
      const title = root.querySelector("#map-dialog-title");
      if (title) title.focus();
      return;
    }
    closeModal(true);
  }

  function handleEscape() {
    if (!state || !state.level) return false;
    if (state.level === "detail" || (state.level === "summary" && state.clusterKey)) backModal();
    else closeModal(true);
    return true;
  }

  function options(values, current, allLabel) {
    return [`<option value="all"${current === "all" ? " selected" : ""}>${esc(allLabel)}</option>`]
      .concat(values.map((value) => `<option value="${esc(value)}"${value === current ? " selected" : ""}>${esc(value)}</option>`))
      .join("");
  }

  function legendHtml() {
    const logic = L();
    return `<div class="map-legend">
      <p><b>Status</b> uses shape plus a word. Fill is the same indigo family and is partly transparent so overlapping marks stay visible.</p>
      <ul>${Object.keys(logic.STATUS_LABEL).map((key) => `<li><i class="swatch st-${key}"></i>${esc(logic.STATUS_LABEL[key])}</li>`).join("")}</ul>
      <p><b>Risk</b> is a separate letter, not a state color. A dependency is not a delay. Limited scope is not a guarantee. States are not shaded by election results.</p>
      <ul>${Object.entries(logic.RISK_LABEL).map(([key, label]) => `<li><i class="swatch rk rk-${key}">${RISK_MARK[key] || "?"}</i>${esc(label)}</li>`).join("")}</ul>
      <p id="size-legend">${state.sizeOn
        ? "Circle area shows only Epoch timeline IT power (MW), one campus-scope figure. Facility power is not included. Campuses without that field stay small and are not zeros."
        : "Circle area does not represent capacity. Every campus uses the same size."}</p>
    </div>`;
  }

  function listHtml() {
    const logic = L();
    const rows = usFiltered();
    const mapped = rows.filter((site) => site.coordinates && site.coordinates.lat != null);
    const missing = rows.filter((site) => !(site.coordinates && site.coordinates.lat != null));
    const groups = logic.clusterSites(mapped);
    const items = groups.map((group) => {
      if (group.length > 1) {
        const key = `cluster:${logic.clusterKey(group[0])}`;
        return `<li><button type="button" data-hover="${esc(key)}" data-cluster="${esc(logic.clusterKey(group[0]))}"><b>${esc(group[0].coordinates.mapped_place)}</b> · ${group.length} campuses<small>${group.map((site) => esc(site.site_name)).join("<br>")}</small></button></li>`;
      }
      const site = group[0];
      return `<li><button type="button" data-hover="${esc(site.id)}" data-open="${esc(site.id)}"><b>${esc(site.site_name)}</b><small>${esc(usStateName(site))} · ${esc(site.owner_group || site.operator || "Owner undisclosed")} · ${esc(logic.STATUS_LABEL[logic.statusOf(site)])} · ${esc(logic.RISK_LABEL[logic.riskOf(site)])}</small></button></li>`;
    }).join("");
    const extra = missing.map((site) => `<li><button type="button" data-open="${esc(site.id)}"><b>${esc(site.site_name)}</b><small>City coordinate undisclosed · ${esc(logic.STATUS_LABEL[logic.statusOf(site)])}</small></button></li>`).join("");
    if (!items && !extra) return `<p class="note">No US campuses match these dropdowns.</p>`;
    return `<ul class="map-list">${items}${extra}</ul>`;
  }

  function outsideHtml() {
    const logic = L();
    const rows = otherSites();
    return `<h3>Outside this USA map</h3>
      <p class="note">These sourced campuses stay in the dataset. They are not drawn here, and leaving them off is not a statement that they do not exist. Same summary and detail window.</p>
      <ul class="map-list">${rows.map((site) => `<li><button type="button" data-open="${esc(site.id)}"><b>${esc(site.site_name)}</b><small>${esc(site.location)}, ${esc(site.country)} · ${esc(logic.STATUS_LABEL[logic.statusOf(site)])} · ${esc(logic.RISK_LABEL[logic.riskOf(site)])}</small></button></li>`).join("")}</ul>`;
  }

  function tableHtml() {
    const logic = L();
    const rows = usFiltered().slice().sort((a, b) => String(a.site_name).localeCompare(String(b.site_name)) * state.sort.dir);
    return `<table id="site-table">
      <caption>US campuses in this view, same dropdowns as the map. ${rows.length} shown. Not a census.</caption>
      <thead><tr><th>Site</th><th>State</th><th>Operator</th><th>Owner</th><th>Status</th><th>Risk</th><th>Evidence</th></tr></thead>
      <tbody>${rows.map((site) => `<tr class="${state.hoverKey === site.id ? "lit" : ""}" data-hover="${esc(site.id)}">
        <td><button type="button" class="linkish" data-open="${esc(site.id)}" data-hover="${esc(site.id)}">${esc(site.site_name)}</button></td>
        <td>${esc(usStateName(site) || "Undisclosed")}</td>
        <td>${esc(logic.undisclosed(site.operator))}</td>
        <td>${esc(logic.undisclosed(site.owner))}</td>
        <td>${esc(logic.STATUS_LABEL[logic.statusOf(site)])}</td>
        <td>${esc(logic.RISK_LABEL[logic.riskOf(site)])}</td>
        <td><details><summary>Capacity, GPUs, evidence</summary>${detailHtml(site)}</details></td>
      </tr>`).join("")}</tbody></table>`;
  }

  function drawPins(stage) {
    const logic = L();
    const box = window.AIDC_US || { w: 1000, h: 640 };
    stage.querySelectorAll(".pin").forEach((node) => node.remove());
    logic.clusterSites(usFiltered().filter((site) => site.coordinates && site.coordinates.lat != null)).forEach((group) => {
      const point = project(group[0].coordinates.lat, group[0].coordinates.lon);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pin";
      const radius = group.length > 1 ? 16 : pinRadius(group[0]);
      button.style.left = `${(point.x / box.w) * 100}%`;
      button.style.top = `${(point.y / box.h) * 100}%`;
      button.style.width = `${radius * 2}px`;
      button.style.height = `${radius * 2}px`;
      if (group.length > 1) {
        const key = `cluster:${logic.clusterKey(group[0])}`;
        button.classList.add("cluster");
        button.dataset.cluster = logic.clusterKey(group[0]);
        button.dataset.hover = key;
        button.setAttribute("aria-label", `${group[0].coordinates.mapped_place}. ${group.length} campuses: ${group.map((site) => site.site_name).join("; ")}. Open chooser in this page. Approximate city location, not a facility pin.`);
        button.textContent = String(group.length);
      } else {
        const site = group[0];
        const status = logic.statusOf(site);
        const risk = logic.riskOf(site);
        button.classList.add(`st-${status}`);
        button.dataset.open = site.id;
        button.dataset.hover = site.id;
        const mark = state.riskOn ? `<i class="riskmark" aria-hidden="true">${RISK_MARK[risk] || "?"}</i>` : "";
        button.innerHTML = `<span class="pinshape" aria-hidden="true"></span>${mark}`;
        const sized = state.sizeOn ? logic.sizingMatch(site, state.sizeBasis, state.sizeDelivery, state.sizeScope) : null;
        const sizeNote = !state.sizeOn ? "Equal transparent size, not capacity." : sized && sized.sized ? `Sized at ${sized.mw} MW on the selected basis only.` : "Default size: not on the selected basis.";
        button.setAttribute("aria-label", `${site.site_name}. ${site.operator}. ${usStateName(site)}. Status ${logic.STATUS_LABEL[status]}. Risk ${logic.RISK_LABEL[risk]}. ${sizeNote} Open summary in this page.`);
      }
      if (state.hoverKey && button.dataset.hover === state.hoverKey) button.classList.add("lit");
      else if (state.hoverKey) button.classList.add("dim");
      stage.appendChild(button);
    });
  }

  function operatorHtml() {
    const logic = L();
    const us = allSites().filter(isUS);
    const rows = [...new Set(us.map((site) => site.owner_group || site.operator).filter(Boolean))].map((op) => {
      const mine = us.filter((site) => (site.owner_group || site.operator) === op);
      return {
        op,
        n: mine.length,
        states: [...new Set(mine.map(usStateName).filter(Boolean))].sort().join(", "),
        statuses: [...new Set(mine.map((site) => logic.STATUS_LABEL[logic.statusOf(site)]))].join(", "),
        risks: [...new Set(mine.map((site) => logic.RISK_LABEL[logic.riskOf(site)]))].join(", "),
        owners: [...new Set(mine.map((site) => logic.undisclosed(site.owner)))].join("; ")
      };
    });
    const { key, dir } = state.opSort;
    rows.sort((a, b) => {
      const av = key === "n" ? a.n : a[key];
      const bv = key === "n" ? b.n : b[key];
      return (typeof av === "number" ? av - bv : String(av).localeCompare(String(bv))) * dir;
    });
    const mark = (col) => state.opSort.key === col ? (state.opSort.dir < 0 ? " ↓" : " ↑") : "";
    return `<h3>Who operates the US campuses in this sample</h3>
      <p class="note">One row per owner group in this US sample. Owner stays undisclosed when Epoch or the primary note does not name a separate owner. No gigawatt total is shown here, because IT power and facility power are different bases. Choosing a row filters the map.</p>
      <table id="op-table">
        <thead><tr>
          <th><button type="button" data-opsort="op">Operator${mark("op")}</button></th>
          <th><button type="button" data-opsort="n">Campuses${mark("n")}</button></th>
          <th>States</th><th>Status labels</th><th>Risk labels</th><th>Owner</th>
        </tr></thead>
        <tbody>${rows.map((row) => `<tr class="${state.operator === row.op ? "on" : ""}">
          <td><button type="button" class="linkish" data-operator="${esc(row.op)}">${esc(row.op)}</button></td>
          <td>${row.n}</td><td>${esc(row.states)}</td><td>${esc(row.statuses)}</td><td>${esc(row.risks)}</td><td>${esc(row.owners)}</td>
        </tr>`).join("")}</tbody>
      </table>`;
  }

  function kpiHtml() {
    const shown = usFiltered();
    const it = (site) => { const rec = itRecord(site); return rec && rec.basis === "IT_load" ? rec.value : null; };
    const sum = (list) => list.reduce((acc, site) => acc + (it(site) || 0), 0);
    const nOf = (stage) => shown.filter((site) => L().statusOf(site) === stage).length;
    const op = shown.filter((site) => L().statusOf(site) === "operating" && it(site) != null);
    const pipe = shown.filter((site) => ["under_construction", "planned"].includes(L().statusOf(site)) && it(site) != null);
    const blocked = nOf("blocked");
    return [
      ["US campuses in view", String(shown.length), "Selected sample, not a census"],
      ["Operating IT power", `${Math.round(sum(op)).toLocaleString("en-US")} MW`, `Sum of Epoch IT power only, ${op.length} operating campuses with that field. Not facility power and not a meter reading.`],
      ["Construction or planned IT power", `${Math.round(sum(pipe)).toLocaleString("en-US")} MW`, `${pipe.length} campuses. Under construction and planned only. Mixed sites are excluded so they are not counted twice.`],
      ["Blocked in this reading", String(blocked), "Only if the latest Epoch sentence says cancelled, paused, or blocked. Zero is not proof none exist."]
    ].map((card) => `<div class="kpi"><div class="l">${esc(card[0])}</div><div class="v">${esc(card[1])}</div><div class="n">${esc(card[2])}</div></div>`).join("");
  }

  function chipHtml() {
    const us = allSites().filter(isUS);
    const groups = [...new Set(us.map((site) => site.owner_group || "Other"))].sort();
    return [`<button type="button" data-chip="all" aria-pressed="${state.operator === "all"}">All owners</button>`]
      .concat(groups.map((name) => `<button type="button" data-chip="${esc(name)}" aria-pressed="${state.operator === name}">${esc(name)} <span class="d">${us.filter((site) => (site.owner_group || "Other") === name).length}</span></button>`))
      .join("");
  }

  function draw() {
    const us = allSites().filter(isUS);
    const shown = usFiltered();
    announce(`${shown.length} of ${us.length} US campuses`);
    const count = root.querySelector("#map-count");
    if (count) count.textContent = `${shown.length} of ${us.length} US campuses in this sample match the dropdowns. Not a national census. ${us.filter((site) => !site.coordinates).length} have no city coordinate and are omitted from the map.`;
    const kpis = root.querySelector("#map-kpis");
    if (kpis) kpis.innerHTML = kpiHtml();
    const chips = root.querySelector("#map-chips");
    if (chips) chips.innerHTML = chipHtml();
    const list = root.querySelector("#map-list");
    if (list) list.innerHTML = listHtml();
    const legend = root.querySelector("#map-legend");
    if (legend) legend.innerHTML = legendHtml();
    const table = root.querySelector("#map-table-wrap");
    if (table) table.innerHTML = tableHtml();
    const outside = root.querySelector("#map-outside");
    if (outside) outside.innerHTML = outsideHtml();
    const ops = root.querySelector("#map-ops");
    if (ops) ops.innerHTML = operatorHtml();
    const gap = root.querySelector("#grid-gap");
    if (gap) gap.hidden = !state.gridNote;
    const sheet = root.querySelector("#map-sheet");
    const dialog = root.querySelector("#map-modal");
    if (sheet) sheet.innerHTML = state.level ? modalHtml() : "";
    if (dialog) dialog.hidden = !state.level;
    const stage = root.querySelector(".mapstage");
    const failed = !window.AIDC_US || !window.AIDC_US.states || state.mapFailed;
    const svg = stage.querySelector("svg");
    const fallback = root.querySelector("#map-fallback");
    if (failed) {
      if (svg) svg.hidden = true;
      if (fallback) fallback.hidden = false;
    } else {
      if (svg) svg.hidden = false;
      if (fallback) fallback.hidden = true;
      svg.querySelectorAll(".stp").forEach((path) => {
        const active = (state.usState !== "all" && path.dataset.state === state.usState)
          || allSites().some((site) => site.id === state.hoverKey && usStateName(site) === path.dataset.state);
        path.classList.toggle("on", active);
      });
      drawPins(stage);
    }
    setHover(state.hoverKey);
  }

  function mount(selector) {
    root = document.querySelector(selector);
    if (!root || !DATA() || !L()) return;
    state = defaultState();
    if (window.AIDC_MAP_FORCE_FAIL) state.mapFailed = true;
    const logic = L();
    const us = allSites().filter(isUS);
    const groups = [...new Set(us.map((site) => site.owner_group || site.operator).filter(Boolean))].sort();
    const states = [...new Set(us.map(usStateName).filter(Boolean))].sort();
    const box = window.AIDC_US || { w: 1000, h: 640, states: [] };
    const paths = (box.states || []).map((item) => `<path class="stp" data-state="${esc(item.name)}" d="${item.d}"><title>${esc(item.name)}</title></path>`).join("");
    root.innerHTML = `<header class="maphead">
        <h2 id="map-h">US data centers — who operates them, and what risk is documented</h2>
        <p class="note">United States campuses from the Epoch AI data-centers table retrieved 9 Nov 2026, with the earlier primary-sourced Abilene, Fairwater, and Hyperion records kept where they overlap an Epoch name. This is a selected sample, not a census, and not the reference map’s owner colors or state-hostility shading. Dots use Epoch IT power only. City coordinates are approximate. Census outlines via us-atlas, public domain.</p>
        <p class="note">Documented policy events, not an election-risk layer: Ballotpedia counted 40 of 41 local measures on 3 Nov 2026 as favoring limits. The Texas Tribune reported on 4 Nov 2026 that governor-elect Hinojosa pledged a moratorium that is not enacted, and described a separate Abbott permitting freeze. Those facts are not applied as a campus cancellation.</p>
      </header>
      <div class="maptools">
        <label>State <select id="f-state">${options(states, "all", "All states in this sample")}</select></label>
        <label>Owner <select id="f-operator">${options(groups, "all", "All owners")}</select></label>
        <label>Status <select id="f-status"><option value="all">All statuses</option>${Object.entries(logic.STATUS_LABEL).map(([key, label]) => `<option value="${key}">${esc(label)}</option>`).join("")}</select></label>
        <label>Risk <select id="f-risk"><option value="all">All risk classes</option>${Object.entries(logic.RISK_LABEL).map(([key, label]) => `<option value="${key}">${esc(label)}</option>`).join("")}</select></label>
        <label>Circle size <select id="f-size"><option value="equal">Equal area — not capacity</option><option value="basis" selected>Size by Epoch IT power only</option></select></label>
        <span id="size-controls" hidden>
          <label>Basis <select id="s-basis">${BASIS.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("")}</select></label>
          <label>Delivery <select id="s-delivery">${DELIVERY.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("")}</select></label>
          <label>Scope <select id="s-scope">${SCOPE.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("")}</select></label>
        </span>
        <label>Risk marks <select id="f-riskmarks"><option value="on">Show risk letters</option><option value="off">Hide risk letters</option></select></label>
        <label>Power / grid geography <select id="f-grid"><option value="off">Not drawn</option><option value="on">Show coverage gap</option></select></label>
        <button type="button" id="map-reset">Reset filters</button>
      </div>
      <p id="map-kpis" class="kpis"></p>
      <div id="map-chips" class="maptools" role="group" aria-label="Owner groups"></div>
      <p id="map-count" class="note"></p>
      <p id="map-hover" class="map-hover" aria-live="polite"></p>
      <div id="grid-gap" class="gap" hidden>Power and grid geography is unavailable. This dataset has no sourced public substation, transmission-line, or plant coordinates. Nothing is drawn. Figures stay in the site detail and are not compared across bases.</div>
      <div id="map-fallback" class="gap" hidden>Map drawing is unavailable. The table below has the same US campuses, filters, and sources.</div>
      <div class="maplayout">
        <div class="mapstage" role="group" aria-label="United States map of selected campuses">
          <svg viewBox="0 0 ${box.w} ${box.h}" aria-hidden="true"><rect class="ocean" width="${box.w}" height="${box.h}"></rect>${paths}</svg>
          <div id="map-tip" class="map-tip" hidden></div>
        </div>
        <div>
          <h3>Campuses in view</h3>
          <div id="map-list"></div>
        </div>
      </div>
      <div id="map-legend"></div>
      <section id="map-ops"></section>
      <div id="map-live" class="sr" aria-live="polite"></div>
      <div id="map-table-wrap"></div>
      <section id="map-outside"></section>
      <div id="map-modal" class="map-modal" hidden>
        <div id="map-sheet" class="map-sheet" role="dialog" aria-modal="true" aria-labelledby="map-dialog-title" tabindex="-1"></div>
      </div>`;
    root.addEventListener("change", (event) => {
      const target = event.target;
      if (target.id === "f-state") state.usState = target.value;
      if (target.id === "f-operator") state.operator = target.value;
      if (target.id === "f-status") state.status = target.value;
      if (target.id === "f-risk") state.risk = target.value;
      if (target.id === "f-size") {
        state.sizeOn = target.value === "basis";
        root.querySelector("#size-controls").hidden = !state.sizeOn;
      }
      if (target.id === "s-basis") state.sizeBasis = target.value;
      if (target.id === "s-delivery") state.sizeDelivery = target.value;
      if (target.id === "s-scope") state.sizeScope = target.value;
      if (target.id === "f-riskmarks") state.riskOn = target.value === "on";
      if (target.id === "f-grid") state.gridNote = target.value === "on";
      draw();
    });
    root.addEventListener("click", (event) => {
      if (event.target.id === "map-modal") { closeModal(true); return; }
      const statePath = event.target.closest(".stp");
      if (statePath && statePath.dataset.state) {
        lastFocus = statePath;
        state.usState = statePath.dataset.state;
        state.panelState = statePath.dataset.state;
        const select = root.querySelector("#f-state");
        if (select) select.value = state.usState;
        openModal("state", null, null);
        return;
      }
      const button = event.target.closest("button");
      if (!button || !root.contains(button)) return;
      if (button.dataset.chip) {
        state.operator = button.dataset.chip;
        const select = root.querySelector("#f-operator");
        if (select) select.value = state.operator;
        draw();
        return;
      }
      if (button.id === "map-reset") {
        state.usState = state.operator = state.status = state.risk = "all";
        state.sizeOn = true;
        state.riskOn = true;
        state.gridNote = false;
        ["f-state", "f-operator", "f-status", "f-risk"].forEach((id) => { root.querySelector(`#${id}`).value = "all"; });
        root.querySelector("#f-size").value = "basis";
        root.querySelector("#f-riskmarks").value = "on";
        root.querySelector("#f-grid").value = "off";
        root.querySelector("#size-controls").hidden = true;
        draw();
        return;
      }
      if (button.id === "map-expand") { state.level = "detail"; draw(); root.querySelector("#map-dialog-title").focus(); return; }
      if (button.id === "map-back") { backModal(); return; }
      if (button.dataset.opsort) {
        if (state.opSort.key === button.dataset.opsort) state.opSort.dir *= -1;
        else state.opSort = { key: button.dataset.opsort, dir: 1 };
        draw();
        return;
      }
      if (button.dataset.operator) {
        state.operator = button.dataset.operator;
        const select = root.querySelector("#f-operator");
        if (select) select.value = state.operator;
        root.querySelector(".mapstage").scrollIntoView({ block: "nearest" });
        draw();
        return;
      }
      if (button.dataset.cluster && !button.dataset.open) {
        lastFocus = button;
        openModal("chooser", null, button.dataset.cluster);
        return;
      }
      if (button.dataset.choose) {
        state.selectedId = button.dataset.choose;
        state.level = "summary";
        draw();
        root.querySelector("#map-dialog-title").focus();
        return;
      }
      if (button.dataset.open) {
        lastFocus = button.classList.contains("pin") || button.classList.contains("linkish") || button.closest(".map-list") || button.closest(".chooser") ? button : lastFocus;
        if (state.level !== "state") state.returnState = "";
        else state.returnState = state.panelState;
        openModal("summary", button.dataset.open, null);
      }
    });
    root.addEventListener("mouseover", (event) => {
      const node = event.target.closest("[data-hover]");
      if (node && root.contains(node)) {
        setHover(node.dataset.hover);
        const tip = root.querySelector("#map-tip");
        if (tip && node.classList.contains("pin")) {
          const site = allSites().find((item) => item.id === node.dataset.hover);
          const logic = L();
          tip.hidden = false;
          tip.innerHTML = site
            ? `<b>${esc(site.site_name)}</b><br>${esc(usStateName(site))} · ${esc(logic.STATUS_LABEL[logic.statusOf(site)])}<br>${esc(logic.RISK_LABEL[logic.riskOf(site)])}`
            : `<b>${esc(node.getAttribute("aria-label") || "Campuses")}</b>`;
          const stage = root.querySelector(".mapstage").getBoundingClientRect();
          const box = node.getBoundingClientRect();
          tip.style.left = `${Math.max(8, box.left - stage.left)}px`;
          tip.style.top = `${Math.max(8, box.top - stage.top - 54)}px`;
        }
      }
      const statePath = event.target.closest(".stp");
      if (statePath && root.contains(statePath)) {
        const name = statePath.dataset.state;
        const n = allSites().filter((site) => isUS(site) && usStateName(site) === name).length;
        const box = root.querySelector("#map-hover");
        if (box) box.textContent = n
          ? `${name}: ${n} campus record${n === 1 ? "" : "s"} in this sample. Click the state for the list.`
          : `${name}: no campus in this selected sample.`;
        root.querySelectorAll(".stp").forEach((path) => path.classList.toggle("lit", path === statePath));
      }
    });
    root.addEventListener("mouseout", (event) => {
      const node = event.target.closest("[data-hover]");
      const tip = root.querySelector("#map-tip");
      if (tip && event.target.classList && event.target.classList.contains("pin")) tip.hidden = true;
      if (!node) return;
      const next = event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest("[data-hover]");
      if (!next || next.dataset.hover !== node.dataset.hover) setHover("");
    });
    root.addEventListener("focusin", (event) => {
      const node = event.target.closest("[data-hover]");
      if (node) setHover(node.dataset.hover);
    });
    root.addEventListener("focusout", (event) => {
      if (!root.contains(event.relatedTarget)) setHover("");
    });
    root.querySelector("#map-modal").addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.stopPropagation(); handleEscape(); }
    });
    const sheet = root.querySelector("#map-sheet");
    const bar = document.createElement("div");
    bar.className = "zbar";
    const back = document.createElement("button");
    back.type = "button";
    back.id = "map-back";
    back.className = "back";
    back.textContent = "← Back";
    const closer = document.createElement("button");
    closer.type = "button";
    closer.className = "back";
    closer.textContent = "Close";
    closer.addEventListener("click", () => closeModal(true));
    bar.append(back, closer);
    const observer = new MutationObserver(() => {
      if (state.level && sheet.firstChild !== bar) sheet.prepend(bar);
    });
    observer.observe(sheet, { childList: true });
    draw();
  }

  window.AIDCMap = { mount, handleEscape };
})();
