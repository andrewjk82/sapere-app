import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="text-emerald-500" size={24} />,
    error: <XCircle className="text-rose-500" size={24} />,
    warning: <AlertCircle className="text-amber-500" size={24} />,
    info: <Info className="text-blue-500" size={24} />,
  };

  const backgrounds = {
    success: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    error: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
    warning: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    info: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
  };

  const borderColors = {
    success: '#10b981',
    error: '#f43f5e',
    warning: '#f59e0b',
    info: '#3b82f6',
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 9999, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        pointerEvents: 'none' 
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        style={{
          background: 'white',
          padding: '24px 40px',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          pointerEvents: 'auto',
          borderBottom: `4px solid ${borderColors[type]}`,
          maxWidth: '90vw'
        }}
      >
        <div style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '14px', 
          background: backgrounds[type], 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {icons[type]}
        </div>
        <div>
          <div style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            color: '#94a3b8', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            marginBottom: '2px'
          }}>
            {type === 'success' ? 'Great News!' : type === 'error' ? 'Something went wrong' : 'Notification'}
          </div>
          <div style={{ 
            fontSize: '1.1rem', 
            fontWeight: 800, 
            color: '#1e1b4b' 
          }}>
            {message}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Toast;
