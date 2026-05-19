import React from "react";
import { Check } from "lucide-react";

// "Assign Curriculum" tab — extracted from StudentDetail.jsx.
// Chapter assignment data and the toggle handler stay in StudentDetail;
// this component is purely presentational.
const CurriculumTab = ({
  styles,
  assignedYears,
  chapters,
  assignedChapters,
  completedChapters,
  onToggleChapter,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={styles.card} className="profile-card-mobile">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            className="section-title"
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#94a3b8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ASSIGN CURRICULUM
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                background: "#f8fafc",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #f1f5f9",
              }}
            >
              <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                YEAR:
              </span>
              <span style={{ fontWeight: 800, color: "#6366f1" }}>
                {assignedYears.join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {chapters.map((ch) => {
            const isAssigned = assignedChapters.includes(ch.id);
            const isCompleted = completedChapters.includes(ch.id);
            const status = isCompleted
              ? "DONE"
              : isAssigned
                ? "ACTIVE"
                : null;

            return (
              <div
                key={ch.id}
                onClick={() => onToggleChapter(ch.id)}
                style={{
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "2px solid",
                  borderColor: isCompleted
                    ? "#22c55e"
                    : isAssigned
                      ? "#6366f1"
                      : "#f1f5f9",
                  background: isCompleted
                    ? "#f0fdf4"
                    : isAssigned
                      ? "#f5f3ff"
                      : "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: isCompleted
                        ? "#22c55e"
                        : isAssigned
                          ? "#6366f1"
                          : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {(isAssigned || isCompleted) && <Check size={14} />}
                  </div>
                  {status && (
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 900,
                        padding: "4px 8px",
                        borderRadius: "6px",
                        background: isCompleted
                          ? "rgba(34,197,94,0.1)"
                          : "rgba(99,102,241,0.1)",
                        color: isCompleted ? "#166534" : "#4338ca",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {status}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: isCompleted
                      ? "#166534"
                      : isAssigned
                        ? "#4338ca"
                        : "#1e1b4b",
                  }}
                >
                  {ch.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumTab;
