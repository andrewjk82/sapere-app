import { doc, runTransaction } from 'firebase/firestore';
import { db } from '../firebase/config';
import { COINS_PER_LINE } from '../utils/dailyBingo';

// Coins per finished Daily Bingo line, once per line per day. users/{uid}.bingo = { date, lines: [...] } is the guard,
// so the same line on another device (or a second tap) pays nothing. Coins are shop money only: XP and the
// leaderboard are not touched.
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
      paid = 0;
      const snap = await tx.get(userRef);
      if (!snap.exists()) return;
      const data = snap.data() || {};
      const already = data.bingo?.date === date ? (data.bingo.lines || []) : [];
      const fresh = lineIds.filter((id) => !already.includes(id));
      if (!fresh.length) return;
      paid = fresh.length * COINS_PER_LINE;
      const heroCoins = (Number(data.heroCoins) || 0) + paid;
      tx.set(userRef, { heroCoins, bingo: { date, lines: [...already, ...fresh] }, updatedAt: new Date().toISOString() }, { merge: true });
    });
  } catch (err) {
    console.warn('[bingo] coin award failed:', err?.code || err?.message || err);
    paid = 0;
  } finally {
    inFlight.delete(tag);
  }
  return paid;
};
