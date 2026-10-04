import { useEffect, useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import { fetchHomeworkAssignments, fetchPendingSubmissions } from '../../services/homeworkService';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';

// Admin dashboard strip of homework submissions awaiting a check.
// Shows submissions awaiting teacher review and homework assignments still
// awaiting student submission; renders nothing when both lists are empty.
const HomeworkInbox = () => {
  const [items, setItems] = useState([]);
  const [assignedItems, setAssignedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    Promise.allSettled([fetchPendingSubmissions(), fetchHomeworkAssignments()])
      .then(([submissionsResult, assignmentsResult]) => {
        if (cancelled) return;
        if (submissionsResult.status === 'fulfilled') {
          setItems(submissionsResult.value);
        } else {
          console.warn('[homework] submissions load failed:', submissionsResult.reason?.message || submissionsResult.reason);
        }
        if (assignmentsResult.status === 'fulfilled') {
          setAssignedItems(assignmentsResult.value);
        } else {
          console.warn('[homework] assigned homework load failed:', assignmentsResult.reason?.message || assignmentsResult.reason);
        }
      })
      .finally(() => { if (!cancelled) setLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  if (!loaded || (items.length === 0 && assignedItems.length === 0 && !openId)) return null;

  return (
    <div style={{ background: '#fff', border: '1px solid #eef2f7', borderRadius: 20, padding: 16, marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <BookOpenCheck size={18} color="#7c3aed" />
        <strong style={{ color: '#1e1b4b' }}>Homework to check</strong>
        <span style={{ marginLeft: 'auto', fontWeight: 800, color: '#7c3aed' }}>{items.length}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12, paddingBottom: 4 }}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            style={{
              aspectRatio: '1 / 1',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'left',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              background: '#f8fafc',
              padding: 16,
              cursor: 'pointer',
              transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'translateY(-2px)';
              event.currentTarget.style.borderColor = '#c4b5fd';
              event.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.10)';
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'translateY(0)';
              event.currentTarget.style.borderColor = '#e2e8f0';
              event.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e1b4b', marginBottom: 8 }}>
              {item.studentName || 'Student'}
            </div>
            <div style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {[item.sessionDate, (item.topics || []).map((t) => t.label).join(', ')].filter(Boolean).join(' · ') || 'Homework submitted'}
            </div>
          </button>
        ))}
      </div>
      {assignedItems.length > 0 && (
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #eef2f7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <strong style={{ color: '#1e1b4b', fontSize: '0.9rem' }}>Homework assigned</strong>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed', background: '#f3edff', borderRadius: 999, padding: '3px 8px' }}>{assignedItems.length}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 8 }}>
            {assignedItems.map((assignment) => (
              <div key={assignment.id} style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, padding: '12px 14px', border: '1px solid #eceaf5', borderRadius: 14, background: '#fbfaff' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#1e1b4b', fontWeight: 800, fontSize: '0.84rem' }}>{assignment.studentName || 'Student'}</div>
                  <div style={{ color: '#77758f', fontSize: '0.74rem', lineHeight: 1.4, marginTop: 3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {(assignment.learnedTopics || []).map((topic) => topic?.label || topic?.title || topic?.id).filter(Boolean).join(', ') || assignment.homework}
                  </div>
                </div>
                <div style={{ flex: '0 0 auto', textAlign: 'right', fontSize: '0.68rem', color: '#77758f', lineHeight: 1.5 }}>
                  <div>Assigned {assignment.date || '—'}</div>
                  <div style={{ color: assignment.homeworkDueDate ? '#6d45e8' : '#9b99ad', fontWeight: 750 }}>Due {assignment.homeworkDueDate || 'not scheduled'}</div>
                  <div style={{ color: assignment.displayHomeworkStatus === 'Checked' ? '#15803d' : assignment.displayHomeworkStatus === 'Submitted' ? '#b45309' : '#64748b', fontWeight: 800, marginTop: 2 }}>{assignment.displayHomeworkStatus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {openId && (
        <HomeworkSubmissionViewer
          sessionId={openId}
          mode="teacher"
          onClose={() => setOpenId(null)}
          onChecked={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
        />
      )}
    </div>
  );
};

export default HomeworkInbox;
