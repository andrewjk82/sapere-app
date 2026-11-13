import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Multi-tab-aware persistent cache — replaces the old single-tab
// enableIndexedDbPersistence(), which left every extra tab/PWA instance
// stuck fighting for the IndexedDB lock (failed-precondition) instead of
// sharing the cache. That lock contention was hanging plain getDocs()
// calls (e.g. the leaderboard rank fetch) on the second open.
// A network that blocks Firestore's streaming connection in a way auto-detect does not notice leaves every read
// waiting forever (iPad on Wi-Fi: Daily Practice stuck on "Loading…" until it times out). Long polling is slower but
// goes through. A device that hit such a timeout asks for it (DailyChallenge sets this flag); opening the app with
// ?longpoll=1 sets it by hand, ?longpoll=0 clears it. Read once at start-up, so it takes effect after a reload.
const LONG_POLL_KEY = 'sapere:forceLongPolling';
export const wantsForcedLongPolling = () => {
  try {
    const q = new URLSearchParams(window.location.search).get('longpoll');
    if (q === '1') window.localStorage.setItem(LONG_POLL_KEY, '1');
    if (q === '0') window.localStorage.removeItem(LONG_POLL_KEY);
    return window.localStorage.getItem(LONG_POLL_KEY) === '1';
  } catch { return false; }
};
export const requestForcedLongPolling = () => { try { window.localStorage.setItem(LONG_POLL_KEY, '1'); } catch { /* ignore */ } };
const forceLongPolling = wantsForcedLongPolling();

let firestoreDb;
try {
  firestoreDb = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    // Some networks (school / tutoring-centre Wi-Fi, proxies) block or buffer Firestore's streaming connection.
    // The device then silently runs on its offline cache: a checked homework still shows "Submitted", cheat sheets
    // and curriculum never update (2026-10-12 Thiery's iPad). Auto-detect falls back to long polling only when the
    // normal connection fails to establish; networks where it works are unaffected.
    ...(forceLongPolling ? { experimentalForceLongPolling: true } : { experimentalAutoDetectLongPolling: true }),
  });
} catch (err) {
  console.warn('Firestore persistent cache unavailable, falling back to memory cache:', err?.code || err?.message);
  firestoreDb = getFirestore(app);
}
export const db = firestoreDb;

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
