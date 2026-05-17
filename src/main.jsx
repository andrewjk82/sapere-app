import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import { ProfileProvider } from './context/ProfileContext'
import { ToastProvider } from './context/ToastContext'
import { AdminFeedProvider } from './context/AdminFeedContext'
import './index.css'
import App from './App.jsx'

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
