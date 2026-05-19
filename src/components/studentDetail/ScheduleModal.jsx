import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { TIME_OPTIONS } from "../../constants/timeOptions";

export default function ScheduleModal({
  student,
  sessionForm,
  setSessionForm,
  booking,
  onClose,
  onBook,
}) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'start' | 'end' | null
  const dropdownRef = useRef(null);

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
        onClick={() => {
          onClose();
          setOpenDropdown(null);
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "32px",
          width: "100%",
          maxWidth: "500px",
          overflow: "visible",
          boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Purple Header */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            padding: "32px",
            color: "white",
            position: "relative",
            borderRadius: "32px 32px 0 0",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900 }}>
            Schedule Lesson
          </h2>
          <p style={{ margin: "8px 0 0", opacity: 0.9, fontWeight: 500 }}>
            Create a new session for a student
          </p>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 32,
              right: 32,
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: "12px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: "32px", display: "grid", gap: "24px" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.75rem",
                color: "#94a3b8",
                textTransform: "uppercase",
              }}
            >
              STUDENT
            </label>
            <div
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                background: "#f8fafc",
                fontWeight: 700,
                color: "#1e293b",
              }}
            >
              {student.name || "Student"}
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.75rem",
                color: "#94a3b8",
                textTransform: "uppercase",
              }}
            >
              SUBJECT
            </label>
            <input
              type="text"
              value={sessionForm.focus}
              onChange={(e) =>
                setSessionForm({ ...sessionForm, focus: e.target.value })
              }
              placeholder="e.g. Mathematics"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 800,
                fontSize: "0.75rem",
                color: "#94a3b8",
                textTransform: "uppercase",
              }}
            >
              DATE
            </label>
            <input
              type="date"
              value={sessionForm.date}
              onChange={(e) =>
                setSessionForm({ ...sessionForm, date: e.target.value })
              }
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {["start", "end"].map((field) => (
              <div key={field} style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  {field === "start" ? "START TIME" : "END TIME"}
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === field ? null : field)
                  }
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "16px",
                    border: `1px solid ${openDropdown === field ? "#6366f1" : "#e2e8f0"}`,
                    background: "white",
                    fontWeight: 700,
                    outline: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#1e293b",
                    fontSize: "1rem",
                  }}
                >
                  {sessionForm[field]}
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.7rem",
                      marginLeft: "4px",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openDropdown === field && (
                  <div
                    ref={dropdownRef}
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 4px)",
                      left: 0,
                      right: 0,
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "16px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                      zIndex: 9999,
                      maxHeight: "260px",
                      overflowY: "auto",
                    }}
                  >
                    {TIME_OPTIONS.map((t) => (
                      <div
                        key={t}
                        ref={
                          sessionForm[field] === t
                            ? (el) =>
                                el &&
                                el.scrollIntoView({ block: "center" })
                            : null
                        }
                        onClick={() => {
                          setSessionForm({ ...sessionForm, [field]: t });
                          setOpenDropdown(null);
                        }}
                        style={{
                          padding: "12px 16px",
                          cursor: "pointer",
                          fontWeight:
                            sessionForm[field] === t ? 800 : 600,
                          background:
                            sessionForm[field] === t
                              ? "#ede9fe"
                              : "transparent",
                          color:
                            sessionForm[field] === t
                              ? "#6366f1"
                              : "#1e293b",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) => {
                          if (sessionForm[field] !== t)
                            e.currentTarget.style.background = "#f8fafc";
                        }}
                        onMouseLeave={(e) => {
                          if (sessionForm[field] !== t)
                            e.currentTarget.style.background =
                              "transparent";
                        }}
                      >
                        {t}
                        {sessionForm[field] === t && (
                          <span style={{ color: "#6366f1" }}>✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={sessionForm.recurring}
              onChange={(e) =>
                setSessionForm({
                  ...sessionForm,
                  recurring: e.target.checked,
                })
              }
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
            <span style={{ fontWeight: 700, color: "#475569" }}>
              Recurring Weekly
            </span>
          </label>

          <button
            onClick={onBook}
            disabled={booking}
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: "20px",
              background: "linear-gradient(to right, #6366f1, #818cf8)",
              color: "white",
              border: 0,
              fontWeight: 900,
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
              marginTop: "8px",
            }}
          >
            {booking ? "Creating..." : "Create Session"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
