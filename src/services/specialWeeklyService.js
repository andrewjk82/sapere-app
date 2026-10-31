import { doc, updateDoc, deleteField } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getDeviceId } from './studySessionSyncService';
import { collectAttempts, buildWeeks, pendingWeeks, buildUploadPatch } from '../utils/specialWeekly';

const sentKey = (uid) => `sapere:schweekly:sent:${uid}`;
const readSent = (uid) => { try { return JSON.parse(localStorage.getItem(sentKey(uid))) || {}; } catch { return {}; } };

/**
 * Send last week's OC / Selective / Scholarship summary, if there is one that has not gone yet.
 * Cost: no read, and at most ONE write per device per week (all pending weeks and the old-week cleanup share one
 * updateDoc). Does nothing when there is nothing to send, which is almost every time the app opens.
 * `existingKeys` comes from the profile the app already holds, so it needs no read either.
 */
export const syncSpecialWeekly = async ({ uid, existingKeys = [], now = new Date() }) => {
  if (!uid) return { sent: 0 };
  const weeks = buildWeeks(collectAttempts(uid));
  const sent = readSent(uid);
  const pending = pendingWeeks(weeks, sent, now);
  if (!pending.length) return { sent: 0 };
  const patch = buildUploadPatch({ weeks, pending, deviceId: getDeviceId(), existingKeys, now, drop: deleteField() });
  await updateDoc(doc(db, 'users', uid), patch);
  const next = { ...sent };
  pending.forEach((w) => { next[w] = now.toISOString(); });
  try { localStorage.setItem(sentKey(uid), JSON.stringify(next)); } catch { /* the week would be sent again next time */ }
  return { sent: pending.length };
};
