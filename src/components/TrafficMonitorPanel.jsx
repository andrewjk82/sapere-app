import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { Activity, Database, Server, Clock, Users, ArrowUpRight } from 'lucide-react';

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

      // Calculate totals in the last 100 entries
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
  const generateSparkline = (key) => {
    if (logs.length < 2) return '';
    const slice = [...logs].reverse().slice(-20);
    const maxVal = Math.max(...slice.map(l => l[key] || 0), 1);
    const width = 300;
    const height = 60;
    const points = slice.map((log, idx) => {
      const x = (idx / (slice.length - 1)) * width;
      const y = height - ((log[key] || 0) / maxVal) * (height - 10) - 5;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="w-full h-16 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
        <polyline
          fill="none"
          stroke={key === 'reads' ? '#6366f1' : '#f43f5e'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto bg-slate-950 text-slate-100 min-h-screen rounded-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <Activity className="h-8 w-8 text-indigo-500 animate-pulse" /> Live Traffic Monitor
          </h1>
          <p className="text-slate-400 mt-1">Real-time telemetry and database usage metrics (last 100 updates).</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-sm">
          <Clock className="h-4 w-4 text-emerald-400" />
          <span className="text-slate-300 font-mono">Telemetry Active</span>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reads */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Firestore Reads</span>
                <h3 className="text-4xl font-black mt-2 text-indigo-400 font-mono">{stats.totalReads.toLocaleString()}</h3>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50">
                {generateSparkline('reads')}
              </div>
              <Database className="absolute right-4 top-4 h-6 w-6 text-indigo-500/20" />
            </div>

            {/* Writes */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Firestore Writes</span>
                <h3 className="text-4xl font-black mt-2 text-rose-500 font-mono">{stats.totalWrites.toLocaleString()}</h3>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50">
                {generateSparkline('writes')}
              </div>
              <Server className="absolute right-4 top-4 h-6 w-6 text-rose-500/20" />
            </div>

            {/* API Calls */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">API & Cron Requests</span>
                <h3 className="text-4xl font-black mt-2 text-amber-500 font-mono">{stats.totalApiCalls}</h3>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-500">
                <span>Cron, Unified Reminders</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <Activity className="absolute right-4 top-4 h-6 w-6 text-amber-500/20" />
            </div>

            {/* Active Clients */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Active Device Pools</span>
                <h3 className="text-4xl font-black mt-2 text-emerald-400 font-mono">{stats.activeSessions.size}</h3>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-500">
                <span>Logged in & Guest clients</span>
                <Users className="h-4 w-4 text-emerald-500/30" />
              </div>
              <Users className="absolute right-4 top-4 h-6 w-6 text-emerald-500/20" />
            </div>
          </div>

          {/* Detailed Feed & Log Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Realtime Stream */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span> Realtime Ingestion Feed
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="pb-3">Time</th>
                      <th className="pb-3">User (Role)</th>
                      <th className="pb-3 text-right">Reads</th>
                      <th className="pb-3 text-right">Writes</th>
                      <th className="pb-3">Endpoints / Pages</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-3 font-mono text-slate-400 text-xs">{log.formattedTime}</td>
                        <td className="py-3">
                          <div className="font-medium text-slate-200 truncate max-w-[120px]" title={log.uid}>
                            {log.uid === 'guest' ? 'Anonymous Guest' : log.uid}
                          </div>
                          <span className="text-slate-500 text-xs capitalize">{log.role || 'student'}</span>
                        </td>
                        <td className="py-3 text-right font-semibold text-indigo-400 font-mono">+{log.reads || 0}</td>
                        <td className="py-3 text-right font-semibold text-rose-400 font-mono">+{log.writes || 0}</td>
                        <td className="py-3">
                          <div className="flex flex-wrap gap-1">
                            {log.pages && Object.keys(log.pages).length > 0 ? (
                              Object.keys(log.pages).map(p => (
                                <span key={p} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-md border border-slate-700/50">
                                  {p}
                                </span>
                              ))
                            ) : (
                              <span className="text-slate-600 text-xs italic">Unknown</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hotspots / Top consumers */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-bold text-white mb-4">Traffic Hotspots</h2>
              <p className="text-xs text-slate-400 mb-4">Common sources and pages causing high database lookup load.</p>
              
              <div className="space-y-4">
                {/* Calculate page hotspot counts */}
                {(() => {
                  const hotspots = {};
                  logs.forEach(log => {
                    if (log.pages) {
                      Object.keys(log.pages).forEach(p => {
                        hotspots[p] = (hotspots[p] || 0) + log.pages[p];
                      });
                    }
                  });
                  const sorted = Object.keys(hotspots).map(p => ({
                    page: p,
                    reads: hotspots[p]
                  })).sort((a, b) => b.reads - a.reads).slice(0, 5);

                  if (sorted.length === 0) {
                    return <div className="text-slate-600 text-sm italic">Waiting for incoming events...</div>;
                  }

                  return sorted.map((h, i) => (
                    <div key={h.page} className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800/80 rounded-xl">
                      <div className="truncate pr-2">
                        <span className="text-xs font-semibold text-slate-500 mr-2"># {i + 1}</span>
                        <span className="text-sm font-semibold text-slate-300 truncate font-mono" title={h.page}>{h.page}</span>
                      </div>
                      <span className="bg-indigo-950 text-indigo-400 font-mono text-xs px-2 py-1 rounded-lg border border-indigo-900/50 font-bold whitespace-nowrap">
                        {h.reads.toLocaleString()} Reads
                      </span>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrafficMonitorPanel;
