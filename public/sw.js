// Responder con lo que contiene la solicitud
self.addEventListener('fetch', event => {
    // event.respondWith(fetch(event.request))
    console.log(event)
})

// Interceptar la solicitud
self.addEventListener('fetch', event => {
    if(event.request.url.includes('boston1')) {
        event.respondWith(fetch('logo512.png'))
    }
})