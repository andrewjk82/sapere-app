import { X } from "lucide-react";

export default function StudentDashboardCard({
  styles,
  student,
  uploading,
  fileInputRef,
  onImageUpload,
  chapters,
  completedChapters,
  editingTerm,
  setEditingTerm,
  showToast,
  onUpdateCurriculumSetting,
}) {
  return (
    <div
      className="stats-grid-mobile"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        margin: "24px 0",
      }}
    >
      <div style={styles.card} className="dashboard-preview-card">
        <div
          className="section-title"
          style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#94a3b8",
            marginBottom: "16px",
          }}
        >
          DASHBOARD PREVIEW
        </div>
        <div
          style={{
            ...styles.visionBoard,
            backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url('${student?.dreamImageUrl || "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200"}')`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>
            {student?.dreamJob || "Dream Career"}
          </div>
          <button
            disabled={uploading}
            onClick={() => fileInputRef.current.click()}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "4px 8px",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.5)",
              border: 0,
              color: "white",
              fontSize: "0.7rem",
              cursor: uploading ? "wait" : "pointer",
            }}
          >
            {uploading ? "Uploading..." : "Change Image"}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={onImageUpload}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ ...styles.card, flex: "none", padding: "24px" }}>
          <div
            className="section-title"
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#94a3b8",
              marginBottom: "16px",
            }}
          >
            ACADEMIC PROGRESS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {(() => {
              const currentChapterIds = new Set(chapters.map((ch) => ch.id));
              const uniqueCompleted = new Set(completedChapters);
              const completedInCurriculum = Array.from(uniqueCompleted).filter(
                (id) => currentChapterIds.has(id),
              );

              const progressPct = Math.round(
                (completedInCurriculum.length / (chapters.length || 1)) * 100,
              );
              const clampedPct = Math.min(progressPct, 100);

              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                      fontWeight: 800,
                    }}
                  >
                    <span style={{ fontSize: "0.9rem" }}>Curriculum</span>
                    <span style={{ color: "#6366f1", fontSize: "0.9rem" }}>{clampedPct}%</span>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      background: "#e2e8f0",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${clampedPct}%`,
                        height: "100%",
                        background: "#6366f1",
                      }}
                    ></div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* TERM RESULTS CARD */}
        <div style={{ ...styles.card, flex: "none", padding: "24px" }}>
          <div
            className="section-title"
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#94a3b8",
              marginBottom: "16px",
            }}
          >
            TERM RESULTS & REPORTS
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[1, 2, 3, 4].map(term => {
              const score = student?.[`term${term}Result`];
              const link = student?.[`term${term}Link`];
              const isEditing = editingTerm === term;

              return (
                <div key={term} style={{ display: "flex", flexDirection: "column" }}>
                  {!isEditing ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 16px",
                        borderRadius: "100px",
                        border: "2px solid #6366f1",
                        background: "white",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onClick={() => {
                        if (link) {
                          window.open(link, "_blank");
                        } else {
                          showToast("No report card available.", "warning");
                        }
                      }}
                    >
                      {/* Placeholder for perfect centering balance */}
                      <div style={{ width: "20px" }}></div>

                      <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, justifyContent: "center" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6366f1" }}>Term {term}</span>
                        {score && (
                          <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#8b5cf6", marginLeft: "2px" }}>{score}</span>
                        )}
                      </div>

                      <button
                        onClick={(e) => { e.stopPropagation(); setEditingTerm(term); }}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#94a3b8", padding: "2px", width: "20px", height: "20px"
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                      </button>
                    </div>
                  ) : (
                    <div style={{ padding: "16px", borderRadius: "24px", border: "2px solid #e2e8f0", background: "#f8fafc", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "4px" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#475569" }}>Edit Term {term}</span>
                        <button onClick={() => setEditingTerm(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: "4px" }}><X size={16} /></button>
                      </div>
                      <input
                        type="text"
                        placeholder="Score (Optional)"
                        value={score || ""}
                        onChange={(e) => onUpdateCurriculumSetting(`term${term}Result`, e.target.value)}
                        style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }}
                      />
                      <input
                        type="url"
                        placeholder="Link (e.g. Google Drive)"
                        value={link || ""}
                        onChange={(e) => onUpdateCurriculumSetting(`term${term}Link`, e.target.value)}
                        style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }}
                      />
                      <button
                        onClick={() => setEditingTerm(null)}
                        style={{ padding: "10px", borderRadius: "12px", background: "#6366f1", color: "white", fontWeight: 700, border: "none", cursor: "pointer", marginTop: "4px", width: "100%" }}
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
