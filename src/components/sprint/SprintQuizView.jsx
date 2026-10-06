import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SprintKeypad from './SprintKeypad';
import { playAnswerResult } from '../../utils/answerSound';
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
// Algebra prompts render through KaTeX (loaded globally from index.html) so x
// reads as a variable, not a times sign. Falls back to plain text if KaTeX
// hasn't loaded. Input is generator-built, never user text.
const renderLatex = (tex) => {
  try {
    return window.katex ? window.katex.renderToString(tex, { throwOnError: true }) : '';
  } catch {
    return '';
  }
};

// "x = ?" — \text keeps normal spacing around the question mark.
const subPromptLatex = (sub) => String(sub).replace('?', '\\text{?}');

// Longer algebra prompts ("9x + 14 = 8x + 25") step down so they stay on one line.
const promptSizeClass = (prompt) => {
  const len = String(prompt).length;
  if (len > 13) return ' tts-question__text--xlong';
  return len > 9 ? ' tts-question__text--long' : '';
};

const SprintQuizView = ({ questions, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [entry, setEntry] = useState('');
  const [display, setDisplay] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(0); // bumped per mistake, keys both the badge and the strip pulse

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
    const right = Number(value) === question.answer;
    playAnswerResult(right, { quick: true });
    if (!right) {
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
    const next = (entryRef.current + d).slice(0, 3); // every sprint's answers are 1–999
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
      <div className="tts-instrument tts-instrument--strip tts-quiz__strip">
        {wrongFlash > 0 && <span key={wrongFlash} className="tts-quiz__flash" aria-hidden="true" />}
        <span className="tts-quiz__count">{index + 1}/{questions.length}</span>
        <div className="tts-track tts-track--on-dark" style={{ flex: 1 }}>
          <div className="tts-track__fill" style={{ width: `${progressPct}%` }} />
          <div className="tts-track__runner" style={{ left: `${progressPct}%` }} />
        </div>
        <span className="tts-led tts-led--glow tts-led--strip tts-quiz__clock">
          {formatSprintTime(display)}
        </span>
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

        {question.latex && renderLatex(question.latex) ? (
          <p
            className={`tts-question__text tts-question__text--math${promptSizeClass(question.prompt)}`}
            dangerouslySetInnerHTML={{ __html: renderLatex(question.latex) }}
          />
        ) : (
          <p className={`tts-question__text${promptSizeClass(question.prompt)}`}>
            {question.prompt}
          </p>
        )}
        {question.subPrompt && (
          <p
            className="tts-question__sub"
            {...(renderLatex(subPromptLatex(question.subPrompt))
              ? { dangerouslySetInnerHTML: { __html: renderLatex(subPromptLatex(question.subPrompt)) } }
              : { children: question.subPrompt })}
          />
        )}
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
