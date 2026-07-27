import React from 'react';

/**
 * Airport split-flap board, borrowed for the one number a student actually
 * cares about: did I move up? Each digit tile is two stacked faces — the
 * new digit sits static underneath, the old digit sits on top and flips
 * away (backface-visibility hidden) to reveal it, staggered left to right
 * like a real board's clack-clack-clack.
 *
 * `from` may be null (no previous rank this session) — in that case digits
 * simply fade in rather than flipping from nothing.
 */
const SplitFlapRank = ({ from, to }) => {
  if (!Number.isFinite(to)) return null;

  const toStr = String(Math.max(1, Math.round(to)));
  const hasFrom = Number.isFinite(from) && from !== to;
  const fromStr = hasFrom ? String(Math.max(1, Math.round(from))) : '';
  const width = Math.max(toStr.length, fromStr.length);
  const padded = (s) => s.padStart(width, ' ');
  const toChars = padded(toStr).split('');
  const fromChars = hasFrom ? padded(fromStr).split('') : [];

  return (
    <div className="tts-flap-row" aria-label={`Rank ${toStr}`}>
      <span className="tts-flap-hash" style={{ fontFamily: 'var(--spr-mono)', fontSize: '1.4rem', alignSelf: 'center' }}>#</span>
      {toChars.map((newChar, i) => {
        const oldChar = fromChars[i];
        const delay = `${i * 90}ms`;
        const flip = hasFrom && oldChar !== newChar && oldChar !== ' ';
        const enter = !hasFrom || (oldChar === ' ' && newChar !== ' ');

        return (
          // Digit position is a stable, order-meaningful key here — the tile
          // count is fixed for the component's lifetime, never reordered.
          <div className="tts-flap" key={i}>
            <span className={`tts-flap__face${enter ? ' tts-flap__face--enter' : ''}`} style={enter ? { animationDelay: delay } : undefined}>
              {newChar === ' ' ? '' : newChar}
            </span>
            {flip && (
              <span className="tts-flap__face tts-flap__face--flip" style={{ animationDelay: delay }}>
                {oldChar === ' ' ? '' : oldChar}
              </span>
            )}
            <span className="tts-flap__seam" />
          </div>
        );
      })}
    </div>
  );
};

export default SplitFlapRank;
