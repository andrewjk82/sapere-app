import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  XCircle,
  Zap,
  Flame,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { getEarnedXp } from '../../utils/challengeUtils';

/**
 * Build a per-topic breakdown from the per-question results.
 * Falls back gracefully when topic metadata is missing.
 */
const buildTopicBreakdown = (questions, answerResults) => {
  const buckets = {};
  (answerResults || []).forEach((result, idx) => {
    if (!result || typeof result !== 'object') return;
    const q = questions?.[idx] || {};
    const key =
      result.topicId ||
      q.topicId ||
      result.type ||
      q.type ||
      'general';
    const rawLabel =
      result.topicTitle ||
      q.topicTitle ||
      result.chapterTitle ||
      q.chapterTitle ||
      (key === 'general'
        ? 'General'
        : String(key)
            .split('_')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '));
    const label = result.topicCode
      ? `${result.topicCode} · ${rawLabel}`
      : rawLabel;

    if (!buckets[key]) buckets[key] = { label, total: 0, wrong: 0 };
    buckets[key].total += 1;
    if (!result.correct) buckets[key].wrong += 1;
  });

  return Object.values(buckets)
    .sort((a, b) => b.wrong / b.total - a.wrong / a.total)
    .slice(0, 5);
};

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
  onBack,
  elapsedSeconds = null,
  streakDays = null,
  userName = '',
  recommendations = null,
  // When the headline score is shown question-based (score/totalPossibleScore
  // are question counts), pass the point-based XP here so the XP figure still
  // reflects per-part marking instead of being recomputed from question counts.
  xpEarnedOverride = null,
}) => {
  const isAbandoned =
    (answerResults || []).some(r => r === 'abandoned') ||
    (questions.length > 0 && (answerResults || []).length === 0);

  const accuracy =
    totalPossibleScore > 0
      ? Math.round((score / totalPossibleScore) * 100)
      : 0;

  const xpEarned = xpEarnedOverride != null
    ? xpEarnedOverride
    : getEarnedXp(
        score,
        totalPossibleScore,
        challengeType,
        hasCalculationTest
      );

  const topics = useMemo(
    () => buildTopicBreakdown(questions, answerResults),
    [questions, answerResults]
  );

  const formatTime = secs => {
    if (!secs || secs < 0) return null;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${String(s).padStart(2, '0')}s`;
  };

  const elapsedLabel = formatTime(elapsedSeconds);

  // ── Abandoned / terminated state ──────────────────────────
  if (isAbandoned) {
    return (
      <motion.div
        key="result-abandoned"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="challenge-result challenge-result--abandoned"
      >
        <style>{challengeResultStyles}</style>
        <div className="cr__crown cr__crown--red">
          <XCircle size={48} />
        </div>
        <div className="cr__title-block">
          <div className="cr__eyebrow cr__eyebrow--red">Session ended</div>
          <h1 className="cr__title">Challenge Terminated</h1>
          <p className="cr__sub">
            This session was ended automatically because you switched screens
            or left the app.
          </p>
        </div>
        <button
          onClick={onBack}
          className="cr__btn cr__btn--primary"
          style={{ minWidth: 220, marginTop: 12 }}
        >
          Return Home <ArrowRight size={18} />
        </button>
      </motion.div>
    );
  }

  // ── Completed state ──────────────────────────────────────
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="challenge-result"
    >
      <style>{challengeResultStyles}</style>

      <motion.div
        className="cr__crown"
        initial={{ scale: 0.6, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.05 }}
      >
        <Trophy size={48} />
      </motion.div>

      <div className="cr__title-block">
        <div className="cr__eyebrow">
          {challengeType === 'calc'
            ? 'Basic Calculation Complete'
            : 'Daily Challenge Complete'}
        </div>
        <h1 className="cr__title">
          {userName ? `Well done, ${userName}` : 'Well done!'}
        </h1>
      </div>

      <div className="cr__score">
        <span className="cr__score-num">{score}</span>
        <span className="cr__score-den">/{totalPossibleScore}</span>
      </div>

      <div className="cr__chips">
        <div className="cr__chip">
          <Zap size={16} />
          <span>+{xpEarned} XP earned</span>
        </div>
        {streakDays != null && streakDays > 0 && (
          <div className="cr__chip">
            <Flame size={16} style={{ color: '#f59e0b' }} />
            <span>{streakDays}-day streak</span>
          </div>
        )}
        {elapsedLabel && (
          <div className="cr__chip">
            <Clock size={16} />
            <span>{elapsedLabel}</span>
          </div>
        )}
        <div className="cr__chip">
          <CheckCircle2 size={16} style={{ color: '#10b981' }} />
          <span>{accuracy}% accuracy</span>
        </div>
      </div>

      {topics.length > 0 && (
        <div className="cr__panel">
          <h3>Topic breakdown</h3>
          {topics.map(t => {
            const errPct = Math.round((t.wrong / t.total) * 100);
            const allCorrect = t.wrong === 0;
            return (
              <div key={t.label} className="cr__row">
                <div className="cr__row-topic">
                  {allCorrect ? (
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                  ) : (
                    <AlertTriangle size={16} style={{ color: '#f59e0b' }} />
                  )}
                  <span>{t.label}</span>
                </div>
                <span
                  className={`cr__row-err ${allCorrect ? 'cr__row-err--ok' : ''}`}
                >
                  {allCorrect ? 'All correct' : `${errPct}% wrong`}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {recommendations && recommendations.length > 0 && (
        <div className="cr__study-plan">
          <h3>
            <BookOpen size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#8b5cf6' }} />
            Study Plan
          </h3>
          {recommendations.map((rec, i) => (
            <div key={i} className="cr__rec">
              <div className={`cr__rec-dot cr__rec-dot--${rec.priority}`} />
              <div className="cr__rec-body">
                <div className="cr__rec-title">{rec.title}</div>
                <div className="cr__rec-desc">{rec.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cr__actions">
        <button
          onClick={() => {
            const currentRecord = {
              chapterTitle:
                challengeBlueprint?.title || 'Numbers & Place Value',
              score,
              total: TOTAL_QUESTIONS,
              questions,
              userAnswers,
              answerResults,
              timestamp: new Date().toISOString()
            };
            onReviewAnswers(currentRecord);
          }}
          className="cr__btn cr__btn--ghost"
        >
          Review answers
        </button>
        <button onClick={onBack} className="cr__btn cr__btn--primary">
          Back to Dashboard <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

// ── Co-located styles (scoped via .challenge-result) ──
const challengeResultStyles = `
  .challenge-result {
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    padding: 40px 32px 36px;
    background: linear-gradient(180deg, #fcfaff 0%, #f4efff 100%);
    border-radius: 32px;
    border: 1px solid rgba(167, 139, 250, 0.18);
    box-shadow: 0 24px 60px rgba(91, 33, 182, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    text-align: center;
  }
  .cr__crown {
    width: 96px;
    height: 96px;
    border-radius: 30px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    display: grid;
    place-items: center;
    box-shadow: 0 18px 40px rgba(245, 158, 11, 0.4);
  }
  .cr__crown--red {
    background: linear-gradient(135deg, #f87171, #ef4444);
    box-shadow: 0 18px 40px rgba(239, 68, 68, 0.35);
  }
  .cr__title-block { display: flex; flex-direction: column; gap: 6px; }
  .cr__eyebrow {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 800;
    color: #8b7aa7;
  }
  .cr__eyebrow--red { color: #b91c1c; }
  .cr__title {
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    color: #1e1b4b;
    margin: 0;
    line-height: 1.1;
  }
  .cr__sub {
    color: #64748b;
    font-weight: 600;
    font-size: 1rem;
    margin: 4px 0 0;
    max-width: 460px;
  }
  .cr__score {
    display: inline-flex;
    align-items: baseline;
    gap: 4px;
    line-height: 1;
    font-family: 'Outfit', 'Inter', sans-serif;
  }
  .cr__score-num {
    font-size: 4.4rem;
    font-weight: 900;
    color: #8b5cf6;
  }
  .cr__score-den {
    font-size: 1.6rem;
    color: #8b7aa7;
    font-weight: 700;
  }
  .cr__chips {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cr__chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 14px;
    background: white;
    border: 1px solid rgba(167, 139, 250, 0.18);
    font-weight: 700;
    font-size: 0.88rem;
    color: #1e1b4b;
  }
  .cr__chip svg { color: #8b5cf6; }
  .cr__panel {
    width: 100%;
    padding: 20px 22px;
    border-radius: 22px;
    background: white;
    border: 1px solid rgba(167, 139, 250, 0.18);
    box-shadow: 0 12px 30px rgba(91, 33, 182, 0.05);
    text-align: left;
  }
  .cr__panel h3 {
    margin: 0 0 12px;
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1.05rem;
    color: #1e1b4b;
  }
  .cr__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    gap: 12px;
  }
  .cr__row:last-child { border-bottom: 0; }
  .cr__row-topic {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1e1b4b;
    font-weight: 700;
    font-size: 0.92rem;
    min-width: 0;
  }
  .cr__row-topic span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cr__row-err {
    font-size: 0.78rem;
    font-weight: 800;
    color: #b91c1c;
    background: #fee2e2;
    padding: 4px 10px;
    border-radius: 999px;
    flex-shrink: 0;
  }
  .cr__row-err--ok {
    color: #166534;
    background: #dcfce7;
  }
  .cr__actions {
    display: flex;
    gap: 10px;
    margin-top: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cr__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 22px;
    border-radius: 16px;
    font-weight: 800;
    font-size: 0.95rem;
    border: 0;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .cr__btn--primary {
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 55%, #7c3aed 100%);
    color: white;
    box-shadow: 0 14px 24px rgba(124, 58, 237, 0.2);
  }
  .cr__btn--primary:hover { transform: translateY(-1px); }
  .cr__btn--ghost {
    background: white;
    color: #5b4d74;
    border: 1px solid rgba(167, 139, 250, 0.2);
  }

  .cr__study-plan {
    width: 100%;
    padding: 20px 22px;
    border-radius: 22px;
    background: white;
    border: 1px solid rgba(167, 139, 250, 0.18);
    box-shadow: 0 12px 30px rgba(91, 33, 182, 0.05);
    text-align: left;
  }
  .cr__study-plan h3 {
    margin: 0 0 14px;
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1.05rem;
    color: #1e1b4b;
    display: flex;
    align-items: center;
  }
  .cr__rec {
    display: flex;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    align-items: flex-start;
  }
  .cr__rec:last-child { border-bottom: 0; padding-bottom: 0; }
  .cr__rec-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 5px;
  }
  .cr__rec-dot--high { background: #ef4444; }
  .cr__rec-dot--medium { background: #f59e0b; }
  .cr__rec-dot--low { background: #10b981; }
  .cr__rec-body { flex: 1; }
  .cr__rec-title { font-weight: 800; font-size: 0.9rem; color: #1e1b4b; margin-bottom: 3px; }
  .cr__rec-desc { font-size: 0.82rem; color: #64748b; line-height: 1.5; }

  @media (max-width: 640px) {
    .challenge-result {
      padding: 28px 20px;
      border-radius: 24px;
      gap: 18px;
    }
    .cr__crown { width: 80px; height: 80px; border-radius: 24px; }
    .cr__title { font-size: 1.7rem; }
    .cr__score-num { font-size: 3.4rem; }
    .cr__score-den { font-size: 1.3rem; }
    .cr__actions { width: 100%; flex-direction: column; }
    .cr__btn { width: 100%; }
  }
`;

export default ChallengeResultView;
