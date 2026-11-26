import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { XP_PER_LINE } from '../utils/dailyBingo';

// +5 XP per finished Daily Bingo line, once per line per day. users/{uid}.bingo = { date, lines: [...] } is the guard,
// so the same line on another device (or a second tap) pays nothing. Mirrors totalXP to the leaderboard like the
// other XP awards.
const inFlight = new Set();

export const awardBingoLines = async (uid, date, lineIds) => {
  if (!uid || !date || !lineIds?.length) return 0;
  const tag = `${uid}:${date}:${[...lineIds].sort().join(',')}`;
  if (inFlight.has(tag)) return 0;
  inFlight.add(tag);
  const userRef = doc(db, 'users', uid);
  let paid = 0;
  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(userRef);
      if (!snap.exists()) return;
      const data = snap.data() || {};
      const already = data.bingo?.date === date ? (data.bingo.lines || []) : [];
      const fresh = lineIds.filter((id) => !already.includes(id));
      if (!fresh.length) return;
      paid = fresh.length * XP_PER_LINE;
      const totalXP = (Number(data.totalXP) || 0) + paid;
      tx.set(userRef, { totalXP, bingo: { date, lines: [...already, ...fresh] }, updatedAt: new Date().toISOString() }, { merge: true });
      const name = data.name || data.displayName || (data.firstName ? `${data.firstName} ${data.lastName || ''}`.trim() : '') || 'Student';
      const avatarUrl = data.dreamImageUrl || data.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(uid)}`;
      tx.set(doc(db, 'leaderboard', uid), {
        name, avatarUrl, totalXP, lastUpdated: serverTimestamp(), role: data.role || 'student', year: data.assignedYear || data.year || '',
      }, { merge: true });
    });
  } catch (err) {
    console.warn('[bingo] XP award failed:', err?.code || err?.message || err);
    paid = 0;
  } finally {
    inFlight.delete(tag);
  }
  return paid;
};
