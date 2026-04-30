// Basic Service Worker for PWA
const CACHE_NAME = 'sapere-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through for now to satisfy PWA requirements
  event.respondWith(fetch(event.request));
});
