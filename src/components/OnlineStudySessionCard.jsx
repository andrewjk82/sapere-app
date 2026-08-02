import { useEffect, useState } from 'react';
import { Video } from 'lucide-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const START_MIN = 19 * 60 + 30; // 7:30 PM
const END_MIN = 22 * 60 + 30;   // 10:30 PM

function sydneyTotalMinutes() {
  const parts = new Intl.DateTimeFormat('en-AU', {
    hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Australia/Sydney',
  }).formatToParts(new Date());
  const h = parseInt(parts.find((p) => p.type === 'hour').value, 10);
  const m = parseInt(parts.find((p) => p.type === 'minute').value, 10);
  return h * 60 + m;
}

// Student-facing card for the nightly 7:30–10:30 PM Zoom study room.
// Visible only inside that Sydney-time window, and only while an admin has
// enabled it + set a link in system_config/onlineStudySession.
const OnlineStudySessionCard = () => {
  const [config, setConfig] = useState(null);
  const [nowMin, setNowMin] = useState(sydneyTotalMinutes);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system_config', 'onlineStudySession'), (snap) => {
      setConfig(snap.exists() ? snap.data() : null);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNowMin(sydneyTotalMinutes()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const inWindow = nowMin >= START_MIN && nowMin < END_MIN;
  if (!inWindow || !config?.enabled || !config?.zoomLink) return null;

  return (
    <a
      href={config.zoomLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '16px', width: '100%',
        margin: '0 0 24px', maxWidth: '100%',
        padding: '20px 24px', borderRadius: '28px',
        background: 'linear-gradient(135deg, #2563eb, #4338ca)',
        color: '#fff', textDecoration: 'none', cursor: 'pointer',
        boxShadow: '0 15px 35px rgba(37,99,235,0.25)',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.99)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <Video size={22} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '3px' }}>
          Online Study Session · Live now
        </div>
        <div style={{ fontSize: '0.97rem', fontWeight: 700, color: '#fff' }}>
          Tap to join the Zoom room · open until 10:30 PM
        </div>
      </div>
    </a>
  );
};

export default OnlineStudySessionCard;
