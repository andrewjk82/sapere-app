import { X } from "lucide-react";

// Term results & reports (moved from the dashboard card to the Results tab). Same fields as before:
// {prefix}term{n}ExamDate / Result / Link. The exam date also drives D-day here, the student's exam countdown,
// exam reminders and Exam prep switching itself off after the exams.
const daysUntil = (date) => (date ? Math.ceil((new Date(date) - new Date(new Date().toDateString())) / 86400000) : null);

function TermRow({ label, prefix, student, editingTerm, setEditingTerm, showToast, onUpdateCurriculumSetting }) {
  return (
    <div className="sd-term-group">
      {label && <div className="sd-term-label">{label}</div>}
      <div className="sd-terms">
        {[1, 2, 3, 4].map((term) => {
          const scoreKey = `${prefix}term${term}Result`;
          const linkKey = `${prefix}term${term}Link`;
          const dateKey = `${prefix}term${term}ExamDate`;
          const editKey = `${prefix}${term}`;
          const score = student?.[scoreKey];
          const link = student?.[linkKey];
          const examDate = student?.[dateKey];
          const dday = daysUntil(examDate);
          const soon = dday !== null && dday >= 0 && dday <= 7;

          if (editingTerm === editKey) {
            return (
              <div key={term} className="sd-term sd-term--edit">
                <div className="sd-term-edit-head">
                  <b>Edit Term {term}</b>
                  <button type="button" className="sd-icon-btn" aria-label="Close" onClick={() => setEditingTerm(null)}><X size={16} /></button>
                </div>
                <label>Exam date<input type="date" value={examDate || ""} onChange={(e) => onUpdateCurriculumSetting(dateKey, e.target.value)} /></label>
                <label>Score (optional)<input type="text" placeholder="e.g. 85%" value={score || ""} onChange={(e) => onUpdateCurriculumSetting(scoreKey, e.target.value)} /></label>
                <label>Report link<input type="url" placeholder="e.g. Google Drive link" value={link || ""} onChange={(e) => onUpdateCurriculumSetting(linkKey, e.target.value)} /></label>
                <button type="button" className="sd-btn sd-btn--primary" onClick={() => setEditingTerm(null)}>Done</button>
              </div>
            );
          }
          return (
            <div key={term} className={`sd-term${soon ? " is-soon" : ""}`}>
              <button
                type="button"
                className="sd-term-main"
                onClick={() => { if (link) window.open(link, "_blank"); else showToast("No report card available.", "warning"); }}
              >
                <b>Term {term}</b>
                <span className="sd-term-meta">
                  {score && <span className="sd-term-score">{score}</span>}
                  {dday !== null && dday >= 0 && <span className={`sd-dday${dday === 0 ? " is-today" : soon ? " is-soon" : ""}`}>{dday === 0 ? "D-Day" : `D-${dday}`}</span>}
                  {examDate && dday !== null && dday >= 0 && <span className="sd-muted">{new Date(`${examDate}T12:00:00`).toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}</span>}
                  {link && <span className="sd-link">Report ↗</span>}
                  {!score && !link && (dday === null || dday < 0) && <span className="sd-muted">No result yet</span>}
                </span>
              </button>
              <button type="button" className="sd-icon-btn sd-term-pen" aria-label={`Edit Term ${term}`} onClick={() => setEditingTerm(editKey)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TermResultsCard(props) {
  const { student } = props;
  const courses = Array.isArray(student?.assignedCourse) ? student.assignedCourse : [student?.assignedCourse || "Advanced"];
  const extensionCourse = courses.some((c) => c === "Extension 1" || c === "Extension 2");
  // The school report follows the real school year, not an accelerated track.
  const realYear = student?.year || student?.level || "";
  const isExtension = realYear ? ((realYear === "Year 11" || realYear === "Year 12") && extensionCourse) : extensionCourse;
  return (
    <section className="sd-tile">
      <h3 className="sd-h">Term results &amp; reports <small>tap a term for its report · ✎ to edit</small></h3>
      {isExtension ? (
        <>
          <TermRow {...props} label="Advanced" prefix="" />
          <TermRow {...props} label="Extension 1" prefix="ext1" />
        </>
      ) : <TermRow {...props} label={null} prefix="" />}
    </section>
  );
}
