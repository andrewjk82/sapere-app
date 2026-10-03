import { useEffect, useState } from 'react';
import { extractDriveFileId, toDrivePreviewUrl } from './homework';
import { loadCachedPdf, cachePdf } from './homeworkLocalStore';

const isPdfBlob = async (blob) => {
  try {
    const head = new Uint8Array(await blob.slice(0, 5).arrayBuffer());
    return String.fromCharCode(...head) === '%PDF-';
  } catch {
    return false;
  }
};

/**
 * Resolves a topic worksheet link (Drive share / preview / gview) to a local
 * blob: URL that pdf.js can render: device cache first, then a download via
 * our /api/worksheet proxy (browsers can't fetch Drive file bytes directly —
 * Drive returns 403 to cross-site requests), cached for next time.
 * `src` stays '' when that isn't possible (non-Drive link, file not shared
 * publicly, offline) — callers then show `fallback`, Drive's own viewer.
 */
export function useWorksheetPdf(rawUrl) {
  // Keyed by the link so switching topics never shows the previous PDF.
  const [resolved, setResolved] = useState({ key: null, src: '' });
  const fileId = extractDriveFileId(rawUrl);

  useEffect(() => {
    if (!rawUrl || !fileId) return undefined;
    let cancelled = false;
    let objectUrl = '';

    (async () => {
      let blob = await loadCachedPdf(fileId);
      if (blob && !(await isPdfBlob(blob))) blob = null;
      if (!blob) {
        try {
          const res = await fetch(`/api/worksheet?id=${encodeURIComponent(fileId)}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const downloaded = await res.blob();
          if (!(await isPdfBlob(downloaded))) throw new Error('not a PDF');
          blob = downloaded;
          cachePdf(fileId, downloaded);
        } catch (err) {
          console.warn('[worksheet] PDF download failed, using Drive viewer:', err?.message || err);
        }
      }
      if (cancelled) return;
      if (blob) objectUrl = URL.createObjectURL(blob);
      setResolved({ key: rawUrl, src: objectUrl });
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [rawUrl, fileId]);

  const done = resolved.key === rawUrl;
  return {
    src: done ? resolved.src : '',
    loading: Boolean(rawUrl && fileId && !done),
    fallback: toDrivePreviewUrl(rawUrl),
  };
}
