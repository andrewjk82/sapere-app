import { AlertTriangle, RotateCw } from 'lucide-react';

// Shown when this device's saved homework could not be read. The pad still works, but nothing is saved
// until the read succeeds — saving then would overwrite the real work with this visit's blank notebooks.
const HomeworkStorageWarning = ({ onRetry }) => (
  <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', margin: '0 0 8px', borderRadius: 12, background: '#fff7ed', border: '1px solid #fdba74', color: '#9a3412', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
    <AlertTriangle size={18} style={{ flexShrink: 0 }} />
    <span style={{ flex: 1, minWidth: 0 }}>
      Your saved work on this device couldn&apos;t be opened, so new writing isn&apos;t being saved yet. Tap Try again.
    </span>
    <button type="button" onClick={onRetry} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '7px 11px', borderRadius: 10, border: 0, background: '#ea580c', color: '#fff', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', flexShrink: 0 }}>
      <RotateCw size={14} /> Try again
    </button>
  </div>
);

export default HomeworkStorageWarning;
