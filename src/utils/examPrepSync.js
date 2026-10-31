/**
 * Whether the server copy of a student's Exam Prep stats replaces the device's.
 * Compared by questions attempted first: `sessions` only goes up when a session ENDS, so a student who answered
 * questions and closed the tab had more attempts locally but the same session count as the server — and the server
 * copy used to win, wiping those answers (the counts looked like they were not updating).
 */
export const shouldAdoptServerStats = (local, server) => {
  const la = Number(local?.attempted) || 0;
  const sa = Number(server?.attempted) || 0;
  if (sa !== la) return sa > la;
  return (Number(server?.sessions) || 0) >= (Number(local?.sessions) || 0);
};
