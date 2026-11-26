import { useMemo } from "react";
import { mistakeItemFromSession, MISTAKES_REVIEWED_FIELD } from "../../utils/lessonMistakes";

// Top of the Overview tab: this week at a glance and what needs doing, built from data the page already has.
const dateKey = (d) => d.toLocaleDateString("en-CA");
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const homeworkOpen = (s) => Boolean(String(s.homework || "").trim())
  && !["checked", "excused", "deleted", "submitted"].includes(s.homeworkStatus) && s.isHomeworkCompleted !== true;
const shortDate = (k) => (k ? new Date(`${k}T12:00:00`).toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" }) : "");
const topicNames = (s) => (s.learnedTopics || []).map((t) => t?.label || t?.title || t?.id).filter(Boolean).join(", ");

const accuracy = (stats, from, to) => {
  let score = 0; let total = 0;
  stats.forEach((s) => {
    if (s.statCollection === "calc_stats" || s.id < from || s.id > to) return;
    score += Number(s.score) || 0; total += Number(s.total) || 0;
  });
  return total ? Math.round((score / total) * 100) : null;
};

export default function LearningOverview({ student, dailyStats = [], sessions, topicProgress, onGoTab }) {
  const today = dateKey(new Date());
  const view = useMemo(() => {
    const now = new Date(`${today}T12:00:00`);
    const monday = addDays(now, -((now.getDay() + 6) % 7));
    const weekStart = dateKey(monday);
    const lastStart = dateKey(addDays(monday, -7));
    const lastEnd = dateKey(addDays(monday, -1));
    const practiceDays = new Set(dailyStats.filter((s) => s.id >= weekStart && s.id <= today).map((s) => s.id)).size;
    const acc = accuracy(dailyStats, weekStart, today);
    const accLast = accuracy(dailyStats, lastStart, lastEnd);

    const list = Array.isArray(sessions) ? sessions : [];
    const notIn = list.filter((s) => homeworkOpen(s) && (s.date || "") < today).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    const toCheck = list.filter((s) => s.homeworkStatus === "submitted");
    const mistakes = list.filter((s) => !s[MISTAKES_REVIEWED_FIELD] && (s.homeworkStatus === "checked" || s.isHomeworkCompleted === true) && mistakeItemFromSession(s));
    const exams = ["", "ext1"].flatMap((p) => [1, 2, 3, 4].map((t) => ({ label: `${p ? "Ext 1 " : ""}Term ${t} exam`, date: student?.[`${p}term${t}ExamDate`] })))
      .map((e) => ({ ...e, days: e.date ? Math.ceil((new Date(e.date) - new Date(new Date().toDateString())) / 86400000) : null }))
      .filter((e) => e.days !== null && e.days >= 0 && e.days <= 30).sort((a, b) => a.days - b.days);

    const todo = [
      ...notIn.map((s) => ({ tone: "r", tag: "Not in", text: `${shortDate(s.date)} · ${topicNames(s) || "Homework"}`, tab: "homework" })),
      ...toCheck.map((s) => ({ tone: "p", tag: "Check", text: `${shortDate(s.date)} · ${topicNames(s) || "Homework"} · submitted`, tab: "homework" })),
      ...mistakes.map((s) => ({ tone: "a", tag: "Mistakes", text: `${shortDate(s.date)} · ${topicNames(s) || "Homework"} · go through wrong answers`, tab: "homework" })),
      ...exams.map((e) => ({ tone: e.days <= 7 ? "r" : "a", tag: e.days === 0 ? "D-Day" : `D-${e.days}`, text: `${e.label} · ${shortDate(e.date)}`, tab: "hsc" })),
    ];
    const sum = topicProgress?.loaded && topicProgress.sum.total > 0 ? topicProgress.sum : null;
    return { practiceDays, acc, accLast, notIn: notIn.length, todo, progress: sum ? Math.round((sum.count.done / sum.total) * 100) : null, sum };
  }, [dailyStats, sessions, student, topicProgress, today]);

  const delta = view.acc !== null && view.accLast !== null ? view.acc - view.accLast : null;
  return (
    <div className="sd-overview">
      <div className="sd-kpis">
        <div className="sd-kpi"><span>Practice</span><b>{view.practiceDays} / 7</b><em>days this week</em></div>
        <div className="sd-kpi"><span>Accuracy</span><b>{view.acc === null ? "—" : `${view.acc}%`}</b>
          <em className={delta === null ? "" : delta >= 0 ? "sd-up" : "sd-down"}>{delta === null ? "Daily Challenge this week" : `${delta >= 0 ? "▲" : "▼"} ${Math.abs(delta)}%p vs last week`}</em></div>
        <div className="sd-kpi"><span>Homework</span><b>{sessions ? (view.notIn ? `${view.notIn} open` : "All in") : "…"}</b><em className={view.notIn ? "sd-down" : ""}>{view.notIn ? "not handed in" : "nothing overdue"}</em></div>
        <div className="sd-kpi"><span>Progress</span><b>{view.progress === null ? "—" : `${view.progress}%`}</b><em>{view.sum ? `${view.sum.count.done} of ${view.sum.total} topics` : "of the course"}</em></div>
      </div>
      <section className="sd-tile">
        <h3 className="sd-h">To do <small>tap to open</small></h3>
        {view.todo.length ? (
          <ul className="sd-todo">
            {view.todo.slice(0, 8).map((t, i) => (
              <li key={i}><button type="button" onClick={() => onGoTab(t.tab)}>
                <span className={`sd-tag sd-tag--${t.tone}`}>{t.tag}</span><span className="sd-todo-text">{t.text}</span><span className="sd-go">Open ›</span>
              </button></li>
            ))}
          </ul>
        ) : <p className="sd-muted" style={{ margin: 0 }}>{sessions ? "Nothing waiting." : "Loading…"}</p>}
      </section>
    </div>
  );
}
