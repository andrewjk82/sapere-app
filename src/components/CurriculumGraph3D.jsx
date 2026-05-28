import { useEffect, useRef, useState, useCallback } from 'react';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { X, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';

// ─── Build graph data from CURRICULUM_DATA ────────────────────────────────────
function buildGraphData() {
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

  const SUBJECT_COLORS = {
    'Number': '#6366f1',
    'Algebra': '#8b5cf6',
    'Measurement': '#ec4899',
    'Space': '#14b8a6',
    'Statistics': '#f59e0b',
    'Probability': '#ef4444',
    'Representing Whole Numbers': '#6366f1',
    'Fractions and Decimals': '#8b5cf6',
    'default': '#64748b',
  };

  const years = ['Year 1','Year 2','Year 3','Year 4','Year 5','Year 6',
                  'Year 7','Year 8','Year 9','Year 10','Year 11','Year 12'];

  years.forEach((year, yi) => {
    const yearData = CURRICULUM_DATA[year];
    if (!yearData) return;

    const yearColor = YEAR_COLORS[year] || '#64748b';
    const yearNodeId = `year-${year}`;

    nodes.push({
      id: yearNodeId,
      label: year,
      nodeType: 'year',
      year,
      color: yearColor,
      size: 14,
      yi,
    });

    // yearData can be array (Year 1–10) or object (Year 11–12)
    const subjects = Array.isArray(yearData)
      ? yearData
      : Object.entries(yearData).map(([course, chaps]) => ({
          id: `${year}-${course}`,
          title: course,
          topics: chaps.flatMap(ch => ch.topics || []),
        }));

    subjects.forEach((subj) => {
      const subjNodeId = `subj-${subj.id}`;
      const subjColor = SUBJECT_COLORS[subj.title] || SUBJECT_COLORS['default'];

      nodes.push({
        id: subjNodeId,
        label: subj.title,
        nodeType: 'subject',
        year,
        color: subjColor,
        size: 7,
      });

      links.push({ source: yearNodeId, target: subjNodeId, color: yearColor + '88' });

      const topics = Array.isArray(subj.topics) ? subj.topics : [];
      topics.forEach((topic) => {
        const topicNodeId = `topic-${topic.id}`;
        nodes.push({
          id: topicNodeId,
          label: topic.title,
          nodeType: 'topic',
          year,
          group: topic.group || '',
          color: subjColor,
          size: 3,
        });
        links.push({ source: subjNodeId, target: topicNodeId, color: subjColor + '55' });
      });
    });

    // link year → prev year
    if (yi > 0) {
      links.push({
        source: `year-${years[yi - 1]}`,
        target: yearNodeId,
        color: '#ffffff22',
        isYearLink: true,
      });
    }
  });

  return { nodes, links };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CurriculumGraph3D({ onClose }) {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const initGraph = useCallback(async () => {
    if (!containerRef.current || graphRef.current) return;

    const ForceGraph3D = (await import('3d-force-graph')).default;
    const { nodes, links } = buildGraphData();

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const graph = ForceGraph3D()(containerRef.current)
      .width(width)
      .height(height)
      .backgroundColor('#09090f')
      .nodeLabel(() => '')
      .nodeColor(n => n.color)
      .nodeVal(n => n.size * n.size)
      .nodeOpacity(0.95)
      .linkColor(l => l.color)
      .linkWidth(l => l.isYearLink ? 1.5 : 0.5)
      .linkOpacity(0.6)
      .nodeThreeObjectExtend(false)
      .graphData({ nodes, links })
      .onNodeHover((node) => {
        if (!node) { setTooltip(null); return; }
        setTooltip({
          label: node.label,
          type: node.nodeType,
          year: node.year,
          group: node.group,
        });
        containerRef.current.style.cursor = 'pointer';
      })
      .onNodeClick((node) => {
        graph.centerAt(node.x, node.y, 1000);
        graph.zoom(node.nodeType === 'year' ? 1.5 : node.nodeType === 'subject' ? 3 : 5, 800);
      })
      .cooldownTicks(120)
      .onEngineStop(() => setLoaded(true));

    // Initial camera position — look from a bit above
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

  // Resize
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

  const handleZoomIn = () => graphRef.current?.zoom(
    (graphRef.current.zoom() || 1) * 1.4, 400
  );
  const handleZoomOut = () => graphRef.current?.zoom(
    (graphRef.current.zoom() || 1) / 1.4, 400
  );
  const handleReset = () => {
    graphRef.current?.cameraPosition({ x: 0, y: 0, z: 1200 }, { x: 0, y: 0, z: 0 }, 800);
    graphRef.current?.zoom(1, 600);
  };

  return (
    <div className="cg3d-overlay">
      {/* Controls */}
      <div className="cg3d-controls">
        <button className="cg3d-btn" onClick={handleZoomIn} title="Zoom in"><ZoomIn size={16} /></button>
        <button className="cg3d-btn" onClick={handleZoomOut} title="Zoom out"><ZoomOut size={16} /></button>
        <button className="cg3d-btn" onClick={handleReset} title="Reset view"><RotateCcw size={16} /></button>
        <button className="cg3d-btn" onClick={() => setInfoOpen(v => !v)} title="Legend"><Info size={16} /></button>
        <button className="cg3d-btn cg3d-btn--close" onClick={onClose} title="Close"><X size={16} /></button>
      </div>

      {/* Canvas */}
      <div ref={containerRef} className="cg3d-canvas" />

      {/* Loading */}
      {!loaded && (
        <div className="cg3d-loading">
          <div className="cg3d-spinner" />
          <span>Building knowledge graph…</span>
        </div>
      )}

      {/* Tooltip */}
      {tooltip && (
        <div className="cg3d-tooltip">
          <div className="cg3d-tooltip__type">{tooltip.type}</div>
          <div className="cg3d-tooltip__label">{tooltip.label}</div>
          {tooltip.year && <div className="cg3d-tooltip__year">{tooltip.year}</div>}
          {tooltip.group && <div className="cg3d-tooltip__group">{tooltip.group}</div>}
        </div>
      )}

      {/* Legend */}
      {infoOpen && (
        <div className="cg3d-legend">
          <div className="cg3d-legend__title">How to navigate</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#a78bfa', width: 14, height: 14 }} />Year level</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#6366f1', width: 9, height: 9 }} />Subject strand</div>
          <div className="cg3d-legend__row"><span className="cg3d-legend__dot" style={{ background: '#64748b', width: 5, height: 5 }} />Topic</div>
          <div className="cg3d-legend__divider" />
          <div className="cg3d-legend__tip">🖱 Drag to rotate</div>
          <div className="cg3d-legend__tip">🖱 Scroll to zoom</div>
          <div className="cg3d-legend__tip">🖱 Click node to focus</div>
        </div>
      )}

      {/* Title */}
      <div className="cg3d-title">
        <div className="cg3d-title__main">Knowledge Graph</div>
        <div className="cg3d-title__sub">Year 1 – 12 NSW Mathematics</div>
      </div>
    </div>
  );
}
