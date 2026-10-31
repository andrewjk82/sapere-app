import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { getTopicQuestions } from '../services/contentLoader';
import { useAuth } from '../context/AuthContext';
import { loadTestState } from '../utils/scholarshipTest';
import {
  MOCK_FORMATS, HUB_PAGES, hubExamsFor, mockSizeFor, mockStorageId, mockSummary, summariseAttempts, rankGroups, pickNextStep,
} from '../utils/examHub';
import { nextSitting, scholarshipSitting, formatDay, ddayLabel, PLACEMENT_SOURCE_URL, PLACEMENT_DATES_CHECKED } from '../utils/examDates';
import ScholarshipTest from './ScholarshipTest';
import './OcSelectivePrep.css';

const pct = (x) => `${Math.round(x * 100)}%`;
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
const dayRange = (a, b) => (a === b ? formatDay(a, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) : `${formatDay(a, { weekday: 'short', day: 'numeric' })} – ${formatDay(b, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}`);

/**
 * The countdown. OC / Selective count down to the student's own sitting (their school year decides which one, see
 * utils/examDates); Scholarship (ACER) counts down to the date the teacher typed, since each school sets its own.
 * Below the number sits a short list of the steps still ahead (applications, test day, make-up).
 */
const Countdown = ({ sitting, yearNum, isScholarship }) => {
  const { status, test } = sitting;
  const kicker = yearNum ? `Year ${yearNum} · ${test.short}` : test.short;

  if (status === 'upcoming') {
    const { sitting: d, daysLeft, milestones } = sitting;
    const nextKey = milestones[0]?.key;
    return (
      <section className="xh-panel xh-count" aria-label="Countdown">
        <div className="xh-count__head">
          <div>
            <p className="xh-count__name">{test.name}</p>
            <div className="xh-count__when">{kicker && !isScholarship ? `${kicker} · ` : ''}{dayRange(d.start, d.end)}</div>
          </div>
          <div className="xh-count__n">
            <span className="xh-count__num">{daysLeft === 0 ? 'Today' : ddayLabel(daysLeft)}</span>
            <span className="xh-count__unit">{daysLeft === 0 ? 'test day' : `${daysLeft} day${daysLeft === 1 ? '' : 's'} to go`}</span>
          </div>
        </div>
        {!isScholarship && sitting.testYear && (
          <p className="xh-count__text">
            {yearNum ? `Year ${yearNum} students sit ${test.short} in Year ${test.testYearLevel}, which is ${sitting.testYear} for you.` : `${test.short} is sat in Year ${test.testYearLevel}.`}
          </p>
        )}
        {milestones.length > 1 && (
          <ol className="xh-steps">
            {milestones.map((m) => (
              <li key={m.key} className={`xh-step${m.key === nextKey ? ' xh-step--next' : ''}`}>
                <span className="xh-step__dot" aria-hidden="true" />
                <span className="xh-step__label">{m.label}</span>
                <span className="xh-step__rel">{m.daysLeft === 0 ? 'Today' : `in ${m.daysLeft} day${m.daysLeft === 1 ? '' : 's'}`}</span>
                <span className="xh-step__date">{m.endDate ? dayRange(m.date, m.endDate) : formatDay(m.date)}</span>
              </li>
            ))}
          </ol>
        )}
        {!isScholarship && (
          <p className="xh-count__src">
            Dates from the <a href={PLACEMENT_SOURCE_URL} target="_blank" rel="noreferrer">NSW Department of Education</a>, checked {formatDay(PLACEMENT_DATES_CHECKED)}. They can change.
          </p>
        )}
      </section>
    );
  }

  const copy = (() => {
    if (status === 'unannounced') {
      return { title: `${test.name}: date not announced yet`, text: `Year ${yearNum} students sit ${test.short} in Year ${test.testYearLevel}, which is ${sitting.testYear} for you. The Department publishes dates about a year ahead, usually for May. The countdown appears here once it does.` };
    }
    if (status === 'passed') {
      const makeup = sitting.milestones?.[0];
      return { title: isScholarship ? `${test.name} is over` : `This year's ${test.short} test is over`, text: makeup ? `The make-up test is on ${formatDay(makeup.date)}, in ${makeup.daysLeft} day${makeup.daysLeft === 1 ? '' : 's'}.` : '' };
    }
    if (status === 'notApplicable') {
      return { title: `${test.short} is sat in Year ${test.testYearLevel}`, text: `You are in Year ${yearNum}, past that year. The questions below are still there for practice.` };
    }
    if (status === 'noDate') {
      return { title: 'No test date set', text: 'Ask your teacher to add the date of your scholarship test and the countdown will show here.' };
    }
    return { title: 'School year not set', text: 'Ask your teacher to add your school year and your test date will show here.' };
  })();
  return (
    <section className="xh-panel xh-count" aria-label="Test date">
      <p className="xh-count__name">{copy.title}</p>
      {copy.text && <p className="xh-count__text" style={{ marginTop: 6 }}>{copy.text}</p>}
    </section>
  );
};

/**
 * One page per exam (OC / Selective / Scholarship). Top to bottom: the countdown, three numbers, the one thing to do
 * next, the test sections (mock + practice on the same row), and where the student loses marks. Shown only to
 * students whose teacher switched on Scholarship with that exam ticked (utils/examHub.hubExamsFor).
 */
const OcSelectivePrep = ({ examId, profile }) => {
  const { user } = useAuth();
  const uid = user?.uid || 'anon';
  const allowed = useMemo(() => hubExamsFor(profile).includes(examId), [profile, examId]);
  const active = useMemo(() => (allowed ? (CURRICULUM_DATA.Scholarship || []).find((e) => e.id === examId) : null), [allowed, examId]);
  // { examId, bank: { [topicId]: question[] } | null, failed } — trusted only while examId is the active exam.
  const [loaded, setLoaded] = useState({ examId: null, bank: null, failed: false });
  const bank = loaded.examId === active?.id ? loaded.bank : null;
  const failed = loaded.examId === active?.id && loaded.failed;
  const [running, setRunning] = useState(null);  // { exam, topic, size?, seconds?, mock }
  const [, setTick] = useState(0);

  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    window.addEventListener('sapere:progress-updated', refresh);
    return () => window.removeEventListener('sapere:progress-updated', refresh);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    let cancelled = false;
    Promise.all((active.topics || []).map((t) => getTopicQuestions(t.id, { chapterId: active.id }).then((qs) => [t.id, qs || []])))
      .then((pairs) => { if (!cancelled) setLoaded({ examId: active.id, bank: Object.fromEntries(pairs), failed: false }); })
      .catch(() => { if (!cancelled) setLoaded({ examId: active.id, bank: null, failed: true }); });
    return () => { cancelled = true; };
  }, [active]);

  if (running) {
    return (
      <AnimatePresence mode="wait">
        <ScholarshipTest
          key={`${running.exam.id}:${running.topic.id}:${running.mock ? 'mock' : 'topic'}`}
          topic={running.topic}
          chapter={{ id: running.exam.id, title: running.exam.title }}
          profile={profile}
          storageId={running.mock ? mockStorageId(running.exam.id) : undefined}
          size={running.mock ? running.size : undefined}
          seconds={running.mock ? running.seconds : undefined}
          startLabel={running.mock ? 'Start mock exam' : 'Start test'}
          onBack={() => setRunning(null)}
        />
      </AnimatePresence>
    );
  }

  if (!active) {
    return <div className="xh"><div className="xh-card xh-empty">This page has not been switched on for you yet. Ask your teacher.</div></div>;
  }

  const pageLabel = HUB_PAGES[active.id]?.label || active.title;
  const isScholarship = active.id === 'sch-acer';
  const sitting = isScholarship ? scholarshipSitting(profile) : nextSitting(active.id, profile);
  const yearNum = sitting?.year ?? null;

  const open = (topic, mock) => {
    const fmt = MOCK_FORMATS[topic.id];
    const qs = bank?.[topic.id] || [];
    setRunning({
      exam: active,
      topic: { id: topic.id, title: topic.title, code: topic.code || '' },
      mock,
      ...(mock ? { size: mockSizeFor(qs, fmt.marks), seconds: fmt.minutes * 60 } : {}),
    });
  };

  // Everything below is read from this device's test history (see utils/scholarshipTest).
  const sections = (active.topics || []).map((topic) => {
    const qs = bank?.[topic.id];
    const fmt = MOCK_FORMATS[topic.id];
    const ids = new Set((qs || []).map((q) => String(q.id)));
    const practice = loadTestState(uid, active.id, topic.id);
    const mockState = loadTestState(uid, mockStorageId(active.id), topic.id);
    const done = new Set([...practice.done, ...mockState.done].map(String).filter((id) => ids.has(id))).size;
    const byId = new Map((qs || []).map((q) => [String(q.id), q]));
    const insight = summariseAttempts([practice, mockState], byId);
    const sum = mockSummary(uid, active.id, topic.id);
    return {
      topic, fmt, qs, done, insight, sum,
      name: fmt?.name || topic.title,
      total: qs ? qs.length : 0,
      empty: !!qs && qs.length === 0,
      size: qs && fmt ? mockSizeFor(qs, fmt.marks) : 0,
    };
  });
  const ready = !!bank;
  const totals = sections.reduce((a, s) => ({
    done: a.done + s.done, total: a.total + s.total, marks: a.marks + s.insight.marks, answered: a.answered + s.insight.total, mocks: a.mocks + s.sum.count,
  }), { done: 0, total: 0, marks: 0, answered: 0, mocks: 0 });

  // Weak spots across all sections, weakest first.
  const weakRows = sections.flatMap((s) => {
    const groups = s.insight.byCategory && Object.keys(s.insight.byCategory).length ? s.insight.byCategory : s.insight.byDifficulty;
    return rankGroups(groups || {}).filter((g) => g.judged).map((g) => ({ ...g, section: s.topic.id, sectionName: s.name }));
  }).sort((a, b) => a.pct - b.pct);
  const next = ready ? pickNextStep(
    sections.map((s) => ({ id: s.topic.id, name: s.name, mockable: !!s.fmt && !s.empty, empty: s.empty, mockCount: s.sum.count })),
    weakRows,
  ) : null;
  const nextSection = next && sections.find((s) => s.topic.id === next.sectionId);

  return (
    <div className="xh">
      <header className="xh-page">
        <h1>{pageLabel}</h1>
        <p>{HUB_PAGES[active.id]?.blurb}</p>
      </header>

      <Countdown sitting={sitting} yearNum={yearNum} isScholarship={isScholarship} />

      {ready && (
        <>
          <div className="xh-panel xh-sum">
            <div><div className="xh-sum__num">{totals.done}<small> / {totals.total}</small></div><div className="xh-sum__label">Questions done</div></div>
            <div><div className="xh-sum__num">{totals.answered ? pct(totals.marks / totals.answered) : '–'}</div><div className="xh-sum__label">Recent accuracy</div></div>
            <div><div className="xh-sum__num">{totals.mocks}</div><div className="xh-sum__label">Mock exams taken</div></div>
          </div>

          {next && nextSection && (
            <div className="xh-next">
              <div>
                <div className="xh-next__label">Do this next</div>
                <div className="xh-next__line">{next.text}</div>
              </div>
              <button type="button" className="xh-btn xh-btn--primary" onClick={() => open(nextSection.topic, next.kind === 'mock')}>
                {next.kind === 'mock' ? 'Start mock exam' : 'Practise now'}
              </button>
            </div>
          )}
        </>
      )}

      <h2 className="xh-h">Test sections</h2>
      {failed && <div className="xh-panel xh-empty" style={{ color: '#c2273d' }}>Could not load the questions. Check your connection and try again.</div>}
      {!bank && !failed && <div className="xh-panel xh-empty">Loading…</div>}
      {bank && (
        <div className="xh-panel">
          {sections.map((s) => (
            <div key={s.topic.id} className="xh-row">
              <div style={{ minWidth: 0 }}>
                <div className="xh-row__name">{s.name}</div>
                <div className="xh-row__meta">
                  {[
                    s.fmt && `${s.fmt.minutes} min mock`,
                    !s.empty && `${s.done} of ${s.total} done`,
                  ].filter(Boolean).join(' · ')}
                  {s.sum.count > 0 && <> · best <b>{pct(s.sum.best)}</b>, last <b>{pct(s.sum.last)}</b></>}
                  {s.sum.inProgress && <> · <b>mock in progress</b></>}
                </div>
                {!s.empty && <div className="xh-bar" aria-hidden="true"><i style={{ width: `${Math.round((s.done / Math.max(1, s.total)) * 100)}%` }} /></div>}
              </div>
              {s.empty
                ? <span className="xh-soon">Coming soon</span>
                : (
                  <div className="xh-row__actions">
                    {s.fmt && <button type="button" className="xh-btn xh-btn--primary" onClick={() => open(s.topic, true)}>{s.sum.inProgress ? 'Resume mock' : 'Mock exam'}</button>}
                    <button type="button" className="xh-btn" onClick={() => open(s.topic, false)}>Practise</button>
                  </div>
                )}
            </div>
          ))}
        </div>
      )}

      {ready && (
        <>
          <h2 className="xh-h">Where to improve</h2>
          <div className="xh-panel">
            {weakRows.length === 0
              ? <div className="xh-empty">{totals.answered === 0 ? 'Finish a mock or a practice test and your weakest question types show up here.' : 'Not enough answers in any one question type yet. A few more tests and the weak spots show up here.'}</div>
              : weakRows.slice(0, 5).map((r) => {
                const color = r.weak ? '#c2273d' : r.pct >= 0.8 ? '#15803d' : '#b45309';
                return (
                  <div key={`${r.section}:${r.name}`} className="xh-weak">
                    <div className="xh-weak__top">
                      <span className="xh-weak__name">{titleCase(r.name)}</span>
                      <span className="xh-weak__sec">{r.sectionName}</span>
                      {r.weak && <span className="xh-weak__flag">Needs work</span>}
                      <span className="xh-weak__pct">{pct(r.pct)} <small>{r.marks}/{r.total}</small></span>
                    </div>
                    <div className="xh-meter"><i style={{ width: `${Math.round(r.pct * 100)}%`, background: color }} /></div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default OcSelectivePrep;
