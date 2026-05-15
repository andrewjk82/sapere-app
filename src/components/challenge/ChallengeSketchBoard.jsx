import React from 'react';
import WorkingOutCanvas from '../WorkingOutCanvas';

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
  showSplitScreen 
}, ref) => {
  if (!showSplitScreen) return null;
  
  const isTabletPlacement = placement === 'tablet';
  
  return (
    <div style={{
      flex: isTabletPlacement ? 'none' : 1,
      width: '100%',
      height: isTabletPlacement ? 'clamp(360px, 42vh, 480px)' : 'calc(100vh - 120px)',
      minHeight: isTabletPlacement ? '360px' : '400px',
      display: 'flex',
      flexDirection: 'column',
      position: isTabletPlacement ? 'relative' : 'sticky',
      top: isTabletPlacement ? 'auto' : '60px',
    }}>
      <CanvasErrorBoundary key={questionId}>
        <WorkingOutCanvas
          ref={ref}
          questionType={questionType}
          isSubmitted={isSubmitted}
        />
      </CanvasErrorBoundary>
    </div>
  );
});

ChallengeSketchBoard.displayName = 'ChallengeSketchBoard';

export default ChallengeSketchBoard;
