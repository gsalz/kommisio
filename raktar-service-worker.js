self.addEventListener('install', (event) => {
  console.log('Service Worker telepítve');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker aktiválva');
});

self.addEventListener('fetch', (event) => {
  // Egyszerű cache-elés később bővíthető
  event.respondWith(fetch(event.request));
});
