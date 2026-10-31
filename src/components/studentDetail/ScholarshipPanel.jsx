import { motion } from "framer-motion";
import { Award, Check } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";
import { enabledScholarshipExams, toggleScholarshipExam } from "../../utils/scholarshipExams";

/**
 * Teacher-side Scholarship practice switch (ACER, Selective…). When on, the student gets a Scholarship page in
 * their sidebar: untimed practice, topic by topic, with answers and explanations. It is separate from Daily
 * Practice and Exam Prep — those never draw Scholarship questions.
 */
export default function ScholarshipPanel({ styles, student, onUpdateSetting }) {
  const enabled = student?.scholarshipEnabled === true;
  const exams = CURRICULUM_DATA.Scholarship || [];
  const examIds = exams.map((e) => e.id);
  const chosen = enabledScholarshipExams(examIds, student);
  const toggleExam = (id) => {
    const next = toggleScholarshipExam(examIds, student, id);   // the last exam stays on: to stop Scholarship, switch it off above
    if (next.length !== chosen.length || next.some((x, i) => x !== chosen[i])) onUpdateSetting("scholarshipExams", next);
  };
  return (
    <div style={styles.card} className="profile-card-mobile">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #a78bfa, #7c3aed)", borderRadius: "2px" }} />
          <div className="section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#1e1b4b", letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>
            SCHOLARSHIP PRACTICE
          </div>
        </div>
        <div
          role="switch"
          aria-checked={enabled}
          tabIndex={0}
          onClick={() => onUpdateSetting("scholarshipEnabled", !enabled)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onUpdateSetting("scholarshipEnabled", !enabled); } }}
          style={{
            display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "10px 20px", borderRadius: "100px",
            background: enabled ? "linear-gradient(135deg, #f5f3ff, #ede9fe)" : "#f8fafc",
            border: `1.5px solid ${enabled ? "#a78bfa" : "#e2e8f0"}`, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: enabled ? "0 4px 12px rgba(124,58,237,0.12)" : "none",
          }}
        >
          <div style={{ width: "40px", height: "22px", background: enabled ? "#7c3aed" : "#cbd5e1", borderRadius: "20px", position: "relative", transition: "all 0.3s" }}>
            <motion.div animate={{ x: enabled ? 20 : 3 }} style={{ width: "16px", height: "16px", background: "white", borderRadius: "50%", position: "absolute", top: "3px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: 900, color: enabled ? "#5b21b6" : "#64748b", letterSpacing: "0.02em" }}>
            {enabled ? "ENABLED" : "DISABLED"}
          </span>
        </div>
      </div>
      {enabled && exams.length > 0 && (
        <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {exams.map((exam) => {
            const on = chosen.includes(exam.id);
            return (
              <button
                key={exam.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleExam(exam.id)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 16px", borderRadius: "12px", cursor: "pointer",
                  fontWeight: 800, fontSize: "0.82rem", border: `1.5px solid ${on ? "#a78bfa" : "#e2e8f0"}`,
                  background: on ? "#f5f3ff" : "#f8fafc", color: on ? "#5b21b6" : "#64748b",
                }}
              >
                <span style={{ width: 18, height: 18, borderRadius: 6, display: "grid", placeItems: "center", background: on ? "#7c3aed" : "#e2e8f0", color: "#fff" }}>
                  {on && <Check size={12} strokeWidth={3} />}
                </span>
                {exam.title}
              </button>
            );
          })}
        </div>
      )}
      <div style={{ marginTop: "14px", display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.78rem", color: "#64748b", fontWeight: 600, lineHeight: 1.5 }}>
        <Award size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: 2 }} />
        <span>Adds one sidebar page per exam ticked above — OC, Selective and Scholarship (ACER) — each with topic tests, full-length mocks (OC, Selective) and a weak-spot summary. Not part of Daily Practice or Exam Prep.</span>
      </div>
    </div>
  );
}
