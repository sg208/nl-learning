(function () {
  if (!('serviceWorker' in navigator)) return;

  var isLocal =
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    location.hostname === '[::1]';

  var clearSiteCaches = function () {
    if (!('caches' in window)) return Promise.resolve();
    return caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          return caches.delete(key);
        }),
      );
    });
  };

  var unregisterAll = function () {
    return navigator.serviceWorker.getRegistrations().then(function (registrations) {
      return Promise.all(
        registrations.map(function (registration) {
          return registration.unregister();
        }),
      );
    });
  };

  window.addEventListener('load', function () {
    if (isLocal) {
      Promise.all([unregisterAll(), clearSiteCaches()]).catch(function () {});
      return;
    }

    navigator.serviceWorker.register('/sw.js?v=5').catch(function () {});
  });
})();
