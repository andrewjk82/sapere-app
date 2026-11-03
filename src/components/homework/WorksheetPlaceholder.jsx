import { Loader2, RotateCw } from 'lucide-react';

const SPIN = { animation: 'spin 0.8s linear infinite' };
const BOX = { height: '100%', display: 'grid', placeItems: 'center', alignContent: 'center', gap: 10, color: '#94a3b8', fontWeight: 600, padding: 24, textAlign: 'center' };

// What the worksheet pane shows when there is no PDF to open: still loading the list, the list failed to load
// (with the reason, so a stuck device can be told apart from a topic that has no worksheet), or truly none.
const WorksheetPlaceholder = ({ status, error, onRetry }) => {
  if (status === 'loading') {
    return <div style={BOX}><Loader2 size={22} style={SPIN} />Loading worksheet…</div>;
  }
  if (status === 'error') {
    const timedOut = error?.message === 'timeout';
    return (
      <div role="alert" style={BOX}>
        <div style={{ color: '#b91c1c', fontWeight: 800 }}>Couldn't load the worksheet</div>
        <div style={{ fontSize: '0.82rem', maxWidth: 300 }}>
          {timedOut ? 'The server did not answer. Check the internet connection, then try again.' : 'Check the internet connection, then try again.'}
        </div>
        <button type="button" onClick={onRetry} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifySelf: 'center', padding: '8px 16px', borderRadius: 10, border: 0, background: '#7c3aed', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>
          <RotateCw size={14} /> Try again
        </button>
        <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Error: {error?.code || error?.message || 'unknown'}</div>
      </div>
    );
  }
  return <div style={BOX}>No worksheet for this topic.</div>;
};

export default WorksheetPlaceholder;
