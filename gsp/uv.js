importScripts('https://codingcopyandpaste.mywire.org/gps//uv/uv.bundle.js');
importScripts('https://codingcopyandpaste.mywire.org/gps//uv/uv.config.js');
importScripts("https://codingcopyandpaste.mywire.org/gps//uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
