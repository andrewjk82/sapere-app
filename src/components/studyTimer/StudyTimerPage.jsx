import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, setDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { useToast } from '../../context/ToastContext';
import { randomSubjectColor } from '../../utils/subjectColors';
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
  const { showToast } = useToast();
  const [isMobile] = useState(window.innerWidth < 768);
  const [refreshEpoch, setRefreshEpoch] = useState(0);

  const subjects = useMemo(() => {
    const assigned = Array.isArray(profile?.assignedCourse)
      ? profile.assignedCourse
      : [profile?.assignedCourse].filter(Boolean);
    const custom = Array.isArray(profile?.customStudySubjects) ? profile.customStudySubjects : [];
    const hidden = new Set(Array.isArray(profile?.hiddenStudySubjects) ? profile.hiddenStudySubjects : []);
    const list = [...new Set([...assigned, ...custom].filter(Boolean))].filter((s) => !hidden.has(s));
    if (!hidden.has('General Study') && !list.includes('General Study')) list.push('General Study');
    // Never end up with zero chips — if the student hid everything, fall back.
    return list.length > 0 ? list : ['General Study'];
  }, [profile]);

  const subjectColors = profile?.studySubjectColors || {};
  const assigningColorRef = useRef(new Set());
  const lastAssignedColorRef = useRef(null);

  const handleSetSubjectColor = async (subjectName, color) => {
    if (!user?.uid) return;
    try {
      await setDoc(doc(db, 'users', user.uid), { studySubjectColors: { [subjectName]: color } }, { merge: true });
    } catch (e) {
      console.warn('[studytime] color save failed:', e?.code || e);
      showToast?.('Could not save that color — try again.', 'error');
    }
  };

  // First time a subject shows up with no saved color, hand it a random one
  // from the palette — a single small merge write, then the live profile
  // listener carries it back down (no local/optimistic state needed).
  useEffect(() => {
    subjects.forEach((s) => {
      if (subjectColors[s] || assigningColorRef.current.has(s)) return;
      assigningColorRef.current.add(s);
      const color = randomSubjectColor(lastAssignedColorRef.current);
      lastAssignedColorRef.current = color;
      handleSetSubjectColor(s, color).finally(() => assigningColorRef.current.delete(s));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects, subjectColors, user?.uid]);

  const handleAddSubject = async (name) => {
    const trimmed = name.trim();
    if (!trimmed || !user?.uid) return;
    if (subjects.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      showToast?.('That subject is already in your list.', 'info');
      return;
    }
    try {
      await setDoc(doc(db, 'users', user.uid), {
        customStudySubjects: arrayUnion(trimmed),
        hiddenStudySubjects: arrayRemove(trimmed), // re-adding a previously-hidden name un-hides it
      }, { merge: true });
    } catch (e) {
      console.warn('[studytime] add subject failed:', e?.code || e);
      showToast?.('Could not add that subject — try again.', 'error');
    }
  };

  const handleRemoveSubject = async (name) => {
    if (!name || !user?.uid) return;
    if (subjects.length <= 1) {
      showToast?.("You need at least one subject — add another before removing this one.", 'info');
      return;
    }
    try {
      await setDoc(doc(db, 'users', user.uid), { hiddenStudySubjects: arrayUnion(name) }, { merge: true });
    } catch (e) {
      console.warn('[studytime] remove subject failed:', e?.code || e);
      showToast?.('Could not remove that subject — try again.', 'error');
    }
  };

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
            subjectColors={subjectColors}
            onSetSubjectColor={handleSetSubjectColor}
            onAddSubject={handleAddSubject}
            onRemoveSubject={handleRemoveSubject}
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
