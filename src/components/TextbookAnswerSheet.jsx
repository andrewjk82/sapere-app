import { useEffect, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { fetchAnswerKeys } from '../services/homeworkService';
import { isSafeImageDataUrl } from '../utils/homework';

const SPIN = { animation: 'spin 0.8s linear infinite' };

/**
 * The textbook answer key of one topic, laid over the worksheet (curriculum). Uses fetchAnswerKeys, so a key read once
 * stays on the device (IndexedDB) and opening it again costs no Firestore read. The student picks the exercise when the
 * topic has more than one.
 */
const TextbookAnswerSheet = ({ topicId, title, onClose }) => {
  const [state, setState] = useState({ status: 'loading' });
  const [sectionKey, setSectionKey] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchAnswerKeys([topicId]).then((keys) => {
      if (cancelled) return;
      const entry = keys[topicId];
      if (entry?.error) { setState({ status: 'error' }); return; }
      const sections = (entry?.sections || [])
        .map((s) => ({ key: s.key, title: s.title || s.key, images: (s.images || []).filter(isSafeImageDataUrl) }))
        .filter((s) => s.images.length);
      setState(sections.length ? { status: 'ready', sections } : { status: 'none' });
      setSectionKey(sections[0]?.key || '');
    });
    return () => { cancelled = true; };
  }, [topicId, attempt]);

  const sections = state.sections || [];
  const shown = sections.find((s) => s.key === sectionKey) || sections[0];

  return (
    <div style={{ position: 'absolute', inset: 8, top: 62, background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15,23,42,0.22)', display: 'flex', flexDirection: 'column', zIndex: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderBottom: '1px solid #eef2f7' }}>
        <strong style={{ flex: 1, minWidth: 0, color: '#1e1b4b', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Answers{title ? ` · ${title}` : ''}</strong>
        <button type="button" aria-label="Close answers" onClick={onClose} style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 4 }}><X size={18} /></button>
      </div>
      {sections.length > 1 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 12px', borderBottom: '1px solid #eef2f7' }}>
          {sections.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setSectionKey(s.key)}
              style={{ border: 0, borderRadius: 999, padding: '5px 12px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', background: s.key === shown?.key ? '#4f46e5' : '#f1f5f9', color: s.key === shown?.key ? '#fff' : '#64748b' }}
            >
              {s.title}
            </button>
          ))}
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 10 }}>
        {state.status === 'loading' && <Loader2 size={22} style={{ ...SPIN, display: 'block', margin: '30px auto', color: '#94a3b8' }} />}
        {state.status === 'error' && (
          <div role="alert" style={{ textAlign: 'center', padding: 24, color: '#b91c1c', fontWeight: 700 }}>
            Couldn’t load the answers. Check your connection and try again.
            <div><button type="button" onClick={() => { setState({ status: 'loading' }); setAttempt((n) => n + 1); }} style={{ marginTop: 12, border: 0, borderRadius: 10, padding: '8px 16px', background: '#4f46e5', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>Try again</button></div>
          </div>
        )}
        {state.status === 'none' && <div style={{ textAlign: 'center', padding: 24, color: '#94a3b8', fontWeight: 700 }}>There are no answers for this topic yet.</div>}
        {shown?.images.map((src, i) => (
          <img key={i} src={src} alt={`${shown.title} answers`} style={{ display: 'block', width: '100%', height: 'auto' }} />
        ))}
      </div>
    </div>
  );
};

export default TextbookAnswerSheet;
