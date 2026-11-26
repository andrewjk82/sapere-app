import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { mistakeItemFromSession, MISTAKES_REVIEWED_FIELD } from "../../utils/lessonMistakes";

// Homework tab, grouped by what the teacher has to do. Same data and actions as before: status, topics, homework
// text, score, notes, View submission, Mark as completed / undo.
const todayKey = () => new Date().toLocaleDateString("en-CA");
const shortDate = (k) => (k ? new Date(`${k}T12:00:00`).toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "—");
const hasHomework = (s) => Boolean(String(s.homework || "").trim());

const groupOf = (s, today) => {
  const done = s.isHomeworkCompleted === true;
  if (!hasHomework(s)) return "other";
  if (s.homeworkStatus === "excused" || s.homeworkStatus === "deleted") return "other";
  if (s.homeworkStatus === "submitted") return "check";
  if (done || s.homeworkStatus === "checked") {
    return !s[MISTAKES_REVIEWED_FIELD] && mistakeItemFromSession(s) ? "mistakes" : "done";
  }
  return (s.date || "") < today ? "notin" : "upcoming";
};

const GROUPS = [
  { key: "notin", title: "Not handed in", tone: "r", tag: "Not in" },
  { key: "check", title: "To check", tone: "p", tag: "Submitted" },
  { key: "mistakes", title: "Mistakes to go through", tone: "a", tag: "Mistakes" },
  { key: "upcoming", title: "Due next lesson", tone: "g", tag: "Set" },
  { key: "done", title: "Done", tone: "g", tag: "Done" },
  { key: "other", title: "Lessons without homework", tone: "n", tag: "" },
];

function HomeworkItem({ session, group, onToggleComplete, onView }) {
  const [open, setOpen] = useState(false);
  const done = session.isHomeworkCompleted === true;
  const topics = Array.isArray(session.learnedTopics) ? session.learnedTopics : [];
  const tag = group.key === "other"
    ? (session.homeworkStatus === "excused" ? "Excused" : session.homeworkStatus === "deleted" ? "Withdrawn" : "No homework")
    : group.tag;
  const hasScore = session.homeworkScore !== undefined && session.homeworkScore !== "" && session.homeworkScore !== null;
  return (
    <li className="sd-hw">
      <div className="sd-hw-top">
        <span className={`sd-tag sd-tag--${group.tone}`}>{tag}</span>
        <b className="sd-hw-date">{shortDate(session.date)}{session.startTime ? ` · ${session.startTime}` : ""}</b>
        {hasScore && <span className="sd-hw-score">{session.homeworkScore}{session.homeworkTotal ? ` / ${session.homeworkTotal}` : ""}</span>}
      </div>
      {topics.length > 0 && (
        <div className="sd-hw-topics">
          {topics.map((t, i) => <span key={i}>{t?.label || t?.id || String(t)}</span>)}
        </div>
      )}
      {(hasHomework(session) || session.notes) && (
        <>
          <button type="button" className="sd-hw-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? "Hide details" : "Homework details"}
          </button>
          {open && (
            <div className="sd-hw-detail">
              {hasHomework(session) && <p className="sd-hw-text">{session.homework}</p>}
              {session.notes && <p className="sd-hw-note">📝 {session.notes}</p>}
            </div>
          )}
        </>
      )}
      {(hasHomework(session) || session.homeworkStatus === "submitted" || session.homeworkStatus === "checked") && (
        <div className="sd-hw-acts">
          {(session.homeworkStatus === "submitted" || session.homeworkStatus === "checked") && (
            <button type="button" className="sd-btn sd-btn--soft" onClick={() => onView(session.id)}>
              View submission{session.homeworkStatus === "submitted" ? " · new" : ""}
            </button>
          )}
          {hasHomework(session) && (
            <button type="button" className={`sd-btn ${done ? "sd-btn--done" : "sd-btn--primary"}`} onClick={() => onToggleComplete(session)}>
              {done ? <><CheckCircle2 size={15} /> Completed · tap to undo</> : <><Circle size={15} /> Mark as completed</>}
            </button>
          )}
        </div>
      )}
    </li>
  );
}

export default function HomeworkTab({ sessions, loading, error, onRetry, onToggleComplete, onView }) {
  const [showOther, setShowOther] = useState(false);
  if (loading) return <section className="sd-tile"><p className="sd-muted" style={{ margin: 0 }}>Loading…</p></section>;
  if (error) {
    return (
      <section className="sd-tile" role="alert">
        <p className="sd-muted" style={{ margin: "0 0 10px" }}>Couldn’t load homework.</p>
        <button type="button" className="sd-btn sd-btn--primary" onClick={onRetry}>Retry</button>
      </section>
    );
  }
  if (!sessions.length) return <section className="sd-tile"><p className="sd-muted" style={{ margin: 0 }}>No homework recorded yet.</p></section>;

  const today = todayKey();
  const byGroup = Object.fromEntries(GROUPS.map((g) => [g.key, []]));
  sessions.forEach((s) => byGroup[groupOf(s, today)].push(s));
  return (
    <div className="sd-hw-groups">
      {GROUPS.map((g) => {
        const list = byGroup[g.key];
        if (!list.length) return null;
        const hidden = g.key === "other" && !showOther;
        return (
          <section key={g.key} className="sd-tile">
            <h3 className="sd-h">
              <span>{g.title} <span className="sd-count">{list.length}</span></span>
              {g.key === "other" && <button type="button" className="sd-hw-toggle" aria-expanded={showOther} onClick={() => setShowOther((v) => !v)}>{showOther ? "Hide" : "Show"}</button>}
            </h3>
            {!hidden && (
              <ul className="sd-hw-list">
                {list.map((s) => <HomeworkItem key={s.id} session={s} group={g} onToggleComplete={onToggleComplete} onView={onView} />)}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
