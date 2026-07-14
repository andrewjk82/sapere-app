import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';
import { useToast } from './ToastContext';

/**
 * Single source of truth for admin-only feeds:
 *   - pendingGrading  (grading_queue where status == 'pending')
 *   - openReports     (reports where status == 'open')
 *
 * Previously each of these was subscribed to *three times* across the app
 * (App.jsx for new-item toasts, Sidebar.jsx for badge counts, Dashboard.jsx
 * for the pending-grading list) — six listeners over two collections, all
 * reading overlapping data. Consolidating into one provider drops it to
 * two listeners total, which the downstream consumers then read for free.
 *
 * Every listener is capped with `limit(50)` so we never accidentally pull
 * the entire collection on a busy day; the `count` value tops out at "50+".
 */

const FEED_LIMIT = 50;

const AdminFeedContext = createContext({
  pendingGrading: [],
  openReports: [],
  gradingCount: 0,
  reportCount: 0,
  isFeedCapped: false,
});

export const AdminFeedProvider = ({ children }) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();

  const [pendingGrading, setPendingGrading] = useState([]);
  const [openReports, setOpenReports] = useState([]);
  // Track which docs we've already seen so toasts only fire for *truly new*
  // items, not when an existing item is processed/removed (which would
  // otherwise make the next-in-line look "new" because the top id changed).
  // The id set alone is NOT enough: the queries are limit()ed, so resolving
  // one item slides an OLDER doc into the window whose id we've never seen.
  // We also track the newest timestamp seen and require unseen docs to be
  // strictly newer before toasting.
  const seenGradingIdsRef = useRef(null);
  const seenReportIdsRef = useRef(null);
  const latestGradingTsRef = useRef(0);
  const latestReportTsRef = useRef(0);
  const tsMillis = (v) => (v && typeof v.toMillis === 'function' ? v.toMillis() : 0);

  useEffect(() => {
    if (!user?.uid || !isAdmin) {
      setPendingGrading([]);
      setOpenReports([]);
      seenGradingIdsRef.current = null;
      seenReportIdsRef.current = null;
      return undefined;
    }

    let unsubGrading = () => {};
    let unsubReports = () => {};
    let cancelled = false;

    const attach = () => {
      unsubGrading();
      unsubReports();
      unsubGrading = () => {};
      unsubReports = () => {};
      if (cancelled || document.visibilityState === 'hidden') return;

      const qGrading = query(
        collection(db, 'grading_queue'),
        where('status', '==', 'pending'),
        orderBy('submittedAt', 'desc'),
        limit(FEED_LIMIT)
      );
      unsubGrading = onSnapshot(
        qGrading,
        (snap) => {
          const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
          setPendingGrading(items);
          if (seenGradingIdsRef.current === null) {
            seenGradingIdsRef.current = new Set(items.map(i => i.id));
            latestGradingTsRef.current = Math.max(0, ...items.map(i => tsMillis(i.submittedAt)));
            return;
          }
          const seen = seenGradingIdsRef.current;
          const latestTs = latestGradingTsRef.current;
          const fresh = items.filter(i => !seen.has(i.id) && tsMillis(i.submittedAt) > latestTs);
          for (const i of items) seen.add(i.id);
          latestGradingTsRef.current = Math.max(latestTs, ...items.map(i => tsMillis(i.submittedAt)));
          if (fresh.length > 0) {
            const top = fresh[0];
            const extra = fresh.length > 1 ? ` (+${fresh.length - 1} more)` : '';
            showToast(`📝 New Review Required: ${top.userName || 'Student'} submitted a question${extra}.`, 'info', 5000);
          }
        },
        (err) => console.warn('grading feed listener failed (non-fatal):', err?.code || err)
      );

      const qReports = query(
        collection(db, 'reports'),
        where('status', '==', 'open'),
        orderBy('createdAt', 'desc'),
        limit(FEED_LIMIT)
      );
      unsubReports = onSnapshot(
        qReports,
        (snap) => {
          const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
          setOpenReports(items);
          if (snap.metadata.fromCache) return;
          if (seenReportIdsRef.current === null) {
            seenReportIdsRef.current = new Set(items.map(i => i.id));
            latestReportTsRef.current = Math.max(0, ...items.map(i => tsMillis(i.createdAt)));
            return;
          }
          const seen = seenReportIdsRef.current;
          const latestTs = latestReportTsRef.current;
          const fresh = items.filter(i => !seen.has(i.id) && tsMillis(i.createdAt) > latestTs);
          for (const i of items) seen.add(i.id);
          latestReportTsRef.current = Math.max(latestTs, ...items.map(i => tsMillis(i.createdAt)));
          if (fresh.length > 0) {
            const top = fresh[0];
            const extra = fresh.length > 1 ? ` (+${fresh.length - 1} more)` : '';
            showToast(`⚠️ New Issue Reported: ${top.studentName || 'Student'} filed a report${extra}.`, 'warning', 5000);
          }
        },
        (err) => console.warn('reports feed listener failed (non-fatal):', err?.code || err)
      );
    };

    attach();
    const onVis = () => {
      if (document.visibilityState === 'hidden') {
        unsubGrading();
        unsubReports();
        unsubGrading = () => {};
        unsubReports = () => {};
      } else {
        attach();
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVis);
      unsubGrading();
      unsubReports();
    };
  }, [user?.uid, isAdmin, showToast]);

  const value = {
    pendingGrading,
    openReports,
    gradingCount: pendingGrading.length,
    reportCount: openReports.length,
    isFeedCapped: pendingGrading.length >= FEED_LIMIT || openReports.length >= FEED_LIMIT,
  };

  return <AdminFeedContext.Provider value={value}>{children}</AdminFeedContext.Provider>;
};

export const useAdminFeed = () => useContext(AdminFeedContext);
