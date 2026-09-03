#!/usr/bin/env node
/**
 * warmPracticePools.mjs — one-off remediation for the 2026-09-03 Daily Practice
 * "Assignment load timed out" outage.
 *
 * Cause: a bulk write to the questions collection ("dedupe-q2-sub-stems") bumped
 * sync_meta/questions.membershipVersion GLOBALLY. On each student's first Daily
 * Practice of the day, ensurePracticePool() (practicePoolService.js) sees the
 * global counter moved and re-reads every one of that student's target chapter
 * indexes to decide whether a rebuild is needed — 20-40+ sequential Firestore
 * round trips per student, all at the after-school peak, blowing the 20s start
 * guard.
 *
 * This script does that same work ONCE, server-side, off-peak, sequentially:
 *   - config signature unchanged + every chapter's index id-set unchanged
 *       → just stamp practice_pool/main.membershipVersion = <global>  (cheap)
 *   - config signature unchanged + some chapter's id-set changed
 *       → rebuild chapter_pools from the fresh indexes, preserving done[]/cycle/
 *         chapter_accuracy  (mirrors rebuildPool() exactly)
 *   - config signature CHANGED (teacher edited the student's scope)
 *       → leave it; the client regenerates that correctly on its own
 *   - no practice_pool yet → leave it; nothing stale to fix
 *
 * Default run is a DRY RUN. Pass --apply to write.
 *
 *   node tools/scripts/warmPracticePools.mjs            # dry run
 *   node tools/scripts/warmPracticePools.mjs --apply    # write
 */
import { readFileSync } from "fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const SA_PATH = "/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json";

initializeApp({ credential: cert(JSON.parse(readFileSync(SA_PATH, "utf8"))) });
const db = getFirestore();

// ── ported pure helpers (must stay identical to the deployed client) ──────────
// challengeUtils.js
const getYearNumber = (value) => {
  const parsed = parseInt(String(value || "").replace(/\D/g, ""), 10);
  return Number.isFinite(parsed) ? parsed : null;
};
const normalizeYearLabel = (value) => {
  const n = getYearNumber(value);
  return n === null ? String(value || "").trim() : `Year ${n}`;
};
// dailyAssignmentService.getCurriculumSignature (1-arg form used by ensurePracticePool)
const DEFAULT_YEAR = "Year 1";
const getCurriculumSignature = (p = {}) => {
  const rawYear = p.assignedYear || p.year || DEFAULT_YEAR;
  const years = (Array.isArray(rawYear)
    ? rawYear
    : String(rawYear).split(",").map((y) => y.trim()).filter(Boolean))
    .map(normalizeYearLabel).filter(Boolean).sort();
  const courses = (Array.isArray(p.assignedCourse)
    ? p.assignedCourse
    : [p.assignedCourse || "Advanced"]).slice().sort();
  const config = p.dailyPracticeConfig || {};
  const cfgYears = (Array.isArray(config.years) ? config.years : []).map(normalizeYearLabel).filter(Boolean).sort();
  const cfgChapters = (Array.isArray(config.chapters) ? config.chapters : []).slice().sort();
  return JSON.stringify({ years, courses, cfgYears, cfgChapters });
};
// practicePoolService.sameIdSet
const sameIdSet = (a = [], b = []) => {
  if (a.length !== b.length) return false;
  const s = new Set(a);
  for (const x of b) if (!s.has(x)) return false;
  return true;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── main ─────────────────────────────────────────────────────────────────────
const smSnap = await db.doc("sync_meta/questions").get();
const sm = smSnap.data() || {};
const globalMv = sm.membershipVersion != null ? Number(sm.membershipVersion) || 0 : Number(sm.version) || 0;
console.log(`global membershipVersion = ${globalMv}  (source="${sm.source || ""}")`);
console.log(APPLY ? "\n*** APPLY MODE — will write ***\n" : "\n(dry run — pass --apply to write)\n");

const usersSnap = await db.collection("users").get();
const indexCache = new Map(); // chapterId -> string[] ids
const readIndex = async (cid) => {
  if (indexCache.has(cid)) return indexCache.get(cid);
  const s = await db.doc(`question_index/${cid}`).get();
  // Mirror client readChapterIndex + readTargetIndexes: a missing index doc or
  // one without an ids array resolves to [] (not a distinct "changed" signal).
  const ids = s.exists && Array.isArray(s.data().ids) ? s.data().ids.map(String) : [];
  indexCache.set(cid, ids);
  return ids;
};

const buckets = { fresh: [], noPool: [], sigChanged: [], stamp: [], rebuild: [], error: [] };

for (const d of usersSnap.docs) {
  const u = d.data() || {};
  if (u.role === "admin" || u.email === "andrewjk82@gmail.com") continue;
  const uid = d.id;
  const label = `${uid.slice(0, 8)} "${String(u.name || u.firstName || "?").slice(0, 18)}"`;
  try {
    const poolSnap = await db.doc(`users/${uid}/practice_pool/main`).get();
    if (!poolSnap.exists) { buckets.noPool.push(label); continue; }
    const pool = poolSnap.data();
    const poolMv = Number(pool.membershipVersion || 0);
    if (poolMv === globalMv) { buckets.fresh.push(label); continue; }

    const recomputedSig = getCurriculumSignature(u);
    if (pool.curriculumSignature !== recomputedSig) {
      buckets.sigChanged.push(`${label}  storedSig≠recomputed`);
      continue;
    }

    const chapterIds = Object.keys(pool.chapter_pools || {});
    const prevPools = pool.chapter_pools || {};
    let changed = false;
    const freshResults = [];
    for (const cid of chapterIds) {
      const ids = await readIndex(cid);
      freshResults.push({ chapterId: cid, ids });
      if (!sameIdSet(ids, (prevPools[cid]?.ids || []).map(String))) changed = true;
    }

    if (!changed) {
      buckets.stamp.push(label);
      if (APPLY) {
        await db.doc(`users/${uid}/practice_pool/main`).set(
          { membershipVersion: globalMv }, { merge: true },
        );
        await sleep(120);
      }
    } else {
      const diffChs = freshResults
        .filter(({ chapterId, ids }) => !sameIdSet(ids, (prevPools[chapterId]?.ids || []).map(String)))
        .map(({ chapterId }) => chapterId);
      buckets.rebuild.push(`${label}  changed:[${diffChs.join(",")}]`);
      if (APPLY) {
        const ref = db.doc(`users/${uid}/practice_pool/main`);
        await db.runTransaction(async (tx) => {
          const liveSnap = await tx.get(ref);
          const live = liveSnap.exists ? liveSnap.data() : null;
          // Someone (or a concurrent client) may already have rebuilt to current.
          if (live && live.curriculumSignature === recomputedSig
            && Number(live.membershipVersion || 0) === globalMv) return;
          const lp = live?.chapter_pools || prevPools;
          const chapter_pools = {};
          freshResults.forEach(({ chapterId, ids }) => {
            const prevDone = new Set(lp[chapterId]?.done || []);
            chapter_pools[chapterId] = { ids, done: ids.filter((id) => prevDone.has(id)) };
          });
          tx.set(ref, {
            curriculumSignature: recomputedSig,
            membershipVersion: globalMv,
            cycle: live?.cycle || pool.cycle || 0,
            chapter_pools,
            chapter_accuracy: live?.chapter_accuracy || pool.chapter_accuracy || {},
            updatedAt: FieldValue.serverTimestamp(),
          }); // full replace — mirrors rebuildPool()
        });
        await sleep(200);
      }
    }
  } catch (e) {
    buckets.error.push(`${label}  ${e.message}`);
  }
}

const line = (k) => console.log(`\n${k} (${buckets[k].length}):\n  ${buckets[k].join("\n  ") || "—"}`);
console.log("\n================ SUMMARY ================");
console.log(`fresh=${buckets.fresh.length}  noPool=${buckets.noPool.length}  sigChanged=${buckets.sigChanged.length}  stamp=${buckets.stamp.length}  rebuild=${buckets.rebuild.length}  error=${buckets.error.length}`);
["stamp", "rebuild", "sigChanged", "noPool", "error", "fresh"].forEach(line);
console.log(APPLY ? "\n*** writes applied ***" : "\n(dry run only — re-run with --apply)");
process.exit(0);
