import { createContext, useContext } from 'react';

// Contexts + hooks for the app-wide study timer (provider: StudyTimerContext.jsx).
export const StudyTimerContext = createContext(null);
export const StudyTimerClockContext = createContext(0);

/** The session: { uid, subjects, subject, phase, lastFlush, myTotalSec, currentTotalSec, start, resume, pause, stop, changeSubject }. */
export const useStudyTimer = () => useContext(StudyTimerContext);
/** Seconds on the clock; re-renders every second while running — use only where the time is shown. */
export const useStudyTimerClock = () => useContext(StudyTimerClockContext);

export const formatElapsed = (totalSec) => {
  const s = Math.max(0, Math.floor(totalSec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(sec).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};
