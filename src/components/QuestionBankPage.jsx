import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ArrowLeft, Clock, Lightbulb, Pencil, Plus, Trash2, DownloadCloud, FileDown, ClipboardCheck
} from 'lucide-react';
import { exportQuestionsPdf } from '../utils/exportPdf';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import MathView from './MathView';
import MathInput from './MathInput';
import QuestionBankModal from './QuestionBankModal';

// Quick-insert buttons matching the student answer view.
const QB_QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
  { label: '\u2264', latex: '\\le', title: 'Less than or equal to' },
  { label: '\u2265', latex: '\\ge', title: 'Greater than or equal to' },
];
import { useToast } from '../context/ToastContext';
import { removeQuestionFromIndex } from '../services/questionIndexService';
import { applyCountDeltas } from '../services/questionCountsService';
import { answersMatch } from '../utils/answerMatching';

// Split a long model-answer string into sentence-level lines for readability.
// Careful to skip periods inside math delimiters \(...\) and $$...$$.
const splitAnswerIntoLines = (text) => {
  if (typeof text !== 'string') return text;
  // Already contains explicit newlines — respect them
  if (/\n/.test(text)) return text;
  // Tokenise: alternate between math blocks and plain text
  const mathRe = /(\$\$[\s\S]*?\$\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const tokens = text.split(mathRe);
  let result = '';
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 1) {
      // Math block — keep as-is
      result += tokens[i];
    } else {
      // Plain text — insert newline after ". " (sentence boundary)
      result += tokens[i].replace(/\.\s+(?=[A-Z])/g, '.\n');
    }
  }
  return result;
};

/**
 * Full-page question-bank browser for a single chapter+topic.
 *
 * Mirrors the student challenge view (so the teacher sees questions exactly
 * as students do) but with no Submit button and no sketch board. Adds:
 *   - free Prev/Next navigation between questions in the topic
 *   - an Edit button that opens the existing question-edit form
 *
 * Routing model: this is rendered inline by Curriculum.jsx (no react-router
 * needed); `onBack` returns to the topics list.
 */
const QuestionBankPage = ({ chapter, topic, onBack }) => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [previewAnswer, setPreviewAnswer] = useState(''); // teacher can test-type like a student
  const qbMathRef = useRef(null);
  const [creatingNew, setCreatingNew] = useState(false);
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfCount, setPdfCount] = useState(10);
  const [pdfWithAnswers, setPdfWithAnswers] = useState(true);
  const [pdfReadingTime, setPdfReadingTime] = useState(5);
  const [pdfWorkingTime, setPdfWorkingTime] = useState(60);

  const handleSyncAll = async () => {
    if (!import.meta.env.DEV) {
      showToast('Seed sync only works in local dev mode. Run: npm run sync-seeds', 'warning');
      return;
    }
    if (!window.confirm('This will fetch all questions from the database and overwrite the local seed files. Proceed?')) return;
    setIsSyncingAll(true);
    try {
      const res = await fetch('/__local-api/sync-all', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        showToast('Successfully synced DB to seed files!', 'success');
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (e) {
      console.error(e);
      showToast('Failed to sync: ' + e.message, 'error');
    } finally {
      setIsSyncingAll(false);
    }
  };

  const handleExportPdf = () => {
    setShowPdfModal(false);
    const allQuestions = questionIds.map(id => loadedQuestions[id]).filter(Boolean);

    // If not all questions are loaded yet, load them first
    const unloadedIds = questionIds.filter(id => !loadedQuestions[id]);
    if (unloadedIds.length > 0) {
      showToast('Loading all questions before export...', 'info');
      const fetchAll = async () => {
        try {
          const chunks = [];
          for (let i = 0; i < unloadedIds.length; i += 30) {
            chunks.push(unloadedIds.slice(i, i + 30));
          }
          const snaps = await Promise.all(
            chunks.map(chunk => getDocs(query(collection(db, 'questions'), where('__name__', 'in', chunk))))
          );
          const fetched = {};
          snaps.forEach(snap => {
            snap.docs.forEach(d => {
              fetched[d.id] = { id: d.id, ...d.data() };
            });
          });
          setLoadedQuestions(prev => {
            const merged = { ...prev, ...fetched };
            const fullList = questionIds.map(id => merged[id]).filter(Boolean);
            exportQuestionsPdf(fullList, {
              chapterTitle: chapter.title,
              topicTitle: topic?.title || 'All Topics',
              year: chapter.year || '',
              course: chapter.course || '',
              readingTime: pdfReadingTime,
              workingTime: pdfWorkingTime,
            }, { showAnswers: pdfWithAnswers, count: pdfCount, bothVersions: !pdfWithAnswers });
            return merged;
          });
        } catch (err) {
          console.error('Failed to load all questions for PDF:', err);
          showToast('Failed to load questions for PDF export', 'error');
        }
      };
      fetchAll();
    } else {
      exportQuestionsPdf(allQuestions, {
        chapterTitle: chapter.title,
        topicTitle: topic?.title || 'All Topics',
        year: chapter.year || '',
        course: chapter.course || '',
        readingTime: pdfReadingTime,
        workingTime: pdfWorkingTime,
      }, { showAnswers: pdfWithAnswers, count: pdfCount, bothVersions: !pdfWithAnswers });
    }
  };

  const [questionIds, setQuestionIds] = useState([]);
  const [loadedQuestions, setLoadedQuestions] = useState({}); // id -> question doc
  // IDs present in question_index but with no matching (active) question doc —
  // a stale index. We drop these from the visible list so the bank never gets
  // stuck on "Loading question details..." for a pointer that can't resolve.
  const [deadIds, setDeadIds] = useState(() => new Set());
  const [viewedIds, setViewedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('sapere_viewed_questions');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const reload = useCallback(async () => {
    setLoading(true);
    setDeadIds(new Set()); // fresh chapter/topic — don't carry over dead pointers
    try {
      const isTypeChapter = chapter.id?.startsWith('type:');
      const isExamChapter = chapter.id?.startsWith('exam:');
      let ids = [];

      if (isTypeChapter) {
        const typeSlug = chapter.typeSlug || chapter.id.replace('type:', '');
        const indexDoc = await getDoc(doc(db, 'question_type_index', typeSlug));
        ids = indexDoc.exists() ? (indexDoc.data().ids || []) : [];
      } else if (isExamChapter) {
        const examPaperKey = chapter.examPaper || chapter.id?.replace('exam:', '');
        // For exam chapters, we query and filter IDs
        const snap = await getDocs(
          query(collection(db, 'questions'), where('examPaper', '==', examPaperKey))
        );
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(q => q.isActive !== false);
        docs.sort((a, b) => String(a.id).localeCompare(String(b.id)));
        const fetched = {};
        docs.forEach(q => { fetched[q.id] = q; });
        setLoadedQuestions(prev => ({ ...prev, ...fetched }));
        ids = docs.map(q => q.id);
      } else {
        // Regular chapter: fetch IDs from question_index
        const indexDoc = await getDoc(doc(db, 'question_index', chapter.id));
        if (indexDoc.exists()) {
          ids = indexDoc.data().ids || [];
        } else {
          // Fallback projection query (if index is not ready yet)
          const snap = await getDocs(
            query(collection(db, 'questions'), where('chapterId', '==', chapter.id))
          );
          const docs = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(q => q.isActive !== false);
          docs.sort((a, b) => String(a.id).localeCompare(String(b.id)));
          const fetched = {};
          docs.forEach(q => { fetched[q.id] = q; });
          setLoadedQuestions(prev => ({ ...prev, ...fetched }));
          ids = docs.map(q => q.id);
        }

        // Filter by topic if selected. The chapter index can be PARTIALLY
        // stale for a topic (e.g. an admin script re-imported questions
        // without rebuilding question_index) — and a partial prefix match
        // here would silently hide the rest of the topic. So the topicId
        // query is always the ground truth, unioned with prefix matches to
        // keep questions whose doc lacks a topicId field but carries the
        // topic in its id.
        if (topic?.id) {
          const prefixIds = ids.filter(id => id.startsWith(topic.id) || id.toLowerCase().includes(topic.id.toLowerCase()));
          const snap = await getDocs(
            query(collection(db, 'questions'), where('topicId', '==', topic.id))
          );
          const docs = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(q => q.isActive !== false);
          const fetched = {};
          docs.forEach(q => { fetched[q.id] = q; });
          setLoadedQuestions(prev => ({ ...prev, ...fetched }));
          ids = [...new Set([...prefixIds, ...docs.map(q => q.id)])];
        }
      }

      // Fallback to local seeds ONLY if we got nothing (quota exhausted / offline)
      if (ids.length === 0) {
        let local = [];
        if (topic?.id === 'y11a-1c') {
          try {
            const { Y11_CH1C_QUESTIONS } = await import('../constants/seedYear11Ch1CQuestions.js');
            local = Y11_CH1C_QUESTIONS;
          } catch (err) {
            console.warn('Failed to load local fallback for 1C:', err);
          }
        } else if (topic?.id === 'y11a-1D') {
          try {
            const { Y11_CH1D_QUESTIONS } = await import('../constants/seedYear11Ch1DQuestions.js');
            local = Y11_CH1D_QUESTIONS;
          } catch (err) {
            console.warn('Failed to load local fallback for 1D:', err);
          }
        }
        if (local.length > 0) {
          const docs = local.map((q, idx) => ({
            id: q.id || `${topic.id}-q${idx}`,
            ...q,
            type: q.type || 'multiple_choice'
          }));
          docs.sort((a, b) => String(a.id).localeCompare(String(b.id)));
          const fetched = {};
          docs.forEach(q => { fetched[q.id] = q; });
          setLoadedQuestions(prev => ({ ...prev, ...fetched }));
          ids = docs.map(q => q.id);
        }
      }

      ids.sort((a, b) => String(a).localeCompare(String(b)));
      setQuestionIds(ids);
      setCurrentIdx((prev) => (prev >= ids.length ? Math.max(0, ids.length - 1) : prev));
    } catch (e) {
      console.error('Question bank load failed:', e);
      showToast('Failed to load questions', 'error');
    } finally {
      setLoading(false);
    }
  }, [chapter.id, topic?.id, showToast]);

  useEffect(() => { reload(); }, [reload]);

  useEffect(() => {
    const visibleIds = questionIds.filter(id => !deadIds.has(id));
    if (visibleIds.length > 0 && currentIdx < visibleIds.length) {
      const qId = visibleIds[currentIdx];
      if (qId && !viewedIds.includes(qId)) {
        const nextViewed = [...viewedIds, qId];
        setViewedIds(nextViewed);
        localStorage.setItem('sapere_viewed_questions', JSON.stringify(nextViewed));
      }
    }
  }, [currentIdx, questionIds, deadIds, viewedIds]);

  // Clear the [NEW] flag in Firestore the moment its question is actually
  // viewed, so the badge doesn't accumulate forever (isNew is otherwise
  // never reset — see tools/audit-state/PROGRESS.md). Only fires when the
  // loaded doc still has isNew:true, so normal browsing writes nothing.
  useEffect(() => {
    const visibleIds = questionIds.filter(id => !deadIds.has(id));
    const qId = visibleIds[currentIdx];
    if (!qId) return;
    const loaded = loadedQuestions[qId];
    if (!loaded || loaded.isNew !== true) return;
    setLoadedQuestions(prev => ({ ...prev, [qId]: { ...prev[qId], isNew: false } }));
    updateDoc(doc(db, 'questions', qId), { isNew: false }).catch((e) => {
      console.error('Failed to clear isNew flag', qId, e);
    });
  }, [currentIdx, questionIds, deadIds, loadedQuestions]);

  // Load question docs on demand around currentIdx (active + next 10 + prev 5 for caching)
  useEffect(() => {
    if (loading || questionIds.length === 0) return;
    
    const fetchAroundIndex = async () => {
      const windowSize = 20;
      // Window over the *visible* list so the current question is always in range.
      const visibleIds = questionIds.filter(id => !deadIds.has(id));
      const startIndex = Math.max(0, currentIdx - 5);
      const endIndex = Math.min(visibleIds.length, startIndex + windowSize);

      const idsToFetch = [];
      for (let i = startIndex; i < endIndex; i++) {
        const id = visibleIds[i];
        if (id && !loadedQuestions[id]) {
          idsToFetch.push(id);
        }
      }

      if (idsToFetch.length === 0) return;

      try {
        // Fetch in chunks of 30 (Firestore limit is 30 for 'in' queries)
        const chunks = [];
        for (let i = 0; i < idsToFetch.length; i += 30) {
          chunks.push(idsToFetch.slice(i, i + 30));
        }

        const snaps = await Promise.all(
          chunks.map(chunk => getDocs(query(collection(db, 'questions'), where('__name__', 'in', chunk))))
        );

        const fetched = {};
        snaps.forEach(snap => {
          snap.docs.forEach(d => {
            fetched[d.id] = { id: d.id, ...d.data() };
          });
        });

        setLoadedQuestions(prev => ({ ...prev, ...fetched }));

        // Any id we asked for but didn't get back is a stale index pointer —
        // mark it dead so it's dropped from the list instead of spinning forever.
        const newlyDead = idsToFetch.filter(id => !fetched[id]);
        if (newlyDead.length) {
          setDeadIds(prev => {
            const next = new Set(prev);
            newlyDead.forEach(id => next.add(id));
            return next;
          });
        }
      } catch (err) {
        console.error('Failed to prefetch questions:', err);
      }
    };

    fetchAroundIndex();
  }, [currentIdx, questionIds, loadedQuestions, loading, deadIds]);

  const liveIds = questionIds.filter(id => !deadIds.has(id));
  const questions = liveIds.map(id => loadedQuestions[id] || { id, loading: true });
  const q = questions[currentIdx]?.loading ? null : questions[currentIdx];
  const total = liveIds.length;
  const isFillBlank = q?.type === 'fill_blank';
  const isShort = q?.type === 'short_answer';
  const isMC = q && !isShort && !isFillBlank && !q.subQuestions?.length && (q.options || []).length > 0;
  const isTeacherReview = q?.type === 'teacher_review' || q?.requiresManualGrading === true;

  const goPrev = useCallback(() => { setCurrentIdx((i) => Math.max(0, i - 1)); setShowHint(false); setPreviewAnswer(''); }, []);
  const goNext = useCallback(() => { setCurrentIdx((i) => Math.min(total - 1, i + 1)); setShowHint(false); setPreviewAnswer(''); }, [total]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goPrev, goNext]);

  const handleDelete = async () => {
    if (!q) return;
    if (!window.confirm(`Delete this question (${q.id})?`)) return;
    try {
      await updateDoc(doc(db, 'questions', q.id), { isActive: false, updatedAt: serverTimestamp() });
      // One shared version across the index stamp, sync_meta and the counts
      // doc — if they diverge the counts doc looks stale and triggers a full
      // rebuild on the next admin Curriculum load.
      const bankVersion = Date.now();
      removeQuestionFromIndex(q.chapterId || chapter?.id, q.id, bankVersion)
        .catch((err) => console.warn('question index sync failed:', err?.code || err));
      // Bump the global questions sync_meta so chapter-card counts on the
      // Curriculum page refresh on next visit instead of staying stale.
      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: bankVersion,
        updatedAt: serverTimestamp(),
      }, { merge: true }).catch(() => {});
      // Aggregate counts doc: −1 for this question's chapter/topic so admin
      // clients keep reading 1 doc instead of rebuilding all counts.
      applyCountDeltas({
        ...(q.chapterId || chapter?.id ? { [q.chapterId || chapter.id]: -1 } : {}),
        ...(q.topicId ? { [q.topicId]: -1 } : {}),
      }, bankVersion);
      showToast('Question deleted', 'success');
      await reload();
    } catch (e) {
      console.error(e);
      showToast('Delete failed', 'error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '24px 20px 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> Back to topics
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {chapter.title}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e1b4b' }}>{topic?.title || 'All topics'}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={handleSyncAll}
              disabled={isSyncingAll}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: isSyncingAll ? '#f1f5f9' : '#fff', color: isSyncingAll ? '#94a3b8' : '#475569', fontWeight: 700, cursor: isSyncingAll ? 'wait' : 'pointer' }}
            >
              <DownloadCloud size={16} /> {isSyncingAll ? 'Syncing...' : 'Sync DB to Seeds'}
            </button>
            {/* PDF Export button */}
            <button
              onClick={() => { setPdfCount(Math.min(10, total)); setShowPdfModal(true); }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e0e7ff', background: '#fff', color: '#4f46e5', fontWeight: 800, cursor: 'pointer', transition: 'all 0.15s ease' }}
            >
              <FileDown size={16} /> PDF
            </button>
            <button
              onClick={() => setCreatingNew(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 12px rgba(99,102,241,0.22)' }}
            >
              <Plus size={16} /> New
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>Loading questions…</div>
        ) : total === 0 ? (
          <div style={{ padding: '60px 30px', textAlign: 'center', background: '#fff', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#475569', marginBottom: '6px' }}>No questions yet</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px' }}>Add the first question for this topic.</div>
            <button
              onClick={() => setCreatingNew(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 20px', borderRadius: '14px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 800, cursor: 'pointer' }}
            >
              <Plus size={16} /> Add question
            </button>
          </div>
        ) : (
          <>
            {/* Challenge-style header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Question Bank</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {currentIdx + 1} of {total}</div>
                  {q?.id && <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', background: '#f1f5f9', borderRadius: '6px', padding: '2px 7px', fontFamily: 'monospace', userSelect: 'all' }}>ID: {q.id}</span>}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', background: '#fff', padding: '6px 12px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} /> {q?.timeLimit || 120}s
                </div>
                <button
                  onClick={() => setEditingQuestion(q)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e0e7ff', background: '#eef2ff', color: '#4f46e5', fontWeight: 800, cursor: 'pointer' }}
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={handleDelete}
                  title="Delete"
                  style={{ padding: '8px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            {/* Clickable dot navigation */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '8px 0' }}>
              {questions.map((item, i) => {
                const isActive = i === currentIdx;
                const difficulty = item.difficulty || 'medium';
                const dotColor = isActive
                  ? '#6366f1'
                  : difficulty === 'easy'
                    ? '#86efac'
                    : difficulty === 'hard'
                      ? '#fca5a5'
                      : '#fed7aa'; // medium
                const isNewAndUnread = item?.isNew && !viewedIds.includes(item.id);
                return (
                  <div key={item.id || i} style={{ position: 'relative', display: 'inline-block' }}>
                    <button
                      onClick={() => { setCurrentIdx(i); setShowHint(false); setPreviewAnswer(''); }}
                      style={{
                        width: isActive ? '24px' : '10px',
                        height: '10px',
                        borderRadius: '999px',
                        background: dotColor,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        padding: 0,
                      }}
                      title={`Question ${i + 1} (${difficulty})${item.isNew ? ' [NEW]' : ''}`}
                    />
                    {isNewAndUnread && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#ef4444',
                          border: '1px solid #fff',
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Question card */}
            <div style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', background: '#fff', border: '1px solid #e2e8f0', position: 'relative' }}>
              {!q ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>Loading question details...</div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                        {q?.difficulty || 'medium'} · {q?.type?.replace('_', ' ') || 'question'}
                      </span>
                      {q?.isNew && !viewedIds.includes(q.id) && (
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#ef4444', color: '#fff', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
                          New
                        </span>
                      )}
                    </div>
                    {q?.hint && (
                      <button
                        onClick={() => setShowHint((v) => !v)}
                        style={{ background: showHint ? '#fef3c7' : '#fff7ed', border: 'none', padding: '6px 12px', borderRadius: '10px', color: '#d97706', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                      >
                        <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                      </button>
                    )}
                  </div>

                  <MathView
                    content={q?.question}
                    graphData={q?.graphData}
                    style={{ fontSize: '0.98rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7, margin: 0 }}
                  />

                  <AnimatePresence>
                    {showHint && q?.hint && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                        <div style={{ marginTop: '16px', padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', marginBottom: '8px' }}>
                            <Lightbulb size={16} />
                            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' }}>Hint</span>
                          </div>
                          <MathView content={q.hint} style={{ color: '#92400e', fontSize: '0.95rem', fontWeight: 600 }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {q?.questionImage && (
                    <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
                  )}
                </>
              )}
            </div>

            {/* Answer area (read-only, mirrors student view) */}
            {q && (
              <>
                {q.subQuestions?.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {q.subQuestions.map((sq, sIdx) => (
                      <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                            {String.fromCharCode(97 + sIdx)}
                          </div>
                          <MathView content={sq.question} graphData={sq.graphData} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
                        </div>
                        {sq.type === 'multiple_choice' ? (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                            {(sq.options || []).map((opt, oIdx) => {
                              const isCorrectOpt = !Number.isNaN(Number(sq.answer)) && oIdx === Number(sq.answer);
                              return (
                                <div key={oIdx} style={{ padding: '12px 16px', borderRadius: '12px', border: `2px solid ${isCorrectOpt ? '#10b981' : '#f1f5f9'}`, background: isCorrectOpt ? '#f0fdf4' : '#fff', color: isCorrectOpt ? '#166534' : '#64748b', fontWeight: 800, fontSize: '0.85rem' }}>
                                  {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ display: 'inline' }} />
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <input type="text" placeholder="Type answer..." disabled style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', fontWeight: 700, fontSize: '0.95rem' }} />
                        )}

                        {/* Part answer (model answer for non-MC parts) */}
                        {sq.type !== 'multiple_choice' && sq.answer != null && String(sq.answer).trim() !== '' && (
                          <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
                            Answer: <MathView content={String(sq.answer)} style={{ display: 'inline', fontWeight: 800 }} />
                          </div>
                        )}

                        {/* Part step-by-step solution */}
                        {Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0 && (
                          <div style={{ marginTop: '12px', padding: '16px 20px', borderRadius: '16px', background: '#fafaff', border: '1px solid #e0e7ff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                              <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                                <Lightbulb size={13} />
                              </div>
                              <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.85rem' }}>Step-by-step solution</div>
                              <span style={{ marginLeft: 'auto', fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8' }}>{sq.solutionSteps.length} steps</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              {sq.solutionSteps.map((step, si) => (
                                <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.72rem', flexShrink: 0, marginTop: '2px' }}>
                                    {si + 1}
                                  </div>
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    {step.explanation && (
                                      <MathView content={step.explanation} style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '6px' : 0 }} />
                                    )}
                                    {step.workingOut && (
                                      <div style={{ padding: '9px 13px', borderRadius: '10px', background: '#fff', border: '1px solid #eef2f7' }}>
                                        <MathView content={step.workingOut} style={{ fontSize: '0.9rem', color: '#1e1b4b' }} />
                                      </div>
                                    )}
                                    {step.graphData && (
                                      <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                        <MathView
                                          content=""
                                          graphData={step.graphData}
                                          style={{
                                            minHeight: step.graphData?.jsxGraph?.height
                                              ? `${step.graphData.jsxGraph.height}px`
                                              : (step.graphData?.geometry ? 'auto' : '240px')
                                          }}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Part solution (only when there are no step-by-step entries) */}
                        {sq.solution && !(Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0) && (
                          <div style={{ marginTop: '12px', padding: '16px 20px', borderRadius: '16px', background: '#fafaff', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solution</div>
                            <MathView content={sq.solution} style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.6 }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : isShort ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Quick-insert buttons + MathLive editor — identical to the student view */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {QB_QUICK_INSERTS.map((b) => (
                        <button
                          key={b.label}
                          type="button"
                          onClick={() => qbMathRef.current?.insert(b.latex)}
                          title={b.title}
                          style={{ minWidth: '46px', height: '42px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                    <MathInput
                      ref={qbMathRef}
                      value={previewAnswer}
                      onChange={setPreviewAnswer}
                      placeholder="Type your answer…  (same editor students use)"
                      style={{ fontSize: '1.4rem', padding: '22px', borderRadius: '24px' }}
                    />
                    {(() => {
                      const typed = previewAnswer.trim();
                      if (!typed || !q.answer) return null;
                      const isMatch = answersMatch(typed, String(q.answer));
                      const accepted = (q.acceptedAnswers || []).some(a => answersMatch(typed, String(a)));
                      const correct = isMatch || accepted;
                      return (
                        <div style={{ padding: '14px 18px', borderRadius: '14px', background: correct ? '#f0fdf4' : '#fef2f2', border: `2px solid ${correct ? '#10b981' : '#ef4444'}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '1.3rem' }}>{correct ? '✅' : '❌'}</span>
                          <span style={{ fontWeight: 900, color: correct ? '#166534' : '#991b1b', fontSize: '0.95rem' }}>
                            {correct ? 'Correct — matches the grading system' : 'Wrong — students typing this would be marked incorrect'}
                          </span>
                        </div>
                      );
                    })()}
                    {q.answer && (
                      <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
                        Answer: <MathView content={String(q.answer)} style={{ display: 'inline', fontWeight: 800 }} />
                      </div>
                    )}
                  </div>
                ) : isFillBlank ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '12px 18px', alignItems: 'center' }}>
                      {(q.blanks || []).length === 0 ? (
                        <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>No blanks defined for this question.</span>
                      ) : (
                        (q.blanks || []).map((b, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {b.label && (
                              <MathView content={b.label} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '1.05rem' }} />
                            )}
                            <input
                              type="text"
                              placeholder="—"
                              disabled
                              style={{ width: '110px', padding: '10px 14px', borderRadius: '12px', border: '2px solid #e2e8f0', background: '#f8fafc', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
                            />
                          </div>
                        ))
                      )}
                    </div>
                    {(q.blanks || []).some((b) => (b.answer || '').trim()) && (
                      <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 700, fontSize: '0.9rem', display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
                        <span style={{ fontWeight: 900 }}>Answers:</span>
                        {(q.blanks || []).map((b, i) => (
                          <span key={i} style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                            {b.label && <MathView content={b.label} style={{ display: 'inline', fontWeight: 700 }} />}
                            <MathView content={String(b.answer || '—')} style={{ display: 'inline', fontWeight: 800 }} />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : isMC ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                    {(q.options || []).map((opt, i) => {
                      const optText = typeof opt === 'string' ? opt : opt.text;
                      const correctIdx = Number(q.answer);
                      const isCorrect = !Number.isNaN(correctIdx) && i === correctIdx;
                      return (
                        <div key={i} style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', border: `2px solid ${isCorrect ? '#10b981' : 'transparent'}`, borderRadius: '100px', background: isCorrect ? '#f0fdf4' : '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: isCorrect ? '#10b981' : '#f1f5f9', color: isCorrect ? '#fff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            <div style={{ flex: 1 }}>
                              <MathView content={optText} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ fontWeight: 500, fontSize: '1.05rem', color: '#1e1b4b' }} />
                              {typeof opt === 'object' && opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                            </div>
                          </div>
                          {isCorrect && <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Correct</span>}
                        </div>
                      );
                    })}
                  </div>
                ) : isTeacherReview ? (
                  <div style={{ 
                    padding: '24px', 
                    borderRadius: '24px', 
                    background: '#fefce8', 
                    border: '1px solid #fef08a', 
                    color: '#854d0e', 
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 12px rgba(254, 240, 138, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '8px', 
                      fontWeight: 800, 
                      fontSize: '0.9rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      color: '#a16207',
                      borderBottom: q.answer ? '1px dashed #fef08a' : 'none',
                      paddingBottom: q.answer ? '12px' : '0px',
                    }}>
                      <ClipboardCheck size={18} />
                      <span>Teacher reviews this question manually</span>
                    </div>
                    {q.answer && (
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ 
                          fontWeight: 900, 
                          color: '#713f12', 
                          fontSize: '0.85rem', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.05em',
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          Model Answer:
                        </div>
                        <div style={{ 
                          background: '#ffffff', 
                          padding: '18px 24px', 
                          borderRadius: '20px', 
                          border: '1px solid #fef08a', 
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                        }}>
                          <MathView content={splitAnswerIntoLines(String(q.answer))} style={{ color: '#451a03', fontSize: '0.95rem', lineHeight: 1.8 }} />
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}

                {/* Step-by-step solution */}
                {Array.isArray(q?.solutionSteps) && q.solutionSteps.length > 0 && (
                  <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e0e7ff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                        <Lightbulb size={15} />
                      </div>
                      <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Step-by-step solution</div>
                      <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>{q.solutionSteps.length} steps</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {q.solutionSteps.map((step, si) => (
                        <div key={si} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0, marginTop: '2px' }}>
                            {si + 1}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            {step.explanation && (
                              <MathView content={step.explanation} style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '6px' : 0 }} />
                            )}
                            {step.workingOut && (
                              <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #eef2f7' }}>
                                <MathView content={step.workingOut} style={{ fontSize: '0.95rem', color: '#1e1b4b' }} />
                              </div>
                            )}
                            {step.graphData && (
                              <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                <MathView content="" graphData={step.graphData} style={{ minHeight: step.graphData?.geometry ? 'auto' : '240px' }} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solution preview (if any) */}
                {q?.solution && !(Array.isArray(q?.solutionSteps) && q.solutionSteps.length > 0) && (
                  <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solution</div>
                    <MathView content={q.solution} style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }} />
                  </div>
                )}
              </>
            )}

            {/* Prev / Next nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
              <button
                onClick={goPrev}
                disabled={currentIdx === 0}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 22px', borderRadius: '20px', border: 'none', background: currentIdx === 0 ? '#e2e8f0' : '#fff', color: currentIdx === 0 ? '#94a3b8' : '#4f46e5', fontWeight: 800, cursor: currentIdx === 0 ? 'not-allowed' : 'pointer', boxShadow: currentIdx === 0 ? 'none' : '0 6px 16px rgba(0,0,0,0.04)' }}
              >
                <ChevronLeft size={18} /> Prev
              </button>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>{currentIdx + 1} / {total}</div>
              <button
                onClick={goNext}
                disabled={currentIdx >= total - 1}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 22px', borderRadius: '20px', border: 'none', background: currentIdx >= total - 1 ? '#e2e8f0' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', color: currentIdx >= total - 1 ? '#94a3b8' : '#fff', fontWeight: 800, cursor: currentIdx >= total - 1 ? 'not-allowed' : 'pointer', boxShadow: currentIdx >= total - 1 ? 'none' : '0 12px 24px rgba(124,58,237,0.25)' }}
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>


      {/* PDF Export Modal */}
      <AnimatePresence>
        {showPdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPdfModal(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: '24px', padding: '32px', maxWidth: '420px', width: '100%', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #6366f1, #7c3aed)', display: 'grid', placeItems: 'center' }}>
                  <FileDown size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#1e1b4b' }}>Export PDF</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Total {total} questions available</div>
                </div>
              </div>

              {/* Question count */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>How many questions?</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {[5, 10, 15, 20].filter(n => n <= total).map(n => (
                    <button
                      key={n}
                      onClick={() => setPdfCount(n)}
                      style={{ padding: '10px 18px', borderRadius: '12px', border: pdfCount === n ? '2px solid #6366f1' : '2px solid #e2e8f0', background: pdfCount === n ? '#eef2ff' : '#fff', color: pdfCount === n ? '#4f46e5' : '#475569', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => setPdfCount(total)}
                    style={{ padding: '10px 18px', borderRadius: '12px', border: pdfCount === total ? '2px solid #6366f1' : '2px solid #e2e8f0', background: pdfCount === total ? '#eef2ff' : '#fff', color: pdfCount === total ? '#4f46e5' : '#475569', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                  >
                    All ({total})
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>Custom:</span>
                  <input
                    type="number"
                    min={1}
                    max={total}
                    value={pdfCount}
                    onChange={(e) => setPdfCount(Math.max(1, Math.min(total, Number(e.target.value) || 1)))}
                    style={{ width: '72px', padding: '8px 12px', borderRadius: '10px', border: '2px solid #e2e8f0', fontWeight: 800, fontSize: '0.95rem', textAlign: 'center', color: '#1e1b4b', outline: 'none' }}
                  />
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>/ {total}</span>
                </div>
              </div>

              {/* Exam Duration / Time Settings */}
              <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Reading Time</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="number"
                      min={0}
                      value={pdfReadingTime}
                      onChange={(e) => setPdfReadingTime(Math.max(0, Number(e.target.value) || 0))}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '12px', border: '2px solid #e2e8f0', fontWeight: 800, fontSize: '0.95rem', textAlign: 'center', color: '#1e1b4b', outline: 'none' }}
                    />
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>min</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Working Time</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="number"
                      min={1}
                      value={pdfWorkingTime}
                      onChange={(e) => setPdfWorkingTime(Math.max(1, Number(e.target.value) || 1))}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '12px', border: '2px solid #e2e8f0', fontWeight: 800, fontSize: '0.95rem', textAlign: 'center', color: '#1e1b4b', outline: 'none' }}
                    />
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>min</span>
                  </div>
                </div>
              </div>

              {/* Answers toggle */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Include answers?</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setPdfWithAnswers(true)}
                    style={{ flex: 1, padding: '12px', borderRadius: '12px', border: pdfWithAnswers ? '2px solid #6366f1' : '2px solid #e2e8f0', background: pdfWithAnswers ? '#eef2ff' : '#fff', color: pdfWithAnswers ? '#4f46e5' : '#475569', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                  >
                    📝 With Answers
                  </button>
                  <button
                    onClick={() => setPdfWithAnswers(false)}
                    style={{ flex: 1, padding: '12px', borderRadius: '12px', border: !pdfWithAnswers ? '2px solid #6366f1' : '2px solid #e2e8f0', background: !pdfWithAnswers ? '#eef2ff' : '#fff', color: !pdfWithAnswers ? '#4f46e5' : '#475569', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
                  >
                    📄 Student Version
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setShowPdfModal(false)}
                  style={{ flex: 1, padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleExportPdf}
                  style={{ flex: 2, padding: '14px', borderRadius: '14px', border: 'none', background: 'linear-gradient(135deg, #6366f1, #7c3aed)', color: '#fff', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 8px 20px rgba(99,102,241,0.3)' }}
                >
                  Generate PDF ({pdfCount} questions)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline edit overlay — reuses the existing form */}
      <AnimatePresence>
        {(editingQuestion || creatingNew) && (
          <QuestionBankModal
            chapter={chapter}
            directEditQuestion={editingQuestion || { _new: true, topicId: topic?.id, topicTitle: topic?.title }}
            onClose={() => {
              setEditingQuestion(null);
              setCreatingNew(false);
              reload();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionBankPage;
