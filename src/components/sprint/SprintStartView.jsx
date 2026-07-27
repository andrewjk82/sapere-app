import React from 'react';
import { Crown, Hourglass, Flame } from 'lucide-react';
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
      <div className="tts-instrument tts-instrument--hero tts-reveal">
        <p className="tts-watermark" aria-hidden="true">SPRINT</p>
        <h3 className="tts-hero-title">Times Table Sprint</h3>
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
