import { useState } from "react";
import { Check } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";

export default function DailyPracticeSettings({
  styles,
  student,
  dailyPracticeConfig,
  onUpdateCurriculumSetting,
  onUpdateDailyConfig,
  onToggleDailyYear,
  onToggleDailyChapter,
}) {
  const [dailyYearsOpen, setDailyYearsOpen] = useState(false);

  return (
    <div style={styles.card} className="profile-card-mobile">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #10b981, #34d399)", borderRadius: "2px" }} />
          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#064e3b", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Daily Practice Settings
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", background: "#ecfdf5", padding: "8px 14px", borderRadius: "20px", border: "1.5px solid #a7f3d0" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#059669", textTransform: "uppercase" }}>Daily:</span>
          <input
            type="number" min="1" max="50"
            value={student.dailyQuestionCount || 10}
            onChange={(e) => onUpdateCurriculumSetting("dailyQuestionCount", Math.max(1, Math.min(50, parseInt(e.target.value, 10) || 10)))}
            style={{ width: "54px", background: "white", border: "1.5px solid #6ee7b7", borderRadius: "12px", fontWeight: 900, color: "#047857", outline: "none", textAlign: "center", fontSize: "0.95rem", padding: "4px 0" }}
          />
          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669" }}>questions</span>
        </div>
      </div>

      {/* Summary Tags */}
      {(dailyPracticeConfig.years.length > 0 || dailyPracticeConfig.chapters.length > 0) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px", padding: "12px 16px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#065f46", textTransform: "uppercase", alignSelf: "center", marginRight: "4px" }}>Active:</span>
          {dailyPracticeConfig.years.map(y => (
            <span key={y} style={{ fontSize: "0.75rem", fontWeight: 700, background: "#10b981", color: "white", borderRadius: "100px", padding: "3px 10px" }}>{y} (All)</span>
          ))}
          {dailyPracticeConfig.chapters.length > 0 && (
            <span style={{ fontSize: "0.75rem", fontWeight: 700, background: "#34d399", color: "white", borderRadius: "100px", padding: "3px 10px" }}>{dailyPracticeConfig.chapters.length} chapter{dailyPracticeConfig.chapters.length > 1 ? "s" : ""} selected</span>
          )}
          <button onClick={() => onUpdateDailyConfig({ years: [], chapters: [] })} style={{ fontSize: "0.7rem", fontWeight: 700, background: "none", border: "1px solid #86efac", color: "#059669", borderRadius: "100px", padding: "2px 10px", cursor: "pointer", marginLeft: "auto" }}>Clear All</button>
        </div>
      )}

      {/* Accordion Rows per Year */}
      <div style={{ display: "grid", gap: "8px" }}>
        {Object.entries(CURRICULUM_DATA)
          .filter(([year]) => year.startsWith("Year"))
          .map(([year, data]) => {
            const isYearSelected = dailyPracticeConfig.years.includes(year);
            const isExpanded = !isYearSelected && (dailyYearsOpen === year);

            let chapters = [];
            if (Array.isArray(data)) {
              chapters = data;
            } else {
              Object.entries(data).forEach(([course, courseChapters]) => {
                chapters = [...chapters, ...courseChapters.map(c => ({ ...c, _course: course }))];
              });
            }

            const selectedChaptersInYear = chapters.filter(ch => dailyPracticeConfig.chapters.includes(ch.id));
            const hasPartialSelection = !isYearSelected && selectedChaptersInYear.length > 0;

            return (
              <div key={year}>
                {/* Year Row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: isExpanded ? "12px 12px 0 0" : "12px",
                  background: isYearSelected ? "linear-gradient(135deg, #ecfdf5, #d1fae5)" : hasPartialSelection ? "#f0fdf4" : "#f8fafc",
                  border: `1.5px solid ${isYearSelected ? "#6ee7b7" : hasPartialSelection ? "#86efac" : "#e2e8f0"}`,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}>
                  {/* Full-year checkbox */}
                  <div
                    onClick={(e) => { e.stopPropagation(); onToggleDailyYear(year); }}
                    style={{
                      width: "20px", height: "20px", borderRadius: "6px", flexShrink: 0,
                      background: isYearSelected ? "#10b981" : "white",
                      border: `2px solid ${isYearSelected ? "#10b981" : "#cbd5e1"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", transition: "all 0.2s",
                    }}
                  >
                    {isYearSelected && <Check size={12} strokeWidth={4} />}
                  </div>

                  {/* Year label + partial count */}
                  <div
                    style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}
                    onClick={() => setDailyYearsOpen(isExpanded ? null : year)}
                  >
                    <span style={{ fontWeight: 800, fontSize: "0.9rem", color: isYearSelected ? "#065f46" : "#374151" }}>{year}</span>
                    {hasPartialSelection && (
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, background: "#d1fae5", color: "#059669", borderRadius: "100px", padding: "2px 8px" }}>
                        {selectedChaptersInYear.length}/{chapters.length}
                      </span>
                    )}
                    {isYearSelected && (
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, background: "#10b981", color: "white", borderRadius: "100px", padding: "2px 8px" }}>All chapters</span>
                    )}
                  </div>

                  {/* Expand arrow */}
                  {!isYearSelected && (
                    <div
                      onClick={() => setDailyYearsOpen(isExpanded ? null : year)}
                      style={{ color: "#94a3b8", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", fontSize: "1rem", fontWeight: 900, lineHeight: 1 }}
                    >
                      ▾
                    </div>
                  )}
                </div>

                {/* Expanded Chapter Grid */}
                {isExpanded && (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "8px",
                    padding: "12px",
                    background: "#f8fafc",
                    border: "1.5px solid #e2e8f0",
                    borderTop: "none",
                    borderRadius: "0 0 12px 12px",
                  }}>
                    {chapters.map(ch => {
                      const isSel = dailyPracticeConfig.chapters.includes(ch.id);
                      return (
                        <div
                          key={ch.id}
                          onClick={() => onToggleDailyChapter(ch.id)}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "10px 12px", borderRadius: "10px",
                            background: isSel ? "#ecfdf5" : "white",
                            border: `1.5px solid ${isSel ? "#34d399" : "#e2e8f0"}`,
                            cursor: "pointer", transition: "all 0.15s",
                          }}
                        >
                          <div style={{
                            width: "16px", height: "16px", borderRadius: "4px", flexShrink: 0,
                            background: isSel ? "#10b981" : "transparent",
                            border: `2px solid ${isSel ? "#10b981" : "#cbd5e1"}`,
                            display: "flex", alignItems: "center", justifyContent: "center", color: "white",
                          }}>
                            {isSel && <Check size={10} strokeWidth={4} />}
                          </div>
                          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: isSel ? "#065f46" : "#475569", lineHeight: 1.3 }}>
                            {ch._course && <span style={{ opacity: 0.55, fontSize: "0.68rem", display: "block" }}>{ch._course}</span>}
                            {ch.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
