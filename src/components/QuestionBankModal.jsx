import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Trash2, Edit2, Image as ImageIcon, Eye, Check, AlertTriangle, BarChart, Lightbulb } from 'lucide-react';
import { db } from '../firebase/config';
import {
  collection,
  query,
  where,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { useToast } from '../context/ToastContext';
import MathGraph from './MathGraph';

const QUESTION_PAGE_SIZE = 10;
const questionBankSessionCache = new Map();

// Firebase Storage imports removed
const compressImageToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        const max_size = 800; // 최대 크기 조절

        if (w > h) {
          if (w > max_size) {
            h *= max_size / w;
            w = max_size;
          }
        } else {
          if (h > max_size) {
            w *= max_size / h;
            h = max_size;
          }
        }
        canvas.width = w; 
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        
        // Base64 Data URL로 변환 (용량 최적화를 위해 jpeg 0.6 사용)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Image load error"));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error("File read error"));
    reader.readAsDataURL(file);
  });
};

const FileUploader = ({ onUpload, currentUrl, label }) => {
  const { showToast } = useToast();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = React.useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    try {
      // 1. 이미지를 압축하여 Base64 문자열로 변환 (Storage 사용 안함)
      const base64Url = await compressImageToDataUrl(file);
      onUpload(base64Url);
    } catch (err) {
      console.error("Upload Error:", err);
      showToast(`Image conversion failed: ${err.message}`, 'error');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div style={{ flex: 1 }}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*" />
      <div 
        onClick={() => !uploading && fileInputRef.current?.click()}
        style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '2px dashed #e2e8f0', background: '#f8fafc', cursor: uploading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', minHeight: '54px', position: 'relative', overflow: 'hidden', opacity: uploading ? 0.7 : 1 }}
      >
        {uploading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '16px', height: '16px', border: '2px solid #6366f1', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6366f1' }}>Compressing & Uploading...</span>
          </div>
        ) : currentUrl ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <ImageIcon size={18} style={{ color: '#10b981' }} />
             <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981' }}>Image Ready</span>
             <button onClick={(e) => { e.stopPropagation(); onUpload(''); }} style={{ border: 'none', background: 'none', color: '#f43f5e', fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer' }}>Remove</button>
          </div>
        ) : (
          <>
            <Plus size={18} style={{ color: '#94a3b8' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>{label || "Click to upload image"}</span>
          </>
        )}
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

import MathView, { toDisplayText } from './MathView';

const MathPreview = ({ content, graphData, style = {} }) => {
  const containerRef = React.useRef(null);
  const safeContent = toDisplayText(content);

  useEffect(() => {
    if (containerRef.current && window.renderMathInElement) {
      window.renderMathInElement(containerRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false
      });
    }
  }, [safeContent]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div ref={containerRef} style={{ padding: '16px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', minHeight: '50px', fontSize: '1rem', color: '#1e293b', lineHeight: 1.6, ...style }}>
        {safeContent || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Preview will appear here...</span>}
      </div>
      {graphData && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <MathGraph data={graphData} />
        </div>
      )}
    </div>
  );
};

const StudentViewPreview = ({ question, onClose }) => {
  if (!question) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }} />
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ position: 'relative', width: '100%', maxWidth: '500px', maxHeight: '90vh', background: '#f8fafc', borderRadius: '32px', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1 }}>
          <span style={{ fontWeight: 800, color: '#64748b', fontSize: '0.9rem' }}>STUDENT VIEW PREVIEW</span>
          <button onClick={onClose} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={18} /></button>
        </div>
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'white', padding: '32px', borderRadius: '32px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <MathView content={question.question} graphData={question.graphData} style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1e293b', marginBottom: '16px', lineHeight: 1.5 }} />
            {question.questionImage && (
              <img src={question.questionImage} alt="Question" style={{ width: '100%', borderRadius: '16px', marginTop: '16px' }} />
            )}
          </div>

          {question.type === 'short_answer' ? (
            <input type="text" placeholder="Type answer here..." style={{ width: '100%', padding: '20px', borderRadius: '20px', border: '2px solid #e2e8f0', background: 'white', outline: 'none', fontSize: '1.1rem', fontWeight: 700, textAlign: 'center' }} disabled />
          ) : (
            <div style={{ display: 'grid', gap: '12px' }}>
              {(question.options || []).map((opt, i) => (
                <div key={i} style={{ padding: '16px 20px', borderRadius: '20px', border: '2px solid #e2e8f0', background: 'white', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, color: '#475569', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#94a3b8', flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ fontSize: '1.05rem' }} />
                    {typeof opt === 'object' && opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ maxWidth: '100%', height: '60px', marginTop: '8px', borderRadius: '8px', objectFit: 'contain' }} />}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
             <button style={{ width: '100%', padding: '20px', borderRadius: '20px', border: 'none', background: '#6366f1', color: 'white', fontWeight: 800, opacity: 0.5, cursor: 'not-allowed', fontSize: '1.1rem' }}>Submit Answer</button>
             <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '12px', fontWeight: 600 }}>This is a non-interactive preview</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const QuestionBankModal = ({ chapter, onClose, directEditQuestion }) => {
  const { showToast } = useToast();
  const chapterId = chapter?.id;
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(!directEditQuestion);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastQuestionDoc, setLastQuestionDoc] = useState(null);
  const [hasMoreQuestions, setHasMoreQuestions] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(!!directEditQuestion);
  const [editingQuestion, setEditingQuestion] = useState(directEditQuestion ? directEditQuestion.id : null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    questionText: '',
    questionImage: '',
    difficulty: 'easy',
    timeLimit: 60,
    type: 'multiple_choice',
    options: [
      { text: '', imageUrl: '' },
      { text: '', imageUrl: '' },
      { text: '', imageUrl: '' },
      { text: '', imageUrl: '' }
    ],
    answer: '',
    solution: '',
    hint: '',
    topicTitle: '',
    subQuestions: [],
    requiresManualGrading: false,
    graphData: ''
  });

  const loadQuestionPage = React.useCallback(async ({ reset = false, cursor = null, currentQuestions = [] } = {}) => {
    if (!chapterId) return;

    const cacheKey = `questions:${chapterId}`;
    const cached = questionBankSessionCache.get(cacheKey);
    if (reset && cached) {
      setQuestions(cached.questions);
      setLastQuestionDoc(cached.lastDoc);
      setHasMoreQuestions(cached.hasMore);
      setLoading(false);
      return;
    }

    if (reset) setLoading(true);
    else setLoadingMore(true);

    try {
      const constraints = [
        where('chapterId', '==', chapterId),
        orderBy('createdAt', 'desc'),
        limit(QUESTION_PAGE_SIZE + 1),
      ];
      if (!reset && cursor) constraints.splice(2, 0, startAfter(cursor));

      const snap = await getDocs(query(collection(db, 'questions'), ...constraints));
      const docs = snap.docs.slice(0, QUESTION_PAGE_SIZE);
      const page = docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(q => q.isActive !== false);
      const nextQuestions = reset ? page : [...currentQuestions, ...page];
      const hasMore = snap.docs.length > QUESTION_PAGE_SIZE;
      const lastDoc = docs[docs.length - 1] || null;

      setQuestions(nextQuestions);
      setLastQuestionDoc(lastDoc);
      setHasMoreQuestions(hasMore);
      questionBankSessionCache.set(cacheKey, {
        questions: nextQuestions,
        lastDoc,
        hasMore,
      });
    } catch (err) {
      console.error('Question bank load failed:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [chapterId]);

  useEffect(() => {
    if (!chapterId) return;
    queueMicrotask(() => loadQuestionPage({ reset: true }));
  }, [chapterId, loadQuestionPage]);

  const handleOpenForm = (q = null) => {
    if (q) {
      let initialAnswerIdx = null;
      let initialAnswer = q.answer || '';
      
      if (q.type === 'multiple_choice') {
        if (['0', '1', '2', '3'].includes(q.answer)) {
          initialAnswerIdx = parseInt(q.answer);
        } else {
          initialAnswerIdx = (q.options || []).findIndex(opt => (typeof opt === 'string' ? opt : opt.text) === q.answer);
          if (initialAnswerIdx === -1) initialAnswerIdx = null;
        }
      }

      setFormData({
        title: q.title || '',
        questionText: q.question || '',
        questionImage: q.questionImage || '',
        difficulty: q.difficulty || 'easy',
        timeLimit: q.timeLimit || 60,
        type: q.type || 'multiple_choice',
        options: q.options && q.options.length > 0 && typeof q.options[0] === 'object' 
          ? q.options 
          : (q.options || ['', '', '', '']).map(opt => typeof opt === 'string' ? { text: opt, imageUrl: '' } : opt),
        answer: initialAnswer,
        answerIdx: initialAnswerIdx,
        solution: q.solution || '',
        hint: q.hint || '',
        topicTitle: q.topicTitle || '',
        subQuestions: (q.subQuestions || []).map(sq => ({
          ...sq,
          solution: sq.solution || '',
          options: sq.options || [{ text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }]
        })),
        requiresManualGrading: q.requiresManualGrading || false,
        graphData: q.graphData ? JSON.stringify(q.graphData, null, 2) : ''
      });
      setEditingQuestion(q.id);
    } else {
      setFormData({
        title: `Question ${questions.length + 1}`,
        questionText: '',
        questionImage: '',
        difficulty: 'easy',
        timeLimit: 60,
        type: 'multiple_choice',
        options: [
          { text: '', imageUrl: '' },
          { text: '', imageUrl: '' },
          { text: '', imageUrl: '' },
          { text: '', imageUrl: '' }
        ],
        answer: '',
        answerIdx: null,
        solution: '',
        hint: '',
        topicTitle: '',
        subQuestions: [],
        requiresManualGrading: false,
        graphData: ''
      });
      setEditingQuestion(null);
    }
    setIsFormOpen(true);
  };

  useEffect(() => {
    if (!directEditQuestion) return;
    queueMicrotask(() => {
      const q = questions.find(q => q.id === directEditQuestion.id) || directEditQuestion;
      handleOpenForm(q);
    });
    // directEditQuestion should open once with the latest loaded question snapshot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [directEditQuestion, questions]);

  const MANUAL_GRADING_KEYWORDS = /\b(show that|draw|sketch|prove|describe|explain|construct|hence|justify|demonstrate|find and sketch|graph)/i;

  const handleQuestionTextChange = (text) => {
    const autoDetected = MANUAL_GRADING_KEYWORDS.test(text);
    setFormData(prev => ({
      ...prev,
      questionText: text,
      requiresManualGrading: autoDetected ? true : prev.requiresManualGrading
    }));
  };

  const handleSave = async () => {
    if (!formData.questionText || (formData.type === 'short_answer' && !formData.answer) || (formData.type === 'multiple_choice' && formData.answerIdx === null)) {
      showToast("Question content and answer are required.", 'warning');
      return;
    }

    try {
      const selectedTopic = (chapter.topics || []).find(topic => topic.id === formData.topicId);
      const payload = {
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        topicId: selectedTopic?.id || '',
        topicCode: selectedTopic?.code || '',
        topicTitle: selectedTopic?.title || '',
        isManual: true, // to distinguish from AI gen
        title: formData.title,
        question: formData.questionText,
        difficulty: formData.difficulty,
        timeLimit: Number(formData.timeLimit),
        type: formData.type,
        options: formData.type === 'multiple_choice' 
          ? formData.options.filter(o => o.text.trim() !== '' || o.imageUrl !== '') 
          : [],
        questionImage: formData.questionImage,
        answer: formData.type === 'multiple_choice' ? formData.answerIdx.toString() : formData.answer,
        solution: formData.solution,
        hint: formData.hint,
        subQuestions: (formData.subQuestions || []).map(sq => ({
          ...sq,
          answer: sq.type === 'multiple_choice' ? (sq.answerIdx?.toString() || '') : sq.answer
        })),
        requiresManualGrading: formData.requiresManualGrading || false,
        graphData: formData.graphData ? JSON.parse(formData.graphData) : null,
        isActive: true,
        updatedAt: serverTimestamp()
      };

      if (editingQuestion) {
        await updateDoc(doc(db, 'questions', editingQuestion), payload);
      } else {
        payload.createdAt = serverTimestamp();
        await addDoc(collection(db, 'questions'), payload);
      }

      questionBankSessionCache.delete(`questions:${chapterId}`);
      await loadQuestionPage({ reset: true });
      
      if (directEditQuestion) {
        onClose();
      } else {
        setIsFormOpen(false);
      }
      showToast("Question saved successfully!", 'success');
    } catch (e) {
      console.error(e);
      showToast("Error saving question.", 'error');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this question?")) {
      await updateDoc(doc(db, 'questions', id), {
        isActive: false,
        updatedAt: serverTimestamp(),
      });
      const nextQuestions = questions.filter(q => q.id !== id);
      setQuestions(nextQuestions);
      const cached = questionBankSessionCache.get(`questions:${chapterId}`);
      if (cached) {
        questionBankSessionCache.set(`questions:${chapterId}`, {
          ...cached,
          questions: cached.questions.filter(q => q.id !== id),
        });
      }
    }
  };

  const handleOptionChange = (idx, field, value) => {
    const newOpts = [...formData.options];
    newOpts[idx] = { ...newOpts[idx], [field]: value };
    setFormData({ ...formData, options: newOpts });
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }} />
      
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} style={{ position: 'relative', width: '100%', maxWidth: isFormOpen ? '800px' : '600px', maxHeight: '90vh', backgroundColor: '#fff', borderRadius: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 10 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>{isFormOpen ? (editingQuestion ? 'Edit Question' : 'Add Question') : 'Question Bank'}</h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>{chapter.title}</p>
          </div>
          <button onClick={(isFormOpen && !directEditQuestion) ? () => setIsFormOpen(false) : onClose} style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f5f9', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '32px' }}>
          {!isFormOpen ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
	                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64748b' }}>{questions.length}{hasMoreQuestions ? '+' : ''} Questions</span>
                <button onClick={() => handleOpenForm()} className="app-button app-button--primary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '12px' }}>
                  <Plus size={16} /> Add Question
                </button>
              </div>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', fontWeight: 600 }}>Loading...</div>
              ) : questions.length === 0 ? (
                <div style={{ padding: '60px 20px', textAlign: 'center', background: '#f8fafc', borderRadius: '20px', border: '2px dashed #e2e8f0' }}>
                  <p style={{ fontWeight: 700, color: '#64748b', fontSize: '1.1rem' }}>No manual questions yet.</p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0px' }}>AI questions are generated automatically, but you can add specific ones here.</p>
                </div>
              ) : (
	                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
	                  {questions.map((q, idx) => (
                    <div key={q.id} style={{ padding: '20px', borderRadius: '16px', border: `1px solid ${q.requiresManualGrading ? '#fcd34d' : '#e2e8f0'}`, background: q.requiresManualGrading ? '#fffbeb' : '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, paddingRight: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase' }}>
                            {q.title || `Question ${idx + 1}`} • {q.difficulty}
                          </div>
                          {q.requiresManualGrading && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', fontWeight: 800, background: '#fef3c7', color: '#92400e', borderRadius: '100px', padding: '2px 8px', border: '1px solid #fcd34d' }}>
                              <AlertTriangle size={10} /> Teacher Review
                            </span>
                          )}
                        </div>
                        {q.topicTitle && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px', padding: '5px 9px', borderRadius: '999px', background: '#e0f2fe', color: '#0369a1', fontSize: '0.72rem', fontWeight: 800 }}>
                            {q.topicCode && <span>{q.topicCode}</span>}
                            <span>{q.topicTitle}</span>
                          </div>
                        )}
                        <div style={{ marginBottom: '12px' }}>
                          <MathPreview content={q.question} />
                        </div>
                        {q.questionImage && (
                          <div style={{ marginBottom: '12px' }}>
                            <img src={q.questionImage} alt="Question" style={{ maxHeight: '100px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                          </div>
                        )}
                        
                        {q.type === 'multiple_choice' ? (
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                            {(q.options || []).map((opt, i) => {
                              const isCorrect = q.answer === i.toString();
                              return (
                                <div key={i} style={{ padding: '8px 12px', borderRadius: '10px', border: `1px solid ${isCorrect ? '#10b981' : '#e2e8f0'}`, background: isCorrect ? '#f0fdf4' : 'white', fontSize: '0.8rem', color: isCorrect ? '#166534' : '#64748b', fontWeight: isCorrect ? 800 : 500 }}>
                                  <span style={{ marginRight: '6px', opacity: 0.5 }}>{String.fromCharCode(65 + i)}.</span>
                                  <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600, marginBottom: '12px' }}>
                            Answer: <MathPreview content={q.answer} style={{ display: 'inline', padding: '2px 8px' }} />
                          </div>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => setPreviewQuestion(q)} style={{ padding: '8px', borderRadius: '8px', background: 'white', border: '1px solid #cbd5e1', color: '#6366f1', cursor: 'pointer' }} title="Preview Student View"><Eye size={16} /></button>
                        <button onClick={() => handleOpenForm(q)} style={{ padding: '8px', borderRadius: '8px', background: 'white', border: '1px solid #cbd5e1', color: '#475569', cursor: 'pointer' }}><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(q.id)} style={{ padding: '8px', borderRadius: '8px', background: '#fff1f2', border: 'none', color: '#f43f5e', cursor: 'pointer' }}><Trash2 size={16} /></button>
                      </div>
                    </div>
	                  ))}
                    {hasMoreQuestions && (
                      <button
                        onClick={() => loadQuestionPage({ cursor: lastQuestionDoc, currentQuestions: questions })}
                        disabled={loadingMore}
                        className="app-button app-button--secondary"
                        style={{ width: '100%', justifyContent: 'center', borderRadius: '12px' }}
                      >
                        {loadingMore ? 'Loading...' : 'Load more'}
                      </button>
                    )}
	                </div>
	              )}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Admin Title</label>
                <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem' }} placeholder="e.g. Question 1" />
              </div>

              {Array.isArray(chapter.topics) && chapter.topics.length > 0 && (
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Subtopic</label>
                  <select
                    value={formData.topicId}
                    onChange={e => {
                      const topic = chapter.topics.find(t => t.id === e.target.value);
                      setFormData({
                        ...formData,
                        topicId: topic?.id || '',
                        topicCode: topic?.code || '',
                        topicTitle: topic?.title || ''
                      });
                    }}
                    style={{ width: '100%', height: '54px', padding: '0 16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', background: 'white', color: '#1e293b' }}
                  >
                    <option value="">No specific subtopic</option>
                    {chapter.topics.map(topic => (
                      <option key={topic.id} value={topic.id}>
                        {topic.code ? `${topic.code} - ${topic.title}` : topic.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Question Content (LaTeX supported)</label>
                <textarea rows={3} value={formData.questionText} onChange={e => handleQuestionTextChange(e.target.value)} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', resize: 'vertical' }} placeholder="e.g. Solve for $x$: $x^2 = 25$" />
                <div style={{ marginTop: '12px' }}>
                  <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>LIVE PREVIEW:</span>
                  <MathPreview content={formData.questionText} graphData={formData.graphData ? (() => { try { return JSON.parse(formData.graphData); } catch { return null; } })() : null} />
                </div>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  <BarChart size={14} /> Graph Data (JSON - Optional)
                </label>
                <textarea 
                  rows={4} 
                  value={formData.graphData} 
                  onChange={e => setFormData({...formData, graphData: e.target.value})} 
                  style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 500, fontSize: '0.85rem', fontFamily: 'monospace', background: '#f8fafc', resize: 'vertical' }} 
                  placeholder='{ "equations": ["y = 2x + 1"], "config": { "xRange": [-5, 5], "yRange": [-5, 5] } }' 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Question Image (Optional)</label>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <FileUploader 
                    currentUrl={formData.questionImage} 
                    onUpload={(url) => setFormData({...formData, questionImage: url})} 
                    label="Upload Question Image"
                  />
                  {formData.questionImage && (
                    <img src={formData.questionImage} alt="Preview" style={{ width: '54px', height: '54px', borderRadius: '12px', objectFit: 'cover', border: '1px solid #e2e8f0' }} />
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'flex-end' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Difficulty</label>
                  <select value={formData.difficulty} onChange={e => setFormData({...formData, difficulty: e.target.value})} style={{ width: '100%', height: '54px', padding: '0 16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', background: 'white' }}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Time Limit (s)</label>
                  <input type="number" value={formData.timeLimit} onChange={e => setFormData({...formData, timeLimit: e.target.value})} style={{ width: '100%', height: '54px', padding: '0 16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Question Type</label>
                <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '16px' }}>
                  {['multiple_choice', 'short_answer'].map(type => (
                    <button 
                      key={type} 
                      onClick={() => setFormData({...formData, type})}
                      style={{ flex: 1, padding: '10px', borderRadius: '12px', border: 'none', background: formData.type === type ? 'white' : 'transparent', color: formData.type === type ? '#6366f1' : '#64748b', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', boxShadow: formData.type === type ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
                    >
                      {type === 'multiple_choice' ? 'Multiple Choice' : 'Short Answer'}
                    </button>
                  ))}
                </div>
              </div>

              {formData.type === 'multiple_choice' ? (
                <div>
                  <label style={{ display: 'block', marginBottom: '16px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Multiple Choice Options (LaTeX & Images)</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {formData.options.map((opt, idx) => (
                      <div key={idx} style={{ padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0', background: formData.answerIdx === idx ? '#f0fdf4' : 'white', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <div 
                            style={{ width: '32px', height: '32px', borderRadius: '50%', background: formData.answerIdx === idx ? '#10b981' : '#f1f5f9', color: formData.answerIdx === idx ? 'white' : '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }} 
                            onClick={() => setFormData({...formData, answerIdx: idx})}
                          >
                            {formData.answerIdx === idx ? <Check size={18} /> : (idx + 1)}
                          </div>
                          <input type="text" value={opt.text} onChange={e => handleOptionChange(idx, 'text', e.target.value)} style={{ flex: 1, padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.9rem' }} placeholder={`Option ${idx + 1} text (LaTeX ok)`} />
                          <FileUploader 
                            currentUrl={opt.imageUrl} 
                            onUpload={(url) => handleOptionChange(idx, 'imageUrl', url)} 
                            label="Image"
                          />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: opt.imageUrl ? '1fr 1fr' : '1fr', gap: '12px' }}>
                          <MathPreview content={opt.text} />
                          {opt.imageUrl && <img src={opt.imageUrl} alt="Option" style={{ width: '100%', height: '60px', objectFit: 'contain', borderRadius: '12px', background: '#f8fafc' }} />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Correct Answer (Plain Text)</label>
                  <input type="text" value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', background: '#f0fdf4', color: '#166534' }} placeholder="e.g. 25" />
                </div>
              )}

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Hint (Optional, LaTeX supported)</label>
                <textarea rows={2} value={formData.hint} onChange={e => setFormData({...formData, hint: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', resize: 'vertical' }} placeholder="Provide a hint for the student..." />
                <div style={{ marginTop: '12px' }}>
                  <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>HINT PREVIEW:</span>
                  <MathPreview content={formData.hint} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Step-by-step Solution (LaTeX supported)</label>
                <textarea rows={3} value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', resize: 'vertical' }} placeholder="Explain the solution here..." />
                <div style={{ marginTop: '12px' }}>
                  <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>SOLUTION PREVIEW:</span>
                  <MathPreview content={formData.solution} />
                </div>
              </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Sub-questions (Optional)</label>
          <button 
            onClick={() => setFormData(prev => ({
              ...prev,
              subQuestions: [...prev.subQuestions, { 
                id: Date.now().toString(), 
                question: '', 
                type: 'short_answer', 
                options: [{ text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }], 
                answer: '',
                answerIdx: null,
                solution: '',
                hint: ''
              }]
            }))}
            className="app-button"
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px', background: '#f5f3ff', color: '#6366f1', border: '1px solid #ddd6fe' }}
          >
            <Plus size={14} /> Add Sub-question
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {formData.subQuestions.map((sq, sIdx) => (
            <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', border: '2px solid #f1f5f9', background: '#fcfdff', position: 'relative' }}>
              <button 
                onClick={() => setFormData(prev => ({
                  ...prev,
                  subQuestions: prev.subQuestions.filter((_, i) => i !== sIdx)
                }))}
                style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff1f2', color: '#f43f5e', padding: '6px', borderRadius: '8px', cursor: 'pointer' }}
              >
                <Trash2 size={14} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900 }}>
                  {String.fromCharCode(97 + sIdx)}
                </div>
                <span style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.9rem' }}>Part ({String.fromCharCode(97 + sIdx)})</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <textarea 
                    rows={2} 
                    value={sq.question} 
                    onChange={e => {
                      const newSub = [...formData.subQuestions];
                      newSub[sIdx].question = e.target.value;
                      setFormData({...formData, subQuestions: newSub});
                    }} 
                    style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px' }} 
                    placeholder="Sub-question text (LaTeX supported)..." 
                  />
                  {sq.question && (
                    <div style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>Preview</span>
                      <MathView content={sq.question} />
                    </div>
                  )}
                </div>
                
                <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '12px', width: 'fit-content' }}>
                  {['multiple_choice', 'short_answer'].map(type => (
                    <button 
                      key={type} 
                      onClick={() => {
                        const newSub = [...formData.subQuestions];
                        newSub[sIdx].type = type;
                        setFormData({...formData, subQuestions: newSub});
                      }}
                      style={{ padding: '6px 12px', borderRadius: '10px', border: 'none', background: sq.type === type ? 'white' : 'transparent', color: sq.type === type ? '#6366f1' : '#64748b', fontWeight: 800, fontSize: '0.7rem', cursor: 'pointer' }}
                    >
                      {type === 'multiple_choice' ? 'MCQ' : 'Short'}
                    </button>
                  ))}
                </div>

                {sq.type === 'multiple_choice' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {(sq.options || []).map((opt, oIdx) => (
                      <div key={oIdx}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <div 
                            onClick={() => {
                              const newSub = [...formData.subQuestions];
                              newSub[sIdx].answerIdx = oIdx;
                              setFormData({...formData, subQuestions: newSub});
                            }}
                            style={{ width: '24px', height: '24px', borderRadius: '50%', background: sq.answerIdx === oIdx ? '#10b981' : '#f1f5f9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.7rem' }}
                          >
                            {sq.answerIdx === oIdx ? <Check size={14} /> : (oIdx + 1)}
                          </div>
                          <input 
                            type="text" 
                            value={opt.text} 
                            onChange={e => {
                              const newSub = [...formData.subQuestions];
                              newSub[sIdx].options[oIdx].text = e.target.value;
                              setFormData({...formData, subQuestions: newSub});
                            }}
                            style={{ flex: 1, padding: '8px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: 600 }} 
                            placeholder={`Opt ${oIdx + 1}`}
                          />
                        </div>
                        {opt.text && (
                          <div style={{ padding: '6px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.8rem' }}>
                            <MathView content={opt.text} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <input 
                      type="text" 
                      value={sq.answer} 
                      onChange={e => {
                        const newSub = [...formData.subQuestions];
                        newSub[sIdx].answer = e.target.value;
                        setFormData({...formData, subQuestions: newSub});
                      }}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', fontWeight: 700, color: '#166534', background: '#f0fdf4', marginBottom: '8px' }} 
                      placeholder="Correct answer..."
                    />
                    {sq.answer && (
                      <div style={{ padding: '8px 12px', background: '#f0fdf4', borderRadius: '10px', border: '1px solid #dcfce7' }}>
                         <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#166534', display: 'block', marginBottom: '2px' }}>PREVIEW</span>
                         <MathView content={sq.answer} />
                      </div>
                    )}
                  </div>
                )}

                {/* Sub-question Worked Solution */}
                <div style={{ marginTop: '8px' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>Worked Solution (Optional)</label>
                  <textarea 
                    rows={2} 
                    value={sq.solution || ''} 
                    onChange={e => {
                      const newSub = [...formData.subQuestions];
                      newSub[sIdx].solution = e.target.value;
                      setFormData({...formData, subQuestions: newSub});
                    }} 
                    style={{ width: '100%', padding: '12px', borderRadius: '14px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 500, fontSize: '0.85rem', color: '#4338ca', background: '#f5f7ff', marginBottom: '8px' }} 
                    placeholder="Explain how to solve this part..." 
                  />
                  {sq.solution && (
                    <div style={{ padding: '10px 14px', background: '#f5f7ff', borderRadius: '12px', border: '1px solid #e0e7ff' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366f1', marginBottom: '4px' }}>
                          <Lightbulb size={14} /> <span style={{ fontSize: '0.65rem', fontWeight: 900 }}>SOLUTION PREVIEW</span>
                       </div>
                       <MathView content={sq.solution} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
        <button onClick={() => setIsFormOpen(false)} style={{ padding: '16px', borderRadius: '16px', background: '#f1f5f9', color: '#475569', fontWeight: 700, border: 'none', cursor: 'pointer', flex: 1 }}>Cancel</button>
        <button onClick={handleSave} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '16px', flex: 2 }}>{editingQuestion ? 'Update Question' : 'Save Question'}</button>
      </div>
            </div>
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {previewQuestion && (
          <StudentViewPreview question={previewQuestion} onClose={() => setPreviewQuestion(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionBankModal;
