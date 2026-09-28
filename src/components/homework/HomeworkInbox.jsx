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
      <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            style={{ flex: '0 0 160px', textAlign: 'left', border: '1px solid #e2e8f0', borderRadius: 14, background: '#f8fafc', padding: 8, cursor: 'pointer' }}
          >
            {item.thumbnails?.[0] && (
              <img src={item.thumbnails[0]} alt="" style={{ width: '100%', height: 90, objectFit: 'cover', objectPosition: 'top', borderRadius: 8, background: '#fff' }} />
            )}
            <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#1e1b4b', marginTop: 6 }}>{item.studentName || 'Student'}</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {[item.sessionDate, (item.topics || []).map((t) => t.label).join(', ')].filter(Boolean).join(' · ')}
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
