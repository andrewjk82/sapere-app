import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';
import { recoverMissingXP } from '../services/xpRecoveryService';
import { tryAwardSecretNoteClearBonus } from '../services/secretNoteBonusService';

/**
 * Single shared realtime listener for the signed-in user's own
 * users/{uid} document.
 *
 * Previously Sidebar, Dashboard and Settings each opened their own
 * onSnapshot on the exact same doc — three listeners reading identical
 * data, so every profile change was billed 3×. This provider consolidates
 * them into one; consumers read `profile` for free via useProfile().
 */
const ProfileContext = createContext({ profile: null, profileLoading: true });

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const recoveryRanRef = useRef(false);

  // Run XP recovery once per session after sign-in.
  // Probes last 7 days by direct doc ID — no collection scans.
  useEffect(() => {
    if (!user?.uid || recoveryRanRef.current) return;
    recoveryRanRef.current = true;
    recoverMissingXP(user.uid).catch(() => {});
  }, [user?.uid]);

  // Secret-Note clear bonus: local note counts + users.secretNoteClearBonus stamp.
  // Ineligible / already-claimed paths do zero network. Award = 1 txn max/day.
  useEffect(() => {
    if (!user?.uid || !profile || profile.role === 'admin') return undefined;
    tryAwardSecretNoteClearBonus(user.uid, profile).catch(() => {});
    return undefined;
  }, [user?.uid, profile]);

  useEffect(() => {
    if (!user?.uid) {
      setProfile(null);
      setProfileLoading(false);
      recoveryRanRef.current = false;
      return undefined;
    }
    setProfileLoading(true);
    const ref = doc(db, 'users', user.uid);
    let unsub = () => {};
    let cancelled = false;

    // Keep realtime profile while visible; pause when tab hidden so overnight
    // background tabs do not re-bill every XP/field write.
    const attach = () => {
      unsub();
      unsub = () => {};
      if (cancelled || document.visibilityState === 'hidden') return;
      unsub = onSnapshot(
        ref,
        (snap) => {
          setProfile(snap.exists() ? snap.data() : null);
          setProfileLoading(false);
        },
        (err) => {
          console.warn('Profile listener error:', err?.code || err);
          setProfileLoading(false);
        },
      );
    };

    attach();
    const onVis = () => {
      if (document.visibilityState === 'hidden') {
        unsub();
        unsub = () => {};
      } else {
        attach();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVis);
      unsub();
    };
  }, [user?.uid]);

  return (
    <ProfileContext.Provider value={{ profile, profileLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
