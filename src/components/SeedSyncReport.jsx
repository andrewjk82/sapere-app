import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X, Plus, Minus, RotateCw, AlertTriangle } from 'lucide-react';

/**
 * Admin-only panel summarising what the on-login seed auto-sync changed:
 * which topics synced and, per topic, how many questions were added /
 * removed / updated. Dismissible; no Firestore reads (data is passed in).
 *
 * Props:
 *   report: { synced, report: [{ topicId, label, total, added, removed, updated }],
 *             failed: [{ topicId, label, error }], totals: { added, removed, updated } }
 *   onClose: () => void
 */
const SeedSyncReport = ({ report, onClose }) => {
  if (!report) return null;
  const rows = report.report || [];
  const failed = report.failed || [];
  const totals = report.totals || { added: 0, removed: 0, updated: 0 };

  const Stat = ({ icon, value, label, color }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color }}>
      {icon}
      <span style={{ fontWeight: 800 }}>{value}</span>
      <span style={{ color: '#64748b', fontWeight: 600 }}>{label}</span>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          background: 'rgba(15,23,42,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white', borderRadius: 20, width: 'min(560px, 92vw)',
            maxHeight: '82vh', overflow: 'hidden', display: 'flex', flexDirection: 'column',
            boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '20px 24px',
            borderBottom: '1px solid #f1f5f9',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: '#eff6ff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <RefreshCw className="text-blue-500" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b' }}>
                Question Sync Report
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                {report.synced} topic{report.synced === 1 ? '' : 's'} synced from seed files
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: '#f1f5f9', border: 'none', borderRadius: 10, padding: 8,
                cursor: 'pointer', color: '#64748b', display: 'flex',
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div style={{
            display: 'flex', gap: 18, flexWrap: 'wrap', padding: '14px 24px',
            background: '#f8fafc', fontSize: '0.9rem',
          }}>
            <Stat icon={<Plus size={16} />} value={totals.added} label="added" color="#059669" />
            <Stat icon={<Minus size={16} />} value={totals.removed} label="removed" color="#e11d48" />
            <Stat icon={<RotateCw size={16} />} value={totals.updated} label="updated" color="#2563eb" />
          </div>

          <div style={{ overflowY: 'auto', padding: '8px 12px 16px' }}>
            {rows.length === 0 && failed.length === 0 && (
              <div style={{ padding: 24, textAlign: 'center', color: '#64748b' }}>
                No changes.
              </div>
            )}
            {rows.map((r) => (
              <div key={r.topicId} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                borderBottom: '1px solid #f8fafc',
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.92rem' }}>
                    {r.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {r.topicId} · {r.total} total
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, fontSize: '0.82rem', fontWeight: 700 }}>
                  {r.added > 0 && <span style={{ color: '#059669' }}>+{r.added}</span>}
                  {r.removed > 0 && <span style={{ color: '#e11d48' }}>−{r.removed}</span>}
                  {r.updated > 0 && <span style={{ color: '#2563eb' }}>~{r.updated}</span>}
                  {r.added === 0 && r.removed === 0 && r.updated === 0 && (
                    <span style={{ color: '#94a3b8' }}>no change</span>
                  )}
                </div>
              </div>
            ))}
            {failed.map((f) => (
              <div key={f.topicId} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                background: '#fff1f2', borderRadius: 10, margin: '6px 0',
              }}>
                <AlertTriangle className="text-rose-500" size={16} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#b91c1c', fontSize: '0.9rem' }}>
                    {f.label} failed to sync
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9f1239' }}>{f.error}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '14px 24px', borderTop: '1px solid #f1f5f9' }}>
            <button
              onClick={onClose}
              style={{
                width: '100%', padding: '12px', borderRadius: 12, border: 'none',
                background: '#4f46e5', color: 'white', fontWeight: 700, cursor: 'pointer',
              }}
            >
              Got it
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SeedSyncReport;
