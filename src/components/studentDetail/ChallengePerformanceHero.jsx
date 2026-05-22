import React, { useMemo } from 'react';

/**
 * ChallengePerformanceHero — the performance snapshot card at the top of the
 * teacher's Challenge tab. Summarises accuracy, an at-a-glance insight and
 * four key counters. Purely presentational; all data is passed in.
 */
const ChallengePerformanceHero = ({
  studentAnalytics,
  dailyStats = [],
  dailyPracticeStats = [],
  calculationStats = [],
  dailyPracticeConfig = {},
}) => {
  const stats = useMemo(() => {
    const accuracy = Number(studentAnalytics?.overallAccuracy ?? 0);
    const sessions = dailyStats.length;
    const questionsDone = Number(studentAnalytics?.totalQuestionsAttempted ?? 0);
    const mistakesOf = (list) =>
      list.reduce((sum, s) => {
        const total = Number(s.total) || 0;
        const score = Number(s.score) || 0;
        return sum + Math.max(0, total - score);
      }, 0);
    return {
      accuracy,
      sessions,
      questionsDone,
      dailyMistakes: mistakesOf(dailyPracticeStats),
      calcMistakes: mistakesOf(calculationStats),
      dailyQs: Number(dailyPracticeConfig?.questionsPerDay) || 10,
      weakCount: studentAnalytics?.weakTopics?.length || 0,
      trend: studentAnalytics?.trend || 'insufficient_data',
    };
  }, [studentAnalytics, dailyStats, dailyPracticeStats, calculationStats, dailyPracticeConfig]);

  const accentColor = stats.accuracy >= 80 ? '#34d399' : stats.accuracy >= 50 ? '#fbbf24' : '#fb7185';

  // One-line coaching insight.
  const insight = (() => {
    if (stats.sessions === 0) return 'No challenge sessions yet — assign daily practice to start tracking performance.';
    const trendWord = stats.trend === 'improving' ? 'Improving trend.'
      : stats.trend === 'declining' ? 'Declining trend.'
        : 'Stable trend.';
    if (stats.weakCount > 0) {
      return `${trendWord} ${stats.weakCount} area${stats.weakCount === 1 ? '' : 's'} need targeted practice — assign focus drills to lift accuracy.`;
    }
    return `${trendWord} No weak areas flagged — keep the momentum going.`;
  })();

  const miniStat = (value, label) => (
    <div style={{ flex: '1 1 90px', minWidth: 0 }}>
      <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>
        {label}
      </div>
    </div>
  );

  return (
    <div
      style={{
        borderRadius: '24px',
        padding: '26px 28px',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4c1d95 100%)',
        boxShadow: '0 20px 44px rgba(30,27,75,0.28)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ fontSize: '0.66rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,208,254,0.75)' }}>
        Challenge · performance snapshot
      </div>

      {/* Headline accuracy */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '3rem', fontWeight: 800, lineHeight: 1, color: accentColor }}>
          {stats.accuracy}%
        </span>
        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.78)' }}>
          accuracy across {stats.sessions} session{stats.sessions === 1 ? '' : 's'}
        </span>
      </div>

      {/* Insight line */}
      <p style={{ margin: '12px 0 20px', fontSize: '0.86rem', fontWeight: 600, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
        {insight}
      </p>

      {/* Mini stats */}
      <div style={{
        display: 'flex', gap: '10px', flexWrap: 'wrap',
        background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '16px 18px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {miniStat(stats.questionsDone.toLocaleString(), 'Questions done')}
        {miniStat(stats.dailyMistakes, 'Daily mistakes')}
        {miniStat(stats.calcMistakes, 'Calc mistakes')}
        {miniStat(stats.dailyQs, "Daily q's")}
      </div>
    </div>
  );
};

export default ChallengePerformanceHero;
