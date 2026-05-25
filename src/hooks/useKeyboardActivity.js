import { useRef, useCallback } from 'react';

const KEYBOARD_ACTIVITY_GRACE_MS = 8000;
const VIEWPORT_ACTIVITY_GRACE_MS = 4000;

const isEditableElement = (target) =>
  Boolean(target?.closest?.('input, textarea, select, [contenteditable="true"]')) ||
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName);

/**
 * Tracks keyboard and viewport activity to distinguish real user input
 * from iOS system events (e.g. keyboard open/close triggering blur/visibility).
 *
 * Returns:
 *  - markKeyboardActivity()        — call on focusin/focusout/input
 *  - markViewportKeyboardActivity() — call on visualViewport resize
 *  - hasRecentKeyboardActivity()   — returns true if within grace period
 */
export const useKeyboardActivity = () => {
  const keyboardActivityAtRef = useRef(0);
  const viewportActivityAtRef = useRef(0);

  const markKeyboardActivity = useCallback(() => {
    keyboardActivityAtRef.current = Date.now();
  }, []);

  const markViewportKeyboardActivity = useCallback(() => {
    viewportActivityAtRef.current = Date.now();
  }, []);

  const hasRecentKeyboardActivity = useCallback(() => {
    const now = Date.now();
    return (
      isEditableElement(document.activeElement) ||
      now - keyboardActivityAtRef.current < KEYBOARD_ACTIVITY_GRACE_MS ||
      now - viewportActivityAtRef.current < VIEWPORT_ACTIVITY_GRACE_MS
    );
  }, []);

  return { markKeyboardActivity, markViewportKeyboardActivity, hasRecentKeyboardActivity };
};

export { isEditableElement };
