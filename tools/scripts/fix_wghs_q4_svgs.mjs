import fs from 'fs';
import path from 'path';

const file = '/Users/andrewkim/Desktop/sapere1/content/chapters/y7-12.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const jsxFig1 = {
  script: `
    const A = board.create('point', [0, 0], { visible: false });
    const B = board.create('point', [6, 0], { visible: false });
    const C = board.create('point', [3, 8.24], { visible: false });
    
    const poly = board.create('polygon', [A, B, C], {
      borders: { strokeWidth: 3, strokeColor: '#34445a' },
      fillColor: '#dceafe', fillOpacity: 1
    });
    
    board.create('angle', [B, A, C], { radius: 1.5, name: '70&deg;', fillColor: 'none', strokeColor: '#34445a', strokeWidth: 2 });
    board.create('angle', [C, B, A], { radius: 1.5, name: 'b&deg;', fillColor: 'none', strokeColor: '#34445a', strokeWidth: 2 });
    board.create('angle', [A, C, B], { radius: 1.5, name: 'a&deg;', fillColor: 'none', strokeColor: '#34445a', strokeWidth: 2 });
    
    board.create('text', [0.8, 4.5, '7 cm'], { fontSize: 18, cssClass: 'jsxgraph-label' });
    board.create('text', [4.2, 4.5, '7 cm'], { fontSize: 18, cssClass: 'jsxgraph-label' });
    
    board.create('hatch', [poly.borders[2]], { face: '|', strokeWidth: 3, strokeColor: '#34445a' });
    board.create('hatch', [poly.borders[1]], { face: '|', strokeWidth: 3, strokeColor: '#34445a' });
  `,
  boundingBox: [-1.5, 10, 7.5, -1]
};

const jsxFig2 = {
  script: `
    const A = board.create('point', [1.9, 1.8], { visible: false });
    const B = board.create('point', [4.55, 2.95], { visible: false });
    const C = board.create('point', [5.2, 0.65], { visible: false });
    const D = board.create('point', [2.55, 0.65], { visible: false });
    
    const poly = board.create('polygon', [A, B, C, D], {
      borders: { strokeWidth: 3, strokeColor: '#34445a' },
      fillColor: '#dceafe', fillOpacity: 1
    });
    
    board.create('angle', [D, A, B], { radius: 0.5, name: '87&deg;', fillColor: 'none', strokeColor: '#e28a00', strokeWidth: 3 });
    board.create('angle', [B, A, D], { radius: 0.7, name: 'c&deg;', fillColor: 'none', strokeColor: '#6457e8', strokeWidth: 3 });
    board.create('angle', [A, B, C], { radius: 0.5, name: '90&deg;', fillColor: 'none', strokeColor: '#e28a00', strokeWidth: 3, type: 'square' });
    board.create('angle', [B, C, D], { radius: 0.5, name: 'd&deg;', fillColor: 'none', strokeColor: 'transparent' });
    board.create('angle', [C, D, A], { radius: 0.5, name: '110&deg;', fillColor: 'none', strokeColor: '#e28a00', strokeWidth: 3 });
  `,
  boundingBox: [0.5, 4, 6.5, 0]
};

const jsxFig3 = {
  script: `
    const A = board.create('point', [0.9, 0.9], { visible: false });
    const B = board.create('point', [6.5, 0.9], { visible: false });
    board.create('line', [A, B], { straightFirst: false, straightLast: false, strokeWidth: 3, strokeColor: '#34445a' });
    
    const D = board.create('point', [3.5, 0.9], { visible: false });
    const E = board.create('point', [5.9, 0.9], { visible: false });
    const C = board.create('point', [2.25, 3.05], { visible: false });
    
    const poly = board.create('polygon', [D, E, C], {
      borders: { strokeWidth: 3, strokeColor: '#34445a' },
      fillColor: 'transparent', fillOpacity: 1
    });
    
    board.create('angle', [E, D, C], { radius: 0.5, name: '120&deg;', fillColor: 'none', strokeColor: '#e28a00', strokeWidth: 3 });
    board.create('angle', [C, D, A], { radius: 0.5, name: 'e&deg;', fillColor: 'none', strokeColor: '#e28a00', strokeWidth: 3 });
    board.create('angle', [C, E, D], { radius: 0.5, name: '30&deg;', fillColor: 'none', strokeColor: 'transparent' });
  `,
  boundingBox: [0, 4, 7, 0]
};

let changed = false;
for (const topic of data.topics) {
  for (const q of topic.questions) {
    if (q.id === 'wghs-y7-2013-t3-g-q4') {
      for (const p of q.parts) {
        if (p.id === 'wghs-y7-2013-t3-g-q4a' || p.id === 'wghs-y7-2013-t3-g-q4b') {
          p.figure = { jsxGraph: jsxFig1 };
          changed = true;
        } else if (p.id === 'wghs-y7-2013-t3-g-q4c' || p.id === 'wghs-y7-2013-t3-g-q4d') {
          p.figure = { jsxGraph: jsxFig2 };
          changed = true;
        } else if (p.id === 'wghs-y7-2013-t3-g-q4e') {
          p.figure = { jsxGraph: jsxFig3 };
          changed = true;
        }
      }
    }
  }
}

if (changed) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log('Successfully updated wghs-y7-2013-t3-g-q4 figures to use JSXGraph.');
} else {
  console.log('No matching questions found.');
}
