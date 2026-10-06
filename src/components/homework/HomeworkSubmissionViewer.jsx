import { useEffect, useState } from 'react';
import HomeworkMarkingPanel from './HomeworkMarkingPanel';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';
import { fetchSubmission, fetchSubmissionPages, markHomeworkChecked } from '../../services/homeworkService';
import { loadHomeworkLocal } from '../../utils/homeworkLocalStore';
import { isSafeImageDataUrl } from '../../utils/homework';
import { groupMarksByTopic } from '../../utils/homeworkMarking';
import { wrongQuestions } from '../../utils/homeworkRedo';

const SPIN = { animation: 'spin 0.8s linear infinite' };
const ICON_BTN = { border: 0, background: 'transparent', color: '#fff', padding: 6, cursor: 'pointer' };
const MARK_CHIP = {
  c: { bg: '#10b981', text: '✓' },
  x: { bg: '#ef4444', text: '✗' },
  h: { bg: '#f59e0b', text: '½' },
};

// What the student sees once the teacher has checked: the score, the comment, and the ✓/✗/½
// for every question the teacher marked in the topic being viewed. The answer key stays teacher-only.
const StudentMarks = ({ info, topicId, onRedo }) => {
  const wrongCount = wrongQuestions(info?.marks, info?.topics).length;
  const sections = topicId ? (groupMarksByTopic(info?.marks)[topicId] || []) : [];
  if (!info?.mark && !info?.comment && sections.length === 0) return null;
  return (
    <div style={{ margin: '0 12px 8px', padding: '10px 12px', borderRadius: 14, background: 'rgba(255,255,255,0.96)', color: '#1e1b4b', maxHeight: '34vh', overflowY: 'auto' }}>
      {(info.mark || info.comment) && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: sections.length ? 8 : 0 }}>
          {info.mark && <strong style={{ fontSize: '1.15rem' }}>{info.mark}</strong>}
          {info.mark && <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>all topics</span>}
          {info.comment && <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4f46e5' }}>“{info.comment}”</span>}
        </div>
      )}
      {onRedo && wrongCount > 0 && (
        <button type="button" onClick={onRedo} style={{ margin: '0 0 10px', padding: '9px 14px', borderRadius: 12, border: 0, background: '#7c3aed', color: '#fff', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
          Redo wrong questions ({wrongCount})
        </button>
      )}
      {sections.map(({ section, items }) => (
        <div key={section} style={{ marginBottom: 6 }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 4 }}>{section}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {items.map(({ label, mark }) => (
              <span key={label} aria-label={`Question ${label}: ${mark === 'c' ? 'correct' : mark === 'x' ? 'incorrect' : 'half marks'}`} style={{ minWidth: 40, padding: '5px 9px', borderRadius: 9, background: MARK_CHIP[mark].bg, color: '#fff', fontWeight: 800, fontSize: '0.8rem', textAlign: 'center' }}>
                {label} {MARK_CHIP[mark].text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// mode 'teacher': originals from Firestore (thumbnails once purged) + "Mark as checked".
// mode 'student': the copy kept on this device, with no Firestore read at all;
// only when this device has no copy is the submission doc read once for its
// thumbnails. `info` ({ date, topics, status }) comes from the in-memory
// session so the header doesn't need that doc either.
const HomeworkSubmissionViewer = ({ sessionId, mode, uid, info, onClose, onChecked, onRedo }) => {
  const [submission, setSubmission] = useState(null);
  const [pages, setPages] = useState([]);
  const [isThumbnailOnly, setIsThumbnailOnly] = useState(false);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [activeGroupId, setActiveGroupId] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let sub = null;
        let records = [];
        if (mode === 'student') {
          const local = await loadHomeworkLocal(uid, sessionId);
          records = (local?.submittedPages || (local?.submittedImages || []).map((image) => ({ image })))
            .filter((record) => isSafeImageDataUrl(record?.image));
          // Paper homework the teacher ticked has no submission doc → null.
          if (records.length === 0) sub = await fetchSubmission(sessionId);
        } else {
          sub = await fetchSubmission(sessionId);
          if (sub && !sub.originalsDeletedAt) records = await fetchSubmissionPages(sessionId);
          records = records.filter((record) => isSafeImageDataUrl(record?.image));
        }
        if (cancelled) return;
        setSubmission(sub);
        const thumbnails = (sub?.thumbnails || []).map((image, index) => ({ image, index }))
          .filter((entry) => isSafeImageDataUrl(entry.image));
        if (records.length === 0 && thumbnails.length) {
          const pageTopics = sub?.pageTopics || [];
          records = thumbnails.map(({ image, index }) => ({
            image,
            index,
            topicId: pageTopics[index]?.topicId || null,
            topicLabel: pageTopics[index]?.topicLabel || (pageTopics[index]?.topicId ? '' : 'Earlier combined notes'),
          }));
          setIsThumbnailOnly(true);
        }
        setPages(records);
        const availableTopics = sub?.topics || info?.topics || [];
        setActiveGroupId(availableTopics[0]?.id || (records.some((record) => !record.topicId) ? '__earlier__' : ''));
      } catch {
        if (!cancelled) setError('Could not load this homework.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [sessionId, mode, uid, info?.topics]);

  // Teacher marking layout: answer key + marking on the left, the student's
  // pages on the right; on a narrow screen the three are tabs.
  const [isWide, setIsWide] = useState(() => window.innerWidth >= 900);
  const [narrowTab, setNarrowTab] = useState('work');
  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleCheck = async (grade = null) => {
    setChecking(true);
    setError('');
    try {
      await markHomeworkChecked(sessionId, grade, {
        studentId: submission?.studentId,
        topics: submission?.topics || info?.topics || [],
      });
      setSubmission((s) => ({ ...s, status: 'checked' }));
      onChecked?.(sessionId);
    } catch {
      setError('Could not mark as checked. Try again.');
    } finally {
      setChecking(false);
    }
  };

  const homeworkTopics = submission?.topics || info?.topics || [];
  const topicSummary = homeworkTopics.map((t) => t.label).join(', ');
  const subtitle = [submission?.sessionDate || info?.date, topicSummary].filter(Boolean).join(' · ');
  const status = submission?.status || info?.status;
  const marking = mode === 'teacher' && submission?.status === 'submitted' && homeworkTopics.length > 0;
  const hasEarlierGroup = pages.some((record) => !record.topicId);
  const topicGroups = [
    ...homeworkTopics.map((topic) => ({ id: topic.id, label: topic.label || topic.title || topic.id })),
    ...(hasEarlierGroup ? [{ id: '__earlier__', label: 'Earlier combined notes' }] : []),
  ];
  const selectedGroup = topicGroups.find((group) => group.id === activeGroupId) || topicGroups[0];
  const activeTopicIndex = homeworkTopics.findIndex((topic) => topic.id === selectedGroup?.id);
  const visiblePages = pages.filter((record) => selectedGroup?.id === '__earlier__' ? !record.topicId : record.topicId === selectedGroup?.id);
  const activePage = Math.min(page, Math.max(visiblePages.length - 1, 0));

  const selectGroup = (id) => {
    if (id === activeGroupId) return;
    setActiveGroupId(id);
    setPage(0);
    setZoom(1);
  };

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(15,23,42,0.85)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', color: '#fff' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800 }}>{mode === 'teacher' ? (submission?.studentName || 'Homework') : 'Your homework'}</div>
          {subtitle && (
            <div style={{ fontSize: '0.75rem', opacity: 0.75, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {subtitle}
            </div>
          )}
        </div>
        <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} style={ICON_BTN}><ZoomOut size={20} /></button>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} style={ICON_BTN}><ZoomIn size={20} /></button>
        {mode === 'teacher' && submission?.status === 'submitted' && !(submission?.topics || []).length && (
          <button type="button" disabled={checking} onClick={() => handleCheck()} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 12, border: 0, background: '#10b981', color: '#fff', fontWeight: 800, cursor: checking ? 'default' : 'pointer' }}>
            {checking ? <Loader2 size={16} style={SPIN} /> : <CheckCircle2 size={16} />} Mark as checked
          </button>
        )}
        {status === 'checked' && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6ee7b7', fontWeight: 800 }}><CheckCircle2 size={16} /> Checked</span>
        )}
        <button type="button" aria-label="Close" onClick={onClose} style={ICON_BTN}><X size={22} /></button>
      </div>

      {isThumbnailOnly && (
        <div style={{ textAlign: 'center', color: '#fde68a', fontSize: '0.78rem', fontWeight: 700, paddingBottom: 6 }}>
          Showing a small preview — the full-size copy is no longer stored.
        </div>
      )}
      {error && <div role="alert" style={{ textAlign: 'center', color: '#fecaca', fontWeight: 700 }}>{error}</div>}

      {topicGroups.length > 1 && (
        <div style={{ display: 'flex', gap: 6, padding: '0 12px 8px', overflowX: 'auto' }}>
          {topicGroups.map((group) => (
            <button key={group.id} type="button" onClick={() => selectGroup(group.id)} style={{ flexShrink: 0, border: '1px solid', borderColor: selectedGroup?.id === group.id ? '#c4b5fd' : 'rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 12px', background: selectedGroup?.id === group.id ? '#ede9fe' : 'rgba(255,255,255,0.1)', color: selectedGroup?.id === group.id ? '#4c1d95' : '#fff', fontWeight: 800, cursor: 'pointer' }}>
              {group.label}
            </button>
          ))}
        </div>
      )}

      {mode === 'student' && status === 'checked' && (
        <StudentMarks info={info} topicId={selectedGroup?.id} onRedo={onRedo} />
      )}

      {marking && !isWide && (
        <div style={{ display: 'flex', gap: 6, padding: '0 12px 8px' }}>
          {[['work', 'Student work'], ['answers', 'Answers'], ['marking', 'Marking']].map(([key, label]) => (
            <button key={key} type="button" onClick={() => setNarrowTab(key)} style={{ flex: 1, border: 0, borderRadius: 10, padding: '8px', fontWeight: 800, cursor: 'pointer', background: narrowTab === key ? '#fff' : 'rgba(255,255,255,0.15)', color: narrowTab === key ? '#1e1b4b' : '#fff' }}>
              {label}
            </button>
          ))}
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
        {/* Hidden, not unmounted, on the narrow "Student work" tab so the marks survive. */}
        {marking && (
          <div style={{ width: isWide ? '44%' : '100%', minWidth: 0, background: '#fff', borderRight: isWide ? '1px solid #e2e8f0' : 0, display: isWide || narrowTab !== 'work' ? 'block' : 'none' }}>
            <HomeworkMarkingPanel
              topics={homeworkTopics}
              activeTopicIndex={activeTopicIndex}
              onTopicChange={(index) => selectGroup(homeworkTopics[index]?.id)}
              showTopicTabs={false}
              layout={isWide ? 'stack' : narrowTab === 'work' ? 'marking' : narrowTab}
              saving={checking}
              onSave={handleCheck}
            />
          </div>
        )}
        {(!marking || isWide || narrowTab === 'work') && (
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          {/* Centre with margin:auto, not justify/align-content:center — a page taller
              (or, zoomed, wider) than the viewport would otherwise overflow off the
              top/left where it can't be scrolled to, hiding the top of the page. */}
          <div key={`${selectedGroup?.id}:${activePage}`} style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', padding: 12, touchAction: 'pan-x pan-y pinch-zoom' }}>
            {loading ? (
              <Loader2 size={28} color="#fff" style={{ ...SPIN, margin: 'auto' }} />
            ) : visiblePages.length === 0 ? (
              <div style={{ color: '#cbd5e1', fontWeight: 700, margin: 'auto' }}>No work submitted for this topic yet.</div>
            ) : (
              <img
                src={visiblePages[activePage].image}
                alt={`${selectedGroup?.label || 'Homework'} page ${activePage + 1}`}
                style={{ margin: 'auto', flexShrink: 0, background: '#fff', borderRadius: 12, width: `${zoom * 100}%`, maxWidth: zoom === 1 ? 900 : 'none', height: 'auto' }}
              />
            )}
          </div>

          {visiblePages.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 12, color: '#fff' }}>
              <button type="button" aria-label="Previous page" disabled={activePage === 0} onClick={() => { setPage((p) => Math.max(0, p - 1)); setZoom(1); }} style={{ ...ICON_BTN, opacity: activePage === 0 ? 0.3 : 1 }}><ChevronLeft size={24} /></button>
              <span style={{ fontWeight: 700 }}>{activePage + 1} / {visiblePages.length}</span>
              <button type="button" aria-label="Next page" disabled={activePage === visiblePages.length - 1} onClick={() => { setPage((p) => Math.min(visiblePages.length - 1, p + 1)); setZoom(1); }} style={{ ...ICON_BTN, opacity: activePage === visiblePages.length - 1 ? 0.3 : 1 }}><ChevronRight size={24} /></button>
            </div>
          )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default HomeworkSubmissionViewer;
