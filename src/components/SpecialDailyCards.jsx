import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, Target } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getTopicQuestions } from '../services/contentLoader';
import { DAILY_SETS, DAILY_SET_MARKS, DAILY_SET_TOPIC, HUB_PAGES, OPEN_DAILY_SET_KEY, dailySetDoneToday, dailySetStorageId, hubExamsFor, pickDailySet } from '../utils/examHub';
import ScholarshipTest from './ScholarshipTest';

/**
 * Extra Daily Study cards for students with OC / Selective / Scholarship switched on: one 10-mark set per exam,
 * 5 marks from each of two sections (utils/examHub.DAILY_SETS). It runs on the same test screens as the exam pages —
 * score, trend chart and the step-by-step review — and keeps its history on the device (no Firestore).
 * Rendered inside the Daily Study card grid, so it uses that page's `cs__` card styles.
 */
const SpecialDailyCards = ({ profile }) => {
  const { user } = useAuth();
  const uid = user?.uid || 'anon';
  const exams = useMemo(() => hubExamsFor(profile), [profile]);
  // The dashboard's "Today's plan" sends the student here with the exam to open (see OPEN_DAILY_SET_KEY).
  const [openId, setOpenId] = useState(() => {
    try {
      const want = sessionStorage.getItem(OPEN_DAILY_SET_KEY);
      if (want) sessionStorage.removeItem(OPEN_DAILY_SET_KEY);
      return want && DAILY_SETS[want] ? want : null;
    } catch { return null; }
  });
  const [, setTick] = useState(0);

  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    window.addEventListener('sapere:progress-updated', refresh);
    return () => window.removeEventListener('sapere:progress-updated', refresh);
  }, []);

  if (!exams.length) return null;
  const plan = openId ? DAILY_SETS[openId] : null;

  return (
    <>
      {exams.map((examId) => {
        const set = DAILY_SETS[examId];
        const done = dailySetDoneToday(uid, examId);
        const Icon = examId === 'sch-acer' ? Award : Target;
        return (
          <article key={examId} className={`cs__test-card cs__test-card--interactive cs__test-card--${done ? 'completed' : 'pending'}`}>
            <button type="button" className="cs__tile-main" onClick={() => setOpenId(examId)} aria-label={`${set.label} daily set${done ? ': completed' : ''}`}>
              {done && <span className="cs__tile-status">Completed</span>}
              <Icon className="cs__tile-watermark" aria-hidden="true" />
              <span className="cs__tile-title">{set.label} daily</span>
            </button>
          </article>
        );
      })}
      {plan && createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 2100, background: '#f6f1ff', overflowY: 'auto', padding: '16px 12px 40px' }}>
          <ScholarshipTest
            key={openId}
            topic={{ id: DAILY_SET_TOPIC, title: `${plan.label} daily set`, code: '' }}
            chapter={{ id: openId, title: HUB_PAGES[openId]?.label || plan.label }}
            profile={profile}
            storageId={dailySetStorageId(openId)}
            startLabel="Start today's set"
            homeNote={`${DAILY_SET_MARKS} marks: ${plan.sections.map((s) => s.name).join(' and ')}. Answers and solutions after you submit, then review each question step by step.`}
            loadQuestions={() => Promise.all(plan.sections.map((s) => getTopicQuestions(s.topicId, { chapterId: openId })
              .then((qs) => (qs || []).map((q) => ({ ...q, _topicId: s.topicId })))))
              .then((lists) => lists.flat())}
            pickQuestions={({ questions, state }) => {
              const doneSet = new Set(state.done.map(String));
              const set = pickDailySet({ examId: openId, questions, done: state.done });
              return {
                questionIds: set.questionIds,
                round: set.reused ? state.round + 1 : state.round,
                carried: set.reused ? set.questionIds.filter((id) => !doneSet.has(id)) : undefined,
              };
            }}
            onBack={() => setOpenId(null)}
          />
        </div>,
        document.body,
      )}
    </>
  );
};

export default SpecialDailyCards;
