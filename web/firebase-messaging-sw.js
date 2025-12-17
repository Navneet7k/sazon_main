// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js");

// Initialize Firebase inside the Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyC8XvR1rk4MSkpoUSymHRL2z_RIOA6f7JY",
    authDomain: "zing-kitchen-2.firebaseapp.com",
    projectId: "zing-kitchen-2",
    storageBucket: "zing-kitchen-2.firebasestorage.app",
    messagingSenderId: "208737636428",
    appId: "1:208737636428:web:d53deff2bc3bc98a5d24e9"
    });

// Handle background messages
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icons/Icon-192.png"
  });
});
