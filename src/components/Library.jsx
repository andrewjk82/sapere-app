import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Link2, ExternalLink,
  Calendar, FolderOpen, Plus, X, Trash2, FileText, Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import {
  collection, query, orderBy, getDocs,
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

const isDriveLink = (url) => {
  if (!url) return false;
  return /drive\.google\.com/.test(url);
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
    getDocs(q).then((snap) => {
      setMaterials(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }).catch((err) => {
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
      const newDoc = await addDoc(collection(db, 'materials'), {
        title, url, category: linkCategory,
        description: linkDescription.trim(),
        isExternal: true, fileType: 'link',
        uploadedBy: user.uid, createdAt: serverTimestamp()
      });
      setMaterials(prev => [{ id: newDoc.id, title, url, category: linkCategory, description: linkDescription.trim(), isExternal: true, fileType: 'link', uploadedBy: user.uid }, ...prev]);
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
      setMaterials(prev => prev.filter(m => m.id !== id));
      showToast('Resource deleted.', 'success');
    } catch (err) {
      showToast('Failed to delete resource.', 'error');
    }
  };

  const filtered = materials.filter(m =>
    (activeCategory === 'All' || m.category === activeCategory) &&
    (m.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-page">
      {/* Header */}
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Library</h2>
        </div>
        {isAdmin && (
          <button
            className="app-button app-button--primary"
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
          >
            <Plus size={16} /> Add Resource
          </button>
        )}
      </div>

      {/* Search */}
      <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', height: '46px', background: 'white', borderRadius: '16px', border: '1px solid rgba(167,139,250,0.18)', boxShadow: '0 2px 8px rgba(91,33,182,0.06)' }}>
        <Search size={15} style={{ color: '#a78bfa', flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ border: 'none', background: 'none', outline: 'none', fontSize: '0.92rem', fontWeight: 600, color: '#24163f', width: '100%' }}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#a78bfa' }}>
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '20px', scrollbarWidth: 'none' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '7px 14px', borderRadius: '20px', fontWeight: 700, fontSize: '0.8rem',
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.18s',
              flexShrink: 0,
              background: activeCategory === cat ? '#7c3aed' : 'rgba(167,139,250,0.1)',
              color: activeCategory === cat ? 'white' : '#8b7aa7',
              boxShadow: activeCategory === cat ? '0 4px 12px rgba(124,58,237,0.3)' : 'none',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '0 2px' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#8b7aa7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Resources
        </span>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#8b7aa7' }}>
          {loading ? '—' : `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`}
        </span>
      </div>

      {/* List */}
      {loading ? (
        <div className="app-panel" style={{ padding: '48px', textAlign: 'center', color: '#a78bfa', fontWeight: 600 }}>
          Loading...
        </div>
      ) : filtered.length === 0 ? (
        <div className="app-panel" style={{ padding: '56px 24px', textAlign: 'center' }}>
          <FolderOpen size={40} style={{ color: '#e2e8f0', margin: '0 auto 12px', display: 'block' }} />
          <h4 style={{ margin: '0 0 6px', fontWeight: 800, color: '#24163f' }}>No resources found</h4>
          <p style={{ margin: '0 0 20px', color: '#a78bfa', fontSize: '0.88rem' }}>
            {searchTerm ? 'Try a different search term.' : 'No resources have been added yet.'}
          </p>
          {isAdmin && !searchTerm && (
            <button className="app-button app-button--primary" onClick={() => setShowModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={16} /> Add First Resource
            </button>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.map((m, i) => {
            const isDrive = isDriveLink(m.url);
            const catColor = getCategoryColor(m.category);
            return (
              <motion.a
                key={m.id}
                href={m.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 16px',
                  background: 'white', borderRadius: '16px',
                  border: '1px solid rgba(167,139,250,0.14)',
                  boxShadow: '0 2px 8px rgba(91,33,182,0.05)',
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '44px', height: '44px', borderRadius: '14px', flexShrink: 0,
                  background: `${catColor}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: catColor,
                }}>
                  {isDrive ? <FileText size={20} /> : <Globe size={20} />}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#24163f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                      {m.title}
                    </span>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 800, flexShrink: 0,
                      color: catColor, background: `${catColor}14`,
                      padding: '2px 7px', borderRadius: '6px',
                    }}>
                      {m.category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {m.description && (
                      <span style={{ fontSize: '0.78rem', color: '#a78bfa', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {m.description}
                      </span>
                    )}
                    <span style={{ fontSize: '0.72rem', color: '#c4b5d4', fontWeight: 600, flexShrink: 0, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Calendar size={10} /> {formatDate(m.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  {isAdmin && (
                    <button
                      onClick={(e) => { e.preventDefault(); handleDelete(m.id); }}
                      style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(239,68,68,0.08)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ef4444', flexShrink: 0 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                  <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'rgba(124,58,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', flexShrink: 0 }}>
                    <ExternalLink size={15} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      )}

      {/* Add Resource Modal */}
      <AnimatePresence>
        {showModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '0' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(36,22,63,0.6)', backdropFilter: 'blur(6px)' }}
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="app-panel"
              style={{ position: 'relative', width: '100%', maxWidth: '600px', padding: '28px 24px 40px', borderRadius: '24px 24px 0 0', boxShadow: '0 -12px 48px rgba(91,33,182,0.18)' }}
            >
              {/* Handle */}
              <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: 'rgba(167,139,250,0.3)', margin: '0 auto 24px' }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#24163f' }}>Add Resource</h3>
                  <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#a78bfa' }}>Paste a Google Drive or external URL</p>
                </div>
                <button onClick={() => setShowModal(false)} className="app-icon-button"><X size={18} /></button>
              </div>

              <form onSubmit={handleAddLink} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Title', type: 'text', placeholder: 'e.g., Year 10 Maths Past Paper', value: linkTitle, onChange: e => setLinkTitle(e.target.value), required: true },
                  { label: 'URL', type: 'url', placeholder: 'https://drive.google.com/...', value: linkUrl, onChange: e => setLinkUrl(e.target.value), required: true },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{f.label}</label>
                    <input
                      type={f.type} placeholder={f.placeholder} value={f.value} onChange={f.onChange} required={f.required}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f', boxSizing: 'border-box' }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Category</label>
                  <select
                    value={linkCategory} onChange={e => setLinkCategory(e.target.value)}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f' }}
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Description <span style={{ textTransform: 'none', opacity: 0.5, fontWeight: 500 }}>(optional)</span>
                  </label>
                  <input
                    type="text" placeholder="Brief description" value={linkDescription} onChange={e => setLinkDescription(e.target.value)}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: '14px', border: '1px solid rgba(167,139,250,0.22)', background: 'rgba(167,139,250,0.05)', outline: 'none', fontSize: '0.95rem', fontWeight: 600, color: '#24163f', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
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
