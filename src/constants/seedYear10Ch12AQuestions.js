export const Y10_CH12A_QUESTIONS = [
  {
    "id": "y10-12a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "7.42",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 14 \\sin 32^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 7.42"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -5.748,
          11.388,
          17.618,
          -3.968
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [11.87, 0], [11.87, 7.42]];\nvar sides = [\"\", \"a cm\", \"14 cm\"];\nvar angles = [\"32&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            var labelOpts = angles[i] === '32&deg;' ? { offset: [20, 5] } : {};\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1, label: labelOpts});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "36.93",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 12 \\tan 72^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 36.93"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2.4800000000000004,
          16.974,
          6.180000000000001,
          -5.564
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 11.41], [3.7, 11.41]];\nvar sides = [\"b cm\", \"\", \"12 cm\"];\nvar angles = [\"72&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "3.15",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 5 \\cos 51^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 3.15"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -3.0,
          9.638,
          8.0,
          -3.468
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 6.17], [5, 6.17], [5, 0]];\nvar sides = [\"5 m\", \"c m\", \"\"];\nvar angles = [\"51&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "2.20",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 8 \\sin 16^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 2.20"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.328,
          4.08,
          12.648,
          -1.8800000000000001
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [8.32, 0], [0.63, 2.2]];\nvar sides = [\"\", \"8 cm\", \"d cm\"];\nvar angles = [\"\", \"16&deg;\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q1e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "3.27",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 4.8 \\cos 47^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 3.27"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2.92,
          1.956,
          7.72,
          -4.346
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [4.8, 0], [2.23, -2.39]];\nvar sides = [\"4.8 cm\", \"i cm\", \"\"];\nvar angles = [\"47&deg;\", \"\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q1f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "21.15",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 16.2 / \\cos 40^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 21.15"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -11.08,
          18.374000000000002,
          36.28,
          -5.964
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [25.2, 0], [10.41, 12.41]];\nvar sides = [\"\", \"j cm\", \"16.2 cm\"];\nvar angles = [\"\", \"40&deg;\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "14.97",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 2.6 / \\sin 10^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 14.97"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -6.896000000000001,
          4.640000000000001,
          21.636000000000003,
          -2.04
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [14.74, 0], [14.74, 2.6]];\nvar sides = [\"\", \"2.6 cm\", \"a cm\"];\nvar angles = [\"10&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "5.67",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 7 / \\tan 51^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 5.67"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -3.8000000000000003,
          8.938,
          10.8,
          -3.2680000000000002
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 5.67], [7, 5.67]];\nvar sides = [\"\", \"7 cm\", \"b cm\"];\nvar angles = [\"51&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "11.75",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 9 / \\cos 40^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 11.75"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.6,
          11.57,
          13.6,
          -4.02
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [9, 0], [0, 7.55]];\nvar sides = [\"9 m\", \"e m\", \"\"];\nvar angles = [\"\", \"40&deg;\", \"\"];\nvar rightAngleIdx = 0;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral, correct to two decimal places.",
    "a": "4.34",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA to set up an equation.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{ratio} = 12.6 / \\tan 71^\\circ"
      },
      {
        "explanation": "Calculate and round to two decimal places.",
        "workingOut": "\\therefore 4.34"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -16.480000000000004,
          17.674,
          55.18000000000001,
          -5.764
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [38.7, 0], [34.6, 11.91]];\nvar sides = [\"h cm\", \"12.6 cm\", \"\"];\nvar angles = [\"\", \"71&deg;\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "25.4",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\sin^{-1}(6/14)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 25.4^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -6.0600000000000005,
          9.4,
          18.71,
          -3.4000000000000004
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [12.65, 0], [0, 6]];\nvar sides = [\"\", \"14 cm\", \"6 cm\"];\nvar angles = [\"\", \"&theta;\", \"\"];\nvar rightAngleIdx = 0;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "33.7",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\sin^{-1}(5/9)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 33.7^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -3.9920000000000004,
          8.0,
          11.472000000000001,
          -3.0
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 5], [7.48, 5]];\nvar sides = [\"5 cm\", \"\", \"9 cm\"];\nvar angles = [\"&theta;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "60.3",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\tan^{-1}(14/8)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 60.3^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -6.6000000000000005,
          12.2,
          20.6,
          -4.2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 8], [14, 8], [14, 0]];\nvar sides = [\"14 cm\", \"8 cm\", \"\"];\nvar angles = [\"\", \"\", \"&theta;\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "19.1",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\sin^{-1}(3.8/11.6)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 19.1^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -5.64,
          2.7359999999999998,
          17.24,
          -1.496
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [11.6, 0], [8.01, 1.24]];\nvar sides = [\"11.6 cm\", \"3.8 cm\", \"\"];\nvar angles = [\"\", \"&theta;\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "39.6",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\sin^{-1}(5.1/8)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 39.6^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.2,
          6.502000000000001,
          12.2,
          -2.572
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [8, 0], [3.25, 3.93]];\nvar sides = [\"8 cm\", \"\", \"5.1 cm\"];\nvar angles = [\"\", \"&theta;\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of &theta;, correct to one decimal place.",
    "a": "70.8",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use inverse trigonometric functions.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio and use the inverse function.",
        "workingOut": "\\theta = \\tan^{-1}(13.2/4.6)"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "\\therefore 70.8^\\circ"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -6.28,
          7.4399999999999995,
          19.48,
          -2.84
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [13.2, 0], [0, 4.6]];\nvar sides = [\"13.2 cm\", \"\", \"4.6 cm\"];\nvar angles = [\"\", \"\", \"&theta;\"];\nvar rightAngleIdx = 0;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "7.90",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 16.2 \\tan 26^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 7.90"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -3.84,
          21.384,
          10.94,
          -6.824000000000001
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 14.56], [0, 0], [7.1, 0]];\nvar sides = [\"\", \"x cm\", \"16.2 cm\"];\nvar angles = [\"26&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "44.9",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = \\sin^{-1}(12/17)"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 44.9"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -5.800000000000001,
          17.855999999999998,
          17.8,
          -5.816
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 12.04], [12, 12.04]];\nvar sides = [\"\", \"12 cm\", \"17 cm\"];\nvar angles = [\"&theta;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "8.08",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 15.2 / \\tan 62^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 8.08"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -7.08,
          41.012,
          22.28,
          -12.432
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 28.58], [15.2, 28.58], [15.2, 0]];\nvar sides = [\"15.2 cm\", \"a cm\", \"\"];\nvar angles = [\"\", \"\", \"62&deg;\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "2.26",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 8.2 \\cos 74^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 2.26"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -1.904,
          12.032,
          4.164,
          -4.152
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 7.88], [0, 0], [2.26, 0]];\nvar sides = [\"\", \"a m\", \"8.2 m\"];\nvar angles = [\"\", \"\", \"74&deg;\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "57.8",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = \\cos^{-1}(8/15)"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 57.8"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -7.0,
          3.708,
          22.0,
          -10.478
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [15, 0], [4.27, -6.77]];\nvar sides = [\"15 cm\", \"\", \"8 cm\"];\nvar angles = [\"&theta;\", \"\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "52.1",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = \\sin^{-1}(15/19)"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 52.1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -8.600000000000001,
          13.908000000000001,
          27.6,
          -4.688000000000001
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [19, 0], [11.84, 9.22]];\nvar sides = [\"19 cm\", \"\", \"15 cm\"];\nvar angles = [\"&theta;\", \"\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "10.15",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 10 / \\sin 80^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 10.15"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -1.7040000000000002,
          15.0,
          3.464,
          -5.0
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 10], [1.76, 10]];\nvar sides = [\"10 m\", \"\", \"x m\"];\nvar angles = [\"\", \"\", \"80&deg;\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "10.63",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 8.6 / \\cos 36^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 10.63"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.4399999999999995,
          9.75,
          13.04,
          -3.5
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 6.25], [8.6, 6.25], [8.6, 0]];\nvar sides = [\"8.6 cm\", \"\", \"y cm\"];\nvar angles = [\"36&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q4i",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Calculate the value of the pronumeral. Give side lengths correct to two decimal places and angles correct to one decimal place.",
    "a": "9.39",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use SOH CAH TOA.",
    "solutionSteps": [
      {
        "explanation": "Set up the trigonometric ratio.",
        "workingOut": "\\text{Expression} = 7.6 \\tan 51^\\circ"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "\\therefore 9.39"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.04,
          14.146,
          11.64,
          -4.756
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [7.6, 0], [7.6, 9.39]];\nvar sides = [\"7.6 cm\", \"a cm\", \"\"];\nvar angles = [\"51&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q5a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find all unknown sides, correct to two decimal places, and all unknown angles, correct to one decimal place.",
    "a": "Sides: 4.67 cm, 2.52 cm. Angle: 50&deg;",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use Pythagoras' theorem and trigonometry to find all missing values.",
    "solutionSteps": [
      {
        "explanation": "Find the missing values.",
        "workingOut": "Hypotenuse = 3 / cos 40, Other side = 3 tan 40, Third angle = 180 - 90 - 40"
      },
      {
        "explanation": "Final answers.",
        "workingOut": "\\therefore Sides: 4.67 cm, 2.52 cm. Angle: 50&deg;"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -2.008,
          5.2,
          4.5280000000000005,
          -2.2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [0, 3], [2.52, 3]];\nvar sides = [\"3 cm\", \"\", \"\"];\nvar angles = [\"40&deg;\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q5b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find all unknown sides, correct to two decimal places, and all unknown angles, correct to one decimal place.",
    "a": "Side: 6.97 cm. Angles: 40.7&deg;, 49.3&deg;",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use Pythagoras' theorem and trigonometry to find all missing values.",
    "solutionSteps": [
      {
        "explanation": "Find the missing values.",
        "workingOut": "Third side = sqrt(9.2^2 - 6^2), Angles from sin and cos"
      },
      {
        "explanation": "Final answers.",
        "workingOut": "\\therefore Side: 6.97 cm. Angles: 40.7&deg;, 49.3&deg;"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -3.7880000000000003,
          9.4,
          10.758,
          -3.4000000000000004
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 6], [0, 0], [6.97, 0]];\nvar sides = [\"6 cm\", \"\", \"9.2 cm\"];\nvar angles = [\"\", \"\", \"\"];\nvar rightAngleIdx = 1;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  },
  {
    "id": "y10-12a-q5c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find all unknown sides, correct to two decimal places, and all unknown angles, correct to one decimal place.",
    "a": "Side: 9.78 cm. Angles: 30.8&deg;, 59.2&deg;",
    "t": "Review of the basic trigonometric ratios",
    "hint": "Use Pythagoras' theorem and trigonometry to find all missing values.",
    "solutionSteps": [
      {
        "explanation": "Find the missing values.",
        "workingOut": "Hypotenuse = sqrt(5^2 + 8.4^2), Angles from tan"
      },
      {
        "explanation": "Final answers.",
        "workingOut": "\\therefore Side: 9.78 cm. Angles: 30.8&deg;, 59.2&deg;"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -4.912,
          7.006,
          14.692,
          -2.716
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "axis": false
        },
        "script": "board.suspendUpdate();\nvar pts = [[0, 0], [9.78, 0], [2.56, 4.29]];\nvar sides = [\"\", \"8.4 cm\", \"5 cm\"];\nvar angles = [\"\", \"\", \"\"];\nvar rightAngleIdx = 2;\n\n    var A = board.create('point', pts[0], {visible: false});\n    var B = board.create('point', pts[1], {visible: false});\n    var C = board.create('point', pts[2], {visible: false});\n    var poly = board.create('polygon', [A, B, C], {borders: {strokeColor: '#2563eb', strokeWidth: 2}, fillColor: 'none'});\n    \n    var ptsArr = [A, B, C];\n    for (var i=0; i<3; i++) {\n        var p1 = ptsArr[i];\n        var p2 = ptsArr[(i+1)%3];\n        var p3 = ptsArr[(i+2)%3];\n        if (sides[i]) {\n            var mx = (p1.X() + p2.X())/2;\n            var my = (p1.Y() + p2.Y())/2;\n            var dx = p2.X() - p1.X();\n            var dy = p2.Y() - p1.Y();\n            var len = Math.sqrt(dx*dx + dy*dy);\n            var nx = -dy/len;\n            var ny = dx/len;\n            var cross = (p3.X()-p1.X())*nx + (p3.Y()-p1.Y())*ny;\n            if (cross > 0) { nx = -nx; ny = -ny; }\n            board.create('text', [mx + nx*1.2, my + ny*1.2, sides[i]], {anchorX: 'middle', anchorY: 'middle', fontSize: 14});\n        }\n        if (angles[i]) {\n            board.create('angle', [p2, p1, p3], {name: angles[i], radius: 1.2, strokeColor: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.1});\n        }\n        if (rightAngleIdx === i) {\n            board.create('angle', [p2, p1, p3], {name: '', radius: 0.8, rightAngle: true, strokeColor: '#2563eb'});\n        }\n    }\n    board.unsuspendUpdate();\n    "
      }
    }
  }
];
