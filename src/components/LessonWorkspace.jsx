import { useEffect, useMemo, useRef, useState } from 'react';
import { FileUp, X, Loader2, FileText, BookOpen, ChevronLeft, ChevronRight, NotebookPen } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import PdfViewer from './PdfViewer';
import WorkingOutCanvas from './WorkingOutCanvas';
import { SplitPanes, SplitLayoutToggle } from './SplitPanes';
import { useSplitLayout } from '../utils/useSplitLayout';
import { useCurriculumNote } from '../utils/useCurriculumNote';
import { useWorksheetPdf } from '../utils/useWorksheetPdf';
import { curriculumDocIdsForProfile, toDriveOpenUrl } from '../utils/homework';
import { listTopicPdfs, groupTopicPdfsByBook } from '../utils/lessonTopicPdfs';
import { withTimeout } from '../utils/withTimeout';
import { localCache } from '../services/localCacheService';

// Written by the Curriculum screen (components/Curriculum.jsx): every curriculum/{doc} record, kept on the device.
const CURRICULUM_CACHE_KEY = 'curriculum-records:v1';
import { loadLessonPdf, saveLessonPdf, saveLessonDrivePdf, lessonNoteKey } from '../utils/lessonPdfStore';

const chip = (on) => ({
  border: `1px solid ${on ? '#a5b4fc' : '#e2e8f0'}`, background: on ? '#e0e7ff' : '#fff', color: on ? '#4338ca' : '#475569',
  borderRadius: 999, padding: '6px 14px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', whiteSpace: 'nowrap',
});
const headBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid #e2e8f0', background: '#fff', color: '#334155', borderRadius: 10, padding: '7px 12px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' };
const primaryBtn = { ...headBtn, background: '#4f46e5', color: '#fff', border: 0, padding: '10px 18px' };

// A curriculum topic's Drive worksheet: cached on this device after the first download (see useWorksheetPdf).
const DrivePane = ({ record, studentId }) => {
  const worksheet = useWorksheetPdf(record.url);
  return (
    <PdfViewer
      src={worksheet.src}
      loading={worksheet.loading}
      fallback={worksheet.fallback}
      // The pen / highlighter marks are kept per student: the same worksheet opened for another student starts clean.
      storageKey={`lesson:${studentId}:${worksheet.fileId || record.topicId}`}
      style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }}
    />
  );
};

// The curriculum worksheets (topics with a Drive PDF) for a student: assigned ones first, in curriculum order.
const useTopicPdfs = (profile) => {
  // The student's year is `assignedYear` (a list); older profiles only have `year` / `level`.
  const hasYear = (Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear]).some(Boolean);
  const idsKey = curriculumDocIdsForProfile(hasYear || !profile ? (profile || {}) : { ...profile, assignedYear: profile.year || profile.level }).join('|');
  // Keyed by the ids and the assigned chapters, not the profile object: the profile is re-fetched in the background
  // (a new object each time), and restarting on every new object could cancel the load forever.
  const assignedKey = (Array.isArray(profile?.assignedChapters) ? profile.assignedChapters : []).join('|');
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState({ key: null, status: 'loading', docs: [] });
  useEffect(() => {
    if (!idsKey) return undefined;
    let cancelled = false;
    // A read that never answers (stuck local cache, bad network) must not leave the picker spinning: give up after 12 s.
    withTimeout(Promise.all(idsKey.split('|').map((id) => getDoc(doc(db, 'curriculum', id)).catch(() => null))), 12000)
      .then((snaps) => {
        if (cancelled) return;
        setLoaded({ key: idsKey, status: 'ready', docs: snaps.filter((s) => s?.exists()).map((s) => ({ id: s.id, ...s.data() })) });
      })
      .catch(() => { if (!cancelled) setLoaded({ key: idsKey, status: 'error', docs: [] }); });
    return () => { cancelled = true; };
  }, [idsKey, attempt]);
  // The curriculum the Curriculum screen keeps on this device: shown at once while the fresh copy loads, and instead
  // of it when the read fails (it may be a little out of date, never empty-handed).
  const cachedDocs = useMemo(() => {
    const wanted = new Set(idsKey ? idsKey.split('|') : []);
    const records = localCache.get(CURRICULUM_CACHE_KEY)?.records;
    return Array.isArray(records) ? records.filter((r) => wanted.has(r?.id)) : [];
  }, [idsKey]);
  const fresh = loaded.key === idsKey && loaded.status === 'ready';
  const docs = fresh ? loaded.docs : cachedDocs;
  const topics = useMemo(
    () => listTopicPdfs(docs, { assignedChapters: assignedKey ? assignedKey.split('|') : [] }),
    [docs, assignedKey],
  );
  const ids = idsKey ? idsKey.split('|') : [];
  const retry = () => { setLoaded((prev) => ({ ...prev, key: null })); setAttempt((n) => n + 1); };
  if (!idsKey) return { status: 'ready', topics: [], ids, retry };
  if (fresh || cachedDocs.length) return { status: 'ready', topics, ids, retry };
  return { status: loaded.key === idsKey ? loaded.status : 'loading', topics: [], ids, retry };
};

// The last worksheet picked for a student on this device, so the picker opens at it even after an uploaded PDF.
const LAST_TOPIC_KEY = (studentId) => `sapere:lesson-picker:last:${studentId}`;
const readLastTopic = (studentId) => { try { return globalThis.localStorage?.getItem(LAST_TOPIC_KEY(studentId)) || ''; } catch { return ''; } };
const rememberLastTopic = (studentId, topicId) => { try { globalThis.localStorage?.setItem(LAST_TOPIC_KEY(studentId), topicId); } catch { /* private mode */ } };

const pickerRow = { display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 0, background: 'transparent', padding: '10px 12px', borderRadius: 12, cursor: 'pointer', color: '#1e293b' };
const badge = (bg, color) => ({ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase', background: bg, color, borderRadius: 999, padding: '3px 8px', whiteSpace: 'nowrap' });

// Pick the student's PDF: a worksheet from their curriculum, or a file from this device. With more than one book
// (several years / courses), the books come first; the book and chapter of the current worksheet are highlighted.
const PdfPicker = ({ student, state, currentTopicId, covered, onPickTopic, onUpload, onClose }) => {
  const books = useMemo(() => groupTopicPdfsByBook(state.topics), [state.topics]);
  const current = state.topics.find((t) => t.id === currentTopicId) || null;
  const [openBookId, setOpenBookId] = useState(null);
  const openBook = books.length === 1 ? books[0] : books.find((b) => b.id === openBookId) || null;
  const currentRef = useRef(null);
  useEffect(() => { currentRef.current?.scrollIntoView({ block: 'center' }); }, [openBook?.id]);

  // Topics already taught in this student's lessons (from the "Today covered" picker), shown in green.
  const coveredIn = (node) => (node.chapters ? node.chapters.reduce((n, c) => n + coveredIn(c), 0) : node.topics.filter((t) => covered.has(t.id)).length);

  const bookList = (
    <>
      {current && (
        <button type="button" onClick={() => onPickTopic(current)} style={{ ...pickerRow, background: '#eef2ff', border: '1px solid #c7d2fe', margin: '8px 0 4px' }}>
          <BookOpen size={18} color="#4f46e5" style={{ flexShrink: 0 }} />
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: '0.66rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6366f1' }}>Continue</span>
            <span style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem' }}>{current.label}</span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>{current.bookTitle} · {current.chapterTitle}</span>
          </span>
        </button>
      )}
      <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6366f1', padding: '10px 12px 4px' }}>Books</div>
      {books.map((b) => {
        const isCurrent = current?.bookId === b.id;
        return (
          <button key={b.id} type="button" onClick={() => setOpenBookId(b.id)} style={{ ...pickerRow, background: isCurrent ? '#f5f3ff' : 'transparent', border: isCurrent ? '1px solid #ddd6fe' : '1px solid transparent', marginBottom: 2 }}>
            <FileText size={18} color={isCurrent ? '#7c3aed' : '#94a3b8'} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem' }}>{b.title}</span>
              <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700 }}>{b.chapters.length} chapters · {b.total} worksheets</span>
            </span>
            {isCurrent && <span style={badge('#ede9fe', '#6d28d9')}>Last used</span>}
            {coveredIn(b) > 0 && <span style={badge('#d1fae5', '#047857')}>{coveredIn(b)} covered</span>}
            {b.assigned > 0 && <span style={badge('#dcfce7', '#15803d')}>Assigned</span>}
            <ChevronRight size={16} color="#94a3b8" style={{ flexShrink: 0 }} />
          </button>
        );
      })}
    </>
  );

  const chapterList = openBook && (
    <>
      {books.length > 1 && (
        <button type="button" onClick={() => setOpenBookId(null)} style={{ ...pickerRow, padding: '8px 10px', color: '#4f46e5', fontWeight: 800, fontSize: '0.82rem' }}>
          <ChevronLeft size={16} /> All books
        </button>
      )}
      <div style={{ fontWeight: 900, color: '#1e1b4b', padding: '4px 12px 6px' }}>{openBook.title}</div>
      {openBook.chapters.map((c) => {
        const isCurrentChapter = current?.bookId === openBook.id && c.topics.some((t) => t.id === current.id);
        return (
          <div key={c.id} style={{ margin: '6px 0', borderRadius: 14, background: isCurrentChapter ? '#f5f3ff' : 'transparent', border: isCurrentChapter ? '1px solid #ddd6fe' : '1px solid transparent', padding: '4px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px 2px' }}>
              <span style={{ flex: 1, fontSize: '0.72rem', fontWeight: 900, color: isCurrentChapter ? '#6d28d9' : '#6366f1' }}>{c.title}</span>
              {coveredIn(c) > 0 && <span style={badge('#d1fae5', '#047857')}>{coveredIn(c)}/{c.topics.length} covered</span>}
              {c.assigned > 0 && <span style={badge('#dcfce7', '#15803d')}>Assigned</span>}
            </div>
            {c.topics.map((t) => {
              const isCurrent = t.id === current?.id;
              const coveredOn = covered.get(t.id);
              return (
                <button key={t.id} ref={isCurrent ? currentRef : undefined} type="button" onClick={() => onPickTopic(t)} style={{ ...pickerRow, padding: '8px 12px', fontWeight: isCurrent ? 900 : 700, fontSize: '0.86rem', background: isCurrent ? '#ede9fe' : coveredOn ? '#ecfdf5' : 'transparent' }}>
                  <span style={{ flex: 1, minWidth: 0 }}>{t.label}</span>
                  {coveredOn && <span style={badge('#d1fae5', '#047857')}>✓ {coveredOn}</span>}
                  {isCurrent && <span style={badge('#7c3aed', '#fff')}>Last used</span>}
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.55)' }} />
      <div role="dialog" aria-label={`PDF for ${student.name}`} style={{ position: 'relative', width: '100%', maxWidth: 520, maxHeight: '86vh', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 20, boxShadow: '0 25px 50px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ flex: 1, fontWeight: 900, color: '#1e1b4b' }}>PDF for {student.name}</div>
          <button type="button" aria-label="Close" onClick={onClose} style={{ border: 0, background: 'transparent', cursor: 'pointer', color: '#64748b', display: 'flex' }}><X size={20} /></button>
        </div>
        <div style={{ padding: '10px 16px 0' }}>
          <button type="button" onClick={onUpload} style={{ ...headBtn, width: '100%', justifyContent: 'center', padding: '10px' }}><FileUp size={16} /> Upload a PDF from this device</button>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '6px 10px 14px' }}>
          {state.status === 'loading' && <div style={{ padding: 20, textAlign: 'center', color: '#64748b' }}><Loader2 size={20} className="spin" /></div>}
          {state.status === 'error' && (
            <div style={{ padding: 16, color: '#b45309', fontWeight: 700, fontSize: '0.85rem' }}>
              Couldn’t load the curriculum. You can still upload a PDF.
              <button type="button" onClick={state.retry} style={{ ...headBtn, marginTop: 10 }}>Try again</button>
            </div>
          )}
          {state.status === 'ready' && state.topics.length === 0 && <div style={{ padding: 16, color: '#64748b', fontWeight: 700, fontSize: '0.85rem' }}>{state.ids.length === 0 ? `No year is set for ${student.name}, so there is no curriculum to list.` : `No worksheet PDFs found in ${state.ids.join(', ').replaceAll('_', ' ')}.`}</div>}
          {books.length > 0 && (openBook ? chapterList : bookList)}
        </div>
      </div>
    </div>
  );
};

/**
 * The teacher's lesson screen: the student's PDF on one side, a notepad on the other. The PDF is a worksheet from
 * the student's curriculum (kept on the device after its first download) or an uploaded file; the notes are per
 * student and lesson date. All of it stays on this device. A group class has one tab per student.
 */
const LessonWorkspace = ({ session, students: profiles = [], sessions = [], onClose }) => {
  const students = (session.isGroupedClass ? session.groupStudents : [session])
    .map((s) => ({ id: s.studentId, name: s.studentName, email: s.studentEmail }))
    .filter((s) => s.id);
  const [activeId, setActiveId] = useState(students[0]?.id || '');
  const active = students.find((s) => s.id === activeId) || students[0];
  const activeStudentId = active?.id || '';
  const profile = profiles.find((p) => p.id === activeStudentId) || null;
  const [pdf, setPdf] = useState({ status: 'loading', record: null, url: '' });   // loading | none | ready | error
  const topicPdfs = useTopicPdfs(profile);
  const [picking, setPicking] = useState(false);
  // The lesson opens with the worksheet filling the screen; the Notes button brings the notepad in beside it and
  // a second tap hides it again. The notepad stays mounted while hidden (tab-style, full size), so its ink is kept.
  const [notesOpen, setNotesOpen] = useState(false);
  const fileRef = useRef(null);
  const canvasRef = useRef(null);
  const { layout, setLayoutChoice, split, setSplit } = useSplitLayout();

  // Topic id → date of the latest lesson (up to this one) where it was recorded as covered, for the active student.
  const lessonDate = session.date || '';
  const buildCovered = () => {
    const map = new Map();
    (Array.isArray(sessions) ? sessions : []).forEach((s) => {
      const mine = s?.studentId === activeStudentId || (Array.isArray(s?.groupStudents) && s.groupStudents.some((g) => g.studentId === activeStudentId));
      if (!mine || !Array.isArray(s.learnedTopics) || (s.date || '') > (lessonDate || '9999')) return;
      s.learnedTopics.forEach((t) => {
        if (t?.id && (s.date || '') >= (map.get(t.id) || '')) map.set(t.id, s.date || '');
      });
    });
    // "2026-11-03" → "3 Nov"
    map.forEach((date, id) => {
      const d = new Date(`${date}T00:00:00`);
      map.set(id, Number.isNaN(d.getTime()) ? date : d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }));
    });
    return map;
  };

  const noteKey = active ? lessonNoteKey(active.id, session.date) : null;
  const { ready, unsaved, saveNow, onInkChange, retry } = useCurriculumNote(canvasRef, noteKey, Boolean(noteKey), null);

  // This student's saved PDF choice (an uploaded file gets a fresh object URL, released when it is replaced).
  useEffect(() => {
    if (!activeStudentId) return undefined;
    let cancelled = false;
    let url = '';
    loadLessonPdf(activeStudentId).then((record) => {
      if (cancelled) return;
      if (!record) { setPdf({ status: 'none', record: null, url: '' }); return; }
      if (record.blob) url = URL.createObjectURL(record.blob);
      setPdf({ status: 'ready', record, url });
    }).catch(() => { if (!cancelled) setPdf({ status: 'error', record: null, url: '' }); });
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [activeStudentId]);

  const pickTopic = async (topic) => {
    setPicking(false);
    rememberLastTopic(activeStudentId, topic.id);
    try {
      const record = { kind: 'drive', topicId: topic.id, label: topic.label, url: topic.url, updatedAt: Date.now() };
      await saveLessonDrivePdf(activeStudentId, record);
      setPdf({ status: 'ready', record, url: '' });
    } catch {
      setPdf({ status: 'error', record: null, url: '' });
    }
  };

  const upload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !activeStudentId) return;
    if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) return;
    setPicking(false);
    try {
      await saveLessonPdf(activeStudentId, file);
      const record = { kind: 'upload', name: file.name, size: file.size, blob: file, updatedAt: Date.now() };
      setPdf({ status: 'ready', record, url: URL.createObjectURL(file) });
    } catch {
      setPdf({ status: 'error', record: null, url: '' });
    }
  };

  const close = async () => { await saveNow(); onClose(); };
  const switchStudent = async (id) => {
    if (id === activeId) return;
    await saveNow();
    setPdf({ status: 'loading', record: null, url: '' });
    setActiveId(id);
  };

  if (!active) return null;
  const tabs = layout === 'tabs';
  // No PDF chosen on this device yet (the choice is kept per device): open the student's first assigned worksheet, so
  // it is never a blank screen; picking or moving to another one saves the choice.
  const autoTopic = pdf.status === 'none' ? (topicPdfs.topics.find((t) => t.assigned) || null) : null;
  const record = pdf.record || (autoTopic ? { kind: 'drive', topicId: autoTopic.id, label: autoTopic.label, url: autoTopic.url } : null);
  const status = autoTopic ? 'ready' : pdf.status;
  const isDrive = status === 'ready' && record?.kind === 'drive';
  // Previous / Next worksheet: along the assigned topics (all of them when none is assigned), in curriculum order.
  // A worksheet outside the assigned ones walks the whole curriculum list instead.
  const assignedSeq = topicPdfs.topics.filter((t) => t.assigned);
  const inAssigned = isDrive && assignedSeq.some((t) => t.id === record.topicId);
  const sequence = inAssigned ? assignedSeq : topicPdfs.topics;
  const seqIndex = isDrive ? sequence.findIndex((t) => t.id === record.topicId) : -1;
  const prevTopic = seqIndex > 0 ? sequence[seqIndex - 1] : null;
  const nextTopic = seqIndex >= 0 && seqIndex < sequence.length - 1 ? sequence[seqIndex + 1] : null;

  const pdfPane = (
    <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', position: 'relative', background: '#f1f5f9' }}>
      {status === 'ready' && isDrive && <DrivePane key={`${active.id}:${record.url}`} record={record} studentId={active.id} />}
      {status === 'ready' && !isDrive && (
        <PdfViewer
          key={pdf.url}
          src={pdf.url}
          loading={false}
          storageKey={`lesson:${active.id}:${record.name}:${record.size}`}
          style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }}
        />
      )}
      {status === 'loading' && <div style={{ margin: 'auto', color: '#64748b' }}><Loader2 size={22} className="spin" /></div>}
      {(status === 'none' || status === 'error') && (
        <div style={{ margin: 'auto', textAlign: 'center', padding: 24, color: '#475569' }}>
          <FileText size={40} style={{ color: '#94a3b8' }} />
          <p style={{ fontWeight: 800, margin: '10px 0 4px' }}>{status === 'error' ? 'Couldn’t open the saved PDF' : `No PDF for ${active.name} yet`}</p>
          <p style={{ margin: '0 0 14px', fontSize: '0.85rem', color: '#64748b' }}>Pick a worksheet from their curriculum or upload one — it stays on this device and opens every lesson.</p>
          <button type="button" onClick={() => setPicking(true)} style={primaryBtn}><BookOpen size={16} /> Choose PDF</button>
        </div>
      )}
    </div>
  );

  const notePane = (
    <section aria-label="Lesson notes" style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', position: 'relative', pointerEvents: ready ? 'auto' : 'none' }}>
        <WorkingOutCanvas ref={canvasRef} isSubmitted={false} hideTitle onInkChange={onInkChange} />
        {!ready && <span style={{ position: 'absolute', right: 14, bottom: 12, fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Loading notes…</span>}
        {ready && unsaved && (
          <span role="alert" style={{ position: 'absolute', right: 14, bottom: 12, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 700, color: '#b45309', background: 'rgba(255,251,235,0.97)', border: '1px solid #fdba74', borderRadius: 10, padding: '4px 4px 4px 10px' }}>
            Couldn’t open the saved notes — writing here isn’t saved yet
            <button type="button" onClick={retry} style={{ border: 0, borderRadius: 8, padding: '5px 10px', background: '#ea580c', color: '#fff', fontWeight: 800, fontSize: '0.72rem', cursor: 'pointer' }}>Try again</button>
          </span>
        )}
      </div>
    </section>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1200, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 900, fontSize: '1rem', color: '#1e1b4b' }}>{students.length > 1 ? 'Group lesson' : active.name}</div>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#64748b', maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {session.date}{session.startTime ? ` · ${session.startTime}` : ''}{status === 'ready' ? ` · ${isDrive ? record.label : record.name}` : ''}
          </div>
        </div>
        {students.length > 1 && (
          <div role="tablist" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {students.map((s) => (
              <button key={s.id} type="button" role="tab" aria-selected={s.id === active.id} onClick={() => switchStudent(s.id)} style={chip(s.id === active.id)}>{s.name}</button>
            ))}
          </div>
        )}
        <div style={{ flex: 1 }} />
        {isDrive && sequence.length > 1 && seqIndex >= 0 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <button type="button" aria-label="Previous worksheet" title={prevTopic ? prevTopic.label : 'No earlier worksheet'} disabled={!prevTopic} onClick={() => prevTopic && pickTopic(prevTopic)} style={{ ...headBtn, padding: '7px 10px', opacity: prevTopic ? 1 : 0.4, cursor: prevTopic ? 'pointer' : 'default' }}><ChevronLeft size={16} /> Previous</button>
            <button type="button" aria-label="Next worksheet" title={nextTopic ? nextTopic.label : 'No later worksheet'} disabled={!nextTopic} onClick={() => nextTopic && pickTopic(nextTopic)} style={{ ...headBtn, padding: '7px 10px', opacity: nextTopic ? 1 : 0.4, cursor: nextTopic ? 'pointer' : 'default' }}>Next <ChevronRight size={16} /></button>
          </div>
        )}
        {isDrive && (
          <a href={toDriveOpenUrl(record.url)} target="_blank" rel="noopener noreferrer" style={{ ...headBtn, textDecoration: 'none' }}>Open in Drive</a>
        )}
        {status === 'ready' && (
          <button type="button" onClick={() => setPicking(true)} style={headBtn}><FileUp size={15} /> Change PDF</button>
        )}
        {notesOpen && !tabs && <SplitLayoutToggle layout={layout} onChange={setLayoutChoice} />}
        <button type="button" aria-pressed={notesOpen} aria-label={notesOpen ? 'Hide notes' : 'Show notes'} onClick={() => setNotesOpen((v) => !v)} style={{ ...headBtn, ...(notesOpen ? { background: '#e0e7ff', borderColor: '#a5b4fc', color: '#4338ca' } : null) }}><NotebookPen size={15} /> Notes</button>
        <button type="button" aria-label="Close lesson" onClick={close} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex', color: '#64748b' }}><X size={22} /></button>
        <input ref={fileRef} type="file" accept="application/pdf,.pdf" onChange={upload} style={{ display: 'none' }} />
      </div>
      <SplitPanes layout={notesOpen ? layout : 'tabs'} split={split} onSplitChange={setSplit} first={pdfPane} second={notePane} activePane={notesOpen && tabs ? 'second' : 'first'} />
      {picking && <PdfPicker student={active} state={topicPdfs} covered={buildCovered()} currentTopicId={isDrive ? record.topicId : readLastTopic(active.id)} onPickTopic={pickTopic} onUpload={() => fileRef.current?.click()} onClose={() => setPicking(false)} />}
    </div>
  );
};

export default LessonWorkspace;
