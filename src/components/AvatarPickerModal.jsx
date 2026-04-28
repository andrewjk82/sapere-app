import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Camera, Bell } from 'lucide-react';

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
            className="app-panel app-modal__card avatar-modal"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="avatar-modal__header">
              <div>
                <h3 className="avatar-modal__title">{title}</h3>
                <p className="avatar-modal__subtitle">{subtitle}</p>
              </div>
              <button className="avatar-modal__close" onClick={onClose} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="avatar-modal__tabs" aria-label="Persona tabs">
              <div className="avatar-modal__tab is-active" aria-current="page">
                <Sparkles size={18} />
              </div>
              <div className="avatar-modal__tab">
                <Camera size={18} />
              </div>
              <div className="avatar-modal__tab">
                <Bell size={18} />
              </div>
            </div>

            <div className="avatar-modal__content">
              <div className="avatar-modal__preview">
                <div className="avatar-modal__preview-card">
                  <img src={previewUrl} alt="Avatar preview" />
                </div>
                <button
                  className="avatar-modal__shuffle"
                  type="button"
                  onClick={() => setSeed(`${seed || 'sapere'}${Math.floor(Math.random() * 9)}`)}
                  aria-label="Shuffle"
                >
                  ↻
                </button>
              </div>

              <div className="avatar-modal__controls">
                <p className="avatar-modal__section">Select species</p>
                <div className="avatar-modal__species">
                  {STYLE_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = style === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`avatar-modal__chip ${active ? 'is-active' : ''}`}
                        onClick={() => setStyle(opt.id)}
                      >
                        <Icon size={16} />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                <p className="avatar-modal__section" style={{ marginTop: 18 }}>
                  Identity seed
                </p>
                <div className="app-input">
                  <input
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    placeholder="e.g. zama7kt"
                    type="text"
                  />
                </div>

                <button type="button" className="avatar-modal__apply app-button app-button--primary" onClick={handleApply}>
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
