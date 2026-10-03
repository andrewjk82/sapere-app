import React from 'react';
import { Crown, Hourglass, Flame } from 'lucide-react';
import SprintLeaderboard from './SprintLeaderboard';
import { formatSprintTime, formatResetCountdown } from '../../utils/sprintWeek';
import { getSprintType } from '../../utils/sprintTypes';

const SprintStartView = ({
  typeId, myBestTimeMs, myRank, attemptsCount, top5, myUserId, msUntilReset, practiceOnly, onStart,
}) => {
  const type = getSprintType(typeId);
  const leader = top5[0];

  return (
    <div className="tts-shell tts-start" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="tts-instrument tts-instrument--hero tts-reveal">
        <div className="tts-hero-heading">
          <div>
            <p className="tts-hero-kicker">Weekly sprint</p>
            <h3 className="tts-hero-title">{type?.name} Sprint</h3>
          </div>
          {!practiceOnly && Number.isFinite(myBestTimeMs) && (
            <span className="tts-best-badge">Personal best</span>
          )}
          {practiceOnly && leader && <span className="tts-best-badge">Weekly leader</span>}
        </div>
        <p className="tts-led tts-led--glow tts-led--xl">
          {practiceOnly
            ? (leader ? formatSprintTime(leader.bestTimeMs) : '--.---')
            : (Number.isFinite(myBestTimeMs) ? formatSprintTime(myBestTimeMs) : '--.---')}
        </p>
        <p className="tts-hero-sub">
          {practiceOnly
            ? (leader ? `Leading this week: ${leader.name}` : 'No student times yet this week')
            : Number.isFinite(myBestTimeMs)
              ? `Your best this week${myRank ? ` · lane #${myRank}` : ''}`
              : 'No time yet this week'}
        </p>

        <div className="tts-console">
          {!practiceOnly && (
            <div className="tts-console__cell">
              <span className="tts-console__label"><Crown size={11} /> Leader</span>
              <span className="tts-console__value">{leader ? formatSprintTime(leader.bestTimeMs) : '—'}</span>
            </div>
          )}
          <div className="tts-console__cell">
            <span className="tts-console__label"><Hourglass size={11} /> Resets in</span>
            <span className="tts-console__value">{formatResetCountdown(msUntilReset)}</span>
          </div>
          <div className="tts-console__cell">
            <span className="tts-console__label"><Flame size={11} /> {practiceOnly ? 'Playing' : 'Your tries'}</span>
            <span className="tts-console__value">
              {practiceOnly ? (top5.length ? `${top5.length}+` : '0') : (attemptsCount || 0)}
            </span>
          </div>
        </div>
      </div>

      {practiceOnly && (
        <div className="tts-card" style={{ padding: '14px 20px', background: '#eef2ff', border: '1px solid #c7d2fe' }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#4338ca' }}>
            Teacher view — you can play to try it out, but your times are not saved
            and never appear on the students' leaderboard.
          </p>
        </div>
      )}

      <button type="button" className="tts-btn tts-btn--primary" onClick={onStart}>
        Start sprint
      </button>

      <div className="tts-card tts-start__board">
        <label className="tts-eyebrow">This week's top 5</label>
        <SprintLeaderboard
          top5={top5}
          myUserId={myUserId}
          myRank={myRank}
          myBestTimeMs={myBestTimeMs}
        />
      </div>
    </div>
  );
};

export default SprintStartView;
