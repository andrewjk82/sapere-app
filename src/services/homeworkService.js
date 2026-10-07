import { buildCheckedNotification } from '../utils/homeworkMarking';
import {
  collection, doc, getDoc, getDocs, query, where, writeBatch, serverTimestamp,
} from 'firebase/firestore';
import { db, ADMIN_UID, ADMIN_EMAIL } from '../firebase/config';
import { resizeDataUrlImage } from '../utils/imageResize';
import { createAnswerKeyCache, idbAnswerKeyAdapter } from '../utils/answerKeyCache';
import {
  MAX_HOMEWORK_PAGES, dataUrlBytes, purgeAfterDate, curriculumDocIdsForProfile, buildTopicPdfMap, planUploadBatches,
} from '../utils/homework';

const SUBMISSIONS = 'homework_submissions';
const MAX_PAGE_BYTES = 900 * 1024;
const MAX_TOTAL_BYTES = 24 * 1024 * 1024; // all pages together; they are uploaded in several commits

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const toOriginal = async (dataUrl, { squeeze = false } = {}) => {
  let out = squeeze
    ? await resizeDataUrlImage(dataUrl, { maxWidth: 800, maxHeight: 1200, quality: 0.5 })
    : await resizeDataUrlImage(dataUrl, { maxWidth: 960, maxHeight: 1400, quality: 0.72 });
  if (dataUrlBytes(out) > MAX_PAGE_BYTES) {
    out = await resizeDataUrlImage(dataUrl, { maxWidth: 800, maxHeight: 1200, quality: 0.5 });
  }
  if (dataUrlBytes(out) > MAX_PAGE_BYTES) throw new Error('page-too-large');
  return out;
};

const toThumbnail = (dataUrl) => resizeDataUrlImage(dataUrl, { maxWidth: 240, maxHeight: 340, quality: 0.6 });

export const studentDisplayName = (profile, user) => {
  const full = [profile?.firstName, profile?.lastName].filter(Boolean).join(' ').trim();
  return full || profile?.displayName || user?.displayName || user?.email || 'A student';
};

const notifyTeacherHomeworkSubmitted = async ({ uid, studentName, topics, pageCount }) => {
  if (!ADMIN_UID || uid === ADMIN_UID) return;
  const pages = `${pageCount} page${pageCount === 1 ? '' : 's'}`;
  const topicLine = topics.map((t) => t.label).join(', ');
  const response = await fetch('/api/send-notif', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId: ADMIN_UID,
      email: ADMIN_EMAIL,
      subject: `Homework: ${studentName} submitted`,
      text: `${studentName} submitted homework (${pages}).\n${topicLine}`,
      metadata: { type: 'homework_submitted', studentId: uid, studentName, pageCount },
    }),
  });
  if (!response.ok) console.warn('[homework] send-notif returned', response.status);
};

export async function submitHomework({ uid, studentName, session, pageRecords, pageImages, onProgress }) {
  const records = (pageRecords || (pageImages || []).map((image) => ({ image })))
    .filter((record) => record?.image);
  if (records.length === 0) throw new Error('empty');
  if (records.length > MAX_HOMEWORK_PAGES) throw new Error('too-many-pages');

  const totalBytes = (list) => list.reduce((sum, img) => sum + dataUrlBytes(img), 0);
  let originals = [];
  for (const record of records) originals.push(await toOriginal(record.image));
  if (totalBytes(originals) > MAX_TOTAL_BYTES) {
    // A very long homework: re-encode every page a little smaller (still readable).
    originals = [];
    for (const record of records) originals.push(await toOriginal(record.image, { squeeze: true }));
    if (totalBytes(originals) > MAX_TOTAL_BYTES) throw new Error('too-large');
  }
  const thumbnails = await Promise.all(records.map((record) => toThumbnail(record.image)));
  const pageTopics = records.map(({ topicId, topicLabel }) => ({
    topicId: topicId || null,
    topicLabel: topicLabel || (topicId ? '' : 'Earlier combined notes'),
  }));

  const subRef = doc(db, SUBMISSIONS, session.id);
  const prevSnap = await getDoc(subRef);
  if (prevSnap.exists() && prevSnap.data().status === 'checked') throw new Error('already-checked');
  const prevCount = prevSnap.exists() ? Number(prevSnap.data().pageCount) || 0 : 0;

  const topics = (session.learnedTopics || [])
    .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
    .filter((t) => t.id);

  // A short homework is ONE batch: pages + submission doc + session flag, so the
  // teacher's list only ever sees complete submissions. A long one is uploaded in
  // several smaller commits; the earlier ones write the submission doc with
  // `uploading: true` (the teacher's list skips it) and only the last commit marks
  // it complete and flags the session. A failed upload therefore never shows up
  // half-done to the teacher — the student just submits again.
  const stale = [];
  for (let i = originals.length; i < prevCount; i += 1) stale.push(i);
  const plan = planUploadBatches(originals.map(dataUrlBytes), stale);

  const commitBatch = async ({ pages, deletes }, isLast) => {
    const batch = writeBatch(db);
    pages.forEach((index) => {
      batch.set(doc(db, SUBMISSIONS, session.id, 'pages', String(index)), {
        image: originals[index],
        index,
        studentId: uid,
        ...pageTopics[index],
      });
    });
    deletes.forEach((index) => batch.delete(doc(db, SUBMISSIONS, session.id, 'pages', String(index))));
    const base = {
      studentId: uid,
      studentName,
      sessionId: session.id,
      sessionDate: session.date || '',
      topics,
      status: 'submitted',
      checkedAt: null,
      pageCount: originals.length,
      originalsDeletedAt: null,
    };
    if (isLast) {
      batch.set(subRef, {
        ...base,
        submittedAt: serverTimestamp(),
        thumbnails,
        pageTopics,
        uploading: false,
      });
      batch.update(doc(db, 'sessions', session.id), {
        homeworkStatus: 'submitted',
        homeworkSubmittedAt: serverTimestamp(),
      });
    } else {
      batch.set(subRef, { ...base, uploading: true });
    }
    await batch.commit();
  };

  const commitWithRetry = async (part, isLast) => {
    try {
      await commitBatch(part, isLast);
    } catch (err) {
      if (err?.code !== 'resource-exhausted') throw err;
      await sleep(1500);
      await commitBatch(part, isLast);
    }
  };

  for (let i = 0; i < plan.length; i += 1) {
    onProgress?.({ done: i, total: plan.length });
    await commitWithRetry(plan[i], i === plan.length - 1);
  }
  onProgress?.({ done: plan.length, total: plan.length });

  notifyTeacherHomeworkSubmitted({ uid, studentName, topics, pageCount: originals.length })
    .catch((err) => console.warn('[homework] notify failed (non-fatal):', err?.message || err));

  return {
    originals,
    thumbnails,
    submittedPages: originals.map((image, index) => ({ image, ...pageTopics[index] })),
  };
}

export async function fetchSubmission(sessionId) {
  const snap = await getDoc(doc(db, SUBMISSIONS, sessionId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function fetchSubmissionPages(sessionId) {
  const snap = await getDocs(collection(db, SUBMISSIONS, sessionId, 'pages'));
  return snap.docs
    .map((d) => d.data())
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
    .filter((p) => p.image)
    .map((p) => ({
      image: p.image,
      index: p.index,
      topicId: p.topicId || null,
      topicLabel: p.topicLabel || (p.topicId ? '' : 'Earlier combined notes'),
    }));
}

export async function fetchPendingSubmissions() {
  const snap = await getDocs(query(collection(db, SUBMISSIONS), where('status', '==', 'submitted')));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((item) => !item.uploading) // a long upload still in progress
    .sort((a, b) => (a.submittedAt?.toMillis?.() || 0) - (b.submittedAt?.toMillis?.() || 0));
}

// Assigned sessions still awaiting completion. Homework can be represented by
// topic selections on older sessions even when the free-text field is empty.
// Only the last ASSIGNMENT_WINDOW_DAYS of sessions are read (a range query on
// `date`), and the result is reused for ASSIGNMENT_CACHE_MS, so reopening the
// dashboard does not re-read it. The old version read every session ever.
const ASSIGNMENT_WINDOW_DAYS = 56;
const ASSIGNMENT_CACHE_MS = 10 * 60 * 1000;
let assignmentsCache = null; // { at, list }

const dateKeyDaysAgo = (days) => {
  const d = new Date(Date.now() - days * 86400000);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export async function fetchHomeworkAssignments({ force = false } = {}) {
  if (!force && assignmentsCache && Date.now() - assignmentsCache.at < ASSIGNMENT_CACHE_MS) {
    return assignmentsCache.list;
  }
  const snap = await getDocs(query(collection(db, 'sessions'), where('date', '>=', dateKeyDaysAgo(ASSIGNMENT_WINDOW_DAYS))));
  const sessions = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const assignments = sessions.filter((session) => (
    Boolean(String(session.homework || '').trim())
    || (Array.isArray(session.learnedTopics) && session.learnedTopics.length > 0)
  ));

  const list = assignments
    .filter((assignment) => (
      assignment.homeworkStatus !== 'checked'
      && assignment.isHomeworkCompleted !== true
    ))
    .map((assignment) => {
      const next = sessions
        .filter((session) => session.studentId === assignment.studentId && (session.date || '') > (assignment.date || ''))
        .sort((a, b) => (a.date || '').localeCompare(b.date || ''))[0];
      return {
        ...assignment,
        homeworkDueDate: assignment.homeworkDueDate || next?.date || '',
        displayHomeworkStatus: assignment.homeworkStatus === 'submitted' ? 'Submitted' : 'Awaiting',
      };
    })
    .sort((a, b) => (a.homeworkDueDate || a.date || '').localeCompare(b.homeworkDueDate || b.date || ''));
  assignmentsCache = { at: Date.now(), list };
  return list;
}

// `grade` (optional, from the marking panel): { score, total, marks, comment }.
// Stored on the session so the weekly report's Homework Mark and the
// student's history pick it up with no extra reads.
export async function markHomeworkChecked(sessionId, grade = null, notify = null) {
  const gradeFields = {};
  if (grade && grade.total > 0) {
    gradeFields.homeworkScore = grade.score;
    gradeFields.homeworkTotal = grade.total;
    gradeFields.homeworkMarks = grade.marks || {};
  }
  if (grade?.comment?.trim()) gradeFields.homeworkComment = grade.comment.trim();
  const batch = writeBatch(db);
  batch.update(doc(db, SUBMISSIONS, sessionId), {
    status: 'checked',
    checkedAt: serverTimestamp(),
    purgeAfter: purgeAfterDate(new Date()),
  });
  batch.update(doc(db, 'sessions', sessionId), {
    isHomeworkCompleted: true,
    homeworkCompletedAt: new Date().toISOString(),
    homeworkStatus: 'checked',
    ...gradeFields,
  });
  await batch.commit();
  assignmentsCache = null;
  // Tell the student it is back. Push + in-app only (no email), and never blocks or fails the check.
  if (notify?.studentId) {
    notifyStudentHomeworkChecked({ studentId: notify.studentId, sessionId, topics: notify.topics || [], grade })
      .catch((err) => console.warn('[homework] student notify failed (non-fatal):', err?.message || err));
  }
}

const notifyStudentHomeworkChecked = async ({ studentId, sessionId, topics, grade }) => {
  const { subject, text, score } = buildCheckedNotification({ topics, grade });
  const response = await fetch('/api/send-notif', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId,
      skipEmail: true,
      subject,
      text,
      metadata: { type: 'homework_checked', sessionId, ...(score ? { score } : {}) },
    }),
  });
  if (!response.ok) console.warn('[homework] send-notif (student) returned', response.status);
};

// Textbook answer keys (answer_keys/{topicId}, teacher-only). Memory first, then
// the device cache (a key read once is not read again for two weeks), then one
// Firestore read per topic.
const answerKeyCache = new Map();
const persistentAnswerKeys = createAnswerKeyCache(idbAnswerKeyAdapter());
export async function fetchAnswerKeys(topicIds = []) {
  const ids = [...new Set(topicIds.filter(Boolean))];
  await Promise.all(ids.filter((id) => !answerKeyCache.has(id)).map(async (id) => {
    try {
      const saved = await persistentAnswerKeys.get(id);
      if (saved) { answerKeyCache.set(id, saved); return; }
      const snap = await getDoc(doc(db, 'answer_keys', id));
      const data = snap.exists() ? snap.data() : null;
      answerKeyCache.set(id, data);
      persistentAnswerKeys.set(id, data);
    } catch (err) {
      // Not cached, so it is retried next open. Reported as an error rather
      // than "no key" — e.g. permission-denied before the rule is deployed.
      console.warn('[homework] answer key load failed:', id, err?.code || err);
    }
  }));
  return Object.fromEntries(ids.map((id) => [
    id,
    answerKeyCache.has(id) ? answerKeyCache.get(id) : { error: true },
  ]));
}

// 1–2 reads per homework open. Fetched fresh (not from LearningPath's cache)
// so a PDF the teacher just added shows up immediately.
export async function loadTopicPdfMap(profile) {
  const ids = curriculumDocIdsForProfile(profile);
  const snaps = await Promise.all(ids.map((id) => getDoc(doc(db, 'curriculum', id)).catch(() => null)));
  return buildTopicPdfMap(snaps.filter((s) => s?.exists()).map((s) => s.data()));
}
