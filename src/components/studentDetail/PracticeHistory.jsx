import { Fragment, useState } from "react";

// Practice tab: this week's numbers, then one compact list of every Daily Challenge / Daily Calculation session.
// Same actions as the old cards: tap a row for the questions (onSelect), Reset (onReset asks to confirm first),
// extra rounds under their day.
const PAGE = 20;
const dateKey = (d) => d.toLocaleDateString("en-CA");
const fmt = (k) => (k ? new Date(`${k}T12:00:00`).toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "—");
const pct = (list) => {
  const t = list.reduce((a, s) => a + (Number(s.total) || 0), 0);
  return t ? Math.round((list.reduce((a, s) => a + (Number(s.score) || 0), 0) / t) * 100) : null;
};

export default function PracticeHistory({ dailyPracticeStats, calculationStats, calculationEnabled, onSelect, onReset, renderExtra }) {
  const [filter, setFilter] = useState("all");
  const [shown, setShown] = useState(PAGE);

  const now = new Date();
  const monday = new Date(now); monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const weekStart = dateKey(monday);
  const weekDaily = dailyPracticeStats.filter((s) => s.id >= weekStart);
  const weekCalc = calculationStats.filter((s) => s.id >= weekStart);
  const last30 = dateKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30));
  const dailyAcc = pct(dailyPracticeStats.filter((s) => s.id >= last30));
  const calcAcc = pct(calculationStats.filter((s) => s.id >= last30));
  const showCalc = calculationEnabled !== false || calculationStats.length > 0;

  const rows = [
    ...(filter !== "calc" ? dailyPracticeStats.map((s) => ({ s, kind: "daily" })) : []),
    ...(filter !== "daily" ? calculationStats.map((s) => ({ s, kind: "calc" })) : []),
  ].sort((a, b) => (b.s.id || "").localeCompare(a.s.id || "") || (a.kind === "daily" ? -1 : 1));

  return (
    <div className="sd-practice">
      <div className="sd-kpis">
        <div className="sd-kpi"><span>Daily Challenge</span><b>{weekDaily.length} {weekDaily.length === 1 ? "day" : "days"}</b><em>this week</em></div>
        <div className="sd-kpi"><span>Challenge accuracy</span><b>{dailyAcc === null ? "—" : `${dailyAcc}%`}</b><em>last 30 days</em></div>
        {showCalc && <div className="sd-kpi"><span>Daily Calculation</span><b>{weekCalc.length} {weekCalc.length === 1 ? "day" : "days"}</b><em>this week</em></div>}
        {showCalc && <div className="sd-kpi"><span>Calculation accuracy</span><b>{calcAcc === null ? "—" : `${calcAcc}%`}</b><em>last 30 days</em></div>}
      </div>

      <section className="sd-tile">
        <h3 className="sd-h"><span>History <span className="sd-count">{dailyPracticeStats.length + calculationStats.length}</span></span><small>tap a row for the questions</small></h3>
        <div className="sd-filter" role="group" aria-label="Show">
          {[["all", "All"], ["daily", `Daily Challenge · ${dailyPracticeStats.length}`], ...(showCalc ? [["calc", `Daily Calculation · ${calculationStats.length}`]] : [])].map(([k, l]) => (
            <button key={k} type="button" className={`sd-chipbtn${filter === k ? " is-on" : ""}`} aria-pressed={filter === k} onClick={() => { setFilter(k); setShown(PAGE); }}>{l}</button>
          ))}
        </div>
        {rows.length === 0 ? (
          <p className="sd-muted" style={{ margin: 0 }}>No practice yet.</p>
        ) : (
          <ul className="sd-rows">
            {rows.slice(0, shown).map(({ s, kind }) => {
              const p = Number(s.total) ? Math.round((Number(s.score) / Number(s.total)) * 100) : null;
              return (
                <Fragment key={`${kind}-${s.id}`}>
                  <li className="sd-row">
                    <button type="button" className="sd-row-main" onClick={() => onSelect(s)}>
                      <span className="sd-row-date">{fmt(s.id)}</span>
                      <span className={`sd-tag ${kind === "calc" ? "sd-tag--a" : "sd-tag--p"}`}>{kind === "calc" ? "Calculation" : "Challenge"}</span>
                      {s.abandoned && <span className="sd-tag sd-tag--r">Abandoned</span>}
                      {!s.completed && !s.abandoned && <span className="sd-tag sd-tag--a">In progress</span>}
                      <span className={`sd-row-score${p !== null && p < 60 ? " sd-down" : p !== null && p >= 85 ? " sd-up" : ""}`}>{s.score ?? 0}/{s.total ?? 0}</span>
                    </button>
                    <button type="button" className="sd-row-reset" onClick={() => onReset(s)}>Reset</button>
                  </li>
                  {kind === "daily" && s.hasExtraRounds && <li className="sd-row-extra">{renderExtra(s)}</li>}
                </Fragment>
              );
            })}
          </ul>
        )}
        {rows.length > shown && (
          <button type="button" className="sd-btn sd-btn--soft" style={{ marginTop: 12 }} onClick={() => setShown((n) => n + PAGE)}>
            Show {Math.min(PAGE, rows.length - shown)} more
          </button>
        )}
      </section>
    </div>
  );
}
