// Pure homework helpers — no Firebase imports, so scripts/testHomework.mjs can run them in Node.

export const MAX_HOMEWORK_PAGES = 10;
export const HOMEWORK_RETENTION_DAYS = 30;
// Lessons older than this with homework never started don't clutter the student's list.
export const HOMEWORK_ACTIVE_WINDOW_DAYS = 14;

const DAY_MS = 24 * 60 * 60 * 1000;

const safeDecode = (s) => { try { return decodeURIComponent(s); } catch { return s; } };

// Accepts share links (/file/d/{id}/view), /preview, open?id=, uc?id=,
// drive.usercontent.google.com, and Google Docs viewer wrappers
// (docs.google.com/gview?url=<encoded drive uc link>) — many stored topic
// links use the gview form.
export const extractDriveFileId = (url) => {
  if (!url || typeof url !== 'string') return null;
  const decoded = safeDecode(url);
  if (!/drive\.google\.com|drive\.usercontent\.google\.com/.test(decoded)) return null;
  const match = url.match(/\/file\/d\/([^/?#]+)/) || decoded.match(/[?&]id=([^&#]+)/);
  return match ? match[1] : null;
};


export const toDrivePreviewUrl = (url) => {
  const trimmed = String(url || '').trim();
  if (!trimmed) return '';
  const id = extractDriveFileId(trimmed);
  if (!id) return trimmed;
  // Google Drive's native /preview endpoint handles multi-page PDFs reliably,
  // unlike gview which often truncates after the first page.
  return `https://drive.google.com/file/d/${id}/preview`;
};

export const toDriveOpenUrl = (url) => {
  const trimmed = String(url || '').trim();
  const id = extractDriveFileId(trimmed);
  return id ? `https://drive.google.com/file/d/${id}/view` : trimmed;
};

export const getHomeworkStatus = (session) => {
  if (session?.isHomeworkCompleted === true || session?.homeworkStatus === 'checked') return 'checked';
  if (session?.homeworkStatus === 'submitted') return 'submitted';
  return 'todo';
};

const toLocalDateStr = (date) => date.toLocaleDateString('en-CA'); // YYYY-MM-DD, local time

export const getHomeworkItems = (sessions, { today = new Date() } = {}) => {
  const cutoff = toLocalDateStr(new Date(today.getTime() - HOMEWORK_ACTIVE_WINDOW_DAYS * DAY_MS));
  return (Array.isArray(sessions) ? sessions : [])
    .filter((s) => s?.id && Array.isArray(s.learnedTopics) && s.learnedTopics.length > 0)
    .map((s) => ({
      sessionId: s.id,
      date: s.date || '',
      topics: s.learnedTopics
        .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
        .filter((t) => t.id),
      status: getHomeworkStatus(s),
    }))
    .filter((item) => item.status !== 'todo' || item.date >= cutoff)
    .sort((a, b) => b.date.localeCompare(a.date));
};

// Every homework the student ever had, newest first, for the History screen.
// Built only from sessions already in memory (no reads). A to-do older than
// the active window is 'missed'.
export const getHomeworkHistory = (sessions, { today = new Date() } = {}) => {
  const cutoff = toLocalDateStr(new Date(today.getTime() - HOMEWORK_ACTIVE_WINDOW_DAYS * DAY_MS));
  return (Array.isArray(sessions) ? sessions : [])
    .filter((s) => s?.id && Array.isArray(s.learnedTopics) && s.learnedTopics.length > 0)
    .map((s) => {
      const status = getHomeworkStatus(s);
      const date = s.date || '';
      const hasMark = s.homeworkScore != null && Number(s.homeworkTotal) > 0;
      return {
        sessionId: s.id,
        date,
        topics: s.learnedTopics
          .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
          .filter((t) => t.id),
        status: status === 'todo' && date < cutoff ? 'missed' : status,
        mark: hasMark ? `${Number(s.homeworkScore)}/${Number(s.homeworkTotal)}` : '',
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const curriculumDocIdsForProfile = (profile = {}) => {
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear];
  const rawCourses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse];
  const courses = rawCourses.filter(Boolean);
  if (courses.length === 0) courses.push('Advanced');
  const ids = [];
  rawYears.forEach((y) => {
    const n = parseInt(String(y || '').replace(/\D/g, ''), 10);
    if (!Number.isFinite(n) || n <= 0) return;
    const candidates = n >= 11 ? courses.map((c) => `Year_${n}_${c}`) : [`Year_${n}`];
    candidates.forEach((id) => { if (!ids.includes(id)) ids.push(id); });
  });
  return ids;
};

export const buildTopicPdfMap = (curriculumDocs) => {
  const map = {};
  (Array.isArray(curriculumDocs) ? curriculumDocs : []).forEach((d) => {
    (d?.chapters || []).forEach((chapter) => {
      (chapter?.topics || []).forEach((topic) => {
        if (topic?.id && topic.homeworkPdfUrl) map[topic.id] = topic.homeworkPdfUrl;
      });
    });
  });
  return map;
};

export const dataUrlBytes = (dataUrl) => {
  if (!dataUrl || typeof dataUrl !== 'string') return 0;
  const comma = dataUrl.indexOf(',');
  const b64 = comma >= 0 ? dataUrl.slice(comma + 1) : dataUrl;
  const padding = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0;
  return Math.floor((b64.length * 3) / 4) - padding;
};

// Submission images are written by the student's client, so a crafted doc could
// hold a remote URL that the teacher's browser would fetch (IP/referrer beacon).
// Only inline raster data URLs are ever rendered.
const SAFE_IMAGE_DATA_URL = /^data:image\/(png|jpe?g|webp);base64,/;
export const isSafeImageDataUrl = (value) => typeof value === 'string' && SAFE_IMAGE_DATA_URL.test(value);

export const purgeAfterDate =(from = new Date(), days = HOMEWORK_RETENTION_DAYS) =>
  new Date(from.getTime() + days * DAY_MS).toISOString().slice(0, 10);
