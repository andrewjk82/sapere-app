export const Y10_CH13A_QUESTIONS = [
  {
    "id": "y10-13a-q2a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "a": "90, 75",
    "solution": "Since $AB$ is a diameter, the angle in a semicircle is a right angle, so $\\alpha = 90^\\circ$.\nIn $\\triangle PAB$, the sum of angles is $180^\\circ$, so $\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-6.000000000000005, -10.392304845413262]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar P = board.create('point', [5*Math.cos(120*Math.PI/180), 5*Math.sin(120*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-5.999999999999997, 10.392304845413264]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [P,A,B], {radius: 1.5, name: '15°'});\nboard.create('angle', [A,P,B], {radius: 1, name: 'α'});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q2b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "90",
    "solution": "Since $PQ$ is a diameter, the angle in a semicircle is a right angle. Therefore, the angle at $T$ is $90^\\circ$, so $\\theta = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(180*Math.PI/180), 5*Math.sin(180*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-12, 1.4695761589768238e-15]}});\nvar Q = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nvar T = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {offset: [-9.192533317427738, -7.713451316238471]}});\nboard.create('segment', [P,Q], {strokeColor: 'black'});\nboard.create('polygon', [P,T,Q], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [T,P,Q], {radius: 1.5, name: '65°'});\nboard.create('angle', [P,T,Q], {radius: 1.2, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q2c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "90",
    "solution": "Since $JL$ is a diameter (passing through the centre $O$), the angle in a semicircle is a right angle. Therefore, the angle at $K$ is $90^\\circ$, so $\\theta = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nvar K = board.create('point', [5*Math.cos(270*Math.PI/180), 5*Math.sin(270*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {offset: [-2.204364238465236e-15, -12]}});\nvar L = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nboard.create('segment', [J,K], {strokeColor: 'black'});\nboard.create('polygon', [J,L,K], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [K,J,L], {radius: 1.5, name: '80°'});\nboard.create('angle', [J,K,L], {radius: 1.2, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q2d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, $\\gamma$, and $\\theta$. Enter your answer as four numbers separated by commas (e.g. 10, 20, 30, 40).",
    "a": "40, 20, 70, 140",
    "solution": "Since $RS$ is a diameter, $\\angle RTS = 90^\\circ$.\nIn $\\triangle OST$, $OS = OT$ (radii), so it is isosceles. Thus $\\gamma = 70^\\circ$.\nIn right $\\triangle RTS$, $\\beta = 90^\\circ - 70^\\circ = 20^\\circ$.\nIn isosceles $\\triangle OST$, $\\alpha = 180^\\circ - 2(70^\\circ) = 40^\\circ$.\nAngles on a straight line: $\\theta = 180^\\circ - \\alpha = 140^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar R = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [-4.104241719908025, 11.276311449430901]}});\nvar S = board.create('point', [5*Math.cos(290*Math.PI/180), 5*Math.sin(290*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {offset: [4.104241719908018, -11.276311449430903]}});\nvar T = board.create('point', [5*Math.cos(250*Math.PI/180), 5*Math.sin(250*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {offset: [-4.104241719908033, -11.2763114494309]}});\nboard.create('segment', [R,S], {strokeColor: 'black'});\nboard.create('polygon', [R,T,S], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,T], {strokeColor: 'black'});\nboard.create('angle', [O,S,T], {radius: 1.5, name: '70°'});\nboard.create('angle', [T,O,S], {radius: 1, name: 'α'});\nboard.create('angle', [R,T,O], {radius: 1, name: 'β'});\nboard.create('angle', [O,T,S], {radius: 1.5, name: 'γ'});\nboard.create('angle', [R,O,T], {radius: 1, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q2e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "90, 35",
    "solution": "Since $XY$ is a diameter, $\\alpha = \\angle XZY = 90^\\circ$.\nIn isosceles $\\triangle OYZ$, $\\angle OYZ = \\angle OZY = (180^\\circ - 70^\\circ)/2 = 55^\\circ$.\nIn $\\triangle XYZ$, $\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar X = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar Y = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'Y', size: 2, color: '#64748b', label: {offset: [10.392304845413264, 5.999999999999999]}});\nvar Z = board.create('point', [5*Math.cos(100*Math.PI/180), 5*Math.sin(100*Math.PI/180)], {name: 'Z', size: 2, color: '#64748b', label: {offset: [-2.0837781320031636, 11.817693036146496]}});\nboard.create('segment', [X,Y], {strokeColor: 'black'});\nboard.create('polygon', [X,Z,Y], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,Z], {strokeColor: 'black'});\nboard.create('angle', [Z,O,Y], {radius: 1, name: '70°'});\nboard.create('angle', [X,Z,Y], {radius: 1, name: 'α'});\nboard.create('angle', [Z,X,Y], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q2f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "80",
    "solution": "Since $AOB$ is a straight line, $\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ$.\nIn isosceles $\\triangle AOC$, $\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-11.817693036146496, 2.083778132003163]}});\nvar B = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [11.817693036146496, -2.083778132003164]}});\nvar C = board.create('point', [5*Math.cos(190*Math.PI/180), 5*Math.sin(190*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [-11.817693036146496, -2.0837781320031654]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,C,O], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('angle', [C,O,B], {radius: 1, name: '160°'});\nboard.create('angle', [O,A,C], {radius: 0.6, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "27.5",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\alpha = 55^\\circ / 2 = 27.5^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nvar B = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar C = board.create('point', [5*Math.cos(330*Math.PI/180), 5*Math.sin(330*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [10.39230484541326, -6.000000000000005]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('angle', [C,O,B], {radius: 1.5, name: '55°'});\nboard.create('angle', [C,A,B], {radius: 1, name: 'α'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "44",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\gamma = 88^\\circ / 2 = 44^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(140*Math.PI/180), 5*Math.sin(140*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-9.192533317427735, 7.713451316238474]}});\nvar B = board.create('point', [5*Math.cos(40*Math.PI/180), 5*Math.sin(40*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [9.192533317427737, 7.713451316238471]}});\nvar C = board.create('point', [5*Math.cos(270*Math.PI/180), 5*Math.sin(270*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [-2.204364238465236e-15, -12]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1, name: '88°'});\nboard.create('angle', [B,C,A], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "190",
    "solution": "The reflex angle at the centre is twice the angle at the circumference. $\\alpha = 2 \\times 95^\\circ = 190^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(190*Math.PI/180), 5*Math.sin(190*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-11.817693036146496, -2.0837781320031654]}});\nvar B = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [11.817693036146496, -2.083778132003164]}});\nvar C = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,C,B], {radius: 1.5, name: '95°'});\nboard.create('angle', [A,O,B], {radius: 1.2, name: 'α'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "100",
    "solution": "The angle at the circumference is half the reflex angle at the centre. $\\gamma = 200^\\circ / 2 = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-2.083778132003164, -11.817693036146496]}});\nvar B = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nvar C = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [10.392304845413264, 5.999999999999999]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1.5, name: '200°'});\nboard.create('angle', [A,C,B], {radius: 1.5, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "129",
    "solution": "The angle at the circumference is half the reflex angle at the centre. $\\theta = 258^\\circ / 2 = 129^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {offset: [-11.817693036146496, 2.083778132003163]}});\nvar M = board.create('point', [5*Math.cos(280*Math.PI/180), 5*Math.sin(280*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', label: {offset: [2.0837781320031596, -11.817693036146498]}});\nvar K = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nboard.create('polygon', [J,K,M], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,J], {strokeColor: 'black'});\nboard.create('segment', [O,M], {strokeColor: 'black'});\nboard.create('angle', [M,O,J], {radius: 1.2, name: '258°'});\nboard.create('angle', [J,K,M], {radius: 1.5, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "40",
    "solution": "The angle at the circumference is half the angle at the centre. $\\alpha = 80^\\circ / 2 = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(310*Math.PI/180), 5*Math.sin(310*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [7.713451316238471, -9.192533317427738]}});\nvar P = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [10.392304845413264, 5.999999999999999]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1.2, name: '80°'});\nboard.create('angle', [A,P,B], {radius: 1.5, name: 'α'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\beta$.",
    "a": "30",
    "solution": "The angle at the circumference is half the angle at the centre subtended by the same arc. $\\beta = 60^\\circ / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar X = board.create('point', [5*Math.cos(130*Math.PI/180), 5*Math.sin(130*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {offset: [-7.713451316238473, 9.192533317427737]}});\nvar Q = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar P = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nboard.create('polygon', [X,Q,P], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,X], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('angle', [P,O,X], {radius: 1.5, name: '60°'});\nboard.create('angle', [P,Q,X], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "100",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\gamma = 2 \\times 50^\\circ = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar K = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {offset: [-11.2763114494309, 4.1042417199080266]}});\nvar L = board.create('point', [5*Math.cos(100*Math.PI/180), 5*Math.sin(100*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {offset: [-2.0837781320031636, 11.817693036146496]}});\nvar J = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nboard.create('polygon', [K,L,J], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,K], {strokeColor: 'black'});\nboard.create('segment', [O,J], {strokeColor: 'black'});\nboard.create('angle', [J,L,K], {radius: 1, name: '50°'});\nboard.create('angle', [J,O,K], {radius: 1.5, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q3i",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "24",
    "solution": "The angle at the centre is twice the angle at the circumference. $\\theta = 2 \\times 12^\\circ = 24^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar R = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar S = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {offset: [-2.083778132003164, -11.817693036146496]}});\nvar T = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nboard.create('polygon', [R,S,T], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('segment', [O,T], {strokeColor: 'black'});\nboard.create('angle', [T,S,R], {radius: 1.5, name: '12°'});\nboard.create('angle', [T,O,R], {radius: 1, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "120, 60",
    "solution": "The reflex angle is $240^\\circ$. The obtuse angle at the centre is $\\alpha = 360^\\circ - 240^\\circ = 120^\\circ$.\n$\\beta$ is the angle at the circumference subtended by the minor arc, so $\\beta = 120^\\circ / 2 = 60^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(330*Math.PI/180), 5*Math.sin(330*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [10.39230484541326, -6.000000000000005]}});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,O,B], {radius: 1, name: 'α'});\nboard.create('angle', [B,O,A], {radius: 1.5, name: '240°'});\nboard.create('angle', [A,P,B], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "30",
    "solution": "The obtuse angle at the centre is $360^\\circ - 300^\\circ = 60^\\circ$.\nThe angle at the circumference is half the angle at the centre subtended by the same minor arc, so $\\theta = 60^\\circ / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(180*Math.PI/180), 5*Math.sin(180*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-12, 1.4695761589768238e-15]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar A = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-4.104241719908025, 11.276311449430901]}});\nboard.create('polygon', [P,A,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,P], {radius: 1.5, name: '300°'});\nboard.create('angle', [B,A,P], {radius: 1, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "140",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc.\n$\\theta = 2 \\times 70^\\circ = 140^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar T = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {offset: [-11.276311449430901, -4.104241719908024]}});\nvar S = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar R = board.create('point', [5*Math.cos(280*Math.PI/180), 5*Math.sin(280*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [2.0837781320031596, -11.817693036146498]}});\nboard.create('polygon', [T,S,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,S], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [S,T,R], {radius: 1.5, name: '70°'});\nboard.create('angle', [S,O,R], {radius: 1, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "40, 40",
    "solution": "The angle at the circumference is half the angle at the centre: $\\alpha = 80^\\circ / 2 = 40^\\circ$.\nAngles subtended by the same arc are equal, so $\\beta = \\alpha = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-4.104241719908025, 11.276311449430901]}});\nvar Q = board.create('point', [5*Math.cos(10*Math.PI/180), 5*Math.sin(10*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [11.817693036146496, 2.083778132003164]}});\nvar F = board.create('point', [5*Math.cos(230*Math.PI/180), 5*Math.sin(230*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {offset: [-7.713451316238474, -9.192533317427735]}});\nvar G = board.create('point', [5*Math.cos(310*Math.PI/180), 5*Math.sin(310*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {offset: [7.713451316238471, -9.192533317427738]}});\nboard.create('polygon', [F,P,G], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('polygon', [F,Q,G], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,F], {strokeColor: 'black'});\nboard.create('segment', [O,G], {strokeColor: 'black'});\nboard.create('angle', [G,O,F], {radius: 1.5, name: '80°'});\nboard.create('angle', [F,P,G], {radius: 1, name: 'α'});\nboard.create('angle', [F,Q,G], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\theta$. Enter your answer as two numbers separated by a comma.",
    "a": "20, 40",
    "solution": "Angles subtended by the same arc are equal, so $\\alpha = \\angle PSR = 20^\\circ$.\nThe angle at the centre is twice the angle at the circumference, so $\\theta = 2 \\times 20^\\circ = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-11.2763114494309, 4.1042417199080266]}});\nvar Q = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [10.392304845413264, 5.999999999999999]}});\nvar S = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {offset: [-6.000000000000005, -10.392304845413262]}});\nvar R = board.create('point', [5*Math.cos(300*Math.PI/180), 5*Math.sin(300*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [6.000000000000002, -10.392304845413264]}});\nboard.create('polygon', [P,Q,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('polygon', [P,S,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [P,S,R], {radius: 1.5, name: '20°'});\nboard.create('angle', [P,Q,R], {radius: 1, name: 'α'});\nboard.create('angle', [R,O,P], {radius: 1, name: 'θ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "100, 20, 50",
    "solution": "In isosceles $\\triangle POQ$, $\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ$.\n$\\angle PRQ = 120^\\circ / 2 = 60^\\circ$. We are given $\\angle ORQ = 40^\\circ$, so $\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ$.\nIn isosceles $\\triangle OQR$, $\\angle OQR = 40^\\circ$, so $\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ$.\nIn isosceles $\\triangle OPR$, $\\beta = \\angle OPR = \\angle ORP = 20^\\circ$.\n$\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nvar Q = board.create('point', [5*Math.cos(-30*Math.PI/180), 5*Math.sin(-30*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [10.392304845413264, -5.999999999999999]}});\nvar R = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nboard.create('polygon', [P,R,Q], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,Q], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [Q,O,P], {radius: 1.5, name: '120°'});\nboard.create('angle', [O,R,Q], {radius: 1, name: '40°'});\nboard.create('angle', [R,O,Q], {radius: 1, name: 'α'});\nboard.create('angle', [O,P,R], {radius: 1, name: 'β'});\nboard.create('angle', [R,P,Q], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4g",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "100, 200, 80",
    "solution": "The reflex angle at the centre is $\\beta = 360^\\circ - 160^\\circ = 200^\\circ$.\n$\\gamma$ subtends the minor arc $AB$, so $\\gamma = 160^\\circ / 2 = 80^\\circ$.\n$\\alpha$ subtends the major arc $AB$, so $\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [7.347880794884119e-16, 12]}});\nvar A = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [11.817693036146496, -2.083778132003164]}});\nvar Q = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [-2.083778132003164, -11.817693036146496]}});\nvar B = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [-11.817693036146496, 2.083778132003163]}});\nboard.create('polygon', [P,A,Q,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,B], {strokeColor: 'black', dash: 2});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,O,B], {radius: 1.2, name: '160°'});\nboard.create('angle', [B,O,A], {radius: 1.5, name: 'β'});\nboard.create('angle', [B,Q,A], {radius: 1, name: 'α'});\nboard.create('angle', [A,P,B], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4h",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "60, 60, 120",
    "solution": "Since $AC$ and $BD$ pass through $O$, they are diameters. So $ABCD$ is a rectangle.\n$\\angle ADC = 90^\\circ$. In $\\triangle AOD$, $OA=OD$, so $\\angle ADO = 30^\\circ$, $\\angle AOD = 120^\\circ$.\n$\\gamma$ and $\\angle AOD$ are vertically opposite, so $\\gamma = 120^\\circ$.\n$\\angle DAB = 90^\\circ$. $\\alpha = 90^\\circ - 30^\\circ = 60^\\circ$.\nIn right $\\triangle DAB$, $\\beta = 90^\\circ - 30^\\circ = 60^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(45*Math.PI/180), 5*Math.sin(45*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [8.485281374238571, 8.48528137423857]}});\nvar B = board.create('point', [5*Math.cos(-45*Math.PI/180), 5*Math.sin(-45*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [8.485281374238571, -8.48528137423857]}});\nvar C = board.create('point', [5*Math.cos(225*Math.PI/180), 5*Math.sin(225*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [-8.485281374238571, -8.48528137423857]}});\nvar D = board.create('point', [5*Math.cos(135*Math.PI/180), 5*Math.sin(135*Math.PI/180)], {name: 'D', size: 2, color: '#64748b', label: {offset: [-8.48528137423857, 8.485281374238571]}});\nboard.create('polygon', [A,B,C,D], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,C], {strokeColor: 'black'});\nboard.create('segment', [B,D], {strokeColor: 'black'});\nboard.create('angle', [D,A,C], {radius: 1.2, name: '30°'});\nboard.create('angle', [C,A,B], {radius: 1, name: 'α'});\nboard.create('angle', [A,B,D], {radius: 1.2, name: 'β'});\nboard.create('angle', [C,O,B], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q4i",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "45, 45",
    "solution": "Since $JL$ and $KM$ are perpendicular diameters, $\\triangle JOK$ is a right isosceles triangle ($OJ = OK$).\n$\\alpha = \\angle OJK = (180^\\circ - 90^\\circ) / 2 = 45^\\circ$.\nSimilarly, $\\beta = \\angle OKL = 45^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(135*Math.PI/180), 5*Math.sin(135*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {offset: [-8.48528137423857, 8.485281374238571]}});\nvar K = board.create('point', [5*Math.cos(45*Math.PI/180), 5*Math.sin(45*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {offset: [8.485281374238571, 8.48528137423857]}});\nvar L = board.create('point', [5*Math.cos(-45*Math.PI/180), 5*Math.sin(-45*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {offset: [8.485281374238571, -8.48528137423857]}});\nvar M = board.create('point', [5*Math.cos(225*Math.PI/180), 5*Math.sin(225*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', label: {offset: [-8.485281374238571, -8.48528137423857]}});\nboard.create('polygon', [J,K,L,M], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [J,L], {strokeColor: 'black'});\nboard.create('segment', [K,M], {strokeColor: 'black'});\nboard.create('angle', [O,J,K], {radius: 1, name: 'α'});\nboard.create('angle', [O,K,L], {radius: 1, name: 'β'});\n// draw right angle square\nboard.create('polygon', [[0,0], [0,0.5], [0.5,0.5], [0.5,0]], {fillColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "10, 10",
    "solution": "Since $AB \\parallel FG$, the alternate interior angles are equal, so $\\beta = \\angle ABG = 10^\\circ$.\n$\\alpha$ and $\\angle ABG$ subtend the same arc $AG$, so $\\alpha = 10^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(180*Math.PI/180), 5*Math.sin(180*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-12, 1.4695761589768238e-15]}});\nvar B = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nvar F = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {offset: [-11.276311449430901, -4.104241719908024]}});\nvar G = board.create('point', [5*Math.cos(-20*Math.PI/180), 5*Math.sin(-20*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {offset: [11.276311449430901, -4.104241719908025]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [F,G], {strokeColor: 'black'});\nboard.create('polygon', [A,F,G,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,G], {strokeColor: 'black'});\nboard.create('segment', [F,B], {strokeColor: 'black'});\nboard.create('angle', [A,B,G], {radius: 1.5, name: '10°'});\nboard.create('angle', [G,F,A], {radius: 1, name: 'α'});\nboard.create('angle', [F,G,B], {radius: 1, name: 'β'});\nboard.create('segment', [[-1, 0], [1, 0]], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [[-1, -1.71], [1, -1.71]], {strokeColor: 'black', lastArrow: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "60, 30",
    "solution": "The tick marks indicate $OA = AP$. Since $OA = OP$ (radii), $\\triangle OAP$ is equilateral. Thus $\\alpha = \\angle AOP = 60^\\circ$.\n$\\beta$ is the angle at the circumference subtending arc $AP$, so $\\beta = \\alpha / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-9.192533317427738, -7.713451316238471]}});\nvar B = board.create('point', [5*Math.cos(80*Math.PI/180), 5*Math.sin(80*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [2.083778132003165, 11.817693036146496]}});\nvar P = board.create('point', [5*Math.cos(280*Math.PI/180), 5*Math.sin(280*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [2.0837781320031596, -11.817693036146498]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('angle', [P,O,A], {radius: 1, name: 'α'});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β'});\n// Tick marks on OA and AP\nboard.create('segment', [[-1.5, -1.5], [-1.8, -1.2]], {strokeColor: 'black'});\nboard.create('segment', [[1.5, -4], [1.2, -3.7]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "20, 20, 40",
    "solution": "The tangent at $R$ is parallel to $PQ$. The angle between the tangent and chord $QR$ is $20^\\circ$. By the alternate segment theorem, $\\alpha = 20^\\circ$.\nAlternate interior angles give $\\beta = 20^\\circ$.\nThe angle at the centre is twice the angle at the circumference: $\\gamma = 2 \\times 20^\\circ = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(140*Math.PI/180), 5*Math.sin(140*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-9.192533317427735, 7.713451316238474]}});\nvar Q = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [-9.192533317427738, -7.713451316238471]}});\nvar R = board.create('point', [5*Math.cos(320*Math.PI/180), 5*Math.sin(320*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [9.192533317427733, -7.713451316238475]}});\nboard.create('polygon', [P,Q,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,Q], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [Q,P,R], {radius: 1, name: 'α'});\nboard.create('angle', [R,Q,P], {radius: 1, name: 'β'});\nboard.create('angle', [R,O,Q], {radius: 1, name: 'γ'});\n// Tangent at R\nboard.create('line', [R, [R.X() + Math.cos(50*Math.PI/180), R.Y() + Math.sin(50*Math.PI/180)]], {strokeColor: 'black', dash: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "220, 60, 70",
    "solution": "$\\angle AOB = 140^\\circ$, so the reflex angle $\\alpha = 360^\\circ - 140^\\circ = 220^\\circ$.\n$\\gamma$ subtends minor arc $AB$, so $\\gamma = 140^\\circ / 2 = 70^\\circ$.\nIn $\\triangle ABC$, $\\beta = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(150*Math.PI/180), 5*Math.sin(150*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, 5.999999999999999]}});\nvar B = board.create('point', [5*Math.cos(10*Math.PI/180), 5*Math.sin(10*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [11.817693036146496, 2.083778132003164]}});\nvar C = board.create('point', [5*Math.cos(250*Math.PI/180), 5*Math.sin(250*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [-4.104241719908033, -11.2763114494309]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1, name: '140°'});\nboard.create('angle', [A,O,B], {radius: 1.5, name: 'α'});\nboard.create('angle', [C,A,B], {radius: 1, name: '50°'});\nboard.create('angle', [A,B,C], {radius: 1, name: 'β'});\nboard.create('angle', [B,C,A], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "200, 80, 80",
    "solution": "$\\alpha = 360^\\circ - 160^\\circ = 200^\\circ$.\n$\\beta$ subtends the minor arc $PQ$, so $\\beta = 160^\\circ / 2 = 80^\\circ$.\n$PR \\parallel OQ$. By coordinates, $\\triangle OQR$ has base angles $80^\\circ$, so $\\gamma = 80^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-11.2763114494309, 4.1042417199080266]}});\nvar Q = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nvar R = board.create('point', [5*Math.cos(20*Math.PI/180), 5*Math.sin(20*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {offset: [11.276311449430901, 4.104241719908025]}});\nboard.create('polygon', [P,R,Q], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,Q], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [Q,O,P], {radius: 1.2, name: '160°'});\nboard.create('angle', [P,O,Q], {radius: 1.5, name: 'α'});\nboard.create('angle', [P,R,Q], {radius: 1, name: 'β'});\nboard.create('angle', [O,R,Q], {radius: 1, name: 'γ'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "80, 40, 40",
    "solution": "The minor angle $\\angle BOC = 360^\\circ - 200^\\circ = 160^\\circ$. Since $AB = AC$, arc $AB$ = arc $AC$ = $100^\\circ$.\n$\\alpha$ subtends arc $BC$, so $\\alpha = 160^\\circ / 2 = 80^\\circ$.\n$\\angle ABC = 50^\\circ$ and $\\angle OBC = 10^\\circ$, so $\\beta = 50^\\circ - 10^\\circ = 40^\\circ$. Similarly $\\gamma = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(140*Math.PI/180), 5*Math.sin(140*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-9.192533317427735, 7.713451316238474]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar C = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [-2.083778132003164, -11.817693036146496]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'black', dash: 2});\nboard.create('angle', [B,O,C], {radius: 1.5, name: '200°'});\nboard.create('angle', [C,A,B], {radius: 1, name: 'α'});\nboard.create('angle', [A,B,O], {radius: 1, name: 'β'});\nboard.create('angle', [O,C,A], {radius: 1, name: 'γ'});\n// tick marks\nboard.create('segment', [[-0.5, 3.5], [-0.8, 3.8]], {strokeColor: 'black'});\nboard.create('segment', [[-0.2, 3.2], [-0.5, 3.5]], {strokeColor: 'black'});\nboard.create('segment', [[-3, 0], [-3.3, 0.3]], {strokeColor: 'black'});\nboard.create('segment', [[-2.7, -0.3], [-3, 0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In Euclid's proof of Thales' theorem, what is the value of $\\alpha + \\beta$ (in degrees)?",
    "a": "90",
    "solution": "We showed that $2(\\alpha + \\beta) = 180^\\circ$, therefore $\\alpha + \\beta = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(-30*Math.PI/180), 5*Math.sin(-30*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [10.392304845413264, -5.999999999999999]}});\nvar P = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-4.104241719908025, 11.276311449430901]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('angle', [P,A,B], {radius: 1, name: 'α'});\nboard.create('angle', [A,B,P], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In the alternative proof of Thales' theorem, what is the value of $2\\alpha + 2\\beta$ (in degrees)?",
    "a": "180",
    "solution": "The sum of angles on a straight line is $180^\\circ$, therefore $\\angle AOM + \\angle BOM = 2\\alpha + 2\\beta = 180^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(-30*Math.PI/180), 5*Math.sin(-30*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [10.392304845413264, -5.999999999999999]}});\nvar P = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-4.104241719908025, 11.276311449430901]}});\nvar M = board.create('point', [5*Math.cos(290*Math.PI/180), 5*Math.sin(290*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', label: {offset: [4.104241719908018, -11.276311449430903]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [P,M], {strokeColor: 'black', dash: 2});\nboard.create('angle', [P,A,B], {radius: 1, name: 'α'});\nboard.create('angle', [A,B,P], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If $\\angle APB = \\beta$, what is the coefficient $k$ such that $\\angle AOB = k\\beta$?",
    "a": "2",
    "solution": "The angle at the centre is twice the angle at the circumference, so $k = 2$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-6.000000000000005, -10.392304845413262]}});\nvar B = board.create('point', [5*Math.cos(-60*Math.PI/180), 5*Math.sin(-60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [6.000000000000002, -10.392304845413264]}});\nvar P = board.create('point', [5*Math.cos(70*Math.PI/180), 5*Math.sin(70*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [4.104241719908026, 11.2763114494309]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'black', dash: 2});\nboard.create('angle', [A,P,B], {radius: 1, name: 'β'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If $\\angle APB = \\beta - \\alpha$, what is the coefficient $k$ such that $\\angle AOB = k(\\beta - \\alpha)$?",
    "a": "2",
    "solution": "The angle at the centre is twice the angle at the circumference, so $k = 2$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {offset: [-9.192533317427738, -7.713451316238471]}});\nvar B = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [12, 0]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [6.000000000000002, 10.392304845413264]}});\nvar X = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {offset: [-6.000000000000005, -10.392304845413262]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [P,X], {strokeColor: 'black', dash: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If $\\triangle ABP$ is right-angled at $P$, and $O$ is the midpoint of hypotenuse $AB$, what is the ratio of $PO$ to $AO$?",
    "a": "1",
    "solution": "The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices. Thus $PO = AO = BO$, so the ratio is 1.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [-4,-3], {name: 'P', size: 2, color: 'blue'});\nvar A = board.create('point', [4,-3], {name: 'A', size: 2, color: 'blue'});\nvar B = board.create('point', [-4,3], {name: 'B', size: 2, color: 'blue'});\nvar Q = board.create('point', [4,3], {name: 'Q', size: 2, color: 'blue'});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,Q], {strokeColor: 'red', dash: 2});\nboard.create('segment', [B,Q], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,Q], {strokeColor: 'red', dash: 2});\nboard.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A horse travels at a constant speed around a circular track. A punter at the very edge of the track follows him with binoculars. If the horse's angle from the centre changes at $10^\\circ/s$, at what rate (in $^\\circ/s$) do the binoculars rotate?",
    "a": "5",
    "solution": "The angle at the circumference (the punter's binoculars) is always half the angle at the centre. Therefore, the binoculars rotate at half the rate: $5^\\circ/s$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar O = board.create('point', [0,0], {name: 'Centre', size: 2, color: 'red'});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false});\nvar P = board.create('point', [5*Math.cos(270*Math.PI/180), 5*Math.sin(270*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {offset: [-2.204364238465236e-15, -12]}});\nvar H = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'H', size: 2, color: '#64748b', label: {offset: [10.392304845413264, 5.999999999999999]}});\nboard.create('segment', [O,H], {strokeColor: 'black'});\nboard.create('segment', [P,H], {strokeColor: 'black'});\nboard.create('text', [0, 1, 'Horse']);\nboard.create('text', [-1, -5.5, 'Punter']);\nboard.unsuspendUpdate();"
      }
    }
  }
];