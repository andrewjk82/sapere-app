// ── Student Analytics & Learning Recommendation Engine ───────────────────────
// Pure utility functions — no Firestore imports. Data fetching stays in components.

import { CURRICULUM_DATA } from '../constants/curriculumData';

// Lazy-built map: topicId → { code, title } from curriculum data
let _topicLookup = null;
const getTopicLookup = () => {
  if (_topicLookup) return _topicLookup;
  _topicLookup = {};
  Object.values(CURRICULUM_DATA).forEach(yearData => {
    const chapters = Array.isArray(yearData)
      ? yearData
      : Object.values(yearData || {}).flat();
    chapters.forEach(chapter => {
      (chapter?.topics || []).forEach(topic => {
        if (topic?.id) {
          _topicLookup[topic.id] = {
            code: topic.code || '',
            title: topic.title || '',
          };
        }
      });
    });
  });
  return _topicLookup;
};

/**
 * Aggregates topicStats across all historical stat documents (daily + calc).
 * Returns a map: { [topicId]: { label, correct, total } }
 */
export const aggregateTopicStats = (allStats = []) => {
  const map = {};
  allStats.forEach(stat => {
    const ts = stat.topicStats;
    if (!ts || typeof ts !== 'object') return;
    Object.entries(ts).forEach(([topicId, data]) => {
      if (!topicId || topicId === 'undefined' || !data?.total) return;
      if (!map[topicId]) {
        const savedLabel = data.label || '';
        const isRawId = savedLabel === topicId || !savedLabel;
        let label = savedLabel;
        if (isRawId) {
          // Saved label is just the raw ID — look up in curriculum data
          const entry = getTopicLookup()[topicId];
          if (entry?.title) {
            label = entry.code ? `${entry.code} ${entry.title}` : entry.title;
          } else {
            label = topicId; // last resort
          }
        }
        map[topicId] = { label, correct: 0, total: 0 };
      }
      map[topicId].correct += data.correct || 0;
      map[topicId].total += data.total || 0;
    });
  });
  return map;
};

/**
 * Computes session-level accuracy trend.
 * Compares average score of last 3 sessions vs previous 3 sessions.
 * Returns 'improving' | 'declining' | 'stable' | 'insufficient_data'
 */
export const computeTrend = (allStats = []) => {
  const sessions = [...allStats]
    .filter(s => s.total > 0 && typeof s.score === 'number')
    .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

  if (sessions.length < 4) return 'insufficient_data';

  const avg = arr => arr.reduce((s, x) => s + x.score / x.total, 0) / arr.length * 100;
  const recent = avg(sessions.slice(0, 3));
  const previous = avg(sessions.slice(3, 6));

  if (recent > previous + 5) return 'improving';
  if (recent < previous - 5) return 'declining';
  return 'stable';
};

/**
 * Main entry point.
 * @param {Array} dailyStats  — docs from users/{uid}/daily_stats
 * @param {Array} calcStats   — docs from users/{uid}/calc_stats
 * @returns analytics object
 */
export const generateLearningRecommendations = (dailyStats = [], calcStats = []) => {
  const allStats = [...dailyStats, ...calcStats];
  const topicMap = aggregateTopicStats(allStats);

  const totalQ = Object.values(topicMap).reduce((s, t) => s + t.total, 0);
  const totalC = Object.values(topicMap).reduce((s, t) => s + t.correct, 0);
  const overallAccuracy = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

  // Build scored topic list
  const topics = Object.entries(topicMap)
    .map(([topicId, { label, correct, total }]) => ({
      topicId,
      label,
      correct,
      total,
      errorRate: Math.round(((total - correct) / total) * 100),
    }))
    .filter(t => t.total >= 2); // need at least 2 attempts to be meaningful

  const weakTopics = topics
    .filter(t => t.errorRate > 40)
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 3);

  const strongTopics = topics
    .filter(t => t.errorRate < 15 && t.total >= 3)
    .sort((a, b) => a.errorRate - b.errorRate)
    .slice(0, 2);

  // Generate human-readable recommendations
  const recommendations = [];

  weakTopics.forEach(t => {
    if (t.errorRate > 60) {
      recommendations.push({
        title: `Focus on: ${t.label}`,
        description: `You're getting ${t.errorRate}% wrong in this area. Try practicing 5 questions daily until you reach 80% accuracy.`,
        priority: 'high',
        topicId: t.topicId,
      });
    } else {
      recommendations.push({
        title: `Review: ${t.label}`,
        description: `Some gaps here — ${t.errorRate}% error rate across ${t.total} questions. Work through a few examples to solidify your understanding.`,
        priority: 'medium',
        topicId: t.topicId,
      });
    }
  });

  if (recommendations.length === 0 && topics.length > 0) {
    recommendations.push({
      title: 'Great consistency!',
      description: overallAccuracy >= 85
        ? 'You\'re performing well across all topics. Try harder difficulty questions to keep growing.'
        : 'No major weak spots — keep building on your consistency and push for higher accuracy.',
      priority: 'low',
      topicId: null,
    });
  }

  if (recommendations.length === 0 && topics.length === 0) {
    recommendations.push({
      title: 'Keep going!',
      description: 'Complete more challenges to unlock personalised learning recommendations.',
      priority: 'low',
      topicId: null,
    });
  }

  return {
    weakTopics,
    strongTopics,
    overallAccuracy,
    totalQuestionsAttempted: totalQ,
    recommendations,
    trend: computeTrend(allStats),
  };
};
