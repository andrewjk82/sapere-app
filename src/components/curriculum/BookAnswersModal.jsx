import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Loader2, X } from 'lucide-react';
import { fetchAnswerKeys } from '../../services/homeworkService';
import { isSafeImageDataUrl } from '../../utils/homework';

// Teacher-only viewer for a topic's textbook answers (answer_keys/{topicId}).
// Reads go through fetchAnswerKeys: memory → 14-day device cache → one Firestore
// read, so reopening a topic (here or in the marking panel) costs nothing.
const BookAnswersModal = ({ topic, onClose }) => {
  const [state, setState] = useState({ status: 'loading', key: null });
  const [sectionKey, setSectionKey] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchAnswerKeys([topic.id]).then((map) => {
      if (cancelled) return;
      const key = map[topic.id];
      if (key?.error) setState({ status: 'error', key: null });
      else if (!key?.sections?.length) setState({ status: 'none', key: null });
      else {
        setState({ status: 'ready', key });
        setSectionKey(key.sections[0].key);
      }
    });
    return () => { cancelled = true; };
  }, [topic.id]);

  const sections = state.key?.sections || [];
  const section = sections.find((s) => s.key === sectionKey) || sections[0];
  const label = `${topic.code ? `${topic.code} · ` : ''}${topic.title || ''}`;

  return createPortal(
    <div role="dialog" aria-label={`Book answers: ${label}`} onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(900px, 100%)', height: 'min(92vh, 1000px)', background: '#fff', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 60px rgba(15,23,42,0.35)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>
              Book answers{state.key?.book ? ` · ${state.key.book}` : ''}
            </div>
            <div style={{ fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
          </div>
          <button type="button" aria-label="Close" onClick={onClose}
            style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>
        {sections.length > 1 && (
          <div style={{ display: 'flex', gap: 6, padding: '8px 14px', flexWrap: 'wrap', borderBottom: '1px solid #f1f5f9' }}>
            {sections.map((s) => (
              <button key={s.key} type="button" onClick={() => setSectionKey(s.key)}
                style={{ border: 0, borderRadius: 999, padding: '5px 11px', fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer', background: s.key === section?.key ? '#4f46e5' : '#f1f5f9', color: s.key === section?.key ? '#fff' : '#475569' }}>
                {s.title}
              </button>
            ))}
          </div>
        )}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 10, background: '#fff' }}>
          {state.status === 'loading' && <Loader2 size={22} style={{ display: 'block', margin: '40px auto', color: '#94a3b8', animation: 'spin 1s linear infinite' }} />}
          {state.status === 'error' && <div style={{ color: '#b91c1c', fontWeight: 700, textAlign: 'center', padding: 30 }}>Couldn’t load the answers. Check your connection and try again.</div>}
          {state.status === 'none' && <div style={{ color: '#94a3b8', fontWeight: 700, textAlign: 'center', padding: 30 }}>No answer key for this topic yet.</div>}
          {section?.images.filter(isSafeImageDataUrl).map((src, i) => (
            <img key={i} src={src} alt={`${section.title} answers`} style={{ display: 'block', width: '100%', height: 'auto' }} />
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default BookAnswersModal;
