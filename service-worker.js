self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://lverapizza.github.io/2024/principal.html',
        'https://lverapizza.github.io/2024/index.html',
        'https://lverapizza.github.io/2024/contacto.html',
        'https://lverapizza.github.io/2024/css/styles.css',
        'https://lverapizza.github.io/2024/script.js',
        'https://lverapizza.github.io/2024/splash.js',
        'https://lverapizza.github.io/2024/service-worker.js',
        'https://lverapizza.github.io/2024/logo_vp.png',

        // Agrega otros archivos que necesites en el caché
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
