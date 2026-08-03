import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { X } from 'lucide-react';

const APP_URL = 'https://sapere-app.vercel.app/';
const APP_URL_LABEL = 'sapere-app.vercel.app';

// Student/teacher-facing "share the app" card — a QR code pointing at the
// live Vercel deploy, styled to match the Secret Study look (see
// app-shell.css purple palette) rather than the old Sapere Aude Academia
// poster this replaces.
const ShareAppQrModal = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <div className="app-modal" role="dialog" aria-modal="true" aria-label="Share Secret Study">
        <motion.div
          className="app-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          style={{
            position: 'relative', width: 'min(100%, 380px)', maxHeight: '90vh', overflowY: 'auto',
            background: 'linear-gradient(180deg, #fcfaff 0%, #f3edff 100%)',
            borderRadius: 28, boxShadow: '0 30px 70px rgba(30,27,75,0.35)',
            padding: '32px 28px 28px', textAlign: 'center',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%',
              border: 'none', background: 'rgba(139,92,246,0.12)', color: '#7c3aed',
              display: 'grid', placeItems: 'center', cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>

          <img
            src="/logo.png?v=4"
            alt="Secret Study logo"
            style={{ width: 72, height: 72, borderRadius: 20, boxShadow: '0 12px 24px rgba(124,58,237,0.25)', margin: '0 auto 16px' }}
          />

          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: '#1e1b4b', letterSpacing: '-0.01em' }}>
            Secret Study
          </h2>
          <p style={{ margin: '6px 0 24px', fontSize: '0.9rem', color: '#6d28d9', fontWeight: 600 }}>
            Scan to open on another device
          </p>

          <div style={{
            display: 'inline-flex', padding: 16, borderRadius: 20, background: '#fff',
            boxShadow: '0 12px 30px rgba(99,102,241,0.12)', border: '1px solid #eceaf6',
          }}>
            <QRCodeSVG value={APP_URL} size={200} bgColor="#ffffff" fgColor="#1e1b4b" level="M" />
          </div>

          <div style={{
            marginTop: 20, display: 'inline-flex', padding: '10px 18px', borderRadius: 999,
            background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', color: '#fff',
            fontWeight: 800, fontSize: '0.85rem',
          }}>
            {APP_URL_LABEL}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default ShareAppQrModal;
