import { useEffect, useMemo, useSyncExternalStore } from 'react';
import { deleteDoc, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Class-page lesson notes, local first. The note lives on the device (localStorage); typing never touches Firebase.
// Done / leaving the page / coming back online sends the dirty ones in ONE write each (class_notes/{lesson}), and a
// lesson's server copy is read at most once per 6 hours per device (and only when nothing unsent is waiting).
// Admin-only by rules: students can read their own session docs, so private notes must not live there.

const PREFIX = 'sapere-cache:class-note:v1:';
const FRESH_MS = 6 * 60 * 60 * 1000;
const WRITE_MS = 15000;
const listeners = new Set();
const emit = () => listeners.forEach((fn) => { try { fn(); } catch { /* listener */ } });

export const noteDocId = (key) => String(key || '').replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 300);
const storageKey = (key) => `${PREFIX}${noteDocId(key)}`;

const rawGet = (key) => { try { return window.localStorage.getItem(storageKey(key)); } catch { return null; } };
const parse = (raw) => { try { return raw ? JSON.parse(raw) : null; } catch { return null; } };
const put = (key, value) => { try { window.localStorage.setItem(storageKey(key), JSON.stringify(value)); } catch { /* storage full/unavailable */ } emit(); };

// The text typed here (or the last server copy) and whether it still has to be sent.
export const readNote = (key) => parse(rawGet(key));

export const saveNoteLocal = (key, text, meta) => put(key, { text, dirty: true, deleted: false, meta, at: Date.now() });
export const deleteNoteLocal = (key, meta) => put(key, { text: '', dirty: true, deleted: true, meta, at: Date.now() });

let flushing = false;
export const flushNotes = async () => {
  if (flushing || typeof window === 'undefined') return;
  flushing = true;
  try {
    const keys = [];
    try {
      for (let i = 0; i < window.localStorage.length; i += 1) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(PREFIX)) keys.push(k);
      }
    } catch { /* ignore */ }
    for (const k of keys) {
      const note = parse(window.localStorage.getItem(k));
      if (!note?.dirty) continue;
      const id = k.slice(PREFIX.length);
      const ref = doc(db, 'class_notes', id);
      const send = note.deleted
        ? deleteDoc(ref)
        : setDoc(ref, { text: note.text, ...(note.meta || {}), updatedAt: serverTimestamp() }, { merge: true });
      try {
        await Promise.race([send, new Promise((_, rej) => { window.setTimeout(() => rej(new Error('timeout')), WRITE_MS); })]);
        // Only mark it sent if nothing was typed meanwhile.
        const now = parse(window.localStorage.getItem(k));
        if (now && now.at === note.at) {
          if (note.deleted) window.localStorage.removeItem(k);
          else window.localStorage.setItem(k, JSON.stringify({ ...now, dirty: false, serverAt: Date.now() }));
          emit();
        }
      } catch { /* stays dirty: tried again on the next trigger */ }
    }
  } finally { flushing = false; }
};

const checked = new Set();
const fetchOnce = async (key) => {
  const id = noteDocId(key);
  if (!id || checked.has(id)) return;
  const local = readNote(key);
  if (local?.dirty) return;                                   // unsent text wins; it goes up on flush
  if (local?.serverAt && Date.now() - local.serverAt < FRESH_MS) return;
  checked.add(id);
  try {
    const snap = await Promise.race([getDoc(doc(db, 'class_notes', id)), new Promise((_, rej) => { window.setTimeout(() => rej(new Error('timeout')), 8000); })]);
    const now = readNote(key);
    if (now?.dirty) return;
    if (snap.exists()) put(key, { text: snap.data().text || '', dirty: false, deleted: false, serverAt: Date.now(), at: now?.at || 0 });
    else if (now) { try { window.localStorage.removeItem(storageKey(key)); } catch { /* ignore */ } emit(); }
  } catch { checked.delete(id); }                              // offline / slow: ask again next time
};

const subscribe = (fn) => {
  listeners.add(fn);
  window.addEventListener('storage', fn);
  return () => { listeners.delete(fn); window.removeEventListener('storage', fn); };
};

/** { text, dirty } for one lesson, from the device; asks the server once in a while. */
export const useLessonNote = (key) => {
  const raw = useSyncExternalStore(subscribe, () => rawGet(key), () => null);
  const note = useMemo(() => parse(raw), [raw]);
  useEffect(() => { if (key) fetchOnce(key); }, [key]);
  return { text: note && !note.deleted ? note.text || '' : '', dirty: Boolean(note?.dirty), exists: Boolean(note && !note.deleted && note.text) };
};

/** Sends unsent notes now, and again whenever the connection returns or the app comes back on screen. */
export const useNoteFlush = () => {
  useEffect(() => {
    flushNotes();
    const onBack = () => { if (document.visibilityState !== 'hidden') flushNotes(); };
    window.addEventListener('online', flushNotes);
    document.addEventListener('visibilitychange', onBack);
    return () => { window.removeEventListener('online', flushNotes); document.removeEventListener('visibilitychange', onBack); };
  }, []);
};
