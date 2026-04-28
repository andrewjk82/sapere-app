import React, { useMemo, useState } from 'react';
import { Calendar, Clock, MapPin, Plus, Search, Video } from 'lucide-react';

const sampleSessions = [
  {
    id: 's1',
    title: 'Mathematics — Algebra',
    student: 'Amelia',
    mode: 'Online',
    location: 'Zoom',
    start: '2026-04-29T16:00:00',
    durationMinutes: 60,
  },
  {
    id: 's2',
    title: 'English — Essay writing',
    student: 'Noah',
    mode: 'In-person',
    location: 'Library, Room 3',
    start: '2026-04-30T17:30:00',
    durationMinutes: 75,
  },
  {
    id: 's3',
    title: 'Chemistry — Stoichiometry',
    student: 'Mia',
    mode: 'Online',
    location: 'Google Meet',
    start: '2026-05-01T15:00:00',
    durationMinutes: 50,
  },
];

function formatDay(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(date);
}

const Schedule = () => {
  const [query, setQuery] = useState('');

  const sessions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleSessions;
    return sampleSessions.filter((s) =>
      [s.title, s.student, s.location, s.mode].some((v) => v.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Schedule</h2>
          <p>Plan sessions with clarity — a calm view for a busy week.</p>
        </div>
        <div className="app-page__actions">
          <div className="app-input" style={{ minWidth: 260 }}>
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sessions…"
              type="text"
            />
          </div>
          <button className="app-button app-button--primary">
            <Plus size={20} />
            New session
          </button>
        </div>
      </div>

      <div className="app-grid app-grid--content">
        <section className="app-panel page-card">
          <div className="page-card__header">
            <h3>Upcoming sessions</h3>
            <span className="page-pill">{sessions.length} scheduled</span>
          </div>

          {sessions.length === 0 ? (
            <div className="app-empty">No sessions match your search.</div>
          ) : (
            <div className="page-list">
              {sessions.map((s) => {
                const start = new Date(s.start);
                const icon = s.mode === 'Online' ? <Video size={18} /> : <MapPin size={18} />;
                return (
                  <div key={s.id} className="page-list__item">
                    <div className="page-list__icon">{icon}</div>
                    <div className="page-list__main">
                      <strong>{s.title}</strong>
                      <p>
                        {s.student} • {s.mode} • {s.location}
                      </p>
                      <div className="page-list__meta">
                        <span className="page-meta">
                          <Calendar size={16} />
                          {formatDay(start)}
                        </span>
                        <span className="page-meta">
                          <Clock size={16} />
                          {formatTime(start)} • {s.durationMinutes}m
                        </span>
                      </div>
                    </div>
                    <div className="page-list__side">
                      <button className="app-button app-button--secondary">Details</button>
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
              <h3>Week view</h3>
              <span className="page-pill">Preview</span>
            </div>
            <div className="calendar-mock">
              <div className="calendar-mock__row">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
              <div className="calendar-mock__grid">
                {Array.from({ length: 21 }).map((_, idx) => (
                  <div key={idx} className={`calendar-mock__cell ${idx === 10 ? 'is-highlight' : ''}`} />
                ))}
              </div>
              <p className="calendar-mock__hint">A refined calendar UI can connect next — this placeholder keeps the layout consistent now.</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Schedule;
