import { useEffect, useRef } from 'react';
import { Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import MathView from '../MathView';
import WorkedSolutionSteps from './WorkedSolutionSteps';
import { HINT_TRY, answerText, retryHints } from '../../utils/answerAttempts';

const cardStyle = (bg, border) => ({
  marginTop: '12px', marginBottom: '12px', padding: '20px', borderRadius: '20px', background: bg, border: `1.5px solid ${border}`, textAlign: 'left',
});
const titleStyle = (color) => ({
  display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 800, color,
});

const Lines = ({ lines }) => lines.map((line, i) => (
  <MathView key={i} align="left" content={line} style={{ marginTop: '8px', fontSize: '0.95rem', color: '#1e1b4b', lineHeight: 1.6 }} />
));

// What a student sees after a wrong answer: a hint on the second go, the worked solution and answer after that.
const AttemptCoach = ({ attempt, question, lockedParts = {}, isLast, onNext }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [attempt, question?.id]);

  if (attempt === HINT_TRY) {
    return (
      <div ref={ref} style={cardStyle('#fffbeb', '#fde68a')}>
        <div style={titleStyle('#92400e')}><Lightbulb size={20} /> Not quite. Here is a hint</div>
        {retryHints(question, lockedParts).map((hint, i) => (
          <div key={i}>
            {hint.label && <div style={{ marginTop: '10px', fontWeight: 800, color: '#92400e' }}>Part {hint.label}</div>}
            <Lines lines={hint.lines} />
          </div>
        ))}
        <div style={{ marginTop: '10px', fontSize: '0.85rem', fontWeight: 700, color: '#92400e' }}>Try again for half points.</div>
      </div>
    );
  }

  const parts = (question?.subQuestions || [])
    .map((part, i) => ({ part, label: String.fromCharCode(97 + i), key: part.id || i }))
    .filter(({ key }) => lockedParts[key] === undefined);
  const items = parts.length > 0 ? parts : [{ part: question, label: null, key: 'whole' }];

  return (
    <div ref={ref} style={cardStyle('#f5f3ff', '#ddd6fe')}>
      <div style={titleStyle('#5b21b6')}><BookOpen size={20} /> Let&apos;s go through it</div>
      <div style={{ marginTop: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#5b21b6' }}>
        No points this time. Follow the steps, then practise it yourself.
      </div>
      {items.map(({ part, label, key }) => (
        <div key={key} style={{ marginTop: '14px' }}>
          {label && <div style={{ marginBottom: '6px', fontWeight: 800, color: '#5b21b6' }}>Part {label}</div>}
          <WorkedSolutionSteps question={part} compact />
          {answerText(part) !== '' && (
            <div style={{ marginTop: '10px', padding: '10px 14px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', fontWeight: 700, color: '#166534', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
              Answer: <MathView align="left" content={answerText(part)} style={{ display: 'inline' }} />
            </div>
          )}
        </div>
      ))}
      {onNext && <button type="button" onClick={onNext} className="app-button app-button--primary" style={{ marginTop: '16px', width: '100%', padding: '16px', borderRadius: '18px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        {isLast ? 'Finish' : 'Next question'} <ArrowRight size={18} />
      </button>}
    </div>
  );
};

export default AttemptCoach;
