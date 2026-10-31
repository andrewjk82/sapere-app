/**
 * OC / Selective / Scholarship(ACER) pages: mock-exam formats and the weak-spot summary.
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
export const ACER_EXAM_ID = 'sch-acer';
export const HUB_EXAM_IDS = [OC_EXAM_ID, SELECTIVE_EXAM_ID, ACER_EXAM_ID];

/**
 * One sidebar page per exam: its tab key (App routes on it), the name students see, and a line under the title.
 * The Scholarship page is the ACER exam (the only exam in the Scholarship list besides OC and Selective).
 */
export const HUB_PAGES = {
  [OC_EXAM_ID]: { tab: 'OcPrep', label: 'OC', blurb: 'Opportunity Class placement test practice.' },
  [SELECTIVE_EXAM_ID]: { tab: 'SelectivePrep', label: 'Selective', blurb: 'Selective High School placement test practice.' },
  [ACER_EXAM_ID]: { tab: 'Scholarship', label: 'Scholarship', blurb: 'ACER scholarship test practice.' },
};
export const examIdForTab = (tab) => HUB_EXAM_IDS.find((id) => HUB_PAGES[id].tab === tab) || null;

/**
 * Real test formats: marks (one per question, one per part of a passage) and minutes. Writing is not
 * auto-gradable and has no questions in the bank, so it is not offered as a mock. ACER has no entry on purpose:
 * its sections have no verified format yet, so its page offers topic practice only, not a made-up mock.
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

/** The exams with their own page that this student has switched on (Scholarship on + the exam ticked). */
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

/**
 * The one thing to do next, shown at the top of the page.
 * `sections`: [{ id, name, mockable, empty, mockCount }] in page order; `weak`: rankGroups rows with a `section` id,
 * weakest first (already filtered to judged ones). Order of preference: a first mock in any section that has
 * one → the weakest judged question type → another mock → plain practice.
 */
export const pickNextStep = (sections, weak = []) => {
  const open = sections.filter((s) => !s.empty);
  if (!open.length) return null;
  const firstMock = open.find((s) => s.mockable && s.mockCount === 0);
  if (firstMock) return { kind: 'mock', sectionId: firstMock.id, text: `Take your first ${firstMock.name} mock exam` };
  const w = weak.find((g) => g.weak && open.some((s) => s.id === g.section));
  if (w) return { kind: 'practise', sectionId: w.section, text: `Practise ${w.name} — you scored ${Math.round(w.pct * 100)}%` };
  const again = open.filter((s) => s.mockable).sort((a, b) => a.mockCount - b.mockCount)[0];
  if (again) return { kind: 'mock', sectionId: again.id, text: `Try another ${again.name} mock exam` };
  return { kind: 'practise', sectionId: open[0].id, text: `Practise ${open[0].name}` };
};
