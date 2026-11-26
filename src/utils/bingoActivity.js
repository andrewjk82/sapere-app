// Today's small activities for the Daily Bingo, kept on this device (no reads, no writes): sprint rounds, extra rounds,
// Exam Prep rounds, Secret Note answers got right, study-timer seconds, joining the study room.
const key = (uid, date) => `sapere:bingoActivity:v1:${uid}:${date}`;
export const todayKey = () => new Date().toLocaleDateString('en-CA');

export const readActivity = (uid, date = todayKey()) => {
  try { return JSON.parse(localStorage.getItem(key(uid, date)) || '{}') || {}; } catch { return {}; }
};

export const markActivity = (uid, kind, amount = 1, date = todayKey()) => {
  if (!uid || !kind) return;
  try {
    const cur = readActivity(uid, date);
    cur[kind] = (Number(cur[kind]) || 0) + (Number(amount) || 0);
    localStorage.setItem(key(uid, date), JSON.stringify(cur));
    // Drop the day before yesterday and older.
    for (let i = localStorage.length - 1; i >= 0; i -= 1) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`sapere:bingoActivity:v1:${uid}:`) && k.slice(-10) < date) {
        const d = new Date(`${date}T12:00:00`); d.setDate(d.getDate() - 1);
        if (k.slice(-10) < d.toLocaleDateString('en-CA')) localStorage.removeItem(k);
      }
    }
    window.dispatchEvent(new Event('sapere:progress-updated'));
  } catch { /* storage full or blocked: the cell just stays unticked */ }
};
