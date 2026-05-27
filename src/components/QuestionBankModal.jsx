import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Trash2, Edit2, Image as ImageIcon, Eye, Check, AlertTriangle, BarChart, Lightbulb, Clock } from 'lucide-react';
import { MATH_SYMBOLS } from '../utils/challengeUtils';
import { db } from '../firebase/config';
import {
  collection,
  query,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  limit,
  startAfter,
  documentId,
} from 'firebase/firestore';
import { useToast } from '../context/ToastContext';
import { geometryToSvgDataUrl } from '../utils/geometrySvg';

const QUESTION_PAGE_SIZE = 10;
const questionBankSessionCache = new Map();

const stripUndefined = (value) => {
  if (Array.isArray(value)) return value.map(stripUndefined);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, current]) => current !== undefined)
        .map(([key, current]) => [key, stripUndefined(current)])
    );
  }
  return value;
};

const parseGraphData = (value) => {
  if (!value || !String(value).trim()) return null;
  if (typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const stringifyGraphData = (value) => JSON.stringify(value || {}, null, 2);

const sanitizeGeometry = (geometry) => {
  if (!geometry) return geometry;
  const result = { ...geometry };
  if (Array.isArray(result.shadedPolygons)) {
    result.shadedPolygons = result.shadedPolygons
      .map((sp) => {
        const rings = Array.isArray(sp.polygons)
          ? sp.polygons.map(r => Array.isArray(r) ? r.join(',') : r).filter(r => typeof r === 'string' && r.length > 0)
          : Array.isArray(sp.points) && sp.points.length > 0 ? [sp.points.join(',')] : [];
        const { points: _p, ...rest } = sp;
        return { ...rest, polygons: rings };
      })
      .filter((sp) => sp.polygons.length > 0);
    if (result.shadedPolygons.length === 0) delete result.shadedPolygons;
  }
  return result;
};

const withGeometrySnapshot = (graphData) => {
  if (!graphData?.geometry) return graphData;
  const geometry = sanitizeGeometry(graphData.geometry);
  return {
    ...graphData,
    geometry,
    diagramSource: {
      type: 'geometry',
      ...(graphData.diagramSource || {}),
      geometry,
    },
    diagramSvg: geometryToSvgDataUrl(geometry),
    diagramUpdatedAt: new Date().toISOString(),
  };
};

const createDefaultGeometryGraph = () => withGeometrySnapshot({
  geometry: {
    width: 280,
    points: { A: [0, 2], B: [-2, -1], C: [2, -1] },
    segments: [
      { from: 'A', to: 'B' },
      { from: 'B', to: 'C' },
      { from: 'C', to: 'A' },
    ],
    angles: [{ at: 'A', label: 'x' }],
    sideLabels: [],
  },
});

const evaluateJsxGraphNumber = (expression, variables = {}) => {
  const substituted = String(expression || '').replace(
    /\b[A-Za-z_$][\w$]*\b/g,
    (name) => (Object.prototype.hasOwnProperty.call(variables, name) ? variables[name] : name)
  );
  if (!/^[\d+\-*/().\s]+$/.test(substituted)) return null;
  try {
    const value = Function(`"use strict"; return (${substituted});`)();
    return Number.isFinite(value) ? Number(value) : null;
  } catch {
    return null;
  }
};

const getLineIntersection = (a1, a2, b1, b2) => {
  const x1 = a1[0], y1 = a1[1];
  const x2 = a2[0], y2 = a2[1];
  const x3 = b1[0], y3 = b1[1];
  const x4 = b2[0], y4 = b2[1];
  const denominator = ((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4));
  if (Math.abs(denominator) < 0.0001) return null;
  return [
    (((x1 * y2) - (y1 * x2)) * (x3 - x4) - (x1 - x2) * ((x3 * y4) - (y3 * x4))) / denominator,
    (((x1 * y2) - (y1 * x2)) * (y3 - y4) - (y1 - y2) * ((x3 * y4) - (y3 * x4))) / denominator,
  ];
};

const convertJsxGraphToGeometryGraph = (graphData) => {
  const jsxGraph = graphData?.jsxGraph;
  const script = String(jsxGraph?.script || '');
  if (!script.trim()) return null;

  const points = {};
  const segments = [];
  const freeLabels = [];
  const coordNames = new Map();
  const pointAliases = new Map();
  const numericVars = {};
  let nextPointCode = 65;

  const getPointName = (x, y) => {
    const key = `${Number(x).toFixed(4)},${Number(y).toFixed(4)}`;
    if (coordNames.has(key)) return coordNames.get(key);
    let name;
    do {
      name = nextPointCode <= 90
        ? String.fromCharCode(nextPointCode)
        : `P${nextPointCode - 90}`;
      nextPointCode += 1;
    } while (points[name]);
    points[name] = [Number(x), Number(y)];
    coordNames.set(key, name);
    return name;
  };

  const getAliasPointName = (alias) => pointAliases.get(alias);
  const getAliasPoint = (alias) => points[getAliasPointName(alias)];
  const addSegment = (from, to, patch = {}) => {
    if (!from || !to) return;
    const key = [from, to].sort().join(':');
    if (segments.some((seg) => [seg.from, seg.to].sort().join(':') === key)) return;
    segments.push({ from, to, ...patch });
  };

  script.replace(/\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*([^;\n]+)/g, (_, name, expression) => {
    const value = evaluateJsxGraphNumber(expression, numericVars);
    if (value !== null) numericVars[name] = value;
    return '';
  });

  const pointRegex = /(?:\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*)?board\.create\(\s*['"]point['"]\s*,\s*\[\s*([^,\]]+)\s*,\s*([^\]]+)\s*\]/g;
  [...script.matchAll(pointRegex)].forEach((match) => {
    const [, alias, xExpression, yExpression] = match;
    const x = evaluateJsxGraphNumber(xExpression, numericVars);
    const y = evaluateJsxGraphNumber(yExpression, numericVars);
    if (x === null || y === null) return;
    const pointName = getPointName(x, y);
    if (alias) pointAliases.set(alias, pointName);
  });

  const intersectionRegex = /(?:\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*)?board\.create\(\s*['"]intersection['"][\s\S]*?board\.create\(\s*['"]line['"]\s*,\s*\[\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*\][\s\S]*?board\.create\(\s*['"]line['"]\s*,\s*\[\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*\]/g;
  [...script.matchAll(intersectionRegex)].forEach((match) => {
    const [, alias, a, b, c, d] = match;
    const intersection = getLineIntersection(getAliasPoint(a), getAliasPoint(b), getAliasPoint(c), getAliasPoint(d));
    if (!intersection) return;
    const pointName = getPointName(intersection[0], intersection[1]);
    if (alias) pointAliases.set(alias, pointName);
  });

  const variableLineRegex = /board\.create\(\s*['"](line|segment|arrow)['"]\s*,\s*\[\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*\]/g;
  [...script.matchAll(variableLineRegex)].forEach((match) => {
    const [, type, fromAlias, toAlias] = match;
    addSegment(getAliasPointName(fromAlias), getAliasPointName(toAlias), { arrow: type === 'arrow' || undefined });
  });

  const variablePolygonRegex = /board\.create\(\s*['"]polygon['"]\s*,\s*\[\s*([A-Za-z_$][\w$]*(?:\s*,\s*[A-Za-z_$][\w$]*){2,})\s*\]/g;
  [...script.matchAll(variablePolygonRegex)].forEach((match) => {
    const names = match[1].split(',').map((name) => getAliasPointName(name.trim())).filter(Boolean);
    names.forEach((name, idx) => addSegment(name, names[(idx + 1) % names.length]));
  });

  const angleRegex = /board\.create\(\s*['"]angle['"]\s*,\s*\[\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\s*\]\s*,\s*\{([^}]*)\}/g;
  [...script.matchAll(angleRegex)].forEach((match) => {
    const [, fromAlias, atAlias, toAlias, options] = match;
    const label = options.match(/\b(?:name|label)\s*:\s*['"`]([^'"`]+)['"`]/)?.[1];
    if (!label) return;
    const at = getAliasPoint(atAlias);
    const from = getAliasPoint(fromAlias);
    const to = getAliasPoint(toAlias);
    if (!at || !from || !to) return;
    const v1 = [from[0] - at[0], from[1] - at[1]];
    const v2 = [to[0] - at[0], to[1] - at[1]];
    const l1 = Math.hypot(v1[0], v1[1]) || 1;
    const l2 = Math.hypot(v2[0], v2[1]) || 1;
    const direction = [(v1[0] / l1) + (v2[0] / l2), (v1[1] / l1) + (v2[1] / l2)];
    const len = Math.hypot(direction[0], direction[1]) || 1;
    freeLabels.push({
      point: [at[0] + (direction[0] / len) * 0.7, at[1] + (direction[1] / len) * 0.7],
      text: label,
      color: '#0369a1',
      fontSize: 15,
    });
  });

  script.split('\n').forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line.includes('board.create')) return;
    const typeMatch = line.match(/board\.create\(\s*['"]([^'"]+)['"]/);
    if (!typeMatch) return;
    const type = typeMatch[1];
    const coords = [...line.matchAll(/\[\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\]/g)]
      .map((match) => [Number(match[1]), Number(match[2])]);

    if ((type === 'line' || type === 'segment' || type === 'arrow') && coords.length >= 2) {
      segments.push({
        from: getPointName(coords[0][0], coords[0][1]),
        to: getPointName(coords[1][0], coords[1][1]),
        arrow: type === 'arrow' || undefined,
      });
      return;
    }

    if (type === 'polygon' && coords.length >= 3) {
      const names = coords.map(([x, y]) => getPointName(x, y));
      names.forEach((name, idx) => {
        segments.push({ from: name, to: names[(idx + 1) % names.length] });
      });
      return;
    }

    if (type === 'point' && coords.length >= 1) {
      getPointName(coords[0][0], coords[0][1]);
      return;
    }

    if (type === 'text' && coords.length >= 1) {
      const textMatch = line.match(/,\s*['"`]([^'"`]+)['"`]\s*\]/);
      const text = textMatch?.[1];
      if (text) {
        freeLabels.push({ point: coords[0], text, color: '#0369a1', fontSize: 15 });
      }
    }
  });

  if (Object.keys(points).length === 0 || segments.length === 0) return null;

  const converted = {
    ...graphData,
    jsxGraph: undefined,
    originalJsxGraph: jsxGraph,
    conversionNote: 'Converted from JSXGraph script for geometry editing.',
    geometry: {
      width: 320,
      points,
      segments,
      angles: [],
      sideLabels: [],
      freeLabels,
      showPointLabels: false,
    },
  };

  return withGeometrySnapshot(converted);
};

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

import MathView from './MathView';

const MathPreview = ({ content, graphData, style = {} }) => {
  return (
    <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', minHeight: '50px', ...style }}>
      {content || graphData ? (
        <MathView content={content || ''} graphData={graphData} style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.6 }} />
      ) : (
        <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Preview will appear here...</span>
      )}
    </div>
  );
};

// Find all minimal closed polygon regions from the segment graph using DFS.
function findFaces(points, segments) {
  const names = Object.keys(points);
  if (names.length < 3 || !segments || segments.length < 3) return [];

  // Build undirected adjacency
  const adj = {};
  names.forEach((n) => { adj[n] = []; });
  segments.forEach((s) => {
    if (!points[s.from] || !points[s.to]) return;
    if (!adj[s.from].includes(s.to)) adj[s.from].push(s.to);
    if (!adj[s.to].includes(s.from)) adj[s.to].push(s.from);
  });

  const allCycles = [];
  const sortedNames = [...names].sort();

  // DFS: find all simple cycles, only going to nodes >= start to avoid duplicates
  function dfs(start, cur, path, visited) {
    for (const nb of adj[cur] || []) {
      if (nb === start && path.length >= 3) {
        allCycles.push([...path]);
        continue;
      }
      if (!visited.has(nb) && nb > start) {
        visited.add(nb);
        path.push(nb);
        dfs(start, nb, path, visited);
        path.pop();
        visited.delete(nb);
      }
    }
  }

  sortedNames.forEach((start) => {
    dfs(start, start, [start], new Set([start]));
  });

  if (allCycles.length === 0) return [];

  // Deduplicate (ABCD and ADCB are the same region)
  const seenKeys = new Set();
  const unique = allCycles.filter((c) => {
    const k = [...c].sort().join(',');
    if (seenKeys.has(k)) return false;
    seenKeys.add(k);
    return true;
  });

  // Keep only minimal cycles
  unique.sort((a, b) => a.length - b.length);
  const minimal = [];
  unique.forEach((cycle) => {
    const cs = new Set(cycle);
    const dominated = minimal.some((m) => m.length < cycle.length && m.every((p) => cs.has(p)));
    if (!dominated) minimal.push(cycle);
  });

  return minimal;
}

const SHADE_LEVELS = [
  null,                               // 0 = unshaded (light dashed border shown)
  { color: '#94a3b8', opacity: 0.30 }, // 1 = light shade
  { color: '#94a3b8', opacity: 0.65 }, // 2 = dark shade
];

const GeometryEditor = ({ graphData, onChange }) => {
  const geometry = graphData?.geometry;
  const surfaceRef = React.useRef(null);
  const [activeDrag, setActiveDrag] = useState(null);
  if (!geometry) return null;

  const pointNames = Object.keys(geometry.points || {});
  if (pointNames.length === 0) return null;
  const updateGeometry = (nextGeometry) => {
    onChange(withGeometrySnapshot({ ...(graphData || {}), geometry: nextGeometry }));
  };

  const setPoint = (name, axis, value) => {
    const point = geometry.points[name] || [0, 0];
    updateGeometry({
      ...geometry,
      points: {
        ...geometry.points,
        [name]: axis === 0 ? [Number(value), point[1]] : [point[0], Number(value)],
      },
    });
  };

  const addPoint = () => {
    const name = String.fromCharCode(65 + pointNames.length);
    updateGeometry({
      ...geometry,
      points: { ...(geometry.points || {}), [name]: [0, 0] },
    });
  };

  const removePoint = (name) => {
    const nextPoints = { ...(geometry.points || {}) };
    delete nextPoints[name];
    updateGeometry({
      ...geometry,
      points: nextPoints,
      segments: (geometry.segments || []).filter((seg) => seg.from !== name && seg.to !== name),
      angles: (geometry.angles || []).filter((angle) => angle.at !== name),
      sideLabels: (geometry.sideLabels || []).filter((label) => !label.between?.includes(name)),
    });
  };

  const renamePoint = (oldName, newName) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === oldName || geometry.points[trimmed]) return;
    const points = {};
    for (const [k, v] of Object.entries(geometry.points || {})) {
      points[k === oldName ? trimmed : k] = v;
    }
    const mapName = (n) => (n === oldName ? trimmed : n);
    const segments = (geometry.segments || []).map((s) => ({ ...s, from: mapName(s.from), to: mapName(s.to) }));
    const angles = (geometry.angles || []).map((a) => ({ ...a, at: mapName(a.at) }));
    const sideLabels = (geometry.sideLabels || []).map((sl) => ({ ...sl, between: sl.between?.map(mapName) }));
    const labelOffsets = {};
    for (const [k, v] of Object.entries(geometry.labelOffsets || {})) {
      labelOffsets[k === oldName ? trimmed : k] = v;
    }
    updateGeometry({ ...geometry, points, segments, angles, sideLabels, labelOffsets });
  };

  const updateSegment = (idx, patch) => {
    const segments = [...(geometry.segments || [])];
    segments[idx] = { ...segments[idx], ...patch };
    updateGeometry({ ...geometry, segments });
  };

  const updateAngle = (idx, patch) => {
    const angles = [...(geometry.angles || [])];
    angles[idx] = { ...angles[idx], ...patch };
    updateGeometry({ ...geometry, angles });
  };

  const updateFreeLabel = (idx, patch) => {
    const freeLabels = [...(geometry.freeLabels || [])];
    freeLabels[idx] = { ...freeLabels[idx], ...patch };
    updateGeometry({ ...geometry, freeLabels });
  };

  const is3D = pointNames.some((n) => Array.isArray(geometry.points[n]) && geometry.points[n].length >= 3);
  const ISO_COS = Math.cos(Math.PI / 6);
  const ISO_SIN = Math.sin(Math.PI / 6);
  const toFlat = (pt) => {
    if (!pt) return [0, 0];
    if (is3D) {
      const [x = 0, y = 0, z = 0] = pt;
      return [(x - z) * ISO_COS, y + (x + z) * ISO_SIN];
    }
    return [Number(pt[0]) || 0, Number(pt[1]) || 0];
  };
  const flatPoints = {};
  pointNames.forEach((n) => { flatPoints[n] = toFlat(geometry.points[n]); });
  const xs = pointNames.map((n) => flatPoints[n][0]);
  const ys = pointNames.map((n) => flatPoints[n][1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const pad = 48;
  const figureWidth = Number(geometry.width) || 300;
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  const inner = Math.max(120, figureWidth - pad * 2);
  const scale = inner / Math.max(spanX, spanY);
  const W = spanX * scale + pad * 2;
  const H = spanY * scale + pad * 2;
  const showPointLabels = geometry.showPointLabels !== false;
  const toSvg = (pt) => {
    const [fx, fy] = toFlat(pt);
    return [(fx - minX) * scale + pad, (maxY - fy) * scale + pad];
  };
  const fromPointer = (event) => {
    const rect = surfaceRef.current?.getBoundingClientRect();
    if (!rect) return [0, 0];
    const rawX = ((event.clientX - rect.left) / (rect.width || W)) * W;
    const rawY = ((event.clientY - rect.top) / (rect.height || H)) * H;
    const sx = Math.min(W - pad, Math.max(pad, rawX));
    const sy = Math.min(H - pad, Math.max(pad, rawY));
    const x = minX + ((sx - pad) / scale);
    const y = maxY - ((sy - pad) / scale);
    return [Number(x.toFixed(2)), Number(y.toFixed(2))];
  };

  // Compute clickable faces from segment graph (plain call — no hook needed here)
  const faces = findFaces(flatPoints, geometry.segments || []);

  // Map face canonical key → shade level index (0 = none, 1 = light, 2 = dark)
  const faceKey = (face) => [...face].sort().join(',');
  const shadedMap = {};
  (geometry.shadedPolygons || []).forEach((sp) => {
    let ring = Array.isArray(sp.polygons) ? sp.polygons[0] : sp.points;
    if (typeof ring === 'string') ring = ring.split(',');
    if (!Array.isArray(ring)) return;
    const k = [...ring].sort().join(',');
    shadedMap[k] = sp.opacity >= 0.45 ? 2 : 1;
  });

  // Check if polygon A fully contains polygon B using ray-casting point-in-polygon
  const polygonContains = (outerFace, innerFace) => {
    // All points of innerFace must be inside outerFace
    const outerCoords = outerFace.map((n) => flatPoints[n] || [0, 0]);
    return innerFace.every((n) => {
      const pt = flatPoints[n] || [0, 0];
      // Point-in-polygon test (ray casting)
      let inside = false;
      for (let i = 0, j = outerCoords.length - 1; i < outerCoords.length; j = i++) {
        const [xi, yi] = outerCoords[i];
        const [xj, yj] = outerCoords[j];
        if (((yi > pt[1]) !== (yj > pt[1])) && (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi)) {
          inside = !inside;
        }
      }
      return inside;
    });
  };

  const handleFaceClick = (face) => {
    const k = faceKey(face);
    const current = shadedMap[k] || 0;
    const next = (current + 1) % 3;
    const existing = (geometry.shadedPolygons || []).filter((sp) => {
      let ring = Array.isArray(sp.polygons) ? sp.polygons[0] : sp.points;
      if (typeof ring === 'string') ring = ring.split(',');
      if (!Array.isArray(ring)) return true;
      return [...ring].sort().join(',') !== k;
    });
    if (next === 0) {
      updateGeometry({ ...geometry, shadedPolygons: existing });
    } else {
      const level = SHADE_LEVELS[next];
      // Find inner faces that are geometrically contained within this face
      const innerRings = faces
        .filter((f) => faceKey(f) !== k && polygonContains(face, f))
        .map((f) => f);
      const polygons = innerRings.length > 0 ? [face, ...innerRings] : [face];
      updateGeometry({
        ...geometry,
        shadedPolygons: [...existing, { polygons: polygons.map(p => p.join(',')), color: level.color, opacity: level.opacity }],
      });
    }
  };

  const dragSelection = (event) => {
    if (!activeDrag) return;
    event.preventDefault();
    const point = fromPointer(event);
    if (activeDrag.type === 'point') {
      updateGeometry({
        ...geometry,
        points: { ...geometry.points, [activeDrag.name]: point },
      });
      return;
    }
    if (activeDrag.type === 'freeLabel') {
      const freeLabels = [...(geometry.freeLabels || [])];
      freeLabels[activeDrag.index] = { ...freeLabels[activeDrag.index], point };
      updateGeometry({ ...geometry, freeLabels });
    }
    if (activeDrag.type === 'pointLabel') {
      const rect = surfaceRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cursorX = ((event.clientX - rect.left) / (rect.width || W)) * W;
      const cursorY = ((event.clientY - rect.top) / (rect.height || H)) * H;
      const [ptX, ptY] = toSvg(geometry.points[activeDrag.name]);
      updateGeometry({
        ...geometry,
        labelOffsets: {
          ...(geometry.labelOffsets || {}),
          [activeDrag.name]: [Number((cursorX - ptX).toFixed(1)), Number((cursorY - ptY).toFixed(1))],
        },
      });
    }
    if (activeDrag.type === 'angle') {
      const angles = [...(geometry.angles || [])];
      angles[activeDrag.index] = { ...angles[activeDrag.index], labelPos: point };
      updateGeometry({ ...geometry, angles });
    }
    if (activeDrag.type === 'sideLabel') {
      const sideLabels = [...(geometry.sideLabels || [])];
      sideLabels[activeDrag.index] = { ...sideLabels[activeDrag.index], labelPos: point };
      updateGeometry({ ...geometry, sideLabels });
    }
  };

  return (
    <div style={{ padding: '18px', borderRadius: '18px', border: '1px solid #ddd6fe', background: '#faf5ff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Geometry editor</div>
          <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginTop: '3px' }}>Drag points and labels directly on the diagram.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6d28d9' }}>Width:</label>
          <input
            type="number"
            value={geometry.width || 300}
            onChange={(e) => updateGeometry({ ...geometry, width: Number(e.target.value) || 300 })}
            style={{ width: '70px', padding: '6px 8px', borderRadius: '8px', border: '1px solid #c4b5fd', fontWeight: 700, textAlign: 'center' }}
            title="Width of the geometry"
          />
          <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6d28d9', marginLeft: '8px' }}>Font Size:</label>
          <input
            type="number"
            value={geometry.fontSize || 15}
            onChange={(e) => updateGeometry({ ...geometry, fontSize: Number(e.target.value) || 15 })}
            style={{ width: '60px', padding: '6px 8px', borderRadius: '8px', border: '1px solid #c4b5fd', fontWeight: 700, textAlign: 'center' }}
            title="Global Font Size"
          />
          <button type="button" onClick={addPoint} style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add point</button>
        </div>
      </div>

      <div style={{ alignSelf: 'center', maxWidth: '100%', position: 'relative', zIndex: 0, overflow: 'hidden', borderRadius: '14px', border: '1px solid #e9d5ff', width: W, height: H }}>
      <svg
        ref={surfaceRef}
        viewBox={`0 0 ${W} ${H}`}
        onPointerMove={dragSelection}
        onPointerUp={() => setActiveDrag(null)}
        onPointerCancel={() => setActiveDrag(null)}
        onPointerLeave={() => setActiveDrag(null)}
        style={{ width: W, height: H, maxWidth: '100%', alignSelf: 'center', borderRadius: '14px', background: '#fff', touchAction: 'none', overflow: 'visible' }}
      >
        {/* DEBUG */}
        <text x="4" y="14" fontSize="10" fill="red">{faces.length} faces</text>
        {/* Clickable face regions — click cycles shade: none → light → dark → none */}
        {faces.map((face, fi) => {
          const k = faceKey(face);
          const level = shadedMap[k] || 0;
          const pts = face.map((n) => toSvg(flatPoints[n]).join(',')).join(' ');
          const fill = SHADE_LEVELS[level]?.color || '#7c3aed';
          const opacity = SHADE_LEVELS[level]?.opacity ?? 0.08;
          return (
            <polygon
              key={`face-${fi}`}
              points={pts}
              fill={fill}
              fillOpacity={opacity}
              stroke="#a78bfa"
              strokeWidth="1"
              strokeDasharray="4 3"
              strokeOpacity="0.5"
              pointerEvents="all"
              style={{ cursor: 'pointer' }}
              onClick={(e) => { e.stopPropagation(); handleFaceClick(face); }}
            />
          );
        })}
        {(geometry.segments || []).map((seg, idx) => {
          if (!geometry.points[seg.from] || !geometry.points[seg.to]) return null;
          const [x1, y1] = toSvg(geometry.points[seg.from]);
          const [x2, y2] = toSvg(geometry.points[seg.to]);
          const dx = x2 - x1; const dy = y2 - y1;
          const len = Math.hypot(dx, dy) || 1;
          const ux = dx / len; const uy = dy / len;
          const px = -uy; const py = ux;
          const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2;
          const tickEls = [];
          if (seg.ticks) {
            const n = Number(seg.ticks);
            const spacing = 5;
            const start = -((n - 1) * spacing) / 2;
            for (let t = 0; t < n; t++) {
              const off = start + t * spacing;
              const tx = mx + ux * off; const ty = my + uy * off;
              tickEls.push(<line key={`t${t}`} x1={tx - px * 5} y1={ty - py * 5} x2={tx + px * 5} y2={ty + py * 5} stroke="#000" strokeWidth="1.2" strokeLinecap="round" />);
            }
          }
          if (seg.marks) {
            const n = Number(seg.marks);
            const spacing = 5;
            const start = -((n - 1) * spacing) / 2;
            for (let t = 0; t < n; t++) {
              const off = start + t * spacing;
              const cx2 = mx + ux * off; const cy2 = my + uy * off;
              const sz = 5;
              tickEls.push(<polyline key={`m${t}`} points={`${cx2 - ux * sz - px * sz},${cy2 - uy * sz - py * sz} ${cx2},${cy2} ${cx2 + ux * sz - px * sz},${cy2 + uy * sz - py * sz}`} fill="none" stroke="#000" strokeWidth="1.2" strokeLinejoin="round" />);
            }
          }
          return <g key={idx}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeDasharray={seg.dashed ? '6 4' : undefined} />{tickEls}</g>;
        })}
        {(() => {
          const edCx = pointNames.reduce((s, n) => s + toSvg(geometry.points[n])[0], 0) / (pointNames.length || 1);
          const edCy = pointNames.reduce((s, n) => s + toSvg(geometry.points[n])[1], 0) / (pointNames.length || 1);
          const edNorm = (dx, dy) => { const l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
          return (geometry.angles || []).map((ang, idx) => {
            if (!geometry.points[ang.at]) return null;
            const [vx, vy] = toSvg(geometry.points[ang.at]);
            const [eddx, eddy] = edNorm(edCx - vx, edCy - vy);
            
            // Draggable handle position
            const rx = ang.labelPos ? toSvg(ang.labelPos)[0] : vx + eddx * 26;
            const ry = ang.labelPos ? toSvg(ang.labelPos)[1] : vy + eddy * 26;
            
            // Calculate direction from vertex to handle
            let [dx, dy] = edNorm(rx - vx, ry - vy);
            if (Math.abs(dx) < 1e-3 && Math.abs(dy) < 1e-3) {
              dx = eddx;
              dy = eddy;
            }

            const els = [];

            if (ang.right) {
              const sz = 12;
              const sqrt2 = Math.sqrt(2);
              const bx1 = vx + ((dx + dy) / sqrt2) * sz;
              const by1 = vy + ((dy - dx) / sqrt2) * sz;
              const bx2 = vx + sqrt2 * dx * sz;
              const by2 = vy + sqrt2 * dy * sz;
              const bx3 = vx + ((dx - dy) / sqrt2) * sz;
              const by3 = vy + ((dy + dx) / sqrt2) * sz;
              els.push(
                <polyline
                  key="rt"
                  points={`${bx1},${by1} ${bx2},${by2} ${bx3},${by3}`}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.0"
                />
              );
            }

            if (ang.label) {
              els.push(
                <text
                  key="lbl"
                  x={rx}
                  y={ry + 5}
                  textAnchor="middle"
                  fill="#000000"
                  fontSize={geometry.fontSize || 14}
                  fontStyle="italic"
                  fontFamily='"KaTeX_Main", "Times New Roman", serif'
                >
                  {ang.label}
                </text>
              );
            }

            if (!ang.right && !ang.label) {
              els.push(
                <circle
                  key="helper"
                  cx={rx}
                  cy={ry}
                  r="6"
                  fill="#7c3aed"
                  opacity="0.4"
                />
              );
            }

            return (
              <g
                key={`ang-${idx}`}
                onPointerDown={(event) => {
                  event.preventDefault();
                  setActiveDrag({ type: 'angle', index: idx });
                }}
                style={{ cursor: 'grab' }}
              >
                <circle cx={rx} cy={ry} r="14" fill="#7c3aed" opacity="0.1" />
                {els}
              </g>
            );
          });
        })()}
        {pointNames.map((name) => {
          const [x, y] = toSvg(geometry.points[name]);
          const labelOff = (geometry.labelOffsets || {})[name] || [0, -15];
          const lx = x + labelOff[0];
          const ly = y + labelOff[1];
          return (
            <g key={name}>
              <g onPointerDown={(event) => { event.preventDefault(); setActiveDrag({ type: 'point', name }); }} style={{ cursor: 'grab' }}>
                <circle cx={x} cy={y} r="9" fill="#8b5cf6" opacity="0.16" />
                <circle cx={x} cy={y} r="1.0" fill="#000000" />
              </g>
              {showPointLabels && (
                <g onPointerDown={(event) => { event.preventDefault(); event.stopPropagation(); setActiveDrag({ type: 'pointLabel', name }); }} style={{ cursor: 'move' }}>
                  <rect x={lx - 12} y={ly - 14} width="24" height="20" fill="transparent" />
                  <text x={lx} y={ly + 5} textAnchor="middle" fill="#000000" fontSize={geometry.fontSize || 14} fontStyle="italic" fontWeight="600" fontFamily='"KaTeX_Main", "Times New Roman", serif'>{name}</text>
                </g>
              )}
            </g>
          );
        })}
        {(geometry.freeLabels || []).map((label, idx) => {
          const point = Array.isArray(label.point) ? label.point : [label.x || 0, label.y || 0];
          const [x, y] = toSvg(point);
          return (
            <g key={`label-${idx}`} onPointerDown={(event) => { event.preventDefault(); setActiveDrag({ type: 'freeLabel', index: idx }); }} style={{ cursor: 'grab' }}>
              <circle cx={x} cy={y} r="11" fill="#0ea5e9" opacity="0.08" />
              <text x={x} y={y + 5} textAnchor="middle" fill="#000000" fontSize={geometry.fontSize || 14} fontStyle={label.italic === false ? 'normal' : 'italic'} fontFamily='"KaTeX_Main", "Times New Roman", serif'>{label.text}</text>
            </g>
          );
        })}
        {(() => {
          const edCx = pointNames.reduce((s, n) => s + toSvg(geometry.points[n])[0], 0) / (pointNames.length || 1);
          const edCy = pointNames.reduce((s, n) => s + toSvg(geometry.points[n])[1], 0) / (pointNames.length || 1);
          return (geometry.sideLabels || []).map((sl, idx) => {
            if (!sl.between?.[0] || !sl.between?.[1]) return null;
            if (!geometry.points[sl.between[0]] || !geometry.points[sl.between[1]]) return null;
            let lx, ly;
            if (sl.labelPos) {
              [lx, ly] = toSvg(sl.labelPos);
            } else {
              const [ax, ay] = toSvg(geometry.points[sl.between[0]]);
              const [bx, by] = toSvg(geometry.points[sl.between[1]]);
              const mx = (ax + bx) / 2; const my = (ay + by) / 2;
              const len2 = Math.hypot(bx - ax, by - ay) || 1;
              let px = -(by - ay) / len2; let py = (bx - ax) / len2;
              const towardOut = (mx + px - edCx) ** 2 + (my + py - edCy) ** 2;
              const towardIn = (mx - px - edCx) ** 2 + (my - py - edCy) ** 2;
              const outward = sl.side === 'in' ? towardOut < towardIn : towardOut > towardIn;
              if (!outward) { px = -px; py = -py; }
              lx = mx + px * 16; ly = my + py * 16;
            }
            return (
              <g key={`sl-${idx}`} onPointerDown={(event) => { event.preventDefault(); setActiveDrag({ type: 'sideLabel', index: idx }); }} style={{ cursor: 'grab' }}>
                <circle cx={lx} cy={ly} r="11" fill="#10b981" opacity="0.12" />
                <text x={lx} y={ly + 5} textAnchor="middle" fill="#000000" fontSize={geometry.fontSize || 14} fontFamily='"KaTeX_Main", "Times New Roman", serif'>{sl.text}</text>
              </g>
            );
          });
        })()}
      </svg>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-4px' }}>
        <button type="button" onClick={addPoint} style={{ padding: '7px 14px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#f5f3ff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer', fontSize: '0.85rem' }}>+ Add point</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
        {pointNames.map((name) => (
          <div key={name} style={{ padding: '10px', borderRadius: '12px', background: '#fff', border: '1px solid #ede9fe' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', gap: '6px' }}>
              <input
                defaultValue={name}
                onBlur={(e) => renamePoint(name, e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }}
                style={{ width: '60px', padding: '4px 6px', borderRadius: '6px', border: '1px solid #c4b5fd', fontWeight: 800, color: '#4c1d95', fontSize: '0.95rem', textAlign: 'center' }}
                title="Click to rename"
              />
              <button
                type="button"
                title={((geometry.hiddenPoints || []).includes(name)) ? 'Show point' : 'Hide point'}
                onClick={() => {
                  const hidden = geometry.hiddenPoints || [];
                  const next = hidden.includes(name) ? hidden.filter(n => n !== name) : [...hidden, name];
                  updateGeometry({ ...geometry, hiddenPoints: next });
                }}
                style={{ border: 0, background: (geometry.hiddenPoints || []).includes(name) ? '#fef9c3' : '#f3f4f6', color: (geometry.hiddenPoints || []).includes(name) ? '#92400e' : '#6b7280', borderRadius: '8px', padding: '3px 6px', cursor: 'pointer', fontWeight: 800, fontSize: '0.85rem' }}
              >{(geometry.hiddenPoints || []).includes(name) ? '🙈' : '👁'}</button>
              <button type="button" onClick={() => removePoint(name)} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '3px 6px', cursor: 'pointer', fontWeight: 800 }}>Remove</button>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input type="number" step="0.25" value={geometry.points[name]?.[0] ?? 0} onChange={(e) => setPoint(name, 0, e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} />
              <input type="number" step="0.25" value={geometry.points[name]?.[1] ?? 0} onChange={(e) => setPoint(name, 1, e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="button" onClick={() => updateGeometry({ ...geometry, segments: [...(geometry.segments || []), { from: pointNames[0] || 'A', to: pointNames[1] || pointNames[0] || 'A' }] })} style={{ alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add line</button>
        {(geometry.segments || []).map((seg, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '80px 80px auto auto 70px 80px auto', gap: '6px', alignItems: 'center' }}>
            <select value={seg.from} onChange={(e) => updateSegment(idx, { from: e.target.value })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }}>{pointNames.map((name) => <option key={name} value={name}>{name}</option>)}</select>
            <select value={seg.to} onChange={(e) => updateSegment(idx, { to: e.target.value })} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ddd6fe', width: '100%' }}>{pointNames.map((name) => <option key={name} value={name}>{name}</option>)}</select>
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', whiteSpace: 'nowrap' }}><input type="checkbox" checked={!!seg.dashed} onChange={(e) => updateSegment(idx, { dashed: e.target.checked || undefined })} /> Dashed</label>
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', whiteSpace: 'nowrap' }}><input type="checkbox" checked={!!seg.arrow} onChange={(e) => updateSegment(idx, { arrow: e.target.checked || undefined })} /> Arrow</label>
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
              Ticks<input type="number" min="0" max="5" value={seg.ticks || 0} onChange={(e) => updateSegment(idx, { ticks: Number(e.target.value) || undefined })} style={{ width: '36px', padding: '4px', borderRadius: '6px', border: '1px solid #ddd6fe', fontWeight: 700, textAlign: 'center' }} />
            </label>
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
              ∥ Marks<input type="number" min="0" max="5" value={seg.marks || 0} onChange={(e) => updateSegment(idx, { marks: Number(e.target.value) || undefined })} style={{ width: '36px', padding: '4px', borderRadius: '6px', border: '1px solid #ddd6fe', fontWeight: 700, textAlign: 'center' }} />
            </label>
            <button type="button" onClick={() => updateGeometry({ ...geometry, segments: (geometry.segments || []).filter((_, i) => i !== idx) })} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '6px 8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.72rem' }}>Remove</button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="button" onClick={() => updateGeometry({ ...geometry, angles: [...(geometry.angles || []), { at: pointNames[0] || 'A', label: 'x' }] })} style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add angle</button>
          <button type="button" onClick={() => updateGeometry({ ...geometry, angles: [...(geometry.angles || []), { at: pointNames[0] || 'A', right: true }] })} style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add right angle</button>
        </div>
        {(geometry.angles || []).map((angle, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto auto', gap: '8px', alignItems: 'center' }}>
            <select value={angle.at} onChange={(e) => updateAngle(idx, { at: e.target.value })} style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }}>{pointNames.map((name) => <option key={name} value={name}>{name}</option>)}</select>
            <input value={angle.label || ''} onChange={(e) => updateAngle(idx, { label: e.target.value })} placeholder="label" style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} />
            <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b' }}><input type="checkbox" checked={!!angle.right} onChange={(e) => updateAngle(idx, { right: e.target.checked || undefined })} /> Right</label>
            <button type="button" onClick={() => updateGeometry({ ...geometry, angles: (geometry.angles || []).filter((_, i) => i !== idx) })} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '8px', cursor: 'pointer' }}>Remove</button>
          </div>
        ))}
      </div>

      {(geometry.sideLabels || []).length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Side Labels</div>
          {(geometry.sideLabels || []).map((sl, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <input
                value={sl.text || ''}
                onChange={(e) => {
                  const sideLabels = [...(geometry.sideLabels || [])];
                  sideLabels[idx] = { ...sideLabels[idx], text: e.target.value };
                  updateGeometry({ ...geometry, sideLabels });
                }}
                style={{ padding: '4px 8px', borderRadius: '8px', border: '1px solid #ddd6fe', fontWeight: 700, color: '#4c1d95', width: '90px', fontSize: '0.85rem' }}
              />
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>({sl.between?.[0]}–{sl.between?.[1]})</span>
              {sl.labelPos ? (
                <button type="button" onClick={() => {
                  const sideLabels = [...(geometry.sideLabels || [])];
                  const { labelPos: _, ...rest } = sideLabels[idx];
                  sideLabels[idx] = rest;
                  updateGeometry({ ...geometry, sideLabels });
                }} style={{ border: 0, background: '#f5f3ff', color: '#7c3aed', borderRadius: '8px', padding: '4px 8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.72rem' }}>Reset position</button>
              ) : (
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Default position</span>
              )}
              <button type="button" onClick={() => updateGeometry({ ...geometry, sideLabels: (geometry.sideLabels || []).filter((_, i) => i !== idx) })} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '4px 8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.72rem' }}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {/* Shaded regions — click a region in the diagram above to shade it */}
      {faces.length > 0 && (
        <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
          Click a region in the diagram to shade it · click again to darken · click once more to remove
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="button" onClick={() => updateGeometry({ ...geometry, freeLabels: [...(geometry.freeLabels || []), { point: [0, 0], text: 'x' }] })} style={{ alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '10px', border: '1px solid #c4b5fd', background: '#fff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}>Add free label</button>
        {(geometry.freeLabels || []).map((label, idx) => {
          const point = Array.isArray(label.point) ? label.point : [label.x || 0, label.y || 0];
          return (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr 0.7fr 0.6fr auto', gap: '8px', alignItems: 'center' }}>
              <input value={label.text || ''} onChange={(e) => updateFreeLabel(idx, { text: e.target.value })} placeholder="label" style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} />
              <input type="number" step="0.25" value={point[0]} onChange={(e) => updateFreeLabel(idx, { point: [Number(e.target.value), point[1]] })} style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} title="X" />
              <input type="number" step="0.25" value={point[1]} onChange={(e) => updateFreeLabel(idx, { point: [point[0], Number(e.target.value)] })} style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} title="Y" />
              <input type="number" value={label.fontSize || 15} onChange={(e) => updateFreeLabel(idx, { fontSize: Number(e.target.value) || 15 })} placeholder="px" style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd6fe' }} title="Font Size" />
              <button type="button" onClick={() => updateGeometry({ ...geometry, freeLabels: (geometry.freeLabels || []).filter((_, i) => i !== idx) })} style={{ border: 0, background: '#fff1f2', color: '#e11d48', borderRadius: '8px', padding: '8px', cursor: 'pointer' }}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Student-view preview. Mirrors the layout/styling of ChallengeQuizView so
// the teacher sees questions exactly as students do (header chip, progress
// bar, padded question card, math symbol pad for short-answer, pill-style
// option cards). The sketch board is intentionally omitted.
const StudentViewPreview = ({ question, onClose }) => {
  const [showHint, setShowHint] = useState(false);
  if (!question) return null;
  const timeLimit = question.timeLimit || 120;
  const isShortAnswer = question.type === 'short_answer';
  const isMC = question.type === 'multiple_choice' || (!isShortAnswer && !question.subQuestions?.length && (question.options || []).length > 0);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '20px', overflowY: 'auto' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }} />
      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} style={{ position: 'relative', width: '100%', maxWidth: '720px', background: '#f8fafc', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', margin: 'auto' }}>
        {/* Sticky top bar (preview label + close) */}
        <div style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '32px 32px 0 0', position: 'sticky', top: 0, zIndex: 2 }}>
          <span style={{ fontWeight: 800, color: '#64748b', fontSize: '0.8rem', letterSpacing: '0.08em' }}>STUDENT VIEW PREVIEW</span>
          <button onClick={onClose} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={18} /></button>
        </div>

        <div style={{ padding: '24px 28px 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Challenge header (matches student) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question 1 of 1</div>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64748b', background: '#fff', padding: '8px 12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> {timeLimit}s
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '100%', background: '#6366f1' }} />
          </div>

          {/* Question card */}
          <div className="app-panel" style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', background: '#fff', border: '1px solid #e2e8f0', position: 'relative' }}>
            {question.hint && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <button
                  onClick={() => setShowHint(!showHint)}
                  style={{ background: showHint ? '#fef3c7' : '#fff7ed', border: 'none', padding: '6px 12px', borderRadius: '10px', color: '#d97706', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
              </div>
            )}
            <MathView
              content={question.question}
              graphData={question.graphData}
              style={{ fontSize: '1.15rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7, margin: 0 }}
            />
            <AnimatePresence>
              {showHint && question.hint && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                  <div style={{ marginTop: '16px', padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', marginBottom: '8px' }}>
                      <Lightbulb size={16} />
                      <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' }}>Hint</span>
                    </div>
                    <MathView content={question.hint} style={{ color: '#92400e', fontSize: '0.95rem', fontWeight: 600 }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {question.questionImage && (
              <img src={question.questionImage} alt="Question" style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
            )}
          </div>

          {/* Sub-questions */}
          {question.subQuestions?.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {question.subQuestions.map((sq, sIdx) => (
                <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                      {String.fromCharCode(97 + sIdx)}
                    </div>
                    <MathView content={sq.question} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
                  </div>
                  {sq.type === 'multiple_choice' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                      {(sq.options || []).map((opt, oIdx) => (
                        <div key={oIdx} style={{ padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.85rem', textAlign: 'left' }}>
                          {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <input type="text" placeholder="Type answer..." disabled style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', fontWeight: 700, fontSize: '0.95rem' }} />
                  )}
                </div>
              ))}
            </div>
          ) : isShortAnswer ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Math symbol pad — identical to student's */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px', justifyContent: 'center' }}>
                {MATH_SYMBOLS.map(symbol => (
                  <div key={symbol} style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff', color: '#4f46e5', fontSize: symbol === '√' ? '1.3rem' : '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', fontFamily: '"KaTeX_Main", "Times New Roman", serif', lineHeight: 1, paddingBottom: symbol === '√' ? '2px' : 0 }}>
                    {symbol}
                  </div>
                ))}
                <div style={{ width: '64px', height: '44px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontSize: '0.8rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', textTransform: 'uppercase' }}>Del</div>
              </div>
              <input
                type="text" placeholder="Type your answer..." disabled
                style={{ fontSize: '1.4rem', padding: '24px', borderRadius: '24px', textAlign: 'center', fontWeight: 700, fontFamily: '"KaTeX_Main", "Times New Roman", serif', letterSpacing: '0.05em', border: '2px solid #e2e8f0', background: '#fff', outline: 'none' }}
              />
            </div>
          ) : isMC ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {(question.options || []).map((opt, i) => (
                <div key={i} style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', border: '2px solid transparent', borderRadius: '100px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ fontWeight: 500, fontSize: '1.05rem', color: '#1e1b4b' }} />
                      {typeof opt === 'object' && opt.imageUrl && <img src={opt.imageUrl} alt="Option" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // teacher_review / graph_sketch fallback — just show submit pill
            <div style={{ padding: '16px', borderRadius: '16px', background: '#fef9c3', color: '#854d0e', fontSize: '0.9rem', fontWeight: 700, textAlign: 'center' }}>
              Teacher reviews this question manually.
            </div>
          )}

          {/* Submit button (disabled — preview only) */}
          <button disabled style={{ width: '100%', padding: '18px', borderRadius: '20px', border: 'none', background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', color: 'white', fontWeight: 800, opacity: 0.6, cursor: 'not-allowed', fontSize: '1.1rem', boxShadow: '0 14px 28px rgba(124,58,237,0.20)' }}>
            Submit Answer
          </button>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginTop: '-4px', fontWeight: 600 }}>Non-interactive preview · sketch pad hidden</p>
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
    solutionSteps: [],
    hint: '',
    topicTitle: '',
    subQuestions: [],
    requiresManualGrading: false,
    blanks: [], // [{ label, answer }] for type === 'fill_blank'
    graphData: ''
  });

  const loadQuestionPage = React.useCallback(async ({ reset = false, cursor = null, currentQuestions = [] } = {}) => {
    if (!chapterId) return;

    if (reset) setLoading(true);
    else setLoadingMore(true);

    try {
      const constraints = [
        where('chapterId', '==', chapterId),
        orderBy(documentId()),
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
      const initialGraphData = q.graphData?.geometry
        ? withGeometrySnapshot(q.graphData)
        : q.graphData;
      
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
        solutionSteps: (q.solutionSteps || []).map(s =>
          typeof s === 'string' ? { explanation: s, workingOut: '' } : { explanation: s.explanation || '', workingOut: s.workingOut || '' }
        ),
        hint: q.hint || '',
        topicId: q.topicId || '',
        topicCode: q.topicCode || '',
        topicTitle: q.topicTitle || '',
        subQuestions: (q.subQuestions || []).map(sq => {
          const isMCQ = sq.type === 'multiple_choice';
          const answerIdx = isMCQ && sq.answer !== undefined && sq.answer !== ''
            ? parseInt(sq.answer, 10)
            : (sq.answerIdx != null ? sq.answerIdx : null);
          return {
            ...sq,
            answer: isMCQ ? '' : (sq.answer || sq.a || ''),
            answerIdx: isMCQ ? (isNaN(answerIdx) ? null : answerIdx) : null,
            solution: sq.solution || '',
            solutionSteps: (sq.solutionSteps || []).map(s =>
              typeof s === 'string' ? { explanation: s, workingOut: '' } : { explanation: s.explanation || '', workingOut: s.workingOut || '' }
            ),
            options: (sq.options && sq.options.length > 0)
              ? sq.options.map(o => typeof o === 'string' ? { text: o, imageUrl: '' } : { text: o.text || '', imageUrl: o.imageUrl || '' })
              : [{ text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }, { text: '', imageUrl: '' }]
          };
        }),
        requiresManualGrading: q.requiresManualGrading || false,
        blanks: Array.isArray(q.blanks)
          ? q.blanks.map((b) => ({ label: b.label || '', answer: b.answer || '' }))
          : [],
        graphData: initialGraphData ? stringifyGraphData(initialGraphData) : ''
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
        solutionSteps: [{ explanation: '', workingOut: '' }],
        hint: '',
        topicTitle: '',
        subQuestions: [],
        requiresManualGrading: false,
        blanks: [],
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
    // Teacher-graded questions don't need a machine-checkable answer — the
    // teacher reads the student's response and assigns the mark. The `answer`
    // field, if filled, is shown as a model answer for student reference.
    const teacherGraded = formData.requiresManualGrading === true;
    const needsAnswer = !teacherGraded;
    const fillBlankOk = formData.type !== 'fill_blank'
      || (formData.blanks || []).some((b) => (b.answer || '').trim() !== '');

    if (!formData.questionText
      || (needsAnswer && formData.type === 'short_answer' && !formData.answer)
      || (needsAnswer && formData.type === 'multiple_choice' && formData.answerIdx === null)
      || (needsAnswer && formData.type === 'fill_blank' && !fillBlankOk)
    ) {
      showToast("Question content and answer are required.", 'warning');
      return;
    }

    try {
      const selectedTopic = (chapter.topics || []).find(topic => topic.id === formData.topicId);
      let graphData = null;
      if (formData.graphData && formData.graphData.trim()) {
        try {
          graphData = withGeometrySnapshot(JSON.parse(formData.graphData));
        } catch {
          showToast("Graph Data JSON is invalid. Please fix it or clear the field.", 'error');
          return;
        }
      }

      const payload = stripUndefined({
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
        // fill_blank: pipe-joined answers serve as a fallback for old grading
        // paths; the canonical source is the `blanks` array below.
        answer: formData.type === 'multiple_choice'
          ? (formData.answerIdx != null ? formData.answerIdx.toString() : '')
          : formData.type === 'fill_blank'
            ? (formData.blanks || []).map((b) => (b.answer || '').trim()).join(' | ')
            : formData.answer,
        blanks: formData.type === 'fill_blank'
          ? (formData.blanks || []).map((b) => ({ label: b.label || '', answer: b.answer || '' }))
          : [],
        solution: formData.solution,
        solutionSteps: formData.solutionSteps.filter(s => s.explanation.trim() || s.workingOut.trim()),
        hint: formData.hint,
        subQuestions: (formData.subQuestions || []).map(sq => ({
          id: sq.id || '',
          question: sq.question || '',
          type: sq.type || 'short_answer',
          options: sq.type === 'multiple_choice'
            ? (sq.options || []).filter(o => (o?.text || '').trim() !== '' || o?.imageUrl)
            : [],
          answer: sq.type === 'multiple_choice' ? (sq.answerIdx?.toString() || '') : (sq.answer || ''),
          solution: sq.solution || '',
          solutionSteps: (sq.solutionSteps || []).filter(s => s.explanation.trim() || s.workingOut.trim()),
          hint: sq.hint || ''
        })),
        requiresManualGrading: formData.requiresManualGrading || false,
        graphData,
        isActive: true,
        updatedAt: serverTimestamp()
      });

      if (editingQuestion) {
        await updateDoc(doc(db, 'questions', editingQuestion), payload);
      } else {
        payload.createdAt = serverTimestamp();
        await addDoc(collection(db, 'questions'), payload);
      }
      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true });

      questionBankSessionCache.delete(`questions:${chapterId}`);
      await loadQuestionPage({ reset: true });
      
      if (directEditQuestion) {
        onClose();
      } else {
        setIsFormOpen(false);
      }
      showToast("Question saved successfully!", 'success');
    } catch (e) {
      console.error('Question save failed:', e);
      showToast(`Error saving question: ${e.code || e.message || 'Unknown error'}`, 'error');
    }
  };

  const handleDelete = async (id, { closeAfter = false } = {}) => {
    if (!window.confirm("Delete this question? This cannot be undone.")) return;
    try {
      await updateDoc(doc(db, 'questions', id), {
        isActive: false,
        updatedAt: serverTimestamp(),
      });
      // Resolve all open reports linked to this question.
      // Query both questionId field and questionData.id (some reports store ID only in questionData).
      const [snap1, snap2] = await Promise.all([
        getDocs(query(collection(db, 'reports'), where('questionId', '==', id), where('status', '==', 'open'))),
        getDocs(query(collection(db, 'reports'), where('questionData.id', '==', id), where('status', '==', 'open'))),
      ]);
      const seen = new Set();
      const toResolve = [...snap1.docs, ...snap2.docs].filter(d => {
        if (seen.has(d.id)) return false;
        seen.add(d.id);
        return true;
      });
      await Promise.all(toResolve.map(r => updateDoc(r.ref, { status: 'resolved', resolvedAt: serverTimestamp() })));

      const nextQuestions = questions.filter(q => q.id !== id);
      setQuestions(nextQuestions);
      const cached = questionBankSessionCache.get(`questions:${chapterId}`);
      if (cached) {
        questionBankSessionCache.set(`questions:${chapterId}`, {
          ...cached,
          questions: cached.questions.filter(q => q.id !== id),
        });
      }
      if (closeAfter) {
        directEditQuestion ? onClose() : setIsFormOpen(false);
      }
      showToast("Question deleted.", 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to delete question.", 'error');
    }
  };

  const handleOptionChange = (idx, field, value) => {
    const newOpts = [...formData.options];
    newOpts[idx] = { ...newOpts[idx], [field]: value };
    setFormData({ ...formData, options: newOpts });
  };

  const currentGraphData = parseGraphData(formData.graphData);
  const hasGraphData = Boolean(currentGraphData && Object.keys(currentGraphData).length > 0);
  const hasEditableGeometry = Boolean(currentGraphData?.geometry);
  const hasRenderOnlyDiagram = hasGraphData && !hasEditableGeometry;
  const canConvertJsxGraph = Boolean(currentGraphData?.jsxGraph?.script);
  const graphDataInvalid = Boolean(formData.graphData?.trim() && !currentGraphData);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }} />
      
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} style={{ position: 'relative', width: '100%', maxWidth: isFormOpen ? '1100px' : '700px', maxHeight: '90vh', backgroundColor: '#fff', borderRadius: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        
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
        <div style={{ padding: '24px 20px' }}>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase' }}>
                            {q.title || `Question ${idx + 1}`} • {q.difficulty}
                          </div>
                          {q.id && (
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', background: '#f1f5f9', borderRadius: '6px', padding: '2px 7px', fontFamily: 'monospace', letterSpacing: '0.02em', userSelect: 'all' }}>
                              ID: {q.id}
                            </span>
                          )}
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
                          <MathPreview content={q.question} graphData={q.graphData} />
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
                  <MathPreview content={formData.questionText} graphData={currentGraphData} />
                </div>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  <BarChart size={14} /> Diagram tools
                </label>
                <div style={{ padding: '14px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  {hasEditableGeometry ? (
                    <div style={{ color: '#166534', fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.45 }}>
                      Editable diagram is ready. Use the geometry editor below to drag points and adjust lines or labels.
                    </div>
                  ) : hasRenderOnlyDiagram ? (
                    <div style={{ color: '#92400e', fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.45 }}>
                      This diagram previews correctly, but it is still stored in a render-only format.
                    </div>
                  ) : graphDataInvalid ? (
                    <div style={{ color: '#b91c1c', fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.45 }}>
                      Graph JSON is invalid. Open Advanced graph JSON to fix or clear it.
                    </div>
                  ) : (
                    <div style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.45 }}>
                      No diagram data yet.
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                    {!hasGraphData && !graphDataInvalid && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          graphData: stringifyGraphData(createDefaultGeometryGraph()),
                        }))}
                        style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #ddd6fe', background: '#f5f3ff', color: '#6d28d9', fontWeight: 800, cursor: 'pointer' }}
                      >
                        Create editable geometry
                      </button>
                    )}
                    {hasEditableGeometry && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          graphData: stringifyGraphData(withGeometrySnapshot(parseGraphData(prev.graphData))),
                        }))}
                        style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#15803d', fontWeight: 800, cursor: 'pointer' }}
                      >
                        Regenerate SVG snapshot
                      </button>
                    )}
                    {hasRenderOnlyDiagram && canConvertJsxGraph && (
                      <button
                        type="button"
                        onClick={() => {
                          const converted = convertJsxGraphToGeometryGraph(currentGraphData);
                          if (!converted) {
                            showToast('Could not convert this JSXGraph diagram automatically.', 'warning');
                            return;
                          }
                          setFormData(prev => ({
                            ...prev,
                            graphData: stringifyGraphData(converted),
                          }));
                        }}
                        style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid #f59e0b', background: '#fff', color: '#92400e', fontWeight: 800, cursor: 'pointer' }}
                      >
                        Convert to editable geometry
                      </button>
                    )}
                  </div>
                </div>

                <details style={{ marginTop: '10px' }}>
                  <summary style={{ cursor: 'pointer', color: '#64748b', fontWeight: 800, fontSize: '0.78rem' }}>
                    Advanced graph JSON
                  </summary>
                  <textarea
                    rows={4}
                    value={formData.graphData}
                    onChange={e => setFormData({...formData, graphData: e.target.value})}
                    style={{ width: '100%', marginTop: '8px', padding: '16px', borderRadius: '16px', border: `1px solid ${graphDataInvalid ? '#fecaca' : '#e2e8f0'}`, outline: 'none', fontWeight: 500, fontSize: '0.85rem', fontFamily: 'monospace', background: graphDataInvalid ? '#fff1f2' : '#f8fafc', resize: 'vertical' }}
                    placeholder='{ "equations": ["y = 2x + 1"], "config": { "xRange": [-5, 5], "yRange": [-5, 5] } }'
                  />
                </details>
              </div>

              {hasEditableGeometry && (
                <GeometryEditor
                  graphData={currentGraphData}
                  onChange={(nextGraphData) => setFormData(prev => ({
                    ...prev,
                    graphData: stringifyGraphData(nextGraphData),
                  }))}
                />
              )}

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Question Image (Optional)</label>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <FileUploader 
                    currentUrl={formData.questionImage} 
                    onUpload={(url) => setFormData({...formData, questionImage: url})} 
                    label={formData.questionImage ? 'Replace Question Image' : 'Upload Question Image'}
                  />
                  {formData.questionImage && (
                    <img src={formData.questionImage} alt="Preview" style={{ width: '88px', height: '64px', borderRadius: '12px', objectFit: 'contain', border: '1px solid #e2e8f0', background: '#f8fafc' }} />
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
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Time Limit</label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[{ label: '30s', value: 30 }, { label: '1m 30s', value: 90 }, { label: '2min', value: 120 }, { label: '3min', value: 180 }, { label: '5min', value: 300 }].map(({ label, value }) => (
                      <button key={value} type="button" onClick={() => setFormData({ ...formData, timeLimit: value })}
                        style={{ padding: '10px 16px', borderRadius: '12px', border: `2px solid ${Number(formData.timeLimit) === value ? '#6366f1' : '#e2e8f0'}`, background: Number(formData.timeLimit) === value ? '#6366f1' : '#fff', color: Number(formData.timeLimit) === value ? '#fff' : '#1e293b', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.15s' }}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Question Type</label>
                <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '16px' }}>
                  {[
                    { id: 'multiple_choice', label: 'Multiple Choice' },
                    { id: 'short_answer', label: 'Short Answer' },
                    { id: 'fill_blank', label: 'Fill in the Blank' },
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setFormData({ ...formData, type: id })}
                      style={{ flex: 1, padding: '10px', borderRadius: '12px', border: 'none', background: formData.type === id ? 'white' : 'transparent', color: formData.type === id ? '#6366f1' : '#64748b', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', boxShadow: formData.type === id ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Teacher-grades toggle. When ON the question is sent for manual
                  marking — useful for "giving reasons", "show that", proof or
                  drawing tasks where a single string answer cannot capture the
                  full response. The Answer field below is then optional and
                  acts as a model answer that students can reference after. */}
              <div style={{
                padding: '14px 18px', borderRadius: '16px',
                background: formData.requiresManualGrading ? '#fffbeb' : '#f8fafc',
                border: `1px solid ${formData.requiresManualGrading ? '#fde68a' : '#e2e8f0'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: formData.requiresManualGrading ? '#92400e' : '#1e293b' }}>
                    Teacher grades this question
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', lineHeight: 1.4 }}>
                    Use for "giving reasons", "show that", proof or drawing tasks. The Answer field becomes optional and is shown to students as a model answer.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, requiresManualGrading: !prev.requiresManualGrading }))}
                  aria-pressed={formData.requiresManualGrading}
                  style={{
                    width: '52px', height: '30px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                    background: formData.requiresManualGrading ? '#f59e0b' : '#cbd5e1',
                    position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                  }}
                >
                  <span style={{
                    position: 'absolute', top: '3px', left: formData.requiresManualGrading ? '25px' : '3px',
                    width: '24px', height: '24px', borderRadius: '50%', background: '#fff',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)', transition: 'left 0.2s',
                  }} />
                </button>
              </div>

              {formData.subQuestions.length === 0 && formData.type === 'multiple_choice' ? (
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
              ) : formData.type === 'fill_blank' ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                      Blanks ({(formData.blanks || []).length})
                    </label>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({
                        ...prev,
                        blanks: [...(prev.blanks || []), { label: '', answer: '' }],
                      }))}
                      style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px', background: '#f5f3ff', color: '#6366f1', border: '1px solid #ddd6fe', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Plus size={14} /> Add Blank
                    </button>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 12px', lineHeight: 1.4 }}>
                    Write the question with <code style={{ background: '#f1f5f9', padding: '1px 6px', borderRadius: '6px' }}>()</code> where each blank should appear (e.g. <em>α = (), β = ()</em>). Add one row below per blank — label is shown next to the input (e.g. "α ="), answer is the correct value.
                  </p>
                  {(formData.blanks || []).length === 0 ? (
                    <div style={{ padding: '20px', textAlign: 'center', color: '#94a3b8', fontWeight: 700, background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                      No blanks yet. Click "Add Blank" to start.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {formData.blanks.map((b, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '12px 14px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '14px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#eef2ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900, flexShrink: 0 }}>
                            {bIdx + 1}
                          </div>
                          <input
                            type="text"
                            placeholder="Label (e.g. α =)"
                            value={b.label || ''}
                            onChange={(e) => setFormData((prev) => {
                              const next = [...(prev.blanks || [])];
                              next[bIdx] = { ...next[bIdx], label: e.target.value };
                              return { ...prev, blanks: next };
                            })}
                            style={{ flex: '0 0 140px', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.9rem' }}
                          />
                          <input
                            type="text"
                            placeholder="Correct answer (e.g. 115°)"
                            value={b.answer || ''}
                            onChange={(e) => setFormData((prev) => {
                              const next = [...(prev.blanks || [])];
                              next[bIdx] = { ...next[bIdx], answer: e.target.value };
                              return { ...prev, blanks: next };
                            })}
                            style={{ flex: 1, padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.9rem', background: '#f0fdf4', color: '#166534' }}
                          />
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({
                              ...prev,
                              blanks: (prev.blanks || []).filter((_, i) => i !== bIdx),
                            }))}
                            style={{ background: '#fff1f2', color: '#f43f5e', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer', display: 'flex' }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : formData.subQuestions.length === 0 ? (
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                    {formData.requiresManualGrading ? 'Model Answer (Optional — shown to students)' : 'Correct Answer (Plain Text)'}
                  </label>
                  <input type="text" value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', fontWeight: 600, fontSize: '0.95rem', background: '#f0fdf4', color: '#166534' }} placeholder={formData.requiresManualGrading ? 'e.g. AB ∥ CD (alternate angles equal)' : 'e.g. 25'} />
                </div>
              ) : null}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Hint (Optional, LaTeX supported)</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hint: '1. \n2. \n3. ' }))}
                      style={{ padding: '4px 10px', borderRadius: '8px', border: '1px solid #fde68a', background: '#fffbeb', color: '#b45309', fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      + Numbered steps
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hint: 'Step 1: \nStep 2: \nStep 3: ' }))}
                      style={{ padding: '4px 10px', borderRadius: '8px', border: '1px solid #fde68a', background: '#fffbeb', color: '#b45309', fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      + Step format
                    </button>
                  </div>
                </div>

                {/* Hint writing guide */}
                <div style={{ marginBottom: '10px', padding: '12px 14px', borderRadius: '12px', background: 'linear-gradient(135deg, #fffbeb, #fef9e7)', border: '1px solid #fde68a', borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    💡 Step-by-step hint format
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {[
                      { label: 'Numbered', example: '1. Identify the formula\n2. Substitute values\n3. Simplify' },
                      { label: '"Step N:" prefix', example: 'Step 1: Find the derivative\nStep 2: Set equal to zero' },
                      { label: 'Blank line paragraphs', example: 'First think about...\n\nThen apply...' },
                      { label: 'Single hint', example: 'Use the quadratic formula.' },
                    ].map((f) => (
                      <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#92400e', minWidth: '110px' }}>{f.label}</span>
                        <code style={{ fontSize: '0.66rem', color: '#78350f', background: 'rgba(255,255,255,0.7)', padding: '2px 7px', borderRadius: '6px', fontFamily: 'monospace', whiteSpace: 'pre', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.example.replace(/\n/g, ' ↵ ')}</code>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, hint: f.example }))}
                          style={{ padding: '2px 8px', borderRadius: '6px', border: 'none', background: '#f59e0b', color: '#fff', fontSize: '0.62rem', fontWeight: 800, cursor: 'pointer', flexShrink: 0 }}
                        >
                          Use
                        </button>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '0.68rem', color: '#92400e', fontWeight: 600 }}>
                    Each line / paragraph becomes a separate hint step revealed one at a time.
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={formData.hint}
                  onChange={e => setFormData({...formData, hint: e.target.value})}
                  style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid #fde68a', outline: 'none', fontWeight: 600, fontSize: '0.95rem', resize: 'vertical', background: '#fffbeb', fontFamily: 'monospace' }}
                  placeholder={'1. First hint step...\n2. Second hint step...\n3. Final nudge...'}
                />
                {formData.hint && (
                  <div style={{ marginTop: '12px' }}>
                    <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>HINT PREVIEW:</span>
                    <MathPreview content={formData.hint} />
                  </div>
                )}
              </div>

              {formData.subQuestions.length === 0 && <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Step-by-step Solution</label>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, solutionSteps: [...prev.solutionSteps, { explanation: '', workingOut: '' }] }))}
                    style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px', background: '#f5f3ff', color: '#6366f1', border: '1px solid #ddd6fe', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Plus size={14} /> Add Step
                  </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {formData.solutionSteps.map((step, sIdx) => (
                    <div key={sIdx} style={{ padding: '20px', borderRadius: '16px', border: '2px solid #ede9fe', background: '#faf5ff', position: 'relative' }}>
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, solutionSteps: prev.solutionSteps.filter((_, i) => i !== sIdx) }))}
                        style={{ position: 'absolute', top: '12px', right: '12px', border: 'none', background: '#fff1f2', color: '#f43f5e', padding: '5px', borderRadius: '6px', cursor: 'pointer' }}
                      >
                        <Trash2 size={13} />
                      </button>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.85rem', flexShrink: 0 }}>
                          {sIdx + 1}
                        </div>
                        <span style={{ fontWeight: 800, color: '#7c3aed', fontSize: '0.85rem' }}>Step {sIdx + 1}</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Explanation (LaTeX supported)</label>
                          <textarea
                            rows={2}
                            value={step.explanation}
                            onChange={e => {
                              const next = [...formData.solutionSteps];
                              next[sIdx] = { ...next[sIdx], explanation: e.target.value };
                              setFormData({ ...formData, solutionSteps: next });
                            }}
                            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1px solid #ddd6fe', outline: 'none', fontWeight: 600, fontSize: '0.92rem', resize: 'vertical', background: '#fff' }}
                            placeholder="Describe this step..."
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Working Out (calculations, LaTeX supported)</label>
                          <textarea
                            rows={2}
                            value={step.workingOut}
                            onChange={e => {
                              const next = [...formData.solutionSteps];
                              next[sIdx] = { ...next[sIdx], workingOut: e.target.value };
                              setFormData({ ...formData, solutionSteps: next });
                            }}
                            style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1px solid #ddd6fe', outline: 'none', fontWeight: 600, fontSize: '0.92rem', resize: 'vertical', background: '#fff', fontFamily: 'monospace' }}
                            placeholder="e.g. $50 \times 1.5 = 75$"
                          />
                          {step.workingOut.trim() && (
                            <div style={{ marginTop: '8px', padding: '10px 14px', background: '#fff', borderRadius: '10px', border: '1px solid #ede9fe' }}>
                              <MathPreview content={/\$|\\\(|\\\[/.test(step.workingOut) ? step.workingOut : `$${step.workingOut}$`} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {formData.solutionSteps.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '24px', borderRadius: '16px', border: '2px dashed #e2e8f0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>
                      No steps yet. Click "Add Step" to begin.
                    </div>
                  )}
                </div>
              </div>}

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
                solutionSteps: [],
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

                {/* Sub-question Step-by-step Solution */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Step-by-step Solution</label>
                    <button
                      onClick={() => {
                        const newSub = [...formData.subQuestions];
                        newSub[sIdx].solutionSteps = [...(newSub[sIdx].solutionSteps || []), { explanation: '', workingOut: '' }];
                        setFormData({ ...formData, subQuestions: newSub });
                      }}
                      style={{ padding: '5px 10px', fontSize: '0.72rem', borderRadius: '8px', background: '#f5f3ff', color: '#6366f1', border: '1px solid #ddd6fe', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Plus size={13} /> Add Step
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {(sq.solutionSteps || []).map((step, stIdx) => (
                      <div key={stIdx} style={{ padding: '16px', borderRadius: '14px', border: '2px solid #ede9fe', background: '#faf5ff', position: 'relative' }}>
                        <button
                          onClick={() => {
                            const newSub = [...formData.subQuestions];
                            newSub[sIdx].solutionSteps = (newSub[sIdx].solutionSteps || []).filter((_, i) => i !== stIdx);
                            setFormData({ ...formData, subQuestions: newSub });
                          }}
                          style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: '#fff1f2', color: '#f43f5e', padding: '4px', borderRadius: '6px', cursor: 'pointer' }}
                        >
                          <Trash2 size={12} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.78rem', flexShrink: 0 }}>{stIdx + 1}</div>
                          <span style={{ fontWeight: 800, color: '#7c3aed', fontSize: '0.8rem' }}>Step {stIdx + 1}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Explanation</label>
                            <textarea
                              rows={2}
                              value={step.explanation}
                              onChange={e => {
                                const newSub = [...formData.subQuestions];
                                const steps = [...(newSub[sIdx].solutionSteps || [])];
                                steps[stIdx] = { ...steps[stIdx], explanation: e.target.value };
                                newSub[sIdx].solutionSteps = steps;
                                setFormData({ ...formData, subQuestions: newSub });
                              }}
                              style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #ddd6fe', outline: 'none', fontWeight: 600, fontSize: '0.88rem', resize: 'vertical', background: '#fff' }}
                              placeholder="Describe this step..."
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Working Out (LaTeX)</label>
                            <textarea
                              rows={2}
                              value={step.workingOut}
                              onChange={e => {
                                const newSub = [...formData.subQuestions];
                                const steps = [...(newSub[sIdx].solutionSteps || [])];
                                steps[stIdx] = { ...steps[stIdx], workingOut: e.target.value };
                                newSub[sIdx].solutionSteps = steps;
                                setFormData({ ...formData, subQuestions: newSub });
                              }}
                              style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #ddd6fe', outline: 'none', fontWeight: 600, fontSize: '0.88rem', resize: 'vertical', background: '#fff', fontFamily: 'monospace' }}
                              placeholder="e.g. $x = 5$"
                            />
                            {step.workingOut.trim() && (
                              <div style={{ marginTop: '6px', padding: '8px 12px', background: '#fff', borderRadius: '8px', border: '1px solid #ede9fe' }}>
                                <MathPreview content={/\$|\\\(|\\\[/.test(step.workingOut) ? step.workingOut : `$${step.workingOut}$`} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {(sq.solutionSteps || []).length === 0 && (
                      <div style={{ textAlign: 'center', padding: '16px', borderRadius: '12px', border: '2px dashed #e2e8f0', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
                        No steps yet. Click "Add Step" to begin.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
        <button onClick={() => directEditQuestion ? onClose() : setIsFormOpen(false)} style={{ padding: '16px', borderRadius: '16px', background: '#f1f5f9', color: '#475569', fontWeight: 700, border: 'none', cursor: 'pointer', flex: 1 }}>Cancel</button>
        {editingQuestion && (
          <button onClick={() => handleDelete(editingQuestion, { closeAfter: true })} style={{ padding: '16px', borderRadius: '16px', border: '1.5px solid #fecaca', background: '#fff1f2', color: '#b91c1c', fontWeight: 700, cursor: 'pointer', flex: 1 }}>Delete</button>
        )}
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
