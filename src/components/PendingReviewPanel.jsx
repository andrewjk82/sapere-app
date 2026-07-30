import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '../context/ToastContext';
import { syncQuestionIndexOnSave } from '../services/questionIndexService';
import { applyCountDeltas } from '../services/questionCountsService';
import QuestionPreviewCard from './QuestionPreviewCard';

// New-question review queue: any question created going forward — whether
// typed directly into the Question Bank editor (QuestionBankModal.jsx) or
// written by the local corpus pipeline (tools/corpus/deploy.js) — starts
// isActive:false + reviewStatus:'pending' and is invisible to students until
// approved here. Approve/Reject only ever flip flags on the SAME doc; nothing
// here is a bulk/unscoped read (reviewStatus=='pending' is a filtered query,
// per CLAUDE.md's question-collection-scan guard) and nothing here touches
// the local corpus tool at all.
//
// Each question renders via QuestionPreviewCard — the SAME badge/options/
// solution-steps layout as the existing Question Bank admin view — so a
// teacher sees a pending question exactly the way they already know how to
// read a question, not a bespoke simplified rendering.
const PendingReviewPanel = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [busyId, setBusyId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(query(collection(db, 'questions'), where('reviewStatus', '==', 'pending')));
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        if (!cancelled) setItems(rows);
      } catch (err) {
        console.warn('Failed to load pending questions:', err);
        if (!cancelled) showToast('Failed to load pending questions.', 'error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [showToast]);

  const approve = async (q) => {
    setBusyId(q.id);
    try {
      // Called inside an onClick-triggered async handler, not during render
      // (same pattern as QuestionBankModal.jsx's handleSave).
      // eslint-disable-next-line react-hooks/purity
      const version = Date.now();
      await updateDoc(doc(db, 'questions', q.id), {
        isActive: true,
        reviewStatus: 'approved',
        updatedAt: serverTimestamp(),
      });
      await syncQuestionIndexOnSave({
        questionId: q.id,
        chapterId: q.chapterId,
        prevChapterId: q.chapterId,
        isActive: true,
        prevIsActive: false,
        version,
      });
      if (q.chapterId || q.topicId) {
        await applyCountDeltas({
          ...(q.chapterId ? { [q.chapterId]: 1 } : {}),
          ...(q.topicId ? { [q.topicId]: 1 } : {}),
        }, version);
      }
      setItems((prev) => prev.filter((it) => it.id !== q.id));
      showToast('Approved — now visible to students.', 'success');
    } catch (err) {
      console.warn('Approve failed:', err);
      showToast('Failed to approve.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  const reject = async (q) => {
    if (!window.confirm(`Reject this question? It stays hidden from students but is not deleted — you can still find it via origin in the Question Bank.`)) return;
    setBusyId(q.id);
    try {
      await updateDoc(doc(db, 'questions', q.id), {
        reviewStatus: 'rejected',
        updatedAt: serverTimestamp(),
      });
      setItems((prev) => prev.filter((it) => it.id !== q.id));
      showToast('Rejected.', 'success');
    } catch (err) {
      console.warn('Reject failed:', err);
      showToast('Failed to reject.', 'error');
    } finally {
      setBusyId(null);
    }
  };

  if (loading) {
    return <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>Loading pending questions…</div>;
  }

  if (items.length === 0) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>
        No pending questions. New questions (typed in the editor, or added by the local corpus tool)
        will show up here for approval before students can see them.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '820px', margin: '0 auto' }}>
      {items.map((q) => {
        const isExpanded = expandedId === q.id;
        return (
          <div key={q.id} style={{ border: '1px solid #e2e8f0', borderRadius: '20px', background: '#fff', overflow: 'hidden' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 20px', cursor: 'pointer', flexWrap: 'wrap' }}
              onClick={() => setExpandedId(isExpanded ? null : q.id)}
            >
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: q.origin === 'seed' ? '#ede9fe' : '#dbeafe', color: q.origin === 'seed' ? '#5b21b6' : '#1e40af' }}>
                {q.origin === 'seed' ? 'corpus' : 'teacher'}
              </span>
              <span style={{ fontSize: '12px', color: '#64748b' }}>{q.chapterId || '—'} / {q.topicId || '—'}</span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>{q.difficulty || ''}</span>
              <span style={{ flex: 1, fontSize: '13px', color: '#1e293b', minWidth: '200px' }}>
                {(q.question || '').replace(/\\\(|\\\)|\$/g, '').slice(0, 90)}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); approve(q); }}
                disabled={busyId === q.id}
                style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: '#166534', color: '#dcfce7', fontWeight: 700, cursor: 'pointer', fontSize: '12px' }}
              >
                Approve
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); reject(q); }}
                disabled={busyId === q.id}
                style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: '#7f1d1d', color: '#fecaca', fontWeight: 700, cursor: 'pointer', fontSize: '12px' }}
              >
                Reject
              </button>
            </div>

            {isExpanded && (
              <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9', background: '#f8fafc' }}>
                <QuestionPreviewCard question={q} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PendingReviewPanel;
