import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const logic = require("../dashboard-logic.js");

function loadData() {
  const context = { window: {}, console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(new URL("../data.js", import.meta.url), "utf8"), context);
  return context.window;
}

function loadSites() {
  const raw = JSON.parse(fs.readFileSync(new URL("../sites.json", import.meta.url), "utf8"));
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(new URL("../sites.js", import.meta.url), "utf8"), context);
  return { raw, js: context.window.AIDC_SITES };
}

const NOW = Date.parse("2026-11-07T04:39:00Z");
const WINDOW = Date.parse("2026-11-23T00:40:00Z");

test("shared feeds keep the master-dashboard export shape", () => {
  const window = loadData();
  assert.equal(window.whatsNewThisWeek, window.AIDC.whatsNewThisWeek);
  assert.equal(window.comingUp, window.AIDC.comingUp);
  for (const item of window.AIDC.whatsNewThisWeek) {
    assert.match(item.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(typeof item.headline, "string");
    assert.ok(item.headline.length > 0);
    for (const key of Object.keys(item)) {
      assert.ok(["date", "headline", "detail", "url", "layer", "src", "published_at", "published_clock"].includes(key), key);
    }
  }
  assert.equal(window.AIDC.updated_sgt, "23 Nov 2026, 8:40 AM");
  assert.equal(window.AIDC.whatsNewWeekOf, "2026-11-17");
  assert.equal(window.AIDC.whatsNewUpdated, "2026-11-23 8:40 AM SGT");
  assert.equal(window.AIDC.updated, "2026-11-23");
  const items = window.AIDC.whatsNewThisWeek;
  assert.equal(items.length, 41);
  assert.ok(items.every((item) => item.date >= "2026-11-17" && item.date <= "2026-11-23"));
  assert.equal(items.some((item) => item.date === "2026-11-16"), false);
  assert.equal(items.some((item) => item.date === "2026-11-15"), false);
  assert.equal(items.some((item) => item.date === "2026-11-14"), false);
  assert.equal(items.some((item) => item.date === "2026-11-13"), false);
  assert.equal(items.some((item) => item.date === "2026-11-12"), false);
  assert.equal(items.some((item) => item.date === "2026-11-11"), false);
  for (let i = 1; i < items.length; i++) assert.ok(items[i - 1].date >= items[i].date);
  assert.equal(items.some((item) => item.date === "2026-11-07"), false);
  assert.equal(items.some((item) => item.headline.includes("OpenAI CFO")), false);
  assert.equal(items.some((item) => item.headline.includes("Thailand paused")), false);
  assert.equal(items.some((item) => item.headline.includes("2028 US data-center permitting")), false);
  assert.equal(items.some((item) => item.headline.startsWith("Nebius")), false);
  const micron = items.find((item) => item.headline.startsWith("Micron CEO"));
  assert.match(micron.detail, /75% of our 2027 is sold out/);
  assert.match(micron.detail, /even tighter than 2026/);
  const jedec = items.find((item) => item.headline.startsWith("JEDEC previews"));
  assert.equal(jedec.url, "https://www.jedec.org/news/pressreleases/jedec%C2%AE-previews-next-generation-ddr6-dram-higher-performance-greater-capacity");
  assert.match(jedec.detail, /12\.8 GT\/s/);
  assert.match(jedec.detail, /not a finalized standard/);
  const nvda = items.find((item) => item.headline.startsWith("NVIDIA Q3"));
  assert.match(nvda.detail, /no longer shipping licensed Hopper data center products to China/);
  assert.match(nvda.detail, /\$118\.0 billion/);
  assert.match(nvda.detail, /does not itself say that shipments have stopped/);
  assert.match(nvda.detail, /\$518 billion/);
  assert.match(nvda.detail, /not a commitment to smaller AI cloud providers/);
  assert.match(nvda.detail, /Neocloud agreements/);
  const iea = items.find((item) => item.headline.startsWith("IEA World Energy Outlook"));
  assert.match(iea.detail, /1 000 terawatt-hours by 2030 in the STEPS/);
  const hfac = items.find((item) => item.headline.startsWith("House Foreign Affairs"));
  assert.match(hfac.detail, /879,868/);
  assert.match(hfac.detail, /Approved, not shipped/);
  const bill = items.find((item) => item.headline.startsWith("Senate passed"));
  assert.equal(bill.date, "2026-11-19");
  assert.match(bill.detail, /not enacted/);
  assert.match(bill.detail, /62–33/);
  assert.match(bill.detail, /It is not enactment/);
  assert.match(bill.detail, /no megawatt floor/);
  assert.match(bill.detail, /not law/);
  const sec = items.find((item) => item.headline.startsWith("Reuters: SEC staff"));
  assert.match(sec.detail, /remains unclear whether/);
  const oracle = items.find((item) => item.headline.startsWith("Oracle:"));
  assert.match(oracle.detail, /does not restate a dollar amount/);
  assert.match(oracle.detail, /nearly complete, not complete/);
  const spacex = items.find((item) => item.headline.startsWith("FT: SpaceX"));
  assert.match(spacex.detail, /uncertain whether the provision was included/);
  assert.match(spacex.detail, /approximately \$40 billion/);
  assert.match(spacex.detail, /Semafor/);
  assert.equal(items.filter((item) => item.headline.startsWith("FT: SpaceX") || item.headline.startsWith("Semafor:")).length, 1);
  assert.equal(items.some((item) => item.headline.startsWith("Semafor:")), false);
  assert.equal(items.some((item) => item.headline.includes("Inception")), false);
  assert.equal(items.some((item) => item.headline.includes("CoreWeave")), false);
  assert.equal(items.some((item) => item.headline.includes("AirTrunk")), false);
});

test("rolling seven SGT dates, newest first, no date-only 48h badge", () => {
  const { AIDC } = loadData();
  const shown = logic.selectWhatsNew(AIDC.whatsNewThisWeek, WINDOW);
  assert.equal(shown.length, 41);
  assert.ok(shown.every((item) => logic.inRolling7(item.date, WINDOW)));
  for (let i = 1; i < shown.length; i++) assert.ok(shown[i - 1].date >= shown[i].date);
  assert.equal(logic.inRolling7("2026-11-01", NOW), true);
  assert.equal(logic.inRolling7("2026-10-31", NOW), false);
  assert.equal(logic.isFresh({ date: "2026-11-07" }, NOW), false);
  assert.equal(logic.isFresh({ date: "2026-11-07", published_clock: "2026-11-07T08:00:05" }, NOW), true);
  assert.equal(logic.isFresh({ date: "2026-11-06", published_clock: "2026-11-06T05:30:00" }, NOW), true);
  assert.equal(logic.isFresh({ date: "2026-11-04", published_at: "2026-11-04T14:41:00-06:00" }, NOW), false);
  const fresh = shown.filter((item) => logic.isFresh(item, WINDOW));
  assert.equal(fresh.length, 4);
  assert.ok(fresh.some((item) => item.headline.startsWith("Yonhap,")));
  assert.ok(fresh.some((item) => item.headline.startsWith("Bessent:")));
  assert.ok(fresh.some((item) => item.headline.startsWith("Fortune, citing Howden")));
  assert.ok(fresh.some((item) => item.headline.startsWith("Fortune: SpaceX")));
  assert.ok(shown.some((item) => item.headline.startsWith("The Nation:") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Nikkei:") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Oracle:") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("BCG estimate") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Reuters: TSMC") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Musk,") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("NVIDIA Q3") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Micron CEO") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("IEA World Energy Outlook") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("Senate passed") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("OpenAI:") && !logic.isFresh(item, WINDOW)));
  assert.ok(shown.some((item) => item.headline.startsWith("JEDEC previews") && !logic.isFresh(item, WINDOW)));
  assert.equal(shown.some((item) => item.headline.startsWith("AMD: HPE-built Lux")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("NVIDIA announces Rubin")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("Nature Sustainability")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("Astera Labs")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("Nikkei: Digital Realty")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("AirTrunk")), false);
  assert.equal(shown.some((item) => item.headline.startsWith("Massachusetts campaign")), false);
});

test("ballot and Texas items do not assert the removed claims", () => {
  const text = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
  assert.equal(text.includes("44 of 45"), false);
  assert.equal(text.includes("governor-elect Hinojosa proposes new-DC permit pause"), false);
  const { AIDC } = loadData();
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.headline.includes("Ballotpedia")), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-13"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-09"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-08"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-06"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-04"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.headline.includes("Hinojosa")), false);
  const coming = AIDC.comingUp.map((item) => item.event);
  assert.ok(coming.some((event) => event.includes("Marvell")), "Marvell");
  assert.equal(coming.some((event) => event.includes("NVIDIA")), false);
  assert.ok(coming.some((event) => event.includes("Treasury")), "Treasury deadline");
  assert.equal(AIDC.comingUp.length, 9);
  assert.ok(coming.some((event) => event.includes("Credo")), "Credo");
  assert.equal(coming.some((event) => event.includes("SC26")), false);
  assert.ok(coming.some((event) => event.includes("re:Invent")), "re:Invent");
  for (const name of ["HPE", "Broadcom", "Dell"]) {
    assert.ok(coming.some((event) => event.includes(name)), name);
  }
  assert.equal(coming.some((event) => event.includes("Oracle")), false);
  assert.equal(coming.some((event) => event.includes("Micron")), false);
  assert.equal(coming.some((event) => event.includes("Nebius")), false);
  assert.equal(coming.some((event) => event.includes("Applied Materials")), false);
  assert.equal(coming.some((event) => event.includes("Cisco")), false);
  assert.equal(coming.some((event) => event.includes("CoreWeave")), false);
  assert.equal(coming.some((event) => event.includes("TSMC October")), false);
  assert.equal(AIDC.comingUp.some((item) => item.date === "2026-11-10"), false);
  assert.equal(AIDC.comingUp.some((item) => item.date === "2026-11-12"), false);
});

test("eight campuses, Abilene cluster, no cross-basis sizing, null is not zero", () => {
  const { raw, js } = loadSites();
  assert.equal(JSON.stringify(js), JSON.stringify(raw));
  assert.equal(raw.sites.length, 8);
  assert.equal(raw.publication_hold, false);
  const groups = logic.clusterSites(raw.sites);
  const abilene = groups.find((group) => group.length > 1);
  assert.equal(abilene.length, 2);
  assert.deepEqual(abilene.map((site) => site.id).sort(), ["us-abilene-microsoft", "us-abilene-oracle"]);
  const ms = raw.sites.find((site) => site.id === "us-abilene-microsoft");
  const it = logic.sizingMatch(ms, "IT_load", "planned", "campus");
  const gen = logic.sizingMatch(ms, "generation_power", "planned", "campus");
  const per = logic.sizingMatch(ms, "IT_load", "planned", "each of two buildings");
  assert.equal(it.sized, false);
  assert.equal(gen.sized, true);
  assert.equal(gen.mw, 900);
  assert.equal(per.sized, true);
  assert.equal(per.mw, 336);
  assert.notEqual(gen.mw + per.mw, gen.mw);
  const india = raw.sites.find((site) => site.id === "in-vizag-google");
  assert.equal(logic.toMW(india.capacity_disclosures[0]), null);
  for (const site of raw.sites) {
    assert.equal(site.measured_power_consumption, null);
    assert.equal(logic.undisclosed(site.measured_power_consumption), "Undisclosed / not verified");
    const installed = (site.gpu_disclosures || []).filter((row) => row.disclosure_state === "installed");
    assert.equal(installed.length, 0);
    assert.equal(site.risk_assessment.confirmed_cancelled_paused_delayed, null);
  }
  const narvik = raw.sites.find((site) => site.id === "no-narvik");
  assert.match(narvik.caveats.join(" "), /not a stop-work|Not a verified stop-work|not a confirmed construction delay/i);
  assert.equal(narvik.policy_risks[0].site_action_deadline, "2026-11-15");
  const s7 = raw.sites.find((site) => site.id === "au-nextdc-s7");
  assert.match(s7.caveats.join(" "), /Prepare EIS/);
  assert.match(s7.caveats.join(" "), /not approval|Not an approval|not an approval/i);
  assert.equal(raw.sources["risk-uae"].access_caveat.includes("401") || raw.follow_up_recheck.uae.includes("401"), true);
});

test("page has exactly six tabs, model, map fallback, and publication note", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const labels = [...html.matchAll(/<nav[^>]*id="tabs"[^>]*>([\s\S]*?)<\/nav>/g)][0][1]
    .match(/<button\b[^>]*>[\s\S]*?<\/button>/g)
    .map((button) => button.replace(/<[^>]+>/g, "").trim());
  assert.deepEqual(labels, ["Overview", "What’s new", "TAM", "CapEx", "Companies", "Sources"]);
  assert.equal(html.includes("#tabs{display:none"), false);
  assert.equal(/data-t="map"/i.test(html), false);
  assert.ok(html.indexOf('id="t-overview"') < html.indexOf('id="stack"'));
  assert.ok(html.indexOf('id="stack"') < html.indexOf('id="site-map-root"'));
  assert.ok(html.indexOf('id="site-map-root"') < html.indexOf('id="coming"'));
  assert.ok(html.indexOf('id="t-news"') > html.indexOf('id="t-overview"'));
  assert.match(html, /id="wn"/);
  const mapJs = fs.readFileSync(new URL("../map.js", import.meta.url), "utf8");
  assert.match(mapJs, /Power and grid geography is unavailable/);
  assert.match(mapJs, /Circle area does not represent capacity/);
  assert.match(mapJs, /Map drawing is unavailable/);
  assert.match(mapJs, /role="dialog"/);
  assert.match(mapJs, /Outside this USA map/);
  assert.equal(mapJs.includes("window.open"), false);
  assert.match(mapJs, /Epoch AI/);
  assert.equal(/hostile statewide|90 campuses|63 GW/i.test(mapJs), false);
  const doc = fs.readFileSync(new URL("../PUBLICATION.md", import.meta.url), "utf8");
  assert.match(doc, /cloud agent/i);
  assert.match(doc, /does not merge/i);
  assert.match(doc, /GitHub Pages/);
  assert.match(doc, /no MU/i);
});
