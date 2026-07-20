export const Y10_CH11A_QUESTIONS = [
  {
    "id": "y10-11a-q1a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 16\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius 4.\nIntercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).",
    "hint": "Identify the radius, then plot intercepts at (±r, 0) and (0, ±r) before sketching the circle.",
    "solution": "Circle centered at (0, 0) with radius 4.\nIntercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = \\sqrt{16} = 4\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [4, 0], {size: 3, color: '#4f46e5', name: '(4, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-4, 0], {size: 3, color: '#4f46e5', name: '(-4, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 4], {size: 3, color: '#4f46e5', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -4], {size: 3, color: '#4f46e5', name: '(0, -4)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm 4, 0), quad y\\text{-intercepts}: (0, pm 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Circle centered at (0, 0) with radius 4.\nIntercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius 4.\nIntercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (0, 0) with radius 4.\nIntercepts at (4, 0), (-4, 0), (0, 4), and (0, -4).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [4, 0], {size: 3, color: '#4f46e5', name: '(4, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-4, 0], {size: 3, color: '#4f46e5', name: '(-4, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 4], {size: 3, color: '#4f46e5', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -4], {size: 3, color: '#4f46e5', name: '(0, -4)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q1b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 4\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius 2.\nIntercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).",
    "hint": "The radius of the circle is the square root of 4.",
    "solution": "Circle centered at (0, 0) with radius 2.\nIntercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = \\sqrt{4} = 2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -3,
              3,
              3,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2, 0], {size: 3, color: '#4f46e5', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2, 0], {size: 3, color: '#4f46e5', name: '(-2, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2], {size: 3, color: '#4f46e5', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2], {size: 3, color: '#4f46e5', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm 2, 0), quad y\\text{-intercepts}: (0, pm 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Circle centered at (0, 0) with radius 2.\nIntercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius 2.\nIntercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (0, 0) with radius 2.\nIntercepts at (2, 0), (-2, 0), (0, 2), and (0, -2).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -3,
          3,
          3,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2, 0], {size: 3, color: '#4f46e5', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2, 0], {size: 3, color: '#4f46e5', name: '(-2, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2], {size: 3, color: '#4f46e5', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2], {size: 3, color: '#4f46e5', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q1c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 7\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius \\sqrt{7}.\nIntercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).",
    "hint": "The radius of the circle is the square root of 7.",
    "solution": "Circle centered at (0, 0) with radius \\sqrt{7}.\nIntercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = \\sqrt{7}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.64575], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.64575, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.64575, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.64575], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.64575], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm \\sqrt{7}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{7})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Circle centered at (0, 0) with radius \\sqrt{7}.\nIntercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius \\sqrt{7}.\nIntercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (0, 0) with radius \\sqrt{7}.\nIntercepts at (\\sqrt{7}, 0), (-\\sqrt{7}, 0), (0, \\sqrt{7}), and (0, -\\sqrt{7}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.64575], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.64575, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.64575, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{7}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.64575], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.64575], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{7})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q1d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 + y^2 = 5\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius \\sqrt{5}.\nIntercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).",
    "hint": "The radius of the circle is the square root of 5.",
    "solution": "Circle centered at (0, 0) with radius \\sqrt{5}.\nIntercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = \\sqrt{5}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -3.5,
              3.5,
              3.5,
              -3.5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.236], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.236, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.236, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.236], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.236], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm \\sqrt{5}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{5})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Circle centered at (0, 0) with radius \\sqrt{5}.\nIntercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius \\sqrt{5}.\nIntercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (0, 0) with radius \\sqrt{5}.\nIntercepts at (\\sqrt{5}, 0), (-\\sqrt{5}, 0), (0, \\sqrt{5}), and (0, -\\sqrt{5}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -3.5,
          3.5,
          3.5,
          -3.5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.236], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.236, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.236, 0], {size: 3, color: '#4f46e5', name: '$(-\\sqrt{5}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.236], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.236], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{5})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q2a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(y^2 = 9 - x^2\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius 3.\nIntercepts at (3, 0), (-3, 0), (0, 3), and (0, -3).",
    "hint": "Rearrange the equation into the form \\(x^2 + y^2 = r^2\\).",
    "solution": "Circle centered at (0, 0) with radius 3.\nIntercepts at (3, 0), (-3, 0), (0, 3), and (0, -3).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + y^2 = 9\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -5,
              5,
              5,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3, 0], {size: 3, color: '#4f46e5', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3, 0], {size: 3, color: '#4f46e5', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3], {size: 3, color: '#4f46e5', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3], {size: 3, color: '#4f46e5', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\sqrt{9} = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm 3, 0), quad y\\text{-intercepts}: (0, pm 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius 3.\nIntercepts at (3, 0), (-3, 0), (0, 3), and (0, -3).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (0, 0) with radius 3.\nIntercepts at (3, 0), (-3, 0), (0, 3), and (0, -3).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3, 0], {size: 3, color: '#4f46e5', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3, 0], {size: 3, color: '#4f46e5', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3], {size: 3, color: '#4f46e5', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3], {size: 3, color: '#4f46e5', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q2b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(y^2 = -x^2 + 8\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius 2\\sqrt{2}.\nIntercepts at (2\\sqrt{2}, 0), (-2\\sqrt{2}, 0), (0, 2\\sqrt{2}), and (0, -2\\sqrt{2}).",
    "hint": "Rearrange to \\(x^2 + y^2 = r^2\\).",
    "solution": "Circle centered at (0, 0) with radius 2\\sqrt{2}.\nIntercepts at (2\\sqrt{2}, 0), (-2\\sqrt{2}, 0), (0, 2\\sqrt{2}), and (0, -2\\sqrt{2}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + y^2 = 8\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.8284], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.8284, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.8284, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.8284], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.8284], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\sqrt{8} = 2\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm 2\\sqrt{2}, 0), quad y\\text{-intercepts}: (0, pm 2\\sqrt{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius 2\\sqrt{2}.\nIntercepts at (2\\sqrt{2}, 0), (-2\\sqrt{2}, 0), (0, 2\\sqrt{2}), and (0, -2\\sqrt{2}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (0, 0) with radius 2\\sqrt{2}.\nIntercepts at (2\\sqrt{2}, 0), (-2\\sqrt{2}, 0), (0, 2\\sqrt{2}), and (0, -2\\sqrt{2}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.8284], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.8284, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.8284, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{2}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.8284], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.8284], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{2})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q2c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 = 6 - y^2\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius \\sqrt{6}.\nIntercepts at (\\sqrt{6}, 0), (-\\sqrt{6}, 0), (0, \\sqrt{6}), and (0, -\\sqrt{6}).",
    "hint": "Add \\(y^2\\) to both sides to find standard form.",
    "solution": "Circle centered at (0, 0) with radius \\sqrt{6}.\nIntercepts at (\\sqrt{6}, 0), (-\\sqrt{6}, 0), (0, \\sqrt{6}), and (0, -\\sqrt{6}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + y^2 = 6\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.449], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.449], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.449], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\sqrt{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm \\sqrt{6}, 0), quad y\\text{-intercepts}: (0, pm \\sqrt{6})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius \\sqrt{6}.\nIntercepts at (\\sqrt{6}, 0), (-\\sqrt{6}, 0), (0, \\sqrt{6}), and (0, -\\sqrt{6}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (0, 0) with radius \\sqrt{6}.\nIntercepts at (\\sqrt{6}, 0), (-\\sqrt{6}, 0), (0, \\sqrt{6}), and (0, -\\sqrt{6}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 2.449], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-2.449, 0], {size: 3, color: '#4f46e5', name: '$(\\sqrt{6}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 2.449], {size: 3, color: '#4f46e5', name: '$(0, \\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -2.449], {size: 3, color: '#4f46e5', name: '$(0, -\\sqrt{6})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q2d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 = -y^2 + 12\\), marking any intercepts.",
    "answer": "Circle centered at (0, 0) with radius 2\\sqrt{3}.\nIntercepts at (2\\sqrt{3}, 0), (-2\\sqrt{3}, 0), (0, 2\\sqrt{3}), and (0, -2\\sqrt{3}).",
    "hint": "Convert the equation to standard circle form.",
    "solution": "Circle centered at (0, 0) with radius 2\\sqrt{3}.\nIntercepts at (2\\sqrt{3}, 0), (-2\\sqrt{3}, 0), (0, 2\\sqrt{3}), and (0, -2\\sqrt{3}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + y^2 = 12\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -5,
              5,
              5,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3.464], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3.464, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3.464, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3.464], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3.464], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\sqrt{12} = 2\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x\\text{-intercepts}: (\\pm 2\\sqrt{3}, 0), quad y\\text{-intercepts}: (0, pm 2\\sqrt{3})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 0) with radius 2\\sqrt{3}.\nIntercepts at (2\\sqrt{3}, 0), (-2\\sqrt{3}, 0), (0, 2\\sqrt{3}), and (0, -2\\sqrt{3}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (0, 0) with radius 2\\sqrt{3}.\nIntercepts at (2\\sqrt{3}, 0), (-2\\sqrt{3}, 0), (0, 2\\sqrt{3}), and (0, -2\\sqrt{3}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 0], 3.464], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [3.464, 0], {size: 3, color: '#4f46e5', name: '$(2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-3.464, 0], {size: 3, color: '#4f46e5', name: '$(-2\\sqrt{3}, 0)$', withLabel: true, label: {autoPosition: false, offset: [-35, 10]}});\nboard.create('point', [0, 3.464], {size: 3, color: '#4f46e5', name: '$(0, 2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -3.464], {size: 3, color: '#4f46e5', name: '$(0, -2\\sqrt{3})$', withLabel: true, label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q3a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((5, 5)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute the x and y values into the left-hand side of the circle equation.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(5^2 + 5^2 = 25 + 25 = 50\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(50 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q3b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((7, 1)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute 7 for x and 1 for y.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(7^2 + 1^2 = 49 + 1 = 50\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(50 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q3c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((6, 4)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(No\\)",
      "\\(No + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute the point into the expression.",
    "solution": "The correct answer is \\(No\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(6^2 + 4^2 = 36 + 16 = 52\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(52 \\neq 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(No\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q3d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((-1, 7)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Pay attention to the sign when squaring the negative number.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((-1)^2 + 7^2 = 1 + 49 = 50\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(50 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q3e",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((5\\sqrt{2}, 0)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Squaring \\(5\\sqrt{2}\\) gives \\(25 \\times 2 = 50\\).",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((5\\sqrt{2})^2 + 0^2 = 50 + 0 = 50\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(50 = 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q3f",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((5, 4)\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(No\\)",
      "\\(No + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute the values of the point and calculate the sum.",
    "solution": "The correct answer is \\(No\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(5^2 + 4^2 = 25 + 16 = 41\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -8.571067811865476,
              8.571067811865476,
              8.571067811865476,
              -8.571067811865476
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(41 \\neq 50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(No\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -8.571067811865476,
          8.571067811865476,
          8.571067811865476,
          -8.571067811865476
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-8.571067811865476,0],[8.571067811865476,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8.571067811865476],[0,8.571067811865476]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.542539674441619, -2.9998737341529162, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.713961030678928, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 7.0710678118654755], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [3.5355339059327378, 5.303300858899107, 'x² + y² = 50'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((6, 8)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute 6 and 8 into the equation.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(6^2 + 8^2 = 36 + 64 = 100\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(100 = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((8, -6)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute 8 for x and -6 for y.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(8^2 + (-6)^2 = 64 + 36 = 100\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(100 = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((-5, -5)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(No\\)",
      "\\(No + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute the negative values.",
    "solution": "The correct answer is \\(No\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((-5)^2 + (-5)^2 = 25 + 25 = 50\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(50 \\neq 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(No\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((0, -10)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Squaring -10 yields 100.",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(0^2 + (-10)^2 = 0 + 100 = 100\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(100 = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4e",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((5\\sqrt{2}, 5\\sqrt{2})\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the square of \\(5\\sqrt{2}\\).",
    "solution": "The correct answer is \\(Yes\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(100 = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q4f",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Check whether or not the point \\((9, 4)\\) lies on the circle \\(x^2 + y^2 = 100\\). Enter 'Yes' or 'No'.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(No\\)",
      "\\(No + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute coordinates and simplify.",
    "solution": "The correct answer is \\(No\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(9^2 + 4^2 = 81 + 16 = 97\\)",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -11.5,
              11.5,
              11.5,
              -11.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(97 \\neq 100\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(No\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -11.5,
          11.5,
          11.5,
          -11.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.0249999999999995, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q5a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\((x - 2)^2 + (y - 1)^2 = 4\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (2, 1) with radius 2.\nIntercepts at (2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0), and (0, 1).",
    "hint": "Identify the centre (h, k) and radius r, then solve for x = 0 and y = 0 to find the intercepts.",
    "solution": "Circle centered at (2, 1) with radius 2.\nIntercepts at (2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0), and (0, 1).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (2, 1), quad r = \\sqrt{4} = 2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              4,
              5,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[2, 1], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 1], {size: 3, color: '#64748b', name: '$(0, 1)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.732, 0], {size: 3, color: '#64748b', name: '$(2+\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.268, 0], {size: 3, color: '#64748b', name: '$(2-\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 1], {size: 2, color: 'black', name: 'Centre (2,1)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((0 - 2)^2 + (y - 1)^2 = 4 \\implies 4 + (y - 1)^2 = 4 \\implies (y - 1)^2 = 0 \\implies y = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 2)^2 + (0 - 1)^2 = 4 \\implies (x - 2)^2 + 1 = 4 \\implies (x - 2)^2 = 3 \\implies x = 2 \\pm \\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (2, 1) with radius 2.\nIntercepts at (2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0), and (0, 1).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (2, 1) with radius 2.\nIntercepts at (2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0), and (0, 1).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          4,
          5,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[2, 1], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 1], {size: 3, color: '#64748b', name: '$(0, 1)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.732, 0], {size: 3, color: '#64748b', name: '$(2+\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.268, 0], {size: 3, color: '#64748b', name: '$(2-\\sqrt{3}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 1], {size: 2, color: 'black', name: 'Centre (2,1)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q5b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\((x - 4)^2 + (y - 3)^2 = 25\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (4, 3) with radius 5.\nIntercepts at (8, 0), (0, 0), and (0, 6).",
    "hint": "The center is (4, 3) and radius is 5.",
    "solution": "Circle centered at (4, 3) with radius 5.\nIntercepts at (8, 0), (0, 0), and (0, 6).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (4, 3), quad r = 5\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -2,
              9,
              10,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[4, 3], 5], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '$(0, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [8, 0], {size: 3, color: '#64748b', name: '$(8, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '$(0, 6)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((0-4)^2 + (y-3)^2 = 25 \\implies 16 + (y-3)^2 = 25 \\implies (y-3)^2 = 9 \\implies y = 0 \\text{ or } 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x-4)^2 + (0-3)^2 = 25 \\implies (x-4)^2 + 9 = 25 \\implies (x-4)^2 = 16 \\implies x = 0 \\text{ or } 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (4, 3) with radius 5.\nIntercepts at (8, 0), (0, 0), and (0, 6).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (4, 3) with radius 5.\nIntercepts at (8, 0), (0, 0), and (0, 6).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          9,
          10,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[4, 3], 5], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '$(0, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [8, 0], {size: 3, color: '#64748b', name: '$(8, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '$(0, 6)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q5c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\((x - 3)^2 + (y - 2)^2 = 9\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (3, 2) with radius 3.\nIntercepts at (3 + \\sqrt{5}, 0), (3 - \\sqrt{5}, 0), and (0, 2).",
    "hint": "Identify center (3, 2) and radius 3.",
    "solution": "Circle centered at (3, 2) with radius 3.\nIntercepts at (3 + \\sqrt{5}, 0), (3 - \\sqrt{5}, 0), and (0, 2).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (3, 2), quad r = 3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              6,
              7,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[3, 2], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 2], {size: 3, color: '#64748b', name: '$(0, 2)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5.236, 0], {size: 3, color: '#64748b', name: '$(3+\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.764, 0], {size: 3, color: '#64748b', name: '$(3-\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((0-3)^2 + (y-2)^2 = 9 \\implies 9 + (y-2)^2 = 9 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x-3)^2 + (0-2)^2 = 9 \\implies (x-3)^2 = 5 \\implies x = 3 \\pm \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (3, 2) with radius 3.\nIntercepts at (3 + \\sqrt{5}, 0), (3 - \\sqrt{5}, 0), and (0, 2).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (3, 2) with radius 3.\nIntercepts at (3 + \\sqrt{5}, 0), (3 - \\sqrt{5}, 0), and (0, 2).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          6,
          7,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[3, 2], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 2], {size: 3, color: '#64748b', name: '$(0, 2)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5.236, 0], {size: 3, color: '#64748b', name: '$(3+\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0.764, 0], {size: 3, color: '#64748b', name: '$(3-\\sqrt{5}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q5d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\((x - 1)^2 + (y - 3)^2 = 16\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (1, 3) with radius 4.\nIntercepts at (1 + \\sqrt{7}, 0), (1 - \\sqrt{7}, 0), (0, 3 + \\sqrt{15}), and (0, 3 - \\sqrt{15}).",
    "hint": "Identify the centre (1, 3) and radius 4.",
    "solution": "Circle centered at (1, 3) with radius 4.\nIntercepts at (1 + \\sqrt{7}, 0), (1 - \\sqrt{7}, 0), (0, 3 + \\sqrt{15}), and (0, 3 - \\sqrt{15}).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (1, 3), quad r = 4\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              8,
              6,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[1, 3], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 6.873], {size: 3, color: '#64748b', name: '$(0, 3+\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -0.873], {size: 3, color: '#64748b', name: '$(0, 3-\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.646, 0], {size: 3, color: '#64748b', name: '$(1+\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1.646, 0], {size: 3, color: '#64748b', name: '$(1-\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((0-1)^2 + (y-3)^2 = 16 \\implies 1 + (y-3)^2 = 16 \\implies y = 3 \\pm \\sqrt{15}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x-1)^2 + (0-3)^2 = 16 \\implies (x-1)^2 + 9 = 16 \\implies x = 1 \\pm \\sqrt{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (1, 3) with radius 4.\nIntercepts at (1 + \\sqrt{7}, 0), (1 - \\sqrt{7}, 0), (0, 3 + \\sqrt{15}), and (0, 3 - \\sqrt{15}).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Circle centered at (1, 3) with radius 4.\nIntercepts at (1 + \\sqrt{7}, 0), (1 - \\sqrt{7}, 0), (0, 3 + \\sqrt{15}), and (0, 3 - \\sqrt{15}).\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          8,
          6,
          -2
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[1, 3], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 6.873], {size: 3, color: '#64748b', name: '$(0, 3+\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -0.873], {size: 3, color: '#64748b', name: '$(0, 3-\\sqrt{15})$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3.646, 0], {size: 3, color: '#64748b', name: '$(1+\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1.646, 0], {size: 3, color: '#64748b', name: '$(1-\\sqrt{7}, 0)$', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q5e",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\((x - 2)^2 + y^2 = 4\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (2, 0) with radius 2.\nIntercepts at (0, 0) and (4, 0).",
    "hint": "Identify parameters: centre (2, 0) and radius 2.",
    "solution": "Circle centered at (2, 0) with radius 2.\nIntercepts at (0, 0) and (4, 0).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (2, 0), quad r = 2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              3,
              5,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[2, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {size: 3, color: '#64748b', name: '(4, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{For } y = 0: (x-2)^2 = 4 \\implies x = 0, 4. \\quad \\text{For } x = 0: (-2)^2 + y^2 = 4 \\implies y = 0.\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Circle centered at (2, 0) with radius 2.\nIntercepts at (0, 0) and (4, 0).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (2, 0) with radius 2.\nIntercepts at (0, 0) and (4, 0).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (2, 0) with radius 2.\nIntercepts at (0, 0) and (4, 0).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          3,
          5,
          -3
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[2, 0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {size: 3, color: '#64748b', name: '(4, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q5f",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Sketch the graph of the circle \\(x^2 + (y - 3)^2 = 9\\), showing the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Circle centered at (0, 3) with radius 3.\nIntercepts at (0, 0) and (0, 6).",
    "hint": "Centre is (0, 3) and radius is 3.",
    "solution": "Circle centered at (0, 3) with radius 3.\nIntercepts at (0, 0) and (0, 6).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre}: (0, 3), quad r = 3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              7,
              4,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true,
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('circle', [[0, 3], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '(0, 6)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{For } x = 0: (y-3)^2 = 9 \\implies y = 0, 6. \\quad \\text{For } y = 0: x^2 + (-3)^2 = 9 \\implies x = 0.\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Circle centered at (0, 3) with radius 3.\nIntercepts at (0, 0) and (0, 6).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Circle centered at (0, 3) with radius 3.\nIntercepts at (0, 0) and (0, 6).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Circle centered at (0, 3) with radius 3.\nIntercepts at (0, 0) and (0, 6).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          7,
          4,
          -1
        ],
        "boardOptions": {
          "axis": true,
          "grid": true,
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('circle', [[0, 3], 3], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0, 0], {size: 3, color: '#64748b', name: '(0, 0)', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {size: 3, color: '#64748b', name: '(0, 6)', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q6a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 + 6x + y^2 + 8y + 9 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (-3, -4), Radius: 4",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Group the x and y terms, then complete the square for both variables.",
    "solution": "The correct answer is Centre: (-3, -4), Radius: 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 + 6x) + (y^2 + 8y) = -9\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 + 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x + 3)^2 + (y + 4)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (-3, -4), Radius: 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (-3, -4), Radius: 4",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q6b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 4x + y^2 + 10y + 13 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (2, -5), Radius: 4",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Complete the square for x and y separately.",
    "solution": "The correct answer is Centre: (2, -5), Radius: 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 - 4x) + (y^2 + 10y) = -13\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 - 4x + 4) + (y^2 + 10y + 25) = -13 + 4 + 25\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 2)^2 + (y + 5)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (2, -5), Radius: 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (2, -5), Radius: 4",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q6c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 8x + y^2 - 6y = 11\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (4, 3), Radius: 6",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "The constant is already on the right-hand side. Complete the squares on the left.",
    "solution": "The correct answer is Centre: (4, 3), Radius: 6.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 - 8x) + (y^2 - 6y) = 11\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 - 8x + 16) + (y^2 - 6y + 9) = 11 + 16 + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 4)^2 + (y - 3)^2 = 36\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (4, 3), Radius: 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (4, 3), Radius: 6",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q6d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 12x + y^2 - 4y + 15 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (6, 2), Radius: 5",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Identify the halves of the linear coefficients, square them, and add to both sides.",
    "solution": "The correct answer is Centre: (6, 2), Radius: 5.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 - 12x) + (y^2 - 4y) = -15\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 - 12x + 36) + (y^2 - 4y + 4) = -15 + 36 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 6)^2 + (y - 2)^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (6, 2), Radius: 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (6, 2), Radius: 5",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q6e",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 6x + y^2 - 10y + 9 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (3, 5), Radius: 5",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the standard equation format.",
    "solution": "The correct answer is Centre: (3, 5), Radius: 5.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 - 6x) + (y^2 - 10y) = -9\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 - 6x + 9) + (y^2 - 10y + 25) = -9 + 9 + 25\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 3)^2 + (y - 5)^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (3, 5), Radius: 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (3, 5), Radius: 5",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q6f",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the square in \\(x\\) and \\(y\\) to find the coordinates of the centre and the radius of the circle: \\(x^2 - 10x + y^2 - 6y + 18 = 0\\). Enter the result in the format: Centre: (h, k), Radius: r",
    "opts": [
      "Centre: (5, 3), Radius: 4",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Add 25 and 9 to complete the squares after isolating the constant.",
    "solution": "The correct answer is Centre: (5, 3), Radius: 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x^2 - 10x) + (y^2 - 6y) = -18\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x^2 - 10x + 25) + (y^2 - 6y + 9) = -18 + 25 + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 5)^2 + (y - 3)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre: (5, 3), Radius: 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Centre: (5, 3), Radius: 4",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q7a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Write down the equation of the circle with centre \\((2, 4)\\) and radius 4.",
    "opts": [
      "\\((x-2)^2 + (y-4)^2 = 16\\)",
      "\\((x-2)^2 + (y-4)^2 = 16 + 1\\)",
      "\\((x-3)^3 + (y-4)^3 = 16\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the standard form equation: \\((x - h)^2 + (y - k)^2 = r^2\\).",
    "solution": "The correct answer is \\((x-2)^2 + (y-4)^2 = 16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "h = 2, quad k = 4, quad r = 4",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 2)^2 + (y - 4)^2 = 4^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 2)^2 + (y - 4)^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-2)^2 + (y-4)^2 = 16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-2)^2 + (y-4)^2 = 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q7b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Write down the equation of the circle with centre \\((-3, 2)\\) and radius 5.",
    "opts": [
      "\\((x+3)^2 + (y-2)^2 = 25\\)",
      "\\((x+3)^2 + (y-2)^2 = 25 + 1\\)",
      "\\((x+3)^3 + (y-3)^3 = 35\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Subtracting a negative value inside the bracket gives a plus sign.",
    "solution": "The correct answer is \\((x+3)^2 + (y-2)^2 = 25\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "h = -3, quad k = 2, quad r = 5",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - (-3))^2 + (y - 2)^2 = 5^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x + 3)^2 + (y - 2)^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x+3)^2 + (y-2)^2 = 25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x+3)^2 + (y-2)^2 = 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q7c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Write down the equation of the circle with centre \\((5, -2)\\) and radius 2.",
    "opts": [
      "\\((x-5)^2 + (y+2)^2 = 4\\)",
      "\\((x-5)^2 + (y+2)^2 = 4 + 1\\)",
      "\\((x-5)^3 + (y+3)^3 = 4\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Recall standard circle properties.",
    "solution": "The correct answer is \\((x-5)^2 + (y+2)^2 = 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "h = 5, quad k = -2, quad r = 2",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 5)^2 + (y - (-2))^2 = 2^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 5)^2 + (y + 2)^2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-5)^2 + (y+2)^2 = 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-5)^2 + (y+2)^2 = 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q7d",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Write down the equation of the circle with centre \\((3, 0)\\) and radius 3.",
    "opts": [
      "\\((x-3)^2 + y^2 = 9\\)",
      "\\((x-3)^2 + y^2 = 9 + 1\\)",
      "\\((x-3)^3 + y^3 = 9\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Since k = 0, the y-term simplifies to just y^2.",
    "solution": "The correct answer is \\((x-3)^2 + y^2 = 9\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "h = 3, quad k = 0, quad r = 3",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 3)^2 + (y - 0)^2 = 3^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 3)^2 + y^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-3)^2 + y^2 = 9. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-3)^2 + y^2 = 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q8a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that the point \\((15, 15)\\) lies on the circle with centre \\((3, 10)\\) and radius 13.",
    "answer": "Proof showing (15 - 3)^2 + (15 - 10)^2 = 169 = 13^2.",
    "hint": "Substitute the coordinates of the point into the left side of the circle equation and check if it equals the radius squared.",
    "solution": "Proof showing (15 - 3)^2 + (15 - 10)^2 = 169 = 13^2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Distance}^2 = (15 - 3)^2 + (15 - 10)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(12^2 + 5^2 = 144 + 25 = 169\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(169 = 13^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Proof showing (15 - 3)^2 + (15 - 10)^2 = 169 = 13^2.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Proof showing (15 - 3)^2 + (15 - 10)^2 = 169 = 13^2.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-11a-q8b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the circle with centre \\((3, 10)\\) and radius 13.",
    "opts": [
      "\\((x-3)^2 + (y-10)^2 = 169\\)",
      "\\((x-3)^2 + (y-10)^2 = 169 + 1\\)",
      "\\((x-3)^3 + (y-10)^3 = 169\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute the center and radius into standard circle form.",
    "solution": "The correct answer is \\((x-3)^2 + (y-10)^2 = 169\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "h = 3, quad k = 10, quad r = 13",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 3)^2 + (y - 10)^2 = 13^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 3)^2 + (y - 10)^2 = 169\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-3)^2 + (y-10)^2 = 169. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-3)^2 + (y-10)^2 = 169\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q9",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the circle with centre \\((5, -12)\\) passing through the origin.",
    "opts": [
      "\\((x-5)^2 + (y+12)^2 = 169\\)",
      "\\((x-5)^2 + (y+12)^2 = 169 + 1\\)",
      "\\((x-5)^3 + (y+13)^3 = 169\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The distance from the centre to the origin (0, 0) is the radius of the circle.",
    "solution": "The correct answer is \\((x-5)^2 + (y+12)^2 = 169\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = \\sqrt{(5 - 0)^2 + (-12 - 0)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\sqrt{25 + 144} = \\sqrt{169} = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 5)^2 + (y - (-12))^2 = 13^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-5)^2 + (y+12)^2 = 169. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-5)^2 + (y+12)^2 = 169\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q10a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a circle with centre \\((5, 8)\\):\na) Find the equation of the circle if it touches the \\(y\\)-axis.",
    "opts": [
      "\\((x-5)^2 + (y-8)^2 = 25\\)",
      "\\((x-5)^2 + (y-8)^2 = 25 + 1\\)",
      "\\((x-5)^3 + (y-8)^3 = 35\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((x-5)^2 + (y-8)^2 = 25\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = |5| = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 5)^2 + (y - 8)^2 = 5^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 5)^2 + (y - 8)^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-5)^2 + (y-8)^2 = 25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-5)^2 + (y-8)^2 = 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q10b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For a circle with centre \\((5, 8)\\):\nb) Find the equation of the circle if it touches the \\(x\\)-axis.",
    "opts": [
      "\\((x-5)^2 + (y-8)^2 = 64\\)",
      "\\((x-5)^2 + (y-8)^2 = 64 + 1\\)",
      "\\((x-5)^3 + (y-8)^3 = 64\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((x-5)^2 + (y-8)^2 = 64\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(r = |8| = 8\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 5)^2 + (y - 8)^2 = 8^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 5)^2 + (y - 8)^2 = 64\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-5)^2 + (y-8)^2 = 64. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-5)^2 + (y-8)^2 = 64\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q11a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(3, 8)\\) and \\(B(9, 8)\\). Find:\na) The distance \\(AB\\).",
    "opts": [
      "\\(-6\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(d = \\sqrt{(9 - 3)^2 + (8 - 8)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(d = \\sqrt{6^2 + 0^2} = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q11b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(3, 8)\\) and \\(B(9, 8)\\). Find:\nb) The midpoint of \\(AB\\).",
    "opts": [
      "\\((6,8)\\)",
      "\\((6,8) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((6,8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left( \\frac{3 + 9}{2}, \\frac{8 + 8}{2} \\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(M = (6, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((6,8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (6,8). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((6,8)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q11c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(3, 8)\\) and \\(B(9, 8)\\). Find:\nc) The equation of the circle with diameter \\(AB\\).",
    "opts": [
      "\\((x-6)^2 + (y-8)^2 = 9\\)",
      "\\((x-6)^2 + (y-8)^2 = 9 + 1\\)",
      "\\((x-6)^3 + (y-8)^3 = 9\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((x-6)^2 + (y-8)^2 = 9\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre} = (6, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\frac{6}{2} = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 6)^2 + (y - 8)^2 = 3^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-6)^2 + (y-8)^2 = 9. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-6)^2 + (y-8)^2 = 9\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q12a",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(1, 5)\\) and \\(B(7, -3)\\). Find:\na) The distance \\(AB\\).",
    "opts": [
      "\\(-10\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(9\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(d = \\sqrt{(7 - 1)^2 + (-3 - 5)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(10\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q12b",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(1, 5)\\) and \\(B(7, -3)\\). Find:\nb) The midpoint of \\(AB\\).",
    "opts": [
      "\\((4,1)\\)",
      "\\((4,1) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((4,1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left( \\frac{1 + 7}{2}, \\frac{5 + (-3)}{2} \\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(M = \\left( \\frac{8}{2}, \\frac{2}{2} \\right) = (4, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((4,1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4,1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4,1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-11a-q12c",
    "topicId": "y10-11a",
    "c": "11A",
    "t": "Cartesian equation of a circle",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The interval \\(AB\\) joins the points \\(A(1, 5)\\) and \\(B(7, -3)\\). Find:\nc) The equation of the circle with diameter \\(AB\\).",
    "opts": [
      "\\((x-4)^2 + (y-1)^2 = 25\\)",
      "\\((x-4)^2 + (y-1)^2 = 25 + 1\\)",
      "\\((x-4)^3 + (y-1)^3 = 35\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((x-4)^2 + (y-1)^2 = 25\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Cartesian equation of a circle: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Centre} = (4, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(r = \\frac{10}{2} = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 4)^2 + (y - 1)^2 = 5^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (x-4)^2 + (y-1)^2 = 25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((x-4)^2 + (y-1)^2 = 25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
