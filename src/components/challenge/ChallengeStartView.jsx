import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

const PerformanceInsights = ({ insights, isMobile }) => {
  return (
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

      {insights && insights.length > 0 ? (
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
            {insights.map((insight, idx) => (
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
};

const ChallengeStartView = ({ 
  studentProfile, 
  todayStatusReady, 
  todayCompleted, 
  abandonedToday, 
  calcCompletedToday, 
  calcAbandonedToday, 
  history, 
  onStartDailyQuiz, 
  onStartCalculationQuiz, 
  onViewHistory, 
  onBack, 
  getQuestionCount, 
  getChallengeMaxXp,
  hasCalculationTest = true,
  learningInsights,
  isMobile
}) => {
  return (
    <div className="app-page">
      <div className="app-page__header" style={{ marginBottom: '24px' }}>
        <div className="app-page__title">
          <h2>Challenge</h2>
          <p>Daily practice questions</p>
        </div>
      </div>

      <div className="challenge-container" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', paddingBottom: '40px' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="app-panel" style={{ padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #e0e7ff, #f5f3ff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(99, 102, 241, 0.1)' }}>
                <BookOpen size={28} color="#4f46e5" />
              </div>
              
              <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', marginBottom: '12px' }}>Daily Practice</h1>
              <p style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '36px', maxWidth: '400px' }}>
                Complete {getQuestionCount('daily')} random questions to keep your brain sharp. <br/>
                Earn up to <span style={{ color: '#6366f1', fontWeight: 800 }}>{getChallengeMaxXp('daily', hasCalculationTest)} XP</span> and maintain your learning streak.
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
                    <button onClick={onStartDailyQuiz} className="app-button app-button--primary" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)' }}>
                      Start Challenge
                    </button>
                  </div>
                )}

                {history.length > 0 && (
                  <button onClick={onViewHistory} style={{ background: 'transparent', border: 'none', color: '#64748b', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', padding: '8px', transition: 'color 0.2s', marginTop: '12px', width: '100%' }}>
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
                  Earn up to <span style={{ color: '#d97706', fontWeight: 800 }}>{getChallengeMaxXp('calc', hasCalculationTest)} XP</span>!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '280px' }}>
                  {!todayStatusReady ? (
                    <div style={{ background: '#f8fafc', border: '2px solid #e2e8f0', padding: '16px 20px', borderRadius: '20px', color: '#64748b', fontWeight: 800 }}>
                      Checking today's calculation status...
                    </div>
                  ) : calcAbandonedToday ? (
                    <div style={{ background: '#fff1f2', border: '2px solid #ffe4e6', padding: '16px 20px', borderRadius: '20px', color: '#be123c', fontWeight: 800 }}>
                      Basic Calculation ended. Please try again tomorrow.
                    </div>
                  ) : calcCompletedToday ? (
                    <div style={{ background: '#f0fdf4', border: '2px solid #dcfce7', padding: '16px 20px', borderRadius: '20px', color: '#166534', fontWeight: 800 }}>
                      Today's Basic Calculation Done!
                    </div>
                  ) : (
                    <button onClick={onStartCalculationQuiz} className="app-button" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '100px', fontWeight: 800, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(217, 119, 6, 0.2)' }}>
                      Start Calculation
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          <PerformanceInsights insights={learningInsights} isMobile={isMobile} />
        </motion.div>
      </div>
    </div>
  );
};

export default ChallengeStartView;
