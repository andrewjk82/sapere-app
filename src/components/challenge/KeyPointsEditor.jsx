import { useMemo, useRef, useState } from 'react';
import { Highlighter, Trash2, Save, AlertTriangle } from 'lucide-react';
import MathView from '../MathView';
import { locateKeyPoints, snapToMath, sanitizeKeyPoints, initialKeyPointsDraft } from '../../utils/keyPoints';
import { parseHintSteps } from '../../utils/hintSteps';
import { contentPatch } from '../../services/contentApi';
import { useToast } from '../../context/ToastContext';

const partLabel = (i) => `(${String.fromCharCode(97 + i)})`;

/**
 * Question Bank → Hint tab, right-hand panel. The real Daily Challenge screen stays behind it
 * with the draft highlights applied (QuestionPreviewModal passes `draft` to ChallengeQuizView),
 * so the teacher sees exactly what a student will. Here: select text in the raw Source, add a
 * tip, save. Maths is always highlighted as a whole expression. Saves through contentPatch.
 */
const KeyPointsEditor = ({ question, chapterId, draft, setDraft, onSaved }) => {
  const { showToast } = useToast();
  const parts = Array.isArray(question?.subQuestions) ? question.subQuestions : [];
  const targets = useMemo(() => {
    const list = [];
    if (String(question?.question || '').trim()) list.push({ key: 'main', label: parts.length ? 'Main stem' : 'Question', stem: question.question });
    parts.forEach((sq, i) => list.push({ key: `p${i}`, partIdx: i, label: `Part ${partLabel(i)}`, stem: sq?.question || '' }));
    return list;
  }, [question, parts]);

  const initial = useMemo(() => initialKeyPointsDraft(question), [question]);

  const [targetKey, setTargetKey] = useState(targets[0]?.key || 'main');
  const [saving, setSaving] = useState(false);
  const sourceRef = useRef(null);
  const noteRefs = useRef({});

  const target = targets.find((t) => t.key === targetKey) || targets[0];
  const kps = draft[targetKey] || [];
  const located = locateKeyPoints(target?.stem, kps);
  const dirty = JSON.stringify(draft) !== JSON.stringify(initial);
  const hintSteps = parseHintSteps(targetKey === 'main' ? question?.hint : parts[target?.partIdx]?.hint);

  const setKps = (next) => { setDraft((d) => ({ ...d, [targetKey]: next })); };

  const addFromSelection = () => {
    const sel = window.getSelection?.();
    const text = sel ? sel.toString() : '';
    if (!text.trim() || !sourceRef.current || !sourceRef.current.contains(sel.anchorNode)) {
      showToast('Select part of the Source text first', 'info');
      return;
    }
    const stem = String(target.stem);
    const at = stem.indexOf(text);
    if (at < 0) { showToast('That selection isn’t plain stem text — try a smaller piece', 'error'); return; }
    const [s, e] = snapToMath(stem, at, at + text.length);
    const snapped = stem.slice(s, e);
    if (kps.some((kp) => kp.text === snapped)) { showToast('Already highlighted', 'info'); return; }
    const next = [...kps, { text: snapped, note: '' }];
    setKps(next);
    sel.removeAllRanges();
    setTimeout(() => noteRefs.current[next.length - 1]?.focus(), 30);
    if (stem.indexOf(snapped, stem.indexOf(snapped) + 1) >= 0) showToast('That text appears more than once — the first one is highlighted', 'info');
  };

  const handleSave = async () => {
    const missingNote = Object.values(draft).some((list) => list.some((kp) => !String(kp.note || '').trim()));
    if (missingNote) { showToast('Every highlight needs a tip before saving', 'error'); return; }
    const fields = {};
    if (JSON.stringify(draft.main) !== JSON.stringify(initial.main)) fields.keyPoints = sanitizeKeyPoints(draft.main);
    if (parts.some((_, i) => JSON.stringify(draft[`p${i}`]) !== JSON.stringify(initial[`p${i}`]))) {
      fields.subQuestions = parts.map((sq, i) => ({ ...sq, keyPoints: sanitizeKeyPoints(draft[`p${i}`]) }));
    }
    if (!Object.keys(fields).length) return;
    setSaving(true);
    try {
      await contentPatch(question.id, fields, { chapterId: question.chapterId || chapterId });
      onSaved?.(fields);
      showToast('Highlights saved — live for students in about 2 minutes', 'success');
    } catch (err) {
      console.error('keyPoints save failed:', err);
      showToast(`Save failed: ${err?.message || 'error'}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  const card = { background: '#fff', borderRadius: '18px', border: '1px solid #e2e8f0', padding: '14px 16px' };
  const label = { fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '10px' };

  return (
    <div style={{ position: 'fixed', top: 72, right: 16, bottom: 16, width: 'min(400px, calc(100vw - 32px))', zIndex: 2500, background: '#f8fafc', borderRadius: 24, border: '1px solid #e2e8f0', boxShadow: '0 24px 48px rgba(15,23,42,0.18)', overflowY: 'auto', padding: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontWeight: 900, color: '#1e1b4b' }}>Highlights <span style={{ fontWeight: 600, color: '#94a3b8', fontSize: '0.8rem' }}>— tap one on the question to see its tip</span></div>
        {targets.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {targets.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTargetKey(t.key)}
                style={{ padding: '7px 14px', borderRadius: '999px', border: '1px solid #ddd6fe', background: t.key === targetKey ? '#6d28d9' : '#fff', color: t.key === targetKey ? '#fff' : '#6d28d9', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
              >
                {t.label}{(draft[t.key] || []).length ? ` · ${(draft[t.key] || []).length}` : ''}
              </button>
            ))}
          </div>
        )}

        {!target ? (
          <div style={card}>This question has no stem to highlight.</div>
        ) : (
          <>
            {!kps.length && (
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.82rem' }}>No highlights yet — students will see the step hint instead.</p>
            )}
            <div style={card}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <div style={{ ...label, marginBottom: 0 }}>Source — select text to highlight</div>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={addFromSelection}
                  disabled={kps.length >= 6}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: '12px', border: 'none', background: '#fde68a', color: '#92400e', fontWeight: 800, fontSize: '0.82rem', cursor: kps.length >= 6 ? 'not-allowed' : 'pointer' }}
                >
                  <Highlighter size={14} /> Highlight selection
                </button>
              </div>
              <pre ref={sourceRef} style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '0.85rem', lineHeight: 1.7, color: '#334155', background: '#f8fafc', borderRadius: '12px', padding: '12px 14px', userSelect: 'text' }}>
                {target.stem}
              </pre>
              <p style={{ margin: '8px 0 0', color: '#94a3b8', fontSize: '0.75rem' }}>Maths is always highlighted as a whole expression. Up to 6 highlights.</p>
            </div>

            {kps.length > 0 && (
              <div style={card}>
                <div style={label}>Highlights and tips (students read these — write in English)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {kps.map((kp, i) => {
                    const where = located.find((p) => p.idx === i);
                    return (
                      <div key={`${i}-${kp.text}`} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '12px', borderRadius: '14px', background: '#fffbeb', border: '1px solid #fde68a' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <code style={{ flex: 1, fontSize: '0.8rem', color: '#92400e', wordBreak: 'break-word' }}>{kp.text}</code>
                          <button type="button" title="Remove" onClick={() => setKps(kps.filter((_, j) => j !== i))} style={{ border: 'none', background: 'transparent', color: '#e11d48', cursor: 'pointer', padding: 4 }}>
                            <Trash2 size={15} />
                          </button>
                        </div>
                        {where && !where.found && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#b45309', fontSize: '0.75rem', fontWeight: 700 }}>
                            <AlertTriangle size={13} /> {where.overlap ? 'Overlaps another highlight — not shown' : 'No longer in the stem — remove and re-select'}
                          </div>
                        )}
                        <textarea
                          ref={(el) => { noteRefs.current[i] = el; }}
                          value={kp.note}
                          onChange={(e) => setKps(kps.map((k, j) => (j === i ? { ...k, note: e.target.value } : k)))}
                          placeholder="Tip shown when the student taps this highlight"
                          rows={2}
                          style={{ width: '100%', boxSizing: 'border-box', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '8px 10px', fontSize: '0.88rem', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {hintSteps.length > 0 && (
              <div style={{ ...card, background: '#f8fafc' }}>
                <div style={label}>Existing step hint (fallback when there are no highlights)</div>
                {hintSteps.map((h, i) => (
                  <MathView key={i} content={h} style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: 6 }} />
                ))}
              </div>
            )}
          </>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={handleSave}
            disabled={!dirty || saving}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: '14px', border: 'none', background: dirty ? '#6d28d9' : '#cbd5e1', color: '#fff', fontWeight: 800, cursor: dirty && !saving ? 'pointer' : 'not-allowed' }}
          >
            <Save size={16} /> {saving ? 'Saving…' : 'Save highlights'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyPointsEditor;
