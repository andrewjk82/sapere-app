/**
 * PdfViewer — continuous-scroll PDF reader on pdf.js.
 *
 * The first page is drawn as soon as the document opens; every other page is
 * drawn only when it scrolls near the viewport, straight onto its own canvas
 * at the container's width (no full-document PNG pre-render, which made long
 * worksheets wait for every page and used a lot of iPad memory).
 *
 * Props:
 *   src      – blob:/same-origin URL of the PDF (see useWorksheetPdf)
 *   loading  – true while src is still being resolved
 *   fallback – URL shown in an <iframe> when there's no src or pdf.js fails
 *   style    – container style overrides
 */
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Loader2, AlertTriangle, ZoomIn, ZoomOut, Highlighter, PenLine, Eraser, Undo2, Redo2, Trash2, Hand } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import {
  HIGHLIGHT_COLORS, HIGHLIGHT_WIDTH, HIGHLIGHT_OPACITY, ERASE_RADIUS, PEN_COLORS, PEN_WIDTH, isPenStroke,
  toPagePoint, appendPoint, pointsToPath, eraseAt, addStroke, removeStrokes, countHighlights, penScribbleTargets,
  emptyHistory, recordEdit, stepHistory,
} from '../utils/pdfHighlights';
import { loadHighlights, saveHighlights } from '../utils/pdfHighlightStore';
import { isScribbleEraseOn } from '../utils/scribbleErase';
import { classifyMultiTap } from '../utils/padView';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PAGE_GAP = 12;
const MAX_PAGE_WIDTH = 1000;
const MAX_RENDER_WIDTH = 3200;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.1;
const MIN_PINCH_DISTANCE = 1;
const PINCH_RESPONSE = 0.6;

const distanceBetween = ([first, second]) => Math.hypot(
  second.x - first.x,
  second.y - first.y,
);

const midpoint = ([first, second]) => ({ x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 });

const zoomForPinch = (pinch, points) => {
  if (!pinch || points.length < 2) return null;
  const distanceRatio = distanceBetween(points) / pinch.startDistance;
  // Compress the distance ratio so short finger movements don't cause large
  // jumps, while keeping the familiar proportional pinch behaviour.
  const next = pinch.startZoom * (distanceRatio ** PINCH_RESPONSE);
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(next * 1000) / 1000));
};

const BAR = { display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', background: 'rgba(255,255,255,0.96)', border: '1px solid #e2e8f0', borderRadius: 12, boxShadow: '0 3px 12px rgba(30,27,75,0.12)' };
const TOOL_BTN = (active) => ({ width: 34, height: 32, display: 'grid', placeItems: 'center', border: `1px solid ${active ? '#a5b4fc' : '#e2e8f0'}`, borderRadius: 9, background: active ? '#e0e7ff' : '#fff', color: active ? '#4f46e5' : '#334155', cursor: 'pointer' });

const ZoomGroup = ({ zoom, onZoomChange }) => (
  <div style={{ ...BAR, flexShrink: 0 }}>
    <button
      type="button"
      aria-label="Zoom out"
      title="Zoom out"
      disabled={zoom <= MIN_ZOOM}
      onClick={() => onZoomChange((value) => Math.max(MIN_ZOOM, Math.round((value - ZOOM_STEP) * 100) / 100))}
      style={{ width: 34, height: 32, display: 'grid', placeItems: 'center', border: '1px solid #e2e8f0', borderRadius: 9, background: '#fff', color: '#334155', cursor: zoom <= MIN_ZOOM ? 'default' : 'pointer', opacity: zoom <= MIN_ZOOM ? 0.45 : 1 }}
    >
      <ZoomOut size={17} />
    </button>
    <button
      type="button"
      aria-label="Reset zoom to 100%"
      title="Reset zoom"
      onClick={() => onZoomChange(1)}
      style={{ minWidth: 54, height: 32, padding: '0 6px', border: 0, borderRadius: 8, background: 'transparent', color: '#475569', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
    >
      {Math.round(zoom * 100)}%
    </button>
    <button
      type="button"
      aria-label="Zoom in"
      title="Zoom in"
      disabled={zoom >= MAX_ZOOM}
      onClick={() => onZoomChange((value) => Math.min(MAX_ZOOM, Math.round((value + ZOOM_STEP) * 100) / 100))}
      style={{ width: 34, height: 32, display: 'grid', placeItems: 'center', border: '1px solid #e2e8f0', borderRadius: 9, background: '#fff', color: '#334155', cursor: zoom >= MAX_ZOOM ? 'default' : 'pointer', opacity: zoom >= MAX_ZOOM ? 0.45 : 1 }}
    >
      <ZoomIn size={17} />
    </button>
  </div>
);

// Marking tools: highlighter / pen (each on/off), colour, eraser, undo, redo, finger-draws toggle, clear all.
// `hl.mode` is which tool is active ('highlight' | 'pen'); the eraser, undo, redo and clear act on both.
const HighlightGroup = ({ hl, setHl, canUndo, canRedo, onUndo, onRedo, hasAny, onClearAll }) => {
  const [confirmClear, setConfirmClear] = useState(false);
  useEffect(() => {
    if (!confirmClear) return undefined;
    const timer = setTimeout(() => setConfirmClear(false), 3000);
    return () => clearTimeout(timer);
  }, [confirmClear]);
  const pick = (mode) => setHl((v) => (v.on && v.mode === mode ? { ...v, on: false } : { ...v, on: true, mode, tool: 'draw' }));
  const isPen = hl.mode === 'pen';
  const colors = isPen ? PEN_COLORS : HIGHLIGHT_COLORS;
  const current = isPen ? hl.penColor : hl.color;
  return (
    <div style={{ ...BAR, flexWrap: 'wrap' }}>
      <button type="button" aria-label="Highlighter" aria-pressed={hl.on && !isPen} title={hl.on && !isPen ? 'Highlighter on — tap to stop' : 'Highlighter'} onClick={() => pick('highlight')} style={TOOL_BTN(hl.on && !isPen)}>
        <Highlighter size={17} />
      </button>
      <button type="button" aria-label="Pen" aria-pressed={hl.on && isPen} title={hl.on && isPen ? 'Pen on — tap to stop' : 'Pen — write on the worksheet'} onClick={() => pick('pen')} style={TOOL_BTN(hl.on && isPen)}>
        <PenLine size={17} />
      </button>
      {hl.on && (
        <>
          {colors.map((c) => (
            <button key={c.id} type="button" aria-label={`${c.label} ${isPen ? 'pen' : 'highlighter'}`} aria-pressed={hl.tool === 'draw' && current === c.value} onClick={() => setHl((v) => ({ ...v, [isPen ? 'penColor' : 'color']: c.value, tool: 'draw' }))} style={{ width: 22, height: 22, borderRadius: '50%', border: hl.tool === 'draw' && current === c.value ? '2px solid #4f46e5' : '1px solid #cbd5e1', background: c.value, cursor: 'pointer', padding: 0 }} />
          ))}
          <button type="button" aria-label="Erase" aria-pressed={hl.tool === 'erase'} title="Erase pen and highlights" onClick={() => setHl((v) => ({ ...v, tool: v.tool === 'erase' ? 'draw' : 'erase' }))} style={TOOL_BTN(hl.tool === 'erase')}>
            <Eraser size={16} />
          </button>
          <button type="button" aria-label="Undo" title="Undo (two-finger tap)" disabled={!canUndo} onClick={onUndo} style={{ ...TOOL_BTN(false), opacity: canUndo ? 1 : 0.4, cursor: canUndo ? 'pointer' : 'default' }}>
            <Undo2 size={16} />
          </button>
          <button type="button" aria-label="Redo" title="Redo (three-finger tap)" disabled={!canRedo} onClick={onRedo} style={{ ...TOOL_BTN(false), opacity: canRedo ? 1 : 0.4, cursor: canRedo ? 'pointer' : 'default' }}>
            <Redo2 size={16} />
          </button>
          <button type="button" aria-label="Draw with finger" aria-pressed={hl.finger} title={hl.finger ? 'Finger draws (tap for pen only)' : 'Pen only — your finger scrolls (tap to draw with finger)'} onClick={() => setHl((v) => ({ ...v, finger: !v.finger }))} style={TOOL_BTN(hl.finger)}>
            <Hand size={16} />
          </button>
          <button type="button" aria-label={confirmClear ? 'Tap again to clear all marks' : 'Clear all marks'} title={confirmClear ? 'Tap again to clear all pen and highlights' : 'Clear all pen and highlights'} disabled={!hasAny} onClick={() => { if (confirmClear) { setConfirmClear(false); onClearAll(); } else setConfirmClear(true); }} style={{ ...TOOL_BTN(confirmClear), opacity: hasAny ? 1 : 0.4, cursor: hasAny ? 'pointer' : 'default', color: confirmClear ? '#b91c1c' : '#334155', borderColor: confirmClear ? '#fca5a5' : '#e2e8f0', background: confirmClear ? '#fef2f2' : '#fff' }}>
            <Trash2 size={16} />
          </button>
        </>
      )}
    </div>
  );
};

// Hidden until the student taps the worksheet, then shown for a few seconds (see useAutoHideToolbar).
const PdfToolbar = ({ zoom, onZoomChange, highlight, visible = true, onInteract }) => (
  <div
    onPointerDownCapture={onInteract}
    style={{ position: 'absolute', top: 8, left: 8, right: 8, zIndex: 5, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 8, pointerEvents: 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(-6px)', transition: 'opacity 0.18s ease, transform 0.18s ease', visibility: visible ? 'visible' : 'hidden' }}
  >
    <div style={{ pointerEvents: visible ? 'auto' : 'none' }}><ZoomGroup zoom={zoom} onZoomChange={onZoomChange} /></div>
    {highlight && <div style={{ pointerEvents: visible ? 'auto' : 'none' }}><HighlightGroup {...highlight} /></div>}
  </div>
);

const TOOLBAR_HIDE_MS = 4000;
const TAP_MAX_MOVE = 10;
const TAP_MAX_MS = 450;

// Tap the worksheet (not drag/scroll/pinch) to show the tools; they hide again after a few idle seconds.
// `pinned` keeps them up (highlighter on: a tap then draws, and the colours must stay reachable).
const useAutoHideToolbar = (pinned) => {
  const [shown, setShown] = useState(false);
  const timerRef = useRef(0);
  const pinnedRef = useRef(pinned);
  useEffect(() => { pinnedRef.current = pinned; }, [pinned]);
  const arm = useCallback(() => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => { if (!pinnedRef.current) setShown(false); }, TOOLBAR_HIDE_MS);
  }, []);
  const show = useCallback(() => { setShown(true); arm(); }, [arm]);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);
  useEffect(() => { if (!pinned && shown) arm(); }, [pinned, shown, arm]);
  const tapRef = useRef(null);
  const tapHandlers = {
    onPointerDownCapture: (e) => {
      if (pinnedRef.current) return;
      tapRef.current = e.isPrimary ? { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp } : null;
    },
    onPointerMoveCapture: (e) => {
      const tap = tapRef.current;
      if (tap && e.pointerId === tap.id && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > TAP_MAX_MOVE) tapRef.current = null;
    },
    onPointerUpCapture: (e) => {
      const tap = tapRef.current;
      tapRef.current = null;
      if (tap && e.pointerId === tap.id && e.timeStamp - tap.t <= TAP_MAX_MS) {
        setShown((v) => { if (v) { window.clearTimeout(timerRef.current); return false; } return true; });
        arm();
      }
    },
    onPointerCancelCapture: () => { tapRef.current = null; },
  };
  return { visible: shown || pinned, show, tapHandlers };
};

// One committed mark. Memoised on the stroke object, so adding a stroke never re-builds the other paths.
const StrokePath = memo(({ stroke }) => (
  <path d={pointsToPath(stroke.pts)} fill="none" stroke={stroke.color} strokeWidth={stroke.w} strokeLinecap="round" strokeLinejoin="round" opacity={isPenStroke(stroke) ? undefined : HIGHLIGHT_OPACITY} />
));

// Pointer samples of one move: every coalesced sample (fast pencil writing delivers several per frame).
const samplesOf = (event) => {
  const list = typeof event.getCoalescedEvents === 'function' ? event.getCoalescedEvents() : null;
  return list && list.length ? list : [event];
};

// Same approach as the notepad (WorkingOutCanvas): the stroke being drawn lives in a ref and is painted once
// per animation frame straight onto its <path> (no React render per move), and a pencil press always starts
// a new stroke — a previous stroke whose pointerup has not arrived yet is committed first instead of
// swallowing the new one.
const PdfPage = memo(({ pdf, pageNumber, width, renderWidth, initialRatio, scrollRoot, strokes, hl, pinchingRef, multiTouchAtRef, onAddStroke, onEraseAt, onEraseBegin, onScribbleErase, onPan }) => {
  const holderRef = useRef(null);
  const canvasRef = useRef(null);
  const draftRef = useRef(null);               // <path> of the stroke being drawn
  const draftFrameRef = useRef(0);
  const [near, setNear] = useState(pageNumber === 1);
  const [ratio, setRatio] = useState(initialRatio);
  const gestureRef = useRef(null);             // { id, kind: 'draw' | 'erase' | 'pan', ... }

  const paintDraft = (points) => {
    cancelAnimationFrame(draftFrameRef.current);
    draftFrameRef.current = 0;
    draftRef.current?.setAttribute('d', points ? pointsToPath(points) : '');
  };
  const scheduleDraft = () => {
    if (draftFrameRef.current) return;
    draftFrameRef.current = requestAnimationFrame(() => {
      draftFrameRef.current = 0;
      const g = gestureRef.current;
      if (g?.kind === 'draw') draftRef.current?.setAttribute('d', pointsToPath(g.points));
    });
  };
  useEffect(() => () => cancelAnimationFrame(draftFrameRef.current), []);

  const commitDraw = (g) => {
    // A second finger landed during a finger stroke (two-finger tap / pinch): that mark is not ink.
    // Pencil strokes are never dropped this way — a resting palm adds touches too.
    const multiTouch = g.touch && multiTouchAtRef.current >= g.at;
    if (!g.points?.length || multiTouch) return;
    const scratched = g.pen && isScribbleEraseOn() ? penScribbleTargets(g.points, strokes) : [];
    if (scratched.length > 0) { onScribbleErase(pageNumber, scratched); return; }
    onAddStroke(pageNumber, {
      id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      ...(g.pen ? { kind: 'pen', color: g.color, w: PEN_WIDTH } : { color: g.color, w: HIGHLIGHT_WIDTH }),
      pts: g.points,
    });
  };

  const handleDown = (event) => {
    if (!hl.on) return;
    const isTouch = event.pointerType === 'touch';
    const isPencil = event.pointerType === 'pen';
    const active = gestureRef.current;
    if (active) {
      if (!isPencil) return;                    // a second finger / palm never interrupts
      gestureRef.current = null;
      if (active.kind === 'draw' && !active.touch) commitDraw(active);
      paintDraft(null);
    }
    if (!isPencil && pinchingRef.current) return;
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* may already be captured */ }
    if (isTouch && !hl.finger) {
      // Pen-only mode: a finger scrolls. Touch-action is none here (so the pen is not hijacked), so pan by hand.
      gestureRef.current = { id: event.pointerId, kind: 'pan', x: event.clientX, y: event.clientY };
      return;
    }
    const rect = holderRef.current?.getBoundingClientRect();
    const point = toPagePoint(event.clientX, event.clientY, rect);
    if (!point) return;
    if (hl.tool === 'erase') {
      gestureRef.current = { id: event.pointerId, kind: 'erase', rect };
      onEraseBegin();
      onEraseAt(pageNumber, point[0], point[1]);
    } else {
      const pen = hl.mode === 'pen';
      gestureRef.current = { id: event.pointerId, kind: 'draw', rect, points: [point], at: performance.now(), touch: isTouch, pen, color: pen ? hl.penColor : hl.color };
      paintDraft(gestureRef.current.points);
    }
  };

  const handleMove = (event) => {
    const g = gestureRef.current;
    if (!g || g.id !== event.pointerId) return;
    if (pinchingRef.current && g.touch !== false && event.pointerType !== 'pen') {
      gestureRef.current = null; paintDraft(null); return;   // a second finger turned it into a pinch
    }
    if (g.kind === 'pan') {
      onPan(event.clientX - g.x, event.clientY - g.y);
      g.x = event.clientX;
      g.y = event.clientY;
      return;
    }
    for (const sample of samplesOf(event)) {
      const point = toPagePoint(sample.clientX, sample.clientY, g.rect);
      if (!point) continue;
      if (g.kind === 'erase') onEraseAt(pageNumber, point[0], point[1]);
      else g.points = appendPoint(g.points, point);
    }
    if (g.kind === 'draw') scheduleDraft();
  };

  const handleUp = (event) => {
    const g = gestureRef.current;
    if (!g || g.id !== event.pointerId) return;
    gestureRef.current = null;
    if (g.kind === 'draw') {
      // A pencil's pointercancel (iPadOS sends them now and then) keeps the ink; a finger's is dropped.
      if (event.type !== 'pointercancel' || !g.touch) {
        g.points = appendPoint(g.points, toPagePoint(event.clientX, event.clientY, g.rect));
        commitDraw(g);
      }
    }
    paintDraft(null);
  };

  useEffect(() => {
    if (near || !holderRef.current || !scrollRoot) return undefined;
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) setNear(true); },
      { root: scrollRoot, rootMargin: '1200px 0px' },
    );
    io.observe(holderRef.current);
    return () => io.disconnect();
  }, [near, scrollRoot]);

  useEffect(() => {
    if (!near || !renderWidth) return undefined;
    let cancelled = false;
    let task = null;
    (async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        setRatio(base.height / base.width);
        const dpr = Math.min(window.devicePixelRatio || 1, 2, MAX_RENDER_WIDTH / renderWidth);
        const viewport = page.getViewport({ scale: (renderWidth / base.width) * dpr });
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Keep the current page visible while pdf.js prepares the replacement
        // bitmap; assigning canvas.width/height clears the visible surface.
        const buffer = document.createElement('canvas');
        buffer.width = Math.floor(viewport.width);
        buffer.height = Math.floor(viewport.height);
        task = page.render({ canvasContext: buffer.getContext('2d'), viewport });
        await task.promise;
        if (cancelled || !canvasRef.current) return;
        canvas.width = buffer.width;
        canvas.height = buffer.height;
        canvas.getContext('2d')?.drawImage(buffer, 0, 0);
        buffer.width = 0;
        buffer.height = 0;
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') console.warn('[PdfViewer] page render failed:', err);
      }
    })();
    return () => { cancelled = true; task?.cancel(); };
  }, [near, renderWidth, pdf, pageNumber]);

  return (
    <div
      ref={holderRef}
      style={{
        width, height: Math.round(width * ratio), margin: `0 auto ${PAGE_GAP}px`,
        background: '#fff', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.12)', position: 'relative',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', borderRadius: 4 }} />
      {(hl.on || strokes?.length > 0) && (
        <svg
          viewBox={`0 0 1 ${ratio}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          onPointerDown={handleDown}
          onPointerMove={handleMove}
          onPointerUp={handleUp}
          onPointerCancel={handleUp}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 4, mixBlendMode: 'multiply', pointerEvents: hl.on ? 'auto' : 'none', touchAction: hl.on ? 'none' : 'auto', cursor: hl.on ? (hl.tool === 'erase' ? 'cell' : 'crosshair') : 'default' }}
        >
          {/* Highlights first, pen writing above them, so a later highlight never dims the writing. */}
          {(strokes || []).filter((stroke) => !isPenStroke(stroke)).map((stroke) => <StrokePath key={stroke.id} stroke={stroke} />)}
          {hl.mode !== 'pen' && <path ref={draftRef} fill="none" stroke={hl.color} strokeWidth={HIGHLIGHT_WIDTH} strokeLinecap="round" strokeLinejoin="round" opacity={HIGHLIGHT_OPACITY} />}
          {(strokes || []).filter(isPenStroke).map((stroke) => <StrokePath key={stroke.id} stroke={stroke} />)}
          {hl.mode === 'pen' && <path ref={draftRef} fill="none" stroke={hl.penColor} strokeWidth={PEN_WIDTH} strokeLinecap="round" strokeLinejoin="round" />}
        </svg>
      )}
      <span style={{ position: 'absolute', right: 8, bottom: 6, fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8' }}>
        {pageNumber}
      </span>
    </div>
  );
});

const centered = (style, children) => (
  <div style={{ display: 'grid', placeItems: 'center', height: '100%', minHeight: 200, background: '#f8fafc', ...style }}>
    <div style={{ textAlign: 'center' }}>{children}</div>
  </div>
);

const PdfViewer = ({ src, loading, fallback, style, storageKey }) => {
  const [scrollEl, setScrollEl] = useState(null);
  const scrollRef = useRef(null);
  const handleScrollRef = useCallback((node) => {
    scrollRef.current = node;
    setScrollEl(node);
  }, []);
  const [width, setWidth] = useState(0);
  // pdf.js re-renders at this width, a moment after the pane stops changing (the bitmap just stretches meanwhile).
  const [renderWidth, setRenderWidth] = useState(0);
  useEffect(() => {
    if (!width || Math.abs(width - renderWidth) < 2) return undefined;
    const timer = window.setTimeout(() => setRenderWidth(width), renderWidth ? 170 : 0);
    return () => window.clearTimeout(timer);
  }, [width, renderWidth]);
  const [zoom, setZoom] = useState(1);
  const [renderZoom, setRenderZoom] = useState(1);
  const zoomRef = useRef(1);
  const pendingZoomAnchorRef = useRef(null);
  const pageStackRef = useRef(null);
  const pageSpacerRef = useRef(null);
  const pinchRef = useRef(null);
  const pinchAnimationFrameRef = useRef(0);

  // Highlights: { [page]: strokes }, remembered per device under `storageKey` (the Drive file id).
  const [hl, setHl] = useState({ on: false, mode: 'highlight', tool: 'draw', color: HIGHLIGHT_COLORS[0].value, penColor: PEN_COLORS[0].value, finger: false });
  const hlOnRef = useRef(false);
  useEffect(() => { hlOnRef.current = hl.on; }, [hl.on]);
  const toolbarUi = useAutoHideToolbar(hl.on);
  const [highlights, setHighlights] = useState({});
  // Undo / redo over whole snapshots (see pdfHighlights recordEdit / stepHistory). The ref is the truth;
  // `historySize` only re-renders the buttons.
  const historyRef = useRef(emptyHistory());
  const [historySize, setHistorySize] = useState({ undo: 0, redo: 0 });
  const setHistory = useCallback((next) => {
    historyRef.current = next;
    setHistorySize({ undo: next.undo.length, redo: next.redo.length });
  }, []);
  const eraseSnapshotRef = useRef(null);       // pages before the current eraser drag, until it erases something
  const multiTouchAtRef = useRef(-1);          // when a second finger last landed (cancels a stroke in progress)
  const [historyFlash, setHistoryFlash] = useState(null);   // { label, id }
  const historyFlashTimerRef = useRef(0);
  const highlightsLoadedRef = useRef('');
  const saveTimerRef = useRef(0);
  const highlightsRef = useRef({});
  const schedulePinchFrameRef = useRef(null);
  const lastPinchRenderAtRef = useRef(0);
  // Keyed by src so a new document never briefly shows the previous one.
  const [opened, setOpened] = useState(null); // { src, pdf, numPages, ratio } | { src, failed: true }
  const doc = opened?.src === src && !opened.failed ? opened : null;
  const failed = opened?.src === src && opened.failed;

  useEffect(() => () => cancelAnimationFrame(pinchAnimationFrameRef.current), []);

  useEffect(() => {
    if (!storageKey) return undefined;
    let cancelled = false;
    highlightsLoadedRef.current = '';
    loadHighlights(storageKey).then((pages) => {
      if (cancelled) return;
      highlightsRef.current = pages;
      setHighlights(pages);
      setHistory(emptyHistory());
      highlightsLoadedRef.current = storageKey;
    });
    return () => {
      cancelled = true;
      window.clearTimeout(saveTimerRef.current);
      // Flush a pending save for the document being left.
      if (highlightsLoadedRef.current === storageKey) saveHighlights(storageKey, highlightsRef.current);
    };
  }, [storageKey, setHistory]);

  const commitHighlights = useCallback((next) => {
    highlightsRef.current = next;
    setHighlights(next);
    if (!storageKey || highlightsLoadedRef.current !== storageKey) return;
    window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => saveHighlights(storageKey, highlightsRef.current), 400);
  }, [storageKey]);

  // Every edit goes through here: remember the pages before it, then apply.
  const editHighlights = useCallback((next, before = highlightsRef.current) => {
    if (next === highlightsRef.current) return;
    setHistory(recordEdit(historyRef.current, before));
    commitHighlights(next);
  }, [commitHighlights, setHistory]);

  const addHighlight = useCallback((page, stroke) => {
    editHighlights(addStroke(highlightsRef.current, page, stroke));
  }, [editHighlights]);

  const scribbleErase = useCallback((page, ids) => {
    editHighlights(removeStrokes(highlightsRef.current, page, ids));
  }, [editHighlights]);

  // One eraser drag = one undo step: the snapshot taken at touch-down is recorded with the first real erase.
  const beginErase = useCallback(() => { eraseSnapshotRef.current = highlightsRef.current; }, []);
  const eraseHighlights = useCallback((page, x, y) => {
    const list = highlightsRef.current[page] || [];
    const kept = eraseAt(list, x, y, ERASE_RADIUS);
    if (kept === list) return;
    const next = { ...highlightsRef.current };
    if (kept.length > 0) next[page] = kept; else delete next[page];
    if (eraseSnapshotRef.current) {
      editHighlights(next, eraseSnapshotRef.current);
      eraseSnapshotRef.current = null;
    } else {
      commitHighlights(next);
    }
  }, [commitHighlights, editHighlights]);

  const stepMarks = useCallback((direction) => {
    const step = stepHistory(historyRef.current, highlightsRef.current, direction);
    if (!step) return false;
    setHistory(step.history);
    commitHighlights(step.pages);
    return true;
  }, [commitHighlights, setHistory]);
  const undoHighlight = useCallback(() => stepMarks('undo'), [stepMarks]);
  const redoHighlight = useCallback(() => stepMarks('redo'), [stepMarks]);

  const panBy = useCallback((dx, dy) => {
    const root = scrollRef.current;
    if (!root) return;
    root.scrollLeft -= dx;
    root.scrollTop -= dy;
  }, []);

  const clearHighlights = useCallback(() => { editHighlights({}); }, [editHighlights]);

  // Two-finger tap = undo, three-finger tap = redo — only while the pen or highlighter is on, so a student
  // just reading the worksheet never loses marks by accident. A small label flashes when it acted.
  const flashHistory = useCallback((label) => {
    window.clearTimeout(historyFlashTimerRef.current);
    setHistoryFlash({ label, id: Date.now() });
    historyFlashTimerRef.current = window.setTimeout(() => setHistoryFlash(null), 650);
  }, []);
  useEffect(() => () => window.clearTimeout(historyFlashTimerRef.current), []);
  const tapActionRef = useRef(null);
  useEffect(() => {
    tapActionRef.current = (action) => {
      if (stepMarks(action)) flashHistory(action === 'undo' ? 'Undo' : 'Redo');
    };
  }, [stepMarks, flashHistory]);


  useLayoutEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useLayoutEffect(() => {
    const stack = pageStackRef.current;
    if (stack) stack.style.transform = 'none';
    const spacer = pageSpacerRef.current;
    if (spacer) {
      spacer.style.width = `${Math.max(scrollRef.current?.clientWidth || 0, Math.round(width * renderZoom) + PAGE_GAP * 2)}px`;
      spacer.style.height = 'auto';
    }
    const anchor = pendingZoomAnchorRef.current;
    const root = scrollRef.current;
    if (!anchor || !root) return;
    pendingZoomAnchorRef.current = null;
    // Page content begins after the fixed outer padding. Keep the same PDF
    // point under the gesture (or viewport centre for the toolbar) as its
    // rendered width changes, instead of leaving it pinned to the left edge.
    const origin = PAGE_GAP;
    root.scrollLeft = Math.max(0, anchor.docX * renderZoom - anchor.localX);
    root.scrollTop = Math.max(0, origin + anchor.docY * renderZoom - anchor.localY);
  }, [renderZoom, width]);

  useEffect(() => {
    if (!src) return undefined;
    let cancelled = false;
    const task = pdfjsLib.getDocument(src);
    task.promise
      .then(async (pdf) => {
        const first = await pdf.getPage(1);
        const base = first.getViewport({ scale: 1 });
        if (!cancelled) setOpened({ src, pdf, numPages: pdf.numPages, ratio: base.height / base.width });
      })
      .catch((err) => {
        console.warn('[PdfViewer] open failed:', err);
        if (!cancelled) setOpened({ src, failed: true });
      });
    return () => { cancelled = true; task.destroy(); };
  }, [src]);

  useEffect(() => {
    if (!scrollEl) return undefined;
    const measure = () => {
      const next = Math.min(MAX_PAGE_WIDTH, Math.max(0, scrollEl.clientWidth - PAGE_GAP * 2));
      // Ignore sub-pixel jitter; the page boxes follow the pane smoothly (the bitmap re-renders after it settles).
      setWidth((prev) => (Math.abs(prev - next) >= 1 ? next : prev));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(scrollEl);
    return () => ro.disconnect();
  }, [scrollEl]);

  const changeZoom = (nextValue) => {
    const current = zoomRef.current;
    const next = typeof nextValue === 'function' ? nextValue(current) : nextValue;
    const root = scrollRef.current;
    if (root && width && next !== current) {
      const localX = root.clientWidth / 2;
      const localY = root.clientHeight / 2;
      pendingZoomAnchorRef.current = {
        docX: (root.scrollLeft + localX) / current,
        docY: (root.scrollTop + localY - PAGE_GAP) / current,
        localX,
        localY,
      };
    }
    zoomRef.current = next;
    setZoom(next);
    setRenderZoom(next);
  };

  const schedulePinchFrame = useCallback(() => {
    if (pinchAnimationFrameRef.current || !pinchRef.current) return;
    pinchAnimationFrameRef.current = requestAnimationFrame(() => {
      pinchAnimationFrameRef.current = 0;
      const pinch = pinchRef.current;
      const stack = pageStackRef.current;
      const spacer = pageSpacerRef.current;
      const root = scrollRef.current;
      if (!pinch || !stack || !spacer || !root) return;

      const delta = pinch.targetZoom - pinch.visualZoom;
      const settled = Math.abs(delta) < 0.001;
      pinch.visualZoom = settled ? pinch.targetZoom : pinch.visualZoom + delta * 0.28;
      const scale = pinch.visualZoom / pinch.startZoom;
      const baseWidth = stack.offsetWidth;
      const baseHeight = stack.offsetHeight;
      stack.style.transform = `scale(${scale})`;
      spacer.style.width = `${baseWidth * scale}px`;
      spacer.style.height = `${baseHeight * scale}px`;

      const rect = root.getBoundingClientRect();
      const localX = pinch.center.x - rect.left;
      const localY = pinch.center.y - rect.top;
      root.scrollLeft = Math.max(0, pinch.docX * pinch.visualZoom - localX);
      root.scrollTop = Math.max(0, PAGE_GAP + pinch.docY * pinch.visualZoom - localY);

      if (settled && pinch.finishRequested) {
        pendingZoomAnchorRef.current = {
          docX: pinch.docX,
          docY: pinch.docY,
          localX,
          localY,
        };
        zoomRef.current = pinch.targetZoom;
        setZoom(pinch.targetZoom);
        setRenderZoom(pinch.targetZoom);
        pinchRef.current = null;
        return;
      }
      if (!settled || pinch.finishRequested) schedulePinchFrameRef.current?.();
    });
  }, []);

  useEffect(() => { schedulePinchFrameRef.current = schedulePinchFrame; }, [schedulePinchFrame]);

  // Pinch zoom uses native touch events, not pointer events: with touch-action
  // set to pan, Safari/Chrome take over a moving finger for scrolling and send
  // pointercancel, so a two-finger pinch was only recognised now and then.
  // Non-passive touchmove + preventDefault keeps both fingers for the pinch.
  useEffect(() => {
    if (!scrollEl) return undefined;
    const pointsOf = (touches) => [touches[0], touches[1]].map((t) => ({ x: t.clientX, y: t.clientY }));

    // Finger taps (see classifyMultiTap): one record per touch sequence, lifts caught on window.
    let tap = null;
    const tapMoved = (touchList) => {
      if (!tap) return;
      for (const t of touchList) {
        const s0 = tap.starts.get(t.identifier);
        if (s0) tap.maxMove = Math.max(tap.maxMove, Math.hypot(t.clientX - s0.x, t.clientY - s0.y));
      }
    };
    const tapStart = (event) => {
      if (!tap || event.touches.length === event.changedTouches.length) tap = { t0: performance.now(), starts: new Map(), fingers: 0, maxMove: 0, stylus: false };
      for (const t of event.changedTouches) {
        tap.starts.set(t.identifier, { x: t.clientX, y: t.clientY });
        if (t.touchType === 'stylus') tap.stylus = true;
      }
      tap.fingers = Math.max(tap.fingers, event.touches.length);
      if (event.touches.length >= 2) multiTouchAtRef.current = performance.now();
    };
    const tapEnd = (event) => {
      if (!tap) return;
      tapMoved(event.changedTouches);
      if (event.type === 'touchcancel') tap.stylus = true;
      if (event.touches.length > 0) return;
      const action = classifyMultiTap({ fingers: tap.fingers, durationMs: performance.now() - tap.t0, maxMovePx: tap.maxMove, stylus: tap.stylus });
      tap = null;
      if (action && hlOnRef.current) tapActionRef.current?.(action);
    };

    const begin = (event) => {
      tapStart(event);
      if (event.touches.length !== 2) return;
      const points = pointsOf(event.touches);
      const center = midpoint(points);
      const rect = scrollEl.getBoundingClientRect();
      const localX = center.x - rect.left;
      const localY = center.y - rect.top;
      const startZoom = zoomRef.current;
      pinchRef.current = {
        startDistance: Math.max(MIN_PINCH_DISTANCE, distanceBetween(points)),
        startZoom,
        targetZoom: startZoom,
        visualZoom: startZoom,
        center,
        docX: (scrollEl.scrollLeft + localX) / startZoom,
        docY: (scrollEl.scrollTop + localY - PAGE_GAP) / startZoom,
      };
      const stack = pageStackRef.current;
      const spacer = pageSpacerRef.current;
      if (stack && spacer) {
        // Keep the pinch preview as a compositor transform. pdf.js only
        // rasterizes again once the gesture ends.
        stack.style.transform = 'none';
        spacer.style.width = `${stack.offsetWidth}px`;
        spacer.style.height = `${stack.offsetHeight}px`;
      }
      lastPinchRenderAtRef.current = 0;
      if (event.cancelable) event.preventDefault();
    };

    const move = (event) => {
      tapMoved(event.changedTouches);
      const pinch = pinchRef.current;
      if (!pinch || pinch.finishRequested || event.touches.length < 2) return;
      if (event.cancelable) event.preventDefault();
      const points = pointsOf(event.touches);
      const nextZoom = zoomForPinch(pinch, points);
      if (nextZoom === null) return;
      pinch.center = midpoint(points);
      pinch.targetZoom = nextZoom;
      const now = performance.now();
      if (now - lastPinchRenderAtRef.current >= 42) {
        lastPinchRenderAtRef.current = now;
        setZoom(nextZoom);
      }
      schedulePinchFrame();
    };

    const end = (event) => {
      const pinch = pinchRef.current;
      if (!pinch || pinch.finishRequested || event.touches.length >= 2) return;
      pinch.finishRequested = true;
      schedulePinchFrame();
    };

    // Safari also fires its own gesture events for a pinch; stop it zooming the page.
    const blockGesture = (event) => { if (event.cancelable) event.preventDefault(); };

    const opts = { passive: false };
    scrollEl.addEventListener('touchstart', begin, opts);
    scrollEl.addEventListener('touchmove', move, opts);
    scrollEl.addEventListener('touchend', end, opts);
    scrollEl.addEventListener('touchcancel', end, opts);
    scrollEl.addEventListener('gesturestart', blockGesture, opts);
    scrollEl.addEventListener('gesturechange', blockGesture, opts);
    window.addEventListener('touchend', tapEnd, { passive: true });
    window.addEventListener('touchcancel', tapEnd, { passive: true });
    return () => {
      window.removeEventListener('touchend', tapEnd, { passive: true });
      window.removeEventListener('touchcancel', tapEnd, { passive: true });
      scrollEl.removeEventListener('touchstart', begin, opts);
      scrollEl.removeEventListener('touchmove', move, opts);
      scrollEl.removeEventListener('touchend', end, opts);
      scrollEl.removeEventListener('touchcancel', end, opts);
      scrollEl.removeEventListener('gesturestart', blockGesture, opts);
      scrollEl.removeEventListener('gesturechange', blockGesture, opts);
    };
  }, [scrollEl, schedulePinchFrame]);

  if (loading) {
    return centered(style, (
      <>
        <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa', marginBottom: 8 }} />
        <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem' }}>Loading worksheet…</div>
      </>
    ));
  }

  if (!src || failed) {
    if (fallback) return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, ...style, position: 'relative', minWidth: 0, width: '100%', maxWidth: '100%' }}>
        <PdfToolbar zoom={zoom} onZoomChange={changeZoom} highlight={null} visible={toolbarUi.visible} onInteract={toolbarUi.show} />
        <div
          ref={handleScrollRef}
          {...toolbarUi.tapHandlers}
          style={{ flex: 1, minWidth: 0, maxWidth: '100%', minHeight: 0, overflow: 'auto', background: '#f1f5f9', WebkitOverflowScrolling: 'touch', touchAction: 'pan-x pan-y', overscrollBehavior: 'contain' }}
        >
          <div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%`, minWidth: `${zoom * 100}%`, minHeight: `${zoom * 100}%` }}>
            <iframe title="Worksheet" src={fallback} allow="autoplay" style={{ width: `${100 / zoom}%`, height: `${100 / zoom}%`, border: 0, transform: `scale(${zoom})`, transformOrigin: 'top left' }} />
          </div>
        </div>
      </div>
    );
    return centered({ background: '#fef2f2', ...style }, (
      <div style={{ color: '#dc2626' }}>
        <AlertTriangle size={28} style={{ marginBottom: 8 }} />
        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Failed to load PDF</div>
      </div>
    ));
  }

  const pageWidth = Math.round(width * renderZoom);
  const contentWidth = Math.max(scrollEl?.clientWidth || 0, pageWidth + PAGE_GAP * 2);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, ...style, position: 'relative', minWidth: 0, width: '100%', maxWidth: '100%' }}>
        <PdfToolbar
          visible={toolbarUi.visible}
          onInteract={toolbarUi.show}
          zoom={zoom}
          onZoomChange={changeZoom}
          highlight={storageKey && doc ? { hl, setHl, canUndo: historySize.undo > 0, canRedo: historySize.redo > 0, onUndo: undoHighlight, onRedo: redoHighlight, hasAny: countHighlights(highlights) > 0, onClearAll: clearHighlights } : null}
        />
        {historyFlash && (
          <div key={historyFlash.id} aria-live="polite" style={{ position: 'absolute', left: '50%', top: '50%', zIndex: 6, pointerEvents: 'none', padding: '8px 18px', borderRadius: '999px', background: 'rgba(15,23,42,0.78)', color: '#fff', fontSize: '0.9rem', fontWeight: 800, animation: 'padHistoryFlash 650ms ease-out forwards' }}>
            {historyFlash.label}
          </div>
        )}
      <div
        ref={handleScrollRef}
        {...toolbarUi.tapHandlers}
        style={{ flex: 1, minWidth: 0, maxWidth: '100%', minHeight: 0, overflow: 'auto', background: '#f1f5f9', padding: `${PAGE_GAP}px 0`, WebkitOverflowScrolling: 'touch', touchAction: 'pan-x pan-y', overscrollBehavior: 'contain' }}
      >
        {!doc || !width ? (
          <div style={{ display: 'grid', placeItems: 'center', minHeight: 200 }}>
            <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa' }} />
          </div>
        ) : (
          <div ref={pageSpacerRef} style={{ width: contentWidth, minHeight: '100%', position: 'relative' }}>
            <div ref={pageStackRef} style={{ width: contentWidth, minHeight: '100%', transform: 'none', transformOrigin: 'top left', willChange: 'transform' }}>
              {Array.from({ length: doc.numPages }, (_, i) => (
                <PdfPage
                  key={i + 1}
                  pdf={doc.pdf}
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderWidth={Math.round((renderWidth || width) * renderZoom)}
                  initialRatio={doc.ratio}
                  scrollRoot={scrollEl}
                  strokes={highlights[i + 1]}
                  hl={hl}
                  pinchingRef={pinchRef}
                  multiTouchAtRef={multiTouchAtRef}
                  onAddStroke={addHighlight}
                  onEraseAt={eraseHighlights}
                  onEraseBegin={beginErase}
                  onScribbleErase={scribbleErase}
                  onPan={panBy}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
