import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { localCache } from '../../services/localCacheService';
import { fetchAllNotes } from '../../services/studyNotesService';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { nowMs } from '../../utils/timeUtils';

const MONTH_DAYS = 30;
const WEEK_DAYS = 7;
const CACHE_TTL_MS = 2 * 60 * 1000;

const dateStrFor = (offsetDaysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDaysAgo);
  return d.toLocaleDateString('en-CA');
};

const formatHours = (sec) => {
  const m = Math.round((sec || 0) / 60);
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
};

const formatDuration = (sec) => {
  const s = Math.max(0, Math.floor(sec || 0));
  if (s < 60) return '<1 min';
  const m = Math.round(s / 60);
  return m < 60 ? `${m} min` : `${Math.floor(m / 60)}h ${m % 60}m`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(`${dateStr}T00:00:00`);
  return Number.isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
};

/**
 * Last-30-days study time from the daily_stats docs the stopwatch already
 * writes. Shares StudyStatsCharts' "Monthly" localCache entry, so opening
 * this page right after viewing the monthly chart costs zero reads.
 */
const useMonthlyStudyDays = (uid) => {
  const [days, setDays] = useState(null);
  useEffect(() => {
    if (!uid) return undefined;
    let cancelled = false;
    (async () => {
      const today = dateStrFor(0);
      const cacheKey = `studytimer:stats-v1:${uid}:Monthly`;
      const cached = localCache.get(cacheKey);
      const fresh = cached && (nowMs() - (Number(cached.cachedAt) || 0)) < CACHE_TTL_MS;
      if (fresh && cached.date === today && Array.isArray(cached.days) && cached.days.length === MONTH_DAYS) {
        if (!cancelled) setDays(cached.days);
        return;
      }
      const offsets = Array.from({ length: MONTH_DAYS }, (_, i) => MONTH_DAYS - 1 - i);
      const snaps = await Promise.all(offsets.map((o) => getDoc(doc(db, 'users', uid, 'daily_stats', dateStrFor(o)))));
      if (cancelled) return;
      const next = offsets.map((o, i) => {
        const data = snaps[i].exists() ? snaps[i].data() : {};
        return {
          dateStr: dateStrFor(o),
          label: o === 0 ? 'Today' : new Date(Date.now() - o * 86400000).toLocaleDateString('en-US', { weekday: 'short' }),
          totalSec: Number(data.studyTimeTotalSec) || 0,
          bySubject: data.studyTimeBySubject && typeof data.studyTimeBySubject === 'object' ? data.studyTimeBySubject : {},
          byHour: data.studyTimeByHour && typeof data.studyTimeByHour === 'object' ? data.studyTimeByHour : {},
        };
      });
      setDays(next);
      localCache.set(cacheKey, { date: today, cachedAt: nowMs(), days: next });
    })().catch((e) => { console.warn('[studytime] summary fetch failed:', e?.code || e); if (!cancelled) setDays([]); });
    return () => { cancelled = true; };
  }, [uid]);
  return days;
};

const StudyNotesPage = ({ uid, subjects = [], subjectColors = {}, initialSubject = 'all', refreshKey = 0, onBack }) => {
  const [filter, setFilter] = useState(initialSubject);
  const [notes, setNotes] = useState(null);
  const [error, setError] = useState(null);
  const days = useMonthlyStudyDays(uid);
  const colorFor = (s) => subjectColors[s] || DEFAULT_SUBJECT_COLOR;

  useEffect(() => {
    if (!uid) return undefined;
    let cancelled = false;
    fetchAllNotes(uid)
      .then((list) => { if (!cancelled) { setNotes(list); setError(null); } })
      .catch((e) => {
        console.warn('[studytime] notes fetch failed:', e?.code || e);
        if (!cancelled) { setNotes([]); setError(e?.code || 'unknown'); }
      });
    return () => { cancelled = true; };
  }, [uid, refreshKey]);

  const summary = useMemo(() => {
    if (!days) return null;
    const sumOf = (list) => list.reduce((acc, d) => {
      const sec = filter === 'all' ? d.totalSec : Number(d.bySubject?.[filter]) || 0;
      return acc + sec;
    }, 0);
    const week = days.slice(-WEEK_DAYS);
    return {
      weekSec: sumOf(week),
      monthSec: sumOf(days),
      week: week.map((d) => ({ label: d.label, sec: filter === 'all' ? d.totalSec : Number(d.bySubject?.[filter]) || 0 })),
    };
  }, [days, filter]);

  // Subjects that appear in either the student's list or their saved notes.
  const tabs = useMemo(() => {
    const fromNotes = (notes || []).map((n) => n.subject).filter(Boolean);
    return [...new Set([...subjects, ...fromNotes])];
  }, [subjects, notes]);

  const visible = (notes || []).filter((n) => filter === 'all' || n.subject === filter);
  const accent = filter === 'all' ? '#6366f1' : colorFor(filter);
  const weekMax = Math.max(1, ...(summary?.week || []).map((d) => d.sec));

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button type="button" onClick={onBack} aria-label="Back to Study Planner"
          style={{ width: 40, height: 40, borderRadius: 14, border: '1px solid #eceaf6', background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#1e1b4b' }}>
          <ArrowLeft size={18} />
        </button>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>Study Notes</h2>
      </div>

      {/* Subject filter */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
        {['all', ...tabs].map((s) => {
          const selected = s === filter;
          const c = s === 'all' ? '#6366f1' : colorFor(s);
          return (
            <button key={s} type="button" onClick={() => setFilter(s)}
              style={{
                flexShrink: 0, padding: '8px 16px', borderRadius: 999, cursor: 'pointer', fontWeight: 800, fontSize: '0.8rem',
                border: `1px solid ${selected ? c : `${c}33`}`, background: selected ? c : `${c}12`, color: selected ? '#fff' : c,
              }}>
              {s === 'all' ? 'All subjects' : normalizeSubjectLabel(s)}
            </button>
          );
        })}
      </div>

      {/* Summary */}
      <div style={{ ...card, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, alignItems: 'end' }}>
        <SummaryStat label="This week" value={summary ? formatHours(summary.weekSec) : '—'} color={accent} />
        <SummaryStat label="Last 30 days" value={summary ? formatHours(summary.monthSec) : '—'} color={accent} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64, minWidth: 160 }}>
          {(summary?.week || []).map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
              <div title={formatHours(d.sec)} style={{ width: '100%', maxWidth: 18, borderRadius: 6, background: d.sec ? accent : '#eef0f6', height: `${Math.max(6, (d.sec / weekMax) * 44)}px` }} />
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#94a3b8' }}>{d.label.slice(0, 3)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sessions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {notes === null && <p style={muted}>Loading…</p>}
        {notes !== null && visible.length === 0 && (
          <p style={muted}>{error ? `Could not load notes (${error}).` : 'No notes yet. Start the timer to write your first study plan.'}</p>
        )}
        {visible.map((n) => {
          const items = Array.isArray(n.items) ? n.items : [];
          const done = items.filter((it) => it.done).length;
          const c = colorFor(n.subject);
          return (
            <div key={n.id} style={{ ...card, padding: '16px 18px', borderLeft: `4px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '0.9rem' }}>{formatDate(n.date)}</span>
                {filter === 'all' && <span style={{ fontWeight: 800, color: c, fontSize: '0.75rem' }}>{normalizeSubjectLabel(n.subject)}</span>}
                <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem' }}>{formatDuration(n.durationSec)}</span>
                <span style={{ marginLeft: 'auto', color: c, fontWeight: 800, fontSize: '0.75rem' }}>{done}/{items.length} done</span>
              </div>
              {items.map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 6, flexShrink: 0, display: 'grid', placeItems: 'center',
                    border: it.done ? `2px solid ${c}` : '2px solid #cbd5e1', background: it.done ? c : '#fff', color: '#fff',
                  }}>
                    {it.done && <Check size={12} strokeWidth={4} />}
                  </span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: it.done ? '#94a3b8' : '#334155', textDecoration: it.done ? 'line-through' : 'none' }}>
                    {it.text}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const SummaryStat = ({ label, value, color }) => (
  <div>
    <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>{label}</div>
    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', fontWeight: 900, color, marginTop: 4 }}>{value}</div>
  </div>
);

const card = { borderRadius: 24, padding: '20px 22px', background: '#fff', border: '1px solid #eceaf6', boxShadow: '0 12px 30px rgba(99,102,241,0.06)' };
const muted = { margin: 0, color: '#94a3b8', fontWeight: 600, fontSize: '0.88rem' };

export default StudyNotesPage;
