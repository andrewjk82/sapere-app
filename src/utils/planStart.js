/**
 * One-shot hand-off from the dashboard's "Today's plan" to a page: a row says WHAT to start, the page starts it as soon as
 * it is ready, so the student lands in the questions instead of on a list with another Start button.
 * Kept in sessionStorage so it survives the tab switch but not a later visit, and is taken (removed) on first read.
 */
export const PLAN_START_KEY = 'sapere:planStart:v1';

export const requestPlanStart = (kind) => {
  try { sessionStorage.setItem(PLAN_START_KEY, kind); } catch { /* storage blocked: the page still opens, the student presses Start */ }
};

/** The requested kind if it is one of `kinds` (and removes it); null otherwise. */
export const takePlanStart = (kinds) => {
  try {
    const want = sessionStorage.getItem(PLAN_START_KEY);
    if (!want || !kinds.includes(want)) return null;
    sessionStorage.removeItem(PLAN_START_KEY);
    return want;
  } catch { return null; }
};
