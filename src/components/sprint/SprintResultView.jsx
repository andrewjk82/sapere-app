import React from 'react';
import { ArrowUp, ArrowDown, Minus, Zap } from 'lucide-react';
import SprintLeaderboard from './SprintLeaderboard';
import { formatSprintTime } from '../../utils/sprintWeek';

/**
 * Post-run summary. The headline is the rank movement — that is the part
 * students come back for — so it animates in from the previous rank.
 */
const SprintResultView = ({
  timeMs, wrongCount, improved, bestTimeMs, previousBestMs,
  rankBefore, rankAfter, top5, myUserId, practiceOnly, onPlayAgain, onExit,
}) => {
  const hasBoth = Number.isFinite(rankBefore) && Number.isFinite(rankAfter);
  const delta = hasBoth ? rankBefore - rankAfter : 0; // positive = moved up
  const direction = delta > 0 ? 'up' : delta < 0 ? 'down' : 'same';

  return (
    <div className="tts-shell tts-result" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="tts-card tts-hero tts-reveal">
        <div className="tts-hero__icon"><Zap size={130} /></div>
        <label className="tts-eyebrow">
          {practiceOnly ? 'Practice run' : improved ? 'New personal best!' : 'Your time'}
        </label>
        <p className="tts-time-big">{formatSprintTime(timeMs)}</p>
        <div className="tts-stat-row">
          <div className="tts-stat">
            <span className="tts-stat__label">Mistakes</span>
            <span className="tts-stat__value">
              {wrongCount}
              {wrongCount > 0 && (
                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}> (+{wrongCount * 3}s)</span>
              )}
            </span>
          </div>
          {!practiceOnly && (
            <div className="tts-stat">
              <span className="tts-stat__label">Week's best</span>
              <span className="tts-stat__value">{formatSprintTime(bestTimeMs)}</span>
            </div>
          )}
        </div>
        {practiceOnly && (
          <p style={{ margin: '12px 0 0', fontWeight: 700, fontSize: '0.85rem', opacity: 0.9 }}>
            Teacher practice — this time is not saved and does not enter the leaderboard.
          </p>
        )}
        {!practiceOnly && !improved && Number.isFinite(previousBestMs) && (
          <p style={{ margin: '12px 0 0', fontWeight: 700, fontSize: '0.85rem', opacity: 0.9 }}>
            {formatSprintTime(timeMs - previousBestMs)} off your best — try again!
          </p>
        )}
      </div>

      {Number.isFinite(rankAfter) && (
        <div className="tts-card tts-reveal tts-reveal--1">
          <label className="tts-eyebrow">Your rank</label>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            {hasBoth && delta !== 0 && (
              <span className="tts-rank-previous">{rankBefore}</span>
            )}
            <span className="tts-rank-number">#{rankAfter}</span>
          </div>
          <div className="tts-rank-delta-wrap" style={{ marginTop: 12 }}>
            <span className={`tts-rank-delta tts-rank-delta--${direction}`}>
              {direction === 'up' && <><ArrowUp size={18} /> Up {delta} place{delta === 1 ? '' : 's'}</>}
              {direction === 'down' && <><ArrowDown size={18} /> Down {-delta} place{-delta === 1 ? '' : 's'}</>}
              {direction === 'same' && <><Minus size={18} /> Holding your place</>}
            </span>
          </div>
        </div>
      )}

      <div className="tts-card tts-reveal tts-reveal--2">
        <label className="tts-eyebrow">This week's top 5</label>
        <SprintLeaderboard
          top5={top5}
          myUserId={myUserId}
          myRank={rankAfter}
          myBestTimeMs={bestTimeMs}
        />
        <p style={{ margin: '14px 0 0', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
          {practiceOnly
            ? 'Students earn XP from this board when the week ends.'
            : 'XP is awarded when the week ends — keep improving until then.'}
        </p>
      </div>

      <button type="button" className="tts-btn tts-btn--primary" onClick={onPlayAgain}>
        Try again
      </button>
      <button type="button" className="tts-btn tts-btn--ghost" onClick={onExit}>
        Done
      </button>
    </div>
  );
};

export default SprintResultView;
