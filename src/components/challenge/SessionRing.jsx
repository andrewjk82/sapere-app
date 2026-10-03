import { CheckCircle2 } from 'lucide-react';
import { KIND } from './sessionKinds';

// Progress ring icon: done → green ring + check; else dashed ring + glyph.
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

export default SessionRing;
