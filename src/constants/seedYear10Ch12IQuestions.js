export const Y10_CH12I_QUESTIONS = [
  {
    "id": "y10-12i-q1a",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle \\(PQR\\) with \\(\\angle R = 90°\\). The side \\(PR = 6\\) cm and \\(RQ = 10\\) cm. The angle at \\(Q\\) is \\(θ\\).",
    "a": 0,
    "answer": "0",
    "hint": "Use the tangent ratio: \\(\\tan θ = \\frac{\\text{Opposite}}{\\text{Adjacent}}\\).",
    "solution": "In \\(\\triangle PQR\\):\nOpposite side to \\(θ\\) is \\(PR = 6\\) cm.\nAdjacent side to \\(θ\\) is \\(RQ = 10\\) cm.\n\\(\\tan θ = \\frac{6}{10} = 0.6\\)\n\\(θ = \\tan^{-1}(0.6) \\approx 30.96°\\)\n\nCorrect to one decimal place, \\(θ = 31.0°\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the sides relative to the angle \\(\\theta\\).",
        "workingOut": "\\(\\text{Opposite} = PR = 6\\) and \\(\\text{Adjacent} = RQ = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Select the correct trigonometric ratio.",
        "workingOut": "\\(\\tan \\theta = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{6}{10} = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle using the inverse tangent function.",
        "workingOut": "\\(\\theta = \\tan^{-1}(0.6)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to one decimal place.",
        "workingOut": "\\(\\theta \\approx 31.0^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          8,
          12,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar R = board.create('point', [0,0], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar Q = board.create('point', [10,0], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar P = board.create('point', [0,6], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,10]}});\nboard.create('polygon', [P,R,Q], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-1.5, 3, '6 cm']);\nboard.create('text', [5, -1, '10 cm']);\nboard.create('angle', [P,Q,R], {radius: 1.5, name: '\\θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(31.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(46.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(149.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24.8\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q1b",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle with a hypotenuse of \\(18\\) cm and an adjacent side of \\(15\\) cm. The angle is \\(θ\\).",
    "a": 2,
    "answer": "2",
    "hint": "Use the cosine ratio: \\(\\cos θ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\\).",
    "solution": "Using the cosine ratio:\n\\(\\cos θ = \\frac{15}{18}\\)\n\\(θ = \\cos^{-1}\\left(\\frac{15}{18}\\right) \\approx 33.557°\\)\n\nCorrect to one decimal place, \\(θ = 33.6°\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given sides relative to the angle \\(\\theta\\).",
        "workingOut": "\\(\\text{Hypotenuse} = 18\\) and \\(\\text{Adjacent} = 15\\)",
        "graphData": null
      },
      {
        "explanation": "Select the correct trigonometric ratio.",
        "workingOut": "\\(\\cos \\theta = \\frac{\\text{Adj}}{\\text{Hyp}} = \\frac{15}{18}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle using the inverse cosine function.",
        "workingOut": "\\(\\theta = \\cos^{-1}\\left(\\frac{15}{18}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to one decimal place.",
        "workingOut": "\\(\\theta \\approx 33.6^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          12,
          17,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [15,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 9.95], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [7.5, 9, '18 cm']);\nboard.create('text', [7.5, -1, '15 cm']);\nboard.create('angle', [C,B,A], {radius: 2, name: '\\θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(29.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(38.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(33.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(37.0\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q1c",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle has an angle of \\(36°\\), a hypotenuse of \\(18\\) cm, and an adjacent side \\(x\\) cm. Wait, looking at the diagram, \\(x\\) is the adjacent side to \\(36°\\). Wait, the \\(36°\\) is at the top. So \\(x\\) is the opposite side.",
    "a": 2,
    "answer": "2",
    "hint": "Use the sine ratio: \\(\\sin θ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\\).",
    "solution": "From the diagram, the angle is \\(36°\\). The side \\(x\\) is opposite to \\(36°\\), and the hypotenuse is \\(18\\) cm.\n\\(\\sin 36° = \\frac{x}{18}\\)\n\\(x = 18 \\sin 36° \\approx 10.580\\)\n\nCorrect to two decimal places, \\(x = 10.58\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Identify the given sides relative to the (36^\\circ) angle.",
        "workingOut": "\\(\\text{Hypotenuse} = 18\\) and \\(\\text{Opposite} = x\\)",
        "graphData": null
      },
      {
        "explanation": "Select the correct trigonometric ratio.",
        "workingOut": "\\(\\sin 36^\\circ = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{x}{18}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve for \\(x\\).",
        "workingOut": "\\(x = 18 \\sin 36^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to two decimal places.",
        "workingOut": "\\(x \\approx 10.58\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          16,
          12,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [10.58,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 14.56], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [5, -1, 'x cm']);\nboard.create('text', [5, 8, '18 cm']);\nboard.create('angle', [A,C,B], {radius: 2, name: '36^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(9.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(12.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10.58\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q1d",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle \\(\\triangle STU\\) with \\(\\angle S = 90°\\). The side \\(ST = 8\\) cm and \\(SU = x\\) cm. The angle \\(\\angle STU = 42°\\).",
    "a": 0,
    "answer": "0",
    "hint": "Use the tangent ratio: \\(\\tan θ = \\frac{\\text{Opposite}}{\\text{Adjacent}}\\).",
    "solution": "In \\(\\triangle STU\\), the side opposite the \\(42°\\) angle is \\(SU = x\\) and the adjacent side is \\(ST = 8\\).\n\\(\\tan 42° = \\frac{x}{8}\\)\n\\(x = 8 \\tan 42° \\approx 7.203\\)\n\nCorrect to two decimal places, \\(x = 7.20\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Identify the given sides relative to the (42^\\circ) angle.",
        "workingOut": "\\(\\text{Opposite} = SU = x\\) and \\(\\text{Adjacent} = ST = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Select the correct trigonometric ratio.",
        "workingOut": "\\(\\tan 42^\\circ = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{x}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve for \\(x\\).",
        "workingOut": "\\(x = 8 \\tan 42^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to two decimal places.",
        "workingOut": "\\(x \\approx 7.20\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4,
          5,
          12,
          -12
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar S = board.create('point', [0,0], {name: 'S', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar U = board.create('point', [0,-7.2], {name: 'U', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]}});\nvar T = board.create('point', [8,0], {name: 'T', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nboard.create('polygon', [S,T,U], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [4, 1, '8 cm']);\nboard.create('text', [-2, -3.6, 'x cm']);\nboard.create('angle', [S,T,U], {radius: 2, name: '42^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('segment', [[0,-0.5], [0.5,-0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,-0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(7.20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(172.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5.8\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q2a",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(30°\\), a hypotenuse of \\(20\\) cm, and an opposite side \\(x\\) cm.",
    "a": 2,
    "answer": "2",
    "hint": "Use the exact value of \\(\\sin 30° = \\frac{1}{2}\\).",
    "solution": "\\(\\sin 30° = \\frac{1}{2}\\)\n\\(\\frac{1}{2} = \\frac{x}{20}\\)\n\\(x = 20 \\times \\frac{1}{2} = 10\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the sides relative to the (30^\\circ) angle.",
        "workingOut": "\\(\\text{Hypotenuse} = 20\\) and \\(\\text{Opposite} = x\\)",
        "graphData": null
      },
      {
        "explanation": "Select the sine ratio.",
        "workingOut": "\\(\\sin 30^\\circ = \\frac{x}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the exact value for \\(\\sin 30^\\circ\\).",
        "workingOut": "\\(\\frac{1}{2} = \\frac{x}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\(x = 20 \\times \\frac{1}{2} = 10\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          12,
          20,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [17.32,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 10], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [-1.5, 5, 'x cm']);\nboard.create('text', [9, 6, '20 cm']);\nboard.create('angle', [C,B,A], {radius: 3, name: '30^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(8.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.0\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q2b",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(45°\\), an adjacent side of \\(36\\) cm, and an opposite side \\(x\\) cm.",
    "a": 0,
    "answer": "0",
    "hint": "Use the exact value of \\(\\tan 45° = 1\\).",
    "solution": "\\(\\tan 45° = 1\\)\n\\(\\frac{x}{36} = 1\\)\n\\(x = 36\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the sides relative to the (45^\\circ) angle.",
        "workingOut": "\\(\\text{Adjacent} = 36\\) and \\(\\text{Opposite} = x\\)",
        "graphData": null
      },
      {
        "explanation": "Select the tangent ratio.",
        "workingOut": "\\(\\tan 45^\\circ = \\frac{x}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the exact value for \\(\\tan 45^\\circ\\).",
        "workingOut": "\\(1 = \\frac{x}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\(x = 36 \\times 1 = 36\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          40,
          40,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [36,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 36], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [-2, 18, 'x cm']);\nboard.create('text', [18, 38, '36 cm']);\nboard.create('angle', [A,C,B], {radius: 5, name: '45^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(31.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(41.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(39.6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q2c",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of \\(60°\\), a hypotenuse of \\(50\\) cm, and an adjacent side \\(x\\) cm.",
    "a": 2,
    "answer": "2",
    "hint": "Use the exact value of \\(\\cos 60° = \\frac{1}{2}\\).",
    "solution": "\\(\\cos 60° = \\frac{1}{2}\\)\n\\(\\frac{x}{50} = \\frac{1}{2}\\)\n\\(x = 25\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the sides relative to the (60^\\circ) angle.",
        "workingOut": "\\(\\text{Hypotenuse} = 50\\) and \\(\\text{Adjacent} = x\\)",
        "graphData": null
      },
      {
        "explanation": "Select the cosine ratio.",
        "workingOut": "\\(\\cos 60^\\circ = \\frac{x}{50}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the exact value for \\(\\cos 60^\\circ\\).",
        "workingOut": "\\(\\frac{1}{2} = \\frac{x}{50}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\(x = 50 \\times \\frac{1}{2} = 25\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          50,
          30,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [25,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 43.3], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [12.5, 45, 'x cm']);\nboard.create('text', [15, 20, '50 cm']);\nboard.create('angle', [A,B,C], {radius: 4, name: '60^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(21.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(28.9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27.5\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q3",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "\\(AB = 8\\) cm, \\(BC = 6\\) cm and \\(AC = 12\\) cm. Find the magnitude of each of the angles of triangle \\(ABC\\) correct to one decimal place.\n\nEnter your answer as three numbers separated by commas: \\(\\angle A\\), \\(\\angle B\\), \\(\\angle C\\).",
    "a": 3,
    "answer": "3",
    "hint": "Use the rearranged cosine rule for each angle: \\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\).",
    "solution": "Using the cosine rule:\nLet \\(a = 6\\), \\(b = 12\\), \\(c = 8\\).\n\\(\\cos A = \\frac{12^2 + 8^2 - 6^2}{2(12)(8)} = \\frac{172}{192} \\approx 0.8958\\)\n\\(A \\approx 26.38°\\)\n\n\\(\\cos B = \\frac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\frac{-44}{96} \\approx -0.4583\\)\n\\(B \\approx 117.28°\\)\n\n\\(\\cos C = \\frac{6^2 + 12^2 - 8^2}{2(6)(12)} = \\frac{116}{144} \\approx 0.8056\\)\n\\(C \\approx 36.34°\\)\n\nCorrect to one decimal place: \\(26.4, 117.3, 36.3\\).",
    "solutionSteps": [
      {
        "explanation": "Use the Cosine Rule to find \\(\\angle A\\).",
        "workingOut": "\\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{12^2 + 8^2 - 6^2}{2(12)(8)}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(\\angle A\\).",
        "workingOut": "\\(\\cos A = \\frac{172}{192} \\implies A \\approx 26.4^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Use the Cosine Rule to find \\(\\angle B\\).",
        "workingOut": "\\(\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\frac{-44}{96} \\implies B \\approx 117.3^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Use the angle sum of a triangle to find \\(\\angle C\\).",
        "workingOut": "\\(\\angle C = 180^\\circ - 26.4^\\circ - 117.3^\\circ = 36.3^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          10,
          14,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar C = board.create('point', [12,0], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar B = board.create('point', [7.16, 3.52], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [6, -1, '12']);\nboard.create('text', [2, 3, '8']);\nboard.create('text', [10, 3, '6']);\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(39.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(153.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(21.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(26.4117.336.3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q4a",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A triangular region is enclosed by straight fences of lengths \\(42.8\\) metres, \\(56.6\\) metres and \\(72.1\\) metres.\n\nFind the angle between the \\(42.8\\) m and \\(56.6\\) m fences, correct to the nearest degree.",
    "a": 2,
    "answer": "2",
    "hint": "Use the rearranged cosine rule. The angle is opposite the longest side.",
    "solution": "Let \\(a = 72.1\\), \\(b = 42.8\\), and \\(c = 56.6\\).\nThe angle between the \\(42.8\\) m and \\(56.6\\) m fences is opposite the \\(72.1\\) m fence. Let this angle be \\(A\\).\n\\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\)\n\\(\\cos A = \\frac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)} = \\frac{1831.84 + 3203.56 - 5198.41}{4844.96} = \\frac{-163.01}{4844.96} \\approx -0.03364\\)\n\\(A = \\cos^{-1}(-0.03364) \\approx 91.93°\\)\n\nCorrect to the nearest degree, the angle is \\(92°\\).",
    "solutionSteps": [
      {
        "explanation": "Let the sides be \\(a = 42.8\\), \\(b = 56.6\\), and \\(c = 72.1\\). We want to find \\(\\angle C\\).",
        "workingOut": "\\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given side lengths.",
        "workingOut": "\\(\\cos C = \\frac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction.",
        "workingOut": "\\(\\cos C = \\frac{1831.84 + 3203.56 - 5198.41}{4844.96} \\approx -0.03365\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle using inverse cosine.",
        "workingOut": "\\(\\angle C = \\cos^{-1}(-0.03365) \\approx 92^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(79.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(106.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(92\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(101.2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q4b",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A triangular region is enclosed by straight fences of lengths \\(42.8\\) metres, \\(56.6\\) metres and \\(72.1\\) metres.\n\nFind the area of the region, correct to the nearest square metre.",
    "a": 3,
    "answer": "3",
    "hint": "Use the area formula: \\(\\text{Area} = \\frac{1}{2}bc \\sin A\\), using the unrounded angle.",
    "solution": "We know two sides \\(42.8\\) and \\(56.6\\), and the included angle \\(A \\approx 91.927°\\).\n\\(\\text{Area} = \\frac{1}{2}bc \\sin A = \\frac{1}{2}(42.8)(56.6) \\sin 91.927°\\)\n\\(\\text{Area} = 1211.24 \\times 0.9994 \\approx 1210.55\\text{ m}^2\\)\n\nCorrect to the nearest square metre, the area is \\(1211\\text{ m}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the area formula for a triangle.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}ab \\sin C\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the side lengths and the included angle found previously.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}(42.8)(56.6) \\sin(91.93^\\circ)\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the sine value.",
        "workingOut": "\\(\\text{Area} = 1211.24 \\times 0.9994\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to the nearest square metre.",
        "workingOut": "\\(\\text{Area} \\approx 1210 \\text{ m}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(2422.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1398.3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1453.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1211\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q5",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a triangle \\(ABC\\), \\(\\sin A = \\frac{1}{8}\\), \\(\\sin B = \\frac{3}{4}\\) and \\(a = 8\\). Find, using the sine rule, the value of \\(b\\).",
    "a": 1,
    "answer": "1",
    "hint": "Substitute the given values into the sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
    "solution": "\\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\)\n\\(\\frac{8}{\\frac{1}{8}} = \\frac{b}{\\frac{3}{4}}\\)\n\\(64 = \\frac{4b}{3}\\)\n\\(192 = 4b \\implies b = 48\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the Sine Rule.",
        "workingOut": "\\(\\frac{b}{\\sin B} = \\frac{a}{\\sin A}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(\\frac{b}{3/4} = \\frac{8}{1/8}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the right side.",
        "workingOut": "\\(\\frac{b}{3/4} = 64\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply to solve for \\(b\\).",
        "workingOut": "\\(b = 64 \\times \\frac{3}{4} = 48\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(41.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(55.4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(52.8\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q6",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a triangle \\(ABC\\), \\(a = 5\\), \\(b = 6\\) and \\(\\cos C = \\frac{1}{5}\\). Find \\(c\\).",
    "a": 0,
    "answer": "0",
    "hint": "Use the cosine rule: \\(c^2 = a^2 + b^2 - 2ab \\cos C\\).",
    "solution": "Using the cosine rule:\n\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)\n\\(c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\frac{1}{5}\\right)\\)\n\\(c^2 = 25 + 36 - 60\\left(\\frac{1}{5}\\right)\\)\n\\(c^2 = 61 - 12 = 49 \\implies c = 7\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the Cosine Rule.",
        "workingOut": "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\frac{1}{5}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "\\(c^2 = 25 + 36 - 12 = 49\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root to find \\(c\\).",
        "workingOut": "\\(c = \\sqrt{49} = 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7.7\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q7",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the area of triangle \\(XYZ\\), correct to two decimal places.\n\nThe triangle has sides \\(x = 8.3\\) cm, \\(z = 6.2\\) cm and an included angle \\(\\angle Y = 72°\\).",
    "a": 2,
    "answer": "2",
    "hint": "Use the area formula: \\(\\text{Area} = \\frac{1}{2}ac \\sin B\\).",
    "solution": "\\(\\text{Area} = \\frac{1}{2}xz \\sin Y\\)\n\\(\\text{Area} = \\frac{1}{2}(8.3)(6.2) \\sin 72°\\)\n\\(\\text{Area} = 25.73 \\times 0.9511 \\approx 24.470\\text{ cm}^2\\)\n\nCorrect to two decimal places, the area is \\(24.47\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the area formula with the included angle \\(\\angle Y\\).",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}xz \\sin Y\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given side lengths and angle.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}(8.3)(6.2) \\sin 72^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the product.",
        "workingOut": "\\(\\text{Area} = 25.73 \\times \\sin 72^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\(\\text{Area} \\approx 24.47 \\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          8,
          10,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar Y = board.create('point', [0,0], {name: 'Y', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar X = board.create('point', [6.2,0], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar Z = board.create('point', [8.3*Math.cos(72*Math.PI/180), 8.3*Math.sin(72*Math.PI/180)], {name: 'Z', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]}});\nboard.create('polygon', [Y,X,Z], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('angle', [X,Y,Z], {radius: 1.5, name: '72^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('text', [3, -1, '6.2 cm']);\nboard.create('text', [1, 5, '8.3 cm']);\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(36.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(155.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(24.47\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19.6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q8a",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\n\\(\\angle ABC\\)",
    "a": 0,
    "answer": "0",
    "hint": "Use the sine rule: \\(\\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\).",
    "solution": "Using the sine rule:\n\\(\\frac{16.2}{\\sin B} = \\frac{18.6}{\\sin 60°}\\)\n\\(\\sin B = \\frac{16.2 \\sin 60°}{18.6} \\approx 0.7543\\)\n\\(B = \\sin^{-1}(0.7543) \\approx 48.96°\\)\n\nCorrect to one decimal place, \\(\\angle ABC = 49.0°\\).",
    "solutionSteps": [
      {
        "explanation": "Let \\(b = 16.2\\), \\(c = 18.6\\), and \\(\\angle C = 60^\\circ\\). Use the Sine Rule to find \\(\\angle B\\).",
        "workingOut": "\\(\\frac{\\sin B}{b} = \\frac{\\sin C}{c}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(\\frac{\\sin B}{16.2} = \\frac{\\sin 60^\\circ}{18.6}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve for \\(\\sin B\\).",
        "workingOut": "\\(\\sin B = \\frac{16.2 \\sin 60^\\circ}{18.6} \\approx 0.7543\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(\\angle B\\) using the inverse sine function.",
        "workingOut": "\\(\\angle B = \\sin^{-1}(0.7543) \\approx 49.0^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(49.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(73.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(131.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(39.2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q8b",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\n\\(\\angle BAC\\)",
    "a": 1,
    "answer": "1",
    "hint": "The angles in a triangle add up to \\(180°\\).",
    "solution": "\\(\\angle BAC = 180° - 60° - 48.96° = 71.04°\\)\n\nCorrect to one decimal place, \\(\\angle BAC = 71.0°\\).",
    "solutionSteps": [
      {
        "explanation": "Use the angle sum of a triangle to find \\(\\angle A\\) (which is \\(\\angle BAC\\)).",
        "workingOut": "\\(\\angle A + \\angle B + \\angle C = 180^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the known angles.",
        "workingOut": "\\(\\angle A + 49.0^\\circ + 60^\\circ = 180^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(\\angle A\\).",
        "workingOut": "\\(\\angle A = 180^\\circ - 109.0^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the result.",
        "workingOut": "\\(\\angle A = 71.0^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(106.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(71.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(109.0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(56.8\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q8c",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\nThe length of \\(CB\\)",
    "a": 1,
    "answer": "1",
    "hint": "Use the sine rule with the newly found angle \\(A\\).",
    "solution": "Using the sine rule to find \\(a = CB\\):\n\\(\\frac{a}{\\sin 71.04°} = \\frac{18.6}{\\sin 60°}\\)\n\\(a = \\frac{18.6 \\sin 71.04°}{\\sin 60°} \\approx 20.31\\)\n\nCorrect to one decimal place, \\(CB = 20.3\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Use the Sine Rule to find the length of \\(CB\\) (which is side \\(a\\)).",
        "workingOut": "\\(\\frac{a}{\\sin A} = \\frac{c}{\\sin C}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the known values.",
        "workingOut": "\\(\\frac{a}{\\sin 71.0^\\circ} = \\frac{18.6}{\\sin 60^\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve for \\(a\\).",
        "workingOut": "\\(a = \\frac{18.6 \\sin 71.0^\\circ}{\\sin 60^\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to one decimal place.",
        "workingOut": "\\(a \\approx 20.3 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(30.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20.3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(159.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16.2\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q8d",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a triangle \\(ABC\\), \\(AC = 16.2\\) cm, \\(AB = 18.6\\) cm and \\(\\angle ACB = 60°\\). Find, correct to one decimal place:\n\nThe area of the triangle",
    "a": 2,
    "answer": "2",
    "hint": "Use the area formula: \\(\\text{Area} = \\frac{1}{2}bc \\sin A\\).",
    "solution": "\\(\\text{Area} = \\frac{1}{2}bc \\sin A = \\frac{1}{2}(16.2)(18.6) \\sin 71.04° \\approx 150.66 \\times 0.9457 \\approx 142.48\\)\n\nCorrect to one decimal place, it is \\(142.5\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Use the area formula for a triangle.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}bc \\sin A\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the side lengths and the included angle.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2}(16.2)(18.6) \\sin 71.0^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the product.",
        "workingOut": "\\(\\text{Area} = 150.66 \\times \\sin 71.0^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate and round to one decimal place.",
        "workingOut": "\\(\\text{Area} \\approx 142.4 \\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(213.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(37.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(142.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(114.0\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q9",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The angle of depression from a point \\(A\\) to a ship at point \\(B\\) is \\(10°\\). If the distance \\(BX\\) from \\(B\\) to the foot of the cliff at \\(X\\) is \\(800\\) m, find the height of the cliff \\(AX\\), correct to the nearest metre.",
    "a": 3,
    "answer": "3",
    "hint": "The angle of elevation from \\(B\\) to \\(A\\) is equal to the angle of depression (\\(10°\\)). Use the tangent ratio.",
    "solution": "The angle of elevation from \\(B\\) to \\(A\\) is \\(10°\\).\nIn right-angled triangle \\(AXB\\):\n\\(\\tan 10° = \\frac{AX}{800}\\)\n\\(AX = 800 \\tan 10° \\approx 800 \\times 0.1763 = 141.06\\)\n\nCorrect to the nearest metre, the height is \\(141\\) m.",
    "solutionSteps": [
      {
        "explanation": "Set up a right-angled triangle. The angle of elevation from (B) to (A) is equal to the angle of depression.",
        "workingOut": "\\(\\angle ABX = 10^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the given sides relative to the (10^\\circ) angle.",
        "workingOut": "\\(\\text{Adjacent} = BX = 800\\) and \\(\\text{Opposite} = AX\\)",
        "graphData": null
      },
      {
        "explanation": "Select the tangent ratio.",
        "workingOut": "\\(\\tan 10^\\circ = \\frac{AX}{800}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\(AX\\), rounding to the nearest metre.",
        "workingOut": "\\(AX = 800 \\tan 10^\\circ \\approx 141 \\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          4,
          12,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar X = board.create('point', [0,0], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar B = board.create('point', [10,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar A = board.create('point', [0, 1.76], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,10]}});\nboard.create('segment', [X,B], {strokeColor: 'black', strokeWidth: 2});\nboard.create('segment', [X,A], {strokeColor: 'black', strokeWidth: 2});\nboard.create('segment', [A,B], {strokeColor: 'red', dash: 2});\nboard.create('text', [4, -1, '800 m']);\nboard.create('text', [-1, 0.8, 'A']);\nboard.create('text', [10, 0.8, 'B']);\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(122.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(162.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(155.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(141\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10a",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the length of the unknown side \\(AC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 51°\\), \\(\\angle B = 38°\\), and \\(AB = 7\\) cm.",
    "a": 3,
    "answer": "3",
    "hint": "Find the third angle first, then use the sine rule.",
    "solution": "\\(\\angle C = 180° - 51° - 38° = 91°\\)\nUsing the sine rule to find \\(AC\\) (\\(b\\)):\n\\(\\frac{b}{\\sin 38°} = \\frac{7}{\\sin 91°}\\)\n\\(b = \\frac{7 \\sin 38°}{\\sin 91°} \\approx \\frac{4.3096}{0.9998} \\approx 4.310\\)\n\nCorrect to two decimal places, \\(AC = 4.31\\) cm.",
    "solutionSteps": [
      {
        "explanation": "First, find \\(\\angle C\\) using the angle sum of a triangle.",
        "workingOut": "\\(\\angle C = 180^\\circ - 51^\\circ - 38^\\circ = 91^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Use the Sine Rule to find side \\(b\\) (which is \\(AC\\)).",
        "workingOut": "\\(\\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the known values.",
        "workingOut": "\\(\\frac{b}{\\sin 38^\\circ} = \\frac{7}{\\sin 91^\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange and solve for \\(b\\).",
        "workingOut": "\\(b = \\frac{7 \\sin 38^\\circ}{\\sin 91^\\circ} \\approx 4.31 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          10,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar B = board.create('point', [7,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar C = board.create('point', [2.71, 3.35], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [3, -1, '7 cm']);\nboard.create('angle', [B,A,C], {radius: 1, name: '51^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [C,B,A], {radius: 1, name: '38^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(6.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(175.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3.4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4.31\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10b",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the length of the unknown side \\(BC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 48°\\), \\(AC = 4\\) cm, and \\(AB = 6\\) cm.",
    "a": 1,
    "answer": "1",
    "hint": "Use the cosine rule to find the third side.",
    "solution": "Using the cosine rule to find \\(a = BC\\):\n\\(a^2 = 4^2 + 6^2 - 2(4)(6) \\cos 48° = 16 + 36 - 48(0.6691) = 52 - 32.118 = 19.882\\)\n\\(a = \\sqrt{19.882} \\approx 4.4589\\)\n\nCorrect to two decimal places, \\(BC = 4.46\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Use the Cosine Rule to find side \\(a\\) (which is \\(BC\\)).",
        "workingOut": "\\(a^2 = b^2 + c^2 - 2bc \\cos A\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(a^2 = 4^2 + 6^2 - 2(4)(6) \\cos 48^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "\\(a^2 = 16 + 36 - 48 \\cos 48^\\circ = 52 - 32.118 = 19.882\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root to find \\(a\\).",
        "workingOut": "\\(a = \\sqrt{19.882} \\approx 4.46 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          8,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar B = board.create('point', [6,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar C = board.create('point', [4*Math.cos(48*Math.PI/180), 4*Math.sin(48*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [3, -1, '6 cm']);\nboard.create('text', [0.5, 2, '4 cm']);\nboard.create('angle', [B,A,C], {radius: 1, name: '48^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(6.7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4.46\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(175.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3.6\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10c",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the length of the unknown side \\(AB\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle C = 80°\\), \\(AC = 10\\) cm, and \\(BC = 7\\) cm.",
    "a": 1,
    "answer": "1",
    "hint": "Use the cosine rule: \\(c^2 = a^2 + b^2 - 2ab \\cos C\\).",
    "solution": "Using the cosine rule to find \\(c = AB\\):\n\\(c^2 = 7^2 + 10^2 - 2(7)(10) \\cos 80° = 49 + 100 - 140(0.1736) = 149 - 24.31 = 124.69\\)\n\\(c = \\sqrt{124.69} \\approx 11.166\\)\n\nCorrect to two decimal places, \\(AB = 11.17\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Use the Cosine Rule to find side \\(c\\) (which is \\(AB\\)).",
        "workingOut": "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(c^2 = 7^2 + 10^2 - 2(7)(10) \\cos 80^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "\\(c^2 = 49 + 100 - 140 \\cos 80^\\circ = 149 - 24.31 = 124.69\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root to find \\(c\\).",
        "workingOut": "\\(c = \\sqrt{124.69} \\approx 11.17 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -6,
          12,
          10,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar C = board.create('point', [0,8], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]} });\nvar A = board.create('point', [-4,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]}});\nvar B = board.create('point', [7,1], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-3, 5, '10 cm']);\nboard.create('text', [4, 5, '7 cm']);\nboard.create('angle', [A,C,B], {radius: 2, name: '80^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(16.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(168.8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8.9\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10d",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the length of the unknown side \\(AC\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle B = 120°\\), \\(AB = 10\\) cm, and \\(BC = 12\\) cm.",
    "a": 2,
    "answer": "2",
    "hint": "Use the cosine rule. Note that \\(\\cos 120° = -0.5\\).",
    "solution": "Using the cosine rule to find \\(b = AC\\):\n\\(b^2 = 12^2 + 10^2 - 2(12)(10) \\cos 120° = 144 + 100 - 240(-0.5) = 244 + 120 = 364\\)\n\\(b = \\sqrt{364} \\approx 19.078\\)\n\nCorrect to two decimal places, \\(AC = 19.08\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Use the Cosine Rule to find side \\(b\\) (which is \\(AC\\)).",
        "workingOut": "\\(b^2 = a^2 + c^2 - 2ac \\cos B\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(b^2 = 12^2 + 10^2 - 2(12)(10) \\cos 120^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression, noting that \\(\\cos 120^\\circ = -0.5\\).",
        "workingOut": "\\(b^2 = 144 + 100 - 240(-0.5) = 244 + 120 = 364\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root to find \\(b\\).",
        "workingOut": "\\(b = \\sqrt{364} \\approx 19.08 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -15,
          15,
          10,
          -5
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar B = board.create('point', [0,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,-10]} });\nvar A = board.create('point', [-10,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]}});\nvar C = board.create('point', [12*Math.cos(60*Math.PI/180), 12*Math.sin(60*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-5, -1, '10 cm']);\nboard.create('text', [4, 5, '12 cm']);\nboard.create('angle', [C,B,A], {radius: 2, name: '120^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(28.6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(160.9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(19.08\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(15.3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10e",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the size of the unknown angle \\(\\angle C\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle A = 31°\\), \\(AC = 15\\) cm, and \\(BC = 8\\) cm. The diagram shows \\(\\angle B\\) is obtuse. Find \\(\\angle C\\).",
    "a": 3,
    "answer": "3",
    "hint": "Use the sine rule to find \\(\\angle B\\). Since the diagram shows an obtuse angle at \\(B\\), subtract the acute answer from \\(180°\\).",
    "solution": "Using the sine rule to find \\(\\angle B\\):\n\\(\\frac{\\sin B}{15} = \\frac{\\sin 31°}{8}\\)\n\\(\\sin B = \\frac{15 \\sin 31°}{8} \\approx 0.9657\\)\n\\(B = \\sin^{-1}(0.9657) \\approx 74.95°\\) or \\(B = 180° - 74.95° = 105.05°\\).\nSince \\(\\angle B\\) is obtuse, \\(B = 105.05°\\).\nThen \\(\\angle C = 180° - 31° - 105.05° = 43.95°\\).",
    "solutionSteps": [
      {
        "explanation": "Use the Sine Rule to find \\(\\angle B\\).",
        "workingOut": "\\(\\frac{\\sin B}{15} = \\frac{\\sin 31^\\circ}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(\\sin B\\) and find the obtuse angle for \\(\\angle B\\).",
        "workingOut": "\\(\\sin B \\approx 0.9657 \\implies B \\approx 74.9^\\circ \\text{ or } 105.1^\\circ. \\text{ (Use } 105.1^\\circ\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the angle sum of a triangle to find \\(\\angle C\\).",
        "workingOut": "\\(\\angle C = 180^\\circ - 31^\\circ - 105.1^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the final angle.",
        "workingOut": "\\(\\angle C = 43.9^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2,
          10,
          16,
          -2
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]} });\nvar B = board.create('point', [8,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nvar C = board.create('point', [15*Math.cos(31*Math.PI/180), 15*Math.sin(31*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [6, 5, '15 cm']);\nboard.create('text', [12, 3, '8 cm']);\nboard.create('angle', [B,A,C], {radius: 3, name: '31^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(65.9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(136.1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(35.2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(43.95\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y10-12i-q10f",
    "topicId": "y10-12i",
    "c": "12I",
    "t": "Revision: Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Calculate the length of the unknown side \\(AB\\), correct to two decimal places.\n\nTriangle \\(ABC\\) has \\(\\angle C = 18°\\), \\(AC = 15\\) cm, and \\(BC = 25\\) cm.",
    "a": 3,
    "answer": "3",
    "hint": "Use the cosine rule.",
    "solution": "Using the cosine rule to find \\(c = AB\\):\n\\(c^2 = 25^2 + 15^2 - 2(25)(15) \\cos 18°\\)\n\\(c^2 = 625 + 225 - 750(0.9510565) = 850 - 713.292 = 136.708\\)\n\\(c = \\sqrt{136.708} \\approx 11.69\\)\n\nCorrect to two decimal places, \\(AB = 11.69\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Use the Cosine Rule to find side \\(c\\) (which is \\(AB\\)).",
        "workingOut": "\\(c^2 = a^2 + b^2 - 2ab \\cos C\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values.",
        "workingOut": "\\(c^2 = 25^2 + 15^2 - 2(25)(15) \\cos 18^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "\\(c^2 = 625 + 225 - 750 \\cos 18^\\circ = 850 - 713.29 = 136.71\\)",
        "graphData": null
      },
      {
        "explanation": "Take the square root to find \\(c\\).",
        "workingOut": "\\(c = \\sqrt{136.71} \\approx 11.69 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -5,
          10,
          30,
          -15
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar C = board.create('point', [0,5], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,10]} });\nvar A = board.create('point', [0,-10], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10,-10]}});\nvar B = board.create('point', [25*Math.cos(-18*Math.PI/180), 5+25*Math.sin(-18*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10,-10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-1.5, -2.5, '15 cm']);\nboard.create('text', [12, 3, '25 cm']);\nboard.create('angle', [A,C,B], {radius: 3, name: '18^\\°', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "isManual": false,
    "options": [
      {
        "text": "\\(17.5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(168.3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9.4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.69\\)",
        "imageUrl": ""
      }
    ]
  }
];
