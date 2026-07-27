import React from 'react';
import { Timer, Crown, Hourglass } from 'lucide-react';
import SprintLeaderboard from './SprintLeaderboard';
import { formatSprintTime, formatResetCountdown } from '../../utils/sprintWeek';
import {
  SPRINT_QUESTION_COUNT, WRONG_ANSWER_PENALTY_MS, getFactorRangeForYear,
} from '../../services/timesTableSprintService';

const SprintStartView = ({
  year, myBestTimeMs, myRank, attemptsCount, top5, myUserId, msUntilReset, practiceOnly, onStart,
}) => {
  const { min, max } = getFactorRangeForYear(year);
  const leader = top5[0];

  return (
    <div className="tts-shell" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="tts-card tts-hero tts-reveal">
        <div className="tts-hero__icon"><Timer size={140} /></div>
        <label className="tts-eyebrow">Times Table Sprint</label>
        <p className="tts-time-big">
          {practiceOnly
            ? (leader ? formatSprintTime(leader.bestTimeMs) : '--.---')
            : (Number.isFinite(myBestTimeMs) ? formatSprintTime(myBestTimeMs) : '--.---')}
        </p>
        <p style={{ margin: '6px 0 0', fontWeight: 700, fontSize: '0.9rem', opacity: 0.9 }}>
          {practiceOnly
            ? (leader ? `Leading this week: ${leader.name}` : 'No student times yet this week')
            : Number.isFinite(myBestTimeMs)
              ? `Your best this week${myRank ? ` · rank #${myRank}` : ''}`
              : 'No time yet this week'}
        </p>
        <div className="tts-stat-row">
          {!practiceOnly && (
            <div className="tts-stat">
              <span className="tts-stat__label"><Crown size={11} style={{ verticalAlign: '-1px' }} /> Leader</span>
              <span className="tts-stat__value">
                {leader ? formatSprintTime(leader.bestTimeMs) : '—'}
              </span>
            </div>
          )}
          <div className="tts-stat">
            <span className="tts-stat__label"><Hourglass size={11} style={{ verticalAlign: '-1px' }} /> Resets in</span>
            <span className="tts-stat__value">{formatResetCountdown(msUntilReset)}</span>
          </div>
          <div className="tts-stat">
            <span className="tts-stat__label">{practiceOnly ? 'Playing' : 'Your tries'}</span>
            <span className="tts-stat__value">
              {practiceOnly ? `${top5.length ? `${top5.length}+` : '0'}` : (attemptsCount || 0)}
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

      <div className="tts-card">
        <label className="tts-eyebrow">How it works</label>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#475569', fontWeight: 600, lineHeight: 1.9, fontSize: '0.9rem' }}>
          <li>{SPRINT_QUESTION_COUNT} different questions, {min}× to {max}× tables.</li>
          <li>A wrong answer adds {WRONG_ANSWER_PENALTY_MS / 1000} seconds and moves on.</li>
          <li>Play as many times as you like — the fastest time counts.</li>
          <li>XP is paid out when the week resets: 100 / 50 / 20 for the top three, 5 for everyone who plays.</li>
        </ul>
      </div>

      <div className="tts-card">
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
