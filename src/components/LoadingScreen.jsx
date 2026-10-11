import { useEffect, useState } from 'react';
import { clearOwnLocalCache } from '../utils/crashRecovery';

const SLOW_AFTER_MS = 10000;

// Full-page loader. If it is still up after 10s something is stuck (a stalled download of the app's
// code, a hung request…) — instead of an endless black spinner the student gets a way out.
// "Fix and reload" drops the app's own cached copies (service worker, Cache Storage, our localStorage cache) and
// reloads from the network; it never touches notes or homework drafts (IndexedDB) or the login.
const LoadingScreen = () => {
  const [slow, setSlow] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setSlow(true), SLOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const reload = () => {
    const sep = window.location.search ? '&' : '?';
    window.location.replace(`${window.location.href.replace(/([?&])_cb=\d+/, '$1').replace(/[?&]$/, '')}${sep}_cb=${Date.now()}`);
  };

  const fixAndReload = async () => {
    setBusy(true);
    try {
      clearOwnLocalCache();
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      }
      if (typeof caches !== 'undefined') {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
    } catch { /* best effort: reload anyway */ }
    reload();
  };

  return (
    <div className="app-loading" style={{ alignContent: 'center', justifyItems: 'center' }}>
      <div className="app-spinner" />
      {slow && (
        <div role="status" style={{ marginTop: 24, maxWidth: 340, textAlign: 'center', color: '#ddd6fe' }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: 6 }}>This is taking longer than usual</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.85, marginBottom: 14 }}>Check your internet connection, then try again.</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" onClick={reload} disabled={busy} style={{ padding: '10px 18px', borderRadius: 12, border: 0, background: '#7c3aed', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>Reload</button>
            <button type="button" onClick={fixAndReload} disabled={busy} style={{ padding: '10px 18px', borderRadius: 12, border: '1.5px solid #a78bfa', background: 'transparent', color: '#ddd6fe', fontWeight: 800, cursor: 'pointer' }}>{busy ? 'Working…' : 'Fix and reload'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
