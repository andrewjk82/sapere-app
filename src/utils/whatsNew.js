// One-time "what's new" notice for students. Remembered on this device only, so it costs Firestore nothing; a student
// on a second device sees it once more. Change NOTICE_ID to announce something new.
export const NOTICE_ID = '2026-11-daily-practice';
const key = (id) => `sapere:whatsNew:${id}`;

export const shouldShowWhatsNew = ({ isAdmin, role, storage = globalThis.localStorage, id = NOTICE_ID }) => {
  if (isAdmin || role !== 'student') return false;
  try { return storage.getItem(key(id)) !== 'seen'; } catch { return false; }
};

export const markWhatsNewSeen = ({ storage = globalThis.localStorage, id = NOTICE_ID } = {}) => {
  try { storage.setItem(key(id), 'seen'); } catch { /* private mode: it may show again */ }
};
