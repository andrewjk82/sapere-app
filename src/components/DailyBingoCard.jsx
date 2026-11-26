import { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Clock, Flag, Plus, Video, Star, Check } from 'lucide-react';
import { buildBoard, lineStatus, XP_PER_LINE } from '../utils/dailyBingo';
import { readActivity, todayKey } from '../utils/bingoActivity';
import { awardBingoLines } from '../services/bingoXpService';
import './daily-bingo.css';

// Student dashboard "Today's plan" as a Daily Bingo (3×3, free centre). Cells tick by themselves from saved results and
// this device's activity log; every finished line pays +5 XP once (services/bingoXpService).
// planItems: the dashboard's plan rows { key, icon, title, sub, done, onClick, kind: 'must' | 'extra' }.
export default function DailyBingoCard({ uid, profile, planItems, studyRoomOn, setActiveTab, showToast, compact }) {
  const date = todayKey();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    window.addEventListener('sapere:progress-updated', refresh);
    window.addEventListener('focus', refresh);
    return () => { window.removeEventListener('sapere:progress-updated', refresh); window.removeEventListener('focus', refresh); };
  }, []);

  const board = useMemo(() => {
    const act = uid ? readActivity(uid, date) : {};
    const go = (tab) => () => setActiveTab?.(tab);
    const shared = [
      { id: 'secret-note', kind: 'shared', icon: BookOpen, title: 'Secret Note', sub: 'Get 3 right', done: (act.snCorrect || 0) >= 3, progress: `${Math.min(3, act.snCorrect || 0)}/3`, onClick: go('Challenge') },
      { id: 'study-timer', kind: 'shared', icon: Clock, title: 'Study timer', sub: '20 minutes', done: (act.studySec || 0) >= 1200, progress: `${Math.min(20, Math.floor((act.studySec || 0) / 60))}/20 min`, onClick: go('StudyTimer') },
      { id: 'sprint', kind: 'shared', icon: Flag, title: 'Sprint', sub: '1 round', done: (act.sprint || 0) >= 1, onClick: go('TimesTableSprint') },
      { id: 'extra-round', kind: 'shared', icon: Plus, title: 'Extra round', sub: 'After Daily Challenge', done: (act.extra || 0) >= 1, onClick: go('Challenge') },
      ...(studyRoomOn ? [{ id: 'study-room', kind: 'shared', icon: Video, title: 'Study Room', sub: 'Join tonight', done: (act.studyRoom || 0) >= 1, onClick: () => document.getElementById('sapere-study-room')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }] : []),
    ];
    const plan = planItems.map((p) => ({ ...p, id: p.key, done: p.key === 'exam-prep' ? (act.examPrep || 0) >= 1 : p.done === true }));
    return buildBoard([...plan, ...shared], `${uid}|${date}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- tick re-reads this device's activity log
  }, [uid, date, planItems, studyRoomOn, setActiveTab, tick]);

  const lines = useMemo(() => lineStatus(board), [board]);
  const finishing = new Set(lines.filter((l) => l.left.length === 1).map((l) => l.left[0]));
  const won = useMemo(() => lines.filter((l) => !l.left.length), [lines]);
  const bingo = profile?.bingo;
  const paidLines = useMemo(() => (bingo?.date === date ? (bingo.lines || []) : []), [bingo, date]);
  const mustLeft = board.filter((c) => c.kind === 'must' && !c.done);
  const next = mustLeft[0] || board.find((c) => !c.done && c.kind !== 'free');

  // Celebrate each line once per day on this device: its cells hop in turn, a line is drawn through them, "+5 XP" rises.
  const seenKey = `sapere:bingoSeen:v1:${uid}:${date}`;
  const [show, setShow] = useState(null);           // { id, idx, n }
  const queueRef = useRef([]);
  useEffect(() => {
    if (!uid) return;
    let seen = [];
    try { seen = JSON.parse(localStorage.getItem(seenKey) || '[]'); } catch { /* storage blocked */ }
    const fresh = won.filter((l) => !seen.includes(l.id) && !queueRef.current.some((q) => q.id === l.id));
    if (!fresh.length) return;
    try { localStorage.setItem(seenKey, JSON.stringify([...seen, ...fresh.map((l) => l.id)])); } catch { /* storage blocked */ }
    queueRef.current.push(...fresh);
    if (!show) setShow({ ...queueRef.current.shift(), n: Date.now() });
  }, [uid, won, seenKey, show]);
  useEffect(() => {
    if (!show) return undefined;
    const t = window.setTimeout(() => {
      const next = queueRef.current.shift();
      setShow(next ? { ...next, n: Date.now() } : null);
    }, 2600);
    return () => window.clearTimeout(t);
  }, [show]);
  const center = (i) => [(i % 3) * 100 + 50, Math.floor(i / 3) * 100 + 50];

  // Pay for newly finished lines (the transaction skips any already paid, on any device).
  const askedRef = useRef('');
  useEffect(() => {
    const unpaid = won.map((l) => l.id).filter((id) => !paidLines.includes(id));
    const tag = `${date}:${unpaid.join(',')}`;
    if (!uid || !unpaid.length || askedRef.current === tag) return;
    askedRef.current = tag;
    awardBingoLines(uid, date, unpaid).then((xp) => { if (xp > 0) showToast?.(`Bingo! +${xp} XP`, 'success'); });
  }, [uid, date, won, paidLines, showToast]);

  return (
    <section className={`bingo${compact ? ' bingo--compact' : ''}`} aria-label="Today's Bingo">
      <div className="bingo-head">
        <h2>Today&apos;s Bingo</h2>
        <span className="bingo-sub">{mustLeft.length ? `${mustLeft.length} must-do left` : 'All must-do done'} · new board at midnight</span>
      </div>
      <div className="bingo-body">
        <div className="bingo-board">
          {board.map((c, i) => {
            const hop = show && show.idx.includes(i) ? { className: ' is-hop', style: { animationDelay: `${show.idx.indexOf(i) * 140}ms` } } : { className: '', style: undefined };
            if (c.kind === 'free') return <div key={c.id} className={`bingo-cell is-free${hop.className}`} style={hop.style}><Star size={26} /><b>Free</b></div>;
            const Icon = c.icon;
            return (
              <button key={c.id} type="button" onClick={c.onClick} style={hop.style}
                className={`bingo-cell${c.done ? ' is-done' : ''}${c.kind === 'must' ? ' is-must' : ''}${finishing.has(i) ? ' is-finishing' : ''}${hop.className}`}
                aria-label={`${c.title}${c.kind === 'must' ? ', must do' : ''}${c.done ? ', done' : ''}`}>
                {c.done ? <span className="bingo-check"><Check size={20} strokeWidth={3} /></span> : <Icon size={26} />}
                <b>{c.title}</b>
                <small>{c.done ? 'Done' : (c.progress && c.progress !== '0/3' && c.progress !== '0/20 min' ? c.progress : c.sub)}</small>
              </button>
            );
          })}
          {show && (() => {
            const [x1, y1] = center(show.idx[0]);
            const [x2, y2] = center(show.idx[2]);
            return (
              <div key={show.n} className="bingo-celebrate" aria-live="polite">
                <svg viewBox="0 0 300 300" preserveAspectRatio="none" aria-hidden="true">
                  <line x1={x1} y1={y1} x2={x2} y2={y2} pathLength="1" />
                </svg>
                <span className="bingo-burst">Bingo! <b>+{XP_PER_LINE} XP</b></span>
              </div>
            );
          })()}
        </div>
        <div className="bingo-side">
          <ul className="bingo-lines">
            {[...lines].sort((a, b) => a.left.length - b.left.length).slice(0, compact ? 3 : 5).map((l) => (
              <li key={l.id} className={l.left.length ? '' : 'is-won'}>
                <span>{l.name}</span>
                <small>{l.left.length ? `${l.left.length} to go: ${l.left.map((i) => board[i].title).join(', ')}` : `Bingo! +${XP_PER_LINE} XP`}</small>
              </li>
            ))}
          </ul>
          <p className="bingo-prize">Each line +{XP_PER_LINE} XP · {won.length} of 8 lines today</p>
          {next ? <button type="button" className="bingo-go" onClick={next.onClick}>Start {next.title}</button>
            : <p className="bingo-alldone">Whole board done today 🎉</p>}
        </div>
      </div>
    </section>
  );
}
