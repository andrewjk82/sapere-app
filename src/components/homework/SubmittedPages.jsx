import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { fetchSubmission } from '../../services/homeworkService';
import { loadHomeworkLocal } from '../../utils/homeworkLocalStore';
import { isSafeImageDataUrl } from '../../utils/homework';

const SPIN = { animation: 'spin 0.8s linear infinite' };
const NAV_BTN = { border: 0, background: '#fff', borderRadius: 10, width: 36, height: 36, display: 'grid', placeItems: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(15,23,42,0.15)' };

// The pages the student handed in, for one topic. The copy kept on this device first;
// only when there is none is the submission doc read once (for its thumbnails).
const SubmittedPages = ({ uid, sessionId, topicId }) => {
  const [records, setRecords] = useState(null); // null while loading
  const [thumbOnly, setThumbOnly] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      let list = [];
      let thumbs = false;
      try {
        const local = await loadHomeworkLocal(uid, sessionId);
        list = (local?.submittedPages || (local?.submittedImages || []).map((image) => ({ image })))
          .filter((r) => isSafeImageDataUrl(r?.image));
        if (list.length === 0) {
          const sub = await fetchSubmission(sessionId);
          const pageTopics = sub?.pageTopics || [];
          list = (sub?.thumbnails || [])
            .map((image, i) => ({ image, topicId: pageTopics[i]?.topicId || null }))
            .filter((r) => isSafeImageDataUrl(r.image));
          thumbs = list.length > 0;
        }
      } catch { /* shown as "nothing submitted" */ }
      if (!cancelled) { setRecords(list); setThumbOnly(thumbs); }
    })();
    return () => { cancelled = true; };
  }, [uid, sessionId]);

  if (records === null) {
    return <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}><Loader2 size={24} color="#94a3b8" style={SPIN} /></div>;
  }
  // Pages from before per-topic notebooks have no topicId: show them for every topic.
  const visible = records.filter((r) => !r.topicId || r.topicId === topicId);
  const current = Math.min(page, Math.max(visible.length - 1, 0));
  if (visible.length === 0) {
    return <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 700, padding: 24, textAlign: 'center' }}>Nothing submitted for this topic on this device.</div>;
  }
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {thumbOnly && <div style={{ textAlign: 'center', color: '#b45309', fontSize: '0.75rem', fontWeight: 700, padding: '2px 0 6px' }}>Small preview — the full-size copy is no longer stored.</div>}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', touchAction: 'pan-x pan-y pinch-zoom' }}>
        <img src={visible[current].image} alt={`Your submitted page ${current + 1}`} style={{ margin: '0 auto auto', width: '100%', maxWidth: 900, height: 'auto', background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0' }} />
      </div>
      {visible.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, paddingTop: 8, flexShrink: 0 }}>
          <button type="button" aria-label="Previous page" disabled={current === 0} onClick={() => setPage(current - 1)} style={{ ...NAV_BTN, opacity: current === 0 ? 0.35 : 1 }}><ChevronLeft size={20} /></button>
          <span style={{ fontWeight: 800, color: '#475569', fontSize: '0.85rem' }}>{current + 1} / {visible.length}</span>
          <button type="button" aria-label="Next page" disabled={current === visible.length - 1} onClick={() => setPage(current + 1)} style={{ ...NAV_BTN, opacity: current === visible.length - 1 ? 0.35 : 1 }}><ChevronRight size={20} /></button>
        </div>
      )}
    </div>
  );
};

export default SubmittedPages;
