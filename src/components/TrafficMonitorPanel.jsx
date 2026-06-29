import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { Activity, Database, Server, Clock, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TrafficMonitorPanel = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalReads: 0,
    totalWrites: 0,
    totalApiCalls: 0,
    activeSessions: new Set(),
  });

  useEffect(() => {
    const q = query(
      collection(db, 'traffic_logs'),
      orderBy('timestamp', 'desc'),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({
        id: d.id,
        ...d.data(),
        formattedTime: d.data().timestamp
          ? new Date(d.data().timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          : 'Just now'
      }));

      let reads = 0;
      let writes = 0;
      let apis = 0;
      const sessions = new Set();

      docs.forEach(log => {
        reads += log.reads || 0;
        writes += log.writes || 0;
        apis += log.apiCalls || 0;
        if (log.sessionKey) sessions.add(log.sessionKey);
      });

      setLogs(docs);
      setStats({
        totalReads: reads,
        totalWrites: writes,
        totalApiCalls: apis,
        activeSessions: sessions
      });
      setLoading(false);
    }, (error) => {
      console.warn("TrafficMonitor fetch error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Simple SVG sparkline generator for the last 20 logs
  const generateSparkline = (key, color) => {
    if (logs.length < 2) return null;
    const slice = [...logs].reverse().slice(-20);
    const maxVal = Math.max(...slice.map(l => l[key] || 0), 1);
    const width = 280;
    const height = 50;
    const points = slice.map((log, idx) => {
      const x = (idx / (slice.length - 1)) * width;
      const y = height - ((log[key] || 0) / maxVal) * (height - 10) - 5;
      return `${x},${y}`;
    }).join(' ');

    // Create area fill path
    const areaPath = `M 0,${height} ` +
      slice.map((log, idx) => {
        const x = (idx / (slice.length - 1)) * width;
        const y = height - ((log[key] || 0) / maxVal) * (height - 10) - 5;
        return `L ${x},${y}`;
      }).join(' ') +
      ` L ${width},${height} Z`;

    return (
      <svg width="100%" height="50" viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#grad-${key})`} />
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  // Calculate page hotspots
  const hotspots = (() => {
    const map = {};
    logs.forEach(log => {
      if (log.pages) {
        Object.keys(log.pages).forEach(p => {
          map[p] = (map[p] || 0) + log.pages[p];
        });
      }
    });
    return Object.keys(map)
      .map(p => ({ page: p, reads: map[p] }))
      .sort((a, b) => b.reads - a.reads)
      .slice(0, 5);
  })();

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 0' }}>
        <div className="sapere-loader" style={{ margin: '0 auto 20px' }}></div>
      </div>
    );
  }

  return (
    <>
      <style>{trafficStyles}</style>

      <motion.div
        className="tm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="tm__header">
          <div>
            <h2 className="tm__title">
              <span className="tm__pulse-dot" />
              Live Traffic Monitor
            </h2>
            <p className="tm__subtitle">Real-time telemetry and database usage metrics (last 100 updates)</p>
          </div>
          <div className="tm__badge">
            <Clock size={14} />
            <span>Telemetry Active</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="tm__cards">
          {/* Reads */}
          <div className="tm__card">
            <div className="tm__card-top">
              <div>
                <span className="tm__card-label">Firestore Reads</span>
                <h3 className="tm__card-value" style={{ color: '#6366f1' }}>
                  {stats.totalReads.toLocaleString()}
                </h3>
              </div>
              <div className="tm__card-icon" style={{ background: '#eef2ff', color: '#6366f1' }}>
                <Database size={20} />
              </div>
            </div>
            <div className="tm__card-chart">
              {generateSparkline('reads', '#6366f1')}
            </div>
          </div>

          {/* Writes */}
          <div className="tm__card">
            <div className="tm__card-top">
              <div>
                <span className="tm__card-label">Firestore Writes</span>
                <h3 className="tm__card-value" style={{ color: '#e11d48' }}>
                  {stats.totalWrites.toLocaleString()}
                </h3>
              </div>
              <div className="tm__card-icon" style={{ background: '#fff1f2', color: '#e11d48' }}>
                <Server size={20} />
              </div>
            </div>
            <div className="tm__card-chart">
              {generateSparkline('writes', '#e11d48')}
            </div>
          </div>

          {/* API Calls */}
          <div className="tm__card">
            <div className="tm__card-top">
              <div>
                <span className="tm__card-label">API & Cron Requests</span>
                <h3 className="tm__card-value" style={{ color: '#d97706' }}>
                  {stats.totalApiCalls.toLocaleString()}
                </h3>
              </div>
              <div className="tm__card-icon" style={{ background: '#fffbeb', color: '#d97706' }}>
                <Activity size={20} />
              </div>
            </div>
            <div className="tm__card-footer">
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>Cron, Unified Reminders</span>
              <ArrowUpRight size={14} style={{ color: '#94a3b8' }} />
            </div>
          </div>

          {/* Active Sessions */}
          <div className="tm__card">
            <div className="tm__card-top">
              <div>
                <span className="tm__card-label">Active Device Pools</span>
                <h3 className="tm__card-value" style={{ color: '#059669' }}>
                  {stats.activeSessions.size}
                </h3>
              </div>
              <div className="tm__card-icon" style={{ background: '#ecfdf5', color: '#059669' }}>
                <Users size={20} />
              </div>
            </div>
            <div className="tm__card-footer">
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>Logged in & Guest clients</span>
              <Users size={14} style={{ color: '#94a3b8' }} />
            </div>
          </div>
        </div>

        {/* Main Content: Feed + Hotspots */}
        <div className="tm__content">
          {/* Realtime Feed */}
          <div className="tm__feed">
            <h3 className="tm__section-title">
              <span className="tm__live-dot" />
              Realtime Ingestion Feed
            </h3>
            <div className="tm__table-wrap">
              <table className="tm__table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>User (Role)</th>
                    <th style={{ textAlign: 'right' }}>Reads</th>
                    <th style={{ textAlign: 'right' }}>Writes</th>
                    <th>Endpoints / Pages</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontWeight: 600 }}>
                        Waiting for incoming telemetry events...
                      </td>
                    </tr>
                  ) : (
                    logs.map((log) => (
                      <tr key={log.id}>
                        <td className="tm__cell-time">{log.formattedTime}</td>
                        <td>
                          <div className="tm__cell-user">
                            {log.uid === 'guest' ? 'Anonymous Guest' : (log.uid?.slice(0, 12) + '...')}
                          </div>
                          <span className="tm__cell-role">{log.role || 'student'}</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <span className="tm__cell-reads">+{log.reads || 0}</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <span className="tm__cell-writes">+{log.writes || 0}</span>
                        </td>
                        <td>
                          <div className="tm__cell-pages">
                            {log.pages && Object.keys(log.pages).length > 0 ? (
                              Object.keys(log.pages).map(p => (
                                <span key={p} className="tm__page-tag">{p}</span>
                              ))
                            ) : (
                              <span style={{ color: '#cbd5e1', fontSize: '0.78rem', fontStyle: 'italic' }}>Unknown</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hotspots */}
          <div className="tm__hotspots">
            <h3 className="tm__section-title">Traffic Hotspots</h3>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600, marginBottom: '16px' }}>
              Common sources causing high database lookup load.
            </p>
            <div className="tm__hotspot-list">
              {hotspots.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 0', color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>
                  Waiting for incoming events...
                </div>
              ) : (
                hotspots.map((h, i) => (
                  <div key={h.page} className="tm__hotspot-row">
                    <div className="tm__hotspot-left">
                      <span className="tm__hotspot-rank">#{i + 1}</span>
                      <span className="tm__hotspot-name" title={h.page}>{h.page}</span>
                    </div>
                    <span className="tm__hotspot-badge">
                      {h.reads.toLocaleString()} Reads
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// ──────────────────────────────────────────────────────────
// Co-located styles (matches project's inline/CSS convention)
// ──────────────────────────────────────────────────────────
const trafficStyles = `
  .tm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1200px;
  }

  .tm__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 16px;
    border-bottom: 2px solid #f1f5f9;
    gap: 16px;
    flex-wrap: wrap;
  }
  .tm__title {
    font-size: 1.6rem;
    font-weight: 900;
    color: #1e1b4b;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .tm__pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #6366f1;
    display: inline-block;
    animation: tmPulse 2s ease-in-out infinite;
  }
  @keyframes tmPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
    50% { opacity: 0.7; box-shadow: 0 0 0 8px rgba(99,102,241,0); }
  }
  .tm__subtitle {
    font-size: 0.85rem;
    color: #94a3b8;
    font-weight: 600;
    margin: 4px 0 0;
  }
  .tm__badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: #ecfdf5;
    border: 1px solid #d1fae5;
    border-radius: 12px;
    font-size: 0.78rem;
    font-weight: 800;
    color: #059669;
    flex-shrink: 0;
  }

  /* ── Summary Cards ── */
  .tm__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .tm__card {
    padding: 18px;
    border-radius: 18px;
    background: white;
    border: 1px solid #f1f5f9;
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .tm__card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .tm__card-label {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #94a3b8;
  }
  .tm__card-value {
    font-size: 2rem;
    font-weight: 900;
    margin: 6px 0 0;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }
  .tm__card-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }
  .tm__card-chart {
    border-top: 1px solid #f1f5f9;
    padding-top: 12px;
  }
  .tm__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f1f5f9;
    padding-top: 12px;
  }

  /* ── Content: Feed + Hotspots ── */
  .tm__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }
  .tm__feed, .tm__hotspots {
    padding: 20px;
    border-radius: 18px;
    background: white;
    border: 1px solid #f1f5f9;
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  }
  .tm__section-title {
    font-size: 1.05rem;
    font-weight: 900;
    color: #1e1b4b;
    margin: 0 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .tm__live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    display: inline-block;
    animation: tmPulse 2s ease-in-out infinite;
  }

  /* ── Table ── */
  .tm__table-wrap {
    overflow-x: auto;
    max-height: 520px;
    overflow-y: auto;
  }
  .tm__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }
  .tm__table thead th {
    padding: 10px 10px 12px;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
    border-bottom: 2px solid #f1f5f9;
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
  }
  .tm__table tbody tr {
    transition: background 0.12s ease;
  }
  .tm__table tbody tr:hover {
    background: #faf8ff;
  }
  .tm__table tbody td {
    padding: 10px;
    border-bottom: 1px solid #f8f6fc;
    vertical-align: middle;
  }
  .tm__cell-time {
    font-family: 'SF Mono', 'Fira Code', monospace;
    color: #94a3b8;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }
  .tm__cell-user {
    font-weight: 700;
    color: #1e1b4b;
    font-size: 0.82rem;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tm__cell-role {
    font-size: 0.7rem;
    color: #94a3b8;
    font-weight: 600;
    text-transform: capitalize;
  }
  .tm__cell-reads {
    font-family: 'SF Mono', 'Fira Code', monospace;
    color: #6366f1;
    font-weight: 800;
    font-size: 0.82rem;
  }
  .tm__cell-writes {
    font-family: 'SF Mono', 'Fira Code', monospace;
    color: #e11d48;
    font-weight: 800;
    font-size: 0.82rem;
  }
  .tm__cell-pages {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .tm__page-tag {
    background: #f3f0ff;
    color: #6d28d9;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid #ede9fe;
    white-space: nowrap;
  }

  /* ── Hotspots ── */
  .tm__hotspot-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .tm__hotspot-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    background: #faf8ff;
    border: 1px solid #ede9fe;
    border-radius: 14px;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }
  .tm__hotspot-row:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(124,58,237,0.08);
  }
  .tm__hotspot-left {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    flex: 1;
  }
  .tm__hotspot-rank {
    font-size: 0.72rem;
    font-weight: 800;
    color: #94a3b8;
    flex-shrink: 0;
  }
  .tm__hotspot-name {
    font-size: 0.85rem;
    font-weight: 800;
    color: #1e1b4b;
    font-family: 'SF Mono', 'Fira Code', monospace;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tm__hotspot-badge {
    background: #eef2ff;
    color: #6366f1;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 10px;
    border: 1px solid #c7d2fe;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .tm__cards { grid-template-columns: 1fr 1fr; }
    .tm__content { grid-template-columns: 1fr; }
  }
  @media (max-width: 720px) {
    .tm__cards { grid-template-columns: 1fr; }
    .tm__header { flex-direction: column; align-items: flex-start; }
  }
`;

export default TrafficMonitorPanel;
