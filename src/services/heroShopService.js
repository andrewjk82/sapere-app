import { arrayUnion, doc, runTransaction } from 'firebase/firestore';
import { db } from '../firebase/config';
import { balanceOf, isOwned, itemKey, priceOf } from '../utils/heroShop';

/** Buy one item and put it on. One transaction on the student's own document; buying twice charges once. */
export const buyHeroItem = (uid, group, id, look) => runTransaction(db, async (tx) => {
  const ref = doc(db, 'users', uid);
  const snap = await tx.get(ref);
  if (!snap.exists()) throw new Error('no-profile');
  const data = snap.data();
  const avatar = { ...look, [group]: id };
  if (isOwned(data, group, id)) {
    tx.update(ref, { avatar });
    return;
  }
  const price = priceOf(group, id);
  if (balanceOf(data) < price) throw new Error('not-enough-xp');
  tx.update(ref, { avatar, heroOwned: arrayUnion(itemKey(group, id)), heroSpent: (Number(data.heroSpent) || 0) + price });
});
