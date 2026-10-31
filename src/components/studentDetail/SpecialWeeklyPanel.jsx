import { useState } from 'react';
import { weeksForTeacher } from '../../utils/specialWeekly';
import { HUB_PAGES } from '../../utils/examHub';

const C = { ink: '#1f1d3d', muted: '#6b7280', faint: '#9ca3af', line: '#e5e7eb', accent: '#5b3fd0', red: '#c2273d', green: '#15803d', amber: '#b45309' };
const pct = (m, t) => (t > 0 ? Math.round((m / t) * 100) : 0);
const tone = (p) => (p >= 80 ? C.green : p >= 60 ? C.amber : C.red);
const weekLabel = (id) => `Week of ${new Date(`${id}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}`;
const sentence = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const mins = (secs) => (secs >= 3600 ? `${Math.floor(secs / 3600)}h ${Math.round((secs % 3600) / 60)}m` : `${Math.round(secs / 60)} min`);

/**
 * Teacher view of what a student did in OC / Selective / Scholarship, one row per week (last 8). The data is the
 * `specialWeekly` map the student's device sends once a week (utils/specialWeekly) — it is already on the student
 * document this page listens to, so showing it costs no extra read.
 */
export default function SpecialWeeklyPanel({ student }) {
  const weeks = weeksForTeacher(student?.specialWeekly).slice(0, 8);
  const [open, setOpen] = useState(null);

  if (!weeks.length) {
    return (
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${C.line}` }}>
        <div style={{ fontWeight: 800, color: C.ink, fontSize: '0.85rem' }}>Weekly results</div>
        <div style={{ marginTop: 6, color: C.muted, fontWeight: 500, fontSize: '0.84rem', lineHeight: 1.5 }}>
          Nothing yet. The student&apos;s device sends one summary per week, the first time the app is opened after the week has ended.
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${C.line}` }}>
      <div style={{ fontWeight: 800, color: C.ink, fontSize: '0.85rem' }}>Weekly results</div>
      <div style={{ color: C.muted, fontWeight: 500, fontSize: '0.78rem', margin: '2px 0 10px' }}>
        Sent once a week by the student&apos;s device, so the latest week shows after it has ended.
      </div>
      <div style={{ border: `1px solid ${C.line}`, borderRadius: 12, overflow: 'hidden' }}>
        {weeks.map((w, i) => {
          const p = pct(w.marks, w.total);
          const isOpen = open === w.weekId;
          return (
            <div key={w.weekId} style={{ borderTop: i ? `1px solid #f1f2f4` : 0 }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : w.weekId)}
                aria-expanded={isOpen}
                style={{ display: 'grid', gridTemplateColumns: 'minmax(96px, 1.1fr) 1fr 1fr minmax(110px, 1.4fr)', gap: 10, alignItems: 'center', width: '100%', padding: '11px 14px', border: 0, background: isOpen ? '#faf9ff' : '#fff', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
              >
                <span style={{ fontWeight: 700, color: C.ink, fontSize: '0.86rem' }}>{weekLabel(w.weekId)}</span>
                <span style={{ color: C.muted, fontWeight: 600, fontSize: '0.82rem' }}>{w.tests} test{w.tests === 1 ? '' : 's'}</span>
                <span style={{ color: C.muted, fontWeight: 600, fontSize: '0.82rem' }}>{w.total} marks</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ flex: 1, height: 5, borderRadius: 5, background: '#eceef2', overflow: 'hidden' }}><i style={{ display: 'block', height: '100%', width: `${p}%`, background: tone(p) }} /></span>
                  <span style={{ fontWeight: 800, color: tone(p), fontSize: '0.84rem', fontVariantNumeric: 'tabular-nums', minWidth: 36, textAlign: 'right' }}>{p}%</span>
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: '4px 14px 14px', background: '#faf9ff' }}>
                  <div style={{ color: C.faint, fontWeight: 600, fontSize: '0.78rem', marginBottom: 8 }}>{w.marks} of {w.total} marks right · {mins(w.secs)} of testing</div>
                  {Object.entries(w.exams).map(([examId, e]) => {
                    const ep = pct(e.marks, e.total);
                    const weak = Object.entries(e.types).filter(([, v]) => v[1] >= 4).map(([k, v]) => ({ name: k, p: pct(v[0], v[1]), m: v[0], t: v[1] })).sort((a, b) => a.p - b.p).slice(0, 3);
                    const kinds = [e.kinds.mock && `${e.kinds.mock} mock`, e.kinds.daily && `${e.kinds.daily} daily`, e.kinds.topic && `${e.kinds.topic} topic`].filter(Boolean).join(' · ');
                    return (
                      <div key={examId} style={{ padding: '10px 12px', marginBottom: 8, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 800, color: C.ink }}>{HUB_PAGES[examId]?.label || examId}</span>
                          <span style={{ color: C.muted, fontWeight: 600, fontSize: '0.8rem' }}>{kinds}</span>
                          <span style={{ marginLeft: 'auto', fontWeight: 800, color: tone(ep), fontVariantNumeric: 'tabular-nums' }}>{ep}% <span style={{ color: C.faint, fontWeight: 600, fontSize: '0.78rem' }}>({e.marks}/{e.total})</span></span>
                        </div>
                        {weak.length > 0 && (
                          <div style={{ marginTop: 6, fontSize: '0.8rem', fontWeight: 600, color: C.muted }}>
                            Weakest types: {weak.map((x) => `${sentence(x.name)} ${x.p}% (${x.m}/${x.t})`).join(' · ')}
                          </div>
                        )}
                        {e.wrong.length > 0 && (
                          <details style={{ marginTop: 6 }}>
                            <summary style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: C.red }}>Missed {e.wrong.length >= 30 ? '30+' : e.wrong.length} question{e.wrong.length === 1 ? '' : 's'}</summary>
                            <div style={{ marginTop: 4, fontSize: '0.74rem', color: C.faint, lineHeight: 1.6, wordBreak: 'break-all' }}>{e.wrong.join(', ')}</div>
                          </details>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
