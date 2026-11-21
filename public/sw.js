// Retired service worker (2026-05 PWA shell). It used to pass every request through its own fetch handler, which
// can make the app's JS files fail to load on devices that still have it. This version removes itself: when a device
// checks /sw.js for updates it installs this, unregisters, and reloads its open pages without any service worker.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try { const keys = await caches.keys(); await Promise.all(keys.map((k) => caches.delete(k))); } catch { /* ignore */ }
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => { try { c.navigate(c.url); } catch { /* ignore */ } });
  })());
});
