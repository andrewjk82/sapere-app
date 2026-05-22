import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

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

  return (
    <div 
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
