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
  assert.equal(window.AIDC.updated_sgt, "11 Nov 2026, 8:45 AM");
  assert.ok(window.AIDC.whatsNewThisWeek.every((item) => item.date >= "2026-11-05" && item.date <= "2026-11-11"));
});

test("rolling seven SGT dates, newest first, no date-only 48h badge", () => {
  const { AIDC } = loadData();
  const shown = logic.selectWhatsNew(AIDC.whatsNewThisWeek, NOW);
  assert.ok(shown.length >= 8);
  assert.ok(shown.every((item) => logic.inRolling7(item.date, NOW)));
  for (let i = 1; i < shown.length; i++) assert.ok(shown[i - 1].date >= shown[i].date);
  assert.equal(logic.inRolling7("2026-11-01", NOW), true);
  assert.equal(logic.inRolling7("2026-10-31", NOW), false);
  assert.equal(logic.isFresh({ date: "2026-11-07" }, NOW), false);
  assert.equal(logic.isFresh({ date: "2026-11-07", published_clock: "2026-11-07T08:00:05" }, NOW), true);
  assert.equal(logic.isFresh({ date: "2026-11-06", published_clock: "2026-11-06T05:30:00" }, NOW), true);
  assert.equal(logic.isFresh({ date: "2026-11-04", published_at: "2026-11-04T14:41:00-06:00" }, NOW), false);
  const fresh = shown.filter((item) => logic.isFresh(item, NOW));
  assert.ok(fresh.some((item) => item.headline.includes("Ballotpedia")));
  assert.ok(fresh.some((item) => item.headline.includes("Seoul Economic Daily")));
  assert.ok(shown.some((item) => item.headline.startsWith("Google:") && !logic.isFresh(item, NOW)));
});

test("ballot and Texas items do not assert the removed claims", () => {
  const text = fs.readFileSync(new URL("../data.js", import.meta.url), "utf8");
  assert.equal(text.includes("44 of 45"), false);
  assert.equal(text.includes("governor-elect Hinojosa proposes new-DC permit pause"), false);
  const { AIDC } = loadData();
  const ballot = AIDC.whatsNewThisWeek.find((item) => item.headline.includes("Ballotpedia"));
  assert.match(ballot.detail, /40 of 41/);
  assert.match(ballot.detail, /not used/);
  assert.match(ballot.detail, /not a claim about control of Congress/);
  assert.match(ballot.detail, /not a ban count/);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.date === "2026-11-04"), false);
  assert.equal(AIDC.whatsNewThisWeek.some((item) => item.headline.includes("Hinojosa")), false);
  const coming = AIDC.comingUp.map((item) => item.event);
  for (const name of ["Nebius", "Applied Materials", "Cisco", "NVIDIA"]) {
    assert.ok(coming.some((event) => event.includes(name)), name);
  }
  assert.equal(coming.some((event) => event.includes("CoreWeave")), false);
  assert.equal(coming.some((event) => event.includes("TSMC October")), false);
  assert.equal(AIDC.comingUp.some((item) => item.date === "2026-11-10"), false);
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
