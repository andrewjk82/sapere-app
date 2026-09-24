/**
 * studyNotesService.js
 *
 * Study Planner session checklists ("what I'll study today" → ticked off at
 * the end). One doc per finished session:
 *
 *   users/{uid}/study_notes/{subjectKey}__{ms}
 *   { subject, date, items: [{ text, done }], durationSec, createdAt }
 *
 * Traffic model: the in-progress checklist lives in localStorage only (it
 * survives reloads); Firestore sees exactly ONE write per session, at the
 * end. Reading a subject's history is one on-demand range query on the doc
 * id prefix — ordered by document id, so no composite index is needed.
 */
import {
  collection, doc, documentId, getDocs, limit, orderBy, query, serverTimestamp, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { trackRead, trackWrite } from './trafficTrackerService';

const DRAFT_KEY_PREFIX = 'studytimer:notes:';

// Firestore doc ids can't contain '/'; keep the key readable but safe.
const subjectKey = (subject) => String(subject || 'General Study').replace(/[/\\.#$[\]]/g, '_').slice(0, 80);

export const emptyItems = (n = 3) => Array.from({ length: n }, () => ({ text: '', done: false }));

// ── local draft (in-progress session) ───────────────────────────────────────
export const loadNotesDraft = (uid) => {
  try {
    const raw = window.localStorage.getItem(`${DRAFT_KEY_PREFIX}${uid}`);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

export const saveNotesDraft = (uid, draft) => {
  try { window.localStorage.setItem(`${DRAFT_KEY_PREFIX}${uid}`, JSON.stringify(draft)); } catch { /* ignore */ }
};

export const clearNotesDraft = (uid) => {
  try { window.localStorage.removeItem(`${DRAFT_KEY_PREFIX}${uid}`); } catch { /* ignore */ }
};

// ── Firestore ───────────────────────────────────────────────────────────────
export const saveSessionNotes = async ({ uid, subject, items, durationSec, dateStr }) => {
  const cleaned = (items || [])
    .map((it) => ({ text: String(it?.text || '').trim(), done: it?.done === true }))
    .filter((it) => it.text);
  if (!uid || cleaned.length === 0) return null; // nothing written → nothing to store
  const id = `${subjectKey(subject)}__${Date.now()}`;
  await setDoc(doc(db, 'users', uid, 'study_notes', id), {
    subject,
    date: dateStr,
    items: cleaned,
    durationSec: Math.max(0, Math.floor(durationSec || 0)),
    createdAt: serverTimestamp(),
  });
  trackWrite(1, 'study_notes');
  return id;
};

export const fetchSubjectNotes = async (uid, subject, max = 30) => {
  if (!uid) return [];
  const prefix = `${subjectKey(subject)}__`;
  const snap = await getDocs(query(
    collection(db, 'users', uid, 'study_notes'),
    where(documentId(), '>=', prefix),
    where(documentId(), '<', `${prefix}`),
    orderBy(documentId(), 'desc'),
    limit(max),
  ));
  trackRead(Math.max(1, snap.size), 'study_notes');
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};
