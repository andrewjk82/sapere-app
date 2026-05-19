import { motion } from "framer-motion";
import { X, Check, Trophy } from "lucide-react";
import MathView, { toDisplayText } from "../MathView";

const getChallengeOptions = (question) =>
  Array.isArray(question?.options) ? question.options : [];

const getChallengeOptionText = (option) => toDisplayText(option);

const getChallengeOptionImage = (option) => {
  if (!option || typeof option !== "object") return "";
  return option.imageUrl || option.image || "";
};

const getWorkingOutPages = (result) => {
  if (Array.isArray(result?.workingOutPages) && result.workingOutPages.length > 0) {
    return result.workingOutPages.filter(Boolean);
  }
  return result?.workingOut ? [result.workingOut] : [];
};

export default function ChallengeDetailModal({
  selectedChallenge,
  onClose,
  setWorkingOutPreview,
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClose()}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "700px",
          maxHeight: "85vh",
          backgroundColor: "#fff",
          borderRadius: "24px",
          overflowY: "auto",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 4px",
                fontSize: "1.5rem",
                fontWeight: 900,
              }}
            >
              Challenge Details
            </h2>
            <p style={{ margin: 0, color: "#64748b", fontWeight: 600 }}>
              {selectedChallenge.challengeType === "calc"
                ? "Basic Calculation"
                : "Daily Practice"}{" "}
              • {selectedChallenge.id} • Score: {selectedChallenge.score}/
              {selectedChallenge.total}
            </p>
          </div>
          <button
            onClick={() => onClose()}
            style={{
              background: "#f1f5f9",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
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

        {selectedChallenge.hasDetailSnapshot && !selectedChallenge.detailSnapshotLoaded && !(Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0) ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#64748b",
              background: "#f8fafc",
              borderRadius: "16px",
              border: "2px dashed #e2e8f0",
            }}
          >
            <div className="app-spinner" style={{ margin: "0 auto 16px" }}></div>
            <p style={{ margin: 0, fontWeight: 800, fontSize: "1.05rem" }}>
              Loading detailed results...
            </p>
          </div>
        ) : Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {selectedChallenge.questions.map((q, idx) => {
              const result = selectedChallenge.answerResults?.[idx];
              const userAnswer =
                result?.selectedAnswer ??
                (selectedChallenge.userAnswers
                  ? selectedChallenge.userAnswers[idx]
                  : null);
              const options = getChallengeOptions(q);
              const correctOptionText =
                q.isManual && q.answer !== undefined
                  ? getChallengeOptionText(
                      options[parseInt(q.answer, 10)],
                    )
                  : String(q.answer ?? "");
              const isCorrect =
                result?.correct ??
                String(userAnswer) ===
                  String(correctOptionText || q.answer);
              const questionText = toDisplayText(
                q.text || q.question,
                "Question text unavailable",
              );
              return (
                <div
                  key={idx}
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      marginBottom: "16px",
                      color: "#1e293b",
                      fontSize: "1.05rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {idx + 1}. <MathView content={questionText} />
                  </div>

                  {/* Display Working Out / Handwritten notes */}
                  {(() => {
                    const workingOutPages = getWorkingOutPages(result);
                    if (workingOutPages.length === 0) return null;
                    return (
                      <div
                        style={{
                          marginBottom: "16px",
                          borderRadius: "16px",
                          overflow: "hidden",
                          border: "1px solid #e2e8f0",
                          background: "#fff",
                        }}
                      >
                        <button
                          onClick={() =>
                            setWorkingOutPreview({
                              pages: workingOutPages,
                              page: 0,
                              title: `Question ${idx + 1} Working Out`,
                            })
                          }
                          style={{
                            width: "100%",
                            padding: "8px 12px",
                            background: "#f8fafc",
                            border: "none",
                            borderBottom: "1px solid #e2e8f0",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            color: "#6366f1",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            textAlign: "left",
                            cursor: "pointer",
                          }}
                        >
                          Working Out{" "}
                          {workingOutPages.length > 1
                            ? `• ${workingOutPages.length} pages`
                            : "• Click to enlarge"}
                        </button>
                        <button
                          onClick={() =>
                            setWorkingOutPreview({
                              pages: workingOutPages,
                              page: 0,
                              title: `Question ${idx + 1} Working Out`,
                            })
                          }
                          style={{
                            width: "100%",
                            border: "none",
                            padding: 0,
                            background: "#fff",
                            cursor: "zoom-in",
                          }}
                        >
                          <img
                            src={workingOutPages[0]}
                            alt="Student Working Out"
                            style={{
                              width: "100%",
                              maxHeight: "400px",
                              objectFit: "contain",
                              background: "#fff",
                              display: "block",
                            }}
                          />
                        </button>
                      </div>
                    );
                  })()}

                  {q.questionImage && (
                    <img
                      src={q.questionImage}
                      alt="Question"
                      style={{
                        width: "100%",
                        maxHeight: "180px",
                        objectFit: "contain",
                        margin: "0 0 16px",
                        borderRadius: "14px",
                        background: "#fff",
                      }}
                    />
                  )}
                  {options.length === 0 ? (
                    <div style={{ display: "grid", gap: "10px" }}>
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: "12px",
                          background: isCorrect ? "#dcfce7" : "#fee2e2",
                          border: `1px solid ${isCorrect ? "#22c55e" : "#ef4444"}`,
                          color: isCorrect ? "#166534" : "#991b1b",
                          fontWeight: 800,
                        }}
                      >
                        Student Answer:{" "}
                        <MathView
                          content={String(userAnswer ?? "No answer")}
                        />
                      </div>
                      {!isCorrect && (
                        <div
                          style={{
                            padding: "12px 16px",
                            borderRadius: "12px",
                            background: "#dcfce7",
                            border: "1px solid #22c55e",
                            color: "#166534",
                            fontWeight: 800,
                          }}
                        >
                          Correct Answer:{" "}
                          <MathView content={String(q.answer ?? "")} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: "grid", gap: "8px" }}>
                      {options.map((opt, i) => {
                        const optText = getChallengeOptionText(opt);
                        const optImage = getChallengeOptionImage(opt);
                        const isCorrectChoice = q.isManual
                          ? String(i) === String(q.answer)
                          : String(optText) === String(q.answer);
                        const isUserChoice =
                          String(optText) === String(userAnswer);
                        let bg = "white";
                        let border = "1px solid #cbd5e1";
                        let color = "#475569";
                        if (isCorrectChoice) {
                          bg = "#dcfce7";
                          border = "1px solid #22c55e";
                          color = "#166534";
                        } else if (isUserChoice && !isCorrect) {
                          bg = "#fee2e2";
                          border = "1px solid #ef4444";
                          color = "#991b1b";
                        }
                        return (
                          <div
                            key={i}
                            style={{
                              padding: "12px 16px",
                              borderRadius: "12px",
                              background: bg,
                              border: border,
                              color: color,
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                minWidth: 0,
                              }}
                            >
                              {optImage && (
                                <img
                                  src={optImage}
                                  alt=""
                                  style={{
                                    width: "44px",
                                    height: "44px",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                    background: "#fff",
                                  }}
                                />
                              )}
                              <MathView content={optText} />
                            </span>
                            {isCorrectChoice && (
                              <Check
                                size={18}
                                style={{
                                  color: "#166534",
                                  flexShrink: 0,
                                }}
                              />
                            )}
                            {isUserChoice && !isCorrect && (
                              <X
                                size={18}
                                style={{
                                  color: "#991b1b",
                                  flexShrink: 0,
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {q.solution && (
                    <div
                      style={{
                        marginTop: "14px",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        background: "#eef2ff",
                        color: "#475569",
                        fontWeight: 700,
                        lineHeight: 1.5,
                      }}
                    >
                      <MathView content={q.solution} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#94a3b8",
              background: "#f8fafc",
              borderRadius: "16px",
              border: "2px dashed #e2e8f0",
            }}
          >
            <Trophy
              size={48}
              style={{ opacity: 0.2, margin: "0 auto 16px" }}
            />
            <p style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem" }}>
              Detailed history not available.
            </p>
            <p style={{ margin: "8px 0 0", fontSize: "0.9rem" }}>
              This challenge was completed before detailed tracking was
              enabled.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
