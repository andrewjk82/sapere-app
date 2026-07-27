import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatSprintTime } from '../../utils/sprintWeek';
import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION } from '../../services/timesTableSprintService';

/**
 * Top 5 for the week, plus the viewer's own standing when they are outside it.
 * Rows are keyed by userId so framer-motion animates a podium reshuffle
 * instead of redrawing the list. Each row leads with a lane badge — a real
 * track lane number, the way the finish order is actually reported.
 */
const SprintLeaderboard = ({ top5 = [], myUserId, myRank, myBestTimeMs }) => {
  const inTop5 = top5.some((e) => e.userId === myUserId);

  return (
    <div>
      <div className="tts-board">
        <AnimatePresence initial={false}>
          {top5.map((entry, i) => (
            <motion.div
              key={entry.userId}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className={`tts-row tts-row--${i + 1}${entry.userId === myUserId ? ' tts-row--me' : ''}`}
            >
              <span className={`tts-lane tts-lane--${i + 1}`}>{i + 1}</span>
              {entry.avatarUrl
                ? <img className="tts-row__avatar" src={entry.avatarUrl} alt="" />
                : <span className="tts-row__avatar" />}
              <span className="tts-row__name">{entry.name}</span>
              <span className="tts-row__xp">
                +{SPRINT_XP_TIERS[i] ?? SPRINT_XP_PARTICIPATION} XP
              </span>
              <span className="tts-row__time">{formatSprintTime(entry.bestTimeMs)}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {top5.length === 0 && (
        <p className="tts-empty">No times yet this week. Be the first!</p>
      )}

      {!inTop5 && Number.isFinite(myBestTimeMs) && (
        <>
          <p className="tts-empty" style={{ padding: '10px 0 6px', fontSize: '0.8rem' }}>• • •</p>
          <div className="tts-row tts-row--me">
            <span className="tts-lane">{myRank ?? '–'}</span>
            <span className="tts-row__name">You</span>
            <span className="tts-row__xp">+{SPRINT_XP_PARTICIPATION} XP</span>
            <span className="tts-row__time">{formatSprintTime(myBestTimeMs)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default SprintLeaderboard;
