import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle2, AlertTriangle, TrendingUp, TrendingDown, Minus, Zap, BarChart2 } from 'lucide-react';

// Mini bar showing score out of total
const ScoreBar = ({ score, total }) => {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const color = pct >= 75 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
      <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '3px', transition: 'width 0.6s ease' }} />
      </div>
      <span style={{ fontSize: '0.78rem', fontWeight: 800, color, minWidth: '36px', textAlign: 'right' }}>{pct}%</span>
    </div>
  );
};

const TrendIcon = ({ trend }) => {
  if (trend === 'improving') return <TrendingUp size={16} style={{ color: '#10b981' }} />;
  if (trend === 'declining') return <TrendingDown size={16} style={{ color: '#ef4444' }} />;
  return <Minus size={16} style={{ color: '#94a3b8' }} />;
};

const TREND_LABEL = { improving: 'Improving', declining: 'Needs attention', stable: 'Consistent', insufficient_data: '' };
const TREND_COLOR = { improving: { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' }, declining: { bg: '#fff1f2', text: '#9f1239', border: '#fecaca' }, stable: { bg: '#f8fafc', text: '#475569', border: '#e2e8f0' }, insufficient_data: { bg: '#f8fafc', text: '#94a3b8', border: '#e2e8f0' } };

const PerformanceInsights = ({ analytics, recentHistory, isMobile }) => {
  const hasData = analytics && analytics.totalQuestionsAttempted > 0;
  const trend = analytics?.trend || 'insufficient_data';
  const tc = TREND_COLOR[trend] || TREND_COLOR.insufficient_data;

  // Recent sessions (daily only, max 5)
  const recentSessions = (recentHistory || [])
    .filter(s => s.statCollection !== 'calc_stats' && s.challengeType !== 'calc')
    .slice(0, 5);

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '28px',
      border: '1px solid #f1f5f9',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
    }}>
      {/* Header */}
      <div style={{ padding: isMobile ? '20px 20px 0' : '28px 28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '10px', margin: 0, color: '#1e1b4b' }}>
          <div style={{ width: '32px', height: '32px', background: '#f5f3ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}>
            <BarChart2 size={18} />
          </div>
          Performance Insights
        </h3>
        {hasData && trend !== 'insufficient_data' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '100px', background: tc.bg, border: `1px solid ${tc.border}` }}>
            <TrendIcon trend={trend} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: tc.text }}>{TREND_LABEL[trend]}</span>
          </div>
        )}
      </div>

      <div style={{ padding: isMobile ? '16px 20px 20px' : '20px 28px 28px' }}>
        {!hasData ? (
          /* ── Empty state ── */
          <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', background: '#f5f3ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <TrendingUp size={34} style={{ color: '#8b5cf6' }} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '8px' }}>Personalized Insights Pending</h4>
            <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748b', maxWidth: '280px', margin: '0 auto', lineHeight: 1.6 }}>
              Complete more daily challenges to unlock performance tracking and study recommendations.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* ── Stats row ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {[
                { label: 'Accuracy', value: `${analytics.overallAccuracy}%`, color: analytics.overallAccuracy >= 75 ? '#10b981' : analytics.overallAccuracy >= 50 ? '#f59e0b' : '#ef4444' },
                { label: 'Questions', value: analytics.totalQuestionsAttempted, color: '#6366f1' },
                { label: 'Sessions', value: recentHistory?.length || 0, color: '#8b5cf6' },
              ].map(s => (
                <div key={s.label} style={{ background: '#f8fafc', borderRadius: '16px', padding: '12px 14px', textAlign: 'center', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginTop: '3px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── Recent sessions ── */}
            {recentSessions.length > 0 && (
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Recent Sessions</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {recentSessions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', minWidth: '70px', flexShrink: 0 }}>
                        {s.dateLabel || (s.timestamp ? new Date(s.timestamp).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }) : `Session ${i + 1}`)}
                      </span>
                      <ScoreBar score={s.score || 0} total={s.total || 1} />
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', minWidth: '40px', textAlign: 'right' }}>{s.score}/{s.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Weak topics ── */}
            {analytics.weakTopics.length > 0 && (
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>⚠ Focus Areas</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {analytics.weakTopics.map(t => (
                    <div key={t.topicId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#fff7ed', borderRadius: '12px', border: '1px solid #fed7aa' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#92400e', flex: 1, marginRight: '8px' }}>{t.label}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, background: '#fef3c7', color: '#b45309', borderRadius: '100px', padding: '3px 10px', flexShrink: 0 }}>{t.errorRate}% wrong</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Study recommendation (top 1) ── */}
            {analytics.recommendations.length > 0 && (
              <div style={{ display: 'flex', gap: '12px', padding: '14px 16px', background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', borderRadius: '16px', border: '1px solid #ddd6fe', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap size={16} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4c1d95', marginBottom: '2px' }}>{analytics.recommendations[0].title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#5b21b6', lineHeight: 1.5 }}>{analytics.recommendations[0].description}</div>
                </div>
              </div>
            )}

            {/* ── Strong areas (compact) ── */}
            {analytics.strongTopics.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', alignSelf: 'center' }}>Strong:</span>
                {analytics.strongTopics.map(t => (
                  <span key={t.topicId} style={{ fontSize: '0.75rem', fontWeight: 700, background: '#dcfce7', color: '#166534', borderRadius: '100px', padding: '3px 10px', border: '1px solid #bbf7d0' }}>
                    ✓ {t.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
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
  analytics,
  recentHistory,
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

          <PerformanceInsights analytics={analytics} recentHistory={recentHistory} isMobile={isMobile} />
        </motion.div>
      </div>
    </div>
  );
};

export default ChallengeStartView;
