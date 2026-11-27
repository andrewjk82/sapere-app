// Teacher-side XP changes go through here: the student's total and the leaderboard move together, in one
// transaction, so neither can overwrite XP the student earns at the same moment.
// (Student-side awards use increment() or their own transaction on the same two documents.)
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { buildAvatarUrl, buildDisplayName } from '../utils/avatarUtils';

/**
 * Add `delta` XP (negative takes it back, never below 0).
 * id: the account (users/{id}); a student without an account falls back to students/{id}.
 * extra: other fields for the same student document. alsoInTx(tx): more writes in the same transaction.
 * → { applied, total } (what actually changed, and the new total)
 */
export const adjustXp = (id, delta, { extra = {}, alsoInTx } = {}) => runTransaction(db, async (tx) => {
  let ref = doc(db, 'users', id);
  let snap = await tx.get(ref);
  const manual = !snap.exists();
  if (manual) {
    ref = doc(db, 'students', id);
    snap = await tx.get(ref);
  }
  if (!snap.exists()) throw new Error('user-not-found');
  const data = snap.data();
  const current = Number(data.totalXP) || 0;
  const total = Math.max(0, current + delta);
  const applied = total - current;
  tx.set(ref, { totalXP: total, ...extra, updatedAt: new Date().toISOString() }, { merge: true });
  const role = String(data.role || '').toLowerCase();
  if (role !== 'admin' && role !== 'teacher') {
    tx.set(doc(db, 'leaderboard', manual ? `manual-${id}` : id), {
      name: buildDisplayName(data),
      avatarUrl: buildAvatarUrl(data, data.email || id),
      totalXP: total,
      role: role || 'student',
      year: data.year || data.assignedYear || '',
      lastUpdated: serverTimestamp(),
    }, { merge: true });
  }
  alsoInTx?.(tx);
  return { applied, total };
});

