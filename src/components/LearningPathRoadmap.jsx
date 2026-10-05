import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Flag, Hourglass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { scanTopicProgress } from '../utils/topicProgressScan';
import { buildStudentTracks } from '../utils/studentTracks';
import { forecastTrack } from '../utils/pathForecast';
import { termPieces, todayUtc, yearStatus } from '../utils/schoolCalendar';

/**
 * LearningPathRoadmap — one lane per track the student is actually working on
 * (a Year 9 may be on Year 12 Extension 1, so lanes follow assignments, not school grade).
 *
 * Each lane is a chain of chapters laid over the calendar year (T1–T4 band on top):
 * finished chapters end where they were completed, the rest are forecast from the
 * student's own recent pace. Anything that runs past December is summarised at the lane end.
 */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const COURSE_HUE = { Advanced: '#7c3aed', Standard: '#059669', 'Extension 1': '#0284c7', 'Extension 2': '#d97706' };
const DAY = 86400000;
const LABEL_W = 132;
const MIN_W = 900;

const STATE_STYLE = {
  done:    { bg: 'linear-gradient(90deg, #0d9488, #14b8a6)', fg: '#fff' },
  current: { bg: 'linear-gradient(90deg, #6d28d9, #8b5cf6)', fg: '#fff' },
  planned: { bg: 'linear-gradient(90deg, #c4b5fd, #ddd6fe)', fg: '#4c1d95' },
};

const fmt = (ts) => new Date(ts).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', timeZone: 'UTC' });
const fmtLong = (ts) => new Date(ts).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const trackName = (t) => `${t.year.replace('Year ', 'Year ')}${t.course ? ` · ${t.course}` : ''}`;

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

  const status = useMemo(() => yearStatus(year, today), [year, today]);
  const t0 = Date.UTC(year, 0, 1);
  const yEnd = Date.UTC(year + 1, 0, 1);
  const pos = (ts) => ((ts - t0) / (yEnd - t0)) * 100;
  const todayPct = pos(today + DAY / 2);

  const tracks = useMemo(() => buildStudentTracks(profile), [profile]);

  const lanes = useMemo(() => {
    const assigned = profile?.assignedChapters || [];
    const completed = profile?.completedChapters || [];
    const noAssignments = assigned.length === 0 && completed.length === 0;
    const dates = profile?.chapterDates || {};
    return tracks.map((track) => {
      const chapters = track.chapters.map((c, idx) => {
        const topics = Array.isArray(c.topics) ? c.topics : [];
        const map = progress[c.id] || {};
        const teacherDone = completed.includes(c.id);
        const allDone = topics.length > 0 && topics.every((t) => (map[t.id] || 0) === 100);
        const isDone = teacherDone || allDone;
        const pct = teacherDone ? 100 : topics.length ? Math.round(topics.reduce((s, t) => s + (map[t.id] || 0), 0) / topics.length) : 0;
        return {
          id: c.id, title: c.title, idx, pct, done: isDone,
          current: !isDone && (assigned.includes(c.id) || (noAssignments && idx === 0)),
          completedAt: dates[c.id]?.completedAt || null,
          assignedAt: dates[c.id]?.assignedAt || null,
        };
      });
      const f = forecastTrack({ chapters, today, year });
      const doneCount = chapters.filter((c) => c.done).length;
      return { track, chapters, forecast: f, doneCount };
    });
  }, [tracks, profile, progress, today, year]);

  const primary = lanes[0] || null;
  const nextBreak = status.next;
  const inTerm = status.current?.type === 'term';

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

  const paceLine = (l) => {
    const wks = l.forecast.daysPerChapter / 7;
    const w = wks >= 10 ? Math.round(wks) : wks.toFixed(1);
    return `${l.forecast.basis === 'measured' ? 'Your pace' : 'Estimated pace'}: 1 chapter / ${w} wk${wks === 1 ? '' : 's'}`;
  };

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
          {label(primary ? `${trackName(primary.track)} forecast` : 'Your forecast')}
          {primary ? (
            <>
              {big(<>{primary.doneCount}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}> / {primary.chapters.length} chapters</span></>)}
              {primary.forecast.finish
                ? sub(`Finish ≈ ${fmtLong(primary.forecast.finish)}`, '#4c1d95')
                : sub('All chapters complete 🎉', '#047857')}
              {primary.forecast.finish && <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', marginTop: '2px' }}>{paceLine(primary)}</div>}
            </>
          ) : sub('Ask your teacher to assign a year to see your forecast.')}
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
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', color: '#1e1b4b', margin: 0 }}>Your path in {year}</h3>
            <div style={{ fontSize: '0.84rem', color: '#6d6a85', fontWeight: 600, marginTop: '2px' }}>
              Finished chapters sit where you completed them; the rest are forecast from your pace.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '0.74rem', fontWeight: 800, color: '#64748b' }}>
            {[['done', 'Done'], ['current', 'In progress'], ['planned', 'Forecast']].map(([k, t]) => (
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
            <Lane label={<span style={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.1em', color: '#8b7aa7' }}>TERMS</span>} todayPct={todayPct} height={32}>
              {status.segs.map((s) => {
                const w = pos(s.end) - pos(s.start);
                return (
                  <div
                    key={s.id}
                    title={`${s.label} · ${fmt(s.start)} – ${fmt(s.end - DAY)}`}
                    style={{
                      position: 'absolute', top: 0, bottom: 0, left: `${pos(s.start)}%`, width: `${w}%`,
                      display: 'grid', placeItems: 'center', overflow: 'hidden', boxSizing: 'border-box',
                      background: s.type === 'term' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'repeating-linear-gradient(135deg, #f1f5f9, #f1f5f9 5px, #e8edf5 5px, #e8edf5 10px)',
                      color: s.type === 'term' ? '#fff' : '#94a3b8',
                      borderLeft: '2px solid #fff',
                      fontSize: s.type === 'term' ? '0.78rem' : '0.62rem', fontWeight: 900, letterSpacing: '0.04em', whiteSpace: 'nowrap',
                    }}
                  >
                    {s.type === 'term' ? s.label : (w > 7 ? 'Holiday' : '')}
                  </div>
                );
              })}
            </Lane>

            <Lane label={null} todayPct={todayPct} height={22}>
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
            </Lane>

            {lanes.length === 0 && (
              <div style={{ padding: '36px 8px', textAlign: 'center', color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>
                No curriculum assigned yet — your teacher will set up your path.
              </div>
            )}

            {lanes.map(({ track, chapters, forecast, doneCount }) => {
              const hue = track.course ? COURSE_HUE[track.course] : '#4f46e5';
              const beyond = forecast.items.filter((it) => it.start >= yEnd);
              const lastIn = [...forecast.items].reverse().find((it) => it.start < yEnd);
              return (
                <Lane
                  key={track.key}
                  label={
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, fontSize: '0.88rem', color: hue, lineHeight: 1.15 }}>{trackName(track)}</div>
                      <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', marginTop: '2px' }}>{doneCount} / {chapters.length} chapters</div>
                    </div>
                  }
                  todayPct={todayPct}
                  height={56}
                  grid
                  monthLines={MONTHS.map((_, i) => pos(Date.UTC(year, i, 1)))}
                >
                  {forecast.items.flatMap((it) => {
                    const st = STATE_STYLE[it.state];
                    const pieces = termPieces(year, it.start, Math.min(it.end, yEnd));
                    const longest = pieces.reduce((m, p) => (p.end - p.start > m.end - m.start ? p : m), pieces[0] || { start: 0, end: 0 });
                    const pctText = it.state === 'done' ? '100%' : it.chapter.pct > 0 ? `${it.chapter.pct}%` : '';
                    return pieces.map((p, k) => {
                      const w = pos(p.end) - pos(p.start);
                      const main = p === longest;
                      return (
                        <div key={`${it.chapter.id}-${k}`}>
                          <div
                            title={`Ch ${it.chapter.idx + 1} · ${it.chapter.title}\n${it.state === 'done' ? (it.approx ? 'Completed (date not recorded)' : `Completed ${fmt(it.end - DAY)}`) : `Forecast ${fmt(it.start)} – ${fmt(it.end - DAY)}`}${pctText ? `\nMastery ${pctText}` : ''}`}
                            style={{
                              position: 'absolute', top: '6px', height: '26px', left: `${pos(p.start)}%`, width: `${w}%`,
                              background: st.bg, color: st.fg, borderRadius: '6px', boxSizing: 'border-box',
                              borderRight: '1.5px solid #fff', overflow: 'hidden', padding: '0 6px',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '0.68rem', fontWeight: 800, whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                              opacity: it.approx ? 0.85 : 1,
                              boxShadow: it.state === 'current' ? '0 0 0 2px rgba(124,58,237,0.25)' : 'none',
                            }}
                          >
                            {main && w > 2.2 ? (
                              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
                                {w > 9 ? it.chapter.title.replace(/^Chapter\s*\d+\s*[:.-]\s*/i, '') : it.chapter.idx + 1}
                              </span>
                            ) : ''}
                          </div>
                          {main && w > 4 && pctText && (
                            <div style={{ position: 'absolute', top: '37px', left: `${pos(p.start)}%`, width: `${w}%`, textAlign: 'center', fontSize: '0.62rem', fontWeight: 800, color: it.state === 'done' ? '#0f766e' : '#7c3aed' }}>
                              {pctText}
                            </div>
                          )}
                        </div>
                      );
                    });
                  })}
                  {/* Anything forecast past December is summarised at the lane end */}
                  {(beyond.length > 0 || (lastIn && lastIn.end > yEnd)) && (
                    <div
                      title={`Forecast finish ≈ ${forecast.finish ? fmtLong(forecast.finish) : ''}`}
                      style={{
                        position: 'absolute', right: 0, top: '6px', height: '26px', transform: 'translateX(0)',
                        display: 'flex', alignItems: 'center', gap: '4px', padding: '0 10px 0 8px',
                        borderRadius: '6px 13px 13px 6px', background: '#ede9fe', color: '#5b21b6',
                        fontSize: '0.68rem', fontWeight: 900, whiteSpace: 'nowrap', zIndex: 2,
                        boxShadow: '0 0 0 1.5px #fff',
                      }}
                    >
                      {`→ ${year + 1} · ${beyond.length + (lastIn && lastIn.end > yEnd ? 1 : 0)} more`}
                    </div>
                  )}
                  {forecast.earlier > 0 && (
                    <div style={{ position: 'absolute', left: '4px', top: '38px', fontSize: '0.62rem', fontWeight: 800, color: '#94a3b8' }}>
                      ← {forecast.earlier} done earlier
                    </div>
                  )}
                </Lane>
              );
            })}

            {lanes.length > 0 && <Lane label={null} todayPct={todayPct} height={20} showTag />}
          </div>
        </div>
      </div>
    </div>
  );
};

/** One timeline lane: sticky label column + a relatively-positioned track with the today line. */
const Lane = ({ label, children, todayPct, height, grid = false, monthLines = [], showTag = false }) => (
  <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: grid ? '6px' : '4px' }}>
    <div style={{
      width: LABEL_W, flexShrink: 0, display: 'flex', alignItems: 'center', position: 'sticky', left: 0, zIndex: 3,
      background: '#fff', paddingRight: '8px',
    }}>
      {label}
    </div>
    <div style={{
      position: 'relative', flex: 1, height, minWidth: MIN_W, borderRadius: grid ? '10px' : 0,
      background: grid ? '#fbfaff' : 'transparent',
    }}>
      {grid && monthLines.map((l, i) => (
        <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${l}%`, width: '1px', background: '#f1f0fe' }} />
      ))}
      {children}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${todayPct}%`, width: '2px', background: '#ef4444', opacity: 0.75, zIndex: 2, pointerEvents: 'none' }} />
      {showTag && (
        <div style={{
          position: 'absolute', top: '4px', left: `${todayPct}%`, transform: 'translateX(-50%)', zIndex: 4,
          background: '#ef4444', color: '#fff', fontSize: '0.6rem', fontWeight: 900, padding: '2px 7px', borderRadius: '5px', whiteSpace: 'nowrap',
        }}>
          Today
        </div>
      )}
    </div>
  </div>
);

export default LearningPathRoadmap;
