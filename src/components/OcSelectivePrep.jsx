import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Clock, Lock, Play, TrendingDown } from 'lucide-react';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { getTopicQuestions } from '../services/contentLoader';
import { useAuth } from '../context/AuthContext';
import { loadTestState } from '../utils/scholarshipTest';
import {
  MOCK_FORMATS, hubExamsFor, mockSizeFor, mockStorageId, mockSummary, summariseAttempts, rankGroups, pickNextStep,
} from '../utils/examHub';
import { nextSitting, scholarshipSitting, formatDay, ddayLabel, PLACEMENT_SOURCE_URL, PLACEMENT_DATES_CHECKED } from '../utils/examDates';
import ScholarshipTest from './ScholarshipTest';
import './OcSelectivePrep.css';

const pct = (x) => `${Math.round(x * 100)}%`;
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
const dayRange = (a, b) => (a === b ? formatDay(a, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) : `${formatDay(a, { weekday: 'short', day: 'numeric' })} – ${formatDay(b, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}`);

/**
 * The hero. For OC / Selective it counts down to the student's own sitting (their school year decides which one),
 * with a runway drawn to scale: today on the left, then the application window, test day and the make-up.
 * Scholarship (ACER) counts down to the date the teacher typed (each school sets its own), so its runway is just
 * today → test day.
 */
const Hero = ({ sitting, yearNum, isScholarship }) => {
  const { status, test } = sitting;
  const eyebrow = yearNum ? `Year ${yearNum} · ${test.short}` : test.short;

  if (status === 'upcoming') {
    const { sitting: d, daysLeft, milestones, testYear } = sitting;
    const span = Math.max(1, ...milestones.map((m) => m.daysLeft));
    const at = (days) => `${Math.min(100, Math.max(0, (days / span) * 100))}%`;
    const open = milestones.find((m) => m.key === 'applyOpen');
    const close = milestones.find((m) => m.key === 'applyClose');
    return (
      <section className="xh-hero" aria-label={`${test.short} countdown`}>
        <div className="xh-hero__eyebrow">{eyebrow}</div>
        <div className="xh-hero__main">
          <div className="xh-hero__big">{daysLeft === 0 ? 'Today' : ddayLabel(daysLeft)}</div>
          <div className="xh-hero__what">
            <div className="xh-hero__title">{test.name}</div>
            <div className="xh-hero__date">{dayRange(d.start, d.end)}</div>
          </div>
        </div>
        {!isScholarship && (
          <p className="xh-hero__note">
            {yearNum ? `Year ${yearNum} students sit ${test.short} in Year ${test.testYearLevel}` : `${test.short} is sat in Year ${test.testYearLevel}`}
            {testYear ? ` — that is ${testYear} for you.` : '.'}
          </p>
        )}

        <div className="xh-runway" role="img" aria-label="Timeline from today to the make-up test">
          <div className="xh-runway__track" />
          {close && <div className="xh-runway__apply" style={{ left: open ? at(open.daysLeft) : '0%', width: `calc(${at(close.daysLeft)} - ${open ? at(open.daysLeft) : '0%'})` }} />}
          {milestones.map((m) => (
            <span key={m.key} className={`xh-runway__dot${m.key === 'test' ? ' xh-runway__dot--test' : m.key === 'makeup' ? ' xh-runway__dot--hollow' : ''}`} style={{ left: at(m.daysLeft) }} />
          ))}
          <span className="xh-runway__today">TODAY</span>
        </div>

        {milestones.length > 1 && <div className="xh-miles">
          {milestones.map((m) => (
            <div key={m.key} className={`xh-mile${m.key === 'test' ? ' xh-mile--test' : ''}`}>
              <div className="xh-mile__label">{m.label}</div>
              <div className="xh-mile__days">{m.daysLeft === 0 ? 'Today' : ddayLabel(m.daysLeft)}</div>
              <div className="xh-mile__date">{m.endDate ? dayRange(m.date, m.endDate) : formatDay(m.date)}</div>
            </div>
          ))}
        </div>}
        {!isScholarship && (
          <div className="xh-hero__src">
            Dates from the <a href={PLACEMENT_SOURCE_URL} target="_blank" rel="noreferrer">NSW Department of Education</a>, checked {formatDay(PLACEMENT_DATES_CHECKED)}. They can change.
          </div>
        )}
      </section>
    );
  }

  const copy = (() => {
    if (status === 'unannounced') {
      return {
        big: `May ${sitting.testYear}`,
        title: 'Date not announced yet',
        note: `Year ${yearNum} students sit ${test.short} in Year ${test.testYearLevel}, in ${sitting.testYear}. The Department publishes test dates about a year ahead; the countdown appears here once they do. It is usually in May.`,
      };
    }
    if (status === 'passed') {
      return {
        big: 'Done',
        title: isScholarship ? `${test.name} is over` : `This year's ${test.short} test is over`,
        note: sitting.milestones?.length ? `The make-up test is ${ddayLabel(sitting.milestones[0].daysLeft)} (${formatDay(sitting.milestones[0].date)}).` : (isScholarship ? '' : 'The next sitting is next year, for the following group.'),
      };
    }
    if (status === 'notApplicable') {
      return { big: 'Past', title: `${test.short} is sat in Year ${test.testYearLevel}`, note: `You are in Year ${yearNum}, past that year. You can still use these questions for practice.` };
    }
    if (status === 'noDate') {
      return { big: 'TBC', title: 'No test date set', note: 'Ask your teacher to add the date of your scholarship test and the countdown will show here.' };
    }
    return { big: 'Year?', title: 'School year not set', note: 'Ask your teacher to add your school year, and your test date will appear here.' };
  })();
  const { big, title, note } = copy;
  return (
    <section className="xh-hero" aria-label={`${test.short} test date`}>
      <div className="xh-hero__eyebrow">{eyebrow}</div>
      <div className="xh-hero__main">
        <div className="xh-hero__big xh-hero__big--text">{big}</div>
        <div className="xh-hero__what"><div className="xh-hero__title">{title}</div></div>
      </div>
      {note && <p className="xh-hero__note">{note}</p>}
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
      <Hero sitting={sitting} yearNum={yearNum} isScholarship={isScholarship} />

      {ready && (
        <>
          <div className="xh-stats">
            <div className="xh-stat"><div className="xh-stat__num">{totals.done}<small> / {totals.total}</small></div><div className="xh-stat__label">Questions done</div></div>
            <div className="xh-stat"><div className="xh-stat__num">{totals.answered ? pct(totals.marks / totals.answered) : '–'}</div><div className="xh-stat__label">Recent accuracy</div></div>
            <div className="xh-stat"><div className="xh-stat__num">{totals.mocks}</div><div className="xh-stat__label">Mock exams taken</div></div>
          </div>

          {next && nextSection && (
            <div className="xh-next">
              <div className="xh-next__text">
                <div className="xh-next__eyebrow">Do this next</div>
                <div className="xh-next__line">{next.text}</div>
              </div>
              <button type="button" className="xh-btn xh-btn--primary" onClick={() => open(nextSection.topic, next.kind === 'mock')}>
                <Play size={15} /> {next.kind === 'mock' ? 'Start mock exam' : 'Practise now'}
              </button>
            </div>
          )}
        </>
      )}

      <h3 className="xh-h">Test sections</h3>
      {failed && <div className="xh-card xh-empty" style={{ color: '#e11d48' }}>Could not load the questions. Check your connection and try again.</div>}
      {!bank && !failed && <div className="xh-card xh-empty">Loading…</div>}
      {bank && (
        <div className="xh-rows">
          {sections.map((s) => (
            <div key={s.topic.id} className="xh-row">
              <div style={{ minWidth: 0 }}>
                <div className="xh-row__name">{s.name}</div>
                <div className="xh-row__meta">
                  {s.fmt && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {s.fmt.minutes} min mock</span>}
                  {!s.empty && <span>{s.done} of {s.total} done</span>}
                  {s.sum.count > 0 && <span>best <b>{pct(s.sum.best)}</b> · last <b>{pct(s.sum.last)}</b></span>}
                  {s.sum.inProgress && <b>mock in progress</b>}
                </div>
                {!s.empty && <div className="xh-bar" aria-hidden="true"><i style={{ width: `${Math.round((s.done / Math.max(1, s.total)) * 100)}%` }} /></div>}
              </div>
              {s.empty
                ? <span className="xh-soon"><Lock size={14} /> Coming soon</span>
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
          <h3 className="xh-h"><TrendingDown size={17} color="#7c3aed" /> Where to improve</h3>
          <div className="xh-card">
            {weakRows.length === 0
              ? <div className="xh-empty">{totals.answered === 0 ? 'Finish a mock or a practice test and your weakest question types show up here.' : 'Not enough answers in any one question type yet. A few more tests and the weak spots show up here.'}</div>
              : weakRows.slice(0, 5).map((r) => {
                const color = r.weak ? '#e11d48' : r.pct >= 0.8 ? '#059669' : '#d97706';
                return (
                  <div key={`${r.section}:${r.name}`} className="xh-weak">
                    <div className="xh-weak__top">
                      <span className="xh-weak__name">{titleCase(r.name)}</span>
                      <span className="xh-weak__sec">{r.sectionName}</span>
                      {r.weak && <span className="xh-tag">NEEDS WORK</span>}
                      <span className="xh-weak__pct">{pct(r.pct)} · {r.marks}/{r.total}</span>
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
