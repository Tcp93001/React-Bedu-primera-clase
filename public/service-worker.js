self.addEventListener('push', event => {
  console.log('[Servive Worker] Push Received')
  console.log(`[Service Worker] Push had this data: "${event.stopImmediatePropagation.text()}"`)

  const title = 'Tarea agregada';
  const options = {
    body: event.data.text(),
  }

  event.waitUntil(self.registration.showNotification(title, options));
})