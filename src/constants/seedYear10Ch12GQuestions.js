export const Y10_CH12G_QUESTIONS = [
  {
    id: 'y10-12g-q6a',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128°$.\n\nFind the length of the longer diagonal, correct to two decimal places.',
    a: '14.38',
    graphData: { jsxGraph: {
            width: 300,
            height: 250,
            boundingbox: [
                  -6,
                  6,
                  8,
                  -5
            ],
            boardOptions: {
                  axis: false,
                  grid: false,
                  keepaspectratio: true,
                  showNavigation: false
            },
            script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [4,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [6,3], {visible: true, size: 2, color: '#64748b'});\nvar D = board.create('point', [2,3], {visible: true, size: 2, color: '#64748b'});\nvar p = board.create('polygon', [A,B,C,D], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.unsuspendUpdate();"
      }
},

    solution: 'The longer diagonal is opposite the obtuse angle ($128°$).\n\nUsing the cosine rule in the triangle formed by two sides and the longer diagonal $d_1$:\n$d_1^2 = 8^2 + 8^2 - 2(8)(8)\\cos 128°$\n$d_1^2 = 64 + 64 - 128\\cos 128°$\n$d_1^2 \\approx 128 - 128(-0.6157) \\approx 206.80$\n$d_1 = \\sqrt{206.80} \\approx 14.38\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'The longer diagonal is opposite the larger angle ($128°$). Use the cosine rule.'
  },
  {
    id: 'y10-12g-q6b',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128°$.\n\nFind the length of the shorter diagonal, correct to two decimal places.',
    a: '7.01',
    graphData: { jsxGraph: {
            width: 300,
            height: 250,
            boundingbox: [
                  -6,
                  6,
                  8,
                  -5
            ],
            boardOptions: {
                  axis: false,
                  grid: false,
                  keepaspectratio: true,
                  showNavigation: false
            },
            script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [4,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [6,3], {visible: true, size: 2, color: '#64748b'});\nvar D = board.create('point', [2,3], {visible: true, size: 2, color: '#64748b'});\nvar p = board.create('polygon', [A,B,C,D], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.unsuspendUpdate();"
      }
},

    solution: 'Adjacent angles in a rhombus add to $180°$. The acute angle is $180° - 128° = 52°$.\nThe shorter diagonal $d_2$ is opposite the $52°$ angle.\n\nUsing the cosine rule:\n$d_2^2 = 8^2 + 8^2 - 2(8)(8)\\cos 52°$\n$d_2^2 = 128 - 128\\cos 52° \\approx 128 - 78.805 \\approx 49.195$\n$d_2 = \\sqrt{49.195} \\approx 7.01\\text{ m}$',
    t: 'Finding angles using the cosine rule',
    hint: 'Find the acute angle of the rhombus first (co-interior angles add to $180°$). Then use the cosine rule.'
  },
  {
    id: 'y10-12g-q6c',
    type: 'short_answer',
    difficulty: 'medium',
    timeLimit: 90,
    question: 'A rhombus $PQRS$ has side lengths $8\\text{ m}$, and contains an angle of $128°$.\n\nFind the area of the rhombus, correct to two decimal places.',
    a: '50.43',
    graphData: { jsxGraph: {
            width: 300,
            height: 250,
            boundingbox: [
                  -6,
                  6,
                  8,
                  -5
            ],
            boardOptions: {
                  axis: false,
                  grid: false,
                  keepaspectratio: true,
                  showNavigation: false
            },
            script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [4,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [6,3], {visible: true, size: 2, color: '#64748b'});\nvar D = board.create('point', [2,3], {visible: true, size: 2, color: '#64748b'});\nvar p = board.create('polygon', [A,B,C,D], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.unsuspendUpdate();"
      }
},

    solution: 'The area of a rhombus can be found using the formula $A = a^2 \\sin \\theta$, or by finding the area of two identical triangles.\nArea $= 2 \\times \\left(\\frac{1}{2} \\times 8 \\times 8 \\times \\sin 128°\\right)$\nArea $= 64 \\sin 128°$\nArea $\\approx 64 \\times 0.7880 \\approx 50.43\\text{ m}^2$',
    t: 'Finding angles using the cosine rule',
    hint: 'Use the sine area formula: $\\text{Area} = ab\\sin C$ for the two triangles that make up the rhombus, or $A = a^2\\sin\\theta$.'
  },
  {
    id: 'y10-12g-q7',
    type: 'teacher_review',
    difficulty: 'hard',
    timeLimit: 120,
    question: 'Prove the cosine rule when the included angle, $A$ is obtuse.',
    a: '',
    graphData: { jsxGraph: {
            width: 300,
            height: 250,
            boundingbox: [
                  -6,
                  6,
                  8,
                  -5
            ],
            boardOptions: {
                  axis: false,
                  grid: false,
                  keepaspectratio: true,
                  showNavigation: false
            },
            script: "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2} });\nboard.unsuspendUpdate();"
      }
},

    solution: 'Consider $\\triangle ABC$ where angle $A$ is obtuse. Drop a perpendicular from $B$ to meet $CA$ extended at $D$. Let the height be $h$ and the extended length $DA$ be $x$.\n\nIn the small right-angled $\\triangle BDA$:\n$\\angle BDA = 90°$\n$\\angle BAD = 180° - A$\nUsing trigonometry: $\\cos(180° - A) = \\frac{x}{c}$. Since $\\cos(180° - A) = -\\cos A$, we have $x = -c \\cos A$.\nAlso, by Pythagoras\' theorem: $h^2 + x^2 = c^2$.\n\nIn the large right-angled $\\triangle BDC$, the base is $DC = b + x$.\nUsing Pythagoras\' theorem:\n$a^2 = h^2 + (b + x)^2$\n$a^2 = h^2 + b^2 + 2bx + x^2$\nRearranging the terms:\n$a^2 = (h^2 + x^2) + b^2 + 2bx$\nSubstitute $h^2 + x^2 = c^2$ and $x = -c \\cos A$:\n$a^2 = c^2 + b^2 + 2b(-c \\cos A)$\n$a^2 = b^2 + c^2 - 2bc \\cos A$\n\nThis proves the cosine rule for an obtuse angle.',
    t: 'Finding angles using the cosine rule',
    hint: 'Drop a perpendicular from $B$ to the line $AC$ extended. Use Pythagoras\' theorem on both the small and large right-angled triangles, and note that $\\cos(180° - A) = -\\cos A$.'
  }
,
  {
  "id": "y10-12g-q1a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $7\\text{ cm}$ and $9\\text{ cm}$, with an included angle of $64°$.",
  "a": "8.65",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 7^2 + 9^2 - 2(7)(9)\\cos 64°$\n$x^2 = 49 + 81 - 126\\cos 64°$\n$x^2 = 130 - 126(0.4384) \\approx 130 - 55.2348 = 74.7652$\n$x = \\sqrt{74.7652} \\approx 8.65\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$."
},
  {
  "id": "y10-12g-q1b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $8\\text{ cm}$ and $10\\text{ cm}$, with an included angle of $21°$.",
  "a": "3.82",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 8^2 + 10^2 - 2(8)(10)\\cos 21°$\n$x^2 = 64 + 100 - 160\\cos 21°$\n$x^2 = 164 - 160(0.9336) \\approx 164 - 149.373 = 14.627$\n$x = \\sqrt{14.627} \\approx 3.82\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$."
},
  {
  "id": "y10-12g-q1c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has sides of $8\\text{ cm}$ and $10\\text{ cm}$, with an included angle of $130°$.",
  "a": "16.34",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 10^2 + 8^2 - 2(10)(8)\\cos 130°$\n$x^2 = 100 + 64 - 160\\cos 130°$\n$x^2 = 164 - 160(-0.6428) \\approx 164 + 102.846 = 266.846$\n$x = \\sqrt{266.846} \\approx 16.34\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$. Remember that $\\cos 130°$ is negative."
},
  {
  "id": "y10-12g-q1d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "In the given triangle, calculate the unknown side length, giving your answer correct to two decimal places.\n\nA triangle has two sides of $4\\text{ cm}$, with an included angle of $120°$.",
  "a": "6.93",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "Let the unknown side be $x$.\nUsing the cosine rule:\n$x^2 = 4^2 + 4^2 - 2(4)(4)\\cos 120°$\n$x^2 = 16 + 16 - 32(-0.5)$\n$x^2 = 32 + 16 = 48$\n$x = \\sqrt{48} \\approx 6.93\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$. Note that $\\cos 120° = -0.5$."
},
  {
  "id": "y10-12g-q2",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "question": "$ABCD$ is a parallelogram with sides $15\\text{ cm}$ and $18\\text{ cm}$. The angle at $A$ is $65°$. Find the length of the shorter diagonal, correct to two decimal places.",
  "a": "17.91",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-10]}});\nvar B = board.create('point', [6,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-10]}});\nvar C = board.create('point', [8,3], {name: 'C', size: 2, color: '#64748b', label: {offset: [10,10]}});\nvar D = board.create('point', [2,3], {name: 'D', size: 2, color: '#64748b', label: {offset: [-10,10]}});\nvar p = board.create('polygon', [A,B,C,D], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.create('segment', [B,D], {strokeColor: '#4f46e5', dash: 2});\nboard.unsuspendUpdate();"
    }
},

  "solution": "The shorter diagonal $BD$ is opposite the acute angle $\\angle A = 65°$.\nUsing the cosine rule in $\\triangle ABD$:\n$BD^2 = 15^2 + 18^2 - 2(15)(18)\\cos 65°$\n$BD^2 = 225 + 324 - 540\\cos 65°$\n$BD^2 = 549 - 540(0.4226) \\approx 549 - 228.214 = 320.786$\n$BD = \\sqrt{320.786} \\approx 17.91\\text{ cm}$",
  "t": "Finding angles using the cosine rule",
  "hint": "The shorter diagonal is opposite the acute angle. Use the cosine rule in the triangle formed by two adjacent sides and the shorter diagonal."
},
  {
  "id": "y10-12g-q3",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A vertical pole $OV$ is being held in position by two ropes, $VA$ and $VB$. The points $A$, $O$, and $B$ are collinear on horizontal ground. If $VA = 6\\text{ m}$, $VB = 6.5\\text{ m}$, $\\angle OVB = 32°$ and $\\angle OVA = 27°$, find the distance $AB$, correct to one decimal place.",
  "a": "6.2",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [-3,0], {name: 'A', size: 2, color: '#64748b', label: {offset: [-10,-15]}});\nvar B = board.create('point', [4,0], {name: 'B', size: 2, color: '#64748b', label: {offset: [10,-15]}});\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: '#64748b', label: {offset: [0,-15]}});\nvar V = board.create('point', [0,4], {name: 'V', size: 2, color: '#64748b', label: {offset: [0,10]}});\nboard.create('segment', [A,B], {strokeColor: 'gray', strokeWidth: 2});\nboard.create('segment', [O,V], {strokeColor: 'black', strokeWidth: 3});\nboard.create('segment', [V,A], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('segment', [V,B], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
    }
},

  "solution": "Method 1: Using the cosine rule\nIn $\\triangle VAB$, the total angle at $V$ is $\\angle AVB = \\angle OVA + \\angle OVB = 27° + 32° = 59°$.\nUsing the cosine rule:\n$AB^2 = 6^2 + 6.5^2 - 2(6)(6.5)\\cos 59°$\n$AB^2 = 36 + 42.25 - 78\\cos 59°$\n$AB^2 = 78.25 - 78(0.5150) \\approx 78.25 - 40.173 = 38.077$\n$AB = \\sqrt{38.077} \\approx 6.17 \\approx 6.2\\text{ m}$\n\nMethod 2: Using right-angled triangles\nIn $\\triangle VOA$, $OA = 6 \\sin 27° \\approx 2.724\\text{ m}$\nIn $\\triangle VOB$, $OB = 6.5 \\sin 32° \\approx 3.444\\text{ m}$\nSince $O$ lies between $A$ and $B$, $AB = OA + OB \\approx 2.724 + 3.444 = 6.168 \\approx 6.2\\text{ m}$",
  "t": "Finding angles using the cosine rule",
  "hint": "You can either use right-angled triangles $\\triangle VOA$ and $\\triangle VOB$ to find $OA$ and $OB$, or use the cosine rule on the large triangle $\\triangle VAB$ with the angle $\\angle AVB = 27° + 32°$."
},
  {
  "id": "y10-12g-q4",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A ship is $300\\text{ km}$ from port on a bearing of $070°\\text{T}$. A second ship is $400\\text{ km}$ from the same port and on a bearing of $140°\\text{T}$. How far apart, correct to the nearest kilometre, are the two ships?",
  "a": "410",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "The angle between the two ships from the port is the difference in their bearings:\nAngle $= 140° - 70° = 70°$.\nLet the distance between the ships be $d$.\nUsing the cosine rule in the triangle formed by the port and the two ships:\n$d^2 = 300^2 + 400^2 - 2(300)(400)\\cos 70°$\n$d^2 = 90000 + 160000 - 240000\\cos 70°$\n$d^2 = 250000 - 240000(0.3420) \\approx 250000 - 82084.8 = 167915.2$\n$d = \\sqrt{167915.2} \\approx 409.77$\n\nCorrect to the nearest kilometre, the ships are $410\\text{ km}$ apart.",
  "t": "Finding angles using the cosine rule",
  "hint": "Find the angle between the two bearings ($140° - 70°$). Then use the cosine rule with the two distances as side lengths."
},
  {
  "id": "y10-12g-q5",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "question": "A pilot flies a plane on course for an airport $600\\text{ km}$ away. Unfortunately, due to an error, his bearing is out by $2°$. After travelling $700\\text{ km}$ he realises he is off course. How far from the airport is he, correct to the nearest kilometre?",
  "a": "103",
  "graphData": {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
            -6,
            6,
            8,
            -5
        ],
        "boardOptions": {
            "axis": false,
            "grid": false,
            "keepaspectratio": true,
            "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar A = board.create('point', [0,0], {visible: true, size: 2, color: '#64748b'});\nvar B = board.create('point', [5,0], {visible: true, size: 2, color: '#64748b'});\nvar C = board.create('point', [2,4], {visible: true, size: 2, color: '#64748b'});\nvar t = board.create('polygon', [A,B,C], {fillColor: '#e0e7ff', borders: {strokeColor: '#4f46e5', strokeWidth: 2}});\nboard.unsuspendUpdate();"
    }
},

  "solution": "We form a triangle with the original destination, the starting point, and the plane's current position.\nThe sides are $600\\text{ km}$ and $700\\text{ km}$, and the included angle is the error in bearing, which is $2°$.\nLet the distance to the airport be $x$.\nUsing the cosine rule:\n$x^2 = 600^2 + 700^2 - 2(600)(700)\\cos 2°$\n$x^2 = 360000 + 490000 - 840000\\cos 2°$\n$x^2 = 850000 - 840000(0.99939) \\approx 850000 - 839488.2 = 10511.8$\n$x = \\sqrt{10511.8} \\approx 102.52$\n\nCorrect to the nearest kilometre, he is $103\\text{ km}$ from the airport.",
  "t": "Finding angles using the cosine rule",
  "hint": "Draw a triangle with side lengths $600\\text{ km}$ and $700\\text{ km}$. The included angle is the bearing error of $2°$. Use the cosine rule to find the third side."
}
];
