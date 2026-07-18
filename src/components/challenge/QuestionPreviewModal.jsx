import { useEffect, useRef, useState } from 'react';
import ChallengeQuizView from './ChallengeQuizView';
import ChallengeReviewView from './ChallengeReviewView';
import SecretNoteView from './SecretNoteView';
import { answersMatch } from '../../utils/answerMatching';
import { prepareShuffledMcOptions, gradeMcSelection } from '../../utils/mcOptionShuffle';
import {
  CHALLENGE_YEAR,
  CHALLENGE_BLUEPRINT,
  CHALLENGE_CHAPTER_ID,
  getOptions,
} from '../../utils/challengeUtils';

// Matches ChallengeQuizView/DailyChallenge's own check — a sub-question with
// no machine-checkable answer (student writes on the sketch board instead).
const subNeedsTeacher = (sq) =>
  sq?.type === 'teacher_review' || sq?.type === 'graph_sketch' || sq?.requiresManualGrading === true;

// QuestionBankPage's loaded question doesn't always carry the denormalized
// topic/chapter fields DailyChallenge/SecretNoteView read directly off a
// question object — fill them in from the page-level chapter/topic context.
const enrichQuestion = (q, chapter, topic) => ({
  ...q,
  topicId: q.topicId || topic?.id || '',
  topicCode: q.topicCode || topic?.code || '',
  topicTitle: q.topicTitle || topic?.title || '',
  chapterTitle: q.chapterTitle || chapter?.title || '',
  year: q.year || chapter?.year || '',
});

const cloneQuestion = (q) => JSON.parse(JSON.stringify(q));

const TABS = [
  { key: 'daily', label: 'Daily Challenge' },
  { key: 'review', label: 'Review' },
  { key: 'secretNote', label: 'Secret Note' },
];

/**
 * Teacher preview harness — mounts the REAL student components
 * (ChallengeQuizView / ChallengeReviewView / SecretNoteView) for a single
 * bank question, so a teacher sees exactly what a student would see.
 *
 * No Firestore writes, no localStorage writes under a real uid: the Daily
 * Challenge tab is a stripped copy of DailyChallenge.jsx's quiz state
 * machine (grading logic kept, all persistence dropped); the Secret Note
 * tab uses SecretNoteView's `previewQuestions` prop, which bypasses its
 * localStorage/Firestore side effects entirely.
 */
const QuestionPreviewModal = ({ question, chapter, topic, onClose, initialTab = 'daily' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Two independent clones — Daily Challenge mutates `_shuffledAnswer` etc.
  // onto its clone; Secret Note has its own separate grading pass. Neither
  // should see the other's mutations, and neither should touch the bank's
  // loaded question object.
  const [dailyQuestion] = useState(() => cloneQuestion(enrichQuestion(question, chapter, topic)));
  const [secretNoteQuestion] = useState(() => cloneQuestion(enrichQuestion(question, chapter, topic)));

  // ── Daily Challenge tab: stripped DailyChallenge.jsx quiz state machine ──
  const [step, setStep] = useState('quiz');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResults, setAnswerResults] = useState([]);
  const [subAnswers, setSubAnswers] = useState({});
  const [questionComments, setQuestionComments] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [flash, setFlash] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const autoTransitionRef = useRef(null);
  const canvasRef = useRef(null);
  const answerInputRef = useRef(null);

  // setupQuestion — copy of DailyChallenge.jsx's per-question reset, minus
  // the app-wide `sapere:quiz-session` event dispatch (no other component is
  // listening for a teacher preview session).
  const setupQuestion = (q) => {
    setTimeLeft(q.timeLimit || 30);
    setQuestionStartTime(Date.now());
    setSelectedOption(null);
    setSelectedOptionIdx(null);
    setIsCorrect(null);
    setShowHint(false);

    // Shuffle MC options via the shared helper — never hand-roll shuffle +
    // index remapping here (see src/utils/mcOptionShuffle.js).
    const opts = getOptions(q);
    if (opts.length > 1 && q.type !== 'short_answer' && q.type !== 'graph_sketch' && !q.subQuestions?.length) {
      const rawKey = q.answer ?? q.a;
      if (q.answer === undefined || q.answer === null || q.answer === '') {
        q.answer = rawKey !== undefined && rawKey !== null ? rawKey : q.answer;
      }
      setShuffledOptions(prepareShuffledMcOptions(q));
    } else {
      setShuffledOptions(opts);
      if (q) {
        q._shuffledAnswer = undefined;
        q._shuffledAnswerIndex = undefined;
      }
    }
  };

  useEffect(() => {
    setupQuestion(dailyQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (optionText, optIdx = null) => {
    if (step === 'feedback') return;

    const currentQ = dailyQuestion;
    const isShortAnswer = currentQ?.type === 'short_answer';
    const isGraphSketch = currentQ?.type === 'graph_sketch' || currentQ?.type === 'teacher_review' || currentQ?.requiresManualGrading === true;

    let correct = false;

    if (isGraphSketch) {
      // Real DailyChallenge submits this to a Firestore grading_queue and
      // notifies the teacher — a preview has neither, so it's just shown as
      // "submitted for review" (ChallengeQuizView renders that from `type`).
      correct = false;
    } else if (currentQ?.subQuestions?.length > 0) {
      const subResults = currentQ.subQuestions.map((sq, idx) => {
        const key = sq.id || idx;
        const userAnswer = (optionText && typeof optionText === 'object') ? optionText[key] : '';
        if (subNeedsTeacher(sq)) return { id: key, pending: true, answer: userAnswer };
        const subCorrect = sq.type === 'multiple_choice'
          ? gradeMcSelection(sq, userAnswer, null, sq.options || [])
          : answersMatch(userAnswer, sq.answer);
        return { id: key, correct: subCorrect, answer: userAnswer };
      });
      const gradableResults = subResults.filter((r) => !r.pending);
      correct = gradableResults.length === 0 || gradableResults.every((r) => r.correct);
      currentQ.lastSubResults = subResults;
      currentQ.pointsEarned = gradableResults.filter((r) => r.correct).length;
      currentQ.totalPoints = gradableResults.length;
    } else if (isShortAnswer) {
      correct = answersMatch(optionText, currentQ.answer);
    } else if (currentQ?.type === 'fill_blank') {
      const blanks = Array.isArray(currentQ.blanks) ? currentQ.blanks : [];
      const userArr = Array.isArray(optionText) ? optionText : [];
      const perBlank = blanks.map((b, i) => answersMatch(userArr[i] || '', b.answer || ''));
      correct = blanks.length > 0 && perBlank.every(Boolean);
      currentQ.lastBlankResults = perBlank;
      currentQ.pointsEarned = perBlank.filter(Boolean).length;
      currentQ.totalPoints = blanks.length;
    } else if (currentQ?.type === 'interactive_grid') {
      correct = Array.isArray(optionText) && optionText.length === parseInt(currentQ.answer, 10);
    } else {
      // Shared MC grading — handles index seeds + post-shuffle remapping.
      const displayOpts = shuffledOptions?.length ? shuffledOptions : getOptions(currentQ);
      correct = gradeMcSelection(currentQ, optionText, optIdx, displayOpts);
    }

    setSelectedOption(optionText);
    setSelectedOptionIdx(optIdx);
    setIsCorrect(correct);
    setUserAnswers([optionText]);

    const pEarned = currentQ?.subQuestions?.length > 0 ? (currentQ.pointsEarned || 0) : (correct ? 1 : 0);
    const tPoints = currentQ?.subQuestions?.length > 0 ? currentQ.subQuestions.length : 1;

    setAnswerResults([{
      questionId: currentQ?.id || null,
      type: currentQ?.type || 'unknown',
      year: currentQ?.year || CHALLENGE_YEAR,
      chapterId: currentQ?.chapterId || CHALLENGE_CHAPTER_ID,
      chapterTitle: currentQ?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Number',
      topicId: currentQ?.topicId || '',
      topicCode: currentQ?.topicCode || '',
      topicTitle: currentQ?.topicTitle || '',
      topicGroup: currentQ?.topicGroup || '',
      generatorType: currentQ?.generatorType || currentQ?.type || 'manual',
      difficulty: currentQ?.difficulty || 'manual',
      selectedAnswer: isGraphSketch ? 'Pending Review' : optionText,
      correct,
      pointsEarned: pEarned,
      totalPoints: tPoints,
      isPending: isGraphSketch,
      isManual: Boolean(currentQ?.isManual),
      workingOut: null,
      workingOutPages: [],
      sketchAvailable: false,
      hadWorkingOut: false,
      hadAnyInk: false,
      inkLevel: null,
      inkStrokeCount: null,
      inkPathLength: null,
    }]);

    setStep('feedback');
    setFlash(isGraphSketch ? 'pending' : (correct ? 'correct' : 'wrong'));

    // Same 3-second auto-advance as the real quiz. With a single question,
    // "next" has nowhere to go but the Review tab.
    const COUNTDOWN_SECONDS = 3;
    setCountdown(COUNTDOWN_SECONDS);
    const interval = setInterval(() => setCountdown((prev) => Math.max(0, prev - 1)), 1000);
    const timer = setTimeout(() => {
      clearInterval(interval);
      nextQuestion();
    }, COUNTDOWN_SECONDS * 1000);
    autoTransitionRef.current = { timer, interval };
  };

  const nextQuestion = () => {
    if (autoTransitionRef.current) {
      clearTimeout(autoTransitionRef.current.timer);
      clearInterval(autoTransitionRef.current.interval);
      autoTransitionRef.current = null;
    }
    setCountdown(0);
    setFlash(null);
    setSubAnswers({});
    setActiveTab('review');
  };

  useEffect(() => () => {
    if (autoTransitionRef.current) {
      clearTimeout(autoTransitionRef.current.timer);
      clearInterval(autoTransitionRef.current.interval);
    }
  }, []);

  // Timer countdown — wall-clock based (avoids drift), mirrors
  // DailyChallenge.jsx's effect using refs so the interval callback always
  // reads the latest step/selection without stale closures.
  const stepRef = useRef(step);
  useEffect(() => { stepRef.current = step; }, [step]);
  const selectedOptionRef = useRef(selectedOption);
  useEffect(() => { selectedOptionRef.current = selectedOption; }, [selectedOption]);
  const selectedOptionIdxRef = useRef(selectedOptionIdx);
  useEffect(() => { selectedOptionIdxRef.current = selectedOptionIdx; }, [selectedOptionIdx]);
  const handleAnswerRef = useRef(handleAnswer);
  useEffect(() => { handleAnswerRef.current = handleAnswer; });

  useEffect(() => {
    if (step !== 'quiz' || !questionStartTime) return undefined;
    const timeLimit = (dailyQuestion?.timeLimit || 30) * 1000;
    const endTime = questionStartTime + timeLimit;

    const timer = setInterval(() => {
      if (stepRef.current !== 'quiz') { clearInterval(timer); return; }
      if (selectedOptionRef.current !== null && selectedOptionIdxRef.current !== null) { clearInterval(timer); return; }
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        if (stepRef.current === 'quiz') {
          handleAnswerRef.current?.(selectedOptionRef.current ?? null, null);
        }
      }
    }, 100);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, questionStartTime]);

  return (
    <>
      {activeTab === 'daily' && (
        <ChallengeQuizView
          step={step}
          questions={[dailyQuestion]}
          currentIdx={0}
          TOTAL_QUESTIONS={1}
          timeLeft={timeLeft}
          countdown={countdown}
          flash={flash}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedOptionIdx={selectedOptionIdx}
          isCorrect={isCorrect}
          subAnswers={subAnswers}
          setSubAnswers={setSubAnswers}
          userAnswers={userAnswers}
          showHint={showHint}
          setShowHint={setShowHint}
          isSubmittingCanvas={false}
          isMobile={false}
          showSplitScreen={false}
          showSideCanvas={false}
          isTabletCanvasLayout={false}
          handleAnswer={handleAnswer}
          nextQuestion={nextQuestion}
          canvasRef={canvasRef}
          answerInputRef={answerInputRef}
          shuffledOptions={shuffledOptions}
          questionComments={questionComments}
          setQuestionComments={setQuestionComments}
        />
      )}

      {activeTab === 'review' && (
        <ChallengeReviewView
          questions={[dailyQuestion]}
          userAnswers={userAnswers}
          answerResults={answerResults}
          questionComments={questionComments}
          startIdx={0}
          isMobile={false}
          isTabletLayout={false}
          onClose={onClose}
          disableReport
        />
      )}

      {activeTab === 'secretNote' && (
        <SecretNoteView
          kind="daily"
          uid={null}
          user={null}
          studentProfile={null}
          studentName="Preview"
          onClose={onClose}
          isMobile={false}
          previewQuestions={[secretNoteQuestion]}
        />
      )}

      {/* Floating tab switcher + exit — sits above all three full-screen
          views (ChallengeQuizView/ChallengeReviewView use z-index 2000/2200).
          ChallengeQuizView has no built-in close, so this is the only way out
          of that tab; Review/Secret Note's own close buttons also work. */}
      <div
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px',
          borderRadius: '999px',
          background: 'rgba(15,23,42,0.92)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 16px 32px rgba(0,0,0,0.28)',
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              padding: '9px 16px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === t.key ? '#fff' : 'transparent',
              color: activeTab === t.key ? '#1e1b4b' : '#e2e8f0',
              fontWeight: 800,
              fontSize: '0.78rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={onClose}
          title="Exit preview"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.16)',
            color: '#fff',
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
            fontSize: '0.95rem',
            marginLeft: '2px',
          }}
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default QuestionPreviewModal;
