import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { CURRICULUM_DATA } from "../../constants/curriculumData";

export default function EditStudentModal({
  editForm,
  setEditForm,
  roleOptions,
  onClose,
  onSave,
}) {
  return (
    <div
      className="app-modal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          position: "relative",
          background: "white",
          padding: "40px",
          borderRadius: "32px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <h2 style={{ fontWeight: 900, margin: 0, fontSize: "1.5rem" }}>
            Edit Student Profile
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "#f1f5f9",
              border: "none",
              borderRadius: "10px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#64748b",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background: editForm.role ? "#f8fafc" : "#fff1f2",
              border: `1px solid ${editForm.role ? "#e2e8f0" : "#fecdd3"}`,
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: editForm.role ? "#64748b" : "#e11d48",
              }}
            >
              Account Role
            </label>
            <select
              value={editForm.role}
              onChange={(e) =>
                setEditForm({ ...editForm, role: e.target.value })
              }
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontWeight: 800,
                background: "white",
                cursor: "pointer",
                color: "#1e1b4b",
              }}
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {!editForm.role && (
              <p
                style={{
                  margin: "10px 0 0",
                  color: "#be123c",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}
              >
                This account is missing a role. Set it to Student or
                Parent so automations and lists can classify it correctly.
              </p>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: "#64748b",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  fontWeight: 700,
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: "#64748b",
                }}
              >
                Phone
              </label>
              <input
                type="text"
                value={editForm.phone}
                onChange={(e) =>
                  setEditForm({ ...editForm, phone: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  fontWeight: 700,
                }}
              />
            </div>
          </div>
          <div
            onClick={() =>
              setEditForm({
                ...editForm,
                showHscGraph: !editForm.showHscGraph,
              })
            }
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "18px",
              borderRadius: "18px",
              background: editForm.showHscGraph ? "#f5f3ff" : "#f8fafc",
              border: `1.5px solid ${editForm.showHscGraph ? "#c4b5fd" : "#e2e8f0"}`,
              cursor: "pointer",
            }}
          >
            <div>
              <div style={{ fontWeight: 900, color: "#1e1b4b" }}>
                Show HSC graph to student
              </div>
              <div style={{ marginTop: "4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 700 }}>
                Adds the HSC score trend to the top of the student Curriculum page.
              </div>
            </div>
            <div
              style={{
                width: "48px",
                height: "28px",
                borderRadius: "999px",
                background: editForm.showHscGraph ? "#7c3aed" : "#cbd5e1",
                position: "relative",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <motion.div
                animate={{ x: editForm.showHscGraph ? 22 : 4 }}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "white",
                  position: "absolute",
                  top: "4px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.16)",
                }}
              />
            </div>
          </div>
          {/* Exam Prep toggle lives in the Challenge tab now (as a
              Basic-calculation-style accordion), not inside this modal. */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              School / Institution
            </label>
            <input
              type="text"
              value={editForm.school}
              onChange={(e) =>
                setEditForm({ ...editForm, school: e.target.value })
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
              }}
            />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              Assigned Year(s)
            </label>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {Object.keys(CURRICULUM_DATA).map((y) => {
                const isSelected = editForm.assignedYear.includes(y);
                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => {
                      const next = isSelected
                        ? editForm.assignedYear.filter((val) => val !== y)
                        : [...editForm.assignedYear, y];
                      setEditForm({ ...editForm, assignedYear: next });
                    }}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "12px",
                      border: "2px solid",
                      borderColor: isSelected ? "#6366f1" : "#e2e8f0",
                      background: isSelected ? "#f5f3ff" : "white",
                      color: isSelected ? "#6366f1" : "#64748b",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {y}
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              Course Level(s)
            </label>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {["Standard", "Advanced", "Extension 1", "Extension 2"].map(
                (c) => {
                  const isSelected = editForm.assignedCourse.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        const next = isSelected
                          ? editForm.assignedCourse.filter(
                              (val) => val !== c,
                            )
                          : [...editForm.assignedCourse, c];
                        setEditForm({
                          ...editForm,
                          assignedCourse: next,
                        });
                      }}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "12px",
                        border: "2px solid",
                        borderColor: isSelected ? "#818cf8" : "#e2e8f0",
                        background: isSelected ? "#f5f3ff" : "white",
                        color: isSelected ? "#4f46e5" : "#64748b",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {c}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              Enrolled Subjects
            </label>
            <div style={{ display: "flex", gap: "16px" }}>
              {["Maths", "English"].map((subj) => {
                const isSelected = (editForm.subject || "").includes(
                  subj,
                );
                return (
                  <div
                    key={subj}
                    onClick={() => {
                      let current = (editForm.subject || "")
                        .split(",")
                        .map((s) => s.trim())
                        .filter((s) => s);
                      if (isSelected) {
                        current = current.filter((s) => s !== subj);
                      } else {
                        current.push(subj);
                      }
                      setEditForm({
                        ...editForm,
                        subject: current.join(", "),
                      });
                    }}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "12px",
                      border: "2px solid",
                      borderColor: isSelected ? "#6366f1" : "#e2e8f0",
                      background: isSelected ? "#f5f3ff" : "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        border: "2px solid",
                        borderColor: isSelected ? "#6366f1" : "#cbd5e1",
                        background: isSelected
                          ? "#6366f1"
                          : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {isSelected && <Check size={12} />}
                    </div>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: isSelected ? "#6366f1" : "#475569",
                      }}
                    >
                      {subj}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              Dream Career / Goal
            </label>
            <input
              type="text"
              value={editForm.dreamJob}
              onChange={(e) =>
                setEditForm({ ...editForm, dreamJob: e.target.value })
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#64748b",
              }}
            >
              Address
            </label>
            <textarea
              value={editForm.address}
              onChange={(e) =>
                setEditForm({ ...editForm, address: e.target.value })
              }
              style={{
                width: "100%",
                height: "80px",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                resize: "none",
              }}
            />
          </div>

          <button
            onClick={onSave}
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: "20px",
              background: "#6366f1",
              color: "white",
              border: 0,
              fontWeight: 900,
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: "12px",
            }}
          >
            Save All Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}
