/**
 * Reset today's Daily Challenge + Daily Calculation for every student who has
 * NOT completed them, so fresh (post-fix) question sets are served.
 *
 * Mirrors the teacher's per-attempt reset protocol in StudentDetail.jsx
 * (handleResetChallenge), minus client-only steps:
 *   1. Delete the 19 broken-answer question docs (audit:mc-seeds) so
 *      regenerated assignments cannot include them. origin:'teacher' docs are
 *      NEVER touched. Follow with rebuildQuestionIndexes.js (run automatically
 *      in --apply mode) per the CLAUDE.md contract.
 *   2. Per unfinished student:
 *      - delete users/{uid}/daily_stats/{today} (incomplete start-lock only)
 *      - delete users/{uid}/daily_assignments/{today} + next_prep
 *        (they embed full question snapshots generated pre-fix)
 *      - sync_meta/challenge_boot_{uid}_{today}: status.daily/'calc' → "open",
 *        version bump so the student app's listener refreshes
 *      - admin_daily_summary/{today}: mark that student open/not-done
 *   3. Calc questions are generated locally at start (local-random), so calc
 *      reset is status-only — no question docs involved.
 *
 * Completed challenges are never touched. An incomplete stat doc carrying
 * xpEarned > 0 is SKIPPED and flagged (needs the teacher UI reset, which
 * recalculates XP) — this script must not strand XP.
 *
 * Traffic: ~1 + 19 + N + 4N point reads (N = registered students, no
 * collection scans of daily_stats/calc_stats — per-day doc ids only).
 *
 * Usage:
 *   node tools/scripts/resetUnfinishedDailyChallenges.js          # dry run
 *   node tools/scripts/resetUnfinishedDailyChallenges.js --apply  # execute
 *   node tools/scripts/resetUnfinishedDailyChallenges.js --date 2026-07-17
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { spawnSync } from 'child_process';

const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
initializeApp({ credential: cert(JSON.parse(readFileSync(saPath, 'utf8'))) });
const db = getFirestore();

const APPLY = process.argv.includes('--apply');
const dateArg = process.argv[process.argv.indexOf('--date') + 1];
const TODAY = process.argv.includes('--date') && /^\d{4}-\d{2}-\d{2}$/.test(dateArg || '')
  ? dateArg
  : new Date().toLocaleDateString('en-CA');

const ADMIN_EMAIL = 'andrewjk82@gmail.com';
const NON_STUDENT_ROLES = new Set(['teacher', 'tutor', 'admin']);

// From `npm run audit:mc-seeds` (16 wrong-answer + 3 ungradeable). Doc id ==
// seed id (chapterSeeder writes doc(collRef, raw.id)).
const BROKEN_QUESTIONS = [
  { id: 'y11a-7d-q17a', chapterId: 'y11a-7' },
  { id: 'y10-1a-q2g', chapterId: 'y10-1' },
  { id: 'y10-1a-q2h', chapterId: 'y10-1' },
  { id: 'y10-1a-q4e_fraction', chapterId: 'y10-1' },
  { id: 'y10-1e-q9', chapterId: 'y10-1' },
  { id: 'y10-1e-q13', chapterId: 'y10-1' },
  { id: 'y10-3j-q6', chapterId: 'y10-3' },
  { id: 'y10-3j-q11', chapterId: 'y10-3' },
  { id: 'y10-3j-q12', chapterId: 'y10-3' },
  { id: 'y8-3a-q14', chapterId: 'y8-3' },
  { id: 'y8-5i-q2', chapterId: 'y8-5' },
  { id: 'y8-5i-q3', chapterId: 'y8-5' },
  { id: 'y7-3h-q28a', chapterId: 'y7-3' },
  { id: 'y7-3h-q28b', chapterId: 'y7-3' },
  { id: 'y7-3h-q28c', chapterId: 'y7-3' },
  { id: 'abb2020e1s-mc9', chapterId: 'exam:abb-2020-ext1' },
  { id: 'asc2020-mc8', chapterId: 'exam:asc-2020' },
  { id: 'cra2023-q16a', chapterId: 'exam:cra-2023' },
  { id: 'cra2023s-q16a', chapterId: 'exam:cra-2023' },
];

const log = (...a) => console.log(...a);
const tag = APPLY ? '[APPLY]' : '[dry-run]';

const main = async () => {
  log(`\nReset unfinished daily challenges — date key: ${TODAY} ${tag}\n`);

  // ── 1. Broken question docs ────────────────────────────────────────────
  const brokenRefs = BROKEN_QUESTIONS.map((b) => db.collection('questions').doc(b.id));
  const brokenSnaps = await db.getAll(...brokenRefs);
  const toDeleteBroken = [];
  const affectedChapters = new Set();
  brokenSnaps.forEach((snap, i) => {
    const meta = BROKEN_QUESTIONS[i];
    if (!snap.exists) { log(`  broken ${meta.id}: not in Firestore (never seeded / already removed)`); return; }
    if (snap.data()?.origin === 'teacher') { log(`  broken ${meta.id}: origin=teacher — SKIPPED (contract)`); return; }
    toDeleteBroken.push(snap.ref);
    affectedChapters.add(meta.chapterId);
    log(`  broken ${meta.id}: will delete (answer=${JSON.stringify(snap.data()?.answer)})`);
  });

  // ── 2. Students ────────────────────────────────────────────────────────
  const usersSnap = await db.collection('users').get();
  const students = usersSnap.docs.filter((d) => {
    const u = d.data();
    if ((u.email || '').toLowerCase() === ADMIN_EMAIL) return false;
    if (NON_STUDENT_ROLES.has(String(u.role || 'student').toLowerCase())) return false;
    return true;
  });
  log(`\n  users: ${usersSnap.size} docs, ${students.length} treated as students\n`);

  const plans = [];
  const flagged = [];
  for (const s of students) {
    const uid = s.id;
    const name = s.data().name || s.data().displayName || s.data().firstName || s.data().email || uid;
    const [dailyStat, calcStat, assignment, prep] = await db.getAll(
      db.doc(`users/${uid}/daily_stats/${TODAY}`),
      db.doc(`users/${uid}/calc_stats/${TODAY}`),
      db.doc(`users/${uid}/daily_assignments/${TODAY}`),
      db.doc(`users/${uid}/daily_assignments/next_prep`),
    );

    const dailyCompleted = dailyStat.exists && dailyStat.data()?.completed === true;
    const calcCompleted = calcStat.exists && calcStat.data()?.completed === true;
    const assignmentCompleted = assignment.exists && assignment.data()?.status === 'completed';

    const plan = { uid, name, actions: [] };

    if (!dailyCompleted && !assignmentCompleted) {
      const xp = Number(dailyStat.data()?.xpEarned) || 0;
      if (dailyStat.exists && xp > 0) {
        flagged.push({ uid, name, why: `incomplete daily_stats carries xpEarned=${xp} — reset via teacher UI (XP recalc)` });
      } else {
        if (dailyStat.exists) plan.actions.push({ op: 'delete', ref: dailyStat.ref, what: `daily_stats/${TODAY} (incomplete lock, status=${dailyStat.data()?.abandoned ? 'abandoned' : 'started'})` });
        if (assignment.exists) plan.actions.push({ op: 'delete', ref: assignment.ref, what: `daily_assignments/${TODAY} (status=${assignment.data()?.status})` });
        if (prep.exists) plan.actions.push({ op: 'delete', ref: prep.ref, what: 'daily_assignments/next_prep (stale pre-gen)' });
        plan.daily = true;
      }
    }
    if (!calcCompleted && calcStat.exists) {
      plan.actions.push({ op: 'delete', ref: calcStat.ref, what: `calc_stats/${TODAY} (incomplete lock)` });
      plan.calc = true;
    }
    // Status metadata only matters when something is being reset.
    if (plan.daily || plan.calc) {
      plan.actions.push({ op: 'bootmeta', what: `sync_meta boot: ${[plan.daily && 'status.daily→open', plan.calc && 'status.calc→open'].filter(Boolean).join(', ')}` });
    }
    if (plan.actions.length > 0) plans.push(plan);
  }

  // ── Report ─────────────────────────────────────────────────────────────
  log(`  Students to reset: ${plans.length}`);
  for (const p of plans) {
    log(`\n  ${p.name} (${p.uid})${p.daily ? ' [daily]' : ''}${p.calc ? ' [calc]' : ''}`);
    p.actions.forEach((a) => log(`    - ${a.what}`));
  }
  if (flagged.length) {
    log('\n  ⚠ Flagged (NOT touched — needs teacher-UI reset with XP recalc):');
    flagged.forEach((f) => log(`    - ${f.name}: ${f.why}`));
  }
  log(`\n  Broken question docs to delete: ${toDeleteBroken.length} (chapters: ${[...affectedChapters].join(', ') || 'none'})`);

  if (!APPLY) {
    log('\nDry run only. Re-run with --apply to execute.\n');
    return;
  }

  // ── 3. Execute ─────────────────────────────────────────────────────────
  let batch = db.batch(); let n = 0;
  const flush = async () => { if (n > 0) { await batch.commit(); batch = db.batch(); n = 0; } };
  const add = async (fn) => { fn(batch); n += 1; if (n >= 400) await flush(); };

  for (const ref of toDeleteBroken) await add((b) => b.delete(ref));

  const summaryPatch = {};
  for (const p of plans) {
    for (const a of p.actions) {
      if (a.op === 'delete') await add((b) => b.delete(a.ref));
    }
    const bootRef = db.doc(`sync_meta/challenge_boot_${p.uid}_${TODAY}`);
    await add((b) => b.set(bootRef, {
      version: Date.now(),
      statusVersion: Date.now(),
      updatedAt: FieldValue.serverTimestamp(),
      resetBy: 'admin-script',
      ...(p.daily ? { dailyResetAt: new Date().toISOString() } : {}),
      ...(p.calc ? { calcResetAt: new Date().toISOString() } : {}),
    }, { merge: true }));
    await flush(); // set must land before dot-path update on a fresh doc
    const statusUpdate = {};
    if (p.daily) statusUpdate['status.daily'] = 'open';
    if (p.calc) statusUpdate['status.calc'] = 'open';
    await bootRef.update(statusUpdate);

    summaryPatch[p.uid] = {
      done: false,
      ...(p.daily ? { dailyDone: false, dailyEnded: false, dailyStatus: 'open' } : {}),
      ...(p.calc ? { calcDone: false, calcEnded: false, calcStatus: 'open' } : {}),
    };
  }
  await flush();

  if (Object.keys(summaryPatch).length > 0) {
    await db.doc(`admin_daily_summary/${TODAY}`).set({ students: summaryPatch }, { merge: true });
  }

  log(`\n  ✓ Applied: ${plans.length} student(s) reset, ${toDeleteBroken.length} broken question doc(s) deleted.`);

  // ── 4. Rebuild indexes (CLAUDE.md contract) ────────────────────────────
  if (affectedChapters.size > 0) {
    log(`\n  Rebuilding question indexes: ${[...affectedChapters].join(' ')}`);
    const res = spawnSync('node', ['tools/scripts/rebuildQuestionIndexes.js', ...affectedChapters], { stdio: 'inherit' });
    if (res.status !== 0) {
      console.error('\n  ✗ rebuildQuestionIndexes FAILED — run it manually before students query these chapters!');
      process.exit(1);
    }
  }
  log('\nDone.\n');
};

main().catch((e) => { console.error(e); process.exit(1); });
