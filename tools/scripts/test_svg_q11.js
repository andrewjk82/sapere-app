const fs = require('fs');

const R = 5;
const px = 3, py = 4;
const bound = 7;

let grid = '';
for (let i = -bound; i <= bound; i++) {
  grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
}

// viewbox to show y from -2 to 7. With scale(1, -1), SVG y is -7 to 2.
const viewBoxMinX = -bound;
const viewBoxMinY = -7;
const viewBoxWidth = bound * 2;
const viewBoxHeight = 9;

const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="200" viewBox="${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth} ${viewBoxHeight}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <!-- x-axis -->
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="-2" x2="0" y2="7" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- semicircle (upper half). M -R,0 A R,R 0 0,0 R,0 draws upper half when y is flipped! 
         Wait, A rx ry x-axis-rotation large-arc-flag sweep-flag x y.
         sweep-flag 0 goes counter-clockwise in SVG (which is clockwise in math).
         Let's just use a path that goes from R,0 to -R,0.
         In math coords: M 5 0 A 5 5 0 0 0 -5 0.
    -->
    <path d="M ${R} 0 A ${R} ${R} 0 0 0 ${-R} 0" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1"/>
    
    <!-- lines PA and PB -->
    <line x1="${px}" y1="${py}" x2="${-R}" y2="0" stroke="#ef4444" stroke-width="0.1"/>
    <line x1="${px}" y1="${py}" x2="${R}" y2="0" stroke="#10b981" stroke-width="0.1"/>
    
    <!-- right angle marker at P -->
    <!-- direction vector from P to A is (-8, -4), unit is (-2/sqrt(5), -1/sqrt(5)) -->
    <!-- direction vector from P to B is (2, -4), unit is (1/sqrt(5), -2/sqrt(5)) -->
    <!-- Let's just draw a small polyline for the right angle manually -->
    <polyline points="2.6,3.2 3.4,2.8 3.8,3.6" fill="none" stroke="#f59e0b" stroke-width="0.1"/>
    
    <!-- Points -->
    <circle cx="${-R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${px}" cy="${py}" r="0.2" fill="#ef4444"/>
    <circle cx="0" cy="0" r="0.15" fill="#94a3b8"/>
  </g>
  <!-- Labels (no flip) -->
  <text x="${-R-1.5}" y="1" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−R, 0)</text>
  <text x="${R+0.3}" y="1" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(R, 0)</text>
  <text x="${px+0.3}" y="${-py - 0.3}" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(x, y)</text>
  <text x="-0.5" y="1" font-size="0.75" font-family="sans-serif" fill="#94a3b8">O</text>
</svg>
</div>`;

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/test_svg.html', svg);
