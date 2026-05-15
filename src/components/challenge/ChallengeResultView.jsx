import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, XCircle } from 'lucide-react';
import { getEarnedXp } from '../../utils/challengeUtils';

const ChallengeResultView = ({
  questions,
  userAnswers,
  answerResults,
  score,
  totalPossibleScore,
  TOTAL_QUESTIONS,
  challengeType,
  challengeBlueprint,
  hasCalculationTest = true,
  onReviewAnswers,
  onBack
}) => {
  const isAbandoned = answerResults.some(r => r === 'abandoned') || (questions.length > 0 && answerResults.length === 0);

  return (
    <motion.div 
      key="result" 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="app-panel" 
      style={{ padding: '48px', textAlign: 'center', borderRadius: '40px' }}
    >
      {isAbandoned ? (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ width: '120px', height: '120px', background: '#fef2f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', margin: '0 auto 32px', color: '#ef4444' }}>
            <XCircle size={60} />
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '8px', color: '#ef4444' }}>Challenge Terminated</h1>
          <p style={{ color: '#64748b', fontWeight: 700, fontSize: '1.1rem' }}>
            This session was ended automatically because you switched screens or left the app.
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '24px' }}>
          <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>POINTS EARNED</span>
          <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>+{getEarnedXp(score, totalPossibleScore, challengeType, hasCalculationTest)} XP</span>
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
              chapterTitle: challengeBlueprint?.title || 'Numbers & Place Value',
              score,
              total: TOTAL_QUESTIONS,
              questions,
              userAnswers,
              answerResults,
              timestamp: new Date().toISOString()
            };
            onReviewAnswers(currentRecord);
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
  );
};

export default ChallengeResultView;
