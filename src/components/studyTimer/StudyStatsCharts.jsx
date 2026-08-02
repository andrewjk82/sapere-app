import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { localCache } from '../../services/localCacheService';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { nowMs } from '../../utils/timeUtils';

const RANGE_DAYS = { Daily: 1, Weekly: 7, Monthly: 30 };
const BAR_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e', '#0ea5e9', '#ef4444'];
// "Today" keeps changing all day as the stopwatch flushes — a same-day cache
// can otherwise go stale for the rest of the day (only bumped in-session by
// refreshEpoch, which resets on every reload/new tab). Short TTL instead.
const CACHE_TTL_MS = 2 * 60 * 1000;

const dateStrFor = (offsetDaysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDaysAgo);
  return d.toLocaleDateString('en-CA');
};

const shortLabelFor = (offsetDaysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDaysAgo);
  return offsetDaysAgo === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' });
};

/**
 * Daily / Weekly / Monthly study-time charts, computed entirely from the
 * `daily_stats/{date}` docs the stopwatch already writes to (see
 * studyTimeService.js) — bounded point-reads by doc id, cached per calendar
 * day/range, no separate stats collection and no extra writes.
 */
const StudyStatsCharts = ({ uid, refreshEpoch = 0, subjectColors = {} }) => {
  const [range, setRange] = useState('Weekly');
  const [days, setDays] = useState([]); // [{ dateStr, label, totalSec, bySubject }]
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uid) return undefined;
    let cancelled = false;

    (async () => {
      const count = RANGE_DAYS[range];
      const today = dateStrFor(0);
      const cacheKey = `studytimer:stats-v1:${uid}:${range}`;
      const allowCache = refreshEpoch === 0;
      const cached = allowCache ? localCache.get(cacheKey) : null;
      const cacheFresh = cached && (nowMs() - (Number(cached.cachedAt) || 0)) < CACHE_TTL_MS;
      if (cacheFresh && cached?.date === today && Array.isArray(cached.days) && cached.days.length === count) {
        if (!cancelled) setDays(cached.days);
        return;
      }

      if (!cancelled) setLoading(true);
      const offsets = Array.from({ length: count }, (_, i) => count - 1 - i); // oldest → newest
      const snaps = await Promise.all(
        offsets.map((offset) => getDoc(doc(db, 'users', uid, 'daily_stats', dateStrFor(offset)))),
      );
      if (cancelled) return;
      const nextDays = offsets.map((offset, i) => {
        const snap = snaps[i];
        const data = snap.exists() ? snap.data() : {};
        return {
          dateStr: dateStrFor(offset),
          label: shortLabelFor(offset),
          totalSec: Number(data.studyTimeTotalSec) || 0,
          bySubject: data.studyTimeBySubject && typeof data.studyTimeBySubject === 'object' ? data.studyTimeBySubject : {},
        };
      });
      setDays(nextDays);
      setLoading(false);
      localCache.set(cacheKey, { date: today, cachedAt: nowMs(), days: nextDays });
    })().catch((e) => { console.warn('[studytime] stats fetch failed:', e?.code || e); if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [uid, range, refreshEpoch]);

  const subjectTotals = useMemo(() => {
    const totals = {};
    days.forEach((d) => {
      Object.entries(d.bySubject).forEach(([subj, sec]) => {
        totals[subj] = (totals[subj] || 0) + (Number(sec) || 0);
      });
    });
    return Object.entries(totals)
      .map(([subject, sec]) => ({ subject, sec }))
      .sort((a, b) => b.sec - a.sec);
  }, [days]);

  const grandTotalSec = useMemo(() => days.reduce((s, d) => s + d.totalSec, 0), [days]);

  return (
    <div style={{ borderRadius: 32, background: '#fff', border: '1px solid #eceaf6', padding: '24px 26px', boxShadow: '0 12px 30px rgba(99,102,241,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8' }}>Study Stats</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e1b4b' }}>{formatHours(grandTotalSec)} total</div>
        </div>
        <div style={{ display: 'flex', gap: 6, background: '#f8fafc', borderRadius: 999, padding: 4 }}>
          {Object.keys(RANGE_DAYS).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              style={{
                padding: '7px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
                background: r === range ? '#4338ca' : 'transparent',
                color: r === range ? '#fff' : '#64748b',
                fontWeight: 800, fontSize: '0.76rem', transition: 'all .2s',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {loading && days.length === 0 ? (
        <div style={{ height: 160, display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 700, fontSize: '0.85rem' }}>Loading…</div>
      ) : (
        <>
          <DailyBarChart days={days} subjectOrder={subjectTotals.map((t) => t.subject)} subjectColors={subjectColors} />
          <SubjectBreakdown subjectTotals={subjectTotals} grandTotalSec={grandTotalSec} subjectColors={subjectColors} />
        </>
      )}
    </div>
  );
};

const formatHours = (sec) => {
  const h = sec / 3600;
  if (h < 1) return `${Math.round(sec / 60)}m`;
  return `${h.toFixed(1)}h`;
};

const CHART_HEIGHT = 158; // bar area + top total-label row + bottom day-label row
const BAR_AREA_HEIGHT = CHART_HEIGHT - 40;

// Stacked bar per day — one colored segment per subject studied that day,
// using the same colors as the stopwatch's chips/ring (subjectColors),
// stacked in a consistent order (biggest subject overall at the bottom).
const DailyBarChart = ({ days, subjectOrder, subjectColors }) => {
  const maxSec = Math.max(60, ...days.map((d) => d.totalSec));
  const colorFor = (subject, i) => subjectColors[subject] || BAR_COLORS[i % BAR_COLORS.length] || DEFAULT_SUBJECT_COLOR;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: days.length > 10 ? 4 : 10, height: CHART_HEIGHT, marginBottom: 20, overflowX: days.length > 14 ? 'auto' : 'visible' }}>
      {days.map((d, i) => {
        const segments = subjectOrder
          .map((subj) => ({ subject: subj, sec: Number(d.bySubject[subj]) || 0 }))
          .filter((seg) => seg.sec > 0);
        const heightPct = Math.max(segments.length > 0 ? 3 : 0, (d.totalSec / maxSec) * 100);
        const barPx = BAR_AREA_HEIGHT * (heightPct / 100);

        return (
          <div key={d.dateStr} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: days.length > 14 ? '0 0 18px' : 1, minWidth: days.length > 14 ? 18 : 0 }}>
            <span style={{ fontSize: '0.66rem', fontWeight: 900, color: d.totalSec > 0 ? '#1e1b4b' : '#cbd5e1' }}>
              {formatHours(d.totalSec)}
            </span>
            <div style={{ position: 'relative', width: '100%', height: BAR_AREA_HEIGHT, display: 'flex', alignItems: 'flex-end' }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${heightPct}%` }}
                transition={{ duration: 0.5, delay: i * 0.02, ease: 'easeOut' }}
                title={`${d.label}: ${formatHours(d.totalSec)}`}
                style={{
                  width: '100%', borderRadius: 8, minHeight: segments.length > 0 ? 3 : 0, overflow: 'hidden',
                  display: 'flex', flexDirection: 'column-reverse',
                  background: segments.length === 0 ? '#f1f0f8' : undefined,
                }}
              >
                {segments.map((seg, si) => {
                  const segPct = d.totalSec > 0 ? (seg.sec / d.totalSec) * 100 : 0;
                  const segPx = barPx * (segPct / 100);
                  return (
                    <div
                      key={seg.subject}
                      title={`${normalizeSubjectLabel(seg.subject)}: ${formatHours(seg.sec)}`}
                      style={{
                        height: `${segPct}%`, width: '100%', background: colorFor(seg.subject, si),
                        borderTop: si > 0 ? '1px solid rgba(255,255,255,0.5)' : 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      {segPx >= 16 && (
                        <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}>
                          {formatHours(seg.sec)}
                        </span>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>
            {days.length <= 14 && (
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#94a3b8' }}>{d.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

const SubjectBreakdown = ({ subjectTotals, grandTotalSec, subjectColors }) => {
  if (subjectTotals.length === 0) {
    return <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, margin: 0 }}>No study time logged for this range yet — start the stopwatch above!</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {subjectTotals.map(({ subject, sec }, i) => {
        const pct = grandTotalSec > 0 ? (sec / grandTotalSec) * 100 : 0;
        const color = subjectColors[subject] || BAR_COLORS[i % BAR_COLORS.length];
        return (
          <div key={subject}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 700, color: '#475569', marginBottom: 4 }}>
              <span>{normalizeSubjectLabel(subject)}</span>
              <span>{formatHours(sec)}</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: '#f1f0f8', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                style={{ height: '100%', borderRadius: 999, background: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudyStatsCharts;
