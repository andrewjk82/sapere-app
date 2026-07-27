import React from 'react';
import { Delete } from 'lucide-react';

/**
 * Digits-only keypad for the Times Table Sprint.
 *
 * The sprint is a speed contest, so the keys are deliberately large and use
 * onPointerDown rather than onClick — a click only fires on pointer *release*,
 * which costs tens of milliseconds per tap on touch devices.
 */
const SprintKeypad = ({ onDigit, onBackspace, onSubmit, canSubmit }) => {
  const press = (handler) => (e) => {
    e.preventDefault(); // keeps focus off the buttons so the keyboard path stays live
    handler();
  };

  return (
    <div className="tts-keypad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
        <button
          key={d}
          type="button"
          className="tts-key"
          onPointerDown={press(() => onDigit(String(d)))}
          aria-label={String(d)}
        >
          {d}
        </button>
      ))}
      <button
        type="button"
        className="tts-key tts-key--action"
        onPointerDown={press(onBackspace)}
        aria-label="Delete"
      >
        <Delete size={22} />
      </button>
      <button
        type="button"
        className="tts-key"
        onPointerDown={press(() => onDigit('0'))}
        aria-label="0"
      >
        0
      </button>
      <button
        type="button"
        className="tts-key tts-key--submit"
        onPointerDown={press(onSubmit)}
        disabled={!canSubmit}
        aria-label="Submit answer"
      >
        Enter
      </button>
    </div>
  );
};

export default SprintKeypad;
