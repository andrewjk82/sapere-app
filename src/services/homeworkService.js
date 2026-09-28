import {
  collection, doc, getDoc, getDocs, query, where, writeBatch, serverTimestamp,
} from 'firebase/firestore';
import { db, ADMIN_UID, ADMIN_EMAIL } from '../firebase/config';
import { resizeDataUrlImage } from '../utils/imageResize';
import {
  MAX_HOMEWORK_PAGES, dataUrlBytes, purgeAfterDate, curriculumDocIdsForProfile, buildTopicPdfMap,
} from '../utils/homework';

const SUBMISSIONS = 'homework_submissions';
const MAX_PAGE_BYTES = 900 * 1024;
const MAX_BATCH_BYTES = 8 * 1024 * 1024; // Firestore commit limit is 10MiB

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const toOriginal = async (dataUrl) => {
  let out = await resizeDataUrlImage(dataUrl, { maxWidth: 960, maxHeight: 1400, quality: 0.72 });
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

export async function submitHomework({ uid, studentName, session, pageImages }) {
  const images = (pageImages || []).filter(Boolean);
  if (images.length === 0) throw new Error('empty');
  if (images.length > MAX_HOMEWORK_PAGES) throw new Error('too-many-pages');

  const originals = [];
  for (const image of images) originals.push(await toOriginal(image));
  if (originals.reduce((sum, img) => sum + dataUrlBytes(img), 0) > MAX_BATCH_BYTES) throw new Error('too-large');
  const thumbnails = await Promise.all(images.map(toThumbnail));

  const subRef = doc(db, SUBMISSIONS, session.id);
  const prevSnap = await getDoc(subRef);
  if (prevSnap.exists() && prevSnap.data().status === 'checked') throw new Error('already-checked');
  const prevCount = prevSnap.exists() ? Number(prevSnap.data().pageCount) || 0 : 0;

  const topics = (session.learnedTopics || [])
    .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
    .filter((t) => t.id);

  // Pages first, submission doc + session flag in the same batch: the teacher's
  // list only ever sees complete submissions.
  const commit = async () => {
    const batch = writeBatch(db);
    originals.forEach((image, index) => {
      batch.set(doc(db, SUBMISSIONS, session.id, 'pages', String(index)), { image, index, studentId: uid });
    });
    for (let i = originals.length; i < prevCount; i += 1) {
      batch.delete(doc(db, SUBMISSIONS, session.id, 'pages', String(i)));
    }
    batch.set(subRef, {
      studentId: uid,
      studentName,
      sessionId: session.id,
      sessionDate: session.date || '',
      topics,
      status: 'submitted',
      submittedAt: serverTimestamp(),
      checkedAt: null,
      pageCount: originals.length,
      thumbnails,
      originalsDeletedAt: null,
    });
    batch.update(doc(db, 'sessions', session.id), {
      homeworkStatus: 'submitted',
      homeworkSubmittedAt: serverTimestamp(),
    });
    await batch.commit();
  };

  try {
    await commit();
  } catch (err) {
    if (err?.code !== 'resource-exhausted') throw err;
    await sleep(1500);
    await commit();
  }

  notifyTeacherHomeworkSubmitted({ uid, studentName, topics, pageCount: originals.length })
    .catch((err) => console.warn('[homework] notify failed (non-fatal):', err?.message || err));

  return { originals, thumbnails };
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
    .map((p) => p.image)
    .filter(Boolean);
}

export async function fetchPendingSubmissions() {
  const snap = await getDocs(query(collection(db, SUBMISSIONS), where('status', '==', 'submitted')));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.submittedAt?.toMillis?.() || 0) - (b.submittedAt?.toMillis?.() || 0));
}

export async function markHomeworkChecked(sessionId) {
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
  });
  await batch.commit();
}

// 1–2 reads per homework open. Fetched fresh (not from LearningPath's cache)
// so a PDF the teacher just added shows up immediately.
export async function loadTopicPdfMap(profile) {
  const ids = curriculumDocIdsForProfile(profile);
  const snaps = await Promise.all(ids.map((id) => getDoc(doc(db, 'curriculum', id)).catch(() => null)));
  return buildTopicPdfMap(snaps.filter((s) => s?.exists()).map((s) => s.data()));
}
