import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, X } from 'lucide-react';

/**
 * Modal that lets a student report a question issue.
 *
 * Props:
 *  isOpen         — whether the modal is visible
 *  onClose        — called when dismissed
 *  reportMessage  — controlled textarea value
 *  onChange       — (e) => update reportMessage
 *  onSubmit       — async submit handler
 *  isSubmitting   — disable button while in-flight
 */
const ReportModal = ({ isOpen, onClose, reportMessage, onChange, onSubmit, isSubmitting }) => (
  <AnimatePresence>
    {isOpen && (
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 100001,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }}
        />

        {/* Panel */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1,   opacity: 1 }}
          exit={{   scale: 0.9, opacity: 0 }}
          style={{
            position: 'relative', width: '100%', maxWidth: '400px',
            background: 'white', borderRadius: '32px', overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', padding: '32px',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flag size={20} style={{ color: '#ef4444' }} />
              Report Issue
            </h3>
            <button
              onClick={onClose}
              style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}
            >
              <X size={18} />
            </button>
          </div>

          <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.5 }}>
            Found a mistake? Tell us what&apos;s wrong with this question.
          </p>

          <textarea
            value={reportMessage}
            onChange={onChange}
            placeholder="e.g., I got the answer right but it flagged it as wrong."
            style={{
              width: '100%', height: '120px', padding: '16px', borderRadius: '16px',
              border: '2px solid #e2e8f0', outline: 'none', resize: 'none',
              fontSize: '1rem', color: '#1e293b', marginBottom: '24px',
            }}
          />

          <button
            onClick={onSubmit}
            disabled={isSubmitting || !reportMessage.trim()}
            style={{
              width: '100%', padding: '16px', borderRadius: '16px', border: 'none',
              background: '#ef4444', color: 'white', fontWeight: 800, fontSize: '1.1rem',
              cursor: isSubmitting || !reportMessage.trim() ? 'not-allowed' : 'pointer',
              opacity: isSubmitting || !reportMessage.trim() ? 0.5 : 1,
            }}
          >
            {isSubmitting ? 'Submitting…' : 'Submit Report'}
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default ReportModal;
