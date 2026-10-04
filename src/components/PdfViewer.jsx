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
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Loader2, AlertTriangle, ZoomIn, ZoomOut } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PAGE_GAP = 12;
const MAX_PAGE_WIDTH = 1000;
const MAX_RENDER_WIDTH = 3200;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;
const MIN_PINCH_DISTANCE = 1;

const distanceBetween = ([first, second]) => Math.hypot(
  second.x - first.x,
  second.y - first.y,
);

const midpoint = ([first, second]) => ({ x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 });

const zoomForPinch = (pinch, points) => {
  if (!pinch || points.length < 2) return null;
  const next = pinch.startZoom * (distanceBetween(points) / pinch.startDistance);
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(next * 100) / 100));
};

const ZoomControls = ({ zoom, onZoomChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, flexShrink: 0, padding: '5px 10px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
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

const PdfPage = ({ pdf, pageNumber, width, initialRatio, scrollRoot }) => {
  const holderRef = useRef(null);
  const canvasRef = useRef(null);
  const [near, setNear] = useState(pageNumber === 1);
  const [ratio, setRatio] = useState(initialRatio);

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
    if (!near || !width) return undefined;
    let cancelled = false;
    let task = null;
    (async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        setRatio(base.height / base.width);
        const dpr = Math.min(window.devicePixelRatio || 1, 2, MAX_RENDER_WIDTH / width);
        const viewport = page.getViewport({ scale: (width / base.width) * dpr });
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        task = page.render({ canvasContext: canvas.getContext('2d'), viewport });
        await task.promise;
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') console.warn('[PdfViewer] page render failed:', err);
      }
    })();
    return () => { cancelled = true; task?.cancel(); };
  }, [near, width, pdf, pageNumber]);

  return (
    <div
      ref={holderRef}
      style={{
        width, height: Math.round(width * ratio), margin: `0 auto ${PAGE_GAP}px`,
        background: '#fff', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.12)', position: 'relative',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', borderRadius: 4 }} />
      <span style={{ position: 'absolute', right: 8, bottom: 6, fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8' }}>
        {pageNumber}
      </span>
    </div>
  );
};

const centered = (style, children) => (
  <div style={{ display: 'grid', placeItems: 'center', height: '100%', minHeight: 200, background: '#f8fafc', ...style }}>
    <div style={{ textAlign: 'center' }}>{children}</div>
  </div>
);

const PdfViewer = ({ src, loading, fallback, style }) => {
  const [scrollEl, setScrollEl] = useState(null);
  const scrollRef = useRef(null);
  const handleScrollRef = useCallback((node) => {
    scrollRef.current = node;
    setScrollEl(node);
  }, []);
  const [width, setWidth] = useState(0);
  const [zoom, setZoom] = useState(1);
  const zoomRef = useRef(1);
  const pendingZoomAnchorRef = useRef(null);
  const touchPointsRef = useRef(new Map());
  const pinchRef = useRef(null);
  const lastPinchRenderAtRef = useRef(0);
  // Keyed by src so a new document never briefly shows the previous one.
  const [opened, setOpened] = useState(null); // { src, pdf, numPages, ratio } | { src, failed: true }
  const doc = opened?.src === src && !opened.failed ? opened : null;
  const failed = opened?.src === src && opened.failed;

  useLayoutEffect(() => {
    zoomRef.current = zoom;
    const anchor = pendingZoomAnchorRef.current;
    const root = scrollRef.current;
    if (!anchor || !root) return;
    pendingZoomAnchorRef.current = null;
    // Page content begins after the fixed outer padding. Keep the same PDF
    // point under the gesture (or viewport centre for the toolbar) as its
    // rendered width changes, instead of leaving it pinned to the left edge.
    const origin = PAGE_GAP;
    root.scrollLeft = Math.max(0, origin + anchor.docX * zoom - anchor.localX);
    root.scrollTop = Math.max(0, origin + anchor.docY * zoom - anchor.localY);
  }, [zoom]);

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
      // Ignore sub-pixel jitter so pages don't re-render while scrolling.
      setWidth((prev) => (Math.abs(prev - next) > 8 ? next : prev));
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
        docX: (root.scrollLeft + localX - PAGE_GAP) / current,
        docY: (root.scrollTop + localY - PAGE_GAP) / current,
        localX,
        localY,
      };
    }
    setZoom(next);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== 'touch') return;
    touchPointsRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* Safari may already own the pointer */ }
    if (touchPointsRef.current.size === 2) {
      const points = [...touchPointsRef.current.values()];
      const center = midpoint(points);
      const rect = event.currentTarget.getBoundingClientRect();
      const localX = center.x - rect.left;
      const localY = center.y - rect.top;
      const startZoom = zoomRef.current;
      pinchRef.current = {
        startDistance: Math.max(MIN_PINCH_DISTANCE, distanceBetween(points)),
        startZoom,
        docX: (event.currentTarget.scrollLeft + localX - PAGE_GAP) / startZoom,
        docY: (event.currentTarget.scrollTop + localY - PAGE_GAP) / startZoom,
      };
      lastPinchRenderAtRef.current = 0;
    }
  };

  const handlePointerMove = (event) => {
    if (!touchPointsRef.current.has(event.pointerId)) return;
    touchPointsRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (touchPointsRef.current.size < 2 || !pinchRef.current) return;
    if (event.cancelable) event.preventDefault();

    const nextZoom = zoomForPinch(pinchRef.current, [...touchPointsRef.current.values()]);
    const now = performance.now();
    if (nextZoom !== null) {
      const root = event.currentTarget;
      const rect = root.getBoundingClientRect();
      const center = midpoint([...touchPointsRef.current.values()]);
      const localX = center.x - rect.left;
      const localY = center.y - rect.top;
      pendingZoomAnchorRef.current = {
        docX: pinchRef.current.docX,
        docY: pinchRef.current.docY,
        localX,
        localY,
      };
    }
    // Re-rendering every PDF page for every pointer event is expensive. Update
    // at ~24fps; scroll anchoring runs with each rendered zoom step.
    if (nextZoom !== null && now - lastPinchRenderAtRef.current >= 42) {
      lastPinchRenderAtRef.current = now;
      setZoom(nextZoom);
    }
  };

  const handlePointerEnd = (event) => {
    if (!touchPointsRef.current.has(event.pointerId)) return;
    if (touchPointsRef.current.size >= 2 && pinchRef.current) {
      touchPointsRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
      const points = [...touchPointsRef.current.values()];
      const finalZoom = zoomForPinch(pinchRef.current, points);
      if (finalZoom !== null) {
        const root = event.currentTarget;
        const rect = root.getBoundingClientRect();
        const center = midpoint(points);
        pendingZoomAnchorRef.current = {
          docX: pinchRef.current.docX,
          docY: pinchRef.current.docY,
          localX: center.x - rect.left,
          localY: center.y - rect.top,
        };
        setZoom(finalZoom);
      }
    }
    touchPointsRef.current.delete(event.pointerId);
    if (touchPointsRef.current.size < 2) pinchRef.current = null;
  };

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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, ...style }}>
        <ZoomControls zoom={zoom} onZoomChange={changeZoom} />
        <div
          ref={handleScrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#f1f5f9', WebkitOverflowScrolling: 'touch', touchAction: 'pan-x pan-y', overscrollBehavior: 'contain' }}
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

  const pageWidth = Math.round(width * zoom);
  const contentWidth = Math.max(scrollEl?.clientWidth || 0, pageWidth + PAGE_GAP * 2);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, ...style }}>
        <ZoomControls zoom={zoom} onZoomChange={changeZoom} />
      <div
        ref={handleScrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#f1f5f9', padding: `${PAGE_GAP}px 0`, WebkitOverflowScrolling: 'touch', touchAction: 'pan-x pan-y', overscrollBehavior: 'contain' }}
      >
        {!doc || !width ? (
          <div style={{ display: 'grid', placeItems: 'center', minHeight: 200 }}>
            <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa' }} />
          </div>
        ) : (
          <div style={{ width: contentWidth, minHeight: '100%' }}>
            {Array.from({ length: doc.numPages }, (_, i) => (
              <PdfPage
                key={i + 1}
                pdf={doc.pdf}
                pageNumber={i + 1}
                width={pageWidth}
                initialRatio={doc.ratio}
                scrollRoot={scrollEl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
