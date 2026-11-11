// The quiz draft (localStorage `quiz_draft_<uid>`) is rewritten on every answer, keystroke and timer tick.
// Handwritten working-out images used to live inside it: 1.5–5 MB of base64 per session, re-serialised each
// time (lag that grew through the session) and, past the ~5 MB localStorage quota, silently not saved at all.
// The images now go to IndexedDB once, when the answer is given; the draft keeps a small marker. An image is
// only left out of the draft AFTER IndexedDB confirmed it holds it, so nothing is lost where IndexedDB fails.
import { idbGet, idbSet, idbDel } from './idbStore.js';

const MAX_QUESTIONS = 60;
const keyOf = (uid, idx) => `quiz_draft_wo:${uid}:${idx}`;

const pagesOf = (r) => (Array.isArray(r?.workingOutPages) ? r.workingOutPages : []);
export const hasDraftImages = (r) => Boolean(r && (typeof r.workingOut === 'string' && r.workingOut.length > 100 || pagesOf(r).some((p) => typeof p === 'string' && p.length > 100)));
// Cheap identity of a result's images (lengths only — never hashes megabytes).
export const imageSig = (r) => `${typeof r?.workingOut === 'string' ? r.workingOut.length : 0}:${pagesOf(r).map((p) => (p || '').length).join(',')}`;

// Draft copy of the results: images that IndexedDB holds (stored[idx] === their signature) become a marker.
export const slimResultsForDraft = (results, stored = {}) => (Array.isArray(results) ? results : []).map((r, idx) => {
  if (!hasDraftImages(r) || stored[idx] !== imageSig(r)) return r;
  const { workingOut: _one, workingOutPages: _pages, ...rest } = r;
  return { ...rest, _woStored: imageSig(r) };
});

// Stores the images of every result not yet stored. Resolves to { idx: signature } for the ones now safely held.
export const storeDraftImages = async (uid, date, results, stored = {}) => {
  const done = {};
  if (!uid) return done;
  await Promise.all((Array.isArray(results) ? results : []).map(async (r, idx) => {
    if (!hasDraftImages(r)) return;
    const sig = imageSig(r);
    if (stored[idx] === sig) return;
    const ok = await idbSet(keyOf(uid, idx), { date, sig, workingOut: r.workingOut || null, workingOutPages: pagesOf(r) });
    if (ok) done[idx] = sig;
  }));
  return done;
};

// Puts the images back into restored draft results. A marker whose image cannot be found is simply dropped.
export const hydrateDraftResults = async (uid, date, results, get = idbGet) => {
  const stored = {};
  const out = await Promise.all((Array.isArray(results) ? results : []).map(async (r, idx) => {
    if (!r || !r._woStored) return r;
    const { _woStored: sig, ...rest } = r;
    const saved = uid ? await get(keyOf(uid, idx)) : null;
    if (!saved || saved.date !== date || saved.sig !== sig) return rest;
    stored[idx] = sig;
    return { ...rest, workingOut: saved.workingOut || null, workingOutPages: saved.workingOutPages || [] };
  }));
  return { results: out, stored };
};

export const clearDraftImages = (uid) => {
  if (!uid) return;
  for (let idx = 0; idx < MAX_QUESTIONS; idx += 1) idbDel(keyOf(uid, idx));
};
