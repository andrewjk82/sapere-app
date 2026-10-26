import { useState, useEffect } from "react";
import { fetchQuestionsByIds } from "../../services/dailyAssignmentService";
import { applyLiveContent, liveLookupIds } from "../../utils/liveQuestionContent";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import ChallengeReviewView from "../challenge/ChallengeReviewView";

/**
 * ChallengeDetailModal — teacher view of a student's challenge attempt.
 *
 * Renders the SAME ChallengeReviewView that students see after finishing a
 * challenge, so teachers see exactly the same layout: question card, your
 * answer, correct answer, hint, worked solution steps, and sketch pad.
 *
 * The only difference is that we pass `isTeacherView` so the review renders
 * read-only (no canvas editing needed for the teacher).
 */
export default function ChallengeDetailModal({
  selectedChallenge,
  onClose,
  setWorkingOutPreview,
}) {
  const hasQuestions =
    Array.isArray(selectedChallenge.questions) &&
    selectedChallenge.questions.length > 0;

  const [liveQuestions, setLiveQuestions] = useState(null);

  useEffect(() => {
    if (hasQuestions && !liveQuestions) {
      let isMounted = true;
      const fetchLive = async () => {
        // The bank's current wording/solution (content CDN; Firestore only for ids it doesn't serve).
        let liveDocs = [];
        try { liveDocs = await fetchQuestionsByIds(liveLookupIds(selectedChallenge.questions)); } catch (err) { console.warn("Failed to fetch live questions:", err); }
        const live = applyLiveContent(selectedChallenge.questions, liveDocs);
        if (isMounted) setLiveQuestions(live);
      };
      fetchLive();
    }
  }, [hasQuestions, selectedChallenge.questions]);

  // Loading state — snapshot not yet fetched or live questions not yet fetched
  const isLoading =
    (selectedChallenge.hasDetailSnapshot &&
    !selectedChallenge.detailSnapshotLoaded &&
    !hasQuestions) || (hasQuestions && !liveQuestions);

  // Build the arrays ChallengeReviewView expects
  const questions = liveQuestions || selectedChallenge.questions || [];
  const userAnswers = selectedChallenge.userAnswers || [];
  const answerResults = (selectedChallenge.answerResults || []).map((r, idx) => {
    // Normalise: some records store raw booleans, others store objects
    if (r && typeof r === "object") return r;
    return {
      correct: r === true || r === "correct",
      selectedAnswer: userAnswers[idx] ?? null,
    };
  });

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "48px 40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.15)",
          }}
        >
          <div className="app-spinner" style={{ width: 40, height: 40 }} />
          <p style={{ margin: 0, fontWeight: 800, color: "#1e1b4b", fontSize: "1.05rem" }}>
            Loading detailed results…
          </p>
        </motion.div>
      </div>
    );
  }

  if (!hasQuestions) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "48px 40px",
            textAlign: "center",
            maxWidth: "440px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.15)",
          }}
        >
          <Trophy size={48} style={{ opacity: 0.18 }} />
          <p style={{ margin: 0, fontWeight: 800, fontSize: "1.1rem", color: "#1e1b4b" }}>
            Detailed history not available
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", fontWeight: 600 }}>
            This challenge was completed before detailed tracking was enabled.
          </p>
          <button
            onClick={onClose}
            style={{
              marginTop: "8px",
              padding: "12px 28px",
              borderRadius: "14px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              fontWeight: 800,
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </motion.div>
      </div>
    );
  }

  // ✅ Has data — render the exact same view students see
  const questionComments = selectedChallenge.questionComments || [];

  return (
    <AnimatePresence>
      <ChallengeReviewView
        questions={questions}
        userAnswers={userAnswers}
        answerResults={answerResults}
        questionComments={questionComments}
        startIdx={0}
        onClose={onClose}
        isMobile={false}
      />
    </AnimatePresence>
  );
}
