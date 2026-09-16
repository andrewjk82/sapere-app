/**
 * contentApi.js — teacher edits → POST /api/content (git commit). Zero Firestore.
 * Each call records the saved doc in the local overlay so this browser shows the change at once;
 * students see it after the Vercel build (~2 min).
 */
import { auth } from '../firebase/config';
import { overlayPut, overlayRemove } from './contentLoader';

const call = async (body) => {
  const user = auth.currentUser;
  if (!user) throw new Error('Not signed in');
  const token = await user.getIdToken();
  const res = await fetch('/api/content', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) { const e = new Error(data.issues ? `${data.error}: ${data.issues.join(' | ')}` : (data.error || `HTTP ${res.status}`)); e.status = res.status; e.issues = data.issues; throw e; }
  return data;
};

/** Full save from the editor. `doc` is the legacy-shaped payload QuestionBankModal already builds. */
export const contentUpsert = async (doc, { chapterId, topicId } = {}) => {
  const r = await call({ op: 'upsert', doc, chapterId: chapterId || doc.chapterId, topicId: topicId || doc.topicId });
  await overlayPut(r.doc);
  return r;
};
/** Partial update of legacy fields (isActive, reviewStatus, timeLimit, …). */
export const contentPatch = async (id, fields, { chapterId } = {}) => {
  const r = await call({ op: 'patch', id, fields, chapterId });
  if (r.doc.isActive === false) await overlayRemove(id); else await overlayPut(r.doc);
  return r;
};
