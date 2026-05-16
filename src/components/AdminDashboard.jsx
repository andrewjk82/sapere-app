import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Eye,
  CheckCircle2,
  TrendingUp,
  PenTool,
  XCircle,
  Calendar,
  Zap,
  Bell,
  ChevronRight,
} from 'lucide-react';

// ──────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────
const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const toDateSafe = (v) => {
  if (!v) return null;
  if (typeof v === 'string' || typeof v === 'number') {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  if (v.toDate) return v.toDate();
  if (v instanceof Date) return v;
  return null;
};

const daysSince = (v) => {
  const d = toDateSafe(v);
  if (!d) return Infinity;
  return Math.floor((Date.now() - d.getTime()) / (24 * 60 * 60 * 1000));
};

const minutesSince = (v) => {
  const d = toDateSafe(v);
  if (!d) return Infinity;
  return Math.floor((Date.now() - d.getTime()) / 60000);
};

const formatAgo = (v) => {
  const m = minutesSince(v);
  if (m === Infinity) return '';
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  if (m < 1440) return `${Math.floor(m / 60)}h ago`;
  return `${Math.floor(m / 1440)}d ago`;
};

const formatTime = (d) => {
  if (!d) return '—';
  const date = toDateSafe(d);
  if (!date) return '—';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const formatDate = () =>
  new Date().toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

// Categorize a student into health bucket.
const categorize = (s) => {
  const accuracy =
    typeof s.recentAccuracy === 'number'
      ? s.recentAccuracy
      : typeof s.accuracy === 'number'
      ? s.accuracy
      : null;
  const streak =
    typeof s.currentStreak === 'number'
      ? s.currentStreak
      : typeof s.streak === 'number'
      ? s.streak
      : 0;
  const idle = daysSince(s.lastAttemptAt || s.lastSeen || s.updatedAt);

  if (idle >= 2 || (accuracy !== null && accuracy < 55)) return 'risk';
  if ((accuracy !== null && accuracy < 72) || (streak === 0 && idle >= 1))
    return 'watch';
  if (streak >= 7 && accuracy !== null && accuracy >= 80) return 'thriving';
  return 'steady';
};

const buildBuckets = (students) => {
  const buckets = { risk: [], watch: [], steady: [], thriving: [] };
  (students || []).forEach((s) => {
    buckets[categorize(s)].push(s);
  });
  return buckets;
};

// Pending students for the Send Reminders button
const countPendingToday = (students) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (students || []).filter((s) => {
    const d = toDateSafe(s.lastAttemptAt || s.lastSeen);
    if (!d) return true;
    return d < today;
  }).length;
};

// ──────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────
const HealthCard = ({ student, kind, onSelect }) => {
  const accuracy =
    typeof student.recentAccuracy === 'number'
      ? student.recentAccuracy
      : typeof student.accuracy === 'number'
      ? student.accuracy
      : null;
  const streak =
    typeof student.currentStreak === 'number'
      ? student.currentStreak
      : typeof student.streak === 'number'
      ? student.streak
      : 0;
  const idle = daysSince(student.lastAttemptAt || student.lastSeen);

  let signalLabel = 'on track';
  let signalClass = 'flat';
  let note = '';

  if (kind === 'risk') {
    signalClass = 'bad';
    if (idle >= 2) {
      signalLabel = `${idle}d idle`;
      note = `No attempt in ${idle} days.`;
    } else if (accuracy !== null) {
      signalLabel = `${accuracy}%`;
      note = `Last accuracy under 55%. Suggest review.`;
    }
  } else if (kind === 'watch') {
    signalClass = 'warn';
    if (accuracy !== null && accuracy < 72) {
      signalLabel = 'slipping';
      note = `Accuracy dipped to ${accuracy}%.`;
    } else {
      signalLabel = 'streak gap';
      note = 'Streak broken — check in soon.';
    }
  } else if (kind === 'thriving') {
    signalClass = 'good';
    signalLabel = `↑ ${accuracy ?? ''}%`;
    note = `${streak}-day streak. Strong week.`;
  } else {
    signalLabel = 'on track';
    note = streak
      ? `${streak}-day streak.`
      : 'Steady — no flags this week.';
  }

  const name =
    student.name ||
    student.displayName ||
    [student.firstName, student.lastName].filter(Boolean).join(' ') ||
    'Student';
  const year = student.level || student.year || student.assignedYear || '—';

  return (
    <button
      type="button"
      className="ad__card"
      onClick={() => onSelect?.(student.id)}
    >
      <div className="ad__card-top">
        <div className="ad__card-av">{getInitials(name)}</div>
        <div className="ad__card-meta-wrap">
          <div className="ad__card-name">{name}</div>
          <div className="ad__card-meta">
            {year}
            {accuracy !== null ? ` · ${accuracy}%` : ''}
          </div>
        </div>
      </div>
      <div className="ad__card-foot">
        <span className={`ad__signal ad__signal--${signalClass}`}>
          {signalLabel}
        </span>
        <span className="ad__card-meta-r">last 7d</span>
      </div>
      <div className="ad__card-note">{note}</div>
    </button>
  );
};

const HealthColumn = ({ kind, title, icon: Icon, students, onSelect, max = 2 }) => (
  <div className={`ad__col ad__col--${kind}`}>
    <div className="ad__col-head">
      <h4>
        <Icon size={18} /> {title}
      </h4>
      <span className="ad__col-count">{students.length}</span>
    </div>
    <div className="ad__col-list">
      {students.slice(0, max).map((s) => (
        <HealthCard
          key={s.id || s.uid || s.email}
          student={s}
          kind={kind}
          onSelect={onSelect}
        />
      ))}
      {students.length > max && (
        <button
          type="button"
          className="ad__col-more"
          onClick={() => onSelect?.(null, kind)}
        >
          + {students.length - max} more
        </button>
      )}
      {students.length === 0 && <div className="ad__col-empty">None</div>}
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────
const AdminDashboard = ({
  students = [],
  pendingGrading = [],
  recentActivity = null,
  lastSync = null,
  remindersSentToday = 0,
  isSyncing = false,
  userName = 'Andrew',
  onSelectStudent,
  onOpenGradingItem,
  onReviewAll,
  onSendReminders,
  setActiveTab,
}) => {
  const buckets = useMemo(() => buildBuckets(students), [students]);

  // KPI overview metrics
  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.status === 'Active').length;
  const totalLessons = students.reduce((acc, s) => acc + (s.lessons || 0), 0);
  const hoursTutored = `${Math.round(totalLessons * 1.5)}h`;
  const activePct =
    totalStudents > 0
      ? `${Math.round((activeStudents / totalStudents) * 100)}% of total`
      : '—';

  const pendingToday = useMemo(() => countPendingToday(students), [students]);

  // Activity feed — fall back to deriving from pendingGrading if no prop supplied
  const activity = useMemo(() => {
    if (Array.isArray(recentActivity) && recentActivity.length) return recentActivity;
    return (pendingGrading || []).slice(0, 5).map((p) => ({
      kind: 'warn',
      icon: PenTool,
      title: `${p.userName || 'Student'} submitted for review`,
      sub: p.chapterTitle || p.topicTitle || 'Open question',
      when: formatAgo(p.submittedAt),
    }));
  }, [recentActivity, pendingGrading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="ad"
    >
      <style>{adminDashboardStyles}</style>

      {/* Header */}
      <div className="ad__head">
        <h2>Good morning, {userName}</h2>
        <span className="ad__date">{formatDate()}</span>
      </div>

      {/* Student health columns */}
      <div className="ad__pulse">
        <HealthColumn
          kind="risk"
          title="At risk"
          icon={AlertTriangle}
          students={buckets.risk}
          onSelect={onSelectStudent}
        />
        <HealthColumn
          kind="watch"
          title="Watch"
          icon={Eye}
          students={buckets.watch}
          onSelect={onSelectStudent}
        />
        <HealthColumn
          kind="steady"
          title="Steady"
          icon={CheckCircle2}
          students={buckets.steady}
          onSelect={onSelectStudent}
        />
        <HealthColumn
          kind="thriving"
          title="Thriving"
          icon={TrendingUp}
          students={buckets.thriving}
          onSelect={onSelectStudent}
        />
      </div>

      {/* Awaiting review + Activity */}
      <div className="ad__row">
        <div className="ad__panel">
          <div className="ad__panel-head">
            <h4>📝 Awaiting your review</h4>
            {pendingGrading.length > 0 && (
              <button
                type="button"
                className="ad__panel-link"
                onClick={() => onReviewAll?.() ?? setActiveTab?.('Reports')}
              >
                Review all →
              </button>
            )}
          </div>
          {pendingGrading.length === 0 ? (
            <div className="ad__empty">No items awaiting review.</div>
          ) : (
            pendingGrading.slice(0, 5).map((p) => (
              <button
                key={p.id}
                type="button"
                className="ad__review-row"
                onClick={() => onOpenGradingItem?.(p)}
              >
                <div className="ad__review-av">
                  {getInitials(p.userName || 'Student')}
                </div>
                <div className="ad__review-info">
                  <div className="ad__review-name">{p.userName || 'Student'}</div>
                  <div className="ad__review-topic">
                    {p.chapterTitle || p.topicTitle || 'Open question'}
                  </div>
                </div>
                <div className="ad__review-right">
                  <div className="ad__review-ago">{formatAgo(p.submittedAt)}</div>
                  <span className="ad__grade-btn">Grade</span>
                </div>
              </button>
            ))
          )}
        </div>

        <div className="ad__panel">
          <div className="ad__panel-head">
            <h4>Activity</h4>
          </div>
          {activity.length === 0 ? (
            <div className="ad__empty">No recent activity.</div>
          ) : (
            <div className="ad__tl">
              {activity.map((r, i) => {
                const Ic = r.icon || CheckCircle2;
                return (
                  <div key={i} className="ad__tl-row">
                    <div className={`ad__tl-ic ad__tl-ic--${r.kind || 'info'}`}>
                      <Ic size={16} />
                    </div>
                    <div className="ad__tl-main">
                      <strong>{r.title}</strong>
                      {r.sub && <p>{r.sub}</p>}
                    </div>
                    <span className="ad__tl-when">{r.when}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Overview + System status */}
      <div className="ad__row">
        <div className="ad__panel">
          <div className="ad__panel-head">
            <h4>Overview</h4>
          </div>
          <div className="ad__kpi-grid">
            {[
              { l: 'Total Students', v: totalStudents, d: '', muted: true },
              { l: 'Active Students', v: activeStudents, d: activePct, muted: true },
              { l: 'Total Lessons', v: totalLessons, d: 'all-time', muted: true },
              { l: 'Hours Tutored', v: hoursTutored, d: 'all-time', muted: true },
            ].map((k) => (
              <div key={k.l} className="ad__kpi">
                <div className="ad__kpi-l">{k.l}</div>
                <div className="ad__kpi-v">{k.v}</div>
                {k.d && (
                  <div className={`ad__kpi-d${k.muted ? ' is-muted' : ''}`}>
                    {k.d}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

          <div className="ad__panel">
            <div className="ad__panel-head">
              <h4>📚 Curriculum Management</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              <button
                type="button"
                className="ad__grade-btn"
                style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '0.75rem', cursor: 'pointer', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none', color: 'white', fontWeight: 800 }}
                onClick={() => onSyncChapter?.(4)}
                disabled={isSyncing}
              >
                Sync Y11 Adv Ch4
              </button>
              <button
                type="button"
                className="ad__grade-btn"
                style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '0.75rem', cursor: 'pointer', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none', color: 'white', fontWeight: 800 }}
                onClick={() => onSyncChapter?.(5)}
                disabled={isSyncing}
              >
                Sync Y11 Adv Ch5
              </button>
            </div>
            <p style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '10px', fontWeight: 600 }}>
              * Syncing will replace existing questions for these chapters.
            </p>
          </div>

          <div className="ad__panel">
            <div className="ad__panel-head">
              <h4>System status</h4>
            </div>
            <div className="ad__sys-row">
              <span className="ad__sys-l">
                <span className="ad__dot ad__dot--green" /> Auto-Reminder Service
              </span>
              <span className="ad__sys-active">Active</span>
            </div>
            <div className="ad__sys-row">
              <span className="ad__sys-l">Last sync</span>
              <span className="ad__sys-v">
                {lastSync?.timestamp
                  ? formatTime(lastSync.timestamp.toDate?.() || lastSync.timestamp)
                  : 'Never'}
              </span>
            </div>
            <div className="ad__sys-row">
              <span className="ad__sys-l">Reminders sent today</span>
              <span className="ad__sys-v">{remindersSentToday}</span>
            </div>
            <button
              type="button"
              className="ad__send"
              onClick={onSendReminders}
              disabled={isSyncing}
              title="Manually trigger daily notifications and schedule reminders"
            >
              <span className="ad__send-ic">
                <Bell size={18} className={isSyncing ? 'animate-spin' : ''} />
              </span>
              <span className="ad__send-info">
                <strong>{isSyncing ? 'Sending...' : 'Send Reminders Now'}</strong>
                <span>
                  {isSyncing 
                    ? 'Processing notification queue...' 
                    : pendingToday === 0
                      ? 'Check & notify students (Forced Sync)'
                      : (
                        <>
                          Notify{' '}
                          <em className="ad__send-pending">
                            {pendingToday} student{pendingToday === 1 ? '' : 's'}
                          </em>{' '}
                          who haven&apos;t started today
                        </>
                      )}
                </span>
              </span>
              <ChevronRight size={18} className="ad__send-arr" />
            </button>
          </div>
      </div>
    </motion.div>
  );
};

// ──────────────────────────────────────────────────────────
// Co-located styles
// ──────────────────────────────────────────────────────────
const adminDashboardStyles = `
  .ad { display: flex; flex-direction: column; gap: 18px; }
  .ad__head { display: flex; justify-content: space-between; align-items: flex-end; }
  .ad__head h2 { font-size: 1.8rem; margin: 0; color: #1e1b4b; font-weight: 900; }
  .ad__date { font-size: 0.9rem; color: #8b7aa7; font-weight: 700; }

  /* Health columns */
  .ad__pulse { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .ad__col {
    padding: 18px 18px 20px; border-radius: 20px;
    background: white; border: 1px solid #f1f5f9;
    box-shadow: 0 10px 28px rgba(0,0,0,0.04);
    display: flex; flex-direction: column;
  }
  .ad__col-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px; margin-bottom: 14px; border-bottom: 2px solid; }
  .ad__col-head h4 { font-size: 0.92rem; margin: 0; display: flex; align-items: center; gap: 8px; font-weight: 900; }
  .ad__col-count { font-size: 1.5rem; font-weight: 900; line-height: 1; }
  .ad__col--risk .ad__col-head { border-color: #fecaca; }
  .ad__col--risk h4, .ad__col--risk .ad__col-count { color: #b91c1c; }
  .ad__col--watch .ad__col-head { border-color: #fed7aa; }
  .ad__col--watch h4, .ad__col--watch .ad__col-count { color: #b45309; }
  .ad__col--steady .ad__col-head { border-color: #bfdbfe; }
  .ad__col--steady h4, .ad__col--steady .ad__col-count { color: #1e40af; }
  .ad__col--thriving .ad__col-head { border-color: #bbf7d0; }
  .ad__col--thriving h4, .ad__col--thriving .ad__col-count { color: #15803d; }

  .ad__col-list { display: flex; flex-direction: column; gap: 10px; }
  .ad__col-more {
    background: transparent; border: 0; cursor: pointer;
    color: #8b5cf6; font-weight: 800; font-size: 0.78rem;
    padding: 6px 0; text-align: center;
  }
  .ad__col-empty { font-size: 0.82rem; color: #cbd5e1; font-weight: 700; padding: 8px 0; text-align: center; }

  /* Student card */
  .ad__card {
    width: 100%; text-align: left;
    padding: 12px 14px; border-radius: 14px;
    background: #fafafc; border: 1px solid #f1f5f9;
    cursor: pointer; transition: all 0.15s ease;
    font: inherit; color: inherit;
  }
  .ad__card:hover { background: white; border-color: #c4b5fd; transform: translateY(-1px); }
  .ad__card-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .ad__card-av {
    width: 32px; height: 32px; border-radius: 10px;
    background: linear-gradient(135deg, #f5d0fe, #8b5cf6); color: white;
    font-weight: 800; display: grid; place-items: center; font-size: 0.72rem;
    flex-shrink: 0;
  }
  .ad__card-meta-wrap { flex: 1; min-width: 0; }
  .ad__card-name { font-size: 0.88rem; font-weight: 800; color: #1e1b4b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ad__card-meta { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
  .ad__card-foot { display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; }
  .ad__signal { font-weight: 800; }
  .ad__signal--bad { color: #b91c1c; }
  .ad__signal--warn { color: #b45309; }
  .ad__signal--flat { color: #475569; }
  .ad__signal--good { color: #15803d; }
  .ad__card-meta-r { color: #6d6a85; font-weight: 700; }
  .ad__card-note {
    margin-top: 6px; padding-top: 6px;
    font-size: 0.72rem; color: #6d6a85; font-weight: 600; line-height: 1.4;
    border-top: 1px dashed #e2e8f0;
  }

  /* Two-column rows below */
  .ad__row { display: grid; grid-template-columns: 1.4fr 1fr; gap: 14px; }
  .ad__panel { padding: 20px 22px; border-radius: 20px; background: white; border: 1px solid #f1f5f9; box-shadow: 0 10px 28px rgba(0,0,0,0.04); }
  .ad__panel-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
  .ad__panel-head h4 { font-size: 1rem; font-weight: 900; color: #1e1b4b; margin: 0; }
  .ad__panel-link { background: 0; border: 0; color: #8b5cf6; font-weight: 800; font-size: 0.85rem; cursor: pointer; }
  .ad__empty { padding: 18px 4px; color: #94a3b8; font-size: 0.88rem; font-weight: 600; text-align: center; }

  /* Review rows */
  .ad__review-row {
    display: flex; align-items: center; gap: 12px;
    padding: 12px;
    background: #fffbeb; border: 1px solid #fde68a;
    border-radius: 14px; margin-bottom: 8px;
    width: 100%; text-align: left; cursor: pointer; font: inherit;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }
  .ad__review-row:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(180,83,9,0.1); }
  .ad__review-row:last-child { margin-bottom: 0; }
  .ad__review-av {
    width: 38px; height: 38px; border-radius: 12px;
    background: linear-gradient(135deg, #fcd34d, #f59e0b);
    color: white; font-weight: 800; display: grid; place-items: center;
    font-size: 0.8rem; flex-shrink: 0;
  }
  .ad__review-info { flex: 1; min-width: 0; }
  .ad__review-name { font-size: 0.88rem; font-weight: 800; color: #1e1b4b; }
  .ad__review-topic { font-size: 0.78rem; color: #b45309; font-weight: 700; }
  .ad__review-right { text-align: right; flex-shrink: 0; }
  .ad__review-ago { font-size: 0.72rem; color: #92400e; font-weight: 700; }
  .ad__grade-btn {
    display: inline-block; margin-top: 4px;
    padding: 5px 10px; border-radius: 999px;
    background: linear-gradient(135deg, #a78bfa, #8b5cf6); color: white;
    font-weight: 800; font-size: 0.72rem;
  }

  /* Activity timeline */
  .ad__tl { display: flex; flex-direction: column; }
  .ad__tl-row { display: flex; gap: 14px; padding: 12px 0; align-items: flex-start; }
  .ad__tl-row + .ad__tl-row { border-top: 1px solid #f1f5f9; }
  .ad__tl-ic { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; }
  .ad__tl-ic--done { background: #dcfce7; color: #15803d; }
  .ad__tl-ic--warn { background: #fef3c7; color: #b45309; }
  .ad__tl-ic--info { background: #ede9fe; color: #7c3aed; }
  .ad__tl-ic--error { background: #fee2e2; color: #b91c1c; }
  .ad__tl-main { flex: 1; min-width: 0; }
  .ad__tl-main strong { display: block; color: #1e1b4b; font-weight: 800; font-size: 0.92rem; }
  .ad__tl-main p { margin: 3px 0 0; color: #6d6a85; font-size: 0.85rem; line-height: 1.4; }
  .ad__tl-when { color: #94a3b8; font-size: 0.78rem; font-weight: 800; flex-shrink: 0; padding-top: 4px; }

  /* Overview KPIs */
  .ad__kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .ad__kpi { padding: 14px 16px; border-radius: 16px; background: #faf8ff; border: 1px solid #ede9fe; }
  .ad__kpi-l { font-size: 0.66rem; color: #6d6a85; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; }
  .ad__kpi-v { font-size: 1.7rem; font-weight: 900; color: #1e1b4b; line-height: 1; margin-top: 6px; }
  .ad__kpi-d { font-size: 0.7rem; color: #15803d; font-weight: 800; margin-top: 4px; }
  .ad__kpi-d.is-muted { color: #94a3b8; }

  /* System status */
  .ad__sys-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; font-size: 0.9rem; }
  .ad__sys-row + .ad__sys-row { border-top: 1px solid #f1f5f9; }
  .ad__sys-l { color: #6d6a85; font-weight: 600; display: inline-flex; align-items: center; }
  .ad__sys-v { font-weight: 800; color: #1e1b4b; }
  .ad__sys-active { font-weight: 800; font-size: 0.85rem; color: #15803d; }
  .ad__dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; margin-right: 10px; }
  .ad__dot--green { background: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.15); }

  .ad__send {
    display: flex; align-items: center; gap: 12px;
    margin-top: 12px; padding: 12px 14px;
    border-radius: 14px;
    background: #faf8ff; border: 1px solid #ede9fe;
    cursor: pointer; transition: background 0.15s ease, transform 0.15s ease;
    width: 100%; font: inherit; text-align: left;
  }
  .ad__send:hover:not(:disabled) { background: #f3eeff; transform: translateY(-1px); }
  .ad__send:disabled { opacity: 0.55; cursor: not-allowed; }
  .ad__send-ic {
    width: 36px; height: 36px; border-radius: 12px;
    background: white; color: #7c3aed;
    display: grid; place-items: center;
    box-shadow: 0 4px 12px rgba(124,58,237,0.1);
    flex-shrink: 0;
  }
  .ad__send-info { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .ad__send-info strong { color: #1e1b4b; font-weight: 800; font-size: 0.92rem; }
  .ad__send-info span { font-size: 0.78rem; color: #6d6a85; margin-top: 2px; }
  .ad__send-pending { color: #b45309; font-weight: 800; font-style: normal; }
  .ad__send-arr { color: #94a3b8; flex-shrink: 0; }

  /* Responsive */
  @media (max-width: 1100px) {
    .ad__pulse { grid-template-columns: 1fr 1fr; }
    .ad__kpi-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 720px) {
    .ad__row { grid-template-columns: 1fr; }
    .ad__pulse { grid-template-columns: 1fr; }
    .ad__head { flex-direction: column; align-items: flex-start; gap: 6px; }
  }
`;

export default AdminDashboard;
