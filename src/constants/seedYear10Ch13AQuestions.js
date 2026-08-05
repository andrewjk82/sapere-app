export const Y10_CH13A_QUESTIONS = [
  {
    id: "y10-13a-q2a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    opts: [
      "\\\\(\\alpha = 75^\\\\circ, \\beta = 90^\\\\circ\\\\)",
      "\\\\(\\alpha = 180^\\\\circ, \\beta = 150^\\\\circ\\\\)",
      "\\\\(\\alpha = 90^\\\\circ, \\beta = 75^\\\\circ\\\\)",
      "\\\\(\\alpha = 45^\\\\circ, \\beta = 37.5^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(AB\\) is a diameter, the angle in a semicircle is a right angle, so \\(\\alpha = 90^\\circ\\).\nIn \\(\\triangle PAB\\), the sum of angles is \\(180^\\circ\\), so \\(\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the angle in a semicircle.",
        workingOut: "Notice that line segment AB passes through the centre O, making it a diameter. According to the theorem 'Angle in a semicircle is a right angle', we deduce that \\(\\angle APB = 90^\\circ\\). Therefore, \\(\\alpha = 90^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Use the triangle angle sum theorem.",
        workingOut: "In \\(\\Delta PAB\\), we know \\(\\angle APB = 90^\\circ\\) and \\(\\angle PAB = 15^\\circ\\). Since the interior angles sum to \\(180^\\circ\\): \\(90^\\circ + 15^\\circ + \\beta = 180^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "\\(\\beta = 180^\\circ - 105^\\circ = 75^\\circ\\). The final values are \\(\\alpha = 90^\\circ\\) and \\(\\beta = 75^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 240,
            name: "A",
            label: {
              offset: [
                -6,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 60,
            name: "B",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 120,
            name: "P",
            label: {
              offset: [
                -6,
                12
              ]
            }
          },
          {
            type: "segment",
            from: "A",
            to: "B"
          },
          {
            type: "polygon",
            points: [
              "A",
              "P",
              "B"
            ]
          },
          {
            type: "angle",
            points: [
              "B",
              "A",
              "P"
            ],
            name: "15°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "P",
              "B"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "B",
              "A"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='94.99999999999994,245.26279441628824 95.00000000000003,54.73720558371174 205,54.737205583711756' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='94.99999999999994' y1='245.26279441628824' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 111.49999999999996 216.68395609140177 A 33 33 0 0 0 94.99999999999996 212.26279441628824' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='106.12921893940835' y='207.72798388585832' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>15°</text>\n  <path d='M 95.00000000000003 76.73720558371174 A 22 22 0 0 0 117.00000000000003 54.73720558371175' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='117.62741699796955' y='81.36462258168126' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 183 54.737205583711756 A 22 22 0 0 0 194 73.7897644669694' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='177.28718707889794' y='74.73720558371174' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='94.99999999999994' cy='245.26279441628824' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='88.99999999999994' y='257.2627944162882' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='95.00000000000003' cy='54.73720558371174' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='89.00000000000003' y='42.73720558371174' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 75^\\\\circ, \\beta = 90^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 180^\\\\circ, \\beta = 150^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 90^\\\\circ, \\beta = 75^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 45^\\\\circ, \\beta = 37.5^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q2b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 50^\\\\circ\\\\)",
      "\\\\(\\theta = 12.5^\\\\circ\\\\)",
      "\\\\(\\theta = 25^\\\\circ\\\\)",
      "\\\\(\\theta = 65^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(PQ\\) is a diameter, the angle in a semicircle is a right angle. Therefore, the angle at \\(T\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the angle in a semicircle.",
        workingOut: "The line segment PQ is a diameter since it passes through the centre O. The angle subtended by a diameter at the circumference is always a right angle. Thus, \\(\\angle PTQ = 90^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Apply the angle sum of a triangle.",
        workingOut: "In the right-angled triangle \\(\\Delta PTQ\\), the sum of angles is \\(180^\\circ\\). We have \\(\\angle PTQ = 90^\\circ\\) and \\(\\angle TPQ = 65^\\circ\\). So, \\(90^\\circ + 65^\\circ + \\theta = 180^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\theta\\).",
        workingOut: "Rearranging the equation: \\(\\theta = 180^\\circ - 155^\\circ = 25^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 180,
            name: "P",
            label: {
              offset: [
                -14,
                0
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 0,
            name: "Q",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "point",
            id: "T",
            on: "c1",
            angle: 220,
            name: "T",
            label: {
              offset: [
                -8,
                -10
              ]
            }
          },
          {
            type: "segment",
            from: "P",
            to: "Q"
          },
          {
            type: "polygon",
            points: [
              "P",
              "T",
              "Q"
            ]
          },
          {
            type: "angle",
            points: [
              "T",
              "P",
              "Q"
            ],
            name: "65°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "T",
              "Q"
            ],
            name: "θ",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='40,150 65.7351112569124,220.70663706551932 260,150' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='40' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 50.29404450276495 178.28265482620773 A 30.097772612658844 30.097772612658844 0 0 0 70.09777261265884 150' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='67.73648345973031' y='173.4212948019321' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>65°</text>\n  <path d='M 56.70577947311475 195.89875187677134 A 26.4 26.4 0 0 1 90.54299644566038 211.67730528172166' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='80.0449631437197' y='194.0190606627943' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='40' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='26' y='160' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='65.7351112569124' cy='220.70663706551932' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='57.735111256912404' y='230.70663706551932' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>T</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 50^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 12.5^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 25^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 65^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q2c",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 20^\\\\circ\\\\)",
      "\\\\(\\theta = 5^\\\\circ\\\\)",
      "\\\\(\\theta = 10^\\\\circ\\\\)",
      "\\\\(\\theta = 80^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(JL\\) is a diameter (passing through the centre \\(O\\)), the angle in a semicircle is a right angle. Therefore, the angle at \\(K\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the angle in a semicircle.",
        workingOut: "Line segment JK is a diameter. The angle at the circumference subtended by the diameter is a right angle. Therefore, \\(\\angle JLK = 90^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Use the triangle angle sum theorem.",
        workingOut: "For \\(\\Delta JKL\\), the angles must add up to \\(180^\\circ\\). We know \\(\\angle JLK = 90^\\circ\\) and \\(\\angle LJK = 80^\\circ\\). Therefore, \\(90^\\circ + 80^\\circ + \\theta = 180^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\theta\\).",
        workingOut: "\\(\\theta = 180^\\circ - 170^\\circ = 10^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "J",
            on: "c1",
            angle: 90,
            name: "J",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "K",
            on: "c1",
            angle: 270,
            name: "K",
            label: {
              offset: [
                0,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "L",
            on: "c1",
            angle: 60,
            name: "L",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "segment",
            from: "J",
            to: "K"
          },
          {
            type: "polygon",
            points: [
              "J",
              "L",
              "K"
            ]
          },
          {
            type: "angle",
            points: [
              "K",
              "J",
              "L"
            ],
            name: "80°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "J",
              "K",
              "L"
            ],
            name: "θ",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='150,40 205,54.737205583711756 149.99999999999997,260' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='40' x2='149.99999999999997' y2='260' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 150 62.77607596902183 A 22.77607596902183 22.77607596902183 0 0 0 172 45.89488223348472' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='165.598346123377' y='64.3281604423442' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>80°</text>\n  <path d='M 149.99999999999997 233.6 A 26.4 26.4 0 0 1 156.83282279070653 234.4995581859686' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='154.75115339680985' y='227.91140704599331' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>J</text>\n  <circle cx='149.99999999999997' cy='260' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='149.99999999999997' y='272' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>K</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>L</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 5^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 10^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 80^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q2d",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\), \\(\\gamma\\), and \\(\\theta\\). Enter your answer as four numbers separated by commas (e.g. 10, 20, 30, 40).",
    opts: [
      "\\\\(\\alpha = 140^\\\\circ, \\beta = 70^\\\\circ, \\gamma = 20^\\\\circ, \\theta = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 80^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 140^\\\\circ, \\theta = 280^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 70^\\\\circ, \\theta = 140^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 10^\\\\circ, \\gamma = 35^\\\\circ, \\theta = 70^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(RS\\) is a diameter, \\(\\angle RTS = 90^\\circ\\).\nIn \\(\\triangle OST\\), \\(OS = OT\\) (radii), so it is isosceles. Thus \\(\\gamma = 70^\\circ\\).\nIn right \\(\\triangle RTS\\), \\(\\beta = 90^\\circ - 70^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle OST\\), \\(\\alpha = 180^\\circ - 2(70^\\circ) = 40^\\circ\\).\nAngles on a straight line: \\(\\theta = 180^\\circ - \\alpha = 140^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Analyze the first isosceles triangle \\(\\Delta OST\\).",
        workingOut: "Since OS and OT are radii, \\(\\Delta OST\\) is an isosceles triangle. Therefore, base angles are equal: \\(\\gamma = \\angle OTS = \\angle OST = 70^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the central angle \\(\\alpha\\).",
        workingOut: "The angles in \\(\\Delta OST\\) sum to \\(180^\\circ\\). Thus, \\(\\alpha = 180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Use straight line properties to find \\(\\theta\\).",
        workingOut: "RS is a straight line passing through the centre, so angles \\(\\alpha\\) and \\(\\theta\\) are supplementary. \\(\\theta = 180^\\circ - \\alpha = 180^\\circ - 40^\\circ = 140^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\) from the second isosceles triangle.",
        workingOut: "\\(\\Delta ORT\\) is also isosceles (radii OR=OT). The central angle is \\(\\theta = 140^\\circ\\), so the base angles are equal. \\\\frac{\\beta = (180^\\circ - 140^\\circ}{2} = 20^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 110,
            name: "R",
            label: {
              offset: [
                -4,
                12
              ]
            }
          },
          {
            type: "point",
            id: "S",
            on: "c1",
            angle: 290,
            name: "S",
            label: {
              offset: [
                4,
                -10
              ]
            }
          },
          {
            type: "point",
            id: "T",
            on: "c1",
            angle: 250,
            name: "T",
            label: {
              offset: [
                -4,
                -12
              ]
            }
          },
          {
            type: "segment",
            from: "R",
            to: "S"
          },
          {
            type: "polygon",
            points: [
              "R",
              "T",
              "S"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "T"
          },
          {
            type: "angle",
            points: [
              "O",
              "S",
              "T"
            ],
            name: "70°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "T",
              "O",
              "S"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "T",
              "O"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "T",
              "S"
            ],
            name: "γ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "O",
              "T"
            ],
            name: "θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='112.37778423417645,46.63381171355006 112.37778423417637,253.3661882864499 187.6222157658235,253.36618828644993' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='112.37778423417645' y1='46.63381171355006' x2='187.6222157658235' y2='253.36618828644993' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='112.37778423417637' y2='253.3661882864499' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 177.32817126305855 225.0835334602422 A 30.097772612658858 30.097772612658858 0 0 0 157.52444315316467 253.3661882864499' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='159.8857323060932' y='237.94489348451782' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>70°</text>\n  <path d='M 142.47555684683525 170.67323765728997 A 22 22 0 0 0 157.5244431531647 170.67323765728997' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='149.99999999999997' y='186' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 112.37778423417637 231.3661882864499 A 22 22 0 0 1 119.9022273873411 232.69295062915992' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='117.93452591951817' y='225.85234019005924' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 122.67182873694136 225.08353346024217 A 30.097772612658858 30.097772612658858 0 0 1 142.47555684683522 253.36618828644993' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='140.11426769390673' y='237.94489348451782' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <path d='M 142.47555684683527 129.32676234271003 A 22 22 0 0 0 142.47555684683525 170.67323765728997' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='118' y='153.99999999999997' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='112.37778423417645' cy='46.63381171355006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='108.37778423417645' y='34.63381171355006' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n  <circle cx='187.6222157658235' cy='253.36618828644993' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='191.6222157658235' y='263.3661882864499' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>S</text>\n  <circle cx='112.37778423417637' cy='253.3661882864499' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='108.37778423417637' y='265.36618828644987' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>T</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 140^\\\\circ, \\beta = 70^\\\\circ, \\gamma = 20^\\\\circ, \\theta = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 80^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 140^\\\\circ, \\theta = 280^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 70^\\\\circ, \\theta = 140^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 10^\\\\circ, \\gamma = 35^\\\\circ, \\theta = 70^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q2e",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\\\(\\alpha = 35^\\\\circ, \\beta = 90^\\\\circ\\\\)",
      "\\\\(\\alpha = 180^\\\\circ, \\beta = 70^\\\\circ\\\\)",
      "\\\\(\\alpha = 90^\\\\circ, \\beta = 35^\\\\circ\\\\)",
      "\\\\(\\alpha = 45^\\\\circ, \\beta = 17.5^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(XY\\) is a diameter, \\(\\alpha = \\angle XZY = 90^\\circ\\).\nIn isosceles \\(\\triangle OYZ\\), \\(\\angle OYZ = \\angle OZY = (180^\\circ - 70^\\circ)/2 = 55^\\circ\\).\nIn \\(\\triangle XYZ\\), \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the angle in a semicircle.",
        workingOut: "Line segment XY is a diameter. The angle in a semicircle is a right angle, so \\(\\alpha = \\angle XZY = 90^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Identify the isosceles triangle \\(\\Delta OZY\\).",
        workingOut: "OZ and OY are radii, making \\(\\Delta OZY\\) isosceles. The central angle is \\(70^\\circ\\), so the base angles are \\\\frac{(180^\\circ - 70^\\circ}{2} = 55^\\circ\\). Thus, \\(\\angle OZY = \\angle OYZ = 55^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "In the large right-angled triangle \\(\\Delta XZY\\), we know \\(\\angle XZY = 90^\\circ\\) and \\(\\angle XYZ = 55^\\circ\\). The angles must sum to \\(180^\\circ\\), so \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "X",
            on: "c1",
            angle: 210,
            name: "X",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "Y",
            on: "c1",
            angle: 30,
            name: "Y",
            label: {
              offset: [
                10,
                6
              ]
            }
          },
          {
            type: "point",
            id: "Z",
            on: "c1",
            angle: 100,
            name: "Z",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "segment",
            from: "X",
            to: "Y"
          },
          {
            type: "polygon",
            points: [
              "X",
              "Z",
              "Y"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "Z"
          },
          {
            type: "angle",
            points: [
              "Z",
              "O",
              "Y"
            ],
            name: "70°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "X",
              "Z",
              "Y"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "Z",
              "X",
              "Y"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='54.737205583711756,205 130.89870045663767,41.67114716865713 245.26279441628827,95' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='54.737205583711756' y1='205' x2='245.26279441628827' y2='95' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='130.89870045663767' y2='41.67114716865713' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 146.17974009132755 128.33422943373142 A 22 22 0 0 1 169.05255888325766 139' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='163.52378437570238' y='124.9981508148272' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>70°</text>\n  <path d='M 121.60109869834227 61.60991848346342 A 22 22 0 0 0 150.83747177144397 50.96874892695253' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='141.84334504305906' y='75.7413110338062' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 64.03480734200714 185.0612286851937 A 22 22 0 0 1 73.7897644669694 194' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='76.35609222741289' y='185.40712522207602' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>X</text>\n  <circle cx='245.26279441628827' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628827' y='89' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Y</text>\n  <circle cx='130.89870045663767' cy='41.67114716865713' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='140.89870045663767' y='31.67114716865713' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Z</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 35^\\\\circ, \\beta = 90^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 180^\\\\circ, \\beta = 70^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 90^\\\\circ, \\beta = 35^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 45^\\\\circ, \\beta = 17.5^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q2f",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 160^\\\\circ\\\\)",
      "\\\\(\\theta = 40^\\\\circ\\\\)",
      "\\\\(\\theta = 80^\\\\circ\\\\)",
      "\\\\(\\theta = 10^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(AOB\\) is a straight line, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle AOC\\), \\(\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Use straight line properties.",
        workingOut: "AB is a straight line passing through the centre O, forming an angle of \\(180^\\circ\\). Therefore, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Identify the isosceles triangle \\(\\Delta OAC\\).",
        workingOut: "OA and OC are both radii of the circle, meaning \\(\\Delta OAC\\) is an isosceles triangle. This means the two base angles are equal: \\(\\theta = \\angle OAC = \\angle OCA\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\theta\\).",
        workingOut: "The sum of angles in \\(\\Delta OAC\\) is \\(180^\\circ\\). Therefore, \\\\frac{\\theta = (180^\\circ - 20^\\circ}{2} = 80^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 170,
            name: "A",
            label: {
              offset: [
                -14,
                2
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 350,
            name: "B",
            label: {
              offset: [
                12,
                -4
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 190,
            name: "C",
            label: {
              offset: [
                -14,
                -2
              ]
            }
          },
          {
            type: "segment",
            from: "A",
            to: "B"
          },
          {
            type: "polygon",
            points: [
              "A",
              "C",
              "O"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "C"
          },
          {
            type: "angle",
            points: [
              "C",
              "O",
              "B"
            ],
            name: "160°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "A",
              "C"
            ],
            name: "θ",
            radius: 0.6,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='41.67114716865713,130.89870045663767 41.67114716865713,169.10129954336236 150,150' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='41.67114716865713' y1='130.89870045663767' x2='258.3288528313429' y2='169.10129954336244' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='169.10129954336236' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 128.33422943373142 153.82025990867245 A 22 22 0 0 0 171.66577056626858 153.82025990867248' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='186' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>160°</text>\n  <path d='M 54.67060950841827 133.19085640184116 A 13.2 13.2 0 0 1 41.67114716865713 144.09870045663766' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='52.72141797650315' y='148.06790039102708' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='41.67114716865713' cy='130.89870045663767' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='128.89870045663767' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='258.3288528313429' cy='169.10129954336244' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='270.3288528313429' y='173.10129954336244' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='41.67114716865713' cy='169.10129954336236' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='171.10129954336236' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 160^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 80^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 10^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\alpha\\).",
    opts: [
      "\\\\(\\alpha = 55^\\\\circ\\\\)",
      "\\\\(\\alpha = 13.75^\\\\circ\\\\)",
      "\\\\(\\alpha = 27.5^\\\\circ\\\\)",
      "\\\\(\\alpha = 62.5^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\alpha = 55^\\circ / 2 = 27.5^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The theorem states that the angle subtended by an arc at the centre is exactly twice the angle subtended by the same arc at any point on the remaining part of the circle.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\alpha\\).",
        workingOut: "The central angle \\(\\angle COB\\) is given as \\(55^\\circ\\). The angle at the circumference subtended by the same arc is \\(\\alpha\\). Therefore, \\(\\alpha = \\frac{55^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\alpha = 27.5^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 90,
            name: "A",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 210,
            name: "B",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 330,
            name: "C",
            label: {
              offset: [
                10,
                -8
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "segment",
            from: "O",
            to: "C"
          },
          {
            type: "angle",
            points: [
              "C",
              "O",
              "B"
            ],
            name: "55°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "C",
              "A",
              "B"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='150,40 54.737205583711756,205 245.26279441628822,205.00000000000006' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='54.737205583711756' y2='205' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='245.26279441628822' y2='205.00000000000006' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 178.57883832488648 166.5 A 33 33 0 0 1 121.42116167511352 166.5' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='197' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>55°</text>\n  <path d='M 161 59.05255888325766 A 22 22 0 0 1 139 59.052558883257646' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='76' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='245.26279441628822' cy='205.00000000000006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628822' y='213.00000000000006' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 55^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 13.75^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 27.5^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 62.5^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\gamma\\).",
    opts: [
      "\\\\(\\gamma = 88^\\\\circ\\\\)",
      "\\\\(\\gamma = 22^\\\\circ\\\\)",
      "\\\\(\\gamma = 44^\\\\circ\\\\)",
      "\\\\(\\gamma = 46^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 88^\\circ / 2 = 44^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\gamma\\).",
        workingOut: "The central angle \\(\\angle BOA\\) is \\(88^\\circ\\). The angle at the circumference subtended by the same arc is \\(\\gamma\\). Therefore, \\(\\gamma = \\frac{88^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\gamma = 44^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 140,
            name: "A",
            label: {
              offset: [
                -10,
                8
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 40,
            name: "B",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 270,
            name: "C",
            label: {
              offset: [
                0,
                -12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "B",
              "O",
              "A"
            ],
            name: "88°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "B",
              "C",
              "A"
            ],
            name: "γ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='65.73511125691243,79.29336293448065 234.26488874308757,79.29336293448068 149.99999999999997,260' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='65.73511125691243' y2='79.29336293448065' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='234.26488874308757' y2='79.29336293448068' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 166.85297774861752 135.85867258689615 A 22 22 0 0 0 133.14702225138248 135.85867258689612' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='122' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>88°</text>\n  <path d='M 159.29760175829537 240.0612286851937 A 22 22 0 0 0 140.7023982417046 240.0612286851937' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='149.99999999999997' y='232' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='65.73511125691243' cy='79.29336293448065' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='55.73511125691243' y='71.29336293448065' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='234.26488874308757' cy='79.29336293448068' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='244.26488874308757' y='69.29336293448068' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='149.99999999999997' cy='260' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='149.99999999999997' y='272' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\gamma = 88^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 22^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 44^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 46^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3c",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\alpha\\).",
    opts: [
      "\\\\(\\alpha = 380^\\\\circ\\\\)",
      "\\\\(\\alpha = 95^\\\\circ\\\\)",
      "\\\\(\\alpha = 190^\\\\circ\\\\)",
      "\\\\(\\alpha = -10^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The reflex angle at the centre is twice the angle at the circumference. \\(\\alpha = 2 \\times 95^\\circ = 190^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'. Notice that for an obtuse angle at the circumference, the corresponding central angle will be a reflex angle (greater than 180 degrees).",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\alpha\\).",
        workingOut: "The angle at the circumference is \\(95^\\circ\\). The corresponding reflex central angle is \\(\\alpha\\). Therefore, \\(\\alpha = 95^\\circ \\times 2\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\alpha = 190^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 190,
            name: "A",
            label: {
              offset: [
                -14,
                -2
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 350,
            name: "B",
            label: {
              offset: [
                12,
                -4
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 90,
            name: "C",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "A",
              "C",
              "B"
            ],
            name: "95°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "B"
            ],
            name: "α",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='41.67114716865713,169.10129954336236 258.3288528313429,169.10129954336244 150,40' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='169.10129954336236' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='258.3288528313429' y2='169.10129954336244' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 128.7880088803442 65.27946662292626 A 33 33 0 0 0 171.21199111965578 65.2794666229263' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='87' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>95°</text>\n  <path d='M 124.00107532047771 154.58431189040695 A 26.4 26.4 0 0 0 175.99892467952228 154.58431189040698' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='190.4' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='41.67114716865713' cy='169.10129954336236' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='171.10129954336236' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='258.3288528313429' cy='169.10129954336244' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='270.3288528313429' y='173.10129954336244' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 380^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 95^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 190^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = -10^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3d",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\gamma\\).",
    opts: [
      "\\\\(\\gamma = 200^\\\\circ\\\\)",
      "\\\\(\\gamma = 50^\\\\circ\\\\)",
      "\\\\(\\gamma = 100^\\\\circ\\\\)",
      "\\\\(\\gamma = 80^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the circumference is half the reflex angle at the centre. \\(\\gamma = 200^\\circ / 2 = 100^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "We must use the theorem: 'The angle at the centre is twice the angle at the circumference'. In this case, the central angle is a reflex angle.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\gamma\\).",
        workingOut: "The reflex central angle is \\(200^\\circ\\). The corresponding angle at the circumference is \\(\\gamma\\). Therefore, \\(\\gamma = \\frac{200^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\gamma = 100^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 260,
            name: "A",
            label: {
              offset: [
                -2,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 90,
            name: "B",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 30,
            name: "C",
            label: {
              offset: [
                10,
                6
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "B",
              "O",
              "A"
            ],
            name: "200°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "C",
              "B"
            ],
            name: "γ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='130.89870045663767,258.3288528313429 150,40 245.26279441628827,95' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='130.89870045663767' y2='258.3288528313429' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='150' y2='40' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 150 117 A 33 33 0 1 1 144.2696101369913 182.49865584940287' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='192.83637201794505' y='157.7476969381493' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>200°</text>\n  <path d='M 226.33477201670374 122.03201746153673 A 33 33 0 0 1 216.6839560914018 78.5' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='203.28206611013113' y='108.30690339933841' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='130.89870045663767' cy='258.3288528313429' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='128.89870045663767' y='270.3288528313429' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='245.26279441628827' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628827' y='89' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\gamma = 200^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 50^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 100^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 80^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3e",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 258^\\\\circ\\\\)",
      "\\\\(\\theta = 64.5^\\\\circ\\\\)",
      "\\\\(\\theta = 129^\\\\circ\\\\)",
      "\\\\(\\theta = 51^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the circumference is half the reflex angle at the centre. \\(\\theta = 258^\\circ / 2 = 129^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "We use the theorem relating the central angle to the inscribed angle: the central angle is twice the inscribed angle.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\theta\\).",
        workingOut: "The reflex central angle is \\(258^\\circ\\). The corresponding inscribed angle is \\(\\theta\\). Therefore, \\(\\theta = \\frac{258^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\theta = 129^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "J",
            on: "c1",
            angle: 170,
            name: "J",
            label: {
              offset: [
                -14,
                2
              ]
            }
          },
          {
            type: "point",
            id: "M",
            on: "c1",
            angle: 280,
            name: "M",
            label: {
              offset: [
                2,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "K",
            on: "c1",
            angle: 210,
            name: "K",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "J",
              "K",
              "M"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "J"
          },
          {
            type: "segment",
            from: "O",
            to: "M"
          },
          {
            type: "angle",
            points: [
              "M",
              "O",
              "J"
            ],
            name: "258°",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "J",
              "K",
              "M"
            ],
            name: "θ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='41.67114716865713,130.89870045663767 54.737205583711756,205 169.1012995433623,258.3288528313429' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='130.89870045663767' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='169.1012995433623' y2='258.3288528313429' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 154.58431189040695 175.9989246795223 A 26.4 26.4 0 1 0 124.00107532047771 145.41568810959305' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='175.73868683519032' y='128.26131316480968' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>258°</text>\n  <path d='M 49.51078221768991 175.35948018265506 A 30.097772612658844 30.097772612658844 0 0 1 82.01505127502288 217.71986834382872' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='81.60014507598808' y='188.38734155113056' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='41.67114716865713' cy='130.89870045663767' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='128.89870045663767' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>J</text>\n  <circle cx='169.1012995433623' cy='258.3288528313429' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='171.1012995433623' y='270.3288528313429' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>M</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>K</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 258^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 64.5^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 129^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 51^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3f",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\alpha\\).",
    opts: [
      "\\\\(\\alpha = 80^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 50^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the circumference is half the angle at the centre. \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\alpha\\).",
        workingOut: "The central angle is \\(80^\\circ\\). The angle at the circumference is \\(\\alpha\\). Therefore, \\(\\alpha = \\frac{80^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\alpha = 40^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 210,
            name: "A",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 310,
            name: "B",
            label: {
              offset: [
                8,
                -10
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 30,
            name: "P",
            label: {
              offset: [
                10,
                6
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "P",
              "B"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "B",
              "O",
              "A"
            ],
            name: "80°",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "P",
              "B"
            ],
            name: "α",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='54.737205583711756,205 245.26279441628827,95 220.70663706551932,234.2648887430876' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='54.737205583711756' y2='205' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='220.70663706551932' y2='234.2648887430876' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 166.96959289572465 170.22357329834102 A 26.4 26.4 0 0 1 127.13692934009083 163.2' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='143.67920633292374' y='189.84700220964436' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>80°</text>\n  <path d='M 216.6839560914018 111.49999999999999 A 33 33 0 0 0 239.53240455327958 127.49865584940287' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='220.59900765319327' y='134.22353790442662' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='220.70663706551932' cy='234.2648887430876' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='228.70663706551932' y='244.2648887430876' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='245.26279441628827' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628827' y='89' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 80^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 50^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3g",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\beta\\).",
    opts: [
      "\\\\(\\beta = 60^\\\\circ\\\\)",
      "\\\\(\\beta = 15^\\\\circ\\\\)",
      "\\\\(\\beta = 30^\\\\circ\\\\)",
      "\\\\(\\beta = 40^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the circumference is half the angle at the centre subtended by the same arc. \\(\\beta = 60^\\circ / 2 = 30^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\beta\\).",
        workingOut: "The central angle is \\(60^\\circ\\). The corresponding inscribed angle is \\(\\beta\\). Therefore, \\(\\beta = \\frac{60^\\circ}{2}\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\beta = 30^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "X",
            on: "c1",
            angle: 130,
            name: "X",
            label: {
              offset: [
                -8,
                10
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 60,
            name: "Q",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 0,
            name: "P",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "X",
              "Q",
              "P"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "X"
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "angle",
            points: [
              "P",
              "O",
              "X"
            ],
            name: "60°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "Q",
              "X"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='79.29336293448067,65.73511125691242 205,54.737205583711756 260,150' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='79.29336293448067' y2='65.73511125691242' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 183 150 A 33 33 0 0 0 128.7880088803442 124.72053337707372' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='168.17258525485008' y='115.02876515742406' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>60°</text>\n  <path d='M 216 73.78976446696942 A 22 22 0 0 1 183.0837166419816 56.65463192416023' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='190.2240443764789' y='87.12155224541485' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='79.29336293448067' cy='65.73511125691242' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='71.29336293448067' y='55.73511125691242' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>X</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\beta = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\beta = 15^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\beta = 30^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\beta = 40^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3h",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\gamma\\).",
    opts: [
      "\\\\(\\gamma = 200^\\\\circ\\\\)",
      "\\\\(\\gamma = 50^\\\\circ\\\\)",
      "\\\\(\\gamma = 100^\\\\circ\\\\)",
      "\\\\(\\gamma = 80^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 2 \\times 50^\\circ = 100^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The angle at the centre is twice the angle at the circumference.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\gamma\\).",
        workingOut: "The inscribed angle at the circumference is given as \\(50^\\circ\\). The central angle \\(\\gamma\\) must be double this value. Therefore, \\(\\gamma = 50^\\circ \\times 2\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\gamma = 100^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "K",
            on: "c1",
            angle: 160,
            name: "K",
            label: {
              offset: [
                -12,
                4
              ]
            }
          },
          {
            type: "point",
            id: "L",
            on: "c1",
            angle: 100,
            name: "L",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "point",
            id: "J",
            on: "c1",
            angle: 0,
            name: "J",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "K",
              "L",
              "J"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "K"
          },
          {
            type: "segment",
            from: "O",
            to: "J"
          },
          {
            type: "angle",
            points: [
              "J",
              "L",
              "K"
            ],
            name: "50°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "J",
              "O",
              "K"
            ],
            name: "γ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='46.63381171355009,112.37778423417643 130.89870045663767,41.67114716865713 260,150' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='46.63381171355009' y2='112.37778423417643' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 147.7516782052552 55.812474581761 A 22 22 0 0 1 114.04572270802015 55.81247458176098' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='130.89870045663767' y='77.67114716865713' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>50°</text>\n  <path d='M 183 150 A 33 33 0 0 0 118.99014351406502 138.7133352702529' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='157.466871639678' y='111.65326662047505' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='46.63381171355009' cy='112.37778423417643' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='34.63381171355009' y='108.37778423417643' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>K</text>\n  <circle cx='130.89870045663767' cy='41.67114716865713' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='140.89870045663767' y='31.67114716865713' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>L</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>J</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\gamma = 200^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 50^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 100^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\gamma = 80^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q3i",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 48^\\\\circ\\\\)",
      "\\\\(\\theta = 12^\\\\circ\\\\)",
      "\\\\(\\theta = 24^\\\\circ\\\\)",
      "\\\\(\\theta = 66^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the centre is twice the angle at the circumference. \\(\\theta = 2 \\times 12^\\circ = 24^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The angle at the centre is twice the angle at the circumference subtended by the same arc.",
        graphData: null
      },
      {
        explanation: "Apply the theorem to find \\(\\theta\\).",
        workingOut: "The angle at the circumference is given as \\(12^\\circ\\). The central angle \\(\\theta\\) is double this value. Therefore, \\(\\theta = 12^\\circ \\times 2\\).",
        graphData: null
      },
      {
        explanation: "Calculate the final value.",
        workingOut: "\\(\\theta = 24^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 210,
            name: "R",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "S",
            on: "c1",
            angle: 260,
            name: "S",
            label: {
              offset: [
                -2,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "T",
            on: "c1",
            angle: 0,
            name: "T",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "R",
              "S",
              "T"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "R"
          },
          {
            type: "segment",
            from: "O",
            to: "T"
          },
          {
            type: "angle",
            points: [
              "T",
              "S",
              "R"
            ],
            name: "12°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "T",
              "O",
              "R"
            ],
            name: "θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='54.737205583711756,205 130.89870045663767,258.3288528313429 260,150' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='54.737205583711756' y2='205' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 156.17816707956393 237.11686171168708 A 33 33 0 0 0 103.86668299510094 239.40083043175838' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='129.07369983965094' y='220.52946657413676' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>12°</text>\n  <path d='M 172 150 A 22 22 0 0 1 130.94744111674237 161' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='158.28220944328066' y='184.90962644125017' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n  <circle cx='130.89870045663767' cy='258.3288528313429' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='128.89870045663767' y='270.3288528313429' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>S</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>T</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 48^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 12^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 24^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 66^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\\\(\\alpha = 60^\\\\circ, \\beta = 120^\\\\circ\\\\)",
      "\\\\(\\alpha = 240^\\\\circ, \\beta = 120^\\\\circ\\\\)",
      "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ\\\\)",
      "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The reflex angle is \\(240^\\circ\\). The obtuse angle at the centre is \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\).\n\\(\\beta\\) is the angle at the circumference subtended by the minor arc, so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate the interior central angle \\(\\alpha\\).",
        workingOut: "The angles around a point sum to \\(360^\\circ\\). The reflex angle is \\(240^\\circ\\), so the interior angle \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the inscribed angle \\(\\beta\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. Therefore, \\(\\beta = \\alpha / 2 = \\frac{120^\\circ}{2} = 60^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 210,
            name: "A",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 330,
            name: "B",
            label: {
              offset: [
                10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 90,
            name: "P",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "P",
              "B"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "B"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "B",
              "O",
              "A"
            ],
            name: "240°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "P",
              "B"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='54.737205583711756,205 150,40 245.26279441628822,205.00000000000006' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='54.737205583711756' y2='205' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='245.26279441628822' y2='205.00000000000006' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 130.94744111674234 161 A 22 22 0 0 0 169.05255888325763 161' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='186' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 178.57883832488648 166.5 A 33 33 0 1 0 121.42116167511351 166.49999999999997' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='111' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>240°</text>\n  <path d='M 139 59.052558883257646 A 22 22 0 0 0 161 59.05255888325766' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='76' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='54.737205583711756' cy='205' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='44.737205583711756' y='213' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='245.26279441628822' cy='205.00000000000006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628822' y='213.00000000000006' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 60^\\\\circ, \\beta = 120^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 240^\\\\circ, \\beta = 120^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 60^\\\\circ\\\\)",
      "\\\\(\\theta = 15^\\\\circ\\\\)",
      "\\\\(\\theta = 30^\\\\circ\\\\)",
      "\\\\(\\theta = 40^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The obtuse angle at the centre is \\(360^\\circ - 300^\\circ = 60^\\circ\\).\nThe angle at the circumference is half the angle at the centre subtended by the same minor arc, so \\(\\theta = 60^\\circ / 2 = 30^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate the interior central angle.",
        workingOut: "The angles around the centre point O sum to \\(360^\\circ\\). The reflex angle is \\(300^\\circ\\), so the interior central angle is \\(360^\\circ - 300^\\circ = 60^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the inscribed angle \\(\\theta\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. Therefore, \\(\\theta = \\frac{60^\\circ}{2} = 30^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 180,
            name: "P",
            label: {
              offset: [
                -14,
                0
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 60,
            name: "B",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 110,
            name: "A",
            label: {
              offset: [
                -4,
                12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "P",
              "A",
              "B"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "angle",
            points: [
              "B",
              "O",
              "P"
            ],
            name: "300°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "B",
              "A",
              "P"
            ],
            name: "θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='40,150 112.37778423417645,46.63381171355006 205,54.737205583711756' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='40' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 166.5 121.42116167511352 A 33 33 0 1 1 117 150' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='171.5' y='191.23909236273084' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>300°</text>\n  <path d='M 134.29406759219484 48.551238053998546 A 22 22 0 0 1 99.75910263445343 64.65515668790788' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='125.90156860987881' y='79.63566089872288' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='40' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='26' y='160' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='112.37778423417645' cy='46.63381171355006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='108.37778423417645' y='34.63381171355006' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 15^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 30^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 40^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4c",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the value of \\(\\theta\\).",
    opts: [
      "\\\\(\\theta = 280^\\\\circ\\\\)",
      "\\\\(\\theta = 70^\\\\circ\\\\)",
      "\\\\(\\theta = 140^\\\\circ\\\\)",
      "\\\\(\\theta = 40^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the centre is twice the angle at the circumference subtended by the same arc.\n\\(\\theta = 2 \\times 70^\\circ = 140^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant circle theorem.",
        workingOut: "The angle at the centre is twice the angle at the circumference subtended by the same arc.",
        graphData: null
      },
      {
        explanation: "Calculate the central angle \\(\\theta\\).",
        workingOut: "The inscribed angle at the circumference is \\(70^\\circ\\). The central angle \\(\\theta\\) is double this value. Therefore, \\(\\theta = 70^\\circ \\times 2 = 140^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "T",
            on: "c1",
            angle: 200,
            name: "T",
            label: {
              offset: [
                -12,
                -6
              ]
            }
          },
          {
            type: "point",
            id: "S",
            on: "c1",
            angle: 60,
            name: "S",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 280,
            name: "R",
            label: {
              offset: [
                2,
                -12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "T",
              "S",
              "R"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "S"
          },
          {
            type: "segment",
            from: "O",
            to: "R"
          },
          {
            type: "angle",
            points: [
              "S",
              "T",
              "R"
            ],
            name: "70°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "S",
              "O",
              "R"
            ],
            name: "θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='46.63381171355006,187.62221576582357 205,54.737205583711756 169.1012995433623,258.3288528313429' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='169.1012995433623' y2='258.3288528313429' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 71.91327833647634 166.41022464616776 A 33 33 0 0 1 75.21265003843652 204.12221576582357' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='89.47018373149513' y='187.87451882767428' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>70°</text>\n  <path d='M 161 130.94744111674234 A 22 22 0 0 1 153.82025990867248 171.66577056626858' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='181.51384809639066' y='159.55674168534176' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='46.63381171355006' cy='187.62221576582357' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='34.63381171355006' y='193.62221576582357' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>T</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>S</text>\n  <circle cx='169.1012995433623' cy='258.3288528313429' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='171.1012995433623' y='270.3288528313429' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\theta = 280^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 70^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 140^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\theta = 40^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4d",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\\\(\\alpha = 80^\\\\circ, \\beta = 80^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ, \\beta = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 50^\\\\circ, \\beta = 50^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The angle at the circumference is half the angle at the centre: \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).\nAngles subtended by the same arc are equal, so \\(\\beta = \\alpha = 40^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate the inscribed angle \\(\\alpha\\).",
        workingOut: "The central angle \\(\\angle GOF\\) is \\(80^\\circ\\). The angle at the centre is twice the angle at the circumference. Therefore, \\(\\alpha = \\frac{80^\\circ}{2} = 40^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the inscribed angle \\(\\beta\\).",
        workingOut: "Angles subtended by the same arc at the circumference are equal. Both \\(\\alpha\\) and \\(\\beta\\) are subtended by the same arc GF. Thus, \\(\\beta = \\alpha = 40^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 110,
            name: "P",
            label: {
              offset: [
                -4,
                12
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 10,
            name: "Q",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "point",
            id: "F",
            on: "c1",
            angle: 230,
            name: "F",
            label: {
              offset: [
                -8,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "G",
            on: "c1",
            angle: 310,
            name: "G",
            label: {
              offset: [
                8,
                -10
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "F",
              "P",
              "G"
            ]
          },
          {
            type: "polygon",
            points: [
              "F",
              "Q",
              "G"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "F"
          },
          {
            type: "segment",
            from: "O",
            to: "G"
          },
          {
            type: "angle",
            points: [
              "G",
              "O",
              "F"
            ],
            name: "80°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "F",
              "P",
              "G"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "F",
              "Q",
              "G"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='79.29336293448065,234.26488874308757 112.37778423417645,46.63381171355006 220.70663706551932,234.2648887430876' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <polygon points='79.29336293448065,234.26488874308757 258.3288528313429,130.89870045663767 220.70663706551932,234.2648887430876' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='79.29336293448065' y2='234.26488874308757' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='220.70663706551932' y2='234.2648887430876' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 171.2119911196558 175.2794666229263 A 33 33 0 0 1 128.7880088803442 175.27946662292626' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='197' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>80°</text>\n  <path d='M 108.55752432550398 68.29958227981864 A 22 22 0 0 0 123.37778423417643 65.68637059680772' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='117.93452591951821' y='82.14765980994072' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 239.27629394808523 141.89870045663767 A 22 22 0 0 0 250.80440967817816 151.57193811392764' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='237.75964932137362' y='159.41212263644496' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='112.37778423417645' cy='46.63381171355006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='108.37778423417645' y='34.63381171355006' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='258.3288528313429' cy='130.89870045663767' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='268.3288528313429' y='120.89870045663767' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='79.29336293448065' cy='234.26488874308757' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='71.29336293448065' y='246.26488874308757' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>F</text>\n  <circle cx='220.70663706551932' cy='234.2648887430876' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='228.70663706551932' y='244.2648887430876' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>G</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 80^\\\\circ, \\beta = 80^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\beta = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 50^\\\\circ, \\beta = 50^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4e",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\theta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\\\(\\alpha = 40^\\\\circ, \\theta = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ, \\theta = 80^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ, \\theta = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 10^\\\\circ, \\theta = 20^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Angles subtended by the same arc are equal, so \\(\\alpha = \\angle PSR = 20^\\circ\\).\nThe angle at the centre is twice the angle at the circumference, so \\(\\theta = 2 \\times 20^\\circ = 40^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate the inscribed angle \\(\\alpha\\).",
        workingOut: "Angles subtended by the same arc at the circumference are equal. Both the \\(20^\\circ\\) angle and \\(\\alpha\\) are subtended by the same arc PR. Thus, \\(\\alpha = 20^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the central angle \\(\\theta\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. The central angle \\(\\theta\\) corresponds to the same arc PR as the \\(20^\\circ\\) angle. Therefore, \\(\\theta = 20^\\circ \\times 2 = 40^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 160,
            name: "P",
            label: {
              offset: [
                -12,
                4
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 30,
            name: "Q",
            label: {
              offset: [
                10,
                6
              ]
            }
          },
          {
            type: "point",
            id: "S",
            on: "c1",
            angle: 240,
            name: "S",
            label: {
              offset: [
                -6,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 300,
            name: "R",
            label: {
              offset: [
                6,
                -12
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "P",
              "Q",
              "R"
            ]
          },
          {
            type: "polygon",
            points: [
              "P",
              "S",
              "R"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "O",
            to: "R"
          },
          {
            type: "angle",
            points: [
              "P",
              "S",
              "R"
            ],
            name: "20°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "Q",
              "R"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "O",
              "P"
            ],
            name: "θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='46.63381171355009,112.37778423417643 245.26279441628827,95 205,245.26279441628824' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <polygon points='46.63381171355009,112.37778423417643 94.99999999999994,245.26279441628824 205,245.26279441628824' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='46.63381171355009' y2='112.37778423417643' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='205' y2='245.26279441628824' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 83.71333527025288 214.25293793035326 A 33 33 0 0 1 127.99999999999994 245.26279441628824' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='119.66378676309493' y='214.0392565118616' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>20°</text>\n  <path d='M 223.34651105826987 96.91742634044847 A 22 22 0 0 0 239.56877542403282 116.25036817835951' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='220.74937223648098' y='119.56920350996926' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 161 169.05255888325766 A 22 22 0 0 1 129.32676234271003 142.47555684683527' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='129.43079649003073' y='178.5134221798073' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='46.63381171355009' cy='112.37778423417643' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='34.63381171355009' y='108.37778423417643' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='245.26279441628827' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628827' y='89' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='94.99999999999994' cy='245.26279441628824' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='88.99999999999994' y='257.2627944162882' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>S</text>\n  <circle cx='205' cy='245.26279441628824' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='257.2627944162882' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\theta = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\theta = 80^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\theta = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 10^\\\\circ, \\theta = 20^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4f",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 30^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 100^\\\\circ\\\\)",
      "\\\\(\\alpha = 200^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 60^\\\\circ\\\\)",
      "\\\\(\\alpha = 100^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 30^\\\\circ\\\\)",
      "\\\\(\\alpha = 50^\\\\circ, \\beta = 10^\\\\circ, \\gamma = 15^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "In isosceles \\(\\triangle POQ\\), \\(\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ\\).\n\\(\\angle PRQ = 120^\\circ / 2 = 60^\\circ\\). We are given \\(\\angle ORQ = 40^\\circ\\), so \\(\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle OQR\\), \\(\\angle OQR = 40^\\circ\\), so \\(\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ\\).\nIn isosceles \\(\\triangle OPR\\), \\(\\beta = \\angle OPR = \\angle ORP = 20^\\circ\\).\n\\(\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify isosceles triangles formed by radii.",
        workingOut: "O is the centre, so OP, OQ, and OR are radii, meaning \\(\\Delta OPQ, \\Delta OQR, \\Delta ORP\\) are all isosceles triangles.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "In \\(\\Delta OQR\\), since OQ = OR, \\(\\angle ORQ = \\angle OQR = 40^\\circ\\). The sum of angles in a triangle is \\(180^\\circ\\), so \\(\\alpha = 180^\\circ - 40^\\circ - 40^\\circ = 100^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\gamma\\).",
        workingOut: "In \\(\\Delta OPQ\\), the central angle is given as \\(120^\\circ\\). Since it's isosceles, the base angle is \\\\frac{\\gamma = (180^\\circ - 120^\\circ}{2} = 30^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "The angles around the centre O sum to \\(360^\\circ\\). \\(\\angle POR = 360^\\circ - 120^\\circ - 100^\\circ = 140^\\circ\\). Since \\(\\Delta ORP\\) is isosceles, \\\\frac{\\beta = (180^\\circ - 140^\\circ}{2} = 20^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 90,
            name: "P",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 330,
            name: "Q",
            label: {
              offset: [
                10,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 230,
            name: "R",
            label: {
              offset: [
                -10,
                -8
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "P",
              "R",
              "Q"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "O",
            to: "Q"
          },
          {
            type: "segment",
            from: "O",
            to: "R"
          },
          {
            type: "angle",
            points: [
              "Q",
              "O",
              "P"
            ],
            name: "120°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "R",
              "Q"
            ],
            name: "40°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "O",
              "Q"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "P",
              "R"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "P",
              "Q"
            ],
            name: "γ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">\n  <rect width="300" height="300" fill="#ffffff" />\n  <polygon points="150,40 79.293,234.264 245.26279441628822,205.00000000000006" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" stroke-linejoin="round" />\n  <circle cx="150" cy="150" r="110" fill="none" stroke="#cbd5e1" stroke-width="1.5" />\n  <line x1="150" y1="150" x2="150" y2="40" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"  />\n  <line x1="150" y1="150" x2="245.26279441628822" y2="205.00000000000006" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"  />\n  <line x1="150" y1="150" x2="79.293" y2="234.264" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"  />\n  <path d="M 178.57883832488648 166.5 A 33 33 0 0 0 150 117" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" />\n  <text x="187.23909236273087" y="132.50000000000003" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" font-style="italic" fill="#d97706">120°</text>\n  <path d="M 93.43 217.41 A 22 22 0 0 1 100.96 230.45" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" />\n  <text x="109.6" y="216.7" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" font-style="italic" fill="#d97706">40°</text>\n  <path d="M 130.94744111674234 161 A 22 22 0 0 0 169.05255888325763 161" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" />\n  <text x="150" y="186" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" font-style="italic" fill="#d97706">α</text>\n  <path d="M 150 62 A 22 22 0 0 1 139 59.052558883257646" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" />\n  <text x="141.71779055671934" y="74.90962644125018" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" font-style="italic" fill="#d97706">β</text>\n  <path d="M 150 62 A 22 22 0 0 0 161 59.05255888325766" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" />\n  <text x="158.28220944328064" y="74.9096264412502" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" font-style="italic" fill="#d97706">γ</text>\n  <circle cx="150" cy="150" r="3" fill="#94a3b8" stroke="#ffffff" stroke-width="1.5" />\n  <text x="158" y="142" text-anchor="start" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">O</text>\n  <circle cx="150" cy="40" r="4" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n  <text x="150" y="28" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">P</text>\n  <circle cx="245.26279441628822" cy="205.00000000000006" r="4" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n  <text x="255.26279441628822" y="213.00000000000006" text-anchor="start" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">Q</text>\n  <circle cx="79.293" cy="234.264" r="4" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" />\n  <text x="69.293" y="242.264" text-anchor="end" font-family="sans-serif" font-size="13" font-weight="600" fill="#475569">R</text>\n</svg>`
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 30^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 100^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 200^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 100^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 30^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 50^\\\\circ, \\beta = 10^\\\\circ, \\gamma = 15^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4g",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 80^\\\\circ, \\beta = 200^\\\\circ, \\gamma = 100^\\\\circ\\\\)",
      "\\\\(\\alpha = 200^\\\\circ, \\beta = 400^\\\\circ, \\gamma = 160^\\\\circ\\\\)",
      "\\\\(\\alpha = 100^\\\\circ, \\beta = 200^\\\\circ, \\gamma = 80^\\\\circ\\\\)",
      "\\\\(\\alpha = 50^\\\\circ, \\beta = 100^\\\\circ, \\gamma = 40^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "The reflex angle at the centre is \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\).\n\\(\\gamma\\) subtends the minor arc \\(AB\\), so \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\).\n\\(\\alpha\\) subtends the major arc \\(AB\\), so \\(\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate the interior central angle \\(\\alpha\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. The reflex central angle is \\(360^\\circ - 160^\\circ = 200^\\circ\\). However, the angle \\(\\alpha\\) corresponds to the interior central angle. \\(\\alpha = \\frac{200^\\circ}{2} = 100^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the reflex central angle \\(\\beta\\).",
        workingOut: "The angles around a point sum to \\(360^\\circ\\). \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate the inscribed angle \\(\\gamma\\).",
        workingOut: "The angle at the circumference \\(\\gamma\\) corresponds to the central angle \\(160^\\circ\\). Therefore, \\(\\gamma = \\frac{160^\\circ}{2} = 80^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='150,40 258.3288528313429,169.10129954336244 130.89870045663767,258.3288528313429 54.73720558371174,95' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='258.3288528313429' y1='169.10129954336244' x2='54.73720558371174' y2='95' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='150' y1='150' x2='258.3288528313429' y2='169.10129954336244' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='54.73720558371174' y2='95' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 175.99892467952228 154.58431189040698 A 26.4 26.4 0 0 0 127.13692934009082 136.8' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='162.44953321705438' y='119.79518860339294' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>160°</text>\n  <path d='M 121.42116167511352 133.5 A 33 33 0 1 0 182.49865584940287 155.73038986300872' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='135.29313383699622' y='194.40678269379404' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 121.60109869834227 238.39008151653658 A 22 22 0 0 1 148.92004543099551 245.71017123161988' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='139.18090989991833' y='231.41922639009272' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 164.14132741310385 56.85297774861753 A 22 22 0 0 1 130.94744111674234 50.99999999999999' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='144.4432583146582' y='75.51384809639066' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='150' cy='40' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='28' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='258.3288528313429' cy='169.10129954336244' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='270.3288528313429' y='173.10129954336244' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='130.89870045663767' cy='258.3288528313429' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='128.89870045663767' y='270.3288528313429' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='54.73720558371174' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='42.73720558371174' y='89' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 80^\\\\circ, \\beta = 200^\\\\circ, \\gamma = 100^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 200^\\\\circ, \\beta = 400^\\\\circ, \\gamma = 160^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 100^\\\\circ, \\beta = 200^\\\\circ, \\gamma = 80^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 50^\\\\circ, \\beta = 100^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4h",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 60^\\\\circ\\\\)",
      "\\\\(\\alpha = 120^\\\\circ, \\beta = 120^\\\\circ, \\gamma = 240^\\\\circ\\\\)",
      "\\\\(\\alpha = 60^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 120^\\\\circ\\\\)",
      "\\\\(\\alpha = 30^\\\\circ, \\beta = 30^\\\\circ, \\gamma = 60^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(AC\\) and \\(BD\\) pass through \\(O\\), they are diameters. So \\(ABCD\\) is a rectangle.\n\\(\\angle ADC = 90^\\circ\\). In \\(\\triangle AOD\\), \\(OA=OD\\), so \\(\\angle ADO = 30^\\circ\\), \\(\\angle AOD = 120^\\circ\\).\n\\(\\gamma\\) and \\(\\angle AOD\\) are vertically opposite, so \\(\\gamma = 120^\\circ\\).\n\\(\\angle DAB = 90^\\circ\\). \\(\\alpha = 90^\\circ - 30^\\circ = 60^\\circ\\).\nIn right \\(\\triangle DAB\\), \\(\\beta = 90^\\circ - 30^\\circ = 60^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. The central angle is \\(120^\\circ\\), so the inscribed angle \\(\\alpha = \\frac{120^\\circ}{2} = 60^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "Angles subtended by the same arc at the circumference are equal. The angle \\(\\beta\\) and the given \\(60^\\circ\\) angle are subtended by the same arc. Thus, \\(\\beta = 60^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\gamma\\).",
        workingOut: "The angle at the centre is twice the angle at the circumference. The inscribed angle \\(60^\\circ\\) subtends the same arc as the central angle \\(\\gamma\\). Therefore, \\(\\gamma = 60^\\circ \\times 2 = 120^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 45,
            name: "A",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 315,
            name: "B",
            label: {
              offset: [
                8,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 225,
            name: "C",
            label: {
              offset: [
                -8,
                -8
              ]
            }
          },
          {
            type: "point",
            id: "D",
            on: "c1",
            angle: 135,
            name: "D",
            label: {
              offset: [
                -8,
                8
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C",
              "D"
            ]
          },
          {
            type: "segment",
            from: "A",
            to: "C"
          },
          {
            type: "segment",
            from: "B",
            to: "D"
          },
          {
            type: "angle",
            points: [
              "D",
              "A",
              "C"
            ],
            name: "30°",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "C",
              "A",
              "B"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "B",
              "D"
            ],
            name: "β",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "C",
              "O",
              "B"
            ],
            name: "γ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='227.78174593052023,72.21825406947978 227.78174593052023,227.78174593052023 72.21825406947976,227.78174593052023 72.21825406947978,72.21825406947977' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='227.78174593052023' y1='72.21825406947978' x2='72.21825406947976' y2='227.78174593052023' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='227.78174593052023' y1='227.78174593052023' x2='72.21825406947978' y2='72.21825406947977' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 201.38174593052022 72.21825406947978 A 26.4 26.4 0 0 0 209.11412690719538 90.88587309280464' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='194.1525309471094' y='90.14793100756904' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>30°</text>\n  <path d='M 212.22539674441617 87.77460325558383 A 22 22 0 0 0 227.78174593052023 94.21825406947978' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='215.53587609483733' y='105.78239910984095' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 227.78174593052023 201.38174593052022 A 26.4 26.4 0 0 0 209.11412690719538 209.11412690719538' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='213.85206899243096' y='198.1525309471094' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 134.44365081389594 165.55634918610406 A 22 22 0 0 0 165.55634918610403 165.55634918610406' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='186' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='227.78174593052023' cy='72.21825406947978' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='235.78174593052023' y='64.21825406947978' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='227.78174593052023' cy='227.78174593052023' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='235.78174593052023' y='235.78174593052023' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='72.21825406947976' cy='227.78174593052023' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='64.21825406947976' y='235.78174593052023' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n  <circle cx='72.21825406947978' cy='72.21825406947977' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='64.21825406947978' y='64.21825406947977' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>D</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 120^\\\\circ, \\beta = 120^\\\\circ, \\gamma = 240^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 60^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 120^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 30^\\\\circ, \\beta = 30^\\\\circ, \\gamma = 60^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q4i",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\(\\alpha = 85^\\circ, \\beta = 60^\\circ\\)",
      "\\(\\alpha = 60^\\circ, \\beta = 85^\\circ\\)",
      "\\(\\alpha = 95^\\circ, \\beta = 60^\\circ\\)",
      "\\(\\alpha = 85^\\circ, \\beta = 35^\\circ\\)"
    ],
    a: 0,
    answer: 0,
    hint: "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    solution: "Since \\(JL\\) and \\(KM\\) are perpendicular diameters, \\(\\triangle JOK\\) is a right isosceles triangle (\\(OJ = OK\\)).\n\\(\\alpha = \\angle OJK = (180^\\circ - 90^\\circ) / 2 = 45^\\circ\\).\nSimilarly, \\(\\beta = \\angle OKL = 45^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Use the properties of a cyclic quadrilateral.",
        workingOut: "The points \\(P, Q, R, S\\) all lie on the circle, making \\(PQRS\\) a cyclic quadrilateral. A key property is that opposite angles sum to \\(180^\\circ\\). Thus, \\(\\alpha + \\angle PQR = 180^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "We are given that \\(\\angle PQR = 95^\\circ\\). Therefore, \\(\\alpha = 180^\\circ - 95^\\circ = 85^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Identify the isosceles triangles formed by the radii.",
        workingOut: "Draw an imaginary line from \\(O\\) to \\(Q\\). Since \\(OP, OQ\\), and \\(OR\\) are all radii, \\(\\Delta OPQ\\) and \\(\\Delta OQR\\) are isosceles triangles. In \\(\\Delta OQR\\), the base angles are equal, so \\(\\angle OQR = \\angle QRO = 35^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "The total angle at \\(Q\\) is \\(\\angle PQR = 95^\\circ\\). Since \\(\\angle OQR = 35^\\circ\\), the remaining part of the angle is \\(\\angle PQO = 95^\\circ - 35^\\circ = 60^\\circ\\). Because \\(\\Delta OPQ\\) is isosceles (\\(OP = OQ\\)), the base angles are equal: \\(\\beta = \\angle OPQ = \\angle PQO = 60^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 0,
            name: "R",
            label: {
              offset: [
                8,
                0
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 110,
            name: "Q",
            label: {
              offset: [
                0,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 170,
            name: "P",
            label: {
              offset: [
                -8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "S",
            on: "c1",
            angle: 270,
            name: "S",
            label: {
              offset: [
                0,
                -10
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "P",
              "Q",
              "R",
              "S"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "P",
            dash: true
          },
          {
            type: "segment",
            from: "O",
            to: "R",
            dash: true
          },
          {
            type: "angle",
            points: [
              "P",
              "Q",
              "R"
            ],
            name: "95°",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "Q",
              "R",
              "O"
            ],
            name: "35°",
            radius: 1.8,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "S",
              "P"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "P",
              "Q"
            ],
            name: "β",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='41.67114716865713,130.89870045663767 112.37778423417645,46.63381171355006 260,150 149.99999999999997,260' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='130.89870045663767' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <path d='M 95.4081913384518 66.85738501189107 A 26.4 26.4 0 0 0 134.00339820340582 61.77622963321769' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='117.12893763098631' y='86.72240466755676' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>95°</text>\n  <path d='M 227.56157904615594 127.28637312049857 A 39.6 39.6 0 0 0 220.4 150' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='212.79101093796277' y='139.11506292453848' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>35°</text>\n  <path d='M 165.55634918610403 244.44365081389594 A 22 22 0 0 0 135.8586725868961 243.14702225138248' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='151.39582039569072' y='232.03045690938055' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 67.67007184817942 135.48301234704462 A 26.4 26.4 0 0 0 58.640740064381774 110.67512715829666' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='75.8759585652642' y='122.44916723958335' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='268' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n  <circle cx='112.37778423417645' cy='46.63381171355006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='112.37778423417645' y='38.63381171355006' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='41.67114716865713' cy='130.89870045663767' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='33.67114716865713' y='122.89870045663767' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='149.99999999999997' cy='260' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='149.99999999999997' y='270' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>S</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\(\\alpha = 85^\\circ, \\beta = 60^\\circ\\)",
        imageUrl: ""
      },
      {
        text: "\\(\\alpha = 60^\\circ, \\beta = 85^\\circ\\)",
        imageUrl: ""
      },
      {
        text: "\\(\\alpha = 95^\\circ, \\beta = 60^\\circ\\)",
        imageUrl: ""
      },
      {
        text: "\\(\\alpha = 85^\\circ, \\beta = 35^\\circ\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    opts: [
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 100^\\\\circ\\\\)",
      "\\\\(\\alpha = 200^\\\\circ, \\beta = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 100^\\\\circ, \\beta = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 50^\\\\circ, \\beta = 10^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use the angle in a semicircle and alternate interior angles from parallel lines.",
    solution: "Since \\(AB \\parallel FG\\), alternate interior angles are equal: \\(\\angle BFG = \\angle ABF = 10^\\circ\\).\nThe angle in a semicircle is a right angle, so \\(\\angle AFB = 90^\\circ\\).\nThus, \\(\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ\\).\nThe angle \\(\\beta\\) is the angle between chords \\(AG\\) and \\(FB\\). Angles subtended by arcs \\(AB\\) (\\(180^\\circ\\)) and \\(FG\\) (\\(140^\\circ\\)). The acute angle \\(\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the relevant theorems.",
        workingOut: "We need to use the theorem that the angle at the centre is twice the angle at the circumference.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "The inscribed angle at the circumference is \\(50^\\circ\\). The central angle \\(\\alpha = 50^\\circ \\times 2 = 100^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "We have another angle relationship where the inscribed angle is half the central angle. Here, \\(\\beta = \\frac{40^\\circ}{2} = 20^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        script: "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar F = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-12, -12]}});\nvar G = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, -12]}});\nboard.create('segment', [A,B], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [F,G], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [A,G], {strokeColor: 'black'});\nboard.create('segment', [F,B], {strokeColor: 'black'});\nvar M = board.create('intersection', [board.create('line',[A,G],{visible:false}), board.create('line',[F,B],{visible:false}), 0], {name: '', visible: false});\nboard.create('angle', [A,B,F], {radius: 1.5, name: '10°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,F,G], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [F,M,G], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 100^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 200^\\\\circ, \\beta = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 100^\\\\circ, \\beta = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 50^\\\\circ, \\beta = 10^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    opts: [
      "\\\\(\\alpha = 30^\\\\circ, \\beta = 60^\\\\circ\\\\)",
      "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ\\\\)",
      "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ\\\\)",
      "\\\\(\\alpha = 30^\\\\circ, \\beta = 15^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Look for an equilateral triangle formed by radii and a chord.",
    solution: "In \\(\\triangle OAP\\), \\(OA = OP\\) (radii) and \\(OA = AP\\) (given). Thus \\(\\triangle OAP\\) is equilateral, so \\(\\alpha = \\angle AOP = 60^\\circ\\).\nSince \\(AOB\\) is a straight line (diameter), \\(\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ\\).\nIn isosceles \\(\\triangle OPB\\) (\\(OB = OP\\) radii), \\(\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the geometric properties.",
        workingOut: "Examine the relationship between the central angle and the angle at the circumference.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "Based on the geometric proportions given, we deduce the central angle \\(\\alpha = 60^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "The angle at the circumference is half the central angle. Thus, \\(\\beta = \\frac{60^\\circ}{2} = 30^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 240,
            name: "A",
            label: {
              offset: [
                -6,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 60,
            name: "B",
            label: {
              offset: [
                6,
                12
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 0,
            name: "P",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "segment",
            from: "A",
            to: "B"
          },
          {
            type: "segment",
            from: "O",
            to: "A",
            id: "seg_OA"
          },
          {
            type: "segment",
            from: "A",
            to: "P",
            id: "seg_AP"
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "B",
            to: "P"
          },
          {
            type: "tick",
            segment: "seg_OA"
          },
          {
            type: "tick",
            segment: "seg_AP"
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "P"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "B",
              "P"
            ],
            name: "β",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='94.99999999999994' y1='245.26279441628824' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='94.99999999999994' y2='245.26279441628824' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='94.99999999999994' y1='245.26279441628824' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='205' y1='54.737205583711756' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='126.83012701892217' y1='200.1313972081441' x2='118.16987298107777' y2='195.1313972081441' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='174.99999999999997' y1='193.30127018922192' x2='179.99999999999997' y2='201.9615242270663' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <path d='M 139 169.05255888325763 A 22 22 0 0 0 172 150' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='165.99999999999997' y='181.71281292110206' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 188.5 83.31604390859823 A 33 33 0 0 0 221.49999999999997 83.31604390859825' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='205' y='101.73720558371176' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='94.99999999999994' cy='245.26279441628824' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='88.99999999999994' y='257.2627944162882' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='211' y='42.737205583711756' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 30^\\\\circ, \\beta = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 30^\\\\circ, \\beta = 15^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5c",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 140^\\\\circ, \\beta = 110^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 80^\\\\circ, \\beta = 220^\\\\circ, \\gamma = 280^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ, \\beta = 110^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 55^\\\\circ, \\gamma = 70^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use alternate interior angles and the angle subtended by the major arc.",
    solution: "In isosceles \\(\\triangle ORP\\) (radii \\(OR = OP\\)), \\(\\angle ORP = \\angle OPR = 20^\\circ\\). So \\(\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ\\).\nSince \\(PQ \\parallel OR\\), alternate interior angles give \\(\\angle QPR = \\angle ORP = 20^\\circ\\).\nThus \\(\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ\\).\nThe angle \\(\\beta = \\angle PQR\\) subtends the major arc \\(PR\\) (\\(360^\\circ - 140^\\circ = 220^\\circ\\)), so \\(\\beta = 220^\\circ / 2 = 110^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the isosceles triangles.",
        workingOut: "Since O is the centre, OP, OQ, and OR are radii, making \\(\\Delta OPQ, \\Delta OQR\\), and \\(\\Delta ORP\\) isosceles triangles.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\) and \\(\\beta\\).",
        workingOut: "In \\(\\Delta ORP\\), the base angle is given as \\(20^\\circ\\). Therefore the central angle \\(\\gamma = 180^\\circ - 20^\\circ - 20^\\circ = 140^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\gamma\\).",
        workingOut: "Using the properties of the cyclic quadrilateral and angles subtended by the arcs, we determine that \\(\\alpha = 40^\\circ, \\beta = 110^\\circ\\), and \\(\\gamma = 140^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 150,
            name: "P",
            label: {
              offset: [
                -12,
                6
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 250,
            name: "Q",
            label: {
              offset: [
                -4,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 290,
            name: "R",
            label: {
              offset: [
                4,
                -10
              ]
            }
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "O",
            to: "R",
            lastArrow: true
          },
          {
            type: "polygon",
            points: [
              "P",
              "Q",
              "R"
            ]
          },
          {
            type: "segment",
            from: "P",
            to: "Q",
            lastArrow: true
          },
          {
            type: "angle",
            points: [
              "O",
              "R",
              "P"
            ],
            name: "20°",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "P",
              "Q"
            ],
            name: "α",
            radius: 1.2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "Q",
              "R"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "P",
              "O",
              "R"
            ],
            name: "γ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#64748b' /></marker></defs>\n  <polygon points='54.73720558371174,95 112.37778423417637,253.3661882864499 187.6222157658235,253.36618828644993' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='54.73720558371174' y2='95' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='187.6222157658235' y2='253.36618828644993' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  marker-end='url(#arrow)'/>\n  <line x1='54.73720558371174' y1='95' x2='112.37778423417637' y2='253.3661882864499' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  marker-end='url(#arrow)'/>\n  <path d='M 176.33555103607645 222.35633180051494 A 33 33 0 0 0 166.41022464616773 228.08672166352363' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='166.12221576582354' y='220.12709592371905' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>20°</text>\n  <path d='M 77.60027624362093 108.19999999999999 A 26.4 26.4 0 0 1 63.76653736750938 119.80788518874799' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='78.13467457630176' y='126.8840177295308' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 104.85334108101166 232.69295062915992 A 22 22 0 0 1 134.37778423417637 253.36618828644993' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='130.73223019740988' y='231.15332286920216' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 130.94744111674234 139 A 22 22 0 0 0 157.5244431531647 170.67323765728997' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='125.48657782019271' y='174.56920350996927' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='54.73720558371174' cy='95' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='42.73720558371174' y='89' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='112.37778423417637' cy='253.3661882864499' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='108.37778423417637' y='265.36618828644987' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='187.6222157658235' cy='253.36618828644993' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='191.6222157658235' y='263.3661882864499' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 140^\\\\circ, \\beta = 110^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 80^\\\\circ, \\beta = 220^\\\\circ, \\gamma = 280^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\beta = 110^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 55^\\\\circ, \\gamma = 70^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5d",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 70^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 120^\\\\circ\\\\)",
      "\\\\(\\alpha = 240^\\\\circ, \\beta = 120^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
      "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 70^\\\\circ\\\\)",
      "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ, \\gamma = 35^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use the angle at the centre theorem for each of the three arcs.",
    solution: "The angle at the circumference \\(\\angle BAC = 50^\\circ\\) subtends arc \\(BC\\), so \\(\\angle BOC = 2 \\times 50^\\circ = 100^\\circ\\).\nWe are given \\(\\angle AOB = 140^\\circ\\), so \\(\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ\\).\nThe angle \\(\\beta = \\angle ABC\\) subtends arc \\(AC\\) (central angle \\(120^\\circ\\)), so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).\nThe angle \\(\\gamma = \\angle ACB\\) subtends arc \\(AB\\) (central angle \\(140^\\circ\\)), so \\(\\gamma = 140^\\circ / 2 = 70^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Analyze the isosceles triangles.",
        workingOut: "O is the centre, so OA, OB, and OC are radii. \\(\\Delta OAB, \\Delta OBC, \\Delta OCA\\) are isosceles.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "In \\(\\Delta OAB\\), central angle is \\(140^\\circ\\). Base angle \\\\frac{\\angle OAB = (180^\\circ - 140^\\circ}{2} = 20^\\circ\\). Given \\(\\angle CAB = 50^\\circ\\), so \\(\\angle OAC = 50^\\circ - 20^\\circ = 30^\\circ\\). In isosceles \\(\\Delta OAC\\), base angles are \\(30^\\circ\\), so central angle \\(\\alpha = 180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\beta\\) and \\(\\gamma\\).",
        workingOut: "The angle at the centre for arc AC is \\(120^\\circ\\). The inscribed angle \\(\\beta = \\frac{120^\\circ}{2} = 60^\\circ\\). Similarly, for arc AB, the central angle is \\(140^\\circ\\), so the inscribed angle \\(\\gamma = \\frac{140^\\circ}{2} = 70^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 190,
            name: "A",
            label: {
              offset: [
                -14,
                -2
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 50,
            name: "B",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 310,
            name: "C",
            label: {
              offset: [
                8,
                -10
              ]
            }
          },
          {
            type: "polygon",
            points: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "segment",
            from: "O",
            to: "C"
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "B"
            ],
            name: "140°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "C",
              "A",
              "B"
            ],
            name: "50°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "C"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "B",
              "C"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "C",
              "B"
            ],
            name: "γ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <polygon points='41.67114716865713,169.10129954336236 220.70663706551932,65.73511125691242 220.70663706551932,234.2648887430876' fill='#f8fafc' stroke='#cbd5e1' stroke-width='1.5' stroke-linejoin='round' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='169.10129954336236' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='220.70663706551932' y2='65.73511125691242' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='220.70663706551932' y2='234.2648887430876' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 128.33422943373142 153.82025990867245 A 22 22 0 0 1 164.14132741310388 133.14702225138248' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='134' y='126.28718707889796' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>140°</text>\n  <path d='M 62.34438482594712 176.62574269652706 A 22 22 0 0 0 60.723706051914775 158.10129954336236' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='73.549377507593' y='170.3123157754373' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>50°</text>\n  <path d='M 128.33422943373142 153.82025990867245 A 22 22 0 0 0 164.14132741310385 166.85297774861752' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='139.0553554135786' y='184.07016386514908' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 201.65407818226166 76.73511125691242 A 22 22 0 0 0 220.70663706551932 87.73511125691242' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='204.70663706551932' y='97.44792417801445' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 200.03339940822934 226.74044558992287 A 22 22 0 0 1 220.70663706551932 212.2648887430876' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='202.35219110228584' y='212.05202332583985' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='41.67114716865713' cy='169.10129954336236' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='171.10129954336236' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='220.70663706551932' cy='65.73511125691242' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='230.70663706551932' y='55.73511125691242' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='220.70663706551932' cy='234.2648887430876' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='228.70663706551932' y='244.2648887430876' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 70^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 120^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 240^\\\\circ, \\beta = 120^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 120^\\\\circ, \\beta = 60^\\\\circ, \\gamma = 70^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 60^\\\\circ, \\beta = 30^\\\\circ, \\gamma = 35^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5e",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
      "\\\\(\\alpha = 280^\\\\circ, \\beta = 160^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 140^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 70^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 10^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Use the parallel lines to find alternate interior angles.",
    solution: "Let \\(OQ\\) and \\(PR\\) be parallel. \\(\\angle POQ = 160^\\circ\\). By alternate interior angles, \\(\\angle ORP = \\angle ROQ = \\gamma\\).\nIn isosceles \\(\\triangle OPR\\), \\(\\angle ORP = \\angle OPR = \\gamma\\). In \\(\\triangle OQR\\), \\(OQ = OR\\), so \\(\\angle OQR = \\angle ORQ = \\beta\\).\nFrom the parallel lines, \\(\\angle OQP + \\angle POQ = 180^\\circ\\), etc. But more simply, if we set angles: \\(Q\\) at \\(0^\\circ\\), \\(P\\) at \\(160^\\circ\\), \\(PR\\) horizontal \\(\\implies R\\) is at \\(20^\\circ\\).\nThen \\(\\alpha = \\angle POR = 160^\\circ - 20^\\circ = 140^\\circ\\).\n\\(\\gamma = \\angle ORP = (180^\\circ - 140^\\circ)/2 = 20^\\circ\\).\n\\(\\beta = \\angle OQR = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the central angles.",
        workingOut: "We are given the central angle \\(\\angle QOP = 160^\\circ\\). The points \\(Q\\) and \\(R\\) have a central angle \\(\\angle QOR = 20^\\circ\\). Thus, the angle \\(\\alpha = \\angle ROP = 160^\\circ - 20^\\circ = 140^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Use the isosceles triangle \\(\\Delta OQR\\).",
        workingOut: "Since \\(OQ\\) and \\(OR\\) are radii, \\(\\Delta OQR\\) is isosceles. The central angle is \\(\\angle QOR = 20^\\circ\\). The base angles are equal: \\(\\beta = \\angle OQR = \\frac{180^\\circ - 20^\\circ}{2} = 80^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Use the isosceles triangle \\(\\Delta ORP\\).",
        workingOut: "Since \\(OR\\) and \\(OP\\) are radii, \\(\\Delta ORP\\) is isosceles. The central angle is \\(\\alpha = 140^\\circ\\). The base angles are equal: \\(\\gamma = \\angle ORP = \\frac{180^\\circ - 140^\\circ}{2} = 20^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 160,
            name: "P",
            label: {
              offset: [
                -12,
                4
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            on: "c1",
            angle: 0,
            name: "Q",
            label: {
              offset: [
                12,
                0
              ]
            }
          },
          {
            type: "point",
            id: "R",
            on: "c1",
            angle: 20,
            name: "R",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "segment",
            from: "O",
            to: "P"
          },
          {
            type: "segment",
            from: "O",
            to: "Q",
            lastArrow: true
          },
          {
            type: "segment",
            from: "O",
            to: "R"
          },
          {
            type: "segment",
            from: "P",
            to: "R",
            lastArrow: true
          },
          {
            type: "segment",
            from: "Q",
            to: "R"
          },
          {
            type: "angle",
            points: [
              "Q",
              "O",
              "P"
            ],
            name: "160°",
            radius: 2,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "R",
              "O",
              "P"
            ],
            name: "α",
            radius: 0.7,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "Q",
              "R"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "R",
              "P"
            ],
            name: "γ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#64748b' /></marker></defs>\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='46.63381171355009' y2='112.37778423417643' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  marker-end='url(#arrow)'/>\n  <line x1='150' y1='150' x2='253.36618828644993' y2='112.37778423417645' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='46.63381171355009' y1='112.37778423417643' x2='253.36618828644993' y2='112.37778423417645' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  marker-end='url(#arrow)'/>\n  <line x1='260' y1='150' x2='253.36618828644993' y2='112.37778423417645' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <path d='M 194 150 A 44 44 0 0 0 108.65352468542002 134.95111369367058' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='158.59558479451306' y='105.25201622589572' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>160°</text>\n  <path d='M 164.471266360103 144.7328897927847 A 15.399999999999999 15.399999999999999 0 0 0 135.528733639897 144.7328897927847' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='150' y='128.6' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 244.71896036531012 150 A 15.28103963468987 15.28103963468987 0 0 1 257.34647531457995 134.95111369367058' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='246.8308000656106' y='142.949729192154' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 222.35633180051494 123.66444896392349 A 33 33 0 0 1 220.36618828644993 112.37778423417645' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='211.01945490692498' y='123.84465587385444' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='46.63381171355009' cy='112.37778423417643' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='34.63381171355009' y='108.37778423417643' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='272' y='160' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='253.36618828644993' cy='112.37778423417645' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='263.3661882864499' y='102.37778423417645' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>R</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 140^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 280^\\\\circ, \\beta = 160^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 140^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 70^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 10^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q5f",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    opts: [
      "\\\\(\\alpha = 10^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
      "\\\\(\\alpha = 80^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 20^\\\\circ\\\\)",
      "\\\\(\\alpha = 40^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 10^\\\\circ\\\\)",
      "\\\\(\\alpha = 20^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 5^\\\\circ\\\\)"
    ],
    a: 2,
    answer: 2,
    hint: "Equal chords subtend equal angles at the centre.",
    solution: "The reflex \\(\\angle AOC = 200^\\circ\\), so the interior \\(\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ\\).\nSince \\(AB = BC\\), the arcs are equal, and \\(\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ\\).\n\\(\\alpha = \\angle OAB\\) in isosceles \\(\\triangle OAB\\), so \\(\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).\n\\(\\beta = \\angle OBC\\) in isosceles \\(\\triangle OBC\\), so \\(\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).\n\\(\\gamma = \\angle OCA\\) in isosceles \\(\\triangle OAC\\), so \\(\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ\\).",
    solutionSteps: [
      {
        explanation: "Identify the isosceles triangles.",
        workingOut: "Since O is the centre, OA, OB, and OC are radii, making all three inner triangles isosceles.",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\alpha\\) and \\(\\beta\\).",
        workingOut: "The reflex central angle is \\(200^\\circ\\), leaving the interior central angle as \\(160^\\circ\\). Using the base angles of the isosceles triangles, we calculate \\(\\alpha = 40^\\circ\\) and \\(\\beta = 40^\\circ\\).",
        graphData: null
      },
      {
        explanation: "Calculate \\(\\gamma\\).",
        workingOut: "Finally, resolving the remaining triangle's angles gives \\(\\gamma = 10^\\circ\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                8,
                8
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 170,
            name: "A",
            label: {
              offset: [
                -14,
                2
              ]
            }
          },
          {
            type: "point",
            id: "B",
            on: "c1",
            angle: 70,
            name: "B",
            label: {
              offset: [
                10,
                10
              ]
            }
          },
          {
            type: "point",
            id: "C",
            on: "c1",
            angle: 330,
            name: "C",
            label: {
              offset: [
                10,
                -8
              ]
            }
          },
          {
            type: "segment",
            from: "O",
            to: "A"
          },
          {
            type: "segment",
            from: "O",
            to: "B"
          },
          {
            type: "segment",
            from: "O",
            to: "C"
          },
          {
            type: "segment",
            from: "A",
            to: "B",
            id: "seg_AB"
          },
          {
            type: "segment",
            from: "B",
            to: "C",
            id: "seg_BC"
          },
          {
            type: "segment",
            from: "A",
            to: "C"
          },
          {
            type: "tick",
            segment: "seg_AB"
          },
          {
            type: "tick",
            segment: "seg_BC"
          },
          {
            type: "angle",
            points: [
              "C",
              "O",
              "A"
            ],
            name: "200°",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "A",
              "B"
            ],
            name: "α",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "B",
              "C"
            ],
            name: "β",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "O",
              "C",
              "A"
            ],
            name: "γ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='41.67114716865713' y2='130.89870045663767' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='187.62221576582357' y2='46.63381171355009' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='245.26279441628822' y2='205.00000000000006' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='41.67114716865713' y1='130.89870045663767' x2='187.62221576582357' y2='46.63381171355009' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='187.62221576582357' y1='46.63381171355009' x2='245.26279441628822' y2='205.00000000000006' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='41.67114716865713' y1='130.89870045663767' x2='245.26279441628822' y2='205.00000000000006' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='112.14668146724034' y1='84.43612906617169' x2='117.14668146724034' y2='93.09638310401608' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='221.14096819498545' y1='124.10680514014672' x2='211.74404198712634' y2='127.52700657340341' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <path d='M 169.05255888325763 161 A 22 22 0 1 0 128.33422943373142 146.17974009132752' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='160.9446445864214' y='123.92983613485093' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>200°</text>\n  <path d='M 63.336917734925706 134.71896036531012 A 22 22 0 0 0 60.723706051914775 119.89870045663767' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='73.18499526504779' y='129.3419587712959' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>α</text>\n  <path d='M 180.09777261265884 67.30704937084008 A 22 22 0 0 0 195.14665891898827 67.30704937084008' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='187.62221576582357' y='82.63381171355009' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>β</text>\n  <path d='M 216.68395609140174 188.50000000000006 A 33 33 0 0 0 214.25293793035326 193.71333527025297' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='206.29155957371228' y='190.82741474514995' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>γ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='158' y='142' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n  <circle cx='41.67114716865713' cy='130.89870045663767' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='27.67114716865713' y='128.89870045663767' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='187.62221576582357' cy='46.63381171355009' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='197.62221576582357' y='36.63381171355009' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='245.26279441628822' cy='205.00000000000006' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='255.26279441628822' y='213.00000000000006' text-anchor='start' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>C</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: false,
    options: [
      {
        text: "\\\\(\\alpha = 10^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 40^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 80^\\\\circ, \\beta = 80^\\\\circ, \\gamma = 20^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 40^\\\\circ, \\beta = 40^\\\\circ, \\gamma = 10^\\\\circ\\\\)",
        imageUrl: ""
      },
      {
        text: "\\\\(\\alpha = 20^\\\\circ, \\beta = 20^\\\\circ, \\gamma = 5^\\\\circ\\\\)",
        imageUrl: ""
      }
    ]
  },
  {
    id: "y10-13a-q6a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops Euclid's proof. Let \\(A\\), \\(O\\), \\(B\\) form the diameter of a circle, and \\(P\\) be a point on the circumference. Join \\(PO\\), and produce \\(AP\\) to \\(X\\).\nLet \\(\\angle A = \\alpha\\) and \\(\\angle B = \\beta\\).\n\n**i)** Prove that \\(\\angle APB = \\alpha + \\beta\\), and that \\(\\angle XPB = \\alpha + \\beta\\).\n**ii)** Hence, prove that \\(\\alpha + \\beta = 90^\\circ\\).",
    answer: "",
    hint: "Use the properties of isosceles triangles formed by radii, and the exterior angle theorem.",
    solution: "",
    solutionSteps: [
      {
        explanation: "Define the variables and draw radii.",
        workingOut: "Let \\(\\angle AOP = a\\) and \\(\\angle BOP = b\\). Draw the line segment OP which is a radius. Now we have two triangles: \\(\\Delta OAP\\) and \\(\\Delta OBP\\).",
        graphData: null
      },
      {
        explanation: "Identify isosceles triangles.",
        workingOut: "Since OA, OB, and OP are all radii of the same circle, their lengths are equal. Therefore, \\(\\Delta OAP\\) and \\(\\Delta OBP\\) are isosceles triangles.",
        graphData: null
      },
      {
        explanation: "Use the exterior angle theorem.",
        workingOut: "In an isosceles triangle, the base angles are equal. So in \\(\\Delta OAP\\), \\(\\angle OAP = \\angle OPA\\). The exterior angle to \\(\\Delta OAP\\) at O is equal to the sum of the two opposite interior angles. So, the exterior angle = \\(2 \\times \\angle OAP\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        script: "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar X = board.create('point', [8*Math.cos(60*Math.PI/180), 8*Math.sin(60*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,X], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'red', dash: 2});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    isNew: true,
    requiresManualGrading: true
  },
  {
    id: "y10-13a-q6b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops an alternate proof.\nJoin \\(PO\\) and produce it to a point \\(M\\).\nLet \\(\\angle PAB = \\alpha\\) and \\(\\angle PBA = \\beta\\).\n\n**i)** Prove that \\(\\angle AOM = 2\\alpha\\) and \\(\\angle BOM = 2\\beta\\).\n**ii)** Hence, prove that \\(2\\alpha + 2\\beta = 180^\\circ\\).\n**iii)** Deduce that \\(\\alpha + \\beta = 90^\\circ\\) (and therefore \\(\\angle APB = 90^\\circ\\)).",
    answer: "",
    hint: "Use the exterior angle theorem for triangles AOP and BOP.",
    solution: "",
    solutionSteps: [
      {
        explanation: "Write the equation for the first triangle.",
        workingOut: "From the previous step, the exterior angle of \\(\\Delta OAP\\) is \\(a = 2 \\times \\angle OAP\\).",
        graphData: null
      },
      {
        explanation: "Write the equation for the second triangle.",
        workingOut: "Similarly, for \\(\\Delta OBP\\), the exterior angle at O is \\(b = 2 \\times \\angle OBP\\).",
        graphData: null
      },
      {
        explanation: "Combine the equations to form the proof.",
        workingOut: "The total angle at the centre is \\(\\angle AOB = a + b\\). Substituting our equations, \\(\\angle AOB = 2 \\times \\angle OAP + 2 \\times \\angle OBP = 2(\\angle OAP + \\angle OBP)\\). Since \\(\\angle APB = \\angle OAP + \\angle OBP\\), we have \\(\\angle AOB = 2 \\times \\angle APB\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        script: "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar M = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,P], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [P,M], {strokeColor: 'red', dash: 2});\nboard.create('text', [-2.5, -4.3, 'M'], {fontSize: 14});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    isNew: true,
    requiresManualGrading: true
  },
  {
    id: "y10-13a-q7a",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies inside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).\n\n**i)** Prove that \\(\\angle APB = \\alpha + \\beta\\).\n**ii)** Prove that \\(\\angle AOB = 2\\alpha + 2\\beta = 2\\angle APB\\).",
    answer: "",
    hint: "Use isosceles triangles and the exterior angle theorem for each half of the angle.",
    solution: "",
    solutionSteps: [
      {
        explanation: "Define the exterior angles.",
        workingOut: "Let \\(\\angle AOP = a\\) and \\(\\angle BOP = b\\). The line PQ passes through the centre O. We consider the triangles \\(\\Delta OAP\\) and \\(\\Delta OBP\\).",
        graphData: null
      },
      {
        explanation: "Identify isosceles properties.",
        workingOut: "Since OA, OB, and OP are radii, \\(\\Delta OAP\\) and \\(\\Delta OBP\\) are isosceles triangles.",
        graphData: null
      },
      {
        explanation: "Relate the angles.",
        workingOut: "Using the exterior angle theorem on \\(\\Delta OAP\\), the exterior angle at O (which is on the straight line PQ) relates to the interior angles. Since the problem asks to prove for the case where the centre is outside the angle, we subtract the angles instead of adding them.",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        script: "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [0,5], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(320*Math.PI/180), 5*Math.sin(320*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [0,-5], {name: '', size: 0, visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.2, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    isNew: true,
    requiresManualGrading: true
  },
  {
    id: "y10-13a-q7b",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies outside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).\n\n**i)** Prove that \\(\\angle APB = \\beta - \\alpha\\).\n**ii)** Prove that \\(\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB\\).",
    answer: "",
    hint: "Use isosceles triangles and the exterior angle theorem, but this time subtract the angles.",
    solution: "",
    solutionSteps: [
      {
        explanation: "Write the subtraction equation.",
        workingOut: "In this configuration, the angle at the centre is \\(\\angle AOB = a - b\\).",
        graphData: null
      },
      {
        explanation: "Substitute the exterior angle relations.",
        workingOut: "We know \\(a = 2 \\times \\angle OAP\\) and \\(b = 2 \\times \\angle OBP\\).",
        graphData: null
      },
      {
        explanation: "Complete the proof.",
        workingOut: "Substitute these into the first equation: \\(\\angle AOB = 2 \\times \\angle OAP - 2 \\times \\angle OBP = 2(\\angle OAP - \\angle OBP)\\). Since \\(\\angle APB = \\angle OAP - \\angle OBP\\) in this geometry, we prove \\(\\angle AOB = 2 \\times \\angle APB\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        script: "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    isNew: true,
    requiresManualGrading: true
  },
  {
    id: "y10-13a-q8",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet \\(\\triangle ABP\\) be right-angled at \\(P\\), and let \\(O\\) be the midpoint of the hypotenuse \\(AB\\). Draw \\(PO\\) and produce it to \\(Q\\) so that \\(PO = OQ\\). Draw \\(AQ\\) and \\(BQ\\).\n\n**a)** Explain why \\(APBQ\\) is a parallelogram.\n**b)** Hence, explain why \\(APBQ\\) is a rectangle.\n**c)** Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\).",
    answer: "",
    hint: "Use the properties of quadrilaterals based on their diagonals.",
    solution: "",
    solutionSteps: [
      {
        explanation: "Draw a diameter.",
        workingOut: "Draw a straight line from P passing through the centre O to the other side of the circle, and call the intersection point Q.",
        graphData: null
      },
      {
        explanation: "Apply the angle at the centre theorem.",
        workingOut: "By the theorem proved in earlier questions, the angle at the centre is twice the angle at the circumference. Therefore, \\(\\angle AOQ = 2 \\times \\angle APQ\\) and \\(\\angle BOQ = 2 \\times \\angle BPQ\\).",
        graphData: null
      },
      {
        explanation: "Sum the angles.",
        workingOut: "Adding these together gives: \\(\\angle AOQ + \\angle BOQ = 2 \\times \\angle APQ + 2 \\times \\angle BPQ\\). This simplifies to \\(\\angle AOB = 2(\\angle APQ + \\angle BPQ) = 2 \\times \\angle APB\\).",
        graphData: null
      },
      {
        explanation: "Extend to point C.",
        workingOut: "By applying the exact same logic to point C on the same arc, \\(\\angle AOB = 2 \\times \\angle ACB\\). Since both \\(\\angle APB\\) and \\(\\angle ACB\\) are equal to half of \\(\\angle AOB\\), they must be equal to each other: \\(\\angle APB = \\angle ACB\\).",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -1,
          6,
          6,
          -1
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "point",
            id: "P",
            coords: [
              0,
              0
            ],
            name: "P",
            color: "#64748b",
            label: {
              offset: [
                0,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "A",
            coords: [
              5,
              0
            ],
            name: "A",
            color: "#64748b",
            label: {
              offset: [
                0,
                -12
              ]
            }
          },
          {
            type: "point",
            id: "B",
            coords: [
              0,
              4
            ],
            name: "B",
            color: "#64748b",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "Q",
            coords: [
              5,
              4
            ],
            name: "Q",
            color: "#64748b",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "point",
            id: "O",
            coords: [
              2.5,
              2
            ],
            name: "O",
            color: "red",
            label: {
              offset: [
                0,
                12
              ]
            }
          },
          {
            type: "segment",
            from: "A",
            to: "B"
          },
          {
            type: "segment",
            from: "P",
            to: "Q",
            dash: 2,
            color: "red"
          },
          {
            type: "segment",
            from: "P",
            to: "A"
          },
          {
            type: "segment",
            from: "P",
            to: "B"
          },
          {
            type: "segment",
            from: "A",
            to: "Q",
            dash: 2,
            color: "red"
          },
          {
            type: "segment",
            from: "B",
            to: "Q",
            dash: 2,
            color: "red"
          },
          {
            type: "rightangle",
            points: [
              "B",
              "P",
              "A"
            ],
            size: 0.3
          },
          {
            type: "segment",
            id: "ao",
            from: "A",
            to: "O",
            color: "none"
          },
          {
            type: "segment",
            id: "ob",
            from: "O",
            to: "B",
            color: "none"
          },
          {
            type: "segment",
            id: "po",
            from: "P",
            to: "O",
            color: "none"
          },
          {
            type: "segment",
            id: "oq",
            from: "O",
            to: "Q",
            color: "none"
          },
          {
            type: "tick",
            segment: "ao"
          },
          {
            type: "tick",
            segment: "ob"
          },
          {
            type: "tick",
            segment: "po",
            count: 2
          },
          {
            type: "tick",
            segment: "oq",
            count: 2
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <line x1='260' y1='150' x2='150' y2='62' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='260' y2='62' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='150' y1='150' x2='150' y2='62' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  />\n  <line x1='260' y1='150' x2='260' y2='62' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='150' y1='62' x2='260' y2='62' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <path d='M 150 140 L 160 140 L 160 150' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linejoin='miter' />\n  <line x1='229.3765247622279' y1='131.90434404721515' x2='235.6234752377721' y2='124.09565595278485' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='174.3765247622279' y1='87.90434404721515' x2='180.6234752377721' y2='80.09565595278485' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='172.03391833389878' y1='125.96974109544813' x2='178.280868809443' y2='133.7784291898784' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='176.719131190557' y1='122.22157081012158' x2='182.96608166610122' y2='130.03025890455189' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='227.03391833389878' y1='81.96974109544813' x2='233.280868809443' y2='89.77842918987842' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <line x1='231.719131190557' y1='78.22157081012158' x2='237.96608166610122' y2='86.03025890455187' stroke='#ef4444' stroke-width='1.5' stroke-linecap='round' />\n  <circle cx='150' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='162' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='260' y='162' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A</text>\n  <circle cx='150' cy='62' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='150' y='50' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>B</text>\n  <circle cx='260' cy='62' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='260' y='50' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>Q</text>\n  <circle cx='205' cy='106' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='205' y='94' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: true
  },
  {
    id: "y10-13a-q9",
    topicId: "y10-13a",
    c: "13A",
    t: "Angles at the centre and the circumference",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "*(An application of the angle at the centre and circumference theorem)*\n\nA horse is travelling around a circular track at a constant speed. A punter standing at the very edge of the track is following him with binoculars. Explain why the punter's binoculars are rotating at a constant rate.",
    answer: "",
    hint: "Relate the horse's movement to the angle at the centre, and then use the theorem to relate it to the angle at the circumference.",
    solution: "",
    solutionSteps: [
      {
        explanation: "State the angle in a semicircle theorem.",
        workingOut: "The theorem states that any angle subtended at the circumference by a diameter is a right angle (\\(90^\\circ\\)).",
        graphData: null
      },
      {
        explanation: "Relate it to the angle at the centre.",
        workingOut: "A diameter is a straight line, which means it forms a straight angle of \\(180^\\circ\\) at the centre of the circle.",
        graphData: null
      },
      {
        explanation: "Complete the proof.",
        workingOut: "Using the theorem that the angle at the centre is twice the angle at the circumference: Angle at circumference = Angle at centre / 2 = \\(\\frac{180^\\circ}{2} = 90^\\circ\\). Thus, the angle in a semicircle is a right angle.",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [
          -6,
          6,
          6,
          -6
        ],
        boardOptions: {
          axis: false,
          keepaspectratio: true,
          showNavigation: false
        },
        elements: [
          {
            type: "point",
            id: "O",
            coords: [
              0,
              0
            ],
            name: "O (Centre)",
            color: "red",
            label: {
              offset: [
                -25,
                -20
              ]
            }
          },
          {
            type: "circle",
            id: "c1",
            center: "O",
            radius: 5
          },
          {
            type: "point",
            id: "P",
            on: "c1",
            angle: 270,
            name: "P (Punter)",
            color: "#64748b",
            label: {
              offset: [
                0,
                -15
              ]
            }
          },
          {
            type: "point",
            id: "A",
            on: "c1",
            angle: 0,
            name: "A (Start)",
            color: "#64748b",
            label: {
              offset: [
                -15,
                -15
              ]
            }
          },
          {
            type: "point",
            id: "H",
            on: "c1",
            angle: 60,
            name: "H (Horse)",
            color: "#10b981",
            label: {
              offset: [
                0,
                15
              ]
            }
          },
          {
            type: "segment",
            from: "O",
            to: "A",
            dash: 2,
            color: "#9ca3af"
          },
          {
            type: "segment",
            from: "O",
            to: "H",
            dash: 2,
            color: "#9ca3af"
          },
          {
            type: "segment",
            from: "P",
            to: "A",
            dash: 2,
            color: "#9ca3af"
          },
          {
            type: "segment",
            from: "P",
            to: "H",
            lastArrow: true
          },
          {
            type: "angle",
            points: [
              "A",
              "O",
              "H"
            ],
            name: "2θ",
            radius: 1,
            label: {
              offset: [
                0,
                0
              ]
            }
          },
          {
            type: "angle",
            points: [
              "A",
              "P",
              "H"
            ],
            name: "θ",
            radius: 1.5,
            label: {
              offset: [
                0,
                0
              ]
            }
          }
        ]
      },
      svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\n  <rect width='300' height='300' fill='#ffffff' />\n  <defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#64748b' /></marker></defs>\n  <circle cx='150' cy='150' r='110' fill='none' stroke='#cbd5e1' stroke-width='1.5' />\n  <line x1='150' y1='150' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='150' y1='150' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='149.99999999999997' y1='260' x2='260' y2='150' stroke='#64748b' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='5 5' />\n  <line x1='149.99999999999997' y1='260' x2='205' y2='54.737205583711756' stroke='#64748b' stroke-width='1.5' stroke-linecap='round'  marker-end='url(#arrow)'/>\n  <path d='M 172 150 A 22 22 0 0 0 161 130.94744111674234' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='177.71281292110203' y='138' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>2θ</text>\n  <path d='M 173.33452377915603 236.66547622084394 A 33 33 0 0 0 158.54102848838318 228.12444773246074' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-linecap='round' />\n  <text x='171.49999999999997' y='226.76090763726916' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='500' font-style='italic' fill='#d97706'>θ</text>\n  <circle cx='150' cy='150' r='3' fill='#94a3b8' stroke='#ffffff' stroke-width='1.5' />\n  <text x='125' y='170' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>O (Centre)</text>\n  <circle cx='149.99999999999997' cy='260' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='149.99999999999997' y='275' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>P (Punter)</text>\n  <circle cx='260' cy='150' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='245' y='165' text-anchor='end' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>A (Start)</text>\n  <circle cx='205' cy='54.737205583711756' r='4' fill='#3b82f6' stroke='#ffffff' stroke-width='1.5' />\n  <text x='205' y='39.737205583711756' text-anchor='middle' font-family='sans-serif' font-size='13' font-weight='600' fill='#475569'>H (Horse)</text>\n</svg>"
    },
    isNew: true,
    requiresManualGrading: true
  }
];
