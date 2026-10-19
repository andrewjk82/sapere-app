import { useEffect, useRef, useState } from 'react';
import { FileUp, X, Loader2, FileText, BookOpen } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import PdfViewer from './PdfViewer';
import WorkingOutCanvas from './WorkingOutCanvas';
import { SplitPanes, SplitLayoutToggle } from './SplitPanes';
import { useSplitLayout } from '../utils/useSplitLayout';
import { useCurriculumNote } from '../utils/useCurriculumNote';
import { useWorksheetPdf } from '../utils/useWorksheetPdf';
import { curriculumDocIdsForProfile, toDriveOpenUrl } from '../utils/homework';
import { listTopicPdfs } from '../utils/lessonTopicPdfs';
import { loadLessonPdf, saveLessonPdf, saveLessonDrivePdf, lessonNoteKey } from '../utils/lessonPdfStore';

const chip = (on) => ({
  border: `1px solid ${on ? '#a5b4fc' : '#e2e8f0'}`, background: on ? '#e0e7ff' : '#fff', color: on ? '#4338ca' : '#475569',
  borderRadius: 999, padding: '6px 14px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', whiteSpace: 'nowrap',
});
const headBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid #e2e8f0', background: '#fff', color: '#334155', borderRadius: 10, padding: '7px 12px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' };
const primaryBtn = { ...headBtn, background: '#4f46e5', color: '#fff', border: 0, padding: '10px 18px' };

// A curriculum topic's Drive worksheet: cached on this device after the first download (see useWorksheetPdf).
const DrivePane = ({ record }) => {
  const worksheet = useWorksheetPdf(record.url);
  return (
    <PdfViewer
      src={worksheet.src}
      loading={worksheet.loading}
      fallback={worksheet.fallback}
      storageKey={worksheet.fileId || `lesson-topic:${record.topicId}`}
      style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }}
    />
  );
};

// Pick the student's PDF: a worksheet from their curriculum, or a file from this device.
const PdfPicker = ({ student, profile, onPickTopic, onUpload, onClose }) => {
  const [state, setState] = useState({ status: 'loading', topics: [] });
  useEffect(() => {
    let cancelled = false;
    const ids = curriculumDocIdsForProfile(profile || {});
    Promise.all(ids.map((id) => getDoc(doc(db, 'curriculum', id)).catch(() => null)))
      .then((snaps) => {
        if (cancelled) return;
        const docs = snaps.filter((s) => s?.exists()).map((s) => s.data());
        setState({ status: 'ready', topics: listTopicPdfs(docs, profile || {}) });
      })
      .catch(() => { if (!cancelled) setState({ status: 'error', topics: [] }); });
    return () => { cancelled = true; };
  }, [profile]);

  const assigned = state.topics.filter((t) => t.assigned);
  const rest = state.topics.filter((t) => !t.assigned);
  const row = (t) => (
    <button key={t.id} type="button" onClick={() => onPickTopic(t)} style={{ display: 'block', width: '100%', textAlign: 'left', border: 0, background: 'transparent', padding: '9px 10px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: '0.86rem', color: '#1e293b' }}>
      {t.label}
      <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>{t.chapterTitle}</span>
    </button>
  );
  const heading = (text) => <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6366f1', padding: '10px 10px 4px' }}>{text}</div>;

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
          {state.status === 'error' && <div style={{ padding: 16, color: '#b45309', fontWeight: 700, fontSize: '0.85rem' }}>Couldn’t load the curriculum. You can still upload a PDF.</div>}
          {state.status === 'ready' && state.topics.length === 0 && <div style={{ padding: 16, color: '#64748b', fontWeight: 700, fontSize: '0.85rem' }}>This student’s curriculum has no worksheet PDFs yet.</div>}
          {assigned.length > 0 && <>{heading('Assigned to this student')}{assigned.map(row)}</>}
          {rest.length > 0 && <>{heading(assigned.length ? 'Other topics' : 'Curriculum topics')}{rest.map(row)}</>}
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
const LessonWorkspace = ({ session, students: profiles = [], onClose }) => {
  const students = (session.isGroupedClass ? session.groupStudents : [session])
    .map((s) => ({ id: s.studentId, name: s.studentName, email: s.studentEmail }))
    .filter((s) => s.id);
  const [activeId, setActiveId] = useState(students[0]?.id || '');
  const active = students.find((s) => s.id === activeId) || students[0];
  const activeStudentId = active?.id || '';
  const profile = profiles.find((p) => p.id === activeStudentId) || null;
  const [pdf, setPdf] = useState({ status: 'loading', record: null, url: '' });   // loading | none | ready | error
  const [picking, setPicking] = useState(false);
  const [pane, setPane] = useState('first');
  const fileRef = useRef(null);
  const canvasRef = useRef(null);
  const { layout, setLayoutChoice, split, setSplit } = useSplitLayout();

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
  const record = pdf.record;
  const isDrive = pdf.status === 'ready' && record?.kind === 'drive';

  const pdfPane = (
    <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', position: 'relative', background: '#f1f5f9' }}>
      {pdf.status === 'ready' && isDrive && <DrivePane key={record.url} record={record} />}
      {pdf.status === 'ready' && !isDrive && (
        <PdfViewer
          key={pdf.url}
          src={pdf.url}
          loading={false}
          storageKey={`lesson:${active.id}:${record.name}:${record.size}`}
          style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }}
        />
      )}
      {pdf.status === 'loading' && <div style={{ margin: 'auto', color: '#64748b' }}><Loader2 size={22} className="spin" /></div>}
      {(pdf.status === 'none' || pdf.status === 'error') && (
        <div style={{ margin: 'auto', textAlign: 'center', padding: 24, color: '#475569' }}>
          <FileText size={40} style={{ color: '#94a3b8' }} />
          <p style={{ fontWeight: 800, margin: '10px 0 4px' }}>{pdf.status === 'error' ? 'Couldn’t open the saved PDF' : `No PDF for ${active.name} yet`}</p>
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
            {session.date}{session.startTime ? ` · ${session.startTime}` : ''}{pdf.status === 'ready' ? ` · ${isDrive ? record.label : record.name}` : ''}
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
        {isDrive && (
          <a href={toDriveOpenUrl(record.url)} target="_blank" rel="noopener noreferrer" style={{ ...headBtn, textDecoration: 'none' }}>Open in Drive</a>
        )}
        {pdf.status === 'ready' && (
          <button type="button" onClick={() => setPicking(true)} style={headBtn}><FileUp size={15} /> Change PDF</button>
        )}
        {tabs ? (
          <div style={{ display: 'flex', gap: 6 }}>
            <button type="button" onClick={() => setPane('first')} style={chip(pane === 'first')}>PDF</button>
            <button type="button" onClick={() => setPane('second')} style={chip(pane === 'second')}>Notes</button>
          </div>
        ) : <SplitLayoutToggle layout={layout} onChange={setLayoutChoice} />}
        <button type="button" aria-label="Close lesson" onClick={close} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex', color: '#64748b' }}><X size={22} /></button>
        <input ref={fileRef} type="file" accept="application/pdf,.pdf" onChange={upload} style={{ display: 'none' }} />
      </div>
      <SplitPanes layout={layout} split={split} onSplitChange={setSplit} first={pdfPane} second={notePane} activePane={pane} />
      {picking && <PdfPicker student={active} profile={profile} onPickTopic={pickTopic} onUpload={() => fileRef.current?.click()} onClose={() => setPicking(false)} />}
    </div>
  );
};

export default LessonWorkspace;
