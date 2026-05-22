// Helper to generate stringified JSXGraph scripts that can be safely stored in Firestore

export const generateIntersectingLinesScript = (labels) => {
  return `
    // Points
    var p1 = board.create('point', [-3, 0], {visible:false});
    var p2 = board.create('point', [3, 0], {visible:false});
    var p3 = board.create('point', [-2, -3], {visible:false});
    var p4 = board.create('point', [2, 3], {visible:false});
    var intersection = board.create('intersection', [
      board.create('line', [p1, p2], {strokeColor: '#0f172a', strokeWidth: 2}),
      board.create('line', [p3, p4], {strokeColor: '#0f172a', strokeWidth: 2})
    ], {visible:false});

    // Angle top right
    if ("${labels[0]}") {
      var a1 = board.create('angle', [p2, intersection, p4], {
        radius: 1.5, name: "${labels[0]}", 
        color: '#333', fillColor: 'transparent'
      });
    }
    // Angle top left
    if ("${labels[1]}") {
      var a2 = board.create('angle', [p4, intersection, p1], {
        radius: 1.5, name: "${labels[1]}", 
        color: '#333', fillColor: 'transparent'
      });
    }
    // Angle bottom left
    if ("${labels[2]}") {
      var a3 = board.create('angle', [p1, intersection, p3], {
        radius: 1.5, name: "${labels[2]}", 
        color: '#333', fillColor: 'transparent'
      });
    }
    // Angle bottom right
    if ("${labels[3]}") {
      var a4 = board.create('angle', [p3, intersection, p2], {
        radius: 1.5, name: "${labels[3]}", 
        color: '#333', fillColor: 'transparent'
      });
    }
  `;
};

export const generateTriangleScript = (labels) => {
  return `
    var A = board.create('point', [-2, -2], {visible:false});
    var B = board.create('point', [2, -2], {visible:false});
    var C = board.create('point', [0, 2], {visible:false});
    var poly = board.create('polygon', [A, B, C], {
      borders: {strokeColor: '#0f172a', strokeWidth: 2}, 
      fillColor: 'transparent'
    });

    if ("${labels[0]}") {
      board.create('angle', [A, C, B], {radius: 1.2, name: "${labels[0]}", color: '#333', fillColor: 'transparent'});
    }
    if ("${labels[1]}") {
      board.create('angle', [B, A, C], {radius: 1.2, name: "${labels[1]}", color: '#333', fillColor: 'transparent'});
    }
    if ("${labels[2]}") {
      board.create('angle', [C, B, A], {radius: 1.2, name: "${labels[2]}", color: '#333', fillColor: 'transparent'});
    }
  `;
};
