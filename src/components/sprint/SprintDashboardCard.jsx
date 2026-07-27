import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import {
  subscribeSprintMeta, readCachedSprintMeta, readCachedMyBest, hasSeenSprintIntro,
} from '../../services/timesTableSprintService';
import './sprint.css';

const liftHover = {
  onMouseEnter: (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; },
  onMouseLeave: (e) => { e.currentTarget.style.transform = ''; },
};

/**
 * Dashboard entry point for the weekly sprint: the time to beat and how long
 * is left to beat it. Styled as the same dark timing instrument as the rest
 * of the feature — deliberately moodier than the bright routine-task cards
 * around it, since this one is the competitive event, not a daily habit.
 *
 * Cost is one realtime listener on `timestable_sprint_meta/{weekId}` — a
 * single small doc that only changes when the top 5 changes. The student's
 * own best comes from the local mirror written by their last run, and the
 * countdown is local arithmetic, so neither adds a read.
 */
const SprintDashboardCard = ({ uid, onClick }) => {
  const weekId = getSprintWeekId();
  const [meta, setMeta] = useState(() => readCachedSprintMeta(weekId) || { top5: [] });
  const [msLeft, setMsLeft] = useState(() => getMsUntilWeeklyReset());
  const [myBest] = useState(() => readCachedMyBest(weekId, uid));
  // Read once on mount: the flag only ever flips seen→unseen by opening the
  // card (TimesTableSprint marks it), so it can't change while this is up.
  const [showNewBadge] = useState(() => !hasSeenSprintIntro(uid));

  useEffect(() => subscribeSprintMeta(weekId, setMeta), [weekId]);

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  const leader = meta?.top5?.[0];
  const iAmLeader = leader && leader.userId === uid;

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
          Times Table Sprint
        </label>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <Crown size={16} style={{ flexShrink: 0, alignSelf: 'center', color: 'var(--spr-lime)' }} />
          <span className="tts-led tts-led--glow" style={{ fontSize: '1.65rem' }}>
            {leader ? formatSprintTime(leader.bestTimeMs) : '--.---'}
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(245,243,255,0.75)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {leader ? (iAmLeader ? "that's you!" : leader.name) : 'no times yet'}
          </span>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '0.78rem', fontWeight: 700, color: 'rgba(245,243,255,0.8)', flexWrap: 'wrap' }}>
          <span>Resets in {formatResetCountdown(msLeft)}</span>
          {myBest && (
            <span className="tts-led" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '2px 10px', fontSize: '0.78rem', color: '#f5f3ff' }}>
              You {formatSprintTime(Number(myBest.bestTimeMs))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SprintDashboardCard;
