// Daily Bingo: a 3×3 board, free centre. Must-do cells first, then the student's switched-on extras, then activities
// anyone can do. Placement comes from a seed of (student, date): a new board each day, the same board all day on every
// device. Pure — no Firebase here.
export const LINES = [
  ['row1', 'Top row', [0, 1, 2]], ['row2', 'Middle row', [3, 4, 5]], ['row3', 'Bottom row', [6, 7, 8]],
  ['col1', 'Left column', [0, 3, 6]], ['col2', 'Middle column', [1, 4, 7]], ['col3', 'Right column', [2, 5, 8]],
  ['diag1', 'Diagonal ↘', [0, 4, 8]], ['diag2', 'Diagonal ↙', [2, 4, 6]],
];
export const COINS_PER_LINE = 20;
const FREE = 4;

const rng = (str) => {
  let h = 2166136261;
  for (const c of String(str)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
};
const shuffle = (list, r) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i -= 1) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

/**
 * cells: [{ id, kind: 'must' | 'extra' | 'shared', ... }] → 9 slots (index 4 = free).
 * Must-do cells always make it; extras are preferred over shared ones; order on the board is shuffled by the seed.
 */
export const buildBoard = (cells, seedText) => {
  const r = rng(seedText);
  const must = cells.filter((c) => c.kind === 'must');
  const extra = shuffle(cells.filter((c) => c.kind === 'extra'), r);
  const shared = shuffle(cells.filter((c) => c.kind === 'shared'), r);
  const picked = shuffle([...must, ...extra, ...shared].slice(0, 8), r);
  const board = [];
  let k = 0;
  for (let i = 0; i < 9; i += 1) board.push(i === FREE ? { id: 'free', kind: 'free', done: true } : (picked[k++] || { id: `empty${i}`, kind: 'free', done: true }));
  return board;
};

export const lineStatus = (board) => LINES.map(([id, name, idx]) => ({ id, name, idx, left: idx.filter((i) => !board[i].done) }));
