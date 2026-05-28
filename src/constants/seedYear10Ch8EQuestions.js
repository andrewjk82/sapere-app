export const Y10_CH8E_QUESTIONS = [
  {
    id: "y10-8e-q1a-a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the value of the pronumeral \\(a\\) in the given diagram.",
    a: "6",
    solution: "By similarity between the smaller top triangle and the larger triangle:\n\\(\\frac{3}{3 + a} = \\frac{2}{6}\\)\n\\(\\frac{3}{3 + a} = \\frac{1}{3}\\)\n\\(3 + a = 9\\)\n\\(a = 6\\)",
    t: "Revision",
    hint: "Identify similar triangles and set up a ratio for corresponding sides.",
    solutionSteps: [
      {
        explanation: "Identify the scale factor from the parallel bases of length 2 and 6.",
        workingOut: "\\text{Scale Factor} = \\frac{6}{2} = 3"
      },
      {
        explanation: "Set up the ratio for the right-hand sides of the triangles.",
        workingOut: "\\frac{3 + a}{3} = 3"
      },
      {
        explanation: "Solve for \\(a\\).",
        workingOut: "3 + a = 9 \\implies a = 6"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        showPointLabels: false,
        points: {
          "A": [2, 6],
          "B": [0, 0],
          "C": [6, 0],
          "P": [1.33, 4],
          "Q": [3.33, 4]
        },
        segments: [
          { from: "A", to: "P" },
          { from: "P", to: "B" },
          { from: "A", to: "Q" },
          { from: "Q", to: "C" },
          { from: "P", to: "Q", marks: 1 },
          { from: "B", to: "C", marks: 1 }
        ],
        sideLabels: [
          { between: ["A", "P"], text: "4" },
          { between: ["P", "B"], text: "b" },
          { between: ["A", "Q"], text: "3" },
          { between: ["Q", "C"], text: "a" },
          { between: ["P", "Q"], text: "2" },
          { between: ["B", "C"], text: "6" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q1a-b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the value of the pronumeral \\(b\\) in the given diagram.",
    a: "8",
    solution: "By similarity between the smaller top triangle and the larger triangle:\n\\(\\frac{4}{4 + b} = \\frac{2}{6}\\)\n\\(\\frac{4}{4 + b} = \\frac{1}{3}\\)\n\\(4 + b = 12\\)\n\\(b = 8\\)",
    t: "Revision",
    hint: "Use the same similarity ratio (1:3) as in the previous part to set up the equation for the left side.",
    solutionSteps: [
      {
        explanation: "Using the scale factor of 3 between the triangles.",
        workingOut: "\\frac{4 + b}{4} = 3"
      },
      {
        explanation: "Solve for \\(b\\).",
        workingOut: "4 + b = 12 \\implies b = 8"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        showPointLabels: false,
        points: {
          "A": [2, 6],
          "B": [0, 0],
          "C": [6, 0],
          "P": [1.33, 4],
          "Q": [3.33, 4]
        },
        segments: [
          { from: "A", to: "P" },
          { from: "P", to: "B" },
          { from: "A", to: "Q" },
          { from: "Q", to: "C" },
          { from: "P", to: "Q", marks: 1 },
          { from: "B", to: "C", marks: 1 }
        ],
        sideLabels: [
          { between: ["A", "P"], text: "4" },
          { between: ["P", "B"], text: "b" },
          { between: ["A", "Q"], text: "3" },
          { between: ["Q", "C"], text: "a" },
          { between: ["P", "Q"], text: "2" },
          { between: ["B", "C"], text: "6" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q1b-a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the value of the pronumeral \\(x\\) in the given diagram.",
    a: "3",
    solution: "By similarity, the smaller top triangle is similar to the larger triangle with a ratio of sides:\n\\(\\frac{x}{x + 2} = \\frac{3}{5}\\)\n\\(5x = 3(x + 2)\\)\n\\(5x = 3x + 6\\)\n\\(2x = 6\\)\n\\(x = 3\\)",
    t: "Revision",
    hint: "Set up a similarity ratio with the parallel sides: \\(\\frac{\\text{small}}{\\text{large}} = \\frac{3}{5}\\).",
    solutionSteps: [
      {
        explanation: "Set up the ratio comparing the right-hand sides.",
        workingOut: "\\frac{x}{x + 2} = \\frac{3}{5}"
      },
      {
        explanation: "Cross-multiply and expand the brackets.",
        workingOut: "5x = 3x + 6"
      },
      {
        explanation: "Solve for \\(x\\).",
        workingOut: "2x = 6 \\implies x = 3"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        showPointLabels: false,
        points: {
          "A": [2, 6],
          "B": [0, 0],
          "C": [6, 0],
          "P": [0.8, 2.4],
          "Q": [4.4, 2.4]
        },
        segments: [
          { from: "A", to: "P" },
          { from: "P", to: "B" },
          { from: "A", to: "Q" },
          { from: "Q", to: "C" },
          { from: "P", to: "Q", marks: 1 },
          { from: "B", to: "C", marks: 1 }
        ],
        sideLabels: [
          { between: ["A", "P"], text: "y" },
          { between: ["P", "B"], text: "4" },
          { between: ["A", "Q"], text: "x" },
          { between: ["Q", "C"], text: "2" },
          { between: ["P", "Q"], text: "3" },
          { between: ["B", "C"], text: "5" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q1b-b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the value of the pronumeral \\(y\\) in the given diagram.",
    a: "6",
    solution: "By similarity, the smaller top triangle is similar to the larger triangle with a ratio of sides:\n\\(\\frac{y}{y + 4} = \\frac{3}{5}\\)\n\\(5y = 3(y + 4)\\)\n\\(5y = 3y + 12\\)\n\\(2y = 12\\)\n\\(y = 6\\)",
    t: "Revision",
    hint: "Use the similarity ratio \\(\\frac{3}{5}\\) and apply it to the left side: \\(\\frac{y}{y + 4}\\).",
    solutionSteps: [
      {
        explanation: "Set up the ratio comparing the left-hand sides.",
        workingOut: "\\frac{y}{y + 4} = \\frac{3}{5}"
      },
      {
        explanation: "Cross-multiply and expand the brackets.",
        workingOut: "5y = 3y + 12"
      },
      {
        explanation: "Solve for \\(y\\).",
        workingOut: "2y = 12 \\implies y = 6"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        showPointLabels: false,
        points: {
          "A": [2, 6],
          "B": [0, 0],
          "C": [6, 0],
          "P": [0.8, 2.4],
          "Q": [4.4, 2.4]
        },
        segments: [
          { from: "A", to: "P" },
          { from: "P", to: "B" },
          { from: "A", to: "Q" },
          { from: "Q", to: "C" },
          { from: "P", to: "Q", marks: 1 },
          { from: "B", to: "C", marks: 1 }
        ],
        sideLabels: [
          { between: ["A", "P"], text: "y" },
          { between: ["P", "B"], text: "4" },
          { between: ["A", "Q"], text: "x" },
          { between: ["Q", "C"], text: "2" },
          { between: ["P", "Q"], text: "3" },
          { between: ["B", "C"], text: "5" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q2",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "A vertical stick of length \\(40\\text{ cm}\\) casts a shadow of length \\(8\\text{ cm}\\). Find the length of the shadow (in \\(\\text{cm}\\)) cast by a \\(1.5\\text{ metre}\\) ruler placed in the same position at the same time of day.",
    a: "30",
    solution: "Express all lengths in the same units. A \\(1.5\\text{ m}\\) ruler has a length of \\(150\\text{ cm}\\).\nUsing similarity:\n\\(\\frac{\\text{Shadow}}{\\text{Height}} = \\frac{8}{40} = \\frac{1}{5}\\)\nFor the ruler:\n\\(\\frac{\\text{Shadow}}{150} = \\frac{1}{5}\\)\n\\(\\text{Shadow} = 150 \\times \\frac{1}{5} = 30\\text{ cm}\\)",
    t: "Revision",
    hint: "Convert 1.5 m to cm first, then set up a ratio: \\(\\frac{\\text{shadow}}{\\text{height}}\\).",
    solutionSteps: [
      {
        explanation: "Convert the ruler length from metres to centimetres.",
        workingOut: "1.5\\text{ m} = 150\\text{ cm}"
      },
      {
        explanation: "Set up the ratio of shadow to height for both objects.",
        workingOut: "\\frac{\\text{Shadow}}{150} = \\frac{8}{40}"
      },
      {
        explanation: "Solve for the shadow length.",
        workingOut: "\\text{Shadow} = 150 \\times 0.2 = 30\\text{ cm}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-8e-q3",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "In the diagrams shown below, solve the geometric similarity and congruence problems.",
    a: "Check sub-questions",
    solution: "Please view the sub-questions for detailed worked solutions.",
    t: "Revision",
    hint: "Use AAS/RHS tests for congruence and AA/AAA tests for similarity.",
    solutionSteps: [
      {
        explanation: "Follow the steps in each sub-question.",
        workingOut: ""
      }
    ],
    subQuestions: [
      {
        id: "y10-8e-q3a-i",
        type: "teacher_review",
        question: "a) i) In the figure shown, prove that \\(\\Delta APQ\\) is similar to \\(\\Delta ABC\\).",
        solution: "In \\(\\Delta APQ\\) and \\(\\Delta ABC\\):\n- \\(\\angle A\\) is common.\n- \\(\\angle APQ = \\angle ABC\\) (corresponding angles, since \\(PQ \\parallel BC\\)).\n- \\(\\angle AQP = \\angle ACB\\) (corresponding angles, since \\(PQ \\parallel BC\\)).\nTherefore, \\(\\Delta APQ \\sim \\Delta ABC\\) by the AAA similarity test.",
        solutionSteps: [
          {
            explanation: "Identify the common angle at A.",
            workingOut: "\\angle A \\text{ is common}"
          },
          {
            explanation: "Identify equal corresponding angles due to parallel lines.",
            workingOut: "\\angle APQ = \\angle ABC \\text{ and } \\angle AQP = \\angle ACB \\text{ (since } PQ \\parallel BC\\text{)}"
          },
          {
            explanation: "Conclude similarity via AAA.",
            workingOut: "\\Delta APQ \\sim \\Delta ABC \\text{ (AAA)}"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "A": [2, 6],
              "B": [0, 0],
              "C": [6, 0],
              "P": [1.33, 4],
              "Q": [3.33, 4]
            },
            segments: [
              { from: "A", to: "P" },
              { from: "P", to: "B" },
              { from: "A", to: "Q" },
              { from: "Q", to: "C" },
              { from: "P", to: "Q", marks: 1 },
              { from: "B", to: "C", marks: 1 }
            ],
            sideLabels: [
              { between: ["A", "P"], text: "3 cm" },
              { between: ["P", "B"], text: "6 cm" },
              { between: ["P", "Q"], text: "2 cm" },
              { between: ["B", "C"], text: "x cm" }
            ]
          }
        }
      },
      {
        id: "y10-8e-q3a-ii",
        type: "short_answer",
        question: "a) ii) Find the value of \\(x\\).",
        a: "6",
        solution: "Since \\(\\Delta APQ \\sim \\Delta ABC\\), the ratio of corresponding sides is equal:\n\\(\\frac{PQ}{BC} = \\frac{AP}{AB}\\)\n\\(\\frac{2}{x} = \\frac{3}{3 + 6} = \\frac{3}{9} = \\frac{1}{3}\\)\n\\(x = 6\\)",
        solutionSteps: [
          {
            explanation: "Determine the total length of AB.",
            workingOut: "AB = AP + PB = 3 + 6 = 9\\text{ cm}"
          },
          {
            explanation: "Set up the similarity ratio.",
            workingOut: "\\frac{PQ}{BC} = \\frac{AP}{AB} \\implies \\frac{2}{x} = \\frac{3}{9}"
          },
          {
            explanation: "Solve for \\(x\\).",
            workingOut: "x = 2 \\times 3 = 6"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "A": [2, 6],
              "B": [0, 0],
              "C": [6, 0],
              "P": [1.33, 4],
              "Q": [3.33, 4]
            },
            segments: [
              { from: "A", to: "P" },
              { from: "P", to: "B" },
              { from: "A", to: "Q" },
              { from: "Q", to: "C" },
              { from: "P", to: "Q", marks: 1 },
              { from: "B", to: "C", marks: 1 }
            ],
            sideLabels: [
              { between: ["A", "P"], text: "3 cm" },
              { between: ["P", "B"], text: "6 cm" },
              { between: ["P", "Q"], text: "2 cm" },
              { between: ["B", "C"], text: "x cm" }
            ]
          }
        }
      },
      {
        id: "y10-8e-q3b",
        type: "teacher_review",
        question: "b) In the figure shown, \\(PM \\perp RS\\) and \\(PR = PS\\). Prove that \\(\\Delta PMR \\equiv \\Delta PMS\\).",
        solution: "In right-angled triangles \\(PMR\\) and \\(PMS\\):\n- Hypotenuse \\(PR = PS\\) (given equal sides).\n- Side \\(PM\\) is common.\n- \\(\\angle PMR = \\angle PMS = 90^\\circ\\) (since \\(PM \\perp RS\\)).\nTherefore, \\(\\Delta PMR \\equiv \\Delta PMS\\) by the RHS congruence test.",
        solutionSteps: [
          {
            explanation: "Identify the equal hypotenuses.",
            workingOut: "PR = PS \\text{ (hypotenuse, given)}"
          },
          {
            explanation: "Identify the shared vertical side.",
            workingOut: "PM \\text{ is common}"
          },
          {
            explanation: "Note the right angles.",
            workingOut: "\\angle PMR = \\angle PMS = 90^\\circ \\text{ (since } PM \\perp RS\\text{)}"
          },
          {
            explanation: "Apply RHS congruence rule.",
            workingOut: "\\Delta PMR \\equiv \\Delta PMS \\text{ (RHS)}"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "P": [3, 5],
              "R": [1, 0],
              "S": [5, 0],
              "M": [3, 0]
            },
            segments: [
              { from: "P", to: "R", ticks: 1 },
              { from: "P", to: "S", ticks: 1 },
              { from: "R", to: "M" },
              { from: "M", to: "S" },
              { from: "P", to: "M" }
            ],
            angles: [
              { at: "M", right: true }
            ]
          }
        }
      }
    ]
  },
  {
    id: "y10-8e-q4",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Analyze similarity and congruence in the figures shown.",
    a: "Check sub-questions",
    solution: "Refer to the sub-questions for detailed proofs and solutions.",
    t: "Revision",
    hint: "Identify the corresponding angles and sides to solve the sub-questions.",
    solutionSteps: [
      {
        explanation: "Check the sub-questions below.",
        workingOut: ""
      }
    ],
    subQuestions: [
      {
        id: "y10-8e-q4a-i",
        type: "short_answer",
        question: "a) i) State, in abbreviated form (e.g. AAA, SSS, SAS, RHS), why \\(\\Delta ABC\\) is similar to \\(\\Delta DEF\\).",
        a: "AAA",
        solution: "In \\(\\Delta ABC\\) and \\(\\Delta DEF\\):\n- \\(\\angle A = \\angle D = 120^\\circ\\)\n- \\(\\angle C = \\angle F = 25^\\circ\\)\n- The third angles must also be equal: \\(\\angle B = \\angle E = 180^\\circ - (120^\\circ + 25^\\circ) = 35^\\circ\\).\nTherefore, the triangles are similar by the AAA similarity test.",
        solutionSteps: [
          {
            explanation: "Match the known equal angles.",
            workingOut: "\\angle A = \\angle D = 120^\\circ, \\quad \\angle C = \\angle F = 25^\\circ"
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "\\Delta ABC \\sim \\Delta DEF \\text{ by AAA}"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "A": [2, 3],
              "B": [0, 0],
              "C": [5, 0.5],
              "D": [8, 3.2],
              "E": [6.2, 0.2],
              "F": [11.2, 0.7]
            },
            segments: [
              { from: "A", to: "B" },
              { from: "B", to: "C" },
              { from: "C", to: "A" },
              { from: "D", to: "E" },
              { from: "E", to: "F" },
              { from: "F", to: "D" }
            ],
            angles: [
              { at: "A", label: "120°" },
              { at: "C", label: "25°" },
              { at: "D", label: "120°" },
              { at: "F", label: "25°" }
            ],
            sideLabels: [
              { between: ["A", "B"], text: "4 cm" },
              { between: ["A", "C"], text: "8 cm" },
              { between: ["D", "F"], text: "6 cm" },
              { between: ["D", "E"], text: "x cm" }
            ]
          }
        }
      },
      {
        id: "y10-8e-q4a-ii",
        type: "short_answer",
        question: "a) ii) Calculate the value of \\(x\\).",
        a: "3",
        solution: "By similarity, the ratio of corresponding sides is equal:\n\\(\\frac{DE}{AB} = \\frac{DF}{AC}\\)\n\\(\\frac{x}{4} = \\frac{6}{8}\\)\n\\(x = 4 \\times \\frac{6}{8} = 3\\)",
        solutionSteps: [
          {
            explanation: "Set up the ratio of corresponding sides.",
            workingOut: "\\frac{x}{4} = \\frac{6}{8}"
          },
          {
            explanation: "Simplify the fraction and solve for \\(x\\).",
            workingOut: "x = 4 \\times \\frac{3}{4} = 3"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "A": [2, 3],
              "B": [0, 0],
              "C": [5, 0.5],
              "D": [8, 3.2],
              "E": [6.2, 0.2],
              "F": [11.2, 0.7]
            },
            segments: [
              { from: "A", to: "B" },
              { from: "B", to: "C" },
              { from: "C", to: "A" },
              { from: "D", to: "E" },
              { from: "E", to: "F" },
              { from: "F", to: "D" }
            ],
            angles: [
              { at: "A", label: "120°" },
              { at: "C", label: "25°" },
              { at: "D", label: "120°" },
              { at: "F", label: "25°" }
            ],
            sideLabels: [
              { between: ["A", "B"], text: "4 cm" },
              { between: ["A", "C"], text: "8 cm" },
              { between: ["D", "F"], text: "6 cm" },
              { between: ["D", "E"], text: "x cm" }
            ]
          }
        }
      },
      {
        id: "y10-8e-q4b",
        type: "short_answer",
        question: "b) In the diagram, \\(AB\\) and \\(CD\\) are diameters of the circle with centre \\(O\\), and \\(AE\\) and \\(BF\\) are perpendicular to \\(CD\\). State, in abbreviated form (e.g. SSS, SAS, ASA, AAS, RHS), why \\(\\Delta AEO \\equiv \\Delta BFO\\).",
        a: "AAS",
        solution: "In triangles \\(AEO\\) and \\(BFO\\):\n- \\(\\angle AEO = \\angle BFO = 90^\\circ\\) (given perpendiculars).\n- \\(OA = OB\\) (radii of the same circle, hypotenuses).\n- \\(\\angle AOE = \\angle BOF\\) (vertically opposite angles).\nTherefore, \\(\\Delta AEO \\equiv \\Delta BFO\\) by the AAS congruence test.",
        solutionSteps: [
          {
            explanation: "Identify the equal angles.",
            workingOut: "\\angle AEO = \\angle BFO = 90^\\circ \\quad \\text{and} \\quad \\angle AOE = \\angle BOF \\text{ (vertically opposite)}"
          },
          {
            explanation: "Identify the equal side (radius of the circle).",
            workingOut: "OA = OB \\text{ (radii)}"
          },
          {
            explanation: "Apply the AAS congruence test.",
            workingOut: "\\Delta AEO \\equiv \\Delta BFO \\text{ (AAS)}"
          }
        ],
        graphData: {
          geometry: {
            width: 300,
            points: {
              "O": [0, 0],
              "A": [-2.6, 1.5],
              "B": [2.6, -1.5],
              "C": [0, -3],
              "D": [0, 3],
              "E": [0, 1.5],
              "F": [0, -1.5]
            },
            segments: [
              { from: "A", to: "B" },
              { from: "C", to: "D" },
              { from: "A", to: "E" },
              { from: "B", to: "F" }
            ],
            circles: [
              { center: "O", through: "A" }
            ],
            angles: [
              { at: "E", right: true },
              { at: "F", right: true }
            ]
          }
        }
      }
    ]
  },
  {
    id: "y10-8e-q5",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Complete the proof that, in the figure shown, \\(\\Delta DAE\\) is isosceles.\n\n**Given:** In \\(\\Delta ABC\\), \\(AB = AC\\), \\(D\\) is on the ray from \\(B\\) through \\(A\\), \\(DF \\perp BC\\) and \\(DF\\) intersects \\(AC\\) at \\(E\\).\n**Prove:** \\(\\Delta DAE\\) is isosceles.",
    a: "See solution",
    solution: "Proof:\n1. Since \\(AB = AC\\), the base angles of \\(\\Delta ABC\\) are equal:\n   \\(\\angle ABC = \\angle ACB = \\theta\\)\n2. In right-angled triangle \\(DFB\\) (with \\(\\angle DFB = 90^\\circ\\)):\n   \\(\\angle BDF = 90^\\circ - \\angle ABC = 90^\\circ - \\theta\\)\n3. In right-angled triangle \\(EFC\\) (with \\(\\angle EFC = 90^\\circ\\)):\n   \\(\\angle FEC = 90^\\circ - \\angle ACB = 90^\\circ - \\theta\\)\n4. Vertically opposite angles are equal, so:\n   \\(\\angle AED = \\angle FEC = 90^\\circ - \\theta\\)\n5. Comparing the angles of \\(\\Delta DAE\\):\n   \\(\\angle ADE = \\angle BDF = 90^\\circ - \\theta\\)\n   \\(\\angle AED = 90^\\circ - \\theta\\)\n   Therefore, \\(\\angle ADE = \\angle AED\\).\n\nSince \\(\\Delta DAE\\) has two equal angles, it is an isosceles triangle with \\(AD = AE\\).",
    t: "Revision",
    hint: "Use the base angle property of isosceles triangle \\(ABC\\) and sum of angles in right-angled triangles \\(DFB\\) and \\(EFC\\).",
    solutionSteps: [
      {
        explanation: "Relate the base angles of the isosceles triangle \\(ABC\\).",
        workingOut: "\\angle ABC = \\angle ACB = \\theta"
      },
      {
        explanation: "Calculate \\(\\angle BDF\\) in the right-angled triangle \\(DFB\\).",
        workingOut: "\\angle BDF = 90^\\circ - \\theta"
      },
      {
        explanation: "Calculate \\(\\angle FEC\\) in the right-angled triangle \\(EFC\\) and use vertically opposite angles.",
        workingOut: "\\angle AED = \\angle FEC = 90^\\circ - \\theta"
      },
      {
        explanation: "Conclude that \\(\\angle ADE = \\angle AED\\), meaning the triangle is isosceles.",
        workingOut: "\\angle ADE = \\angle AED = 90^\\circ - \\theta \\implies AD = AE"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "B": [0, 0],
          "C": [6, 0],
          "A": [3, 4],
          "D": [4.5, 6],
          "F": [4.5, 0],
          "E": [4.5, 2]
        },
        segments: [
          { from: "A", to: "B", ticks: 1 },
          { from: "A", to: "C", ticks: 1 },
          { from: "A", to: "D" },
          { from: "D", to: "F" },
          { from: "B", to: "C" }
        ],
        angles: [
          { at: "F", right: true }
        ]
      }
    }
  },
  {
    id: "y10-8e-q6a",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: "Prove that \\(\\Delta DEC\\) is similar to \\(\\Delta ABC\\) in the figure shown.",
    a: "See solution",
    solution: "In \\(\\Delta DEC\\) and \\(\\Delta ABC\\):\n- \\(\\angle DEC = \\angle B = 90^\\circ\\) (given perpendicular lines).\n- \\(\\angle C\\) is common to both triangles.\n- Therefore, the third angles must also be equal: \\(\\angle EDC = \\angle A\\).\n\nHence, \\(\\Delta DEC \\sim \\Delta ABC\\) by the AAA similarity test.",
    t: "Revision",
    hint: "Identify the shared angle and the right angles in both triangles.",
    solutionSteps: [
      {
        explanation: "Identify the common angle at C.",
        workingOut: "\\angle C \\text{ is common}"
      },
      {
        explanation: "Identify the right angles.",
        workingOut: "\\angle DEC = \\angle B = 90^\\circ"
      },
      {
        explanation: "Apply AAA similarity test.",
        workingOut: "\\Delta DEC \\sim \\Delta ABC \\text{ (AAA)}"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "B": [0, 0],
          "A": [0, 9],
          "C": [12, 0],
          "D": [2, 0],
          "E": [5.6, 4.8]
        },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "D" },
          { from: "D", to: "C" },
          { from: "A", to: "E" },
          { from: "E", to: "C" },
          { from: "D", to: "E" }
        ],
        angles: [
          { at: "B", right: true },
          { at: "E", right: true },
          { at: "D", label: "α" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "9 cm" },
          { between: ["E", "C"], text: "8 cm" },
          { between: ["D", "C"], text: "x cm" },
          { between: ["B", "C"], text: "12 cm" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q6b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Calculate the value of \\(x\\) in the given diagram.",
    a: "10",
    solution: "Since \\(\\Delta DEC \\sim \\Delta ABC\\), the ratio of corresponding sides is equal:\n\\(\\frac{DC}{AC} = \\frac{EC}{BC}\\)\n\nFirst, calculate the hypotenuse \\(AC\\) of the larger triangle \\(ABC\\) using Pythagoras' theorem:\n\\(AC = \\sqrt{AB^2 + BC^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}\\)\n\nNow, substitute the values into the similarity ratio:\n\\(\\frac{x}{15} = \\frac{8}{12}\\)\n\\(x = 15 \\times \\frac{2}{3} = 10\\)",
    t: "Revision",
    hint: "Use Pythagoras' theorem to find hypotenuse AC first, then set up the similarity ratio: \\(\\frac{x}{AC} = \\frac{EC}{BC}\\).",
    solutionSteps: [
      {
        explanation: "Calculate hypotenuse AC.",
        workingOut: "AC = \\sqrt{9^2 + 12^2} = 15\\text{ cm}"
      },
      {
        explanation: "Set up the similarity ratio of corresponding sides.",
        workingOut: "\\frac{x}{15} = \\frac{8}{12}"
      },
      {
        explanation: "Solve for \\(x\\).",
        workingOut: "x = 15 \\times \\frac{2}{3} = 10"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "B": [0, 0],
          "A": [0, 9],
          "C": [12, 0],
          "D": [2, 0],
          "E": [5.6, 4.8]
        },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "D" },
          { from: "D", to: "C" },
          { from: "A", to: "E" },
          { from: "E", to: "C" },
          { from: "D", to: "E" }
        ],
        angles: [
          { at: "B", right: true },
          { at: "E", right: true },
          { at: "D", label: "α" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "9 cm" },
          { between: ["E", "C"], text: "8 cm" },
          { between: ["D", "C"], text: "x cm" },
          { between: ["B", "C"], text: "12 cm" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q6c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Use trigonometry to calculate \\(\\alpha\\) in the given diagram, correct to two decimal places. (Do not enter the degree symbol \\(^\\circ\\) in the answer box.)",
    a: "53.13",
    solution: "In right-angled triangle \\(DEC\\), we have:\n- Hypotenuse \\(DC = x = 10\\)\n- Side opposite to \\(\\alpha\\) is \\(EC = 8\\)\n\nUsing the sine ratio:\n\\(\\sin(\\alpha) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{8}{10} = 0.8\\)\n\\(\\alpha = \\sin^{-1}(0.8) \\approx 53.13^\\circ\\)\n\nAlternatively, since \\(\\Delta DEC \\sim \\Delta ABC\\), the angle \\(\\angle EDC = \\alpha\\) is equal to \\(\\angle A\\) in the larger triangle. Therefore, \\(\\sin(\\alpha) = \\sin(A) = \\frac{BC}{AC} = \\frac{12}{15} = 0.8\\).",
    t: "Revision",
    hint: "Identify opposite and hypotenuse in triangle DEC for angle \\(\\alpha\\), then use the inverse sine function.",
    solutionSteps: [
      {
        explanation: "Identify the relevant sides for angle \\(\\alpha\\) in right triangle DEC.",
        workingOut: "\\text{Opposite} = EC = 8, \\quad \\text{Hypotenuse} = DC = 10"
      },
      {
        explanation: "Set up the sine equation.",
        workingOut: "\\sin(\\alpha) = \\frac{8}{10} = 0.8"
      },
      {
        explanation: "Calculate the angle using inverse sine.",
        workingOut: "\\alpha = \\sin^{-1}(0.8) \\approx 53.13^\\circ"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "B": [0, 0],
          "A": [0, 9],
          "C": [12, 0],
          "D": [2, 0],
          "E": [5.6, 4.8]
        },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "D" },
          { from: "D", to: "C" },
          { from: "A", to: "E" },
          { from: "E", to: "C" },
          { from: "D", to: "E" }
        ],
        angles: [
          { at: "B", right: true },
          { at: "E", right: true },
          { at: "D", label: "α" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "9 cm" },
          { between: ["E", "C"], text: "8 cm" },
          { between: ["D", "C"], text: "x cm" },
          { between: ["B", "C"], text: "12 cm" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q7",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Calculate properties of the canal markers in the diagram.",
    a: "Check sub-questions",
    solution: "Check sub-questions for proofs and calculations.",
    t: "Revision",
    hint: "Identify similar triangles created by the parallel banks of the canal.",
    solutionSteps: [
      {
        explanation: "Refer to the sub-questions below.",
        workingOut: ""
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "P": [0, 4],
          "T": [4, 4],
          "Q": [0, 0],
          "L": [4, 0],
          "M": [6, 0],
          "N": [6, -2]
        },
        segments: [
          { from: "P", to: "T", marks: 1 },
          { from: "Q", to: "L", marks: 1 },
          { from: "L", to: "M" },
          { from: "P", to: "Q" },
          { from: "T", to: "L" },
          { from: "M", to: "N" },
          { from: "P", to: "L" },
          { from: "L", to: "N" }
        ],
        angles: [
          { at: "Q", right: true },
          { at: "T", right: true },
          { at: "M", right: true }
        ],
        sideLabels: [
          { between: ["Q", "L"], text: "80 m" },
          { between: ["L", "M"], text: "40 m" },
          { between: ["M", "N"], text: "60 m" }
        ]
      }
    },
    subQuestions: [
      {
        id: "y10-8e-q7a",
        type: "teacher_review",
        question: "a) Name all pairs of similar triangles in the diagram and give the abbreviated reason why they are similar.",
        solution: "The similar triangles are:\n\\(\\Delta PQL \\sim \\Delta NML\\)\n\nReason:\n- \\(\\angle PQL = \\angle NML = 90^\\circ\\) (since both markers are placed perpendicular to the straight banks).\n- \\(\\angle PLQ = \\angle NLM\\) (vertically opposite angles).\nTherefore, the triangles are similar by the AA (or AAA) similarity test.",
        solutionSteps: [
          {
            explanation: "Find the right angles.",
            workingOut: "\\angle PQL = \\angle NML = 90^\\circ"
          },
          {
            explanation: "Identify vertically opposite angles.",
            workingOut: "\\angle PLQ = \\angle NLM"
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "\\Delta PQL \\sim \\Delta NML \\text{ (AA)}"
          }
        ]
      },
      {
        id: "y10-8e-q7b",
        type: "short_answer",
        question: "b) The scouts measure \\(QL\\) to be \\(80\\text{ m}\\), \\(LM\\) to be \\(40\\text{ m}\\), and \\(MN\\) to be \\(60\\text{ m}\\). Calculate the distance across the canal (the length \\(PQ\\) in metres).",
        a: "120",
        solution: "The distance across the canal is represented by \\(PQ\\). Since \\(\\Delta PQL \\sim \\Delta NML\\), the ratio of corresponding sides is equal:\n\\(\\frac{PQ}{MN} = \\frac{QL}{LM}\\)\n\nSubstitute the given measurements:\n\\(\\frac{PQ}{60} = \\frac{80}{40}\\)\n\\(\\frac{PQ}{60} = 2\\)\n\\(PQ = 60 \\times 2 = 120\\text{ m}\\)",
        solutionSteps: [
          {
            explanation: "Set up the ratio comparing the widths and segments of the canal.",
            workingOut: "\\frac{PQ}{MN} = \\frac{QL}{LM}"
          },
          {
            explanation: "Substitute the known lengths.",
            workingOut: "\\frac{PQ}{60} = \\frac{80}{40}"
          },
          {
            explanation: "Solve for the width PQ.",
            workingOut: "PQ = 60 \\times 2 = 120\\text{ m}"
          }
        ]
      }
    ]
  },
  {
    id: "y10-8e-q8",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "In the diagram, \\(PQ \\parallel ST\\) and \\(QR = SR\\). Prove that triangles \\(PQR\\) and \\(TSR\\) are congruent.",
    a: "See solution",
    solution: "In triangles \\(PQR\\) and \\(TSR\\):\n- \\(QR = SR\\) (given).\n- \\(\\angle PRQ = \\angle TRS\\) (vertically opposite angles).\n- \\(\\angle PQR = \\angle TSR\\) (alternate angles, since \\(PQ \\parallel ST\\)).\n\nTherefore, \\(\\Delta PQR \\equiv \\Delta TSR\\) by the ASA congruence test (two angles and the included side are equal).",
    t: "Revision",
    hint: "Identify the vertically opposite angles at R and alternate interior angles due to parallel lines PQ and ST.",
    solutionSteps: [
      {
        explanation: "State the given side equality.",
        workingOut: "QR = SR \\text{ (given)}"
      },
      {
        explanation: "Identify the vertically opposite angles.",
        workingOut: "\\angle PRQ = \\angle TRS"
      },
      {
        explanation: "Identify the alternate interior angles.",
        workingOut: "\\angle PQR = \\angle TSR \\text{ (alternate angles, } PQ \\parallel ST\\text{)}"
      },
      {
        explanation: "Apply the ASA test to prove congruence.",
        workingOut: "\\Delta PQR \\equiv \\Delta TSR \\text{ (ASA)}"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "R": [0, 0],
          "Q": [2, 1.5],
          "P": [-1, 1.5],
          "S": [-2, -1.5],
          "T": [1, -1.5]
        },
        segments: [
          { from: "P", to: "Q", marks: 1 },
          { from: "S", to: "T", marks: 1 },
          { from: "Q", to: "R", ticks: 1 },
          { from: "S", to: "R", ticks: 1 },
          { from: "P", to: "R" },
          { from: "T", to: "R" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q9",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "In the diagram, \\(AB = BC\\) and \\(BM \\parallel CN\\). Prove that \\(CN = 2BM\\).",
    a: "See solution",
    solution: "In \\(\\Delta ABM\\) and \\(\\Delta ACN\\):\n- \\(\\angle A\\) is common.\n- \\(\\angle ABM = \\angle ACN\\) (corresponding angles, since \\(BM \\parallel CN\\)).\n- Therefore, \\(\\Delta ABM \\sim \\Delta ACN\\) by the AAA similarity test.\n\nSince the triangles are similar, the ratio of corresponding sides is equal to the ratio of the side lengths:\n\\(\\frac{CN}{BM} = \\frac{AC}{AB}\\)\n\nWe are given \\(AB = BC\\), which means the total length \\(AC\\) is:\n\\(AC = AB + BC = 2AB\\)\n\nSubstitute \\(AC = 2AB\\) into the similarity ratio:\n\\(\\frac{CN}{BM} = \\frac{2AB}{AB} = 2 \\implies CN = 2BM\\)",
    t: "Revision",
    hint: "Establish similarity between the smaller triangle ABM and the larger triangle ACN, then use the midpoint property.",
    solutionSteps: [
      {
        explanation: "Prove that \\(\\Delta ABM\\) is similar to \\(\\Delta ACN\\).",
        workingOut: "\\Delta ABM \\sim \\Delta ACN \\text{ (AAA)}"
      },
      {
        explanation: "Relate the total side length AC to AB using the given midpoint condition.",
        workingOut: "AC = AB + BC = 2AB \\implies \\frac{AC}{AB} = 2"
      },
      {
        explanation: "Set up the ratio of corresponding sides and solve for CN.",
        workingOut: "\\frac{CN}{BM} = \\frac{AC}{AB} = 2 \\implies CN = 2BM"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "A": [0, 0],
          "B": [3, 0],
          "C": [6, 0],
          "M": [2, 3],
          "N": [4, 6]
        },
        segments: [
          { from: "A", to: "B", ticks: 1 },
          { from: "B", to: "C", ticks: 1 },
          { from: "B", to: "M", marks: 1 },
          { from: "C", to: "N", marks: 1 },
          { from: "A", to: "M" },
          { from: "M", to: "N" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q10",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "In the diagram, \\(\\Delta ABC\\) is isosceles with \\(AB = AC\\), and \\(BE = CD\\). Prove that \\(EC = DB\\).",
    a: "See solution",
    solution: "In triangles \\(EBC\\) and \\(DCB\\):\n- \\(BC\\) is a common side.\n- \\(BE = CD\\) (given).\n- \\(\\angle EBC = \\angle DCB\\) (base angles of the isosceles triangle \\(ABC\\), since \\(AB = AC\\)).\n\nTherefore, \\(\\Delta EBC \\equiv \\Delta DCB\\) by the SAS congruence test.\n\nSince the triangles are congruent, their corresponding sides must be equal:\n\\(EC = DB\\)",
    t: "Revision",
    hint: "Identify a pair of triangles sharing the base BC and prove them congruent using SAS.",
    solutionSteps: [
      {
        explanation: "State the equal sides given or shared.",
        workingOut: "BE = CD, \\quad BC \\text{ is common}"
      },
      {
        explanation: "Use the base angles of isosceles triangle ABC.",
        workingOut: "\\angle EBC = \\angle DCB \\text{ (since } AB = AC\\text{)}"
      },
      {
        explanation: "Apply SAS congruence.",
        workingOut: "\\Delta EBC \\equiv \\Delta DCB \\text{ (SAS)} \\implies EC = DB"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "A": [3, 5],
          "B": [0, 0],
          "C": [6, 0],
          "E": [1, 1.67],
          "D": [5, 1.67]
        },
        segments: [
          { from: "A", to: "E" },
          { from: "E", to: "B", ticks: 1 },
          { from: "A", to: "D" },
          { from: "D", to: "C", ticks: 1 },
          { from: "B", to: "C" },
          { from: "E", to: "C" },
          { from: "D", to: "B" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q11",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Analyze the properties of the diagonals in the trapezium shown.",
    a: "Check sub-questions",
    solution: "Please check the sub-questions for detailed similarity proofs and derivations.",
    t: "Revision",
    hint: "Use alternate interior angles to establish similarity between the two triangles formed by the diagonals.",
    solutionSteps: [
      {
        explanation: "Refer to the sub-questions below.",
        workingOut: ""
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "A": [1.5, 3],
          "B": [4.5, 3],
          "C": [6, 0],
          "D": [0, 0],
          "O": [3, 2]
        },
        segments: [
          { from: "A", to: "B", marks: 1 },
          { from: "D", to: "C", marks: 1 },
          { from: "A", to: "D" },
          { from: "B", to: "C" },
          { from: "A", to: "C" },
          { from: "B", to: "D" }
        ]
      }
    },
    subQuestions: [
      {
        id: "y10-8e-q11a",
        type: "teacher_review",
        question: "a) Prove that \\(\\Delta ABO\\) is similar to \\(\\Delta CDO\\).",
        solution: "In \\(\\Delta ABO\\) and \\(\\Delta CDO\\):\n- \\(\\angle AOB = \\angle COD\\) (vertically opposite angles).\n- \\(\\angle ABO = \\angle CDO\\) (alternate angles, since \\(AB \\parallel DC\\)).\n- \\(\\angle BAO = \\angle DCO\\) (alternate angles, since \\(AB \\parallel DC\\)).\n\nTherefore, \\(\\Delta ABO \\sim \\Delta CDO\\) by the AAA similarity test.",
        solutionSteps: [
          {
            explanation: "Identify vertically opposite angles.",
            workingOut: "\\angle AOB = \\angle COD"
          },
          {
            explanation: "Identify equal alternate angles due to parallel lines.",
            workingOut: "\\angle ABO = \\angle CDO, \\quad \\angle BAO = \\angle DCO"
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "\\Delta ABO \\sim \\Delta CDO \\text{ (AAA)}"
          }
        ]
      },
      {
        id: "y10-8e-q11b",
        type: "teacher_review",
        question: "b) Hence, prove that \\(2AC = 3OC\\).",
        solution: "From part a, since \\(\\Delta ABO \\sim \\Delta CDO\\), the ratio of corresponding sides is:\n\\(\\frac{AO}{OC} = \\frac{AB}{CD}\\)\n\nWe are given \\(AB = \\frac{1}{2}CD\\), which means \\(\\frac{AB}{CD} = \\frac{1}{2}\\).\n\nTherefore:\n\\(\\frac{AO}{OC} = \\frac{1}{2} \\implies OC = 2AO \\implies AO = \\frac{1}{2}OC\\)\n\nWe know that the total diagonal \\(AC\\) is:\n\\(AC = AO + OC\\)\n\nSubstitute \\(AO = \\frac{1}{2}OC\\) into the equation:\n\\(AC = \\frac{1}{2}OC + OC = \\frac{3}{2}OC\\)\n\nMultiply both sides by 2:\n\\(2AC = 3OC\\)",
        solutionSteps: [
          {
            explanation: "Set up the ratio of corresponding sides using the similarity result.",
            workingOut: "\\frac{AO}{OC} = \\frac{AB}{CD} = \\frac{1}{2} \\implies AO = \\frac{1}{2}OC"
          },
          {
            explanation: "Express the total length AC in terms of OC.",
            workingOut: "AC = AO + OC = \\frac{1}{2}OC + OC = \\frac{3}{2}OC"
          },
          {
            explanation: "Multiply by 2 to clear the fraction.",
            workingOut: "2AC = 3OC"
          }
        ]
      }
    ]
  },
  {
    id: "y10-8e-q12",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the formula, with \\(y\\) as its subject, that can be used to calculate the value of \\(y\\) if \\(h\\), \\(w\\), and \\(s\\) are known.",
    a: "y = hs/w",
    solution: "In the diagram, \\(\\Delta ADE\\) is similar to \\(\\Delta ACB\\) because:\n- \\(\\angle A\\) is common.\n- \\(\\angle ADE = \\angle ACB = 90^\\circ\\).\n\nTherefore, by the AAA similarity test, \\(\\Delta ADE \\sim \\Delta ACB\\).\n\nSetting up the ratio of corresponding sides:\n\\(\\frac{DE}{BC} = \\frac{AD}{AC} \\implies \\frac{y}{h} = \\frac{s}{w}\\)\n\nSolving for \\(y\\):\n\\(y = \\frac{hs}{w}\\)",
    t: "Revision",
    hint: "Identify similar right triangles ADE and ACB, then set up the ratio: \\(\\frac{y}{h} = \\frac{s}{w}\\).",
    solutionSteps: [
      {
        explanation: "Prove that the small right triangle ADE is similar to the large right triangle ACB.",
        workingOut: "\\Delta ADE \\sim \\Delta ACB \\text{ (AAA)}"
      },
      {
        explanation: "Relate the ratios of corresponding sides (opposite/adjacent).",
        workingOut: "\\frac{y}{h} = \\frac{s}{w}"
      },
      {
        explanation: "Solve for \\(y\\) as the subject of the formula.",
        workingOut: "y = \\frac{hs}{w}"
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        showPointLabels: false,
        points: {
          "A": [0, 0],
          "B": [6, 4.5],
          "C": [6, 0],
          "D": [2.4, 1.8],
          "E": [3.75, 0]
        },
        segments: [
          { from: "A", to: "D" },
          { from: "D", to: "B" },
          { from: "B", to: "C" },
          { from: "A", to: "E" },
          { from: "E", to: "C" },
          { from: "D", to: "E" }
        ],
        angles: [
          { at: "C", right: true },
          { at: "D", right: true }
        ],
        sideLabels: [
          { between: ["B", "C"], text: "h" },
          { between: ["A", "C"], text: "w" },
          { between: ["A", "D"], text: "s" },
          { between: ["D", "E"], text: "y" },
          { between: ["E", "C"], text: "u" }
        ]
      }
    }
  },
  {
    id: "y10-8e-q13",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "Analyze the congruent triangles in the symmetric figure shown.",
    a: "Check sub-questions",
    solution: "Refer to the sub-questions for detailed congruence proofs.",
    t: "Revision",
    hint: "Use RHS and SAS tests to prove congruence in the given multi-part problem.",
    solutionSteps: [
      {
        explanation: "Follow the steps in the sub-questions.",
        workingOut: ""
      }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: {
          "B": [0, -3],
          "A": [-4, 0],
          "C": [4, 0],
          "G": [0, 0],
          "E": [0, 4],
          "F": [-2.4, -1.2],
          "D": [-4.8, 0.6]
        },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "A", to: "C" },
          { from: "B", to: "D" },
          { from: "B", to: "E" },
          { from: "D", to: "E" },
          { from: "A", to: "D" },
          { from: "C", to: "E" }
        ],
        angles: [
          { at: "G", right: true },
          { at: "F", right: true }
        ]
      }
    },
    subQuestions: [
      {
        id: "y10-8e-q13a",
        type: "teacher_review",
        question: "a) Prove that \\(\\Delta DFB \\equiv \\Delta EFB\\).",
        solution: "In right-angled triangles \\(DFB\\) and \\(EFB\\):\n- Hypotenuse \\(BD = BE\\) (given).\n- Leg \\(BF\\) is common.\n- \\(\\angle BFD = \\angle BFE = 90^\\circ\\) (since \\(BA \\perp DE\\) at \\(F\\)).\n\nTherefore, \\(\\Delta DFB \\equiv \\Delta EFB\\) by the RHS congruence test.",
        solutionSteps: [
          {
            explanation: "Identify the equal hypotenuses.",
            workingOut: "BD = BE \\text{ (hypotenuse, given)}"
          },
          {
            explanation: "Identify the common leg.",
            workingOut: "BF \\text{ is common}"
          },
          {
            explanation: "Note the right angles.",
            workingOut: "\\angle BFD = \\angle BFE = 90^\\circ \\text{ (given perpendiculars)}"
          },
          {
            explanation: "Apply RHS test.",
            workingOut: "\\Delta DFB \\equiv \\Delta EFB \\text{ (RHS)}"
          }
        ]
      },
      {
        id: "y10-8e-q13b",
        type: "teacher_review",
        question: "b) Prove that \\(\\Delta ABD \\equiv \\Delta CBE\\).",
        solution: "1. From part a, since \\(\\Delta DFB \\equiv \\Delta EFB\\), their corresponding angles are equal:\n   \\(\\angle DBF = \\angle EBF \\implies \\angle ABD = \\angle ABE\\)\n2. In triangles \\(ABG\\) and \\(CBG\\):\n   - \\(AB = BC\\) (given).\n   - \\(BG\\) is common.\n   - \\(\\angle BGA = \\angle BGC = 90^\\circ\\) (since \\(BE \\perp AC\\) at \\(G\\)).\n   - Therefore, \\(\\Delta ABG \\equiv \\Delta CBG\\) by RHS.\n   - This implies \\(\\angle ABG = \\angle CBG \\implies \\angle ABE = \\angle CBE\\).\n3. Since \\(\\angle ABD = \\angle ABE\\) and \\(\\angle ABE = \\angle CBE\\), we have:\n   \\(\\angle ABD = \\angle CBE\\)\n4. Now, in triangles \\(ABD\\) and \\(CBE\\):\n   - \\(AB = CB\\) (given).\n   - \\(BD = BE\\) (given).\n   - \\(\\angle ABD = \\angle CBE\\) (proven above).\n   - Therefore, \\(\\Delta ABD \\equiv \\Delta CBE\\) by the SAS congruence test.",
        solutionSteps: [
          {
            explanation: "Use CPCTC from part a to show angle equality.",
            workingOut: "\\angle ABD = \\angle ABE"
          },
          {
            explanation: "Prove \\(\\Delta ABG \\equiv \\Delta CBG\\) by RHS to show \\(\\angle ABE = \\angle CBE\\).",
            workingOut: "\\Delta ABG \\equiv \\Delta CBG \\implies \\angle ABE = \\angle CBE"
          },
          {
            explanation: "Combine the angle equations to get \\(\\angle ABD = \\angle CBE\\).",
            workingOut: "\\angle ABD = \\angle CBE"
          },
          {
            explanation: "Prove \\(\\Delta ABD \\equiv \\Delta CBE\\) by SAS.",
            workingOut: "AB = CB, \\quad BD = BE, \\quad \\angle ABD = \\angle CBE \\implies \\Delta ABD \\equiv \\Delta CBE"
          }
        ]
      }
    ]
  },
  {
    id: "y10-8e-q14",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "Analyze the proofs for the parallelogram and isosceles triangles described.",
    a: "Check sub-questions",
    solution: "Refer to the sub-questions for proofs.",
    t: "Revision",
    hint: "Assign \\(\\angle BAD = \\theta\\) and find all other angles in terms of \\(\\theta\\) to establish similarity and congruence.",
    solutionSteps: [
      {
        explanation: "Check sub-questions.",
        workingOut: ""
      }
    ],
    subQuestions: [
      {
        id: "y10-8e-q14a",
        type: "teacher_review",
        question: "a) Prove that \\(\\Delta ABE\\) is similar to \\(\\Delta ADF\\).",
        solution: "Let \\(\\angle BAD = \\theta\\). In parallelogram \\(ABCD\\):\n- \\(\\angle BCD = \\theta\\)\n- \\(\\angle ABC = \\angle ADC = 180^\\circ - \\theta\\)\n\nSince \\(E\\) is on ray \\(CB\\) (so \\(C\\)-\\B\\)-\\E\\) is a straight line):\n\\(\\angle ABE = 180^\\circ - \\angle ABC = \\theta\\)\n\nSince \\(F\\) is on ray \\(CD\\) (so \\(C\\)-\\D\\)-\\F\\) is a straight line):\n\\(\\angle ADF = 180^\\circ - \\angle ADC = \\theta\\)\n\nIn isosceles triangle \\(ABE\\) with \\(AB = AE\\):\n\\(\\angle AEB = \\angle ABE = \\theta\\) and the third angle \\(\\angle BAE = 180^\\circ - 2\\theta\\).\n\nIn isosceles triangle \\(ADF\\) with \\(AD = AF\\):\n\\(\\angle AFD = \\angle ADF = \\theta\\) and the third angle \\(\\angle DAF = 180^\\circ - 2\\theta\\).\n\nSince the three angles of both triangles are equal (\\(\\theta\\), \\(\\theta\\), and \\(180^\\circ - 2\\theta\\)), we have \\(\\Delta ABE \\sim \\Delta ADF\\) (AAA).",
        solutionSteps: [
          {
            explanation: "Set the base angle \\(\\angle BAD = \\theta\\) and find adjacent interior angles of the parallelogram.",
            workingOut: "\\angle ABC = \\angle ADC = 180^\\circ - \\theta"
          },
          {
            explanation: "Find supplementary angles on the straight rays.",
            workingOut: "\\angle ABE = \\angle ADF = \\theta"
          },
          {
            explanation: "Use the isosceles properties to find all angles of both triangles.",
            workingOut: "\\Delta ABE \\text{ has angles } (\\theta, \\theta, 180^\\circ-2\\theta), \\quad \\Delta ADF \\text{ has angles } (\\theta, \\theta, 180^\\circ-2\\theta)"
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "\\Delta ABE \\sim \\Delta ADF \\text{ (AAA)}"
          }
        ],
        graphData: null
      },
      {
        id: "y10-8e-q14b",
        type: "teacher_review",
        question: "b) Prove that \\(DE = BF\\).",
        solution: "In triangles \\(ADE\\) and \\(ABF\\):\n- \\(AE = AB\\) (since \\(\\Delta ABE\\) is isosceles with \\(AB = AE\\)).\n- \\(AD = AF\\) (since \\(\\Delta ADF\\) is isosceles with \\(AD = AF\\)).\n- Now let's calculate the included angles:\n  \\(\\angle EAD = \\angle EAB + \\angle BAD = (180^\\circ - 2\\theta) + \\theta = 180^\\circ - \\theta\\)\n  \\(\\angle FAB = \\angle FAD + \\angle BAD = (180^\\circ - 2\\theta) + \\theta = 180^\\circ - \\theta\\)\n  So \\(\\angle EAD = \\angle FAB\\).\n\nTherefore, \\(\\Delta ADE \\equiv \\Delta ABF\\) by the SAS congruence test.\n\nBy CPCTC, \\(DE = BF\\).",
        solutionSteps: [
          {
            explanation: "State the equal sides from the isosceles properties.",
            workingOut: "AE = AB, \\quad AD = AF"
          },
          {
            explanation: "Calculate the included angles \\(\\angle EAD\\) and \\(\\angle FAB\\).",
            workingOut: "\\angle EAD = \\angle FAB = 180^\\circ - \\theta"
          },
          {
            explanation: "Prove congruence by SAS and conclude side equality.",
            workingOut: "\\Delta ADE \\equiv \\Delta ABF \\text{ (SAS)} \\implies DE = BF"
          }
        ],
        graphData: null
      }
    ]
  },
  {
    id: "y10-8e-q15",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "Analyze the properties of the triangle divided by similarity intervals.",
    a: "Check sub-questions",
    solution: "Refer to the sub-questions for detailed proofs.",
    t: "Revision",
    hint: "Use SAS similarity test to prove the lines are parallel, then use AAA similarity on the smaller triangle formed at the intersection.",
    solutionSteps: [
      {
        explanation: "Check sub-questions.",
        workingOut: ""
      }
    ],
    subQuestions: [
      {
        id: "y10-8e-q15a",
        type: "teacher_review",
        question: "a) Prove that \\(BC \\parallel MN\\).",
        solution: "In triangles \\(AMN\\) and \\(ABC\\):\n- \\(\\angle A\\) is common.\n- \\(\\frac{AM}{AB} = \\frac{1}{4}\\) (since \\(AB = 4AM\\)).\n- \\(\\frac{AN}{AC} = \\frac{1}{4}\\) (since \\(AC = 4AN\\)).\n\nSince the ratio of two corresponding sides is equal and the included angle is common, \\(\\Delta AMN \\sim \\Delta ABC\\) by the SAS similarity test.\n\nSince the triangles are similar, their corresponding angles are equal:\n\\(\\angle AMN = \\angle ABC\\)\n\nSince these equal angles are corresponding angles, the lines must be parallel:\n\\(BC \\parallel MN\\).",
        solutionSteps: [
          {
            explanation: "Set up side ratios and note the shared angle.",
            workingOut: "\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{1}{4}, \\quad \\angle A \\text{ is common}"
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "\\Delta AMN \\sim \\Delta ABC \\text{ (SAS)}"
          },
          {
            explanation: "Use equal corresponding angles to prove the lines are parallel.",
            workingOut: "\\angle AMN = \\angle ABC \\implies BC \\parallel MN"
          }
        ],
        graphData: null
      },
      {
        id: "y10-8e-q15b",
        type: "teacher_review",
        question: "b) If \\(BN\\) and \\(CM\\) intersect at \\(P\\), prove that \\(BP = 4PN\\).",
        solution: "Since \\(BC \\parallel MN\\), we can analyze triangles \\(PMN\\) and \\(PCB\\):\n- \\(\\angle PMN = \\angle PCB\\) (alternate angles, since \\(BC \\parallel MN\\)).\n- \\(\\angle PNM = \\angle PBC\\) (alternate angles, since \\(BC \\parallel MN\\)).\n- Therefore, \\(\\Delta PMN \\sim \\Delta PCB\\) by the AAA similarity test.\n\nFrom the similarity, the ratio of corresponding sides is:\n\\(\\frac{PN}{BP} = \\frac{MN}{BC}\\)\n\nFrom part a, we know that \\(\\Delta AMN \\sim \\Delta ABC\\) with a similarity ratio of \\(\\frac{1}{4}\\), so:\n\\(\\frac{MN}{BC} = \\frac{AM}{AB} = \\frac{1}{4}\\)\n\nTherefore:\n\\(\\frac{PN}{BP} = \\frac{1}{4} \\implies BP = 4PN\\).",
        solutionSteps: [
          {
            explanation: "Show that \\(\\Delta PMN\\) is similar to \\(\\Delta PCB\\) using parallel lines.",
            workingOut: "\\Delta PMN \\sim \\Delta PCB \\text{ (AAA)}"
          },
          {
            explanation: "Express the ratio of sides from the similarity.",
            workingOut: "\\frac{PN}{BP} = \\frac{MN}{BC}"
          },
          {
            explanation: "Use the similarity ratio of \\(\\Delta AMN\\) and \\(\\Delta ABC\\) to solve.",
            workingOut: "\\frac{MN}{BC} = \\frac{1}{4} \\implies \\frac{PN}{BP} = \\frac{1}{4} \\implies BP = 4PN"
          }
        ],
        graphData: null
      }
    ]
  }
];
