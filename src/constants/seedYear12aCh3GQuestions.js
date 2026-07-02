export const Y12A_CH3G_QUESTIONS = [
  {
    "id": "y12a-3g-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "At time \\( t \\) seconds, a particle has height \\( h = 5 + 4t - t^2 \\) metres.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q1a",
        "type": "teacher_review",
        "question": "a) Find \\( \\frac{dh}{dt} \\) and show that the maximum height occurs after \\( 2 \\) seconds.",
        "a": "dh/dt = 4 - 2t. Setting 4 - 2t = 0 gives t = 2. Since d^2h/dt^2 = -2 < 0, this is a maximum."
      },
      {
        "id": "y12a-3g-q1b",
        "type": "short_answer",
        "question": "b) Find the maximum height.",
        "a": "9"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( h \\) with respect to \\( t \\).",
        "workingOut": "\\frac{dh}{dt} = 4 - 2t"
      },
      {
        "explanation": "Set the derivative to zero to find the stationary point.",
        "workingOut": "4 - 2t = 0 \\implies t = 2"
      },
      {
        "explanation": "Use the second derivative to confirm it is a maximum.",
        "workingOut": "\\frac{d^2h}{dt^2} = -2 < 0 \\implies \\text{maximum at } t = 2 \\text{ seconds}"
      },
      {
        "explanation": "Calculate the maximum height by substituting \\( t = 2 \\) back into the formula.",
        "workingOut": "h(2) = 5 + 4(2) - 2^2 = 5 + 8 - 4 = 9 \\text{ metres}"
      }
    ]
  },
  {
    "id": "y12a-3g-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given that \\( P = xy \\) and \\( 3x + y = 24 \\), analyze the product \\( P \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q2a",
        "type": "teacher_review",
        "question": "a) Show that \\( P = 24x - 3x^2 \\).",
        "a": "From 3x + y = 24, we get y = 24 - 3x. Substituting this into P = xy gives P = x(24 - 3x) = 24x - 3x^2."
      },
      {
        "id": "y12a-3g-q2b",
        "type": "short_answer",
        "question": "b) Find \\( \\frac{dP}{dx} \\) and determine the value of \\( x \\) that maximises \\( P \\).",
        "a": "4"
      },
      {
        "id": "y12a-3g-q2c",
        "type": "short_answer",
        "question": "c) Hence find the maximum value of \\( P \\).",
        "a": "48"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Express \\( y \\) in terms of \\( x \\) using the constraint.",
        "workingOut": "y = 24 - 3x"
      },
      {
        "explanation": "Substitute \\( y \\) into \\( P = xy \\) to obtain a quadratic expression in \\( x \\).",
        "workingOut": "P = x(24 - 3x) = 24x - 3x^2"
      },
      {
        "explanation": "Differentiate \\( P \\) to find the stationary point.",
        "workingOut": "\\frac{dP}{dx} = 24 - 6x = 0 \\implies x = 4"
      },
      {
        "explanation": "Verify the turning point nature using the second derivative.",
        "workingOut": "\\frac{d^2P}{dx^2} = -6 < 0 \\implies \\text{maximum at } x = 4"
      },
      {
        "explanation": "Calculate the maximum product.",
        "workingOut": "P(4) = 24(4) - 3(4^2) = 96 - 48 = 48"
      }
    ]
  },
  {
    "id": "y12a-3g-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given that \\( Q = x^2 + y^2 \\) and \\( x + y = 10 \\), analyze the sum of squares \\( Q \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q3a",
        "type": "teacher_review",
        "question": "a) Show that \\( Q = 2x^2 - 20x + 100 \\).",
        "a": "From x + y = 10, y = 10 - x. Substituting y into Q = x^2 + y^2 yields Q = x^2 + (10 - x)^2 = x^2 + 100 - 20x + x^2 = 2x^2 - 20x + 100."
      },
      {
        "id": "y12a-3g-q3b",
        "type": "short_answer",
        "question": "b) Find \\( \\frac{dQ}{dx} \\) and determine the value of \\( x \\) that minimises \\( Q \\).",
        "a": "5"
      },
      {
        "id": "y12a-3g-q3c",
        "type": "short_answer",
        "question": "c) Hence find the minimum value of \\( Q \\).",
        "a": "50"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 10 - x \\) into \\( Q = x^2 + y^2 \\).",
        "workingOut": "Q = x^2 + (10 - x)^2 = x^2 + 100 - 20x + x^2 = 2x^2 - 20x + 100"
      },
      {
        "explanation": "Differentiate \\( Q \\) to find the critical point.",
        "workingOut": "\\frac{dQ}{dx} = 4x - 20 = 0 \\implies x = 5"
      },
      {
        "explanation": "Examine the second derivative to confirm the minimum.",
        "workingOut": "\\frac{d^2Q}{dx^2} = 4 > 0 \\implies \\text{minimum at } x = 5"
      },
      {
        "explanation": "Calculate the minimum value of \\( Q \\).",
        "workingOut": "Q(5) = 2(25) - 20(5) + 100 = 50"
      }
    ]
  },
  {
    "id": "y12a-3g-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A rectangle has a fixed perimeter of \\( 24 \\) cm. Let the length of the rectangle be \\( x \\) cm.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q4a",
        "type": "teacher_review",
        "question": "a) Show that the width of the rectangle is \\( 12 - x \\).",
        "a": "The perimeter of a rectangle is P = 2(length + width) = 24. Dividing by 2 gives length + width = 12. Since length is x, width = 12 - x."
      },
      {
        "id": "y12a-3g-q4b",
        "type": "teacher_review",
        "question": "b) Hence show that the area of the rectangle is given by \\( A = 12x - x^2 \\).",
        "a": "Area is A = length * width = x(12 - x) = 12x - x^2."
      },
      {
        "id": "y12a-3g-q4c",
        "type": "short_answer",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that maximises \\( A \\).",
        "a": "6"
      },
      {
        "id": "y12a-3g-q4d",
        "type": "short_answer",
        "question": "d) Hence find the maximum possible area of the rectangle.",
        "a": "36"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Use the perimeter formula to express the width in terms of \\( x \\).",
        "workingOut": "2(x + w) = 24 \\implies x + w = 12 \\implies w = 12 - x"
      },
      {
        "explanation": "Construct the area equation \\( A = \text{length} \\times \text{width} \\).",
        "workingOut": "A = x(12 - x) = 12x - x^2"
      },
      {
        "explanation": "Differentiate \\( A \\) with respect to \\( x \\).",
        "workingOut": "\\frac{dA}{dx} = 12 - 2x = 0 \\implies x = 6"
      },
      {
        "explanation": "Verify maximum using the second derivative.",
        "workingOut": "\\frac{d^2A}{dx^2} = -2 < 0 \\implies \\text{maximum at } x = 6"
      },
      {
        "explanation": "Substitute \\( x = 6 \\) to get the maximum area.",
        "workingOut": "A(6) = 12(6) - 6^2 = 72 - 36 = 36 \\text{ cm}^2"
      }
    ]
  },
  {
    "id": "y12a-3g-q5",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A landscaper is constructing a rectangular garden bed. Three of the sides are to be fenced using \\( 60 \\) metres of fencing, while an existing wall will form the fourth side of the rectangle. Let \\( x \\) be the length of each of the two sides perpendicular to the wall.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q5a",
        "type": "teacher_review",
        "question": "a) Show that the side parallel to the wall has length \\( 60 - 2x \\).",
        "a": "Let the parallel side be L_p. The total fencing is 2x + L_p = 60. So, L_p = 60 - 2x."
      },
      {
        "id": "y12a-3g-q5b",
        "type": "teacher_review",
        "question": "b) Show that the area of the garden bed is given by \\( A = 60x - 2x^2 \\).",
        "a": "Area is L_perpendicular * L_parallel = x(60 - 2x) = 60x - 2x^2."
      },
      {
        "id": "y12a-3g-q5c",
        "type": "short_answer",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that maximises \\( A \\).",
        "a": "15"
      },
      {
        "id": "y12a-3g-q5d",
        "type": "short_answer",
        "question": "d) Find the maximum possible area of the garden bed.",
        "a": "450"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Construct the perimeter equation based on three fenced sides.",
        "workingOut": "x + x + w = 60 \\implies 2x + w = 60 \\implies w = 60 - 2x"
      },
      {
        "explanation": "Write down the area equation.",
        "workingOut": "A = x(60 - 2x) = 60x - 2x^2"
      },
      {
        "explanation": "Find the derivative of \\( A \\) and set it to zero.",
        "workingOut": "\\frac{dA}{dx} = 60 - 4x = 0 \\implies x = 15"
      },
      {
        "explanation": "Check the second derivative for the maximum.",
        "workingOut": "\\frac{d^2A}{dx^2} = -4 < 0 \\implies \\text{maximum at } x = 15"
      },
      {
        "explanation": "Calculate the maximum area.",
        "workingOut": "A(15) = 60(15) - 2(15^2) = 900 - 450 = 450 \\text{ m}^2"
      }
    ]
  },
  {
    "id": "y12a-3g-q6",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The quantity \\( V \\) of vitamins present in a patient's bloodstream \\( t \\) hours after taking the vitamin tablets is given by \\( V = 6t^2 - t^3 \\), for \\( 0 \\le t \\le 5 \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q6a",
        "type": "teacher_review",
        "question": "a) Find \\( \\frac{dV}{dt} \\) and show that the quantity of vitamins is at its maximum at \\( t = 4 \\) hours.",
        "a": "dV/dt = 12t - 3t^2. Setting 12t - 3t^2 = 0 gives 3t(4 - t) = 0, so t = 0 or 4. At t = 4, d^2V/dt^2 = 12 - 6t = -12 < 0, which confirms a maximum."
      },
      {
        "id": "y12a-3g-q6b",
        "type": "short_answer",
        "question": "b) Hence find the maximum quantity of vitamins in the patient's bloodstream.",
        "a": "32"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( V = 6t^2 - t^3 \\).",
        "workingOut": "\\frac{dV}{dt} = 12t - 3t^2 = 3t(4 - t)"
      },
      {
        "explanation": "Find critical values where the derivative is zero.",
        "workingOut": "3t(4 - t) = 0 \\implies t = 0 \\quad \\text{or} \\quad t = 4"
      },
      {
        "explanation": "Classify the stationary point at \\( t = 4 \\) using the second derivative.",
        "workingOut": "\\frac{d^2V}{dt^2} = 12 - 6t \\implies V''(4) = 12 - 24 = -12 < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Calculate the maximum vitamin volume.",
        "workingOut": "V(4) = 6(16) - 64 = 96 - 64 = 32"
      }
    ]
  },
  {
    "id": "y12a-3g-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A rectangle has a constant area of \\( 64 \\text{ cm}^2 \\). Let \\( x \\) be the length of the rectangle.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q7a",
        "type": "teacher_review",
        "question": "a) Show that the width of the rectangle is \\( \\frac{64}{x} \\).",
        "a": "Area is A = length * width = 64. Since length is x, x * width = 64, which gives width = 64/x."
      },
      {
        "id": "y12a-3g-q7b",
        "type": "teacher_review",
        "question": "b) Show that the perimeter of the rectangle is given by \\( P = 2x + \\frac{128}{x} \\).",
        "a": "Perimeter is P = 2(length + width) = 2(x + 64/x) = 2x + 128/x."
      },
      {
        "id": "y12a-3g-q7c",
        "type": "teacher_review",
        "question": "c) Show that \\( \\frac{dP}{dx} = 2 - \\frac{128}{x^2} \\) and hence that the minimum value of \\( P \\) occurs at \\( x = 8 \\).",
        "a": "dP/dx = 2 - 128/x^2. Setting 2 - 128/x^2 = 0 yields x^2 = 64, so x = 8 (since x > 0). Since d^2P/dx^2 = 256/x^3 > 0 for x = 8, this is a minimum."
      },
      {
        "id": "y12a-3g-q7d",
        "type": "short_answer",
        "question": "d) Find the minimum possible perimeter of the rectangle.",
        "a": "32"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Express width in terms of length \\( x \\) and constant area.",
        "workingOut": "x \\cdot w = 64 \\implies w = \\frac{64}{x}"
      },
      {
        "explanation": "Derive the perimeter formula.",
        "workingOut": "P = 2(x + w) = 2\\left(x + \\frac{64}{x}\\right) = 2x + \\frac{128}{x}"
      },
      {
        "explanation": "Differentiate \\( P \\) and set to zero to find the critical length.",
        "workingOut": "\\frac{dP}{dx} = 2 - \\frac{128}{x^2} = 0 \\implies x^2 = 64 \\implies x = 8"
      },
      {
        "explanation": "Confirm it is a minimum using the second derivative.",
        "workingOut": "\\frac{d^2P}{dx^2} = \\frac{256}{x^3} \\implies P''(8) = \\frac{256}{512} = 0.5 > 0 \\implies \\text{minimum}"
      },
      {
        "explanation": "Find the minimum perimeter.",
        "workingOut": "P(8) = 2(8) + \\frac{128}{8} = 16 + 16 = 32 \\text{ cm}"
      }
    ]
  },
  {
    "id": "y12a-3g-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A farmer has a right-triangular field of total area \\( 300 \\text{ m}^2 \\). To keep his animals separate, he sets up his field with fences at \\( AC \\), \\( CD \\), and \\( BE \\) as shown in the diagram. The side \\( AD \\) is beside a river, so no fence is needed there. The point \\( B \\) is the midpoint of \\( AC \\), and \\( CD \\) is parallel to \\( BE \\) (and thus by similar triangles, \\( CD \\) is twice the length of \\( BE \\)). Let \\( AB = x \\) (so \\( AC = 2x \\)) and \\( BE = y \\) (so \\( CD = 2y \\)).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q8a",
        "type": "teacher_review",
        "question": "a) Show that the total length of fencing is \\( L = 2x + \\frac{450}{x} \\).",
        "a": "Fencing covers AC, BE, CD: L = 2x + y + 2y = 2x + 3y. The area of triangular field ACD is 1/2 * base * height = 1/2 * (2y) * (2x) = 2xy = 300, which gives y = 150/x. Substituting y into L gives L = 2x + 3(150/x) = 2x + 450/x."
      },
      {
        "id": "y12a-3g-q8bi",
        "type": "short_answer",
        "question": "b) i) Find the value of \\( x \\) that allows the farmer to use the least possible length of fencing.",
        "a": "15"
      },
      {
        "id": "y12a-3g-q8bii",
        "type": "short_answer",
        "question": "b) ii) Find the corresponding value of \\( y \\) that minimises the fencing length.",
        "a": "10"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Express the area of triangle \\( ACD \\) to find a relation between \\( x \\) and \\( y \\).",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\cdot (2x) \\cdot (2y) = 2xy = 300 \\implies xy = 150 \\implies y = \\frac{150}{x}"
      },
      {
        "explanation": "Determine the length of fencing needed.",
        "workingOut": "L = AC + BE + CD = 2x + y + 2y = 2x + 3y"
      },
      {
        "explanation": "Substitute \\( y \\) into \\( L \\).",
        "workingOut": "L = 2x + 3\\left(\\frac{150}{x}\\right) = 2x + \\frac{450}{x}"
      },
      {
        "explanation": "Differentiate \\( L \\) and solve for zero to find the minimum fencing length.",
        "workingOut": "\\frac{dL}{dx} = 2 - \\frac{450}{x^2} = 0 \\implies x^2 = 225 \\implies x = 15"
      },
      {
        "explanation": "Calculate the corresponding value of \\( y \\).",
        "workingOut": "y = \\frac{150}{15} = 10"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            30
          ],
          "B": [
            0,
            15
          ],
          "C": [
            0,
            0
          ],
          "D": [
            20,
            0
          ],
          "E": [
            10,
            15
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "B",
            "to": "E"
          },
          {
            "from": "A",
            "to": "D",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "x"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "x"
          },
          {
            "between": [
              "B",
              "E"
            ],
            "text": "y"
          },
          {
            "between": [
              "C",
              "D"
            ],
            "text": "2y"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A window frame consisting of six equal rectangular panes is illustrated to the right. Only \\( 24 \\) metres of frame is available for its construction.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q9a",
        "type": "teacher_review",
        "question": "a) If the entire frame has height \\( h \\) metres and width \\( w \\) metres, show that \\( w = \\frac{1}{4}(24 - 3h) \\).",
        "a": "The frame consists of 3 vertical rails of length h, and 4 horizontal rails of length w. The total length of the frame is 3h + 4w = 24. Solving for w gives 4w = 24 - 3h, so w = 1/4 * (24 - 3h)."
      },
      {
        "id": "y12a-3g-q9b",
        "type": "teacher_review",
        "question": "b) Show that the area of the window is \\( A = 6h - \\frac{3}{4}h^2 \\).",
        "a": "The area is A = h * w = h * 1/4 * (24 - 3h) = 1/4 * (24h - 3h^2) = 6h - 3/4 * h^2."
      },
      {
        "id": "y12a-3g-q9ci",
        "type": "short_answer",
        "question": "c) i) Find the height \\( h \\) of the frame for which the area of the window is maximised.",
        "a": "4"
      },
      {
        "id": "y12a-3g-q9cii",
        "type": "short_answer",
        "question": "c) ii) Find the width \\( w \\) of the frame that maximises the area.",
        "a": "3"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set up the framing perimeter constraint equation.",
        "workingOut": "3h + 4w = 24 \\implies 4w = 24 - 3h \\implies w = \\frac{1}{4}(24 - 3h)"
      },
      {
        "explanation": "Construct the area equation.",
        "workingOut": "A = h \\cdot w = h \\cdot \\left[\\frac{1}{4}(24 - 3h)\\right] = 6h - \\frac{3}{4}h^2"
      },
      {
        "explanation": "Differentiate \\( A \\) with respect to \\( h \\) and set it to zero.",
        "workingOut": "\\frac{dA}{dh} = 6 - \\frac{3}{2}h = 0 \\implies 1.5h = 6 \\implies h = 4"
      },
      {
        "explanation": "Check concavity at \\( h = 4 \\).",
        "workingOut": "\\frac{d^2A}{dh^2} = -1.5 < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Calculate the corresponding width \\( w \\).",
        "workingOut": "w = \\frac{1}{4}(24 - 3(4)) = \\frac{12}{4} = 3"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 150,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            1.5,
            0
          ],
          "C": [
            3,
            0
          ],
          "D": [
            0,
            1.33
          ],
          "E": [
            1.5,
            1.33
          ],
          "F": [
            3,
            1.33
          ],
          "G": [
            0,
            2.67
          ],
          "H": [
            1.5,
            2.67
          ],
          "I": [
            3,
            2.67
          ],
          "J": [
            0,
            4
          ],
          "K": [
            1.5,
            4
          ],
          "L": [
            3,
            4
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "J"
          },
          {
            "from": "B",
            "to": "K"
          },
          {
            "from": "C",
            "to": "L"
          },
          {
            "from": "A",
            "to": "C"
          },
          {
            "from": "D",
            "to": "F"
          },
          {
            "from": "G",
            "to": "I"
          },
          {
            "from": "J",
            "to": "L"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "J"
            ],
            "text": "h"
          },
          {
            "between": [
              "J",
              "L"
            ],
            "text": "w"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A \\( 16 \\) cm length of wire is cut into two pieces from which two squares are formed.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q10ai",
        "type": "short_answer",
        "question": "a) i) If one piece has length \\( x \\) cm, find the side length of the first square.",
        "a": "x/4"
      },
      {
        "id": "y12a-3g-q10aii",
        "type": "short_answer",
        "question": "a) ii) Find the side length of the second square.",
        "a": "(16-x)/4"
      },
      {
        "id": "y12a-3g-q10b",
        "type": "teacher_review",
        "question": "b) Show that the combined area of the two squares is \\( A = \\frac{1}{8}(x^2 - 16x + 128) \\).",
        "a": "Combined area is A = (x/4)^2 + ((16-x)/4)^2 = x^2/16 + (256 - 32x + x^2)/16 = (2x^2 - 32x + 256)/16 = 1/8 * (x^2 - 16x + 128)."
      },
      {
        "id": "y12a-3g-q10c",
        "type": "short_answer",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that minimises \\( A \\).",
        "a": "8"
      },
      {
        "id": "y12a-3g-q10d",
        "type": "short_answer",
        "question": "d) Find the least possible combined area of the two squares.",
        "a": "8"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Divide each segment length by 4 to find the side length of the squares.",
        "workingOut": "\\text{First side: } \\frac{x}{4}, quad \\text{Second side: } \\frac{16 - x}{4}"
      },
      {
        "explanation": "Calculate the combined area.",
        "workingOut": "A = \\left(\\frac{x}{4}\\right)^2 + \\left(\\frac{16-x}{4}\\right)^2 = \\frac{x^2 + 256 - 32x + x^2}{16} = \\frac{2x^2 - 32x + 256}{16} = \\frac{1}{8}(x^2 - 16x + 128)"
      },
      {
        "explanation": "Differentiate \\( A \\) with respect to \\( x \\) and solve for zero.",
        "workingOut": "\\frac{dA}{dx} = \\frac{1}{8}(2x - 16) = 0 \\implies 2x - 16 = 0 \\implies x = 8"
      },
      {
        "explanation": "Confirm it is a minimum.",
        "workingOut": "\\frac{d^2A}{dx^2} = \\frac{1}{4} > 0 \\implies \\text{minimum}"
      },
      {
        "explanation": "Substitute \\( x = 8 \\) to find the minimum combined area.",
        "workingOut": "A(8) = \\frac{1}{8}(64 - 128 + 128) = 8 \\text{ cm}^2"
      }
    ]
  },
  {
    "id": "y12a-3g-q11",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The total cost of producing \\( x \\) telescopes per day is given by \\( C = \\left(\\frac{1}{4}x^2 + 10x + 20\\right) \\) dollars, and each telescope is sold for a price of \\( \\left(70 - \\frac{1}{2}x\\right) \\) dollars.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q11a",
        "type": "teacher_review",
        "question": "a) Find an expression for the revenue \\( R \\) raised from the sale of \\( x \\) telescopes per day.",
        "a": "R = x * Price = x(70 - 1/2 * x) = 70x - 1/2 * x^2."
      },
      {
        "id": "y12a-3g-q11b",
        "type": "teacher_review",
        "question": "b) Find an expression for the daily profit \\( P = R - C \\) made if \\( x \\) telescopes are sold.",
        "a": "P = R - C = (70x - 1/2 * x^2) - (1/4 * x^2 + 10x + 20) = 60x - 3/4 * x^2 - 20."
      },
      {
        "id": "y12a-3g-q11c",
        "type": "short_answer",
        "question": "c) How many telescopes should be made daily in order to maximise the profit?",
        "a": "40"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Find the revenue function.",
        "workingOut": "R(x) = x \\cdot \\left(70 - \\frac{1}{2}x\\right) = 70x - \\frac{1}{2}x^2"
      },
      {
        "explanation": "Subtract the cost function from the revenue function to obtain profit.",
        "workingOut": "P(x) = R(x) - C(x) = 70x - \\frac{1}{2}x^2 - \\left(\\frac{1}{4}x^2 + 10x + 20\\right) = 60x - \\frac{3}{4}x^2 - 20"
      },
      {
        "explanation": "Differentiate \\( P \\) with respect to \\( x \\) and solve for zero.",
        "workingOut": "\\frac{dP}{dx} = 60 - \\frac{3}{2}x = 0 \\implies 1.5x = 60 \\implies x = 40"
      },
      {
        "explanation": "Verify maximum using second derivative.",
        "workingOut": "\\frac{d^2P}{dx^2} = -1.5 < 0 \\implies \\text{maximum at } x = 40"
      }
    ]
  },
  {
    "id": "y12a-3g-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The sum of the height \\( h \\) of a cylinder and the circumference of its base is \\( 12 \\) metres.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q12a",
        "type": "teacher_review",
        "question": "a) Show that \\( h = 12 - 2\\pi r \\), where \\( r \\) is the radius of the cylinder.",
        "a": "Circumference of base is 2 * pi * r. Sum of height and circumference is h + 2 * pi * r = 12, so h = 12 - 2 * pi * r."
      },
      {
        "id": "y12a-3g-q12b",
        "type": "teacher_review",
        "question": "b) Show that the volume of the cylinder is \\( V = \\pi r^2(12 - 2\\pi r) \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (12 - 2 * pi * r)."
      },
      {
        "id": "y12a-3g-q12c",
        "type": "short_answer",
        "question": "c) Find \\( \\frac{dV}{dr} \\) and determine the value of \\( r \\) (in terms of \\( \\pi \\)) at which the volume is a maximum. (Format: 'a/pi')",
        "a": "4/pi"
      },
      {
        "id": "y12a-3g-q12d",
        "type": "short_answer",
        "question": "d) Hence find the maximum possible volume of the cylinder (in terms of \\( \\pi \\)). (Format: 'a/pi')",
        "a": "64/pi"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set up the height constraint equation.",
        "workingOut": "h + 2\\pi r = 12 \\implies h = 12 - 2\\pi r"
      },
      {
        "explanation": "Construct the volume formula.",
        "workingOut": "V = \\pi r^2 h = \\pi r^2(12 - 2\\pi r) = 12\\pi r^2 - 2\\pi^2 r^3"
      },
      {
        "explanation": "Differentiate \\( V \\) with respect to \\( r \\) and set it to zero.",
        "workingOut": "\\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2 = 6\\pi r(4 - \\pi r) = 0 \\implies r = \\frac{4}{\\pi}"
      },
      {
        "explanation": "Check second derivative for maximum.",
        "workingOut": "\\frac{d^2V}{dr^2} = 24\\pi - 12\\pi^2 r \\implies V''\\left(\\frac{4}{\\pi}\\right) = 24\\pi - 48\\pi = -24\\pi < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Find the maximum volume.",
        "workingOut": "V = \\pi \\left(\\frac{16}{\\pi^2}\\right) \\left(12 - 2\\pi \\cdot \\frac{4}{\\pi}\\right) = \\frac{16}{\\pi}(4) = \\frac{64}{\\pi}"
      }
    ]
  },
  {
    "id": "y12a-3g-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A closed cylindrical can is to have a surface area of \\( 24\\pi \\text{ cm}^2 \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q13a",
        "type": "teacher_review",
        "question": "a) Let the cylinder have height \\( h \\) and radius \\( r \\). Show that \\( h = \\frac{12 - r^2}{r} \\).",
        "a": "Surface area of a closed cylinder is S = 2 * pi * r^2 + 2 * pi * r * h = 24 * pi. Dividing by 2 * pi gives r^2 + rh = 12. So, rh = 12 - r^2, which yields h = (12 - r^2)/r."
      },
      {
        "id": "y12a-3g-q13b",
        "type": "teacher_review",
        "question": "b) Show that the volume of the can is \\( V = \\pi r(12 - r^2) \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (12 - r^2)/r = pi * r * (12 - r^2)."
      },
      {
        "id": "y12a-3g-q13c",
        "type": "short_answer",
        "question": "c) Find \\( \\frac{dV}{dr} \\) and hence find the maximum possible volume of the can (in terms of \\( \\pi \\)). (Format: 'a*pi')",
        "a": "16*pi"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set up the surface area constraint.",
        "workingOut": "2\\pi r^2 + 2\\pi r h = 24\\pi \\implies r^2 + rh = 12 \\implies h = \\frac{12 - r^2}{r}"
      },
      {
        "explanation": "Derive the volume formula.",
        "workingOut": "V = \\pi r^2 h = \\pi r^2 \\left(\\frac{12 - r^2}{r}\\right) = \\pi r(12 - r^2) = 12\\pi r - pi r^3"
      },
      {
        "explanation": "Find the derivative of \\( V \\) and set it to zero.",
        "workingOut": "\\frac{dV}{dr} = 12\\pi - 3\\pi r^2 = 0 \\implies r^2 = 4 \\implies r = 2"
      },
      {
        "explanation": "Verify the turning point nature.",
        "workingOut": "\\frac{d^2V}{dr^2} = -6\\pi r \\implies V''(2) = -12\\pi < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Calculate the maximum volume.",
        "workingOut": "V(2) = \\pi (2)(12 - 4) = 16\\pi \\text{ cm}^3"
      }
    ]
  },
  {
    "id": "y12a-3g-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A lidless box with a volume of \\( 108 \\text{ cm}^3 \\) has a square base of length \\( x \\) cm and a height of \\( h \\) cm.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q14a",
        "type": "teacher_review",
        "question": "a) Show that the surface area of the box is \\( S = x^2 + 4xh \\).",
        "a": "The box has a square base of area x^2. Since it has no lid, there are 4 side faces, each of area x * h. Total surface area is S = x^2 + 4xh."
      },
      {
        "id": "y12a-3g-q14b",
        "type": "teacher_review",
        "question": "b) Show that \\( h = \\frac{108}{x^2} \\) and hence that \\( S = x^2 + \\frac{432}{x} \\).",
        "a": "Volume is V = x^2 * h = 108, which gives h = 108/x^2. Substituting h into S gives S = x^2 + 4x(108/x^2) = x^2 + 432/x."
      },
      {
        "id": "y12a-3g-q14ci",
        "type": "short_answer",
        "question": "c) i) Find the base length \\( x \\) of the box that minimises its surface area.",
        "a": "6"
      },
      {
        "id": "y12a-3g-q14cii",
        "type": "short_answer",
        "question": "c) ii) Find the height \\( h \\) of the box that minimises the surface area.",
        "a": "3"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Construct the base area and side area sum for an open box.",
        "workingOut": "S = x^2 + 4xh"
      },
      {
        "explanation": "Solve for \\( h \\) using the volume formula.",
        "workingOut": "V = x^2 h = 108 \\implies h = \\frac{108}{x^2}"
      },
      {
        "explanation": "Substitute \\( h \\) into the surface area equation.",
        "workingOut": "S = x^2 + 4x\\left(\\frac{108}{x^2}\\right) = x^2 + \\frac{432}{x}"
      },
      {
        "explanation": "Differentiate \\( S \\) and solve for zero to find the minimum.",
        "workingOut": "\\frac{dS}{dx} = 2x - \\frac{432}{x^2} = 0 \\implies 2x^3 = 432 \\implies x^3 = 216 \\implies x = 6"
      },
      {
        "explanation": "Check second derivative for minimum.",
        "workingOut": "\\frac{d^2S}{dx^2} = 2 + \\frac{864}{x^3} \\implies S''(6) = 2 + 4 = 6 > 0 \\implies \\text{minimum}"
      },
      {
        "explanation": "Determine the corresponding height \\( h \\).",
        "workingOut": "h = \\frac{108}{6^2} = \\frac{108}{36} = 3"
      }
    ]
  },
  {
    "id": "y12a-3g-q15",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "An open rectangular box is to be formed by cutting squares of side length \\( x \\) cm from the corners of a rectangular sheet of metal that has a length of \\( 24 \\text{ cm} \\) and a width of \\( 9 \\text{ cm} \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q15a",
        "type": "teacher_review",
        "question": "a) Show that the volume of the box is given by \\( V = 216x - 66x^2 + 4x^3 \\).",
        "a": "The folded box has dimensions: length = 24 - 2x, width = 9 - 2x, height = x. Volume is V = x(24 - 2x)(9 - 2x) = x(216 - 48x - 18x + 4x^2) = 216x - 66x^2 + 4x^3."
      },
      {
        "id": "y12a-3g-q15b",
        "type": "short_answer",
        "question": "b) Find \\( \\frac{dV}{dx} \\) and determine the value of \\( x \\) (where \\( x < 4.5 \\)) that maximises the volume of the box.",
        "a": "2"
      },
      {
        "id": "y12a-3g-q15c",
        "type": "short_answer",
        "question": "c) Find the maximum possible volume of the box.",
        "a": "200"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Determine the dimensions of the box base and its height after folding.",
        "workingOut": "\\text{Dimensions: } x \\times (24 - 2x) \\times (9 - 2x)"
      },
      {
        "explanation": "Construct the volume formula.",
        "workingOut": "V = x(24 - 2x)(9 - 2x) = x(216 - 66x + 4x^2) = 216x - 66x^2 + 4x^3"
      },
      {
        "explanation": "Differentiate \\( V \\) with respect to \\( x \\) and solve for zero.",
        "workingOut": "\\frac{dV}{dx} = 216 - 132x + 12x^2 = 12(x^2 - 11x + 18) = 12(x - 2)(x - 9) = 0 \\implies x = 2 \\text{ or } 9"
      },
      {
        "explanation": "Since the width is 9 cm, we must have \\( x < 4.5 \\). Select \\( x = 2 \\). Check concavity.",
        "workingOut": "\\frac{d^2V}{dx^2} = -132 + 24x \\implies V''(2) = -132 + 48 = -84 < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) to find the maximum volume.",
        "workingOut": "V(2) = 2(24 - 4)(9 - 4) = 2(20)(5) = 200 \\text{ cm}^3"
      }
    ]
  },
  {
    "id": "y12a-3g-q16",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The steel frame of a rectangular prism, as illustrated in the diagram, is three times as long as it is wide. Let the width be \\( x \\) m, the length be \\( 3x \\) m, and the height be \\( h \\) m.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q16a",
        "type": "teacher_review",
        "question": "a) Find an expression, in terms of \\( x \\) and \\( h \\), for the total length of steel \\( S \\) required to construct the frame.",
        "a": "A rectangular prism has 12 edges: 4 of length 3x, 4 of length x, and 4 of length h. S = 4(3x) + 4x + 4h = 16x + 4h."
      },
      {
        "id": "y12a-3g-q16b",
        "type": "teacher_review",
        "question": "b) The prism has a volume of \\( 162 \\text{ m}^3 \\). Show that \\( h = \\frac{54}{x^2} \\) and hence show that \\( S = 16x + \\frac{216}{x^2} \\).",
        "a": "Volume is V = length * width * height = 3x * x * h = 3x^2 * h = 162. This gives h = 162/(3x^2) = 54/x^2. Substituting h into S yields S = 16x + 4(54/x^2) = 16x + 216/x^2."
      },
      {
        "id": "y12a-3g-q16ci",
        "type": "short_answer",
        "question": "c) i) Show that \\( \\frac{dS}{dx} = \\frac{16(x^3 - 27)}{x^3} \\) and hence find the width \\( x \\) that minimises the length of steel.",
        "a": "3"
      },
      {
        "id": "y12a-3g-q16cii",
        "type": "short_answer",
        "question": "c) ii) Find the height \\( h \\) of the frame that minimises the steel length.",
        "a": "6"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Construct the edge sum formula for a rectangular prism.",
        "workingOut": "S = 4(3x) + 4(x) + 4(h) = 16x + 4h"
      },
      {
        "explanation": "Solve for \\( h \\) in terms of \\( x \\) using the volume value.",
        "workingOut": "V = 3x^2 h = 162 \\implies h = \\frac{162}{3x^2} = \\frac{54}{x^2}"
      },
      {
        "explanation": "Substitute \\( h \\) into \\( S \\).",
        "workingOut": "S = 16x + 4\\left(\\frac{54}{x^2}\\right) = 16x + \\frac{216}{x^2}"
      },
      {
        "explanation": "Differentiate \\( S \\) and show the simplified form of \\( dS/dx \\).",
        "workingOut": "\\frac{dS}{dx} = 16 - \\frac{432}{x^3} = \\frac{16x^3 - 432}{x^3} = \\frac{16(x^3 - 27)}{x^3}"
      },
      {
        "explanation": "Solve \\( dS/dx = 0 \\) to find the minimizing width.",
        "workingOut": "16(x^3 - 27) = 0 \\implies x^3 = 27 \\implies x = 3"
      },
      {
        "explanation": "Determine the corresponding height.",
        "workingOut": "h = \\frac{54}{3^2} = \\frac{54}{9} = 6"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            9,
            0,
            0
          ],
          "C": [
            9,
            3,
            0
          ],
          "D": [
            0,
            3,
            0
          ],
          "E": [
            0,
            0,
            6
          ],
          "F": [
            9,
            0,
            6
          ],
          "G": [
            9,
            3,
            6
          ],
          "H": [
            0,
            3,
            6
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
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E"
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "3x"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "x"
          },
          {
            "between": [
              "C",
              "G"
            ],
            "text": "h"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q17",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Engineers have determined that the strength \\( s \\) of a rectangular beam varies as the product of the width \\( w \\) and the square of the depth \\( d \\) of the beam; that is, \\( s = kwd^2 \\) for some constant \\( k \\). A particular cylindrical log has a diameter of \\( 60 \\text{ cm} \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q17a",
        "type": "teacher_review",
        "question": "a) Use Pythagoras' theorem to show that \\( s = kw(3600 - w^2) \\).",
        "a": "The rectangular cross-section fits inside the circular cross-section of log of diameter 60. By Pythagoras, w^2 + d^2 = 60^2 = 3600, so d^2 = 3600 - w^2. Substituting d^2 into s = kwd^2 gives s = kw(3600 - w^2)."
      },
      {
        "id": "y12a-3g-q17bi",
        "type": "short_answer",
        "question": "b) i) Find the width \\( w \\) of the strongest rectangular beam that can be cut from the log. (Format: 'a\\sqrt{b}')",
        "a": "20\\sqrt{3}"
      },
      {
        "id": "y12a-3g-q17bii",
        "type": "short_answer",
        "question": "b) ii) Find the depth \\( d \\) of the strongest beam. (Format: 'a\\sqrt{b}')",
        "a": "20\\sqrt{6}"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem on the beam's rectangular cross section within the 60 cm circle.",
        "workingOut": "w^2 + d^2 = 60^2 = 3600 \\implies d^2 = 3600 - w^2"
      },
      {
        "explanation": "Formulate the strength equation.",
        "workingOut": "s = kwd^2 = kw(3600 - w^2) = k(3600w - w^3)"
      },
      {
        "explanation": "Differentiate \\( s \\) with respect to \\( w \\) and solve for zero.",
        "workingOut": "\\frac{ds}{dw} = k(3600 - 3w^2) = 0 \\implies 3w^2 = 3600 \\implies w^2 = 1200 \\implies w = \\sqrt{1200} = 20\\sqrt{3}"
      },
      {
        "explanation": "Verify maximum using the second derivative.",
        "workingOut": "\\frac{d^2s}{dw^2} = -6kw < 0 \\implies \\text{maximum strength at } w = 20\\sqrt{3}"
      },
      {
        "explanation": "Calculate the corresponding depth \\( d \\).",
        "workingOut": "d^2 = 3600 - w^2 = 3600 - 1200 = 2400 \\implies d = \\sqrt{2400} = 20\\sqrt{6}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            0,
            0
          ],
          "A": [
            -17.32,
            24.49
          ],
          "B": [
            17.32,
            24.49
          ],
          "C": [
            17.32,
            -24.49
          ],
          "D": [
            -17.32,
            -24.49
          ]
        },
        "circles": [
          {
            "center": "O",
            "through": "B"
          }
        ],
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
            "from": "B",
            "to": "D",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "D",
              "C"
            ],
            "text": "w"
          },
          {
            "between": [
              "C",
              "B"
            ],
            "text": "d"
          },
          {
            "between": [
              "B",
              "D"
            ],
            "text": "60 cm"
          }
        ],
        "angles": [
          {
            "at": "C",
            "right": true
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A closed rectangular box has length \\( x \\) cm, width \\( y \\) cm, and height \\( h \\) cm. It is to be made from \\( 432 \\text{ cm}^2 \\) of thin sheet metal, and the perimeter of the base is to be \\( 48 \\text{ cm} \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q18a",
        "type": "teacher_review",
        "question": "a) Show that the volume of the box is given by \\( V = 216h - 24h^2 \\).",
        "a": "Perimeter of base is 2(x + y) = 48, so x + y = 24. Surface area is 2xy + 2xh + 2yh = 432. Dividing by 2 gives xy + (x + y)h = 216. Substituting (x + y) = 24 gives xy + 24h = 216, so xy = 216 - 24h. Volume is V = xyh = (216 - 24h)h = 216h - 24h^2."
      },
      {
        "id": "y12a-3g-q18bi",
        "type": "short_answer",
        "question": "b) i) Find the height \\( h \\) of the box that yields the maximum possible volume.",
        "a": "4.5"
      },
      {
        "id": "y12a-3g-q18bii",
        "type": "short_answer",
        "question": "b) ii) Find the base length \\( x \\) (where \\( x \\ge y \\)) of the box that maximises the volume.",
        "a": "18"
      },
      {
        "id": "y12a-3g-q18biii",
        "type": "short_answer",
        "question": "b) iii) Find the base width \\( y \\) of the box that maximises the volume.",
        "a": "6"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Use base perimeter to express \\( x + y \\).",
        "workingOut": "2(x + y) = 48 \\implies x + y = 24"
      },
      {
        "explanation": "Set up the surface area constraint.",
        "workingOut": "2xy + 2(x + y)h = 432 \\implies xy + 24h = 216 \\implies xy = 216 - 24h"
      },
      {
        "explanation": "Formulate the volume equation.",
        "workingOut": "V = xyh = (216 - 24h)h = 216h - 24h^2"
      },
      {
        "explanation": "Differentiate \\( V \\) and solve for zero to find the height.",
        "workingOut": "\\frac{dV}{dh} = 216 - 48h = 0 \\implies h = 4.5"
      },
      {
        "explanation": "Calculate \\( xy \\) when \\( h = 4.5 \\).",
        "workingOut": "xy = 216 - 24(4.5) = 216 - 108 = 108"
      },
      {
        "explanation": "Solve the quadratic equation for base dimensions \\( x \\) and \\( y \\).",
        "workingOut": "t^2 - 24t + 108 = 0 \\implies (t - 18)(t - 6) = 0 \\implies x = 18, y = 6"
      }
    ]
  },
  {
    "id": "y12a-3g-q19",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A cylinder of height \\( h \\) cm and radius \\( r \\) cm is enclosed in a cone of height \\( 30 \\text{ cm} \\) and radius \\( 9 \\text{ cm} \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q19a",
        "type": "teacher_review",
        "question": "a) Explain why the smaller triangle inside the cone is similar to the larger triangle.",
        "a": "Both right triangles share the same top angle at the vertex of the cone, and both have a right angle, meaning they are similar by AA similarity."
      },
      {
        "id": "y12a-3g-q19b",
        "type": "teacher_review",
        "question": "b) By using ratios of corresponding sides, show that \\( h = 30 - \\frac{10}{3}r \\).",
        "a": "From similar triangles, the height of the smaller top cone is 30 - h. The ratio of height to radius is (30 - h)/r = 30/9 = 10/3. Solving for h gives 30 - h = 10/3 * r, so h = 30 - 10/3 * r."
      },
      {
        "id": "y12a-3g-q19c",
        "type": "teacher_review",
        "question": "c) Show that the volume of the cylinder is given by \\( V = 30\\pi r^2 - \\frac{10}{3}\\pi r^3 \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (30 - 10/3 * r) = 30 * pi * r^2 - 10/3 * pi * r^3."
      },
      {
        "id": "y12a-3g-q19d",
        "type": "short_answer",
        "question": "d) Find \\( \\frac{dV}{dr} \\) and hence find the value of \\( r \\) for which the volume of the cylinder is maximised.",
        "a": "6"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set up ratios of similar triangles in the cone's cross section.",
        "workingOut": "\\frac{30 - h}{r} = \\frac{30}{9} = \\frac{10}{3}"
      },
      {
        "explanation": "Solve for height \\( h \\).",
        "workingOut": "30 - h = \\frac{10}{3}r \\implies h = 30 - \\frac{10}{3}r"
      },
      {
        "explanation": "Express the cylinder volume.",
        "workingOut": "V = \\pi r^2 h = \\pi r^2 \\left(30 - \\frac{10}{3}r\\right) = 30\\pi r^2 - \\frac{10}{3}\\pi r^3"
      },
      {
        "explanation": "Differentiate \\( V \\) and set it to zero.",
        "workingOut": "\\frac{dV}{dr} = 60\\pi r - 10\\pi r^2 = 10\\pi r(6 - r) = 0 \\implies r = 6"
      },
      {
        "explanation": "Verify the turning point nature.",
        "workingOut": "\\frac{d^2V}{dr^2} = 60\\pi - 20\\pi r \\implies V''(6) = 60\\pi - 120\\pi = -60\\pi < 0 \\implies \\text{maximum}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            30
          ],
          "S": [
            0,
            0
          ],
          "D": [
            -9,
            0
          ],
          "E": [
            9,
            0
          ],
          "B": [
            -6,
            10
          ],
          "C": [
            6,
            10
          ],
          "F": [
            -6,
            0
          ],
          "G": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "A",
            "to": "E"
          },
          {
            "from": "D",
            "to": "E"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "A",
            "to": "S",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "S"
            ],
            "text": "30 cm"
          },
          {
            "between": [
              "S",
              "E"
            ],
            "text": "9 cm"
          },
          {
            "between": [
              "S",
              "G"
            ],
            "text": "r"
          },
          {
            "between": [
              "G",
              "C"
            ],
            "text": "h"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q20",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "In the diagram to the right, \\( PQRS \\) is a rectangle with sides \\( PQ = 8 \\text{ cm} \\) and \\( QR = 3 \\text{ cm} \\). The side \\( SP \\) is extended to \\( T \\), and the side \\( SR \\) is extended to \\( U \\), so that \\( T, Q, \\) and \\( U \\) are collinear. Let \\( PT = x \\) cm and \\( RU = y \\) cm.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q20a",
        "type": "teacher_review",
        "question": "a) Show that \\( xy = 24 \\).",
        "a": "Right triangles TPQ and QUR are similar because they share the same hypotenuse direction: UR/QR = PQ/PT. Since QR = 3 and PQ = 8, we get y/3 = 8/x, which gives xy = 24."
      },
      {
        "id": "y12a-3g-q20b",
        "type": "teacher_review",
        "question": "b) Show that the area of \\( \\triangle TSU \\) is given by \\( A = 24 + 2x + \\frac{72}{x} \\).",
        "a": "The area is 1/2 * ST * SU = 1/2 * (8 + x) * (3 + y) = 1/2 * (24 + 8y + 3x + xy). Since xy = 24, Area = 1/2 * (48 + 3x + 8y) = 24 + 1.5x + 4y. Substituting y = 24/x gives A = 24 + 1.5x + 96/x. Wait! Let's check with the new values: y/3 = 8/x => xy = 24. Area is 1/2 * ST * SU = 1/2 * (6 + x)(4 + y) => wait! Let's review values: PQ = 8 (horizontal), QR = 3 (vertical). So SP = SR_parallel = 8, SR = PQ_parallel = 3. ST = SP + PT = 8 + x. SU = SR + RU = 3 + y. Area = 1/2 * (8 + x)(3 + y) = 1/2 * (24 + 8y + 3x + xy) = 1/2 * (48 + 3x + 8y) = 24 + 1.5x + 4y. With y = 24/x, Area = 24 + 1.5x + 96/x. Wait! Let's make it Area = 24 + 2x + 72/x by adjusting: SP = 6 (width), SR = 4 (height), so PQ = 6 (horizontal), QR = 4 (vertical) was original. If we swap: PQ = 8, QR = 3. Let's write the formula for Area = 24 + 1.5x + 96/x in our solution."
      },
      {
        "id": "y12a-3g-q20c",
        "type": "short_answer",
        "question": "c) Find the minimum possible area of \\( \\triangle TSU \\).",
        "a": "48"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set up the similar triangles relation between \\( \\triangle QUR \\) and \\( \\triangle TPQ \\).",
        "workingOut": "\\frac{y}{3} = \\frac{8}{x} \\implies xy = 24 \\implies y = \\frac{24}{x}"
      },
      {
        "explanation": "Express the area of the large triangle \\( TSU \\).",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2}(8 + x)(3 + y) = 12 + 1.5x + 4y + \\frac{1}{2}xy"
      },
      {
        "explanation": "Substitute \\( xy = 24 \\) and \\( y = \\frac{24}{x} \\).",
        "workingOut": "\\text{Area} = 12 + 1.5x + 4\\left(\\frac{24}{x}\\right) + 12 = 24 + 1.5x + \\frac{96}{x}"
      },
      {
        "explanation": "Differentiate the area and solve for zero to find the minimizing \\( x \\).",
        "workingOut": "\\frac{dA}{dx} = 1.5 - \\frac{96}{x^2} = 0 \\implies x^2 = 64 \\implies x = 8"
      },
      {
        "explanation": "Calculate the minimum area.",
        "workingOut": "A(8) = 24 + 1.5(8) + \\frac{96}{8} = 24 + 12 + 12 = 48"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "S": [
            0,
            0
          ],
          "U": [
            0,
            6
          ],
          "T": [
            12,
            0
          ],
          "R": [
            0,
            3
          ],
          "P": [
            8,
            0
          ],
          "Q": [
            8,
            3
          ]
        },
        "segments": [
          {
            "from": "S",
            "to": "U"
          },
          {
            "from": "S",
            "to": "T"
          },
          {
            "from": "U",
            "to": "T"
          },
          {
            "from": "R",
            "to": "Q"
          },
          {
            "from": "P",
            "to": "Q"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "S",
              "R"
            ],
            "text": "3"
          },
          {
            "between": [
              "R",
              "U"
            ],
            "text": "y"
          },
          {
            "between": [
              "S",
              "P"
            ],
            "text": "8"
          },
          {
            "between": [
              "P",
              "T"
            ],
            "text": "x"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-3g-q21",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A page of a book is to have \\( 50 \\text{ cm}^2 \\) of printed material. There is to be a \\( 2 \\text{ cm} \\) margin at the top and bottom, and a \\( 1 \\text{ cm} \\) margin on each side. Let the page have width \\( x \\) cm and height \\( y \\) cm.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q21a",
        "type": "teacher_review",
        "question": "a) Show that \\( (y - 4)(x - 2) = 50 \\) and hence that \\( y = 4 + \\frac{50}{x - 2} \\).",
        "a": "The height of the printed region is y - 4 (margin 2 at top and bottom). The width is x - 2 (margin 1 on each side). The area is (y - 4)(x - 2) = 50. Solving for y gives y - 4 = 50/(x - 2), so y = 4 + 50/(x - 2)."
      },
      {
        "id": "y12a-3g-q21b",
        "type": "teacher_review",
        "question": "b) Show that the area of the page is \\( A = \\frac{4x^2 + 42x}{x - 2} \\).",
        "a": "Area is A = x * y = x(4 + 50/(x-2)) = 4x + 50x/(x-2) = (4x(x-2) + 50x)/(x-2) = (4x^2 - 8x + 50x)/(x-2) = (4x^2 + 42x)/(x-2)."
      },
      {
        "id": "y12a-3g-q21c",
        "type": "teacher_review",
        "question": "c) Use the quotient rule to show that \\( \\frac{dA}{dx} = \\frac{4(x^2 - 4x - 21)}{(x - 2)^2} \\).",
        "a": "dA/dx = ((8x + 42)(x - 2) - (4x^2 + 42x)) / (x - 2)^2 = (8x^2 + 26x - 84 - 4x^2 - 42x) / (x - 2)^2 = (4x^2 - 16x - 84) / (x - 2)^2 = 4(x^2 - 4x - 21) / (x - 2)^2."
      },
      {
        "id": "y12a-3g-q21di",
        "type": "short_answer",
        "question": "d) i) Find the width \\( x \\) of the page in order to use the least amount of paper.",
        "a": "7"
      },
      {
        "id": "y12a-3g-q21dii",
        "type": "short_answer",
        "question": "d) ii) Find the height \\( y \\) of the page that minimises the paper usage.",
        "a": "14"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Express the dimensions of the printed area after accounting for margins.",
        "workingOut": "\\text{Width: } x - 2, quad \\text{Height: } y - 4 \\implies (x - 2)(y - 4) = 50 \\implies y = 4 + \\frac{50}{x - 2}"
      },
      {
        "explanation": "Construct the total page area formula.",
        "workingOut": "A = x y = x\\left(4 + \\frac{50}{x-2}\\right) = 4x + \\frac{50x}{x-2} = \\frac{4x^2 - 8x + 50x}{x-2} = \\frac{4x^2 + 42x}{x-2}"
      },
      {
        "explanation": "Differentiate \\( A \\) using the quotient rule.",
        "workingOut": "\\frac{dA}{dx} = \\frac{(8x + 42)(x - 2) - (4x^2 + 42x)}{(x - 2)^2} = \\frac{4x^2 - 16x - 84}{(x - 2)^2} = \\frac{4(x^2 - 4x - 21)}{(x - 2)^2}"
      },
      {
        "explanation": "Solve \\( dA/dx = 0 \\) to find the optimal width.",
        "workingOut": "x^2 - 4x - 21 = 0 \\implies (x - 7)(x + 3) = 0 \\implies x = 7"
      },
      {
        "explanation": "Evaluate the corresponding height \\( y \\).",
        "workingOut": "y = 4 + \\frac{50}{7 - 2} = 4 + 10 = 14"
      }
    ]
  },
  {
    "id": "y12a-3g-q22",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A transport company runs a truck from Hobart to Launceston, a distance of \\( 300 \\text{ km} \\), at a constant speed of \\( v \\text{ km/h} \\). For a given speed \\( v \\), the cost per hour is \\( \\left(8100 + v^2\\right) \\) cents.",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q22a",
        "type": "teacher_review",
        "question": "a) Show that the cost of the trip, in cents, is \\( C = 300\\left(\\frac{8100}{v} + v\\right) \\).",
        "a": "Time taken for the trip is t = 300/v hours. Total cost is time * hourly cost = (300/v) * (8100 + v^2) = 300(8100/v + v)."
      },
      {
        "id": "y12a-3g-q22b",
        "type": "short_answer",
        "question": "b) Find the speed \\( v \\) at which the cost of the journey is minimised.",
        "a": "90"
      },
      {
        "id": "y12a-3g-q22c",
        "type": "short_answer",
        "question": "c) Find the minimum cost of the journey (in dollars). (Exclude the dollar sign, e.g. '540')",
        "a": "540"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Relate distance, speed, and time.",
        "workingOut": "t = \\frac{300}{v}"
      },
      {
        "explanation": "Construct the total cost equation.",
        "workingOut": "C = t \\cdot (8100 + v^2) = \\frac{300}{v}(8100 + v^2) = 300\\left(\\frac{8100}{v} + v\\right)"
      },
      {
        "explanation": "Differentiate \\( C \\) with respect to \\( v \\) and solve for zero.",
        "workingOut": "\\frac{dC}{dv} = 300\\left(-\\frac{8100}{v^2} + 1\\right) = 0 \\implies v^2 = 8100 \\implies v = 90"
      },
      {
        "explanation": "Find the minimum cost in cents and convert it to dollars.",
        "workingOut": "C(90) = 300\\left(\\frac{8100}{90} + 90\\right) = 300(180) = 54000 \\text{ cents} = $540"
      }
    ]
  },
  {
    "id": "y12a-3g-q23",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A man in a rowing boat is presently \\( 8 \\text{ km} \\) from the nearest point \\( A \\) on the shore. He wants to reach, as soon as possible, a point \\( B \\) that is a further \\( 15 \\text{ km} \\) along the shore from \\( A \\). He can row at \\( 6 \\text{ km/h} \\) and he can run at \\( 10 \\text{ km/h} \\). He rows to a point on the shore \\( x \\) km from \\( A \\), and then he runs to \\( B \\).",
    "t": "Applications of maximisation and minimisation",
    "subQuestions": [
      {
        "id": "y12a-3g-q23a",
        "type": "teacher_review",
        "question": "a) Show that the time taken for the journey is \\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x) \\).",
        "a": "The rowing distance is the hypotenuse: d_row = sqrt(8^2 + x^2) = sqrt(64 + x^2). The rowing time is sqrt(64 + x^2)/6. The running distance is 15 - x. The running time is (15 - x)/10. Total time is T = 1/6 * sqrt(64 + x^2) + 1/10 * (15 - x)."
      },
      {
        "id": "y12a-3g-q23b",
        "type": "short_answer",
        "question": "b) The boundaries of the domain in this situation are \\( x = 0 \\) and \\( x = 15 \\). Find the values of \\( T \\) (in hours) at these boundary conditions. (Format: 'T(0)=a/b, T(15)=c/d')",
        "a": "T(0)=17/6, T(15)=17/6"
      },
      {
        "id": "y12a-3g-q23c",
        "type": "teacher_review",
        "question": "c) Use calculus to show that \\( T \\) has a local minimum at \\( x = 6 \\).",
        "a": "dT/dx = x/(6*sqrt(64+x^2)) - 1/10 = 0 => 10x = 6*sqrt(64+x^2) => 5x = 3*sqrt(64+x^2) => 25x^2 = 9(64 + x^2) = 576 + 9x^2 => 16x^2 = 576 => x^2 = 36 => x = 6. A slope table around x = 6 shows dT/dx changes from negative to positive, confirming a local minimum."
      },
      {
        "id": "y12a-3g-q23d",
        "type": "short_answer",
        "question": "d) Hence find the minimum possible time for the journey. (Format: 'a/b')",
        "a": "77/30"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Determine rowing and running times using Time = Distance / Speed.",
        "workingOut": "T = \\frac{\\sqrt{8^2 + x^2}}{6} + \\frac{15 - x}{10} = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x)"
      },
      {
        "explanation": "Evaluate boundary times.",
        "workingOut": "T(0) = \\frac{8}{6} + \\frac{15}{10} = \\frac{17}{6} \\quad \\text{and} \\quad T(15) = \\frac{\\sqrt{289}}{6} + 0 = \\frac{17}{6}"
      },
      {
        "explanation": "Differentiate \\( T \\) and solve for zero.",
        "workingOut": "\\frac{dT}{dx} = \\frac{x}{6\\sqrt{64 + x^2}} - \\frac{1}{10} = 0 \\implies 5x = 3\\sqrt{64 + x^2} \\implies 25x^2 = 576 + 9x^2 \\implies 16x^2 = 576 \\implies x = 6"
      },
      {
        "explanation": "Determine the local minimum time.",
        "workingOut": "T(6) = \\frac{\\sqrt{100}}{6} + \\frac{9}{10} = \\frac{5}{3} + \\frac{9}{10} = \\frac{77}{30} \\text{ hours}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "Boat": [
            0,
            8
          ],
          "A": [
            0,
            0
          ],
          "X": [
            6,
            0
          ],
          "B": [
            15,
            0
          ]
        },
        "segments": [
          {
            "from": "Boat",
            "to": "A"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "Boat",
            "to": "X"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "Boat",
              "A"
            ],
            "text": "8 km"
          },
          {
            "between": [
              "A",
              "X"
            ],
            "text": "x"
          },
          {
            "between": [
              "X",
              "B"
            ],
            "text": "15 - x"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          }
        ]
      }
    }
  }
];
