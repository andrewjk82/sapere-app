import { weeksForTeacher } from '../../utils/specialWeekly';
import { HUB_PAGES } from '../../utils/examHub';
import { pct, trendSeries, typeBreakdown, recentVolume, buildAlerts } from '../../utils/specialProgress';
import SpecialWeeklyPanel from './SpecialWeeklyPanel';

const C = { ink: '#1f1d3d', muted: '#6b7280', faint: '#9ca3af', line: '#e5e7eb', red: '#c2273d', green: '#15803d', amber: '#b45309' };
const EXAM_COLOURS = ['#5b3fd0', '#0d9488', '#d97706', '#64748b'];
const tone = (p) => (p >= 80 ? C.green : p >= 60 ? C.amber : C.red);
const examLabel = (id) => HUB_PAGES[id]?.label || id;
const sentence = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const shortWeek = (id) => new Date(`${id}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
const duration = (secs) => (secs >= 3600 ? `${Math.floor(secs / 3600)}h ${Math.round((secs % 3600) / 60)}m` : `${Math.round(secs / 60)} min`);

const CARD = { background: '#fff', border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 };
const HEADING = { fontWeight: 800, color: C.ink, fontSize: '0.95rem', margin: 0 };
const NOTE = { color: C.muted, fontWeight: 500, fontSize: '0.78rem', margin: '2px 0 12px' };

const Tile = ({ label, value, sub, colour }) => (
  <div style={{ background: '#f8fafc', borderRadius: 12, padding: '12px 14px', minWidth: 0 }}>
    <div style={{ color: C.muted, fontWeight: 700, fontSize: '0.72rem' }}>{label}</div>
    <div style={{ color: colour || C.ink, fontWeight: 800, fontSize: '1.35rem', fontVariantNumeric: 'tabular-nums', lineHeight: 1.3 }}>{value}</div>
    {sub && <div style={{ color: C.faint, fontWeight: 600, fontSize: '0.72rem' }}>{sub}</div>}
  </div>
);

// Weekly score per exam, oldest week on the left. A week an exam was not practised leaves a gap in its line.
const TrendChart = ({ series, examIds }) => {
  const W = 900; const H = 240; const L = 38; const R = 30; const T = 12; const B = 28;
  const n = series.length;
  const x = (i) => (n === 1 ? (L + W - R) / 2 : L + (i * (W - L - R)) / (n - 1));
  const y = (p) => T + ((100 - p) * (H - T - B)) / 100;
  const step = Math.max(1, Math.ceil(n / 6));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Weekly score for each exam" style={{ display: 'block' }}>
      {[0, 25, 50, 75, 100].map((p) => (
        <g key={p}>
          <line x1={L} x2={W - R} y1={y(p)} y2={y(p)} stroke={p === 0 ? '#cbd5e1' : '#eef0f3'} strokeWidth="1" />
          <text x={L - 6} y={y(p) + 4} textAnchor="end" fontSize="11" fill={C.faint}>{p}%</text>
        </g>
      ))}
      {series.map((w, i) => (i % step === 0 || i === n - 1) && (
        <text key={w.weekId} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={C.faint}>{shortWeek(w.weekId)}</text>
      ))}
      {examIds.map((examId, k) => {
        const colour = EXAM_COLOURS[k % EXAM_COLOURS.length];
        const points = series.map((w, i) => (w.exams[examId] === undefined ? null : [x(i), y(w.exams[examId])]));
        const segments = []; let current = [];
        points.forEach((p) => { if (p) current.push(p); else if (current.length) { segments.push(current); current = []; } });
        if (current.length) segments.push(current);
        return (
          <g key={examId}>
            {segments.map((seg, s) => seg.length > 1 && (
              <polyline key={s} points={seg.map((p) => p.join(',')).join(' ')} fill="none" stroke={colour} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            ))}
            {points.map((p, i) => p && <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#fff" stroke={colour} strokeWidth="2.5"><title>{`${examLabel(examId)} · week of ${shortWeek(series[i].weekId)} · ${series[i].exams[examId]}%`}</title></circle>)}
          </g>
        );
      })}
    </svg>
  );
};

/**
 * "Special tests" tab of the teacher's student page: is the student improving in OC / Selective / Scholarship, and
 * what should be taught next. Everything comes from `student.specialWeekly`, which this page already holds.
 */
export default function SpecialProgressPanel({ student }) {
  const weeks = weeksForTeacher(student?.specialWeekly);

  if (!weeks.length) {
    return (
      <div style={CARD}>
        <h3 style={HEADING}>Special tests progress</h3>
        <p style={{ ...NOTE, marginBottom: 0, fontSize: '0.84rem', lineHeight: 1.5 }}>
          Nothing yet. The student&apos;s device sends one summary per week, the first time the app is opened after the week has ended.
        </p>
      </div>
    );
  }

  const series = trendSeries(weeks);
  const examIds = [...new Set(weeks.flatMap((w) => Object.keys(w.exams || {})))];
  const types = typeBreakdown(weeks);
  const volume = recentVolume(weeks);
  const alerts = buildAlerts(weeks, { examLabel });
  const latest = weeks[0]; const previous = weeks[1];
  const latestPct = pct(latest.marks, latest.total);
  const change = previous ? latestPct - pct(previous.marks, previous.total) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={CARD}>
        <h3 style={HEADING}>Special tests progress</h3>
        <p style={NOTE}>Results arrive once a week, after the week has ended and the student opens the app.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
          <Tile
            label={`Week of ${shortWeek(latest.weekId)}`}
            value={`${latestPct}%`}
            colour={tone(latestPct)}
            sub={change === null ? `${latest.marks} of ${latest.total} marks` : `${change > 0 ? '▲' : change < 0 ? '▼' : '='} ${Math.abs(change)} points on the week before`}
          />
          <Tile label={`Tests · last ${volume.weeks} week${volume.weeks === 1 ? '' : 's'}`} value={volume.tests} sub={`${volume.total} marks attempted`} />
          <Tile label={`Time · last ${volume.weeks} week${volume.weeks === 1 ? '' : 's'}`} value={volume.secs > 0 ? duration(volume.secs) : '—'} />
          <Tile label="Time per mark" value={volume.secsPerMark === null ? '—' : `${volume.secsPerMark}s`} sub={volume.secsPerMark !== null && volume.secsPerMark < 15 ? 'Very fast — check for guessing' : undefined} colour={volume.secsPerMark !== null && volume.secsPerMark < 15 ? C.red : undefined} />
        </div>
        <div style={{ marginTop: 14, display: 'grid', gap: 6 }}>
          {alerts.length === 0 && (
            <div style={{ padding: '9px 12px', borderRadius: 10, background: '#f0fdf4', color: C.green, fontWeight: 700, fontSize: '0.84rem' }}>Nothing to worry about in the latest results.</div>
          )}
          {alerts.map((a, i) => (
            <div key={i} style={{ padding: '9px 12px', borderRadius: 10, background: a.tone === 'red' ? '#fef2f2' : '#fffbeb', color: a.tone === 'red' ? C.red : C.amber, fontWeight: 700, fontSize: '0.84rem', lineHeight: 1.45 }}>{a.text}</div>
          ))}
        </div>
      </div>

      <div style={CARD}>
        <h3 style={HEADING}>Weekly score</h3>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', margin: '6px 0 8px' }}>
          {examIds.map((examId, k) => (
            <span key={examId} style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.muted, fontWeight: 700, fontSize: '0.78rem' }}>
              <i style={{ width: 10, height: 10, borderRadius: 3, background: EXAM_COLOURS[k % EXAM_COLOURS.length] }} />{examLabel(examId)}
            </span>
          ))}
        </div>
        <TrendChart series={series} examIds={examIds} />
        {series.length === 1 && <p style={{ ...NOTE, margin: '6px 0 0' }}>One week so far — the line appears from the second week.</p>}
      </div>

      <div style={CARD}>
        <h3 style={HEADING}>Question types</h3>
        <p style={NOTE}>Weakest first. The bar is the last 4 weeks; the figure on the right is every stored week.</p>
        {examIds.map((examId) => (types[examId]?.length ? (
          <div key={examId} style={{ marginBottom: 14 }}>
            <div style={{ fontWeight: 800, color: C.ink, fontSize: '0.84rem', marginBottom: 6 }}>{examLabel(examId)}</div>
            <div style={{ display: 'grid', gap: 6 }}>
              {types[examId].map((t) => {
                const shown = t.recentPct ?? t.pct;
                return (
                  <div key={t.name} style={{ display: 'grid', gridTemplateColumns: 'minmax(110px, 1.2fr) minmax(90px, 2fr) 52px minmax(96px, auto)', gap: 10, alignItems: 'center' }}>
                    <span style={{ color: C.ink, fontWeight: 600, fontSize: '0.82rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={sentence(t.name)}>{sentence(t.name)}</span>
                    <span style={{ height: 8, borderRadius: 8, background: '#eceef2', overflow: 'hidden' }}><i style={{ display: 'block', height: '100%', width: `${shown}%`, background: tone(shown) }} /></span>
                    <span style={{ fontWeight: 800, color: tone(shown), fontSize: '0.84rem', fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{shown}%</span>
                    <span style={{ color: C.faint, fontWeight: 600, fontSize: '0.74rem', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>all: {t.pct}% ({t.marks}/{t.total})</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null))}
        {examIds.every((examId) => !types[examId]?.length) && <p style={{ ...NOTE, margin: 0 }}>No question-type detail was recorded for these tests.</p>}
      </div>

      <div style={{ ...CARD, paddingTop: 2 }}>
        <SpecialWeeklyPanel student={student} limit={12} />
      </div>
    </div>
  );
}
