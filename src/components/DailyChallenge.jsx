import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Clock, CheckCircle2, XCircle, 
  ArrowRight, Trophy, RotateCcw, HelpCircle,
  Lightbulb, BookOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { generateQuestion } from '../services/questionGenerator';

const DailyChallenge = ({ onBack }) => {
  const { user } = useAuth();
  const [step, setStep] = useState('start'); // 'start', 'quiz', 'feedback', 'result'
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  const TOTAL_QUESTIONS = 10;

  // Check if today is already done
  useEffect(() => {
    if (!user?.uid) return;
    const checkToday = async () => {
      const today = new Date().toISOString().split('T')[0];
      const ref = doc(db, 'users', user.uid, 'daily_stats', today);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().completed) {
        setTodayCompleted(true);
      }
      setLoading(false);
    };
    checkToday();
  }, [user?.uid]);

  const startQuiz = useCallback(() => {
    const newQs = Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion(1, 'easy'));
    setQuestions(newQs);
    setCurrentIdx(0);
    setScore(0);
    setStep('quiz');
    setupQuestion(newQs[0]);
  }, []);

  const setupQuestion = (q) => {
    setTimeLeft(q.timeLimit || 30);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // Timer logic
  useEffect(() => {
    if (step !== 'quiz' || timeLeft <= 0 || selectedOption !== null) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null); // Time's up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [step, timeLeft, selectedOption]);

  const handleAnswer = (option) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    const correct = option === questions[currentIdx].answer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
    setStep('feedback');
  };

  const nextQuestion = async () => {
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
    setStep('result');
    if (user?.uid) {
      const today = new Date().toISOString().split('T')[0];
      const ref = doc(db, 'users', user.uid, 'daily_stats', today);
      await setDoc(ref, {
        completed: true,
        score,
        total: TOTAL_QUESTIONS,
        timestamp: new Date().toISOString()
      }, { merge: true });
      
      // Update overall XP/Points if we have a system
      await updateDoc(doc(db, 'users', user.uid), {
        totalXP: increment(score * 10),
        challengesCompleted: increment(1)
      }, { merge: true });
    }
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  if (todayCompleted && step === 'start') {
    return (
      <div className="app-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="app-panel" style={{ maxWidth: '400px', textAlign: 'center', padding: '40px' }}>
          <div style={{ width: '80px', height: '80px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#10b981' }}>
            <Trophy size={40} />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px' }}>Amazing Work!</h2>
          <p style={{ color: '#64748b', fontWeight: 600, marginBottom: '32px' }}>You've already completed your 10-question challenge for today. Come back tomorrow for more!</p>
          <button onClick={onBack} className="app-button app-button--secondary" style={{ width: '100%' }}>Back to Dashboard</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app-page challenge-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header Area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button onClick={onBack} className="app-icon-button" style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <ChevronLeft size={24} />
        </button>
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
        <div style={{ width: '60px', height: '40px', background: timeLeft < 10 ? '#fff1f2' : '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: timeLeft < 10 ? '#f43f5e' : '#64748b', fontWeight: 800 }}>
          <Clock size={16} />
          {timeLeft}s
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 'start' && (
          <motion.div key="start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="app-panel" style={{ padding: '40px', textAlign: 'center', borderRadius: '32px' }}>
            <div style={{ width: '100px', height: '100px', background: '#f5f3ff', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#6366f1' }}>
              <BookOpen size={48} />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px' }}>Daily Practice</h1>
            <p style={{ color: '#64748b', fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Complete 10 random questions to keep your brain sharp! <br/>
              Earn **100 XP** and maintain your streak.
            </p>
            <button onClick={startQuiz} className="app-button app-button--primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', borderRadius: '20px' }}>
              Start Challenge
            </button>
          </motion.div>
        )}

        {(step === 'quiz' || step === 'feedback') && (
          <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Question Card */}
            <div className="app-panel" style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>YEAR 1 • NUMBERS</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.5, margin: 0 }}>
                {questions[currentIdx]?.question}
              </h2>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: '12px' }}>
              {questions[currentIdx]?.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrectAns = opt === questions[currentIdx].answer;
                
                let borderColor = '#f1f5f9';
                let bgColor = '#fff';
                let textColor = '#475569';

                if (step === 'feedback') {
                  if (isCorrectAns) {
                    borderColor = '#10b981';
                    bgColor = '#f0fdf4';
                    textColor = '#065f46';
                  } else if (isSelected && !isCorrectAns) {
                    borderColor = '#f43f5e';
                    bgColor = '#fff1f2';
                    textColor = '#9f1239';
                  }
                } else if (isSelected) {
                  borderColor = '#6366f1';
                  bgColor = '#f5f3ff';
                  textColor = '#6366f1';
                }

                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt)}
                    disabled={step === 'feedback'}
                    style={{
                      padding: '20px 24px',
                      borderRadius: '20px',
                      border: `2px solid ${borderColor}`,
                      background: bgColor,
                      color: textColor,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: step === 'feedback' ? 'default' : 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {opt}
                    {step === 'feedback' && isCorrectAns && <CheckCircle2 size={24} style={{ color: '#10b981' }} />}
                    {step === 'feedback' && isSelected && !isCorrectAns && <XCircle size={24} style={{ color: '#f43f5e' }} />}
                  </motion.button>
                );
              })}
            </div>

            {/* Feedback & Solution */}
            {step === 'feedback' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '24px', borderRadius: '24px', background: isCorrect ? '#f0fdf4' : '#fff1f2', border: `1px solid ${isCorrect ? '#10b981' : '#f43f5e'}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {isCorrect ? <CheckCircle2 size={24} color="#10b981" /> : <XCircle size={24} color="#f43f5e" />}
                  <span style={{ fontWeight: 800, color: isCorrect ? '#065f46' : '#9f1239' }}>
                    {isCorrect ? 'Well done! Keep it up!' : 'Not quite. Review the solution below.'}
                  </span>
                </div>

                <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#6366f1' }}>
                    <Lightbulb size={18} />
                    <span style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Worked Solution</span>
                  </div>
                  <p style={{ margin: 0, color: '#475569', fontWeight: 600, lineHeight: 1.6 }}>
                    {questions[currentIdx]?.solution}
                  </p>
                </div>

                <button onClick={nextQuestion} className="app-button app-button--primary" style={{ padding: '20px', borderRadius: '20px', fontSize: '1.1rem' }}>
                  {currentIdx < TOTAL_QUESTIONS - 1 ? 'Next Question' : 'Finish Challenge'}
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            )}
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

            <button onClick={onBack} className="app-button app-button--primary" style={{ width: '100%', padding: '20px', borderRadius: '20px' }}>
              Return Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DailyChallenge;
