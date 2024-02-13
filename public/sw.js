// Ciclo de vida del SW
// 1. Install
self.addEventListener('install', event => {
    console.log('SW: instalado :)')
    const instalacion = new Promise((resolve, reject)=> {
        // Simular la instalación de caches
        setTimeout(() => {
            console.log('Instalación terminada')
            // para que se actualice y recargue por si sola
            self.skipWaiting()
            resolve()
        }, 1000)
    })
    event.waitUntil(instalacion)
})

// 2. Activación
self.addEventListener('activate', event => {
    console.log('SW: Activado y controlando la app :)')
})

// 3. fetch
self.addEventListener('fetch', event => {
    // console.log('SW: Fetch ', event.request.url)
    // //Aplicar estrategias del cache 
    // if(event.request.url.includes('https://fakestoreapi.com/products/')) {
    //     const resp = new Response(`{"ok": false, "mensaje": "Interceptado por el SW"}`);
    //     event.respondWith(resp)
    // }

})

// 4. sync: Recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('Tenemos conexión: ');
    console.log(event);
    console.log(event.tag);
})

// Push
self.addEventListener('push', event => {
    console.log('Notificación recibida v_v7');
})