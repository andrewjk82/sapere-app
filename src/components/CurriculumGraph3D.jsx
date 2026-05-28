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
// Encode opacity (0–1) into a hex colour string's alpha channel
function withAlpha(hex, alpha) {
  const a = Math.round(Math.max(0, Math.min(1, alpha)) * 255).toString(16).padStart(2, '0');
  // Strip any existing alpha (8-char hex) then re-append
  return hex.slice(0, 7) + a;
}

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

  // ── Central student node ────────────────────────────────────────────────────
  nodes.push({
    id: 'student',
    label: 'Student',
    nodeType: 'student',
    color: '#00000000',  // invisible default sphere — Three.js custom object takes over
    size: 10,
    fx: 0, fy: 0, fz: 0,   // pin to origin so it stays centred
  });

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
      color: withAlpha(yearColor, isYearPast ? 1 : isYearCurrent ? 1 : 0.6),
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

      // Colour: completed → full strand colour; assigned → 75%; not-yet → visible grey
      const subjColor = isCompleted
        ? withAlpha(strandColor, 1)
        : isAssigned
        ? withAlpha(strandColor, 0.75)
        : withAlpha('#7777aa', 0.6);

      nodes.push({
        id: subjNodeId,
        label: subj.title,
        nodeType: 'subject',
        year,
        strand,
        color: subjColor,
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

      // Topic nodes — only rendered when the parent subject is completed,
      // so the graph doesn't get overwhelmed with hundreds of dim blobs.
      const topics = Array.isArray(subj.topics) ? subj.topics : [];
      if (isCompleted) {
        topics.forEach((topic) => {
          const topicNodeId = `topic-${topic.id}`;
          nodes.push({
            id: topicNodeId,
            label: topic.title,
            nodeType: 'topic',
            year,
            strand,
            group: topic.group || '',
            color: withAlpha(strandColor, 0.75),
            isCompleted: true,
            size: 2.5,
          });
          links.push({ source: subjNodeId, target: topicNodeId, color: strandColor + '44' });
        });
      }
    });

    // Student → Year link (all years radiate from the student centre)
    links.push({
      source: 'student',
      target: yearNodeId,
      color: withAlpha(yearColor, isYearPast || isYearCurrent ? 0.7 : 0.3),
      isYearLink: true,
    });
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
    const THREE = (await import('three')).default || await import('three');
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
      .nodeOpacity(0.92)
      // Custom Three.js object for the student node — avatar sphere
      .nodeThreeObject(node => {
        if (node.nodeType !== 'student') return null;
        const group = new THREE.Group();
        const R = 10; // sphere radius

        // ── Build avatar canvas texture ──────────────────────────────────────
        const avatarCanvas = document.createElement('canvas');
        avatarCanvas.width = 256; avatarCanvas.height = 256;
        const ac = avatarCanvas.getContext('2d');

        const photoURL   = profile?.photoURL;
        const name       = profile?.displayName || profile?.name || 'Student';
        const initials   = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

        const buildTexture = (imgEl = null) => {
          // Background gradient
          const grad = ac.createRadialGradient(128, 128, 10, 128, 128, 128);
          grad.addColorStop(0, '#3730a3');
          grad.addColorStop(1, '#1e1b4b');
          ac.fillStyle = grad;
          ac.beginPath();
          ac.arc(128, 128, 128, 0, Math.PI * 2);
          ac.fill();

          if (imgEl) {
            // Clip photo into circle
            ac.save();
            ac.beginPath();
            ac.arc(128, 128, 120, 0, Math.PI * 2);
            ac.clip();
            ac.drawImage(imgEl, 8, 8, 240, 240);
            ac.restore();
          } else {
            // Initials fallback
            ac.font = 'bold 96px sans-serif';
            ac.fillStyle = '#ffffff';
            ac.textAlign = 'center';
            ac.textBaseline = 'middle';
            ac.fillText(initials, 128, 128);
          }

          // Subtle white rim
          ac.strokeStyle = 'rgba(255,255,255,0.25)';
          ac.lineWidth = 8;
          ac.beginPath();
          ac.arc(128, 128, 122, 0, Math.PI * 2);
          ac.stroke();

          return new THREE.CanvasTexture(avatarCanvas);
        };

        // Sphere with avatar texture
        const sphereGeo = new THREE.SphereGeometry(R, 64, 64);
        const sphereMat = new THREE.MeshLambertMaterial({ map: buildTexture() });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(sphere);

        // If photoURL available, load it and swap texture
        if (photoURL) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            sphereMat.map = buildTexture(img);
            sphereMat.map.needsUpdate = true;
            sphereMat.needsUpdate = true;
          };
          img.src = photoURL;
        }

        // Outer glow shell
        const glowMat = new THREE.MeshBasicMaterial({
          color: 0x818cf8,
          transparent: true,
          opacity: 0.22,
          side: THREE.BackSide,
        });
        group.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.55, 32, 32), glowMat));

        // Second softer glow ring
        const glowMat2 = new THREE.MeshBasicMaterial({
          color: 0x6366f1,
          transparent: true,
          opacity: 0.08,
          side: THREE.BackSide,
        });
        group.add(new THREE.Mesh(new THREE.SphereGeometry(R * 2.1, 32, 32), glowMat2));

        // Name label sprite below sphere
        const labelCanvas = document.createElement('canvas');
        labelCanvas.width = 320; labelCanvas.height = 64;
        const lc = labelCanvas.getContext('2d');
        lc.font = 'bold 28px sans-serif';
        lc.fillStyle = '#e0e7ff';
        lc.textAlign = 'center';
        lc.textBaseline = 'middle';
        lc.fillText(name, 160, 32);
        const labelTex = new THREE.CanvasTexture(labelCanvas);
        const labelSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTex, transparent: true }));
        labelSprite.scale.set(28, 7, 1);
        labelSprite.position.set(0, -(R + 9), 0);
        group.add(labelSprite);

        return group;
      })
      .nodeThreeObjectExtend(false)
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
