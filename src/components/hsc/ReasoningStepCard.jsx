import MathView from '../MathView';

// Shared read-only renderer for one reasoning-blueprint step (used by both
// DnaWarmupReviewPage.jsx, for a DNA's generic warmup pool, and
// QuestionPreStepsReviewPage.jsx, for a specific question's pre-steps) — same
// shape either way: { step_id, axis, objective, options, expected_response,
// hints, explanation }.

const AXIS_COLORS = {
  recognition: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  strategy_selection: { bg: '#faf5ff', border: '#e9d5ff', text: '#7c3aed' },
  execution: { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
  verification: { bg: '#fffbeb', border: '#fde68a', text: '#a16207' },
  simplify_and_verify: { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
};
const axisStyle = (axis) => AXIS_COLORS[axis] || { bg: '#f8fafc', border: '#e2e8f0', text: '#64748b' };

const ReasoningStepCard = ({ step }) => {
  const style = axisStyle(step.axis);
  return (
    <div style={{ padding: '16px', borderRadius: '14px', background: '#fff', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#475569', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '2px 9px' }}>
          {step.step_id}
        </span>
        {step.axis && (
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: style.text, background: style.bg, border: `1px solid ${style.border}`, borderRadius: '999px', padding: '2px 9px' }}>
            {step.axis}
          </span>
        )}
      </div>

      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e293b', marginBottom: '10px', lineHeight: 1.5 }}>
        <MathView content={step.objective} inline style={{ display: 'inline' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
        {step.options.map((opt) => {
          const isCorrect = opt.id === step.expected_response;
          return (
            <div
              key={opt.id}
              style={{
                padding: '9px 12px', borderRadius: '10px', fontSize: '0.84rem',
                border: `1.5px solid ${isCorrect ? '#86efac' : '#e2e8f0'}`,
                background: isCorrect ? '#f0fdf4' : '#f8fafc',
                color: isCorrect ? '#166534' : '#475569',
                fontWeight: isCorrect ? 700 : 500,
              }}
            >
              {isCorrect ? '✓ ' : ''}<MathView content={opt.label} inline style={{ display: 'inline' }} />
            </div>
          );
        })}
      </div>

      {!!step.hints?.length && (
        <details style={{ marginBottom: step.explanation ? '8px' : 0 }}>
          <summary style={{ cursor: 'pointer', fontSize: '0.76rem', fontWeight: 700, color: '#7c3aed' }}>
            Hints ({step.hints.length})
          </summary>
          <ul style={{ margin: '6px 0 0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {step.hints.map((h, i) => (
              <li key={i} style={{ fontSize: '0.8rem', color: '#64748b' }}>
                <MathView content={h} inline style={{ display: 'inline' }} />
              </li>
            ))}
          </ul>
        </details>
      )}

      {step.explanation && (
        <div style={{ fontSize: '0.8rem', color: '#166534', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '8px 12px', lineHeight: 1.5 }}>
          <MathView content={step.explanation} inline style={{ display: 'inline' }} />
        </div>
      )}
    </div>
  );
};

export default ReasoningStepCard;
