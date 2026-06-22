import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, orderBy, where, limit, deleteDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';
import { useToast } from '../context/ToastContext';
import { localCache } from '../services/localCacheService';

// Cap so a student with months of feedback never reads an unbounded list.
const PAGE_LIMIT = 50;
const cacheKeyFor = (uid) => `feedback:v1:${uid}`;

// Normalise savedAt (live Timestamp, cached {millis}, or gradedAt fallback) to
// a plain millisecond number used for sorting and as the delta-query cursor.
const noteMs = (n) => {
  const s = n?.savedAt;
  if (s && typeof s.toMillis === 'function') return s.toMillis();
  if (s && typeof s.millis === 'number') return s.millis; // cached timestamp shape
  if (n?.gradedAt) { const d = new Date(n.gradedAt); if (!isNaN(d.getTime())) return d.getTime(); }
  return 0;
};

const normalise = (id, data) => ({ id, ...data, savedAtMs: noteMs(data) });
const sortDesc = (arr) => [...arr].sort((a, b) => (b.savedAtMs || 0) - (a.savedAtMs || 0));

/**
 * Student-facing Feedback page: shows every teacher comment as a card.
 * Source: users/{uid}/saved_feedback (written by gradingService when a teacher
 * sends a comment). Opening this page clears the dashboard "unread" badge.
 *
 * Reads are incremental to keep Firestore traffic flat: cached cards render
 * instantly (0 reads), then only cards newer than the cached cursor are
 * fetched — and the fetch is skipped entirely when there is no unread badge
 * and a cache already exists. A first load (no cache) pulls the latest
 * PAGE_LIMIT cards.
 */
const Feedback = ({ setActiveTab }) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { showToast } = useToast();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const unreadCount = Number(profile?.unreadFeedbackCount) || 0;

  const load = useCallback(async () => {
    if (!user?.uid) return;
    const key = cacheKeyFor(user.uid);
    const cached = localCache.get(key);
    const cachedNotes = Array.isArray(cached?.notes) ? cached.notes : [];

    // 1. Render cached cards immediately — no read.
    if (cachedNotes.length) {
      setNotes(sortDesc(cachedNotes));
      setLoading(false);
    }

    // 2. Skip the network entirely when nothing is new and we already have a
    //    cache (the unread badge is the free "is there anything new" signal).
    if (cachedNotes.length && unreadCount === 0) {
      setLoading(false);
      return;
    }

    setLoading((prev) => (cachedNotes.length ? false : prev));
    try {
      const cursor = cached?.lastSavedAtMs || 0;
      const col = collection(db, 'users', user.uid, 'saved_feedback');
      // Delta read when we have a cursor; otherwise the latest page.
      const q = cursor > 0
        ? query(col, where('savedAt', '>', Timestamp.fromMillis(cursor)), orderBy('savedAt', 'desc'), limit(PAGE_LIMIT))
        : query(col, orderBy('savedAt', 'desc'), limit(PAGE_LIMIT));
      const snap = await getDocs(q);
      const fetched = snap.docs.map(d => normalise(d.id, d.data()));

      // Merge fetched into cache (dedupe by id), keep newest PAGE_LIMIT*… bounded.
      const byId = new Map(cachedNotes.map(n => [n.id, n]));
      fetched.forEach(n => byId.set(n.id, n));
      const merged = sortDesc(Array.from(byId.values()));
      const lastSavedAtMs = merged.reduce((mx, n) => Math.max(mx, n.savedAtMs || 0), 0);

      setNotes(merged);
      localCache.set(key, { notes: merged, lastSavedAtMs, savedAt: Date.now() });
    } catch { /* non-fatal — cached cards remain on screen */ }
    finally { setLoading(false); }
  }, [user?.uid, unreadCount]);

  useEffect(() => { load(); }, [load]);

  // Clear the unread badge once the student opens the page.
  useEffect(() => {
    if (!user?.uid) return;
    updateDoc(doc(db, 'users', user.uid), { unreadFeedbackCount: 0 }).catch(() => {});
  }, [user?.uid]);

  const handleDelete = async (id) => {
    if (!user?.uid) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'saved_feedback', id));
      setNotes(prev => {
        const next = prev.filter(n => n.id !== id);
        // Keep the cache in sync so the deleted card never reappears from cache.
        const key = cacheKeyFor(user.uid);
        const cached = localCache.get(key) || {};
        localCache.set(key, { ...cached, notes: next, savedAt: Date.now() });
        return next;
      });
      showToast('Feedback removed.', 'success');
    } catch (err) { showToast('Could not delete: ' + (err?.message || err), 'error'); }
  };

  const formatDate = (note) => {
    const ms = note.savedAtMs || noteMs(note);
    if (!ms) return '';
    const raw = new Date(ms);
    if (isNaN(raw.getTime())) return '';
    return raw.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {setActiveTab && (
            <button onClick={() => setActiveTab('Dashboard')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center' }}>
              <ArrowLeft size={22} />
            </button>
          )}
          <h2>Teacher Feedback</h2>
        </div>
        <p>Comments your teacher sent on your work</p>
      </div>

      <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>
            <div className="app-spinner" style={{ margin: '0 auto 12px' }} />
            <p style={{ margin: 0, fontWeight: 700 }}>Loading...</p>
          </div>
        ) : notes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
            <MessageSquare size={40} style={{ opacity: 0.2, margin: '0 auto 12px', display: 'block' }} />
            <p style={{ margin: 0, fontWeight: 700 }}>No feedback yet</p>
            <p style={{ margin: '6px 0 0', fontSize: '0.85rem' }}>When your teacher comments on your work, it will appear here.</p>
          </div>
        ) : notes.map(note => (
          <div key={note.id} style={{ padding: '18px', borderRadius: '16px', background: note.correct ? '#f0fdf4' : '#fef2f2', border: `1px solid ${note.correct ? '#bbf7d0' : '#fecaca'}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: note.correct ? '#166534' : '#991b1b', flex: 1 }}>
                {note.correct ? '✅ Correct' : '❌ Incorrect'}
                {note.chapterTitle ? ` · ${note.chapterTitle}` : note.topicTitle ? ` · ${note.topicTitle}` : ''}
                {formatDate(note) ? ` · ${formatDate(note)}` : ''}
              </span>
              <button onClick={() => handleDelete(note.id)} style={{ padding: '4px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.7rem', cursor: 'pointer' }}>Delete</button>
            </div>
            {note.questionText && (
              <p style={{ margin: '0 0 8px', fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, fontWeight: 600 }}>
                <span style={{ fontWeight: 800, color: '#94a3b8' }}>Q: </span>{note.questionText}
              </p>
            )}
            {note.teacherFeedback ? (
              <p style={{ margin: 0, fontSize: '0.92rem', color: note.correct ? '#166534' : '#7f1d1d', lineHeight: 1.6 }}>{note.teacherFeedback}</p>
            ) : (
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, fontStyle: 'italic' }}>
                {note.correct ? 'Your teacher marked this correct.' : 'Your teacher marked this incorrect.'}
              </p>
            )}
            {note.teacherAnnotation && (
              <img src={note.teacherAnnotation} alt="Teacher markup" style={{ marginTop: '12px', width: '100%', borderRadius: '10px', objectFit: 'contain', border: '1px solid #e2e8f0' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
