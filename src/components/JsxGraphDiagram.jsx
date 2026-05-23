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
      const defaultOptions = {
        boundingbox: data.boundingbox || [-5, 5, 5, -5],
        axis: data.axis !== undefined ? data.axis : false,
        showCopyright: false,
        showNavigation: false,
        keepaspectratio: true,
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
      const originalCreate = board.create.bind(board);

      board.create = (elementType, parents, attributes = {}) => {
        if (String(elementType).toLowerCase() !== 'angle') {
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

  return (
    <div 
      id={uniqueId}
      ref={boardRef} 
      className="jxgbox" 
      style={{ 
        width: data.width || '300px', 
        height: data.height || '300px', 
        margin: '0 auto', 
        ...style 
      }} 
    />
  );
};

export default JsxGraphDiagram;
