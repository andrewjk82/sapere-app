import fs from 'fs';

const Y10_CH12I_QUESTIONS = [
  {
    id: 'y10-12i-q1a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle $PQR$ with $\\angle R = 90°$. The side $PR = 6\\text{ cm}$ and $RQ = 10\\text{ cm}$. The angle at $Q$ is $\\theta$.',
    a: '31.0',
    solution: 'In $\\triangle PQR$:\nOpposite side to $\\theta$ is $PR = 6\\text{ cm}$.\nAdjacent side to $\\theta$ is $RQ = 10\\text{ cm}$.\n$\\tan \\theta = \\frac{6}{10} = 0.6$\n$\\theta = \\tan^{-1}(0.6) \\approx 30.96°$\n\nCorrect to one decimal place, $\\theta = 31.0°$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the tangent ratio: $\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 8, 12, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar R = board.create('point', [0,0], {name: 'R', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar Q = board.create('point', [10,0], {name: 'Q', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar P = board.create('point', [0,6], {name: 'P', size: 2, color: '#64748b', label: {offset: [-10,10]}});\nboard.create('polygon', [P,R,Q], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-1.5, 3, '6 cm']);\nboard.create('text', [5, -1, '10 cm']);\nboard.create('angle', [P,Q,R], {radius: 1.5, name: '\\\\theta'});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q1b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the value of the pronumeral in the triangle. Give all angles correct to one decimal place.\n\nA right-angled triangle with a hypotenuse of $18\\text{ cm}$ and an adjacent side of $15\\text{ cm}$. The angle is $\\theta$.',
    a: '33.6',
    solution: 'Using the cosine ratio:\n$\\cos \\theta = \\frac{15}{18}$\n$\\theta = \\cos^{-1}\\left(\\frac{15}{18}\\right) \\approx 33.557°$\n\nCorrect to one decimal place, $\\theta = 33.6°$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine ratio: $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 12, 17, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [15,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 9.95], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [7.5, 9, '18 cm']);\nboard.create('text', [7.5, -1, '15 cm']);\nboard.create('angle', [C,B,A], {radius: 2, name: '\\\\theta'});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q1c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle has an angle of $36°$, a hypotenuse of $18\\text{ cm}$, and an adjacent side $x\\text{ cm}$. Wait, looking at the diagram, $x$ is the adjacent side to $36°$. Wait, the $36°$ is at the top. So $x$ is the opposite side.',
    a: '10.58',
    solution: 'From the diagram, the angle is $36°$. The side $x$ is opposite to $36°$, and the hypotenuse is $18\\text{ cm}$.\n$\\sin 36° = \\frac{x}{18}$\n$x = 18 \\sin 36° \\approx 10.580$\n\nCorrect to two decimal places, $x = 10.58\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the sine ratio: $\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 16, 12, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [10.58,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 14.56], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [5, -1, 'x cm']);\nboard.create('text', [5, 8, '18 cm']);\nboard.create('angle', [A,C,B], {radius: 2, name: '36^\\°'});\nboard.create('segment', [[0,0.5], [0.5,0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q1d',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Calculate the value of the pronumeral in the triangle. Give all side lengths correct to two decimal places.\n\nA right-angled triangle $\\triangle STU$ with $\\angle S = 90°$. The side $ST = 8\\text{ cm}$ and $SU = x\\text{ cm}$. The angle $\\angle STU = 42°$.',
    a: '7.20',
    solution: 'In $\\triangle STU$, the side opposite the $42°$ angle is $SU = x$ and the adjacent side is $ST = 8$.\n$\\tan 42° = \\frac{x}{8}$\n$x = 8 \\tan 42° \\approx 7.203$\n\nCorrect to two decimal places, $x = 7.20\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the tangent ratio: $\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-4, 5, 12, -12],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar S = board.create('point', [0,0], {name: 'S', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar U = board.create('point', [0,-7.2], {name: 'U', size: 2, color: '#64748b', label: {offset: [-10,-10]}});\nvar T = board.create('point', [8,0], {name: 'T', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nboard.create('polygon', [S,T,U], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [4, 1, '8 cm']);\nboard.create('text', [-2, -3.6, 'x cm']);\nboard.create('angle', [S,T,U], {radius: 2, name: '42^\\°'});\nboard.create('segment', [[0,-0.5], [0.5,-0.5]], {strokeColor: 'black'});\nboard.create('segment', [[0.5,-0.5], [0.5,0]], {strokeColor: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q2a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of $30°$, a hypotenuse of $20\\text{ cm}$, and an opposite side $x\\text{ cm}$.',
    a: '10',
    solution: '$\\sin 30° = \\frac{1}{2}$\n$\\frac{1}{2} = \\frac{x}{20}$\n$x = 20 \\times \\frac{1}{2} = 10$',
    t: 'Revision: Trigonometry',
    hint: 'Use the exact value of $\\sin 30° = \\frac{1}{2}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 12, 20, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [17.32,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 10], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [-1.5, 5, 'x cm']);\nboard.create('text', [9, 6, '20 cm']);\nboard.create('angle', [C,B,A], {radius: 3, name: '30^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q2b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of $45°$, an adjacent side of $36\\text{ cm}$, and an opposite side $x\\text{ cm}$.',
    a: '36',
    solution: '$\\tan 45° = 1$\n$\\frac{x}{36} = 1$\n$x = 36$',
    t: 'Revision: Trigonometry',
    hint: 'Use the exact value of $\\tan 45° = 1$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 40, 40, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [36,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 36], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [-2, 18, 'x cm']);\nboard.create('text', [18, 38, '36 cm']);\nboard.create('angle', [A,C,B], {radius: 5, name: '45^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q2c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the exact value of the pronumeral in the triangle.\n\nA right-angled triangle has an angle of $60°$, a hypotenuse of $50\\text{ cm}$, and an adjacent side $x\\text{ cm}$.',
    a: '25',
    solution: '$\\cos 60° = \\frac{1}{2}$\n$\\frac{x}{50} = \\frac{1}{2}$\n$x = 25$',
    t: 'Revision: Trigonometry',
    hint: 'Use the exact value of $\\cos 60° = \\frac{1}{2}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 50, 30, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [25,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [0, 43.3], {visible: true, size: 2, color: '#64748b'});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.create('text', [12.5, 45, 'x cm']);\nboard.create('text', [15, 20, '50 cm']);\nboard.create('angle', [A,B,C], {radius: 4, name: '60^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q3',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: '$AB = 8\\text{ cm}$, $BC = 6\\text{ cm}$ and $AC = 12\\text{ cm}$. Find the magnitude of each of the angles of triangle $ABC$ correct to one decimal place.\n\nEnter your answer as three numbers separated by commas: $\\angle A$, $\\angle B$, $\\angle C$.',
    a: '26.4, 117.3, 36.3',
    solution: 'Using the cosine rule:\nLet $a = 6$, $b = 12$, $c = 8$.\n$\\cos A = \\frac{12^2 + 8^2 - 6^2}{2(12)(8)} = \\frac{172}{192} \\approx 0.8958$\n$A \\approx 26.38°$\n\n$\\cos B = \\frac{6^2 + 8^2 - 12^2}{2(6)(8)} = \\frac{-44}{96} \\approx -0.4583$\n$B \\approx 117.28°$\n\n$\\cos C = \\frac{6^2 + 12^2 - 8^2}{2(6)(12)} = \\frac{116}{144} \\approx 0.8056$\n$C \\approx 36.34°$\n\nCorrect to one decimal place: $26.4, 117.3, 36.3$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the rearranged cosine rule for each angle: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 10, 14, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar C = board.create('point', [12,0], {name: 'C', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar B = board.create('point', [7.16, 3.52], {name: 'B', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [6, -1, '12']);\nboard.create('text', [2, 3, '8']);\nboard.create('text', [10, 3, '6']);\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q4a',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'A triangular region is enclosed by straight fences of lengths $42.8\\text{ metres}$, $56.6\\text{ metres}$ and $72.1\\text{ metres}$.\n\nFind the angle between the $42.8\\text{ m}$ and $56.6\\text{ m}$ fences, correct to the nearest degree.',
    a: '92',
    solution: 'Let $a = 72.1$, $b = 42.8$, and $c = 56.6$.\nThe angle between the $42.8\\text{ m}$ and $56.6\\text{ m}$ fences is opposite the $72.1\\text{ m}$ fence. Let this angle be $A$.\n$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$\n$\\cos A = \\frac{42.8^2 + 56.6^2 - 72.1^2}{2(42.8)(56.6)} = \\frac{1831.84 + 3203.56 - 5198.41}{4844.96} = \\frac{-163.01}{4844.96} \\approx -0.03364$\n$A = \\cos^{-1}(-0.03364) \\approx 91.93°$\n\nCorrect to the nearest degree, the angle is $92°$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the rearranged cosine rule. The angle is opposite the longest side.'
  },
  {
    id: 'y10-12i-q4b',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'A triangular region is enclosed by straight fences of lengths $42.8\\text{ metres}$, $56.6\\text{ metres}$ and $72.1\\text{ metres}$.\n\nFind the area of the region, correct to the nearest square metre.',
    a: '1211',
    solution: 'We know two sides $42.8$ and $56.6$, and the included angle $A \\approx 91.927°$.\n$\\text{Area} = \\frac{1}{2}bc \\sin A = \\frac{1}{2}(42.8)(56.6) \\sin 91.927°$\n$\\text{Area} = 1211.24 \\times 0.9994 \\approx 1210.55\\text{ m}^2$\n\nCorrect to the nearest square metre, the area is $1211\\text{ m}^2$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the area formula: $\\text{Area} = \\frac{1}{2}bc \\sin A$, using the unrounded angle.'
  },
  {
    id: 'y10-12i-q5',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In a triangle $ABC$, $\\sin A = \\frac{1}{8}$, $\\sin B = \\frac{3}{4}$ and $a = 8$. Find, using the sine rule, the value of $b$.',
    a: '48',
    solution: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$\n$\\frac{8}{\\frac{1}{8}} = \\frac{b}{\\frac{3}{4}}$\n$64 = \\frac{4b}{3}$\n$192 = 4b \\implies b = 48$',
    t: 'Revision: Trigonometry',
    hint: 'Substitute the given values into the sine rule: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.'
  },
  {
    id: 'y10-12i-q6',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'In a triangle $ABC$, $a = 5$, $b = 6$ and $\\cos C = \\frac{1}{5}$. Find $c$.',
    a: '7',
    solution: 'Using the cosine rule:\n$c^2 = a^2 + b^2 - 2ab \\cos C$\n$c^2 = 5^2 + 6^2 - 2(5)(6)\\left(\\frac{1}{5}\\right)$\n$c^2 = 25 + 36 - 60\\left(\\frac{1}{5}\\right)$\n$c^2 = 61 - 12 = 49 \\implies c = 7$',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine rule: $c^2 = a^2 + b^2 - 2ab \\cos C$.'
  },
  {
    id: 'y10-12i-q7',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'Find the area of triangle $XYZ$, correct to two decimal places.\n\nThe triangle has sides $x = 8.3\\text{ cm}$, $z = 6.2\\text{ cm}$ and an included angle $\\angle Y = 72°$.',
    a: '24.47',
    solution: '$\\text{Area} = \\frac{1}{2}xz \\sin Y$\n$\\text{Area} = \\frac{1}{2}(8.3)(6.2) \\sin 72°$\n$\\text{Area} = 25.73 \\times 0.9511 \\approx 24.470\\text{ cm}^2$\n\nCorrect to two decimal places, the area is $24.47\\text{ cm}^2$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the area formula: $\\text{Area} = \\frac{1}{2}ac \\sin B$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 8, 10, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar Y = board.create('point', [0,0], {name: 'Y', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar X = board.create('point', [6.2,0], {name: 'X', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar Z = board.create('point', [8.3*Math.cos(72*Math.PI/180), 8.3*Math.sin(72*Math.PI/180)], {name: 'Z', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('polygon', [Y,X,Z], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('angle', [X,Y,Z], {radius: 1.5, name: '72^\\°'});\nboard.create('text', [3, -1, '6.2 cm']);\nboard.create('text', [1, 5, '8.3 cm']);\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q8a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'For a triangle $ABC$, $AC = 16.2\\text{ cm}$, $AB = 18.6\\text{ cm}$ and $\\angle ACB = 60°$. Find, correct to one decimal place:\n\n$\\angle ABC$',
    a: '49.0',
    solution: 'Using the sine rule:\n$\\frac{16.2}{\\sin B} = \\frac{18.6}{\\sin 60°}$\n$\\sin B = \\frac{16.2 \\sin 60°}{18.6} \\approx 0.7543$\n$B = \\sin^{-1}(0.7543) \\approx 48.96°$\n\nCorrect to one decimal place, $\\angle ABC = 49.0°$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the sine rule: $\\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.'
  },
  {
    id: 'y10-12i-q8b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'For a triangle $ABC$, $AC = 16.2\\text{ cm}$, $AB = 18.6\\text{ cm}$ and $\\angle ACB = 60°$. Find, correct to one decimal place:\n\n$\\angle BAC$',
    a: '71.0',
    solution: '$\\angle BAC = 180° - 60° - 48.96° = 71.04°$\n\nCorrect to one decimal place, $\\angle BAC = 71.0°$.',
    t: 'Revision: Trigonometry',
    hint: 'The angles in a triangle add up to $180°$.'
  },
  {
    id: 'y10-12i-q8c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'For a triangle $ABC$, $AC = 16.2\\text{ cm}$, $AB = 18.6\\text{ cm}$ and $\\angle ACB = 60°$. Find, correct to one decimal place:\n\nThe length of $CB$',
    a: '20.3',
    solution: 'Using the sine rule to find $a = CB$:\n$\\frac{a}{\\sin 71.04°} = \\frac{18.6}{\\sin 60°}$\n$a = \\frac{18.6 \\sin 71.04°}{\\sin 60°} \\approx 20.31$\n\nCorrect to one decimal place, $CB = 20.3\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the sine rule with the newly found angle $A$.'
  },
  {
    id: 'y10-12i-q8d',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'For a triangle $ABC$, $AC = 16.2\\text{ cm}$, $AB = 18.6\\text{ cm}$ and $\\angle ACB = 60°$. Find, correct to one decimal place:\n\nThe area of the triangle',
    a: '142.5',
    solution: '$\\text{Area} = \\frac{1}{2}bc \\sin A = \\frac{1}{2}(16.2)(18.6) \\sin 71.04° \\approx 150.66 \\times 0.9457 \\approx 142.48$\n\nCorrect to one decimal place, it is $142.5\\text{ cm}^2$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the area formula: $\\text{Area} = \\frac{1}{2}bc \\sin A$.'
  },
  {
    id: 'y10-12i-q9',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'The angle of depression from a point $A$ to a ship at point $B$ is $10°$. If the distance $BX$ from $B$ to the foot of the cliff at $X$ is $800\\text{ m}$, find the height of the cliff $AX$, correct to the nearest metre.',
    a: '141',
    solution: 'The angle of elevation from $B$ to $A$ is $10°$.\nIn right-angled triangle $AXB$:\n$\\tan 10° = \\frac{AX}{800}$\n$AX = 800 \\tan 10° \\approx 800 \\times 0.1763 = 141.06$\n\nCorrect to the nearest metre, the height is $141\\text{ m}$.',
    t: 'Revision: Trigonometry',
    hint: 'The angle of elevation from $B$ to $A$ is equal to the angle of depression ($10°$). Use the tangent ratio.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 4, 12, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar X = board.create('point', [0,0], {name: 'X', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar B = board.create('point', [10,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar A = board.create('point', [0, 1.76], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,10]}});\nboard.create('segment', [X,B], {strokeColor: 'black', strokeWidth: 2});\nboard.create('segment', [X,A], {strokeColor: 'black', strokeWidth: 2});\nboard.create('segment', [A,B], {strokeColor: 'red', dash: 2});\nboard.create('text', [4, -1, '800 m']);\nboard.create('text', [-1, 0.8, 'A']);\nboard.create('text', [10, 0.8, 'B']);\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10a',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the length of the unknown side $AC$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle A = 51°$, $\\angle B = 38°$, and $AB = 7\\text{ cm}$.',
    a: '4.31',
    solution: '$\\angle C = 180° - 51° - 38° = 91°$\nUsing the sine rule to find $AC$ ($b$):\n$\\frac{b}{\\sin 38°} = \\frac{7}{\\sin 91°}$\n$b = \\frac{7 \\sin 38°}{\\sin 91°} \\approx \\frac{4.3096}{0.9998} \\approx 4.310$\n\nCorrect to two decimal places, $AC = 4.31\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Find the third angle first, then use the sine rule.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 6, 10, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar B = board.create('point', [7,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar C = board.create('point', [2.71, 3.35], {name: 'C', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [3, -1, '7 cm']);\nboard.create('angle', [B,A,C], {radius: 1, name: '51^\\°'});\nboard.create('angle', [C,B,A], {radius: 1, name: '38^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10b',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the length of the unknown side $BC$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle A = 48°$, $AC = 4\\text{ cm}$, and $AB = 6\\text{ cm}$.',
    a: '4.46',
    solution: 'Using the cosine rule to find $a = BC$:\n$a^2 = 4^2 + 6^2 - 2(4)(6) \\cos 48° = 16 + 36 - 48(0.6691) = 52 - 32.118 = 19.882$\n$a = \\sqrt{19.882} \\approx 4.4589$\n\nCorrect to two decimal places, $BC = 4.46\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine rule to find the third side.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 6, 8, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar B = board.create('point', [6,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar C = board.create('point', [4*Math.cos(48*Math.PI/180), 4*Math.sin(48*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [3, -1, '6 cm']);\nboard.create('text', [0.5, 2, '4 cm']);\nboard.create('angle', [B,A,C], {radius: 1, name: '48^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10c',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the length of the unknown side $AB$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle C = 80°$, $AC = 10\\text{ cm}$, and $BC = 7\\text{ cm}$.',
    a: '11.17',
    solution: 'Using the cosine rule to find $c = AB$:\n$c^2 = 7^2 + 10^2 - 2(7)(10) \\cos 80° = 49 + 100 - 140(0.1736) = 149 - 24.31 = 124.69$\n$c = \\sqrt{124.69} \\approx 11.166$\n\nCorrect to two decimal places, $AB = 11.17\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine rule: $c^2 = a^2 + b^2 - 2ab \\cos C$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-6, 12, 10, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar C = board.create('point', [0,8], {name: 'C', size: 2, color: '#64748b', label: {offset: [0,10]} });\nvar A = board.create('point', [-4,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]}});\nvar B = board.create('point', [7,1], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-3, 5, '10 cm']);\nboard.create('text', [4, 5, '7 cm']);\nboard.create('angle', [A,C,B], {radius: 2, name: '80^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10d',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the length of the unknown side $AC$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle B = 120°$, $AB = 10\\text{ cm}$, and $BC = 12\\text{ cm}$.',
    a: '19.08',
    solution: 'Using the cosine rule to find $b = AC$:\n$b^2 = 12^2 + 10^2 - 2(12)(10) \\cos 120° = 144 + 100 - 240(-0.5) = 244 + 120 = 364$\n$b = \\sqrt{364} \\approx 19.078$\n\nCorrect to two decimal places, $AC = 19.08\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine rule. Note that $\\cos 120° = -0.5$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-15, 15, 10, -5],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar B = board.create('point', [0,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [0,-10]} });\nvar A = board.create('point', [-10,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]}});\nvar C = board.create('point', [12*Math.cos(60*Math.PI/180), 12*Math.sin(60*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [10,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-5, -1, '10 cm']);\nboard.create('text', [4, 5, '12 cm']);\nboard.create('angle', [C,B,A], {radius: 2, name: '120^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10e',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the size of the unknown angle $\\angle C$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle A = 31°$, $AC = 15\\text{ cm}$, and $BC = 8\\text{ cm}$. The diagram shows $\\angle B$ is obtuse. Find $\\angle C$.',
    a: '43.95',
    solution: 'Using the sine rule to find $\\angle B$:\n$\\frac{\\sin B}{15} = \\frac{\\sin 31°}{8}$\n$\\sin B = \\frac{15 \\sin 31°}{8} \\approx 0.9657$\n$B = \\sin^{-1}(0.9657) \\approx 74.95°$ or $B = 180° - 74.95° = 105.05°$.\nSince $\\angle B$ is obtuse, $B = 105.05°$.\nThen $\\angle C = 180° - 31° - 105.05° = 43.95°$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the sine rule to find $\\angle B$. Since the diagram shows an obtuse angle at $B$, subtract the acute answer from $180°$.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-2, 10, 16, -2],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]} });\nvar B = board.create('point', [8,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar C = board.create('point', [15*Math.cos(31*Math.PI/180), 15*Math.sin(31*Math.PI/180)], {name: 'C', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [6, 5, '15 cm']);\nboard.create('text', [12, 3, '8 cm']);\nboard.create('angle', [B,A,C], {radius: 3, name: '31^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: 'y10-12i-q10f',
    type: 'short_answer',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Calculate the length of the unknown side $AB$, correct to two decimal places.\n\nTriangle $ABC$ has $\\angle C = 18°$, $AC = 15\\text{ cm}$, and $BC = 25\\text{ cm}$.',
    a: '11.69',
    solution: 'Using the cosine rule to find $c = AB$:\n$c^2 = 25^2 + 15^2 - 2(25)(15) \\cos 18°$\n$c^2 = 625 + 225 - 750(0.9510565) = 850 - 713.292 = 136.708$\n$c = \\sqrt{136.708} \\approx 11.69$\n\nCorrect to two decimal places, $AB = 11.69\\text{ cm}$.',
    t: 'Revision: Trigonometry',
    hint: 'Use the cosine rule.',
    graphData: { jsxGraph: {
        width: 300, height: 250, boundingbox: [-5, 10, 30, -15],
        boardOptions: { axis: false, keepaspectratio: true, showNavigation: false },
        script: "board.suspendUpdate();\nvar C = board.create('point', [0,5], {name: 'C', size: 2, color: '#64748b', label: {offset: [-10,10]} });\nvar A = board.create('point', [0,-10], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]}});\nvar B = board.create('point', [25*Math.cos(-18*Math.PI/180), 5+25*Math.sin(-18*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nboard.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('text', [-1.5, -2.5, '15 cm']);\nboard.create('text', [12, 3, '25 cm']);\nboard.create('angle', [A,C,B], {radius: 3, name: '18^\\°'});\nboard.unsuspendUpdate();"
      }
    }
  }
];

export { Y10_CH12I_QUESTIONS };
