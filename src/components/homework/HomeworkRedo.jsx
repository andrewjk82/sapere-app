import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, CheckCircle2, FileText, Loader2, PenLine, X } from 'lucide-react';
import WorkingOutCanvas from '../WorkingOutCanvas';
import PdfViewer from '../PdfViewer';
import { loadHomeworkLocal, saveHomeworkLocal, requestPersistentStorage } from '../../utils/homeworkLocalStore';
import { useWorksheetPdf } from '../../utils/useWorksheetPdf';
import { loadTopicPdfMap, fetchAnswerKeys } from '../../services/homeworkService';
import { isSafeImageDataUrl } from '../../utils/homework';
import { wrongQuestions, draftHasInk, redoState, redoSummary, shortTopicLabel } from '../../utils/homeworkRedo';

const WIDE_MIN = 900;
const SPIN = { animation: 'spin 0.8s linear infinite' };
const GLYPH = { x: '✗', h: '½' };
const STATE_STYLE = {
  new: { bg: '#f8fafc', border: '#cbd5e1', color: '#475569' },
  writing: { bg: '#eff6ff', border: '#93c5fd', color: '#1d4ed8' },
  got: { bg: '#ecfdf5', border: '#6ee7b7', color: '#047857' },
  again: { bg: '#fff7ed', border: '#fdba74', color: '#c2410c' },
};

// Local storage key: a separate "uid" so this never touches the real homework record.
const storeUid = (uid) => `redo-${uid}`;

/**
 * Redo the questions the teacher marked wrong (✗ / ½). Worksheet on the right, the
 * wrong questions as thin boxes above a notepad on the left. After writing something
 * the student can look at the answer and say "Got it" / "Still wrong". Notes and
 * verdicts live only on this device (no Firestore writes), so the teacher can look at
 * them in class; the only read is the answer image, cached on the device.
 */
const HomeworkRedo = ({ item, user, profile, onClose }) => {
  const canvasRef = useRef(null);
  const draftsRef = useRef({});
  const statusRef = useRef({});
  const loadedRef = useRef(false);
  const saveTimerRef = useRef(0);
  const activeKeyRef = useRef('');

  const questions = useMemo(() => wrongQuestions(item?.marks, item?.topics), [item?.marks, item?.topics]);
  const topicById = useMemo(() => new Map((item?.topics || []).map((t) => [t.id, t])), [item?.topics]);
  const [activeKey, setActiveKey] = useState(questions[0]?.key || '');
  const [inkMap, setInkMap] = useState({});
  const [statusMap, setStatusMap] = useState({});
  const [ready, setReady] = useState(false);
  const [pdfMap, setPdfMap] = useState({});
  const [isWide, setIsWide] = useState(() => window.innerWidth >= WIDE_MIN);
  const [pane, setPane] = useState('notes');
  const [split, setSplit] = useState(0.5);
  const [dragging, setDragging] = useState(false);
  const [sheet, setSheet] = useState(null); // { loading } | { error } | { images }

  const sessionId = item?.sessionId;
  const active = questions.find((q) => q.key === activeKey) || null;

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
    requestPersistentStorage();
    loadHomeworkLocal(storeUid(user?.uid), sessionId)
      .then((record) => {
        if (cancelled) return;
        draftsRef.current = record?.redoDrafts || {};
        statusRef.current = record?.redoStatus || {};
        setStatusMap({ ...statusRef.current });
        setInkMap(Object.fromEntries(Object.entries(draftsRef.current).map(([k, d]) => [k, draftHasInk(d)])));
        const first = questions[0]?.key || '';
        activeKeyRef.current = first;
        setActiveKey(first);
        if (draftsRef.current[first]) canvasRef.current?.loadPagesData(draftsRef.current[first]);
        else canvasRef.current?.clear();
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) { loadedRef.current = true; setReady(true); }
      });
    return () => { cancelled = true; window.clearTimeout(saveTimerRef.current); };
  }, [user?.uid, sessionId, questions]);

  const persist = useCallback(() => saveHomeworkLocal(storeUid(user?.uid), sessionId, {
    redoDrafts: draftsRef.current,
    redoStatus: statusRef.current,
  }), [user?.uid, sessionId]);

  const captureActive = useCallback(() => {
    const key = activeKeyRef.current;
    const data = canvasRef.current?.getPagesData();
    if (!key || !data) return;
    draftsRef.current = { ...draftsRef.current, [key]: data };
    setInkMap((prev) => ({ ...prev, [key]: draftHasInk(data) }));
  }, []);

  const handleInkChange = useCallback(() => {
    if (!loadedRef.current) return; // don't overwrite a saved draft before it is restored
    window.clearTimeout(saveTimerRef.current);
    captureActive();
    saveTimerRef.current = window.setTimeout(() => { captureActive(); persist(); }, 1200);
  }, [captureActive, persist]);

  const selectQuestion = (key) => {
    if (!key || key === activeKeyRef.current) return;
    window.clearTimeout(saveTimerRef.current);
    if (loadedRef.current) { captureActive(); persist(); }
    activeKeyRef.current = key;
    setActiveKey(key);
    setSheet(null);
    const next = draftsRef.current[key];
    if (next) canvasRef.current?.loadPagesData(next);
    else canvasRef.current?.clear();
  };

  const handleClose = () => {
    window.clearTimeout(saveTimerRef.current);
    if (loadedRef.current) { captureActive(); persist(); }
    onClose?.();
  };

  const checkAnswer = async () => {
    if (!active) return;
    setSheet({ loading: true });
    const topicId = active.topicId;
    const keys = await fetchAnswerKeys([topicId]);
    if (activeKeyRef.current !== active.key) return; // moved on while loading
    const entry = keys[topicId];
    if (entry?.error) { setSheet({ error: 'Couldn’t load the answer. Check your connection and try again.' }); return; }
    if (!entry) { setSheet({ error: 'There is no answer for this topic yet.' }); return; }
    const own = (entry.sections || []).filter((s) => s.key === active.section);
    const images = (own.length ? own : entry.sections || []).flatMap((s) => s.images || []).filter(isSafeImageDataUrl);
    setSheet(images.length ? { images } : { error: 'There is no answer for this topic yet.' });
  };

  const verdict = (state) => {
    if (!active) return;
    statusRef.current = { ...statusRef.current, [active.key]: state };
    setStatusMap({ ...statusRef.current });
    persist();
    setSheet(null);
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

  const store = { ink: inkMap, status: statusMap };
  const summary = redoSummary(questions, store);
  const rawPdf = active ? pdfMap[active.topicId] : '';
  const worksheet = useWorksheetPdf(rawPdf);
  const activeInk = Boolean(inkMap[activeKey]);

  const pdfPane = (
    <div style={{ height: '100%', minHeight: 0, position: 'relative', background: '#f1f5f9' }}>
      {rawPdf ? (
        <PdfViewer
          src={worksheet.src}
          loading={worksheet.loading}
          fallback={worksheet.fallback} storageKey={worksheet.fileId}
          style={{ width: '100%', height: '100%', pointerEvents: dragging ? 'none' : 'auto' }}
        />
      ) : (
        <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 600, padding: 24, textAlign: 'center' }}>
          No worksheet for this topic.
        </div>
      )}
    </div>
  );

  const notesPane = (
    <div style={{ height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', position: 'relative', padding: 8, gap: 8 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, maxHeight: 76, overflowY: 'auto', flexShrink: 0 }}>
        {questions.map((q) => {
          const state = redoState(q.key, store);
          const s = STATE_STYLE[state];
          const selected = q.key === activeKey;
          return (
            <button
              key={q.key}
              type="button"
              onClick={() => selectQuestion(q.key)}
              aria-pressed={selected}
              style={{ padding: '4px 9px', borderRadius: 8, border: `1.5px solid ${selected ? '#4f46e5' : s.border}`, background: s.bg, color: s.color, fontWeight: 800, fontSize: '0.76rem', whiteSpace: 'nowrap', cursor: 'pointer', boxShadow: selected ? '0 0 0 2px #c7d2fe' : 'none' }}
            >
              {shortTopicLabel(topicById.get(q.topicId)) || q.topicId} · {q.label} {GLYPH[q.mark]}
              {state === 'got' ? ' ✓' : state === 'again' ? ' ↻' : ''}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={{ flex: 1, minWidth: 0, fontSize: '0.78rem', fontWeight: 700, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {active ? `Question ${active.label}` : 'No wrong questions'}
          {!activeInk && active && ' — write your working first'}
        </div>
        <button
          type="button"
          disabled={!active || !activeInk || !ready}
          onClick={checkAnswer}
          style={{ padding: '7px 14px', borderRadius: 10, border: 0, background: activeInk ? '#7c3aed' : '#e2e8f0', color: activeInk ? '#fff' : '#94a3b8', fontWeight: 800, fontSize: '0.8rem', cursor: activeInk ? 'pointer' : 'not-allowed' }}
        >
          Check answer
        </button>
      </div>

      <div style={{ flex: 1, minHeight: 0, display: 'flex', pointerEvents: ready ? 'auto' : 'none' }}>
        <WorkingOutCanvas ref={canvasRef} isSubmitted={false} onInkChange={handleInkChange} />
      </div>

      {sheet && (
        <div style={{ position: 'absolute', left: 8, right: 8, bottom: 8, height: '68%', background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 12px 32px rgba(15,23,42,0.22)', display: 'flex', flexDirection: 'column', zIndex: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderBottom: '1px solid #eef2f7' }}>
            <strong style={{ flex: 1, color: '#1e1b4b', fontSize: '0.9rem' }}>Answer · question {active?.label}</strong>
            <button type="button" aria-label="Close answer" onClick={() => setSheet(null)} style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 4 }}><X size={18} /></button>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 10 }}>
            {sheet.loading && <Loader2 size={22} style={{ ...SPIN, display: 'block', margin: '30px auto', color: '#94a3b8' }} />}
            {sheet.error && <div role="alert" style={{ color: '#b91c1c', fontWeight: 700, textAlign: 'center', padding: 24 }}>{sheet.error}</div>}
            {sheet.images?.map((src, i) => (
              <img key={i} src={src} alt="Answers" style={{ display: 'block', width: '100%', height: 'auto' }} />
            ))}
          </div>
          {sheet.images && (
            <div style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid #eef2f7' }}>
              <button type="button" onClick={() => verdict('again')} style={{ flex: 1, padding: '10px', borderRadius: 12, border: '1.5px solid #fdba74', background: '#fff7ed', color: '#c2410c', fontWeight: 800, cursor: 'pointer' }}>Still wrong</button>
              <button type="button" onClick={() => verdict('got')} style={{ flex: 1, padding: '10px', borderRadius: 12, border: 0, background: '#10b981', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>Got it</button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Same trick as HomeworkWorkspace: one stable tree for both layouts so the canvas is never remounted,
  // and the hidden narrow pane keeps its size (visibility, not display:none).
  const narrowPaneStyle = (isActive) => ({
    position: 'absolute', inset: 0, minWidth: 0,
    visibility: isActive ? 'visible' : 'hidden',
    pointerEvents: isActive ? 'auto' : 'none',
  });

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <button type="button" onClick={handleClose} aria-label="Back" style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 6 }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, color: '#1e1b4b' }}>Redo wrong questions</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item?.date} · {(item?.topics || []).map((t) => t.label).join(', ')}
          </div>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontWeight: 800, color: summary.got === summary.total && summary.total > 0 ? '#047857' : '#64748b', fontSize: '0.85rem' }}>
          <CheckCircle2 size={16} /> {summary.got}/{summary.total}
        </span>
      </div>

      {!isWide && (
        <div style={{ display: 'flex', gap: 6, padding: 8, background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
          {[['notes', 'Notes', PenLine], ['pdf', 'Worksheet', FileText]].map(([key, label, Icon]) => (
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
        {questions.length === 0 ? (
          <div style={{ flex: 1, display: 'grid', placeItems: 'center', color: '#64748b', fontWeight: 700 }}>Nothing to redo — every marked question was correct.</div>
        ) : (
          <>
            <div style={isWide ? { width: `${split * 100}%`, minWidth: 0 } : narrowPaneStyle(pane === 'notes')}>{notesPane}</div>
            {isWide && (
              <div onPointerDown={onDividerDown} style={{ width: 10, cursor: 'col-resize', background: dragging ? '#c4b5fd' : '#e2e8f0', touchAction: 'none' }} />
            )}
            <div style={isWide ? { flex: 1, minWidth: 0 } : narrowPaneStyle(pane === 'pdf')}>{pdfPane}</div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default HomeworkRedo;
