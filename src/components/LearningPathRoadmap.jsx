import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Flag, Hourglass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { scanTopicProgress } from '../utils/topicProgressScan';
import { spreadOverTerms, teachingFraction, todayUtc, yearStatus } from '../utils/schoolCalendar';

/**
 * LearningPathRoadmap — Year 1 → Year 12 school-year timeline.
 *
 * Each year level is a bar laid over the calendar (months on the axis, Terms
 * 1–4 and the holidays as a linear band on top). A year's chapters are spread
 * evenly across the teaching weeks, so the bar reads as a suggested pace.
 * Year 11/12 add one row per course the student takes (Advanced is the base).
 */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const COURSE_ORDER = ['Advanced', 'Standard', 'Extension 1', 'Extension 2'];
const COURSE_SHORT = { Advanced: 'Adv', Standard: 'Std', 'Extension 1': 'Ext 1', 'Extension 2': 'Ext 2' };
const COURSE_HUE = { Advanced: '#7c3aed', Standard: '#059669', 'Extension 1': '#0284c7', 'Extension 2': '#d97706' };
const DAY = 86400000;
const LABEL_W = 92;
const MIN_W = 880;

const STATE_STYLE = {
  done:    { bg: '#10b981', fg: '#fff' },
  current: { bg: '#7c3aed', fg: '#fff' },
  planned: { bg: '#c4b5fd', fg: '#4c1d95' },
  none:    { bg: '#e0e7ff', fg: '#6366f1' },
};

const yearNum = (v) => parseInt(String(v || '').replace(/\D/g, ''), 10) || 0;
const fmt = (ts) => new Date(ts).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', timeZone: 'UTC' });

const LearningPathRoadmap = ({ profile }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState({});
  const now = useMemo(() => new Date(), []);
  const year = now.getFullYear();
  const today = todayUtc(now);

  useEffect(() => {
    if (!user?.uid) return undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- same localStorage sync as LearningPath
    setProgress(scanTopicProgress(user.uid));
    const onUpdate = () => setProgress(scanTopicProgress(user.uid));
    window.addEventListener('sapere:progress-updated', onUpdate);
    return () => window.removeEventListener('sapere:progress-updated', onUpdate);
  }, [user?.uid]);

  const rawYears = profile?.assignedYear;
  const rawCourses = profile?.assignedCourse;
  const myYears = useMemo(
    () => (Array.isArray(rawYears) ? rawYears : [rawYears]).map(yearNum).filter(Boolean),
    [rawYears],
  );
  const myCourses = useMemo(
    () => (Array.isArray(rawCourses) ? rawCourses : [rawCourses]).filter((c) => COURSE_ORDER.includes(c)),
    [rawCourses],
  );

  // Advanced is always the base row for Year 11/12; the others appear only when assigned.
  const seniorCourses = useMemo(() => COURSE_ORDER.filter((c) => c === 'Advanced' || myCourses.includes(c)), [myCourses]);

  const rows = useMemo(() => {
    const out = [];
    for (let y = 1; y <= 12; y++) {
      const data = CURRICULUM_DATA[`Year ${y}`];
      if (data && !Array.isArray(data)) {
        seniorCourses.filter((c) => data[c]).forEach((c) => out.push({ key: `${y}|${c}`, y, course: c, chapters: data[c] }));
      } else {
        out.push({ key: String(y), y, course: null, chapters: Array.isArray(data) ? data : [] });
      }
    }
    return out;
  }, [seniorCourses]);

  // Chapter state mirrors LearningPath: done / current / planned for the student's own tracks.
  const chapterState = useMemo(() => {
    const assigned = profile?.assignedChapters || [];
    const completed = profile?.completedChapters || [];
    const noAssignments = assigned.length === 0 && completed.length === 0;
    return (row, chapter, idx) => {
      const mine = myYears.includes(row.y)
        && (!row.course || (myCourses.length ? myCourses.includes(row.course) : row.course === 'Advanced'));
      if (!mine) return 'none';
      const topics = Array.isArray(chapter.topics) ? chapter.topics : [];
      const map = progress[chapter.id] || {};
      const done = completed.includes(chapter.id) || (topics.length > 0 && topics.every((t) => (map[t.id] || 0) === 100));
      if (done) return 'done';
      if (assigned.includes(chapter.id) || (noAssignments && idx === 0)) return 'current';
      return 'planned';
    };
  }, [profile?.assignedChapters, profile?.completedChapters, myYears, myCourses, progress]);

  const status = useMemo(() => yearStatus(year, today), [year, today]);
  const segs = status.segs;
  const t0 = Date.UTC(year, 0, 1);
  const span = Date.UTC(year + 1, 0, 1) - t0;
  const pos = (ts) => ((ts - t0) / span) * 100;
  const todayPct = pos(today + DAY / 2);

  const bars = useMemo(() => rows.map((row) => {
    const n = row.chapters.length;
    const pieces = spreadOverTerms(year, n);
    const states = row.chapters.map((c, i) => chapterState(row, c, i));
    return { row, states, pieces };
  }), [rows, year, chapterState]);

  // ── Current-year summary (primary assigned year) ──────────────────────
  const primary = useMemo(() => {
    const y = myYears[0];
    if (!y) return null;
    const bar = bars.find((b) => b.row.y === y && (!b.row.course || b.row.course === (myCourses[0] || 'Advanced'))) || bars.find((b) => b.row.y === y);
    if (!bar || bar.states.length === 0) return null;
    const total = bar.states.length;
    const done = bar.states.filter((s) => s === 'done').length;
    const expected = Math.min(total, Math.floor(teachingFraction(year, today) * total + 0.5));
    return { y, row: bar.row, total, done, expected, diff: done - expected };
  }, [bars, myYears, myCourses, year, today]);

  const paceText = !primary ? '' : primary.diff === 0 ? 'Right on pace' : primary.diff > 0 ? `${primary.diff} chapter${primary.diff === 1 ? '' : 's'} ahead of pace` : `${-primary.diff} chapter${primary.diff === -1 ? '' : 's'} behind pace`;

  const card = (lead) => ({
    padding: '18px 20px', borderRadius: '20px', position: 'relative', overflow: 'hidden',
    background: lead ? 'linear-gradient(135deg, #1e1b4b, #312e81)' : 'rgba(255,255,255,0.9)',
    border: lead ? 'none' : '1px solid rgba(167,139,250,0.18)',
    boxShadow: lead ? '0 18px 40px rgba(30,27,75,0.25)' : '0 8px 24px rgba(91,33,182,0.05)',
    color: lead ? '#fff' : '#1e1b4b',
  });
  const label = (text, lead) => (
    <div style={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: lead ? 'rgba(255,255,255,0.7)' : '#8b7aa7' }}>{text}</div>
  );
  const big = (text) => (
    <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: 800, lineHeight: 1.05, marginTop: '4px' }}>{text}</div>
  );
  const sub = (text, color) => (
    <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '6px', color: color || '#6d6a85' }}>{text}</div>
  );

  const nextBreak = status.next;
  const inTerm = status.current?.type === 'term';

  return (
    <div>
      {/* ── Current year progress ───────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '22px' }}>
        <div style={card(true)}>
          <CalendarDays size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(255,255,255,0.45)' }} />
          {label(`School year ${year}`, true)}
          {big(`${status.pct}%`)}
          {sub(inTerm ? `${status.current.label} · Week ${status.week}` : (status.current?.label || '—'), 'rgba(255,255,255,0.85)')}
          <div style={{ height: '6px', borderRadius: '999px', background: 'rgba(255,255,255,0.15)', marginTop: '12px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${status.pct}%`, background: 'linear-gradient(90deg, #c4b5fd, #f5d0fe)', borderRadius: '999px' }} />
          </div>
        </div>
        <div style={card(false)}>
          <Flag size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(139,92,246,0.35)' }} />
          {label(primary ? `Year ${primary.y}${primary.row.course ? ` · ${primary.row.course}` : ''} pace` : 'Your pace')}
          {primary ? (
            <>
              {big(<>{primary.done}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}> / {primary.total} chapters</span></>)}
              <div style={{ fontSize: '0.8rem', fontWeight: 800, marginTop: '6px', color: primary.diff >= 0 ? '#047857' : '#b45309' }}>{paceText}</div>
            </>
          ) : sub('Ask your teacher to assign a year to see your pace.')}
        </div>
        <div style={card(false)}>
          <Hourglass size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(139,92,246,0.35)' }} />
          {label(inTerm ? 'Until next break' : 'Until next term')}
          {nextBreak ? (
            <>
              {big(<>{status.daysToNext}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}> days</span></>)}
              {sub(`${nextBreak.label} starts ${fmt(nextBreak.start)}`)}
            </>
          ) : sub('Last term of the year is over — enjoy the break!')}
        </div>
      </div>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <div style={{ borderRadius: '24px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,139,250,0.18)', boxShadow: '0 22px 50px rgba(91,33,182,0.06)', padding: '20px 0 18px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', padding: '0 24px', marginBottom: '14px' }}>
          <div>
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', color: '#1e1b4b', margin: 0 }}>Year 1 → Year 12 roadmap</h3>
            <div style={{ fontSize: '0.84rem', color: '#6d6a85', fontWeight: 600, marginTop: '2px' }}>
              Each chapter is spaced evenly across the {year} teaching weeks. Holidays are left empty.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '0.74rem', fontWeight: 800, color: '#64748b' }}>
            {[['done', 'Done'], ['current', 'In progress'], ['planned', 'Planned'], ['none', 'Other years']].map(([k, t]) => (
              <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: STATE_STYLE[k].bg }} />{t}
              </span>
            ))}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '2px', height: '12px', background: '#ef4444' }} />Today
            </span>
          </div>
        </div>

        <div style={{ overflowX: 'auto', padding: '0 24px' }}>
          <div style={{ minWidth: LABEL_W + MIN_W }}>
            {/* Terms + holidays (linear band) */}
            <TimelineRow
              label={<span style={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.1em', color: '#8b7aa7' }}>TERMS</span>}
              todayPct={todayPct}
              height={30}
            >
              {segs.map((s) => (
                <div
                  key={s.id}
                  title={`${s.label} · ${fmt(s.start)} – ${fmt(s.end - DAY)}`}
                  style={{
                    position: 'absolute', top: 0, bottom: 0, left: `${pos(s.start)}%`, width: `${pos(s.end) - pos(s.start)}%`,
                    display: 'grid', placeItems: 'center', overflow: 'hidden', boxSizing: 'border-box',
                    background: s.type === 'term' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'repeating-linear-gradient(135deg, #f1f5f9, #f1f5f9 5px, #e8edf5 5px, #e8edf5 10px)',
                    color: s.type === 'term' ? '#fff' : '#94a3b8',
                    borderLeft: '2px solid #fff',
                    fontSize: s.type === 'term' ? '0.78rem' : '0.62rem', fontWeight: 900, letterSpacing: '0.04em', whiteSpace: 'nowrap',
                  }}
                >
                  {s.type === 'term' ? s.label : (pos(s.end) - pos(s.start) > 7 ? 'Holiday' : '')}
                </div>
              ))}
            </TimelineRow>

            {/* Months */}
            <TimelineRow
              label={null}
              todayPct={todayPct}
              height={22}
            >
              {MONTHS.map((m, i) => {
                const a = Date.UTC(year, i, 1);
                const b = Date.UTC(year, i + 1, 1);
                return (
                  <div key={m} style={{
                    position: 'absolute', top: 0, bottom: 0, left: `${pos(a)}%`, width: `${pos(b) - pos(a)}%`,
                    borderLeft: '1px solid #eef2ff', paddingLeft: '6px', boxSizing: 'border-box',
                    fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', lineHeight: '22px',
                  }}>{m}</div>
                );
              })}
            </TimelineRow>

            {/* Year rows */}
            {bars.map(({ row, states, pieces }) => {
              const mine = myYears.includes(row.y);
              const hue = row.course ? COURSE_HUE[row.course] : '#4f46e5';
              const firstOfYear = bars.find((b) => b.row.y === row.y).row === row;
              return (
                <TimelineRow
                  key={row.key}
                  label={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                      <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, fontSize: '0.92rem', color: mine ? hue : '#1e1b4b' }}>
                        {firstOfYear || !row.course ? `Y${row.y}` : ''}
                      </span>
                      {row.course && (
                        <span style={{ fontSize: '0.64rem', fontWeight: 900, padding: '2px 7px', borderRadius: '999px', background: `${hue}18`, color: hue }}>
                          {COURSE_SHORT[row.course]}
                        </span>
                      )}
                      {mine && !row.course && <span title="Your year" style={{ width: '6px', height: '6px', borderRadius: '50%', background: hue }} />}
                    </div>
                  }
                  todayPct={todayPct}
                  height={34}
                  grid
                  monthLines={MONTHS.map((_, i) => pos(Date.UTC(year, i, 1)))}
                  stripe={mine}
                >
                  {row.chapters.length === 0 && (
                    <div style={{ position: 'absolute', left: '8px', top: 0, bottom: 0, display: 'flex', alignItems: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#cbd5e1' }}>
                      Chapters coming soon
                    </div>
                  )}
                  {row.chapters.map((c, i) => pieces[i].map((p, k) => {
                    const st = STATE_STYLE[states[i]];
                    const w = pos(p.end) - pos(p.start);
                    return (
                      <div
                        key={`${c.id}-${k}`}
                        title={`Ch ${i + 1} · ${c.title}\n${fmt(p.start)} – ${fmt(p.end - DAY)}`}
                        style={{
                          position: 'absolute', top: '5px', bottom: '5px', left: `${pos(p.start)}%`, width: `${w}%`,
                          background: st.bg, color: st.fg, borderRadius: '5px', boxSizing: 'border-box',
                          borderRight: '1.5px solid #fff', overflow: 'hidden',
                          display: 'grid', placeItems: 'center', fontSize: '0.62rem', fontWeight: 900,
                          boxShadow: states[i] === 'current' ? '0 0 0 2px rgba(124,58,237,0.25)' : 'none',
                        }}
                      >
                        {k === 0 && w > 1.6 ? i + 1 : ''}
                      </div>
                    );
                  }))}
                </TimelineRow>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/** One timeline lane: sticky label column + a relatively-positioned track with the today line. */
const TimelineRow = ({ label, children, todayPct, height, grid = false, monthLines = [], stripe = false }) => (
  <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: grid ? '3px' : '4px' }}>
    <div style={{
      width: LABEL_W, flexShrink: 0, display: 'flex', alignItems: 'center', position: 'sticky', left: 0, zIndex: 3,
      background: '#fff', paddingRight: '6px',
    }}>
      {label}
    </div>
    <div style={{
      position: 'relative', flex: 1, height, minWidth: MIN_W, borderRadius: grid ? '8px' : 0,
      background: grid ? (stripe ? '#faf8ff' : '#fbfcff') : 'transparent',
    }}>
      {grid && monthLines.map((l, i) => (
        <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${l}%`, width: '1px', background: '#f1f0fe' }} />
      ))}
      {children}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${todayPct}%`, width: '2px', background: '#ef4444', opacity: 0.75, zIndex: 2, pointerEvents: 'none' }} />
    </div>
  </div>
);

export default LearningPathRoadmap;
