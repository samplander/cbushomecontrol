const CACHE_NAME = 'home-lights-v1';

// Minimal service worker - just enables PWA install, no caching
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Clear any old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Network only - no caching
self.addEventListener('fetch', event => {
  // Let all requests go to network
  return;
});
