import { motion } from 'framer-motion';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';

const SIZE = 240;
const R_OUTER = SIZE / 2 - 6;
const R_INNER = R_OUTER - 42;
const CX = SIZE / 2;
const CY = SIZE / 2;
const GAP_DEG = 1.2;

const polarToCartesian = (r, angleDeg) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
};

const wedgePath = (rOuter, rInner, startAngle, endAngle) => {
  const startOuter = polarToCartesian(rOuter, endAngle);
  const endOuter = polarToCartesian(rOuter, startAngle);
  const startInner = polarToCartesian(rInner, endAngle);
  const endInner = polarToCartesian(rInner, startAngle);
  return [
    'M', startOuter.x, startOuter.y,
    'A', rOuter, rOuter, 0, 0, 0, endOuter.x, endOuter.y,
    'L', endInner.x, endInner.y,
    'A', rInner, rInner, 0, 0, 1, startInner.x, startInner.y,
    'Z',
  ].join(' ');
};

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
 * 24-hour "when did I study" ring for the Study Timer's Daily view. Each of
 * the 24 hour wedges is colored by whichever subject had the most time in
 * that hour (subjectColors — same palette as the stopwatch's chips/ring),
 * with opacity scaled by how much of that hour was actually studied.
 * Reads `day.byHour` = { hour(0-23): { subjectKey: seconds } }, written by
 * the stopwatch's flush path (see splitSecondsIntoHourBuckets).
 */
const DailyHourRing = ({ day, subjectColors = {} }) => {
  const byHour = day?.byHour || {};

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
      <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {hours.map((h, i) => {
            const startAngle = h.hour * 15 + GAP_DEG / 2;
            const endAngle = h.hour * 15 + 15 - GAP_DEG / 2;
            const color = h.subject ? (subjectColors[h.subject] || DEFAULT_SUBJECT_COLOR) : '#f1f0f8';
            const opacity = h.totalSec > 0 ? 0.35 + h.occupancy * 0.65 : 1;
            return (
              <motion.path
                key={h.hour}
                d={wedgePath(R_OUTER, R_INNER, startAngle, endAngle)}
                fill={color}
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ duration: 0.4, delay: i * 0.012, ease: 'easeOut' }}
              >
                <title>
                  {formatHour12(h.hour)}–{formatHour12((h.hour + 1) % 24)}
                  {h.totalSec > 0 ? ` · ${normalizeSubjectLabel(h.subject)} · ${formatDuration(h.totalSec)}` : ' · no study'}
                </title>
              </motion.path>
            );
          })}
          {/* Hour tick labels at 12, 3, 6, 9 o'clock */}
          {[0, 6, 12, 18].map((h) => {
            const pos = polarToCartesian(R_OUTER + 16, h * 15);
            return (
              <text key={h} x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="800" fill="#94a3b8">
                {formatHour12(h)}
              </text>
            );
          })}
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 900, color: '#0f172a' }}>
            {formatDuration(day?.totalSec || 0)}
          </span>
          <span style={{ fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginTop: 2 }}>
            {day?.label || 'Today'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyHourRing;
