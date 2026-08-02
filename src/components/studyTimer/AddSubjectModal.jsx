import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Plus } from 'lucide-react';
import { HSC_SUBJECTS } from '../../constants/hscSubjects';

/**
 * Search-and-pick modal for the Study Timer's "+" button. Filters the NSW
 * HSC subject list; if the query matches nothing, offers to add it as a
 * free-text custom subject instead.
 */
const AddSubjectModal = ({ open, existingSubjects = [], onClose, onPick }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const existingLower = useMemo(() => new Set(existingSubjects.map((s) => s.toLowerCase())), [existingSubjects]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = q ? HSC_SUBJECTS.filter((s) => s.toLowerCase().includes(q)) : HSC_SUBJECTS;
    return pool.slice(0, 60);
  }, [query]);

  const trimmedQuery = query.trim();
  const exactMatchExists = trimmedQuery.length > 0
    && HSC_SUBJECTS.some((s) => s.toLowerCase() === trimmedQuery.toLowerCase());

  const handlePick = (name) => {
    onPick?.(name);
    setQuery('');
    onClose?.();
  };

  const handleClose = () => {
    setQuery('');
    onClose?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="app-modal" role="dialog" aria-modal="true">
          <motion.div
            className="app-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            style={{
              position: 'relative', width: 'min(100%, 460px)', maxHeight: '78vh', display: 'flex', flexDirection: 'column',
              background: '#fff', borderRadius: 28, boxShadow: '0 30px 70px rgba(30,27,75,0.35)', overflow: 'hidden',
            }}
          >
            <div style={{ padding: '22px 22px 14px', borderBottom: '1px solid #f1f0f8' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: '#1e1b4b' }}>Add a subject</h3>
                <button type="button" onClick={handleClose} aria-label="Close" style={{ width: 30, height: 30, borderRadius: '50%', border: 'none', background: '#f1f0f8', color: '#4338ca', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                  <X size={16} />
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && trimmedQuery && !exactMatchExists) handlePick(trimmedQuery);
                  }}
                  placeholder="Search HSC subjects…"
                  maxLength={60}
                  style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px 12px 40px', borderRadius: 14, border: '1px solid #e2e8f0', fontSize: '0.88rem', fontWeight: 600, outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ overflowY: 'auto', padding: '8px 10px 14px' }}>
              {results.map((s) => {
                const already = existingLower.has(s.toLowerCase());
                return (
                  <button
                    key={s}
                    type="button"
                    disabled={already}
                    onClick={() => handlePick(s)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: 12,
                      border: 'none', background: 'transparent', cursor: already ? 'default' : 'pointer',
                      fontSize: '0.86rem', fontWeight: 700, color: already ? '#cbd5e1' : '#312e81',
                    }}
                    onMouseEnter={(e) => { if (!already) e.currentTarget.style.background = '#f5f3ff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    {s}{already ? ' · added' : ''}
                  </button>
                );
              })}

              {results.length === 0 && (
                <p style={{ padding: '14px', color: '#94a3b8', fontWeight: 600, fontSize: '0.82rem', margin: 0 }}>No matches.</p>
              )}

              {trimmedQuery && !exactMatchExists && (
                <button
                  type="button"
                  onClick={() => handlePick(trimmedQuery)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left', marginTop: 6,
                    padding: '10px 14px', borderRadius: 12, border: '1px dashed #c7d2fe', background: '#f5f3ff',
                    cursor: 'pointer', fontSize: '0.86rem', fontWeight: 800, color: '#4338ca',
                  }}
                >
                  <Plus size={15} /> Add "{trimmedQuery}" as a custom subject
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddSubjectModal;
