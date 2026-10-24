import { useEffect, useState } from 'react';
import { Award, ChevronRight, Lock } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { getManifest } from '../services/contentLoader';
import { enabledScholarshipExams } from '../utils/scholarshipExams';
import { useAuth } from '../context/AuthContext';
import ScholarshipTest from './ScholarshipTest';
import { loadTestState } from '../utils/scholarshipTest';

/**
 * Scholarship (ACER, Selective…): 10-question timed tests per topic from questions the student hasn't done, with
 * answers, solutions and scores kept on the device for review (ScholarshipTest). Turned on per student by the teacher
 * (`scholarshipEnabled`); separate from Daily Practice and Exam Prep.
 */
const Scholarship = ({ profile }) => {
  const { user } = useAuth();
  const [counts, setCounts] = useState(null);       // { [chapterId]: { [topicId]: number } } once the manifest is in
  const [selected, setSelected] = useState(null);   // { chapter, topic }
  const [, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getManifest()
      .then((m) => {
        if (cancelled) return;
        const out = {};
        Object.entries(m?.chapters || {}).forEach(([chapterId, topics]) => {
          out[chapterId] = Object.fromEntries(Object.entries(topics || {}).map(([topicId, v]) => [topicId, Number(v?.[1]) || 0]));
        });
        setCounts(out);
      })
      .catch(() => { if (!cancelled) setCounts({}); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    window.addEventListener('sapere:progress-updated', refresh);
    return () => window.removeEventListener('sapere:progress-updated', refresh);
  }, []);

  if (selected) {
    return (
      <AnimatePresence mode="wait">
        <ScholarshipTest
          key={selected.topic.id}
          topic={selected.topic}
          chapter={selected.chapter}
          profile={profile}
          onBack={() => setSelected(null)}
        />
      </AnimatePresence>
    );
  }

  // Only the exams the teacher switched on for this student (no list = every exam).
  const allExams = CURRICULUM_DATA.Scholarship || [];
  const shown = enabledScholarshipExams(allExams.map((e) => e.id), profile);
  const exams = allExams.filter((e) => shown.includes(e.id));
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '8px 4px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}><Award size={22} /></div>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: '#1e1b4b', fontFamily: 'var(--font-heading)' }}>Scholarship</h2>
      </div>
      <p style={{ margin: '0 0 22px', color: '#64748b', fontWeight: 600, fontSize: '0.92rem' }}>
        Tests of 10 questions you haven&apos;t done yet, 12 minutes each. See your score, answers and solutions after you submit.
      </p>

      {exams.map((exam) => (
        <section key={exam.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '18px 18px 8px', marginBottom: 16, boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.05rem', fontWeight: 900, color: '#4c1d95' }}>{exam.title}</h3>
          {(exam.topics || []).map((topic) => {
            const count = counts ? (counts[exam.id]?.[topic.id] ?? 0) : null;
            const empty = count === 0;
            const test = user?.uid ? loadTestState(user.uid, exam.id, topic.id) : null;
            const done = test ? Math.min(test.done.length, count || 0) : 0;
            const last = test?.attempts?.[test.attempts.length - 1];
            return (
              <button
                key={topic.id}
                type="button"
                disabled={empty || count === null}
                onClick={() => setSelected({ chapter: { id: exam.id, title: exam.title }, topic: { id: topic.id, title: topic.title, code: topic.code || '' } })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left', border: 0, background: 'transparent',
                  padding: '14px 4px', borderTop: '1px solid #f1f5f9', cursor: empty || count === null ? 'default' : 'pointer', opacity: empty ? 0.55 : 1,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '0.98rem' }}>{topic.title}</div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#94a3b8', marginTop: 2 }}>
                    {count === null ? 'Loading…' : empty ? 'Coming soon' : `${count} question${count === 1 ? '' : 's'}${done > 0 ? ` · ${done} done` : ''}${(test?.round || 1) > 1 ? ` · Round ${test.round}` : ''}${last ? ` · last ${last.marks}/${last.total}` : ''}`}
                  </div>
                </div>
                {empty ? <Lock size={16} color="#cbd5e1" /> : count !== null && <ChevronRight size={18} color="#a78bfa" />}
              </button>
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default Scholarship;
