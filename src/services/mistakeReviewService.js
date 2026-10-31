import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { fetchQuestionsByIds } from './dailyAssignmentService';
import { getQuestionsByIds } from './contentLoader';
import { applyLiveContent, liveLookupIds } from '../utils/liveQuestionContent';
import { toReviewItems } from '../utils/scholarshipTest';
import { sessionsWithMistakes, mistakesFromDetail, mergeMistakes, specialMissed } from '../utils/mistakeReview';

// Detail snapshots do not change once written, so a second click on the button re-reads nothing.
const detailCache = new Map();

const statCollectionOf = (stat) => stat.statCollection || (stat.challengeType === 'calc' ? 'calc_stats' : 'daily_stats');

/** Questions + answers of one session: already on the record, cached, or ONE read of its detail snapshot. */
const readDetail = async (stat, pathsFor) => {
  if (Array.isArray(stat.questions) && stat.questions.length > 0 && Array.isArray(stat.userAnswers)) {
    return { questions: stat.questions, userAnswers: stat.userAnswers, answerResults: stat.answerResults || [] };
  }
  for (const [coll, id] of pathsFor(stat)) {
    const key = `${coll}/${id}/${statCollectionOf(stat)}/${stat.id}`;
    if (detailCache.has(key)) return detailCache.get(key);
    const snap = await getDoc(doc(db, coll, id, statCollectionOf(stat), stat.id, 'detail_snapshot', 'main'));
    if (snap.exists()) { const data = snap.data(); detailCache.set(key, data); return data; }
  }
  return null;
};

/**
 * Everything the teacher can review for one student.
 * Reads: at most MAX_SESSIONS detail snapshots (one each, only for recent sessions that have a mistake, none if cached);
 * question text comes from the content CDN.
 */
export const loadMistakes = async ({ stats, pathsFor, specialWeekly }) => {
  const entries = [];
  for (const stat of sessionsWithMistakes(stats)) {
    try {
      const detail = await readDetail(stat, pathsFor);
      if (detail) entries.push(...mistakesFromDetail(detail, stat));
    } catch (err) { console.warn('Mistake review: a session could not be read:', err?.code || err); }
  }

  // The bank's current wording and solution, as the session review does.
  if (entries.length) {
    try {
      const docs = await fetchQuestionsByIds(liveLookupIds(entries.map((e) => e.question)));
      const live = applyLiveContent(entries.map((e) => e.question), docs);
      entries.forEach((e, i) => { if (live[i]) e.question = live[i]; });
    } catch (err) { console.warn('Mistake review: live content unavailable:', err?.code || err); }
  }

  // Special tests: ids only (the answer was not kept), questions from the content CDN.
  const missed = specialMissed(specialWeekly);
  if (missed.length) {
    try {
      const { docs } = await getQuestionsByIds(missed.map((m) => m.id));
      const byId = new Map(docs.map((d) => [String(d.id), d]));
      missed.forEach((m) => {
        const q = byId.get(String(m.id));
        // toReviewItems turns the index answers into the right option's text, which is what the review compares.
        if (q) entries.push({ question: toReviewItems([q], {}).questions[0], userAnswer: '', result: { correct: false }, label: m.label, source: 'special' });
      });
    } catch (err) { console.warn('Mistake review: special-test questions unavailable:', err?.code || err); }
  }
  return mergeMistakes(entries);
};
