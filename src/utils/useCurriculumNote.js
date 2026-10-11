import { useCallback, useEffect, useRef, useState } from 'react';
import { loadCurriculumNoteChecked, saveCurriculumNote } from './curriculumLocalNotes';
import { requestPersistentStorage } from './homeworkLocalStore';

// The curriculum worksheet's personal notes: one notepad, one saved note per topic (`noteKey`), kept on this device.
//
// The pad is shared by every topic, so the one rule is: **a note is only ever written under the key whose
// notes are on the pad right now** (`ownerRef`, set when that note finished loading). Switching topics
// first clears the pad and drops ownership, so the previous topic's ink can never be saved under the next
// topic's key, and a failed read can never be mistaken for "empty" and overwritten.
export const useCurriculumNote = (canvasRef, noteKey, enabled) => {
  const ownerRef = useRef(null);       // key whose notes are on the pad; null while loading / unavailable
  const timerRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [unsaved, setUnsaved] = useState(false);   // the stored note could not be read: this visit's writing is not saved

  useEffect(() => {
    if (!noteKey || !enabled) return undefined;
    let cancelled = false;
    window.clearTimeout(timerRef.current);
    ownerRef.current = null;
    // Never leave the previous topic's ink on the pad while this topic's notes load.
    canvasRef.current?.clear();
    requestPersistentStorage();
    (async () => {
      let result = await loadCurriculumNoteChecked(noteKey);
      if (!result.ok && !cancelled) result = await loadCurriculumNoteChecked(noteKey); // one retry
      if (cancelled) return;
      if (result.ok) {
        if (result.data) canvasRef.current?.loadPagesData(result.data);
        ownerRef.current = noteKey;     // from here on edits are saved under this key
      } else {
        setUnsaved(true);                // read failed twice: notes work for this visit but are not saved (the stored note stays intact)
      }
      setReady(true);
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(timerRef.current);
      setReady(false);
      setUnsaved(false);
    };
  }, [noteKey, enabled, canvasRef]);

  // Save now (before switching topic / closing). Writes only the notes the pad actually holds for their owner.
  const saveNow = useCallback(() => {
    window.clearTimeout(timerRef.current);
    const owner = ownerRef.current;
    if (!owner) return Promise.resolve(false);
    const data = canvasRef.current?.getPagesData();
    return data ? saveCurriculumNote(owner, data) : Promise.resolve(false);
  }, [canvasRef]);

  const onInkChange = useCallback(() => {
    const owner = ownerRef.current;
    if (!owner) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (ownerRef.current !== owner) return;   // the pad moved on to another topic meanwhile
      const data = canvasRef.current?.getPagesData();
      if (data) saveCurriculumNote(owner, data);
    }, 800);
  }, [canvasRef]);

  return { ready, unsaved, saveNow, onInkChange };
};
