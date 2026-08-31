// Minimal service worker — exists only so Chromium (Edge/Chrome) treats
// this as an installable/pinnable app. It doesn't cache anything, so the
// app always loads fresh and always talks to Dropbox live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // no-op, network passthrough
