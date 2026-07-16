import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithCustomToken
} from 'firebase/auth';
import { auth, googleProvider, ADMIN_EMAIL } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const toUserState = (firebaseUser) => {
  if (!firebaseUser) return null;
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    providerData: firebaseUser.providerData || [],
    metadata: firebaseUser.metadata,
  };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => toUserState(auth.currentUser));
  const [loading, setLoading] = useState(() => !auth.currentUser);
  const [isAdmin, setIsAdmin] = useState(() => auth.currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(toUserState(firebaseUser));
      setIsAdmin(firebaseUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase());
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const refreshUser = useCallback(async () => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      setUser(null);
      setIsAdmin(false);
      return null;
    }

    await firebaseUser.reload();
    await firebaseUser.getIdToken(true);
    const refreshedUser = auth.currentUser;
    setUser(toUserState(refreshedUser));
    setIsAdmin(refreshedUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase());
    return refreshedUser;
  }, []);

  useEffect(() => {
    const refreshIfUnverified = () => {
      const firebaseUser = auth.currentUser;
      const isPasswordProvider = firebaseUser?.providerData?.some((p) => p?.providerId === 'password');
      if (firebaseUser && isPasswordProvider && !firebaseUser.emailVerified) {
        refreshUser().catch((err) => console.warn('Email verification refresh failed:', err));
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) refreshIfUnverified();
    };

    window.addEventListener('focus', refreshIfUnverified);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('focus', refreshIfUnverified);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refreshUser]);

  const signup = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(result.user);
    return result;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const resendVerificationEmail = async () => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) throw new Error('No signed-in user.');
    await sendEmailVerification(firebaseUser);
  };

  const value = {
    user,
    isAdmin,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    refreshUser,
    resendVerificationEmail
  };

  // Safety: if onAuthStateChanged is delayed, still mount the app quickly
  // so teachers never sit on a permanent blank white screen after sign-in.
  useEffect(() => {
    if (!loading) return undefined;
    const t = window.setTimeout(() => {
      console.warn('[Auth] auth loading safety timeout');
      setLoading(false);
    }, 2500);
    return () => window.clearTimeout(t);
  }, [loading]);

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        // Never render an empty document body — that looks like a frozen white page.
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            background: '#f6f1ff',
          }}
        >
          <div className="app-spinner" aria-label="Loading" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
