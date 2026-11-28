export default function StudentDashboardCard({
  styles,
  student,
  chapters,
  completedChapters,
  topicProgress,
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
            backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url('${"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200"}')`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>
            {student?.dreamJob || "Dream Career"}
          </div>
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

              // Topics done by the Class-page rule (taught → homework checked → mistakes reviewed), else the old
              // chapter tick count.
              const byTopics = topicProgress?.loaded && topicProgress.sum.total > 0;
              const progressPct = byTopics
                ? Math.round((topicProgress.sum.count.done / topicProgress.sum.total) * 100)
                : Math.round((completedInCurriculum.length / (chapters.length || 1)) * 100);
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
                    <span style={{ fontSize: "0.9rem" }}>
                      Curriculum
                      {byTopics && <span style={{ color: "#94a3b8", fontWeight: 700, marginLeft: 8, fontSize: "0.78rem" }}>{topicProgress.sum.count.done}/{topicProgress.sum.total} topics</span>}
                    </span>
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

      </div>
    </div>
  );
}
