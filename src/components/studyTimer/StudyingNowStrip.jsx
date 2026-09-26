import { useEffect, useState } from 'react';
import { subscribeStudyPresence, presenceElapsedSec } from '../../services/studyPresenceService';

const MAX_SHOWN = 8;

const formatShort = (sec) => {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
};

/**
 * Bottom strip on the black focus clock: other students studying right now, each with a
 * live timer. Mounted only while the focus clock is on screen, so the RTDB listener (and
 * its connection) exists only then — see studyPresenceService.
 */
const StudyingNowStrip = ({ uid }) => {
  const [entries, setEntries] = useState([]);
  const [offset, setOffset] = useState(0);
  const [, setTick] = useState(0);

  useEffect(() => subscribeStudyPresence(uid, (list, off) => { setEntries(list); setOffset(off); }), [uid]);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  if (!entries.length) return null;
  const shown = entries.slice(0, MAX_SHOWN);
  const extra = entries.length - shown.length;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'absolute', left: 0, right: 0, bottom: 'max(28px, env(safe-area-inset-bottom))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '0 16px',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
        Studying now
      </span>
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 720 }}>
        {shown.map((p) => (
          <div key={p.uid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 64, opacity: p.running ? 1 : 0.4 }}>
            {p.avatarUrl ? (
              <img src={p.avatarUrl} alt="" style={{ width: 40, height: 40, borderRadius: '50%', background: '#1f2937', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1f2937', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800 }}>
                {String(p.name || '?').charAt(0)}
              </div>
            )}
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.75)', maxWidth: 64, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {p.name}
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', fontVariantNumeric: 'tabular-nums' }}>
              {formatShort(presenceElapsedSec(p, offset))}
            </span>
          </div>
        ))}
        {extra > 0 && (
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1f2937', color: 'rgba(255,255,255,0.7)', display: 'grid', placeItems: 'center', fontSize: '0.75rem', fontWeight: 800, alignSelf: 'flex-start' }}>
            +{extra}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyingNowStrip;
