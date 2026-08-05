# JSXGraph Patterns for Sapere

## How the Renderer Works

Sapere uses `SvgGraph.jsx` which **does NOT use the real JSXGraph library**.
Instead, it runs the JSXGraph script string via `new Function('board', 'JXG', script)`
against a **mock board object** that collects `create()` calls. The mock then
renders the collected elements as an SVG.

### Supported Element Types
- `functiongraph` — function plots (most common)
- `curve` — parametric curves
- `arrow` — arrows (used for axes)
- `point` — labeled points
- `text` — text labels
- `line` / `segment` — straight lines
- `polygon` — filled regions
- `integral` — shaded area under a curve
- `circle` — circles (centre + radius)

### ⚠️ NOT Supported
- `slider`, `angle`, `arc`, `sector` — these will be silently ignored
- Complex JXG methods like `board.on()`, event listeners

---

## Script String Format

### ✅ Correct (real newlines)
```javascript
script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return x*x; }, -5, 5], {strokeColor:'blue',strokeWidth:2});
board.unsuspendUpdate();`
```

### ❌ BROKEN (literal \\n stored in Firestore)
```javascript
// This happens when JSON.stringify double-escapes the newlines
script: "board.suspendUpdate();\\nboard.create(..."
// SvgGraph's new Function() will throw SyntaxError!
```

### Prevention
- Always use backtick template literals in seed files
- When writing to Firestore via Node.js scripts, ensure the script
  string contains actual `\n` characters, not the 2-char sequence `\\n`

---

## Common Patterns

### 1. Basic Function Graph (Question Stem)
```javascript
board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black'});
board.create('functiongraph', [function(x){
  return 0.1*(x+2)*(x+2)*(3-x) + 0.5;
}, -5, 3.5], {strokeColor:'blue', strokeWidth:2});
board.unsuspendUpdate();
```

### 2. Comparative Graph (Solution — Original vs Transformed)
```javascript
board.suspendUpdate();
// Axes
board.create('arrow', [[-7,0],[5,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black', strokeWidth:1});

// Original: grey dashed
board.create('functiongraph', [function(x){
  return 0.1*(x+2)*(x+2)*(3-x) + 0.5;
}, -5, 4], {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('text', [2, 3, 'y = f(x)'], {color:'#94a3b8'});

// Transformed: red solid
board.create('functiongraph', [function(x){
  return 0.1*(x+4)*(x+4)*(3-(x+2)) + 0.5;
}, -7, 2], {strokeColor:'red', strokeWidth:2});
board.create('text', [-4, 4, 'y = f(x+2)'], {color:'red'});

// Shift arrows: green dashed
board.create('arrow', [[0,1.7], [-2,1.7]],
  {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();
```

### 3. Multiple Functions on Same Axes
Color order: indigo → red → green
```javascript
board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,5]], {strokeColor:'black'});

// Function 1 — Indigo
board.create('functiongraph', [function(x){ return 3*x; }, -6, 6],
  {strokeColor:'#6366f1', strokeWidth:2});
board.create('text', [1, 2, 'y = 3x'], {color:'#6366f1'});

// Function 2 — Red
board.create('functiongraph', [function(x){ return 3*x + 4; }, -6, 6],
  {strokeColor:'#f43f5e', strokeWidth:2});
board.create('text', [-1.5, 1, 'y = 3x+4'], {color:'#f43f5e'});

// Function 3 — Green
board.create('functiongraph', [function(x){ return 3*x - 3; }, -6, 6],
  {strokeColor:'#10b981', strokeWidth:2});
board.create('text', [1.5, 0, 'y = 3x-3'], {color:'#10b981'});

board.unsuspendUpdate();
```

### 4. Circle
```javascript
board.create('circle', [[2, 0], 2],
  {strokeColor:'#6366f1', strokeWidth:2, fillColor:'none'});
```
Note: `circle` takes `[centre_array, radius_number]`

### 5. Labeled Points
```javascript
board.create('point', [3, -2],
  {name:'(3,-2)', strokeColor:'red', fillColor:'red', size:3});
```

---

## Boundingbox Guide

`boundingbox: [xMin, yMax, xMax, yMin]`

| Graph Type | Suggested Boundingbox |
|------------|-----------------------|
| Standard function | `[-5, 5, 5, -3]` |
| Wide horizontal (dilation) | `[-10, 4, 10, -2]` |
| Tall vertical (3f(x)) | `[-5, 8, 5, -4]` |
| Circle (radius 2) | `[-5, 5, 5, -5]` |
| Multiple lines | `[-6, 6, 6, -6]` |

---

## Transformation Cheat Sheet

| Transformation | JSXGraph Expression |
|----------------|---------------------|
| `f(x + a)` shift left a | Replace `x` with `(x+a)` in original |
| `f(x - a)` shift right a | Replace `x` with `(x-a)` in original |
| `f(x) + a` shift up a | Add `a` to original output |
| `f(x) - a` shift down a | Subtract `a` from original output |
| `f(-x)` reflect y-axis | Replace `x` with `-x` in original |
| `-f(x)` reflect x-axis | Negate entire original output |
| `af(x)` vertical stretch | Multiply original output by `a` |
| `f(x/a)` horizontal stretch | Replace `x` with `x/a` in original |
| `f(ax)` horizontal compress | Replace `x` with `ax` in original |
