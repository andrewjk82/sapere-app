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
import { useEffect, useRef, useState } from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PAGE_GAP = 12;
const MAX_PAGE_WIDTH = 1000;

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
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
  const [width, setWidth] = useState(0);
  // Keyed by src so a new document never briefly shows the previous one.
  const [opened, setOpened] = useState(null); // { src, pdf, numPages, ratio } | { src, failed: true }
  const doc = opened?.src === src && !opened.failed ? opened : null;
  const failed = opened?.src === src && opened.failed;

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

  if (loading) {
    return centered(style, (
      <>
        <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa', marginBottom: 8 }} />
        <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem' }}>Loading worksheet…</div>
      </>
    ));
  }

  if (!src || failed) {
    if (fallback) return <iframe title="Worksheet" src={fallback} allow="autoplay" style={{ width: '100%', height: '100%', border: 0, ...style }} />;
    return centered({ background: '#fef2f2', ...style }, (
      <div style={{ color: '#dc2626' }}>
        <AlertTriangle size={28} style={{ marginBottom: 8 }} />
        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Failed to load PDF</div>
      </div>
    ));
  }

  return (
    <div
      ref={setScrollEl}
      style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', background: '#f1f5f9', padding: `${PAGE_GAP}px 0`, WebkitOverflowScrolling: 'touch', ...style }}
    >
      {!doc || !width ? (
        <div style={{ display: 'grid', placeItems: 'center', minHeight: 200 }}>
          <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa' }} />
        </div>
      ) : (
        Array.from({ length: doc.numPages }, (_, i) => (
          <PdfPage
            key={i + 1}
            pdf={doc.pdf}
            pageNumber={i + 1}
            width={width}
            initialRatio={doc.ratio}
            scrollRoot={scrollEl}
          />
        ))
      )}
    </div>
  );
};

export default PdfViewer;
