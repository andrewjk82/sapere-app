export const Y9_CH11I_QUESTIONS = [
  {
    "id": "y9-11i-q1",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For the points \\(A(-2, 5)\\) and \\(B(8, 0)\\), find the coordinates of the point \\(P\\) on the interval \\(AB\\) such that \\(AP : PB\\) equals the given ratios.",
    "a": "a) (3, 2.5), b) (14/3, 5/3), c) (2, 3)",
    "solution": "We use the section formula or fractional step method:\na) \\(AP : PB = 1 : 1\\) (Midpoint):\n   \\(P = \\left(\\frac{-2 + 8}{2}, \\frac{5 + 0}{2}\\right) = (3, 2.5)\\).\n\nb) \\(AP : PB = 2 : 1\\) (\\(P\\) is \\(\\frac{2}{3}\\) of the way from \\(A\\) to \\(B\\)):\n   \\(x = -2 + \\frac{2}{3}(8 - (-2)) = -2 + \\frac{20}{3} = \\frac{14}{3}\\),\n   \\(y = 5 + \\frac{2}{3}(0 - 5) = 5 - \\frac{10}{3} = \\frac{5}{3}\\).\n   \\(P\\left(\\frac{14}{3}, \\frac{5}{3}\\right)\\).\n\nc) \\(AP : PB = 2 : 3\\) (\\(P\\) is \\(\\frac{2}{5}\\) of the way from \\(A\\) to \\(B\\)):\n   \\(x = -2 + \\frac{2}{5}(8 - (-2)) = -2 + 4 = 2\\),\n   \\(y = 5 + \\frac{2}{5}(0 - 5) = 5 - 2 = 3\\).\n   \\(P(2, 3)\\).",
    "t": "Challenge exercise",
    "hint": "Use ratios to determine the fraction of the horizontal and vertical distances from A to B.",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y9-11i-q1a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) \\(1 : 1\\)",
        "a": "(3, 2.5)",
        "solutionSteps": [
          {
            "explanation": "Average coordinates.",
            "workingOut": "P = \\left(\\frac{-2+8}{2}, \\frac{5+0}{2}\\right) = (3, 2.5)"
          }
        ]
      },
      {
        "id": "y9-11i-q1b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) \\(2 : 1\\) (\\(P\\) is closer to \\(B\\))",
        "a": "(14/3, 5/3)",
        "solutionSteps": [
          {
            "explanation": "Step 2/3 of the distance from A to B.",
            "workingOut": "x = -2 + \\frac{2}{3}(10) = \\frac{14}{3}, \\quad y = 5 + \\frac{2}{3}(-5) = \\frac{5}{3}"
          }
        ]
      },
      {
        "id": "y9-11i-q1c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) \\(2 : 3\\) (\\(P\\) is closer to \\(A\\))",
        "a": "(2, 3)",
        "solutionSteps": [
          {
            "explanation": "Step 2/5 of the distance from A to B.",
            "workingOut": "x = -2 + \\frac{2}{5}(10) = 2, \\quad y = 5 + \\frac{2}{5}(-5) = 3"
          }
        ]
      }
    ]
  },
  {
    "id": "y9-11i-q2",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that the points \\((2, -2)\\), \\((-2, 2)\\) and \\((-2\\sqrt{3}, -2\\sqrt{3})\\) are the vertices of an equilateral triangle.",
    "a": "Proof: Show all side lengths equal 4\\sqrt{2}.",
    "solution": "Let the points be \\(A(2, -2)\\), \\(B(-2, 2)\\), and \\(C(-2\\sqrt{3}, -2\\sqrt{3})\\).\n\n1. Distance \\(AB\\):\n   \\(AB = \\sqrt{(-2-2)^2 + (2 - (-2))^2} = \\sqrt{(-4)^2 + 4^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}\\).\n\n2. Distance \\(BC\\):\n   \\(BC = \\sqrt{(-2\\sqrt{3} - (-2))^2 + (-2\\sqrt{3} - 2)^2} = \\sqrt{(2 - 2\\sqrt{3})^2 + (2 + 2\\sqrt{3})^2}\\)\n   \\(= \\sqrt{(4 - 8\\sqrt{3} + 12) + (4 + 8\\sqrt{3} + 12)} = \\sqrt{32} = 4\\sqrt{2}\\).\n\n3. Distance \\(CA\\):\n   \\(CA = \\sqrt{(2 - (-2\\sqrt{3}))^2 + (-2 - (-2\\sqrt{3}))^2} = \\sqrt{(2 + 2\\sqrt{3})^2 + (2\\sqrt{3} - 2)^2}\\)\n   \\(= \\sqrt{32} = 4\\sqrt{2}\\).\n\nSince \\(AB = BC = CA = 4\\sqrt{2}\\), the triangle has three equal side lengths and is therefore equilateral.",
    "t": "Challenge exercise",
    "hint": "Compute the distance between each pair of points using the distance formula and verify they are all equal.",
    "solutionSteps": [
      {
        "explanation": "Calculate side length AB.",
        "workingOut": "AB = \\sqrt{(-4)^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}"
      },
      {
        "explanation": "Calculate side length BC.",
        "workingOut": "BC = \\sqrt{(2 - 2\\sqrt{3})^2 + (2 + 2\\sqrt{3})^2} = \\sqrt{32} = 4\\sqrt{2}"
      },
      {
        "explanation": "Calculate side length CA.",
        "workingOut": "CA = \\sqrt{(2 + 2\\sqrt{3})^2 + (2\\sqrt{3} - 2)^2} = \\sqrt{32} = 4\\sqrt{2}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q3",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that the points \\(A(2, 1)\\), \\(B(8, 5)\\), \\(C(4, 7)\\) and \\(D(-2, 3)\\) are the vertices of a parallelogram, and find the length of its diagonals. Format: [diagonal1], [diagonal2]",
    "a": "2\\sqrt{10}, 2\\sqrt{26}",
    "solution": "1. Show it is a parallelogram by checking midpoints of diagonals \\(AC\\) and \\(BD\\):\n   - Midpoint of \\(AC\\): \\(\\left(\frac{2+4}{2}, \\frac{1+7}{2}\\right) = (3, 4)\\).\n   - Midpoint of \\(BD\\): \\(\\left(\frac{8-2}{2}, \\frac{5+3}{2}\right) = (3, 4)\\).\n   Since the midpoints are identical, the diagonals bisect each other, proving \\(ABCD\\) is a parallelogram.\n\n2. Calculate diagonal lengths:\n   - \\(AC = \\sqrt{(4-2)^2 + (7-1)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}\\).\n   - \\(BD = \\sqrt{(-2-8)^2 + (3-5)^2} = \\sqrt{100 + 4} = \\sqrt{104} = 2\\sqrt{26}\\).",
    "t": "Challenge exercise",
    "hint": "Verify that the diagonals AC and BD bisect each other by finding their midpoints, then compute their lengths.",
    "solutionSteps": [
      {
        "explanation": "Verify diagonals bisect each other by checking midpoints.",
        "workingOut": "M_{AC} = (3, 4), \\quad M_{BD} = (3, 4) \\implies Parallelogram"
      },
      {
        "explanation": "Find the lengths of the diagonals AC and BD.",
        "workingOut": "AC = \\sqrt{40} = 2\\sqrt{10}, \\quad BD = \\sqrt{104} = 2\\sqrt{26}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q4",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\((4, -1)\\), \\((-2, 3)\\) and \\((2, 6)\\) are three vertices of a parallelogram, find the coordinates of the fourth vertex if it lies strictly in the first quadrant.",
    "a": "(8, 2)",
    "solution": "Let the given points be \\(A(4, -1)\\), \\(B(-2, 3)\\), and \\(C(2, 6)\\).\nFor a parallelogram, the diagonals bisect each other, meaning the sum of opposite vertices is equal:\n1. Case 1: \\(A + C = B + D_1 \\implies D_1 = A + C - B = (4+2-(-2), -1+6-3) = (8, 2)\\).\n2. Case 2: \\(A + B = C + D_2 \\implies D_2 = A + B - C = (4-2-2, -1+3-6) = (0, -4)\\).\n3. Case 3: \\(B + C = A + D_3 \\implies D_3 = B + C - A = (-2+2-4, 3+6-(-1)) = (-4, 10)\\).\nThe only vertex strictly in the first quadrant (both coordinates positive) is \\((8, 2)\\).",
    "t": "Challenge exercise",
    "hint": "Use the vector property of parallelograms where \\(D = A + C - B\\) or check all possible combinations to find one with positive coordinates.",
    "solutionSteps": [
      {
        "explanation": "Test diagonal combinations for first-quadrant coordinates.",
        "workingOut": "D = A + C - B = (4+2+2, -1+6-3) = (8, 2)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q5",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the line whose intercepts are twice those of the line with equation \\(3x - 4y - 12 = 0\\). Format: Ax + By + C = 0 with A > 0",
    "a": "3x - 4y - 24 = 0",
    "solution": "1. Find intercepts of \\(3x - 4y - 12 = 0\\):\n   - \\(x\\)-intercept (set \\(y=0\\)): \\(3x = 12 \\implies x = 4\\).\n   - \\(y\\)-intercept (set \\(x=0\\)): \\(-4y = 12 \\implies y = -3\\).\n\n2. Double the intercepts:\n   - New \\(x\\)-intercept: \\(4 \\times 2 = 8\\).\n   - New \\(y\\)-intercept: \\(-3 \\times 2 = -6\\).\n\n3. Formulate the equation using intercept form \\(\\frac{x}{a} + \\frac{y}{b} = 1\\):\n   \\(\\frac{x}{8} + \\frac{y}{-6} = 1\\)\n   Multiply by 24: \\(3x - 4y = 24 \\implies 3x - 4y - 24 = 0\\).",
    "t": "Challenge exercise",
    "hint": "Find the x and y intercepts of the given line, double them, and write down the new intercept equation.",
    "solutionSteps": [
      {
        "explanation": "Identify the intercepts of the original line.",
        "workingOut": "x\\text{-intercept} = 4, \\quad y\\text{-intercept} = -3"
      },
      {
        "explanation": "Double the intercepts and apply intercept form.",
        "workingOut": "\\frac{x}{8} - \\frac{y}{6} = 1 \\implies 3x - 4y - 24 = 0"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q6",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In the rhombus \\(ABCD\\), \\(A\\) has coordinates \\(1, 1\\) and \\(B\\) has coordinates \\(b, 4\\). The gradient of \\(AB\\) is \\(\\frac{3}{4}\\). Answer the following sub-questions.",
    "a": "a) 5, b) 5, c) 8, d) -4/3, e) CD: 3/4, AD: -4/3, f) D(-2, 5)",
    "solution": "a) Gradient of \\(AB\\): \\(\\frac{4 - 1}{b - 1} = \\frac{3}{4} \\implies \\frac{3}{b - 1} = \\frac{3}{4} \\implies b - 1 = 4 \\implies b = 5\\).\n\nb) Length \\(AB\\): \\(\\sqrt{(5 - 1)^2 + (4 - 1)^2} = \\sqrt{4^2 + 3^2} = 5\\).\n\nc) Point \\(C\\) is \\((2, c)\\). Since all sides of a rhombus are equal, \\(BC = 5\\):\n   \\((2 - 5)^2 + (c - 4)^2 = 25 \\implies 9 + (c - 4)^2 = 25 \\implies (c - 4)^2 = 16 \\implies c - 4 = 4\\text{ (since } c > 0) \\implies c = 8\\).\n\nd) Gradient \\(BC\\) where \\(B(5, 4)\\) and \\(C(2, 8)\\):\n   \\(m = \\frac{8 - 4}{2 - 5} = -\\frac{4}{3}\\).\n\ne) CD is parallel to AB (gradient \\(\\frac{3}{4}\\)), and AD is parallel to BC (gradient \\(-\\frac{4}{3}\\)).\n\nf) Vector \\(\\vec{AD} = \\vec{BC} = C - B = (2 - 5, 8 - 4) = (-3, 4)\\).\n   So \\(D = A + (-3, 4) = (1 - 3, 1 + 4) = (-2, 5)\\).",
    "t": "Challenge exercise",
    "hint": "Recall rhombus properties: equal side lengths, parallel opposite sides, and coordinates can be translated via vectors.",
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -4,
          10,
          7,
          -1
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nvar pA = board.create('point', [1, 1], {size: 3, color: 'black', name: 'A(1, 1)', withLabel: true, label: {offset: [10, -5]}});\nvar pB = board.create('point', [5, 4], {size: 3, color: 'black', name: 'B(5, 4)', withLabel: true, label: {offset: [10, 10]}});\nvar pC = board.create('point', [2, 8], {size: 3, color: 'black', name: 'C(2, 8)', withLabel: true, label: {offset: [10, 10]}});\nvar pD = board.create('point', [-2, 5], {size: 3, color: 'black', name: 'D(-2, 5)', withLabel: true, label: {offset: [-60, 5]}});\nboard.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});\nboard.unsuspendUpdate();"
      }
    },
    "subQuestions": [
      {
        "id": "y9-11i-q6a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "a) Find the value of \\(b\\).",
        "a": "5",
        "solutionSteps": [
          {
            "explanation": "Set gradient equation.",
            "workingOut": "\\frac{3}{b - 1} = \\frac{3}{4} \\implies b = 5"
          }
        ]
      },
      {
        "id": "y9-11i-q6b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "b) Find the length of \\(AB\\).",
        "a": "5",
        "solutionSteps": [
          {
            "explanation": "Use distance formula.",
            "workingOut": "AB = \\sqrt{(5-1)^2 + (4-1)^2} = 5"
          }
        ]
      },
      {
        "id": "y9-11i-q6c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "c) The point \\(C\\) has coordinates \\((2, c)\\), where \\(c\\) is a positive integer. Find the value of \\(c\\).",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Solve distance BC = 5.",
            "workingOut": "(2-5)^2 + (c-4)^2 = 25 \\implies (c-4)^2 = 16 \\implies c = 8"
          }
        ]
      },
      {
        "id": "y9-11i-q6d",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "d) Find the gradient of \\(BC\\).",
        "a": "-4/3",
        "solutionSteps": [
          {
            "explanation": "Compute slope BC.",
            "workingOut": "m = \\frac{8 - 4}{2 - 5} = -\\frac{4}{3}"
          }
        ]
      },
      {
        "id": "y9-11i-q6e",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "e) State the gradient of \\(CD\\) and \\(AD\\) (Format: CD: [val], AD: [val]).",
        "a": "CD: 3/4, AD: -4/3",
        "solutionSteps": [
          {
            "explanation": "Rhombus opposite gradients properties.",
            "workingOut": "m_{CD} = m_{AB} = \\frac{3}{4}, \\quad m_{AD} = m_{BC} = -\\frac{4}{3}"
          }
        ]
      },
      {
        "id": "y9-11i-q6f",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "f) Find the coordinates of \\(D\\).",
        "a": "(-2, 5)",
        "solutionSteps": [
          {
            "explanation": "Use vectors to find D.",
            "workingOut": "D = A + (C - B) = (1 - 3, 1 + 4) = (-2, 5)"
          }
        ]
      }
    ]
  },
  {
    "id": "y9-11i-q7",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(ABC\\) be any triangle. Take the \\(x\\)-axis to be along \\(BC\\) and the \\(y\\)-axis through the midpoint \\(O\\) of \\(BC\\) perpendicular to \\(BC\\). Prove that \\(AB^2 + AC^2 = 2AO^2 + 2OC^2\\). (This result is known as Apollonius' theorem.)",
    "a": "Proof: Assign coordinates B(-c, 0), C(c, 0), A(a, b). Evaluate LHS and RHS algebraically.",
    "solution": "1. Let \\(O(0, 0)\\) be the midpoint of \\(BC\\).\n2. Since \\(BC\\) lies on the \\(x\\)-axis, let \\(C\\) have coordinates \\((c, 0)\\) and \\(B\\) have coordinates \\((-c, 0)\\).\n3. Let \\(A\\) have coordinates \\((a, b)\\).\n4. Compute the distances squared:\n   - \\(AB^2 = (a - (-c))^2 + (b - 0)^2 = (a + c)^2 + b^2 = a^2 + 2ac + c^2 + b^2\\)\n   - \\(AC^2 = (a - c)^2 + (b - 0)^2 = a^2 - 2ac + c^2 + b^2\\)\n   - \\(AO^2 = a^2 + b^2\\)\n   - \\(OC^2 = c^2\\)\n5. Sum the left-hand side:\n   \\(AB^2 + AC^2 = (a^2 + 2ac + c^2 + b^2) + (a^2 - 2ac + c^2 + b^2) = 2a^2 + 2b^2 + 2c^2\\)\n6. Evaluate the right-hand side:\n   \\(2AO^2 + 2OC^2 = 2(a^2 + b^2) + 2c^2 = 2a^2 + 2b^2 + 2c^2\\).\nSince LHS = RHS, Apollonius' theorem is proven.",
    "t": "Challenge exercise",
    "hint": "Place the triangle on the Cartesian plane with B(-c, 0), C(c, 0), and A(a, b) and compute distances.",
    "solutionSteps": [
      {
        "explanation": "Define coordinate points.",
        "workingOut": "B(-c, 0), \\quad C(c, 0), \\quad A(a, b), \\quad O(0,0)"
      },
      {
        "explanation": "Calculate LHS.",
        "workingOut": "AB^2 + AC^2 = (a+c)^2+b^2 + (a-c)^2+b^2 = 2a^2+2b^2+2c^2"
      },
      {
        "explanation": "Calculate RHS.",
        "workingOut": "2AO^2 + 2OC^2 = 2(a^2+b^2) + 2c^2 = 2a^2+2b^2+2c^2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q8",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Use coordinate geometry to prove that the line joining the midpoints of two sides of a triangle is parallel to the third side and half its length. Take the base of the triangle to be on the \\(x\\)-axis with one vertex at the origin.",
    "a": "Proof: Let vertices be A(0, 0), C(c, 0), B(u, v). Find midpoints of AB and BC, then check slope and length.",
    "solution": "1. Let \\(A(0, 0)\\), \\(C(c, 0)\\), and \\(B(u, v)\\) represent the vertices of the triangle.\n2. Let \\(M\\) be the midpoint of \\(AB\\): \\(M\\left(\\frac{u}{2}, \\frac{v}{2}\\right)\\).\n3. Let \\(N\\) be the midpoint of \\(BC\\): \\(N\\left(\\frac{u+c}{2}, \\frac{v}{2}\\right)\\).\n4. Determine the gradient of \\(MN\\):\n   \\(m_{MN} = \\frac{v/2 - v/2}{(u+c)/2 - u/2} = 0\\).\n   Since the gradient of \\(AC\\) is also 0 (it lies on the \\(x\\)-axis), \\(MN \\parallel AC\\).\n5. Find the length of \\(MN\\):\n   \\(MN = \\frac{u+c}{2} - \\frac{u}{2} = \\frac{c}{2} = \\frac{1}{2}AC\\).\nTherefore, the midpoint line segment is parallel to the third side and half its length.",
    "t": "Challenge exercise",
    "hint": "Define A(0, 0), C(c, 0), B(u, v) and find midpoints M and N of AB and BC.",
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "C": [
            6,
            0
          ],
          "B": [
            3,
            4
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "C"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Place triangle on plane.",
        "workingOut": "A(0, 0), \\quad C(c, 0), \\quad B(u, v)"
      },
      {
        "explanation": "Find midpoints M and N.",
        "workingOut": "M = \\left(\\frac{u}{2}, \\frac{v}{2}\\right), \\quad N = \\left(\\frac{u+c}{2}, \\frac{v}{2}\\right)"
      },
      {
        "explanation": "Check gradient and length.",
        "workingOut": "m_{MN} = 0 \\implies MN \\parallel AC, \\quad MN = \\frac{c}{2} = \\frac{1}{2}AC"
      }
    ]
  },
  {
    "id": "y9-11i-q9",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Use coordinate geometry to prove that the diagonals of an isosceles trapezium \\(ABCD\\) are equal in length.",
    "a": "Proof: Assign coordinates A(0, 0), B(a, 0), D(b, c), C(a - b, c). Show AC = BD.",
    "solution": "1. Let \\(A(0, 0)\\) and \\(B(a, 0)\\) be on the \\(x\\)-axis.\n2. Let \\(D(b, c)\\) and \\(C(a-b, c)\\) be the coordinates of the upper base vertices.\n3. Check sides for isosceles property:\n   - \\(AD^2 = b^2 + c^2\\)\n   - \\(BC^2 = (a-b-a)^2 + c^2 = (-b)^2 + c^2 = b^2 + c^2\\).\n   Since \\(AD = BC\\), the trapezium is isosceles.\n4. Calculate diagonal lengths:\n   - \\(AC = \\sqrt{(a-b - 0)^2 + (c-0)^2} = \\sqrt{(a-b)^2 + c^2}\\)\n   - \\(BD = \\sqrt{(b-a)^2 + (c-0)^2} = \\sqrt{(a-b)^2 + c^2}\\).\nSince \\(AC = BD\\), the diagonals are equal in length.",
    "t": "Challenge exercise",
    "hint": "Define A(0, 0), B(a, 0), D(b, c), and C(a - b, c) and compare lengths of diagonals AC and BD.",
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            6,
            0
          ],
          "C": [
            4,
            3
          ],
          "D": [
            2,
            3
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A"
          },
          {
            "from": "A",
            "to": "C",
            "dashed": true
          },
          {
            "from": "B",
            "to": "D",
            "dashed": true
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Define trapezium vertices.",
        "workingOut": "A(0, 0), \\quad B(a, 0), \\quad D(b, c), \\quad C(a-b, c)"
      },
      {
        "explanation": "Verify diagonals lengths.",
        "workingOut": "AC^2 = (a-b)^2 + c^2, \\quad BD^2 = (b-a)^2 + c^2 \\implies AC = BD"
      }
    ]
  },
  {
    "id": "y9-11i-q10",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Use coordinate geometry to prove that the medians of any triangle are concurrent.",
    "a": "Proof: Assign coordinates A(0, 0), B(6a, 0), C(6u, 6v). Show centroid divides medians in 2:1 ratio.",
    "solution": "1. Let the vertices of the triangle be \\(A(0, 0)\\), \\(B(6a, 0)\\), and \\(C(6u, 6v)\\).\n2. Determine midpoints of the sides opposite to the vertices:\n   - Midpoint of \\(BC\\): \\(D(3a+3u, 3v)\\)\n   - Midpoint of \\(AC\\): \\(E(3u, 3v)\\)\n   - Midpoint of \\(AB\\): \\(F(3a, 0)\\)\n3. Find the point \\(G\\) that divides median \\(AD\\) in the ratio \\(2 : 1\\) from \\(A\\) to \\(D\\):\n   \\(G = \\frac{1}{3}A + \\frac{2}{3}D = (0, 0) + \\frac{2}{3}(3a+3u, 3v) = (2a+2u, 2v)\\).\n4. Verify that \\(G\\) also divides medians \\(BE\\) and \\(CF\\) in the ratio \\(2 : 1\\):\n   - For \\(BE\\) from \\(B(6a, 0)\\) to \\(E(3u, 3v)\\):\n     \\(\\frac{1}{3}(6a, 0) + \\frac{2}{3}(3u, 3v) = (2a+2u, 2v) = G\\).\n   - For \\(CF\\) from \\(C(6u, 6v)\\) to \\(F(3a, 0)\\):\n     \\(\\frac{1}{3}(6u, 6v) + \\frac{2}{3}(3a, 0) = (2u+2a, 2v) = G\\).\nSince all three medians pass through the same point \\(G(2a+2u, 2v)\\), they are concurrent.",
    "t": "Challenge exercise",
    "hint": "Find the coordinates of the point dividing each median in the ratio 2 : 1 and show they are the same.",
    "solutionSteps": [
      {
        "explanation": "Define coordinates to avoid fractions.",
        "workingOut": "A(0, 0), \\quad B(6a, 0), \\quad C(6u, 6v)"
      },
      {
        "explanation": "Calculate division point G on medians.",
        "workingOut": "G = (2a+2u, 2v) \\text{ lies on all three medians.}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11i-q11",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The semicircle shown below is drawn with centre \\(O\\) at the origin and radius \\(R\\). \\(P(x, y)\\) is any point on the semicircle. The endpoints of the diameter are \\(A(-R, 0)\\) and \\(B(R, 0)\\). Answer the following sub-questions.",
    "a": "a) Proof: OP^2 = x^2 + y^2 = R^2, b) Proof: Gradient m_PA = y/(x+R), m_PB = y/(x-R). Show m_PA * m_PB = -1, c) Proof: PA^2 + PB^2 = (x+R)^2 + y^2 + (x-R)^2 + y^2 = 2x^2 + 2y^2 + 2R^2 = 4R^2",
    "solution": "a) The distance from the origin \\(O(0, 0)\\) to \\(P(x, y)\\) on the semicircle is the radius \\(R\\):\n   \\(OP = \\sqrt{x^2 + y^2} = R \\implies x^2 + y^2 = R^2\\).\n\nb) Determine gradients of \\(PA\\) and \\(PB\\):\n   - \\(m_{PA} = \\frac{y - 0}{x - (-R)} = \\frac{y}{x + R}\\)\n   - \\(m_{PB} = \\frac{y - 0}{x - R} = \\frac{y}{x - R}\\)\n   Multiply the gradients:\n   \\(m_{PA} \\times m_{PB} = \\frac{y^2}{x^2 - R^2}\\).\n   Since \\(x^2 + y^2 = R^2 \\implies y^2 = R^2 - x^2 = -(x^2 - R^2)\\):\n   \\(m_{PA} \\times m_{PB} = \\frac{-(x^2 - R^2)}{x^2 - R^2} = -1\\).\n   Thus, \\(PA \\perp PB\\).\n\nc) Compute the sum of the squares of the lengths:\n   \\(PA^2 + PB^2 = (x + R)^2 + y^2 + (x - R)^2 + y^2 = x^2 + 2xR + R^2 + y^2 + x^2 - 2xR + R^2 + y^2\\)\n   \\(= 2x^2 + 2y^2 + 2R^2 = 2(x^2 + y^2) + 2R^2 = 2R^2 + 2R^2 = 4R^2\\).",
    "t": "Challenge exercise",
    "hint": "Use Cartesian formulas for distances and gradients to prove perpendicularity and algebraic identity.",
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -7,
          7,
          7,
          -2
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nvar pO = board.create('point', [0, 0], {size: 3, color: 'red', name: 'O', withLabel: true, label: {offset: [-15, 10]}});\nvar pA = board.create('point', [-5, 0], {size: 3, color: 'black', name: 'A(-R, 0)', withLabel: true, label: {offset: [-40, -15]}});\nvar pB = board.create('point', [5, 0], {size: 3, color: 'black', name: 'B(R, 0)', withLabel: true, label: {offset: [10, -15]}});\nvar c = board.create('arc', [pO, pB, pA], {strokeColor: 'blue', strokeWidth: 1.5});\nvar pP = board.create('point', [3, 4], {size: 3, color: 'black', name: 'P(x, y)', withLabel: true, label: {offset: [10, 10]}});\nboard.create('segment', [pA, pP], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [pB, pP], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [pO, pP], {strokeColor: 'red', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    },
    "subQuestions": [
      {
        "id": "y9-11i-q11a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "a) Show that \\(x^2 + y^2 = R^2\\).",
        "a": "Proof: Distance from origin O(0,0) to P(x,y) is radius R.",
        "solutionSteps": [
          {
            "explanation": "Use distance formula from origin.",
            "workingOut": "OP = \\sqrt{x^2 + y^2} = R \\implies x^2 + y^2 = R^2"
          }
        ]
      },
      {
        "id": "y9-11i-q11b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "b) Show that \\(PA\\) is perpendicular to the line \\(PB\\).",
        "a": "Proof: Multiply gradients of PA and PB to show they equal -1.",
        "solutionSteps": [
          {
            "explanation": "Evaluate gradient product.",
            "workingOut": "m_{PA} \\times m_{PB} = \\frac{y}{x+R} \\times \\frac{y}{x-R} = \\frac{y^2}{x^2 - R^2} = \\frac{R^2 - x^2}{x^2 - R^2} = -1"
          }
        ]
      },
      {
        "id": "y9-11i-q11c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "c) Show that \\(PA^2 + PB^2 = 4R^2\\).",
        "a": "Proof: Substitute coordinates and expand.",
        "solutionSteps": [
          {
            "explanation": "Expand squared terms and simplify.",
            "workingOut": "PA^2 + PB^2 = 2x^2 + 2y^2 + 2R^2 = 2R^2 + 2R^2 = 4R^2"
          }
        ]
      }
    ]
  }
];
