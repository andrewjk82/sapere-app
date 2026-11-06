import { useState } from 'react';
import { markWhatsNewSeen } from '../utils/whatsNew';

const heading = { margin: '18px 0 4px', fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' };
const text = { margin: '4px 0', fontSize: '0.92rem', lineHeight: 1.55, color: '#475569' };

const WhatsNewModal = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  const close = () => {
    markWhatsNewSeen();
    setOpen(false);
  };
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="whats-new-title" style={{ position: 'fixed', inset: 0, zIndex: 100500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'rgba(15,23,42,0.55)' }}>
      <div style={{ width: '100%', maxWidth: 480, maxHeight: '88dvh', overflowY: 'auto', boxSizing: 'border-box', padding: 24, borderRadius: 24, background: '#fff', boxShadow: '0 24px 60px rgba(15,23,42,0.25)' }}>
        <h2 id="whats-new-title" style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: '#1e1b4b' }}>What&apos;s new in Daily Practice</h2>

        <h3 style={heading}>No more timer</h3>
        <p style={text}>Take as long as you need on each question.</p>

        <h3 style={heading}>A second chance when you get it wrong</h3>
        <ul style={{ ...text, paddingLeft: 20 }}>
          <li>Correct first try: full points</li>
          <li>Wrong first try: you get a hint, then try again for half points</li>
          <li>Wrong again: you see the step-by-step solution and the answer. Practise it as much as you like. No points for this one, but you&apos;ll know how to do it next time.</li>
        </ul>
        <p style={text}>Hints now appear only after a wrong answer, so give every question your best try first.</p>
        <p style={text}>Questions you get wrong on your first try still go to your Secret Note for review.</p>

        <h3 style={heading}>Extra rounds</h3>
        <p style={text}>Finished your Daily Practice? Keep going! Each extra round earns half XP, and you can do as many as you like. The more you practise, the more you earn.</p>

        <button type="button" onClick={close} style={{ marginTop: 18, width: '100%', padding: 14, border: 'none', borderRadius: 16, background: '#6366f1', color: '#fff', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default WhatsNewModal;
