import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Clock, Lightbulb, Play, XCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getTopicQuestions } from '../services/contentLoader';
import { parseSolutionSteps } from '../utils/solutionSteps';
import { isDisplayedOptionCorrect } from '../utils/mcOptionShuffle';
import {
  TEST_SIZE, TEST_SECONDS, loadTestState, saveTestState, pickTestQuestions, applyFinishedTest,
  gradeTest, isPickCorrect, correctIndexOf, isTestable, secondsLeft, subKey, toReviewItems, attemptDetails,
} from '../utils/scholarshipTest';
import MathView from './MathView';
import TopicPracticeSession from './TopicPracticeSession';
import ScholarshipResult from './ScholarshipResult';

// The challenge review (one question at a time, step-by-step solutions) is only needed once a student opens a review.
const ChallengeReviewView = lazy(() => import('./challenge/ChallengeReviewView'));

const C = { ink: '#1e1b4b', muted: '#64748b', faint: '#94a3b8', line: '#e2e8f0', violet: '#7c3aed', soft: '#f5f3ff', green: '#059669', red: '#e11d48' };
const card = { background: '#fff', border: `1px solid ${C.line}`, borderRadius: 20, padding: 18, boxShadow: '0 4px 14px rgba(15,23,42,0.04)' };
const btn = (primary) => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 18px', borderRadius: 14,
  border: primary ? 0 : `1px solid ${C.line}`, background: primary ? 'linear-gradient(135deg, #a78bfa, #7c3aed)' : '#fff',
  color: primary ? '#fff' : C.ink, fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer',
});
const mmss = (sec) => `${Math.floor(sec / 60)}:${String(Math.max(0, sec) % 60).padStart(2, '0')}`;
const optText = (o) => (typeof o === 'string' ? o : o?.text ?? '');

const isAnswered = (q, a) => (q.subQuestions?.length
  ? q.subQuestions.every((sq, i) => a?.[subKey(sq, i)] !== undefined)
  : a !== undefined && a !== null && a !== '');

/** One MC option list. In review, the right option is green and a wrong pick red. */
const Options = ({ q, picked, onPick, review }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
    {(q.options || []).map((o, i) => {
      const sel = picked !== undefined && picked !== null && Number(picked) === i;
      const right = review && (correctIndexOf(q) >= 0 ? correctIndexOf(q) === i : isDisplayedOptionCorrect(q, q.options, i));
      const wrong = review && sel && !right;
      const border = right ? C.green : wrong ? C.red : sel ? C.violet : C.line;
      const bg = right ? '#ecfdf5' : wrong ? '#fff1f2' : sel ? C.soft : '#fff';
      return (
        <button
          key={i}
          type="button"
          disabled={review}
          onClick={() => onPick?.(i)}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left', padding: '12px 14px', borderRadius: 14, border: `2px solid ${border}`, background: bg, cursor: review ? 'default' : 'pointer' }}
        >
          <span style={{ fontWeight: 900, color: sel || right ? border : C.faint, minWidth: 20 }}>{String.fromCharCode(65 + i)}.</span>
          <MathView align="left" content={optText(o)} graphData={typeof o === 'object' ? o.graphData : null} style={{ flex: 1, fontWeight: 600, color: C.ink }} />
          {right && <CheckCircle2 size={18} color={C.green} />}
          {wrong && <XCircle size={18} color={C.red} />}
        </button>
      );
    })}
  </div>
);

const Steps = ({ q }) => {
  const steps = parseSolutionSteps(q);
  if (!steps.length) return null;
  return (
    <div style={{ marginTop: 14, padding: 14, borderRadius: 14, background: C.soft, border: '1px solid #ddd6fe' }}>
      <div style={{ fontWeight: 900, color: C.ink, fontSize: '0.88rem', marginBottom: 8 }}>Solution</div>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
          <span style={{ fontWeight: 900, color: C.violet }}>{i + 1}.</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            {s.explanation && <MathView align="left" content={s.explanation} style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }} />}
            {s.workingOut && <MathView align="left" content={s.workingOut} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4f46e5' }} />}
            {s.graphData && <MathView content="" graphData={s.graphData} />}
          </div>
        </div>
      ))}
    </div>
  );
};

/** Hint during the test: hidden until the student asks for it. */
const Hint = ({ q }) => {
  const [open, setOpen] = useState(false);
  if (!q.hint) return null;
  return (
    <div style={{ marginTop: 10 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 10, border: '1px solid #fde68a', background: '#fffbeb', color: '#92400e', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
      >
        <Lightbulb size={14} /> {open ? 'Hide hint' : 'Hint'}
      </button>
      {open && <div style={{ marginTop: 8, padding: '10px 12px', borderRadius: 12, background: '#fffbeb', border: '1px solid #fde68a' }}><MathView align="left" content={q.hint} style={{ fontSize: '0.9rem', fontWeight: 600, color: '#92400e' }} /></div>}
    </div>
  );
};

/** Tips for the highlighted words of a question the student got wrong. */
const Tips = ({ q }) => {
  const kps = Array.isArray(q.keyPoints) ? q.keyPoints : [];
  if (!kps.length) return null;
  return (
    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {kps.map((k, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 10px', borderRadius: 10, background: '#fffbeb', border: '1px solid #fde68a' }}>
          <Lightbulb size={14} color="#d97706" style={{ marginTop: 3, flexShrink: 0 }} />
          <MathView align="left" content={k.note} style={{ fontSize: '0.86rem', fontWeight: 600, color: '#92400e' }} />
        </div>
      ))}
    </div>
  );
};

/** One MC question (a whole question, or one part of a passage): stem, options, and — in review — tips and solution. */
const Leaf = ({ q, picked, onPick, review, label }) => {
  const wrong = review && !isPickCorrect(q, picked);
  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        {label && <span style={{ fontWeight: 900, color: C.violet }}>{label}</span>}
        <MathView
          align="left"
          content={q.question}
          graphData={q.graphData}
          keyPoints={wrong ? q.keyPoints : undefined}
          style={{ flex: 1, fontSize: '0.98rem', fontWeight: 600, color: C.ink, lineHeight: 1.7 }}
        />
      </div>
      {!review && <Hint q={q} />}
      <Options q={q} picked={picked} review={review} onPick={onPick} />
      {review && (
        <>
          {wrong && <Tips q={q} />}
          <Steps q={q} />
        </>
      )}
    </div>
  );
};

/** A question (single MC or a passage with MC parts), answerable or in review. */
const QuestionBody = ({ q, answer, onAnswer, review }) => {
  if (!q.subQuestions?.length) return <Leaf q={q} picked={answer} onPick={onAnswer} review={review} />;
  return (
    <div>
      <MathView content={q.question} graphData={q.graphData} style={{ fontSize: '0.98rem', fontWeight: 600, color: C.ink, lineHeight: 1.7 }} />
      {q.subQuestions.map((sq, i) => {
        const k = subKey(sq, i);
        return (
          <div key={k} style={{ marginTop: 16, paddingTop: 14, borderTop: `1px dashed ${C.line}` }}>
            <Leaf
              q={sq}
              label={`(${String.fromCharCode(97 + i)})`}
              picked={answer?.[k]}
              review={review}
              onPick={(v) => onAnswer?.({ ...(answer || {}), [k]: v })}
            />
          </div>
        );
      })}
    </div>
  );
};

/**
 * Scholarship test mode: 10 unseen questions, 12-minute timer, answers after
 * submitting, every test kept for review on this device (utils/scholarshipTest).
 * Topics that aren't all auto-gradable MC (Writing) fall back to practice mode.
 */
const ScholarshipTest = ({ topic, chapter, profile, onBack, size: sizeProp = TEST_SIZE, seconds: limit = TEST_SECONDS, storageId, startLabel = 'Start test', pickQuestions, homeNote, loadQuestions }) => {
  const { user } = useAuth();
  const uid = user?.uid || 'anon';
  // Mock exams keep their own history under `storageId`, apart from the topic tests of the same chapter.
  const keyChapter = storageId || chapter.id;
  const [all, setAll] = useState(null);         // every question of the topic
  const [failed, setFailed] = useState(false);
  const [st, setSt] = useState(() => loadTestState(uid, keyChapter, topic.id));
  // An unfinished test resumes straight away (one whose time ran out is submitted below).
  const [view, setView] = useState(() => (st.current ? 'test' : 'home')); // 'home' | 'test' | 'result' | 'review'
  const [reviewId, setReviewId] = useState(null);
  const [reviewIdx, setReviewIdx] = useState(null);   // question the review opens on (null = the result screen)
  const [idx, setIdx] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let cancelled = false;
    // `loadQuestions` lets a test draw from several topics (the Daily Study set); otherwise it is this topic's questions.
    (loadQuestions ? loadQuestions() : getTopicQuestions(topic.id, { chapterId: chapter.id }))
      .then((qs) => { if (!cancelled) setAll(qs || []); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, [chapter.id, topic.id]);

  const byId = useMemo(() => new Map((all || []).map((q) => [String(q.id), q])), [all]);
  const save = useCallback((next) => { setSt(next); saveTestState(uid, keyChapter, topic.id, next); }, [uid, keyChapter, topic.id]);
  const cur = st.current;
  const testQs = useMemo(() => (cur ? cur.questionIds.map((id) => byId.get(String(id))).filter(Boolean) : []), [cur, byId]);

  const submit = useCallback(() => {
    const s = st;
    if (!s.current) return;
    const qs = s.current.questionIds.map((id) => byId.get(String(id))).filter(Boolean);
    const { marks, total } = gradeTest(qs, s.current.answers);
    const submittedAt = Date.now();
    const attempt = {
      ...s.current,
      questionIds: qs.map((q) => String(q.id)),
      submittedAt,
      durationSec: Math.min(limit, Math.round((submittedAt - s.current.startedAt) / 1000)),
      marks,
      total,
      // Kept for the weekly summary sent to the teacher (utils/specialWeekly): what kind of test, and what was missed.
      kind: /^mock:/.test(keyChapter) ? 'mock' : /^daily:/.test(keyChapter) ? 'daily' : 'topic',
      ...attemptDetails(qs, s.current.answers),
    };
    save(applyFinishedTest({ ...s, current: null, attempts: [...s.attempts, attempt] }, attempt));
    setConfirming(false);
    setReviewId(attempt.id);
    setReviewIdx(null);
    setView('result');
  }, [st, byId, save, limit]);

  // Clock tick; time up → submit (also catches a test whose time ran out while away).
  useEffect(() => {
    if (view !== 'test' || !all || !cur) return undefined;
    const t = setInterval(() => {
      const ts = Date.now();
      if (secondsLeft(cur, ts, limit) <= 0) submit();
      else setNow(ts);
    }, 1000);
    return () => clearInterval(t);
  }, [view, all, cur, submit, limit]);
  const left = cur ? secondsLeft(cur, now, limit) : limit;

  const start = () => {
    // A mock supplies its own picker (utils/examHub.pickMockPaper); a topic test takes the next unseen questions.
    const pick = pickQuestions
      ? pickQuestions({ questions: all, state: st })
      : pickTestQuestions({ allIds: all.map((q) => q.id), done: st.done, round: st.round, size: Math.min(sizeProp, all.length) });
    const startedAt = Date.now();
    save({ ...st, current: { id: startedAt.toString(36), ...pick, answers: {}, startedAt } });
    setIdx(0);
    setNow(startedAt);
    setView('test');
  };

  const back = (
    <button type="button" onClick={view === 'result' ? () => setView('home') : onBack} style={{ ...btn(false), padding: '8px 12px', marginBottom: 14 }}>
      <ArrowLeft size={16} /> {view === 'result' ? 'All tests' : 'Back'}
    </button>
  );
  const wrap = (children) => <div style={{ maxWidth: 760, margin: '0 auto', padding: '8px 4px 40px' }}>{children}</div>;

  if (failed) return wrap(<>{back}<div style={card}>Could not load the questions. Check your connection and try again.</div></>);
  if (!all) return wrap(<>{back}<div style={{ ...card, color: C.muted, fontWeight: 700 }}>Loading…</div></>);
  if (!isTestable(all)) return <TopicPracticeSession topic={topic} chapter={chapter} profile={profile} onBack={onBack} />;

  // ── Test ────────────────────────────────────────────────────────────────
  if (view === 'test' && cur && testQs.length) {
    const q = testQs[Math.min(idx, testQs.length - 1)];
    const answered = testQs.filter((x) => isAnswered(x, cur.answers[String(x.id)])).length;
    const setAnswer = (v) => save({ ...st, current: { ...cur, answers: { ...cur.answers, [String(q.id)]: v } } });
    return wrap(
      <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontWeight: 900, color: C.ink }}>{topic.title} · Test</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 900, color: left <= 60 ? C.red : C.violet, fontVariantNumeric: 'tabular-nums' }}>
            <Clock size={16} /> {mmss(left)}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {testQs.map((x, i) => {
            const done = isAnswered(x, cur.answers[String(x.id)]);
            return (
              <button
                key={x.id}
                type="button"
                onClick={() => setIdx(i)}
                style={{ width: 34, height: 34, borderRadius: 10, fontWeight: 900, cursor: 'pointer', border: i === idx ? `2px solid ${C.violet}` : `1px solid ${C.line}`, background: done ? C.soft : '#fff', color: done ? C.violet : C.muted }}
              >{i + 1}</button>
            );
          })}
        </div>
        <div style={card}>
          <div style={{ fontWeight: 900, color: C.violet, marginBottom: 8 }}>Question {idx + 1} of {testQs.length}</div>
          <QuestionBody q={q} answer={cur.answers[String(q.id)]} onAnswer={setAnswer} />
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <button type="button" disabled={idx === 0} onClick={() => setIdx(idx - 1)} style={{ ...btn(false), opacity: idx === 0 ? 0.4 : 1 }}><ChevronLeft size={16} /> Previous</button>
          <div style={{ flex: 1 }} />
          {idx < testQs.length - 1
            ? <button type="button" onClick={() => setIdx(idx + 1)} style={btn(false)}>Next <ChevronRight size={16} /></button>
            : <button type="button" onClick={() => (answered < testQs.length ? setConfirming(true) : submit())} style={btn(true)}>Submit</button>}
        </div>
        {confirming && (
          <div style={{ ...card, marginTop: 12, borderColor: '#fecdd3', background: '#fff1f2' }}>
            <div style={{ fontWeight: 800, color: C.ink, marginBottom: 10 }}>
              {testQs.length - answered} question{testQs.length - answered === 1 ? ' is' : 's are'} not answered. Submit anyway?
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button type="button" onClick={() => setConfirming(false)} style={btn(false)}>Keep going</button>
              <button type="button" onClick={submit} style={btn(true)}>Submit</button>
            </div>
          </div>
        )}
        {idx < testQs.length - 1 && (
          <div style={{ marginTop: 10, textAlign: 'right' }}>
            <button type="button" onClick={() => (answered < testQs.length ? setConfirming(true) : submit())} style={{ ...btn(false), padding: '8px 12px', fontSize: '0.8rem' }}>Submit test</button>
          </div>
        )}
      </>,
    );
  }

  // ── Result, and the challenge-style review ──────────────────────────────
  const attempt = (view === 'result' || view === 'review') ? st.attempts.find((a) => a.id === reviewId) : null;
  if (attempt) {
    const qs = attempt.questionIds.map((id) => byId.get(String(id))).filter(Boolean);
    if (view === 'review' && reviewIdx !== null) {
      const items = toReviewItems(qs, attempt.answers);
      return (
        <Suspense fallback={<div style={{ position: 'fixed', inset: 0, display: 'grid', placeItems: 'center', background: '#f8fafc', zIndex: 2200 }}>Loading…</div>}>
          <ChallengeReviewView
            questions={items.questions}
            userAnswers={items.userAnswers}
            answerResults={items.answerResults}
            startIdx={reviewIdx}
            disableReport
            isMobile={typeof window !== 'undefined' && window.innerWidth < 768}
            onClose={() => { setReviewIdx(null); setView('result'); }}
          />
        </Suspense>
      );
    }
    return wrap(
      <>
        {back}
        <ScholarshipResult
          attempt={attempt}
          history={st.attempts}
          questions={qs}
          byId={byId}
          onReview={(i) => { setReviewIdx(i); setView('review'); }}
        />
      </>,
    );
  }

  // ── Home ────────────────────────────────────────────────────────────────
  const total = all.length;
  const doneCount = st.done.filter((id) => byId.has(id)).length;
  const size = Math.min(sizeProp, total);
  const attempts = [...st.attempts].reverse();
  return wrap(
    <>
      {back}
      <div style={{ ...card, marginBottom: 16 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: C.faint }}>{chapter.title}</div>
        <h2 style={{ margin: '2px 0 10px', fontSize: '1.4rem', fontWeight: 900, color: C.ink }}>{topic.title}</h2>
        <div style={{ height: 8, borderRadius: 99, background: '#f1f5f9', overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ width: `${Math.round((doneCount / Math.max(1, total)) * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }} />
        </div>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: C.muted, marginBottom: 14 }}>
          {doneCount} / {total} questions done · Round {st.round}
        </div>
        <div style={{ fontSize: '0.86rem', fontWeight: 600, color: C.muted, marginBottom: 14 }}>
          {homeNote || (
            <>
              {total - doneCount >= size
                ? `${size} questions you haven't done yet`
                : total - doneCount > 0
                  ? `The last ${total - doneCount} new question${total - doneCount === 1 ? '' : 's'} + ${size - (total - doneCount)} from Round ${st.round + 1}`
                  : `All done — Round ${st.round + 1} starts again from the beginning`}
              {` · ${limit / 60} minutes · answers and solutions after you submit.`}
            </>
          )}
        </div>
        <button type="button" onClick={start} style={btn(true)}><Play size={16} /> {startLabel}</button>
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 900, color: C.ink, margin: '0 0 8px' }}>Past tests</h3>
      {attempts.length === 0 && <div style={{ ...card, color: C.faint, fontWeight: 700 }}>No tests yet.</div>}
      {attempts.map((a) => (
        <button
          key={a.id}
          type="button"
          onClick={() => { setReviewId(a.id); setReviewIdx(null); setView('result'); }}
          style={{ ...card, display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', marginBottom: 8, padding: '14px 16px', cursor: 'pointer' }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: C.ink }}>{new Date(a.submittedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: C.faint }}>Round {a.round || 1} · {mmss(a.durationSec || 0)}</div>
          </div>
          <div style={{ fontWeight: 900, fontSize: '1.1rem', color: C.violet }}>{a.marks} / {a.total}</div>
          <ChevronRight size={18} color="#a78bfa" />
        </button>
      ))}
    </>,
  );
};

export default ScholarshipTest;
