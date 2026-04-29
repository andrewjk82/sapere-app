import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Camera, Bell, RotateCcw } from 'lucide-react';

const STYLE_OPTIONS = [
  { id: 'avataaars', label: 'Human', icon: Sparkles },
  { id: 'bottts', label: 'Robot', icon: Camera },
  { id: 'pixel-art', label: 'Pixel', icon: Bell },
];

function dicebearUrl(style, seed) {
  const safeSeed = encodeURIComponent(seed || 'sapere');
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${safeSeed}`;
}

const AvatarPickerModal = ({
  open,
  title = 'My Persona',
  subtitle = 'Choose your face',
  initialStyle = 'avataaars',
  initialSeed = '',
  onClose,
  onApply,
}) => {
  const [style, setStyle] = useState(initialStyle);
  const [seed, setSeed] = useState(initialSeed);

  useEffect(() => {
    if (!open) return;
    setStyle(initialStyle || 'avataaars');
    setSeed(initialSeed || '');
  }, [open, initialStyle, initialSeed]);

  const previewUrl = useMemo(() => dicebearUrl(style, seed || 'sapere'), [style, seed]);

  const handleApply = () => {
    if (!onApply) return;
    onApply({
      avatarStyle: style,
      avatarSeed: seed || 'sapere',
      avatarUrl: previewUrl,
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="app-modal" role="dialog" aria-modal="true">
          <motion.div
            className="app-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="app-panel avatar-modal"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ 
              maxWidth: '440px', 
              width: '90%', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              padding: 0
            }}
          >
            {/* Header */}
            <div style={{ padding: '28px 32px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: '#1a1c2c' }}>{title}</h3>
                <p style={{ margin: '4px 0 0', fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>{subtitle}</p>
              </div>
              <button 
                onClick={onClose} 
                style={{ 
                  background: '#f1f5f9', 
                  border: 'none', 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Preview Section */}
              <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ 
                  width: '180px', 
                  height: '180px', 
                  background: '#f8fafc', 
                  borderRadius: '32px', 
                  border: '2px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '10px'
                }}>
                  <img src={previewUrl} alt="Avatar preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <button
                  type="button"
                  onClick={() => setSeed(`${seed || 'sapere'}${Math.floor(Math.random() * 9)}`)}
                  style={{ 
                    position: 'absolute', 
                    bottom: '-8px', 
                    right: 'calc(50% - 90px - 16px)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: '#6366f1',
                    color: 'white',
                    border: '4px solid white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(99,102,241,0.3)'
                  }}
                >
                  <RotateCcw size={20} />
                </button>
              </div>

              {/* Controls Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Select Species</label>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {STYLE_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const active = style === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setStyle(opt.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 18px',
                            borderRadius: '14px',
                            background: active ? '#6366f1' : 'white',
                            color: active ? 'white' : '#475569',
                            border: '1px solid',
                            borderColor: active ? '#6366f1' : '#e2e8f0',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <Icon size={16} />
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Identity Seed</label>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: '#f8fafc', 
                    padding: '0 16px', 
                    borderRadius: '16px', 
                    border: '2px solid #f1f5f9' 
                  }}>
                    <input
                      value={seed}
                      onChange={(e) => setSeed(e.target.value)}
                      placeholder="e.g. UniqueName"
                      type="text"
                      style={{ 
                        flex: 1, 
                        border: 'none', 
                        background: 'transparent', 
                        padding: '14px 0', 
                        fontSize: '0.95rem', 
                        fontWeight: 700, 
                        color: '#1e1b4b',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={handleApply}
                  style={{ 
                    width: '100%', 
                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)', 
                    color: 'white', 
                    padding: '16px', 
                    borderRadius: '16px', 
                    border: 'none', 
                    fontWeight: 900, 
                    fontSize: '1rem', 
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 12px 24px rgba(99,102,241,0.3)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                >
                  Apply persona
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AvatarPickerModal;
