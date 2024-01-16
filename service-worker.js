// service-worker.js
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  // Add other files and assets you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all(
      urlsToCache.map(url => {
        return fetch(url)
          .then(response => caches.open(CACHE_NAME).then(cache => cache.put(url, response)))
          .catch(error => console.error('Failed to cache:', url, error));
      })
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Check if the response is valid
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              console.error('Failed to fetch:', event.request.url);
              return fetchResponse;
            }

            // Clone the response before caching it
            const responseToCache = fetchResponse.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return fetchResponse;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
          });
      })
  );
});

