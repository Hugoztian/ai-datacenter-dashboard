/* Selected-site map. Self-contained: land outline is inlined; no tile server. */
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
  const DELIVERY = [
    ["planned", "Planned"],
    ["energized", "Energized"]
  ];
  const SCOPE = [
    ["campus", "Campus"],
    ["each of two buildings", "Each of two buildings"],
    ["per building", "Per building"]
  ];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function sourceById(id) {
    const sources = (DATA() && DATA().sources) || {};
    return sources[id] || null;
  }

  function sourceLinks(ids) {
    return (ids || [])
      .map((id) => {
        const src = sourceById(id);
        if (!src) return esc(id);
        const when = src.publication_date || "publication date unknown";
        return `<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.title)}</a> <span class="d">(${esc(when)})</span>`;
      })
      .join("<br>");
  }

  function defaultState() {
    return {
      status: { operating: true, under_construction: true, planned: true, mixed: true, unknown: true },
      riskOn: false,
      risk: "all",
      operator: "all",
      region: "all",
      basisFilter: "all",
      sizeOn: false,
      sizeBasis: "IT_load",
      sizeDelivery: "planned",
      sizeScope: "campus",
      gridOn: false,
      selectedId: null,
      clusterKey: null,
      expanded: false,
      sort: { key: "site_name", dir: 1 },
      mapFailed: false
    };
  }

  function sites() {
    return (DATA() && DATA().sites) || [];
  }

  function passes(site) {
    const logic = L();
    if (!state.status[logic.statusOf(site)]) return false;
    if (state.risk !== "all" && logic.riskOf(site) !== state.risk) return false;
    if (state.operator !== "all" && site.operator !== state.operator) return false;
    if (state.region !== "all" && site.region !== state.region) return false;
    if (state.basisFilter !== "all") {
      const has = (site.capacity_disclosures || []).some((rec) => rec.basis === state.basisFilter);
      if (!has) return false;
    }
    return true;
  }

  function filtered() {
    return sites().filter(passes);
  }

  function pinRadius(site) {
    if (!state.sizeOn) return 11;
    const match = L().sizingMatch(site, state.sizeBasis, state.sizeDelivery, state.sizeScope);
    if (!match.sized) return 11;
    const peers = filtered()
      .map((item) => L().sizingMatch(item, state.sizeBasis, state.sizeDelivery, state.sizeScope))
      .filter((item) => item.sized);
    const max = Math.max(...peers.map((item) => item.mw));
    if (!max) return 11;
    const scale = Math.sqrt(match.mw / max);
    return 8 + scale * 14;
  }

  function announce(text) {
    const live = root.querySelector("#map-live");
    if (live) live.textContent = text;
  }

  function closePanel(restore) {
    const focusId = state.selectedId;
    const focusCluster = state.clusterKey;
    state.selectedId = null;
    state.clusterKey = null;
    state.expanded = false;
    draw();
    if (!restore) return;
    const next = (focusId && root.querySelector(`[data-open="${CSS.escape(focusId)}"]`))
      || (focusCluster && root.querySelector(`[data-cluster="${CSS.escape(focusCluster)}"]`))
      || lastFocus;
    if (next) next.focus();
  }

  function handleEscape() {
    if (!state || (!state.selectedId && !state.clusterKey)) return false;
    closePanel(true);
    return true;
  }

  function capacityLines(site) {
    const rows = site.capacity_disclosures || [];
    if (!rows.length) return "<p>Undisclosed / not verified</p>";
    return rows
      .map((rec) => {
        const value = rec.value == null ? "Undisclosed / not verified" : `${rec.value} ${rec.unit || ""}`.trim();
        const qual = rec.qualifier && rec.qualifier !== "exact" ? ` (${rec.qualifier.replaceAll("_", " ")})` : "";
        return `<li><b>${esc(value)}${esc(qual)}</b> — ${esc(rec.basis || "basis undisclosed")}, ${esc(rec.delivery_state || "delivery undisclosed")}, scope ${esc(rec.scope || "undisclosed")}. Phase: ${esc(rec.phase || "undisclosed")}. ${esc(rec.timeframe || "Timeframe undisclosed")}.<br><q>${esc(rec.source_wording || "")}</q>${rec.overlap_relation ? `<br>Overlap: ${esc(rec.overlap_relation)}` : ""}${rec.measured_consumption ? "" : "<br>Not a measured consumption reading."}<br>${sourceLinks(rec.source_ids)}</li>`;
      })
      .join("");
  }

  function gpuLines(site) {
    const rows = site.gpu_disclosures || [];
    if (!rows.length) return "<p>Undisclosed / not verified. No installed GPU count is verified for this site.</p>";
    return `<ul>${rows
      .map((rec) => {
        const count = rec.count == null ? "Count undisclosed / not verified" : `${rec.qualifier === "more_than" ? "More than " : ""}${rec.count}`;
        return `<li>${esc(count)} · ${esc(rec.type || "type undisclosed")} · ${esc((rec.disclosure_state || "state undisclosed").replaceAll("_", " "))}${rec.scope ? ` · ${esc(rec.scope)}` : ""}${rec.timeframe ? ` · ${esc(rec.timeframe)}` : ""}${rec.note ? `<br>${esc(rec.note)}` : ""}<br>${sourceLinks(rec.source_ids)}</li>`;
      })
      .join("")}</ul>`;
  }

  function findingHtml(finding) {
    const logic = L();
    const label = logic.RISK_LABEL[finding.classification] || finding.classification;
    const dates = (finding.evidence_dates || []).map((d) => d || "date unknown").join(", ");
    return `<li><b>${esc(label)}</b> — ${esc(finding.summary || "")}<br>Scope: ${esc(finding.scope || "undisclosed")}. Confidence: ${esc(finding.confidence || "undisclosed")}. Evidence dates: ${esc(dates)}.<br>${sourceLinks(finding.source_ids)}</li>`;
  }

  function detailHtml(site) {
    const logic = L();
    const status = logic.STATUS_LABEL[logic.statusOf(site)];
    const risk = site.risk_assessment || {};
    const riskLabel = logic.RISK_LABEL[logic.riskOf(site)];
    const asOf = (site.status && site.status.as_of_source_date) || "source date unknown";
    const checked = (site.status && site.status.checked_at_sgt) || (DATA() && DATA().checked_at_sgt) || "";
    const categories = Object.entries(risk.categories || {})
      .map(([key, value]) => {
        const assessment = (value && value.assessment) || "not_assessed";
        const readable = assessment === "screened_limited_unknown"
          ? "Limited screening — unresolved, not a finding of no risk"
          : assessment.replaceAll("_", " ");
        return `<li>${esc(key.replaceAll("_", " "))}: ${esc(readable)}</li>`;
      })
      .join("");
    const policies = (site.policy_risks || [])
      .map((policy) => `<li>${esc(policy.jurisdiction)} — ${esc(policy.instrument)}. Effective ${esc(policy.effective_date || "unknown")}. Site action deadline ${esc(policy.site_action_deadline || "none stated")}. ${esc(policy.note || "")}<br>${sourceLinks(policy.source_ids)}</li>`)
      .join("");
    return `<div class="site-detail">
      <p class="note">Settlement precision: ${esc(site.coordinates.precision || "").replaceAll("_", " ")}. ${esc(site.coordinates.note || "")} Mapped place: ${esc(site.coordinates.mapped_place)}.</p>
      <h4>Operator, owner, partners, tenants</h4>
      <p>Operator: ${esc(logic.undisclosed(site.operator))}<br>Owner: ${esc(logic.undisclosed(site.owner))}<br>Partners: ${esc(logic.undisclosed(site.partners))}<br>Known tenants: ${esc(logic.undisclosed(site.known_tenants))}</p>
      <p class="note">A partner or memorandum is not a contracted tenant. Design capacity is not installed load.</p>
      <h4>Status</h4>
      <p>${esc(status)} as of source date ${esc(asOf)}. Checked ${esc(checked)}. Source date and check date are different.</p>
      <h4>Milestones</h4>
      <ul>${(site.milestones || []).map((m) => `<li>${esc(m.description)} — source date ${esc(m.source_date || "unknown")}. ${esc(m.note || "")}</li>`).join("") || "<li>Undisclosed / not verified</li>"}</ul>
      <h4>Power and capacity — not added across bases</h4>
      <ul>${capacityLines(site)}</ul>
      <h4>Measured consumption</h4>
      <p>${site.measured_power_consumption == null ? "Undisclosed / not verified" : esc(site.measured_power_consumption)}</p>
      <h4>GPUs</h4>
      ${gpuLines(site)}
      <h4>Risk — ${esc(riskLabel)}</h4>
      <p>Assessed ${esc(risk.assessed_at_sgt || "unknown")}. Confidence: ${esc(risk.confidence || "undisclosed")}. Scope: ${esc(risk.assessed_scope || "")}</p>
      <p>${risk.confirmed_cancelled_paused_delayed == null ? "No primary-confirmed whole-site cancellation, pause, or delay is recorded for this campus. That is not proof none exists." : esc(risk.confirmed_cancelled_paused_delayed)}</p>
      <ul>${(risk.findings || []).map(findingHtml).join("") || "<li>Not assessed</li>"}</ul>
      <h4>Screened categories</h4>
      <ul>${categories || "<li>Not assessed</li>"}</ul>
      <h4>Documented policy instruments</h4>
      ${policies ? `<ul>${policies}</ul>` : "<p>None populated for this site. Election results are not treated as instruments.</p>"}
      <h4>Caveats</h4>
      <ul>${(site.caveats || []).map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      <h4>Evidence</h4>
      <p>${sourceLinks(site.source_ids)}</p>
    </div>`;
  }

  function summaryHtml(site) {
    const logic = L();
    const asOf = (site.status && site.status.as_of_source_date) || "source date unknown";
    return `<article>
      <h3 id="map-panel-title">${esc(site.site_name)}</h3>
      <p>${esc(site.operator || "Operator undisclosed")} · ${esc(site.location)}, ${esc(site.country)}</p>
      <p><span class="badge st-${esc(logic.statusOf(site))}">${esc(logic.STATUS_LABEL[logic.statusOf(site)])}</span>
         <span class="badge rk-${esc(logic.riskOf(site))}">${esc(logic.RISK_LABEL[logic.riskOf(site)])}</span></p>
      <p class="note">Status as of source date ${esc(asOf)}. City reference only.</p>
      ${state.expanded ? detailHtml(site) : `<button type="button" id="map-expand">Show full site detail</button>`}
    </article>`;
  }

  function panelHtml() {
    const data = DATA();
    if (state.clusterKey && !state.selectedId) {
      const group = sites().filter((site) => L().clusterKey(site) === state.clusterKey && passes(site));
      return `<h3 id="map-panel-title">${esc(group[0] ? group[0].coordinates.mapped_place : "Sites")} — choose a campus</h3>
        <p>These campuses share one coarse city coordinate. Choosing one does not merge their records.</p>
        <ul class="chooser">${group.map((site) => `<li><button type="button" data-choose="${esc(site.id)}">${esc(site.site_name)} — ${esc(site.operator)}; ${esc(L().STATUS_LABEL[L().statusOf(site)])}</button></li>`).join("")}</ul>`;
    }
    if (state.selectedId) {
      const site = sites().find((item) => item.id === state.selectedId);
      return site ? summaryHtml(site) : "";
    }
    const counts = { operating: 0, under_construction: 0, planned: 0, mixed: 0, unknown: 0 };
    filtered().forEach((site) => { counts[L().statusOf(site)] += 1; });
    return `<h3 id="map-panel-title">Map overview</h3>
      <p>${filtered().length} of ${sites().length} selected campuses match the filters. This is not a census.</p>
      <ul class="plain">${Object.keys(counts).map((key) => `<li>${esc(L().STATUS_LABEL[key])}: ${counts[key]}</li>`).join("")}</ul>
      <p class="note">${esc(data.coverage || "")} Approximate public settlement positions. No Africa, Latin America, or East Asia campus is in this first set.</p>`;
  }

  function sortedRows() {
    const logic = L();
    const rows = filtered().slice();
    const { key, dir } = state.sort;
    rows.sort((a, b) => {
      const av = key === "status" ? logic.STATUS_LABEL[logic.statusOf(a)] : key === "risk" ? logic.RISK_LABEL[logic.riskOf(a)] : a[key] || "";
      const bv = key === "status" ? logic.STATUS_LABEL[logic.statusOf(b)] : key === "risk" ? logic.RISK_LABEL[logic.riskOf(b)] : b[key] || "";
      return String(av).localeCompare(String(bv)) * dir;
    });
    return rows;
  }

  function tableHtml() {
    const logic = L();
    const head = [
      ["site_name", "Site"],
      ["operator", "Operator"],
      ["location", "Location"],
      ["region", "Region"],
      ["status", "Status"],
      ["risk", "Risk"]
    ];
    return `<table id="site-table">
      <caption>Selected campuses, same filters as the map. ${filtered().length} shown.</caption>
      <thead><tr>${head.map(([key, label]) => `<th scope="col"><button type="button" data-sort="${key}">${label}${state.sort.key === key ? (state.sort.dir < 0 ? " ↓" : " ↑") : ""}</button></th>`).join("")}<th scope="col">Capacity, GPUs, evidence</th></tr></thead>
      <tbody>${sortedRows().map((site) => `<tr>
        <td><button type="button" class="linkish" data-open="${esc(site.id)}">${esc(site.site_name)}</button></td>
        <td>${esc(logic.undisclosed(site.operator))}</td>
        <td>${esc(site.location)}, ${esc(site.country)}</td>
        <td>${esc(site.region)}</td>
        <td>${esc(logic.STATUS_LABEL[logic.statusOf(site)])} <span class="d">as of ${esc((site.status && site.status.as_of_source_date) || "unknown")}</span></td>
        <td>${esc(logic.RISK_LABEL[logic.riskOf(site)])}</td>
        <td><details><summary>Capacity, GPUs, evidence</summary>${detailHtml(site)}</details></td>
      </tr>`).join("")}</tbody>
    </table>`;
  }

  function legendHtml() {
    const logic = L();
    return `<div class="map-legend">
      <p><b>Status</b> <span class="d">shape and label</span></p>
      <ul>${Object.keys(logic.STATUS_LABEL).map((key) => `<li><i class="swatch st-${key}"></i>${esc(logic.STATUS_LABEL[key])}</li>`).join("")}</ul>
      <p><b>Risk overlay</b> <span class="d">separate from status. A dependency is not a delay. Limited scope is not a guarantee.</span></p>
      <ul>${Object.entries(logic.RISK_LABEL).map(([key, label]) => `<li><i class="swatch rk rk-${key}">${({confirmed_cancelled_paused_delayed:"X",documented_compliance_issue:"C",documented_dependency:"D",reported_risk:"R",no_identified_material_issue:"L",unknown:"?",not_assessed:"–"})[key]}</i>${esc(label)}</li>`).join("")}</ul>
      <p id="size-legend">${state.sizeOn
        ? `Circle area is sized only for ${esc(state.sizeBasis)} / ${esc(state.sizeDelivery)} / ${esc(state.sizeScope)}, using one exact record. Other campuses stay the default size and are not zeros.`
        : "Circle area does not represent capacity. Every campus uses the same size."}</p>
    </div>`;
  }

  function drawPins(stage) {
    const logic = L();
    const land = window.AIDC_LAND;
    const width = land && land.w ? land.w : 1000;
    const height = land && land.h ? land.h : 500;
    const groups = logic.clusterSites(filtered());
    stage.querySelectorAll(".pin").forEach((node) => node.remove());
    groups.forEach((group) => {
      const point = logic.project(group[0].coordinates.lat, group[0].coordinates.lon, width, height);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pin";
      const radius = group.length > 1 ? 14 : pinRadius(group[0]);
      button.style.left = `${(point.x / width) * 100}%`;
      button.style.top = `${(point.y / height) * 100}%`;
      button.style.width = `${radius * 2}px`;
      button.style.height = `${radius * 2}px`;
      if (group.length > 1) {
        button.classList.add("cluster");
        button.dataset.cluster = logic.clusterKey(group[0]);
        button.setAttribute("aria-label", `${group[0].coordinates.mapped_place}. ${group.length} campuses: ${group.map((site) => site.site_name).join("; ")}. Open chooser. Approximate city location, not a facility pin.`);
        button.innerHTML = `<span>${group.length}</span>`;
      } else {
        const site = group[0];
        const status = logic.statusOf(site);
        button.classList.add(`st-${status}`);
        button.dataset.open = site.id;
        const risk = logic.riskOf(site);
        const riskMark = state.riskOn ? `<i class="riskmark rk-${risk}" aria-hidden="true">${risk === "no_identified_material_issue" ? "L" : risk === "documented_compliance_issue" ? "C" : risk === "documented_dependency" ? "D" : risk === "reported_risk" ? "R" : risk === "confirmed_cancelled_paused_delayed" ? "X" : "?"}</i>` : "";
        button.innerHTML = `<span class="pinshape" aria-hidden="true"></span>${riskMark}`;
        const sized = state.sizeOn ? logic.sizingMatch(site, state.sizeBasis, state.sizeDelivery, state.sizeScope) : null;
        const sizeNote = !state.sizeOn ? "Equal size, not capacity." : sized && sized.sized ? `Sized at ${sized.mw} MW on the selected basis only.` : "Default size: not on the selected basis.";
        button.setAttribute("aria-label", `${site.site_name}. ${site.operator}. ${site.location}. Status ${logic.STATUS_LABEL[status]}. Risk ${logic.RISK_LABEL[risk]}. ${sizeNote} Open summary.`);
      }
      if ((state.selectedId && group.some((site) => site.id === state.selectedId)) || (state.clusterKey && button.dataset.cluster === state.clusterKey)) {
        button.classList.add("on");
      }
      stage.appendChild(button);
    });
  }

  function draw() {
    const data = DATA();
    const count = `${filtered().length} of ${sites().length} campuses`;
    announce(count);
    root.querySelector("#map-count").textContent = count;
    root.querySelector("#map-panel").innerHTML = panelHtml();
    root.querySelector("#map-legend").innerHTML = legendHtml();
    root.querySelector("#map-table-wrap").innerHTML = tableHtml();
    root.querySelector("#grid-gap").hidden = !state.gridOn;
    const stage = root.querySelector(".mapstage");
    if (!window.AIDC_LAND || !window.AIDC_LAND.d || state.mapFailed) {
      stage.querySelector("svg").hidden = true;
      root.querySelector("#map-fallback").hidden = false;
    } else {
      stage.querySelector("svg").hidden = false;
      root.querySelector("#map-fallback").hidden = true;
      drawPins(stage);
    }
    root.querySelector("#grid-toggle").setAttribute("aria-pressed", state.gridOn ? "true" : "false");
    root.querySelector("#risk-toggle").setAttribute("aria-pressed", state.riskOn ? "true" : "false");
    root.querySelector("#size-toggle").setAttribute("aria-pressed", state.sizeOn ? "true" : "false");
    const follow = data && data.follow_up_recheck;
    const followEl = root.querySelector("#map-recheck");
    if (followEl && follow) {
      followEl.innerHTML = `<b>Follow-up recheck ${esc(follow.at_sgt)}.</b><br>Narvik: ${esc(follow.narvik)}<br>S7: ${esc(follow.s7)}<br>UAE: ${esc(follow.uae)}<br>India: ${esc(follow.india)}<br>Hyperion: ${esc(follow.hyperion)}`;
    }
  }

  function options(list, current) {
    return list.map(([value, label]) => `<option value="${esc(value)}"${value === current ? " selected" : ""}>${esc(label)}</option>`).join("");
  }

  function mount(selector) {
    root = document.querySelector(selector);
    if (!root || !DATA()) return;
    state = defaultState();
    if (window.AIDC_MAP_FORCE_FAIL) state.mapFailed = true;
    const logic = L();
    const operators = [...new Set(sites().map((site) => site.operator))].sort();
    const regions = [...new Set(sites().map((site) => site.region))].sort();
    const land = window.AIDC_LAND || { w: 1000, h: 500, d: "" };
    root.innerHTML = `<header class="maphead">
        <h2 id="map-h">Major AI data-center sites — selected public disclosures</h2>
        <p class="note">Eight sourced campuses. Circles mark approximate public settlements, not buildings or entrances. GeoNames coordinates, rounded to two decimals. <a href="https://www.geonames.org/" target="_blank" rel="noopener">GeoNames</a> attribution applies. Land outline: Natural Earth 1:110m, public domain.</p>
      </header>
      <div class="maptools">
        <fieldset><legend>Status layers</legend>
          ${Object.keys(logic.STATUS_LABEL).map((key) => `<label><input type="checkbox" data-status="${key}" checked> ${esc(logic.STATUS_LABEL[key])}</label>`).join("")}
        </fieldset>
        <label>Operator <select id="f-operator"><option value="all">All operators</option>${operators.map((op) => `<option>${esc(op)}</option>`).join("")}</select></label>
        <label>Region <select id="f-region"><option value="all">All regions</option>${regions.map((region) => `<option>${esc(region)}</option>`).join("")}</select></label>
        <label>Risk class <select id="f-risk"><option value="all">All risk classes</option>${Object.entries(logic.RISK_LABEL).map(([key, label]) => `<option value="${key}">${esc(label)}</option>`).join("")}</select></label>
        <label>Capacity basis filter <select id="f-basis"><option value="all">Any basis</option>${BASIS.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("")}</select></label>
        <button type="button" id="risk-toggle" aria-pressed="false">Risk overlay</button>
        <button type="button" id="grid-toggle" aria-pressed="false">Power / grid geography</button>
        <button type="button" id="size-toggle" aria-pressed="false">Size circles by one basis</button>
        <span id="size-controls" hidden>
          <label>Basis <select id="s-basis">${options(BASIS, state.sizeBasis)}</select></label>
          <label>Delivery <select id="s-delivery">${options(DELIVERY, state.sizeDelivery)}</select></label>
          <label>Scope <select id="s-scope">${options(SCOPE, state.sizeScope)}</select></label>
        </span>
      </div>
      <p id="map-count" class="note"></p>
      <div id="grid-gap" class="gap" hidden>Power and grid geography is unavailable. This dataset has no sourced public substation, transmission-line, or plant coordinates. Nothing is drawn. Figures stay in the site detail and are not compared across bases.</div>
      <div id="map-fallback" class="gap" hidden>Map drawing is unavailable. The table below has the same campuses, filters, and sources.</div>
      <div class="maplayout">
        <div class="mapstage" role="group" aria-label="Geographic overview of selected campuses">
          <svg viewBox="0 0 ${land.w} ${land.h}" aria-hidden="true"><rect class="ocean" width="${land.w}" height="${land.h}"></rect><path class="land" d="${land.d || ""}"></path></svg>
        </div>
        <div id="map-panel" tabindex="-1" role="region" aria-labelledby="map-panel-title"></div>
      </div>
      <div id="map-legend"></div>
      <p id="map-recheck" class="note"></p>
      <div id="map-live" class="sr" aria-live="polite"></div>
      <div id="map-table-wrap"></div>`;
    root.addEventListener("change", (event) => {
      const target = event.target;
      if (target.dataset.status) state.status[target.dataset.status] = target.checked;
      if (target.id === "f-operator") state.operator = target.value;
      if (target.id === "f-region") state.region = target.value;
      if (target.id === "f-risk") state.risk = target.value;
      if (target.id === "f-basis") state.basisFilter = target.value;
      if (target.id === "s-basis") state.sizeBasis = target.value;
      if (target.id === "s-delivery") state.sizeDelivery = target.value;
      if (target.id === "s-scope") state.sizeScope = target.value;
      draw();
    });
    root.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.id === "risk-toggle") {
        state.riskOn = !state.riskOn;
        draw();
        return;
      }
      if (button.id === "grid-toggle") {
        state.gridOn = !state.gridOn;
        draw();
        return;
      }
      if (button.id === "size-toggle") {
        state.sizeOn = !state.sizeOn;
        root.querySelector("#size-controls").hidden = !state.sizeOn;
        draw();
        return;
      }
      if (button.id === "map-expand") {
        state.expanded = true;
        draw();
        const title = root.querySelector("#map-panel-title");
        if (title) title.focus();
        return;
      }
      if (button.dataset.cluster) {
        lastFocus = button;
        state.clusterKey = button.dataset.cluster;
        state.selectedId = null;
        state.expanded = false;
        draw();
        root.querySelector("#map-panel").focus();
        return;
      }
      if (button.dataset.choose || button.dataset.open) {
        lastFocus = button.classList.contains("pin") || button.classList.contains("linkish") ? button : lastFocus;
        state.selectedId = button.dataset.choose || button.dataset.open;
        state.clusterKey = null;
        state.expanded = false;
        draw();
        root.querySelector("#map-panel").focus();
        return;
      }
      if (button.dataset.sort) {
        if (state.sort.key === button.dataset.sort) state.sort.dir *= -1;
        else state.sort = { key: button.dataset.sort, dir: 1 };
        draw();
      }
    });
    root.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        handleEscape();
      }
    });
    draw();
  }

  window.AIDCMap = { mount, handleEscape, _state: () => state };
})();
