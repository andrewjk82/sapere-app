import { motion, AnimatePresence } from 'framer-motion';
import filmingGuidelinesImg from '../assets/filmingGuidelines.png';

// Shown before a student joins the nightly Zoom study room — filming
// requirements the student must acknowledge. Proceed opens the Zoom link
// (caller's responsibility); Cancel just closes the modal.
const FilmingGuidelinesModal = ({ open, onCancel, onProceed }) => (
  <AnimatePresence>
    {open && (
      <div className="app-modal" role="dialog" aria-modal="true" aria-label="Filming guidelines">
        <motion.div
          className="app-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
        />
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          style={{
            position: 'relative', width: 'min(100%, 640px)', maxHeight: '90vh', display: 'flex', flexDirection: 'column',
            background: '#fff', borderRadius: 28, boxShadow: '0 30px 70px rgba(30,27,75,0.35)', overflow: 'hidden',
          }}
        >
          <div style={{ overflowY: 'auto' }}>
            <img
              src={filmingGuidelinesImg}
              alt="Filming guidelines: show both hands and the laptop screen, place the phone in the lower corner, keep the phone steady, record in a well-lit area."
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>

          <div style={{ display: 'flex', gap: 10, padding: '16px 24px 22px' }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                flex: 1, padding: '13px 16px', borderRadius: 14, border: '1px solid #e2e8f0',
                background: '#f8fafc', color: '#475569', fontWeight: 800, fontSize: '0.88rem', cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onProceed}
              style={{
                flex: 1, padding: '13px 16px', borderRadius: 14, border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #4338ca)', color: '#fff',
                fontWeight: 800, fontSize: '0.88rem', cursor: 'pointer',
                boxShadow: '0 10px 24px rgba(37,99,235,0.35)',
              }}
            >
              Proceed to Zoom
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default FilmingGuidelinesModal;
