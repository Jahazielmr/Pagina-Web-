importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/Muro.html',
       '/Perfil.html',
       '/Privados.html',
       '/widget.html',
       '/app.js',
       '/config.js',
       '/common.js',
       '/Metodos.js',
       '/MetodosP.js',
       '/MetodosPr.js',
       '/style.css',
       '/manifest.json',
       '/JAZZPNG.jpg',
       '/JA2.png',
       '/JA.png',
     ]);
   })
 );
});