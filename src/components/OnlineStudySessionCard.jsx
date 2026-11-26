import { useEffect, useState } from 'react';
import { Video } from 'lucide-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import FilmingGuidelinesModal from './FilmingGuidelinesModal';
import { useAuth } from '../context/AuthContext';
import { markActivity } from '../utils/bingoActivity';

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
// Visible inside that Sydney-time window (while enabled + a link is set),
// OR any time an admin has flipped the manual "Open Study Session Now"
// override in Settings — that lets the teacher open the room on demand
// instead of waiting for the fixed schedule. See Settings.jsx.
const OnlineStudySessionCard = ({ onConfig }) => {
  const { user } = useAuth();
  const [config, setConfig] = useState(null);
  const [nowMin, setNowMin] = useState(sydneyTotalMinutes);
  const [showGuidelines, setShowGuidelines] = useState(null);   // the link to open after the guidelines

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system_config', 'onlineStudySession'), (snap) => {
      const next = snap.exists() ? snap.data() : null;
      setConfig(next);
      onConfig?.(next);
    });
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onConfig is a setter from the dashboard
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNowMin(sydneyTotalMinutes()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const inWindow = nowMin >= START_MIN && nowMin < END_MIN;
  const isOpen = config?.manualOpen || (config?.enabled && inWindow);
  if (!isOpen || !config?.zoomLink) return null;
  // The second (Zoom) room only runs until 10:30 PM, even when the main room is opened manually.
  const zoomRoomOpen = Boolean(config?.zoomLink2) && nowMin < END_MIN && nowMin >= 6 * 60;

  // Same size and look as the "Today's plan" tiles (rendered inside that grid, see Dashboard).
  const tileBase = {
    position: 'relative', textAlign: 'left', cursor: 'pointer', minHeight: 150, boxSizing: 'border-box',
    padding: '16px 18px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: 4,
    background: '#ffffff', boxShadow: '0 10px 24px rgba(0,0,0,0.06)', color: '#0f172a',
  };
  const mainSub = config?.manualOpen && !inWindow ? 'Join the study room' : 'Open until 10:30 PM';

  return (
    <>
    <button
      type="button"
      onClick={() => setShowGuidelines(config.zoomLink)}
      style={{ ...tileBase, border: '2px solid #d9d0ff' }}
    >
      <span style={{ position: 'absolute', top: 12, right: 14, fontSize: '0.68rem', fontWeight: 800, color: '#fff', background: '#ef4444', borderRadius: 999, padding: '2px 10px' }}>Live</span>
      <span style={{ width: 44, height: 44, borderRadius: 14, background: '#eee9ff', color: '#6d5efc', display: 'grid', placeItems: 'center', marginBottom: 6 }}><Video size={22} /></span>
      <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>Online Study Room</span>
      <span style={{ fontSize: '0.82rem', color: '#475569' }}>{mainSub}</span>
      <span style={{ marginTop: 'auto', paddingTop: 8, fontSize: '0.88rem', fontWeight: 800, color: '#6d5efc' }}>Join</span>
    </button>

    {zoomRoomOpen && (
    <button
      type="button"
      onClick={() => setShowGuidelines(config.zoomLink2)}
      style={{ ...tileBase, border: '2px solid #bcd4fa' }}
    >
      <span style={{ position: 'absolute', top: 12, right: 14, fontSize: '0.68rem', fontWeight: 800, color: '#fff', background: '#ef4444', borderRadius: 999, padding: '2px 10px' }}>Live</span>
      <span style={{ width: 44, height: 44, borderRadius: 14, background: '#e0edff', color: '#2563eb', display: 'grid', placeItems: 'center', marginBottom: 6 }}><Video size={22} /></span>
      <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>Zoom Study Room</span>
      <span style={{ fontSize: '0.82rem', color: '#475569' }}>Open until 10:30 PM only</span>
      <span style={{ marginTop: 'auto', paddingTop: 8, fontSize: '0.88rem', fontWeight: 800, color: '#2563eb' }}>Join</span>
    </button>
    )}

    <FilmingGuidelinesModal
      open={Boolean(showGuidelines)}
      onCancel={() => setShowGuidelines(null)}
      onProceed={() => {
        const link = showGuidelines;
        setShowGuidelines(null);
        markActivity(user?.uid, 'studyRoom');
        window.open(link, '_blank', 'noopener,noreferrer');
      }}
    />
    </>
  );
};

export default OnlineStudySessionCard;
