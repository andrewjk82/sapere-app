import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { fetchSubmission } from '../../services/homeworkService';
import { loadHomeworkLocal } from '../../utils/homeworkLocalStore';
import { isSafeImageDataUrl } from '../../utils/homework';

const SPIN = { animation: 'spin 0.8s linear infinite' };

// Every page the student handed in, in one scrolling column grouped by topic; opens at the topic of the question
// being redone (`topicId`). It used to show that topic's pages only, one at a time — students took the single page
// on screen for the whole submission. The copy kept on this device first;
// only when there is none is the submission doc read once (for its thumbnails).
const SubmittedPages = ({ uid, sessionId, topicId }) => {
  const [records, setRecords] = useState(null); // null while loading
  const [thumbOnly, setThumbOnly] = useState(false);
  const scrollRef = useRef(null);

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
            .map((image, i) => ({ image, topicId: pageTopics[i]?.topicId || null, topicLabel: pageTopics[i]?.topicLabel || '' }))
            .filter((r) => isSafeImageDataUrl(r.image));
          thumbs = list.length > 0;
        }
      } catch { /* shown as "nothing submitted" */ }
      if (!cancelled) { setRecords(list); setThumbOnly(thumbs); }
    })();
    return () => { cancelled = true; };
  }, [uid, sessionId]);

  // Bring the current question's topic to the top (on open, and when another question is picked).
  useEffect(() => {
    const box = scrollRef.current;
    if (!box || !records?.length || !topicId) return;
    const target = [...box.querySelectorAll('[data-topic]')].find((el) => el.dataset.topic === String(topicId));
    if (target) box.scrollTop = target.offsetTop;
  }, [records, topicId]);

  if (records === null) {
    return <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}><Loader2 size={24} color="#94a3b8" style={SPIN} /></div>;
  }
  if (records.length === 0) {
    return <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 700, padding: 24, textAlign: 'center' }}>Nothing submitted on this device.</div>;
  }
  // Consecutive pages of one topic share a heading (pages are stored topic by topic).
  const groups = [];
  records.forEach((record, index) => {
    const key = record.topicId || '';
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.pages.push({ ...record, index });
    else groups.push({ key, label: record.topicLabel || record.topicId || 'Earlier combined notes', pages: [{ ...record, index }] });
  });
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {thumbOnly && <div style={{ textAlign: 'center', color: '#b45309', fontSize: '0.75rem', fontWeight: 700, padding: '2px 0 6px' }}>Small preview — the full-size copy is no longer stored.</div>}
      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflow: 'auto', position: 'relative', padding: '0 8px 16px', touchAction: 'pan-x pan-y pinch-zoom' }}>
        {groups.map((group, g) => (
          <div key={`${group.key}:${g}`} data-topic={group.key} style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1, background: '#f8fafc', padding: '8px 2px 6px', fontWeight: 800, fontSize: '0.8rem', color: group.key && group.key === topicId ? '#6d28d9' : '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {group.label} · {group.pages.length} page{group.pages.length === 1 ? '' : 's'}
            </div>
            {group.pages.map((record) => (
              <div key={record.index} style={{ marginBottom: 12 }}>
                <img src={record.image} alt={`Your submitted page ${record.index + 1}`} style={{ display: 'block', width: '100%', height: 'auto', background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0' }} />
                <div style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', paddingTop: 4 }}>Page {record.index + 1} of {records.length}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedPages;
