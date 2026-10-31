/**
 * OC & Selective page: mock-exam formats and the weak-spot summary.
 *
 * A mock is a ScholarshipTest run with the real exam's length and time limit, kept in its own history
 * (`mock:<examId>` in the test storage key) so it never mixes with the 10-question topic tests. The weak-spot
 * summary reads BOTH histories: every answer the student has given in these exams counts.
 */
import { CURRICULUM_DATA } from '../constants/curriculumData.js';
import { enabledScholarshipExams } from './scholarshipExams.js';
import { loadTestState, gradeQuestionMarks } from './scholarshipTest.js';

export const OC_EXAM_ID = 'sch-oc';
export const SELECTIVE_EXAM_ID = 'sch-selective';
export const HUB_EXAM_IDS = [OC_EXAM_ID, SELECTIVE_EXAM_ID];

/** One sidebar page per exam: its tab key (App routes on it) and the name students see. */
export const HUB_PAGES = {
  [OC_EXAM_ID]: { tab: 'OcPrep', label: 'OC' },
  [SELECTIVE_EXAM_ID]: { tab: 'SelectivePrep', label: 'Selective' },
};
export const examIdForTab = (tab) => HUB_EXAM_IDS.find((id) => HUB_PAGES[id].tab === tab) || null;

/**
 * Real test formats: marks (one per question, one per part of a passage) and minutes. Writing is not
 * auto-gradable and has no questions in the bank, so it is not offered as a mock.
 * Check against the current NSW Department of Education test information before changing a student-facing number.
 */
export const MOCK_FORMATS = {
  'sch-oc-english': { marks: 50, minutes: 30, name: 'Reading' },
  'sch-oc-maths': { marks: 35, minutes: 40, name: 'Mathematical Reasoning' },
  'sch-oc-thinking': { marks: 30, minutes: 30, name: 'Thinking Skills' },
  'sch-selective-reading': { marks: 30, minutes: 25, name: 'Reading' },
  'sch-selective-maths': { marks: 35, minutes: 40, name: 'Mathematical Reasoning' },
  'sch-selective-thinking': { marks: 40, minutes: 40, name: 'Thinking Skills' },
};

/** Weak-spot rules: a group needs this many marks answered before it is judged, and is "weak" below WEAK_BELOW. */
export const MIN_MARKS_TO_JUDGE = 6;
export const WEAK_BELOW = 0.6;
/** Only each topic's most recent attempts count, so a weak spot that has been fixed stops showing. */
export const RECENT_ATTEMPTS = 8;

export const mockStorageId = (examId) => `mock:${examId}`;

/** The OC / Selective exams this student has switched on (Scholarship on + the exam ticked). */
export const hubExamsFor = (profile) => {
  if (profile?.scholarshipEnabled !== true) return [];
  const all = (CURRICULUM_DATA.Scholarship || []).map((e) => e.id);
  const chosen = enabledScholarshipExams(all, profile);
  return HUB_EXAM_IDS.filter((id) => all.includes(id) && chosen.includes(id));
};


/** How many questions make a mock: the section's average marks per question decides, so passages do not inflate it. */
export const mockSizeFor = (questions, targetMarks) => {
  const units = questions.length;
  if (!units) return 0;
  const marks = questions.reduce((n, q) => n + (q.subQuestions?.length || 1), 0);
  return Math.max(1, Math.min(units, Math.round((targetMarks * units) / Math.max(1, marks))));
};

const bump = (map, key, marks, total) => {
  const e = map[key] || (map[key] = { marks: 0, total: 0 });
  e.marks += marks;
  e.total += total;
};

/**
 * Marks per group over the most recent attempts of a topic's histories.
 * `histories`: array of loadTestState results; `byId`: Map(questionId → question).
 * → { byCategory, byDifficulty, marks, total }; groups are only those the questions actually carry.
 */
export const summariseAttempts = (histories, byId) => {
  const byCategory = {};
  const byDifficulty = {};
  let marks = 0; let total = 0;
  histories.forEach((st) => {
    (st?.attempts || []).slice(-RECENT_ATTEMPTS).forEach((a) => {
      (a.questionIds || []).forEach((id) => {
        const q = byId.get(String(id));
        if (!q) return;
        const r = gradeQuestionMarks(q, a.answers?.[String(id)]);
        marks += r.marks; total += r.total;
        if (q.category) bump(byCategory, String(q.category), r.marks, r.total);
        if (q.difficulty) bump(byDifficulty, String(q.difficulty), r.marks, r.total);
      });
    });
  });
  return { byCategory, byDifficulty, marks, total };
};

/** Groups sorted weakest first, each flagged `weak` / `judged` by the rules above. */
export const rankGroups = (groups) => Object.entries(groups)
  .map(([name, g]) => ({
    name,
    marks: g.marks,
    total: g.total,
    pct: g.total ? g.marks / g.total : 0,
    judged: g.total >= MIN_MARKS_TO_JUDGE,
    weak: g.total >= MIN_MARKS_TO_JUDGE && g.marks / g.total < WEAK_BELOW,
  }))
  .sort((a, b) => (Number(b.judged) - Number(a.judged)) || (a.pct - b.pct));

/** Mock results for one section (newest last): { count, best, last } as fractions. */
export const mockSummary = (uid, examId, topicId) => {
  const attempts = (loadTestState(uid, mockStorageId(examId), topicId).attempts || []).filter((a) => a.total > 0);
  if (!attempts.length) return { count: 0, best: null, last: null, inProgress: !!loadTestState(uid, mockStorageId(examId), topicId).current };
  const pcts = attempts.map((a) => a.marks / a.total);
  return {
    count: attempts.length,
    best: Math.max(...pcts),
    last: pcts[pcts.length - 1],
    inProgress: !!loadTestState(uid, mockStorageId(examId), topicId).current,
  };
};
