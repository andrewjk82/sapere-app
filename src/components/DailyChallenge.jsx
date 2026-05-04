import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Clock, CheckCircle2, XCircle, 
  Trophy,
  Lightbulb, BookOpen, X, Check, Flag
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc, increment, collection, getDocs, limit, query, orderBy, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { DEFAULT_DIFFICULTY_MIX, generateQuestion, getQuestionBlueprint, getQuestionTargets } from '../services/questionGenerator';
import { generateCalculationSet } from '../services/calculationGenerator';
import MathView, { toDisplayText } from './MathView';
import { Target, AlertTriangle, TrendingUp } from 'lucide-react';

const CHALLENGE_YEAR = 'Year 1';
const CHALLENGE_CHAPTER_ID = 'y1-number';
const CHALLENGE_BLUEPRINT = getQuestionBlueprint(CHALLENGE_YEAR, CHALLENGE_CHAPTER_ID);

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
  const [reportMessage, setReportMessage] = useState('');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [reportedQuestion, setReportedQuestion] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [autoTransitionTimer, setAutoTransitionTimer] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [challengeType, setChallengeType] = useState('daily');
  const [warnings, setWarnings] = useState(0);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(null);

  const isMobile = window.innerWidth < 768;
  const getQuestionCount = (type) => type === 'calc' ? (studentProfile?.calcQuestionCount || 10) : (studentProfile?.dailyQuestionCount || 10);
  const TOTAL_QUESTIONS = getQuestionCount(challengeType);

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


  // Check if today is already done and fetch history
  useEffect(() => {
    if (!user?.uid) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        // Check today
        const today = new Date().toISOString().split('T')[0];
        const todayRef = doc(db, 'users', user.uid, 'daily_stats', today);
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

        let profileData = {};
        try {
          const profileSnap = await getDoc(doc(db, 'users', user.uid));
          profileData = profileSnap.exists() ? profileSnap.data() : {};
          setStudentProfile(profileData);
        } catch (e) { console.warn('profile fetch failed (non-fatal):', e.code); }

        // Fetch history (last 30 days)
        try {
          const { collection: col, getDocs: gd, orderBy: ob, limit: lim, query: qry } = await import('firebase/firestore');
          const historyRef = col(db, 'users', user.uid, 'daily_stats');
          const q = qry(historyRef, ob('timestamp', 'desc'), lim(30));
          const historySnap = await gd(q);
          const historyData = historySnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setHistory(historyData);
        } catch (e) { console.warn('history fetch failed (non-fatal):', e.code); }

        try {
          const assignedYear = profileData.assignedYear || profileData.year || CHALLENGE_YEAR;
          const progressRef = doc(db, 'users', user.uid, 'chapterProgress', `${assignedYear.replace(' ', '_')}_daily`);
          const progressSnap = await getDoc(progressRef);
          setChapterProgress(progressSnap.exists() ? progressSnap.data() : null);
        } catch (e) { console.warn('progress fetch failed (non-fatal):', e.code); }

      } catch (err) {
        console.error("Error fetching challenge data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.uid]);

  const startCalculationQuiz = () => {
    setChallengeType('calc');
    const qCount = getQuestionCount('calc');
    const assignedYear = studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR;
    const assignedChapters = Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters : [];
    const calcTopics = assignedChapters.filter(id => id.startsWith('calc-'));
    
    const timeLimit = studentProfile?.calcTimeLimit || 30;
    const combinedQs = generateCalculationSet(calcTopics, qCount, assignedYear, timeLimit);
    
    const sessionId = String(Date.now());
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
        timestamp: now.toISOString(),
        dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
        questions: combinedQs || [],
        userAnswers: [],
        answerResults: [],
        abandoned: true
      }).catch(console.error);
    }
  };

  const startDailyQuiz = async () => {
    try {
      setChallengeType('daily');
      const qCount = getQuestionCount('daily');
      setLoading(true);
      let manualQs = [];
      const assignedYear = studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR;
      const assignedChapters = Array.isArray(studentProfile?.assignedChapters) && studentProfile.assignedChapters.length > 0
        ? studentProfile.assignedChapters
        : [CHALLENGE_CHAPTER_ID];
      const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
      const assignedCourse = studentProfile?.assignedCourse || 'Advanced';
      const targetPool = getQuestionTargets({
        year: assignedYear,
        course: assignedCourse,
        assignedChapters,
        assignedTopics,
      });
      const targetChapterIds = new Set(targetPool.map(target => target.chapterId));
      const targetTopicIds = new Set(targetPool.map(target => target.topicId));

      try {
        const qRef = collection(db, 'questions');
      const manualSnap = await getDocs(query(qRef, orderBy('createdAt', 'desc'), limit(80)));
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
          year: data.year || assignedYear,
          chapterId: data.chapterId || CHALLENGE_CHAPTER_ID,
          chapterTitle: data.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Number',
          topicId: data.topicId || '',
          topicCode: data.topicCode || '',
          topicTitle: data.topicTitle || '',
          topicGroup: data.topicGroup || '',
          isManual: true
        };
      }).filter(q => {
        // LOOSENED FILTER: If year matches, prioritize manual questions
        const yearMatches = !q.year || q.year === assignedYear || q.year.replace('Year ', '') === assignedYear.replace('Year ', '');
        
        // If question has a chapter, try to match it, but if it doesn't, let it through if year matches
        const chapterMatches = !q.chapterId || q.chapterId === CHALLENGE_CHAPTER_ID || targetChapterIds.has(q.chapterId);
        
        return yearMatches && chapterMatches;
      });
    } catch (err) {
      console.error("Error fetching manual questions:", err);
    }
    
    // Sort all valid manual questions randomly
    manualQs = manualQs.sort(() => Math.random() - 0.5);
    
    // PRIORITIZATION: Take as many manual questions as possible first
    const numManual = Math.min(qCount, manualQs.length);
    const selectedManual = manualQs.slice(0, numManual);
    
    // Fill the REMAINING slots with AI questions
    const numAI = Math.max(0, qCount - numManual);
    const aiQs = numAI > 0 ? Array.from({ length: numAI }, () => {
      const difficulty = pickWeightedDifficulty(chapterProgress?.difficultyMix);
      return generateQuestion({
        year: assignedYear,
        course: assignedCourse,
        assignedChapters,
        assignedTopics,
        difficulty,
      });
    }) : [];
    
    // Combine them (Manual first, or mixed? User said prioritize, so maybe put manual first)
    // Actually mixing them is better for variety, but ensuring manual ones are there is the key.
    let combinedQs = [...selectedManual, ...aiQs];
    // We still sort them randomly so the student doesn't know which is which
    combinedQs = combinedQs.sort(() => Math.random() - 0.5);

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
        const today = now.toISOString().split('T')[0];
        setDoc(doc(db, 'users', user.uid, 'daily_stats', today), {
          completed: false,
          score: 0,
          total: qCount,
          timestamp: now.toISOString(),
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questions: combinedQs || [],
          userAnswers: [],
          answerResults: [],
          abandoned: true
        }).catch(console.error);
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

  const handleAnswer = (optionText, optIdx = null) => {
    if (step === 'feedback') return;
    
    const currentQ = questions[currentIdx];
    const isShortAnswer = currentQ?.type === 'short_answer';
    
    let correct = false;
    if (isShortAnswer) {
      correct = optionText?.trim().toLowerCase() === currentQ.answer?.trim().toLowerCase();
    } else {
      if (optIdx !== null && currentQ.isManual && currentQ.answer === optIdx.toString()) {
        correct = true;
      } else {
        correct = String(optionText) === String(currentQ.answer);
      }
    }

    setSelectedOption(optionText);
    setSelectedOptionIdx(optIdx);
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
    
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIdx] = optionText;
      return newAnswers;
    });

    setAnswerResults(prev => {
      const newResults = [...prev];
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
        selectedAnswer: optionText,
        correct,
        isManual: Boolean(currentQ?.isManual),
      };
      return newResults;
    });

    setStep('feedback');

    // Auto-transition after 5 seconds if answer is wrong
    if (!correct) {
      setCountdown(5);
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
        const today = now.toISOString().split('T')[0];
        const ref = challengeType === 'calc' 
          ? doc(db, 'users', user.uid, 'calc_stats', currentSessionId || String(Date.now()))
          : doc(db, 'users', user.uid, 'daily_stats', today);
        const assignedYear = studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR;
        const assignedChapters = challengeType === 'calc'
          ? (Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters.filter(id => id.startsWith('calc-')) : [])
          : (Array.isArray(studentProfile?.assignedChapters) && studentProfile.assignedChapters.length > 0
            ? studentProfile.assignedChapters
            : [CHALLENGE_CHAPTER_ID]);
        const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
        
        const currentAnswerResults = answerResults || [];
        const resultStats = summarizeResults(currentAnswerResults);
        const topicStats = summarizeByKey(currentAnswerResults, 'topicId', 'topicTitle');
        const chapterStats = summarizeByKey(currentAnswerResults, 'chapterId', 'chapterTitle');
        const nextDifficultyMix = adjustDifficultyMix(chapterProgress?.difficultyMix, resultStats);
        
        const record = {
          completed: true,
          score,
          total: TOTAL_QUESTIONS,
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
        
        await setDoc(ref, record, { merge: true });

        const progressRef = doc(db, 'users', user.uid, 'chapterProgress', `${assignedYear.replace(' ', '_')}_daily`);
        await setDoc(progressRef, {
          year: assignedYear,
          chapterId: record.chapterId,
          chapterTitle: record.chapterTitle,
          assignedChapters,
          assignedTopics,
          difficultyMix: nextDifficultyMix,
          lastResultStats: resultStats,
          lastTopicStats: topicStats,
          lastChapterStats: chapterStats,
          lastScore: score,
          lastTotal: TOTAL_QUESTIONS,
          updatedAt: now.toISOString(),
        }, { merge: true });
        
        setChapterProgress(prev => ({
          ...(prev || {}),
          difficultyMix: nextDifficultyMix,
          lastResultStats: resultStats,
          lastTopicStats: topicStats,
          lastChapterStats: chapterStats,
        }));
        
        // Update history state locally to show immediately
        setHistory(prev => [record, ...(prev || [])]);
        if (challengeType === 'daily') {
          setTodayCompleted(true);
        }
        
        // Update overall XP/Points
        await updateDoc(doc(db, 'users', user.uid), {
          totalXP: increment(score * 10),
          challengesCompleted: increment(1)
        }, { merge: true });
      }
    } catch (err) {
      console.error("Error in finishQuiz:", err);
      // Even if database update fails, we stay in result step so user sees their score
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
                key={item.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="app-panel" 
                onClick={() => setSelectedChallenge(item)}
                style={{ padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '4px' }}>
                    {formatHistoryDate(item)}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8' }}>
                    {item.total || 0} Questions • {item.total ? Math.round(((item.score || 0)/item.total)*100) : 0}% Accuracy
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: item.score >= 8 ? '#10b981' : item.score >= 5 ? '#f59e0b' : '#f43f5e' }}>
                    {item.score || 0}/{item.total || 0}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1' }}>+{(item.score || 0) * 10} XP</div>
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
                        if (!q) return null;
                        const result = selectedChallenge.answerResults?.[idx];
                        const userAnswer = result?.selectedAnswer ?? (selectedChallenge.userAnswers ? selectedChallenge.userAnswers[idx] : null);
                        
                        // Flexible matching for answer strings/numbers/indices
                        const isCorrect = typeof result?.correct === 'boolean'
                          ? result.correct
                          : String(userAnswer) === String(q.answer);
                        const questionText = toDisplayText(q.text || q.question, 'Question text unavailable');
                        return (
                          <div key={idx} style={{ padding: '20px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                            {q.isManual && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setReportedQuestion(q);
                                  setIsReporting(true);
                                }}
                                style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff', padding: '6px', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', fontWeight: 800, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                              >
                                <Flag size={14} /> REPORT
                              </button>
                            )}
                            <div style={{ fontWeight: 800, marginBottom: '16px', color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.5, paddingRight: q.isManual ? '80px' : '0' }}>
                              {idx + 1}. <MathView content={questionText} />
                            </div>
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
                                
                                if (isAnswer) {
                                  bg = '#dcfce7';
                                  border = '1px solid #22c55e';
                                  color = '#166534';
                                } else if (isSelected && !isCorrect) {
                                  bg = '#fee2e2';
                                  border = '1px solid #ef4444';
                                  color = '#991b1b';
                                }

                                return (
                                  <div key={i} style={{ padding: '12px 16px', borderRadius: '12px', background: bg, border: border, color: color, fontSize: '0.95rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                      <MathView content={optText} />
                                      {optImage && <img src={optImage} alt="Option" style={{ maxHeight: '40px', maxWidth: '100px', objectFit: 'contain' }} />}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      {isAnswer && <Check size={18} style={{ color: '#166534' }} />}
                                      {isSelected && !isCorrect && <X size={18} style={{ color: '#991b1b' }} />}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            {q.solution && (
                               <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: '#e0e7ff', color: '#4338ca', fontSize: '0.9rem', fontWeight: 600 }}>
                                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                   <Lightbulb size={16} /> <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</span>
                                 </div>
                                 <MathView content={q.solution} />
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
                  <button onClick={startCalculationQuiz} className="app-button" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Start Calculation
                  </button>
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="app-panel" style={{ padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', background: '#fff' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #e0e7ff, #f5f3ff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(99, 102, 241, 0.1)' }}>
                  <BookOpen size={28} color="#4f46e5" />
                </div>
                
                <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', marginBottom: '12px' }}>Daily Practice</h1>
                <p style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px', maxWidth: '400px' }}>
                  Complete {getQuestionCount('daily')} random questions to keep your brain sharp. <br/>
                  Earn <span style={{ color: '#6366f1', fontWeight: 800 }}>100 XP</span> and maintain your learning streak.
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
                    Earn <span style={{ color: '#d97706', fontWeight: 800 }}>100 XP</span>!
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '280px' }}>
                    <button onClick={startCalculationQuiz} className="app-button" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(217, 119, 6, 0.2)' }}>
                      Start Calculation
                    </button>
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
            <div style={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                    {questions[currentIdx]?.year || CHALLENGE_YEAR} • {questions[currentIdx]?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Numbers'}
                  </span>
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
                  style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.5, margin: 0 }} 
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

              {questions[currentIdx]?.type === 'short_answer' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input 
                    type="text"
                    disabled={step === 'feedback'}
                    value={step === 'feedback' ? userAnswers[currentIdx] || '' : selectedOption || ''}
                    onChange={(e) => step !== 'feedback' && setSelectedOption(e.target.value)}
                    placeholder="Type your answer..."
                    className="app-input"
                    style={{ fontSize: '1.1rem', padding: '20px', borderRadius: '20px', textAlign: 'center' }}
                    onKeyDown={(e) => e.key === 'Enter' && selectedOption && handleAnswer(selectedOption)}
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
                            <MathView content={optText} style={{ fontWeight: 700, fontSize: '1.05rem' }} />
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
                            questions[currentIdx].isManual 
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
                        <MathView content={questions[currentIdx].solution} style={{ color: '#475569', fontSize: '0.95rem' }} />
                      </div>
                    )}
                  </div>
                  <button onClick={nextQuestion} className="app-button app-button--primary" style={{ padding: '20px', borderRadius: '20px', fontSize: '1.1rem', width: '100%' }}>
                    {currentIdx === TOTAL_QUESTIONS - 1 ? (countdown > 0 ? `Finish Challenge (${countdown}s)` : 'Finish Challenge') : (countdown > 0 ? `Next Question (${countdown}s)` : 'Next Question')}
                  </button>
                </motion.div>
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
              You scored <span style={{ color: '#6366f1' }}>{score} out of {TOTAL_QUESTIONS}</span>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '24px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>POINTS EARNED</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>+{score * 10} XP</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '24px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>ACCURACY</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>{Math.round((score/TOTAL_QUESTIONS)*100)}%</span>
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

      <AnimatePresence>
        {isReporting && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setIsReporting(false)} 
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
                <button onClick={() => setIsReporting(false)} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
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
    </div>
    </div>
  );
};

export default DailyChallenge;
