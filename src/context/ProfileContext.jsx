import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

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

  useEffect(() => {
    if (!user?.uid) {
      setProfile(null);
      setProfileLoading(false);
      return undefined;
    }
    setProfileLoading(true);
    const ref = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(
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
    return () => unsubscribe();
  }, [user?.uid]);

  return (
    <ProfileContext.Provider value={{ profile, profileLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
