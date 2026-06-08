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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-6.000000000000005, -10.392304845413262]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, 10.392304845413264]}});\nvar P = board.create('point', [5*Math.cos(120*Math.PI/180), 5*Math.sin(120*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5.999999999999997, 10.392304845413264]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [P,A,B], {radius: 1.5, name: '15°', label: {autoPosition: false, offset: [10, 30]}});\nboard.create('angle', [A,P,B], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(180*Math.PI/180), 5*Math.sin(180*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-12, 1.4695761589768238e-15]}});\nvar Q = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, 0]}});\nvar T = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-9.192533317427738, -7.713451316238471]}});\nboard.create('segment', [P,Q], {strokeColor: 'black'});\nboard.create('polygon', [P,T,Q], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [T,P,Q], {radius: 1.5, name: '65°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,T,Q], {radius: 1.2, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nvar K = board.create('point', [5*Math.cos(270*Math.PI/180), 5*Math.sin(270*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.204364238465236e-15, -12]}});\nvar L = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, 10.392304845413264]}});\nboard.create('segment', [J,K], {strokeColor: 'black'});\nboard.create('polygon', [J,L,K], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('angle', [K,J,L], {radius: 1.5, name: '80°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [J,K,L], {radius: 1.2, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar R = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-4.104241719908025, 11.276311449430901]}});\nvar S = board.create('point', [5*Math.cos(290*Math.PI/180), 5*Math.sin(290*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {autoPosition: false, offset: [4.104241719908018, -11.276311449430903]}});\nvar T = board.create('point', [5*Math.cos(250*Math.PI/180), 5*Math.sin(250*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-4.104241719908033, -11.2763114494309]}});\nboard.create('segment', [R,S], {strokeColor: 'black'});\nboard.create('polygon', [R,T,S], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,T], {strokeColor: 'black'});\nboard.create('angle', [O,S,T], {radius: 1.5, name: '70°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [T,O,S], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [R,T,O], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,T,S], {radius: 1.5, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [R,O,T], {radius: 1, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar X = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nvar Y = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'Y', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.392304845413264, 5.999999999999999]}});\nvar Z = board.create('point', [5*Math.cos(100*Math.PI/180), 5*Math.sin(100*Math.PI/180)], {name: 'Z', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.0837781320031636, 11.817693036146496]}});\nboard.create('segment', [X,Y], {strokeColor: 'black'});\nboard.create('polygon', [X,Z,Y], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,Z], {strokeColor: 'black'});\nboard.create('angle', [Z,O,Y], {radius: 1, name: '70°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [X,Z,Y], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [Z,X,Y], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.817693036146496, 2.083778132003163]}});\nvar B = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [11.817693036146496, -2.083778132003164]}});\nvar C = board.create('point', [5*Math.cos(190*Math.PI/180), 5*Math.sin(190*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.817693036146496, -2.0837781320031654]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('polygon', [A,C,O], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('angle', [C,O,B], {radius: 1, name: '160°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,A,C], {radius: 0.6, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nvar B = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nvar C = board.create('point', [5*Math.cos(330*Math.PI/180), 5*Math.sin(330*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.39230484541326, -6.000000000000005]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('angle', [C,O,B], {radius: 1.5, name: '55°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [C,A,B], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(140*Math.PI/180), 5*Math.sin(140*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-9.192533317427735, 7.713451316238474]}});\nvar B = board.create('point', [5*Math.cos(40*Math.PI/180), 5*Math.sin(40*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [9.192533317427737, 7.713451316238471]}});\nvar C = board.create('point', [5*Math.cos(270*Math.PI/180), 5*Math.sin(270*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.204364238465236e-15, -12]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1, name: '88°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,C,A], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(190*Math.PI/180), 5*Math.sin(190*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.817693036146496, -2.0837781320031654]}});\nvar B = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [11.817693036146496, -2.083778132003164]}});\nvar C = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,C,B], {radius: 1.5, name: '95°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,O,B], {radius: 1.2, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.083778132003164, -11.817693036146496]}});\nvar B = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nvar C = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.392304845413264, 5.999999999999999]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1.5, name: '200°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,C,B], {radius: 1.5, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.817693036146496, 2.083778132003163]}});\nvar M = board.create('point', [5*Math.cos(280*Math.PI/180), 5*Math.sin(280*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', label: {autoPosition: false, offset: [2.0837781320031596, -11.817693036146498]}});\nvar K = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nboard.create('polygon', [J,K,M], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,J], {strokeColor: 'black'});\nboard.create('segment', [O,M], {strokeColor: 'black'});\nboard.create('angle', [M,O,J], {radius: 1.2, name: '258°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [J,K,M], {radius: 1.5, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(310*Math.PI/180), 5*Math.sin(310*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.713451316238471, -9.192533317427738]}});\nvar P = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.392304845413264, 5.999999999999999]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,A], {radius: 1.2, name: '80°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,P,B], {radius: 1.5, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar X = board.create('point', [5*Math.cos(130*Math.PI/180), 5*Math.sin(130*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-7.713451316238473, 9.192533317427737]}});\nvar Q = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, 10.392304845413264]}});\nvar P = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, 0]}});\nboard.create('polygon', [X,Q,P], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,X], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('angle', [P,O,X], {radius: 1.5, name: '60°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,Q,X], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar K = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.2763114494309, 4.1042417199080266]}});\nvar L = board.create('point', [5*Math.cos(100*Math.PI/180), 5*Math.sin(100*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.0837781320031636, 11.817693036146496]}});\nvar J = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, 0]}});\nboard.create('polygon', [K,L,J], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,K], {strokeColor: 'black'});\nboard.create('segment', [O,J], {strokeColor: 'black'});\nboard.create('angle', [J,L,K], {radius: 1, name: '50°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [J,O,K], {radius: 1.5, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar R = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nvar S = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.083778132003164, -11.817693036146496]}});\nvar T = board.create('point', [5*Math.cos(0*Math.PI/180), 5*Math.sin(0*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, 0]}});\nboard.create('polygon', [R,S,T], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('segment', [O,T], {strokeColor: 'black'});\nboard.create('angle', [T,S,R], {radius: 1.5, name: '12°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [T,O,R], {radius: 1, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nvar B = board.create('point', [5*Math.cos(330*Math.PI/180), 5*Math.sin(330*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.39230484541326, -6.000000000000005]}});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nboard.create('polygon', [A,P,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,O,B], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,O,A], {radius: 1.5, name: '240°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,P,B], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(180*Math.PI/180), 5*Math.sin(180*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-12, 1.4695761589768238e-15]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, 10.392304845413264]}});\nvar A = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-4.104241719908025, 11.276311449430901]}});\nboard.create('polygon', [P,A,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [B,O,P], {radius: 1.5, name: '300°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,A,P], {radius: 1, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar T = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'T', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.276311449430901, -4.104241719908024]}});\nvar S = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, 10.392304845413264]}});\nvar R = board.create('point', [5*Math.cos(280*Math.PI/180), 5*Math.sin(280*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [2.0837781320031596, -11.817693036146498]}});\nboard.create('polygon', [T,S,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,S], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [S,T,R], {radius: 1.5, name: '70°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [S,O,R], {radius: 1, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(110*Math.PI/180), 5*Math.sin(110*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-4.104241719908025, 11.276311449430901]}});\nvar Q = board.create('point', [5*Math.cos(10*Math.PI/180), 5*Math.sin(10*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [11.817693036146496, 2.083778132003164]}});\nvar F = board.create('point', [5*Math.cos(230*Math.PI/180), 5*Math.sin(230*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-7.713451316238474, -9.192533317427735]}});\nvar G = board.create('point', [5*Math.cos(310*Math.PI/180), 5*Math.sin(310*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.713451316238471, -9.192533317427738]}});\nboard.create('polygon', [F,P,G], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('polygon', [F,Q,G], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,F], {strokeColor: 'black'});\nboard.create('segment', [O,G], {strokeColor: 'black'});\nboard.create('angle', [G,O,F], {radius: 1.5, name: '80°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [F,P,G], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [F,Q,G], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.2763114494309, 4.1042417199080266]}});\nvar Q = board.create('point', [5*Math.cos(30*Math.PI/180), 5*Math.sin(30*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.392304845413264, 5.999999999999999]}});\nvar S = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'S', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-6.000000000000005, -10.392304845413262]}});\nvar R = board.create('point', [5*Math.cos(300*Math.PI/180), 5*Math.sin(300*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [6.000000000000002, -10.392304845413264]}});\nboard.create('polygon', [P,Q,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('polygon', [P,S,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [P,S,R], {radius: 1.5, name: '20°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,Q,R], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [R,O,P], {radius: 1, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nvar Q = board.create('point', [5*Math.cos(-30*Math.PI/180), 5*Math.sin(-30*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [10.392304845413264, -5.999999999999999]}});\nvar R = board.create('point', [5*Math.cos(210*Math.PI/180), 5*Math.sin(210*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-10.392304845413264, -6.000000000000002]}});\nboard.create('polygon', [P,R,Q], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,Q], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('angle', [Q,O,P], {radius: 1.5, name: '120°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,R,Q], {radius: 1, name: '40°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [R,O,Q], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,P,R], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [R,P,Q], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(90*Math.PI/180), 5*Math.sin(90*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [7.347880794884119e-16, 12]}});\nvar A = board.create('point', [5*Math.cos(-10*Math.PI/180), 5*Math.sin(-10*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [11.817693036146496, -2.083778132003164]}});\nvar Q = board.create('point', [5*Math.cos(260*Math.PI/180), 5*Math.sin(260*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-2.083778132003164, -11.817693036146496]}});\nvar B = board.create('point', [5*Math.cos(150*Math.PI/180), 5*Math.sin(150*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-11.817693036146496, 2.083778132003163]}});\nboard.create('polygon', [P,A,Q,B], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,B], {strokeColor: 'black', dash: 2});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('angle', [A,O,B], {radius: 1.2, name: '160°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,O,A], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,Q,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,P,B], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(45*Math.PI/180), 5*Math.sin(45*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [8.485281374238571, 8.48528137423857]}});\nvar B = board.create('point', [5*Math.cos(-45*Math.PI/180), 5*Math.sin(-45*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [8.485281374238571, -8.48528137423857]}});\nvar C = board.create('point', [5*Math.cos(225*Math.PI/180), 5*Math.sin(225*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-8.485281374238571, -8.48528137423857]}});\nvar D = board.create('point', [5*Math.cos(135*Math.PI/180), 5*Math.sin(135*Math.PI/180)], {name: 'D', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-8.48528137423857, 8.485281374238571]}});\nboard.create('polygon', [A,B,C,D], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [A,C], {strokeColor: 'black'});\nboard.create('segment', [B,D], {strokeColor: 'black'});\nboard.create('angle', [D,A,C], {radius: 1.2, name: '30°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [C,A,B], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,B,D], {radius: 1.2, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [C,O,B], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar J = board.create('point', [5*Math.cos(135*Math.PI/180), 5*Math.sin(135*Math.PI/180)], {name: 'J', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-8.48528137423857, 8.485281374238571]}});\nvar K = board.create('point', [5*Math.cos(45*Math.PI/180), 5*Math.sin(45*Math.PI/180)], {name: 'K', size: 2, color: '#64748b', label: {autoPosition: false, offset: [8.485281374238571, 8.48528137423857]}});\nvar L = board.create('point', [5*Math.cos(-45*Math.PI/180), 5*Math.sin(-45*Math.PI/180)], {name: 'L', size: 2, color: '#64748b', label: {autoPosition: false, offset: [8.485281374238571, -8.48528137423857]}});\nvar M = board.create('point', [5*Math.cos(225*Math.PI/180), 5*Math.sin(225*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-8.485281374238571, -8.48528137423857]}});\nboard.create('polygon', [J,K,L,M], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [J,L], {strokeColor: 'black'});\nboard.create('segment', [K,M], {strokeColor: 'black'});\nboard.create('angle', [O,J,K], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,K,L], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('rightangle', [K,O,J], {size: 0.4});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "a": "100, 20",
    "solution": "Since $AB \\parallel FG$, alternate interior angles are equal: $\\angle BFG = \\angle ABF = 10^\\circ$.\nThe angle in a semicircle is a right angle, so $\\angle AFB = 90^\\circ$.\nThus, $\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ$.\nThe angle $\\beta$ is the angle between chords $AG$ and $FB$. Angles subtended by arcs $AB$ ($180^\\circ$) and $FG$ ($140^\\circ$). The acute angle $\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the angle in a semicircle and alternate interior angles from parallel lines.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar F = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-12, -12]}});\nvar G = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, -12]}});\nboard.create('segment', [A,B], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [F,G], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [A,G], {strokeColor: 'black'});\nboard.create('segment', [F,B], {strokeColor: 'black'});\nvar M = board.create('intersection', [board.create('line',[A,G],{visible:false}), board.create('line',[F,B],{visible:false}), 0], {name: '', visible: false});\nboard.create('angle', [A,B,F], {radius: 1.5, name: '10°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,F,G], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [F,M,G], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "60, 30",
    "solution": "In $\\triangle OAP$, $OA = OP$ (radii) and $OA = AP$ (given). Thus $\\triangle OAP$ is equilateral, so $\\alpha = \\angle AOP = 60^\\circ$.\nSince $AOB$ is a straight line (diameter), $\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ$.\nIn isosceles $\\triangle OPB$ ($OB = OP$ radii), $\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Look for an equilateral triangle formed by radii and a chord.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5,0], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nvar OA = board.create('segment', [O,A], {strokeColor: 'black'});\nvar AP = board.create('segment', [A,P], {strokeColor: 'black'});\nvar OP = board.create('segment', [O,P], {strokeColor: 'black'});\nvar BP = board.create('segment', [B,P], {strokeColor: 'black'});\nboard.create('ticks', [OA], {ticks: 2});\nboard.create('ticks', [AP], {ticks: 2});\nboard.create('angle', [A,O,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,B,P], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "40, 110, 140",
    "solution": "In isosceles $\\triangle ORP$ (radii $OR = OP$), $\\angle ORP = \\angle OPR = 20^\\circ$. So $\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ$.\nSince $PQ \\parallel OR$, alternate interior angles give $\\angle QPR = \\angle ORP = 20^\\circ$.\nThus $\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ$.\nThe angle $\\beta = \\angle PQR$ subtends the major arc $PR$ ($360^\\circ - 140^\\circ = 220^\\circ$), so $\\beta = 220^\\circ / 2 = 110^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use alternate interior angles and the angle subtended by the major arc.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(150*Math.PI/180), 5*Math.sin(150*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar Q = board.create('point', [5*Math.cos(250*Math.PI/180), 5*Math.sin(250*Math.PI/180)], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar R = board.create('point', [5*Math.cos(290*Math.PI/180), 5*Math.sin(290*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,R], {strokeColor: 'black', lastArrow: true});\nboard.create('polygon', [P,Q,R], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [P,Q], {strokeColor: 'black', lastArrow: true});\nboard.create('angle', [O,R,P], {radius: 1.5, name: '20°', label: {autoPosition: false, offset: [5, 10]}});\nboard.create('angle', [O,P,Q], {radius: 1.2, name: 'α', label: {autoPosition: false, offset: [-10, -5]}});\nboard.create('angle', [P,Q,R], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, -15]}});\nboard.create('angle', [P,O,R], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [-5, 15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "120, 60, 70",
    "solution": "The angle at the circumference $\\angle BAC = 50^\\circ$ subtends arc $BC$, so $\\angle BOC = 2 \\times 50^\\circ = 100^\\circ$.\nWe are given $\\angle AOB = 140^\\circ$, so $\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ$.\nThe angle $\\beta = \\angle ABC$ subtends arc $AC$ (central angle $120^\\circ$), so $\\beta = 120^\\circ / 2 = 60^\\circ$.\nThe angle $\\gamma = \\angle ACB$ subtends arc $AB$ (central angle $140^\\circ$), so $\\gamma = 140^\\circ / 2 = 70^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the angle at the centre theorem for each of the three arcs.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(190*Math.PI/180), 5*Math.sin(190*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(50*Math.PI/180), 5*Math.sin(50*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar C = board.create('point', [5*Math.cos(310*Math.PI/180), 5*Math.sin(310*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('polygon', [A,B,C], {fillColor: 'transparent', borders: {strokeColor: 'black'}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nboard.create('angle', [A,O,B], {radius: 1, name: '140°', label: {autoPosition: false, offset: [5, 15]}});\nboard.create('angle', [C,A,B], {radius: 1, name: '50°', label: {autoPosition: false, offset: [15, 0]}});\nboard.create('angle', [A,O,C], {radius: 1, name: 'α', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('angle', [A,B,C], {radius: 1, name: 'β', label: {autoPosition: false, offset: [-10, -10]}});\nboard.create('angle', [A,C,B], {radius: 1, name: 'γ', label: {autoPosition: false, offset: [-10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "140, 80, 20",
    "solution": "Let $OQ$ and $PR$ be parallel. $\\angle POQ = 160^\\circ$. By alternate interior angles, $\\angle ORP = \\angle ROQ = \\gamma$.\nIn isosceles $\\triangle OPR$, $\\angle ORP = \\angle OPR = \\gamma$. In $\\triangle OQR$, $OQ = OR$, so $\\angle OQR = \\angle ORQ = \\beta$.\nFrom the parallel lines, $\\angle OQP + \\angle POQ = 180^\\circ$, etc. But more simply, if we set angles: $Q$ at $0^\\circ$, $P$ at $160^\\circ$, $PR$ horizontal $\\implies R$ is at $20^\\circ$.\nThen $\\alpha = \\angle POR = 160^\\circ - 20^\\circ = 140^\\circ$.\n$\\gamma = \\angle ORP = (180^\\circ - 140^\\circ)/2 = 20^\\circ$.\n$\\beta = \\angle OQR = (180^\\circ - 20^\\circ)/2 = 80^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the parallel lines to find alternate interior angles.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(160*Math.PI/180), 5*Math.sin(160*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar Q = board.create('point', [5,0], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar R = board.create('point', [5*Math.cos(20*Math.PI/180), 5*Math.sin(20*Math.PI/180)], {name: 'R', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [O,P], {strokeColor: 'black'});\nboard.create('segment', [O,Q], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [O,R], {strokeColor: 'black'});\nboard.create('segment', [P,R], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [Q,R], {strokeColor: 'black'});\nboard.create('angle', [Q,O,P], {radius: 1, name: '160°', label: {autoPosition: false, offset: [-5, 15]}});\nboard.create('angle', [R,O,P], {radius: 0.8, name: 'α', label: {autoPosition: false, offset: [10, 5]}});\nboard.create('angle', [O,Q,R], {radius: 1, name: 'β', label: {autoPosition: false, offset: [-15, 5]}});\nboard.create('angle', [O,R,P], {radius: 1.5, name: 'γ', label: {autoPosition: false, offset: [-10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q5f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "40, 40, 10",
    "solution": "The reflex $\\angle AOC = 200^\\circ$, so the interior $\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ$.\nSince $AB = BC$, the arcs are equal, and $\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ$.\n$\\alpha = \\angle OAB$ in isosceles $\\triangle OAB$, so $\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ$.\n$\\beta = \\angle OBC$ in isosceles $\\triangle OBC$, so $\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ$.\n$\\gamma = \\angle OCA$ in isosceles $\\triangle OAC$, so $\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Equal chords subtend equal angles at the centre.",
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
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [5*Math.cos(170*Math.PI/180), 5*Math.sin(170*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(70*Math.PI/180), 5*Math.sin(70*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar C = board.create('point', [5*Math.cos(-30*Math.PI/180), 5*Math.sin(-30*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [O,A], {strokeColor: 'black'});\nboard.create('segment', [O,B], {strokeColor: 'black'});\nboard.create('segment', [O,C], {strokeColor: 'black'});\nvar AB = board.create('segment', [A,B], {strokeColor: 'black'});\nvar BC = board.create('segment', [B,C], {strokeColor: 'black'});\nboard.create('segment', [A,C], {strokeColor: 'black'});\nboard.create('ticks', [AB], {ticks: 2});\nboard.create('ticks', [BC], {ticks: 2});\nboard.create('angle', [C,O,A], {radius: 1, name: '200°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,A,B], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,B,C], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [O,C,A], {radius: 1.5, name: 'γ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q6a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops Euclid's proof. Let $A$, $O$, $B$ form the diameter of a circle, and $P$ be a point on the circumference. Join $PO$, and produce $AP$ to $X$.\nLet $\\angle A = \\alpha$ and $\\angle B = \\beta$.\n\n**i)** Prove that $\\angle APB = \\alpha + \\beta$, and that $\\angle XPB = \\alpha + \\beta$.\n**ii)** Hence, prove that $\\alpha + \\beta = 90^\\circ$.",
    "solution": "**i)** In $\\triangle AOP$, $OA = OP$ (radii), so it is isosceles and $\\angle APO = \\angle PAO = \\alpha$.\nIn $\\triangle BOP$, $OB = OP$ (radii), so it is isosceles and $\\angle BPO = \\angle PBO = \\beta$.\nThus, the whole angle $\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta$.\nThe exterior angle of $\\triangle APB$ at $P$ is $\\angle XPB$. By the exterior angle theorem on $\\triangle APB$, the exterior angle is the sum of the two opposite interior angles, so $\\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta$.\n\n**ii)** Angles on a straight line add to $180^\\circ$, so $\\angle APB + \\angle XPB = 180^\\circ$.\nSubstituting our expressions: $(\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ$.\n$2(\\alpha + \\beta) = 180^\\circ$.\nTherefore, $\\alpha + \\beta = 90^\\circ$. Since $\\angle APB = \\alpha + \\beta$, we have $\\angle APB = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the properties of isosceles triangles formed by radii, and the exterior angle theorem.",
    "solutionSteps": [
      {
        "explanation": "Use radii to form isosceles triangles and find the parts of angle APB.",
        "workingOut": "OA = OP \\Rightarrow \\angle APO = \\alpha\nOB = OP \\Rightarrow \\angle BPO = \\beta\n\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the exterior angle theorem for triangle APB.",
        "workingOut": "\\text{Exterior } \\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the straight line APX to solve for the sum.",
        "workingOut": "\\angle APB + \\angle XPB = 180^\\circ\n(\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ\n2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = 90^\\circ",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar X = board.create('point', [8*Math.cos(60*Math.PI/180), 8*Math.sin(60*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,X], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'red', dash: 2});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q6b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops an alternate proof.\nJoin $PO$ and produce it to a point $M$.\nLet $\\angle PAB = \\alpha$ and $\\angle PBA = \\beta$.\n\n**i)** Prove that $\\angle AOM = 2\\alpha$ and $\\angle BOM = 2\\beta$.\n**ii)** Hence, prove that $2\\alpha + 2\\beta = 180^\\circ$.\n**iii)** Deduce that $\\alpha + \\beta = 90^\\circ$ (and therefore $\\angle APB = 90^\\circ$).",
    "solution": "**i)** In $\\triangle AOP$, $OA = OP$ (radii), so $\\angle APO = \\angle PAO = \\alpha$.\nThe exterior angle of $\\triangle AOP$ at $O$ is $\\angle AOM$. By the exterior angle theorem, $\\angle AOM = \\angle OAP + \\angle APO = \\alpha + \\alpha = 2\\alpha$.\nSimilarly, in $\\triangle BOP$, $OB = OP$ (radii), so $\\angle BPO = \\angle PBO = \\beta$.\nThe exterior angle of $\\triangle BOP$ at $O$ is $\\angle BOM = \\angle OBP + \\angle BPO = \\beta + \\beta = 2\\beta$.\n\n**ii)** $AOB$ is a straight line (a diameter), so the angles on it sum to $180^\\circ$.\nTherefore, $\\angle AOM + \\angle BOM = 180^\\circ$.\nSubstituting our expressions: $2\\alpha + 2\\beta = 180^\\circ$.\n\n**iii)** Dividing the equation by 2 gives $\\alpha + \\beta = 90^\\circ$.\nSince $\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta$, we deduce that $\\angle APB = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the exterior angle theorem for triangles AOP and BOP.",
    "solutionSteps": [
      {
        "explanation": "Use isosceles triangles and exterior angle theorem.",
        "workingOut": "\\triangle AOP \\text{ is isosceles} \\Rightarrow \\angle APO = \\alpha\n\\angle AOM = \\angle OAP + \\angle APO = 2\\alpha\n\\triangle BOP \\text{ is isosceles} \\Rightarrow \\angle BPO = \\beta\n\\angle BOM = \\angle OBP + \\angle BPO = 2\\beta",
        "graphData": null
      },
      {
        "explanation": "Use angles on a straight line.",
        "workingOut": "\\angle AOM + \\angle BOM = 180^\\circ\n2\\alpha + 2\\beta = 180^\\circ",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 to find the final angle.",
        "workingOut": "\\alpha + \\beta = 90^\\circ\n\\angle APB = \\alpha + \\beta = 90^\\circ",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar M = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,P], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [P,M], {strokeColor: 'red', dash: 2});\nboard.create('text', [-2.5, -4.3, 'M'], {fontSize: 14});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q7a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre $O$ lies inside the angle $\\angle APB$, and the line $PO$ is produced to a point $X$ on the circle.\nLet $\\angle OPB = \\beta$ and $\\angle OPA = \\alpha$.\n\n**i)** Prove that $\\angle APB = \\alpha + \\beta$.\n**ii)** Prove that $\\angle AOB = 2\\alpha + 2\\beta = 2\\angle APB$.",
    "solution": "**i)** By looking at the diagram, the line segment $PO$ splits $\\angle APB$ into two adjacent angles, $\\angle OPA$ and $\\angle OPB$.\nThus, $\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta$.\n\n**ii)** Consider $\\triangle OPB$. Since $OP = OB$ (radii), the triangle is isosceles and $\\angle OBP = \\angle OPB = \\beta$.\nThe exterior angle $\\angle BOX$ equals the sum of the interior opposite angles: $\\angle BOX = \\angle OBP + \\angle OPB = \\beta + \\beta = 2\\beta$.\nSimilarly, in $\\triangle OPA$, $OP = OA$ (radii), so $\\angle OAP = \\angle OPA = \\alpha$.\nThe exterior angle $\\angle AOX = \\angle OAP + \\angle OPA = \\alpha + \\alpha = 2\\alpha$.\nThe total angle at the centre is $\\angle AOB = \\angle AOX + \\angle BOX = 2\\alpha + 2\\beta$.\nFactoring out 2 gives $\\angle AOB = 2(\\alpha + \\beta) = 2\\angle APB$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use isosceles triangles and the exterior angle theorem for each half of the angle.",
    "solutionSteps": [
      {
        "explanation": "Identify the angle at the circumference.",
        "workingOut": "\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the exterior angle theorem on the two isosceles triangles.",
        "workingOut": "\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle BOX = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle AOX = 2\\alpha",
        "graphData": null
      },
      {
        "explanation": "Sum the angles at the centre.",
        "workingOut": "\\angle AOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2\\angle APB",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [0,5], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(320*Math.PI/180), 5*Math.sin(320*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [0,-5], {name: '', size: 0, visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.2, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q7b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre $O$ lies outside the angle $\\angle APB$, and the line $PO$ is produced to a point $X$ on the circle.\nLet $\\angle OPB = \\beta$ and $\\angle OPA = \\alpha$.\n\n**i)** Prove that $\\angle APB = \\beta - \\alpha$.\n**ii)** Prove that $\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB$.",
    "solution": "**i)** By looking at the diagram, the angle $\\angle APB$ is the difference between the larger angle $\\angle OPB$ and the smaller angle $\\angle OPA$.\nThus, $\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha$.\n\n**ii)** Consider $\\triangle OPB$. Since $OP = OB$ (radii), the triangle is isosceles and $\\angle OBP = \\angle OPB = \\beta$.\nThe exterior angle $\\angle XOB$ equals the sum of the interior opposite angles: $\\angle XOB = \\angle OBP + \\angle OPB = 2\\beta$.\nSimilarly, in $\\triangle OPA$, $OP = OA$ (radii), so $\\angle OAP = \\angle OPA = \\alpha$.\nThe exterior angle $\\angle XOA = \\angle OAP + \\angle OPA = 2\\alpha$.\nThe angle at the centre $\\angle AOB$ is the difference between the two exterior angles: $\\angle AOB = \\angle XOB - \\angle XOA = 2\\beta - 2\\alpha$.\nFactoring out 2 gives $\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use isosceles triangles and the exterior angle theorem, but this time subtract the angles.",
    "solutionSteps": [
      {
        "explanation": "Express angle APB as a difference.",
        "workingOut": "\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha",
        "graphData": null
      },
      {
        "explanation": "Use exterior angles for the two isosceles triangles.",
        "workingOut": "\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle XOB = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle XOA = 2\\alpha",
        "graphData": null
      },
      {
        "explanation": "Subtract the exterior angles to find the centre angle.",
        "workingOut": "\\angle AOB = \\angle XOB - \\angle XOA = 2\\beta - 2\\alpha = 2(\\beta - \\alpha) = 2\\angle APB",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q8",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet $\\triangle ABP$ be right-angled at $P$, and let $O$ be the midpoint of the hypotenuse $AB$. Draw $PO$ and produce it to $Q$ so that $PO = OQ$. Draw $AQ$ and $BQ$.\n\n**a)** Explain why $APBQ$ is a parallelogram.\n**b)** Hence, explain why $APBQ$ is a rectangle.\n**c)** Hence, explain why $AO = BO = PO$ and why the circle with diameter $AB$ passes through $P$.",
    "solution": "**a)** In the quadrilateral $APBQ$, the diagonals $AB$ and $PQ$ intersect at $O$. We are given that $O$ is the midpoint of $AB$, so $AO = OB$. By construction, $PO = OQ$. Since the diagonals bisect each other, $APBQ$ is a parallelogram.\n\n**b)** A parallelogram with at least one right angle is a rectangle. We are given that $\\triangle ABP$ is right-angled at $P$, so $\\angle APB = 90^\\circ$. Therefore, the parallelogram $APBQ$ is a rectangle.\n\n**c)** The diagonals of a rectangle are equal in length and bisect each other. Thus, $AB = PQ$, and their halves are also equal: $\\frac{1}{2}AB = \\frac{1}{2}PQ$, which means $AO = BO = PO = OQ$. Since $O$ is equidistant from $A$, $B$, and $P$, a circle drawn with centre $O$ and radius $OA$ will pass through $A$, $B$, and $P$. Since $AB$ is a straight line passing through the centre $O$, it is a diameter.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the properties of quadrilaterals based on their diagonals.",
    "solutionSteps": [
      {
        "explanation": "Show APBQ is a parallelogram.",
        "workingOut": "AO = OB \\text{ (given, midpoint)}\nPO = OQ \\text{ (by construction)}\n\\text{Diagonals bisect each other } \\Rightarrow APBQ \\text{ is a parallelogram}",
        "graphData": null
      },
      {
        "explanation": "Show APBQ is a rectangle.",
        "workingOut": "\\angle APB = 90^\\circ \\text{ (given)}\n\\text{A parallelogram with a right angle is a rectangle.}",
        "graphData": null
      },
      {
        "explanation": "Use properties of rectangles to prove equal distances.",
        "workingOut": "\\text{Diagonals of a rectangle are equal: } AB = PQ\n\\text{Halves are equal: } AO = BO = PO = OQ\n\\text{Since } AO = BO = PO, \\text{ the circle with centre } O \\text{ and radius } AO \\text{ passes through } P.",
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
          6,
          -1
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar P = board.create('point', [0,0], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [0,4], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar Q = board.create('point', [5,4], {name: 'Q', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar O = board.create('point', [2.5,2], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [P,Q], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [A,Q], {strokeColor: 'red', dash: 2});\nboard.create('segment', [B,Q], {strokeColor: 'red', dash: 2});\nboard.create('rightangle', [B,P,A], {size: 0.3});\nvar ao = board.create('segment', [A,O], {visible: false});\nvar ob = board.create('segment', [O,B], {visible: false});\nvar po = board.create('segment', [P,O], {visible: false});\nvar oq = board.create('segment', [O,Q], {visible: false});\nboard.create('ticks', [ao], {ticks: 1});\nboard.create('ticks', [ob], {ticks: 1});\nboard.create('ticks', [po], {ticks: 2});\nboard.create('ticks', [oq], {ticks: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y10-13a-q9",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "*(An application of the angle at the centre and circumference theorem)*\n\nA horse is travelling around a circular track at a constant speed. A punter standing at the very edge of the track is following him with binoculars. Explain why the punter's binoculars are rotating at a constant rate.",
    "solution": "Let the horse's position on the circular track be $H$, the punter's position be $P$ (on the circumference), and the centre of the track be $O$. Assume the punter's initial line of sight is towards a fixed point $A$ on the track.\nAs the horse travels at a constant speed along the circumference, the angle it sweeps at the centre, $\\angle AOH$, increases at a constant rate (since arc length is proportional to the central angle).\nBy the angle at the centre theorem, the angle at the circumference subtended by the same arc $AH$ is half the angle at the centre: $\\angle APH = \\frac{1}{2}\\angle AOH$.\nSince $\\angle AOH$ increases at a constant rate, its half, $\\angle APH$, also increases at a constant rate. Therefore, the punter's binoculars (which track the angle $\\angle APH$) rotate at a constant rate.",
    "t": "Angles at the centre and the circumference",
    "hint": "Relate the horse's movement to the angle at the centre, and then use the theorem to relate it to the angle at the circumference.",
    "solutionSteps": [
      {
        "explanation": "Relate speed to the central angle.",
        "workingOut": "\\text{Constant speed means the arc length grows at a constant rate.}\n\\text{Arc length is proportional to the central angle } \\angle AOH.\n\\text{Therefore, } \\angle AOH \\text{ increases at a constant rate.}",
        "graphData": null
      },
      {
        "explanation": "Apply the angle at the centre theorem.",
        "workingOut": "\\angle APH = \\frac{1}{2} \\angle AOH",
        "graphData": null
      },
      {
        "explanation": "Conclude about the rotation rate.",
        "workingOut": "\\text{Since } \\angle AOH \\text{ changes at a constant rate, } \\frac{1}{2}\\angle AOH \\text{ also changes at a constant rate.}\n\\text{Thus, the binoculars rotate at a constant rate.}",
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
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O (Centre)', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [0,-5], {name: 'P (Punter)', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5,0], {name: 'A (Start)', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar H = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'H (Horse)', size: 2, color: '#10b981', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [O,A], {strokeColor: '#9ca3af', dash: 2});\nboard.create('segment', [O,H], {strokeColor: '#9ca3af', dash: 2});\nboard.create('segment', [P,A], {strokeColor: '#9ca3af', dash: 2});\nboard.create('segment', [P,H], {strokeColor: 'black', lastArrow: true});\nboard.create('angle', [A,O,H], {radius: 1, name: '2θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,P,H], {radius: 1.5, name: 'θ', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  }
];
