import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Target, Clock, ChevronRight, Lock, Play, TrendingDown, Trophy } from 'lucide-react';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { getTopicQuestions } from '../services/contentLoader';
import { useAuth } from '../context/AuthContext';
import { loadTestState } from '../utils/scholarshipTest';
import {
  MOCK_FORMATS, hubExamsFor, mockSizeFor, mockStorageId, mockSummary, summariseAttempts, rankGroups,
} from '../utils/examHub';
import ScholarshipTest from './ScholarshipTest';

const C = { ink: '#1e1b4b', muted: '#64748b', faint: '#94a3b8', line: '#e2e8f0', violet: '#7c3aed', soft: '#f5f3ff', green: '#059669', amber: '#d97706', red: '#e11d48' };
const card = { background: '#fff', border: `1px solid ${C.line}`, borderRadius: 20, padding: 18, boxShadow: '0 4px 14px rgba(15,23,42,0.04)' };
const pct = (x) => `${Math.round(x * 100)}%`;
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

/** One horizontal bar: accuracy for a category / difficulty. */
const Bar = ({ row }) => {
  const color = !row.judged ? C.faint : row.weak ? C.red : row.pct >= 0.8 ? C.green : C.amber;
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <span style={{ fontWeight: 800, color: C.ink, fontSize: '0.88rem' }}>{titleCase(row.name)}</span>
        {row.weak && <span style={{ fontSize: '0.68rem', fontWeight: 900, color: C.red, background: '#fff1f2', borderRadius: 99, padding: '2px 8px' }}>NEEDS WORK</span>}
        <span style={{ marginLeft: 'auto', fontWeight: 800, color: C.muted, fontSize: '0.8rem', fontVariantNumeric: 'tabular-nums' }}>
          {row.judged ? pct(row.pct) : 'not enough yet'} · {row.marks}/{row.total}
        </span>
      </div>
      <div style={{ height: 8, borderRadius: 99, background: '#f1f5f9', overflow: 'hidden' }}>
        <div style={{ width: `${Math.round(row.pct * 100)}%`, height: '100%', background: color, opacity: row.judged ? 1 : 0.45 }} />
      </div>
    </div>
  );
};

/**
 * OC & Selective: full-length mock exams (real question count and time limit) plus a weak-spot summary built from
 * every OC / Selective test the student has taken on this device. Shown only to students whose teacher switched on
 * Scholarship with OC and/or Selective ticked (utils/examHub.hubExamsFor). Topic-by-topic practice stays on the
 * Scholarship page.
 */
const OcSelectivePrep = ({ profile, setActiveTab }) => {
  const { user } = useAuth();
  const uid = user?.uid || 'anon';
  const examIds = useMemo(() => hubExamsFor(profile), [profile]);
  const exams = useMemo(() => (CURRICULUM_DATA.Scholarship || []).filter((e) => examIds.includes(e.id)), [examIds]);
  const [examId, setExamId] = useState(null);
  const active = exams.find((e) => e.id === examId) || exams[0];
  // { examId, bank: { [topicId]: question[] } | null, failed } — only trusted while examId is the active exam,
  // so switching exams shows "Loading…" without resetting state inside the effect.
  const [loaded, setLoaded] = useState({ examId: null, bank: null, failed: false });
  const bank = loaded.examId === active?.id ? loaded.bank : null;
  const failed = loaded.examId === active?.id && loaded.failed;
  const [running, setRunning] = useState(null);  // { exam, topic, size, seconds }
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
          key={`${running.exam.id}:${running.topic.id}`}
          topic={running.topic}
          chapter={{ id: running.exam.id, title: running.exam.title }}
          profile={profile}
          storageId={mockStorageId(running.exam.id)}
          size={running.size}
          seconds={running.seconds}
          startLabel="Start mock exam"
          onBack={() => setRunning(null)}
        />
      </AnimatePresence>
    );
  }

  if (!active) {
    return <div style={{ maxWidth: 760, margin: '0 auto', padding: 24, ...card, color: C.muted, fontWeight: 700 }}>OC &amp; Selective has not been switched on for you yet. Ask your teacher.</div>;
  }

  const sections = (active.topics || []).filter((t) => MOCK_FORMATS[t.id]);
  const insight = (topic) => {
    const byId = new Map((bank?.[topic.id] || []).map((q) => [String(q.id), q]));
    return summariseAttempts([loadTestState(uid, active.id, topic.id), loadTestState(uid, mockStorageId(active.id), topic.id)], byId);
  };

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '8px 4px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}><Target size={22} /></div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: C.ink, fontFamily: 'var(--font-heading)' }}>OC &amp; Selective</h2>
      </div>
      <p style={{ margin: '0 0 18px', color: C.muted, fontWeight: 600, fontSize: '0.92rem' }}>
        Sit a full-length mock under the real time limit, then see which question types to work on next.
      </p>

      {exams.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {exams.map((e) => (
            <button
              key={e.id}
              type="button"
              aria-pressed={e.id === active.id}
              onClick={() => setExamId(e.id)}
              style={{ padding: '9px 18px', borderRadius: 12, fontWeight: 900, cursor: 'pointer', border: `1.5px solid ${e.id === active.id ? '#a78bfa' : C.line}`, background: e.id === active.id ? C.soft : '#fff', color: e.id === active.id ? '#5b21b6' : C.muted }}
            >{e.title}</button>
          ))}
        </div>
      )}

      <h3 style={{ fontSize: '1rem', fontWeight: 900, color: C.ink, margin: '0 0 8px' }}>Mock exams</h3>
      {failed && <div style={{ ...card, color: C.red, fontWeight: 700 }}>Could not load the questions. Check your connection and try again.</div>}
      {sections.map((topic) => {
        const fmt = MOCK_FORMATS[topic.id];
        const qs = bank?.[topic.id];
        const empty = qs && qs.length === 0;
        const size = qs ? mockSizeFor(qs, fmt.marks) : 0;
        const sum = mockSummary(uid, active.id, topic.id);
        return (
          <button
            key={topic.id}
            type="button"
            disabled={!qs || empty}
            onClick={() => setRunning({ exam: active, topic: { id: topic.id, title: topic.title, code: topic.code || '' }, size, seconds: fmt.minutes * 60 })}
            style={{ ...card, display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left', marginBottom: 10, cursor: !qs || empty ? 'default' : 'pointer', opacity: empty ? 0.6 : 1 }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 900, color: C.ink, fontSize: '1.02rem' }}>{fmt.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 4, fontSize: '0.78rem', fontWeight: 700, color: C.faint }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Clock size={13} /> {fmt.minutes} min</span>
                <span>{!qs ? 'Loading…' : empty ? 'Coming soon' : `${size} question${size === 1 ? '' : 's'}`}</span>
                {sum.count > 0 && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Trophy size={13} /> best {pct(sum.best)} · last {pct(sum.last)} · {sum.count} taken</span>}
                {sum.inProgress && <span style={{ color: C.violet }}>In progress — resume</span>}
              </div>
            </div>
            {empty ? <Lock size={16} color="#cbd5e1" /> : qs && (sum.inProgress ? <Play size={18} color="#a78bfa" /> : <ChevronRight size={18} color="#a78bfa" />)}
          </button>
        );
      })}

      <h3 style={{ fontSize: '1rem', fontWeight: 900, color: C.ink, margin: '22px 0 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <TrendingDown size={17} color={C.violet} /> Where to improve
      </h3>
      {!bank && !failed && <div style={{ ...card, color: C.muted, fontWeight: 700 }}>Loading…</div>}
      {bank && sections.filter((t) => (bank[t.id] || []).length > 0).map((topic) => {
        const s = insight(topic);
        const cats = rankGroups(s.byCategory);
        const diffs = rankGroups(s.byDifficulty);
        const rows = cats.length ? cats : diffs;
        return (
          <div key={topic.id} style={{ ...card, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
              <span style={{ fontWeight: 900, color: C.ink }}>{MOCK_FORMATS[topic.id].name}</span>
              {s.total > 0 && <span style={{ marginLeft: 'auto', fontWeight: 800, color: C.muted, fontSize: '0.8rem' }}>{pct(s.marks / s.total)} over {s.total} marks</span>}
            </div>
            {s.total === 0
              ? <div style={{ color: C.faint, fontWeight: 700, fontSize: '0.88rem' }}>Take a mock or a topic test to see your strengths and weak spots here.</div>
              : rows.map((r) => <Bar key={r.name} row={r} />)}
            {s.total > 0 && !cats.length && <div style={{ color: C.faint, fontWeight: 600, fontSize: '0.78rem' }}>Shown by difficulty — these questions are not grouped by type.</div>}
          </div>
        );
      })}

      <div style={{ ...card, marginTop: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, color: C.muted, fontWeight: 600, fontSize: '0.86rem' }}>Want to drill one area? Topic tests of 10 questions are on the Scholarship page.</div>
        <button
          type="button"
          onClick={() => setActiveTab?.('Scholarship')}
          style={{ padding: '10px 16px', borderRadius: 12, border: `1px solid ${C.line}`, background: '#fff', fontWeight: 800, color: C.ink, cursor: 'pointer' }}
        >Open Scholarship</button>
      </div>
    </div>
  );
};

export default OcSelectivePrep;
