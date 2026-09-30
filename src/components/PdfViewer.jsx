/**
 * PdfViewer — renders every page of a PDF using pdf.js canvas rendering.
 *
 * Props:
 *   src       – blob URL, data URL, or remote URL pointing to a PDF
 *   fallback  – optional URL to show in an iframe when pdf.js fails
 *   style     – optional container style overrides
 */
import { useEffect, useRef, useState } from 'react';
import { Loader2, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── pdf.js setup ── */
import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfViewer = ({ src, fallback, style }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ok | error
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!src) return;
    let cancelled = false;

    setStatus('loading');
    setPages([]);
    setCurrentPage(0);
    setTotalPages(0);

    (async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(src);
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const numPages = pdf.numPages;
        setTotalPages(numPages);
        const rendered = [];

        for (let i = 1; i <= numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const viewport = page.getViewport({ scale: 1.5 * dpr });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');

          await page.render({ canvasContext: ctx, viewport }).promise;

          rendered.push({
            dataUrl: canvas.toDataURL('image/png'),
            width: viewport.width / dpr,
            height: viewport.height / dpr,
          });
        }

        if (!cancelled) {
          setPages(rendered);
          setStatus('ok');
        }
      } catch (err) {
        console.warn('PdfViewer render error:', err);
        if (!cancelled) setStatus('error');
      }
    })();

    return () => { cancelled = true; };
  }, [src]);

  if (status === 'loading') {
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '100%', minHeight: 200, background: '#f8fafc', ...style }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2 size={28} style={{ animation: 'spin 0.8s linear infinite', color: '#a78bfa', marginBottom: 8 }} />
          <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem' }}>Loading PDF…</div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    if (fallback) {
      return <iframe title="PDF" src={fallback} style={{ width: '100%', height: '100%', border: 0, ...style }} />;
    }
    return (
      <div style={{ display: 'grid', placeItems: 'center', height: '100%', minHeight: 200, background: '#fef2f2', ...style }}>
        <div style={{ textAlign: 'center', color: '#dc2626' }}>
          <AlertTriangle size={28} style={{ marginBottom: 8 }} />
          <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Failed to load PDF</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f1f5f9', ...style }}>
      {totalPages > 1 && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          padding: '8px 12px', background: '#fff', borderBottom: '1px solid #e2e8f0',
          position: 'sticky', top: 0, zIndex: 2,
        }}>
          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{
              border: 'none', background: currentPage === 0 ? '#f1f5f9' : '#ede9fe',
              borderRadius: 8, padding: '6px 10px', cursor: currentPage === 0 ? 'default' : 'pointer',
              color: currentPage === 0 ? '#cbd5e1' : '#7c3aed', display: 'flex', alignItems: 'center',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#1e1b4b', minWidth: 80, textAlign: 'center' }}>
            {currentPage + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              border: 'none', background: currentPage === totalPages - 1 ? '#f1f5f9' : '#ede9fe',
              borderRadius: 8, padding: '6px 10px', cursor: currentPage === totalPages - 1 ? 'default' : 'pointer',
              color: currentPage === totalPages - 1 ? '#cbd5e1' : '#7c3aed', display: 'flex', alignItems: 'center',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      <div style={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', padding: 12 }}>
        {pages[currentPage] && (
          <img
            src={pages[currentPage].dataUrl}
            alt={`Page ${currentPage + 1}`}
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              borderRadius: 4,
              background: '#fff',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
