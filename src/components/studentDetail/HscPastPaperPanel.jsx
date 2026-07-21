import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

/**
 * Teacher-side HSC Past Paper add-on panel.
 *
 * Mirrors ExamPrepPanel's enable/disable pill shape. When enabled, adds
 * `hscPastPaperCount` questions drawn from sync_meta/hsc_past_paper_pool
 * (every exam:* chapter's questions, all schools combined) on top of the
 * student's normal Daily Challenge question count — no per-topic mapping,
 * since these questions aren't tied to the student's curriculum chapters.
 */
export default function HscPastPaperPanel({ styles, student, onUpdateSetting }) {
  const enabled = student?.hscPastPaperEnabled === true;
  const count = Math.max(1, Math.min(20, Number(student?.hscPastPaperCount) || 3));

  return (
    <div style={styles.card} className="profile-card-mobile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: enabled ? "20px" : "0",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "4px",
              height: "24px",
              background: "linear-gradient(to bottom, #a78bfa, #7c3aed)",
              borderRadius: "2px",
            }}
          />
          <div
            className="section-title"
            style={{
              fontSize: "0.85rem",
              fontWeight: 800,
              color: "#1e1b4b",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            HSC PAST PAPER QUESTIONS
          </div>
        </div>

        <div
          onClick={() => onUpdateSetting("hscPastPaperEnabled", !enabled)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "100px",
            background: enabled ? "linear-gradient(135deg, #f5f3ff, #ede9fe)" : "#f8fafc",
            border: `1.5px solid ${enabled ? "#a78bfa" : "#e2e8f0"}`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: enabled ? "0 4px 12px rgba(124,58,237,0.12)" : "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "22px",
              background: enabled ? "#7c3aed" : "#cbd5e1",
              borderRadius: "20px",
              position: "relative",
              transition: "all 0.3s",
            }}
          >
            <motion.div
              animate={{ x: enabled ? 20 : 3 }}
              style={{
                width: "16px",
                height: "16px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "3px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 900,
              color: enabled ? "#5b21b6" : "#64748b",
              letterSpacing: "0.02em",
            }}
          >
            {enabled ? "ENABLED" : "DISABLED"}
          </span>
        </div>
      </div>

      {enabled && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "18px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <GraduationCap size={16} color="#7c3aed" />
            <span style={{ fontWeight: 900, color: "#1e1b4b", fontSize: "0.9rem" }}>Extra questions per Daily Challenge</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              type="button"
              onClick={() => onUpdateSetting("hscPastPaperCount", Math.max(1, count - 1))}
              style={{
                width: "36px", height: "36px", borderRadius: "10px",
                border: "1.5px solid #e2e8f0", background: "#f8fafc",
                fontWeight: 900, fontSize: "1.1rem", color: "#475569", cursor: "pointer",
              }}
            >
              −
            </button>
            <span style={{ fontWeight: 900, fontSize: "1.3rem", color: "#5b21b6", minWidth: "32px", textAlign: "center" }}>
              {count}
            </span>
            <button
              type="button"
              onClick={() => onUpdateSetting("hscPastPaperCount", Math.min(20, count + 1))}
              style={{
                width: "36px", height: "36px", borderRadius: "10px",
                border: "1.5px solid #e2e8f0", background: "#f8fafc",
                fontWeight: 900, fontSize: "1.1rem", color: "#475569", cursor: "pointer",
              }}
            >
              +
            </button>
            <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>
              added on top of the normal {student?.dailyQuestionCount || 10}-question count, mixed in randomly
            </span>
          </div>
          <div style={{ marginTop: "12px", fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}>
            Drawn from 11 HSC trial exam papers (Ascham, Barker, Baulkham Hills, Abbotsleigh, Blacktown Boys, Caringbah,
            Cherrybrook Tech, Cranbrook, Danebank, Fort Street — 1000+ questions), independent of this student's assigned
            curriculum chapters.
          </div>
        </div>
      )}
    </div>
  );
}
