import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import SprintLeaderboard from './SprintLeaderboard';
import SplitFlapRank from './SplitFlapRank';
import { formatSprintTime } from '../../utils/sprintWeek';

/**
 * Post-run summary. The headline is the rank movement — that is the part
 * students come back for — so it gets the split-flap board treatment.
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
      <div className="tts-instrument tts-instrument--hero tts-reveal">
        <p className="tts-watermark" aria-hidden="true">FINISH</p>
        <h3 className="tts-hero-title">
          {practiceOnly ? 'Practice run' : improved ? 'New personal best!' : 'Your time'}
        </h3>
        <p className="tts-led tts-led--glow tts-led--xl">{formatSprintTime(timeMs)}</p>

        <div className="tts-console">
          <div className="tts-console__cell">
            <span className="tts-console__label">Mistakes</span>
            <span className="tts-console__value">
              {wrongCount}
              {wrongCount > 0 && <span style={{ fontSize: '0.65rem', opacity: 0.8 }}> (+{wrongCount * 3}s)</span>}
            </span>
          </div>
          {!practiceOnly && (
            <div className="tts-console__cell">
              <span className="tts-console__label">Week's best</span>
              <span className="tts-console__value">{formatSprintTime(bestTimeMs)}</span>
            </div>
          )}
        </div>

        {practiceOnly && (
          <p className="tts-hero-sub" style={{ padding: '12px 0 18px' }}>
            Teacher practice — this time is not saved and does not enter the leaderboard.
          </p>
        )}
        {!practiceOnly && !improved && Number.isFinite(previousBestMs) && (
          <p className="tts-hero-sub" style={{ padding: '12px 0 18px' }}>
            {formatSprintTime(timeMs - previousBestMs)} off your best — try again!
          </p>
        )}
      </div>

      {Number.isFinite(rankAfter) && (
        <div className="tts-card tts-reveal tts-reveal--1">
          <label className="tts-eyebrow">Your rank</label>
          <SplitFlapRank from={hasBoth ? rankBefore : null} to={rankAfter} />
          <div style={{ marginTop: 14 }}>
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
