import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Target,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Zap,
  History,
  ArrowRight,
  BookLock,
  GraduationCap,
  Play,
} from 'lucide-react';
import { getLesson } from '../../lessons/registry';
import LessonPlayer from '../lessons/LessonPlayer';

// ── Per-kind palette + glyph for the session cards ─────────
const KIND = {
  daily: { Glyph: BookOpen, ring: '#7c3aed', noteGrad: 'linear-gradient(135deg,#f5f3ff,#e7e0fb)', noteBorder: '#ddd6fe', badge: 'linear-gradient(135deg,#a78bfa,#7c3aed)' },
  calc:  { Glyph: Target,   ring: '#d97706', noteGrad: 'linear-gradient(135deg,#fffbeb,#fef3c7)', noteBorder: '#fde68a', badge: 'linear-gradient(135deg,#fbbf24,#d97706)' },
};

// ── Progress ring icon: done → green ring + check; else dashed ring + glyph ──
const SessionRing = ({ kind, done }) => {
  const m = KIND[kind];
  const Glyph = m.Glyph;
  const size = 60, stroke = 6, r = (size - stroke) / 2;
  return (
    <div className="cs__sess-ring">
      <svg width={size} height={size} aria-hidden="true">
        {done ? (
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#10b981" strokeWidth={stroke} strokeLinecap="round" />
        ) : (
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ddd6fe" strokeWidth={stroke} strokeLinecap="round" strokeDasharray="2 7" />
        )}
      </svg>
      <span className="cs__ring-ico" style={{ color: done ? '#10b981' : m.ring }}>
        {done ? <CheckCircle2 size={26} strokeWidth={2.4} /> : <Glyph size={24} strokeWidth={2.1} />}
      </span>
    </div>
  );
};

// ── Secret Notebook footer strip (gradient CTA, lives inside the card) ──────
const SecretNoteStrip = ({ kind, note, onOpen }) => {
  const m = KIND[kind];
  const total = note?.total || 0;
  const due = note?.due || 0;
  const sub = total === 0
    ? 'no notes yet'
    : due > 0
    ? `${due} questions ready to review`
    : `${total} saved · all reviewed`;
  return (
    <button
      type="button"
      className={`cs__note-strip cs__note-strip--${kind}`}
      onClick={() => onOpen?.(kind)}
    >
      <span className="cs__note-badge" style={{ background: m.badge }}><BookLock size={17} /></span>
      <span className="cs__note-main">
        <strong>Secret Note</strong>
        <span className="cs__note-sub">{sub}</span>
      </span>
      <span className="cs__note-cta">Review <ArrowRight size={15} /></span>
    </button>
  );
};

// ── Helpers ────────────────────────────────────────────────
const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const TREND_COPY = {
  improving: 'Improving',
  declining: 'Watch',
  stable: 'Consistent',
  insufficient_data: '',
};
const TREND_STYLE = {
  improving: { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  declining: { bg: '#fef2f2', color: '#b91c1c', border: '#fecaca' },
  stable: { bg: '#f8fafc', color: '#475569', border: '#e2e8f0' },
  insufficient_data: { bg: '#f8fafc', color: '#94a3b8', border: '#e2e8f0' },
};

const getMondayOfThisWeek = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  const day = d.getDay(); // 0 = Sunday, 1 = Monday
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
};

const localDateKey = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
};

// Map recentHistory → 7-day array for this week (Mon → Sun) filtered by kind.
const buildWeekFromHistory = (history, kind) => {
  const todayKey = localDateKey(new Date());
  const monday = getMondayOfThisWeek();
  const byDate = {};
  (history || []).forEach((s) => {
    const isCalc = s.statCollection === 'calc_stats' || s.challengeType === 'calc';
    if ((kind === 'calc') !== isCalc) return;
    const date =
      s.date ||
      (s.timestamp ? localDateKey(new Date(s.timestamp)) : null);
    if (!date) return;
    const prev = byDate[date];
    if (!prev || (s.timestamp || '') > (prev.timestamp || '')) {
      byDate[date] = s;
    }
  });

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = localDateKey(d);
    const session = byDate[key];
    return {
      letter: DAY_LETTERS[i],
      date: key,
      today: key === todayKey,
      future: d.getTime() > Date.now(),
      score: session ? (typeof session.score === 'number' ? session.score : null) : null,
      total: session ? (typeof session.total === 'number' ? session.total : null) : null,
    };
  });
};

const formatWeekAverage = (data) => {
  const completed = data.filter((d) => d.score != null && d.total != null);
  if (completed.length === 0) return null;
  const score = completed.reduce((a, d) => a + d.score, 0) / completed.length;
  const total = completed.reduce((a, d) => a + d.total, 0) / completed.length;
  return `${Math.round(score)} / ${Math.round(total)}`;
};

// ── Weekly bar grid ────────────────────────────────────────
const WeeklyBars = ({ data, kind }) => {
  const palette =
    kind === 'calc'
      ? {
          bar: 'linear-gradient(180deg, #fde68a 0%, #f59e0b 100%)',
          shadow: 'inset 0 -8px 16px rgba(180,83,9,0.2)',
          text: '#78350f',
          todayBg:
            'repeating-linear-gradient(45deg, rgba(252,211,77,0.28), rgba(252,211,77,0.28) 6px, rgba(252,211,77,0.12) 6px, rgba(252,211,77,0.12) 12px)',
          todayText: '#b45309',
        }
      : {
          bar: 'linear-gradient(180deg, #c4b5fd 0%, #8b5cf6 100%)',
          shadow: 'inset 0 -8px 16px rgba(91,33,182,0.18)',
          text: '#ffffff',
          todayBg:
            'repeating-linear-gradient(45deg, rgba(167,139,250,0.18), rgba(167,139,250,0.18) 6px, rgba(167,139,250,0.08) 6px, rgba(167,139,250,0.08) 12px)',
          todayText: '#8b5cf6',
        };

  const numberThreshold = kind === 'calc' ? 18 : 5;

  return (
    <div className="cs__week">
      {data.map((day) => {
        const pct = day.score != null && day.total > 0 ? day.score / day.total : 0;
        const heightPct = Math.max(pct * 100, day.score === 0 ? 10 : 0);
        const showNumber = day.score != null && day.score >= numberThreshold;
        return (
          <div key={day.date} className="cs__day">
            <div
              className={`cs__day-score${day.score == null ? ' is-empty' : ''}`}
            >
              {day.score != null
                ? `${day.score}/${day.total}`
                : day.today
                ? 'today'
                : ''}
            </div>
            <div className="cs__day-bar-wrap">
              {day.score != null ? (
                <div
                  className="cs__day-bar"
                  style={{
                    height: `${heightPct}%`,
                    background: palette.bar,
                    boxShadow: palette.shadow,
                    color: palette.text,
                  }}
                >
                  {showNumber ? day.score : ''}
                </div>
              ) : day.today ? (
                <div
                  className="cs__day-bar cs__day-bar--today-empty"
                  style={{ background: palette.todayBg, color: palette.todayText }}
                >
                  DO IT
                </div>
              ) : (
                <div className="cs__day-bar cs__day-bar--empty" />
              )}
            </div>
            <div className={`cs__day-d${day.today ? ' is-today' : ''}`}>
              {day.letter}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ── Test card (Daily / Calculation) with attached Secret Note footer ───────
const TestRow = ({
  kind,
  title,
  meta,
  state, // 'idle' | 'loading' | 'completed' | 'abandoned'
  onBegin,
  onReview,
  note,
  onOpenNote,
  lessons = [],
  lessonsLabel = '',
  onOpenLesson,
}) => {
  const done = state === 'completed';
  const ended = state === 'abandoned';
  const loading = state === 'loading';
  return (
    <div className="cs__test-card">
      <div className="cs__test">
        <SessionRing kind={kind} done={done} />
        <div className="cs__test-main">
          <div className="cs__test-titlerow">
            <h3>{title}</h3>
            {done ? (
              <span className="cs__chip-state cs__chip-state--done"><CheckCircle2 size={13} /> Done today</span>
            ) : ended ? (
              <span className="cs__chip-state cs__chip-state--ended"><AlertTriangle size={13} /> Ended</span>
            ) : loading ? null : (
              <span className="cs__chip-state cs__chip-state--todo"><span className="cs__chip-dot" /> Not done yet</span>
            )}
          </div>
          <p>{meta}</p>
        </div>
        <div className="cs__test-actions">
          {loading ? (
            <span className="cs__status">Checking…</span>
          ) : done || ended ? (
            <button type="button" className="cs__primary cs__primary--review" onClick={onReview} title={`Review ${title}`}>
              <History size={16} /> Review
            </button>
          ) : (
            <button type="button" className="cs__primary cs__primary--begin" onClick={onBegin}>
              Begin <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
      {lessons.length > 0 && (
        <div className="cs__lessons">
          <div className="cs__lessons-head">
            <GraduationCap size={17} />
            <span className="cs__lessons-title">Learn the path first</span>
            {lessonsLabel && <span className="cs__lessons-sub"> · {lessonsLabel}</span>}
          </div>
          <div className="cs__lessons-grid">
            {lessons.map((lesson, idx) => (
              <button
                key={lesson.title}
                type="button"
                className="cs__lesson-tile"
                onClick={() => onOpenLesson?.(lesson)}
              >
                <div className="cs__lesson-toprow">
                  <span className="cs__lesson-play"><Play size={18} fill="currentColor" /></span>
                  <span className="cs__lesson-mins">{4 + idx} min</span>
                </div>
                <div className="cs__lesson-name">{lesson.title}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      <SecretNoteStrip kind={kind} note={note} onOpen={onOpenNote} />
    </div>
  );
};

// ── Main component ─────────────────────────────────────────
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
  // onBack and getChallengeMaxXp kept for prop compatibility
  // eslint-disable-next-line no-unused-vars
  onBack,
  getQuestionCount,
  getChallengeMaxXp,
  hasCalculationTest = true,
  // eslint-disable-next-line no-unused-vars
  learningInsights,
  analytics,
  recentHistory,
  // eslint-disable-next-line no-unused-vars
  isMobile,
  secretNote,
  onOpenSecretNote,
}) => {
  const calculationEnabled = studentProfile?.calculationEnabled !== false;

  // Lessons for assigned Clock Reading topics — one entry per distinct lesson
  // (each clock stage maps several topic ids to the same lesson spec).
  const [previewLesson, setPreviewLesson] = useState(null);
  const clockLessons = useMemo(() => {
    const assigned = Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters : [];
    const seen = new Set();
    const lessons = [];
    assigned.filter((id) => id.startsWith('clock-')).forEach((id) => {
      const lesson = getLesson(id);
      if (lesson && !seen.has(lesson.title)) { seen.add(lesson.title); lessons.push(lesson); }
    });
    return lessons;
  }, [studentProfile?.assignedChapters]);

  const dailyNote = secretNote?.daily || { total: 0, due: 0 };
  const calcNote = secretNote?.calc || { total: 0, due: 0 };

  // Daily state
  const dailyState = !todayStatusReady
    ? 'loading'
    : todayCompleted
    ? 'completed'
    : abandonedToday
    ? 'abandoned'
    : 'idle';

  // Calc state
  const calcState = !todayStatusReady
    ? 'loading'
    : calcCompletedToday
    ? 'completed'
    : calcAbandonedToday
    ? 'abandoned'
    : 'idle';

  // Weekly grids — built from recentHistory or history
  const sourceHistory = recentHistory || history || [];
  const dailyWeek = useMemo(
    () => buildWeekFromHistory(sourceHistory, 'daily'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sourceHistory]
  );
  const calcWeek = useMemo(
    () => buildWeekFromHistory(sourceHistory, 'calc'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sourceHistory]
  );

  const dailyAvg = formatWeekAverage(dailyWeek);
  const calcAvg = formatWeekAverage(calcWeek);

  // Streak count — distinct day completions for daily, ending today
  const streakDays = useMemo(() => {
    const days = new Set();
    (sourceHistory || []).forEach((s) => {
      const isCalc = s.statCollection === 'calc_stats' || s.challengeType === 'calc';
      if (isCalc) return;
      if (!s.completed && s.completed !== undefined) return;
      const date = s.date || (s.timestamp ? localDateKey(new Date(s.timestamp)) : null);
      if (date) days.add(date);
    });
    let count = 0;
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    while (days.has(localDateKey(cursor))) {
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [sourceHistory]);

  // Analytics-derived stats
  const accuracy = analytics?.overallAccuracy ?? null;
  const totalQs = analytics?.totalQuestionsAttempted ?? null;
  const totalSessions = (sourceHistory || []).length;
  const weekDelta = analytics?.weeklyDelta ?? null;
  const trendKey = analytics?.trend || 'insufficient_data';
  const trendStyle = TREND_STYLE[trendKey] || TREND_STYLE.insufficient_data;

  const weakTopics = analytics?.weakTopics || [];
  const strongTopics = analytics?.strongTopics || [];
  const topRec = analytics?.recommendations?.[0] || null;

  // Dynamic question counts / XP — fall back to safe defaults
  const dailyQ = getQuestionCount ? getQuestionCount('daily') : 10;
  const dailyXp = getChallengeMaxXp ? getChallengeMaxXp('daily', hasCalculationTest) : 100;
  const calcQ = getQuestionCount ? getQuestionCount('calc') : 30;
  const calcXp = getChallengeMaxXp ? getChallengeMaxXp('calc', hasCalculationTest) : 50;

  const trendChip =
    trendKey !== 'insufficient_data' ? (
      <span
        className="cs__chip"
        style={{
          background: trendStyle.bg,
          color: trendStyle.color,
          border: `1px solid ${trendStyle.border}`,
        }}
      >
        <TrendingUp size={11} /> {TREND_COPY[trendKey]}
      </span>
    ) : null;

  const accuracyRingOffset =
    accuracy != null ? Math.PI * 2 * 100 * (1 - accuracy / 100) : Math.PI * 2 * 100;

  return (
    <div className="app-page">
      <style>{challengeStartStyles}</style>

      {previewLesson && (
        <LessonPlayer lesson={previewLesson} onClose={() => setPreviewLesson(null)} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="cs"
      >
        {/* Header */}
        <div className="cs__head">
          <div>
            <h2>Challenge</h2>
            <p>
              {calculationEnabled
                ? 'Two sessions today'
                : 'Daily practice today'}
              {streakDays > 0 ? ` · ${streakDays}-day streak in play` : ''}
            </p>
          </div>
          {streakDays > 0 && (
            <div className="cs__streak">🔥 {streakDays}-day streak</div>
          )}
        </div>

        {/* Test cards (each with its attached Secret Note footer) */}
        <div className="cs__tests">
          <TestRow
            kind="daily"
            title="Daily practice"
            meta={`${dailyQ} questions · ~5 minutes · up to ${dailyXp} XP`}
            state={dailyState}
            onBegin={onStartDailyQuiz}
            onReview={() => onViewHistory?.('daily')}
            note={dailyNote}
            onOpenNote={onOpenSecretNote}
          />
          {calculationEnabled && (
            <TestRow
              kind="calc"
              title="Calculation sprint"
              meta={`${calcQ} questions · ~3 minutes · up to ${calcXp} XP`}
              state={calcState}
              onBegin={onStartCalculationQuiz}
              onReview={() => onViewHistory?.('calc')}
              note={calcNote}
              onOpenNote={onOpenSecretNote}
              lessons={clockLessons}
              lessonsLabel="reading a clock"
              onOpenLesson={setPreviewLesson}
            />
          )}
        </div>

        {/* Row 2: weekly grids + accuracy ring */}
        <div className="cs__row2">
          <div className="cs__panel">
            <div className="cs__phead">
              <h4>This week</h4>
              {trendChip}
            </div>

            <div className="cs__week-block">
              <div className="cs__week-head">
                <span className="cs__week-label">
                  <span className="cs__week-ico cs__week-ico--daily">
                    <BookOpen size={13} />
                  </span>
                  Daily practice
                </span>
                {dailyAvg && (
                  <span className="cs__week-avg">
                    Week avg · <strong>{dailyAvg}</strong>
                  </span>
                )}
              </div>
              <WeeklyBars data={dailyWeek} kind="daily" />
            </div>

            {calculationEnabled && (
              <div className="cs__week-block cs__week-block--divider">
                <div className="cs__week-head">
                  <span className="cs__week-label">
                    <span className="cs__week-ico cs__week-ico--calc">
                      <Target size={13} />
                    </span>
                    Calculation sprint
                  </span>
                  {calcAvg && (
                    <span className="cs__week-avg">
                      Week avg · <strong>{calcAvg}</strong>
                    </span>
                  )}
                </div>
                <WeeklyBars data={calcWeek} kind="calc" />
              </div>
            )}
          </div>

          <div className="cs__panel cs__ring-panel">
            <div className="cs__phead">
              <h4>Last 7 days</h4>
              {trendChip}
            </div>
            {accuracy != null ? (
              <>
                <div className="cs__ring">
                  <svg viewBox="0 0 240 240" aria-hidden="true">
                    <defs>
                      <linearGradient id="csRingGrad" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="120"
                      cy="120"
                      r="100"
                      stroke="rgba(167,139,250,0.18)"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="120"
                      cy="120"
                      r="100"
                      stroke="url(#csRingGrad)"
                      strokeWidth="16"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={Math.PI * 2 * 100}
                      strokeDashoffset={accuracyRingOffset}
                    />
                  </svg>
                  <div className="cs__ring-center">
                    <span className="cs__ring-num">{Math.round(accuracy)}%</span>
                    <span className="cs__ring-lbl">Accuracy</span>
                  </div>
                </div>
                <div className="cs__ring-trio">
                  <div className="cs__ring-item">
                    <div className="cs__ring-v">{totalQs ?? '—'}</div>
                    <div className="cs__ring-l">Questions</div>
                  </div>
                  <div className="cs__ring-item">
                    <div className="cs__ring-v">{totalSessions}</div>
                    <div className="cs__ring-l">Sessions</div>
                  </div>
                  <div className="cs__ring-item">
                    <div className="cs__ring-v cs__ring-v--accent">
                      {weekDelta != null
                        ? `${weekDelta > 0 ? '+' : ''}${weekDelta}%`
                        : '—'}
                    </div>
                    <div className="cs__ring-l">vs last wk</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="cs__ring-empty">
                <TrendingUp size={36} />
                <h5>Personalized insights pending</h5>
                <p>
                  Complete a few daily challenges to unlock your accuracy and
                  progress trend.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Row 3: focus areas + recommendation */}
        {(weakTopics.length > 0 || strongTopics.length > 0 || topRec) && (
          <div className="cs__row3">
            {(weakTopics.length > 0 || strongTopics.length > 0) && (
              <div className="cs__panel cs__focus">
                <h4>⚠ Focus Areas</h4>
                {weakTopics.map((t) => (
                  <div key={t.topicId || t.label} className="cs__focus-row">
                    <span className="cs__focus-t">{t.label}</span>
                    <span className="cs__focus-v">{t.errorRate}% wrong</span>
                  </div>
                ))}
                {strongTopics.length > 0 && (
                  <div className="cs__strong-row">
                    {strongTopics.map((t) => (
                      <span
                        key={t.topicId || t.label}
                        className="cs__strong-chip"
                      >
                        ✓ {t.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            {topRec && (
              <div className="cs__rec">
                <h4>
                  <Zap size={16} /> {topRec.title}
                </h4>
                <p>{topRec.description}</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

// ── Co-located styles ──────────────────────────────────────
const challengeStartStyles = `
  .cs { display: flex; flex-direction: column; gap: 18px; max-width: 1240px; margin: 0 auto; width: 100%; padding-bottom: 32px; }
  .cs__head { display: flex; justify-content: space-between; align-items: flex-end; }
  .cs__head h2 { font-size: 1.8rem; margin: 0; font-weight: 900; color: #1e1b4b; }
  .cs__head p { color: #6d6a85; margin: 4px 0 0; font-size: 0.92rem; }
  .cs__streak {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 14px; border-radius: 999px;
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #b45309; border: 1px solid #fcd34d;
    font-weight: 800; font-size: 0.85rem;
  }
  .cs__chip {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 4px 10px; border-radius: 999px;
    font-weight: 800; font-size: 0.7rem;
  }

  /* Test cards (original vertical list) */
  .cs__tests { display: flex; flex-direction: column; gap: 12px; }
  .cs__test-card {
    background: #ffffff; border-radius: 24px; border: 1px solid #f1f5f9;
    box-shadow: 0 10px 28px rgba(0,0,0,0.04); overflow: hidden;
  }
  .cs__test {
    display: flex; align-items: center; gap: 18px;
    padding: 18px 22px;
  }

  /* Session ring icon: done → green ring + check, else dashed ring + glyph */
  .cs__sess-ring { position: relative; width: 60px; height: 60px; flex-shrink: 0; }
  .cs__sess-ring svg { display: block; }
  .cs__ring-ico { position: absolute; inset: 0; display: grid; place-items: center; }

  .cs__test-main { flex: 1; min-width: 0; }
  .cs__test-titlerow { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .cs__test-main h3 { font-size: 1.18rem; font-weight: 900; color: #1e1b4b; margin: 0; }
  .cs__test-main p { color: #6d6a85; margin: 4px 0 0; font-size: 0.9rem; }

  /* Status chip next to the title */
  .cs__chip-state {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 10px; border-radius: 999px;
    font-weight: 900; font-size: 0.72rem; border: 1.5px solid;
  }
  .cs__chip-state--done { color: #15803d; background: #ecfdf5; border-color: #a7f3d0; }
  .cs__chip-state--ended { color: #b91c1c; background: #fef2f2; border-color: #fecaca; }
  .cs__chip-state--todo { color: #b45309; background: #fffbeb; border-color: #fde68a; }
  .cs__chip-dot { width: 7px; height: 7px; border-radius: 50%; background: #f59e0b; }

  .cs__test-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

  /* Unified primary button — Begin (to-do) ⇄ Review (done), same size */
  .cs__primary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 13px 24px; border-radius: 999px;
    font-weight: 800; font-size: 0.9rem; cursor: pointer; border: 0;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .cs__primary:hover { transform: translateY(-1px); }
  .cs__primary--begin { background: #1e1b4b; color: #fff; box-shadow: 0 10px 24px rgba(30,27,75,0.22); }
  .cs__primary--review { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: #fff; box-shadow: 0 10px 24px rgba(124,58,237,0.24); }
  .cs__status {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 18px; border-radius: 999px;
    font-weight: 800; font-size: 0.85rem; color: #475569;
    background: #f8fafc; border: 1px solid #e2e8f0;
  }

  /* Secret Note footer — gradient CTA, same button size as above */
  .cs__lessons {
    padding: 16px 18px 18px;
    border-top: 1px solid #eef0f6;
  }
  .cs__lessons-head {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 12px;
    color: #6d28d9;
  }
  .cs__lessons-title { font-weight: 800; font-size: 0.98rem; color: #1e1b4b; }
  .cs__lessons-sub { font-weight: 700; font-size: 0.95rem; color: #8b7cc8; }
  .cs__lessons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
  }
  .cs__lesson-tile {
    display: flex; flex-direction: column; align-items: flex-start; gap: 14px;
    padding: 18px;
    border: 1.5px solid #ece9fb;
    border-radius: 18px;
    background: #f7f5fd;
    cursor: pointer;
    text-align: left;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .cs__lesson-tile:hover {
    transform: translateY(-2px);
    border-color: #c4b5fd;
    box-shadow: 0 10px 24px rgba(124, 58, 237, 0.12);
  }
  .cs__lesson-toprow { display: flex; align-items: center; gap: 12px; }
  .cs__lesson-play {
    display: inline-flex; align-items: center; justify-content: center;
    width: 46px; height: 46px; border-radius: 14px;
    background: linear-gradient(135deg, #a78bfa, #7c3aed);
    color: #fff;
    box-shadow: 0 8px 18px rgba(124, 58, 237, 0.3);
  }
  .cs__lesson-play svg { margin-left: 2px; }
  .cs__lesson-mins { font-weight: 800; font-size: 1rem; color: #7c3aed; }
  .cs__lesson-name { font-weight: 800; font-size: 1.05rem; color: #1e1b4b; line-height: 1.35; }
  .cs__note-strip {
    display: flex; align-items: center; gap: 12px; width: 100%;
    padding: 13px 18px; cursor: pointer; text-align: left;
    border: 0; border-top: 1px solid #ddd6fe;
    background: linear-gradient(135deg, #f5f3ff, #e7e0fb);
    transition: filter 0.15s ease;
  }
  .cs__note-strip:hover { filter: brightness(0.98); }
  .cs__note-strip--calc { border-top-color: #fde68a; background: linear-gradient(135deg, #fffbeb, #fef3c7); }
  .cs__note-badge { width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0; display: grid; place-items: center; color: #fff; }
  .cs__note-main { flex: 1; min-width: 0; line-height: 1.25; }
  .cs__note-main strong { display: block; font-size: 0.9rem; font-weight: 900; color: #1e1b4b; }
  .cs__note-sub { display: block; font-size: 0.72rem; font-weight: 700; color: #7c3aed; }
  .cs__note-strip--calc .cs__note-sub { color: #b45309; }
  .cs__note-cta {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 13px 24px; border-radius: 999px; flex-shrink: 0;
    background: #7c3aed; color: #fff; font-weight: 800; font-size: 0.9rem;
    box-shadow: 0 8px 18px rgba(124,58,237,0.3);
  }
  .cs__note-strip--calc .cs__note-cta { background: #d97706; box-shadow: 0 8px 18px rgba(217,119,6,0.3); }

  /* Panels */
  .cs__row2 { display: grid; grid-template-columns: 1.5fr 1fr; gap: 16px; }
  .cs__panel { padding: 22px 24px; border-radius: 22px; background: white; border: 1px solid #f1f5f9; box-shadow: 0 10px 28px rgba(0,0,0,0.04); }
  .cs__phead { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .cs__phead h4 { font-size: 1rem; font-weight: 900; color: #1e1b4b; margin: 0; }

  /* Weekly block */
  .cs__week-block { padding: 4px 2px 0; }
  .cs__week-block--divider { margin-top: 18px; padding-top: 18px; border-top: 1px solid #f1f5f9; }
  .cs__week-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .cs__week-label { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 800; color: #1e1b4b; }
  .cs__week-ico { width: 22px; height: 22px; border-radius: 7px; display: grid; place-items: center; }
  .cs__week-ico--daily { background: #e0e7ff; color: #4338ca; }
  .cs__week-ico--calc { background: #fde68a; color: #b45309; }
  .cs__week-avg { font-size: 0.78rem; color: #6d6a85; font-weight: 700; }
  .cs__week-avg strong { color: #1e1b4b; font-weight: 900; }

  .cs__week { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; }
  .cs__day { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .cs__day-score { font-size: 0.72rem; font-weight: 800; color: #475569; height: 14px; }
  .cs__day-score.is-empty { color: #cbd5e1; }
  .cs__day-bar-wrap {
    width: 100%; height: 90px; border-radius: 14px;
    background: #f8fafc; border: 1px solid #f1f5f9;
    display: flex; align-items: flex-end; justify-content: center;
    overflow: hidden; padding: 5px;
  }
  .cs__day-bar {
    width: 100%; min-height: 12px;
    border-radius: 10px;
    display: flex; align-items: flex-start; justify-content: center;
    font-weight: 800; font-size: 0.78rem;
    padding-top: 5px;
    transition: height 0.6s ease;
  }
  .cs__day-bar--empty { background: transparent; box-shadow: none; }
  .cs__day-bar--today-empty {
    box-shadow: none;
    min-height: 18px; height: 20% !important;
    padding-top: 2px;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
  }
  .cs__day-d { font-size: 0.78rem; color: #94a3b8; font-weight: 800; letter-spacing: 0.04em; }
  .cs__day-d.is-today { color: #8b5cf6; }

  /* Accuracy ring */
  .cs__ring-panel { display: flex; flex-direction: column; align-items: center; gap: 22px; }
  .cs__ring-panel .cs__phead { width: 100%; }
  .cs__ring { position: relative; width: 220px; height: 220px; display: grid; place-items: center; }
  .cs__ring svg { position: absolute; inset: 0; transform: rotate(-90deg); width: 100%; height: 100%; }
  .cs__ring-center { display: flex; flex-direction: column; align-items: center; }
  .cs__ring-num { font-size: 3.2rem; font-weight: 900; color: #1e1b4b; line-height: 1; letter-spacing: -0.02em; }
  .cs__ring-lbl { font-size: 0.72rem; color: #8b7aa7; font-weight: 800; text-transform: uppercase; letter-spacing: 0.18em; margin-top: 6px; }
  .cs__ring-trio { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%; padding-top: 18px; border-top: 1px solid #f1f5f9; }
  .cs__ring-item { text-align: center; }
  .cs__ring-v { font-size: 1.7rem; font-weight: 900; color: #1e1b4b; line-height: 1; }
  .cs__ring-v--accent { color: #8b5cf6; }
  .cs__ring-l { font-size: 0.66rem; color: #94a3b8; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 6px; }
  .cs__ring-empty { padding: 24px 8px; text-align: center; color: #94a3b8; }
  .cs__ring-empty svg { color: #c4b5fd; margin-bottom: 10px; }
  .cs__ring-empty h5 { font-size: 0.95rem; color: #1e1b4b; margin: 0 0 6px; font-weight: 800; }
  .cs__ring-empty p { color: #6d6a85; font-size: 0.85rem; margin: 0; line-height: 1.5; max-width: 240px; margin-left: auto; margin-right: auto; }

  /* Focus + recommendation */
  .cs__row3 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cs__focus h4 { font-size: 1rem; font-weight: 900; color: #1e1b4b; margin: 0 0 14px; }
  .cs__focus-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 12px 14px; border-radius: 12px;
    background: #fff7ed; border: 1px solid #fed7aa;
    margin-bottom: 8px;
  }
  .cs__focus-row:last-of-type { margin-bottom: 14px; }
  .cs__focus-t { font-size: 0.88rem; color: #92400e; font-weight: 700; }
  .cs__focus-v { background: #fef3c7; color: #b45309; padding: 3px 10px; border-radius: 999px; font-size: 0.72rem; font-weight: 800; }
  .cs__strong-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .cs__strong-chip { padding: 4px 10px; border-radius: 999px; background: #dcfce7; color: #166534; font-size: 0.72rem; font-weight: 700; border: 1px solid #bbf7d0; }
  .cs__rec {
    padding: 22px 24px; border-radius: 22px;
    background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    border: 1px solid #ddd6fe;
  }
  .cs__rec h4 {
    font-size: 1rem; font-weight: 900; color: #4c1d95;
    margin: 0 0 6px; display: flex; align-items: center; gap: 8px;
  }
  .cs__rec p { margin: 0; color: #5b21b6; font-size: 0.88rem; line-height: 1.55; }

  /* Mobile */
  @media (max-width: 900px) {
    .cs__row2 { grid-template-columns: 1fr; }
    .cs__row3 { grid-template-columns: 1fr; }
    .cs__test { flex-wrap: wrap; }
    .cs__test-actions { width: 100%; justify-content: flex-end; }
  }
  @media (max-width: 540px) {
    .cs__head { flex-direction: column; align-items: flex-start; gap: 10px; }
    .cs__test-actions { gap: 8px; }
    .cs__primary, .cs__note-cta { padding: 11px 18px; font-size: 0.86rem; }
    .cs__day-bar-wrap { height: 70px; }
  }
`;

export default ChallengeStartView;
