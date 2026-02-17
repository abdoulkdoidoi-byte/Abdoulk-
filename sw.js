const CACHE_NAME = 'abdoulk-world-v1';
const ASSETS = [
  './', './index.html', './manifest.json', './icon.png', 
  './hymne-burkina.mp3', './cours-premium.pdf', './film-intro.mp4'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

