import { useCallback, useEffect, useRef, useState } from 'react';
import { loadCurriculumNoteChecked, loadLegacyCurriculumNote, saveCurriculumNote, migrateExt2Notes } from './curriculumLocalNotes';
import { requestPersistentStorage } from './homeworkLocalStore';

// The curriculum worksheet's personal notes: one notepad, one saved note per topic (`noteKey`), kept on this device.
//
// The pad is shared by every topic, so the one rule is: **a note is only ever written under the key whose
// notes are on the pad right now** (`ownerRef`, set when that note finished loading). Switching topics
// first clears the pad and drops ownership, so the previous topic's ink can never be saved under the next
// topic's key, and a failed read can never be mistaken for "empty" and overwritten.
//
// Like homework, writing is saved the moment the app is hidden / closed or the worksheet is left — not only
// after the autosave delay — from `pendingRef`, the latest ink captured at every stroke (the canvas may
// already be gone when the screen unmounts).
export const useCurriculumNote = (canvasRef, noteKey, enabled, topicId = null) => {
  const ownerRef = useRef(null);       // key whose notes are on the pad; null while loading / unavailable
  const pendingRef = useRef(null);     // { key, data } written but not saved yet
  const timerRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [unsaved, setUnsaved] = useState(false);   // the stored note could not be read: this visit's writing is not saved
  const [attempt, setAttempt] = useState(0);       // bumped by retry() to read the stored note again

  // Save what is pending, for its own key only.
  const flushPending = useCallback(() => {
    window.clearTimeout(timerRef.current);
    const pending = pendingRef.current;
    pendingRef.current = null;
    if (!pending || pending.key !== ownerRef.current) return Promise.resolve(false);
    return saveCurriculumNote(pending.key, pending.data);
  }, []);

  useEffect(() => {
    if (!noteKey || !enabled) return undefined;
    let cancelled = false;
    window.clearTimeout(timerRef.current);
    ownerRef.current = null;
    pendingRef.current = null;
    // Never leave the previous topic's ink on the pad while this topic's notes load.
    canvasRef.current?.clear();
    requestPersistentStorage();
    (async () => {
      await migrateExt2Notes();   // Extension 2 notes follow their topics to the new ids (once per device)
      let result = await loadCurriculumNoteChecked(noteKey);
      if (!result.ok && !cancelled) {
        // One retry, a moment later (iPadOS sometimes drops the database connection in the background).
        await new Promise((resolve) => { setTimeout(resolve, 300); });
        if (!cancelled) result = await loadCurriculumNoteChecked(noteKey);
      }
      if (cancelled) return;
      if (result.ok) {
        let pages = result.data;
        let recovered = false;
        if (!pages && topicId) {
          // Nothing under the current key: pick up a note saved under an older key for this topic (see
          // curriculumLocalNotes). It is copied under the current key; the old record stays as it is.
          const legacy = await loadLegacyCurriculumNote(topicId);
          if (cancelled) return;
          if (legacy) { pages = legacy.pages; recovered = true; }
        }
        if (pages) canvasRef.current?.loadPagesData(pages);
        ownerRef.current = noteKey;     // from here on edits are saved under this key
        if (recovered) saveCurriculumNote(noteKey, pages);
        setUnsaved(false);
      } else {
        setUnsaved(true);                // read failed twice: notes work for this visit but are not saved (the stored note stays intact)
      }
      setReady(true);
    })();
    return () => {
      cancelled = true;
      // Leaving this topic (next topic, closed, another tab): save what was written just before, under its
      // own key, before ownership is dropped.
      flushPending();
      ownerRef.current = null;
      setReady(false);
      setUnsaved(false);
    };
  }, [noteKey, enabled, canvasRef, topicId, attempt, flushPending]);

  // The app going to the background or being closed: save now (taking the very latest ink from the pad).
  useEffect(() => {
    if (!enabled) return undefined;
    const flushNow = () => {
      const owner = ownerRef.current;
      const latest = owner ? canvasRef.current?.getPagesData() : null;
      if (owner && latest && pendingRef.current) pendingRef.current = { key: owner, data: latest };
      flushPending();
    };
    const onVisibility = () => { if (document.visibilityState === 'hidden') flushNow(); };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', flushNow);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', flushNow);
    };
  }, [enabled, canvasRef, flushPending]);

  // Save now (before switching topic / closing). Writes only the notes the pad actually holds for their owner.
  const saveNow = useCallback(() => {
    window.clearTimeout(timerRef.current);
    pendingRef.current = null;
    const owner = ownerRef.current;
    if (!owner) return Promise.resolve(false);
    const data = canvasRef.current?.getPagesData();
    return data ? saveCurriculumNote(owner, data) : Promise.resolve(false);
  }, [canvasRef]);

  const onInkChange = useCallback(() => {
    const owner = ownerRef.current;
    if (!owner) return;
    const data = canvasRef.current?.getPagesData();
    if (data) pendingRef.current = { key: owner, data };
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (ownerRef.current !== owner) return;   // the pad moved on to another topic meanwhile
      const latest = canvasRef.current?.getPagesData();
      if (latest) pendingRef.current = { key: owner, data: latest };
      flushPending();
    }, 800);
  }, [canvasRef, flushPending]);

  // The stored note could not be read: try again (this visit's writing on the pad is replaced by it).
  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return { ready, unsaved, saveNow, onInkChange, retry };
};
