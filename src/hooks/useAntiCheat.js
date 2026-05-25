import { useEffect } from 'react';

/**
 * Handles all anti-cheat behaviour during the quiz step:
 *  1. Focus-loss warnings (tab switch / blur) — increments warning count
 *  2. Keyboard-activity tracking (prevents false-positive terminations on iOS)
 *  3. beforeunload prompt to prevent accidental navigation
 *  4. Visibility-change termination after 500 ms of hidden state
 *  5. Immediate termination on pagehide
 *
 * @param {object} opts
 * @param {string}   opts.step                       — current quiz step
 * @param {boolean}  opts.isAdmin                    — admins bypass termination
 * @param {boolean}  opts.isReporting                — suppress beforeunload while report modal is open
 * @param {function} opts.showToast                  — toast helper
 * @param {function} opts.hasRecentKeyboardActivity  — from useKeyboardActivity
 * @param {function} opts.markKeyboardActivity       — from useKeyboardActivity
 * @param {function} opts.markViewportKeyboardActivity — from useKeyboardActivity
 * @param {function} opts.onFocusLost               — called on focus-loss (increment warnings)
 * @param {React.MutableRefObject} opts.finishQuizRef — ref to finishQuiz(isAbandoned)
 */
export const useAntiCheat = ({
  step,
  isAdmin,
  isReporting,
  showToast,
  hasRecentKeyboardActivity,
  markKeyboardActivity,
  markViewportKeyboardActivity,
  onFocusLost,
  finishQuizRef,
}) => {
  const isQuiz = step === 'quiz';
  const isActive = step === 'quiz' || step === 'feedback';

  // ── 1. Focus-loss warning ──
  useEffect(() => {
    if (!isQuiz) return;

    const handleFocusLost = () => {
      if (hasRecentKeyboardActivity()) return;
      onFocusLost();
      showToast(
        "Please do not leave the challenge window! Switching tabs or apps is not allowed during the challenge.",
        'warning',
      );
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleFocusLost();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleFocusLost);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleFocusLost);
    };
  }, [isQuiz, hasRecentKeyboardActivity, onFocusLost, showToast]);

  // ── 2. Keyboard & viewport activity tracking ──
  useEffect(() => {
    if (!isQuiz) return;

    const isEditableEl = (target) =>
      Boolean(target?.closest?.('input, textarea, select, [contenteditable="true"]')) ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName);

    const onInputActivity = (e) => {
      if (isEditableEl(e.target)) markKeyboardActivity();
    };
    const onViewportResize = () => {
      if (hasRecentKeyboardActivity()) markViewportKeyboardActivity();
    };

    document.addEventListener('focusin', onInputActivity);
    document.addEventListener('focusout', onInputActivity);
    document.addEventListener('input', onInputActivity);
    window.visualViewport?.addEventListener('resize', onViewportResize);

    return () => {
      document.removeEventListener('focusin', onInputActivity);
      document.removeEventListener('focusout', onInputActivity);
      document.removeEventListener('input', onInputActivity);
      window.visualViewport?.removeEventListener('resize', onViewportResize);
    };
  }, [isQuiz, markKeyboardActivity, markViewportKeyboardActivity, hasRecentKeyboardActivity]);

  // ── 3. Prevent accidental navigation ──
  useEffect(() => {
    if (!isActive || isReporting) return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isActive, isReporting]);

  // ── 4 & 5. Cheat termination (visibility + pagehide) ──
  // iPadOS emits blur/pagehide/visibility while the math keyboard opens/closes
  // so recent keyboard activity is ignored (500 ms grace after visible again).
  useEffect(() => {
    if (isAdmin || !isQuiz) return;

    let terminationTimer = null;

    const clearTerminationTimer = () => {
      if (terminationTimer) {
        window.clearTimeout(terminationTimer);
        terminationTimer = null;
      }
    };

    const handleCheatingAttempt = () => {
      if (hasRecentKeyboardActivity()) return;
      if (document.visibilityState !== 'hidden') {
        clearTerminationTimer();
        return;
      }
      clearTerminationTimer();
      terminationTimer = window.setTimeout(() => {
        if (document.visibilityState !== 'hidden' || hasRecentKeyboardActivity()) return;
        showToast('⚠️ Challenge Terminated: Screen switching or screenshots detected.', 'error', 5000);
        finishQuizRef.current?.(true);
      }, 500);
    };

    const handleImmediateTermination = () => {
      if (hasRecentKeyboardActivity()) return;
      finishQuizRef.current?.(true);
    };

    document.addEventListener('visibilitychange', handleCheatingAttempt);
    window.addEventListener('pagehide', handleImmediateTermination);

    return () => {
      clearTerminationTimer();
      document.removeEventListener('visibilitychange', handleCheatingAttempt);
      window.removeEventListener('pagehide', handleImmediateTermination);
    };
  }, [isQuiz, isAdmin, showToast, hasRecentKeyboardActivity, finishQuizRef]);
};
