export const Y12A_CH6_QUESTIONS = [
  {
    "id": "y12a-6a-q1",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Convert \\(5^\\circ\\) to radians in exact form.",
    "opts": [
      "\\(\\dfrac{\\pi}{36}\\)",
      "\\(\\dfrac{\\pi}{30}\\)",
      "\\(\\dfrac{5\\pi}{180}\\) left unsimplified only",
      "\\(\\dfrac{\\pi}{5}\\)"
    ],
    "options": [
      {
        "text": "\\(\\dfrac{\\pi}{36}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{30}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{5\\pi}{180}\\) left unsimplified only",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{5}\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(\\dfrac{\\pi}{36}\\).",
    "solutionSteps": [
      {
        "explanation": "Use \\(180^\\circ = \\pi\\) radians: \\(5^\\circ = 5 \\times \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{180}\\).",
        "workingOut": "\\(\\dfrac{5\\pi}{180}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify by dividing numerator and denominator by 5: \\(\\dfrac{\\pi}{36}\\).",
        "workingOut": "\\(\\dfrac{\\pi}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{\\pi}{36}\\).",
        "workingOut": "\\(\\dfrac{\\pi}{36}\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-6a-q2",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Which statement is correct for the small-angle approximations used in this section?",
    "opts": [
      "If \\(x\\) is small and measured in radians, then \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\).",
      "If \\(x\\) is small and measured in degrees, then \\(\\sin x \\approx x\\).",
      "\\(\\sin x \\approx x\\) is valid for all real \\(x\\).",
      "Only \\(\\cos x \\approx x\\) is used for small angles."
    ],
    "options": [
      {
        "text": "If \\(x\\) is small and measured in radians, then \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\).",
        "imageUrl": null
      },
      {
        "text": "If \\(x\\) is small and measured in degrees, then \\(\\sin x \\approx x\\).",
        "imageUrl": null
      },
      {
        "text": "\\(\\sin x \\approx x\\) is valid for all real \\(x\\).",
        "imageUrl": null
      },
      {
        "text": "Only \\(\\cos x \\approx x\\) is used for small angles.",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "If \\(x\\) is small and measured in radians, then \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\).",
    "solutionSteps": [
      {
        "explanation": "On the unit circle, a small central angle \\(x\\) (radians) has arc length \\(x\\). The vertical chord and the tangent segment are both nearly equal to that arc when \\(x\\) is small.",
        "workingOut": "\\(\\text{arc} = x\\ (\\text{radians})\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 320,
            "boundingbox": [
              -1.2,
              6.2,
              6.4,
              -1.2
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e0e7ff', fillOpacity:0.18, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8});\n    }\n  \n  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});\n  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});\n  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});\n  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});\n  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});\n  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});\n  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Hence the standard approximations: \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) for small \\(x\\) in radians. (Also \\(\\cos x \\approx 1\\), not \\(x\\).)",
        "workingOut": "\\(\\sin x \\approx x,\\quad \\tan x \\approx x\\)",
        "graphData": null
      },
      {
        "explanation": "These fail if \\(x\\) is left in degrees. Final answer: the statement that requires radians.",
        "workingOut": "\\(\\sin x \\approx x\\ (\\text{radians})\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 320,
        "boundingbox": [
          -1.2,
          6.2,
          6.4,
          -1.2
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e0e7ff', fillOpacity:0.18, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8});\n    }\n  \n  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});\n  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});\n  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});\n  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});\n  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});\n  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});\n  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6a-q3",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multi_part",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "This question uses the small-angle approximation for sine near the origin.",
    "answer": "",
    "hint": "Work through the parts in order. Convert degrees to radians before using \\(\\sin x \\approx x\\).",
    "solution": "",
    "solutionSteps": [],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 320,
        "boundingbox": [
          -1.2,
          6.2,
          6.4,
          -1.2
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e0e7ff', fillOpacity:0.18, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8});\n    }\n  \n  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});\n  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});\n  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});\n  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});\n  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});\n  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});\n  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    },
    "subQuestions": [
      {
        "id": "y12a-6a-q3a",
        "topicId": "y12a-6A",
        "chapterId": "y12a-6",
        "c": "6A",
        "t": "The behaviour of sin x near the origin",
        "origin": "seed",
        "isNew": true,
        "requiresManualGrading": false,
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Express \\(3^\\circ\\) in radians.",
        "opts": [
          "\\(\\dfrac{\\pi}{60}\\)",
          "\\(\\dfrac{\\pi}{30}\\)",
          "\\(\\dfrac{3\\pi}{180}\\) simplified as \\(\\dfrac{\\pi}{90}\\)",
          "\\(\\dfrac{60}{\\pi}\\)"
        ],
        "options": [
          {
            "text": "\\(\\dfrac{\\pi}{60}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{\\pi}{30}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{3\\pi}{180}\\) simplified as \\(\\dfrac{\\pi}{90}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{60}{\\pi}\\)",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
        "solution": "The correct answer is \\(\\dfrac{\\pi}{60}\\).",
        "solutionSteps": [
          {
            "explanation": "Given: convert \\(3^\\circ\\) to radians. Strategy: use the exact conversion \\(180^\\circ = \\pi\\) radians, so multiply by \\(\\dfrac{\\pi}{180}\\).",
            "workingOut": "\\(180^\\circ = \\pi\\ \\text{radians}\\",
            "graphData": null
          },
          {
            "explanation": "Multiply: \\(3^\\circ = 3 \\times \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{180}\\).",
            "workingOut": "\\(\\dfrac{3\\pi}{180}\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify the fraction: divide numerator and denominator by 3 to get \\(\\dfrac{\\pi}{60}\\). A common slip is writing \\(\\dfrac{\\pi}{30}\\) (as if converting \\(6^\\circ\\)) or inverting the conversion factor.",
            "workingOut": "\\(\\dfrac{\\pi}{60}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(\\dfrac{\\pi}{60}\\).",
            "workingOut": "\\(\\dfrac{\\pi}{60}\\)",
            "graphData": null
          }
        ],
        "graphData": null
      },
      {
        "id": "y12a-6a-q3b",
        "topicId": "y12a-6A",
        "chapterId": "y12a-6",
        "c": "6A",
        "t": "The behaviour of sin x near the origin",
        "origin": "seed",
        "isNew": true,
        "requiresManualGrading": false,
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "Which statement correctly explains why \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)?",
        "opts": [
          "For small \\(x\\) in radians, \\(\\sin x \\approx x\\). Since \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).",
          "For small \\(x\\) in degrees, \\(\\sin x \\approx x\\), so \\(\\sin 3^\\circ \\approx 3\\).",
          "Always \\(\\sin \\theta = \\theta\\) in any unit, so the value equals the degree measure.",
          "Use \\(\\sin x \\approx \\dfrac{\\pi}{180}\\) for every angle near the origin."
        ],
        "options": [
          {
            "text": "For small \\(x\\) in radians, \\(\\sin x \\approx x\\). Since \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).",
            "imageUrl": null
          },
          {
            "text": "For small \\(x\\) in degrees, \\(\\sin x \\approx x\\), so \\(\\sin 3^\\circ \\approx 3\\).",
            "imageUrl": null
          },
          {
            "text": "Always \\(\\sin \\theta = \\theta\\) in any unit, so the value equals the degree measure.",
            "imageUrl": null
          },
          {
            "text": "Use \\(\\sin x \\approx \\dfrac{\\pi}{180}\\) for every angle near the origin.",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
        "solution": "For small \\(x\\) in radians, \\(\\sin x \\approx x\\). Since \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).",
        "solutionSteps": [
          {
            "explanation": "Key fact (small-angle approximation): when \\(x\\) is measured in radians and is close to 0, \\(\\sin x \\approx x\\). (This fails if \\(x\\) is left in degrees.)",
            "workingOut": "\\(\\sin x \\approx x\\quad (x\\text{ small, in radians})\\",
            "graphData": {
              "jsxGraph": {
                "width": 340,
                "height": 320,
                "boundingbox": [
                  -1.2,
                  6.2,
                  6.4,
                  -1.2
                ],
                "showAxisLabels": false,
                "showGrid": false,
                "script": "board.suspendUpdate(); \n  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e0e7ff', fillOpacity:0.18, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8});\n    }\n  \n  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});\n  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});\n  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});\n  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});\n  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});\n  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});\n  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
              }
            }
          },
          {
            "explanation": "From the previous part, \\(3^\\circ = \\dfrac{\\pi}{60}\\) radians. The angle is small (about 0.052 rad), so the approximation is appropriate.",
            "workingOut": "\\(3^\\circ = \\dfrac{\\pi}{60}\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(\\sin 3^\\circ = \\sin\\!\\left(\\dfrac{\\pi}{60}\\right) \\approx \\dfrac{\\pi}{60}\\). A common mistake is applying \\(\\sin x \\approx x\\) with \\(x\\) still in degrees (which would wrongly give 3).",
            "workingOut": "\\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: the statement that uses radians and \\(\\sin x \\approx x\\).",
            "workingOut": "\\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)",
            "graphData": null
          }
        ],
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 320,
            "boundingbox": [
              -1.2,
              6.2,
              6.4,
              -1.2
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e0e7ff', fillOpacity:0.18, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8});\n    }\n  \n  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});\n  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});\n  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});\n  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});\n  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});\n  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});\n  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});\n  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "id": "y12a-6a-q3c",
        "topicId": "y12a-6A",
        "chapterId": "y12a-6",
        "c": "6A",
        "t": "The behaviour of sin x near the origin",
        "origin": "seed",
        "isNew": true,
        "requiresManualGrading": false,
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "Taking \\(\\pi = 3.142\\), find \\(\\sin 3^\\circ\\) correct to four decimal places, without using the sine key on a calculator.",
        "opts": [
          "\\(0.0524\\)",
          "\\(0.0523\\)",
          "\\(0.0530\\)",
          "\\(0.5240\\)"
        ],
        "options": [
          {
            "text": "\\(0.0524\\)",
            "imageUrl": null
          },
          {
            "text": "\\(0.0523\\)",
            "imageUrl": null
          },
          {
            "text": "\\(0.0530\\)",
            "imageUrl": null
          },
          {
            "text": "\\(0.5240\\)",
            "imageUrl": null
          }
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
        "solution": "The correct answer is \\(0.0524\\).",
        "solutionSteps": [
          {
            "explanation": "From the small-angle result: \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\). Use the given value \\(\\pi = 3.142\\).",
            "workingOut": "\\(\\sin 3^\\circ \\approx \\dfrac{3.142}{60}\\",
            "graphData": null
          },
          {
            "explanation": "Divide: \\(\\dfrac{3.142}{60} = 0.0523666\\ldots\\).",
            "workingOut": "\\(0.0523666\\ldots\\)",
            "graphData": null
          },
          {
            "explanation": "Round to four decimal places: the fifth decimal digit is 6, so round up from 0.0523 to \\(0.0524\\). A common slip is stopping at 0.0523 or shifting the decimal point to 0.524.",
            "workingOut": "\\(0.0524\\)",
            "graphData": null
          },
          {
            "explanation": "Final answer: \\(0.0524\\).",
            "workingOut": "\\(0.0524\\)",
            "graphData": null
          }
        ],
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-6a-q4",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Using \\(\\sin x \\approx x\\) with \\(x\\) in radians, approximate \\(\\sin 2^\\circ\\) to four decimal places. Take \\(\\pi = 3.142\\).",
    "opts": [
      "\\(0.0349\\)",
      "\\(0.0348\\)",
      "\\(0.3490\\)",
      "\\(0.0698\\)"
    ],
    "options": [
      {
        "text": "\\(0.0349\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0.0348\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0.3490\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0.0698\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(0.0349\\).",
    "solutionSteps": [
      {
        "explanation": "Convert: \\(2^\\circ = 2 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{90}\\).",
        "workingOut": "\\(\\dfrac{\\pi}{90}\\)",
        "graphData": null
      },
      {
        "explanation": "Approximate: \\(\\sin 2^\\circ \\approx \\dfrac{\\pi}{90} = \\dfrac{3.142}{90} = 0.034911\\ldots\\).",
        "workingOut": "\\(0.034911\\ldots\\)",
        "graphData": null
      },
      {
        "explanation": "To four decimal places: \\(0.0349\\).",
        "workingOut": "\\(0.0349\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y12a-6a-q5",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A kite string is \\(80\\,\\text{m}\\) long and makes an angle of \\(3^\\circ\\) with the horizontal. Approximately how high is the kite above the ground? Use \\(\\sin x \\approx x\\) (radians) and give the answer to the nearest metre.",
    "opts": [
      "\\(4\\,\\text{m}\\)",
      "\\(3\\,\\text{m}\\)",
      "\\(5\\,\\text{m}\\)",
      "\\(8\\,\\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(4\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(5\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(8\\,\\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(4\\,\\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Height \\(h = 80\\sin 3^\\circ\\). Convert: \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, so \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).",
        "workingOut": "\\(h \\approx 80 \\times \\dfrac{\\pi}{60}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 210,
            "boundingbox": [
              -1.2,
              1.7,
              16.2,
              -0.8
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,0.95];\n  board.create('polygon', [A,B,C], {fillColor:'#fbbf24', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#f59e0b', strokeWidth:2.4});\n  board.create('segment', [A,C], {strokeColor:'#f59e0b', strokeWidth:2.6});\n  board.create('segment', [[13.4,0],[13.4,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.4,0.38],[14,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#f59e0b'});\n  board.create('point', C, {name:'', size:3, color:'#f59e0b'});\n  board.create('text', [6.5, 0.72, '80 m'], {fontSize:13, color:'#b45309'});\n  board.create('text', [14.55, 0.48, 'h'], {fontSize:15, color:'#b45309'});\n  board.create('text', [1.7, 0.1, '3°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [14.3, 1.25, 'kite'], {fontSize:12, color:'#b45309'});\n  board.create('text', [0.15, -0.4, 'holder'], {fontSize:11, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Simplify: \\(h \\approx \\dfrac{80\\pi}{60} = \\dfrac{4\\pi}{3} \\approx \\dfrac{4 \\times 3.1416}{3} \\approx 4.19\\,\\text{m}\\).",
        "workingOut": "\\(4.19\\,\\text{m}\\)",
        "graphData": null
      },
      {
        "explanation": "Nearest metre: \\(4\\,\\text{m}\\).",
        "workingOut": "\\(4\\,\\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 210,
        "boundingbox": [
          -1.2,
          1.7,
          16.2,
          -0.8
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,0.95];\n  board.create('polygon', [A,B,C], {fillColor:'#fbbf24', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#f59e0b', strokeWidth:2.4});\n  board.create('segment', [A,C], {strokeColor:'#f59e0b', strokeWidth:2.6});\n  board.create('segment', [[13.4,0],[13.4,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.4,0.38],[14,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#f59e0b'});\n  board.create('point', C, {name:'', size:3, color:'#f59e0b'});\n  board.create('text', [6.5, 0.72, '80 m'], {fontSize:13, color:'#b45309'});\n  board.create('text', [14.55, 0.48, 'h'], {fontSize:15, color:'#b45309'});\n  board.create('text', [1.7, 0.1, '3°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [14.3, 1.25, 'kite'], {fontSize:12, color:'#b45309'});\n  board.create('text', [0.15, -0.4, 'holder'], {fontSize:11, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6a-q6",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A car travels \\(2\\,\\text{km}\\) up a road inclined at \\(4^\\circ\\) to the horizontal. Through what vertical distance has the car climbed? Use \\(\\sin x \\approx x\\) for small angles in radians, and give your answer correct to the nearest metre.",
    "opts": [
      "\\(140\\,\\text{m}\\)",
      "\\(139\\,\\text{m}\\)",
      "\\(280\\,\\text{m}\\)",
      "\\(70\\,\\text{m}\\)"
    ],
    "options": [
      {
        "text": "\\(140\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(139\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(280\\,\\text{m}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(70\\,\\text{m}\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(140\\,\\text{m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: road length (hypotenuse) \\(2\\,\\text{km} = 2000\\,\\text{m}\\), inclination \\(4^\\circ\\). Unknown: vertical climb \\(h\\). Sketch a right triangle with hypotenuse along the road.",
        "workingOut": "\\(\\text{hyp} = 2000\\,\\text{m},\\quad \\theta = 4^\\circ\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 220,
            "boundingbox": [
              -1.2,
              2,
              16.2,
              -0.9
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,1.2];\n  board.create('polygon', [A,B,C], {fillColor:'#818cf8', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[-0.6,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#6366f1', strokeWidth:2.6});\n  board.create('segment', [C,A], {strokeColor:'#6366f1', strokeWidth:2.6});\n  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#6366f1'});\n  board.create('point', B, {name:'', size:2, color:'#6366f1'});\n  board.create('point', C, {name:'', size:2, color:'#6366f1'});\n  board.create('text', [6.5, 0.85, '2 km (road)'], {fontSize:13, color:'#4f46e5'});\n  board.create('text', [14.55, 0.6, 'h'], {fontSize:15, color:'#4f46e5'});\n  board.create('text', [1.55, 0.12, '4°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [6.5, -0.45, 'horizontal'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "In the right triangle, \\(\\sin 4^\\circ = \\dfrac{h}{2000}\\), so \\(h = 2000\\sin 4^\\circ\\).",
        "workingOut": "\\(h = 2000\\sin 4^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Convert the angle to radians: \\(4^\\circ = 4 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{45}\\). For small angles, \\(\\sin x \\approx x\\) (radians), so \\(\\sin 4^\\circ \\approx \\dfrac{\\pi}{45}\\).",
        "workingOut": "\\(\\sin 4^\\circ \\approx \\dfrac{\\pi}{45}\\)",
        "graphData": null
      },
      {
        "explanation": "Hence \\(h \\approx 2000 \\times \\dfrac{\\pi}{45} = \\dfrac{2000\\pi}{45} = \\dfrac{400\\pi}{9}\\). Using \\(\\pi \\approx 3.1416\\): \\(\\dfrac{400 \\times 3.1416}{9} \\approx 139.63\\,\\text{m}\\).",
        "workingOut": "\\(h \\approx 139.63\\,\\text{m}\\)",
        "graphData": null
      },
      {
        "explanation": "Nearest metre: \\(140\\,\\text{m}\\). A common slip is leaving the answer in kilometres, or using \\(\\tan\\) instead of \\(\\sin\\) with the road length as the adjacent side.",
        "workingOut": "\\(140\\,\\text{m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(140\\,\\text{m}\\).",
        "workingOut": "\\(140\\,\\text{m}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 220,
        "boundingbox": [
          -1.2,
          2,
          16.2,
          -0.9
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,1.2];\n  board.create('polygon', [A,B,C], {fillColor:'#818cf8', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[-0.6,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#6366f1', strokeWidth:2.6});\n  board.create('segment', [C,A], {strokeColor:'#6366f1', strokeWidth:2.6});\n  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#6366f1'});\n  board.create('point', B, {name:'', size:2, color:'#6366f1'});\n  board.create('point', C, {name:'', size:2, color:'#6366f1'});\n  board.create('text', [6.5, 0.85, '2 km (road)'], {fontSize:13, color:'#4f46e5'});\n  board.create('text', [14.55, 0.6, 'h'], {fontSize:15, color:'#4f46e5'});\n  board.create('text', [1.55, 0.12, '4°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [6.5, -0.45, 'horizontal'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6a-q7",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A tower is \\(40\\,\\text{m}\\) high. What angle, correct to the nearest minute, does it subtend at a point \\(5\\,\\text{km}\\) away on level ground? Use \\(\\tan x \\approx x\\) for small \\(x\\) in radians.",
    "opts": [
      "\\(28'\\)",
      "\\(27'\\)",
      "\\(30'\\)",
      "\\(48'\\)"
    ],
    "options": [
      {
        "text": "\\(28'\\)",
        "imageUrl": null
      },
      {
        "text": "\\(27'\\)",
        "imageUrl": null
      },
      {
        "text": "\\(30'\\)",
        "imageUrl": null
      },
      {
        "text": "\\(48'\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(28'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: tower height \\(40\\,\\text{m}\\), horizontal distance \\(5\\,\\text{km} = 5000\\,\\text{m}\\). Let \\(\\theta\\) be the angle subtended at the observer (angle of elevation of the top of the tower).",
        "workingOut": "\\(\\text{opp} = 40,\\quad \\text{adj} = 5000\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 230,
            "boundingbox": [
              -1.2,
              2.5,
              16.2,
              -1
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,1.6];\n  board.create('polygon', [A,B,C], {fillColor:'#38bdf8', fillOpacity:0.22, strokeWidth:0});\n  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#0ea5e9', strokeWidth:3});\n  board.create('segment', [A,C], {strokeColor:'#6366f1', strokeWidth:2.4});\n  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#6366f1'});\n  board.create('point', B, {name:'', size:2, color:'#0ea5e9'});\n  board.create('point', C, {name:'', size:2, color:'#0ea5e9'});\n  board.create('text', [6.5, -0.45, '5 km'], {fontSize:13, color:'#64748b'});\n  board.create('text', [14.55, 0.8, '40 m'], {fontSize:13, color:'#0369a1'});\n  board.create('text', [1.6, 0.12, 'θ'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [14.4, 1.95, 'tower'], {fontSize:12, color:'#0369a1'});\n  board.create('text', [0.1, -0.5, 'observer'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "From the right triangle: \\(\\tan \\theta = \\dfrac{40}{5000} = \\dfrac{1}{125} = 0.008\\).",
        "workingOut": "\\(\\tan \\theta = 0.008\\)",
        "graphData": null
      },
      {
        "explanation": "The angle is small, so in radians \\(\\tan \\theta \\approx \\theta\\). Therefore \\(\\theta \\approx 0.008\\) radians.",
        "workingOut": "\\(\\theta \\approx 0.008\\ \\text{rad}\\)",
        "graphData": null
      },
      {
        "explanation": "Convert to degrees: \\(\\theta \\approx 0.008 \\times \\dfrac{180}{\\pi} \\approx 0.008 \\times 57.296 \\approx 0.4584^\\circ\\).",
        "workingOut": "\\(0.4584^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Convert the decimal part of a degree to minutes: \\(0.4584 \\times 60 \\approx 27.5'\\), which rounds to \\(28'\\) to the nearest minute. A common slip is converting to degrees only, or using \\(\\sin\\) with the wrong side ratio.",
        "workingOut": "\\(28'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(28'\\).",
        "workingOut": "\\(28'\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 230,
        "boundingbox": [
          -1.2,
          2.5,
          16.2,
          -1
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  var A=[0,0], B=[14,0], C=[14,1.6];\n  board.create('polygon', [A,B,C], {fillColor:'#38bdf8', fillOpacity:0.22, strokeWidth:0});\n  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});\n  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});\n  board.create('segment', [B,C], {strokeColor:'#0ea5e9', strokeWidth:3});\n  board.create('segment', [A,C], {strokeColor:'#6366f1', strokeWidth:2.4});\n  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});\n  board.create('point', A, {name:'', size:2, color:'#6366f1'});\n  board.create('point', B, {name:'', size:2, color:'#0ea5e9'});\n  board.create('point', C, {name:'', size:2, color:'#0ea5e9'});\n  board.create('text', [6.5, -0.45, '5 km'], {fontSize:13, color:'#64748b'});\n  board.create('text', [14.55, 0.8, '40 m'], {fontSize:13, color:'#0369a1'});\n  board.create('text', [1.6, 0.12, 'θ'], {fontSize:15, color:'#0f172a'});\n  board.create('text', [14.4, 1.95, 'tower'], {fontSize:12, color:'#0369a1'});\n  board.create('text', [0.1, -0.5, 'observer'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6a-q10",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "The moon subtends an angle of \\(32'\\) at an observation point on Earth, \\(380\\,000\\,\\text{km}\\) away. Treating the moon's diameter as approximately an arc of a circle centred at the observer, find the approximate diameter of the moon to the nearest kilometre.",
    "opts": [
      "\\(3537\\,\\text{km}\\)",
      "\\(3536\\,\\text{km}\\)",
      "\\(3800\\,\\text{km}\\)",
      "\\(3200\\,\\text{km}\\)"
    ],
    "options": [
      {
        "text": "\\(3537\\,\\text{km}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3536\\,\\text{km}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3800\\,\\text{km}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3200\\,\\text{km}\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(3537\\,\\text{km}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: subtended angle \\(\\theta = 32'\\), distance (radius) \\(r = 380\\,000\\,\\text{km}\\). Approximate diameter \\(D\\) by arc length \\(s = r\\theta\\) with \\(\\theta\\) in radians.",
        "workingOut": "\\(r = 380\\,000,\\quad \\theta = 32'\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 280,
            "boundingbox": [
              -1.8,
              3.4,
              13.2,
              -3.2
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  board.create('polygon', [[0,0],[10,1.9],[10,-1.9]], {fillColor:'#a78bfa', fillOpacity:0.2, strokeWidth:0});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 40; __i++) {\n      var __t = 2 * Math.PI * __i / 40;\n      __circ.push([10 + 1.9 * Math.cos(__t), 0 + 1.9 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#94a3b8', fillOpacity:0.16, strokeWidth:0});\n    for (var __j = 0; __j < 40; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#64748b', strokeWidth:1.8});\n    }\n  \n  board.create('segment', [[0,0],[10,1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});\n  board.create('segment', [[0,0],[10,-1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});\n  board.create('segment', [[10,1.9],[10,-1.9]], {strokeColor:'#6366f1', strokeWidth:2.4});\n  board.create('segment', [[0,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#7c3aed'});\n  board.create('point', [10,1.9], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [10,-1.9], {name:'', size:2, color:'#6366f1'});\n  board.create('text', [4.6, 0.95, '380 000 km'], {fontSize:12, color:'#64748b'});\n  board.create('text', [11.15, 0.05, 'D'], {fontSize:15, color:'#4f46e5'});\n  board.create('text', [0.55, 0.55, \"32'\"], {fontSize:14, color:'#0f172a'});\n  board.create('text', [-0.15, -0.75, 'Earth (O)'], {fontSize:12, color:'#64748b'});\n  board.create('text', [9.5, 2.55, 'Moon'], {fontSize:13, color:'#475569'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Convert minutes to degrees: \\(32' = \\dfrac{32}{60}^\\circ = \\dfrac{8}{15}^\\circ\\).",
        "workingOut": "\\(\\theta = \\dfrac{8}{15}^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Convert to radians: \\(\\theta = \\dfrac{8}{15} \\times \\dfrac{\\pi}{180} = \\dfrac{8\\pi}{2700} = \\dfrac{2\\pi}{675}\\).",
        "workingOut": "\\(\\theta = \\dfrac{2\\pi}{675}\\ \\text{rad}\\)",
        "graphData": null
      },
      {
        "explanation": "Arc length (approximate diameter): \\(D \\approx r\\theta = 380\\,000 \\times \\dfrac{2\\pi}{675}\\).",
        "workingOut": "\\(D = \\dfrac{760\\,000\\pi}{675}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(\\dfrac{760\\,000}{675} = \\dfrac{30400}{27}\\approx 1125.926\\), then multiply by \\(\\pi\\approx 3.1416\\) to get \\(D \\approx 3537.4\\,\\text{km}\\). To the nearest kilometre: \\(3537\\,\\text{km}\\).",
        "workingOut": "\\(3537\\,\\text{km}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3537\\,\\text{km}\\). A common slip is leaving \\(\\theta\\) in degrees when using \\(s = r\\theta\\).",
        "workingOut": "\\(3537\\,\\text{km}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 280,
        "boundingbox": [
          -1.8,
          3.4,
          13.2,
          -3.2
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  board.create('polygon', [[0,0],[10,1.9],[10,-1.9]], {fillColor:'#a78bfa', fillOpacity:0.2, strokeWidth:0});\n  \n    var __circ = [];\n    for (var __i = 0; __i <= 40; __i++) {\n      var __t = 2 * Math.PI * __i / 40;\n      __circ.push([10 + 1.9 * Math.cos(__t), 0 + 1.9 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#94a3b8', fillOpacity:0.16, strokeWidth:0});\n    for (var __j = 0; __j < 40; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#64748b', strokeWidth:1.8});\n    }\n  \n  board.create('segment', [[0,0],[10,1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});\n  board.create('segment', [[0,0],[10,-1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});\n  board.create('segment', [[10,1.9],[10,-1.9]], {strokeColor:'#6366f1', strokeWidth:2.4});\n  board.create('segment', [[0,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.4, dash:2});\n  board.create('point', [0,0], {name:'', size:3, color:'#7c3aed'});\n  board.create('point', [10,1.9], {name:'', size:2, color:'#6366f1'});\n  board.create('point', [10,-1.9], {name:'', size:2, color:'#6366f1'});\n  board.create('text', [4.6, 0.95, '380 000 km'], {fontSize:12, color:'#64748b'});\n  board.create('text', [11.15, 0.05, 'D'], {fontSize:15, color:'#4f46e5'});\n  board.create('text', [0.55, 0.55, \"32'\"], {fontSize:14, color:'#0f172a'});\n  board.create('text', [-0.15, -0.75, 'Earth (O)'], {fontSize:12, color:'#64748b'});\n  board.create('text', [9.5, 2.55, 'Moon'], {fontSize:13, color:'#475569'});\n   board.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6a-q11",
    "topicId": "y12a-6A",
    "chapterId": "y12a-6",
    "c": "6A",
    "t": "The behaviour of sin x near the origin",
    "origin": "seed",
    "isNew": true,
    "requiresManualGrading": false,
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "A regular polygon with \\(360\\) sides is inscribed in a circle of radius \\(80\\,\\text{cm}\\). Find the approximate length of each side, correct to two decimal places. (Use the small-angle arc approximation.)",
    "opts": [
      "\\(1.40\\,\\text{cm}\\)",
      "\\(1.39\\,\\text{cm}\\)",
      "\\(2.40\\,\\text{cm}\\)",
      "\\(0.80\\,\\text{cm}\\)"
    ],
    "options": [
      {
        "text": "\\(1.40\\,\\text{cm}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1.39\\,\\text{cm}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2.40\\,\\text{cm}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0.80\\,\\text{cm}\\)",
        "imageUrl": null
      }
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.",
    "solution": "The correct answer is \\(1.40\\,\\text{cm}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: regular 360-gon inscribed in a circle of radius \\(r = 80\\,\\text{cm}\\). Each central angle is \\(\\dfrac{360^\\circ}{360} = 1^\\circ\\). Approximate each side by the corresponding arc length.",
        "workingOut": "\\(\\theta = 1^\\circ,\\quad r = 80\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 340,
            "boundingbox": [
              -6.2,
              6.2,
              6.6,
              -6.4
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); \n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e2e8f0', fillOpacity:0.25, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8, dash:2});\n    }\n  \n  board.create('polygon', [[0,0],[4.85,1.1],[4.85,-1.1]], {fillColor:'#34d399', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[0,0],[4.85,1.1]], {strokeColor:'#059669', strokeWidth:2.3});\n  board.create('segment', [[0,0],[4.85,-1.1]], {strokeColor:'#059669', strokeWidth:2.3});\n  board.create('segment', [[4.85,1.1],[4.85,-1.1]], {strokeColor:'#10b981', strokeWidth:2.8});\n  board.create('point', [0,0], {name:'', size:3, color:'#059669'});\n  board.create('point', [4.85,1.1], {name:'', size:2, color:'#10b981'});\n  board.create('point', [4.85,-1.1], {name:'', size:2, color:'#10b981'});\n  board.create('text', [2.0, 1.45, '80 cm'], {fontSize:13, color:'#047857'});\n  board.create('text', [5.45, 0.05, 's'], {fontSize:15, color:'#059669'});\n  board.create('text', [0.55, 0.35, '1°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [-0.45, -0.45, 'O'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0, -5.7, 'circle r = 80 cm'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "In radians: \\(1^\\circ = \\dfrac{\\pi}{180}\\). Arc length \\(s = r\\theta = 80 \\times \\dfrac{\\pi}{180} = \\dfrac{80\\pi}{180} = \\dfrac{4\\pi}{9}\\).",
        "workingOut": "\\(s = \\dfrac{4\\pi}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Numerically: \\(\\dfrac{4\\pi}{9} \\approx \\dfrac{4 \\times 3.1416}{9} \\approx \\dfrac{12.5664}{9} \\approx 1.3963\\,\\text{cm}\\).",
        "workingOut": "\\(1.3963\\,\\text{cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Correct to two decimal places: \\(1.40\\,\\text{cm}\\). A common slip is using the chord formula with a half-angle without approximating, or forgetting to convert to radians.",
        "workingOut": "\\(1.40\\,\\text{cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1.40\\,\\text{cm}\\).",
        "workingOut": "\\(1.40\\,\\text{cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 340,
        "boundingbox": [
          -6.2,
          6.2,
          6.6,
          -6.4
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); \n  \n    var __circ = [];\n    for (var __i = 0; __i <= 56; __i++) {\n      var __t = 2 * Math.PI * __i / 56;\n      __circ.push([0 + 5 * Math.cos(__t), 0 + 5 * Math.sin(__t)]);\n    }\n    board.create('polygon', __circ, {fillColor:'#e2e8f0', fillOpacity:0.25, strokeWidth:0});\n    for (var __j = 0; __j < 56; __j++) {\n      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'#94a3b8', strokeWidth:1.8, dash:2});\n    }\n  \n  board.create('polygon', [[0,0],[4.85,1.1],[4.85,-1.1]], {fillColor:'#34d399', fillOpacity:0.28, strokeWidth:0});\n  board.create('segment', [[0,0],[4.85,1.1]], {strokeColor:'#059669', strokeWidth:2.3});\n  board.create('segment', [[0,0],[4.85,-1.1]], {strokeColor:'#059669', strokeWidth:2.3});\n  board.create('segment', [[4.85,1.1],[4.85,-1.1]], {strokeColor:'#10b981', strokeWidth:2.8});\n  board.create('point', [0,0], {name:'', size:3, color:'#059669'});\n  board.create('point', [4.85,1.1], {name:'', size:2, color:'#10b981'});\n  board.create('point', [4.85,-1.1], {name:'', size:2, color:'#10b981'});\n  board.create('text', [2.0, 1.45, '80 cm'], {fontSize:13, color:'#047857'});\n  board.create('text', [5.45, 0.05, 's'], {fontSize:15, color:'#059669'});\n  board.create('text', [0.55, 0.35, '1°'], {fontSize:14, color:'#0f172a'});\n  board.create('text', [-0.45, -0.45, 'O'], {fontSize:13, color:'#64748b'});\n  board.create('text', [0, -5.7, 'circle r = 80 cm'], {fontSize:12, color:'#64748b'});\n   board.unsuspendUpdate();"
      }
    }
  }
];

export default Y12A_CH6_QUESTIONS;
