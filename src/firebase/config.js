import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  // ... (keep existing)
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

/**
 * Request notification permission and save token to user profile
 */
export const requestNotificationPermission = async (userId) => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BMD-zG2M6m9-1rYx1v8W-m7_u6vH1g_Xz9fG7_hYh8' // This is a placeholder, you'll need your real VAPID key from Firebase Console
      });
      if (token) {
        const { doc, updateDoc } = await import("firebase/firestore");
        await updateDoc(doc(db, 'users', userId), { fcmToken: token });
        return token;
      }
    }
  } catch (error) {
    console.error("Error getting notification token:", error);
  }
  return null;
};

export const ADMIN_EMAIL = "andrewjk82@gmail.com";
