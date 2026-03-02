/* 64hex — Service Worker v1.0 */
const CACHE = '64hex-v2';
const SHELL = [
  '/',
  '/index.html',
  '/corpus.json',
  'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500&family=Noto+Sans+SC:wght@400&family=PT+Serif:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Corpus: cache-first (static content)
  if (e.request.url.includes('corpus.json')) {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
    return;
  }
  // Fonts: cache-first
  if (e.request.url.includes('fonts.')) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
    return;
  }
  // App shell: network-first with cache fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
