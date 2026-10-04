import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, Send, FileText, PenLine, Loader2 } from 'lucide-react';
import WorkingOutCanvas from '../WorkingOutCanvas';
import PdfViewer from '../PdfViewer';
import { loadHomeworkLocal, saveHomeworkLocal, requestPersistentStorage } from '../../utils/homeworkLocalStore';
import { useWorksheetPdf } from '../../utils/useWorksheetPdf';
import { submitHomework, loadTopicPdfMap, studentDisplayName } from '../../services/homeworkService';
import { toDriveOpenUrl, MAX_HOMEWORK_PAGES } from '../../utils/homework';

const WIDE_MIN = 900;
const waitForCanvasCommit = () => new Promise((resolve) => {
  requestAnimationFrame(() => requestAnimationFrame(resolve));
});
const SUBMIT_ERRORS = {
  empty: 'Write your working on the notepad before submitting.',
  'too-many-pages': `Homework can have at most ${MAX_HOMEWORK_PAGES} pages.`,
  'page-too-large': 'One page is too detailed to upload. Try splitting it across two pages.',
  'too-large': 'This homework is too large to upload. Try using fewer pages.',
  'already-checked': 'Your teacher has already checked this homework.',
};

const HomeworkWorkspace = ({ session, profile, user, status, onClose, onSubmitted }) => {
  const canvasRef = useRef(null);
  const draftLoadedRef = useRef(false);
  const saveTimerRef = useRef(0);
  const exportingRef = useRef(false);
  const topicDraftsRef = useRef({});
  const earlierDraftRef = useRef(null);
  const activeNotebookRef = useRef('');
  const topics = useMemo(() => (session?.learnedTopics || []).filter((t) => t?.id), [session?.learnedTopics]);
  const firstTopicId = topics[0]?.id || '';

  const [pdfMap, setPdfMap] = useState({});
  const [topicIdx, setTopicIdx] = useState(0);
  const [activeNotebook, setActiveNotebook] = useState(topics[0]?.id || '');
  const [hasEarlierNotes, setHasEarlierNotes] = useState(false);
  const [loadedSessionKey, setLoadedSessionKey] = useState('');
  const currentSessionKey = `${user?.uid || ''}:${session?.id || ''}`;
  const notebooksLoaded = loadedSessionKey === currentSessionKey;
  const [isWide, setIsWide] = useState(() => window.innerWidth >= WIDE_MIN);
  const [pane, setPane] = useState('pdf');
  const [split, setSplit] = useState(0.5);
  const [dragging, setDragging] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= WIDE_MIN);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadTopicPdfMap(profile).then((map) => { if (!cancelled) setPdfMap(map); }).catch(() => {});
    return () => { cancelled = true; };
  }, [profile]);

  useEffect(() => {
    let cancelled = false;
    draftLoadedRef.current = false;
    requestPersistentStorage();
    loadHomeworkLocal(user?.uid, session?.id)
      .then((record) => {
        if (cancelled) return;
        topicDraftsRef.current = record?.topicDrafts || {};
        earlierDraftRef.current = record?.earlierCombinedDraft || null;
        setHasEarlierNotes(Boolean(earlierDraftRef.current));
        const initialNotebook = firstTopicId || (earlierDraftRef.current ? '__earlier__' : '');
        activeNotebookRef.current = initialNotebook;
        setActiveNotebook(initialNotebook);
        setLoadedSessionKey(currentSessionKey);
        const initialDraft = initialNotebook === '__earlier__'
          ? earlierDraftRef.current
          : topicDraftsRef.current[initialNotebook];
        if (initialDraft) canvasRef.current?.loadPagesData(initialDraft);
        else canvasRef.current?.clear();
      })
      .catch(() => {})
      .finally(() => {
        // Even if the device store failed, allow autosave from here on.
        if (!cancelled) {
          setLoadedSessionKey(currentSessionKey);
          draftLoadedRef.current = true;
        }
      });
    return () => { cancelled = true; window.clearTimeout(saveTimerRef.current); };
  }, [currentSessionKey, firstTopicId, user?.uid, session?.id]);

  const persistDrafts = useCallback((key, data) => {
    if (!key || !data) return Promise.resolve(false);
    if (key === '__earlier__') earlierDraftRef.current = data;
    else topicDraftsRef.current = { ...topicDraftsRef.current, [key]: data };
    setHasEarlierNotes(Boolean(earlierDraftRef.current));
    return saveHomeworkLocal(user?.uid, session?.id, {
      topicDrafts: topicDraftsRef.current,
      earlierCombinedDraft: earlierDraftRef.current,
    });
  }, [user?.uid, session?.id]);

  const switchNotebook = useCallback((nextKey) => {
    if (!nextKey || nextKey === activeNotebookRef.current) return;
    if (nextKey !== '__earlier__') {
      const nextTopicIdx = topics.findIndex((topic) => topic.id === nextKey);
      if (nextTopicIdx >= 0) setTopicIdx(nextTopicIdx);
    }
    window.clearTimeout(saveTimerRef.current);
    if (draftLoadedRef.current) {
      const currentData = canvasRef.current?.getPagesData();
      const currentKey = activeNotebookRef.current;
      if (currentData) persistDrafts(currentKey, currentData);
    }
    activeNotebookRef.current = nextKey;
    setActiveNotebook(nextKey);
    const nextData = nextKey === '__earlier__' ? earlierDraftRef.current : topicDraftsRef.current[nextKey];
    if (nextData) canvasRef.current?.loadPagesData(nextData);
    else canvasRef.current?.clear();
  }, [persistDrafts, topics]);

  const saveDraftNow = useCallback(() => {
    window.clearTimeout(saveTimerRef.current);
    if (!draftLoadedRef.current) return Promise.resolve(false);
    const draft = canvasRef.current?.getPagesData();
    return draft ? persistDrafts(activeNotebookRef.current, draft) : Promise.resolve(false);
  }, [persistDrafts]);

  const handleInkChange = useCallback(() => {
    if (exportingRef.current) return;
    if (!draftLoadedRef.current) return; // don't overwrite a draft before it's restored
    window.clearTimeout(saveTimerRef.current);
    const notebookKey = activeNotebookRef.current;
    const draft = canvasRef.current?.getPagesData();
    if (draft) {
      if (notebookKey === '__earlier__') earlierDraftRef.current = draft;
      else topicDraftsRef.current = { ...topicDraftsRef.current, [notebookKey]: draft };
    }
    saveTimerRef.current = window.setTimeout(() => {
      if (activeNotebookRef.current !== notebookKey) return;
      const latestDraft = canvasRef.current?.getPagesData();
      if (latestDraft) persistDrafts(notebookKey, latestDraft);
    }, 1200);
  }, [persistDrafts]);

  // Flush the pending (debounced) autosave before leaving, while the canvas ref
  // is still attached — an unmount cleanup would run after it's detached.
  const handleClose = () => {
    saveDraftNow();
    onClose?.();
  };

  const handleSubmit = async () => {
    setConfirming(false);
    setError('');
    setSubmitting(true);
    try {
      await saveDraftNow();
      exportingRef.current = true;
      const pageRecords = [];
      const activeKey = activeNotebookRef.current;
      const activeDraft = canvasRef.current?.getPagesData();
      try {
        for (const topic of topics) {
          const draft = topic.id === activeKey ? activeDraft : topicDraftsRef.current[topic.id];
          if (!draft) continue;
          if (topic.id !== activeKey) {
            canvasRef.current?.loadPagesData(draft);
            await waitForCanvasCommit();
          }
          // No `force`: returns every non-empty page for this notebook.
          const images = (await canvasRef.current?.exportPageImages()) || [];
          images.forEach((image) => pageRecords.push({ image, topicId: topic.id, topicLabel: topic.label || topic.title || topic.id }));
        }
        if (earlierDraftRef.current) {
          if (activeKey !== '__earlier__') {
            canvasRef.current?.loadPagesData(earlierDraftRef.current);
            await waitForCanvasCommit();
          }
          const images = (await canvasRef.current?.exportPageImages()) || [];
          images.forEach((image) => pageRecords.push({ image, topicId: null, topicLabel: 'Earlier combined notes' }));
        }
      } finally {
        // Exporting other notebooks temporarily replaces the canvas state. Put
        // the student's selected notebook back before re-enabling interaction.
        if (activeDraft) {
          canvasRef.current?.loadPagesData(activeDraft);
          await waitForCanvasCommit();
        }
        exportingRef.current = false;
      }
      const { originals, submittedPages } = await submitHomework({
        uid: user.uid,
        studentName: studentDisplayName(profile, user),
        session,
        pageRecords,
      });
      await saveHomeworkLocal(user.uid, session.id, { submittedImages: originals, submittedPages });
      onSubmitted?.();
    } catch (err) {
      setError(SUBMIT_ERRORS[err?.message] || 'Submission failed — your work is saved on this device. Try again.');
    } finally {
      exportingRef.current = false;
      setSubmitting(false);
    }
  };

  const onDividerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const move = (ev) => setSplit(Math.min(0.75, Math.max(0.25, ev.clientX / window.innerWidth)));
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  };

  const activeTopic = topics[topicIdx];
  const rawPdf = activeTopic ? pdfMap[activeTopic.id] : '';
  const worksheet = useWorksheetPdf(rawPdf);


  const pdfPane = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {topics.length > 1 && (
        <div style={{ display: 'flex', gap: 6, padding: '8px 10px', overflowX: 'auto', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
          {topics.map((t, i) => (
            <button
              key={t.id}
              type="button"
              disabled={submitting}
              onClick={() => { setTopicIdx(i); switchNotebook(t.id); }}
              style={{
                whiteSpace: 'nowrap', padding: '6px 12px', borderRadius: 999, border: '1px solid',
                borderColor: i === topicIdx ? '#7c3aed' : '#e2e8f0',
                background: i === topicIdx ? '#f5f3ff' : '#fff',
                color: i === topicIdx ? '#6d28d9' : '#475569', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer',
              }}
            >
              {t.label || t.title || t.id}
            </button>
          ))}
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0, position: 'relative', background: '#f1f5f9' }}>
        {rawPdf ? (
          <PdfViewer
            src={worksheet.src}
            loading={worksheet.loading}
            fallback={worksheet.fallback}
            style={{ width: '100%', height: '100%', pointerEvents: dragging ? 'none' : 'auto' }}
          />
        ) : (
          <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 600, padding: 24, textAlign: 'center' }}>
            No worksheet for this topic.
          </div>
        )}
      </div>
      {rawPdf && (
        <a
          href={toDriveOpenUrl(rawPdf)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', padding: '8px', fontSize: '0.78rem', fontWeight: 700, color: '#6d28d9', background: '#fff', borderTop: '1px solid #e2e8f0' }}
        >
          <ExternalLink size={14} /> Open in Google Drive
        </a>
      )}
    </div>
  );

  const notesPane = (
    <div style={{ height: '100%', minHeight: 0, padding: 8, display: 'flex', flexDirection: 'column' }}>
      {(topics.length > 1 || hasEarlierNotes) && (
        <div style={{ display: 'flex', gap: 6, padding: '0 0 8px', overflowX: 'auto', flexShrink: 0 }}>
          {topics.map((topic) => (
            <button key={topic.id} type="button" disabled={!notebooksLoaded || submitting} onClick={() => switchNotebook(topic.id)} style={{ whiteSpace: 'nowrap', padding: '6px 12px', borderRadius: 999, border: '1px solid', borderColor: activeNotebook === topic.id ? '#7c3aed' : '#e2e8f0', background: activeNotebook === topic.id ? '#f5f3ff' : '#fff', color: activeNotebook === topic.id ? '#6d28d9' : '#475569', fontWeight: 700, fontSize: '0.78rem' }}>
              {topic.label || topic.title || topic.id} notes
            </button>
          ))}
          {hasEarlierNotes && (
            <button type="button" disabled={!notebooksLoaded || submitting} onClick={() => switchNotebook('__earlier__')} style={{ whiteSpace: 'nowrap', padding: '6px 12px', borderRadius: 999, border: '1px solid', borderColor: activeNotebook === '__earlier__' ? '#7c3aed' : '#e2e8f0', background: activeNotebook === '__earlier__' ? '#f5f3ff' : '#fff', color: activeNotebook === '__earlier__' ? '#6d28d9' : '#475569', fontWeight: 700, fontSize: '0.78rem' }}>
              Earlier notes
            </button>
          )}
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', pointerEvents: notebooksLoaded && !submitting ? 'auto' : 'none' }}>
          <WorkingOutCanvas ref={canvasRef} isSubmitted={false} onInkChange={handleInkChange} />
        </div>
      </div>
    </div>
  );

  // One stable element tree for both layouts: the notes pane keeps the same
  // position (and so the same WorkingOutCanvas instance) when the window
  // crosses WIDE_MIN — e.g. rotating a tablet — so ink is never remounted away.
  // In the narrow layout the inactive pane is hidden with `visibility` (not
  // `display:none`) so both panes keep their real size: the canvas never
  // collapses to 0×0 (its ResizeObserver would skip sizing and, if it was
  // never shown, exportPageImages would snapshot the 300×150 default bitmap).
  const narrowPaneStyle = (active) => ({
    position: 'absolute', inset: 0, minWidth: 0,
    visibility: active ? 'visible' : 'hidden',
    pointerEvents: active ? 'auto' : 'none',
  });

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <button type="button" onClick={handleClose} aria-label="Back" style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 6 }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, color: '#1e1b4b' }}>Homework</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {session?.date} · {topics.map((t) => t.label || t.title || t.id).join(', ')}
          </div>
        </div>
        <button
          type="button"
          disabled={submitting}
          onClick={() => setConfirming(true)}
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 12, border: 0, background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', fontWeight: 800, cursor: submitting ? 'wait' : 'pointer', opacity: submitting ? 0.8 : 1 }}
        >
          {/* `spin` keyframes are defined globally in src/index.css; there is no `.spin` class. */}
          {submitting ? <Loader2 size={16} style={{ animation: 'spin 0.8s linear infinite' }} /> : <Send size={16} />}
          {submitting ? 'Submitting…' : status === 'submitted' ? 'Resubmit' : 'Submit'}
        </button>
      </div>

      {status === 'submitted' && (
        <div style={{ padding: '8px 14px', background: '#f5f3ff', color: '#6d28d9', fontSize: '0.8rem', fontWeight: 700 }}>
          Submitted — you can keep editing and resubmit until your teacher checks it.
        </div>
      )}
      {error && (
        <div role="alert" style={{ padding: '8px 14px', background: '#fef2f2', color: '#b91c1c', fontSize: '0.82rem', fontWeight: 700 }}>
          {error}
        </div>
      )}

      {!isWide && (
        <div style={{ display: 'flex', gap: 6, padding: 8, background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
          {[['pdf', 'Worksheet', FileText], ['notes', 'Notes', PenLine]].map(([key, label, Icon]) => (
            <button
              key={key}
              type="button"
              onClick={() => setPane(key)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', borderRadius: 10, border: 0, background: pane === key ? '#ede9fe' : '#f8fafc', color: pane === key ? '#6d28d9' : '#64748b', fontWeight: 800 }}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
      )}

      <div style={{ flex: 1, minHeight: 0, display: 'flex', position: 'relative' }}>
        <div style={isWide ? { width: `${split * 100}%`, minWidth: 0 } : narrowPaneStyle(pane === 'pdf')}>
          {pdfPane}
        </div>
        {isWide && (
          <div
            onPointerDown={onDividerDown}
            style={{ width: 10, cursor: 'col-resize', background: dragging ? '#c4b5fd' : '#e2e8f0', touchAction: 'none' }}
          />
        )}
        <div style={isWide ? { flex: 1, minWidth: 0 } : narrowPaneStyle(pane === 'notes')}>
          {notesPane}
        </div>
      </div>

      {confirming && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.45)', display: 'grid', placeItems: 'center', zIndex: 10001 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 24, maxWidth: 360, width: 'calc(100% - 32px)' }}>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1e1b4b' }}>Submit your homework?</div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Your teacher will be notified and can see every page you wrote.</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setConfirming(false)} style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid #e2e8f0', background: '#fff', fontWeight: 700 }}>Cancel</button>
              <button type="button" onClick={handleSubmit} style={{ padding: '8px 14px', borderRadius: 10, border: 0, background: '#7c3aed', color: '#fff', fontWeight: 800 }}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default HomeworkWorkspace;
