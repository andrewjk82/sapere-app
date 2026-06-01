import { useEffect, useId, useRef } from 'react';
import JXG from 'jsxgraph';
import '../jsxgraph.css';

const JsxGraphDiagram = ({ data, style }) => {
  const boardRef = useRef(null);
  const boardInstance = useRef(null);

  useEffect(() => {
    if (!boardRef.current || !data) return;

    // Clean up previous board instance if it exists
    if (boardInstance.current) {
      JXG.JSXGraph.freeBoard(boardInstance.current);
    }

    try {
      const bbox = data.boundingbox || [-5, 5, 5, -5];
      const dx = Math.abs(bbox[2] - bbox[0]);
      const dy = Math.abs(bbox[3] - bbox[1]);
      const ratio = dy / dx;
      const autoKeepAspectRatio = ratio > 0.55 && ratio < 1.8;

      const defaultOptions = {
        boundingbox: bbox,
        axis: data.axis !== undefined ? data.axis : false,
        showCopyright: false,
        showNavigation: false,
        keepaspectratio: data.keepaspectratio !== undefined ? data.keepaspectratio : (data.boardOptions?.keepaspectratio !== undefined ? data.boardOptions.keepaspectratio : autoKeepAspectRatio),
        point: {
          fixed: true,
          highlight: false,
          showInfobox: false,
          visible: false,
          withLabel: false,
        },
      };

      const board = JXG.JSXGraph.initBoard(boardRef.current, {
        ...defaultOptions,
        ...data.boardOptions
      });
      
      boardInstance.current = board;
      board.options.point = {
        ...(board.options.point || {}),
        fixed: true,
        highlight: false,
        showInfobox: false,
        visible: false,
        withLabel: false,
      };

      // Create a gorgeous, faint grid to make the graph look professional
      if (data.grid !== false) {
        board.create('grid', [], {
          strokeColor: '#cbd5e1', // Slate 300
          strokeWidth: 0.5,
          strokeOpacity: 0.35, // Very soft opacity so it doesn't distract
        });
      }

      const originalCreate = board.create.bind(board);

      board.create = (elementType, parents, attributes = {}) => {
        const type = String(elementType).toLowerCase();

        // 1. Unified premium styling for curves and functions
        if (type === 'functiongraph' || type === 'curve') {
          const originalColor = attributes.strokeColor || 'blue';
          let mappedColor = '#4f46e5'; // Default premium Indigo
          if (originalColor === 'red') mappedColor = '#f43f5e'; // Rose
          else if (originalColor === 'green') mappedColor = '#10b981'; // Emerald
          else if (originalColor === 'orange') mappedColor = '#f59e0b'; // Amber
          else if (originalColor === 'purple') mappedColor = '#8b5cf6'; // Violet
          
          attributes = {
            ...attributes,
            strokeColor: mappedColor,
            // Thinner lines as requested: limit max thickness to 1.5
            strokeWidth: attributes.strokeWidth !== undefined ? Math.min(attributes.strokeWidth, 1.5) : 1.5,
          };
        }
        
        // 2. Softer colors for axes and arrows (Slate instead of harsh black)
        if (type === 'arrow' || type === 'line' || type === 'axis') {
          const originalColor = attributes.strokeColor || 'black';
          if (originalColor === 'black' || originalColor === '#000' || originalColor === '#000000') {
            attributes = {
              ...attributes,
              strokeColor: '#64748b', // Slate 500
              strokeWidth: attributes.strokeWidth || 1,
            };
          }
        }

        // 3. Keep explicit points visible & styled premium
        if (type === 'point') {
          const originalColor = attributes.color || attributes.strokeColor || 'red';
          let mappedColor = '#f43f5e'; // Rose 500 for points
          if (originalColor === 'blue') mappedColor = '#2563eb'; // Royal Blue
          else if (originalColor === 'green') mappedColor = '#10b981'; // Emerald
          
          const labelAttrs = attributes.label || {};
          const pointAttributes = {
            fixed: true,
            highlight: false,
            showInfobox: false,
            ...attributes,
            color: mappedColor,
            strokeColor: mappedColor,
            fillColor: mappedColor,
            size: attributes.size || 3.5,
            visible: attributes.visible !== false,
            withLabel: attributes.withLabel !== undefined ? attributes.withLabel : (attributes.name ? true : false),
            label: {
              fontSize: 11,
              fontFamily: '"Outfit", "Inter", sans-serif',
              strokeColor: '#334155', // Slate 700
              ...labelAttrs,
              offset: labelAttrs.offset || [10, 10]
            }
          };
          const pt = originalCreate(elementType, parents, pointAttributes);
          if (pt) {
            pt._explicit = true; // Tag explicit points so they are not hidden
          }
          return pt;
        }

        if (type !== 'angle') {
          return originalCreate(elementType, parents, attributes);
        }

        const label = attributes.name || attributes.label;
        if (!label || !Array.isArray(parents) || parents.length < 3) {
          return originalCreate('text', [0, 0, ''], { visible: false });
        }

        const [from, vertex, to] = parents;
        if (!from?.X || !from?.Y || !vertex?.X || !vertex?.Y || !to?.X || !to?.Y) {
          return originalCreate('text', [0, 0, label], {
            anchorX: 'middle',
            anchorY: 'middle',
            fixed: true,
            strokeColor: attributes.labelColor || '#0369a1',
          });
        }

        const vx = vertex.X();
        const vy = vertex.Y();
        const v1 = [from.X() - vx, from.Y() - vy];
        const v2 = [to.X() - vx, to.Y() - vy];
        const l1 = Math.hypot(v1[0], v1[1]) || 1;
        const l2 = Math.hypot(v2[0], v2[1]) || 1;
        const direction = [(v1[0] / l1) + (v2[0] / l2), (v1[1] / l1) + (v2[1] / l2)];
        const len = Math.hypot(direction[0], direction[1]) || 1;
        const radius = Number(attributes.radius) || 1.2;

        return originalCreate('text', [
          vx + (direction[0] / len) * radius * 0.75,
          vy + (direction[1] / len) * radius * 0.75,
          label,
        ], {
          anchorX: 'middle',
          anchorY: 'middle',
          fixed: true,
          fontSize: attributes.fontSize || 15,
          strokeColor: attributes.labelColor || '#0369a1',
        });
      };

      // Ensure data.script is a function that takes the board and JXG as arguments
      if (typeof data.script === 'function') {
        data.script(board, JXG);
      } else if (typeof data.script === 'string') {
        // Evaluate script string safely if necessary, though function is preferred
        const executeScript = new Function('board', 'JXG', data.script);
        executeScript(board, JXG);
      }

      if (data.showConstructionPoints !== true) {
        Object.values(board.objects || {}).forEach((object) => {
          // Hide only implicit construction points, preserve explicitly created points
          if (object?.elType === 'point' && !object._explicit && object.setAttribute) {
            object.setAttribute({
              fixed: true,
              highlight: false,
              showInfobox: false,
              visible: false,
              withLabel: false,
            });
          }
        });
      }
    } catch (err) {
      console.error('Error initializing JSXGraph board:', err);
    }

    return () => {
      if (boardInstance.current) {
        JXG.JSXGraph.freeBoard(boardInstance.current);
        boardInstance.current = null;
      }
    };
  }, [data]);

  const uniqueId = useId();

  const baseWidth = typeof data.width === 'number' ? data.width : (parseInt(data.width) || 300);
  const baseHeight = typeof data.height === 'number' ? data.height : (parseInt(data.height) || 300);
  
  // Scale up by 1.2x for better readability as requested
  const displayWidth = baseWidth * 1.2;
  const displayHeight = baseHeight * 1.2;

  return (
    <div 
      id={uniqueId}
      ref={boardRef} 
      className="jxgbox" 
      style={{ 
        width: `${displayWidth}px`, 
        height: `${displayHeight}px`, 
        maxWidth: '100%',
        margin: '0 auto', 
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(15,23,42,0.04)',
        border: '1px solid #e2e8f0', // slate-200 border for a premium card feel
        overflow: 'hidden',
        ...style 
      }} 
    />
  );
};

export default JsxGraphDiagram;
