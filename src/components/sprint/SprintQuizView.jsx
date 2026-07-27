import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SprintKeypad from './SprintKeypad';
import { formatSprintTime } from '../../utils/sprintWeek';
import { WRONG_ANSWER_PENALTY_MS } from '../../services/timesTableSprintService';

/**
 * The timed run itself.
 *
 * Timing uses performance.now() — a monotonic clock, so a device clock
 * adjustment mid-run cannot hand a student an impossible record. The
 * displayed time includes accumulated penalties so the cost of a mistake is
 * visible while they play.
 */
const SprintQuizView = ({ questions, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [entry, setEntry] = useState('');
  const [display, setDisplay] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(0); // bumped per mistake, keys the animation

  // The handlers below are the single source of truth for entry/index; the
  // matching state exists only to re-render. Refs are written in handlers and
  // effects, never during render.
  const startedAtRef = useRef(0);
  const penaltyRef = useRef(0);
  const wrongCountRef = useRef(0);
  const finishedRef = useRef(false);
  const indexRef = useRef(0);
  const entryRef = useRef('');

  useEffect(() => {
    startedAtRef.current = performance.now();
    let raf = 0;
    const tick = () => {
      if (!finishedRef.current) {
        setDisplay(performance.now() - startedAtRef.current + penaltyRef.current);
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const submit = useCallback(() => {
    if (finishedRef.current) return;
    const value = entryRef.current;
    if (value === '') return;

    const question = questions[indexRef.current];
    if (Number(value) !== question.answer) {
      penaltyRef.current += WRONG_ANSWER_PENALTY_MS;
      wrongCountRef.current += 1;
      setWrongFlash((n) => n + 1);
    }

    // Right or wrong, the run always moves forward — a mistake costs time,
    // not a retry.
    const next = indexRef.current + 1;
    setEntry('');
    entryRef.current = '';

    if (next >= questions.length) {
      finishedRef.current = true;
      const totalMs = performance.now() - startedAtRef.current + penaltyRef.current;
      onFinish({ timeMs: Math.round(totalMs), wrongCount: wrongCountRef.current });
      return;
    }
    setIndex(next);
    indexRef.current = next;
  }, [questions, onFinish]);

  const addDigit = useCallback((d) => {
    if (finishedRef.current) return;
    const next = (entryRef.current + d).slice(0, 3); // 12×12 = 144, so 3 digits is the ceiling
    entryRef.current = next;
    setEntry(next);
  }, []);

  const backspace = useCallback(() => {
    if (finishedRef.current) return;
    const next = entryRef.current.slice(0, -1);
    entryRef.current = next;
    setEntry(next);
  }, []);

  // Physical keyboard — students on a laptop should never have to use the mouse.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key >= '0' && e.key <= '9') { addDigit(e.key); e.preventDefault(); }
      else if (e.key === 'Backspace') { backspace(); e.preventDefault(); }
      else if (e.key === 'Enter') { submit(); e.preventDefault(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [addDigit, backspace, submit]);

  const question = questions[index];
  const progressPct = (index / questions.length) * 100;

  return (
    <div className="tts-quiz">
      <div className="tts-quiz__bar">
        <span style={{ fontWeight: 800, color: '#64748b', fontVariantNumeric: 'tabular-nums' }}>
          {index + 1}/{questions.length}
        </span>
        <div className="tts-progress">
          <div className="tts-progress__fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="tts-clock">{formatSprintTime(display)}</span>
      </div>

      <div className="tts-question" style={{ position: 'relative' }}>
        <AnimatePresence>
          {wrongFlash > 0 && (
            <motion.span
              key={wrongFlash}
              className="tts-penalty"
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              +{WRONG_ANSWER_PENALTY_MS / 1000}s
            </motion.span>
          )}
        </AnimatePresence>

        <p className="tts-question__text">
          {question.left} × {question.right}
        </p>
        <div className={`tts-answer${entry === '' ? ' tts-answer--empty' : ''}`}>
          {entry === '' ? '?' : entry}
        </div>
      </div>

      <SprintKeypad
        onDigit={addDigit}
        onBackspace={backspace}
        onSubmit={submit}
        canSubmit={entry !== ''}
      />
    </div>
  );
};

export default SprintQuizView;
