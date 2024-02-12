if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    // .then(reg => console.log('Service worker: Registro :)'))
    // .catch(err => console.log('Service worker: Error registro'))
    
    // .then(reg => {
    //     setTimeout(() => {
    //         reg.sync.register('Enviar-fotos')
    //         console.log('Se enviaron fotos al server')
    //     }, 3000);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    
    .then(reg => {
        Notification.requestPermission().then(permission => {
            if (permission == 'granted') {
                reg.showNotification('Hola desde SW')
            }
        })
    })
    .catch(err => {
        console.log(err);
    })
}
// fetch('https://fakestoreapi.com/products/1')
// .then(res => res.json())
// .then(console.log)