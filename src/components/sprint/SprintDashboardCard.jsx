import React, { useEffect, useState } from 'react';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import { readCachedMyBest, hasSeenSprintIntro } from '../../services/timesTableSprintService';
import { SPRINT_TYPES, sprintBoardId } from '../../utils/sprintTypes';
import './sprint.css';

const liftHover = {
  onMouseEnter: (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; },
  onMouseLeave: (e) => { e.currentTarget.style.transform = ''; },
};

/**
 * Dashboard entry point for the Daily Challenge sprints: this week's personal
 * best on each of the five, and the time left in the week. Styled as the same
 * dark timing instrument as the rest of the feature — deliberately moodier
 * than the bright routine-task cards around it, since this one is the
 * competitive event, not a daily habit.
 *
 * Zero Firestore reads — bests come from the device mirror written after each
 * run, the countdown is local arithmetic (the old live top-5 listener is gone).
 */
const SprintDashboardCard = ({ uid, onClick }) => {
  const weekId = getSprintWeekId();
  const [msLeft, setMsLeft] = useState(() => getMsUntilWeeklyReset());
  const [bests] = useState(() => SPRINT_TYPES.map((t) => ({ type: t, best: readCachedMyBest(sprintBoardId(t.id, weekId), uid) })));
  // Read once on mount: the flag only ever flips seen→unseen by opening the
  // card (TimesTableSprint marks it), so it can't change while this is up.
  const [showNewBadge] = useState(() => !hasSeenSprintIntro(uid));
  const played = bests.filter((b) => b.best).length;

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    // Plain, non-clipping wrapper so the badge can pop outside the corner;
    // the instrument's own overflow:hidden (needed for its line texture)
    // stays scoped to the inner panel instead of clipping the badge too.
    <div style={{ position: 'relative', flex: '0 0 auto', height: 156, minHeight: 156, maxHeight: 156 }}>
      {showNewBadge && <span className="tts-badge-new">NEW</span>}
      <div
        data-press
        {...liftHover}
        onClick={onClick}
        className="tts-instrument tts-instrument--card"
        style={{
          height: '100%',
          boxSizing: 'border-box',
          padding: '14px 20px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
      >
        <p className="tts-watermark" style={{ fontSize: '2.3rem', right: '-4px' }} aria-hidden="true">SPRINT</p>

        <label className="tts-eyebrow" style={{ position: 'relative', color: 'rgba(245,243,255,0.5)', marginBottom: '2px' }}>
          Daily Challenge
        </label>

        <div style={{ position: 'relative', display: 'flex', gap: '6px', marginTop: '4px' }}>
          {bests.map(({ type, best }) => (
            <div key={type.id} title={type.name} style={{ flex: 1, minWidth: 0, textAlign: 'center', borderRadius: '10px', padding: '4px 2px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: type.accent, lineHeight: 1.1 }}>{type.glyph}</div>
              <div className="tts-led" style={{ fontSize: '0.62rem', color: best ? '#f5f3ff' : 'rgba(245,243,255,0.4)' }}>
                {best ? formatSprintTime(Number(best.bestTimeMs)) : '—'}
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '0.78rem', fontWeight: 700, color: 'rgba(245,243,255,0.8)', flexWrap: 'wrap' }}>
          <span>{played}/5 played this week</span>
          <span>Resets in {formatResetCountdown(msLeft)}</span>
        </div>
      </div>
    </div>
  );
};

export default SprintDashboardCard;
