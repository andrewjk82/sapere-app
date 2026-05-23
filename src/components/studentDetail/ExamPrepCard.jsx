import React, { useEffect, useState } from 'react';
import { GraduationCap, Sparkles, Trophy } from 'lucide-react';
import { db } from '../../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

/**
 * Teacher-side view of a student's Exam Prep progress.
 *
 * The student's localStorage-resident stats are mirrored to
 * `students/{uid}/exam_prep/summary` at the end of every round, so we can
 * just listen to that doc here — no separate reporting pipeline needed.
 */
const ExamPrepCard = ({ studentId, examPrepEnabled }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (!studentId || !examPrepEnabled) return undefined;
    const ref = doc(db, 'students', studentId, 'exam_prep', 'summary');
    return onSnapshot(ref, (snap) => {
      setSummary(snap.exists() ? snap.data() : null);
    }, (err) => { console.warn('exam_prep summary listen failed:', err); });
  }, [studentId, examPrepEnabled]);

  if (!examPrepEnabled) return null;

  const sessions = summary?.sessions || 0;
  const attempted = summary?.attempted || 0;
  const correct = summary?.correct || 0;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const byTopic = summary?.byTopic || {};
  const lastRound = summary?.lastRound;

  const analysis = Object.entries(byTopic).map(([id, t]) => ({
    id,
    title: t.title || 'Untitled topic',
    attempted: t.attempted || 0,
    correct: t.correct || 0,
    pct: (t.attempted || 0) > 0 ? Math.round((t.correct / t.attempted) * 100) : 0,
  })).sort((a, b) => {
    const aSmall = a.attempted < 3 ? 1 : 0;
    const bSmall = b.attempted < 3 ? 1 : 0;
    if (aSmall !== bSmall) return aSmall - bSmall;
    return a.pct - b.pct;
  });

  return (
    <div className="app-panel" style={{ padding: '24px 28px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 style={{ margin: 0, color: '#1e1b4b', fontWeight: 900, fontSize: '1rem' }}>Exam Prep</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              Cumulative results from 15-question random rounds
            </p>
          </div>
        </div>
        {lastRound && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ede9fe', color: '#5b21b6', padding: '6px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
            <Trophy size={14} /> Last: {lastRound.correct}/{lastRound.total} · +{lastRound.xp} XP
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <Stat label="Sessions" value={sessions} color="#7c3aed" />
        <Stat label="Accuracy" value={`${accuracy}%`} color="#10b981" />
        <Stat label="Attempted" value={attempted} color="#1e1b4b" />
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Sparkles size={16} color="#7c3aed" />
          <span style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.9rem' }}>Where to focus</span>
        </div>
        {analysis.length === 0 ? (
          <div style={{ padding: '18px', borderRadius: '14px', background: '#f8fafc', color: '#94a3b8', textAlign: 'center', fontWeight: 700, fontSize: '0.85rem' }}>
            No exam prep rounds completed yet.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {analysis.slice(0, 8).map((t) => {
              const color = t.attempted < 3 ? '#94a3b8' : t.pct < 50 ? '#ef4444' : t.pct < 75 ? '#f59e0b' : '#10b981';
              return (
                <div key={t.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, color: '#1e293b' }}>{t.title}</span>
                    <span style={{ fontWeight: 800, color }}>{t.pct}% · {t.correct}/{t.attempted}</span>
                  </div>
                  <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${t.pct}%`, background: color }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Stat = ({ label, value, color }) => (
  <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '14px', textAlign: 'center' }}>
    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
    <div style={{ fontSize: '1.4rem', fontWeight: 900, color, marginTop: '2px' }}>{value}</div>
  </div>
);

export default ExamPrepCard;
