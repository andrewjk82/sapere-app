import { useState, useCallback } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from '../services/localCacheService';
import {
  MAX_HISTORY_PER_TYPE,
  getChallengeBootCacheKey,
  mergeChallengeBootCache,
} from '../utils/challengeUtils';

// Module-level cache: { [uid:date]: { daily, calc, fetchedAt } }
// Prevents redundant Firestore reads when the component re-mounts or the user
// switches between views rapidly. Invalidated after quiz finish (deriveStatus=false).
const _historyCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetches and reconciles challenge history (daily + calc) for a student.
 * Uses one-shot getDocs — not a realtime listener — because past records rarely change.
 * Teacher resets are handled separately by useChallengeStatus's sync_meta listener.
 *
 * @param {string} uid
 * @param {function} setTodayCompleted
 * @param {function} setAbandonedToday
 * @param {function} setCalcCompletedToday
 * @param {function} setCalcAbandonedToday
 */
export const useChallengeHistory = (uid, {
  setTodayCompleted,
  setAbandonedToday,
  setCalcCompletedToday,
  setCalcAbandonedToday,
}) => {
  const [history, setHistory] = useState([]);
  const [dailyStats, setDailyStats] = useState([]);
  const [historyLoaded, setHistoryLoaded] = useState(false); // kept for future use

  const fetchHistory = useCallback(async ({ deriveStatus = true } = {}) => {
    if (!uid) return;
    const today = new Date().toLocaleDateString('en-CA');
    const cacheKey = `${uid}:${today}`;

    // After quiz finish (deriveStatus=false) we always re-fetch so fresh stats
    // appear immediately. For regular view-switches, use the in-memory cache.
    if (deriveStatus) {
      const cached = _historyCache.get(cacheKey);
      if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
        const { daily: dailyData, calc: calcData } = cached;
        const merged = [...dailyData, ...calcData]
          .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
          .slice(0, 30);
        setHistory(merged);
        setDailyStats(dailyData);
        setHistoryLoaded(true);
        return;
      }
    } else {
      // Invalidate cache so the next normal fetch gets fresh data
      _historyCache.delete(cacheKey);
    }

    try {
      const [dailySnap, calcSnap] = await Promise.all([
        getDocs(query(
          collection(db, 'users', uid, 'daily_stats'),
          orderBy('timestamp', 'desc'),
          limit(MAX_HISTORY_PER_TYPE),
        )),
        getDocs(query(
          collection(db, 'users', uid, 'calc_stats'),
          orderBy('timestamp', 'desc'),
          limit(MAX_HISTORY_PER_TYPE),
        )),
      ]);

      const dailyData = dailySnap.docs.map(d => ({ id: d.id, statCollection: 'daily_stats', ...d.data() }));
      const calcData  = calcSnap.docs.map(d => ({ id: d.id, statCollection: 'calc_stats',  ...d.data() }));

      // Store in module-level cache for rapid re-mounts / view switches
      _historyCache.set(cacheKey, { daily: dailyData, calc: calcData, fetchedAt: Date.now() });

      const merged = [...dailyData, ...calcData]
        .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
        .slice(0, 30);

      setHistory(merged);
      setDailyStats(dailyData);
      setHistoryLoaded(true);

      // Reconcile today's status from fetched records.
      // Skipped right after finishQuiz (deriveStatus:false) — finishQuiz already set the correct state.
      if (!deriveStatus) return;

      const todayDaily = dailyData.find(item => item.id === today);
      const todayCalc  = calcData.find(item  => item.id === today);
      const cachedBoot = localCache.get(getChallengeBootCacheKey(uid));
      const dailyWasReset = cachedBoot?.date === today && cachedBoot.dailyStatus === 'open';
      const calcWasReset  = cachedBoot?.date === today && cachedBoot.calcStatus  === 'open';

      // Daily status
      if (dailyWasReset && !todayDaily) {
        setTodayCompleted(false);
        setAbandonedToday(false);
      } else if (todayDaily) {
        const completed = Boolean(todayDaily.completed);
        setTodayCompleted(completed);
        setAbandonedToday(!completed);
      } else if (cachedBoot?.date === today && !cachedBoot.todayCompleted && !cachedBoot.abandonedToday) {
        setTodayCompleted(false);
        setAbandonedToday(false);
      }

      // Calc status
      if (calcWasReset && !todayCalc) {
        setCalcCompletedToday(false);
        setCalcAbandonedToday(false);
      } else if (todayCalc) {
        const completed = Boolean(todayCalc.completed);
        setCalcCompletedToday(completed);
        setCalcAbandonedToday(!completed);
      } else if (cachedBoot?.date === today && !cachedBoot.calcCompletedToday && !cachedBoot.calcAbandonedToday) {
        setCalcCompletedToday(false);
        setCalcAbandonedToday(false);
      }

      // Persist reconciled status into boot cache
      if (!dailyWasReset && !calcWasReset && (todayDaily || todayCalc)) {
        mergeChallengeBootCache(uid, {
          date: today,
          ...(todayDaily ? {
            dailyStatus: todayDaily.completed ? 'completed' : 'abandoned',
            todayCompleted: Boolean(todayDaily.completed),
            abandonedToday: !todayDaily.completed,
          } : {}),
          ...(todayCalc ? {
            calcStatus: todayCalc.completed ? 'completed' : 'abandoned',
            calcCompletedToday: Boolean(todayCalc.completed),
            calcAbandonedToday: !todayCalc.completed,
          } : {}),
        });
      }
    } catch (err) {
      console.warn('history fetch failed (non-fatal):', err?.code || err);
    }
  }, [uid, setTodayCompleted, setAbandonedToday, setCalcCompletedToday, setCalcAbandonedToday]);

  return { history, setHistory, dailyStats, historyLoaded, fetchHistory };
};
