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
  const initialGradingRef = useRef(true);
  const initialReportsRef = useRef(true);
  const lastGradingTopIdRef = useRef(null);
  const lastReportTopIdRef = useRef(null);

  useEffect(() => {
    if (!user?.uid || !isAdmin) {
      setPendingGrading([]);
      setOpenReports([]);
      initialGradingRef.current = true;
      initialReportsRef.current = true;
      lastGradingTopIdRef.current = null;
      lastReportTopIdRef.current = null;
      return undefined;
    }

    const qGrading = query(
      collection(db, 'grading_queue'),
      where('status', '==', 'pending'),
      orderBy('submittedAt', 'desc'),
      limit(FEED_LIMIT)
    );
    const unsubGrading = onSnapshot(
      qGrading,
      (snap) => {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setPendingGrading(items);
        const topId = items[0]?.id ?? null;
        if (initialGradingRef.current) {
          initialGradingRef.current = false;
          lastGradingTopIdRef.current = topId;
        } else if (topId && topId !== lastGradingTopIdRef.current) {
          const data = items[0];
          showToast(`📝 New Review Required: ${data.userName || 'Student'} submitted a question.`, 'info', 5000);
          lastGradingTopIdRef.current = topId;
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
    const unsubReports = onSnapshot(
      qReports,
      (snap) => {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setOpenReports(items);
        const topId = items[0]?.id ?? null;
        if (initialReportsRef.current) {
          initialReportsRef.current = false;
          lastReportTopIdRef.current = topId;
        } else if (topId && topId !== lastReportTopIdRef.current) {
          const data = items[0];
          showToast(`⚠️ New Issue Reported: ${data.studentName || 'Student'} filed a report.`, 'warning', 5000);
          lastReportTopIdRef.current = topId;
        }
      },
      (err) => console.warn('reports feed listener failed (non-fatal):', err?.code || err)
    );

    return () => {
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
