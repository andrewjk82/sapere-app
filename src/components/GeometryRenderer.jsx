/**
 * GeometryRenderer — Declarative JSXGraph renderer
 *
 * ── 기본 원칙 ─────────────────────────────────────────────────────────────────
 *  • 모든 기본 색상 = 검정 (#1e293b)
 *  • 그리드 기본값 = 꺼짐  (켜려면 "grid": true)
 *  • 각도 호 fill  = 투명  (색상 채우려면 fillColor + fillOpacity 명시)
 *  • 점은 "on" + "angle"(°)으로 원 위에 바로 배치 가능
 *
 * ── 최소 예시 (원 위의 삼각형) ────────────────────────────────────────────────
 * {
 *   "boundingbox": [-6, 6, 6, -6],
 *   "elements": [
 *     { "type": "circle",  "id": "c1", "center": [0,0], "radius": 5 },
 *     { "type": "point",   "id": "O",  "coords": [0,0], "name": "O", "color": "red" },
 *     { "type": "point",   "id": "A",  "on": "c1", "angle": 210, "name": "A", "label": {"offset": [-14, -4]} },
 *     { "type": "point",   "id": "B",  "on": "c1", "angle": 90,  "name": "B", "label": {"offset": [0, 10]} },
 *     { "type": "point",   "id": "P",  "on": "c1", "angle": 0,   "name": "P", "label": {"offset": [12, 0]} },
 *     { "type": "segment", "from": "A", "to": "B" },
 *     { "type": "segment", "from": "A", "to": "P" },
 *     { "type": "segment", "from": "O", "to": "B" },
 *     { "type": "segment", "from": "O", "to": "P" },
 *     { "type": "angle",   "id": "angA", "points": ["B","A","P"], "name": "α", "radius": 1.5, "label": {"offset": [16, -8]} },
 *     { "type": "angle",   "id": "angO", "points": ["B","O","P"], "name": "β", "radius": 1.2, "label": {"offset": [14, 0]} }
 *   ]
 * }
 *
 * ── ELEMENT 전체 옵션 ──────────────────────────────────────────────────────────
 *   circle     — id, center ([x,y] or id), radius, color, strokeWidth, fillColor, fillOpacity
 *   point      — id, coords ([x,y])  OR  on (circle id) + angle (°, 0=오른쪽, 반시계방향+)
 *                name, color, size, visible, label: { offset:[dx,dy], color, fontSize }
 *   segment    — id, from, to, color, strokeWidth, dash(0=실선/1=점선), firstArrow, lastArrow
 *   line       — id, through ([id,id]), color, strokeWidth
 *   arrow      — id, from, to, color, strokeWidth, bidirectional
 *   polygon    — id, points ([id,...]), fillColor, fillOpacity, color, strokeWidth, dash
 *   angle      — id, points ([from, vertex, to]), name(레이블), radius, color
 *                fillColor, fillOpacity, label: { offset:[dx,dy], color, fontSize }
 *   rightangle — id, points ([from, vertex, to]), size (default 0.4), color
 *   arc        — id, center, from, to, color, strokeWidth
 *   text       — id, coords([x,y]), content, color, fontSize, anchorX, anchorY
 *   tick       — id, segment (id), count
 *
 * ── 레이블 offset 팁 ──────────────────────────────────────────────────────────
 *   offset: [dx, dy]  — 픽셀 단위. dx 양수=오른쪽, dy 양수=위
 *   점 레이블: 원 외부 방향으로 밀어내려면 원에서 멀어지는 방향으로 설정
 */

import { useEffect, useId, useRef } from 'react';
import JXG from 'jsxgraph';
import '../jsxgraph.css';

// ─── Color palette ────────────────────────────────────────────────────────────
const NAMED_COLORS = {
  blue:   '#3b82f6',
  red:    '#ef4444',
  green:  '#10b981',
  orange: '#f59e0b',
  purple: '#8b5cf6',
  gray:   '#1e293b',
  slate:  '#1e293b',
  black:  '#1e293b',
  white:  '#ffffff',
  none:   'none',
  transparent: 'none',
};
const resolveColor = (name) => NAMED_COLORS[name] ?? name ?? '#1e293b';

// ─── GeometryRenderer component ───────────────────────────────────────────────
const GeometryRenderer = ({ data, style }) => {
  const boardRef = useRef(null);
  const boardInstance = useRef(null);
  const uniqueId = useId();

  useEffect(() => {
    if (!boardRef.current || !data?.elements) return;

    // ── Clean up previous board instance ──
    if (boardInstance.current) {
      JXG.JSXGraph.freeBoard(boardInstance.current);
      boardInstance.current = null;
    }

    let board = null;
    try {
      // ── Board initialisation ──
      const bbox = data.boundingbox ?? [-6, 6, 6, -6];
      const dx   = Math.abs(bbox[2] - bbox[0]);
      const dy   = Math.abs(bbox[1] - bbox[3]);
      const ar   = dy / dx;

      board = JXG.JSXGraph.initBoard(boardRef.current, {
        boundingbox:    bbox,
        axis:           false,
        showCopyright:  false,
        showNavigation: false,
        keepaspectratio: data.keepaspectratio ?? (ar > 0.55 && ar < 1.8),
        backgroundColor: '#ffffff',
        ...data.boardOptions,
      });
      boardInstance.current = board;

      // ── Optional decorative grid (off by default) ──
      if (data.grid === true) {
        board.create('grid', [], {
          strokeColor:   '#cbd5e1',
          strokeWidth:   0.5,
          strokeOpacity: 0.35,
        });
      }

      // ── Registry: id string → JSXGraph element ──
      // Elements reference each other by id (e.g. "from": "A" looks up reg["A"])
      const reg  = {};   // id → JSXGraph element
      const meta = {};   // id → extra metadata (e.g. circle center + radius)

      // Board pixel dimensions for px→board-coord offset conversion
      const boardW = boardRef.current.clientWidth  || 300;
      const boardH = boardRef.current.clientHeight || 300;

      /**
       * convertOffset([px, py]) → [bx, by]
       * Converts a pixel-space offset to board coordinate space.
       * JSXGraph y-axis is inverted relative to CSS (positive y = up, not down).
       */
      const convertOffset = ([px, py]) => [
        (px / boardW) * dx,
        -(py / boardH) * dy,
      ];

      /**
       * resolve(ref) → JSXGraph element or [x,y] array
       * Accepts an id string, an [x,y] coordinate pair, or a JXG element directly.
       */
      const resolve = (ref) => {
        if (typeof ref === 'string')  return reg[ref] ?? null;
        if (Array.isArray(ref))       return ref;
        return ref ?? null;
      };

      // ── Suspend updates for performance ──
      board.suspendUpdate();

      // ── Process elements in declaration order ──────────────────────────────
      for (const el of data.elements) {
        let jxgEl = null;

        try {
          switch (el.type) {

            // ──────────────────────────────────────────────────────────────────
            // CIRCLE
            // Required: center ([x,y] or id), radius
            // Optional: color, strokeWidth, fillColor, fillOpacity
            // ──────────────────────────────────────────────────────────────────
            case 'circle': {
              const center = resolve(el.center) ?? [0, 0];
              jxgEl = board.create('circle', [center, el.radius ?? 5], {
                strokeColor:  resolveColor(el.color ?? el.strokeColor ?? 'black'),
                strokeWidth:  el.strokeWidth ?? 2,
                fillColor:    resolveColor(el.fillColor ?? 'none'),
                fillOpacity:  el.fillOpacity ?? 0,
                fixed:        true,
                highlight:    false,
              });
              // Store metadata so later points can use "on": id, "angle": deg
              meta[el.id] = {
                type:   'circle',
                center: Array.isArray(el.center) ? el.center : [0, 0],
                radius: el.radius ?? 5,
              };
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // POINT
            // Fixed coords:  coords: [x, y]
            // On circle:     on: 'circleId', angle: degrees  (0° = right, CCW+)
            // Optional: name, color, size, label: { offset, color, fontSize }
            // ──────────────────────────────────────────────────────────────────
            case 'point': {
              // Determine coordinates
              let coords;
              if (el.coords) {
                coords = el.coords;
              } else if (el.on != null && el.angle != null) {
                const m = meta[el.on];
                if (m?.type === 'circle') {
                  const [cx, cy] = m.center;
                  const rad = (el.angle * Math.PI) / 180;
                  coords = [
                    cx + m.radius * Math.cos(rad),
                    cy + m.radius * Math.sin(rad),
                  ];
                } else {
                  console.warn(`GeometryRenderer: point "${el.id}" references unknown circle "${el.on}"`);
                  coords = [0, 0];
                }
              } else {
                coords = [0, 0];
              }

              const labelOpts = el.label ?? {};
              const color     = resolveColor(el.color ?? 'black');

              jxgEl = board.create('point', coords, {
                name:         el.name ?? '',
                size:         el.size ?? 2.2,
                color,
                strokeColor:  color,
                fillColor:    color,
                fixed:        true,
                highlight:    false,
                showInfobox:  false,
                visible:      el.visible !== false,
                withLabel:    !!(el.name),
                label: {
                  fontSize:      labelOpts.fontSize ?? 13,
                  fontFamily:    '"Outfit", "Inter", sans-serif',
                  strokeColor:   resolveColor(labelOpts.color ?? 'black'),
                  offset:        labelOpts.offset ?? [10, 10],
                  autoPosition:  false,
                },
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // SEGMENT
            // Required: from (id or [x,y]), to (id or [x,y])
            // Optional: color, strokeWidth, dash (0=solid,1=dashed,2=dotted),
            //           firstArrow, lastArrow
            // ──────────────────────────────────────────────────────────────────
            case 'segment': {
              const from = resolve(el.from);
              const to   = resolve(el.to);
              if (!from || !to) {
                console.warn(`GeometryRenderer: segment "${el.id}" — could not resolve from/to`);
                break;
              }
              jxgEl = board.create('segment', [from, to], {
                strokeColor: resolveColor(el.color ?? el.strokeColor ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1.5,
                dash:        el.dash ?? 0,
                firstArrow:  el.firstArrow ?? false,
                lastArrow:   el.lastArrow  ?? false,
                fixed:       true,
                highlight:   false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // ARROW  (segment with arrowhead)
            // Required: from, to
            // Optional: color, strokeWidth, bidirectional
            // ──────────────────────────────────────────────────────────────────
            case 'arrow': {
              const from = resolve(el.from);
              const to   = resolve(el.to);
              if (!from || !to) break;
              jxgEl = board.create('segment', [from, to], {
                strokeColor: resolveColor(el.color ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1.5,
                lastArrow:   true,
                firstArrow:  el.bidirectional ?? false,
                fixed:       true,
                highlight:   false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // LINE  (extends to bounding box edges)
            // Required: through ([id, id])
            // Optional: color, strokeWidth
            // ──────────────────────────────────────────────────────────────────
            case 'line': {
              const pts = (el.through ?? []).map(resolve).filter(Boolean);
              if (pts.length < 2) break;
              jxgEl = board.create('line', pts, {
                strokeColor: resolveColor(el.color ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1,
                fixed:       true,
                highlight:   false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // POLYGON
            // Required: points ([id, id, ...])  — minimum 3 points
            // Optional: fillColor, fillOpacity, color (border), strokeWidth, dash
            // ──────────────────────────────────────────────────────────────────
            case 'polygon': {
              const pts = (el.points ?? []).map(resolve).filter(Boolean);
              if (pts.length < 3) break;
              jxgEl = board.create('polygon', pts, {
                fillColor:   resolveColor(el.fillColor ?? 'none'),
                fillOpacity: el.fillOpacity ?? 0,
                borders: {
                  strokeColor: resolveColor(el.color ?? el.strokeColor ?? 'black'),
                  strokeWidth: el.strokeWidth ?? 1.5,
                  dash:        el.dash ?? 0,
                  highlight:   false,
                },
                vertices:  { visible: false },
                fixed:     true,
                highlight: false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // ANGLE  (draws arc + label using JSXGraph native angle element)
            // Required: points ([from-id, vertex-id, to-id])
            // Optional: name (label text), radius, color, label: { offset, color, fontSize }
            //
            // label.offset: [dx, dy] in pixels
            //   dx positive → right
            //   dy positive → up  (note: same convention as CSS, we invert internally)
            // ──────────────────────────────────────────────────────────────────
            case 'angle': {
              const pts = (el.points ?? []).map(resolve).filter(p => p?.X);
              if (pts.length < 3) {
                console.warn(`GeometryRenderer: angle "${el.id}" — need 3 resolvable points`);
                break;
              }
              const labelOpts = el.label ?? {};
              jxgEl = board.create('angle', pts, {
                name:        el.name ?? '',
                radius:      el.radius ?? 1.2,
                type:        'sector', // Force sector to prevent auto-square right angles that give away answers
                strokeColor: resolveColor(el.color ?? el.strokeColor ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1.5,
                fillColor:   resolveColor(el.fillColor ?? 'none'),
                fillOpacity: el.fillOpacity ?? 0,
                label: {
                  fontSize:     labelOpts.fontSize ?? 14,
                  fontFamily:   '"Outfit", "Inter", sans-serif',
                  strokeColor:  resolveColor(labelOpts.color ?? 'black'),
                  offset:       labelOpts.offset ?? [0, 0],
                  autoPosition: false,
                },
                fixed:     true,
                highlight: false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // RIGHT ANGLE  (square corner marker)
            // Required: points ([from-id, vertex-id, to-id])
            // Optional: size (default 0.4), color
            // ──────────────────────────────────────────────────────────────────
            case 'rightangle': {
              const pts = (el.points ?? []).map(resolve).filter(p => p?.X);
              if (pts.length < 3) break;
              jxgEl = board.create('angle', pts, {
                type:        'square',
                name:        '',
                radius:      el.size ?? 0.4,
                fillColor:   'none',
                fillOpacity: 0,
                strokeColor: resolveColor(el.color ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1.5,
                label:       { visible: false },
                fixed:       true,
                highlight:   false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // ARC  (partial circle)
            // Required: center (id or [x,y]), from (id), to (id)
            // Optional: color, strokeWidth
            // ──────────────────────────────────────────────────────────────────
            case 'arc': {
              const center = resolve(el.center);
              const from   = resolve(el.from);
              const to     = resolve(el.to);
              if (!center || !from || !to) break;
              jxgEl = board.create('arc', [center, from, to], {
                strokeColor: resolveColor(el.color ?? 'black'),
                strokeWidth: el.strokeWidth ?? 1.5,
                fillColor:   'none',
                fixed:       true,
                highlight:   false,
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // TEXT  (free-floating label)
            // Required: coords ([x, y]), content (string)
            // Optional: color, fontSize, anchorX ('left'|'middle'|'right'),
            //           anchorY ('top'|'middle'|'bottom')
            // ──────────────────────────────────────────────────────────────────
            case 'text': {
              const [tx, ty] = el.coords ?? [0, 0];
              jxgEl = board.create('text', [tx, ty, el.content ?? ''], {
                fixed:       true,
                fontSize:    el.fontSize ?? 13,
                fontFamily:  '"Outfit", "Inter", sans-serif',
                strokeColor: resolveColor(el.color ?? 'black'),
                anchorX:     el.anchorX ?? 'middle',
                anchorY:     el.anchorY ?? 'middle',
              });
              break;
            }

            // ──────────────────────────────────────────────────────────────────
            // TICK  (equal-length markers on a segment, e.g. to show sides equal)
            // Required: segment (id)
            // Optional: count (default 1)
            // ──────────────────────────────────────────────────────────────────
            case 'tick': {
              const seg = resolve(el.segment ?? el.on);
              if (!seg) break;
              jxgEl = board.create('ticks', [seg, 0.2], {
                insertTicks:  false,
                majorHeight:  12,
                drawLabels:   false,
                tickEndings:  [1, 1],
                fixed:        true,
                highlight:    false,
              });
              break;
            }

            default:
              console.warn(`GeometryRenderer: unknown element type "${el.type}" — skipping`);
          }
        } catch (elErr) {
          console.error(`GeometryRenderer: error rendering element "${el.id ?? el.type}":`, elErr);
        }

        // Register by id so later elements can reference this one
        if (jxgEl && el.id) {
          reg[el.id] = jxgEl;
        }
      }

      board.unsuspendUpdate();

    } catch (err) {
      console.error('GeometryRenderer: board initialisation error:', err);
      try { board?.unsuspendUpdate(); } catch {}
    }

    // ── Cleanup ──
    return () => {
      if (boardInstance.current) {
        JXG.JSXGraph.freeBoard(boardInstance.current);
        boardInstance.current = null;
      }
    };
  }, [data]);

  // ── Dimensions (same scaling as JsxGraphDiagram) ──
  const baseWidth   = typeof data.width  === 'number' ? data.width  : (parseInt(data.width)  || 300);
  const baseHeight  = typeof data.height === 'number' ? data.height : (parseInt(data.height) || 300);
  const displayWidth  = baseWidth  * 1.2;
  const displayHeight = baseHeight * 1.2;

  return (
    <div
      id={uniqueId}
      ref={boardRef}
      className="jxgbox"
      style={{
        width:        `${displayWidth}px`,
        height:       `${displayHeight}px`,
        maxWidth:     '100%',
        margin:       '0 auto',
        borderRadius: '16px',
        boxShadow:    'none',
        border:       '1px solid #e2e8f0',
        background:   '#ffffff',
        overflow:     'hidden',
        ...style,
      }}
    />
  );
};

export default GeometryRenderer;
