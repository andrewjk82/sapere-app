import { useMemo } from 'react';
import { CheckCircle2, Eye } from 'lucide-react';
import { gradeQuestionMarks, questionOutcomes } from '../utils/scholarshipTest';
import { summariseAttempts, rankGroups } from '../utils/examHub';
import ScoreTrendChart from './ScoreTrendChart';

const C = { ink: '#1f1d3d', muted: '#6b7280', faint: '#9ca3af', line: '#e5e7eb', violet: '#7c3aed', soft: '#f5f3ff', green: '#15803d', red: '#c2273d', amber: '#b45309' };
const panel = { background: '#fff', border: `1px solid ${C.line}`, borderRadius: 16, padding: '16px 18px' };
const mmss = (sec) => `${Math.floor(sec / 60)}:${String(Math.max(0, sec) % 60).padStart(2, '0')}`;
const dm = (t) => new Date(t).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

const DOT = {
  right: { bg: '#dcfce7', fg: '#15803d', border: '#86efac' },
  partial: { bg: '#fef3c7', fg: '#b45309', border: '#fcd34d' },
  wrong: { bg: '#fee2e2', fg: '#c2273d', border: '#fca5a5' },
  blank: { bg: '#f3f4f6', fg: '#6b7280', border: '#d1d5db' },
};

/**
 * What a student sees after a test: the score, how it compares with earlier tests of the same kind (a line chart of
 * every score so far), the question map, and a Review button that opens the challenge-style one-question-at-a-time
 * review with step-by-step solutions. The questions themselves are NOT dumped on this screen.
 */
const ScholarshipResult = ({ attempt, history, questions, byId, onReview }) => {
  const pct = attempt.marks / Math.max(1, attempt.total);
  const graded = useMemo(() => history.filter((a) => a.total > 0 && a.submittedAt), [history]);
  const idx = graded.findIndex((a) => a.id === attempt.id);
  const before = idx > 0 ? graded[idx - 1] : null;
  const diff = before ? Math.round(pct * 100) - Math.round((before.marks / before.total) * 100) : null;
  const best = Math.max(...graded.map((a) => a.marks / a.total));
  const points = graded.map((a) => ({ id: a.id, pct: a.marks / a.total, label: dm(a.submittedAt), current: a.id === attempt.id }));
  const outcomes = useMemo(() => questionOutcomes(questions, attempt.answers), [questions, attempt]);
  const firstMiss = Math.max(0, outcomes.findIndex((o) => o !== 'right'));
  const wrongCount = outcomes.filter((o) => o !== 'right').length;
  const types = useMemo(() => rankGroups(summariseAttempts([{ attempts: [attempt] }], byId).byCategory).filter((g) => g.total >= 2), [attempt, byId]);

  return (
    <>
      <div style={{ ...panel, textAlign: 'center', padding: '22px 18px' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: C.faint }}>{new Date(attempt.submittedAt).toLocaleString()}</div>
        <div style={{ fontSize: '3rem', fontWeight: 900, color: C.ink, lineHeight: 1.1, margin: '6px 0 2px', fontVariantNumeric: 'tabular-nums' }}>
          {attempt.marks}<span style={{ color: C.faint, fontSize: '1.6rem' }}> / {attempt.total}</span>
        </div>
        <div style={{ fontWeight: 700, color: C.muted }}>{Math.round(pct * 100)}% · {mmss(attempt.durationSec || 0)}</div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px 16px', marginTop: 12, fontSize: '0.85rem', fontWeight: 700 }}>
          {diff !== null && <span style={{ color: diff > 0 ? C.green : diff < 0 ? C.red : C.muted }}>{diff > 0 ? `▲ ${diff}` : diff < 0 ? `▼ ${Math.abs(diff)}` : '＝ same as'} {diff === 0 ? 'last time' : '% points since last time'}</span>}
          <span style={{ color: C.muted }}>Best {Math.round(best * 100)}%</span>
          <span style={{ color: C.muted }}>Test {idx + 1} of {graded.length}</span>
        </div>
        <button
          type="button"
          onClick={() => onReview(firstMiss)}
          style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44, padding: '10px 22px', borderRadius: 12, border: 0, background: C.violet, color: '#fff', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer' }}
        >
          <Eye size={17} /> {wrongCount ? `Review ${wrongCount} to improve` : 'Review answers'}
        </button>
      </div>

      <div style={{ ...panel, marginTop: 12 }}>
        <div style={{ fontWeight: 800, color: C.ink, marginBottom: 8 }}>Your scores</div>
        <ScoreTrendChart points={points} ariaLabel="Percentage score of each test so far" />
        {points.length === 1 && <div style={{ color: C.faint, fontWeight: 600, fontSize: '0.84rem', marginTop: 6 }}>Take another test and your trend appears here.</div>}
      </div>

      <div style={{ ...panel, marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
          <span style={{ fontWeight: 800, color: C.ink }}>Question by question</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: C.faint }}>Tap one to review it</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {questions.map((q, i) => {
            const d = DOT[outcomes[i]];
            const r = gradeQuestionMarks(q, attempt.answers?.[String(q.id)]);
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onReview(i)}
                aria-label={`Question ${i + 1}: ${outcomes[i] === 'right' ? 'correct' : outcomes[i] === 'blank' ? 'not answered' : outcomes[i] === 'partial' ? `${r.marks} of ${r.total}` : 'incorrect'}`}
                style={{ width: 40, height: 40, borderRadius: 10, border: `1.5px solid ${d.border}`, background: d.bg, color: d.fg, fontWeight: 800, cursor: 'pointer' }}
              >{i + 1}</button>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 12, fontSize: '0.76rem', fontWeight: 600, color: C.muted }}>
          {[['right', 'Correct'], ['partial', 'Some parts'], ['wrong', 'Incorrect'], ['blank', 'Not answered']].map(([k, label]) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: DOT[k].bg, border: `1.5px solid ${DOT[k].border}`, display: 'inline-block' }} />{label}</span>
          ))}
        </div>
      </div>

      {types.length > 0 && (
        <div style={{ ...panel, marginTop: 12 }}>
          <div style={{ fontWeight: 800, color: C.ink, marginBottom: 10 }}>By question type</div>
          {types.map((g) => {
            const color = g.pct >= 0.8 ? C.green : g.pct >= 0.6 ? C.amber : C.red;
            return (
              <div key={g.name} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: C.ink, fontSize: '0.9rem' }}>{titleCase(g.name)}</span>
                  <span style={{ marginLeft: 'auto', fontWeight: 700, color: C.muted, fontSize: '0.84rem', fontVariantNumeric: 'tabular-nums' }}>{g.marks}/{g.total}</span>
                </div>
                <div style={{ height: 5, borderRadius: 5, background: '#eceef2', overflow: 'hidden' }}><i style={{ display: 'block', height: '100%', width: `${Math.round(g.pct * 100)}%`, background: color }} /></div>
              </div>
            );
          })}
        </div>
      )}
      {wrongCount === 0 && (
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, color: C.green, fontWeight: 700 }}><CheckCircle2 size={18} /> Every question correct.</div>
      )}
    </>
  );
};

export default ScholarshipResult;
