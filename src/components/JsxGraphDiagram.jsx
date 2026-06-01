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
        // Automatically extend function graph domain to bounding box edges
        if (type === 'functiongraph' || type === 'curve') {
          const originalColor = attributes.strokeColor || 'blue';
          let mappedColor = '#64748b'; // Default premium Slate to match the axes
          if (originalColor === 'red') mappedColor = '#f43f5e'; // Rose
          else if (originalColor === 'green') mappedColor = '#10b981'; // Emerald
          else if (originalColor === 'orange') mappedColor = '#f59e0b'; // Amber
          else if (originalColor === 'purple') mappedColor = '#8b5cf6'; // Violet
          
          attributes = {
            firstArrow: true,
            lastArrow: true,
            ...attributes,
            strokeColor: mappedColor,
            // Thinner lines as requested: limit max thickness to 1.5
            strokeWidth: attributes.strokeWidth !== undefined ? Math.min(attributes.strokeWidth, 1.5) : 1.5,
          };

          // Extend domain for functiongraph to avoid mid-air truncation
          if (type === 'functiongraph' && parents && parents.length >= 3) {
            parents[1] = bbox[0]; // Set to left edge of bounding box
            parents[2] = bbox[2]; // Set to right edge of bounding box
          }
        }
        
        // 2. Softer colors for axes and arrows (Slate instead of harsh black)
        // Add double-headed arrows and labels for x/y axes dynamically
        if (type === 'arrow' || type === 'line' || type === 'axis') {
          const originalColor = attributes.strokeColor || 'black';
          if (originalColor === 'black' || originalColor === '#000' || originalColor === '#000000') {
            // Check if it's the x-axis: horizontal line at y=0
            const isXAxis = parents && parents[0] && parents[1] && 
                            Math.abs(parents[0][1]) < 0.001 && Math.abs(parents[1][1]) < 0.001;
            
            // Check if it's the y-axis: vertical line at x=0
            const isYAxis = parents && parents[0] && parents[1] && 
                            Math.abs(parents[0][0]) < 0.001 && Math.abs(parents[1][0]) < 0.001;

            attributes = {
              ...attributes,
              strokeColor: '#64748b', // Slate 500
              strokeWidth: attributes.strokeWidth || 1.2,
            };

            if (isXAxis) {
              attributes.firstArrow = true;
              attributes.lastArrow = true;
              
              // Automatically label x-axis near the positive end
              const xPos = parents[1][0];
              const xLabelOffset = dx * 0.03;
              board.create('text', [xPos - xLabelOffset, dy * 0.04, 'x'], {
                fixed: true,
                fontSize: 12,
                fontFamily: '"Outfit", "Inter", sans-serif',
                strokeColor: '#64748b',
                fontWeight: 'bold',
              });
            }

            if (isYAxis) {
              attributes.firstArrow = true;
              attributes.lastArrow = true;

              // Automatically label y-axis near the positive end
              const yPos = parents[1][1];
              const yLabelOffset = dy * 0.03;
              board.create('text', [dx * 0.03, yPos - yLabelOffset, 'y'], {
                fixed: true,
                fontSize: 12,
                fontFamily: '"Outfit", "Inter", sans-serif',
                strokeColor: '#64748b',
                fontWeight: 'bold',
              });
            }

            // Label Origin (O) once
            if ((isXAxis || isYAxis) && !board._originLabeled) {
              board._originLabeled = true;
              // Origin label positioned slightly down-left of (0,0)
              board.create('text', [-dx * 0.03, -dy * 0.04, 'O'], {
                fixed: true,
                fontSize: 11,
                fontFamily: '"Outfit", "Inter", sans-serif',
                strokeColor: '#64748b',
                fontWeight: 'bold',
              });
            }
          }
        }

        // 3. Keep explicit points visible & styled premium (unified theme color)
        if (type === 'point') {
          // Unified color: use the theme Slate (#64748b) to match curves and axes
          let mappedColor = '#64748b'; 
          
          const labelAttrs = attributes.label || {};
          const pointAttributes = {
            fixed: true,
            highlight: false,
            showInfobox: false,
            ...attributes,
            color: mappedColor,
            strokeColor: mappedColor,
            fillColor: mappedColor,
            size: attributes.size || 2.2, // Smaller point size as requested by the user
            visible: attributes.visible !== false,
            withLabel: attributes.withLabel !== undefined ? attributes.withLabel : (attributes.name ? true : false),
            label: {
              fontSize: 11,
              fontFamily: '"Outfit", "Inter", sans-serif',
              strokeColor: '#475569', // Dark Slate for unified labels
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
