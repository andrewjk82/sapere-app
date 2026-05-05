import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  messagingSenderId: "183895600316",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9",
  measurementId: "G-Z4WEX8H1K6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const messaging = getMessaging(app);
const VAPID_KEY = 'BKWJEPa-4K08Rcrta2QX7iYT1PBpDUlgdsUXRLpBcA6ClzltUlu-yzWm427sezrUXfnI1Wz1ux6zF_ihgZ3Zuco';

const getMessagingServiceWorkerRegistration = async () => {
  if (!('serviceWorker' in navigator)) return undefined;
  const existingRegistration = await navigator.serviceWorker.getRegistration('/');
  if (existingRegistration?.active?.scriptURL?.includes('/firebase-messaging-sw.js')) {
    return existingRegistration;
  }
  return navigator.serviceWorker.register('/firebase-messaging-sw.js');
};

/**
 * Request notification permission and save token to user profile
 */
export const requestNotificationPermission = async (userId) => {
  try {
    if (!userId || typeof window === 'undefined' || !('Notification' in window)) return null;

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const serviceWorkerRegistration = await getMessagingServiceWorkerRegistration();
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration
      });
      if (token) {
        const { doc, setDoc, arrayUnion, serverTimestamp } = await import("firebase/firestore");
        await setDoc(doc(db, 'users', userId), { 
          fcmToken: token, // Keep for backward compatibility
          fcmTokens: arrayUnion(token), // Support multiple devices
          fcmTokenUpdatedAt: serverTimestamp(),
          notifications: { push: true }
        }, { merge: true });
        return token;
      }
    }
  } catch (error) {
    console.error("Error getting notification token:", error);
  }
  return null;
};

export const listenForForegroundNotifications = (handler) => {
  if (typeof window === 'undefined' || !('Notification' in window)) return () => {};
  return onMessage(messaging, (payload) => {
    handler?.(payload);

    const title = payload.notification?.title || payload.data?.title || 'Sapereaude Academia';
    const body = payload.notification?.body || payload.data?.body || 'You have a new notification.';

    if (Notification.permission === 'granted' && document.visibilityState !== 'visible') {
      new Notification(title, {
        body,
        icon: '/logo.png'
      });
    }
  });
};

export const ADMIN_EMAIL = "andrewjk82@gmail.com";
