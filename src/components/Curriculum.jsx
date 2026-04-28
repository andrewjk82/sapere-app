import React, { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Plus, Search, Sparkles } from 'lucide-react';

const sampleUnits = [
  { id: 'u1', title: 'Algebra foundations', subject: 'Mathematics', lessons: 12, completed: 5 },
  { id: 'u2', title: 'Essay structure', subject: 'English', lessons: 8, completed: 3 },
  { id: 'u3', title: 'Stoichiometry basics', subject: 'Chemistry', lessons: 10, completed: 7 },
  { id: 'u4', title: 'Trigonometry essentials', subject: 'Mathematics', lessons: 9, completed: 2 },
  { id: 'u5', title: 'Reading comprehension', subject: 'English', lessons: 11, completed: 9 },
  { id: 'u6', title: 'Atomic structure', subject: 'Chemistry', lessons: 7, completed: 1 },
];

function percent(completed, total) {
  if (!total) return 0;
  return Math.min(100, Math.max(0, Math.round((completed / total) * 100)));
}

const Curriculum = () => {
  const [query, setQuery] = useState('');

  const units = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleUnits;
    return sampleUnits.filter((u) => [u.title, u.subject].some((v) => v.toLowerCase().includes(q)));
  }, [query]);

  const totals = useMemo(() => {
    const totalLessons = units.reduce((acc, u) => acc + u.lessons, 0);
    const completedLessons = units.reduce((acc, u) => acc + u.completed, 0);
    return { totalLessons, completedLessons, completion: percent(completedLessons, totalLessons) };
  }, [units]);

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Curriculum</h2>
          <p>Structure learning into elegant units — consistent progress, beautifully tracked.</p>
        </div>
        <div className="app-page__actions">
          <div className="app-input" style={{ minWidth: 260 }}>
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search units…"
              type="text"
            />
          </div>
          <button className="app-button app-button--primary">
            <Plus size={20} />
            New unit
          </button>
        </div>
      </div>

      <div className="app-grid app-grid--content">
        <section className="app-panel page-card">
          <div className="page-card__header">
            <h3>Your units</h3>
            <span className="page-pill">{units.length} total</span>
          </div>

          {units.length === 0 ? (
            <div className="app-empty">No curriculum units match your search.</div>
          ) : (
            <div className="unit-grid">
              {units.map((u) => {
                const p = percent(u.completed, u.lessons);
                return (
                  <div key={u.id} className="unit-card">
                    <div className="unit-card__top">
                      <div className="unit-card__icon">
                        <BookOpen size={20} />
                      </div>
                      <span className="page-pill">{u.subject}</span>
                    </div>
                    <h4>{u.title}</h4>
                    <p className="unit-card__meta">
                      {u.completed}/{u.lessons} lessons • {p}% complete
                    </p>
                    <div className="unit-progress" aria-label={`${p}% complete`}>
                      <div className="unit-progress__bar" style={{ width: `${p}%` }} />
                    </div>
                    <div className="unit-card__actions">
                      <button className="app-button app-button--secondary">View</button>
                      <button className="app-button app-button--primary">Continue</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <aside className="app-page">
          <section className="app-panel page-card">
            <div className="page-card__header">
              <h3>Overview</h3>
              <span className="page-pill">This week</span>
            </div>

            <div className="overview-card">
              <div className="overview-card__icon">
                <Sparkles size={20} />
              </div>
              <div>
                <strong>Completion</strong>
                <p>{totals.completion}% across visible units</p>
              </div>
            </div>

            <div className="overview-card">
              <div className="overview-card__icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <strong>Lessons done</strong>
                <p>
                  {totals.completedLessons} of {totals.totalLessons}
                </p>
              </div>
            </div>

            <div className="app-empty">
              Next step: connect curriculum to students and session notes (ready when you are).
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Curriculum;
