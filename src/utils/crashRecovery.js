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
      const sep = window.location.search ? '&' : '?';
      window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
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
