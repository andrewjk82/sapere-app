import { useEffect, useRef, useState } from 'react';
import { FileUp, X, Loader2, FileText } from 'lucide-react';
import PdfViewer from './PdfViewer';
import WorkingOutCanvas from './WorkingOutCanvas';
import { SplitPanes, SplitLayoutToggle } from './SplitPanes';
import { useSplitLayout } from '../utils/useSplitLayout';
import { useCurriculumNote } from '../utils/useCurriculumNote';
import { loadLessonPdf, saveLessonPdf, lessonNoteKey } from '../utils/lessonPdfStore';

const chip = (on) => ({
  border: `1px solid ${on ? '#a5b4fc' : '#e2e8f0'}`, background: on ? '#e0e7ff' : '#fff', color: on ? '#4338ca' : '#475569',
  borderRadius: 999, padding: '6px 14px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', whiteSpace: 'nowrap',
});
const headBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid #e2e8f0', background: '#fff', color: '#334155', borderRadius: 10, padding: '7px 12px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' };

/**
 * The teacher's lesson screen: the student's PDF on one side, a notepad on the other. Both stay on this
 * device — the PDF per student (chosen once, replaced any time), the notes per student and lesson date. A group
 * class has one tab per student.
 */
const LessonWorkspace = ({ session, onClose }) => {
  const students = (session.isGroupedClass ? session.groupStudents : [session])
    .map((s) => ({ id: s.studentId, name: s.studentName }))
    .filter((s) => s.id);
  const [activeId, setActiveId] = useState(students[0]?.id || '');
  const active = students.find((s) => s.id === activeId) || students[0];
  const activeStudentId = active?.id || '';
  const [pdf, setPdf] = useState({ status: 'loading', record: null, url: '' });   // loading | none | ready | error
  const [pane, setPane] = useState('first');
  const fileRef = useRef(null);
  const canvasRef = useRef(null);
  const { layout, setLayoutChoice, split, setSplit } = useSplitLayout();

  const noteKey = active ? lessonNoteKey(active.id, session.date) : null;
  const { ready, unsaved, saveNow, onInkChange, retry } = useCurriculumNote(canvasRef, noteKey, Boolean(noteKey), null);

  // This student's PDF (a new object URL per load; the old one is released).
  useEffect(() => {
    if (!activeStudentId) return undefined;
    let cancelled = false;
    let url = '';
    loadLessonPdf(activeStudentId).then((record) => {
      if (cancelled) return;
      if (!record?.blob) { setPdf({ status: 'none', record: null, url: '' }); return; }
      url = URL.createObjectURL(record.blob);
      setPdf({ status: 'ready', record, url });
    }).catch(() => { if (!cancelled) setPdf({ status: 'error', record: null, url: '' }); });
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [activeStudentId]);

  const choose = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file || !activeStudentId) return;
    if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) return;
    try {
      await saveLessonPdf(activeStudentId, file);
      const record = { name: file.name, size: file.size, blob: file, updatedAt: Date.now() };
      setPdf({ status: 'ready', record, url: URL.createObjectURL(file) });
    } catch {
      setPdf({ status: 'error', record: null, url: '' });
    }
  };

  const close = async () => { await saveNow(); onClose(); };
  const switchStudent = async (id) => { if (id === activeId) return; await saveNow(); setPdf({ status: 'loading', record: null, url: '' }); setActiveId(id); };

  if (!active) return null;
  const tabs = layout === 'tabs';

  const pdfPane = (
    <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', position: 'relative', background: '#f1f5f9' }}>
      {pdf.status === 'ready' && (
        <PdfViewer
          key={pdf.url}
          src={pdf.url}
          loading={false}
          storageKey={`lesson:${active.id}:${pdf.record.name}:${pdf.record.size}`}
          style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }}
        />
      )}
      {pdf.status === 'loading' && <div style={{ margin: 'auto', color: '#64748b' }}><Loader2 size={22} className="spin" /></div>}
      {(pdf.status === 'none' || pdf.status === 'error') && (
        <div style={{ margin: 'auto', textAlign: 'center', padding: 24, color: '#475569' }}>
          <FileText size={40} style={{ color: '#94a3b8' }} />
          <p style={{ fontWeight: 800, margin: '10px 0 4px' }}>{pdf.status === 'error' ? 'Couldn’t open the saved PDF' : `No PDF for ${active.name} yet`}</p>
          <p style={{ margin: '0 0 14px', fontSize: '0.85rem', color: '#64748b' }}>Choose one — it stays on this device and opens every lesson.</p>
          <button type="button" onClick={() => fileRef.current?.click()} style={{ ...headBtn, background: '#4f46e5', color: '#fff', border: 0, padding: '10px 18px' }}><FileUp size={16} /> Choose PDF</button>
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
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#64748b' }}>{session.date}{session.startTime ? ` · ${session.startTime}` : ''}</div>
        </div>
        {students.length > 1 && (
          <div role="tablist" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {students.map((s) => (
              <button key={s.id} type="button" role="tab" aria-selected={s.id === active.id} onClick={() => switchStudent(s.id)} style={chip(s.id === active.id)}>{s.name}</button>
            ))}
          </div>
        )}
        <div style={{ flex: 1 }} />
        {pdf.status === 'ready' && (
          <button type="button" onClick={() => fileRef.current?.click()} title={pdf.record.name} style={headBtn}><FileUp size={15} /> Change PDF</button>
        )}
        {tabs ? (
          <div style={{ display: 'flex', gap: 6 }}>
            <button type="button" onClick={() => setPane('first')} style={chip(pane === 'first')}>PDF</button>
            <button type="button" onClick={() => setPane('second')} style={chip(pane === 'second')}>Notes</button>
          </div>
        ) : <SplitLayoutToggle layout={layout} onChange={setLayoutChoice} />}
        <button type="button" aria-label="Close lesson" onClick={close} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex', color: '#64748b' }}><X size={22} /></button>
        <input ref={fileRef} type="file" accept="application/pdf,.pdf" onChange={choose} style={{ display: 'none' }} />
      </div>
      <SplitPanes layout={layout} split={split} onSplitChange={setSplit} first={pdfPane} second={notePane} activePane={pane} />
    </div>
  );
};

export default LessonWorkspace;
