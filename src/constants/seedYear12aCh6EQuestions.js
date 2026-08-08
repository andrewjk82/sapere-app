export const Y12A_CH6E_QUESTIONS = [
  {
    "id": "y12a-6e-q1a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "answer": "1",
    "hint": "On this interval \\(\\cos x \\ge 0\\), so area equals \\(\\int_{0}^{\\pi/2}\\cos x\\,dx\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y = \\cos x\\) and the \\(x\\)-axis from \\(0\\) to \\(\\dfrac{\\pi}{2}\\). Why area, not a signed integral worry? On \\([0,\\pi/2]\\), cosine is non-negative, so the curve lies above the axis and area equals the definite integral.",
        "workingOut": "\\(A = \\int_{0}^{\\pi/2}\\cos x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 250,
            "boundingbox": [
              -0.4,
              1.4,
              2.2,
              -0.5
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[2.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.5],[0,1.4]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.87, -0.175, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.26, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.35000000000000003, 2.1500000000000004], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 1.5707963267948966], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,Math.cos(0)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,Math.cos(1.5707963267948966)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.7853981633974483, 0.55, \"A\"], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [1.4, 1.15, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Standard antiderivative: \\(\\int\\cos x\\,dx = \\sin x + C\\). No chain factor is needed because the argument is simply \\(x\\).",
        "workingOut": "\\(F(x) = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0) = \\sin\\dfrac{\\pi}{2} - \\sin 0 = 1 - 0 = 1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Check: the graph is a quarter-cycle of cosine from height 1 down to 0; the enclosed region has area 1. A common slip writes \\(\\cos\\dfrac{\\pi}{2} - \\cos 0 = -1\\) (forgetting to integrate).",
        "workingOut": "\\(A = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 250,
        "boundingbox": [
          -0.4,
          1.4,
          2.2,
          -0.5
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[2.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.5],[0,1.4]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.87, -0.175, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.26, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.35000000000000003, 2.1500000000000004], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 1.5707963267948966], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,Math.cos(0)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,Math.cos(1.5707963267948966)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.7853981633974483, 0.55, \"area\"], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [1.4, 1.15, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\pi}{2}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q1b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{6} \\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\sqrt{3}}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area = \\(\\int_{0}^{\\pi/6}\\cos x\\,dx = \\sin x\\) evaluated at the limits.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\cos x\\) from \\(0\\) to \\(\\dfrac{\\pi}{6}\\). On this short interval cosine is positive, so\\[A = \\int_{0}^{\\pi/6}\\cos x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/6}\\cos x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 250,
            "boundingbox": [
              -0.4,
              1.4,
              2.2,
              -0.5
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[2.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.5],[0,1.4]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.87, -0.175, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.26, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.35000000000000003, 2.1500000000000004], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 0.5235987755982988], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,Math.cos(0)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[0.5235987755982988,0],[0.5235987755982988,Math.cos(0.5235987755982988)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.2617993877991494, 0.55, \"A\"], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [1.4, 1.15, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Antiderivative: \\(F(x) = \\sin x\\).",
        "workingOut": "\\(F(x) = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{6}\\right) - F(0) = \\sin\\dfrac{\\pi}{6} - \\sin 0 = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Why not \\(\\dfrac{\\sqrt{3}}{2}\\)? That is \\(\\cos\\dfrac{\\pi}{6}\\) or \\(\\sin\\dfrac{\\pi}{3}\\), not \\(\\sin\\dfrac{\\pi}{6}\\). A common slip confuses these exact values.",
        "workingOut": "\\(\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 250,
        "boundingbox": [
          -0.4,
          1.4,
          2.2,
          -0.5
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[2.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.5],[0,1.4]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.87, -0.175, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.26, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.35000000000000003, 2.1500000000000004], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 0.5235987755982988], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,Math.cos(0)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[0.5235987755982988,0],[0.5235987755982988,Math.cos(0.5235987755982988)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.2617993877991494, 0.55, \"area\"], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [1.4, 1.15, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q2a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sec^{2} x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{4} \\).",
    "answer": "1",
    "hint": "Antiderivative of \\(\\sec^{2}x\\) is \\(\\tan x\\). Evaluate from 0 to \\(\\pi/4\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\sec^{2}x\\) from \\(0\\) to \\(\\dfrac{\\pi}{4}\\). On this interval \\(\\sec^{2}x > 0\\), so the curve is above the axis and area equals the definite integral.",
        "workingOut": "\\(A = \\int_{0}^{\\pi/4}\\sec^{2}x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 270,
            "boundingbox": [
              -0.3,
              4.2,
              1.55,
              -0.55
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.3,0],[1.55,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,4.2]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.33, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 4.0200000000000005, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ var c=Math.cos(x); return c===0?NaN:1/(c*c); }, -0.25, 1.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 0.7853981633974483], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,1]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[0.7853981633974483,0],[0.7853981633974483,1.9999999999999996]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.39269908169872414, 0.55, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [0.55, 3.6, 'y = sec² x'], {fontSize:12, color:'#4f46e5'});board.create('text', [0.7853981633974483, -0.32, 'π/4'], {fontSize:13, color:'#e11d48', anchorX:'middle'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\), so \\(\\int\\sec^{2}x\\,dx = \\tan x + C\\).",
        "workingOut": "\\(F(x) = \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) - F(0) = \\tan\\dfrac{\\pi}{4} - \\tan 0 = 1 - 0 = 1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Domain check: \\(\\sec x\\) is continuous on \\([0,\\pi/4]\\) (no asymptote in this interval). A common slip confuses the answer with \\(\\tan\\dfrac{\\pi}{3}=\\sqrt{3}\\).",
        "workingOut": "\\(A = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\sqrt{3}\\)",
      "\\(\\dfrac{\\pi}{4}\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{4}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q2b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sec^{2} x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{3} \\).",
    "opts": [
      "\\(1\\)",
      "\\(\\sqrt{3}\\)",
      "\\(\\dfrac{\\sqrt{3}}{3}\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\sec^{2}x\\,dx = \\tan x\\); \\(\\tan\\dfrac{\\pi}{3}=\\sqrt{3}\\).",
    "solution": "The correct answer is \\(\\sqrt{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\sec^{2}x\\) from \\(0\\) to \\(\\dfrac{\\pi}{3}\\). The integrand is positive on this interval, so\\[A = \\int_{0}^{\\pi/3}\\sec^{2}x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/3}\\sec^{2}x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 270,
            "boundingbox": [
              -0.3,
              4.2,
              1.7471975511965976,
              -0.55
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.3,0],[1.7471975511965976,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,4.2]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.5271975511965976, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 4.0200000000000005, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ var c=Math.cos(x); return c===0?NaN:1/(c*c); }, -0.25, 1.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 1.0471975511965976], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0,0],[0,1]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('line', [[1.0471975511965976,0],[1.0471975511965976,3.9999999999999982]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.5235987755982988, 0.55, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [0.55, 3.6, 'y = sec² x'], {fontSize:12, color:'#4f46e5'});board.create('text', [1.0471975511965976, -0.32, 'π/3'], {fontSize:13, color:'#e11d48', anchorX:'middle'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Antiderivative: \\(F(x) = \\tan x\\).",
        "workingOut": "\\(F(x) = \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{3}\\right) - F(0) = \\tan\\dfrac{\\pi}{3} - \\tan 0 = \\sqrt{3} - 0 = \\sqrt{3}\\).",
        "workingOut": "\\(\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Why not \\(\\dfrac{\\sqrt{3}}{3}\\)? That is \\(\\tan\\dfrac{\\pi}{6}\\) or \\(\\cot\\dfrac{\\pi}{3}\\). A common slip mixes exact tan values.",
        "workingOut": "\\(\\tan\\dfrac{\\pi}{3} = \\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Continuity: on \\([0,\\pi/3]\\) we stay left of the asymptote at \\(\\dfrac{\\pi}{2}\\). Final answer: \\(\\sqrt{3}\\).",
        "workingOut": "\\(\\sqrt{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q3a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{4} \\).",
    "opts": [
      "\\(1 + \\dfrac{\\sqrt{2}}{2}\\)",
      "\\(1 - \\dfrac{\\sqrt{2}}{2}\\)",
      "\\(\\dfrac{\\sqrt{2}}{2}\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Antiderivative of \\(\\sin x\\) is \\(-\\cos x\\). Use \\(\\cos\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}\\).",
    "solution": "The correct answer is \\(1 - \\dfrac{\\sqrt{2}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\sin x\\) from \\(0\\) to \\(\\dfrac{\\pi}{4}\\). On this interval sine is non-negative, so\\[A = \\int_{0}^{\\pi/4}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/4}\\sin x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 260,
            "boundingbox": [
              -0.35,
              1.35,
              2,
              -0.55
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.35,0],[2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,1.35]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.78, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.1700000000000002, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.sin(x); }, -0.3, 1.95], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 0.7853981633974483], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0.7853981633974483,0],[0.7853981633974483,Math.sin(0.7853981633974483)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.39269908169872414, 0.1607270415933377, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [1.2, 1.1, 'y = sin x'], {fontSize:12, color:'#4f46e5'});board.create('text', [0.7853981633974483, -0.32, 'π/4'], {fontSize:13, color:'#e11d48', anchorX:'middle'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Antiderivative: \\(\\int\\sin x\\,dx = -\\cos x + C\\). Keep the minus — it is essential for the evaluation.",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) - F(0) = \\left(-\\cos\\dfrac{\\pi}{4}\\right) - \\left(-\\cos 0\\right) = -\\dfrac{\\sqrt{2}}{2} - (-1) = 1 - \\dfrac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Sign check: the area must be positive and less than 1 (the full quarter-wave area to \\(\\pi/2\\) is 1). Since \\(\\dfrac{\\sqrt{2}}{2} \\approx 0.707\\), we get about \\(0.293 > 0\\). Reject \\(1 + \\dfrac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\(0 < A < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1 - \\dfrac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{2}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(1 + \\dfrac{\\sqrt{2}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 - \\dfrac{\\sqrt{2}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q3b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{6} \\).",
    "opts": [
      "\\(1 + \\dfrac{\\sqrt{3}}{2}\\)",
      "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
      "\\(\\dfrac{\\sqrt{3}}{2}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\sin x = -\\cos x\\) and \\(\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt{3}}{2}\\).",
    "solution": "The correct answer is \\(1 - \\dfrac{\\sqrt{3}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area under \\(y = \\sin x\\) from \\(0\\) to \\(\\dfrac{\\pi}{6}\\). Sine is positive here, so\\[A = \\int_{0}^{\\pi/6}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/6}\\sin x\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 260,
            "boundingbox": [
              -0.35,
              1.35,
              2,
              -0.55
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.35,0],[2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,1.35]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.78, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.1700000000000002, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.sin(x); }, -0.3, 1.95], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 0.5235987755982988], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});board.create('line', [[0.5235987755982988,0],[0.5235987755982988,Math.sin(0.5235987755982988)]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});board.create('text', [0.2617993877991494, 0.15, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [1.2, 1.1, 'y = sin x'], {fontSize:12, color:'#4f46e5'});board.create('text', [0.5235987755982988, -0.32, 'π/6'], {fontSize:13, color:'#e11d48', anchorX:'middle'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Antiderivative: \\(F(x) = -\\cos x\\).",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{6}\\right) - F(0) = \\left(-\\cos\\dfrac{\\pi}{6}\\right) - \\left(-\\cos 0\\right) = -\\dfrac{\\sqrt{3}}{2} + 1 = 1 - \\dfrac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Numerically \\(\\dfrac{\\sqrt{3}}{2} \\approx 0.866\\), so \\(A \\approx 0.134\\), a small positive area — consistent with a short interval near the origin. A common slip uses \\(\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}\\) as the final answer without integrating.",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1 - \\dfrac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(1 + \\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q4a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The diagram shows the curve \\( y = \\sin x \\). The shaded region is between the curve and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{2} \\). Find the exact area of the shaded region.",
    "answer": "1",
    "hint": "Area = \\(\\int_{0}^{\\pi/2}\\sin x\\,dx\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "From the diagram, the shaded region is under \\(y = \\sin x\\) from \\(x = 0\\) to \\(x = \\dfrac{\\pi}{2}\\). On this interval sine is non-negative, so the area is\\[A = \\int_{0}^{\\pi/2}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/2}\\sin x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(F(x) = -\\cos x\\).",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0) = \\left(-\\cos\\dfrac{\\pi}{2}\\right) - \\left(-\\cos 0\\right) = 0 - (-1) = 1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "This is the classic “area under one arch of sine from 0 to \\(\\pi/2\\)” (a quarter-period above the axis). The solution graph matches the given shaded region.",
        "workingOut": "\\(A = 1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 270,
            "boundingbox": [
              -0.45,
              1.45,
              3.7,
              -0.55
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.45,0],[3.7,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [3.48, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.27, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.sin(x); }, -0.2, 3.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 1.5707963267948966], f], {fillColor:'#93c5fd', fillOpacity:0.5, strokeWidth:0});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,1]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('text', [1.5707963267948966, -0.32, 'π/2'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [3.141592653589793, -0.32, 'π'], {fontSize:13, color:'#64748b', anchorX:'middle'});board.create('text', [0.75, 0.32, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [2.15, 1.12, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Final answer: \\(1\\). A common slip evaluates sine at the endpoints without integrating, or confuses with the full hump from 0 to \\(\\pi\\) (area 2).",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 270,
        "boundingbox": [
          -0.45,
          1.45,
          3.7,
          -0.55
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.45,0],[3.7,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.55],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [3.48, -0.22, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.27, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.sin(x); }, -0.2, 3.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 1.5707963267948966], f], {fillColor:'#93c5fd', fillOpacity:0.5, strokeWidth:0});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,1]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('text', [1.5707963267948966, -0.32, 'π/2'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [3.141592653589793, -0.32, 'π'], {fontSize:13, color:'#64748b', anchorX:'middle'});board.create('text', [0.75, 0.32, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700});board.create('text', [2.15, 1.12, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\dfrac{\\pi}{2}\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{2}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q4b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The diagram shows the curve \\( y = \\cos x \\). The shaded region is between the curve and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{2} \\) to \\( x = \\pi \\). Find the exact area of the shaded region.",
    "answer": "1",
    "hint": "Cosine is negative on this interval; area uses absolute value: \\(-\\int_{\\pi/2}^{\\pi}\\cos x\\,dx\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "From the diagram, the shaded region is between \\(y = \\cos x\\) and the \\(x\\)-axis from \\(\\dfrac{\\pi}{2}\\) to \\(\\pi\\). On this interval cosine is negative (curve below the axis), so area is the absolute integral\\[A = \\int_{\\pi/2}^{\\pi}|\\cos x|\\,dx = -\\int_{\\pi/2}^{\\pi}\\cos x\\,dx.\\]",
        "workingOut": "\\(A = -\\int_{\\pi/2}^{\\pi}\\cos x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(\\cos x\\) is \\(\\sin x\\), so\\[-\\int\\cos x\\,dx = -\\sin x.\\]",
        "workingOut": "\\(F(x) = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(\\pi) - F\\!\\left(\\dfrac{\\pi}{2}\\right) = (-\\sin\\pi) - \\left(-\\sin\\dfrac{\\pi}{2}\\right) = 0 - (-1) = 1\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Alternatively: \\(\\int_{\\pi/2}^{\\pi}\\cos x\\,dx = \\sin\\pi - \\sin\\dfrac{\\pi}{2} = 0 - 1 = -1\\), then take absolute value to get area \\(1\\).",
        "workingOut": "\\(|-1| = 1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 270,
            "boundingbox": [
              -0.45,
              1.45,
              3.7,
              -1.45
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.45,0],[3.7,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.45],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [3.48, -0.5075, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.27, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.2, 3.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[1.5707963267948966, 3.141592653589793], f], {fillColor:'#93c5fd', fillOpacity:0.5, strokeWidth:0});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,0.05]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('line', [[3.141592653589793,0],[3.141592653589793,-1]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('text', [1.5707963267948966, 0.28, 'π/2'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [3.141592653589793, 0.28, 'π'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [-0.28, 1, '1'], {fontSize:12, color:'#64748b', anchorX:'right'});board.create('text', [2.15, 1.12, 'y = cos x'], {fontSize:12, color:'#4f46e5'});board.create('text', [2.356, -0.32, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Final answer: \\(1\\). A common slip reports \\(-1\\) (signed integral) or confuses the limits with \\([0,\\pi/2]\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 270,
        "boundingbox": [
          -0.45,
          1.45,
          3.7,
          -1.45
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.45,0],[3.7,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.45],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [3.48, -0.5075, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.14, 1.27, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.2, 3.45], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[1.5707963267948966, 3.141592653589793], f], {fillColor:'#93c5fd', fillOpacity:0.5, strokeWidth:0});board.create('line', [[1.5707963267948966,0],[1.5707963267948966,0.05]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('line', [[3.141592653589793,0],[3.141592653589793,-1]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.4, dash:2});board.create('text', [1.5707963267948966, 0.28, 'π/2'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [3.141592653589793, 0.28, 'π'], {fontSize:13, color:'#e11d48', anchorX:'middle'});board.create('text', [-0.28, 1, '1'], {fontSize:12, color:'#64748b', anchorX:'right'});board.create('text', [2.15, 1.12, 'y = cos x'], {fontSize:12, color:'#4f46e5'});board.create('text', [2.356, -0.32, 'A'], {fontSize:15, color:'#1d4ed8', anchorX:'middle', fontWeight:700}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\dfrac{\\pi}{2}\\)"
    ],
    "a": 1,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{2}\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q5a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{3} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\sqrt{3}}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\sin x = -\\cos x\\); evaluate from \\(\\pi/3\\) to \\(\\pi/2\\).",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{3},\\dfrac{\\pi}{2}\\right]\\), \\(\\sin x \\ge 0\\), so the area is the definite integral\\[A = \\int_{\\pi/3}^{\\pi/2}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/3}^{\\pi/2}\\sin x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int\\sin x\\,dx = -\\cos x\\).",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F\\!\\left(\\dfrac{\\pi}{3}\\right) = \\left(-\\cos\\dfrac{\\pi}{2}\\right) - \\left(-\\cos\\dfrac{\\pi}{3}\\right)\\).",
        "workingOut": "\\(-\\cos\\dfrac{\\pi}{2} + \\cos\\dfrac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Use exact values: \\(\\cos\\dfrac{\\pi}{2} = 0\\) and \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\). So\\[A = 0 + \\dfrac{1}{2} = \\dfrac{1}{2}.\\]",
        "workingOut": "\\(A = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\). A common slip flips the order of limits or forgets the minus on the antiderivative.",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q5b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sin 2x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{4} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\pi}{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Antiderivative of \\(\\sin 2x\\) is \\(-\\dfrac{1}{2}\\cos 2x\\).",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{4},\\dfrac{\\pi}{2}\\right]\\), \\(2x \\in \\left[\\dfrac{\\pi}{2},\\pi\\right]\\), so \\(\\sin 2x \\ge 0\\). Area:\\[A = \\int_{\\pi/4}^{\\pi/2}\\sin 2x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/4}^{\\pi/2}\\sin 2x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Chain reverse: \\(\\int\\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x\\) (divide by the inner derivative 2).",
        "workingOut": "\\(F(x) = -\\dfrac{1}{2}\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = -\\dfrac{1}{2}\\cos\\pi = -\\dfrac{1}{2}(-1) = \\dfrac{1}{2}\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = -\\dfrac{1}{2}\\cos\\dfrac{\\pi}{2} = -\\dfrac{1}{2}\\cdot 0 = 0\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Difference: \\(A = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}\\). A common slip uses \\(\\cos 2\\cdot\\dfrac{\\pi}{4} = \\cos\\dfrac{\\pi}{4}\\) instead of \\(\\cos\\dfrac{\\pi}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{4}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q5c",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{3} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(\\dfrac{\\sqrt{3}}{2}\\)",
      "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
      "\\(1 + \\dfrac{\\sqrt{3}}{2}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\cos x = \\sin x\\); \\(\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}\\).",
    "solution": "The correct answer is \\(1 - \\dfrac{\\sqrt{3}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{3},\\dfrac{\\pi}{2}\\right]\\), \\(\\cos x \\ge 0\\) (zero only at the right endpoint). Area:\\[A = \\int_{\\pi/3}^{\\pi/2}\\cos x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/3}^{\\pi/2}\\cos x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int\\cos x\\,dx = \\sin x\\).",
        "workingOut": "\\(F(x) = \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F\\!\\left(\\dfrac{\\pi}{3}\\right) = \\sin\\dfrac{\\pi}{2} - \\sin\\dfrac{\\pi}{3}\\).",
        "workingOut": "\\(\\sin\\dfrac{\\pi}{2} - \\sin\\dfrac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Exact values: \\(\\sin\\dfrac{\\pi}{2} = 1\\) and \\(\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}\\). So\\[A = 1 - \\dfrac{\\sqrt{3}}{2}.\\]",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1 - \\dfrac{\\sqrt{3}}{2}\\). Numerically about \\(0.134\\), a small positive area near the axis — consistent with cosine falling from \\(\\dfrac{1}{2}\\) to 0.",
        "workingOut": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 - \\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 + \\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q5d",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\cos 3x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{12} \\) to \\( x = \\dfrac{\\pi}{6} \\).",
    "opts": [
      "\\(\\dfrac{1}{3} + \\dfrac{\\sqrt{2}}{6}\\)",
      "\\(\\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\)",
      "\\(\\dfrac{\\sqrt{2}}{6}\\)",
      "\\(\\dfrac{1}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate: \\(\\int\\cos 3x\\,dx = \\dfrac{1}{3}\\sin 3x\\). Then use \\(\\sin\\dfrac{\\pi}{2}=1\\) and \\(\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}\\).",
    "solution": "The correct answer is \\(\\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "We need the area between \\(y = \\cos 3x\\) and the \\(x\\)-axis from \\(x = \\dfrac{\\pi}{12}\\) to \\(x = \\dfrac{\\pi}{6}\\). On this interval, \\(3x\\) runs from \\(\\dfrac{\\pi}{4}\\) to \\(\\dfrac{\\pi}{2}\\), where cosine is non-negative. So the area is the definite integral\\[A = \\int_{\\pi/12}^{\\pi/6}\\cos 3x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/12}^{\\pi/6}\\cos 3x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate using the reverse chain rule. If \\(u = 3x\\), then \\(du = 3\\,dx\\) and \\(dx = \\dfrac{1}{3}\\,du\\). Therefore\\[\\int\\cos 3x\\,dx = \\dfrac{1}{3}\\sin 3x.\\](Check: differentiate \\(\\dfrac{1}{3}\\sin 3x\\) to get \\(\\cos 3x\\).)",
        "workingOut": "\\(F(x) = \\dfrac{1}{3}\\sin 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the fundamental theorem:\\[A = F\\!\\left(\\dfrac{\\pi}{6}\\right) - F\\!\\left(\\dfrac{\\pi}{12}\\right) = \\dfrac{1}{3}\\sin\\!\\left(3\\cdot\\dfrac{\\pi}{6}\\right) - \\dfrac{1}{3}\\sin\\!\\left(3\\cdot\\dfrac{\\pi}{12}\\right).\\]",
        "workingOut": "\\(A = \\dfrac{1}{3}\\sin\\dfrac{\\pi}{2} - \\dfrac{1}{3}\\sin\\dfrac{\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the arguments carefully: \\(3\\cdot\\dfrac{\\pi}{6} = \\dfrac{\\pi}{2}\\) and \\(3\\cdot\\dfrac{\\pi}{12} = \\dfrac{\\pi}{4}\\). Exact values: \\(\\sin\\dfrac{\\pi}{2} = 1\\) and \\(\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\(\\sin\\dfrac{\\pi}{2} = 1,\\quad \\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute:\\[A = \\dfrac{1}{3}\\cdot 1 - \\dfrac{1}{3}\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}.\\](Write the second term with denominator 6: \\(\\dfrac{1}{3}\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{6}\\).)",
        "workingOut": "\\(A = \\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\). A common slip forgets the chain factor \\(\\dfrac{1}{3}\\), or uses \\(\\cos\\) values instead of \\(\\sin\\) after integrating.",
        "workingOut": "\\(\\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{1}{3} + \\dfrac{\\sqrt{2}}{6}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{3} - \\dfrac{\\sqrt{2}}{6}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{6}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{3}\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q5e",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sec^{2} x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{6} \\) to \\( x = \\dfrac{\\pi}{3} \\).",
    "opts": [
      "\\(\\dfrac{\\sqrt{3}}{3}\\)",
      "\\(\\dfrac{2\\sqrt{3}}{3}\\)",
      "\\(\\sqrt{3}\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\sec^{2}x = \\tan x\\); combine \\(\\sqrt{3}-\\dfrac{\\sqrt{3}}{3}\\).",
    "solution": "The correct answer is \\(\\dfrac{2\\sqrt{3}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{6},\\dfrac{\\pi}{3}\\right]\\), \\(\\sec^{2}x > 0\\) and continuous (asymptote at \\(\\dfrac{\\pi}{2}\\) is outside). Area:\\[A = \\int_{\\pi/6}^{\\pi/3}\\sec^{2}x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/6}^{\\pi/3}\\sec^{2}x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Standard form: \\(\\int\\sec^{2}x\\,dx = \\tan x\\).",
        "workingOut": "\\(F(x) = \\tan x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{3}\\right) - F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\tan\\dfrac{\\pi}{3} - \\tan\\dfrac{\\pi}{6}\\).",
        "workingOut": "\\(\\tan\\dfrac{\\pi}{3} - \\tan\\dfrac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Exact values: \\(\\tan\\dfrac{\\pi}{3} = \\sqrt{3}\\) and \\(\\tan\\dfrac{\\pi}{6} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}\\). So\\[A = \\sqrt{3} - \\dfrac{\\sqrt{3}}{3} = \\dfrac{3\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{3} = \\dfrac{2\\sqrt{3}}{3}.\\]",
        "workingOut": "\\(\\dfrac{2\\sqrt{3}}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2\\sqrt{3}}{3}\\). A common slip leaves the answer as \\(\\sqrt{3} - \\dfrac{1}{\\sqrt{3}}\\) without rationalising/combining.",
        "workingOut": "\\(\\dfrac{2\\sqrt{3}}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2\\sqrt{3}}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q5f",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Find the exact area enclosed between the curve \\( y = \\sec^{2}\\!\\left(\\dfrac{x}{2}\\right) \\) and the \\(x\\)-axis from \\( x = -\\dfrac{\\pi}{2} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(\\pi\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Antiderivative is \\(2\\tan\\dfrac{x}{2}\\); evaluate at \\(\\pm\\pi/2\\).",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "The integrand \\(\\sec^{2}\\dfrac{x}{2}\\) is even and positive. On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\), \\(\\dfrac{x}{2} \\in \\left[-\\dfrac{\\pi}{4},\\dfrac{\\pi}{4}\\right]\\), so no asymptote. Area:\\[A = \\int_{-\\pi/2}^{\\pi/2}\\sec^{2}\\dfrac{x}{2}\\,dx.\\]",
        "workingOut": "\\(A = \\int_{-\\pi/2}^{\\pi/2}\\sec^{2}\\dfrac{x}{2}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Chain reverse: let \\(u = \\dfrac{x}{2}\\), then \\(du = \\dfrac{1}{2}\\,dx\\) and \\(dx = 2\\,du\\). So\\[\\int\\sec^{2}\\dfrac{x}{2}\\,dx = 2\\tan\\dfrac{x}{2}.\\]",
        "workingOut": "\\(F(x) = 2\\tan\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = 2\\tan\\dfrac{\\pi}{4} = 2\\cdot 1 = 2\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = 2\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit: \\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = 2\\tan\\!\\left(-\\dfrac{\\pi}{4}\\right) = 2\\cdot(-1) = -2\\).",
        "workingOut": "\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Difference: \\(A = 2 - (-2) = 4\\). (Even function over a symmetric interval: also \\(2\\int_{0}^{\\pi/2}\\sec^{2}\\dfrac{x}{2}\\,dx = 2\\cdot 2 = 4\\).)",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\). A common slip forgets the chain factor 2 and gets \\(\\tan\\dfrac{\\pi}{4} - \\tan\\!\\left(-\\dfrac{\\pi}{4}\\right) = 2\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q6a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Calculate the area of the region bounded by \\( y = \\sin x \\) and \\( y = \\cos x \\) from \\( x = \\dfrac{\\pi}{4} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(\\sqrt{2} + 1\\)",
      "\\(\\sqrt{2} - 1\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\sqrt{2}}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate upper minus lower: \\(\\sin x - \\cos x\\) from \\(\\pi/4\\) to \\(\\pi/2\\).",
    "solution": "The correct answer is \\(\\sqrt{2} - 1\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{4},\\dfrac{\\pi}{2}\\right]\\) the curves meet at the left endpoint (\\(\\sin = \\cos\\)). For \\(x > \\dfrac{\\pi}{4}\\) in this interval, \\(\\sin x > \\cos x\\) (e.g. at \\(\\dfrac{\\pi}{3}\\)). So the upper curve is sine and\\[A = \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int(\\sin x - \\cos x)\\,dx = -\\cos x - \\sin x\\).",
        "workingOut": "\\(F(x) = -\\cos x - \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = -\\cos\\dfrac{\\pi}{2} - \\sin\\dfrac{\\pi}{2} = 0 - 1 = -1\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = -1\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = -\\cos\\dfrac{\\pi}{4} - \\sin\\dfrac{\\pi}{4} = -\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2} = -\\sqrt{2}\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = -\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Difference: \\(A = F\\!\\left(\\dfrac{\\pi}{2}\\right) - F\\!\\left(\\dfrac{\\pi}{4}\\right) = -1 - (-\\sqrt{2}) = -1 + \\sqrt{2} = \\sqrt{2} - 1\\).",
        "workingOut": "\\(\\sqrt{2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sqrt{2} - 1\\). Positive since \\(\\sqrt{2} > 1\\). A common slip integrates \\(\\cos - \\sin\\) (wrong order of curves) and gets \\(1 - \\sqrt{2}\\).",
        "workingOut": "\\(\\sqrt{2} - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "chapterId": "y12a-6",
    "origin": "seed",
    "isActive": true,
    "options": [
      {
        "text": "\\(\\sqrt{2} + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{2} - 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{2}\\)",
        "imageUrl": null
      }
    ]
  },
  {
    "id": "y12a-6e-q6b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Calculate the area of the region bounded by \\( y = \\sin x \\) and \\( y = \\sin 2x \\) from \\( x = \\dfrac{\\pi}{3} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Upper curve is \\(\\sin x\\). Antiderivative: \\(-\\cos x + \\dfrac{1}{2}\\cos 2x\\).",
    "solution": "The correct answer is \\(\\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{3},\\dfrac{\\pi}{2}\\right]\\) the curves meet at the left endpoint: \\(\\sin\\dfrac{\\pi}{3} = \\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}\\). For \\(x\\) in the open interval, \\(\\sin x > \\sin 2x\\) (e.g. at \\(\\dfrac{\\pi}{2}\\): \\(1 > 0\\)). So upper curve is sine and\\[A = \\int_{\\pi/3}^{\\pi/2}\\bigl(\\sin x - \\sin 2x\\bigr)\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/3}^{\\pi/2}(\\sin x - \\sin 2x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term. \\(\\int\\sin x\\,dx = -\\cos x\\). \\(\\int\\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x\\), so \\(\\int -\\sin 2x\\,dx = \\dfrac{1}{2}\\cos 2x\\). Antiderivative:\\[F(x) = -\\cos x + \\dfrac{1}{2}\\cos 2x.\\]",
        "workingOut": "\\(F(x) = -\\cos x + \\dfrac{1}{2}\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit \\(x = \\dfrac{\\pi}{2}\\):\\[F\\!\\left(\\dfrac{\\pi}{2}\\right) = -\\cos\\dfrac{\\pi}{2} + \\dfrac{1}{2}\\cos\\pi = 0 + \\dfrac{1}{2}(-1) = -\\dfrac{1}{2}.\\]",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = -\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit \\(x = \\dfrac{\\pi}{3}\\):\\[F\\!\\left(\\dfrac{\\pi}{3}\\right) = -\\cos\\dfrac{\\pi}{3} + \\dfrac{1}{2}\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2} + \\dfrac{1}{2}\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{2} - \\dfrac{1}{4} = -\\dfrac{3}{4}.\\]",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Difference:\\[A = F\\!\\left(\\dfrac{\\pi}{2}\\right) - F\\!\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2} - \\left(-\\dfrac{3}{4}\\right) = -\\dfrac{1}{2} + \\dfrac{3}{4} = \\dfrac{1}{4}.\\]",
        "workingOut": "\\(A = \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{4}\\). A common slip integrates \\(\\sin 2x - \\sin x\\) (wrong order) and gets a negative value.",
        "workingOut": "\\(\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q6c",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Calculate the area of the region bounded by \\( y = x \\) and \\( y = \\sin x \\) from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(\\dfrac{\\pi^{2}}{8} + 1\\)",
      "\\(1 - \\dfrac{\\pi^{2}}{8}\\)",
      "\\(\\dfrac{\\pi}{2} - 1\\)",
      "\\(\\dfrac{\\pi^{2}}{8} - 1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Integrate \\(x - \\sin x\\); antiderivative \\(\\dfrac{1}{2}x^{2} + \\cos x\\).",
    "solution": "The correct answer is \\(\\dfrac{\\pi^{2}}{8} - 1\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[0,\\dfrac{\\pi}{2}\\right]\\), the line \\(y = x\\) lies above \\(y = \\sin x\\) (except at 0, where they meet). So the area is\\[A = \\int_{0}^{\\pi/2}\\bigl(x - \\sin x\\bigr)\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi/2}(x - \\sin x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term: \\(\\int x\\,dx = \\dfrac{1}{2}x^{2}\\) and \\(\\int -\\sin x\\,dx = \\cos x\\). Antiderivative:\\[F(x) = \\dfrac{1}{2}x^{2} + \\cos x.\\]",
        "workingOut": "\\(F(x) = \\dfrac{1}{2}x^{2} + \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{1}{2}\\left(\\dfrac{\\pi}{2}\\right)^{2} + \\cos\\dfrac{\\pi}{2} = \\dfrac{1}{2}\\cdot\\dfrac{\\pi^{2}}{4} + 0 = \\dfrac{\\pi^{2}}{8}\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{\\pi^{2}}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit: \\(F(0) = \\dfrac{1}{2}\\cdot 0 + \\cos 0 = 1\\).",
        "workingOut": "\\(F(0) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Difference:\\[A = \\dfrac{\\pi^{2}}{8} - 1.\\]",
        "workingOut": "\\(\\dfrac{\\pi^{2}}{8} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{\\pi^{2}}{8} - 1\\). Positive since \\(\\dfrac{\\pi^{2}}{8} \\approx 1.23 > 1\\). A common slip integrates \\(\\sin x - x\\) and gets \\(1 - \\dfrac{\\pi^{2}}{8}\\).",
        "workingOut": "\\(\\dfrac{\\pi^{2}}{8} - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{\\pi^{2}}{8} + 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1 - \\dfrac{\\pi^{2}}{8}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{2} - 1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi^{2}}{8} - 1\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q6d",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Calculate the area of the region bounded by \\( y = 1 \\) and \\( y = \\cos x \\) from \\( x = -\\dfrac{\\pi}{2} \\) to \\( x = \\dfrac{\\pi}{2} \\).",
    "opts": [
      "\\(\\pi + 2\\)",
      "\\(\\pi - 2\\)",
      "\\(2\\)",
      "\\(\\pi\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate \\(1 - \\cos x\\); antiderivative \\(x - \\sin x\\).",
    "solution": "The correct answer is \\(\\pi - 2\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\), \\(\\cos x \\le 1\\), so the line \\(y = 1\\) is above the cosine curve. Area:\\[A = \\int_{-\\pi/2}^{\\pi/2}\\bigl(1 - \\cos x\\bigr)\\,dx.\\]",
        "workingOut": "\\(A = \\int_{-\\pi/2}^{\\pi/2}(1 - \\cos x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "The integrand is even, so you may write \\(A = 2\\int_{0}^{\\pi/2}(1 - \\cos x)\\,dx\\), or integrate directly over the full interval. Antiderivative:\\[F(x) = x - \\sin x.\\]",
        "workingOut": "\\(F(x) = x - \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{\\pi}{2} - \\sin\\dfrac{\\pi}{2} = \\dfrac{\\pi}{2} - 1\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{\\pi}{2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "At the lower limit: \\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = -\\dfrac{\\pi}{2} - \\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = -\\dfrac{\\pi}{2} - (-1) = -\\dfrac{\\pi}{2} + 1\\).",
        "workingOut": "\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = -\\dfrac{\\pi}{2} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Difference:\\[A = \\left(\\dfrac{\\pi}{2} - 1\\right) - \\left(-\\dfrac{\\pi}{2} + 1\\right) = \\dfrac{\\pi}{2} - 1 + \\dfrac{\\pi}{2} - 1 = \\pi - 2.\\]",
        "workingOut": "\\(A = \\pi - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\pi - 2\\). A common slip forgets the sine terms and answers \\(\\pi\\), or integrates only from 0 to \\(\\dfrac{\\pi}{2}\\) without doubling and gets \\(\\dfrac{\\pi}{2} - 1\\).",
        "workingOut": "\\(\\pi - 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\pi + 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi - 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q7a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Calculate the area of the region bounded by \\( y = \\sin x \\), \\( y = \\cos x \\), and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{4} \\) to \\( x = \\pi \\).",
    "opts": [
      "\\(1\\)",
      "\\(\\sqrt{2}\\)",
      "\\(\\sqrt{2}+1\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Split at \\(\\pi/2\\): first between sin and cos, then under sin to the axis.",
    "solution": "The correct answer is \\(\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Split at \\(x = \\dfrac{\\pi}{2}\\) where the shape of the region changes. On \\(\\left[\\dfrac{\\pi}{4},\\dfrac{\\pi}{2}\\right]\\), both curves are above the axis and \\(\\sin x \\ge \\cos x\\). On \\(\\left[\\dfrac{\\pi}{2},\\pi\\right]\\), sine stays above the axis while cosine is below, so the region down to the axis is under sine only.",
        "workingOut": "\\(A = A_{1} + A_{2}\\)",
        "graphData": null
      },
      {
        "explanation": "First piece: \\(A_{1} = \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx\\). Antiderivative \\(F_{1}(x) = -\\cos x - \\sin x\\).",
        "workingOut": "\\(F_{1}(x) = -\\cos x - \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "\\(A_{1} = F_{1}\\!\\left(\\dfrac{\\pi}{2}\\right) - F_{1}\\!\\left(\\dfrac{\\pi}{4}\\right) = (-1) - \\left(-\\dfrac{\\sqrt{2}}{2}-\\dfrac{\\sqrt{2}}{2}\\right) = -1 + \\sqrt{2} = \\sqrt{2} - 1\\).",
        "workingOut": "\\(A_{1} = \\sqrt{2} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Second piece: \\(A_{2} = \\int_{\\pi/2}^{\\pi}\\sin x\\,dx = [-\\cos x]_{\\pi/2}^{\\pi} = -(-1) - 0 = 1\\).",
        "workingOut": "\\(A_{2} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Total area: \\(A = A_{1} + A_{2} = (\\sqrt{2} - 1) + 1 = \\sqrt{2}\\).",
        "workingOut": "\\(A = \\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sqrt{2}\\). A common slip integrates only one of the two pieces.",
        "workingOut": "\\(\\sqrt{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{2}+1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q7b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "The shaded region is bounded by the line \\( y = x + 1 \\), the curve \\( y = \\cos x \\), and the \\(x\\)-axis: under the line from \\( x = -1 \\) to \\( x = 0 \\), and under the cosine from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{2} \\). Find the exact area of the shaded region.",
    "opts": [
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\dfrac{3}{2}\\)",
      "\\(2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Split at \\(x=0\\): integrate \\(x+1\\) on \\([-1,0]\\) and \\(\\cos x\\) on \\([0,\\pi/2]\\).",
    "solution": "The correct answer is \\(\\dfrac{3}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Split the region at the \\(y\\)-axis: \\(A = A_{\\text{line}} + A_{\\text{cos}}\\), where\\[A_{\\text{line}} = \\int_{-1}^{0}(x + 1)\\,dx,\\qquad A_{\\text{cos}} = \\int_{0}^{\\pi/2}\\cos x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{-1}^{0}(x+1)\\,dx + \\int_{0}^{\\pi/2}\\cos x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Line integral: \\(\\int(x+1)\\,dx = \\dfrac{1}{2}x^{2} + x\\). Evaluate:\\[\\left[\\dfrac{1}{2}x^{2} + x\\right]_{-1}^{0} = 0 - \\left(\\dfrac{1}{2} - 1\\right) = 0 - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{1}{2}.\\]",
        "workingOut": "\\(A_{\\text{line}} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cosine integral: \\(\\int\\cos x\\,dx = \\sin x\\). Evaluate:\\[\\left[\\sin x\\right]_{0}^{\\pi/2} = \\sin\\dfrac{\\pi}{2} - \\sin 0 = 1 - 0 = 1.\\]",
        "workingOut": "\\(A_{\\text{cos}} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = \\dfrac{1}{2} + 1 = \\dfrac{3}{2}\\).",
        "workingOut": "\\(\\dfrac{3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{3}{2}\\). A common slip forgets one of the two pieces.",
        "workingOut": "\\(\\dfrac{3}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q8a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area bounded by one arch of the curve \\( y = \\sin x \\) and the \\(x\\)-axis.",
    "answer": "2",
    "hint": "Integrate \\(\\sin x\\) from 0 to \\(\\pi\\).",
    "solution": "The correct answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "One arch of \\(y = \\sin x\\) lies between consecutive zeros \\(x = 0\\) and \\(x = \\pi\\), where sine is non-negative. Area:\\[A = \\int_{0}^{\\pi}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi}\\sin x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(F(x) = -\\cos x\\).",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(\\pi) - F(0) = (-\\cos\\pi) - (-\\cos 0) = -(-1) - (-1) = 1 + 1 = 2\\).",
        "workingOut": "\\(A = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\). This is the standard area of one arch of the sine curve. A common slip integrates from 0 to \\(\\dfrac{\\pi}{2}\\) only and gets 1.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q8b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area bounded by one arch of the curve \\( y = \\cos 2x \\) and the \\(x\\)-axis.",
    "answer": "1",
    "hint": "Integrate \\(\\cos 2x\\) over one non-negative arch, e.g. \\([-\\pi/4,\\pi/4]\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "Zeros of \\(\\cos 2x\\): \\(2x = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}\\). One arch (where the curve is non-negative) runs from \\(x = -\\dfrac{\\pi}{4}\\) to \\(x = \\dfrac{\\pi}{4}\\).",
        "workingOut": "\\(A = \\int_{-\\pi/4}^{\\pi/4}\\cos 2x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int\\cos 2x\\,dx = \\dfrac{1}{2}\\sin 2x\\).",
        "workingOut": "\\(F(x) = \\dfrac{1}{2}\\sin 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) - F\\!\\left(-\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{2}\\sin\\dfrac{\\pi}{2} - \\dfrac{1}{2}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{1}{2}(1) - \\dfrac{1}{2}(-1) = \\dfrac{1}{2} + \\dfrac{1}{2} = 1\\).",
        "workingOut": "\\(A = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\). Equivalently, one arch of \\(\\cos 2x\\) is a half-period of period \\(\\pi\\), with absolute area 1. A common slip forgets the factor \\(\\dfrac{1}{2}\\) from the chain rule.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9a",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\pi \\).",
    "answer": "2",
    "hint": "Split at \\(\\pi/2\\) and take absolute area.",
    "solution": "The correct answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "Cosine changes sign at \\(x = \\dfrac{\\pi}{2}\\). Area uses absolute value:\\[A = \\int_{0}^{\\pi/2}\\cos x\\,dx + \\int_{\\pi/2}^{\\pi}(-\\cos x)\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi}|\\cos x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "First half: \\([\\sin x]_{0}^{\\pi/2} = 1 - 0 = 1\\).",
        "workingOut": "\\(A_{1} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Second half: \\([-\\sin x]_{\\pi/2}^{\\pi} = (-\\sin\\pi) - (-\\sin\\dfrac{\\pi}{2}) = 0 - (-1) = 1\\).",
        "workingOut": "\\(A_{2} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = 1 + 1 = 2\\). (The signed integral \\(\\int_{0}^{\\pi}\\cos x\\,dx = 0\\) is not the area.)",
        "workingOut": "\\(A = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2\\).",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{4} \\) to \\( x = \\dfrac{3\\pi}{4} \\).",
    "opts": [
      "\\(1\\)",
      "\\(\\sqrt{2}\\)",
      "\\(\\dfrac{\\sqrt{2}}{2}\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\int\\sin x = -\\cos x\\) and exact cos of \\(\\pi/4\\) and \\(3\\pi/4\\).",
    "solution": "The correct answer is \\(\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\right]\\), sine is non-negative, so\\[A = \\int_{\\pi/4}^{3\\pi/4}\\sin x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{\\pi/4}^{3\\pi/4}\\sin x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(F(x) = -\\cos x\\).",
        "workingOut": "\\(F(x) = -\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{3\\pi}{4}\\right) - F\\!\\left(\\dfrac{\\pi}{4}\\right) = \\left(-\\cos\\dfrac{3\\pi}{4}\\right) - \\left(-\\cos\\dfrac{\\pi}{4}\\right)\\).",
        "workingOut": "\\(-\\cos\\dfrac{3\\pi}{4} + \\cos\\dfrac{\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Exact values: \\(\\cos\\dfrac{3\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}\\) and \\(\\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}\\). So\\[A = -\\left(-\\dfrac{\\sqrt{2}}{2}\\right) + \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2}.\\]",
        "workingOut": "\\(A = \\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\sqrt{2}\\).",
        "workingOut": "\\(\\sqrt{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{2}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9c",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos 2x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\pi \\).",
    "answer": "2",
    "hint": "Split at the zeros \\(\\pi/4\\) and \\(3\\pi/4\\); use absolute area.",
    "solution": "The correct answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "Zeros of \\(\\cos 2x\\) on \\([0,\\pi]\\): \\(x = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4}\\). Split into three absolute pieces:\\[A = \\int_{0}^{\\pi/4}\\cos 2x\\,dx + \\int_{\\pi/4}^{3\\pi/4}(-\\cos 2x)\\,dx + \\int_{3\\pi/4}^{\\pi}\\cos 2x\\,dx.\\]",
        "workingOut": "\\(A = \\int_{0}^{\\pi}|\\cos 2x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(\\cos 2x\\) is \\(\\dfrac{1}{2}\\sin 2x\\). First piece: \\(\\left[\\dfrac{1}{2}\\sin 2x\\right]_{0}^{\\pi/4} = \\dfrac{1}{2}\\sin\\dfrac{\\pi}{2} = \\dfrac{1}{2}\\).",
        "workingOut": "\\(A_{1} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Middle piece: \\(\\left[-\\dfrac{1}{2}\\sin 2x\\right]_{\\pi/4}^{3\\pi/4} = -\\dfrac{1}{2}\\sin\\dfrac{3\\pi}{2} - \\left(-\\dfrac{1}{2}\\sin\\dfrac{\\pi}{2}\\right) = -\\dfrac{1}{2}(-1) + \\dfrac{1}{2}(1) = 1\\).",
        "workingOut": "\\(A_{2} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Last piece: \\(\\left[\\dfrac{1}{2}\\sin 2x\\right]_{3\\pi/4}^{\\pi} = \\dfrac{1}{2}\\sin 2\\pi - \\dfrac{1}{2}\\sin\\dfrac{3\\pi}{2} = 0 - \\dfrac{1}{2}(-1) = \\dfrac{1}{2}\\).",
        "workingOut": "\\(A_{3} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = \\dfrac{1}{2} + 1 + \\dfrac{1}{2} = 2\\). Final answer: \\(2\\).",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9d",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin 2x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{3} \\) to \\( x = \\dfrac{2\\pi}{3} \\).",
    "opts": [
      "\\(0\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\dfrac{\\sqrt{3}}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Split at \\(x=\\pi/2\\) where \\(\\sin 2x\\) changes sign.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{3},\\dfrac{2\\pi}{3}\\right]\\), \\(2x\\) runs through \\(\\left[\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}\\right]\\). Sine is positive until \\(2x = \\pi\\) (i.e. \\(x = \\dfrac{\\pi}{2}\\)), then negative. Split at \\(\\dfrac{\\pi}{2}\\).",
        "workingOut": "\\(A = \\int_{\\pi/3}^{\\pi/2}\\sin 2x\\,dx + \\int_{\\pi/2}^{2\\pi/3}(-\\sin 2x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(\\sin 2x\\) is \\(-\\dfrac{1}{2}\\cos 2x\\). First piece:\\[\\left[-\\dfrac{1}{2}\\cos 2x\\right]_{\\pi/3}^{\\pi/2} = -\\dfrac{1}{2}\\cos\\pi - \\left(-\\dfrac{1}{2}\\cos\\dfrac{2\\pi}{3}\\right) = -\\dfrac{1}{2}(-1) + \\dfrac{1}{2}\\left(-\\dfrac{1}{2}\\right) = \\dfrac{1}{2} - \\dfrac{1}{4} = \\dfrac{1}{4}.\\]",
        "workingOut": "\\(A_{1} = \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Second piece: \\(\\int(-\\sin 2x)\\,dx = \\dfrac{1}{2}\\cos 2x\\).\\[\\left[\\dfrac{1}{2}\\cos 2x\\right]_{\\pi/2}^{2\\pi/3} = \\dfrac{1}{2}\\cos\\dfrac{4\\pi}{3} - \\dfrac{1}{2}\\cos\\pi = \\dfrac{1}{2}\\left(-\\dfrac{1}{2}\\right) - \\dfrac{1}{2}(-1) = -\\dfrac{1}{4} + \\dfrac{1}{2} = \\dfrac{1}{4}.\\]",
        "workingOut": "\\(A_{2} = \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}\\).",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{2}\\). A common slip ignores the sign change and computes a signed integral.",
        "workingOut": "\\(\\dfrac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9e",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = -\\dfrac{5\\pi}{6} \\) to \\( x = \\dfrac{7\\pi}{6} \\).",
    "opts": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\pi\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Interval length is \\(2\\pi\\); absolute area of sine over a full period is 4.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "The interval length is \\(\\dfrac{7\\pi}{6} - \\left(-\\dfrac{5\\pi}{6}\\right) = 2\\pi\\). Area means \\(\\int|\\sin x|\\,dx\\) over an interval of length one full period.",
        "workingOut": "\\(A = \\int_{-5\\pi/6}^{7\\pi/6}|\\sin x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Over any interval of length \\(2\\pi\\), the absolute area under one full period of sine is the same as from 0 to \\(2\\pi\\), namely 4 (two arches of area 2 each).",
        "workingOut": "\\(\\int_{0}^{2\\pi}|\\sin x|\\,dx = 4\\)",
        "graphData": null
      },
      {
        "explanation": "By the periodicity of \\(|\\sin x|\\) (period \\(\\pi\\) for the absolute function, and length \\(2\\pi\\) covers two absolute periods), the integral equals 4.",
        "workingOut": "\\(A = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\). A common slip computes the signed integral and gets 0, or counts only one arch and gets 2.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q9f",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Area",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos 3x \\) and the \\(x\\)-axis from \\( x = \\dfrac{\\pi}{6} \\) to \\( x = \\dfrac{2\\pi}{3} \\).",
    "answer": "1",
    "hint": "Split at \\(x=\\pi/2\\); antiderivative \\(\\dfrac{1}{3}\\sin 3x\\).",
    "solution": "The correct answer is \\(1\\).",
    "solutionSteps": [
      {
        "explanation": "On \\(\\left[\\dfrac{\\pi}{6},\\dfrac{2\\pi}{3}\\right]\\), \\(3x\\) runs from \\(\\dfrac{\\pi}{2}\\) to \\(2\\pi\\). Cosine is negative on \\(\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}\\right)\\) and positive on \\(\\left(\\dfrac{3\\pi}{2},2\\pi\\right)\\). Split at \\(x = \\dfrac{\\pi}{2}\\) (where \\(3x = \\dfrac{3\\pi}{2}\\)).",
        "workingOut": "\\(A = -\\int_{\\pi/6}^{\\pi/2}\\cos 3x\\,dx + \\int_{\\pi/2}^{2\\pi/3}\\cos 3x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative of \\(\\cos 3x\\) is \\(\\dfrac{1}{3}\\sin 3x\\). First (absolute) piece:\\[-\\left[\\dfrac{1}{3}\\sin 3x\\right]_{\\pi/6}^{\\pi/2} = -\\dfrac{1}{3}\\sin\\dfrac{3\\pi}{2} + \\dfrac{1}{3}\\sin\\dfrac{\\pi}{2} = -\\dfrac{1}{3}(-1) + \\dfrac{1}{3}(1) = \\dfrac{2}{3}.\\]",
        "workingOut": "\\(A_{1} = \\dfrac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Second piece:\\[\\left[\\dfrac{1}{3}\\sin 3x\\right]_{\\pi/2}^{2\\pi/3} = \\dfrac{1}{3}\\sin 2\\pi - \\dfrac{1}{3}\\sin\\dfrac{3\\pi}{2} = 0 - \\dfrac{1}{3}(-1) = \\dfrac{1}{3}.\\]",
        "workingOut": "\\(A_{2} = \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = \\dfrac{2}{3} + \\dfrac{1}{3} = 1\\).",
        "workingOut": "\\(A = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(1\\). A common slip forgets absolute value or the chain factor \\(\\dfrac{1}{3}\\).",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{1}{3}\\)",
      "\\(1\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(2\\)"
    ],
    "options": [
      {
        "text": "\\(\\dfrac{1}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "origin": "seed",
    "isActive": true,
    "chapterId": "y12a-6"
  },
  {
    "id": "y12a-6e-q10",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Area",
    "c": "6E",
    "t": "Area",
    "year": "Year 12",
    "type": "multi_part",
    "difficulty": "medium",
    "timeLimit": 300,
    "question": "Consider the curve \\( y = 2\\cos\\pi x \\) on the interval \\( [-1, 1] \\).",
    "answer": "",
    "hint": "First find the intercepts by solving \\(\\cos\\pi x = 0\\), then integrate between them for the area.",
    "solution": "",
    "solutionSteps": [],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y12a-6e-q10a",
        "topicId": "y12a-6E",
        "chapterId": "y12a-6",
        "chapterTitle": "Chapter 6: The trigonometric functions",
        "topicCode": "6E",
        "topicTitle": "Applications of integration",
        "c": "6E",
        "t": "Applications of integration",
        "year": "Year 12",
        "origin": "seed",
        "isNew": true,
        "isManual": true,
        "graphData": null,
        "isActive": false,
        "subQuestions": [],
        "blanks": [],
        "questionImage": "",
        "examPaper": "",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 180,
        "title": "Sketch the curve  y = 2\\cos\\pi x  on the interval  [-1,…",
        "question": "(a) Sketch the curve \\( y = 2\\cos\\pi x \\) on the interval \\( [-1, 1] \\), clearly marking the two \\(x\\)-intercepts.",
        "answer": "Cosine wave of amplitude 2 and period 2 on \\([-1,1]\\): intercepts at \\(x = \\pm\\dfrac{1}{2}\\); maximum at \\((0,2)\\); endpoints \\((\\pm 1,-2)\\). See solution graph.",
        "hint": "Find where \\(\\cos\\pi x = 0\\) on \\([-1,1]\\); mark intercepts and the max/min.",
        "solution": "Cosine wave of amplitude 2 and period 2 on \\([-1,1]\\): intercepts at \\(x = \\pm\\dfrac{1}{2}\\); maximum at \\((0,2)\\); endpoints \\((\\pm 1,-2)\\). See solution graph.",
        "solutionSteps": [
          {
            "explanation": "Identify the key features of \\(y = 2\\cos\\pi x\\). Amplitude is 2 (vertical stretch by 2). Period: ordinary cos has period \\(2\\pi\\); with argument \\(\\pi x\\) the period is \\(\\dfrac{2\\pi}{\\pi} = 2\\).",
            "workingOut": "\\(\\text{amplitude }2,\\ \\text{period }2\\)",
            "graphData": null
          },
          {
            "explanation": "\\(x\\)-intercepts: set \\(2\\cos\\pi x = 0 \\Rightarrow \\cos\\pi x = 0 \\Rightarrow \\pi x = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{1}{2} + k\\). On the interval \\([-1,1]\\) the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\) (marked in red on the graph).",
            "workingOut": "\\(x = \\pm\\dfrac{1}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Other landmarks: at \\(x = 0\\), \\(y = 2\\) (maximum, green). At the ends of the interval, \\(x = \\pm 1\\), \\(\\cos(\\pm\\pi) = -1\\) so \\(y = -2\\) (minima).",
            "workingOut": "\\((0,2),\\ (\\pm 1,-2)\\)",
            "graphData": null
          },
          {
            "explanation": "Solution sketch on \\([-1,1]\\): a smooth cosine wave from \\((-1,-2)\\) up through the intercept \\((-\\tfrac{1}{2},0)\\) to the maximum \\((0,2)\\), then down through \\((\\tfrac{1}{2},0)\\) to \\((1,-2)\\). The two intercepts are clearly marked.",
            "workingOut": "\\(\\text{sketch on }[-1,1]\\)",
            "graphData": {
              "jsxGraph": {
                "width": 440,
                "height": 300,
                "boundingbox": [
                  -1.45,
                  2.7,
                  1.45,
                  -2.5
                ],
                "showAxisLabels": false,
                "showGrid": false,
                "script": "board.suspendUpdate(); board.create('arrow', [[-1.45,0],[1.45,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-2.5],[0,2.7]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.2, -0.45, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.1, 2.35, 'y'], {fontSize:13, color:'#64748b'});board.create('line', [[-1,-2.4],[-1,2.6]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('line', [[1,-2.4],[1,2.6]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});var f = board.create('functiongraph', [function(x){ return 2*Math.cos(Math.PI*x); }, -1, 1], {strokeColor:'#6366f1', strokeWidth:2.8});board.create('point', [-0.5, 0], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('point', [0.5, 0], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('point', [0, 2], {name:'', size:2.5, color:'#10b981', fixed:true});board.create('point', [-1, -2], {name:'', size:2.2, color:'#64748b', fixed:true});board.create('point', [1, -2], {name:'', size:2.2, color:'#64748b', fixed:true});board.create('text', [-0.5, -0.45, '(-1/2, 0)'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.5, -0.45, '(1/2, 0)'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.12, 2.15, '(0, 2)'], {fontSize:11, color:'#059669'});board.create('text', [-1, -2.3, '(-1,-2)'], {fontSize:11, color:'#64748b', anchorX:'middle'});board.create('text', [1, -2.3, '(1,-2)'], {fontSize:11, color:'#64748b', anchorX:'middle'});board.create('text', [0.15, 1.35, 'y = 2 cos πx'], {fontSize:13, color:'#4f46e5'});board.create('text', [-1.35, 2.2, '[-1, 1]'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
              }
            }
          },
          {
            "explanation": "Final: labelled sketch with amplitude 2, period 2 restricted to \\([-1,1]\\), and intercepts at \\(\\pm\\dfrac{1}{2}\\).",
            "workingOut": "\\(\\text{sketch complete}\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": true
      },
      {
        "id": "y12a-6e-q10b",
        "topicId": "y12a-6E",
        "chapterId": "y12a-6",
        "chapterTitle": "Chapter 6: The trigonometric functions",
        "topicCode": "6E",
        "topicTitle": "Applications of integration",
        "c": "6E",
        "t": "Applications of integration",
        "year": "Year 12",
        "origin": "seed",
        "isNew": true,
        "isManual": true,
        "graphData": null,
        "isActive": false,
        "subQuestions": [],
        "blanks": [],
        "questionImage": "",
        "examPaper": "",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 120,
        "title": "Find the exact area bounded by the curve  y = 2\\cos\\pi …",
        "question": "(b) Find the exact area bounded by the curve \\( y = 2\\cos\\pi x \\) and the \\(x\\)-axis, between the two \\(x\\)-intercepts found in part (a).",
        "opts": [
          "\\(-\\dfrac{4}{\\pi}\\)",
          "\\(\\dfrac{1}{\\pi}\\)",
          "\\(\\dfrac{4}{\\pi}\\)",
          "\\(\\dfrac{\\pi}{4}\\)"
        ],
        "options": [
          {
            "text": "\\(-\\dfrac{4}{\\pi}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{1}{\\pi}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{4}{\\pi}\\)",
            "imageUrl": null
          },
          {
            "text": "\\(\\dfrac{\\pi}{4}\\)",
            "imageUrl": null
          }
        ],
        "a": 2,
        "answer": "2",
        "hint": "Integrate \\(2\\cos\\pi x\\) from \\(-1/2\\) to \\(1/2\\).",
        "solution": "The correct answer is \\(\\dfrac{4}{\\pi}\\).",
        "solutionSteps": [
          {
            "explanation": "From part (a), the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\). On this interval \\(\\cos\\pi x \\ge 0\\), so the curve is above the axis and area is simply the definite integral (no absolute value needed).",
            "workingOut": "\\(A = \\int_{-1/2}^{1/2} 2\\cos\\pi x\\,dx\\)",
            "graphData": null
          },
          {
            "explanation": "Antiderivative: \\(\\int 2\\cos\\pi x\\,dx = 2\\cdot\\dfrac{1}{\\pi}\\sin\\pi x = \\dfrac{2}{\\pi}\\sin\\pi x\\).",
            "workingOut": "\\(F(x) = \\dfrac{2}{\\pi}\\sin\\pi x\\)",
            "graphData": null
          },
          {
            "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{1}{2}\\right) - F\\!\\left(-\\dfrac{1}{2}\\right) = \\dfrac{2}{\\pi}\\sin\\dfrac{\\pi}{2} - \\dfrac{2}{\\pi}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{2}{\\pi}(1) - \\dfrac{2}{\\pi}(-1) = \\dfrac{2}{\\pi} + \\dfrac{2}{\\pi} = \\dfrac{4}{\\pi}\\).",
            "workingOut": "\\(\\dfrac{4}{\\pi}\\)",
            "graphData": null
          },
          {
            "explanation": "Area is positive, so reject negative options. Final answer: \\(\\dfrac{4}{\\pi}\\).",
            "workingOut": "\\(\\dfrac{4}{\\pi}\\)",
            "graphData": null
          }
        ],
        "requiresManualGrading": false
      }
    ],
    "requiresManualGrading": true,
    "isActive": true,
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "title": "Curve y = 2 cos πx: sketch and area…"
  },
  {
    "id": "y12a-6e-q10a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": false,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "title": "Sketch the curve  y = 2\\cos\\pi x  on the interval  [-1,…",
    "question": "(a) Sketch the curve \\( y = 2\\cos\\pi x \\) on the interval \\( [-1, 1] \\), clearly marking the two \\(x\\)-intercepts.",
    "answer": "Cosine wave of amplitude 2 and period 2 on \\([-1,1]\\): intercepts at \\(x = \\pm\\dfrac{1}{2}\\); maximum at \\((0,2)\\); endpoints \\((\\pm 1,-2)\\). See solution graph.",
    "hint": "Find where \\(\\cos\\pi x = 0\\) on \\([-1,1]\\); mark intercepts and the max/min.",
    "solution": "Cosine wave of amplitude 2 and period 2 on \\([-1,1]\\): intercepts at \\(x = \\pm\\dfrac{1}{2}\\); maximum at \\((0,2)\\); endpoints \\((\\pm 1,-2)\\). See solution graph.",
    "solutionSteps": [
      {
        "explanation": "Identify the key features of \\(y = 2\\cos\\pi x\\). Amplitude is 2 (vertical stretch by 2). Period: ordinary cos has period \\(2\\pi\\); with argument \\(\\pi x\\) the period is \\(\\dfrac{2\\pi}{\\pi} = 2\\).",
        "workingOut": "\\(\\text{amplitude }2,\\ \\text{period }2\\)",
        "graphData": null
      },
      {
        "explanation": "\\(x\\)-intercepts: set \\(2\\cos\\pi x = 0 \\Rightarrow \\cos\\pi x = 0 \\Rightarrow \\pi x = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{1}{2} + k\\). On the interval \\([-1,1]\\) the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\) (marked in red on the graph).",
        "workingOut": "\\(x = \\pm\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Other landmarks: at \\(x = 0\\), \\(y = 2\\) (maximum, green). At the ends of the interval, \\(x = \\pm 1\\), \\(\\cos(\\pm\\pi) = -1\\) so \\(y = -2\\) (minima).",
        "workingOut": "\\((0,2),\\ (\\pm 1,-2)\\)",
        "graphData": null
      },
      {
        "explanation": "Solution sketch on \\([-1,1]\\): a smooth cosine wave from \\((-1,-2)\\) up through the intercept \\((-\\tfrac{1}{2},0)\\) to the maximum \\((0,2)\\), then down through \\((\\tfrac{1}{2},0)\\) to \\((1,-2)\\). The two intercepts are clearly marked.",
        "workingOut": "\\(\\text{sketch on }[-1,1]\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 300,
            "boundingbox": [
              -1.45,
              2.7,
              1.45,
              -2.5
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-1.45,0],[1.45,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-2.5],[0,2.7]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [1.2, -0.45, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.1, 2.35, 'y'], {fontSize:13, color:'#64748b'});board.create('line', [[-1,-2.4],[-1,2.6]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('line', [[1,-2.4],[1,2.6]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});var f = board.create('functiongraph', [function(x){ return 2*Math.cos(Math.PI*x); }, -1, 1], {strokeColor:'#6366f1', strokeWidth:2.8});board.create('point', [-0.5, 0], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('point', [0.5, 0], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('point', [0, 2], {name:'', size:2.5, color:'#10b981', fixed:true});board.create('point', [-1, -2], {name:'', size:2.2, color:'#64748b', fixed:true});board.create('point', [1, -2], {name:'', size:2.2, color:'#64748b', fixed:true});board.create('text', [-0.5, -0.45, '(-1/2, 0)'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.5, -0.45, '(1/2, 0)'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.12, 2.15, '(0, 2)'], {fontSize:11, color:'#059669'});board.create('text', [-1, -2.3, '(-1,-2)'], {fontSize:11, color:'#64748b', anchorX:'middle'});board.create('text', [1, -2.3, '(1,-2)'], {fontSize:11, color:'#64748b', anchorX:'middle'});board.create('text', [0.15, 1.35, 'y = 2 cos πx'], {fontSize:13, color:'#4f46e5'});board.create('text', [-1.35, 2.2, '[-1, 1]'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Final: labelled sketch with amplitude 2, period 2 restricted to \\([-1,1]\\), and intercepts at \\(\\pm\\dfrac{1}{2}\\).",
        "workingOut": "\\(\\text{sketch complete}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6e-q10b",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": false,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "Find the exact area bounded by the curve  y = 2\\cos\\pi …",
    "question": "(b) Find the exact area bounded by the curve \\( y = 2\\cos\\pi x \\) and the \\(x\\)-axis, between the two \\(x\\)-intercepts found in part (a).",
    "opts": [
      "\\(-\\dfrac{4}{\\pi}\\)",
      "\\(\\dfrac{1}{\\pi}\\)",
      "\\(\\dfrac{4}{\\pi}\\)",
      "\\(\\dfrac{\\pi}{4}\\)"
    ],
    "options": [
      {
        "text": "\\(-\\dfrac{4}{\\pi}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{\\pi}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{4}{\\pi}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{\\pi}{4}\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Integrate \\(2\\cos\\pi x\\) from \\(-1/2\\) to \\(1/2\\).",
    "solution": "The correct answer is \\(\\dfrac{4}{\\pi}\\).",
    "solutionSteps": [
      {
        "explanation": "From part (a), the intercepts are \\(x = -\\dfrac{1}{2}\\) and \\(x = \\dfrac{1}{2}\\). On this interval \\(\\cos\\pi x \\ge 0\\), so the curve is above the axis and area is simply the definite integral (no absolute value needed).",
        "workingOut": "\\(A = \\int_{-1/2}^{1/2} 2\\cos\\pi x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int 2\\cos\\pi x\\,dx = 2\\cdot\\dfrac{1}{\\pi}\\sin\\pi x = \\dfrac{2}{\\pi}\\sin\\pi x\\).",
        "workingOut": "\\(F(x) = \\dfrac{2}{\\pi}\\sin\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F\\!\\left(\\dfrac{1}{2}\\right) - F\\!\\left(-\\dfrac{1}{2}\\right) = \\dfrac{2}{\\pi}\\sin\\dfrac{\\pi}{2} - \\dfrac{2}{\\pi}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{2}{\\pi}(1) - \\dfrac{2}{\\pi}(-1) = \\dfrac{2}{\\pi} + \\dfrac{2}{\\pi} = \\dfrac{4}{\\pi}\\).",
        "workingOut": "\\(\\dfrac{4}{\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Area is positive, so reject negative options. Final answer: \\(\\dfrac{4}{\\pi}\\).",
        "workingOut": "\\(\\dfrac{4}{\\pi}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q11a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 150,
    "title": "An arch window 3 metres high and 2 metres wide is made …",
    "question": "An arch window 3 metres high and 2 metres wide is made in the shape of the curve \\( y = 3\\cos\\!\\left(\\dfrac{\\pi}{2}x\\right) \\). Find the area of the window in square metres, correct to one decimal place.",
    "opts": [
      "\\(2.8\\)",
      "\\(3.2\\)",
      "\\(3.8\\)",
      "\\(4.8\\)"
    ],
    "options": [
      {
        "text": "\\(2.8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3.2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(3.8\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4.8\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Integrate from \\(x=-1\\) to \\(x=1\\); then approximate \\(12/\\pi\\).",
    "solution": "The correct answer is \\(3.8\\).",
    "solutionSteps": [
      {
        "explanation": "Width 2 m and height 3 m match the model: at \\(x = 0\\), \\(y = 3\\); the arch meets the ground where \\(y = 0\\), i.e. \\(\\cos\\dfrac{\\pi x}{2} = 0 \\Rightarrow \\dfrac{\\pi x}{2} = \\pm\\dfrac{\\pi}{2} \\Rightarrow x = \\pm 1\\). So integrate from \\(-1\\) to \\(1\\).",
        "workingOut": "\\(A = \\int_{-1}^{1} 3\\cos\\dfrac{\\pi x}{2}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\int 3\\cos\\dfrac{\\pi x}{2}\\,dx = 3\\cdot\\dfrac{2}{\\pi}\\sin\\dfrac{\\pi x}{2} = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{2}\\).",
        "workingOut": "\\(F(x) = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(1) - F(-1) = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi}{2} - \\dfrac{6}{\\pi}\\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{6}{\\pi}(1) - \\dfrac{6}{\\pi}(-1) = \\dfrac{12}{\\pi}\\).",
        "workingOut": "\\(A = \\dfrac{12}{\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Numerically \\(\\dfrac{12}{\\pi} \\approx \\dfrac{12}{3.1416} \\approx 3.8197\\), which to one decimal place is \\(3.8\\) m\\(^2\\).",
        "workingOut": "\\(3.8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3.8\\). A common slip integrates only from 0 to 1 and halves the width incorrectly, getting about 1.9.",
        "workingOut": "\\(3.8\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q12a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "The graphs of  y = x - \\sin x  and  y = x  enclose a re…",
    "question": "The graphs of \\( y = x - \\sin x \\) and \\( y = x \\) enclose a region. Find the total area enclosed between these graphs from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "The gap is \\(\\sin x\\); use absolute value / split at \\(\\pi\\).",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "The vertical gap between the curves is \\(x - (x - \\sin x) = \\sin x\\). So the enclosed area is the area between \\(y = \\sin x\\) and the \\(x\\)-axis from 0 to \\(2\\pi\\) (total absolute area).",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\sin x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "On \\([0,\\pi]\\), \\(\\sin x \\ge 0\\); on \\([\\pi,2\\pi]\\), \\(\\sin x \\le 0\\). Split: \\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx\\).",
        "workingOut": "\\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}-\\sin x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "First half: \\([-\\cos x]_{0}^{\\pi} = -(-1) - (-1) = 1 + 1 = 2\\). Second half: \\([\\cos x]_{\\pi}^{2\\pi} = 1 - (-1) = 2\\).",
        "workingOut": "\\(2 + 2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Total area: \\(4\\). A common slip computes the signed integral \\(\\int_{0}^{2\\pi}\\sin x\\,dx = 0\\) and wrongly concludes the area is 0.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q13a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "The region R is bounded by the curve  y = \\tan x , the …",
    "question": "The region \\(R\\) is bounded by the curve \\( y = \\tan x \\), the \\(x\\)-axis and the line \\( x = \\dfrac{\\pi}{3} \\). The area of \\(R\\) is:",
    "opts": [
      "\\(\\ln\\dfrac{1}{2}\\)",
      "\\(\\ln 2\\)",
      "\\(\\dfrac{1}{2}\\ln 2\\)",
      "\\(1\\)"
    ],
    "options": [
      {
        "text": "\\(\\ln\\dfrac{1}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\ln 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1}{2}\\ln 2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "\\(\\int\\tan x = -\\ln|\\cos x|\\); evaluate from 0 to \\(\\pi/3\\).",
    "solution": "The correct answer is \\(\\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "From \\(x = 0\\) to \\(x = \\dfrac{\\pi}{3}\\), \\(\\tan x \\ge 0\\), so area is \\(\\displaystyle\\int_{0}^{\\pi/3}\\tan x\\,dx\\).",
        "workingOut": "\\(A = \\int_{0}^{\\pi/3}\\tan x\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\). Substitute \\(u = \\cos x\\), \\(du = -\\sin x\\,dx\\): \\(\\int\\tan x\\,dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C\\).",
        "workingOut": "\\(\\int\\tan x\\,dx = -\\ln|\\cos x| + C\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\([-\\ln\\cos x]_{0}^{\\pi/3} = \\left(-\\ln\\cos\\dfrac{\\pi}{3}\\right) - \\left(-\\ln\\cos 0\\right) = -\\ln\\dfrac{1}{2} + \\ln 1 = -\\ln\\dfrac{1}{2} = \\ln 2\\).",
        "workingOut": "\\(\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\ln 2\\). A common slip stops at \\(-\\ln\\dfrac{1}{2}\\) without rewriting as \\(\\ln 2\\), or uses the wrong upper limit.",
        "workingOut": "\\(\\ln 2\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q14a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "title": "Sketch the region bounded by the graphs of  y = \\sin x …",
    "question": "Sketch the region bounded by the graphs of \\( y = \\sin x \\) and \\( y = \\cos x \\), and by the vertical lines \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).",
    "answer": "On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\), \\(\\cos x \\ge \\sin x\\). Sketch both curves between the vertical lines \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\); shade the region between them (see solution graph).",
    "hint": "Decide which curve is above; shade between the curves and the vertical lines.",
    "solution": "On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\), \\(\\cos x \\ge \\sin x\\). Sketch both curves between the vertical lines \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\); shade the region between them (see solution graph).",
    "solutionSteps": [
      {
        "explanation": "Vertical boundaries: the region is cut off by the lines \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\) (dashed in red on the diagram). Sketch both \\(y = \\sin x\\) (indigo) and \\(y = \\cos x\\) (green) on this interval.",
        "workingOut": "\\(x \\in \\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "Compare heights on the interval: they would meet where \\(\\sin x = \\cos x\\), i.e. at \\(x = \\dfrac{\\pi}{4}\\), which lies to the right of \\(\\dfrac{\\pi}{6}\\). So throughout \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\) we have \\(\\cos x \\ge \\sin x\\) — cosine is the upper curve.",
        "workingOut": "\\(\\cos x \\ge \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Mark the endpoints: at \\(x = -\\dfrac{\\pi}{2}\\), \\(\\sin = -1\\) and \\(\\cos = 0\\); at \\(x = \\dfrac{\\pi}{6}\\), \\(\\sin = \\dfrac{1}{2}\\) and \\(\\cos = \\dfrac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(\\left(-\\dfrac{\\pi}{2},-1\\right),\\ \\left(-\\dfrac{\\pi}{2},0\\right);\\ \\left(\\dfrac{\\pi}{6},\\dfrac{1}{2}\\right),\\ \\left(\\dfrac{\\pi}{6},\\dfrac{\\sqrt{3}}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Solution sketch: shade the band between the two curves from the left vertical line to the right (region \\(R\\) in the figure). This is the region whose area is found in part (b).",
        "workingOut": "\\(\\text{region } R \\text{ between } \\cos x \\text{ and } \\sin x\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 280,
            "boundingbox": [
              -2,
              1.45,
              1.2,
              -1.35
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-2,0],[1.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.35],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [0.95, -0.35, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.12, 1.25, 'y'], {fontSize:13, color:'#64748b'});board.create('polygon', [[-1.5707963267948966,6.123233995736766e-17],[-1.5184364492350666,0.052335956242943966],[-1.4660765716752369,0.10452846326765346],[-1.413716694115407,0.15643446504023092],[-1.361356816555577,0.20791169081775945],[-1.3089969389957472,0.25881904510252074],[-1.2566370614359172,0.30901699437494745],[-1.2042771838760875,0.35836794954530016],[-1.1519173063162575,0.4067366430758002],[-1.0995574287564276,0.45399049973954686],[-1.0471975511965979,0.4999999999999999],[-0.9948376736367679,0.5446390350150271],[-0.9424777960769379,0.5877852522924731],[-0.8901179185171081,0.6293203910498375],[-0.8377580409572782,0.6691306063588582],[-0.7853981633974484,0.7071067811865475],[-0.7330382858376184,0.7431448254773942],[-0.6806784082777886,0.7771459614569708],[-0.6283185307179586,0.8090169943749475],[-0.5759586531581288,0.838670567945424],[-0.5235987755982989,0.8660254037844386],[-0.47123889803846897,0.8910065241883679],[-0.41887902047863923,0.9135454576426009],[-0.36651914291880927,0.9335804264972017],[-0.3141592653589793,0.9510565162951535],[-0.2617993877991496,0.9659258262890682],[-0.20943951023931962,0.9781476007338056],[-0.15707963267948988,0.9876883405951377],[-0.10471975511965992,0.9945218953682733],[-0.05235987755982996,0.9986295347545738],[-2.220446049250313e-16,1],[0.05235987755982974,0.9986295347545738],[0.1047197551196597,0.9945218953682733],[0.15707963267948943,0.9876883405951378],[0.2094395102393194,0.9781476007338057],[0.26179938779914913,0.9659258262890683],[0.3141592653589793,0.9510565162951535],[0.36651914291880905,0.9335804264972019],[0.418879020478639,0.913545457642601],[0.47123889803846897,0.8910065241883679],[0.5235987755982987,0.8660254037844387],[0.5235987755982987,0.49999999999999983],[0.47123889803846897,0.45399049973954675],[0.418879020478639,0.40673664307580015],[0.36651914291880905,0.3583679495453001],[0.3141592653589793,0.3090169943749474],[0.26179938779914913,0.25881904510252046],[0.2094395102393194,0.20791169081775918],[0.15707963267948943,0.15643446504023065],[0.1047197551196597,0.10452846326765339],[0.05235987755982974,0.05233595624294368],[-2.220446049250313e-16,-2.220446049250313e-16],[-0.05235987755982996,-0.052335956242943904],[-0.10471975511965992,-0.10452846326765361],[-0.15707963267948988,-0.1564344650402311],[-0.20943951023931962,-0.2079116908177594],[-0.2617993877991496,-0.2588190451025209],[-0.3141592653589793,-0.3090169943749474],[-0.36651914291880927,-0.3583679495453003],[-0.41887902047863923,-0.4067366430758003],[-0.47123889803846897,-0.45399049973954675],[-0.5235987755982989,-0.5],[-0.5759586531581288,-0.5446390350150271],[-0.6283185307179586,-0.5877852522924731],[-0.6806784082777886,-0.6293203910498375],[-0.7330382858376184,-0.6691306063588582],[-0.7853981633974484,-0.7071067811865476],[-0.8377580409572782,-0.7431448254773942],[-0.8901179185171081,-0.7771459614569709],[-0.9424777960769379,-0.8090169943749475],[-0.9948376736367679,-0.838670567945424],[-1.0471975511965979,-0.8660254037844387],[-1.0995574287564276,-0.8910065241883678],[-1.1519173063162575,-0.9135454576426009],[-1.2042771838760875,-0.9335804264972017],[-1.2566370614359172,-0.9510565162951535],[-1.3089969389957472,-0.9659258262890683],[-1.361356816555577,-0.9781476007338056],[-1.413716694115407,-0.9876883405951378],[-1.4660765716752369,-0.9945218953682733],[-1.5184364492350666,-0.9986295347545738],[-1.5707963267948966,-1]], {fillColor:'#93c5fd', fillOpacity:0.4, borders: {strokeWidth:0}, vertices: {visible:false}});board.create('functiongraph', [function(x){ return Math.sin(x); }, -1.95, 1.15], {strokeColor:'#6366f1', strokeWidth:2.5});board.create('functiongraph', [function(x){ return Math.cos(x); }, -1.95, 1.15], {strokeColor:'#10b981', strokeWidth:2.5});board.create('line', [[-1.5707963267948966,-1.25],[-1.5707963267948966,1.3499999999999999]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.5, dash:2});board.create('line', [[0.5235987755982988,-1.25],[0.5235987755982988,1.3499999999999999]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.5, dash:2});board.create('text', [0.55, 1.15, 'y = cos x'], {fontSize:12, color:'#059669'});board.create('text', [0.55, -0.95, 'y = sin x'], {fontSize:12, color:'#4f46e5'});board.create('text', [-1.5707963267948966, -1.2, '-π/2'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.5235987755982988, -1.2, 'π/6'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [-0.35, 0.35, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:'bold'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Final: a labelled sketch with both curves, the two vertical lines, and the shaded region between them on \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\).",
        "workingOut": "\\(\\text{sketch complete}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6e-q14b",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "title": "Find the exact area of the region bounded by  y = \\sin …",
    "question": "Find the exact area of the region bounded by \\( y = \\sin x \\), \\( y = \\cos x \\), \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).",
    "opts": [
      "\\(\\dfrac{3 - \\sqrt{3}}{2}\\)",
      "\\(\\dfrac{3 + \\sqrt{3}}{2}\\)",
      "\\(\\dfrac{1 + \\sqrt{3}}{2}\\)",
      "\\(2\\)"
    ],
    "options": [
      {
        "text": "\\(\\dfrac{3 - \\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3 + \\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{1 + \\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate \\(\\cos x - \\sin x\\) from \\(-\\pi/2\\) to \\(\\pi/6\\).",
    "solution": "The correct answer is \\(\\dfrac{3 + \\sqrt{3}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "From the sketch, area is \\(\\displaystyle\\int_{-\\pi/2}^{\\pi/6}(\\cos x - \\sin x)\\,dx\\).",
        "workingOut": "\\(A = \\int_{-\\pi/2}^{\\pi/6}(\\cos x - \\sin x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\sin x + \\cos x\\) (since integral of \\(-\\sin x\\) is \\(\\cos x\\)).",
        "workingOut": "\\(F(x) = \\sin x + \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "At upper limit: \\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\sin\\dfrac{\\pi}{6} + \\cos\\dfrac{\\pi}{6} = \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1 + \\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "At lower limit: \\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = \\sin\\!\\left(-\\dfrac{\\pi}{2}\\right) + \\cos\\!\\left(-\\dfrac{\\pi}{2}\\right) = -1 + 0 = -1\\).",
        "workingOut": "\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Difference: \\(\\dfrac{1 + \\sqrt{3}}{2} - (-1) = \\dfrac{1 + \\sqrt{3}}{2} + 1 = \\dfrac{1 + \\sqrt{3} + 2}{2} = \\dfrac{3 + \\sqrt{3}}{2}\\).",
        "workingOut": "\\(\\dfrac{3 + \\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q15a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "The curves  y = \\sin x  and  y = \\cos 2x  intersect at …",
    "question": "The curves \\( y = \\sin x \\) and \\( y = \\cos 2x \\) intersect at which of the following pairs of \\(x\\)-values (among others may exist)?",
    "opts": [
      "\\(x = 0\\) and \\(x = \\dfrac{\\pi}{2}\\)",
      "\\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\)",
      "\\(x = \\dfrac{\\pi}{4}\\) and \\(x = \\dfrac{\\pi}{3}\\)",
      "\\(x = -\\dfrac{\\pi}{6}\\) and \\(x = \\dfrac{\\pi}{2}\\)"
    ],
    "options": [
      {
        "text": "\\(x = 0\\) and \\(x = \\dfrac{\\pi}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x = \\dfrac{\\pi}{4}\\) and \\(x = \\dfrac{\\pi}{3}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(x = -\\dfrac{\\pi}{6}\\) and \\(x = \\dfrac{\\pi}{2}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(\\cos 2x = 1 - 2\\sin^{2}x\\).",
    "solution": "The correct answer is \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(\\sin x = \\cos 2x\\). Use the double-angle identity \\(\\cos 2x = 1 - 2\\sin^{2}x\\).",
        "workingOut": "\\(\\sin x = 1 - 2\\sin^{2}x\\)",
        "graphData": null
      },
      {
        "explanation": "Let \\(u = \\sin x\\): \\(u = 1 - 2u^{2} \\Rightarrow 2u^{2} + u - 1 = 0 \\Rightarrow (2u - 1)(u + 1) = 0\\). So \\(u = \\dfrac{1}{2}\\) or \\(u = -1\\).",
        "workingOut": "\\(\\sin x = \\dfrac{1}{2}\\ \\text{or}\\ \\sin x = -1\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\sin x = -1 \\Rightarrow x = -\\dfrac{\\pi}{2}\\) (principal value in the usual sketching interval). \\(\\sin x = \\dfrac{1}{2} \\Rightarrow x = \\dfrac{\\pi}{6}\\) (among others).",
        "workingOut": "\\(x = -\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify by substitution: at \\(-\\dfrac{\\pi}{2}\\), both sides equal \\(-1\\); at \\(\\dfrac{\\pi}{6}\\), both equal \\(\\dfrac{1}{2}\\).",
        "workingOut": "\\(\\text{verified}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q15b",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "title": "On the same axes, sketch  y = \\sin x  and  y = \\cos 2x …",
    "question": "On the same axes, sketch \\( y = \\sin x \\) and \\( y = \\cos 2x \\) on the interval \\( \\left[-\\dfrac{\\pi}{2},\\,\\dfrac{\\pi}{6}\\right] \\), marking the intersection points from part (a).",
    "answer": "On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\) both curves meet at the endpoints. \\(\\cos 2x\\) is above \\(\\sin x\\) between them. See the solution graph (shaded region \\(R\\)).",
    "hint": "Mark the intersection points from part (a); decide which curve is above.",
    "solution": "On \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\) both curves meet at the endpoints. \\(\\cos 2x\\) is above \\(\\sin x\\) between them. See the solution graph (shaded region \\(R\\)).",
    "solutionSteps": [
      {
        "explanation": "Interval endpoints are the intersection points from part (a): \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{\\pi}{6}\\) (dashed red lines). Plot both curves on this closed interval.",
        "workingOut": "\\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{6}\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "\\(y = \\sin x\\) (indigo): from \\(\\left(-\\dfrac{\\pi}{2},-1\\right)\\) up to \\(\\left(\\dfrac{\\pi}{6},\\dfrac{1}{2}\\right)\\). \\(y = \\cos 2x\\) (green): same left endpoint \\(-1\\), then rises more quickly (double angle) and meets sine again at the right endpoint.",
        "workingOut": "\\(\\text{both meet at the endpoints}\\)",
        "graphData": null
      },
      {
        "explanation": "Between the intersections, \\(\\cos 2x\\) lies above \\(\\sin x\\). Check at \\(x = 0\\): \\(\\cos 0 = 1 > \\sin 0 = 0\\). So the upper curve is cosine of double angle.",
        "workingOut": "\\(\\cos 2x \\ge \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Solution sketch: both curves drawn on the interval, intersection points marked, and the region between them shaded for the area in part (c).",
        "workingOut": "\\(\\text{shaded region between the curves}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 290,
            "boundingbox": [
              -1.9,
              1.45,
              1,
              -1.35
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-1.9,0],[1,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.35],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [0.8, -0.35, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.1, 1.25, 'y'], {fontSize:13, color:'#64748b'});board.create('polygon', [[-1.5707963267948966,-1],[-1.5289084247470326,-0.9964928592495044],[-1.4870205226991688,-0.985996037070505],[-1.4451326206513049,-0.9685831611286311],[-1.403244718603441,-0.944376370237481],[-1.3613568165555772,-0.913545457642601],[-1.3194689145077132,-0.8763066800438636],[-1.2775810124598492,-0.8329212407100994],[-1.2356931104119853,-0.7836934573258397],[-1.1938052083641213,-0.7289686274214113],[-1.1519173063162575,-0.6691306063588582],[-1.1100294042683936,-0.6045991148623748],[-1.0681415022205296,-0.5358267949789964],[-1.0262536001726659,-0.4632960351198619],[-0.9843656981248019,-0.387515586452103],[-0.942477796076938,-0.30901699437494756],[-0.9005898940290741,-0.22835087011065577],[-0.8587019919812102,-0.14608302856241176],[-0.8168140899333463,-0.0627905195293134],[-0.7749261878854824,0.02094241988335683],[-0.7330382858376185,0.10452846326765323],[-0.6911503837897545,0.18738131458572474],[-0.6492624817418906,0.2689198206152657],[-0.6073745796940268,0.3485720473218151],[-0.5654866776461627,0.4257792915650728],[-0.5235987755982989,0.4999999999999999],[-0.48171087355043496,0.5707135676844317],[-0.4398229715025712,0.6374239897486894],[-0.39793506945470725,0.6996633405133653],[-0.3560471674068433,0.7569950556517564],[-0.31415926535897953,0.8090169943749472],[-0.27227136331111534,0.8553642601605067],[-0.2303834612632516,0.8957117602394128],[-0.18849555921538763,0.9297764858882513],[-0.14660765716752389,0.9573194975320671],[-0.10471975511965992,0.9781476007338056],[-0.06283185307179595,0.9921147013144778],[-0.020943951023931984,0.9991228300988584],[0.02094395102393176,0.9991228300988584],[0.06283185307179573,0.9921147013144779],[0.10471975511965947,0.9781476007338058],[0.14660765716752344,0.9573194975320674],[0.18849555921538763,0.9297764858882513],[0.23038346126325138,0.895711760239413],[0.27227136331111534,0.8553642601605067],[0.3141592653589791,0.8090169943749477],[0.35604716740684306,0.7569950556517566],[0.3979350694547068,0.6996633405133659],[0.4398229715025712,0.6374239897486894],[0.48171087355043474,0.570713567684432],[0.5235987755982987,0.5000000000000003],[0.5235987755982987,0.49999999999999983],[0.48171087355043474,0.4632960351198615],[0.4398229715025712,0.42577929156507277],[0.3979350694547068,0.38751558645210266],[0.35604716740684306,0.34857204732181507],[0.3141592653589791,0.3090169943749472],[0.27227136331111534,0.26891982061526565],[0.23038346126325138,0.2283508701106556],[0.18849555921538763,0.18738131458572466],[0.14660765716752344,0.14608302856241137],[0.10471975511965947,0.10452846326765318],[0.06283185307179573,0.06279051952931324],[0.02094395102393176,0.020942419883356767],[-0.020943951023931984,-0.02094241988335699],[-0.06283185307179595,-0.06279051952931346],[-0.10471975511965992,-0.10452846326765361],[-0.14660765716752389,-0.14608302856241182],[-0.18849555921538763,-0.18738131458572466],[-0.2303834612632516,-0.22835087011065583],[-0.27227136331111534,-0.26891982061526565],[-0.31415926535897953,-0.3090169943749476],[-0.3560471674068433,-0.34857204732181524],[-0.39793506945470725,-0.38751558645210304],[-0.4398229715025712,-0.42577929156507277],[-0.48171087355043496,-0.4632960351198617],[-0.5235987755982989,-0.5],[-0.5654866776461627,-0.5358267949789965],[-0.6073745796940268,-0.5707135676844317],[-0.6492624817418906,-0.6045991148623748],[-0.6911503837897545,-0.6374239897486896],[-0.7330382858376185,-0.6691306063588582],[-0.7749261878854824,-0.6996633405133654],[-0.8168140899333463,-0.7289686274214116],[-0.8587019919812102,-0.7569950556517565],[-0.9005898940290741,-0.7836934573258398],[-0.942477796076938,-0.8090169943749475],[-0.9843656981248019,-0.8329212407100995],[-1.0262536001726659,-0.8553642601605067],[-1.0681415022205296,-0.8763066800438636],[-1.1100294042683936,-0.8957117602394129],[-1.1519173063162575,-0.9135454576426009],[-1.1938052083641213,-0.9297764858882513],[-1.2356931104119853,-0.944376370237481],[-1.2775810124598492,-0.9573194975320672],[-1.3194689145077132,-0.9685831611286311],[-1.3613568165555772,-0.9781476007338057],[-1.403244718603441,-0.9859960370705049],[-1.4451326206513049,-0.9921147013144779],[-1.4870205226991688,-0.9964928592495044],[-1.5289084247470326,-0.9991228300988584],[-1.5707963267948966,-1]], {fillColor:'#93c5fd', fillOpacity:0.4, borders: {strokeWidth:0}, vertices: {visible:false}});board.create('functiongraph', [function(x){ return Math.sin(x); }, -1.8499999999999999, 0.95], {strokeColor:'#6366f1', strokeWidth:2.5});board.create('functiongraph', [function(x){ return Math.cos(2*x); }, -1.8499999999999999, 0.95], {strokeColor:'#10b981', strokeWidth:2.5});board.create('line', [[-1.5707963267948966,-1.25],[-1.5707963267948966,1.3499999999999999]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.5, dash:2});board.create('line', [[0.5235987755982988,-1.25],[0.5235987755982988,1.3499999999999999]], {straightFirst:false, straightLast:false, strokeColor:'#f43f5e', strokeWidth:1.5, dash:2});board.create('point', [-1.5707963267948966, -1], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('point', [0.5235987755982988, 0.5], {name:'', size:3, color:'#f43f5e', fixed:true});board.create('text', [0.35, 1.15, 'y = cos 2x'], {fontSize:12, color:'#059669'});board.create('text', [0.35, -0.95, 'y = sin x'], {fontSize:12, color:'#4f46e5'});board.create('text', [-1.5707963267948966, -1.22, '-π/2'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [0.5235987755982988, -1.22, 'π/6'], {fontSize:11, color:'#e11d48', anchorX:'middle'});board.create('text', [-1.5207963267948965, -0.75, '(-π/2,-1)'], {fontSize:10, color:'#e11d48'});board.create('text', [0.4735987755982988, 0.72, '(π/6, 1/2)'], {fontSize:10, color:'#e11d48', anchorX:'right'});board.create('text', [-0.55, 0.25, 'R'], {fontSize:14, color:'#1d4ed8'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Final: labelled sketch with \\(y = \\sin x\\), \\(y = \\cos 2x\\), endpoints \\(\\left(-\\dfrac{\\pi}{2},-1\\right)\\) and \\(\\left(\\dfrac{\\pi}{6},\\dfrac{1}{2}\\right)\\), and shaded region \\(R\\).",
        "workingOut": "\\(\\text{sketch complete}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6e-q15c",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "title": "Hence find the exact area of the region bounded by  y =…",
    "question": "Hence find the exact area of the region bounded by \\( y = \\sin x \\) and \\( y = \\cos 2x \\) between their intersection points \\( x = -\\dfrac{\\pi}{2} \\) and \\( x = \\dfrac{\\pi}{6} \\).",
    "opts": [
      "\\(\\dfrac{\\sqrt{3}}{4}\\)",
      "\\(\\dfrac{3\\sqrt{3}}{4}\\)",
      "\\(\\dfrac{3\\sqrt{3}}{2}\\)",
      "\\(\\sqrt{3}\\)"
    ],
    "options": [
      {
        "text": "\\(\\dfrac{\\sqrt{3}}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3\\sqrt{3}}{4}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{3\\sqrt{3}}{2}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\sqrt{3}\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate \\(\\cos 2x - \\sin x\\) between the intersection points.",
    "solution": "The correct answer is \\(\\dfrac{3\\sqrt{3}}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Area: \\(\\displaystyle\\int_{-\\pi/2}^{\\pi/6}(\\cos 2x - \\sin x)\\,dx\\) (upper curve minus lower).",
        "workingOut": "\\(A = \\int_{-\\pi/2}^{\\pi/6}(\\cos 2x - \\sin x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Antiderivative: \\(\\dfrac{1}{2}\\sin 2x + \\cos x\\).",
        "workingOut": "\\(F(x) = \\dfrac{1}{2}\\sin 2x + \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(\\dfrac{\\pi}{6}\\): \\(\\dfrac{1}{2}\\sin\\dfrac{\\pi}{3} + \\cos\\dfrac{\\pi}{6} = \\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{4} + \\dfrac{2\\sqrt{3}}{4} = \\dfrac{3\\sqrt{3}}{4}\\).",
        "workingOut": "\\(F\\!\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{3\\sqrt{3}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(-\\dfrac{\\pi}{2}\\): \\(\\dfrac{1}{2}\\sin(-\\pi) + \\cos\\!\\left(-\\dfrac{\\pi}{2}\\right) = 0 + 0 = 0\\).",
        "workingOut": "\\(F\\!\\left(-\\dfrac{\\pi}{2}\\right) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Area: \\(\\dfrac{3\\sqrt{3}}{4} - 0 = \\dfrac{3\\sqrt{3}}{4}\\).",
        "workingOut": "\\(\\dfrac{3\\sqrt{3}}{4}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16a_i",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "title": "For every positive integer n, the value of \\displaystyl…",
    "question": "For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{2\\pi}\\sin nx\\,dx\\) is:",
    "opts": [
      "\\(2\\)",
      "\\(0\\)",
      "\\(\\dfrac{2}{n}\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2}{n}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the antiderivative of \\(\\sin nx\\), then evaluate at \\(0\\) and \\(2\\pi\\).",
    "solution": "The correct answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: evaluate the signed definite integral \\(\\displaystyle\\int_{0}^{2\\pi}\\sin nx\\,dx\\) for a positive integer \\(n\\). Why an antiderivative first? The fundamental theorem requires \\(F(2\\pi)-F(0)\\) for continuous \\(f\\).",
        "workingOut": "\\(\\int_{0}^{2\\pi}\\sin nx\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Reverse the chain rule: if \\(u = nx\\) then \\(\\int\\sin nx\\,dx = -\\dfrac{1}{n}\\cos nx + C\\). Why divide by \\(n\\)? The inner derivative of \\(nx\\) is \\(n\\).",
        "workingOut": "\\(F(x) = -\\dfrac{1}{n}\\cos nx\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the limits carefully:\\[F(2\\pi)-F(0) = -\\dfrac{1}{n}\\cos(2n\\pi) - \\left(-\\dfrac{1}{n}\\cos 0\\right).\\]For any integer \\(n\\), \\(\\cos(2n\\pi) = 1\\) and \\(\\cos 0 = 1\\).",
        "workingOut": "\\(-\\dfrac{1}{n}(1) + \\dfrac{1}{n}(1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(-\\dfrac{1}{n} + \\dfrac{1}{n} = 0\\). Why is this expected? On \\([0,2\\pi]\\) the function \\(\\sin nx\\) completes exactly \\(n\\) full periods; each period has equal positive and negative area under a signed integral, so they cancel.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Important distinction: this signed integral is \\(0\\), not the geometric area between the curve and the axis (that uses \\(|\\sin nx|\\) and is asked in part (b)). A common slip confuses the two.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(0\\).",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16a_ii",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "title": "For every positive integer n, the value of \\displaystyl…",
    "question": "For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{2\\pi}\\cos nx\\,dx\\) is:",
    "opts": [
      "\\(2\\)",
      "\\(0\\)",
      "\\(\\dfrac{2}{n}\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(\\dfrac{2}{n}\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 1,
    "answer": "1",
    "hint": "Antiderivative of \\(\\cos nx\\) is \\(\\dfrac{1}{n}\\sin nx\\); evaluate at the endpoints.",
    "solution": "The correct answer is \\(0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_{0}^{2\\pi}\\cos nx\\,dx\\) for positive integer \\(n\\). Same strategy as the sine case: antiderivative, then FTC.",
        "workingOut": "\\(\\int_{0}^{2\\pi}\\cos nx\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Chain reverse: \\(\\int\\cos nx\\,dx = \\dfrac{1}{n}\\sin nx + C\\). (Differentiate to check: \\(\\dfrac{1}{n}\\cos nx\\cdot n = \\cos nx\\).)",
        "workingOut": "\\(F(x) = \\dfrac{1}{n}\\sin nx\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(2\\pi) - F(0) = \\dfrac{1}{n}\\sin(2n\\pi) - \\dfrac{1}{n}\\sin 0\\). For integer \\(n\\), \\(\\sin(2n\\pi) = 0\\) and \\(\\sin 0 = 0\\).",
        "workingOut": "\\(\\dfrac{1}{n}\\cdot 0 - \\dfrac{1}{n}\\cdot 0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the integral is \\(0\\). Geometrically: \\(\\cos nx\\) also completes \\(n\\) full periods on \\([0,2\\pi]\\), so the signed areas above and below the axis cancel.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Again, this is not the absolute area between the curve and the axis. Final answer: \\(0\\).",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16b_i",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "title": "Find the area between the curve  y = \\sin x  and the x-…",
    "question": "Find the area between the curve \\( y = \\sin x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use absolute area: split at \\(x=\\pi\\) where \\(\\sin x\\) changes sign.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y = \\sin x\\) and the \\(x\\)-axis from \\(0\\) to \\(2\\pi\\). Why not just \\(\\int\\sin x\\,dx\\)? That signed integral is 0 (part a with \\(n=1\\)). Area means total absolute area: \\(\\displaystyle\\int_{0}^{2\\pi}|\\sin x|\\,dx\\).",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\sin x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Zeros of sine in the interval: \\(x = 0,\\ \\pi,\\ 2\\pi\\). On \\([0,\\pi]\\), \\(\\sin x \\ge 0\\); on \\([\\pi,2\\pi]\\), \\(\\sin x \\le 0\\). Split the integral at \\(\\pi\\).",
        "workingOut": "\\(A = \\int_{0}^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "First piece: \\([-\\cos x]_{0}^{\\pi} = \\bigl(-\\cos\\pi\\bigr) - \\bigl(-\\cos 0\\bigr) = -(-1) - (-1) = 1 + 1 = 2\\). This is the area of the upper hump.",
        "workingOut": "\\(\\int_{0}^{\\pi}\\sin x\\,dx = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Second piece: \\(\\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx = [\\cos x]_{\\pi}^{2\\pi} = \\cos 2\\pi - \\cos\\pi = 1 - (-1) = 2\\). This is the area of the lower hump (made positive).",
        "workingOut": "\\(\\int_{\\pi}^{2\\pi}|\\sin x|\\,dx = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Total area: \\(2 + 2 = 4\\). A common slip reports \\(0\\) from the signed integral, or only counts one hump and answers \\(2\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16b_ii",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "Find the area between the curve  y = \\sin 2x  and the x…",
    "question": "Find the area between the curve \\( y = \\sin 2x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Absolute area of \\(|\\sin 2x|\\) on \\([0,2\\pi]\\); four half-waves each of area 1.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Area: \\(\\displaystyle\\int_{0}^{2\\pi}|\\sin 2x|\\,dx\\). The signed integral \\(\\int_{0}^{2\\pi}\\sin 2x\\,dx = 0\\) (part a with \\(n=2\\)), so we need absolute value.",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\sin 2x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Zeros of \\(\\sin 2x\\): \\(2x = k\\pi \\Rightarrow x = \\dfrac{k\\pi}{2}\\). In \\([0,2\\pi]\\) the zeros are \\(0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2},\\ 2\\pi\\). That makes \\(4\\) half-waves (absolute lobes).",
        "workingOut": "\\(x = 0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2},\\ 2\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "One positive half-wave, e.g. on \\(\\left[0,\\dfrac{\\pi}{2}\\right]\\): \\(\\int_{0}^{\\pi/2}\\sin 2x\\,dx = \\left[-\\dfrac{1}{2}\\cos 2x\\right]_{0}^{\\pi/2} = -\\dfrac{1}{2}\\cos\\pi - \\left(-\\dfrac{1}{2}\\cos 0\\right) = -\\dfrac{1}{2}(-1) + \\dfrac{1}{2}(1) = 1\\).",
        "workingOut": "\\(\\text{each half-wave area } = 1\\)",
        "graphData": null
      },
      {
        "explanation": "There are 4 such half-waves of equal absolute area, so \\(A = 4 \\times 1 = 4\\).",
        "workingOut": "\\(A = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Pattern check: period of \\(\\sin 2x\\) is \\(\\pi\\); on \\([0,2\\pi]\\) there are 2 full periods, each contributing absolute area 2, total 4 — same as for \\(\\sin x\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\). Do not answer 0 (signed integral).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16b_iii",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "Find the area between the curve  y = \\sin 3x  and the x…",
    "question": "Find the area between the curve \\( y = \\sin 3x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2\\pi\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Absolute area of \\(|\\sin 3x|\\); six half-waves each of area \\(\\dfrac{2}{3}\\).",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Area: \\(\\displaystyle\\int_{0}^{2\\pi}|\\sin 3x|\\,dx\\). Again the signed integral is 0; use absolute area.",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\sin 3x|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Zeros: \\(3x = k\\pi \\Rightarrow x = \\dfrac{k\\pi}{3}\\). From \\(k = 0\\) to \\(k = 6\\) we get the endpoints and interior zeros, giving \\(6\\) half-waves on \\([0,2\\pi]\\).",
        "workingOut": "\\(6\\ \\text{half-waves}\\)",
        "graphData": null
      },
      {
        "explanation": "Area of one half-wave, e.g. \\(\\int_{0}^{\\pi/3}\\sin 3x\\,dx = \\left[-\\dfrac{1}{3}\\cos 3x\\right]_{0}^{\\pi/3} = -\\dfrac{1}{3}\\cos\\pi - \\left(-\\dfrac{1}{3}\\cos 0\\right) = -\\dfrac{1}{3}(-1) + \\dfrac{1}{3} = \\dfrac{1}{3} + \\dfrac{1}{3} = \\dfrac{2}{3}\\).",
        "workingOut": "\\(\\text{each half-wave } = \\dfrac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(6 \\times \\dfrac{2}{3} = 4\\).",
        "workingOut": "\\(A = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Same total as for \\(\\sin x\\) and \\(\\sin 2x\\): more waves, but each is narrower, and the product is always 4 on this fixed interval.",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16b_iv",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "Find the area between the curve  y = \\sin nx  and the x…",
    "question": "Find the area between the curve \\( y = \\sin nx \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\) (\\(n\\) a positive integer).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2n\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2n\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "For integer \\(n\\): \\(2n\\) half-waves each of area \\(\\dfrac{2}{n}\\) gives total area 4.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Area: \\(\\displaystyle\\int_{0}^{2\\pi}|\\sin nx|\\,dx\\) for positive integer \\(n\\). Part (a) showed the signed integral is 0; area uses absolute value.",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\sin nx|\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Zeros at \\(x = \\dfrac{k\\pi}{n}\\) for integers \\(k\\). From \\(k = 0\\) to \\(k = 2n\\) there are exactly \\(2n\\) half-waves (absolute lobes) on \\([0,2\\pi]\\).",
        "workingOut": "\\(2n\\ \\text{half-waves}\\)",
        "graphData": null
      },
      {
        "explanation": "One half-wave area (first positive lobe):\\[\\int_{0}^{\\pi/n}\\sin nx\\,dx = \\left[-\\dfrac{1}{n}\\cos nx\\right]_{0}^{\\pi/n} = -\\dfrac{1}{n}\\cos\\pi - \\left(-\\dfrac{1}{n}\\cos 0\\right) = \\dfrac{1}{n} + \\dfrac{1}{n} = \\dfrac{2}{n}.\\]",
        "workingOut": "\\(\\text{each half-wave area } = \\dfrac{2}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply: \\(A = 2n \\cdot \\dfrac{2}{n} = 4\\). The \\(n\\) cancels — every positive integer frequency gives the same total absolute area on \\([0,2\\pi]\\).",
        "workingOut": "\\(A = 4\\)",
        "graphData": null
      },
      {
        "explanation": "This matches the special cases \\(n = 1,2,3\\) already computed (all equal to 4). A common slip answers \\(0\\) (signed) or \\(2n\\) (counts waves without multiplying by lobe area).",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\).",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q16b_v",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 260,
        "boundingbox": [
          -0.4,
          1.45,
          6.783185307179586,
          -1.35
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[6.783185307179586,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.35],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [5.765707511102648, -0.4725, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.305, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(2*x); }, 0, 6.283185307179586], {strokeColor:'#6366f1', strokeWidth:2.5});board.create('integral', [[0, Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});board.create('integral', [[3*Math.PI/4, 5*Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});board.create('integral', [[7*Math.PI/4, 2*Math.PI], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});var g = board.create('functiongraph', [function(x){ return -Math.cos(2*x); }, 0, 0.01], {strokeWidth:0, visible:false});board.create('integral', [[Math.PI/4, 3*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});board.create('integral', [[5*Math.PI/4, 7*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});board.create('text', [3.2, 1.15, 'y = cos 2x  (example n=2)'], {fontSize:12, color:'#4f46e5'});board.create('text', [1.2, -1.15, 'shaded = absolute area'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
      }
    },
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "Find the area between the curve  y = \\cos nx  and the x…",
    "question": "Find the area between the curve \\( y = \\cos nx \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = 2\\pi \\) (\\(n\\) a positive integer).",
    "opts": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(2n\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2\\)",
        "imageUrl": null
      },
      {
        "text": "\\(4\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2n\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Absolute area of \\(|\\cos nx|\\) on \\([0,2\\pi]\\) equals 4 for every positive integer \\(n\\).",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: area between \\(y = \\cos nx\\) and the \\(x\\)-axis from 0 to \\(2\\pi\\) (\\(n\\) a positive integer). Why absolute value? The signed integral is 0 (part a), but area counts every lobe above and below the axis as positive.",
        "workingOut": "\\(A = \\int_{0}^{2\\pi}|\\cos nx|\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 260,
            "boundingbox": [
              -0.4,
              1.45,
              6.783185307179586,
              -1.35
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.4,0],[6.783185307179586,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-1.35],[0,1.45]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [5.765707511102648, -0.4725, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 1.305, 'y'], {fontSize:13, color:'#64748b'});var f = board.create('functiongraph', [function(x){ return Math.cos(2*x); }, 0, 6.283185307179586], {strokeColor:'#6366f1', strokeWidth:2.5});board.create('integral', [[0, Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});board.create('integral', [[3*Math.PI/4, 5*Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});board.create('integral', [[7*Math.PI/4, 2*Math.PI], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});var g = board.create('functiongraph', [function(x){ return -Math.cos(2*x); }, 0, 0.01], {strokeWidth:0, visible:false});board.create('integral', [[Math.PI/4, 3*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});board.create('integral', [[5*Math.PI/4, 7*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});board.create('text', [3.2, 1.15, 'y = cos 2x  (example n=2)'], {fontSize:12, color:'#4f46e5'});board.create('text', [1.2, -1.15, 'shaded = absolute area'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Zeros of \\(\\cos nx\\): \\(nx = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{(2k+1)\\pi}{2n}\\). These cut \\([0,2\\pi]\\) into \\(2n\\) half-waves (absolute lobes), the same count as for \\(|\\sin nx|\\).",
        "workingOut": "\\(2n\\ \\text{half-waves}\\)",
        "graphData": null
      },
      {
        "explanation": "The period of \\(\\cos nx\\) is \\(\\dfrac{2\\pi}{n}\\), so a half-period (one absolute lobe) has length \\(\\dfrac{\\pi}{n}\\). On \\([0,2\\pi]\\) there are exactly \\(2n\\) such lobes.",
        "workingOut": "\\(2n\\ \\text{lobes of length }\\dfrac{\\pi}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "Area of one absolute lobe of \\(\\cos nx\\):\\[\\int_{0}^{\\pi/n}|\\cos nx|\\,dx = \\dfrac{2}{n}.\\](For example, with \\(n=1\\): \\(\\int_{0}^{\\pi}|\\cos x|\\,dx = 2\\).)",
        "workingOut": "\\(\\text{each lobe area } = \\dfrac{2}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "Total: \\(A = 2n \\cdot \\dfrac{2}{n} = 4\\). Alternatively, \\(|\\cos nx| = \\left|\\sin\\!\\left(nx+\\dfrac{\\pi}{2}\\right)\\right|\\) has the same integral as \\(|\\sin nx|\\) on a full number of periods.",
        "workingOut": "\\(A = 4\\)",
        "graphData": null
      },
      {
        "explanation": "The graph (example \\(n=2\\)) shows multiple equal absolute lobes; their areas sum to 4, independent of \\(n\\). Final answer: \\(4\\). A common slip answers 0 from the signed integral.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q17a",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 260,
        "boundingbox": [
          -0.25,
          2.35,
          3.3,
          -0.35
        ],
        "showAxisLabels": false,
        "showGrid": false,
        "script": "board.suspendUpdate(); board.create('arrow', [[-0.25,0],[3.3,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.35],[0,2.35]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [2.8049999999999997, -0.12249999999999998, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 2.115, 'y'], {fontSize:13, color:'#64748b'});board.create('functiongraph', [function(x){ return 1; }, 0, 3], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});var f = board.create('functiongraph', [function(x){ return 1 + Math.sin(2*Math.PI*x); }, 0, 3], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 3], f], {fillColor:'#93c5fd', fillOpacity:0.35, strokeWidth:0});board.create('line', [[1,0],[1,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('line', [[2,0],[2,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('text', [1.5, 2.05, 'y = 1 + sin 2πx'], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [2.6, 1.15, 'y = 1'], {fontSize:11, color:'#64748b'});board.create('text', [0.5, 0.2, 'period 1'], {fontSize:11, color:'#64748b'});board.create('text', [1.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'});board.create('text', [2.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
      }
    },
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "title": "For every positive integer n, the value of \\displaystyl…",
    "question": "For every positive integer \\(n\\), the value of \\(\\displaystyle\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\) is:",
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(n\\)",
      "\\(2n\\)"
    ],
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": null
      },
      {
        "text": "\\(1\\)",
        "imageUrl": null
      },
      {
        "text": "\\(n\\)",
        "imageUrl": null
      },
      {
        "text": "\\(2n\\)",
        "imageUrl": null
      }
    ],
    "a": 2,
    "answer": "2",
    "hint": "Antiderivative \\(x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\); for integer \\(n\\) the cosine terms cancel.",
    "solution": "The correct answer is \\(n\\).",
    "solutionSteps": [
      {
        "explanation": "Given: \\(\\displaystyle\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\) for positive integer \\(n\\). The integrand is always at least 0 (sine ≥ −1), so the integral equals the area under the elevated sine wave.",
        "workingOut": "\\(\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 260,
            "boundingbox": [
              -0.25,
              2.35,
              3.3,
              -0.35
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.25,0],[3.3,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.35],[0,2.35]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [2.8049999999999997, -0.12249999999999998, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 2.115, 'y'], {fontSize:13, color:'#64748b'});board.create('functiongraph', [function(x){ return 1; }, 0, 3], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});var f = board.create('functiongraph', [function(x){ return 1 + Math.sin(2*Math.PI*x); }, 0, 3], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 3], f], {fillColor:'#93c5fd', fillOpacity:0.35, strokeWidth:0});board.create('line', [[1,0],[1,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('line', [[2,0],[2,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('text', [1.5, 2.05, 'y = 1 + sin 2πx'], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [2.6, 1.15, 'y = 1'], {fontSize:11, color:'#64748b'});board.create('text', [0.5, 0.2, 'period 1'], {fontSize:11, color:'#64748b'});board.create('text', [1.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'});board.create('text', [2.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Integrate term by term. \\(\\int 1\\,dx = x\\). For the sine term, chain reverse: \\(\\int\\sin 2\\pi x\\,dx = -\\dfrac{1}{2\\pi}\\cos 2\\pi x\\).",
        "workingOut": "\\(F(x) = x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(F(n) - F(0) = \\left(n - \\dfrac{1}{2\\pi}\\cos 2\\pi n\\right) - \\left(0 - \\dfrac{1}{2\\pi}\\cos 0\\right) = n - \\dfrac{1}{2\\pi}\\cos(2\\pi n) + \\dfrac{1}{2\\pi}\\).",
        "workingOut": "\\(n - \\dfrac{1}{2\\pi}\\cos(2\\pi n) + \\dfrac{1}{2\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "For integer \\(n\\), \\(\\cos(2\\pi n) = 1 = \\cos 0\\). The cosine terms cancel: \\(n - \\dfrac{1}{2\\pi} + \\dfrac{1}{2\\pi} = n\\).",
        "workingOut": "\\(n\\)",
        "graphData": null
      },
      {
        "explanation": "Geometric reading (see graph for \\(n = 3\\)): the wave has period 1 about the line \\(y = 1\\). Over each unit interval the net area is 1, so over \\([0,n]\\) the total area is \\(n\\).",
        "workingOut": "\\(\\text{area per period } = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(n\\).",
        "workingOut": "\\(n\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6e-q17b",
    "topicId": "y12a-6E",
    "chapterId": "y12a-6",
    "chapterTitle": "Chapter 6: The trigonometric functions",
    "topicCode": "6E",
    "topicTitle": "Applications of integration",
    "c": "6E",
    "t": "Applications of integration",
    "year": "Year 12",
    "origin": "seed",
    "isNew": true,
    "isManual": true,
    "graphData": null,
    "isActive": true,
    "subQuestions": [],
    "blanks": [],
    "questionImage": "",
    "examPaper": "",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 150,
    "title": "Sketch  y = 1 + \\sin 2\\pi x  for  0 \\le x \\le n  (posit…",
    "question": "Sketch \\( y = 1 + \\sin 2\\pi x \\) for \\( 0 \\le x \\le n \\) (positive integer \\(n\\)), and interpret the result of part (a) geometrically.",
    "answer": "Sketch of \\(y = 1 + \\sin 2\\pi x\\): period 1, range \\([0,2]\\), about the line \\(y=1\\). Each unit interval has area 1 under the curve, so total area from 0 to \\(n\\) is \\(n\\), matching part (a).",
    "hint": "Period is 1; sketch a few periods and link each unit area to part (a).",
    "solution": "The graph is a sine wave of period 1 shifted up by 1 (range \\([0,2]\\)). It never goes below the \\(x\\)-axis. Over each interval \\([k,k+1]\\) the area under the curve is 1. Hence from 0 to \\(n\\) the total area is \\(n\\), which is exactly the value of the integral in part (a).",
    "solutionSteps": [
      {
        "explanation": "Rewrite the function: \\(y = 1 + \\sin 2\\pi x\\). Amplitude 1, vertical shift +1, so the range is \\([0,2]\\). Period: argument \\(2\\pi x\\) has period 1.",
        "workingOut": "\\(\\text{period }1,\\ \\text{range }[0,2]\\)",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 260,
            "boundingbox": [
              -0.25,
              2.35,
              3.3,
              -0.35
            ],
            "showAxisLabels": false,
            "showGrid": false,
            "script": "board.suspendUpdate(); board.create('arrow', [[-0.25,0],[3.3,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('arrow', [[0,-0.35],[0,2.35]], {strokeColor:'#94a3b8', strokeWidth:1.5});board.create('text', [2.8049999999999997, -0.12249999999999998, 'x'], {fontSize:13, color:'#64748b'});board.create('text', [0.15, 2.115, 'y'], {fontSize:13, color:'#64748b'});board.create('functiongraph', [function(x){ return 1; }, 0, 3], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});var f = board.create('functiongraph', [function(x){ return 1 + Math.sin(2*Math.PI*x); }, 0, 3], {strokeColor:'#6366f1', strokeWidth:2.6});board.create('integral', [[0, 3], f], {fillColor:'#93c5fd', fillOpacity:0.35, strokeWidth:0});board.create('line', [[1,0],[1,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('line', [[2,0],[2,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});board.create('text', [1.5, 2.05, 'y = 1 + sin 2πx'], {fontSize:12, color:'#4f46e5', anchorX:'middle'});board.create('text', [2.6, 1.15, 'y = 1'], {fontSize:11, color:'#64748b'});board.create('text', [0.5, 0.2, 'period 1'], {fontSize:11, color:'#64748b'});board.create('text', [1.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'});board.create('text', [2.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Sketch on \\([0,n]\\) (the graph shows \\(n = 3\\) as a typical case): start at \\((0,1)\\), rise to 2 at \\(x = \\dfrac{1}{4}\\), return to 1 at \\(x = \\dfrac{1}{2}\\), down to 0 at \\(x = \\dfrac{3}{4}\\), back to 1 at \\(x = 1\\), and repeat.",
        "workingOut": "\\(y = 1 + \\sin 2\\pi x\\)",
        "graphData": null
      },
      {
        "explanation": "Because \\(y \\ge 0\\) everywhere, the definite integral equals geometric area under the curve. From part (a), that area from 0 to \\(n\\) is exactly \\(n\\).",
        "workingOut": "\\(\\int_{0}^{n} y\\,dx = n\\)",
        "graphData": null
      },
      {
        "explanation": "Per-period interpretation: each interval of length 1 contributes area 1 (the average height of one period of \\(1+\\sin\\) is 1). After \\(n\\) periods the total area is \\(n\\).",
        "workingOut": "\\(\\text{area per period } = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final: labelled sketch with midline \\(y=1\\), period marks, and the statement that the integral equals the total shaded area \\(n\\).",
        "workingOut": "\\(\\text{sketch + geometric link to part (a)}\\)",
        "graphData": null
      }
    ],
    "requiresManualGrading": true
  }
];

export default Y12A_CH6E_QUESTIONS;
