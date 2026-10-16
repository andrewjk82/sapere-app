// Shared detection/recovery logic for known "unrecoverable-looking" crash
// signatures — used by both ErrorBoundary (render-phase errors) and the
// global window 'error'/'unhandledrejection' listeners in main.jsx
// (errors thrown outside React's render, e.g. inside the Firestore SDK's
// internal async/IndexedDB code, or in an event handler).
//
// A React ErrorBoundary only catches errors thrown while React is
// rendering/committing/in a lifecycle method. It does NOT catch errors
// thrown in event handlers or in rejected promises (e.g. an Firestore
// "INTERNAL ASSERTION FAILED" that fires inside an async IndexedDB
// callback). On some devices (2026-08 iPad report; suspected Samsung
// Internet on Android tablets too) that async-path crash leaves the page
// truly blank — no fallback UI at all — because nothing in the render
// tree ever threw. See src/components/ErrorBoundary.jsx and main.jsx.

// 배포 후 stale code-split 청크 로드 실패 메시지 패턴.
export const isChunkLoadError = (msg) =>
  /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed|dynamically imported module|unable to preload|chunkloaderror|loading chunk .* failed/i
    .test(String(msg || ''));

// localStorage가 가득 차면 Firestore의 persistentMultipleTabManager가 탭 간
// 동기화용 키(firestore_mutations_firestore/...)를 못 써서 내부 assertion으로
// 죽는다 (2026-08 iPad 리포트: Challenge/SecretNote 무한 로딩 → 이 에러로 확인).
// 우리 앱의 localCache(services/localCacheService.js, "sapere-cache:" 프리픽스)가
// 무제한으로 쌓이는 게 가장 큰 원인 후보이므로, 감지되면 그것부터 비운다.
export const isStorageQuotaError = (msg) =>
  /quotaexceedederror|exceeded the quota|internal assertion failed/i.test(String(msg || ''));

// 우리가 직접 쓴 캐시만 지운다 — Firebase 자체 IndexedDB 데이터는 건드리지 않음.
// 캐시일 뿐이므로 지워도 안전 (Firestore가 진짜 소스).
export const clearOwnLocalCache = () => {
  try {
    Object.keys(window.localStorage)
      .filter((k) => k.startsWith('sapere-cache:'))
      .forEach((k) => window.localStorage.removeItem(k));
  } catch { /* ignore */ }
};

// Asset URLs named in a chunk-load error message (Chrome / Edge include the URL; Safari does not).
export const chunkUrlsIn = (message, origin = globalThis.location?.origin) => {
  const urls = String(message || '').match(/https?:\/\/[^\s'"()]+?\.(?:js|css|mjs)(?=[\s'")?#]|$)/g) || [];
  return [...new Set(urls.filter((u) => !origin || u.startsWith(`${origin}/`)))];
};

// Relative module imports in a built chunk: `from"./x.js"` and side-effect `import"./x.js"` (static only —
// a nested dynamic chunk is repaired by its own failure, if it ever fails).
export const staticImportsIn = (code) => [...new Set(
  (String(code || '').match(/(?:from|import)\s*["'`](\.\/[^"'`]+\.m?js)["'`]/g) || [])
    .map((m) => m.replace(/^(?:from|import)\s*["'`]/, '').replace(/["'`]$/, '')),
)];

// A chunk requested while a deploy was still publishing can come back as a 404 / the app's HTML page with
// a long cache header, and the browser keeps that bad copy, so a plain reload keeps failing. And the file
// that is bad is often not the one named in the error but something it imports (the browser names the
// top-level chunk). So re-fetch the named chunk(s) with cache:'reload' — which replaces the cached copy —
// and walk their static imports the same way. Best effort, bounded and time-boxed: it must never block
// the recovery reload.
export const repairChunkCache = async (message, { extraUrls = [], timeoutMs = 6000, maxFiles = 120 } = {}) => {
  if (typeof fetch !== 'function') return;
  const start = [...chunkUrlsIn(message), ...extraUrls];
  if (start.length === 0) return;
  const seen = new Set();
  const walk = async (urls) => {
    const next = [];
    await Promise.all(urls.map(async (url) => {
      if (seen.has(url) || seen.size >= maxFiles) return;
      seen.add(url);
      try {
        const res = await fetch(url, { cache: 'reload' });
        if (!res.ok || !/javascript/.test(res.headers.get('content-type') || '')) return;
        const code = await res.text();
        staticImportsIn(code).forEach((rel) => next.push(new URL(rel, url).href));
      } catch { /* offline / blocked: nothing to repair */ }
    }));
    if (next.length) await walk(next);
  };
  await Promise.race([walk(start), new Promise((resolve) => { setTimeout(resolve, timeoutMs); })]);
};

// The chunk a lazy importer loads, from its built source: `()=>import("./Curriculum-abc.js")` (wrapped by
// Vite's preload helper). This is how Safari gets repaired too — its error message names no file.
export const chunkUrlsInImporter = (importer, base) => {
  try {
    const rels = String(importer).match(/import\(\s*["'`](\.\/[^"'`]+\.m?js)["'`]\s*\)/g) || [];
    return rels.map((m) => new URL(m.replace(/^import\(\s*["'`]/, '').replace(/["'`]\s*\)$/, ''), base).href);
  } catch {
    return [];
  }
};

// Navigate to this page again with a cache-busting parameter (fresh index.html), after repairing the cache.
export const reloadWithRepair = (message, extraUrls = []) => {
  const go = () => {
    const sep = window.location.search ? '&' : '?';
    window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
  };
  return repairChunkCache(message, { extraUrls }).then(go, go);
};

export const CHUNK_RELOAD_KEY = 'sapere:eb-chunk-reload';
export const QUOTA_RELOAD_KEY = 'sapere:eb-quota-reload';

// 60초 내 이미 자동 리로드했으면 다시 하지 않음(무한 루프 방지).
// 리로드 후에도 또 실패하면 false → 사용자에게 Reload 버튼 화면을 보여줌.
export const canAutoReload = (key) => {
  try {
    return Date.now() - Number(sessionStorage.getItem(key) || 0) > 60_000;
  } catch {
    return false;
  }
};

// Shared "recognize + auto-reload once" behaviour. Returns true if it
// recognized the error and kicked off a reload (caller should stop —
// the page is navigating away). Returns false if the message doesn't
// match a known signature, or we already auto-reloaded once recently.
export const attemptAutoReload = (message) => {
  const msg = String(message || '');

  if (isChunkLoadError(msg) && canAutoReload(CHUNK_RELOAD_KEY)) {
    try {
      sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
      reloadWithRepair(msg);
      return true;
    } catch { /* sessionStorage unavailable — fall through */ }
  }

  if (isStorageQuotaError(msg) && canAutoReload(QUOTA_RELOAD_KEY)) {
    try {
      sessionStorage.setItem(QUOTA_RELOAD_KEY, String(Date.now()));
      clearOwnLocalCache();
      const sep = window.location.search ? '&' : '?';
      window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
      return true;
    } catch { /* sessionStorage unavailable — fall through */ }
  }

  return false;
};
