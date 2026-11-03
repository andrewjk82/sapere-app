import { useEffect, useState } from 'react';
import { extractDriveFileId, toDrivePreviewUrl } from './homework';
import { loadCachedPdf, cachePdf } from './homeworkLocalStore';
import { withTimeout } from './withTimeout';

// IndexedDB on iPad Safari can stop answering (a known WebKit hang after the app was backgrounded for a long time),
// and a download on weak school Wi-Fi can stall without ever erroring. Either used to leave "Loading worksheet…"
// spinning forever; past these limits we move on (download, then Drive's own viewer).
const CACHE_READ_TIMEOUT_MS = 3000;
const DOWNLOAD_TIMEOUT_MS = 30000;

const downloadPdf = async (fileId) => {
  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = setTimeout(() => controller?.abort(), DOWNLOAD_TIMEOUT_MS);
  try {
    return await withTimeout(
      fetch(`/api/worksheet?id=${encodeURIComponent(fileId)}`, controller ? { signal: controller.signal } : undefined)
        .then(async (r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.blob();
        }),
      DOWNLOAD_TIMEOUT_MS + 1000,
    );
  } finally {
    clearTimeout(timer);
  }
};

const isPdfBlob = async (blob) => {
  try {
    // A Blob read back from IndexedDB can hang on Safari when its backing file is gone — time-box it too.
    const head = new Uint8Array(await withTimeout(blob.slice(0, 5).arrayBuffer(), CACHE_READ_TIMEOUT_MS));
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
      let blob = await withTimeout(loadCachedPdf(fileId), CACHE_READ_TIMEOUT_MS).catch(() => null);
      if (blob && !(await isPdfBlob(blob))) blob = null;
      if (!blob && !cancelled) {
        try {
          const downloaded = await downloadPdf(fileId);
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
    // Stable per-document key (e.g. for PDF highlights); '' when the link is not a Drive file.
    fileId: fileId || '',
  };
}
