import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { fetchAnswerKeys } from '../../services/homeworkService';
import { isSafeImageDataUrl } from '../../utils/homework';
import { nextMark, markKey, scoreMarks, compactMarks } from '../../utils/homeworkMarking';

const SPIN = { animation: 'spin 0.8s linear infinite' };
const MARK_STYLE = {
  c: { bg: '#10b981', fg: '#fff', text: '✓' },
  x: { bg: '#ef4444', fg: '#fff', text: '✗' },
  h: { bg: '#f59e0b', fg: '#fff', text: '½' },
};
const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

/**
 * Teacher marking: the textbook answer key for the homework's topics (top)
 * and a per-question ✓/✗/½ grid with an auto score (bottom). `layout` is
 * 'stack' (both, split vertically) or 'answers' / 'marking' for one part
 * (narrow screens use tabs).
 */
const HomeworkMarkingPanel = ({ topics, layout = 'stack', saving, onSave }) => {
  const [keys, setKeys] = useState(null);
  const [active, setActive] = useState(0);
  const [marks, setMarks] = useState({});
  const [comment, setComment] = useState('');

  const topicIds = useMemo(() => topics.map((t) => t.id), [topics]);
  useEffect(() => {
    let cancelled = false;
    fetchAnswerKeys(topicIds).then((k) => { if (!cancelled) setKeys(k); });
    return () => { cancelled = true; };
  }, [topicIds]);

  const topic = topics[active];
  const answer = topic && keys ? keys[topic.id] : null;
  const { score, total } = scoreMarks(marks);
  const toggle = (k) => setMarks((prev) => ({ ...prev, [k]: nextMark(prev[k]) }));

  const tabs = topics.length > 1 && (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 10px', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
      {topics.map((t, i) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setActive(i)}
          style={{ border: 0, borderRadius: 999, padding: '5px 11px', fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer', background: i === active ? '#4f46e5' : '#f1f5f9', color: i === active ? '#fff' : '#475569' }}
        >
          {t.label.split(' · ')[0] || t.label}
        </button>
      ))}
    </div>
  );

  const answersPart = (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: '#fff', padding: 10 }}>
      {!keys ? (
        <Loader2 size={22} style={{ ...SPIN, display: 'block', margin: '30px auto', color: '#94a3b8' }} />
      ) : !answer ? (
        <div style={{ color: '#94a3b8', fontWeight: 700, textAlign: 'center', padding: 30 }}>No answer key for this topic yet.</div>
      ) : (
        answer.sections.map((s) => (
          <div key={s.key} style={{ marginBottom: 12 }}>
            {s.images.filter(isSafeImageDataUrl).map((src, i) => (
              <img key={i} src={src} alt={`${s.title} answers`} style={{ display: 'block', width: '100%', height: 'auto' }} />
            ))}
          </div>
        ))
      )}
    </div>
  );

  const markingPart = (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 12 }}>
        {answer ? answer.sections.map((s) => (
          <div key={s.key} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 6 }}>
              {topic.label.split(' · ')[0]} · {s.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.labels.map((label) => {
                const k = markKey(topic.id, s.key, label);
                const st = MARK_STYLE[marks[k]];
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggle(k)}
                    title="Tap: ✓ → ✗ → ½ → clear"
                    style={{ minWidth: 42, height: 36, borderRadius: 10, border: st ? 0 : '1.5px solid #e2e8f0', background: st ? st.bg : '#fff', color: st ? st.fg : '#1e293b', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                  >
                    {label}{st ? ` ${st.text}` : ''}
                  </button>
                );
              })}
            </div>
          </div>
        )) : keys && (
          <div style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.85rem' }}>
            No question list for this topic — you can still mark it as checked.
          </div>
        )}
      </div>
      <div style={{ borderTop: '1px solid #e2e8f0', padding: 12, background: '#fff', display: 'grid', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>Score</span>
          <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e1b4b' }}>{total > 0 ? `${fmt(score)} / ${total}` : '—'}</span>
          {total > 0 && <span style={{ color: '#64748b', fontWeight: 700 }}>{Math.round((score / total) * 100)}%</span>}
          <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '0.72rem', fontWeight: 700 }}>Unmarked questions don't count</span>
        </div>
        <textarea
          rows={1}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment for the student (optional)"
          style={{ width: '100%', boxSizing: 'border-box', border: '1.5px solid #e2e8f0', borderRadius: 10, padding: '8px 10px', fontFamily: 'inherit', fontWeight: 600, resize: 'vertical' }}
        />
        <button
          type="button"
          disabled={saving}
          onClick={() => onSave({ score, total, marks: compactMarks(marks), comment })}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 14px', borderRadius: 12, border: 0, background: '#10b981', color: '#fff', fontWeight: 800, cursor: saving ? 'default' : 'pointer' }}
        >
          {saving ? <Loader2 size={16} style={SPIN} /> : <CheckCircle2 size={16} />}
          {total > 0 ? `Save ${fmt(score)}/${total} & mark as checked` : 'Mark as checked'}
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {tabs}
      {layout !== 'marking' && <div style={{ flex: layout === 'stack' ? 1.3 : 1, minHeight: 0, display: 'flex' }}>{answersPart}</div>}
      {layout === 'stack' && <div style={{ height: 1, background: '#e2e8f0' }} />}
      {layout !== 'answers' && <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>{markingPart}</div>}
    </div>
  );
};

export default HomeworkMarkingPanel;
