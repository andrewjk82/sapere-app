import { useEffect, useRef, useState, useCallback } from 'react';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { X, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';

// ─── Strand detection ─────────────────────────────────────────────────────────
// Maps a subject title to a canonical strand key.
// The same strand across different years → cross-year edge.
const STRAND_RULES = [
  // More-specific rules FIRST so they win over broader ones
  ['complex',          ['complex number', 'nature of proof']],
  ['calculus',         ['differentiation', 'integration', 'calculus', 'motion and rates', 'curve-sketching', 'euler', "euler's number"]],
  ['trigonometry',     ['trigonometry', 'trigonometric', 'radian', 'further trigonometry', 'projectile']],
  ['statistics',       ['statistics', 'displaying and interpreting', 'graphs and tables']],
  ['probability',      ['probability', 'chance', 'binomial', 'venn diagram', 'sets and']],
  ['measurement',      ['non-spatial measure', 'measurement', 'surface area', 'area', 'volume', 'perimeter', 'capacity', 'mass', 'length']],
  ['geometry',         ['geometry', 'geometric measure', 'spatial structure', '2d spatial', '3d spatial', 'space', 'triangle', 'congruen', 'similar', 'polyhedra', 'transformation', 'symmetry', 'vector', 'pythagoras', 'circle geometry']],
  ['algebra',          ['algebra', 'equations', 'formulae', 'linear equation', 'quadratic', 'polynomial', 'factori', 'simultaneous', 'coordinate geometry', 'cartesian', 'straight line', 'sequence', 'series', 'mathematical induction', 'additive relation', 'multiplicative relation', 'combining and separating', 'forming groups', 'functions and graph', 'function']],
  ['number',           ['number', 'whole number', 'place value', 'arithmetic', 'integer', 'surds', 'indices', 'index law', 'exponential', 'logarithm', 'consumer arithmetic', 'financial', 'ratio', 'proportion', 'rate', 'percentages', 'decimal', 'fraction', 'partitioned', 'quantity fraction']],
];

function detectStrand(title) {
  const t = title.toLowerCase();
  for (const [strand, keywords] of STRAND_RULES) {
    if (keywords.some(k => t.includes(k))) return strand;
  }
  return null;
}

// Strand → colour for cross-year edges
const STRAND_EDGE_COLORS = {
  algebra:      '#a855f7cc',
  number:       '#6366f1cc',
  geometry:     '#14b8a6cc',
  measurement:  '#ec4899cc',
  statistics:   '#f59e0bcc',
  probability:  '#ef4444cc',
  trigonometry: '#f97316cc',
  calculus:     '#22c55ecc',
  complex:      '#06b6d4cc',
};

// ─── Build graph data from CURRICULUM_DATA ─────────────────────────────────────
function buildGraphData(completedChapters = [], assignedChapters = [], currentYear = null) {
  const YEAR_ORDER = ['Year 1','Year 2','Year 3','Year 4','Year 5','Year 6',
                      'Year 7','Year 8','Year 9','Year 10','Year 11','Year 12'];
  const currentYearIdx = currentYear ? YEAR_ORDER.indexOf(currentYear) : -1;

  const completedSet = new Set(completedChapters);
  const assignedSet  = new Set(assignedChapters);
  const nodes = [];
  const links = [];

  const YEAR_COLORS = {
    'Year 1':  '#818cf8',
    'Year 2':  '#a78bfa',
    'Year 3':  '#c084fc',
    'Year 4':  '#e879f9',
    'Year 5':  '#f472b6',
    'Year 6':  '#fb7185',
    'Year 7':  '#f97316',
    'Year 8':  '#eab308',
    'Year 9':  '#84cc16',
    'Year 10': '#22c55e',
    'Year 11': '#14b8a6',
    'Year 12': '#06b6d4',
  };

  const years = ['Year 1','Year 2','Year 3','Year 4','Year 5','Year 6',
                  'Year 7','Year 8','Year 9','Year 10','Year 11','Year 12'];

  // strandBuckets: strand → [{ subjNodeId, yi }]  (for cross-year links)
  const strandBuckets = {};

  years.forEach((year, yi) => {
    const yearData = CURRICULUM_DATA[year];
    if (!yearData) return;

    const yearColor = YEAR_COLORS[year] || '#64748b';
    const yearNodeId = `year-${year}`;

    const isYearPast    = currentYearIdx > 0 && yi < currentYearIdx;
    const isYearCurrent = currentYearIdx >= 0 && yi === currentYearIdx;
    nodes.push({
      id: yearNodeId,
      label: year,
      nodeType: 'year',
      year,
      color: yearColor,
      opacity: isYearPast ? 1 : isYearCurrent ? 0.95 : 0.35,
      size: isYearCurrent ? 18 : 14,
      yi,
    });

    // yearData is array (Y1–10) or object (Y11–12)
    const subjects = Array.isArray(yearData)
      ? yearData
      : Object.entries(yearData).map(([course, chaps]) => ({
          id: `${year}-${course}`,
          title: course,
          topics: chaps.flatMap(ch => ch.topics || []),
        }));

    subjects.forEach((subj) => {
      const subjNodeId = `subj-${subj.id}`;
      const strand = detectStrand(subj.title);
      const strandColor = strand
        ? (STRAND_EDGE_COLORS[strand] || '#64748bcc').replace('cc', '')
        : '#64748b';

      // Auto-complete: if student's current year is e.g. Year 10,
      // all subjects in Year 1–9 are treated as completed automatically.
      const isPastYear = currentYearIdx > 0 && yi < currentYearIdx;
      const isCompleted = completedSet.has(subj.id) || isPastYear;
      const isAssigned  = !isCompleted && assignedSet.has(subj.id);

      // Colour logic:
      //   completed (teacher or auto-past) → full strand colour
      //   assigned/in-progress             → strand colour, dimmer
      //   not yet reached                  → neutral grey (still visible)
      const subjColor = isCompleted ? strandColor
        : isAssigned  ? strandColor
        : '#4a4a5a';
      const subjOpacity = isCompleted ? 1 : isAssigned ? 0.55 : 0.25;

      nodes.push({
        id: subjNodeId,
        label: subj.title,
        nodeType: 'subject',
        year,
        strand,
        color: subjColor,
        opacity: subjOpacity,
        isCompleted,
        isAssigned,
        isPastYear,
        size: isCompleted ? 8 : 5,
      });

      links.push({ source: yearNodeId, target: subjNodeId, color: isCompleted ? yearColor + 'cc' : '#ffffff22' });

      if (strand) {
        if (!strandBuckets[strand]) strandBuckets[strand] = [];
        strandBuckets[strand].push({ subjNodeId, yi, isCompleted });
      }

      const topics = Array.isArray(subj.topics) ? subj.topics : [];
      topics.forEach((topic) => {
        const topicNodeId = `topic-${topic.id}`;
        nodes.push({
          id: topicNodeId,
          label: topic.title,
          nodeType: 'topic',
          year,
          strand,
          group: topic.group || '',
          color: isCompleted ? strandColor : '#3a3a4a',
          opacity: isCompleted ? 0.85 : 0.18,
          isCompleted,
          size: 3,
        });
        links.push({ source: subjNodeId, target: topicNodeId, color: isCompleted ? strandColor + '55' : '#ffffff10' });
      });
    });

    // Year → prev-year backbone link
    if (yi > 0) {
      links.push({
        source: `year-${years[yi - 1]}`,
        target: yearNodeId,
        color: '#ffffff22',
        isYearLink: true,
      });
    }
  });

  // ── Cross-year strand links ─────────────────────────────────────────────────
  // For each strand, sort by year index and link consecutive subject nodes.
  // This creates a visible "thread" connecting e.g. all Algebra subjects Y1→Y12.
  Object.entries(strandBuckets).forEach(([strand, entries]) => {
    entries.sort((a, b) => a.yi - b.yi);
    const baseColor = STRAND_EDGE_COLORS[strand] || '#ffffff55';
    for (let i = 0; i < entries.length - 1; i++) {
      const bothDone = entries[i].isCompleted && entries[i + 1].isCompleted;
      const eitherDone = entries[i].isCompleted || entries[i + 1].isCompleted;
      links.push({
        source: entries[i].subjNodeId,
        target: entries[i + 1].subjNodeId,
        // Full colour when both ends complete; half when one; invisible when neither
        color: bothDone ? baseColor : eitherDone ? baseColor.replace('cc', '55') : '#ffffff0a',
        isStrandLink: true,
        strand,
      });
    }
  });

  return { nodes, links };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CurriculumGraph3D({ onClose, profile }) {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [highlightStrand, setHighlightStrand] = useState(null);

  const initGraph = useCallback(async () => {
    if (!containerRef.current || graphRef.current) return;

    const ForceGraph3D = (await import('3d-force-graph')).default;
    const completed = profile?.completedChapters || [];
    const assigned  = profile?.assignedChapters  || [];
    const rawYear   = Array.isArray(profile?.assignedYear) ? profile.assignedYear[0] : profile?.assignedYear;
    const currentYear = rawYear ? (String(rawYear).startsWith('Year') ? rawYear : `Year ${rawYear}`) : null;
    const { nodes, links } = buildGraphData(completed, assigned, currentYear);

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const graph = ForceGraph3D()(containerRef.current)
      .width(width)
      .height(height)
      .backgroundColor('#09090f')
      .nodeLabel(() => '')
      .nodeColor(n => n.color)
      .nodeVal(n => n.size * n.size)
      .nodeOpacity(n => n.opacity ?? 0.9)
      .linkColor(l => l.color)
      .linkWidth(l => {
        if (l.isYearLink) return 1.5;
        if (l.isStrandLink) return 1.2;
        return 0.4;
      })
      .linkOpacity(l => l.isStrandLink ? 0.85 : 0.5)
      .graphData({ nodes, links })
      .onNodeHover((node) => {
        if (!node) { setTooltip(null); return; }
        setTooltip({
          label: node.label,
          type: node.nodeType,
          nodeType: node.nodeType,
          year: node.year,
          group: node.group,
          strand: node.strand,
          isCompleted: node.isCompleted,
          isAssigned: node.isAssigned,
          isPastYear: node.isPastYear,
        });
        containerRef.current.style.cursor = 'pointer';
      })
      .onNodeClick((node) => {
        graph.centerAt(node.x, node.y, 1000);
        graph.zoom(node.nodeType === 'year' ? 1.5 : node.nodeType === 'subject' ? 3 : 5, 800);
        if (node.strand) setHighlightStrand(node.strand);
      })
      .cooldownTicks(150)
      .onEngineStop(() => setLoaded(true));

    graph.cameraPosition({ x: 0, y: 0, z: 1200 });
    graphRef.current = graph;
  }, []);

  useEffect(() => {
    initGraph();
    return () => {
      if (graphRef.current) {
        graphRef.current._destructor?.();
        graphRef.current = null;
      }
    };
  }, [initGraph]);

  useEffect(() => {
    const obs = new ResizeObserver(() => {
      if (graphRef.current && containerRef.current) {
        graphRef.current.width(containerRef.current.clientWidth);
        graphRef.current.height(containerRef.current.clientHeight);
      }
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const handleZoomIn = () => graphRef.current?.zoom((graphRef.current.zoom() || 1) * 1.4, 400);
  const handleZoomOut = () => graphRef.current?.zoom((graphRef.current.zoom() || 1) / 1.4, 400);
  const handleReset = () => {
    graphRef.current?.cameraPosition({ x: 0, y: 0, z: 1200 }, { x: 0, y: 0, z: 0 }, 800);
    graphRef.current?.zoom(1, 600);
    setHighlightStrand(null);
  };

  const STRAND_LABELS = {
    algebra: 'Algebra', number: 'Number', geometry: 'Geometry',
    measurement: 'Measurement', statistics: 'Statistics',
    probability: 'Probability', trigonometry: 'Trigonometry',
    calculus: 'Calculus', complex: 'Complex / Proof',
  };

  return (
    <div className="cg3d-overlay">
      <div className="cg3d-controls">
        <button className="cg3d-btn" onClick={handleZoomIn} title="Zoom in"><ZoomIn size={16} /></button>
        <button className="cg3d-btn" onClick={handleZoomOut} title="Zoom out"><ZoomOut size={16} /></button>
        <button className="cg3d-btn" onClick={handleReset} title="Reset view"><RotateCcw size={16} /></button>
        <button className="cg3d-btn" onClick={() => setInfoOpen(v => !v)} title="Legend"><Info size={16} /></button>
        <button className="cg3d-btn cg3d-btn--close" onClick={onClose} title="Close"><X size={16} /></button>
      </div>

      <div ref={containerRef} className="cg3d-canvas" />

      {!loaded && (
        <div className="cg3d-loading">
          <div className="cg3d-spinner" />
          <span>Building knowledge graph…</span>
        </div>
      )}

      {tooltip && (
        <div className="cg3d-tooltip">
          <div className="cg3d-tooltip__type">{tooltip.type}</div>
          <div className="cg3d-tooltip__label">{tooltip.label}</div>
          {tooltip.year && <div className="cg3d-tooltip__year">{tooltip.year}</div>}
          {tooltip.strand && <div className="cg3d-tooltip__strand" style={{ color: (STRAND_EDGE_COLORS[tooltip.strand] || '#64748b').replace('cc','') }}>{STRAND_LABELS[tooltip.strand]}</div>}
          {tooltip.group && <div className="cg3d-tooltip__group">{tooltip.group}</div>}
          {tooltip.nodeType === 'subject' && (
            <div className="cg3d-tooltip__status">
              {tooltip.isPastYear ? '✅ Past year (auto-complete)'
                : tooltip.isCompleted ? '✅ Teacher completed'
                : tooltip.isAssigned ? '📖 In progress'
                : '🔒 Not yet assigned'}
            </div>
          )}
        </div>
      )}

      {highlightStrand && (
        <div className="cg3d-strand-badge" style={{ borderColor: (STRAND_EDGE_COLORS[highlightStrand] || '#64748b').replace('cc','') }}>
          <span style={{ color: (STRAND_EDGE_COLORS[highlightStrand] || '#64748b').replace('cc','') }}>
            {STRAND_LABELS[highlightStrand]} strand
          </span>
          <button onClick={() => setHighlightStrand(null)} className="cg3d-strand-badge__close">×</button>
        </div>
      )}

      {infoOpen && (
        <div className="cg3d-legend">
          <div className="cg3d-legend__title">Nodes</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#a78bfa', width: 14, height: 14 }} />Year level</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#6366f1', width: 9, height: 9 }} />Subject / chapter</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#64748b', width: 5, height: 5 }} />Topic</div>
          <div className="cg3d-legend__divider" />
          <div className="cg3d-legend__title">Colour = progress</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#a78bfa', width: 9, height: 9 }} />Teacher completed</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#a78bfa44', width: 9, height: 9, border: '1px solid #a78bfa66' }} />In progress</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#2a2a3a', width: 9, height: 9, border: '1px solid #ffffff22' }} />Not yet assigned</div>
          <div className="cg3d-legend__divider" />
          <div className="cg3d-legend__title">Strand threads</div>
          {Object.entries(STRAND_LABELS).map(([k, label]) => (
            <div key={k} className="cg3d-legend__row">
              <span className="cg3d-legend__line" style={{ background: (STRAND_EDGE_COLORS[k] || '#64748b').replace('cc','') }} />
              {label}
            </div>
          ))}
          <div className="cg3d-legend__divider" />
          <div className="cg3d-legend__tip">🖱 Drag to rotate</div>
          <div className="cg3d-legend__tip">🖱 Scroll to zoom</div>
          <div className="cg3d-legend__tip">🖱 Click node to focus</div>
        </div>
      )}

      <div className="cg3d-title">
        <div className="cg3d-title__main">Knowledge Graph</div>
        <div className="cg3d-title__sub">Year 1 – 12 · strands connected across years</div>
      </div>
    </div>
  );
}
