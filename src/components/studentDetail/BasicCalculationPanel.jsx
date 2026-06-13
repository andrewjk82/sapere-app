import { motion } from "framer-motion";
import { Clock, Target, Check } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";

export default function BasicCalculationPanel({
  styles,
  student,
  assignedChapters,
  completedChapters,
  onUpdateSetting,
  onToggleChapter,
  onToggleStage,
}) {
  return (
    <div style={styles.card} className="profile-card-mobile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "24px",
              background:
                "linear-gradient(to bottom, #6366f1, #818cf8)",
              borderRadius: "2px",
            }}
          ></div>
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
            BASIC CALCULATION
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {/* Toggle Switch */}
          <div
            onClick={() =>
              onUpdateSetting(
                "calculationEnabled",
                (student?.calculationEnabled ?? true) === false,
              )
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              padding: "10px 20px",
              borderRadius: "100px",
              background:
                (student?.calculationEnabled ?? true) !== false
                  ? "linear-gradient(135deg, #f5f3ff, #ede9fe)"
                  : "#f8fafc",
              border: `1.5px solid ${(student?.calculationEnabled ?? true) !== false ? "#818cf8" : "#e2e8f0"}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow:
                (student?.calculationEnabled ?? true) !== false
                  ? "0 4px 12px rgba(99,102,241,0.12)"
                  : "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "22px",
                background:
                  (student?.calculationEnabled ?? true) !== false
                    ? "#6366f1"
                    : "#cbd5e1",
                borderRadius: "20px",
                position: "relative",
                transition: "all 0.3s",
              }}
            >
              <motion.div
                animate={{
                  x:
                    (student?.calculationEnabled ?? true) !== false
                      ? 20
                      : 3,
                }}
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
                color:
                  (student?.calculationEnabled ?? true) !== false
                    ? "#4338ca"
                    : "#64748b",
                letterSpacing: "0.02em",
              }}
            >
              {(student?.calculationEnabled ?? true) !== false
                ? "ENABLED"
                : "DISABLED"}
            </span>
          </div>

          {/* Timer & Count Group */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background:
                "linear-gradient(135deg, #fffbeb, #fff7ed)",
              padding: "6px 8px",
              borderRadius: "100px",
              border: "1.5px solid #fbbf24",
              boxShadow: "0 4px 15px rgba(245, 158, 11, 0.08)",
              gap: "4px",
            }}
          >
            {/* Timer Segment */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
              }}
            >
              <Clock size={16} color="#b45309" />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  color: "#b45309",
                  textTransform: "uppercase",
                }}
              >
                Timer
              </span>
              <select
                value={student.calcTimeLimit || 30}
                onChange={(e) =>
                  onUpdateSetting(
                    "calcTimeLimit",
                    parseInt(e.target.value) || 30,
                  )
                }
                style={{
                  background: "white",
                  border: "1.5px solid #fcd34d",
                  borderRadius: "12px",
                  fontWeight: 900,
                  color: "#92400e",
                  outline: "none",
                  padding: "4px 10px",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  appearance: "none",
                  textAlign: "center",
                  minWidth: "65px",
                }}
              >
                {[
                  30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
                ].map((s) => (
                  <option key={s} value={s}>
                    {s}s
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                width: "1.5px",
                height: "24px",
                background: "rgba(180, 83, 9, 0.15)",
                borderRadius: "1px",
              }}
            ></div>

            {/* Count Segment */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
              }}
            >
              <Target size={16} color="#b45309" />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  color: "#b45309",
                  textTransform: "uppercase",
                }}
              >
                Count
              </span>
              <input
                type="number"
                min="5"
                max="50"
                value={student.calcQuestionCount || 10}
                onChange={(e) =>
                  onUpdateSetting(
                    "calcQuestionCount",
                    parseInt(e.target.value) || 10,
                  )
                }
                style={{
                  width: "50px",
                  background: "white",
                  border: "1.5px solid #fcd34d",
                  borderRadius: "12px",
                  fontWeight: 900,
                  color: "#92400e",
                  outline: "none",
                  textAlign: "center",
                  fontSize: "0.95rem",
                  padding: "4px 0",
                  transition: "all 0.2s",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#d97706")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "#fcd34d")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {(student?.calculationEnabled ?? true) !== false && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
      >
        {(CURRICULUM_DATA["Daily Calculation"] || []).map(
          (stage) => {
            // Determine if all topics in stage are assigned
            const stageTopicIds = stage.topics.map((t) => t.id);
            const isFullyAssigned = stageTopicIds.every((id) =>
              assignedChapters.includes(id),
            );
            const isPartiallyAssigned =
              !isFullyAssigned &&
              stageTopicIds.some((id) =>
                assignedChapters.includes(id),
              );

            const toggleStage = () => {
              const allInDone = stageTopicIds.every((id) =>
                completedChapters.includes(id),
              );
              const allInActive = stageTopicIds.every((id) =>
                assignedChapters.includes(id),
              );

              let nextAssigned = [...assignedChapters];
              let nextCompleted = [...completedChapters];

              if (!allInActive && !allInDone) {
                // None -> All Active
                stageTopicIds.forEach((id) => {
                  if (!nextAssigned.includes(id))
                    nextAssigned.push(id);
                  nextCompleted = nextCompleted.filter(
                    (cid) => cid !== id,
                  );
                });
              } else if (allInActive) {
                // All Active -> All Done
                stageTopicIds.forEach((id) => {
                  nextAssigned = nextAssigned.filter(
                    (aid) => aid !== id,
                  );
                  if (!nextCompleted.includes(id))
                    nextCompleted.push(id);
                });
              } else {
                // All Done -> None
                stageTopicIds.forEach((id) => {
                  nextAssigned = nextAssigned.filter(
                    (aid) => aid !== id,
                  );
                  nextCompleted = nextCompleted.filter(
                    (cid) => cid !== id,
                  );
                });
              }

              onToggleStage(nextAssigned, nextCompleted);
            };

            return (
              <div
                key={stage.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "2px solid",
                  borderColor: isFullyAssigned
                    ? "#d97706"
                    : isPartiallyAssigned
                      ? "#fcd34d"
                      : "#f1f5f9",
                  background: isFullyAssigned ? "#fffbeb" : "white",
                }}
              >
                <div
                  onClick={toggleStage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: isFullyAssigned
                        ? "#d97706"
                        : isPartiallyAssigned
                          ? "#fcd34d"
                          : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {(isFullyAssigned || isPartiallyAssigned) && (
                      <Check size={14} />
                    )}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "#92400e",
                    }}
                  >
                    {stage.title}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "8px",
                    paddingLeft: "40px",
                    marginTop: "8px",
                  }}
                >
                  {stage.topics.map((topic) => {
                    const isTopicAssigned =
                      assignedChapters.includes(topic.id);
                    const isTopicCompleted =
                      completedChapters.includes(topic.id);
                    return (
                      <div
                        key={topic.id}
                        onClick={() =>
                          onToggleChapter(topic.id)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: "2px solid",
                            borderColor: isTopicCompleted
                              ? "#22c55e"
                              : isTopicAssigned
                                ? "#6366f1"
                                : "#d97706",
                            background: isTopicCompleted
                              ? "#22c55e"
                              : isTopicAssigned
                                ? "#6366f1"
                                : "transparent",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: isTopicCompleted
                              ? "#166534"
                              : isTopicAssigned
                                ? "#4338ca"
                                : "#78350f",
                            opacity:
                              isTopicAssigned || isTopicCompleted
                                ? 1
                                : 0.5,
                          }}
                        >
                          {topic.group}: {topic.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          },
        )}
      </div>
      )}
    </div>
  );
}
