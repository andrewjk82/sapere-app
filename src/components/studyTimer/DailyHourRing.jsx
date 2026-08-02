import { motion } from 'framer-motion';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';

const GAP_DEG = 1.2;

const polarToCartesian = (cx, cy, r, angleDeg) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const wedgePath = (cx, cy, rOuter, rInner, startAngle, endAngle) => {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, endAngle);
  const endInner = polarToCartesian(cx, cy, rInner, startAngle);
  return [
    'M', startOuter.x, startOuter.y,
    'A', rOuter, rOuter, 0, 0, 0, endOuter.x, endOuter.y,
    'L', endInner.x, endInner.y,
    'A', rInner, rInner, 0, 0, 1, startInner.x, startInner.y,
    'Z',
  ].join(' ');
};

// Real 12-hour clock-face position: 12 at top, 3 right, 6 bottom, 9 left.
// Each 30° hour mark is split into two 15° wedges — AM in the first half,
// PM in the second — so all 24 hours still get a distinct slice, but 4pm
// lands where "4" actually sits on a clock, not a quarter-turn off.
const angleForHour = (h) => (h % 12) * 30 + (h < 12 ? 0 : 15);

const formatHour12 = (h) => {
  const period = h < 12 ? 'AM' : 'PM';
  const display = h % 12 === 0 ? 12 : h % 12;
  return `${display}${period}`;
};

const formatDuration = (sec) => {
  const totalMin = Math.round(sec / 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m}m`;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
};

/**
 * 24-hour "when did I study" ring. Each of the 24 hour wedges is colored by
 * whichever subject had the most time in that hour (subjectColors — same
 * palette as the stopwatch's chips/ring), with opacity scaled by how much
 * of that hour was actually studied. Reads `day.byHour` =
 * { hour(0-23): { subjectKey: seconds } }, written by the stopwatch's flush
 * path (see splitSecondsIntoHourBuckets). `size` lets the Weekly view pack
 * seven of these side by side; tick labels + center total hide below 140px.
 */
const DailyHourRing = ({ day, subjectColors = {}, size = 240 }) => {
  const byHour = day?.byHour || {};
  const compact = size < 140;
  const rOuter = size / 2 - (compact ? 3 : 6);
  const rInner = rOuter - (compact ? size * 0.16 : 42);
  const cx = size / 2;
  const cy = size / 2;

  const hours = Array.from({ length: 24 }, (_, h) => {
    const subjectsAtHour = byHour[h] || {};
    const entries = Object.entries(subjectsAtHour).map(([subj, sec]) => [subj, Number(sec) || 0]);
    const totalSec = entries.reduce((s, [, sec]) => s + sec, 0);
    const dominant = entries.sort((a, b) => b[1] - a[1])[0];
    return {
      hour: h,
      totalSec,
      subject: dominant ? dominant[0] : null,
      occupancy: Math.min(1, totalSec / 3600),
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {hours.map((h, i) => {
            const base = angleForHour(h.hour);
            const startAngle = base + GAP_DEG / 2;
            const endAngle = base + 15 - GAP_DEG / 2;
            const color = h.subject ? (subjectColors[h.subject] || DEFAULT_SUBJECT_COLOR) : '#f1f0f8';
            const opacity = h.totalSec > 0 ? 0.35 + h.occupancy * 0.65 : 1;
            return (
              <motion.path
                key={h.hour}
                d={wedgePath(cx, cy, rOuter, rInner, startAngle, endAngle)}
                fill={color}
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ duration: 0.4, delay: i * 0.012, ease: 'easeOut' }}
              >
                <title>
                  {day?.label ? `${day.label} · ` : ''}{formatHour12(h.hour)}–{formatHour12((h.hour + 1) % 24)}
                  {h.totalSec > 0 ? ` · ${normalizeSubjectLabel(h.subject)} · ${formatDuration(h.totalSec)}` : ' · no study'}
                </title>
              </motion.path>
            );
          })}
          {/* Clock-face tick labels at 12, 3, 6, 9 o'clock — skipped when compact */}
          {!compact && [{ label: '12', deg: 0 }, { label: '3', deg: 90 }, { label: '6', deg: 180 }, { label: '9', deg: 270 }].map(({ label, deg }) => {
            const pos = polarToCartesian(cx, cy, rOuter + 16, deg);
            return (
              <text key={label} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="800" fill="#94a3b8">
                {label}
              </text>
            );
          })}
        </svg>
        {!compact && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 900, color: '#0f172a' }}>
              {formatDuration(day?.totalSec || 0)}
            </span>
            <span style={{ fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginTop: 2 }}>
              {day?.label || 'Today'}
            </span>
          </div>
        )}
      </div>
      {compact && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 900, color: (day?.totalSec || 0) > 0 ? '#1e1b4b' : '#cbd5e1' }}>
            {formatDuration(day?.totalSec || 0)}
          </div>
          <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8' }}>{day?.label}</div>
        </div>
      )}
    </div>
  );
};

export default DailyHourRing;
