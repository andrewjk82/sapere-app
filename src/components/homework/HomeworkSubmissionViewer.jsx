import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';
import { fetchSubmission, fetchSubmissionPages, markHomeworkChecked } from '../../services/homeworkService';
import { loadHomeworkLocal } from '../../utils/homeworkLocalStore';
import { isSafeImageDataUrl } from '../../utils/homework';

const SPIN = { animation: 'spin 0.8s linear infinite' };
const ICON_BTN = { border: 0, background: 'transparent', color: '#fff', padding: 6, cursor: 'pointer' };

// mode 'teacher': originals from Firestore (thumbnails once purged) + "Mark as checked".
// mode 'student': the copy kept on this device (thumbnails as a fallback).
const HomeworkSubmissionViewer = ({ sessionId, mode, uid, onClose, onChecked }) => {
  const [submission, setSubmission] = useState(null);
  const [pages, setPages] = useState([]);
  const [isThumbnailOnly, setIsThumbnailOnly] = useState(false);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Paper homework the teacher ticked has no submission doc → null.
        const sub = await fetchSubmission(sessionId);
        if (cancelled) return;
        setSubmission(sub);
        let images = [];
        if (mode === 'student') {
          const local = await loadHomeworkLocal(uid, sessionId);
          images = local?.submittedImages || [];
        } else if (sub && !sub.originalsDeletedAt) {
          images = await fetchSubmissionPages(sessionId);
        }
        if (cancelled) return;
        images = images.filter(isSafeImageDataUrl);
        const thumbnails = (sub?.thumbnails || []).filter(isSafeImageDataUrl);
        if (images.length === 0 && thumbnails.length) {
          images = thumbnails;
          setIsThumbnailOnly(true);
        }
        setPages(images);
      } catch {
        if (!cancelled) setError('Could not load this homework.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [sessionId, mode, uid]);

  const handleCheck = async () => {
    setChecking(true);
    setError('');
    try {
      await markHomeworkChecked(sessionId);
      setSubmission((s) => ({ ...s, status: 'checked' }));
      onChecked?.(sessionId);
    } catch {
      setError('Could not mark as checked. Try again.');
    } finally {
      setChecking(false);
    }
  };

  const topics = (submission?.topics || []).map((t) => t.label).join(', ');
  const subtitle = [submission?.sessionDate, topics].filter(Boolean).join(' · ');

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(15,23,42,0.85)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', color: '#fff' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800 }}>{mode === 'teacher' ? (submission?.studentName || 'Homework') : 'Your homework'}</div>
          {subtitle && (
            <div style={{ fontSize: '0.75rem', opacity: 0.75, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {subtitle}
            </div>
          )}
        </div>
        <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} style={ICON_BTN}><ZoomOut size={20} /></button>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} style={ICON_BTN}><ZoomIn size={20} /></button>
        {mode === 'teacher' && submission?.status === 'submitted' && (
          <button type="button" disabled={checking} onClick={handleCheck} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 12, border: 0, background: '#10b981', color: '#fff', fontWeight: 800, cursor: checking ? 'default' : 'pointer' }}>
            {checking ? <Loader2 size={16} style={SPIN} /> : <CheckCircle2 size={16} />} Mark as checked
          </button>
        )}
        {submission?.status === 'checked' && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6ee7b7', fontWeight: 800 }}><CheckCircle2 size={16} /> Checked</span>
        )}
        <button type="button" aria-label="Close" onClick={onClose} style={ICON_BTN}><X size={22} /></button>
      </div>

      {isThumbnailOnly && (
        <div style={{ textAlign: 'center', color: '#fde68a', fontSize: '0.78rem', fontWeight: 700, paddingBottom: 6 }}>
          Showing a small preview — the full-size copy is no longer stored.
        </div>
      )}
      {error && <div role="alert" style={{ textAlign: 'center', color: '#fecaca', fontWeight: 700 }}>{error}</div>}

      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: zoom === 1 ? 'center' : 'flex-start', padding: 12, touchAction: 'pan-x pan-y pinch-zoom' }}>
        {loading ? (
          <Loader2 size={28} color="#fff" style={SPIN} />
        ) : pages.length === 0 ? (
          <div style={{ color: '#cbd5e1', fontWeight: 700 }}>No pages to show.</div>
        ) : (
          <img
            src={pages[page]}
            alt={`Page ${page + 1}`}
            style={{ background: '#fff', borderRadius: 12, width: `${zoom * 100}%`, maxWidth: zoom === 1 ? 900 : 'none', height: 'auto' }}
          />
        )}
      </div>

      {pages.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 12, color: '#fff' }}>
          <button type="button" aria-label="Previous page" disabled={page === 0} onClick={() => { setPage((p) => p - 1); setZoom(1); }} style={{ ...ICON_BTN, opacity: page === 0 ? 0.3 : 1 }}><ChevronLeft size={24} /></button>
          <span style={{ fontWeight: 700 }}>{page + 1} / {pages.length}</span>
          <button type="button" aria-label="Next page" disabled={page === pages.length - 1} onClick={() => { setPage((p) => p + 1); setZoom(1); }} style={{ ...ICON_BTN, opacity: page === pages.length - 1 ? 0.3 : 1 }}><ChevronRight size={24} /></button>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default HomeworkSubmissionViewer;
