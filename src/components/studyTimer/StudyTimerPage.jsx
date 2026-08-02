import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import SubjectStopwatch from './SubjectStopwatch';
import StudyStatsCharts from './StudyStatsCharts';
import StudyTimeLeaderboard from './StudyTimeLeaderboard';

/**
 * Study Timer page: per-subject stopwatch + auto stats on the left,
 * study-time leaderboard (icon + rank only) on the right. See
 * src/services/studyTimeService.js for the low-traffic data model.
 */
const StudyTimerPage = () => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const [isMobile] = useState(window.innerWidth < 768);
  const [refreshEpoch, setRefreshEpoch] = useState(0);

  const subjects = useMemo(() => {
    const assigned = Array.isArray(profile?.assignedCourse)
      ? profile.assignedCourse
      : [profile?.assignedCourse].filter(Boolean);
    const list = assigned.filter(Boolean);
    if (!list.includes('General Study')) list.push('General Study');
    return list;
  }, [profile]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="app-page">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: isMobile ? '1.5rem' : '1.9rem', fontWeight: 900, color: '#1e1b4b' }}>Study Timer</h1>
        <p style={{ margin: '4px 0 0', color: '#64748b', fontWeight: 600, fontSize: '0.85rem' }}>
          Start the clock, pick a subject, and watch your progress add up.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 300px', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <SubjectStopwatch
            uid={user?.uid}
            profile={profile}
            subjects={subjects}
            onFlushed={() => setRefreshEpoch((n) => n + 1)}
          />
          <StudyStatsCharts uid={user?.uid} refreshEpoch={refreshEpoch} />
        </div>
        <StudyTimeLeaderboard uid={user?.uid} profile={profile} refreshEpoch={refreshEpoch} />
      </div>
    </motion.div>
  );
};

export default StudyTimerPage;
