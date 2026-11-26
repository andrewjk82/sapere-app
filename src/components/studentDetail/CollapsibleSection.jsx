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
    default: { bg: '#ece5fb', fg: '#3b2a78' },
    green:   { bg: '#d8f1de', fg: '#1f6b43' },
    amber:   { bg: '#ffe9a6', fg: '#7a5300' },
  }[badgeTone] || { bg: '#ece5fb', fg: '#3b2a78' };

  return (
    <div className="sd-acc">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="sd-acc-head"
        aria-expanded={open}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="sd-acc-title">{title}</div>
          {summary && (
            <div className="sd-acc-sum">
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
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, color: '#7a6a64', display: 'grid', placeItems: 'center' }}>
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
            <div className="sd-acc-body">
              <div style={{ paddingTop: '18px' }}>{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
