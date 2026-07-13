/**
 * Safe point-reads for users/{uid}/daily_stats and calc_stats.
 *
 * DO NOT use:
 *   db.collection('users').doc(uid).collection('daily_stats').get()
 * That bills 1 read per historical day (often 30–90+ per student). Full
 * all-user scans easily hit thousands of reads in one investigation.
 *
 * DO use:
 *   getUserStatDoc(db, uid, 'daily_stats', '2026-07-13')
 *   getUserStatsForDateRange(db, uid, 'daily_stats', '2026-07-11', '2026-07-13')
 *
 * Admin scripts should import from this module (firebase-admin Firestore).
 */

/** @param {string} from YYYY-MM-DD @param {string} to YYYY-MM-DD */
export function eachDateInclusive(from, to) {
  const out = [];
  const start = parseYmd(from);
  const end = parseYmd(to);
  if (!start || !end || start > end) return out;
  const cur = new Date(start);
  while (cur <= end) {
    out.push(formatYmd(cur));
    cur.setDate(cur.getDate() + 1);
  }
  // Hard cap — never silently walk years of history
  if (out.length > 120) {
    throw new Error(
      `safeUserStats: date range too wide (${out.length} days). Max 120. Use a tighter window.`,
    );
  }
  return out;
}

function parseYmd(s) {
  const m = String(s || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

function formatYmd(d) {
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${mo}-${day}`;
}

export function todayYmdLocal() {
  return new Date().toLocaleDateString('en-CA');
}

/**
 * Single point-read. Missing docs do not throw — returns null.
 * @param {FirebaseFirestore.Firestore} db
 * @param {'daily_stats'|'calc_stats'} col
 */
export async function getUserStatDoc(db, uid, col, dateYmd) {
  assertCol(col);
  assertYmd(dateYmd);
  const snap = await db.collection('users').doc(uid).collection(col).doc(dateYmd).get();
  if (!snap.exists) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Point-read every day in [fromYmd, toYmd]. Max 120 days.
 * Returns only existing docs (skips missing dates).
 */
export async function getUserStatsForDateRange(db, uid, col, fromYmd, toYmd) {
  assertCol(col);
  const dates = eachDateInclusive(fromYmd, toYmd);
  const rows = [];
  // Sequential is fine for admin scripts; parallel can trip rate limits.
  for (const day of dates) {
    const row = await getUserStatDoc(db, uid, col, day);
    if (row) rows.push(row);
  }
  return rows;
}

/**
 * Post-XP-reset window helper (Sydney season reset ~ 2026-07-11).
 * Override with env SAPERE_STATS_SINCE=YYYY-MM-DD
 */
export async function getUserStatsSinceReset(db, uid, col, sinceYmd) {
  const since = sinceYmd || process.env.SAPERE_STATS_SINCE || '2026-07-11';
  return getUserStatsForDateRange(db, uid, col, since, todayYmdLocal());
}

/**
 * Guard: refuse accidental full-collection scans in new scripts.
 * Call before any .collection('daily_stats').get() if you must keep a legacy path.
 */
export function assertNoFullStatsCollectionScan(reason = '') {
  const allow = process.env.SAPERE_ALLOW_FULL_STATS_SCAN === '1';
  if (allow) {
    console.warn('[safeUserStats] FULL stats collection scan allowed via SAPERE_ALLOW_FULL_STATS_SCAN=1', reason || '');
    return;
  }
  throw new Error(
    `[safeUserStats] Full getDocs(users/*/daily_stats|calc_stats) is blocked.\n` +
      `  Use getUserStatDoc / getUserStatsForDateRange / getUserStatsSinceReset instead.\n` +
      `  Emergency override: SAPERE_ALLOW_FULL_STATS_SCAN=1\n` +
      (reason ? `  Context: ${reason}\n` : ''),
  );
}

function assertCol(col) {
  if (col !== 'daily_stats' && col !== 'calc_stats') {
    throw new Error(`safeUserStats: col must be daily_stats or calc_stats, got ${col}`);
  }
}

function assertYmd(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(s || ''))) {
    throw new Error(`safeUserStats: expected YYYY-MM-DD, got ${s}`);
  }
}
