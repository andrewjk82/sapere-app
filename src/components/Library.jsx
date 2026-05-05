import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Link2, ExternalLink,
  Layers, Calendar, FolderOpen, Plus, X, Trash2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import {
  collection, query, orderBy, onSnapshot,
  addDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';
import { useToast } from '../context/ToastContext';

const CATEGORIES = ['All', 'Maths', 'English', 'Science', 'General', 'Exam Prep'];

const getCategoryColor = (cat) => {
  const colors = {
    Maths: '#6366f1', English: '#ec4899', Science: '#10b981',
    'Exam Prep': '#f59e0b', General: '#8b7aa7'
  };
  return colors[cat] || '#8b5cf6';
};

const formatDate = (ts) => {
  if (!ts?.toDate) return 'Recently';
  return ts.toDate().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
};

// Helper to convert Google Drive link to preview link
const getDrivePreviewUrl = (url) => {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([^/]+)/,
    /[?&]id=([^&]+)/,
  ];
  const match = patterns.map(pattern => url.match(pattern)).find(Boolean);
  if (match?.[1]) {
    return `https://drive.google.com/file/d/${encodeURIComponent(match[1])}/preview`;
  }
  return null;
};

const Library = () => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkCategory, setLinkCategory] = useState('General');
  const [linkDescription, setLinkDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'materials'), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snap) => {
      setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, (err) => {
      console.error('Library materials error:', err);
      setMaterials([]);
      setLoading(false);
      showToast('Failed to load library resources.', 'error');
    });
  }, [showToast]);

  const handleAddLink = async (e) => {
    e.preventDefault();
    if (!isAdmin || !user?.uid) {
      showToast('You do not have permission to add resources.', 'error');
      return;
    }

    const title = linkTitle.trim();
    const url = linkUrl.trim();
    if (!title || !url) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'materials'), {
        title,
        url,
        category: linkCategory,
        description: linkDescription.trim(),
        isExternal: true,
        fileType: 'link',
        uploadedBy: user.uid,
        createdAt: serverTimestamp()
      });
      setShowModal(false);
      setLinkTitle(''); setLinkUrl(''); setLinkDescription(''); setLinkCategory('General');
      showToast('Resource added successfully!', 'success');
    } catch (err) {
      console.error('Failed to add library resource:', err);
      showToast('Failed to add resource.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this resource?')) return;
    try {
      await deleteDoc(doc(db, 'materials', id));
      showToast('Resource deleted.', 'success');
    } catch (err) {
      console.error('Failed to delete library resource:', err);
      showToast('Failed to delete resource.', 'error');
    }
  };

  const filtered = materials.filter(m =>
    (activeCategory === 'All' || m.category === activeCategory) &&
    (m.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-page">
      {/* Page Header */}
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Academic Library</h2>
          <p>Shared learning materials, past papers and study resources for all students.</p>
        </div>
        {isAdmin && (
          <button
            className="app-button app-button--primary"
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
          >
            <Plus size={16} />
            Add Resource
          </button>
        )}
      </div>

      {/* Search & Filter Bar */}
      <div className="app-panel" style={{ padding: '12px 16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', height: '42px', background: 'rgba(167,139,250,0.06)', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.14)' }}>
          <Search size={15} style={{ color: '#8b7aa7', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search the archive..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ border: 'none', background: 'none', outline: 'none', fontSize: '0.9rem', fontWeight: 600, color: '#24163f', width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 14px', borderRadius: '12px', fontWeight: 700, fontSize: '0.82rem',
                border: activeCategory === cat ? '1px solid rgba(167,139,250,0.3)' : '1px solid transparent',
                cursor: 'pointer', transition: 'all 0.2s',
                background: activeCategory === cat ? 'white' : 'transparent',
                color: activeCategory === cat ? '#6d28d9' : '#8b7aa7',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(91,33,182,0.08)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Section heading */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={17} style={{ color: '#7c3aed' }} />
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#24163f' }}>Recent Documents</h3>
        </div>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#8b7aa7' }}>
          {loading ? 'Scanning...' : `${filtered.length} Items Available`}
        </span>
      </div>

      {/* Content */}
      {loading ? (
        <div className="app-panel" style={{ padding: '60px', textAlign: 'center', color: '#8b7aa7', fontWeight: 600 }}>
          Loading resources...
        </div>
      ) : filtered.length === 0 ? (
        <div className="app-panel" style={{ padding: '60px', textAlign: 'center' }}>
          <FolderOpen size={48} style={{ color: '#e2e8f0', margin: '0 auto 16px', display: 'block' }} />
          <h4 style={{ margin: '0 0 8px', fontWeight: 800, color: '#24163f' }}>Archive is Empty</h4>
          <p style={{ margin: '0 0 24px', color: '#8b7aa7', fontSize: '0.9rem' }}>
            {searchTerm ? 'No results matched your search.' : 'No resources have been shared yet.'}
          </p>
          {isAdmin && !searchTerm && (
            <button className="app-button app-button--primary" onClick={() => setShowModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={16} /> Add First Resource
            </button>
          )}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {filtered.map(m => {
            const previewUrl = getDrivePreviewUrl(m.url);
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="app-panel"
                style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(91,33,182,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
              >
                {/* Preview area */}
                <div style={{ position: 'relative', height: '180px', background: '#f8fafc', overflow: 'hidden' }}>
                  {previewUrl ? (
                    <iframe 
                      src={previewUrl} 
                      style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }} 
                      title="Drive Preview"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(224,231,255,0.6), rgba(243,232,255,0.8))' }}>
                      <div className="page-list__icon" style={{ width: '56px', height: '56px', borderRadius: '18px' }}>
                        <Link2 size={24} />
                      </div>
                    </div>
                  )}
                  
                  <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', fontWeight: 900, background: 'white', color: '#7c3aed', padding: '3px 8px', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)', letterSpacing: '0.05em', zIndex: 10 }}>
                    {previewUrl ? 'DOC' : 'LINK'}
                  </div>
                  
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(m.id)}
                      style={{ position: 'absolute', top: '10px', left: '10px', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ef4444', zIndex: 10 }}
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                  
                  {/* Hover overlay */}
                  <a
                    href={m.url} target="_blank" rel="noopener noreferrer"
                    style={{ position: 'absolute', inset: 0, background: 'rgba(109,40,217,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s', textDecoration: 'none', zIndex: 20 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                  >
                    <div style={{ background: 'white', color: '#6d28d9', padding: '8px 18px', borderRadius: '12px', fontWeight: 800, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      View Resource <ExternalLink size={12} />
                    </div>
                  </a>
                </div>

                {/* Card details */}
                <div style={{ padding: '16px' }}>
                  <h4 style={{ margin: '0 0 4px', fontSize: '0.92rem', fontWeight: 800, color: '#24163f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {m.title}
                  </h4>
                  {m.description && (
                    <p style={{ margin: '0 0 8px', fontSize: '0.78rem', color: '#8b7aa7', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {m.description}
                    </p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: getCategoryColor(m.category), background: `${getCategoryColor(m.category)}18`, padding: '2px 8px', borderRadius: '6px' }}>
                      {m.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#8b7aa7', fontWeight: 600 }}>• {previewUrl ? 'Google Drive' : 'Cloud Link'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(167,139,250,0.12)', paddingTop: '12px' }}>
                    <span className="page-meta">
                      <Calendar size={11} /> {formatDate(m.createdAt)}
                    </span>
                    <a
                      href={m.url} target="_blank" rel="noopener noreferrer"
                      className="app-icon-button"
                      style={{ width: '30px', height: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b7aa7', borderRadius: '10px' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(109,40,217,0.1)'; e.currentTarget.style.color = '#6d28d9'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#8b7aa7'; }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Add Resource Modal */}
      <AnimatePresence>
        {showModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(36,22,63,0.7)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="app-panel"
              style={{ position: 'relative', width: '100%', maxWidth: '480px', padding: '32px', boxShadow: '0 40px 80px rgba(91,33,182,0.2)' }}
            >
              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                <div className="page-list__icon" style={{ width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0 }}>
                  <Link2 size={22} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#24163f' }}>Add External Resource</h3>
                  <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#8b7aa7' }}>Paste a Google Drive or external URL</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="app-icon-button"
                  style={{ marginLeft: 'auto', flexShrink: 0 }}
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddLink} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Resource Title', type: 'text', placeholder: 'e.g., Year 10 Maths Past Paper', value: linkTitle, onChange: e => setLinkTitle(e.target.value), required: true },
                  { label: 'External URL', type: 'url', placeholder: 'https://drive.google.com/...', value: linkUrl, onChange: e => setLinkUrl(e.target.value), required: true },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#8b7aa7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                    <input
                      type={f.type} placeholder={f.placeholder} value={f.value} onChange={f.onChange} required={f.required}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f' }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#8b7aa7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</label>
                  <select
                    value={linkCategory} onChange={e => setLinkCategory(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f' }}
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#8b7aa7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Description <span style={{ textTransform: 'none', opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input
                    type="text" placeholder="Brief description" value={linkDescription} onChange={e => setLinkDescription(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                  <button type="button" onClick={() => setShowModal(false)} className="app-button app-button--secondary" style={{ flex: 1 }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="app-button app-button--primary" style={{ flex: 1 }}>
                    {isSubmitting ? 'Adding...' : 'Add Resource'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Library;
