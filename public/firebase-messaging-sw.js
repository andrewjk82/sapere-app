// Unified service worker for PWA shell and Firebase Cloud Messaging.
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  messagingSenderId: "183895600316",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || payload.data?.title || 'Sapereaude Academia';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || 'You have a new notification.',
    icon: '/logo.png',
    badge: '/logo.png',
    data: {
      url: payload.fcmOptions?.link || payload.data?.url || '/'
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) {
          client.navigate(targetUrl);
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
