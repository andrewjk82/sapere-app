import { useEffect, useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import { fetchPendingSubmissions } from '../../services/homeworkService';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';

// Admin dashboard strip of homework submissions awaiting a check.
// One filtered query (status == 'submitted') per mount; renders nothing when empty.
const HomeworkInbox = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchPendingSubmissions()
      .then((list) => { if (!cancelled) setItems(list); })
      .catch((err) => console.warn('[homework] inbox load failed:', err?.message || err))
      .finally(() => { if (!cancelled) setLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  if (!loaded || (items.length === 0 && !openId)) return null;

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
