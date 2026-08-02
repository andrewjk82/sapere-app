/**
 * studyTimeService.js
 *
 * Cumulative (all-time) per-subject study time, tracked by the Study Timer
 * page's stopwatch, plus a low-traffic "top 10 by total study time"
 * leaderboard — icon + rank only, no names ever stored or shown.
 *
 * Traffic model — copied from timesTableSprintService.js:
 *   - `study_time_leaderboard/top10` is ONE small doc holding the whole top
 *     10. Clients attach a single onSnapshot to it, so Firestore only bills
 *     when the top 10 actually changes.
 *   - That doc is mirrored into localStorage, so a returning student paints
 *     the leaderboard instantly at zero cost while the listener attaches.
 *   - The top 10 is only recomputed (a bounded limit-10 query) by the client
 *     whose new total could plausibly change it — checked locally first, no
 *     read. A `signature` string comparison then guards the actual write, so
 *     an unchanged podium is never rewritten.
 *   - The stopwatch itself never touches Firestore while running — it flushes
 *     accumulated seconds at natural breakpoints only (see SubjectStopwatch).
 */

import {
  collection, doc, getDoc, getDocs, onSnapshot, query, orderBy, limit, where,
  runTransaction, serverTimestamp, getCountFromServer, increment, writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from './localCacheService';
import { trackRead, trackWrite } from './trafficTrackerService';

export const TOTALS_COLLECTION = 'study_time_totals';
export const META_DOC_PATH = ['study_time_leaderboard', 'top10'];
export const TOP_N = 10;

const CACHE_KEY = 'studytimer:leaderboard';

// ── Leaderboard meta (cached + realtime) ────────────────────────────────────

/** Last known top 10 from localStorage — paints instantly, costs nothing. */
export const readCachedTop10 = () => {
  const cached = localCache.get(CACHE_KEY);
  return cached && Array.isArray(cached.top10) ? cached : null;
};

const writeCachedTop10 = (meta) => {
  localCache.set(CACHE_KEY, {
    version: Number(meta?.version) || 0,
    signature: meta?.signature || '',
    top10: Array.isArray(meta?.top10) ? meta.top10 : [],
  });
};

/**
 * Single realtime listener on the top-10 doc. Emits the cached value first
 * so the UI never flashes empty, then live updates. Returns an unsubscribe fn.
 */
export const subscribeStudyTimeMeta = (onChange) => {
  const cached = readCachedTop10();
  if (cached) onChange(cached);

  return onSnapshot(
    doc(db, ...META_DOC_PATH),
    (snap) => {
      const data = snap.exists()
        ? snap.data()
        : { version: 0, signature: '', top10: [] };
      if (!snap.metadata.fromCache) trackRead(1, 'studytime_meta');
      writeCachedTop10(data);
      onChange(data);
    },
    (err) => console.warn('[studytime] meta listener error:', err?.code || err),
  );
};

const signatureOf = (top10) =>
  top10.map((e) => `${e.uid}:${e.totalSec}`).join('|');

/**
 * True when `newTotalSec` could change the visible top 10. Uses only the
 * meta doc the client already holds, so a mid-table total is decided
 * without touching Firestore.
 */
export const couldChangeTop10 = (meta, uid, newTotalSec) => {
  const top10 = Array.isArray(meta?.top10) ? meta.top10 : [];
  if (top10.length < TOP_N) return true;
  if (top10.some((e) => e.uid === uid)) return true; // may reorder the board
  return newTotalSec > Number(top10[top10.length - 1]?.totalSec ?? 0);
};

/**
 * Re-derive the top 10 from live totals and publish it — but only if it
 * actually differs from what is already published.
 * @returns {Promise<object|null>} the new meta, or null when nothing changed.
 */
export const refreshTop10 = async () => {
  const queryStartedAt = Date.now();

  const snap = await getDocs(query(
    collection(db, TOTALS_COLLECTION),
    orderBy('totalSec', 'desc'),
    limit(TOP_N),
  ));
  trackRead(snap.size || 1, 'studytime_top10');

  const top10 = snap.docs.map((d) => {
    const data = d.data();
    return {
      uid: data.uid || d.id,
      avatarUrl: data.avatarUrl || '',
      totalSec: Number(data.totalSec) || 0,
    };
  });
  const signature = signatureOf(top10);

  let published = null;
  await runTransaction(db, async (tx) => {
    const metaRef = doc(db, ...META_DOC_PATH);
    const current = (await tx.get(metaRef)).data() || null;

    // Another flush published after our query started — theirs is fresher.
    if (current && Number(current.version) > queryStartedAt) return;
    // The board is byte-for-byte what is already live: no write, no reads
    // for every other student's listener.
    if (current && current.signature === signature) return;

    published = {
      version: Date.now(),
      signature,
      top10,
      updatedAt: serverTimestamp(),
    };
    tx.set(metaRef, published, { merge: true });
  });

  if (published) trackWrite(1, 'studytime_meta');
  return published;
};

// ── Ranking ──────────────────────────────────────────────────────────────

/**
 * The student's own placing when outside the top 10. One count aggregation
 * (billed as a single read), called once per page visit — never polled.
 */
export const fetchOwnRank = async (totalSec) => {
  if (!Number.isFinite(totalSec)) return null;
  try {
    const agg = await getCountFromServer(query(
      collection(db, TOTALS_COLLECTION),
      where('totalSec', '>', totalSec),
    ));
    trackRead(1, 'studytime_rank');
    return (agg.data().count || 0) + 1;
  } catch (err) {
    console.warn('[studytime] rank lookup failed:', err?.code || err);
    return null;
  }
};

/** This student's own total doc — a point read by uid. */
export const fetchMyTotal = async (uid) => {
  if (!uid) return null;
  try {
    const snap = await getDoc(doc(db, TOTALS_COLLECTION, uid));
    trackRead(1, 'studytime_my_total');
    return snap.exists() ? snap.data() : null;
  } catch (err) {
    console.warn('[studytime] own total fetch failed:', err?.code || err);
    return null;
  }
};

// ── Flushing a study session ────────────────────────────────────────────

/**
 * Persist an elapsed chunk of study time. Increments the day's per-subject
 * breakdown, the day's total, and the student's all-time total in one
 * batch — then, only if the new all-time total could plausibly change the
 * leaderboard, recomputes and (if changed) republishes the top 10.
 *
 * @returns {{ totalSec: number, meta: object|null }}
 */
export const flushStudySession = async ({ uid, dateStr, subject, deltaSec, avatarUrl, hourBreakdown = null, currentMeta = null }) => {
  if (!uid || !dateStr || !subject || !Number.isFinite(deltaSec) || deltaSec <= 0) {
    return { totalSec: null, meta: currentMeta };
  }

  const dailyStatsRef = doc(db, 'users', uid, 'daily_stats', dateStr);
  const totalsRef = doc(db, TOTALS_COLLECTION, uid);
  const subjectKey = String(subject).replace(/[.$/[\]#]/g, '_');

  // Optional "what time of day" breakdown — { hour(0-23): seconds } — used
  // by the Study Timer's 24-hour ring. Approximate (see splitSecondsIntoHourBuckets).
  const studyTimeByHour = {};
  if (hourBreakdown) {
    Object.entries(hourBreakdown).forEach(([hour, sec]) => {
      if (Number(sec) > 0) studyTimeByHour[hour] = { [subjectKey]: increment(Number(sec)) };
    });
  }

  const batch = writeBatch(db);
  batch.set(dailyStatsRef, {
    studyTimeBySubject: { [subjectKey]: increment(deltaSec) },
    studyTimeTotalSec: increment(deltaSec),
    ...(Object.keys(studyTimeByHour).length > 0 ? { studyTimeByHour } : {}),
  }, { merge: true });
  batch.set(totalsRef, {
    uid,
    avatarUrl: avatarUrl || '',
    totalSec: increment(deltaSec),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  await batch.commit();
  trackWrite(2, 'studytime_flush');

  const myTotalDoc = await fetchMyTotal(uid);
  const totalSec = Number(myTotalDoc?.totalSec) || 0;

  let meta = currentMeta;
  if (couldChangeTop10(currentMeta, uid, totalSec)) {
    try {
      meta = (await refreshTop10()) || currentMeta;
    } catch (err) {
      console.warn('[studytime] top-10 refresh failed:', err?.code || err);
    }
  }

  return { totalSec, meta };
};
