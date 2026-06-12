import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from '../services/localCacheService';
import {
  CHALLENGE_YEAR,
  getChallengeBootCacheKey,
  getChallengeBootMetaId,
} from '../utils/challengeUtils';
import { getDailyAssignmentCacheKey } from '../services/dailyAssignmentService';

/**
 * Manages today's challenge completion status, student profile, and chapter
 * progress. Boots instantly from local cache then reconciles with Firestore.
 * Handles teacher-initiated resets via a realtime sync_meta listener.
 *
 * Returns status flags, setters, profile data, and a refreshStudentProfile fn.
 */
export const useChallengeStatus = (uid) => {
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [abandonedToday, setAbandonedToday] = useState(false);
  const [calcCompletedToday, setCalcCompletedToday] = useState(false);
  const [calcAbandonedToday, setCalcAbandonedToday] = useState(false);
  const [todayStatusReady, setTodayStatusReady] = useState(false);
  const [studentProfile, setStudentProfile] = useState(null);
  const [chapterProgress, setChapterProgress] = useState(null);

  // ── Apply status flags from local cache ──
  const applyStatusFromCache = useCallback(() => {
    if (!uid) return;
    const today = new Date().toLocaleDateString('en-CA');
    const cached = localCache.get(getChallengeBootCacheKey(uid));
    if (cached?.date !== today) return;
    setTodayCompleted(Boolean(cached.todayCompleted));
    setAbandonedToday(Boolean(cached.abandonedToday));
    setCalcCompletedToday(Boolean(cached.calcCompletedToday));
    setCalcAbandonedToday(Boolean(cached.calcAbandonedToday));
  }, [uid]);

  // ── Boot from cache, then reconcile with Firestore ──
  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    const today = new Date().toLocaleDateString('en-CA');
    const cacheKey = getChallengeBootCacheKey(uid);
    const cached = localCache.get(cacheKey);

    const localBoot = cached?.date === today
      ? cached
      : {
          date: today,
          todayCompleted: false,
          abandonedToday: false,
          calcCompletedToday: false,
          calcAbandonedToday: false,
          dailyStatus: 'open',
          calcStatus: 'open',
          studentProfile: cached?.studentProfile || {},
          chapterProgress: cached?.chapterProgress ?? null,
        };

    // Apply local cache immediately — UI doesn't wait for Firestore
    setTodayCompleted(Boolean(localBoot.todayCompleted));
    setAbandonedToday(Boolean(localBoot.abandonedToday));
    setCalcCompletedToday(Boolean(localBoot.calcCompletedToday));
    setCalcAbandonedToday(Boolean(localBoot.calcAbandonedToday));
    setTodayStatusReady(true);
    if (localBoot.studentProfile) setStudentProfile(localBoot.studentProfile);
    if (localBoot.chapterProgress !== undefined) setChapterProgress(localBoot.chapterProgress);
    localCache.set(cacheKey, { ...localBoot, savedAt: Date.now() });

    const fetchRemoteData = async () => {
      try {
        const nextBoot = { ...localBoot };

        // Re-fetch profile if cache is stale (> 5 min) or missing
        const PROFILE_TTL_MS = 5 * 60 * 1000;
        const profileAge = Date.now() - (cached?.savedAt || 0);
        const shouldFetchProfile =
          !localBoot.studentProfile ||
          Object.keys(localBoot.studentProfile).length === 0 ||
          profileAge > PROFILE_TTL_MS;

        if (shouldFetchProfile) {
          const snap = await getDoc(doc(db, 'users', uid));
          if (cancelled) return;
          nextBoot.studentProfile = snap.exists() ? snap.data() : (localBoot.studentProfile || {});
        }

        if (!cancelled) setStudentProfile(nextBoot.studentProfile);

        const years = Array.isArray(nextBoot.studentProfile.assignedYear)
          ? nextBoot.studentProfile.assignedYear
          : [nextBoot.studentProfile.assignedYear || nextBoot.studentProfile.year || CHALLENGE_YEAR];
        const assignedYear = years[0];

        // Fetch chapter progress if missing OR stale (same TTL as profile)
        const shouldFetchProgress = localBoot.chapterProgress === undefined || profileAge > PROFILE_TTL_MS;
        if (shouldFetchProgress) {
          try {
            const progressKey = `${String(assignedYear).replace(' ', '_')}_daily`;
            const progressSnap = await getDoc(doc(db, 'users', uid, 'chapterProgress', progressKey));
            if (cancelled) return;
            nextBoot.chapterProgress = progressSnap.exists() ? progressSnap.data() : null;
            if (!cancelled) setChapterProgress(nextBoot.chapterProgress);
          } catch (e) {
            console.warn('progress fetch failed (non-fatal):', e?.code || e);
          }
        }

        // Merge back into cache, preserving any reset status already applied
        const latestCache = localCache.get(cacheKey) || {};
        localCache.set(cacheKey, {
          ...latestCache,
          studentProfile: nextBoot.studentProfile,
          chapterProgress: nextBoot.chapterProgress,
          savedAt: Date.now(),
        });
      } catch (err) {
        console.error('Error fetching challenge boot data:', err);
      }
    };

    fetchRemoteData();
    return () => { cancelled = true; };
  }, [uid]);

  // ── Re-fetch profile when teacher changes curriculum ──
  const refreshStudentProfile = useCallback(async (newProfileVersion) => {
    if (!uid) return null;
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      if (!snap.exists()) return null;
      const freshProfile = snap.data();
      setStudentProfile(freshProfile);

      const bootKey = getChallengeBootCacheKey(uid);
      const bootCache = localCache.get(bootKey) || {};
      localCache.set(bootKey, {
        ...bootCache,
        studentProfile: freshProfile,
        profileVersion: newProfileVersion || bootCache.profileVersion || Date.now(),
        savedAt: Date.now(),
      });

      // Invalidate today's cached daily assignment so it regenerates
      const today = new Date().toLocaleDateString('en-CA');
      localCache.remove(getDailyAssignmentCacheKey(uid, today));
      return freshProfile;
    } catch (e) {
      console.warn('refreshStudentProfile failed (non-fatal):', e?.code || e);
      return null;
    }
  }, [uid]);

  // ── Realtime sync_meta listener — reflects teacher resets immediately ──
  useEffect(() => {
    if (!uid) return;

    const today = new Date().toLocaleDateString('en-CA');
    const bootDocId = getChallengeBootMetaId(uid, today);
    const cacheKey = getChallengeBootCacheKey(uid);
    const storageCacheKey = `sapere-cache:${cacheKey}`;

    const unsubBoot = onSnapshot(
      doc(db, 'sync_meta', bootDocId),
      (snap) => {
        if (!snap.exists()) return;
        const data = snap.data();
        const currentCache = localCache.get(cacheKey) || {};

        // Detect teacher-pushed curriculum version bump
        const serverProfileVersion = Number(data.profileVersion || 0);
        if (serverProfileVersion > 0 && serverProfileVersion > Number(currentCache.profileVersion || 0)) {
          refreshStudentProfile(serverProfileVersion);
        }

        const currentTodayStr = new Date().toLocaleDateString('en-CA');
        if (today !== currentTodayStr) return; // stale snapshot from yesterday

        const serverDaily = data.status?.daily || 'open';
        const serverCalc = data.status?.calc || 'open';

        const serverDailyResetTime = data.dailyResetAt
          ? new Date(data.dailyResetAt).getTime()
          : (data.resetAt ? new Date(data.resetAt).getTime() : 0);
        const serverCalcResetTime = data.calcResetAt
          ? new Date(data.calcResetAt).getTime()
          : (data.resetAt ? new Date(data.resetAt).getTime() : 0);

        const cachedDailyResetAt = currentCache.dailyResetAt || 0;
        const cachedCalcResetAt = currentCache.calcResetAt || 0;

        const hasNewerDailyReset = serverDailyResetTime > cachedDailyResetAt;
        const hasNewerCalcReset  = serverCalcResetTime  > cachedCalcResetAt;

        // Treat a matching non-zero reset timestamp as "already acknowledged"
        const dailyResetAlreadyApplied = serverDailyResetTime > 0 && serverDailyResetTime === cachedDailyResetAt;
        const calcResetAlreadyApplied  = serverCalcResetTime  > 0 && serverCalcResetTime  === cachedCalcResetAt;

        const finalDailyStatus =
          serverDaily === 'open' &&
          (currentCache.dailyStatus === 'completed' || currentCache.dailyStatus === 'abandoned') &&
          !hasNewerDailyReset && !dailyResetAlreadyApplied
            ? (currentCache.dailyStatus || 'open')
            : serverDaily;

        const finalCalcStatus =
          serverCalc === 'open' &&
          (currentCache.calcStatus === 'completed' || currentCache.calcStatus === 'abandoned') &&
          !hasNewerCalcReset && !calcResetAlreadyApplied
            ? (currentCache.calcStatus || 'open')
            : serverCalc;

        const patch = {
          date: today,
          dailyStatus: finalDailyStatus,
          calcStatus:  finalCalcStatus,
          todayCompleted:     finalDailyStatus === 'completed',
          abandonedToday:     finalDailyStatus === 'abandoned',
          calcCompletedToday: finalCalcStatus  === 'completed',
          calcAbandonedToday: finalCalcStatus  === 'abandoned',
          dailyResetAt: hasNewerDailyReset ? serverDailyResetTime : cachedDailyResetAt,
          calcResetAt:  hasNewerCalcReset  ? serverCalcResetTime  : cachedCalcResetAt,
          savedAt: currentCache.savedAt || 0,
        };

        if (JSON.stringify(patch) !== JSON.stringify(currentCache)) {
          localCache.set(cacheKey, patch);
          applyStatusFromCache();
          
          if (hasNewerDailyReset || hasNewerCalcReset) {
            window.dispatchEvent(new Event('sapere-challenge-reset-applied'));
          }
        }
      },
      (err) => console.warn('[useChallengeStatus] sync_meta listener failed:', err),
    );

    const handleStorage = (event) => {
      if (!event || event.key === storageCacheKey) applyStatusFromCache();
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sapere-challenge-reset-applied', handleStorage);

    return () => {
      unsubBoot();
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sapere-challenge-reset-applied', handleStorage);
    };
  }, [uid, applyStatusFromCache, refreshStudentProfile]);

  return {
    todayCompleted,     setTodayCompleted,
    abandonedToday,     setAbandonedToday,
    calcCompletedToday, setCalcCompletedToday,
    calcAbandonedToday, setCalcAbandonedToday,
    todayStatusReady,
    studentProfile,     setStudentProfile,
    chapterProgress,    setChapterProgress,
    refreshStudentProfile,
  };
};
