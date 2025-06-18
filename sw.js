// Service Worker بسيط: كاش لكل الملفات الأساسية
const CACHE_NAME = "xo-pwa-v1";
const urlsToCache = [
  "index.html",
  "version1.html",
  "version2.html",
  "manifest.json",
  "icons/xo128.png",
  "icons/xo192.png",
  "icons/xo512.png",
  "https://cdn.tailwindcss.com"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});