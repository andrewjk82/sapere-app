import React, { useState } from 'react';
import WorkingOutCanvas from '../WorkingOutCanvas';
import { LayoutGrid, AlignJustify } from 'lucide-react';

const CanvasErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.warn('Working out canvas failed to render:', error);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{
        height: '100%',
        minHeight: '400px',
        borderRadius: '24px',
        border: '1px solid #e2e8f0',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '24px',
        textAlign: 'center',
        color: '#64748b',
        fontWeight: 700
      }}>
        <div style={{ color: '#1e293b', fontWeight: 900 }}>Sketch pad unavailable</div>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>The question is still available on the left.</div>
      </div>
    );
  }

  return children;
};

const ChallengeSketchBoard = React.forwardRef(({ 
  placement = 'side', 
  questionId, 
  questionType, 
  isSubmitted,
  showSplitScreen,
  fillAvailableHeight = false,
  scrollProxyHandlers
}, ref) => {
  const [isGraphPaper, setIsGraphPaper] = useState(false);

  if (!showSplitScreen) return null;

  const isTabletPlacement = placement === 'tablet';
  const sideHeight = fillAvailableHeight ? '100%' : 'calc(100vh - 116px)';
  const sideMinHeight = fillAvailableHeight ? 0 : '400px';
  
  return (
    <div style={{
      flex: isTabletPlacement ? 'none' : '1.35 1 640px',
      width: '100%',
      height: isTabletPlacement ? 'clamp(360px, 42vh, 480px)' : sideHeight,
      minHeight: isTabletPlacement ? '360px' : sideMinHeight,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      position: isTabletPlacement || fillAvailableHeight ? 'relative' : 'sticky',
      top: isTabletPlacement || fillAvailableHeight ? 'auto' : '52px',
    }} {...(scrollProxyHandlers || {})}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
        <button
          onClick={() => setIsGraphPaper(v => !v)}
          title={isGraphPaper ? 'Switch to lined paper' : 'Switch to grid paper'}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '5px 12px', borderRadius: '10px', border: '1px solid #e2e8f0',
            background: isGraphPaper ? '#ede9fe' : '#f8fafc',
            color: isGraphPaper ? '#7c3aed' : '#64748b',
            fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
          }}
        >
          {isGraphPaper ? <AlignJustify size={13} /> : <LayoutGrid size={13} />}
          {isGraphPaper ? 'Lined' : 'Grid'}
        </button>
      </div>
      <CanvasErrorBoundary key={questionId}>
        <WorkingOutCanvas
          ref={ref}
          questionType={questionType}
          isSubmitted={isSubmitted}
          isGraph={isGraphPaper}
        />
      </CanvasErrorBoundary>
    </div>
  );
});

ChallengeSketchBoard.displayName = 'ChallengeSketchBoard';

export default ChallengeSketchBoard;
