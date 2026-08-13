import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import { ProfileProvider } from './context/ProfileContext'
import { ToastProvider } from './context/ToastContext'
import { AdminFeedProvider } from './context/AdminFeedContext'
import { attemptAutoReload } from './utils/crashRecovery'
import './index.css'
import App from './App.jsx'

// ErrorBoundary (components/ErrorBoundary.jsx) only catches errors thrown
// during React's render/commit phase. A known crash signature — a stale
// code-split chunk after a deploy, or Firestore's persistent-cache
// "INTERNAL ASSERTION FAILED" / storage-quota error — can instead surface
// as an event-handler throw or a rejected promise (e.g. deep inside the
// Firestore SDK's async IndexedDB layer, which some Android WebViews /
// Samsung Internet builds are known to be flaky with). Neither of those
// reaches a React ErrorBoundary, so without this the page goes silently,
// permanently blank with no recovery UI at all. Mirror the same
// auto-reload-once handling here so those cases self-heal the same way.
window.addEventListener('error', (event) => {
  attemptAutoReload(event?.error?.message || event?.message);
});
window.addEventListener('unhandledrejection', (event) => {
  attemptAutoReload(event?.reason?.message || event?.reason);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <ToastProvider>
          <AdminFeedProvider>
            <App />
          </AdminFeedProvider>
        </ToastProvider>
      </ProfileProvider>
    </AuthProvider>
  </StrictMode>,
)

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js', { updateViaCache: 'none' })
      .then(registration => registration.update())
      .catch(err => {
        console.log('SW registration failed: ', err);
      });
  });
}
