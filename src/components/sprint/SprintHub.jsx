import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SPRINT_TYPES, sprintBoardId } from '../../utils/sprintTypes';
import { readCachedMyBest } from '../../services/timesTableSprintService';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import './sprint.css';

/**
 * Daily Challenge hub: one square card per sprint. Zero Firestore reads —
 * personal bests come from the device mirror written after each run; a
 * sprint's leaderboard listener only attaches once its card is opened.
 */
const SprintHub = ({ uid, onPick, onBack }) => {
  const weekId = useMemo(() => getSprintWeekId(), []);
  const [msLeft, setMsLeft] = useState(() => getMsUntilWeeklyReset());

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="tts-hub">
      <button type="button" className="tts-hub__back" onClick={onBack}>
        <ArrowLeft size={18} /> Back
      </button>
      <div className="tts-hub__head">
        <h2>Daily Challenge</h2>
        <p>Five weekly sprints · resets in {formatResetCountdown(msLeft)}</p>
      </div>
      <div className="tts-hub__grid">
        {SPRINT_TYPES.map((type) => {
          const best = readCachedMyBest(sprintBoardId(type.id, weekId), uid);
          return (
            <button
              key={type.id}
              type="button"
              className="tts-hub-card"
              style={{ '--hub-accent': type.accent }}
              onClick={() => onPick(type.id)}
            >
              <span className="tts-hub-card__glyph" aria-hidden="true">{type.glyph}</span>
              <span className="tts-hub-card__name">{type.name}</span>
              <span className="tts-hub-card__best">
                {best ? `Best ${formatSprintTime(Number(best.bestTimeMs))}` : 'Not played yet'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SprintHub;
