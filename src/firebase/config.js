import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getMessaging, getToken, isSupported, onMessage } from "firebase/messaging";

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

if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Firestore persistence failed-precondition (multiple tabs open)');
    } else if (err.code === 'unimplemented') {
      console.warn('Firestore persistence unimplemented (browser not supported)');
    }
  });
}

const VAPID_KEY = 'BKWJEPa-4K08Rcrta2QX7iYT1PBpDUlgdsUXRLpBcA6ClzltUlu-yzWm427sezrUXfnI1Wz1ux6zF_ihgZ3Zuco';

let messagingPromise = null;

const getMessagingInstance = async () => {
  if (!messagingPromise) {
    messagingPromise = isSupported().then((supported) => supported ? getMessaging(app) : null);
  }
  return messagingPromise;
};

const isIOSDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const isStandaloneWebApp = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(display-mode: standalone)').matches
    || window.navigator?.standalone === true;
};

const getMessagingServiceWorkerRegistration = async () => {
  if (!('serviceWorker' in navigator)) return undefined;
  const existingRegistration = await navigator.serviceWorker.getRegistration('/');
  if (existingRegistration?.active?.scriptURL?.includes('/firebase-messaging-sw.js')) {
    return existingRegistration;
  }
  return navigator.serviceWorker.register('/firebase-messaging-sw.js', { updateViaCache: 'none' });
};

/**
 * Request notification permission and save token to user profile
 */
export const requestNotificationPermission = async (userId, options = {}) => {
  const { interactive = true } = options;
  try {
    if (!userId || typeof window === 'undefined' || !('Notification' in window)) {
      return { status: 'unsupported', token: null, reason: 'notifications-unavailable' };
    }

    if (isIOSDevice() && !isStandaloneWebApp()) {
      return { status: 'unsupported', token: null, reason: 'ios-home-screen-required' };
    }

    const messaging = await getMessagingInstance();
    if (!messaging) {
      return { status: 'unsupported', token: null, reason: 'firebase-messaging-unsupported' };
    }

    const permission = Notification.permission === 'default' && interactive
      ? await Notification.requestPermission()
      : Notification.permission;

    if (permission === 'default' && !interactive) {
      return { status: 'idle', token: null, reason: 'permission-not-requested' };
    }

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
        return { status: 'granted', token, reason: null };
      }
      return { status: 'error', token: null, reason: 'missing-token' };
    }

    return { status: permission, token: null, reason: permission === 'denied' ? 'permission-denied' : 'permission-not-granted' };
  } catch (error) {
    console.error("Error getting notification token:", error);
    return { status: 'error', token: null, reason: error?.code || error?.message || 'token-error' };
  }
};

export const listenForForegroundNotifications = (handler) => {
  if (typeof window === 'undefined' || !('Notification' in window)) return () => {};
  let unsubscribe = () => {};
  let active = true;

  getMessagingInstance().then((messaging) => {
    if (!active || !messaging) return;
    unsubscribe = onMessage(messaging, (payload) => {
      // Service worker handles system notifications for background/hidden tabs.
      // Here we only call the handler (which shows an in-app toast when visible).
      handler?.(payload);
    });
  });

  return () => {
    active = false;
    unsubscribe();
  };
};

export const ADMIN_EMAIL = "andrewjk82@gmail.com";
export const ADMIN_UID = "MeohP8s0LkPWSTWgEbzc7uaWVEG2";
