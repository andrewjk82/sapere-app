import React from 'react';
import { Trophy } from 'lucide-react';

const ChallengeHistoryCard = ({ stat, onSelect, onReset }) => (
  <div
    onClick={() => onSelect(stat)}
    style={{
      padding: '20px',
      borderRadius: '20px',
      border: '1px solid #f1f5f9',
      background: '#f8fafc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6366f1',
      }}>
        <Trophy size={20} />
      </div>
      <div>
        <div style={{ fontWeight: 800 }}>
          {stat.challengeType === 'calc' ? 'Basic Calculation' : 'Daily Practice'} • {stat.id}
        </div>
        <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <span>Score: {stat.score}/{stat.total}</span>
          {stat.abandoned && (
            <span style={{ fontSize: '0.6rem', fontWeight: 900, padding: '2px 6px', background: '#fee2e2', color: '#ef4444', borderRadius: '4px', letterSpacing: '0.02em' }}>
              ABANDONED
            </span>
          )}
          {!stat.completed && !stat.abandoned && (
            <span style={{ fontSize: '0.6rem', fontWeight: 900, padding: '2px 6px', background: '#fef9c3', color: '#a16207', borderRadius: '4px', letterSpacing: '0.02em' }}>
              IN PROGRESS
            </span>
          )}
        </div>
      </div>
    </div>
    <button
      onClick={(e) => { e.stopPropagation(); onReset(stat); }}
      style={{
        padding: '8px 16px',
        borderRadius: '10px',
        background: '#fff1f2',
        color: '#f43f5e',
        border: 0,
        fontWeight: 700,
        cursor: 'pointer',
      }}
    >
      Reset
    </button>
  </div>
);

export default ChallengeHistoryCard;
