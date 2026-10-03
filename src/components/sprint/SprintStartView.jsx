import React from 'react';
import { Crown, Hourglass, Flame } from 'lucide-react';
import SprintLeaderboard from './SprintLeaderboard';
import { FlameBuddyAvatar } from '../FlameBuddy';
import '../FlameBuddy.css';
import { formatSprintTime, formatResetCountdown } from '../../utils/sprintWeek';
import { WRONG_ANSWER_PENALTY_MS } from '../../services/timesTableSprintService';
import { SPRINT_QUESTION_COUNT, describeSprint } from '../../utils/sprintQuestions';
import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION } from '../../constants/sprintXp';
import { getSprintType } from '../../utils/sprintTypes';

const SprintStartView = ({
  typeId, year, myBestTimeMs, myRank, attemptsCount, top5, myUserId, msUntilReset, practiceOnly, onStart,
}) => {
  const type = getSprintType(typeId);
  const leader = top5[0];

  return (
    <div className="tts-shell" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="tts-instrument tts-instrument--hero tts-reveal">
        <p className="tts-watermark" aria-hidden="true">{(type?.name || 'Sprint').toUpperCase()}</p>
        <h3 className="tts-hero-title">{type?.name} Sprint</h3>
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

      <div className="tts-card tts-coach">
        <div className="tts-coach-avatar">
          <FlameBuddyAvatar mood="idle" />
        </div>
        <div className="tts-coach-bubble">
          <span className="tts-coach-name">Flame Buddy</span>
          Here's the deal — {SPRINT_QUESTION_COUNT} questions, {describeSprint(typeId, year)}.
          Get one wrong and it just adds {WRONG_ANSWER_PENALTY_MS / 1000} seconds and moves on, no big drama.
          Run it as many times as you like — only your fastest time counts.
          When the week resets, the top three pocket {SPRINT_XP_TIERS.join(' / ')} XP, and everyone who had a go still gets {SPRINT_XP_PARTICIPATION}.
        </div>
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
