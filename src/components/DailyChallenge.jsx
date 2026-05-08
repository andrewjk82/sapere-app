import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Clock, CheckCircle2, XCircle, 
  Trophy,
  Lightbulb, BookOpen, X, Check, Flag
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc, increment, collection, getDocs, limit, query, orderBy, addDoc, serverTimestamp, onSnapshot, runTransaction, deleteDoc } from 'firebase/firestore';
import { DEFAULT_DIFFICULTY_MIX, generateQuestion, getQuestionBlueprint, getQuestionTargets } from '../services/questionGenerator';
import { generateCalculationSet } from '../services/calculationGenerator';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import MathView, { toDisplayText } from './MathView';
import WorkingOutCanvas from './WorkingOutCanvas';
import { Target, AlertTriangle, TrendingUp } from 'lucide-react';

const CHALLENGE_YEAR = 'Year 1';
const CHALLENGE_CHAPTER_ID = 'y1-number';
const CHALLENGE_BLUEPRINT = getQuestionBlueprint(CHALLENGE_YEAR, CHALLENGE_CHAPTER_ID);
const MAX_HISTORY_PER_TYPE = 7;

const MATH_SYMBOLS = ['√', '²', '³', '^', 'π', 'θ', '÷', '×', '(', ')', '/', '-', '.'];

const getAssignedChapters = (profile, assignedYear) => {
  if (Array.isArray(profile?.assignedChapters) && profile.assignedChapters.length > 0) {
    return profile.assignedChapters;
  }

  return assignedYear === CHALLENGE_YEAR ? [CHALLENGE_CHAPTER_ID] : [];
};

const getYearNumber = (value) => {
  const parsed = parseInt(String(value || '').replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : null;
};

const normalizeYearLabel = (value) => {
  const yearNumber = getYearNumber(value);
  return yearNumber === null ? String(value || '').trim() : `Year ${yearNumber}`;
};

const getValidChapterIdsForYears = (years, courses) => {
  const ids = new Set();
  years.forEach(year => {
    const yearData = CURRICULUM_DATA[normalizeYearLabel(year)];
    if (!yearData) return;
    let chapters = Array.isArray(yearData)
      ? yearData
      : courses.flatMap(course => yearData[course] || []);
    if (!Array.isArray(yearData) && chapters.length === 0) {
      chapters = yearData.Advanced || Object.values(yearData)[0] || [];
    }
    chapters.forEach(chapter => ids.add(chapter.id));
  });
  return ids;
};

const normalizeText = (value) => String(value ?? '')
  .replace(/\$\$/g, '')
  .replace(/[−–—]/g, '-')
  .replace(/×/g, 'x')
  .trim();

const getAnswerText = (option) => toDisplayText(option).trim();

const deriveSimpleMathAnswer = (questionText) => {
  const text = normalizeText(questionText).replace(/\s+/g, ' ');
  const binary = text.match(/^(-?\d+(?:\.\d+)?)\s*([+\-x*÷/])\s*(-?\d+(?:\.\d+)?)\s*=\s*\?$/i);
  if (!binary) return null;

  const left = Number(binary[1]);
  const right = Number(binary[3]);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;

  const op = binary[2].toLowerCase();
  let result = null;
  if (op === '+') result = left + right;
  if (op === '-') result = left - right;
  if (op === 'x' || op === '*') result = left * right;
  if ((op === '÷' || op === '/') && right !== 0) result = left / right;

  return result === null ? null : String(Number.isInteger(result) ? result : Number(result.toFixed(4)));
};

const correctQuestionAnswer = (question) => {
  const expectedAnswer = deriveSimpleMathAnswer(question?.question);
  if (expectedAnswer === null) return question;

  const options = getOptions(question);
  const matchingOptionIndex = options.findIndex(option => getAnswerText(option) === expectedAnswer);
  const repaired = {
    ...question,
    solution: question.solution || `${normalizeText(question.question).replace(/\?$/, expectedAnswer)}`,
  };

  if (question?.isManual) {
    if (matchingOptionIndex >= 0) {
      return { ...repaired, answer: String(matchingOptionIndex) };
    }

    return {
      ...repaired,
      isManual: false,
      answer: expectedAnswer,
      options: options.length ? [expectedAnswer, ...options.filter(option => getAnswerText(option) !== expectedAnswer)].slice(0, 4) : options,
    };
  }

  if (!options.length || options.some(option => getAnswerText(option) === expectedAnswer)) {
    return { ...repaired, answer: expectedAnswer };
  }

  return {
    ...repaired,
    answer: expectedAnswer,
    options: [expectedAnswer, ...options.filter(option => getAnswerText(option) !== expectedAnswer)].slice(0, 4),
  };
};

const toDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === 'function') return value.toDate();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const formatHistoryDate = (item) => {
  if (item?.dateLabel) return item.dateLabel;
  const date = toDate(item?.timestamp || item?.completedAt || item?.createdAt || item?.id);
  return date ? date.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Completed test';
};

const getWorkingOutPages = (result) => {
  if (Array.isArray(result?.workingOutPages) && result.workingOutPages.length > 0) {
    return result.workingOutPages.filter(Boolean);
  }
  return result?.workingOut ? [result.workingOut] : [];
};

const getHistorySortTime = (item) => {
  const value = item?.timestamp || item?.completedAt || item?.createdAt || item?.date || item?.id;
  if (!value) return 0;
  if (typeof value?.toDate === 'function') return value.toDate().getTime();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  if (/^\d+$/.test(String(value))) return Number(value);
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
};

const pruneOldChallengeStats = async (userId, statCollection, keep = MAX_HISTORY_PER_TYPE) => {
  if (!userId) return;
  const snap = await getDocs(collection(db, 'users', userId, statCollection));
  const staleDocs = snap.docs
    .map(statDoc => ({ ref: statDoc.ref, id: statDoc.id, ...statDoc.data() }))
    .sort((a, b) => getHistorySortTime(b) - getHistorySortTime(a))
    .slice(keep);

  if (staleDocs.length === 0) return;
  await Promise.all(staleDocs.map(item => deleteDoc(item.ref)));
};

const getOptions = (question) => {
  return Array.isArray(question?.options) ? question.options : [];
};

const getOptionText = (option) => {
  return toDisplayText(option);
};

const getOptionImage = (option) => {
  if (!option || typeof option !== 'object') return '';
  return option.imageUrl || option.image || '';
};

const normalizeMix = (mix) => {
  const safeMix = mix || DEFAULT_DIFFICULTY_MIX;
  const bounded = {
    easy: Math.max(0.1, safeMix.easy ?? DEFAULT_DIFFICULTY_MIX.easy),
    medium: Math.max(0.1, safeMix.medium ?? DEFAULT_DIFFICULTY_MIX.medium),
    hard: Math.max(0.05, safeMix.hard ?? DEFAULT_DIFFICULTY_MIX.hard),
  };
  const total = bounded.easy + bounded.medium + bounded.hard;
  return {
    easy: Number((bounded.easy / total).toFixed(2)),
    medium: Number((bounded.medium / total).toFixed(2)),
    hard: Number((bounded.hard / total).toFixed(2)),
  };
};

const pickWeightedDifficulty = (mix) => {
  const normalized = normalizeMix(mix);
  const roll = Math.random();
  if (roll < normalized.easy) return 'easy';
  if (roll < normalized.easy + normalized.medium) return 'medium';
  return 'hard';
};

const summarizeResults = (results) => {
  return (results || []).reduce((summary, result) => {
    if (!result?.difficulty || result.difficulty === 'manual') return summary;
    const current = summary[result.difficulty] || { correct: 0, total: 0 };
    return {
      ...summary,
      [result.difficulty]: {
        correct: current.correct + (result.correct ? 1 : 0),
        total: current.total + 1,
      },
    };
  }, {});
};

const summarizeByKey = (results, key, labelKey) => {
  return (results || []).reduce((summary, result) => {
    const id = result?.[key];
    if (!id) return summary;
    const current = summary[id] || {
      id,
      label: result?.[labelKey] || id,
      correct: 0,
      total: 0,
    };
    return {
      ...summary,
      [id]: {
        ...current,
        correct: current.correct + (result.correct ? 1 : 0),
        total: current.total + 1,
      },
    };
  }, {});
};

const accuracyFor = (stats, difficulty) => {
  const item = stats[difficulty];
  if (!item?.total) return null;
  return item.correct / item.total;
};

const adjustDifficultyMix = (currentMix, resultStats) => {
  const next = { ...normalizeMix(currentMix) };
  const easyAccuracy = accuracyFor(resultStats, 'easy');
  const mediumAccuracy = accuracyFor(resultStats, 'medium');
  const hardAccuracy = accuracyFor(resultStats, 'hard');

  if (hardAccuracy !== null && hardAccuracy < 0.6) {
    next.easy += 0.1;
    next.hard -= 0.1;
  } else if (mediumAccuracy !== null && mediumAccuracy < 0.55) {
    next.easy += 0.05;
    next.medium -= 0.05;
  } else if (
    easyAccuracy !== null && easyAccuracy >= 0.85 &&
    (mediumAccuracy === null || mediumAccuracy >= 0.7)
  ) {
    next.easy -= 0.1;
    next.medium += 0.05;
    next.hard += 0.05;
  }

  return normalizeMix(next);
};

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn('Working out canvas failed to render:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          height: '100%',
          minHeight: '400px',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '24px',
          textAlign: 'center',
          color: '#64748b',
          fontWeight: 700
        }}>
          <AlertTriangle size={28} style={{ color: '#f59e0b' }} />
          <div style={{ color: '#1e293b', fontWeight: 900 }}>Sketch pad unavailable</div>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>The question is still available on the left.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

const DailyChallenge = ({ onBack, setIsLocked }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [step, setStep] = useState('start');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [abandonedToday, setAbandonedToday] = useState(false);
  const [calcCompletedToday, setCalcCompletedToday] = useState(false);
  const [calcAbandonedToday, setCalcAbandonedToday] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [studentProfile, setStudentProfile] = useState(null);
  const [dailyStats, setDailyStats] = useState([]);
  const [viewMode, setViewMode] = useState('challenge');
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResults, setAnswerResults] = useState([]);
  const [chapterProgress, setChapterProgress] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [isReporting, setIsReporting] = useState(false);
  const [reportedQuestion, setReportedQuestion] = useState(null);
  const [subAnswers, setSubAnswers] = useState({});
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [autoTransitionTimer, setAutoTransitionTimer] = useState(null);
  const canvasRef = useRef(null);
  const [isSubmittingCanvas, setIsSubmittingCanvas] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [challengeType, setChallengeType] = useState('daily');
  const [warnings, setWarnings] = useState(0);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const answerInputRef = useRef(null);
  const [leaders, setLeaders] = useState([]);

  const isMobile = window.innerWidth < 768; // Lowered threshold to allow split-screen on tablets
  const currentQuestion = questions[currentIdx] || null;
  const assignedYears = Array.isArray(studentProfile?.assignedYear) ? studentProfile.assignedYear : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR];
  const assignedYear = assignedYears[0];
  const isYear10OrAbove = assignedYear && (parseInt(String(assignedYear).replace(/\D/g, '')) >= 10);
  const showSplitScreen = !isMobile && Boolean(currentQuestion) && (
    currentQuestion.type === 'graph_sketch' ||
    isYear10OrAbove ||
    studentProfile?.seniorCanvasEnabled === true
  );

  const getQuestionCount = (type) => type === 'calc' ? (studentProfile?.calcQuestionCount || 10) : (studentProfile?.dailyQuestionCount || 10);
  const TOTAL_QUESTIONS = questions.length || getQuestionCount(challengeType);
  const hasCalculationTest = studentProfile?.calculationEnabled !== false;
  const getChallengeMaxXp = (type) => {
    if (type === 'calc') return 50;
    return hasCalculationTest ? 50 : 100;
  };
  const getEarnedXp = (earnedScore, total, type) => {
    const safeTotal = Number(total) || 0;
    if (safeTotal <= 0) return 0;
    return Math.round((Number(earnedScore) || 0) / safeTotal * getChallengeMaxXp(type));
  };

  useEffect(() => {
    if (!user?.uid) return;
    let registeredLeaders = [];
    let manualLeaders = [];

    const updateLeaderboard = () => {
      const leaderboard = [...manualLeaders, ...registeredLeaders]
        .sort((a, b) => (Number(b.totalXP) || 0) - (Number(a.totalXP) || 0));
      setLeaders(leaderboard);
    };

    const unsubUsers = onSnapshot(
      collection(db, 'users'),
      (snap) => {
        registeredLeaders = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(student => {
            const role = String(student.role || '').toLowerCase();
            return role !== 'admin' && role !== 'parent' && student.email !== 'andrewjk82@gmail.com';
          });
        updateLeaderboard();
      },
      (err) => {
        console.warn('leaderboard onSnapshot permission error (non-fatal):', err.code);
      }
    );

    const unsubStudents = onSnapshot(
      collection(db, 'students'),
      (snap) => {
        manualLeaders = snap.docs.map(d => ({
          id: `manual-${d.id}`,
          sourceId: d.id,
          source: 'manual',
          ...d.data(),
        }));
        updateLeaderboard();
      },
      (err) => {
        console.warn('manual leaderboard onSnapshot permission error (non-fatal):', err.code);
      }
    );

    return () => {
      unsubUsers();
      unsubStudents();
    };
  }, [user?.uid]);

  // Fetch student daily stats for insights
  useEffect(() => {
    if (!user?.uid) return;
    const unsub = onSnapshot(
      collection(db, 'users', user.uid, 'daily_stats'),
      (snap) => {
        const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setDailyStats(stats);
      },
      (err) => {
        console.warn('daily_stats onSnapshot permission error (non-fatal):', err.code);
        // Silently fail - insights just won't show
      }
    );
    return () => unsub();
  }, [user?.uid]);

  // Anti-Cheat: Detect Focus Loss
  useEffect(() => {
    if (step !== 'quiz') return;

    const handleFocusLost = () => {
      setWarnings(w => w + 1);
      showToast("Please do not leave the challenge window! Switching tabs or apps is not allowed during the challenge.", 'warning');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleFocusLost();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleFocusLost);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleFocusLost);
    };
  }, [step]);

  const learningInsights = React.useMemo(() => {
    if (dailyStats.length === 0) return [];
    
    const topicMistakes = {};
    const topicTotals = {};
    const topicLabels = {};
    
    dailyStats.forEach(stat => {
      const results = stat.answerResults || [];
      results.forEach((result, idx) => {
        const question = stat.questions?.[idx] || {};
        const topicKey = result.topicId || question.topicId || result.type || question.type || 'general';
        const topicLabel = result.topicTitle || question.topicTitle || topicKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        topicLabels[topicKey] = result.topicCode ? `${result.topicCode} ${topicLabel}` : topicLabel;
        topicTotals[topicKey] = (topicTotals[topicKey] || 0) + 1;
        if (!result.correct) topicMistakes[topicKey] = (topicMistakes[topicKey] || 0) + 1;
      });
    });

    const insights = Object.keys(topicMistakes).map(topic => ({
      type: topicLabels[topic] || topic,
      errorRate: (topicMistakes[topic] / topicTotals[topic]) * 100
    })).filter(insight => insight.errorRate > 30) // Only show if error rate > 30%
       .sort((a, b) => b.errorRate - a.errorRate)
       .slice(0, 3); // Top 3 problem areas

    return insights;
  }, [dailyStats]);

  const renderInsights = () => (
    <div className="app-panel" style={{ 
      padding: isMobile ? '24px' : '32px', 
      background: '#ffffff',
      borderRadius: '32px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
      border: '1px solid #f1f5f9',
      textAlign: 'left',
      marginTop: '24px'
    }}>
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03, pointerEvents: 'none' }}>
        <Target size={180} />
      </div>
      
      <div style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
          <div style={{ width: '36px', height: '36px', background: '#f5f3ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}>
            <Target size={20} />
          </div>
          Performance Insights
        </h3>
      </div>

      {learningInsights && learningInsights.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }}>
          <div style={{ padding: '20px', borderRadius: '20px', background: 'linear-gradient(135deg, #fff1f2, #fff)', border: '1px solid #ffe4e6', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', background: '#f43f5e', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <AlertTriangle size={22} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: 800, color: '#9f1239' }}>Focus Areas Identified</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#be123c', fontWeight: 600, lineHeight: 1.6 }}>
                Based on your recent challenges, we've identified some topics that could use a bit more practice.
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {learningInsights.map((insight, idx) => (
              <div key={idx} style={{ padding: '20px', borderRadius: '20px', background: '#fff', border: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.01)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e' }} />
                  <div>
                    <h5 style={{ margin: '0 0 2px', fontSize: '1rem', fontWeight: 800, color: '#1e293b' }}>{insight.type}</h5>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Review Recommended</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#f43f5e' }}>{Math.round(insight.errorRate)}%</span>
                  <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Error Rate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ 
          padding: '60px 40px', 
          background: '#f8fafc', 
          borderRadius: '28px', 
          border: '2px dashed #e2e8f0', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <TrendingUp size={40} style={{ color: '#6366f1' }} />
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '12px' }}>Personalized Insights Pending</h4>
          <p style={{ fontWeight: 600, color: '#64748b', maxWidth: '300px', margin: '0 auto', lineHeight: 1.6 }}>
            Complete more daily challenges to unlock personalized performance insights and tracking!
          </p>
        </div>
      )}
    </div>
  );

  const renderLeaderboardPreview = () => {
    const topLeaders = leaders.slice(0, 3);
    const currentRank = leaders.findIndex(student => student.id === user?.uid) + 1;

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="app-panel"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: isMobile ? '18px' : '24px',
          borderRadius: '28px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f7ff 100%)',
          border: '1px solid #e7e5ff',
          boxShadow: '0 18px 45px rgba(79, 70, 229, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '16px', background: '#eef2ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Trophy size={22} />
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ margin: 0, color: '#1e1b4b', fontSize: '1.05rem', fontWeight: 900 }}>Leaderboard</h3>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, color: '#6366f1', fontWeight: 900 }}>
            <span style={{ color: '#94a3b8', fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your rank</span>
            <span style={{ fontSize: '1rem' }}>{currentRank || '-'}</span>
          </div>
        </div>

        {topLeaders.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topLeaders.map((student, idx) => {
              const rank = idx + 1;
              const isCurrentUser = student.id === user?.uid;
              const avatarUrl = student.dreamImageUrl || student.avatarUrl || (student.avatarStyle && student.avatarSeed
                ? `https://api.dicebear.com/7.x/${student.avatarStyle}/svg?seed=${encodeURIComponent(student.avatarSeed)}`
                : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.email || student.id || 'sapere')}`);
              const rowBg = rank === 1 ? '#fffbeb' : rank === 2 ? '#f8fafc' : '#fff7ed';
              const rowBorder = rank === 1 ? '#fde68a' : rank === 2 ? '#e2e8f0' : '#fed7aa';

              return (
                <div
                  key={student.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    minWidth: 0,
                    padding: '12px 16px',
                    borderRadius: '20px',
                    background: isCurrentUser ? '#f5f3ff' : rowBg,
                    border: `1px solid ${isCurrentUser ? '#a78bfa' : rowBorder}`,
                    boxShadow: rank === 1 ? '0 10px 24px rgba(217, 119, 6, 0.08)' : '0 8px 20px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <img src={avatarUrl} alt={`Top ${rank} avatar`} style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#fff', objectFit: 'cover', flexShrink: 0, boxShadow: '0 6px 14px rgba(15, 23, 42, 0.08)' }} />
                  <div style={{ color: '#6366f1', fontWeight: 950, fontSize: '1rem', textAlign: 'right', flexShrink: 0 }}>
                    {Number(student.totalXP) || 0}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ padding: '18px', borderRadius: '16px', background: '#f8fafc', color: '#94a3b8', fontWeight: 700, textAlign: 'center' }}>
            Leaderboard will appear once students earn XP.
          </div>
        )}

      </motion.div>
    );
  };


  // Check if today is already done and fetch history
  useEffect(() => {
    if (!user?.uid) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        // Check today
        const today = new Date().toLocaleDateString('en-CA');
        const todayRef = doc(db, 'users', user.uid, 'daily_stats', today);
        const calcTodayRef = doc(db, 'users', user.uid, 'calc_stats', today);
        let todaySnap;
        try {
          todaySnap = await getDoc(todayRef);
          if (todaySnap.exists()) {
            const data = todaySnap.data();
            if (data.completed) {
              setTodayCompleted(true);
            } else {
              // If it exists but not completed, it was abandoned
              setAbandonedToday(true);
            }
          }
        } catch (e) { console.warn('today check failed (non-fatal):', e.code); }
        try {
          const calcTodaySnap = await getDoc(calcTodayRef);
          if (calcTodaySnap.exists()) {
            const data = calcTodaySnap.data();
            if (data.completed) {
              setCalcCompletedToday(true);
            } else {
              setCalcAbandonedToday(true);
            }
          }
        } catch (e) { console.warn('calculation today check failed (non-fatal):', e.code); }

        let profileData = {};
        try {
          const profileSnap = await getDoc(doc(db, 'users', user.uid));
          profileData = profileSnap.exists() ? profileSnap.data() : {};
          setStudentProfile(profileData);
        } catch (e) { console.warn('profile fetch failed (non-fatal):', e.code); }

        Promise.allSettled([
          pruneOldChallengeStats(user.uid, 'daily_stats'),
          pruneOldChallengeStats(user.uid, 'calc_stats'),
        ]).then((results) => {
          results.forEach((result, index) => {
            if (result.status === 'rejected') {
              const label = index === 0 ? 'daily history cleanup' : 'calculation history cleanup';
              console.warn(`${label} failed (non-fatal):`, result.reason?.code || result.reason);
            }
          });
        });

        setLoading(false);

        // Fetch secondary data after the main challenge screen is usable.
        Promise.allSettled([
          (async () => {
            const { collection: col, getDocs: gd, orderBy: ob, limit: lim, query: qry } = await import('firebase/firestore');
            const dailyHistoryRef = col(db, 'users', user.uid, 'daily_stats');
            const calcHistoryRef = col(db, 'users', user.uid, 'calc_stats');
            const [dailySnap, calcSnap] = await Promise.all([
              gd(qry(dailyHistoryRef, ob('timestamp', 'desc'), lim(30))),
              gd(qry(calcHistoryRef, ob('timestamp', 'desc'), lim(30))),
            ]);
            const historyData = [
              ...dailySnap.docs.map(d => ({ id: d.id, statCollection: 'daily_stats', ...d.data() })),
              ...calcSnap.docs.map(d => ({ id: d.id, statCollection: 'calc_stats', ...d.data() })),
            ].sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0)).slice(0, 30);
            setHistory(historyData);
          })(),
          (async () => {
            const assignedYears = Array.isArray(profileData.assignedYear) ? profileData.assignedYear : [profileData.assignedYear || profileData.year || CHALLENGE_YEAR];
            const assignedYear = assignedYears[0];
            const progressRef = doc(db, 'users', user.uid, 'chapterProgress', `${String(assignedYear).replace(' ', '_')}_daily`);
            const progressSnap = await getDoc(progressRef);
            setChapterProgress(progressSnap.exists() ? progressSnap.data() : null);
          })(),
        ]).then((results) => {
          results.forEach((result, index) => {
            if (result.status === 'rejected') {
              const label = index === 0 ? 'history' : 'progress';
              console.warn(`${label} fetch failed (non-fatal):`, result.reason?.code || result.reason);
            }
          });
        });

      } catch (err) {
        console.error("Error fetching challenge data:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.uid]);

  const startCalculationQuiz = async () => {
    const today = new Date().toLocaleDateString('en-CA');
    if (calcCompletedToday || calcAbandonedToday) {
      showToast("Today's Basic Calculation has already been used. Please try again tomorrow.", 'info');
      return;
    }

    if (user?.uid) {
      try {
        const calcTodaySnap = await getDoc(doc(db, 'users', user.uid, 'calc_stats', today));
        if (calcTodaySnap.exists()) {
          const data = calcTodaySnap.data();
          if (data.completed) setCalcCompletedToday(true);
          else setCalcAbandonedToday(true);
          showToast("Today's Basic Calculation has already been used. Please try again tomorrow.", 'info');
          return;
        }
      } catch (err) {
        console.warn('calculation start check failed (non-fatal):', err.code || err);
      }
    }

    setChallengeType('calc');
    const qCount = getQuestionCount('calc');
    const assignedYears = Array.isArray(studentProfile?.assignedYear) ? studentProfile.assignedYear : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR];
    const assignedYear = assignedYears[0];
    const assignedChapters = Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters : [];
    const calcTopics = assignedChapters.filter(id => id.startsWith('calc-'));
    
    const timeLimit = studentProfile?.calcTimeLimit || 30;
    const combinedQs = generateCalculationSet(calcTopics, qCount, assignedYear, timeLimit);
    
    const sessionId = today;
    setCurrentSessionId(sessionId);

    setQuestions(combinedQs);
    setUserAnswers(new Array(qCount).fill(null));
    setAnswerResults(new Array(qCount).fill(null));
    setCurrentIdx(0);
    setScore(0);
    setStep('quiz');
    setupQuestion(combinedQs[0]);
    if (setIsLocked) setIsLocked(true);
    setLoading(false);

    if (user?.uid) {
      const now = new Date();
      setDoc(doc(db, 'users', user.uid, 'calc_stats', sessionId), {
          completed: false,
          score: 0,
          total: qCount,
          challengeType: 'calc',
          maxXp: getChallengeMaxXp('calc'),
          xpEarned: 0,
          timestamp: now.toISOString(),
        date: today,
        dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
        questions: combinedQs || [],
        userAnswers: [],
        answerResults: [],
        abandoned: true
      })
        .then(() => pruneOldChallengeStats(user.uid, 'calc_stats'))
        .catch(console.error);
    }
  };

  const startDailyQuiz = async () => {
    try {
      setChallengeType('daily');
      const qCount = getQuestionCount('daily');
      setLoading(true);
      let manualQs = [];
      const config = studentProfile?.dailyPracticeConfig || {};
      const hasDailyConfig = (config.years?.length > 0 || config.chapters?.length > 0);

      const rawYear = studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR;
      let assignedYears = Array.isArray(rawYear) 
        ? rawYear 
        : String(rawYear).split(',').map(y => y.trim()).filter(Boolean);
      assignedYears = assignedYears.map(normalizeYearLabel).filter(Boolean);
      
      let assignedChapters = getAssignedChapters(studentProfile, assignedYears[0]);

      if (hasDailyConfig) {
        if (config.years?.length > 0) assignedYears = config.years.map(normalizeYearLabel).filter(Boolean);
        if (config.chapters?.length > 0) assignedChapters = config.chapters;
        else if (config.years?.length > 0) assignedChapters = []; 
      }

      const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
      const assignedCourses = Array.isArray(studentProfile?.assignedCourse) ? studentProfile.assignedCourse : [studentProfile?.assignedCourse || 'Advanced'];
      const validChapterIds = getValidChapterIdsForYears(assignedYears, assignedCourses);
      assignedChapters = assignedChapters.filter(chapterId => validChapterIds.has(chapterId));
      
      const targetPool = getQuestionTargets({
        year: assignedYears,
        course: assignedCourses,
        assignedChapters,
        assignedTopics,
      });
      const targetChapterIds = new Set(targetPool.map(target => target.chapterId));
      if (targetPool.length === 0) {
        throw new Error('No valid curriculum targets found for this student.');
      }

      try {
        const qRef = collection(db, 'questions');
        // Fetch a diverse pool of questions
        const manualSnap = await getDocs(query(qRef, limit(500)));
      manualQs = manualSnap.docs.map(d => {
        const data = d.data();
        return {
          id: d.id,
          type: data.type || 'manual',
          question: data.question,
          questionImage: data.questionImage || '',
          options: data.options || [],
          answer: data.answer,
          solution: data.solution || '',
          timeLimit: data.timeLimit || 60,
          difficulty: data.difficulty || 'manual',
          year: data.year || '',
          chapterId: data.chapterId || '',
          chapterTitle: data.chapterTitle || '',
          topicId: data.topicId || '',
          topicCode: data.topicCode || '',
          topicTitle: data.topicTitle || '',
          topicGroup: data.topicGroup || '',
          isManual: true
        };
      }).filter(q => {
        const qYearNum = getYearNumber(q.year);
        const yearMatches = qYearNum !== null && assignedYears.some(y => getYearNumber(y) === qYearNum);
        
        const hasAssignedChapters = assignedChapters && assignedChapters.length > 0;
        const hasChapterMetadata = Boolean(q.chapterId);
        const chapterIsValidForYear = hasChapterMetadata && validChapterIds.has(q.chapterId);
        const chapterMatches = hasAssignedChapters
          ? hasChapterMetadata && targetChapterIds.has(q.chapterId)
          : chapterIsValidForYear;
        
        return yearMatches && chapterMatches;
      });
    } catch (err) {
      console.error("Error fetching manual questions:", err);
    }
    
    // 1. Shuffle the initial pool for variety
    manualQs = manualQs.sort(() => Math.random() - 0.5);
    
    // 2. Group manual questions by chapter for even distribution (round-robin)
    const manualByChapter = manualQs.reduce((acc, q) => {
      const cid = q.chapterId || 'unknown';
      if (!acc[cid]) acc[cid] = [];
      acc[cid].push(q);
      return acc;
    }, {});

    // Shuffle questions within each chapter
    Object.keys(manualByChapter).forEach(cid => {
      manualByChapter[cid] = manualByChapter[cid].sort(() => Math.random() - 0.5);
    });

    const selectedManual = [];
    const chapterIdsForManual = Object.keys(manualByChapter).sort(() => Math.random() - 0.5);
    let hasMoreManual = true;
    let roundIdx = 0;
    
    while (selectedManual.length < qCount && hasMoreManual) {
      hasMoreManual = false;
      for (const cid of chapterIdsForManual) {
        if (manualByChapter[cid][roundIdx]) {
          selectedManual.push(manualByChapter[cid][roundIdx]);
          hasMoreManual = true;
          if (selectedManual.length >= qCount) break;
        }
      }
      roundIdx++;
    }
    
    // Fill the REMAINING slots with AI questions, also balancing by chapter
    const numAI = Math.max(0, qCount - selectedManual.length);
    const aiQs = [];
    if (numAI > 0) {
      const allAssignedChapters = assignedChapters.length > 0 ? assignedChapters : Array.from(targetChapterIds);
      for (let i = 0; i < numAI; i++) {
        const difficulty = pickWeightedDifficulty(chapterProgress?.difficultyMix);
        // Cycle through assigned chapters for AI generation
        const targetChapterId = allAssignedChapters[i % allAssignedChapters.length];
        aiQs.push(generateQuestion({
          year: assignedYears,
          course: assignedCourses,
          assignedChapters: [targetChapterId],
          assignedTopics,
          difficulty,
        }));
      }
    }
    
    // Combine them: Manual questions FIRST (shuffled among themselves), then AI questions
    const shuffledManual = [...selectedManual].sort(() => Math.random() - 0.5);
    const shuffledAI = [...aiQs].sort(() => Math.random() - 0.5);
    
    let combinedQs = [...shuffledManual, ...shuffledAI].map(correctQuestionAnswer);

    setQuestions(combinedQs);
    setUserAnswers(new Array(qCount).fill(null));
    setAnswerResults(new Array(qCount).fill(null));
    setCurrentIdx(0);
    setScore(0);
    setStep('quiz');
    setupQuestion(combinedQs[0]);
    if (setIsLocked) setIsLocked(true);
    setLoading(false);

      if (user?.uid) {
        const now = new Date();
        const today = now.toLocaleDateString('en-CA');
        setDoc(doc(db, 'users', user.uid, 'daily_stats', today), {
          completed: false,
          score: 0,
          total: qCount,
          challengeType: 'daily',
          maxXp: getChallengeMaxXp('daily'),
          xpEarned: 0,
          timestamp: now.toISOString(),
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questions: combinedQs || [],
          userAnswers: [],
          answerResults: [],
          abandoned: true
        })
          .then(() => pruneOldChallengeStats(user.uid, 'daily_stats'))
          .catch(console.error);
      }
    } catch (error) {
      console.error("Critical error in startDailyQuiz:", error);
      showToast("Failed to start challenge. Please check your assigned curriculum or try again later.", 'error');
      setLoading(false);
    }
  };

  const setupQuestion = (q) => {
    setTimeLeft(q.timeLimit || 30);
    setQuestionStartTime(Date.now());
    setSelectedOption(null);
    setSelectedOptionIdx(null);
    setIsCorrect(null);
    setShowHint(false);
    // Clear the canvas for the new question if it exists
    if (canvasRef.current) {
      try { canvasRef.current.clear(); } catch(e) {}
    }
  };

  // Timer logic
  useEffect(() => {
    if (step !== 'quiz' || (selectedOption !== null && selectedOptionIdx !== null) || !questionStartTime) return;
    
    const timeLimit = (questions[currentIdx]?.timeLimit || 30) * 1000;
    const endTime = questionStartTime + timeLimit;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
      
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        handleAnswer(null, null); // Time's up
      }
    }, 100); // Check more frequently for smooth UI
    
    return () => clearInterval(timer);
  }, [step, selectedOption, questionStartTime, currentIdx]);

  // Prevent accidental navigation
  useEffect(() => {
    if ((step === 'quiz' || step === 'feedback') && !isReporting) {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [step, isReporting]);

  const handleReportSubmit = async () => {
    if (!reportMessage.trim()) return;
    setIsSubmittingReport(true);
    try {
      const currentQ = reportedQuestion || questions[currentIdx];
      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        questionId: currentQ?.id || '',
        questionData: {
          id: currentQ?.id || '',
          question: currentQ?.question || currentQ?.text || '',
          answer: String(currentQ?.answer ?? ''),
          type: currentQ?.type || '',
          chapterId: currentQ?.chapterId || '',
          chapterTitle: currentQ?.chapterTitle || '',
          topicId: currentQ?.topicId || '',
          topicCode: currentQ?.topicCode || '',
          topicTitle: currentQ?.topicTitle || '',
          isManual: true,
          options: (getOptions(currentQ)).map(opt =>
            typeof opt === 'object' ? { text: String(opt.text || '') } : String(opt ?? '')
          )
        },
        message: reportMessage,
        status: 'open',
        createdAt: serverTimestamp()
      });
      setIsReporting(false);
      setReportedQuestion(null);
      setReportMessage('');
      showToast("Report submitted! We will review it.", 'success');
    } catch (error) {
      console.error("Report error:", error);
      showToast("Failed to submit report.", 'error');
    } finally {
      setIsSubmittingReport(false);
    }
  };

  const closeReportModal = () => {
    setIsReporting(false);
    setReportedQuestion(null);
    setReportMessage('');
  };

  const renderReportModal = () => (
    <AnimatePresence>
      {isReporting && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100001, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={closeReportModal} 
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }} 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} 
            style={{ position: 'relative', width: '100%', maxWidth: '400px', background: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', padding: '32px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flag size={20} style={{ color: '#ef4444' }} /> Report Issue
              </h3>
              <button onClick={closeReportModal} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.5 }}>
              Found a mistake? Tell us what's wrong with this question.
            </p>
            <textarea
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
              placeholder="e.g., I got the answer right but it flagged it as wrong."
              style={{ width: '100%', height: '120px', padding: '16px', borderRadius: '16px', border: '2px solid #e2e8f0', outline: 'none', resize: 'none', fontSize: '1rem', color: '#1e293b', marginBottom: '24px' }}
            />
            <button 
              onClick={handleReportSubmit}
              disabled={isSubmittingReport || !reportMessage.trim()}
              style={{ width: '100%', padding: '16px', borderRadius: '16px', border: 'none', background: '#ef4444', color: 'white', fontWeight: 800, fontSize: '1.1rem', cursor: isSubmittingReport || !reportMessage.trim() ? 'not-allowed' : 'pointer', opacity: isSubmittingReport || !reportMessage.trim() ? 0.5 : 1 }}
            >
              {isSubmittingReport ? 'Submitting...' : 'Submit Report'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const handleAnswer = async (optionText, optIdx = null) => {
    if (step === 'feedback' || isSubmittingCanvas) return;
    
    const currentQ = questions[currentIdx];
    const isShortAnswer = currentQ?.type === 'short_answer';
    const isGraphSketch = currentQ?.type === 'graph_sketch' || currentQ?.requiresManualGrading === true;
    
    let correct = false;
    let canvasDataUrl = null;
    let canvasPageImages = [];

    // Capture canvas for ANY question if split screen is active (Senior Students)
    if (showSplitScreen && canvasRef.current) {
      try {
        canvasPageImages = await canvasRef.current.exportPageImages?.() || [];
        canvasDataUrl = canvasPageImages[0] || await canvasRef.current.exportImage();
      } catch (err) {
        console.error("Failed to export working out image", err);
      }
    }

    if (isGraphSketch) {
      setIsSubmittingCanvas(true);
      // If not already captured by showSplitScreen check
      if (!canvasDataUrl && canvasRef.current) {
        try {
          canvasPageImages = await canvasRef.current.exportPageImages?.() || [];
          canvasDataUrl = canvasPageImages[0] || await canvasRef.current.exportImage();
        } catch(e){}
      }
      correct = false; // Pending review
    } else if (currentQ?.subQuestions?.length > 0) {
      // Handle sub-questions
      const subResults = currentQ.subQuestions.map((sq, idx) => {
        const userAnswer = (optionText && typeof optionText === 'object') ? optionText[sq.id || idx] : '';
        const normalizedInput = String(userAnswer || '').replace(/\s+/g, '').toLowerCase();
        const normalizedAnswer = String(sq.answer || '').replace(/\s+/g, '').toLowerCase();
        
        let isSqCorrect = false;
        if (sq.type === 'multiple_choice') {
          isSqCorrect = normalizedInput === normalizedAnswer;
        } else {
          isSqCorrect = normalizedInput === normalizedAnswer;
        }
        return { id: sq.id || idx, correct: isSqCorrect, answer: userAnswer };
      });
      
      correct = subResults.every(r => r.correct);
      const pointsEarned = subResults.filter(r => r.correct).length;
      
      // Store sub-results in result object for history view
      currentQ.lastSubResults = subResults;
      currentQ.pointsEarned = pointsEarned;
      currentQ.totalPoints = currentQ.subQuestions.length;
      
      if (pointsEarned > 0) {
        setScore(prev => prev + pointsEarned);
      }
    } else if (isShortAnswer) {
      const normalizedInput = (optionText || '').replace(/\s+/g, '').toLowerCase();
      const normalizedAnswer = (currentQ.answer || '').replace(/\s+/g, '').toLowerCase();
      correct = normalizedInput === normalizedAnswer;
      if (correct) setScore(prev => prev + 1);
    } else {
      // Robust multiple choice check:
      // 1. Check if answer matches the option index (common for manual bank questions)
      const isIndexMatch = optIdx !== null && String(currentQ.answer) === String(optIdx);
      // 2. Check if answer matches the literal option text
      const isTextMatch = String(optionText) === String(currentQ.answer);
      
      correct = isIndexMatch || isTextMatch;
      if (correct) setScore(prev => prev + 1);
    }

    if (isGraphSketch) {
      try {
        const gradingEntry = {
          userId: user.uid,
          userName: studentProfile?.name || studentProfile?.displayName || user?.displayName || 'Student',
          userEmail: studentProfile?.email || user?.email || '',
          date: new Date().toLocaleDateString('en-CA'), // Explicit local date for stat lookup
          questionId: currentQ?.id || null,
          questionText: currentQ?.question || currentQ?.text || '',
          answerImage: canvasDataUrl || null,
          answerImages: canvasPageImages || [],
          answerText: !canvasDataUrl ? (typeof optionText === 'string' ? optionText : '') : null,
          status: 'pending',
          submittedAt: serverTimestamp(),
          year: currentQ?.year || CHALLENGE_YEAR,
          chapterTitle: currentQ?.chapterTitle || '',
          topicTitle: currentQ?.topicTitle || '',
          challengeType: challengeType,
          totalQuestions: TOTAL_QUESTIONS,
          correctAnswer: currentQ?.answer || '',
          solution: currentQ?.solution || '',
          requiresManualGrading: currentQ?.requiresManualGrading || true,
        };
        await addDoc(collection(db, 'grading_queue'), gradingEntry);

        // Notify teacher
        try {
          await fetch('/api/send-notif', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              toAdmin: true,
              subject: `📝 Review Required: ${gradingEntry.userName}`,
              text: `${gradingEntry.userName} submitted an answer requiring teacher review.\n\nQuestion: "${gradingEntry.questionText.slice(0, 150)}"\nChapter: ${gradingEntry.chapterTitle}\n\nPlease check the grading queue in your dashboard.`,
            })
          });
        } catch (notifErr) {
          console.warn('Teacher notification failed (non-critical):', notifErr);
        }
      } catch (err) {
        console.error("Failed to submit for review", err);
      } finally {
        setIsSubmittingCanvas(false);
      }
    }

    setSelectedOption(optionText);
    setSelectedOptionIdx(optIdx);
    setIsCorrect(correct);
    
    // Scoring is now handled in the logic above based on sub-questions or individual results
    
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIdx] = optionText;
      return newAnswers;
    });

    setAnswerResults(prev => {
      const newResults = [...prev];
      const pEarned = currentQ?.subQuestions?.length > 0 
        ? (currentQ.pointsEarned || 0)
        : (correct ? 1 : 0);
      const tPoints = currentQ?.subQuestions?.length > 0 
        ? (currentQ.subQuestions.length)
        : 1;

      newResults[currentIdx] = {
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
        workingOut: canvasDataUrl, // Store the handwritten work
        workingOutPages: canvasPageImages,
      };
      return newResults;
    });

    setStep('feedback');

    // Auto-transition after 5 seconds if answer is wrong or pending graph sketch
    if (!correct || isGraphSketch) {
      setCountdown(isGraphSketch ? 3 : 5);
      const interval = setInterval(() => {
        setCountdown(prev => Math.max(0, prev - 1));
      }, 1000);

      const timer = setTimeout(() => {
        clearInterval(interval);
        nextQuestion();
      }, 5000);

      setAutoTransitionTimer({ timer, interval });
    }
  };

  // Clear timer when moving to next manually or component unmounts
  useEffect(() => {
    return () => {
      if (autoTransitionTimer) {
        clearTimeout(autoTransitionTimer.timer);
        clearInterval(autoTransitionTimer.interval);
      }
    };
  }, [autoTransitionTimer]);

  const nextQuestion = async () => {
    if (autoTransitionTimer) {
      clearTimeout(autoTransitionTimer.timer);
      clearInterval(autoTransitionTimer.interval);
      setAutoTransitionTimer(null);
    }
    setCountdown(0);
    setSubAnswers({});

    if (currentIdx < TOTAL_QUESTIONS - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setupQuestion(questions[nextIdx]);
      setStep('quiz');
    } else {
      await finishQuiz();
    }
  };

  const finishQuiz = async () => {
    if (isFinishing) return;
    try {
      setIsFinishing(true);
      setStep('result');
      if (setIsLocked) setIsLocked(false);
      
      if (user?.uid) {
        const now = new Date();
        const today = now.toLocaleDateString('en-CA'); // Reliable YYYY-MM-DD local date
        const ref = challengeType === 'calc' 
          ? doc(db, 'users', user.uid, 'calc_stats', today)
          : doc(db, 'users', user.uid, 'daily_stats', today);
        const assignedYears = Array.isArray(studentProfile?.assignedYear) ? studentProfile.assignedYear : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR];
        const assignedYear = assignedYears[0];
        const assignedChapters = challengeType === 'calc'
          ? (Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters.filter(id => id.startsWith('calc-')) : [])
          : getAssignedChapters(studentProfile, assignedYear);
        const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
        
        const currentAnswerResults = answerResults || [];
        const actualScore = currentAnswerResults.reduce((acc, r) => acc + (r.pointsEarned || (r.correct ? 1 : 0)), 0);
        const maxXp = getChallengeMaxXp(challengeType);
        const xpEarned = getEarnedXp(actualScore, totalPossibleScore, challengeType);
        const resultStats = summarizeResults(currentAnswerResults);
        const topicStats = summarizeByKey(currentAnswerResults, 'topicId', 'topicTitle');
        const chapterStats = summarizeByKey(currentAnswerResults, 'chapterId', 'chapterTitle');
        const nextDifficultyMix = adjustDifficultyMix(chapterProgress?.difficultyMix, resultStats);
        
        const record = {
          completed: true,
          abandoned: false, // Explicitly mark as not abandoned
          id: today,
          score: actualScore,
          total: totalPossibleScore,
          challengeType,
          maxXp,
          xpEarned,
          year: assignedYear,
          chapterId: assignedChapters.length === 1 ? assignedChapters[0] : 'mixed',
          chapterTitle: assignedChapters.length === 1 ? (questions.find(q => q.chapterId === assignedChapters[0])?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Number') : 'Mixed assigned topics',
          assignedChapters,
          assignedTopics,
          timestamp: now.toISOString(),
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questions: questions || [],
          userAnswers: userAnswers || [],
          answerResults: currentAnswerResults,
          topicStats,
          chapterStats,
          difficultyMixBefore: normalizeMix(chapterProgress?.difficultyMix),
          difficultyMixAfter: nextDifficultyMix,
        };
        
        // 1. Save the challenge stat record first
        await setDoc(ref, record, { merge: true });

        // 2. Atomic Update for XP and Progress
        await runTransaction(db, async (transaction) => {
          const userRef = doc(db, 'users', user.uid);
          const progressRef = doc(db, 'users', user.uid, 'chapterProgress', `${String(assignedYear || 'General').replace(' ', '_')}_daily`);
          
          const userSnap = await transaction.get(userRef);
          
          // Update chapter progress
          transaction.set(progressRef, {
            year: assignedYear || 'General',
            chapterId: record.chapterId,
            chapterTitle: record.chapterTitle,
            assignedChapters,
            assignedTopics,
            difficultyMix: nextDifficultyMix,
            lastResultStats: resultStats,
            lastTopicStats: topicStats,
            lastChapterStats: chapterStats,
            lastScore: actualScore,
            lastTotal: totalPossibleScore,
            updatedAt: now.toISOString(),
          }, { merge: true });

          // Update overall XP/Points - Use set with merge for maximum robustness
          const userData = userSnap.data() || {};
          const currentXP = Number(userData.totalXP) || 0;
          const currentCount = Number(userData.challengesCompleted) || 0;
          
          transaction.set(userRef, {
            totalXP: currentXP + xpEarned,
            challengesCompleted: currentCount + 1,
            lastActive: now.toISOString()
          }, { merge: true });
        });

        // --- Local State Updates ---
        pruneOldChallengeStats(user.uid, challengeType === 'calc' ? 'calc_stats' : 'daily_stats').catch(() => {});

        setChapterProgress(prev => ({
          ...(prev || {}),
          difficultyMix: nextDifficultyMix,
          lastResultStats: resultStats,
          lastTopicStats: topicStats,
          lastChapterStats: chapterStats,
        }));
        
        setHistory(prev => [record, ...(prev || [])]
          .sort((a, b) => getHistorySortTime(b) - getHistorySortTime(a))
          .slice(0, 30));
        if (challengeType === 'daily') {
          setTodayCompleted(true);
        } else if (challengeType === 'calc') {
          setCalcCompletedToday(true);
        }
      }
    } catch (err) {
      console.error("Error in finishQuiz:", err);
      showToast(`Save Failed: ${err.message || 'Database error'}. Your score was ${actualScore}/${TOTAL_QUESTIONS}`, 'error');
      setStep('result');
    }
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  if (viewMode === 'history') {
    return (
      <div className="app-page">
        <div className="app-page__header" style={{ marginBottom: '24px' }}>
          <div className="app-page__title">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={() => setViewMode('challenge')} className="app-icon-button" style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                <ChevronLeft size={24} />
              </button>
              <h2>Test History</h2>
            </div>
            <p>Review your past challenges and performance</p>
          </div>
        </div>
        
        <div className="challenge-container" style={{ maxWidth: '600px', margin: '0 auto', width: '100%', paddingBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {history.length > 0 ? history.map((item, idx) => (
              <motion.div 
                key={`${item.statCollection || item.challengeType || 'daily'}-${item.id || idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="app-panel" 
                onClick={() => setSelectedChallenge(item)}
                style={{ padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '4px' }}>
                    {item.challengeType === 'calc' ? 'Basic Calculation' : 'Daily Practice'} • {formatHistoryDate(item)}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8' }}>
                    {item.total || 0} Questions • {item.total ? Math.round(((item.score || 0)/item.total)*100) : 0}% Accuracy
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: item.score >= Math.ceil((item.total || 0) * 0.8) ? '#10b981' : item.score >= Math.ceil((item.total || 0) * 0.5) ? '#f59e0b' : '#f43f5e' }}>
                    {item.score || 0}/{item.total || 0}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1' }}>
                    +{item.xpEarned ?? getEarnedXp(item.score || 0, item.total || 0, item.challengeType || 'daily')} XP
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="app-empty" style={{ padding: '60px 0', background: '#f8fafc', borderRadius: '24px' }}>
                <Trophy size={48} style={{ color: '#cbd5e1', margin: '0 auto 16px', opacity: 0.5 }} />
                <p style={{ fontWeight: 600, color: '#94a3b8', margin: 0 }}>No tests completed yet. Start your first challenge!</p>
              </div>
            )}
          </div>

        <AnimatePresence>
          {selectedChallenge && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedChallenge(null)}
                style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)' }}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                style={{ position: 'relative', width: '100%', maxWidth: '700px', maxHeight: '85vh', backgroundColor: '#fff', borderRadius: '24px', overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div>
                    <h2 style={{ margin: '0 0 4px', fontSize: '1.5rem', fontWeight: 900 }}>Challenge Details</h2>
                    <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>{formatHistoryDate(selectedChallenge)} • Score: {selectedChallenge.score || 0}/{selectedChallenge.total || 0}</p>
                  </div>
                  <button onClick={() => setSelectedChallenge(null)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                    <X size={20} />
                  </button>
                </div>

                {Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0 ? (
                  (!selectedChallenge.answerResults || selectedChallenge.answerResults.length === 0) ? (
                    <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
                      <AlertTriangle size={48} style={{ opacity: 0.2, margin: '0 auto 16px', color: '#ef4444' }} />
                      <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#ef4444' }}>No Data Available</p>
                      <p style={{ margin: '8px 0 0', fontSize: '0.9rem' }}>This challenge was abandoned or refreshed before any questions were answered.</p>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {selectedChallenge.questions.map((q, idx) => {
                        const result = selectedChallenge.answerResults?.[idx];
                        if (!result) return null;
                        const userAnswer = result?.selectedAnswer ?? (selectedChallenge.userAnswers ? selectedChallenge.userAnswers[idx] : null);
                        const qData = questions.find(q => q.id === result.questionId);
                        if (!qData) return null; // Safety catch

                        const isCorrect = typeof result?.correct === 'boolean'
                          ? result.correct
                          : String(userAnswer) === String(qData.answer);
                        const questionText = toDisplayText(qData?.text || qData?.question, 'Question text unavailable');
                        const workingOutPages = getWorkingOutPages(result);
                        return (
                          <div key={idx} style={{ padding: '20px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                            {qData.isManual && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setReportedQuestion(qData);
                                  setIsReporting(true);
                                }}
                                style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff', padding: '6px', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', fontWeight: 800, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                              >
                                <Flag size={14} /> REPORT
                              </button>
                            )}
                            <div style={{ fontWeight: 800, marginBottom: '16px', color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.5, paddingRight: qData.isManual ? '80px' : '0' }}>
                              {idx + 1}. <MathView content={questionText} graphData={qData.graphData} />
                            </div>

                            {/* Display Working Out / Handwritten notes */}
                            {workingOutPages.length > 0 && (
                              <div style={{ marginBottom: '16px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff' }}>
                                <button
                                  onClick={() => setWorkingOutPreview({ pages: workingOutPages, page: 0, title: `Question ${idx + 1} Working Out` })}
                                  style={{ width: '100%', padding: '8px 12px', background: '#f8fafc', border: 'none', borderBottom: '1px solid #e2e8f0', fontSize: '0.7rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', cursor: 'pointer' }}
                                >
                                  Working Out {workingOutPages.length > 1 ? `• ${workingOutPages.length} pages` : '• Click to enlarge'}
                                </button>
                                <button
                                  onClick={() => setWorkingOutPreview({ pages: workingOutPages, page: 0, title: `Question ${idx + 1} Working Out` })}
                                  style={{ width: '100%', border: 'none', padding: 0, background: '#fff', cursor: 'zoom-in' }}
                                >
                                  <img src={workingOutPages[0]} alt="Student Working Out" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                                </button>
                              </div>
                            )}
                            {q.subQuestions?.length > 0 ? (
                               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                 {q.subQuestions.map((sq, sIdx) => {
                                   const sUserAnswer = userAnswer && typeof userAnswer === 'object' ? userAnswer[sq.id || sIdx] : '';
                                   const sIsCorrect = String(sUserAnswer || '').replace(/\s+/g, '').toLowerCase() === String(sq.answer || '').replace(/\s+/g, '').toLowerCase();
                                   
                                   return (
                                     <div key={sq.id || sIdx} style={{ padding: '16px', borderRadius: '16px', background: sIsCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${sIsCorrect ? '#dcfce7' : '#fee2e2'}` }}>
                                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                         <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: sIsCorrect ? '#10b981' : '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900 }}>
                                           {String.fromCharCode(97 + sIdx)}
                                         </div>
                                         <MathView content={sq.question} style={{ fontWeight: 700, fontSize: '0.9rem', color: sIsCorrect ? '#166534' : '#991b1b' }} />
                                       </div>
                                       <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                                         <span style={{ opacity: 0.6 }}>Your Answer:</span> <MathView content={String(sUserAnswer || 'None')} style={{ display: 'inline' }} />
                                         {!sIsCorrect && (
                                           <div style={{ marginTop: '4px', color: '#166534' }}>
                                             <span style={{ opacity: 0.6 }}>Correct Answer:</span> <MathView content={String(sq.answer)} style={{ display: 'inline' }} />
                                           </div>
                                         )}
                                         {sq.solution && (
                                           <div style={{ marginTop: '12px', padding: '12px', borderRadius: '12px', background: 'white', border: '1px solid #e0e7ff', color: '#4338ca' }}>
                                             <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                                               <Lightbulb size={14} /> <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>Sub-part Solution</span>
                                             </div>
                                             <MathView content={sq.solution} />
                                           </div>
                                         )}
                                       </div>
                                     </div>
                                   );
                                 })}
                               </div>
                             ) : getOptions(q).length === 0 ? (
                              <div style={{ display: 'grid', gap: '10px' }}>
                                <div style={{ 
                                  padding: '12px 16px', 
                                  borderRadius: '12px', 
                                  background: result?.isPending ? '#fffbeb' : (isCorrect ? '#dcfce7' : '#fee2e2'), 
                                  border: `1px solid ${result?.isPending ? '#fcd34d' : (isCorrect ? '#22c55e' : '#ef4444')}`, 
                                  color: result?.isPending ? '#b45309' : (isCorrect ? '#166534' : '#991b1b'), 
                                  fontWeight: 800 
                                }}>
                                  Student Answer: <MathView content={String(userAnswer ?? 'No answer')} />
                                </div>
                                {!isCorrect && !result?.isPending && (
                                  <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#dcfce7', border: '1px solid #22c55e', color: '#166534', fontWeight: 800 }}>
                                    Correct Answer: <MathView content={String(q.answer ?? '')} />
                                  </div>
                                )}
                              </div>
                            ) : (
                            <div style={{ display: 'grid', gap: '8px' }}>
                              {getOptions(q).map((opt, i) => {
                                if (!opt) return null;
                                const optText = getOptionText(opt);
                                const optImage = getOptionImage(opt);
                                
                                const isSelected = String(userAnswer) === String(optText) || (result?.selectedIdx !== undefined ? String(result.selectedIdx) === String(i) : (q.isManual && String(userAnswer) === String(i)));
                                const isAnswer = (q.isManual && String(i) === String(q.answer)) || (!q.isManual && String(optText) === String(q.answer));
                                
                                let bg = 'white';
                                let border = '1px solid #cbd5e1';
                                let color = '#475569';
                                
                                if (isAnswer && !result?.isPending) {
                                  bg = '#dcfce7';
                                  border = '1px solid #22c55e';
                                  color = '#166534';
                                } else if (isSelected && !isCorrect) {
                                  if (result?.isPending) {
                                    bg = '#fffbeb';
                                    border = '1px solid #fcd34d';
                                    color = '#b45309';
                                  } else {
                                    bg = '#fee2e2';
                                    border = '1px solid #ef4444';
                                    color = '#991b1b';
                                  }
                                }

                                return (
                                  <div key={i} style={{ padding: '12px 16px', borderRadius: '12px', background: bg, border: border, color: color, fontSize: '0.95rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                      <MathView content={optText} />
                                      {optImage && <img src={optImage} alt="Option" style={{ maxHeight: '40px', maxWidth: '100px', objectFit: 'contain' }} />}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      {isAnswer && !result?.isPending && <Check size={18} style={{ color: '#166534' }} />}
                                      {isSelected && !isCorrect && (
                                        result?.isPending ? <Clock size={18} style={{ color: '#b45309' }} /> : <X size={18} style={{ color: '#991b1b' }} />
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            )}
                            {q.solution && (
                               <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: '#e0e7ff', color: '#4338ca', fontSize: '0.9rem', fontWeight: 600 }}>
                                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                   <Lightbulb size={16} /> <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</span>
                                 </div>
                                 <MathView content={q.solution} graphData={q.graphData} />
                               </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
                    <Trophy size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Detailed history not available.</p>
                    <p style={{ margin: '8px 0 0', fontSize: '0.9rem' }}>This challenge was completed before detailed tracking was enabled.</p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {workingOutPreview && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setWorkingOutPreview(null)}
                style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(10px)' }}
              />
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                style={{ position: 'relative', width: 'min(94vw, 1100px)', height: 'min(88vh, 820px)', background: '#fff', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 80px rgba(0,0,0,0.25)' }}
              >
                <div style={{ padding: '14px 18px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: '#f8fafc' }}>
                  <div style={{ fontWeight: 900, color: '#1e293b' }}>
                    {workingOutPreview.title} <span style={{ color: '#64748b', fontWeight: 800 }}>• Page {workingOutPreview.page + 1}/{workingOutPreview.pages.length}</span>
                  </div>
                  <button onClick={() => setWorkingOutPreview(null)} style={{ border: 'none', background: '#e2e8f0', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#475569' }}>
                    <X size={20} />
                  </button>
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', position: 'relative', padding: '16px' }}>
                  {workingOutPreview.pages.length > 1 && (
                    <button
                      onClick={() => setWorkingOutPreview(prev => ({ ...prev, page: Math.max(0, prev.page - 1) }))}
                      disabled={workingOutPreview.page === 0}
                      style={{ position: 'absolute', left: '16px', zIndex: 2, width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: workingOutPreview.page === 0 ? '#e2e8f0' : '#fff', color: workingOutPreview.page === 0 ? '#94a3b8' : '#4f46e5', boxShadow: '0 10px 24px rgba(15,23,42,0.12)', cursor: workingOutPreview.page === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <ChevronLeft size={24} />
                    </button>
                  )}
                  <img src={workingOutPreview.pages[workingOutPreview.page]} alt="Working out page" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', background: '#fff', borderRadius: '16px', boxShadow: '0 18px 48px rgba(15,23,42,0.14)' }} />
                  {workingOutPreview.pages.length > 1 && (
                    <button
                      onClick={() => setWorkingOutPreview(prev => ({ ...prev, page: Math.min(prev.pages.length - 1, prev.page + 1) }))}
                      disabled={workingOutPreview.page === workingOutPreview.pages.length - 1}
                      style={{ position: 'absolute', right: '16px', zIndex: 2, width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: workingOutPreview.page === workingOutPreview.pages.length - 1 ? '#e2e8f0' : '#fff', color: workingOutPreview.page === workingOutPreview.pages.length - 1 ? '#94a3b8' : '#4f46e5', boxShadow: '0 10px 24px rgba(15,23,42,0.12)', cursor: workingOutPreview.page === workingOutPreview.pages.length - 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <ChevronRight size={24} />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {renderReportModal()}
        </div>
      </div>
    );
  }

  if ((todayCompleted || abandonedToday) && step === 'start') {
    return (
      <div className="app-page">
        <div className="app-page__header" style={{ marginBottom: '24px' }}>
          <div className="app-page__title">
            <h2>Challenge Status</h2>
            <p>{todayCompleted ? "Goal achieved for today" : "Session terminated"}</p>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px', 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '40px 20px',
        }}>
          {renderLeaderboardPreview()}

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            className="app-panel" 
            style={{ 
              textAlign: 'center', 
              padding: 'clamp(24px, 5vw, 48px) clamp(20px, 5vw, 40px)', 
              borderRadius: '28px',
              width: '100%',
              maxWidth: '560px',
              boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
              border: `2px solid ${todayCompleted ? '#10b981' : '#6366f1'}`,
              background: '#fff',
              position: 'relative'
            }}
          >
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: todayCompleted ? '#f0fdf4' : '#fff1f2',
              color: todayCompleted ? '#10b981' : '#f43f5e',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '0.7rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: todayCompleted ? '1px solid #dcfce7' : '1px solid #fee2e2',
              marginBottom: '20px'
            }}>
              {todayCompleted ? '✓ Goal Achieved' : '⚡ Session Terminated'}
            </div>

            {/* Icon */}
            <div style={{ 
              width: '72px', 
              height: '72px', 
              background: todayCompleted ? '#f0fdf4' : '#fff1f2', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 16px',
              border: `1px solid ${todayCompleted ? '#dcfce7' : '#fee2e2'}`
            }}>
              {todayCompleted ? <Trophy size={36} color="#10b981" /> : <AlertTriangle size={36} color="#f43f5e" />}
            </div>
            
            {/* Title */}
            <h2 style={{ 
              fontSize: 'clamp(1.6rem, 6vw, 2.4rem)', 
              fontWeight: 900, 
              marginBottom: '16px', 
              color: '#1e1b4b',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}>
              {todayCompleted ? "Excellent Job!" : "Session Ended"}
            </h2>

            {/* Info Card */}
            <div style={{ 
              padding: '16px 20px', 
              borderRadius: '16px', 
              background: '#f8fafc',
              border: '1px solid #f1f5f9',
              marginBottom: '28px',
              textAlign: 'left'
            }}>
              {todayCompleted ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ color: '#1e1b4b', fontWeight: 800, fontSize: '0.95rem', margin: '0 0 4px' }}>Challenge Complete</p>
                    <p style={{ color: '#64748b', fontWeight: 500, fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                      You met your daily goal. Come back tomorrow!
                    </p>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, marginTop: '2px' }}>
                    <X size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ color: '#1e1b4b', fontWeight: 800, fontSize: '0.95rem', margin: '0 0 4px' }}>Automatic Termination</p>
                    <p style={{ color: '#64748b', fontWeight: 500, fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                      Session was interrupted by a refresh or navigation.
                    </p>
                    <p style={{ color: '#f43f5e', fontWeight: 700, fontSize: '0.8rem', margin: '6px 0 0' }}>
                      Progress for this attempt has been reset.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setViewMode('history')} 
                className="app-button" 
                style={{ 
                  flex: 2,
                  padding: '14px 16px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(30, 27, 75, 0.2)',
                }}
              >
                View Progress
              </button>
              <button 
                onClick={onBack} 
                style={{ 
                  flex: 1,
                  padding: '14px 16px', 
                  background: '#f1f5f9',
                  color: '#475569',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </motion.div>

          {/* Still allow calculation practice if it's enabled and today wasn't fully completed? 
              Actually, usually we allow calc practice separately. */}
          {studentProfile?.calculationEnabled !== false && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="app-panel" 
              style={{ 
                padding: '48px', 
                borderRadius: '32px', 
                border: '1px solid #fef3c7', 
                background: '#fffbeb',
                width: '100%',
                maxWidth: '600px',
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.05)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(217, 119, 6, 0.1)' }}>
                  <Target size={28} color="#d97706" />
                </div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#78350f', marginBottom: '12px' }}>Calculation Practice</h1>
                <p style={{ color: '#92400e', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px', maxWidth: '400px' }}>
                  Improve your speed and accuracy with {getQuestionCount('calc')} arithmetic questions.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '280px' }}>
                  {calcAbandonedToday ? (
                    <div style={{ background: '#fff1f2', border: '2px solid #ffe4e6', padding: '16px 20px', borderRadius: '20px', color: '#be123c', fontWeight: 800 }}>
                      Basic Calculation ended. Please try again tomorrow.
                    </div>
                  ) : calcCompletedToday ? (
                    <div style={{ background: '#f0fdf4', border: '2px solid #dcfce7', padding: '16px 20px', borderRadius: '20px', color: '#166534', fontWeight: 800 }}>
                      Today's Basic Calculation Done!
                    </div>
                  ) : (
                    <button onClick={startCalculationQuiz} className="app-button" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', cursor: 'pointer' }}>
                      Start Calculation
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          <div style={{ width: '100%', maxWidth: '800px' }}>
            {renderInsights()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      {step === 'start' && (
        <div className="app-page__header" style={{ marginBottom: '24px' }}>
          <div className="app-page__title">
            <h2>Challenge</h2>
            <p>Daily practice questions</p>
          </div>
        </div>
      )}

      <div className="challenge-container" style={{ maxWidth: '600px', margin: '0 auto', width: '100%', paddingBottom: '40px' }}>
      {/* Header Area - Only show during quiz/feedback */}
      {(step === 'quiz' || step === 'feedback') && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          {(step === 'quiz' || step === 'feedback') && questions[currentIdx]?.isManual ? (
            <button 
              onClick={() => setIsReporting(true)}
              className="app-icon-button"
              style={{ 
                background: '#fef2f2', 
                color: '#ef4444',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              title="Report an issue"
            >
              <Flag size={20} />
            </button>
          ) : (
            <div style={{ width: '42px' }} />
          )}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '120px', height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + (step === 'feedback' ? 1 : 0)) / TOTAL_QUESTIONS) * 100}%` }}
                  style={{ height: '100%', background: '#6366f1' }}
                />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#6366f1' }}>{currentIdx + 1}/{TOTAL_QUESTIONS}</span>
            </div>
          </div>
          <div style={{ width: '42px' }} />
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 'start' && (
          <motion.div 
            key="start-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', width: '100%' }}
          >
            {renderLeaderboardPreview()}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="app-panel" style={{ padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', background: '#fff' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #e0e7ff, #f5f3ff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(99, 102, 241, 0.1)' }}>
                  <BookOpen size={28} color="#4f46e5" />
                </div>
                
                <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', marginBottom: '12px' }}>Daily Practice</h1>
                <p style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px', maxWidth: '400px' }}>
                  Complete {getQuestionCount('daily')} random questions to keep your brain sharp. <br/>
                  Earn up to <span style={{ color: '#6366f1', fontWeight: 800 }}>{getChallengeMaxXp('daily')} XP</span> and maintain your learning streak.
                </p>

                <div style={{ width: '100%', maxWidth: '400px' }}>
                  {abandonedToday ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{ 
                        background: '#fff1f2', 
                        border: '2px solid #ffe4e6', 
                        padding: '24px', 
                        borderRadius: '24px', 
                        textAlign: 'left',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <div style={{ width: '40px', height: '40px', background: '#f43f5e', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                        <AlertTriangle size={22} />
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 4px', fontSize: '1rem', fontWeight: 800, color: '#9f1239' }}>Challenge Terminated</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#be123c', fontWeight: 600, lineHeight: 1.5 }}>
                          You left or refreshed the page during a challenge. The session was automatically closed with 0 points.
                          <strong style={{ display: 'block', marginTop: '8px' }}>Please try again tomorrow!</strong>
                        </p>
                      </div>
                    </motion.div>
                  ) : todayCompleted ? (
                    <div style={{ background: '#f0fdf4', border: '2px solid #dcfce7', padding: '16px 24px', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#166534', fontWeight: 800 }}>
                      <CheckCircle2 size={20} /> Today's Challenge Done!
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <button onClick={startDailyQuiz} className="app-button app-button--primary" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)' }}>
                        Start Challenge
                      </button>
                    </div>
                  )}

                  {history.length > 0 && (
                    <button onClick={() => setViewMode('history')} style={{ background: 'transparent', border: 'none', color: '#64748b', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', padding: '8px', transition: 'color 0.2s', marginTop: '12px', width: '100%' }}>
                      View Test History
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {studentProfile?.calculationEnabled !== false && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="app-panel" style={{ padding: '48px', borderRadius: '32px', border: '1px solid #fef3c7', background: '#fffbeb' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(217, 119, 6, 0.1)' }}>
                    <Target size={28} color="#d97706" />
                  </div>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#78350f', marginBottom: '12px' }}>Calculation Practice</h1>
                  <p style={{ color: '#92400e', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px', maxWidth: '400px' }}>
                    Complete {getQuestionCount('calc')} arithmetic questions to improve your speed and accuracy. <br/>
                    Earn up to <span style={{ color: '#d97706', fontWeight: 800 }}>{getChallengeMaxXp('calc')} XP</span>!
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '280px' }}>
                    {calcAbandonedToday ? (
                      <div style={{ background: '#fff1f2', border: '2px solid #ffe4e6', padding: '16px 20px', borderRadius: '20px', color: '#be123c', fontWeight: 800 }}>
                        Basic Calculation ended. Please try again tomorrow.
                      </div>
                    ) : calcCompletedToday ? (
                      <div style={{ background: '#f0fdf4', border: '2px solid #dcfce7', padding: '16px 20px', borderRadius: '20px', color: '#166534', fontWeight: 800 }}>
                        Today's Basic Calculation Done!
                      </div>
                    ) : (
                      <button onClick={startCalculationQuiz} className="app-button" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(217, 119, 6, 0.2)' }}>
                        Start Calculation
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Performance Insights Section - MOVED FROM DASHBOARD */}
            {renderInsights()}
          </motion.div>
        )}

        {(step === 'quiz' || step === 'feedback') && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              backgroundColor: '#f8fafc', 
              zIndex: 2000, 
              padding: isMobile ? '20px 16px' : '40px 20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ 
              maxWidth: showSplitScreen ? '1200px' : '600px', 
              width: '100%', 
              display: 'flex', 
              flexDirection: showSplitScreen ? 'row' : 'column', 
              gap: isMobile ? '20px' : '40px',
              alignItems: 'flex-start',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ flex: 1, maxWidth: showSplitScreen ? '600px' : '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Top Progress & Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge</span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {currentIdx + 1} of {TOTAL_QUESTIONS}</div>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '8px' }}>
                  {questions[currentIdx]?.isManual && (
                    <button 
                      onClick={() => setIsReporting(true)}
                      className="app-icon-button"
                      style={{ 
                        background: '#fff', 
                        color: '#ef4444',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        width: '36px', height: '36px'
                      }}
                    >
                      <Flag size={18} />
                    </button>
                  )}
                   <div style={{ fontSize: '0.9rem', fontWeight: 800, color: timeLeft < 10 ? '#f43f5e' : '#64748b', background: '#fff', padding: '8px 12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                     <Clock size={16} /> {timeLeft}s
                   </div>
                </div>
              </div>

              {/* Time Progress Bar */}
              <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: `${(timeLeft / (questions[currentIdx]?.timeLimit || 30)) * 100}%`,
                    backgroundColor: timeLeft < 10 ? '#f43f5e' : '#6366f1'
                  }}
                  style={{ height: '100%' }}
                />
              </div>

              {/* Question Card */}
              <div className="app-panel" style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  {step === 'feedback' && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                      {questions[currentIdx]?.year || CHALLENGE_YEAR} • {questions[currentIdx]?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Numbers'}
                    </span>
                  )}
                  {questions[currentIdx]?.hint && (
                    <button 
                      onClick={() => setShowHint(!showHint)}
                      style={{ 
                        background: showHint ? '#fef3c7' : '#fff7ed', 
                        border: 'none', 
                        padding: '6px 12px', 
                        borderRadius: '10px', 
                        color: '#d97706', 
                        fontSize: '0.75rem', 
                        fontWeight: 800, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                    </button>
                  )}
                </div>
                <MathView 
                  content={questions[currentIdx]?.question} 
                  graphData={questions[currentIdx]?.graphData}
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.6, margin: 0 }} 
                />
                
                <AnimatePresence>
                  {showHint && questions[currentIdx]?.hint && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ marginTop: '16px', padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', marginBottom: '8px' }}>
                          <Lightbulb size={16} />
                          <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' }}>Hint</span>
                        </div>
                        <MathView content={questions[currentIdx].hint} style={{ color: '#92400e', fontSize: '0.95rem', fontWeight: 600 }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {questions[currentIdx]?.questionImage && (
                  <img src={questions[currentIdx].questionImage} alt="Question" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
                )}
              </div>

              {questions[currentIdx]?.subQuestions?.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {questions[currentIdx].subQuestions.map((sq, sIdx) => (
                    <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                          {String.fromCharCode(97 + sIdx)}
                        </div>
                        <MathView content={sq.question} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
                      </div>

                      {sq.type === 'multiple_choice' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                          {(sq.options || []).map((opt, oIdx) => {
                            const isSelected = subAnswers[sq.id || sIdx] === (typeof opt === 'string' ? opt : opt.text);
                            const isCorrect = step === 'feedback' && (
                              (sq.isManual && String(oIdx) === String(sq.answer)) || (!sq.isManual && String(typeof opt === 'string' ? opt : opt.text) === String(sq.answer))
                            );
                            const isWrong = step === 'feedback' && isSelected && !isCorrect;

                            return (
                              <button
                                key={oIdx}
                                onClick={() => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: (typeof opt === 'string' ? opt : opt.text) }))}
                                disabled={step === 'feedback'}
                                style={{
                                  padding: '12px 16px',
                                  borderRadius: '12px',
                                  border: `2px solid ${isCorrect ? '#10b981' : isWrong ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9'}`,
                                  background: isCorrect ? '#f0fdf4' : isWrong ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                                  color: isCorrect ? '#166534' : isWrong ? '#991b1b' : isSelected ? '#4f46e5' : '#64748b',
                                  fontWeight: 800,
                                  fontSize: '0.85rem',
                                  cursor: step === 'feedback' ? 'default' : 'pointer',
                                  transition: 'all 0.2s',
                                  textAlign: 'left'
                                }}
                              >
                                {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div style={{ position: 'relative' }}>
                          <input 
                            type="text"
                            disabled={step === 'feedback'}
                            value={subAnswers[sq.id || sIdx] || ''}
                            onChange={(e) => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: e.target.value }))}
                            placeholder="Type answer..."
                            style={{ 
                              width: '100%',
                              padding: '12px 16px', 
                              borderRadius: '12px', 
                              border: `2px solid ${step === 'feedback' ? (String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() === String(sq.answer).replace(/\s+/g, '').toLowerCase() ? '#10b981' : '#ef4444') : '#f1f5f9'}`, 
                              background: 'white',
                              fontWeight: 700,
                              fontSize: '0.95rem'
                            }}
                          />
                          {step === 'feedback' && String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() !== String(sq.answer).replace(/\s+/g, '').toLowerCase() && (
                            <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '4px 10px', borderRadius: '6px' }}>
                              Correct: <MathView content={String(sq.answer)} style={{ display: 'inline' }} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {step !== 'feedback' && (
                    <button 
                      onClick={() => handleAnswer(subAnswers)}
                      disabled={Object.keys(subAnswers).length < questions[currentIdx].subQuestions.length}
                      className="app-button app-button--primary"
                      style={{ padding: '20px', borderRadius: '24px', fontSize: '1.1rem', marginTop: '12px' }}
                    >
                      Submit All Parts
                    </button>
                  )}
                </div>
              ) : questions[currentIdx]?.type === 'short_answer' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Math Symbol Toolbar */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px', justifyContent: 'center' }}>
                    {MATH_SYMBOLS.map(symbol => (
                      <button
                        key={symbol}
                        onClick={(e) => {
                          e.preventDefault();
                          const currentVal = selectedOption || '';
                          setSelectedOption(currentVal + symbol);
                          // Maintain focus on input
                          answerInputRef.current?.focus();
                        }}
                        disabled={step === 'feedback'}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          background: symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff',
                          color: '#4f46e5',
                          fontSize: symbol === '√' ? '1.3rem' : '1.1rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                          transition: 'all 0.2s',
                          fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                          lineHeight: 1,
                          padding: 0,
                          paddingBottom: symbol === '√' ? '2px' : '0'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f5f3ff'}
                        onMouseLeave={(e) => e.currentTarget.style.background = symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff'}
                      >
                        {symbol}
                      </button>
                    ))}
                    {/* Backspace Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const currentVal = selectedOption || '';
                        setSelectedOption(currentVal.slice(0, -1));
                        // Maintain focus on input
                        answerInputRef.current?.focus();
                      }}
                      disabled={step === 'feedback'}
                      style={{
                        width: '64px',
                        height: '44px',
                        borderRadius: '12px',
                        border: '1px solid #fee2e2',
                        background: '#fff1f2',
                        color: '#e11d48',
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                        transition: 'all 0.2s',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#ffe4e6'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#fff1f2'}
                    >
                      Del
                    </button>
                  </div>

                  <input 
                    ref={answerInputRef}
                    type="text"
                    disabled={step === 'feedback'}
                    value={step === 'feedback' ? userAnswers[currentIdx] || '' : selectedOption || ''}
                    onChange={(e) => step !== 'feedback' && setSelectedOption(e.target.value)}
                    placeholder="Type your answer..."
                    className="app-input"
                    style={{ 
                      fontSize: '1.4rem', 
                      padding: '24px', 
                      borderRadius: '24px', 
                      textAlign: 'center', 
                      fontWeight: 700,
                      fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                      letterSpacing: '0.05em'
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && selectedOption && handleAnswer(selectedOption)}
                    autoFocus
                  />
                  {step !== 'feedback' && (
                    <button 
                      onClick={() => handleAnswer(selectedOption)}
                      disabled={!selectedOption}
                      className="app-button app-button--primary"
                      style={{ padding: '18px', borderRadius: '20px' }}
                    >
                      Submit Answer
                    </button>
                  )}
                </div>
              ) : questions[currentIdx]?.type === 'graph_sketch' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', textAlign: 'center', marginBottom: '8px' }}>
                    Draw your graph on the canvas, then submit it for grading.
                  </p>
                  {step !== 'feedback' ? (
                    <button 
                      onClick={() => handleAnswer('Graph Submitted')}
                      disabled={isSubmittingCanvas}
                      className="app-button app-button--primary"
                      style={{ padding: '18px', borderRadius: '20px' }}
                    >
                      {isSubmittingCanvas ? 'Saving Graph...' : 'Submit Graph for Review'}
                    </button>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '16px', background: '#fef3c7', borderRadius: '16px', color: '#d97706', fontWeight: 800 }}>
                      <Check size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
                      Graph Submitted - Pending Review
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {getOptions(questions[currentIdx]).map((opt, i) => {
                    const optText = getOptionText(opt);
                    const optImage = getOptionImage(opt);
                    const isSelected = selectedOptionIdx === i;
                    
                    let status = 'default';
                    if (step === 'feedback') {
                      const isCorrectChoice = (questions[currentIdx].isManual && String(i) === String(questions[currentIdx].answer)) || (!questions[currentIdx].isManual && String(optText) === String(questions[currentIdx].answer));
                      if (isCorrectChoice) status = 'correct';
                      else if (isSelected) status = 'wrong';
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => step !== 'feedback' && handleAnswer(optText, i)}
                        disabled={step === 'feedback'}
                        className={`app-option-card ${status !== 'default' ? `app-option-card--${status}` : isSelected ? 'app-option-card--selected' : ''}`}
                        style={{ 
                          padding: '16px 28px', 
                          textAlign: 'left', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          gap: '16px',
                          border: '2px solid transparent',
                          transition: 'all 0.2s',
                          cursor: step === 'feedback' ? 'default' : 'pointer',
                          borderRadius: '100px', // Capsule shape
                          background: status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                          boxShadow: status === 'correct' ? '0 0 0 2px #10b981' : status === 'wrong' ? '0 0 0 2px #ef4444' : isSelected ? '0 0 0 2px #6366f1' : '0 4px 12px rgba(0,0,0,0.03)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ 
                            width: '32px', height: '32px', borderRadius: '50%', 
                            background: status === 'correct' ? '#10b981' : status === 'wrong' ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9', 
                            color: isSelected || status !== 'default' ? 'white' : '#64748b',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 900, fontSize: '0.9rem', flexShrink: 0
                          }}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div style={{ flex: 1 }}>
                            <MathView content={optText} style={{ fontWeight: 700, fontSize: '1rem' }} />
                            {optImage && <img src={optImage} alt="Option" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                          </div>
                        </div>
                        <div style={{ flexShrink: 0 }}>
                          {status === 'correct' && <CheckCircle2 size={24} style={{ color: '#10b981' }} />}
                          {status === 'wrong' && <XCircle size={24} style={{ color: '#ef4444' }} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 'feedback' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                  {(() => {
                    const isPendingReview = questions[currentIdx]?.type === 'graph_sketch' || questions[currentIdx]?.requiresManualGrading === true;
                    
                    if (isPendingReview) {
                      return (
                        <div style={{ padding: '24px', borderRadius: '24px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <Clock size={24} color="#d97706" />
                            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#92400e' }}>
                              Submitted for Review!
                            </span>
                          </div>
                          <p style={{ margin: 0, color: '#b45309', fontSize: '0.95rem', fontWeight: 600 }}>
                            Your teacher will review your work and award points soon.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div style={{ padding: '24px', borderRadius: '24px', background: isCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${isCorrect ? '#dcfce7' : '#fee2e2'}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                          {isCorrect ? <CheckCircle2 size={24} color="#10b981" /> : <XCircle size={24} color="#ef4444" />}
                          <span style={{ fontSize: '1.1rem', fontWeight: 900, color: isCorrect ? '#166534' : '#991b1b' }}>
                            {isCorrect ? 'Excellent!' : 'Keep going!'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div style={{ margin: '0 0 16px', padding: '12px 16px', borderRadius: '12px', background: 'white', border: '1px solid #fee2e2' }}>
                            <p style={{ margin: 0, color: '#b91c1c', fontSize: '0.95rem', fontWeight: 800 }}>
                              <span style={{ opacity: 0.7, marginRight: '8px' }}>Correct Answer:</span>
                              <MathView content={
                                questions[currentIdx].type === 'multiple_choice' && questions[currentIdx].isManual
                                  ? getOptionText(getOptions(questions[currentIdx])[parseInt(questions[currentIdx].answer)]) 
                                  : questions[currentIdx].answer
                              } />
                            </p>
                          </div>
                        )}
                        {questions[currentIdx]?.solution && (
                          <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366f1', marginBottom: '8px' }}>
                              <Lightbulb size={18} />
                              <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Solution</span>
                            </div>
                            <MathView 
                              content={questions[currentIdx].solution} 
                              graphData={questions[currentIdx].graphData}
                              style={{ color: '#475569', fontSize: '0.95rem' }} 
                            />
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  <button onClick={nextQuestion} className="app-button app-button--primary" style={{ padding: '20px', borderRadius: '20px', fontSize: '1.1rem', width: '100%' }}>
                    {currentIdx === TOTAL_QUESTIONS - 1 ? (countdown > 0 ? `Finish Challenge (${countdown}s)` : 'Finish Challenge') : (countdown > 0 ? `Next Question (${countdown}s)` : 'Next Question')}
                  </button>
                </motion.div>
              )}
              </div>

            {/* Right Side: Working Out Canvas for Year 10+ students */}
            {showSplitScreen && (
              <div style={{ 
                flex: 1, 
                height: window.innerWidth >= 1024 ? 'calc(100vh - 120px)' : '400px', 
                minHeight: '400px',
                display: 'flex', 
                flexDirection: 'column',
                position: window.innerWidth >= 1024 ? 'sticky' : 'static',
                top: '60px'
              }}>
                <CanvasErrorBoundary key={currentQuestion?.id || currentIdx}>
                  <WorkingOutCanvas
                    ref={canvasRef}
                    questionType={currentQuestion?.type}
                    isSubmitted={step === 'feedback'}
                  />
                </CanvasErrorBoundary>
              </div>
            )}
          </div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="app-panel" style={{ padding: '48px', textAlign: 'center', borderRadius: '40px' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 32px' }}>
              <div style={{ position: 'absolute', inset: 0, background: '#f5f3ff', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              <div style={{ position: 'relative', width: '100%', height: '100%', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 15px 30px rgba(99,102,241,0.3)' }}>
                <Trophy size={60} />
              </div>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '8px' }}>Challenge Complete!</h1>
            <p style={{ color: '#64748b', fontWeight: 700, fontSize: '1.1rem', marginBottom: '40px' }}>
              You scored <span style={{ color: '#6366f1' }}>{score} out of {totalPossibleScore}</span>
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '24px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>POINTS EARNED</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>+{getEarnedXp(score, totalPossibleScore, challengeType)} XP</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '24px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>ACCURACY</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>{totalPossibleScore > 0 ? Math.round((score/totalPossibleScore)*100) : 0}%</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button 
                onClick={() => {
                  const currentRecord = {
                    chapterTitle: CHALLENGE_BLUEPRINT?.title || 'Numbers & Place Value',
                    score,
                    total: TOTAL_QUESTIONS,
                    questions,
                    userAnswers,
                    answerResults,
                    timestamp: new Date().toISOString()
                  };
                  setSelectedChallenge(currentRecord);
                  setViewMode('history');
                }} 
                className="app-button app-button--secondary" 
                style={{ padding: '18px', borderRadius: '20px', fontWeight: 800 }}
              >
                Review Answers
              </button>
              <button onClick={onBack} className="app-button app-button--primary" style={{ padding: '18px', borderRadius: '20px', fontWeight: 800 }}>
                Return Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {renderReportModal()}
    </div>
    </div>
  );
};

export default DailyChallenge;
