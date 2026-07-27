import React, { useEffect, useState } from 'react';
import { Timer, Crown } from 'lucide-react';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import {
  subscribeSprintMeta, readCachedSprintMeta, readCachedMyBest,
} from '../../services/timesTableSprintService';

const liftHover = {
  onMouseEnter: (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; },
  onMouseLeave: (e) => { e.currentTarget.style.transform = ''; },
};

/**
 * Dashboard entry point for the weekly sprint: the time to beat and how long
 * is left to beat it.
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

  useEffect(() => subscribeSprintMeta(weekId, setMeta), [weekId]);

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  const leader = meta?.top5?.[0];
  const iAmLeader = leader && leader.userId === uid;

  return (
    <div
      data-press
      {...liftHover}
      onClick={onClick}
      style={{
        flex: '0 0 auto',
        height: 156,
        minHeight: 156,
        maxHeight: 156,
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        borderRadius: '28px',
        padding: '16px 24px',
        color: 'white',
        boxShadow: '0 15px 35px rgba(239,68,68,0.25)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.12 }}>
        <Timer size={120} />
      </div>

      <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
        Times Table Sprint
      </label>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <Crown size={18} style={{ flexShrink: 0, alignSelf: 'center' }} />
        <h4 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
          {leader ? formatSprintTime(leader.bestTimeMs) : '--.---'}
        </h4>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {leader ? (iAmLeader ? "that's you!" : leader.name) : 'no times yet'}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', flexWrap: 'wrap' }}>
        <span>Resets in {formatResetCountdown(msLeft)}</span>
        {myBest && (
          <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '999px', padding: '2px 10px', fontVariantNumeric: 'tabular-nums' }}>
            You {formatSprintTime(Number(myBest.bestTimeMs))}
          </span>
        )}
      </div>
    </div>
  );
};

export default SprintDashboardCard;
