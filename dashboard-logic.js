/* Shared dashboard rules. Used by the page and by node:test. No network. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.AIDCLogic = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const DAY = 86400000;
  const FRESH = 48 * 3600 * 1000;

  function sgtISO(ms) {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Singapore",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(ms);
  }

  function dayDiff(fromISO, toISO) {
    const [ay, am, ad] = fromISO.split("-").map(Number);
    const [by, bm, bd] = toISO.split("-").map(Number);
    return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / DAY);
  }

  /** Publication calendar date is inside the last 7 SGT dates, including today. */
  function inRolling7(dateISO, nowMs) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO || "")) return false;
    const d = dayDiff(dateISO, sgtISO(nowMs));
    return d >= 0 && d <= 6;
  }

  function selectWhatsNew(items, nowMs) {
    return (items || [])
      .filter((item) => inRolling7(item.date, nowMs))
      .slice()
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(a.headline).localeCompare(String(b.headline)));
  }

  /**
   * 48h accent uses a real publication clock.
   * A date with no clock is never fresh — the check time must not invent one.
   * A clock with no zone is fresh only when every civil offset that is not in
   * the future is still inside 48 hours. One older reading blocks the badge.
   */
  function isFresh(item, nowMs) {
    if (!item) return false;
    if (item.published_at) {
      const t = Date.parse(item.published_at);
      if (Number.isNaN(t) || t > nowMs) return false;
      return nowMs - t <= FRESH;
    }
    if (item.published_clock && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(item.published_clock)) {
      let sawPast = false;
      for (let minutes = -12 * 60; minutes <= 14 * 60; minutes += 15) {
        const sign = minutes < 0 ? "-" : "+";
        const abs = Math.abs(minutes);
        const hh = String(Math.floor(abs / 60)).padStart(2, "0");
        const mm = String(abs % 60).padStart(2, "0");
        const t = Date.parse(`${item.published_clock}${sign}${hh}:${mm}`);
        if (Number.isNaN(t) || t > nowMs) continue;
        sawPast = true;
        if (nowMs - t > FRESH) return false;
      }
      return sawPast;
    }
    return false;
  }

  function clusterKey(site) {
    const c = site.coordinates || {};
    return `${Number(c.lat).toFixed(2)},${Number(c.lon).toFixed(2)}`;
  }

  function clusterSites(sites) {
    const groups = new Map();
    (sites || []).forEach((site) => {
      const key = clusterKey(site);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(site);
    });
    return [...groups.values()];
  }

  function toMW(rec) {
    if (!rec || rec.value == null) return null;
    if (rec.qualifier && rec.qualifier !== "exact") return null;
    if (rec.unit === "MW") return rec.value;
    if (rec.unit === "GW") return rec.value * 1000;
    return null;
  }

  /** One exact record on one basis + delivery + scope. Never sums. */
  function sizingMatch(site, basis, delivery, scope) {
    const rows = (site.capacity_disclosures || []).filter(
      (rec) => rec.basis === basis && rec.delivery_state === delivery && rec.scope === scope
    );
    const usable = rows.filter((rec) => toMW(rec) != null);
    if (usable.length !== 1) {
      return {
        sized: false,
        reason: usable.length === 0
          ? "No single exact record on this basis, delivery state, and scope"
          : "More than one record — not summed"
      };
    }
    const rec = usable[0];
    return {
      sized: true,
      mw: toMW(rec),
      value: rec.value,
      unit: rec.unit,
      wording: rec.source_wording,
      phase: rec.phase
    };
  }

  function project(lat, lon, width, height) {
    return {
      x: ((Number(lon) + 180) / 360) * width,
      y: ((90 - Number(lat)) / 180) * height
    };
  }

  const STATUS_LABEL = {
    operating: "Operating",
    under_construction: "Under construction",
    planned: "Planned",
    mixed: "Mixed",
    unknown: "Unknown"
  };

  const RISK_LABEL = {
    confirmed_cancelled_paused_delayed: "Confirmed cancelled, paused, or delayed",
    documented_compliance_issue: "Documented compliance issue",
    documented_dependency: "Documented dependency",
    reported_risk: "Reported risk",
    no_identified_material_issue: "No identified material issue (limited scope)",
    unknown: "Unknown",
    not_assessed: "Not assessed"
  };

  function statusOf(site) {
    const value = site.status && site.status.value;
    return STATUS_LABEL[value] ? value : "unknown";
  }

  function riskOf(site) {
    const value = site.risk_assessment && site.risk_assessment.classification;
    return RISK_LABEL[value] ? value : "not_assessed";
  }

  function undisclosed(value) {
    if (value == null) return "Undisclosed / not verified";
    if (Array.isArray(value)) return value.length ? value.join("; ") : "Undisclosed / not verified";
    const text = String(value).trim();
    return text ? text : "Undisclosed / not verified";
  }

  return {
    sgtISO,
    inRolling7,
    selectWhatsNew,
    isFresh,
    clusterKey,
    clusterSites,
    toMW,
    sizingMatch,
    project,
    STATUS_LABEL,
    RISK_LABEL,
    statusOf,
    riskOf,
    undisclosed
  };
});
