import React from 'react';

/**
 * Catches render-time errors in the page subtree so a single component crash
 * shows a friendly recovery screen instead of unmounting the whole app
 * (which would expose the black <body> background).
 */
// 배포 후 stale code-split 청크 로드 실패 메시지 패턴.
const isChunkLoadError = (msg) =>
  /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed|dynamically imported module|unable to preload|chunkloaderror|loading chunk .* failed/i
    .test(String(msg || ''));

const RELOAD_KEY = 'sapere:eb-chunk-reload';

// 60초 내 이미 자동 리로드했으면 다시 하지 않음(무한 루프 방지).
// 리로드 후에도 청크가 또 실패하면 false → 사용자에게 Reload 버튼 화면을 보여줌.
const canAutoReload = () => {
  try {
    return Date.now() - Number(sessionStorage.getItem(RELOAD_KEY) || 0) > 60_000;
  } catch {
    return false;
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, recovering: false };
  }

  static getDerivedStateFromError(error) {
    const msg = String(error?.message || error || '');
    // 청크 에러 + 아직 자동 리로드 여력이 있을 때만 "업데이트 중" 화면.
    // 그 외(또는 리로드 후 재실패)는 일반 에러 화면(Reload 버튼 포함).
    return { hasError: true, error, recovering: isChunkLoadError(msg) && canAutoReload() };
  }

  componentDidCatch(error, info) {
    console.error('UI crash caught by ErrorBoundary:', error, info?.componentStack || info);

    // 새 배포로 청크 해시가 바뀌어 옛 빌드가 모듈을 못 받는 경우 → 1회 자동 리로드.
    const msg = String(error?.message || error || '');
    if (!isChunkLoadError(msg) || !canAutoReload()) return;
    try {
      sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
      const sep = window.location.search ? '&' : '?';
      window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
    } catch { /* sessionStorage unavailable — fall back to manual Reload */ }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    // 청크 로드 실패 → 자동 리로드 중. 에러 대신 부드러운 안내 화면.
    if (this.state.recovering) {
      return (
        <div style={{
          maxWidth: 520, margin: '48px auto', padding: '40px 28px', textAlign: 'center',
          background: '#ffffff', borderRadius: 24, border: '1px solid #ece9f6',
          boxShadow: '0 16px 40px rgba(91,33,182,0.08)',
        }}>
          <div style={{ fontSize: '2.4rem', marginBottom: 12 }}>✨</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e1b4b', margin: '0 0 8px' }}>
            Updating to the latest version…
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
            One moment — refreshing now.
          </p>
        </div>
      );
    }

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
          onClick={() => {
            // Hard-navigate with cache-bust so mobile browsers fetch fresh index.html
            const sep = window.location.search ? '&' : '?';
            window.location.replace(window.location.href + sep + `_cb=${Date.now()}`);
          }}
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
