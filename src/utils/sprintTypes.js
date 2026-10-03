// Dependency-free: imported by api/_lib (Node, settlement) as well as the client.
// Order is the hub's display order.
export const SPRINT_TYPES = [
  { id: 'add', name: 'Addition', glyph: '+', accent: '#10b981' },
  { id: 'sub', name: 'Subtraction', glyph: '−', accent: '#0ea5e9' },
  { id: 'times', name: 'Times Table', glyph: '×', accent: '#8b5cf6' },
  { id: 'div', name: 'Division', glyph: '÷', accent: '#f59e0b' },
  { id: 'alg', name: 'Algebra', glyph: 'x', accent: '#ec4899' },
];

export const getSprintType = (id) => SPRINT_TYPES.find((t) => t.id === id) || null;

// A leaderboard = one sprint type in one week. Times Table keeps the bare week
// id so its existing results/meta/settlement docs and caches stay valid; the
// others live in the same collections under a prefixed id (no new rules or
// indexes — the (weekId, bestTimeMs) index already covers them).
export const sprintBoardId = (typeId, weekId) => (typeId === 'times' ? weekId : `${typeId}:${weekId}`);
