// Sends the extra rounds waiting on this device, all together, whenever the student stops: leaving the screen, sending
// the app to the background, or opening it again. However many rounds were played that is one batch per send:
//   users/{uid}, leaderboard/{uid}, the practice pool (no read), and per date the stat summary and review document.
import { arrayUnion, doc, increment, serverTimestamp, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';
import { queueWriteGroups } from '../utils/queueWriteGroups';
import { getSyncSnapshot } from '../utils/secretNote';
import { queueExtraRoundDone } from './practicePoolService';
import {
  addRoundsToTotals, fitDetail, loadRunningTotals, newestTotals, restorePendingRounds, saveRunningTotals, takePendingRounds,
} from '../utils/extraRoundStore';

const bytesKey = (uid, date) => `sapere:extraRounds:bytes:v1:${uid}:${date}`;
const readBytes = (uid, date) => {
  try { return Number(localStorage.getItem(bytesKey(uid, date))) || 0; } catch { return 0; }
};
const writeBytes = (uid, date, bytes) => {
  try { localStorage.setItem(bytesKey(uid, date), String(bytes)); } catch { /* the write itself still guards the limit */ }
};

export const extraRoundsDocRef = (uid, date) => doc(db, 'users', uid, 'daily_stats', date, 'detail_snapshot', 'extra');

export const flushExtraRounds = ({ uid, profile = null, extraRounds = [] }) => {
  if (!uid) return false;
  const rounds = [...takePendingRounds(uid), ...extraRounds];
  if (rounds.length === 0) return false;

  const dates = [...new Set(rounds.map((round) => round.date))].sort();
  const latest = dates[dates.length - 1];
  const known = newestTotals(profile?.extraPractice, loadRunningTotals(uid), latest);
  const totals = addRoundsToTotals(known, latest, rounds);
  saveRunningTotals(uid, totals);
  const xp = rounds.reduce((sum, round) => sum + (Number(round.xp) || 0), 0);
  let secretNoteSync = {};
  try { secretNoteSync = getSyncSnapshot(uid) || {}; } catch { /* the note is local; its summary can wait */ }

  const detailWrites = dates.map((date) => {
    const forDate = rounds.filter((round) => round.date === date);
    const { records, bytes } = fitDetail(forDate, readBytes(uid, date));
    writeBytes(uid, date, bytes);
    const summary = date === latest ? totals : addRoundsToTotals(null, date, forDate);
    return (batch) => {
      batch.set(extraRoundsDocRef(uid, date), {
        date,
        rounds: arrayUnion(...records),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      batch.set(doc(db, 'users', uid, 'daily_stats', date), {
        hasExtraRounds: true,
        extraSummary: summary,
      }, { merge: true });
    };
  });

  const [xpSaved, poolSaved, detailSaved] = queueWriteGroups(() => writeBatch(db), [
    [
      (batch) => batch.set(doc(db, 'users', uid), {
        totalXP: increment(xp),
        extraPractice: totals,
        lastActive: new Date().toISOString(),
        ...secretNoteSync,
      }, { merge: true }),
      (batch) => batch.set(doc(db, 'leaderboard', uid), {
        totalXP: increment(xp),
        lastUpdated: serverTimestamp(),
      }, { merge: true }),
    ],
    [(batch) => queueExtraRoundDone(batch, uid, rounds.flatMap((round) => round.shown || []))],
    detailWrites,
  ]);
  // Only a refused XP write is retried: the rest are records, and XP must not be sent twice.
  xpSaved.catch((err) => {
    console.error('Extra round XP save failed:', err?.code || err);
    restorePendingRounds(uid, rounds);
  });
  poolSaved.catch((err) => console.warn('Extra round pool update failed (non-critical):', err?.code || err));
  detailSaved.catch((err) => {
    console.warn('Extra round review save failed (non-critical):', err?.code || err);
    setDoc(doc(db, 'users', uid), { extraPracticeDetailFailed: true }, { merge: true }).catch(() => {});
  });
  return true;
};
