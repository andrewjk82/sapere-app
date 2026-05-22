import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * CollapsibleSection — an accordion card. Collapsed by default: shows only a
 * title, a one-line summary and an optional status badge. Clicking the header
 * expands the body. Used to tuck away the verbose Challenge-tab config panels.
 */
const CollapsibleSection = ({ title, summary, badge, badgeTone = 'default', defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  const badgeColors = {
    default: { bg: '#eef2ff', fg: '#4338ca' },
    green:   { bg: '#ecfdf5', fg: '#059669' },
    amber:   { bg: '#fffbeb', fg: '#b45309' },
  }[badgeTone] || { bg: '#eef2ff', fg: '#4338ca' };

  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      border: '1px solid rgba(15,23,42,0.07)',
      boxShadow: open ? '0 12px 30px rgba(15,23,42,0.06)' : '0 4px 14px rgba(15,23,42,0.03)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
          padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e1b4b' }}>{title}</div>
          {summary && (
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginTop: '3px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {summary}
            </div>
          )}
        </div>
        {badge && (
          <span style={{
            flexShrink: 0, fontSize: '0.66rem', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '999px', background: badgeColors.bg, color: badgeColors.fg,
          }}>
            {badge}
          </span>
        )}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, color: '#94a3b8', display: 'grid', placeItems: 'center' }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 20px 20px', borderTop: '1px solid #f1f5f9' }}>
              <div style={{ paddingTop: '18px' }}>{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
