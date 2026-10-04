import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown } from 'lucide-react';
import { subscribeStudyTimeMeta, fetchOwnRank, fetchMyTotal } from '../../services/studyTimeService';
import { buildAvatarUrl } from '../../utils/avatarUtils';

const formatTotal = (sec) => {
  const totalMin = Math.round((Number(sec) || 0) / 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m}m`;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
};

/**
 * Top 10 by cumulative study time — icon + rank only, no names. Right-side
 * panel on the Study Timer page. Subscribes to a single meta doc
 * (studyTimeService.subscribeStudyTimeMeta).
 *
 * `myTotalSec` comes from the stopwatch's own flush return value (via
 * StudyTimerPage) — free, no extra read. This component only reads
 * Firestore itself for two cheap, infrequent things: seeding the total
 * once on mount if no flush has happened yet this session, and a
 * count-aggregation for "my rank" when outside the top 10 and the total
 * actually changes (not polled).
 */
const StudyTimeLeaderboard = ({ uid, profile, myTotalSec = null, lastFlush = null }) => {
  const [meta, setMeta] = useState({ top10: [] });
  const [seededTotalSec, setSeededTotalSec] = useState(null);
  const [myRank, setMyRank] = useState(null);

  useEffect(() => {
    const unsub = subscribeStudyTimeMeta(setMeta);
    return unsub;
  }, []);

  // One-time seed so the panel shows something before the student's first
  // flush this session (e.g. they open the page but haven't studied yet).
  useEffect(() => {
    if (!uid || Number.isFinite(myTotalSec)) return undefined;
    let cancelled = false;
    fetchMyTotal(uid).then((data) => { if (!cancelled) setSeededTotalSec(Number(data?.totalSec) || 0); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const effectiveTotalSec = Number.isFinite(myTotalSec) ? myTotalSec : seededTotalSec;
  const top10 = meta.top10 || [];
  const inTop10 = top10.some((e) => e.uid === uid);

  // Refresh rank only when the total actually moved (a real flush) or the
  // podium reshuffled — never polled.
  useEffect(() => {
    if (inTop10 || !Number.isFinite(effectiveTotalSec) || effectiveTotalSec <= 0) return undefined;
    let cancelled = false;
    fetchOwnRank(effectiveTotalSec).then((rank) => { if (!cancelled) setMyRank(rank); });
    return () => { cancelled = true; };
  }, [effectiveTotalSec, inTop10, lastFlush]);

  return (
    <div style={{ borderRadius: 26, background: 'linear-gradient(180deg, #ffffff, #faf8ff)', border: '1px solid #e9e4f7', padding: '20px 18px', color: '#1e1b4b', boxShadow: '0 12px 32px rgba(79,70,229,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <Crown size={18} color="#7c3aed" />
        <span style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#77728f' }}>
          Study Time Leaders
        </span>
      </div>

      <div>
        <AnimatePresence initial={false}>
          {top10.map((entry, i) => (
            <motion.div
              key={entry.uid}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '5px 8px', borderRadius: 13, marginBottom: 2,
                background: entry.uid === uid ? '#f0eaff' : 'transparent',
              }}
            >
              <RankBadge rank={i + 1} />
              <img src={entry.avatarUrl || buildAvatarUrl(null, entry.uid)} alt="" style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1px solid #ebe7f5', flexShrink: 0 }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.76rem', fontWeight: 800, color: '#403577' }}>
                {formatTotal(entry.totalSec)}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {top10.length === 0 && (
          <p style={{ fontSize: '0.78rem', color: '#9290a8', fontWeight: 600 }}>No study time logged yet. Be the first!</p>
        )}

        {!inTop10 && effectiveTotalSec > 0 && (
          <>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#aaa4c4', padding: '2px 0' }}>• • •</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 8px', borderRadius: 13, background: '#f0eaff' }}>
              <RankBadge rank={myRank} />
              <img src={buildAvatarUrl(profile, uid)} alt="" style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1px solid #ebe7f5', flexShrink: 0 }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.76rem', fontWeight: 800, color: '#403577' }}>
                {formatTotal(effectiveTotalSec)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const RankBadge = ({ rank }) => (
  <span style={{
    width: 24, height: 24, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
    fontSize: '0.72rem', fontWeight: 900,
    background: rank === 1 ? '#fef3c7' : rank === 2 ? '#f1f5f9' : rank === 3 ? '#ffedd5' : '#eeeafd',
    color: '#554b82',
  }}>
    {rank ?? '–'}
  </span>
);

export default StudyTimeLeaderboard;
