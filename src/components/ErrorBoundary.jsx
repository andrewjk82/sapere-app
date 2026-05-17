import React from 'react';

/**
 * Catches render-time errors in the page subtree so a single component crash
 * shows a friendly recovery screen instead of unmounting the whole app
 * (which would expose the black <body> background).
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('UI crash caught by ErrorBoundary:', error, info?.componentStack || info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const message = String(this.state.error?.message || this.state.error || 'Unknown error');
    return (
      <div style={{
        maxWidth: 520,
        margin: '48px auto',
        padding: '40px 28px',
        textAlign: 'center',
        background: '#ffffff',
        borderRadius: 24,
        border: '1px solid #ece9f6',
        boxShadow: '0 16px 40px rgba(91,33,182,0.08)',
      }}>
        <div style={{ fontSize: '2.6rem', marginBottom: 12 }}>⚠️</div>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e1b4b', margin: '0 0 8px' }}>
          Something went wrong
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 18px' }}>
          This section ran into an error. Your data is safe — please try again.
        </p>
        <pre style={{
          textAlign: 'left',
          fontSize: '0.72rem',
          color: '#b91c1c',
          background: '#fef2f2',
          border: '1px solid #fee2e2',
          borderRadius: 12,
          padding: '12px 14px',
          margin: '0 0 18px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          maxHeight: 160,
          overflow: 'auto',
        }}>{message}</pre>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
            color: '#fff',
            border: 0,
            borderRadius: 14,
            padding: '13px 28px',
            fontWeight: 800,
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
        >
          Reload
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
