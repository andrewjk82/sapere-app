export const Y9_CH7A_QUESTIONS = [
  {
    "id": "y9-7a-1a",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $15°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Acute",
    "graphData": null
  },
  {
    "id": "y9-7a-1b",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $163°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Obtuse",
    "graphData": null
  },
  {
    "id": "y9-7a-1c",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $244°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Reflex",
    "graphData": null
  },
  {
    "id": "y9-7a-1d",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $90°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Right",
    "graphData": null
  },
  {
    "id": "y9-7a-1e",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $360°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Revolution",
    "graphData": null
  },
  {
    "id": "y9-7a-1f",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Classify this angle using the standard terms: $180°$",
    "opts": [
      "Acute",
      "Right",
      "Obtuse",
      "Straight",
      "Reflex",
      "Revolution"
    ],
    "solution": "Straight",
    "graphData": null
  },
  {
    "id": "y9-7a-1g",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the complement of $10°$.",
    "opts": [
      "80",
      "5",
      "100",
      "90"
    ],
    "solution": "80",
    "graphData": null
  },
  {
    "id": "y9-7a-1h",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the complement of $45°$.",
    "opts": [
      "45",
      "40",
      "135",
      "55"
    ],
    "solution": "45",
    "graphData": null
  },
  {
    "id": "y9-7a-1i",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the complement of $88°$.",
    "opts": [
      "2",
      "83",
      "178",
      "12"
    ],
    "solution": "2",
    "graphData": null
  },
  {
    "id": "y9-7a-1j",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the supplement of $10°$.",
    "opts": [
      "170",
      "0",
      "-80",
      "190"
    ],
    "solution": "170",
    "graphData": null
  },
  {
    "id": "y9-7a-1k",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the supplement of $123°$.",
    "opts": [
      "57",
      "113",
      "33",
      "77"
    ],
    "solution": "57",
    "graphData": null
  },
  {
    "id": "y9-7a-1l",
    "c": "7A",
    "t": "Review of angles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Write down the supplement of $175°$.",
    "opts": [
      "5",
      "165",
      "85",
      "25"
    ],
    "solution": "5",
    "graphData": null
  },
  {
    "id": "y9-7a-2a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $θ$, giving reasons.",
    "opts": null,
    "solution": "$θ = 125°$ (angles at a point)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p0 = board.create('point', [0,0], {visible:false});\n  var p1 = board.create('point', [0, 4], {visible:false});\n  var p2 = board.create('point', [3, -3], {visible:false});\n  var p3 = board.create('point', [-3, -3], {visible:false});\n  board.create('segment', [p0, p1], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [p0, p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [p0, p3], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('angle', [p2, p0, p1], {radius: 1.5, name: \"145°\", fillColor: 'transparent'});\n  board.create('angle', [p1, p0, p3], {radius: 1.5, name: \"90°\", fillColor: 'transparent'}); // Right angle mark via options if needed, but simple name is fine\n  board.create('angle', [p3, p0, p2], {radius: 1.5, name: \"θ\", fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-2b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $α$ and $β$, giving reasons.",
    "opts": null,
    "solution": "$α = 115°, β = 65°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p1 = board.create('point', [-4, -2], {visible:false});\n  var p2 = board.create('point', [4, 2], {visible:false});\n  var p3 = board.create('point', [-2, 4], {visible:false});\n  var p4 = board.create('point', [2, -4], {visible:false});\n  var intersection = board.create('intersection', [\n    board.create('line', [p1, p2], {strokeColor: '#1e293b', strokeWidth: 2}),\n    board.create('line', [p3, p4], {strokeColor: '#1e293b', strokeWidth: 2})\n  ], {visible:false});\n\n  if (\"α\") board.create('angle', [p2, intersection, p3], {radius: 1.5, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [p3, intersection, p1], {radius: 1.5, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"115°\") board.create('angle', [p1, intersection, p4], {radius: 1.5, name: \"115°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [p4, intersection, p2], {radius: 1.5, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-2c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $α$, giving reasons (right angle).",
    "opts": null,
    "solution": "$α = 22.5°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p1 = board.create('point', [-4, -2], {visible:false});\n  var p2 = board.create('point', [4, 2], {visible:false});\n  var p3 = board.create('point', [-2, 4], {visible:false});\n  var p4 = board.create('point', [2, -4], {visible:false});\n  var intersection = board.create('intersection', [\n    board.create('line', [p1, p2], {strokeColor: '#1e293b', strokeWidth: 2}),\n    board.create('line', [p3, p4], {strokeColor: '#1e293b', strokeWidth: 2})\n  ], {visible:false});\n\n  if (\"3α\") board.create('angle', [p2, intersection, p3], {radius: 1.5, name: \"3α\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [p3, intersection, p1], {radius: 1.5, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [p1, intersection, p4], {radius: 1.5, name: \"90°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [p4, intersection, p2], {radius: 1.5, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-2d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $θ$, giving reasons.",
    "opts": null,
    "solution": "$θ = 30°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p1 = board.create('point', [-4, -2], {visible:false});\n  var p2 = board.create('point', [4, 2], {visible:false});\n  var p3 = board.create('point', [-2, 4], {visible:false});\n  var p4 = board.create('point', [2, -4], {visible:false});\n  var intersection = board.create('intersection', [\n    board.create('line', [p1, p2], {strokeColor: '#1e293b', strokeWidth: 2}),\n    board.create('line', [p3, p4], {strokeColor: '#1e293b', strokeWidth: 2})\n  ], {visible:false});\n\n  if (\"\") board.create('angle', [p2, intersection, p3], {radius: 1.5, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"60°\") board.create('angle', [p3, intersection, p1], {radius: 1.5, name: \"60°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [p1, intersection, p4], {radius: 1.5, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [p4, intersection, p2], {radius: 1.5, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-2e",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $θ$, giving reasons.",
    "opts": null,
    "solution": "$θ = 45°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p1 = board.create('point', [-4, -2], {visible:false});\n  var p2 = board.create('point', [4, 2], {visible:false});\n  var p3 = board.create('point', [-2, 4], {visible:false});\n  var p4 = board.create('point', [2, -4], {visible:false});\n  var intersection = board.create('intersection', [\n    board.create('line', [p1, p2], {strokeColor: '#1e293b', strokeWidth: 2}),\n    board.create('line', [p3, p4], {strokeColor: '#1e293b', strokeWidth: 2})\n  ], {visible:false});\n\n  if (\"θ\") board.create('angle', [p2, intersection, p3], {radius: 1.5, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [p3, intersection, p1], {radius: 1.5, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [p1, intersection, p4], {radius: 1.5, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [p4, intersection, p2], {radius: 1.5, name: \"θ\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-2f",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find $α$, giving reasons.",
    "opts": null,
    "solution": "$α = 15°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var p1 = board.create('point', [-4, -2], {visible:false});\n  var p2 = board.create('point', [4, 2], {visible:false});\n  var p3 = board.create('point', [-2, 4], {visible:false});\n  var p4 = board.create('point', [2, -4], {visible:false});\n  var intersection = board.create('intersection', [\n    board.create('line', [p1, p2], {strokeColor: '#1e293b', strokeWidth: 2}),\n    board.create('line', [p3, p4], {strokeColor: '#1e293b', strokeWidth: 2})\n  ], {visible:false});\n\n  if (\"3α\") board.create('angle', [p2, intersection, p3], {radius: 1.5, name: \"3α\", color: '#333', fillColor: 'transparent'});\n  if (\"2α\") board.create('angle', [p3, intersection, p1], {radius: 1.5, name: \"2α\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [p1, intersection, p4], {radius: 1.5, name: \"90°\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [p4, intersection, p2], {radius: 1.5, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$, giving reasons.",
    "opts": null,
    "solution": "$α = 135°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"135°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"135°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$, giving reasons.",
    "opts": null,
    "solution": "$α = 110°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"α\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"110°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"110°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$ and $β$, giving reasons.",
    "opts": null,
    "solution": "$α = 105°, β = 75°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"α\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"105°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"105°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$, $β$, $γ$.",
    "opts": null,
    "solution": "$α=110°, β=70°, γ=110°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [2, -2], {visible:false});\n  var C = board.create('point', [3, 2], {visible:false});\n  var D = board.create('point', [-2, 2], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"β\") board.create('angle', [B, A, D], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"70°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"70°\", color: '#333', fillColor: 'transparent'});\n  if (\"γ\") board.create('angle', [D, C, B], {radius: 1.2, name: \"γ\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [A, D, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3e",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $θ$, giving reasons.",
    "opts": null,
    "solution": "$θ = 60°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"2θ\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"2θ\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-3f",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $θ$, giving reasons.",
    "opts": null,
    "solution": "$θ = 85°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"55°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"55°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"30°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"30°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "AB || CD (alternate angles equal)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"38°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"38°\", color: '#333', fillColor: 'transparent'});\n  if (\"38°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"38°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "XY || WZ (corresponding angles equal)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"110°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"110°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"110°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"110°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "PQ || RS (co-interior sum to 180)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"90°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"90°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"90°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "AB || CD (co-interior sum to $180°$)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"80°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"80°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"100°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"100°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4e",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "KL || NO (alternate angles are $50°$)",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"85°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"85°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"45°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"45°\", color: '#333', fillColor: 'transparent'});\n  if (\"135°\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"135°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-4f",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Name parallel lines, giving reasons.",
    "opts": null,
    "solution": "AD || BC",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [2, 2], {visible:false});\n  var D = board.create('point', [-2, 3], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"95°\") board.create('angle', [B, A, D], {radius: 1.2, name: \"95°\", color: '#333', fillColor: 'transparent'});\n  if (\"85°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"85°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [D, C, B], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n  if (\"85°\") board.create('angle', [A, D, C], {radius: 1.2, name: \"85°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-5a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $x, y, z$.",
    "opts": null,
    "solution": "$x=50°, y=50°, z=80°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"x\") board.create('angle', [B, A, C], {radius: 1.2, name: \"x\", color: '#333', fillColor: 'transparent'});\n  if (\"y\") board.create('angle', [C, B, A], {radius: 1.2, name: \"y\", color: '#333', fillColor: 'transparent'});\n  if (\"80°\") board.create('angle', [A, C, B], {radius: 1.2, name: \"80°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-5b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $x, y$.",
    "opts": null,
    "solution": "$x=115°, y=65°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"x\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"x\", color: '#333', fillColor: 'transparent'});\n  if (\"y\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"y\", color: '#333', fillColor: 'transparent'});\n  if (\"65°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"65°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-5c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $x, y$.",
    "opts": null,
    "solution": "$x=60°, y=30°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"x\") board.create('angle', [B, A, C], {radius: 1.2, name: \"x\", color: '#333', fillColor: 'transparent'});\n  if (\"y\") board.create('angle', [C, B, A], {radius: 1.2, name: \"y\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [A, C, B], {radius: 1.2, name: \"90°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-5d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α, β$.",
    "opts": null,
    "solution": "$α=120°, β=60°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"α\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"60°\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"60°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$ and $β$, giving reasons.",
    "opts": null,
    "solution": "$α = 80°, β = 20°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [0, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  // Tick marks for isosceles\n  var midAC = board.create('midpoint', [A, C], {visible:false});\n  var midBC = board.create('midpoint', [B, C], {visible:false});\n  board.create('segment', [A, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [B, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  // JSXGraph ticks:\n  board.create('ticks', [board.create('segment', [A, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n  board.create('ticks', [board.create('segment', [B, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n\n  if (\"β\") board.create('angle', [B, A, C], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"80°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"80°\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [A, C, B], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$ and $β$, giving reasons.",
    "opts": null,
    "solution": "$α = 70°, β = 70°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [0, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  // Tick marks for isosceles\n  var midAC = board.create('midpoint', [A, C], {visible:false});\n  var midBC = board.create('midpoint', [B, C], {visible:false});\n  board.create('segment', [A, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [B, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  // JSXGraph ticks:\n  board.create('ticks', [board.create('segment', [A, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n  board.create('ticks', [board.create('segment', [B, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n\n  if (\"40°\") board.create('angle', [B, A, C], {radius: 1.2, name: \"40°\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [C, B, A], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [A, C, B], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $x$, giving reasons (isosceles).",
    "opts": null,
    "solution": "$x = 2$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [0, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  // Tick marks for isosceles\n  var midAC = board.create('midpoint', [A, C], {visible:false});\n  var midBC = board.create('midpoint', [B, C], {visible:false});\n  board.create('segment', [A, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [B, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  // JSXGraph ticks:\n  board.create('ticks', [board.create('segment', [A, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n  board.create('ticks', [board.create('segment', [B, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n\n  if (\"80°\") board.create('angle', [B, A, C], {radius: 1.2, name: \"80°\", color: '#333', fillColor: 'transparent'});\n  if (\"50°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"50°\", color: '#333', fillColor: 'transparent'});\n  if (\"50°\") board.create('angle', [A, C, B], {radius: 1.2, name: \"50°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α$ and $β$, giving reasons.",
    "opts": null,
    "solution": "$α=45°, β=45°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [2, 2], {visible:false});\n  var D = board.create('point', [-2, 3], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"α\") board.create('angle', [B, A, D], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [C, B, A], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [D, C, B], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [A, D, C], {radius: 1.2, name: \"90°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6e",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α, x, y$, giving reasons.",
    "opts": null,
    "solution": "$α=60°, x=6, y=2$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [0, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  // Tick marks for isosceles\n  var midAC = board.create('midpoint', [A, C], {visible:false});\n  var midBC = board.create('midpoint', [B, C], {visible:false});\n  board.create('segment', [A, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [B, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  // JSXGraph ticks:\n  board.create('ticks', [board.create('segment', [A, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n  board.create('ticks', [board.create('segment', [B, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n\n  if (\"α\") board.create('angle', [B, A, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [C, B, A], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [A, C, B], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-6f",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find $α, β, γ$.",
    "opts": null,
    "solution": "$α=40°, β=40°, γ=100°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [2, 2], {visible:false});\n  var D = board.create('point', [-2, 3], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"80°\") board.create('angle', [B, A, D], {radius: 1.2, name: \"80°\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [C, B, A], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"γ\") board.create('angle', [D, C, B], {radius: 1.2, name: \"γ\", color: '#333', fillColor: 'transparent'});\n  if (\"40°\") board.create('angle', [A, D, C], {radius: 1.2, name: \"40°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-7a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Use a construction to find $θ$.",
    "opts": null,
    "solution": "$θ = 115°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"50°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"50°\", color: '#333', fillColor: 'transparent'});\n  if (\"65°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"65°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-7b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Use a construction to find $α$.",
    "opts": null,
    "solution": "$α = 130°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"45°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"45°\", color: '#333', fillColor: 'transparent'});\n  if (\"140°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"140°\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-7c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Use a construction to find $θ$.",
    "opts": null,
    "solution": "$θ = 120°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var l1p1 = board.create('point', [-4, 2], {visible:false});\n  var l1p2 = board.create('point', [4, 2], {visible:false});\n  var l2p1 = board.create('point', [-4, -2], {visible:false});\n  var l2p2 = board.create('point', [4, -2], {visible:false});\n  board.create('line', [l1p1, l1p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('line', [l2p1, l2p2], {strokeColor: '#1e293b', strokeWidth: 2});\n  \n  var t1 = board.create('point', [-2, 4], {visible:false});\n  var t2 = board.create('point', [2, -4], {visible:false});\n  board.create('line', [t1, t2], {strokeColor: '#1e293b', strokeWidth: 2});\n\n  var i1 = board.create('intersection', [board.create('line',[l1p1,l1p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n  var i2 = board.create('intersection', [board.create('line',[l2p1,l2p2],{visible:false}), board.create('line',[t1,t2],{visible:false})], {visible:false});\n\n  if (\"25°\") board.create('angle', [l1p2, i1, t1], {radius: 1.2, name: \"25°\", color: '#333', fillColor: 'transparent'});\n  if (\"90°\") board.create('angle', [l2p2, i2, i1], {radius: 1.2, name: \"90°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [i1, i2, l2p1], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [l1p1, i1, i2], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8a",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α, β, γ$.",
    "opts": null,
    "solution": "$α=115°, β=65°, γ=65°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [2, -2], {visible:false});\n  var C = board.create('point', [3, 2], {visible:false});\n  var D = board.create('point', [-2, 2], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"β\") board.create('angle', [B, A, D], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"135°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"135°\", color: '#333', fillColor: 'transparent'});\n  if (\"γ\") board.create('angle', [D, C, B], {radius: 1.2, name: \"γ\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [A, D, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8b",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α, β$.",
    "opts": null,
    "solution": "$α=45°, β=45°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [2, 2], {visible:false});\n  var D = board.create('point', [-2, 3], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"α\") board.create('angle', [B, A, D], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"α\") board.create('angle', [C, B, A], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [D, C, B], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [A, D, C], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8c",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α$.",
    "opts": null,
    "solution": "$α = 55°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [0, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  // Tick marks for isosceles\n  var midAC = board.create('midpoint', [A, C], {visible:false});\n  var midBC = board.create('midpoint', [B, C], {visible:false});\n  board.create('segment', [A, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  board.create('segment', [B, C], {strokeColor: '#1e293b', strokeWidth: 2});\n  // JSXGraph ticks:\n  board.create('ticks', [board.create('segment', [A, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n  board.create('ticks', [board.create('segment', [B, C], {visible:false}), 2], {strokeColor: '#1e293b', tickEndings: [1, 1]});\n\n  if (\"α\") board.create('angle', [B, A, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"40°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"40°\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [A, C, B], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8d",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $θ$.",
    "opts": null,
    "solution": "$θ = 65°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"45°\") board.create('angle', [B, A, C], {radius: 1.2, name: \"45°\", color: '#333', fillColor: 'transparent'});\n  if (\"65°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"65°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [A, C, B], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8e",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $θ$.",
    "opts": null,
    "solution": "$θ = 50°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"35°\") board.create('angle', [B, A, C], {radius: 1.2, name: \"35°\", color: '#333', fillColor: 'transparent'});\n  if (\"θ\") board.create('angle', [C, B, A], {radius: 1.2, name: \"θ\", color: '#333', fillColor: 'transparent'});\n  if (\"\") board.create('angle', [A, C, B], {radius: 1.2, name: \"\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8f",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α, β, x$.",
    "opts": null,
    "solution": "$α=60°, β=30°, x=1$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"α\") board.create('angle', [B, A, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [C, B, A], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"60°\") board.create('angle', [A, C, B], {radius: 1.2, name: \"60°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8g",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α, β, γ$.",
    "opts": null,
    "solution": "$α=60°, β=60°, γ=60°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [3, -2], {visible:false});\n  var C = board.create('point', [-1, 3], {visible:false});\n  board.create('polygon', [A, B, C], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"α\") board.create('angle', [B, A, C], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"60°\") board.create('angle', [C, B, A], {radius: 1.2, name: \"60°\", color: '#333', fillColor: 'transparent'});\n  if (\"γ\") board.create('angle', [A, C, B], {radius: 1.2, name: \"γ\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y9-7a-8h",
    "c": "7A",
    "t": "Review of angles",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $α, β, γ$.",
    "opts": null,
    "solution": "$α=125°, β=55°, γ=125°$",
    "graphData": {
      "jsxGraph": {
        "width": "240px",
        "height": "200px",
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "\n      board.suspendUpdate();\n      // Define styles globally\n      var lineStyle = {strokeColor: '#1e293b', strokeWidth: 2, straightFirst: false, straightLast: false};\n      var angleStyle = {fillColor: 'transparent', strokeColor: '#1e293b', radius: 1.2, name: ''};\n      \n  var A = board.create('point', [-3, -2], {visible:false});\n  var B = board.create('point', [2, -2], {visible:false});\n  var C = board.create('point', [3, 2], {visible:false});\n  var D = board.create('point', [-2, 2], {visible:false});\n  board.create('polygon', [A, B, C, D], {borders: {strokeColor: '#1e293b', strokeWidth: 2}, fillColor: 'transparent'});\n  \n  if (\"α\") board.create('angle', [B, A, D], {radius: 1.2, name: \"α\", color: '#333', fillColor: 'transparent'});\n  if (\"β\") board.create('angle', [C, B, A], {radius: 1.2, name: \"β\", color: '#333', fillColor: 'transparent'});\n  if (\"γ\") board.create('angle', [D, C, B], {radius: 1.2, name: \"γ\", color: '#333', fillColor: 'transparent'});\n  if (\"55°\") board.create('angle', [A, D, C], {radius: 1.2, name: \"55°\", color: '#333', fillColor: 'transparent'});\n\n      board.unsuspendUpdate();\n    "
      }
    }
  }
];
