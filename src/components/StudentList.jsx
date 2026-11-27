import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Mail, BookOpen, AlertCircle, CheckCircle, Trophy, RefreshCw, UserPlus, BellRing, RotateCcw } from 'lucide-react';
import { studentService } from '../services/studentService';
import { db, requestForcedLongPolling, wantsForcedLongPolling } from '../firebase/config';
import { collection, doc, getDoc, getDocs, setDoc, writeBatch } from 'firebase/firestore';
import { useAdminFeed } from '../context/AdminFeedContext';
import useLiveDoc from '../hooks/useLiveDoc';
import AvatarPickerModal from './AvatarPickerModal';
import Face from './hero/Face';
import StudentProfileModal from './StudentProfileModal';

const StudentList = ({ students, onAddStudent, onRefreshStudents, onSelectStudent }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSendingReminders, setIsSendingReminders] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileStudent, setProfileStudent] = useState(null);
  const { pendingGrading } = useAdminFeed();

  const [isResettingAllXP, setIsResettingAllXP] = useState(false);

  const handleResetAllXP = async () => {
    if (!confirm('⚠️ Reset ALL students\' XP to 0?\n\nThis cannot be undone. Are you absolutely sure?')) return;
    if (!confirm('Final confirmation: this will set every student\'s totalXP to 0 on both the student doc and the leaderboard.\n\nSecret Note questions saved before this reset will no longer award XP.')) return;
    setIsResettingAllXP(true);
    try {
      // Cutoff: Secret Notes added at-or-before this timestamp no longer award XP
      // (students can still review them — they just don't farm free points after a season reset).
      const secretNoteXpCutoff = Date.now();

      // Process in batches of 500 (Firestore writeBatch limit)
      const resetCollection = async (colId) => {
        const snap = await getDocs(collection(db, colId));
        const chunks = [];
        let batch = writeBatch(db);
        let count = 0;
        snap.forEach((d) => {
          batch.set(
            doc(db, colId, d.id),
            { totalXP: 0, challengesCompleted: 0, secretNoteXpCutoff },
            { merge: true },
          );
          count++;
          if (count === 499) { chunks.push(batch); batch = writeBatch(db); count = 0; }
        });
        if (count > 0) chunks.push(batch);
        await Promise.all(chunks.map(b => b.commit()));
      };
      await resetCollection('students');
      await resetCollection('users');
      // Reset leaderboard too
      const lbSnap = await getDocs(collection(db, 'leaderboard'));
      const chunks = [];
      let batch = writeBatch(db);
      let count = 0;
      lbSnap.forEach((d) => {
        batch.set(doc(db, 'leaderboard', d.id), { totalXP: 0 }, { merge: true });
        count++;
        if (count === 499) { chunks.push(batch); batch = writeBatch(db); count = 0; }
      });
      if (count > 0) chunks.push(batch);
      await Promise.all(chunks.map(b => b.commit()));

      // Global stamp so any client can fall back if a user doc is stale/missing the field.
      // Also used by recalculateStudentTotals to ignore pre-season daily_stats / calc_stats.
      await setDoc(
        doc(db, 'system_config', 'xpReset'),
        {
          secretNoteXpCutoff,
          seasonStartDateKey: new Date(secretNoteXpCutoff).toLocaleDateString('en-CA', {
            timeZone: 'Australia/Sydney',
          }),
          resetAt: new Date().toISOString(),
          note: 'Bulk XP reset — pre-cutoff Secret Notes and challenge stats must not re-inflate totalXP',
        },
        { merge: true },
      );

      alert('✅ All students\' XP has been reset to 0.\n\nPre-reset Secret Notes will no longer award XP.');
      onRefreshStudents?.();
    } catch (err) {
      alert('Failed to reset XP: ' + err.message);
    } finally {
      setIsResettingAllXP(false);
    }
  };

  const todayStr = new Date().toLocaleDateString('en-CA'); // Local YYYY-MM-DD, avoids UTC timezone shift

  // Mon→Sun date strings for the current week (local, YYYY-MM-DD).
  const weekDates = useMemo(() => {
    const now = new Date();
    const dow = now.getDay(); // 0 = Sun
    const mondayOffset = dow === 0 ? -6 : 1 - dow;
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + mondayOffset + i);
      dates.push(d.toLocaleDateString('en-CA'));
    }
    return dates;
  }, [todayStr]);



  // Today's completion: live view of the one admin_daily_summary doc (1 read per student completion while this
  // screen is up). It used to be a getDoc re-run at most every 5 minutes, which on an iPad served the on-device
  // copy for minutes after a student had finished.
  const todaySummary = useLiveDoc(['admin_daily_summary', todayStr]);
  // { studentId: 'pending' | 'done' | 'ended' }
  const completionStates = useMemo(() => {
    if (!students || students.length === 0 || todaySummary.data === undefined) return {};
    const summary = todaySummary.data?.students || {};
    const next = {};
    students.forEach((student) => {
      const item = summary[student.id];
      if (!item) { next[student.id] = 'pending'; return; }
      const calcEnabled = student.calculationEnabled !== false;
      const dailyDone = item.dailyDone === true;
      const calcDone = item.calcDone === true;
      const dailyEnded = item.dailyEnded === true || item.dailyStatus === 'ended';
      const calcEnded = item.calcEnded === true || item.calcStatus === 'ended';
      const allRequiredDone = dailyDone && (!calcEnabled || calcDone);
      const anyEnded = dailyEnded || (calcEnabled && calcEnded);
      next[student.id] = allRequiredDone ? 'done' : (anyEnded ? 'ended' : 'pending');
    });
    return next;
  }, [students, todaySummary.data]);

  // REVIEW badge from the shared pending-grading listener (AdminFeedContext) —
  // replaces one grading_queue query per student on every visit to this tab.
  const reviewPendingStates = useMemo(() => {
    const pending = {};
    pendingGrading.forEach((item) => { if (item.userId) pending[item.userId] = true; });
    return pending;
  }, [pendingGrading]);

  // Weekly activity — how many days this week each student did a challenge. Past days are read once
  // (they no longer change); today comes from the live summary above.
  const [pastWeekSummaries, setPastWeekSummaries] = useState([]);
  React.useEffect(() => {
    let cancelled = false;
    const past = weekDates.filter((d) => d < todayStr);
    Promise.all(past.map((d) => getDoc(doc(db, 'admin_daily_summary', d)).catch(() => null))).then((snaps) => {
      if (!cancelled) setPastWeekSummaries(snaps.map((snap) => (snap?.exists() ? snap.data().students || {} : {})));
    });
    return () => { cancelled = true; };
  }, [weekDates, todayStr]);
  // { studentId: number of days practised this week }
  const weeklyActivity = useMemo(() => {
    if (!students || students.length === 0) return {};
    const days = [...pastWeekSummaries, todaySummary.data?.students || {}];
    const counts = {};
    students.forEach((s) => {
      counts[s.id] = days.filter((summary) => {
        const item = summary[s.id];
        return item && (item.dailyDone || item.calcDone || item.dailyEnded || item.calcEnded);
      }).length;
    });
    return counts;
  }, [students, pastWeekSummaries, todaySummary.data]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefreshStudents(false, true);
    } catch (err) {
      console.error('Refresh failed:', err);
      // Installed app (no address bar): switch this device to the slower but sturdier connection and reload.
      if (!wantsForcedLongPolling() && window.confirm('Sync failed — this network may be blocking the data connection.\n\nSwitch to the compatibility connection and reload?')) {
        requestForcedLongPolling();
        window.location.reload();
        return;
      }
      window.alert('Sync failed — the student list could not be fully loaded. Check the connection and try again.');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleRemindInactive = async () => {
    // Students who haven't completed today's challenge
    const inactive = students.filter((s) => {
      const state = completionStates[s.id] || 'pending';
      return state === 'pending';
    });
    if (inactive.length === 0) {
      alert("All students have completed today's challenge! 🎉");
      return;
    }
    if (!window.confirm(`Send a reminder to ${inactive.length} student${inactive.length > 1 ? 's' : ''} who haven't done today's challenge?`)) return;

    setIsSendingReminders(true);
    let sent = 0;
    let failed = 0;
    await Promise.allSettled(
      inactive.map(async (student) => {
        try {
          const res = await fetch('/api/send-notif', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              studentId: student.id,
              email: student.email || '',
              subject: "Don't forget your daily challenge! 🔥",
              text: `Hi ${student.name || 'there'},\n\nYou haven't done today's challenge yet. Log in to Secret Study and keep your streak going!\n\nYour teacher`,
              html: `<p>Hi <strong>${student.name || 'there'}</strong>,</p><p>You haven't done today's challenge yet. Log in to <strong>Secret Study</strong> and keep your streak going! 🔥</p><p>Your teacher</p>`,
              metadata: { type: 'inactivity_reminder' },
            }),
          });
          if (res.ok) sent++; else failed++;
        } catch {
          failed++;
        }
      })
    );
    setIsSendingReminders(false);
    alert(`Reminders sent: ${sent}${failed > 0 ? ` (${failed} failed)` : ''}`);
  };

  
  const filteredStudents = students.filter(s => {
    const nameMatch = (s.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const subjectMatch = (s.subject || '').toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || subjectMatch;
  });

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Students</h2>
          {todaySummary.status === 'offline' && (
            <span role="status" style={{ marginLeft: 10, padding: '3px 10px', borderRadius: 999, background: '#fef3c7', color: '#92400e', fontSize: '0.75rem', fontWeight: 800 }}>
              Offline – showing saved data
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <button
            onClick={handleResetAllXP}
            disabled={isResettingAllXP}
            className="app-button app-button--secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', borderColor: '#fecaca', background: '#fff1f2' }}
            title="Reset ALL students' XP to 0"
          >
            <RotateCcw size={16} />
            {isResettingAllXP ? 'Resetting...' : 'Reset All XP'}
          </button>
          <button
            onClick={handleRemindInactive}
            disabled={isSendingReminders || Object.keys(completionStates).length === 0}
            className="app-button app-button--secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            title="Send reminder to students who haven't done any challenges this week"
          >
            <BellRing size={18} />
            {isSendingReminders ? 'Sending...' : 'Remind Inactive'}
          </button>
          <button
            onClick={handleManualRefresh}
            disabled={isRefreshing}
            className="app-button app-button--primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
            {isRefreshing ? 'Syncing...' : 'Sync Students'}
          </button>
          <button onClick={onAddStudent} className="app-button app-button--primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserPlus size={18} />
            Add Student
          </button>
        </div>
      </div>

      <div className="app-page__actions">
        <div className="app-input">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search by name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="app-button app-button--secondary">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="student-list-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => {
            const isMenuOpen = activeMenuId === student.id;
            const isActive = (student.status || 'Active') === 'Active';
            // Normalise the year label — some records store just "9".
            const rawLevel = String(student.level || '').trim();
            const yearLabel = rawLevel
              ? (/^\d+$/.test(rawLevel) ? `Year ${rawLevel}` : rawLevel)
              : '';
            const schoolLabel = student.school || student.subject || '';
            const metaLine = [yearLabel, schoolLabel].filter(Boolean).join(' · ');

            const todayState = completionStates[student.id] || 'pending';
            const today = todayState === 'done'
              ? { color: '#22c55e', label: 'Completed' }
              : todayState === 'ended'
                ? { color: '#f97316', label: 'Ended early' }
                : { color: '#cbd5e1', label: 'Not started' };
            const weekCount = Math.min(7, weeklyActivity[student.id] || 0);
            const xpLabel = (student.totalXP || 0).toLocaleString();

            const tileStyle = { flex: '1 1 0', minWidth: 0, background: '#f8fafc', borderRadius: '13px', padding: '10px 11px' };
            const tileLabelStyle = { fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#94a3b8' };

            return (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -2 }}
                onClick={() => onSelectStudent(student.id)}
                className="app-panel student-card"
                style={{
                  position: 'relative',
                  padding: '18px 20px',
                  borderRadius: '22px',
                  background: todayState === 'done'
                    ? '#f0fdf4'
                    : todayState === 'ended'
                      ? '#fefce8'
                      : '#fff5f5',
                  border: `1px solid ${todayState === 'done' ? '#bbf7d0' : todayState === 'ended' ? '#fde68a' : '#fecaca'}`,
                  boxShadow: '0 4px 18px rgba(15,23,42,0.04)',
                  cursor: 'pointer',
                }}
              >
                {/* Top — avatar, name, meta, menu */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '58px', height: '58px', borderRadius: '15px',
                      overflow: 'hidden', background: '#f8fafc',
                      border: '1px solid rgba(15,23,42,0.05)', flexShrink: 0,
                    }}
                  >
                    <Face photo={student.dreamImageUrl} hero={student.avatar} label={student.name} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>{student.name}</h3>
                      {reviewPendingStates[student.id] === true && (
                        <span title="A manual review is waiting" style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
                          padding: '3px 9px', borderRadius: '999px', background: '#fff1f2', color: '#e11d48',
                        }}>
                          <AlertCircle size={10} /> Review
                        </span>
                      )}
                    </div>
                    {metaLine && (
                      <p style={{ margin: '5px 0 0', fontSize: '0.83rem', fontWeight: 600, color: '#94a3b8' }}>
                        {metaLine}
                      </p>
                    )}
                  </div>

                  <div style={{ position: 'relative' }}>
                    <button
                      className="app-icon-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(activeMenuId === student.id ? null : student.id);
                      }}
                      style={{ padding: '8px', borderRadius: '12px' }}
                    >
                      <MoreVertical size={20} />
                    </button>

                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            position: 'absolute', top: '100%', right: 0, width: '140px',
                            background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            border: '1px solid #f1f5f9', zIndex: 10, padding: '6px', marginTop: '8px',
                          }}
                        >
                          <button
                            onClick={() => { onSelectStudent(student.id); setActiveMenuId(null); }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#334155', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                          >
                            Profile
                          </button>
                          <button
                            onClick={async () => {
                              if (window.confirm('Delete this student?')) {
                                await studentService.deleteStudentRecord(student);
                              }
                              setActiveMenuId(null);
                            }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#f43f5e', cursor: 'pointer' }}
                          >
                            Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: '#f1f5f9', margin: '15px 0 13px' }} />

                {/* Info tiles — today / this week / XP */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ ...tileStyle, flexGrow: 1.25 }}>
                    <div style={tileLabelStyle}>Today</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: today.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {today.label}
                      </span>
                    </div>
                  </div>

                  <div style={{ ...tileStyle, flexGrow: 1.3 }}>
                    <div style={tileLabelStyle}>This week</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                      <div style={{ display: 'flex', gap: '2px', flex: '1 1 auto', minWidth: 0 }}>
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <span key={i} style={{ flex: '1 1 0', maxWidth: '6px', aspectRatio: '1', borderRadius: '50%', background: i < weekCount ? '#6366f1' : '#e2e8f0' }} />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1e1b4b', flexShrink: 0 }}>{weekCount}/7</span>
                    </div>
                  </div>

                  <div style={{ ...tileStyle, flexGrow: 0.95 }}>
                    <div style={tileLabelStyle}>XP</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px' }}>
                      <Trophy size={13} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e1b4b' }}>{xpLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="app-empty" style={{ gridColumn: '1 / -1' }}>
            {searchTerm ? "No students match your search." : "No students added yet. Click 'Add Student' to get started."}
          </div>
        )}
      </div>

      <StudentProfileModal 
        open={profileOpen}
        student={profileStudent}
        onClose={() => {
          setProfileOpen(false);
          setProfileStudent(null);
        }}
      />

      <AvatarPickerModal
        open={avatarOpen}
        title={activeStudent ? `${activeStudent.name}'s Persona` : 'Student Persona'}
        subtitle="Choose an avatar for this student"
        initialStyle={activeStudent?.avatarStyle || 'avataaars'}
        initialSeed={activeStudent?.avatarSeed || (activeStudent?.name?.split(' ')?.[0] ?? '')}
        onClose={() => {
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl }) => {
          if (!activeStudent?.id) return;
          await studentService.updateStudent(activeStudent.id, {
            avatarStyle,
            avatarSeed,
            avatarUrl,
            updatedAt: new Date().toISOString(),
          });
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
      />
    </div>
  );
};

export default StudentList;
