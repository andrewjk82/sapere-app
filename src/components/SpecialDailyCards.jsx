import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, Target } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { takePlanStart } from '../utils/planStart';
import { getTopicQuestions } from '../services/contentLoader';
import { DAILY_SET_QUESTIONS, DAILY_SET_TOPIC, HUB_PAGES, OPEN_DAILY_SET_KEY, dailySetToday, dailySetStorageId, dailySetFor, dailySetExamsFor, pickDailySet } from '../utils/examHub';
import ScholarshipTest from './ScholarshipTest';

/**
 * Extra Daily Study cards for students with OC / Selective / Scholarship switched on: one set per exam, from the
 * subjects the teacher picked (utils/examHub.dailySetFor; by default 5 + 5 from two sections, DAILY_SETS). It runs on the same test screens as the exam pages —
 * score, trend chart and the step-by-step review — and keeps its history on the device (no Firestore).
 * Rendered inside the Daily Study card grid, so it uses that page's `cs__` card styles.
 */
const SpecialDailyCards = ({ profile }) => {
  const { user } = useAuth();
  const uid = user?.uid || 'anon';
  const exams = useMemo(() => dailySetExamsFor(profile), [profile]);
  // The dashboard's "Today's plan" sends the student here with the exam to open (see OPEN_DAILY_SET_KEY).
  const [opened, setOpened] = useState(() => {
    try {
      const want = sessionStorage.getItem(OPEN_DAILY_SET_KEY);
      if (want) sessionStorage.removeItem(OPEN_DAILY_SET_KEY);
      if (!want || !dailySetFor(want, profile)) return { id: null, auto: false };
      return { id: want, auto: takePlanStart([`special:${want}`]) !== null };   // auto: the row asked for the questions, not the set's page
    } catch { return { id: null, auto: false }; }
  });
  const openId = opened.id;
  const setOpenId = (id) => setOpened({ id, auto: false });
  const [, setTick] = useState(0);

  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    window.addEventListener('sapere:progress-updated', refresh);
    return () => window.removeEventListener('sapere:progress-updated', refresh);
  }, []);

  if (!exams.length) return null;
  const plan = openId ? dailySetFor(openId, profile) : null;
  // One set a day, as Daily Practice: once today's is submitted the card opens its result (and review), not a new set.
  const todayAttempt = openId ? dailySetToday(uid, openId) : null;

  return (
    <>
      {exams.map((examId) => {
        const set = dailySetFor(examId, profile);
        const done = dailySetToday(uid, examId) !== null;
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
            key={`${openId}:${todayAttempt ? 'done' : 'open'}`}
            topic={{ id: DAILY_SET_TOPIC, title: `${plan.label} daily set`, code: '' }}
            chapter={{ id: openId, title: HUB_PAGES[openId]?.label || plan.label }}
            profile={profile}
            storageId={dailySetStorageId(openId)}
            startLabel="Start today's set"
            homeNote={`${plan.sections.reduce((n, s) => n + s.want, 0) || DAILY_SET_QUESTIONS} questions a day: ${plan.sections.map((s) => s.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}. Answers and solutions after you submit, then review each question step by step.`}
            lockedNote={todayAttempt ? "Today's set is done. A new one is ready tomorrow." : ''}
            initialResultId={todayAttempt ? todayAttempt.id : null}
            loadQuestions={() => Promise.all(plan.sections.map((s) => getTopicQuestions(s.topicId, { chapterId: openId })
              .then((qs) => (qs || []).map((q) => ({ ...q, _topicId: s.topicId })))))
              .then((lists) => lists.flat())}
            pickQuestions={({ questions, state }) => {
              const doneSet = new Set(state.done.map(String));
              const set = pickDailySet({ examId: openId, questions, done: state.done, sections: plan.sections });
              return {
                questionIds: set.questionIds,
                round: set.reused ? state.round + 1 : state.round,
                carried: set.reused ? set.questionIds.filter((id) => !doneSet.has(id)) : undefined,
              };
            }}
            autoStart={opened.auto && !todayAttempt}
            onBack={() => setOpenId(null)}
          />
        </div>,
        document.body,
      )}
    </>
  );
};

export default SpecialDailyCards;
