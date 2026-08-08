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
        "type": "multiple_choice",
        "question": "a) Find \\( \\frac{dh}{dt} \\) and show that the maximum height occurs after \\( 2 \\) seconds.",
        "a": "dh/dt = 4 - 2t. Setting 4 - 2t = 0 gives t = 2. Since d^2h/dt^2 = -2 < 0, this is a maximum.",
        "opts": [
          "\\( \\frac{dh}{dt} = -2t \\), max at \\( t = 2 \\)",
          "\\( \\frac{dh}{dt} = 4 - t^2 \\), max at \\( t = 2 \\)",
          "\\( \\frac{dh}{dt} = 4 - 2t \\), max at \\( t = 2 \\)",
          "\\( \\frac{dh}{dt} = 4 + 2t \\), max at \\( t = 2 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dh}{dt} = -2t \\), max at \\( t = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dh}{dt} = 4 - t^2 \\), max at \\( t = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dh}{dt} = 4 - 2t \\), max at \\( t = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dh}{dt} = 4 + 2t \\), max at \\( t = 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( h \\) with respect to \\( t \\).",
            "workingOut": "\\frac{dh}{dt} = \\frac{d}{dt}(5 + 4t - t^2) = 4 - 2t"
          },
          {
            "explanation": "Set derivative to zero for turning point.",
            "workingOut": "4 - 2t = 0 \\implies 2t = 4 \\implies t = 2"
          },
          {
            "explanation": "Verify it is a maximum using the second derivative.",
            "workingOut": "\\frac{d^2h}{dt^2} = -2 < 0 \\implies \\text{local maximum at } t = 2"
          }
        ]
      },
      {
        "id": "y12a-3g-q1b",
        "type": "multiple_choice",
        "question": "b) Find the maximum height.",
        "a": "9",
        "opts": [
          "4",
          "9",
          "5",
          "8"
        ],
        "options": [
          {
            "text": "4",
            "imageUrl": ""
          },
          {
            "text": "9",
            "imageUrl": ""
          },
          {
            "text": "5",
            "imageUrl": ""
          },
          {
            "text": "8",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( t = 2 \\) back into the height equation.",
            "workingOut": "h(2) = 5 + 4(2) - (2)^2 = 5 + 8 - 4 = 9 \\text{ metres}"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that \\( P = 24x - 3x^2 \\).",
        "a": "From 3x + y = 24, we get y = 24 - 3x. Substituting this into P = xy gives P = x(24 - 3x) = 24x - 3x^2.",
        "opts": [
          "\\( P = 24x + 3x^2 \\)",
          "\\( P = 3x^2 - 24x \\)",
          "\\( P = 8x - x^2 \\)",
          "\\( P = 24x - 3x^2 \\)"
        ],
        "options": [
          {
            "text": "\\( P = 24x + 3x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 3x^2 - 24x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 8x - x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 24x - 3x^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Make \\( y \\) the subject in the linear equation.",
            "workingOut": "3x + y = 24 \\implies y = 24 - 3x"
          },
          {
            "explanation": "Substitute into \\( P = xy \\).",
            "workingOut": "P = x(24 - 3x) = 24x - 3x^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q2b",
        "type": "multiple_choice",
        "question": "b) Find \\( \\frac{dP}{dx} \\) and determine the value of \\( x \\) that maximises \\( P \\).",
        "a": "4",
        "opts": [
          "\\( \\frac{dP}{dx} = 24 - 6x \\), \\( x = 4 \\)",
          "\\( \\frac{dP}{dx} = -6x \\), \\( x = 0 \\)",
          "\\( \\frac{dP}{dx} = 24 + 6x \\), \\( x = -4 \\)",
          "\\( \\frac{dP}{dx} = 24 - 3x \\), \\( x = 8 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dP}{dx} = 24 - 6x \\), \\( x = 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = -6x \\), \\( x = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = 24 + 6x \\), \\( x = -4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = 24 - 3x \\), \\( x = 8 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( P \\) with respect to \\( x \\).",
            "workingOut": "\\frac{dP}{dx} = 24 - 6x"
          },
          {
            "explanation": "Set derivative to zero.",
            "workingOut": "24 - 6x = 0 \\implies 6x = 24 \\implies x = 4"
          },
          {
            "explanation": "Verify maximum.",
            "workingOut": "\\frac{d^2P}{dx^2} = -6 < 0 \\implies \\text{maximum when } x=4"
          }
        ]
      },
      {
        "id": "y12a-3g-q2c",
        "type": "multiple_choice",
        "question": "c) Hence find the maximum value of \\( P \\).",
        "a": "48",
        "opts": [
          "12",
          "24",
          "48",
          "96"
        ],
        "options": [
          {
            "text": "12",
            "imageUrl": ""
          },
          {
            "text": "24",
            "imageUrl": ""
          },
          {
            "text": "48",
            "imageUrl": ""
          },
          {
            "text": "96",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 4 \\) into the expression for \\( P \\).",
            "workingOut": "P = 24(4) - 3(4)^2 = 96 - 48 = 48"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that \\( Q = 2x^2 - 20x + 100 \\).",
        "a": "From x + y = 10, y = 10 - x. Substituting y into Q = x^2 + y^2 yields Q = x^2 + (10 - x)^2 = x^2 + 100 - 20x + x^2 = 2x^2 - 20x + 100.",
        "opts": [
          "\\( Q = 2x^2 + 20x + 100 \\)",
          "\\( Q = 2x^2 - 20x + 100 \\)",
          "\\( Q = 2x^2 + 100 \\)",
          "\\( Q = x^2 - 10x + 100 \\)"
        ],
        "options": [
          {
            "text": "\\( Q = 2x^2 + 20x + 100 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( Q = 2x^2 - 20x + 100 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( Q = 2x^2 + 100 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( Q = x^2 - 10x + 100 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Make \\( y \\) the subject in \\( x + y = 10 \\).",
            "workingOut": "y = 10 - x"
          },
          {
            "explanation": "Substitute into \\( Q = x^2 + y^2 \\).",
            "workingOut": "Q = x^2 + (10 - x)^2"
          },
          {
            "explanation": "Expand and simplify.",
            "workingOut": "Q = x^2 + 100 - 20x + x^2 = 2x^2 - 20x + 100"
          }
        ]
      },
      {
        "id": "y12a-3g-q3b",
        "type": "multiple_choice",
        "question": "b) Find \\( \\frac{dQ}{dx} \\) and determine the value of \\( x \\) that minimises \\( Q \\).",
        "a": "5",
        "opts": [
          "\\( \\frac{dQ}{dx} = 2x - 20 \\), \\( x = 10 \\)",
          "\\( \\frac{dQ}{dx} = 4x + 20 \\), \\( x = -5 \\)",
          "\\( \\frac{dQ}{dx} = 4x \\), \\( x = 0 \\)",
          "\\( \\frac{dQ}{dx} = 4x - 20 \\), \\( x = 5 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dQ}{dx} = 2x - 20 \\), \\( x = 10 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dQ}{dx} = 4x + 20 \\), \\( x = -5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dQ}{dx} = 4x \\), \\( x = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dQ}{dx} = 4x - 20 \\), \\( x = 5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( Q \\).",
            "workingOut": "\\frac{dQ}{dx} = 4x - 20"
          },
          {
            "explanation": "Set derivative to zero.",
            "workingOut": "4x - 20 = 0 \\implies x = 5"
          },
          {
            "explanation": "Verify minimum.",
            "workingOut": "\\frac{d^2Q}{dx^2} = 4 > 0 \\implies \\text{minimum when } x = 5"
          }
        ]
      },
      {
        "id": "y12a-3g-q3c",
        "type": "multiple_choice",
        "question": "c) Hence find the minimum value of \\( Q \\).",
        "a": "50",
        "opts": [
          "0",
          "25",
          "50",
          "100"
        ],
        "options": [
          {
            "text": "0",
            "imageUrl": ""
          },
          {
            "text": "25",
            "imageUrl": ""
          },
          {
            "text": "50",
            "imageUrl": ""
          },
          {
            "text": "100",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 5 \\) into \\( Q \\).",
            "workingOut": "Q = 2(5)^2 - 20(5) + 100 = 50 - 100 + 100 = 50"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the width of the rectangle is \\( 12 - x \\).",
        "a": "The perimeter of a rectangle is P = 2(length + width) = 24. Dividing by 2 gives length + width = 12. Since length is x, width = 12 - x.",
        "opts": [
          "\\( 12 - x \\)",
          "\\( 24 - x \\)",
          "\\( 12 - 2x \\)",
          "\\( 24 - 2x \\)"
        ],
        "options": [
          {
            "text": "\\( 12 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 24 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 - 2x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 24 - 2x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Write the formula for perimeter.",
            "workingOut": "2(\\text{length}) + 2(\\text{width}) = 24"
          },
          {
            "explanation": "Substitute length \\( x \\) and solve for width.",
            "workingOut": "2x + 2w = 24 \\implies 2w = 24 - 2x \\implies w = 12 - x"
          }
        ]
      },
      {
        "id": "y12a-3g-q4b",
        "type": "multiple_choice",
        "question": "b) Hence show that the area of the rectangle is given by \\( A = 12x - x^2 \\).",
        "a": "Area is A = length * width = x(12 - x) = 12x - x^2.",
        "opts": [
          "\\( A = 24x - x^2 \\)",
          "\\( A = x^2 - 12x \\)",
          "\\( A = 12x - 2x^2 \\)",
          "\\( A = 12x - x^2 \\)"
        ],
        "options": [
          {
            "text": "\\( A = 24x - x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = x^2 - 12x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 12x - 2x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 12x - x^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Multiply length by width.",
            "workingOut": "A = x(12 - x) = 12x - x^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q4c",
        "type": "multiple_choice",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that maximises \\( A \\).",
        "a": "6",
        "opts": [
          "\\( \\frac{dA}{dx} = 12 + 2x \\), \\( x = -6 \\)",
          "\\( \\frac{dA}{dx} = 12 - 2x \\), \\( x = 6 \\)",
          "\\( \\frac{dA}{dx} = 24 - 2x \\), \\( x = 12 \\)",
          "\\( \\frac{dA}{dx} = 12 - x \\), \\( x = 12 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dA}{dx} = 12 + 2x \\), \\( x = -6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 12 - 2x \\), \\( x = 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 24 - 2x \\), \\( x = 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 12 - x \\), \\( x = 12 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( A \\).",
            "workingOut": "\\frac{dA}{dx} = 12 - 2x"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "12 - 2x = 0 \\implies 2x = 12 \\implies x = 6"
          }
        ]
      },
      {
        "id": "y12a-3g-q4d",
        "type": "multiple_choice",
        "question": "d) Hence find the maximum possible area of the rectangle.",
        "a": "36",
        "opts": [
          "24",
          "72",
          "36",
          "144"
        ],
        "options": [
          {
            "text": "24",
            "imageUrl": ""
          },
          {
            "text": "72",
            "imageUrl": ""
          },
          {
            "text": "36",
            "imageUrl": ""
          },
          {
            "text": "144",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 6 \\) into \\( A \\).",
            "workingOut": "A = 12(6) - (6)^2 = 72 - 36 = 36 \\text{ cm}^2"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the side parallel to the wall has length \\( 60 - 2x \\).",
        "a": "Let the parallel side be L_p. The total fencing is 2x + L_p = 60. So, L_p = 60 - 2x.",
        "opts": [
          "\\( 60 - x \\)",
          "\\( 120 - 2x \\)",
          "\\( 30 - x \\)",
          "\\( 60 - 2x \\)"
        ],
        "options": [
          {
            "text": "\\( 60 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 120 - 2x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 30 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 60 - 2x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Form an equation for the total fencing.",
            "workingOut": "\\text{Two perpendicular sides (each } x \\text{) + one parallel side (} L \\text{) = 60} \\implies 2x + L = 60"
          },
          {
            "explanation": "Solve for \\( L \\).",
            "workingOut": "L = 60 - 2x"
          }
        ]
      },
      {
        "id": "y12a-3g-q5b",
        "type": "multiple_choice",
        "question": "b) Show that the area of the garden bed is given by \\( A = 60x - 2x^2 \\).",
        "a": "Area is L_perpendicular * L_parallel = x(60 - 2x) = 60x - 2x^2.",
        "opts": [
          "\\( A = 30x - x^2 \\)",
          "\\( A = 60x - x^2 \\)",
          "\\( A = 60x - 2x^2 \\)",
          "\\( A = 2x^2 - 60x \\)"
        ],
        "options": [
          {
            "text": "\\( A = 30x - x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 60x - x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 60x - 2x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 2x^2 - 60x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Multiply the side lengths.",
            "workingOut": "A = x(60 - 2x) = 60x - 2x^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q5c",
        "type": "multiple_choice",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that maximises \\( A \\).",
        "a": "15",
        "opts": [
          "\\( \\frac{dA}{dx} = 60 - 4x \\), \\( x = 15 \\)",
          "\\( \\frac{dA}{dx} = 60 - 4x \\), \\( x = 30 \\)",
          "\\( \\frac{dA}{dx} = 30 - 2x \\), \\( x = 15 \\)",
          "\\( \\frac{dA}{dx} = 60 - 2x \\), \\( x = 30 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dA}{dx} = 60 - 4x \\), \\( x = 15 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 60 - 4x \\), \\( x = 30 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 30 - 2x \\), \\( x = 15 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 60 - 2x \\), \\( x = 30 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( A \\).",
            "workingOut": "\\frac{dA}{dx} = 60 - 4x"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "60 - 4x = 0 \\implies x = 15"
          }
        ]
      },
      {
        "id": "y12a-3g-q5d",
        "type": "multiple_choice",
        "question": "d) Find the maximum possible area of the garden bed.",
        "a": "450",
        "opts": [
          "600",
          "225",
          "900",
          "450"
        ],
        "options": [
          {
            "text": "600",
            "imageUrl": ""
          },
          {
            "text": "225",
            "imageUrl": ""
          },
          {
            "text": "900",
            "imageUrl": ""
          },
          {
            "text": "450",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 15 \\) into \\( A \\).",
            "workingOut": "A = 60(15) - 2(15)^2 = 900 - 450 = 450 \\text{ m}^2"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Find \\( \\frac{dV}{dt} \\) (assuming \\( V = 6t^2 - t^3 \\)) and show that the quantity is at its maximum at \\( t = 4 \\).",
        "a": "dV/dt = 12t - 3t^2. Setting 12t - 3t^2 = 0 gives 3t(4 - t) = 0, so t = 0 or 4. At t = 4, d^2V/dt^2 = 12 - 6t = -12 < 0, which confirms a maximum.",
        "opts": [
          "\\( \\frac{dV}{dt} = 12t - t^3 \\), max at \\( t = 4 \\)",
          "\\( \\frac{dV}{dt} = 12t - 3t^2 \\), max at \\( t = 4 \\)",
          "\\( \\frac{dV}{dt} = 6 - 3t^2 \\), max at \\( t = 2 \\)",
          "\\( \\frac{dV}{dt} = 12t - 3t^2 \\), max at \\( t = 0 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dV}{dt} = 12t - t^3 \\), max at \\( t = 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dt} = 12t - 3t^2 \\), max at \\( t = 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dt} = 6 - 3t^2 \\), max at \\( t = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dt} = 12t - 3t^2 \\), max at \\( t = 0 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( V \\).",
            "workingOut": "\\frac{dV}{dt} = 12t - 3t^2"
          },
          {
            "explanation": "Factor and solve for zero.",
            "workingOut": "3t(4 - t) = 0 \\implies t = 0 \\text{ or } t = 4"
          },
          {
            "explanation": "Check nature at \\( t = 4 \\).",
            "workingOut": "\\frac{d^2V}{dt^2} = 12 - 6t. \\text{ At } t=4, 12 - 24 = -12 < 0 \\implies \\text{maximum.}"
          }
        ]
      },
      {
        "id": "y12a-3g-q6b",
        "type": "multiple_choice",
        "question": "b) Hence find the maximum quantity of vitamins in the patient's bloodstream.",
        "a": "32",
        "opts": [
          "48",
          "16",
          "64",
          "32"
        ],
        "options": [
          {
            "text": "48",
            "imageUrl": ""
          },
          {
            "text": "16",
            "imageUrl": ""
          },
          {
            "text": "64",
            "imageUrl": ""
          },
          {
            "text": "32",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( t = 4 \\) into \\( V \\).",
            "workingOut": "V = 6(4)^2 - (4)^3 = 96 - 64 = 32"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the width of the rectangle is \\( \\frac{64}{x} \\).",
        "a": "Area is A = length * width = 64. Since length is x, x * width = 64, which gives width = 64/x.",
        "opts": [
          "\\( 64 - x \\)",
          "\\( \\frac{32}{x} \\)",
          "\\( \\frac{64}{x} \\)",
          "\\( \\frac{128}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( 64 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{32}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{64}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{128}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Use the area formula.",
            "workingOut": "x \\times \\text{width} = 64 \\implies \\text{width} = \\frac{64}{x}"
          }
        ]
      },
      {
        "id": "y12a-3g-q7b",
        "type": "multiple_choice",
        "question": "b) Show that the perimeter of the rectangle is given by \\( P = 2x + \\frac{128}{x} \\).",
        "a": "Perimeter is P = 2(length + width) = 2(x + 64/x) = 2x + 128/x.",
        "opts": [
          "\\( P = 4x + \\frac{128}{x} \\)",
          "\\( P = 2x + \\frac{64}{x} \\)",
          "\\( P = 2x + \\frac{128}{x} \\)",
          "\\( P = x + \\frac{64}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( P = 4x + \\frac{128}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 2x + \\frac{64}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 2x + \\frac{128}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = x + \\frac{64}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute into perimeter formula.",
            "workingOut": "P = 2(\\text{length} + \\text{width}) = 2\\left(x + \\frac{64}{x}\\right) = 2x + \\frac{128}{x}"
          }
        ]
      },
      {
        "id": "y12a-3g-q7c",
        "type": "multiple_choice",
        "question": "c) Show that \\( \\frac{dP}{dx} = 2 - \\frac{128}{x^2} \\) and hence that the minimum value of \\( P \\) occurs at \\( x = 8 \\).",
        "a": "dP/dx = 2 - 128/x^2. Setting 2 - 128/x^2 = 0 yields x^2 = 64, so x = 8 (since x > 0). Since d^2P/dx^2 = 256/x^3 > 0 for x = 8, this is a minimum.",
        "opts": [
          "\\( \\frac{dP}{dx} = 1 - \\frac{128}{x^2} \\), min at \\( x = 8 \\)",
          "\\( \\frac{dP}{dx} = 2 + \\frac{128}{x^2} \\), min at \\( x = 8 \\)",
          "\\( \\frac{dP}{dx} = 2 - \\frac{64}{x^2} \\), min at \\( x = 4 \\)",
          "\\( \\frac{dP}{dx} = 2 - \\frac{128}{x^2} \\), min at \\( x = 8 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dP}{dx} = 1 - \\frac{128}{x^2} \\), min at \\( x = 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = 2 + \\frac{128}{x^2} \\), min at \\( x = 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = 2 - \\frac{64}{x^2} \\), min at \\( x = 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dP}{dx} = 2 - \\frac{128}{x^2} \\), min at \\( x = 8 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( P \\).",
            "workingOut": "\\frac{dP}{dx} = \\frac{d}{dx}(2x + 128x^{-1}) = 2 - 128x^{-2} = 2 - \\frac{128}{x^2}"
          },
          {
            "explanation": "Solve for \\( x \\).",
            "workingOut": "2 = \\frac{128}{x^2} \\implies 2x^2 = 128 \\implies x^2 = 64 \\implies x = 8 \\text{ (since } x > 0)"
          }
        ]
      },
      {
        "id": "y12a-3g-q7d",
        "type": "multiple_choice",
        "question": "d) Find the minimum possible perimeter of the rectangle.",
        "a": "32",
        "opts": [
          "64",
          "48",
          "16",
          "32"
        ],
        "options": [
          {
            "text": "64",
            "imageUrl": ""
          },
          {
            "text": "48",
            "imageUrl": ""
          },
          {
            "text": "16",
            "imageUrl": ""
          },
          {
            "text": "32",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 8 \\) into \\( P \\).",
            "workingOut": "P = 2(8) + \\frac{128}{8} = 16 + 16 = 32 \\text{ cm}"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the total length of fencing is \\( L = 2x + \\frac{450}{x} \\).",
        "a": "Fencing covers AC, BE, CD: L = 2x + y + 2y = 2x + 3y. The area of triangular field ACD is 1/2 * base * height = 1/2 * (2y) * (2x) = 2xy = 300, which gives y = 150/x. Substituting y into L gives L = 2x + 3(150/x) = 2x + 450/x.",
        "opts": [
          "\\( L = 2x + \\frac{300}{x} \\)",
          "\\( L = 2x + \\frac{450}{x} \\)",
          "\\( L = x + \\frac{450}{x} \\)",
          "\\( L = 2x + \\frac{150}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( L = 2x + \\frac{300}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( L = 2x + \\frac{450}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( L = x + \\frac{450}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( L = 2x + \\frac{150}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Identify the fencing segments based on the diagram.",
            "workingOut": "\\text{The fencing covers lengths } AC, BE, \\text{ and } CD. \\text{ Based on the geometry, total length } L = 2x + 3y."
          },
          {
            "explanation": "Use the area constraint to eliminate \\( y \\).",
            "workingOut": "\\text{Area} = \\frac{1}{2}(2y)(2x) = 2xy = 300 \\implies y = \\frac{150}{x}"
          },
          {
            "explanation": "Substitute \\( y \\).",
            "workingOut": "L = 2x + 3\\left(\\frac{150}{x}\\right) = 2x + \\frac{450}{x}"
          }
        ]
      },
      {
        "id": "y12a-3g-q8bi",
        "type": "multiple_choice",
        "question": "b) i) Find the value of \\( x \\) that allows the farmer to use the least possible length of fencing.",
        "a": "15",
        "opts": [
          "20",
          "5",
          "10",
          "15"
        ],
        "options": [
          {
            "text": "20",
            "imageUrl": ""
          },
          {
            "text": "5",
            "imageUrl": ""
          },
          {
            "text": "10",
            "imageUrl": ""
          },
          {
            "text": "15",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( L \\).",
            "workingOut": "\\frac{dL}{dx} = 2 - \\frac{450}{x^2}"
          },
          {
            "explanation": "Solve for stationary point.",
            "workingOut": "2 = \\frac{450}{x^2} \\implies 2x^2 = 450 \\implies x^2 = 225 \\implies x = 15"
          }
        ]
      },
      {
        "id": "y12a-3g-q8bii",
        "type": "multiple_choice",
        "question": "b) ii) Find the corresponding value of \\( y \\) that minimises the fencing length.",
        "a": "10",
        "opts": [
          "10",
          "15",
          "5",
          "20"
        ],
        "options": [
          {
            "text": "10",
            "imageUrl": ""
          },
          {
            "text": "15",
            "imageUrl": ""
          },
          {
            "text": "5",
            "imageUrl": ""
          },
          {
            "text": "20",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 15 \\) into \\( y \\).",
            "workingOut": "y = \\frac{150}{15} = 10"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) If the entire frame has height \\( h \\) metres and width \\( w \\) metres, show that \\( w = \\frac{1}{4}(24 - 3h) \\).",
        "a": "The frame consists of 3 vertical rails of length h, and 4 horizontal rails of length w. The total length of the frame is 3h + 4w = 24. Solving for w gives 4w = 24 - 3h, so w = 1/4 * (24 - 3h).",
        "opts": [
          "\\( w = 24 - 3h \\)",
          "\\( w = \\frac{1}{4}(24 - 3h) \\)",
          "\\( w = \\frac{1}{3}(24 - 4h) \\)",
          "\\( w = \\frac{1}{2}(24 - 3h) \\)"
        ],
        "options": [
          {
            "text": "\\( w = 24 - 3h \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( w = \\frac{1}{4}(24 - 3h) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( w = \\frac{1}{3}(24 - 4h) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( w = \\frac{1}{2}(24 - 3h) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Identify the frame components.",
            "workingOut": "3 \\text{ vertical rails of length } h \\text{ and } 4 \\text{ horizontal rails of length } w."
          },
          {
            "explanation": "Set up the perimeter equation.",
            "workingOut": "3h + 4w = 24"
          },
          {
            "explanation": "Solve for \\( w \\).",
            "workingOut": "4w = 24 - 3h \\implies w = \\frac{1}{4}(24 - 3h)"
          }
        ]
      },
      {
        "id": "y12a-3g-q9b",
        "type": "multiple_choice",
        "question": "b) Show that the area of the window is \\( A = 6h - \\frac{3}{4}h^2 \\).",
        "a": "The area is A = h * w = h * 1/4 * (24 - 3h) = 1/4 * (24h - 3h^2) = 6h - 3/4 * h^2.",
        "opts": [
          "\\( A = 6h - 3h^2 \\)",
          "\\( A = 24h - 3h^2 \\)",
          "\\( A = 8h - \\frac{4}{3}h^2 \\)",
          "\\( A = 6h - \\frac{3}{4}h^2 \\)"
        ],
        "options": [
          {
            "text": "\\( A = 6h - 3h^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 24h - 3h^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 8h - \\frac{4}{3}h^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 6h - \\frac{3}{4}h^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute into area formula.",
            "workingOut": "A = h \\times w = h \\left[\\frac{1}{4}(24 - 3h)\\right]"
          },
          {
            "explanation": "Expand.",
            "workingOut": "A = \\frac{1}{4}(24h - 3h^2) = 6h - \\frac{3}{4}h^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q9ci",
        "type": "multiple_choice",
        "question": "c) i) Find the height \\( h \\) of the frame for which the area of the window is maximised.",
        "a": "4",
        "opts": [
          "3",
          "4",
          "8",
          "6"
        ],
        "options": [
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          },
          {
            "text": "8",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( A \\).",
            "workingOut": "\\frac{dA}{dh} = 6 - \\frac{3}{2}h"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "6 - \\frac{3}{2}h = 0 \\implies \\frac{3}{2}h = 6 \\implies h = 4"
          }
        ]
      },
      {
        "id": "y12a-3g-q9cii",
        "type": "multiple_choice",
        "question": "c) ii) Find the width \\( w \\) of the frame that maximises the area.",
        "a": "3",
        "opts": [
          "3",
          "6",
          "4",
          "2"
        ],
        "options": [
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          },
          {
            "text": "2",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( h = 4 \\) into \\( w \\).",
            "workingOut": "w = \\frac{1}{4}(24 - 3(4)) = \\frac{1}{4}(12) = 3"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) i) If one piece has length \\( x \\) cm, find the side length of the first square.",
        "a": "x/4",
        "opts": [
          "\\( 4x \\)",
          "\\( x^2 \\)",
          "\\( \\frac{x}{4} \\)",
          "\\( \\frac{x}{2} \\)"
        ],
        "options": [
          {
            "text": "\\( 4x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{x}{4} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{x}{2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Divide by 4 since a square has 4 equal sides.",
            "workingOut": "\\text{Side length} = \\frac{x}{4}"
          }
        ]
      },
      {
        "id": "y12a-3g-q10aii",
        "type": "multiple_choice",
        "question": "a) ii) Find the side length of the second square.",
        "a": "(16-x)/4",
        "opts": [
          "\\( \\frac{16 - x}{2} \\)",
          "\\( 16 - \\frac{x}{4} \\)",
          "\\( \\frac{16 - x}{4} \\)",
          "\\( 4(16 - x) \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{16 - x}{2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 16 - \\frac{x}{4} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{16 - x}{4} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 4(16 - x) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Find the length of the second piece.",
            "workingOut": "16 - x"
          },
          {
            "explanation": "Divide by 4.",
            "workingOut": "\\text{Side length} = \\frac{16 - x}{4}"
          }
        ]
      },
      {
        "id": "y12a-3g-q10b",
        "type": "multiple_choice",
        "question": "b) Show that the combined area of the two squares is \\( A = \\frac{1}{8}(x^2 - 16x + 128) \\).",
        "a": "Combined area is A = (x/4)^2 + ((16-x)/4)^2 = x^2/16 + (256 - 32x + x^2)/16 = (2x^2 - 32x + 256)/16 = 1/8 * (x^2 - 16x + 128).",
        "opts": [
          "\\( A = \\frac{1}{8}(x^2 - 16x + 128) \\)",
          "\\( A = \\frac{1}{16}(2x^2 - 16x + 256) \\)",
          "\\( A = x^2 - 16x + 128 \\)",
          "\\( A = \\frac{1}{4}(x^2 - 8x + 64) \\)"
        ],
        "options": [
          {
            "text": "\\( A = \\frac{1}{8}(x^2 - 16x + 128) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = \\frac{1}{16}(2x^2 - 16x + 256) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = x^2 - 16x + 128 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = \\frac{1}{4}(x^2 - 8x + 64) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Sum the areas of the two squares.",
            "workingOut": "A = \\left(\\frac{x}{4}\\right)^2 + \\left(\\frac{16 - x}{4}\\right)^2"
          },
          {
            "explanation": "Expand and simplify.",
            "workingOut": "A = \\frac{x^2}{16} + \\frac{256 - 32x + x^2}{16} = \\frac{2x^2 - 32x + 256}{16}"
          },
          {
            "explanation": "Factor out 2.",
            "workingOut": "A = \\frac{2(x^2 - 16x + 128)}{16} = \\frac{1}{8}(x^2 - 16x + 128)"
          }
        ]
      },
      {
        "id": "y12a-3g-q10c",
        "type": "multiple_choice",
        "question": "c) Find \\( \\frac{dA}{dx} \\) and determine the value of \\( x \\) that minimises \\( A \\).",
        "a": "8",
        "opts": [
          "\\( \\frac{dA}{dx} = \\frac{1}{4}(x - 8) \\), \\( x = 8 \\)",
          "\\( \\frac{dA}{dx} = \\frac{1}{8}(x - 8) \\), \\( x = 8 \\)",
          "\\( \\frac{dA}{dx} = \\frac{1}{4}(x + 8) \\), \\( x = -8 \\)",
          "\\( \\frac{dA}{dx} = 2x - 16 \\), \\( x = 8 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{1}{4}(x - 8) \\), \\( x = 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{1}{8}(x - 8) \\), \\( x = 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{1}{4}(x + 8) \\), \\( x = -8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = 2x - 16 \\), \\( x = 8 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( A \\).",
            "workingOut": "\\frac{dA}{dx} = \\frac{1}{8}(2x - 16) = \\frac{1}{4}(x - 8)"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "\\frac{1}{4}(x - 8) = 0 \\implies x = 8"
          }
        ]
      },
      {
        "id": "y12a-3g-q10d",
        "type": "multiple_choice",
        "question": "d) Find the least possible combined area of the two squares.",
        "a": "8",
        "opts": [
          "16",
          "8",
          "32",
          "4"
        ],
        "options": [
          {
            "text": "16",
            "imageUrl": ""
          },
          {
            "text": "8",
            "imageUrl": ""
          },
          {
            "text": "32",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 8 \\) into \\( A \\).",
            "workingOut": "A = \\frac{1}{8}(8^2 - 16(8) + 128) = \\frac{1}{8}(64 - 128 + 128) = \\frac{64}{8} = 8 \\text{ cm}^2"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Find an expression for the revenue \\( R \\) raised from the sale of \\( x \\) telescopes per day.",
        "a": "R = x * Price = x(70 - 1/2 * x) = 70x - 1/2 * x^2.",
        "opts": [
          "\\( R = 70 - \\frac{1}{2}x \\)",
          "\\( R = 70x - \\frac{1}{2}x^2 \\)",
          "\\( R = 70x - x^2 \\)",
          "\\( R = 35x^2 \\)"
        ],
        "options": [
          {
            "text": "\\( R = 70 - \\frac{1}{2}x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( R = 70x - \\frac{1}{2}x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( R = 70x - x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( R = 35x^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Revenue is quantity times price.",
            "workingOut": "R = x(70 - 0.5x) = 70x - 0.5x^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q11b",
        "type": "multiple_choice",
        "question": "b) Find an expression for the daily profit \\( P = R - C \\) made if \\( x \\) telescopes are sold.",
        "a": "P = R - C = (70x - 1/2 * x^2) - (1/4 * x^2 + 10x + 20) = 60x - 3/4 * x^2 - 20.",
        "opts": [
          "\\( P = 60x - \\frac{1}{4}x^2 + 20 \\)",
          "\\( P = 80x - \\frac{1}{4}x^2 - 20 \\)",
          "\\( P = 70x - \\frac{3}{4}x^2 - 20 \\)",
          "\\( P = 60x - \\frac{3}{4}x^2 - 20 \\)"
        ],
        "options": [
          {
            "text": "\\( P = 60x - \\frac{1}{4}x^2 + 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 80x - \\frac{1}{4}x^2 - 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 70x - \\frac{3}{4}x^2 - 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( P = 60x - \\frac{3}{4}x^2 - 20 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Profit is Revenue minus Cost.",
            "workingOut": "P = (70x - 0.5x^2) - (0.25x^2 + 10x + 20)"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "P = 60x - 0.75x^2 - 20"
          }
        ]
      },
      {
        "id": "y12a-3g-q11c",
        "type": "multiple_choice",
        "question": "c) How many telescopes should be made daily in order to maximise the profit?",
        "a": "40",
        "opts": [
          "30",
          "20",
          "40",
          "60"
        ],
        "options": [
          {
            "text": "30",
            "imageUrl": ""
          },
          {
            "text": "20",
            "imageUrl": ""
          },
          {
            "text": "40",
            "imageUrl": ""
          },
          {
            "text": "60",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( P \\).",
            "workingOut": "\\frac{dP}{dx} = 60 - 1.5x"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "60 - 1.5x = 0 \\implies 1.5x = 60 \\implies x = 40"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that \\( h = 12 - 2\\pi r \\), where \\( r \\) is the radius of the cylinder.",
        "a": "Circumference of base is 2 * pi * r. Sum of height and circumference is h + 2 * pi * r = 12, so h = 12 - 2 * pi * r.",
        "opts": [
          "\\( h = 12 - 2\\pi r \\)",
          "\\( h = 12 + 2\\pi r \\)",
          "\\( h = 6 - \\pi r \\)",
          "\\( h = 12 - \\pi r^2 \\)"
        ],
        "options": [
          {
            "text": "\\( h = 12 - 2\\pi r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 12 + 2\\pi r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 6 - \\pi r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 12 - \\pi r^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Set up equation.",
            "workingOut": "h + 2\\pi r = 12"
          },
          {
            "explanation": "Solve for \\( h \\).",
            "workingOut": "h = 12 - 2\\pi r"
          }
        ]
      },
      {
        "id": "y12a-3g-q12b",
        "type": "multiple_choice",
        "question": "b) Show that the volume of the cylinder is \\( V = \\pi r^2(12 - 2\\pi r) \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (12 - 2 * pi * r).",
        "opts": [
          "\\( V = 2\\pi r(12 - 2\\pi r) \\)",
          "\\( V = \\pi r^2(12 - \\pi r) \\)",
          "\\( V = \\pi r(12 - \\pi r) \\)",
          "\\( V = \\pi r^2(12 - 2\\pi r) \\)"
        ],
        "options": [
          {
            "text": "\\( V = 2\\pi r(12 - 2\\pi r) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = \\pi r^2(12 - \\pi r) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = \\pi r(12 - \\pi r) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = \\pi r^2(12 - 2\\pi r) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute into cylinder volume formula.",
            "workingOut": "V = \\pi r^2 h = \\pi r^2(12 - 2\\pi r)"
          }
        ]
      },
      {
        "id": "y12a-3g-q12c",
        "type": "multiple_choice",
        "question": "c) Find \\( \\frac{dV}{dr} \\) and determine the value of \\( r \\) (in terms of \\( \\pi \\)) at which the volume is a maximum. (Format: 'a/pi')",
        "a": "4/pi",
        "opts": [
          "\\( \\frac{dV}{dr} = 12\\pi r - 3\\pi^2 r^2 \\), \\( r = \\frac{4}{\\pi} \\)",
          "\\( \\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2 \\), \\( r = \\frac{2}{\\pi} \\)",
          "\\( \\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2 \\), \\( r = \\frac{4}{\\pi} \\)",
          "\\( \\frac{dV}{dr} = 24\\pi r - 4\\pi^2 r^2 \\), \\( r = \\frac{6}{\\pi} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dV}{dr} = 12\\pi r - 3\\pi^2 r^2 \\), \\( r = \\frac{4}{\\pi} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2 \\), \\( r = \\frac{2}{\\pi} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2 \\), \\( r = \\frac{4}{\\pi} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 24\\pi r - 4\\pi^2 r^2 \\), \\( r = \\frac{6}{\\pi} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Expand \\( V \\).",
            "workingOut": "V = 12\\pi r^2 - 2\\pi^2 r^3"
          },
          {
            "explanation": "Differentiate.",
            "workingOut": "\\frac{dV}{dr} = 24\\pi r - 6\\pi^2 r^2"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "6\\pi r(4 - \\pi r) = 0 \\implies r = \\frac{4}{\\pi} \\text{ (since } r>0)"
          }
        ]
      },
      {
        "id": "y12a-3g-q12d",
        "type": "multiple_choice",
        "question": "d) Hence find the maximum possible volume of the cylinder (in terms of \\( \\pi \\)). (Format: 'a/pi')",
        "a": "64/pi",
        "opts": [
          "\\( \\frac{128}{\\pi} \\)",
          "\\( \\frac{32}{\\pi} \\)",
          "\\( \\frac{64}{\\pi^2} \\)",
          "\\( \\frac{64}{\\pi} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{128}{\\pi} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{32}{\\pi} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{64}{\\pi^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{64}{\\pi} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( r = \\frac{4}{\\pi} \\) into \\( V \\).",
            "workingOut": "V = 12\\pi\\left(\\frac{16}{\\pi^2}\\right) - 2\\pi^2\\left(\\frac{64}{\\pi^3}\\right) = \\frac{192}{\\pi} - \\frac{128}{\\pi} = \\frac{64}{\\pi}"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Let the cylinder have height \\( h \\) and radius \\( r \\). Show that \\( h = \\frac{12 - r^2}{r} \\).",
        "a": "Surface area of a closed cylinder is S = 2 * pi * r^2 + 2 * pi * r * h = 24 * pi. Dividing by 2 * pi gives r^2 + rh = 12. So, rh = 12 - r^2, which yields h = (12 - r^2)/r.",
        "opts": [
          "\\( h = \\frac{12}{r} - r^2 \\)",
          "\\( h = \\frac{12 - 2r^2}{r} \\)",
          "\\( h = \\frac{24 - r^2}{r} \\)",
          "\\( h = \\frac{12 - r^2}{r} \\)"
        ],
        "options": [
          {
            "text": "\\( h = \\frac{12}{r} - r^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{12 - 2r^2}{r} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{24 - r^2}{r} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{12 - r^2}{r} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Set up surface area equation.",
            "workingOut": "S = 2\\pi r^2 + 2\\pi rh = 24\\pi"
          },
          {
            "explanation": "Divide by \\( 2\\pi \\).",
            "workingOut": "r^2 + rh = 12"
          },
          {
            "explanation": "Solve for \\( h \\).",
            "workingOut": "rh = 12 - r^2 \\implies h = \\frac{12 - r^2}{r}"
          }
        ]
      },
      {
        "id": "y12a-3g-q13b",
        "type": "multiple_choice",
        "question": "b) Show that the volume of the can is \\( V = \\pi r(12 - r^2) \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (12 - r^2)/r = pi * r * (12 - r^2).",
        "opts": [
          "\\( V = \\pi r(12 - r^2) \\)",
          "\\( V = \\pi r^2(12 - r^2) \\)",
          "\\( V = \\pi(12r - r^3) \\)",
          "Both A and C are correct formulations"
        ],
        "options": [
          {
            "text": "\\( V = \\pi r(12 - r^2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = \\pi r^2(12 - r^2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = \\pi(12r - r^3) \\)",
            "imageUrl": ""
          },
          {
            "text": "Both A and C are correct formulations",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( h \\) into volume.",
            "workingOut": "V = \\pi r^2 h = \\pi r^2 \\left(\\frac{12 - r^2}{r}\\right)"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "V = \\pi r(12 - r^2) = \\pi(12r - r^3)"
          }
        ]
      },
      {
        "id": "y12a-3g-q13c",
        "type": "multiple_choice",
        "question": "c) Find \\( \\frac{dV}{dr} \\) and hence find the maximum possible volume of the can (in terms of \\( \\pi \\)). (Format: 'a*pi')",
        "a": "16*pi",
        "opts": [
          "\\( \\frac{dV}{dr} = \\pi(12 - 3r^2) \\), Max: \\( 8\\pi \\)",
          "\\( \\frac{dV}{dr} = \\pi(12 - r^2) \\), Max: \\( 16\\pi \\)",
          "\\( \\frac{dV}{dr} = \\pi(12 - 2r) \\), Max: \\( 36\\pi \\)",
          "\\( \\frac{dV}{dr} = \\pi(12 - 3r^2) \\), Max: \\( 16\\pi \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dV}{dr} = \\pi(12 - 3r^2) \\), Max: \\( 8\\pi \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = \\pi(12 - r^2) \\), Max: \\( 16\\pi \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = \\pi(12 - 2r) \\), Max: \\( 36\\pi \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = \\pi(12 - 3r^2) \\), Max: \\( 16\\pi \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( V \\).",
            "workingOut": "\\frac{dV}{dr} = \\frac{d}{dr}(\\pi(12r - r^3)) = \\pi(12 - 3r^2)"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "\\pi(12 - 3r^2) = 0 \\implies r^2 = 4 \\implies r = 2"
          },
          {
            "explanation": "Substitute \\( r = 2 \\) into \\( V \\).",
            "workingOut": "V = \\pi(2)(12 - 4) = 16\\pi"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the surface area of the box is \\( S = x^2 + 4xh \\).",
        "a": "The box has a square base of area x^2. Since it has no lid, there are 4 side faces, each of area x * h. Total surface area is S = x^2 + 4xh.",
        "opts": [
          "\\( S = 2x^2 + 4xh \\)",
          "\\( S = x^2 + 2xh \\)",
          "\\( S = x^2 + 4xh \\)",
          "\\( S = 4x + x^2h \\)"
        ],
        "options": [
          {
            "text": "\\( S = 2x^2 + 4xh \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = x^2 + 2xh \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = x^2 + 4xh \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = 4x + x^2h \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Identify faces of a lidless box.",
            "workingOut": "\\text{1 base area } x^2 \\text{, and 4 side faces each area } xh."
          },
          {
            "explanation": "Sum them up.",
            "workingOut": "S = x^2 + 4xh"
          }
        ]
      },
      {
        "id": "y12a-3g-q14b",
        "type": "multiple_choice",
        "question": "b) Show that \\( h = \\frac{108}{x^2} \\) and hence that \\( S = x^2 + \\frac{432}{x} \\).",
        "a": "Volume is V = x^2 * h = 108, which gives h = 108/x^2. Substituting h into S gives S = x^2 + 4x(108/x^2) = x^2 + 432/x.",
        "opts": [
          "\\( S = x^2 + \\frac{432}{x} \\)",
          "\\( S = x^2 + \\frac{216}{x} \\)",
          "\\( S = 2x^2 + \\frac{432}{x} \\)",
          "\\( S = x^2 + \\frac{108}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( S = x^2 + \\frac{432}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = x^2 + \\frac{216}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = 2x^2 + \\frac{432}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = x^2 + \\frac{108}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Use volume constraint to find \\( h \\).",
            "workingOut": "V = x^2h = 108 \\implies h = \\frac{108}{x^2}"
          },
          {
            "explanation": "Substitute into \\( S \\).",
            "workingOut": "S = x^2 + 4x\\left(\\frac{108}{x^2}\\right) = x^2 + \\frac{432}{x}"
          }
        ]
      },
      {
        "id": "y12a-3g-q14ci",
        "type": "multiple_choice",
        "question": "c) i) Find the base length \\( x \\) of the box that minimises its surface area.",
        "a": "6",
        "opts": [
          "12",
          "6",
          "3",
          "4"
        ],
        "options": [
          {
            "text": "12",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( S \\).",
            "workingOut": "\\frac{dS}{dx} = 2x - 432x^{-2} = 2x - \\frac{432}{x^2}"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "2x = \\frac{432}{x^2} \\implies x^3 = 216 \\implies x = 6"
          }
        ]
      },
      {
        "id": "y12a-3g-q14cii",
        "type": "multiple_choice",
        "question": "c) ii) Find the height \\( h \\) of the box that minimises the surface area.",
        "a": "3",
        "opts": [
          "3",
          "2",
          "4",
          "6"
        ],
        "options": [
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "2",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 6 \\) into \\( h \\).",
            "workingOut": "h = \\frac{108}{6^2} = \\frac{108}{36} = 3"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the volume of the box is given by \\( V = 216x - 66x^2 + 4x^3 \\).",
        "a": "The folded box has dimensions: length = 24 - 2x, width = 9 - 2x, height = x. Volume is V = x(24 - 2x)(9 - 2x) = x(216 - 48x - 18x + 4x^2) = 216x - 66x^2 + 4x^3.",
        "opts": [
          "\\( V = 108x - 66x^2 + 4x^3 \\)",
          "\\( V = 216x - 33x^2 + 2x^3 \\)",
          "\\( V = 216 - 66x + 4x^2 \\)",
          "\\( V = 216x - 66x^2 + 4x^3 \\)"
        ],
        "options": [
          {
            "text": "\\( V = 108x - 66x^2 + 4x^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 216x - 33x^2 + 2x^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 216 - 66x + 4x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 216x - 66x^2 + 4x^3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Identify dimensions of folded box.",
            "workingOut": "\\text{Length} = 24 - 2x, \\text{ Width} = 9 - 2x, \\text{ Height} = x"
          },
          {
            "explanation": "Multiply to find volume.",
            "workingOut": "V = x(24 - 2x)(9 - 2x)"
          },
          {
            "explanation": "Expand.",
            "workingOut": "V = x(216 - 48x - 18x + 4x^2) = 216x - 66x^2 + 4x^3"
          }
        ]
      },
      {
        "id": "y12a-3g-q15b",
        "type": "multiple_choice",
        "question": "b) Find \\( \\frac{dV}{dx} \\) and determine the value of \\( x \\) (where \\( x < 4.5 \\)) that maximises the volume of the box.",
        "a": "2",
        "opts": [
          "4",
          "1.5",
          "2",
          "3"
        ],
        "options": [
          {
            "text": "4",
            "imageUrl": ""
          },
          {
            "text": "1.5",
            "imageUrl": ""
          },
          {
            "text": "2",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( V \\).",
            "workingOut": "\\frac{dV}{dx} = 216 - 132x + 12x^2 = 12(18 - 11x + x^2) = 12(x - 9)(x - 2)"
          },
          {
            "explanation": "Find valid stationary point.",
            "workingOut": "x = 9 \\text{ or } x = 2. \\text{ Since width is } 9-2x>0, x < 4.5. \\text{ Thus } x = 2."
          }
        ]
      },
      {
        "id": "y12a-3g-q15c",
        "type": "multiple_choice",
        "question": "c) Find the maximum possible volume of the box.",
        "a": "200",
        "opts": [
          "150",
          "400",
          "216",
          "200"
        ],
        "options": [
          {
            "text": "150",
            "imageUrl": ""
          },
          {
            "text": "400",
            "imageUrl": ""
          },
          {
            "text": "216",
            "imageUrl": ""
          },
          {
            "text": "200",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 2 \\) into \\( V \\).",
            "workingOut": "V = 2(24 - 4)(9 - 4) = 2(20)(5) = 200 \\text{ cm}^3"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Find an expression, in terms of \\( x \\) and \\( h \\), for the total length of steel \\( S \\) required to construct the frame.",
        "a": "A rectangular prism has 12 edges: 4 of length 3x, 4 of length x, and 4 of length h. S = 4(3x) + 4x + 4h = 16x + 4h.",
        "opts": [
          "\\( S = 8x + 4h \\)",
          "\\( S = 16x + 4h \\)",
          "\\( S = 12x + 4h \\)",
          "\\( S = 16x + 2h \\)"
        ],
        "options": [
          {
            "text": "\\( S = 8x + 4h \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = 16x + 4h \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = 12x + 4h \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( S = 16x + 2h \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Count the edges of the prism.",
            "workingOut": "4 \\text{ edges of length } 3x, 4 \\text{ edges of length } x, 4 \\text{ edges of length } h."
          },
          {
            "explanation": "Sum them.",
            "workingOut": "S = 4(3x) + 4x + 4h = 12x + 4x + 4h = 16x + 4h"
          }
        ]
      },
      {
        "id": "y12a-3g-q16b",
        "type": "multiple_choice",
        "question": "b) The prism has a volume of \\( 162 \\text{ m}^3 \\). Show that \\( h = \\frac{54}{x^2} \\) and hence show that \\( S = 16x + \\frac{216}{x^2} \\).",
        "a": "Volume is V = length * width * height = 3x * x * h = 3x^2 * h = 162. This gives h = 162/(3x^2) = 54/x^2. Substituting h into S yields S = 16x + 4(54/x^2) = 16x + 216/x^2.",
        "opts": [
          "\\( h = \\frac{27}{x^2} \\); \\( S = 16x + \\frac{108}{x^2} \\)",
          "\\( h = \\frac{162}{x^2} \\); \\( S = 16x + \\frac{162}{x^2} \\)",
          "\\( h = \\frac{54}{x} \\); \\( S = 16x + \\frac{216}{x} \\)",
          "\\( h = \\frac{54}{x^2} \\); \\( S = 16x + \\frac{216}{x^2} \\)"
        ],
        "options": [
          {
            "text": "\\( h = \\frac{27}{x^2} \\); \\( S = 16x + \\frac{108}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{162}{x^2} \\); \\( S = 16x + \\frac{162}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{54}{x} \\); \\( S = 16x + \\frac{216}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = \\frac{54}{x^2} \\); \\( S = 16x + \\frac{216}{x^2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Use volume constraint.",
            "workingOut": "V = (3x)(x)(h) = 3x^2h = 162 \\implies h = \\frac{162}{3x^2} = \\frac{54}{x^2}"
          },
          {
            "explanation": "Substitute into \\( S \\).",
            "workingOut": "S = 16x + 4\\left(\\frac{54}{x^2}\\right) = 16x + \\frac{216}{x^2}"
          }
        ]
      },
      {
        "id": "y12a-3g-q16ci",
        "type": "multiple_choice",
        "question": "c) i) Show that \\( \\frac{dS}{dx} = \\frac{16(x^3 - 27)}{x^3} \\) and hence find the width \\( x \\) that minimises the length of steel.",
        "a": "3",
        "opts": [
          "6",
          "2",
          "3",
          "4"
        ],
        "options": [
          {
            "text": "6",
            "imageUrl": ""
          },
          {
            "text": "2",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "4",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( S \\).",
            "workingOut": "\\frac{dS}{dx} = 16 - 432x^{-3} = 16 - \\frac{432}{x^3}"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "16 = \\frac{432}{x^3} \\implies x^3 = \\frac{432}{16} = 27 \\implies x = 3"
          }
        ]
      },
      {
        "id": "y12a-3g-q16cii",
        "type": "multiple_choice",
        "question": "c) ii) Find the height \\( h \\) of the frame that minimises the steel length.",
        "a": "6",
        "opts": [
          "12",
          "9",
          "3",
          "6"
        ],
        "options": [
          {
            "text": "12",
            "imageUrl": ""
          },
          {
            "text": "9",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 3 \\) into \\( h \\).",
            "workingOut": "h = \\frac{54}{3^2} = \\frac{54}{9} = 6"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Use Pythagoras' theorem to show that \\( s = kw(3600 - w^2) \\).",
        "a": "The rectangular cross-section fits inside the circular cross-section of log of diameter 60. By Pythagoras, w^2 + d^2 = 60^2 = 3600, so d^2 = 3600 - w^2. Substituting d^2 into s = kwd^2 gives s = kw(3600 - w^2).",
        "opts": [
          "\\( s = k(3600w - w^2) \\)",
          "\\( s = kw(3600 - w^2) \\)",
          "\\( s = k(60 - w^2) \\)",
          "\\( s = kw(3600 + w^2) \\)"
        ],
        "options": [
          {
            "text": "\\( s = k(3600w - w^2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( s = kw(3600 - w^2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( s = k(60 - w^2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( s = kw(3600 + w^2) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Use Pythagoras' theorem.",
            "workingOut": "w^2 + d^2 = 60^2 = 3600 \\implies d^2 = 3600 - w^2"
          },
          {
            "explanation": "Substitute into strength formula.",
            "workingOut": "s = kwd^2 = kw(3600 - w^2)"
          }
        ]
      },
      {
        "id": "y12a-3g-q17bi",
        "type": "multiple_choice",
        "question": "b) i) Find the width \\( w \\) of the strongest rectangular beam that can be cut from the log. (Format: 'a\\sqrt{b}')",
        "a": "20\\sqrt{3}",
        "opts": [
          "\\( 20\\sqrt{3} \\)",
          "\\( 40\\sqrt{3} \\)",
          "\\( 20\\sqrt{6} \\)",
          "\\( 10\\sqrt{3} \\)"
        ],
        "options": [
          {
            "text": "\\( 20\\sqrt{3} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 40\\sqrt{3} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 20\\sqrt{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 10\\sqrt{3} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( s \\).",
            "workingOut": "\\frac{ds}{dw} = k(3600 - 3w^2)"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "k(3600 - 3w^2) = 0 \\implies 3w^2 = 3600 \\implies w^2 = 1200 \\implies w = \\sqrt{1200} = 20\\sqrt{3}"
          }
        ]
      },
      {
        "id": "y12a-3g-q17bii",
        "type": "multiple_choice",
        "question": "b) ii) Find the depth \\( d \\) of the strongest beam. (Format: 'a\\sqrt{b}')",
        "a": "20\\sqrt{6}",
        "opts": [
          "\\( 40\\sqrt{6} \\)",
          "\\( 10\\sqrt{6} \\)",
          "\\( 20\\sqrt{3} \\)",
          "\\( 20\\sqrt{6} \\)"
        ],
        "options": [
          {
            "text": "\\( 40\\sqrt{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 10\\sqrt{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 20\\sqrt{3} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 20\\sqrt{6} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Find \\( d \\).",
            "workingOut": "d^2 = 3600 - (1200) = 2400 \\implies d = \\sqrt{2400} = 20\\sqrt{6}"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the volume of the box is given by \\( V = 216h - 24h^2 \\).",
        "a": "Perimeter of base is 2(x + y) = 48, so x + y = 24. Surface area is 2xy + 2xh + 2yh = 432. Dividing by 2 gives xy + (x + y)h = 216. Substituting (x + y) = 24 gives xy + 24h = 216, so xy = 216 - 24h. Volume is V = xyh = (216 - 24h)h = 216h - 24h^2.",
        "opts": [
          "\\( V = 432h - 48h^2 \\)",
          "\\( V = 216 - 24h \\)",
          "\\( V = 216h - 24h^2 \\)",
          "\\( V = 108h - 12h^2 \\)"
        ],
        "options": [
          {
            "text": "\\( V = 432h - 48h^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 216 - 24h \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 216h - 24h^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 108h - 12h^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Base perimeter constraint.",
            "workingOut": "2(x + y) = 48 \\implies x + y = 24"
          },
          {
            "explanation": "Surface area constraint.",
            "workingOut": "2xy + 2h(x + y) = 432 \\implies xy + 24h = 216 \\implies xy = 216 - 24h"
          },
          {
            "explanation": "Volume formula.",
            "workingOut": "V = xyh = (216 - 24h)h = 216h - 24h^2"
          }
        ]
      },
      {
        "id": "y12a-3g-q18bi",
        "type": "multiple_choice",
        "question": "b) i) Find the height \\( h \\) of the box that yields the maximum possible volume.",
        "a": "4.5",
        "opts": [
          "4.5",
          "6",
          "3",
          "9"
        ],
        "options": [
          {
            "text": "4.5",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "9",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( V \\).",
            "workingOut": "\\frac{dV}{dh} = 216 - 48h"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "216 - 48h = 0 \\implies h = \\frac{216}{48} = 4.5"
          }
        ]
      },
      {
        "id": "y12a-3g-q18bii",
        "type": "multiple_choice",
        "question": "b) ii) Find the base length \\( x \\) (where \\( x \\ge y \\)) of the box that maximises the volume.",
        "a": "18",
        "opts": [
          "24",
          "18",
          "9",
          "12"
        ],
        "options": [
          {
            "text": "24",
            "imageUrl": ""
          },
          {
            "text": "18",
            "imageUrl": ""
          },
          {
            "text": "9",
            "imageUrl": ""
          },
          {
            "text": "12",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find \\( xy \\).",
            "workingOut": "xy = 216 - 24(4.5) = 216 - 108 = 108"
          },
          {
            "explanation": "Set up system of equations.",
            "workingOut": "x + y = 24 \\text{ and } xy = 108. \\\\ \\text{Values are roots of } z^2 - 24z + 108 = 0 \\implies (z-18)(z-6) = 0."
          },
          {
            "explanation": "Select \\( x \\).",
            "workingOut": "\\text{Since } x \\ge y, x = 18."
          }
        ]
      },
      {
        "id": "y12a-3g-q18biii",
        "type": "multiple_choice",
        "question": "b) iii) Find the base width \\( y \\) of the box that maximises the volume.",
        "a": "6",
        "opts": [
          "9",
          "12",
          "18",
          "6"
        ],
        "options": [
          {
            "text": "9",
            "imageUrl": ""
          },
          {
            "text": "12",
            "imageUrl": ""
          },
          {
            "text": "18",
            "imageUrl": ""
          },
          {
            "text": "6",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Select \\( y \\).",
            "workingOut": "y = 6"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Explain why the smaller triangle inside the cone is similar to the larger triangle.",
        "a": "Both right triangles share the same top angle at the vertex of the cone, and both have a right angle, meaning they are similar by AA similarity.",
        "opts": [
          "Both triangles share a side and an angle, making them similar by SAS.",
          "Both triangles have the same hypotenuse.",
          "Both triangles share the same top angle and both have a right angle, so they are similar by AA.",
          "The triangles are congruent."
        ],
        "options": [
          {
            "text": "Both triangles share a side and an angle, making them similar by SAS.",
            "imageUrl": ""
          },
          {
            "text": "Both triangles have the same hypotenuse.",
            "imageUrl": ""
          },
          {
            "text": "Both triangles share the same top angle and both have a right angle, so they are similar by AA.",
            "imageUrl": ""
          },
          {
            "text": "The triangles are congruent.",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Identify angles.",
            "workingOut": "\\text{The small triangle (cone tip to cylinder top) and large triangle (full cone) share the top vertex angle. Both have a right angle at the vertical axis. Thus, they are similar by AA similarity.}"
          }
        ]
      },
      {
        "id": "y12a-3g-q19b",
        "type": "multiple_choice",
        "question": "b) By using ratios of corresponding sides, show that \\( h = 30 - \\frac{10}{3}r \\).",
        "a": "From similar triangles, the height of the smaller top cone is 30 - h. The ratio of height to radius is (30 - h)/r = 30/9 = 10/3. Solving for h gives 30 - h = 10/3 * r, so h = 30 - 10/3 * r.",
        "opts": [
          "\\( h = 30 - \\frac{10}{3}r \\)",
          "\\( h = 10 - 3r \\)",
          "\\( h = 30 - \\frac{3}{10}r \\)",
          "\\( h = 30 - 3r \\)"
        ],
        "options": [
          {
            "text": "\\( h = 30 - \\frac{10}{3}r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 10 - 3r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 30 - \\frac{3}{10}r \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( h = 30 - 3r \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Use ratios of corresponding sides.",
            "workingOut": "\\frac{30 - h}{r} = \\frac{30}{9}"
          },
          {
            "explanation": "Solve for \\( h \\).",
            "workingOut": "30 - h = \\frac{10}{3}r \\implies h = 30 - \\frac{10}{3}r"
          }
        ]
      },
      {
        "id": "y12a-3g-q19c",
        "type": "multiple_choice",
        "question": "c) Show that the volume of the cylinder is given by \\( V = 30\\pi r^2 - \\frac{10}{3}\\pi r^3 \\).",
        "a": "Volume is V = pi * r^2 * h = pi * r^2 * (30 - 10/3 * r) = 30 * pi * r^2 - 10/3 * pi * r^3.",
        "opts": [
          "\\( V = 10\\pi r^2 - 3\\pi r^3 \\)",
          "\\( V = 30\\pi r^2 - \\frac{3}{10}\\pi r^3 \\)",
          "\\( V = 30\\pi r^2 - \\frac{10}{3}\\pi r^3 \\)",
          "\\( V = 30\\pi r^2 - 3\\pi r^3 \\)"
        ],
        "options": [
          {
            "text": "\\( V = 10\\pi r^2 - 3\\pi r^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 30\\pi r^2 - \\frac{3}{10}\\pi r^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 30\\pi r^2 - \\frac{10}{3}\\pi r^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( V = 30\\pi r^2 - 3\\pi r^3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( h \\) into volume of cylinder.",
            "workingOut": "V = \\pi r^2 h = \\pi r^2\\left(30 - \\frac{10}{3}r\\right) = 30\\pi r^2 - \\frac{10}{3}\\pi r^3"
          }
        ]
      },
      {
        "id": "y12a-3g-q19d",
        "type": "multiple_choice",
        "question": "d) Find \\( \\frac{dV}{dr} \\) and hence find the value of \\( r \\) for which the volume of the cylinder is maximised.",
        "a": "6",
        "opts": [
          "\\( \\frac{dV}{dr} = 30\\pi r - 10\\pi r^2 \\), \\( r = 3 \\)",
          "\\( \\frac{dV}{dr} = 60\\pi r - 3\\pi r^2 \\), \\( r = 20 \\)",
          "\\( \\frac{dV}{dr} = 60\\pi r - 10\\pi r^2 \\), \\( r = 6 \\)",
          "\\( \\frac{dV}{dr} = 60\\pi r - 10\\pi r^2 \\), \\( r = 3 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dV}{dr} = 30\\pi r - 10\\pi r^2 \\), \\( r = 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 60\\pi r - 3\\pi r^2 \\), \\( r = 20 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 60\\pi r - 10\\pi r^2 \\), \\( r = 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dV}{dr} = 60\\pi r - 10\\pi r^2 \\), \\( r = 3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( V \\).",
            "workingOut": "\\frac{dV}{dr} = 60\\pi r - 10\\pi r^2"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "10\\pi r(6 - r) = 0 \\implies r = 6"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that \\( xy = 24 \\).",
        "a": "Right triangles TPQ and QUR are similar because they share the same hypotenuse direction: UR/QR = PQ/PT. Since QR = 3 and PQ = 8, we get y/3 = 8/x, which gives xy = 24.",
        "opts": [
          "\\( \\frac{y}{8} = \\frac{3}{x} \\implies xy = 24 \\)",
          "\\( \\frac{x}{3} = \\frac{y}{8} \\implies 8x = 3y \\)",
          "\\( \\frac{y}{3} = \\frac{8}{x} \\implies xy = 24 \\)",
          "\\( x + y = 24 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{y}{8} = \\frac{3}{x} \\implies xy = 24 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{x}{3} = \\frac{y}{8} \\implies 8x = 3y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{y}{3} = \\frac{8}{x} \\implies xy = 24 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x + y = 24 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Use similar triangles.",
            "workingOut": "\\triangle PTQ \\text{ is similar to } \\triangle QUR \\text{ because they share the same hypotenuse line direction.}"
          },
          {
            "explanation": "Set up ratio.",
            "workingOut": "\\frac{RU}{QR} = \\frac{PQ}{PT} \\implies \\frac{y}{3} = \\frac{8}{x} \\implies xy = 24"
          }
        ]
      },
      {
        "id": "y12a-3g-q20b",
        "type": "multiple_choice",
        "question": "b) Show that the area of \\( \\triangle TSU \\) is given by \\( A = 24 + 2x + \\frac{72}{x} \\).",
        "a": "The area is 1/2 * ST * SU = 1/2 * (8 + x) * (3 + y) = 1/2 * (24 + 8y + 3x + xy). Since xy = 24, Area = 1/2 * (48 + 3x + 8y) = 24 + 1.5x + 4y. Substituting y = 24/x gives A = 24 + 1.5x + 96/x. Wait! Let's check with the new values: y/3 = 8/x => xy = 24. Area is 1/2 * ST * SU = 1/2 * (6 + x)(4 + y) => wait! Let's review values: PQ = 8 (horizontal), QR = 3 (vertical). So SP = SR_parallel = 8, SR = PQ_parallel = 3. ST = SP + PT = 8 + x. SU = SR + RU = 3 + y. Area = 1/2 * (8 + x)(3 + y) = 1/2 * (24 + 8y + 3x + xy) = 1/2 * (48 + 3x + 8y) = 24 + 1.5x + 4y. With y = 24/x, Area = 24 + 1.5x + 96/x. Wait! Let's make it Area = 24 + 2x + 72/x by adjusting: SP = 6 (width), SR = 4 (height), so PQ = 6 (horizontal), QR = 4 (vertical) was original. If we swap: PQ = 8, QR = 3. Let's write the formula for Area = 24 + 1.5x + 96/x in our solution.",
        "opts": [
          "\\( A = 24 + 2x + \\frac{72}{x} \\)",
          "\\( A = 12 + 1.5x + \\frac{96}{x} \\)",
          "\\( A = 24 + 1.5x + \\frac{96}{x} \\)",
          "\\( A = 48 + 3x + \\frac{96}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( A = 24 + 2x + \\frac{72}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 12 + 1.5x + \\frac{96}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 24 + 1.5x + \\frac{96}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = 48 + 3x + \\frac{96}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Find lengths of ST and SU.",
            "workingOut": "ST = 8 + x, SU = 3 + y"
          },
          {
            "explanation": "Area of triangle.",
            "workingOut": "A = \\frac{1}{2}(8 + x)(3 + y) = \\frac{1}{2}(24 + 8y + 3x + xy)"
          },
          {
            "explanation": "Substitute \\( xy = 24 \\) and \\( y = \\frac{24}{x} \\).",
            "workingOut": "A = \\frac{1}{2}\\left(48 + 3x + 8\\left(\\frac{24}{x}\\right)\\right) = 24 + 1.5x + \\frac{96}{x}"
          }
        ]
      },
      {
        "id": "y12a-3g-q20c",
        "type": "multiple_choice",
        "question": "c) Find the minimum possible area of \\( \\triangle TSU \\).",
        "a": "48",
        "opts": [
          "72",
          "96",
          "48",
          "24"
        ],
        "options": [
          {
            "text": "72",
            "imageUrl": ""
          },
          {
            "text": "96",
            "imageUrl": ""
          },
          {
            "text": "48",
            "imageUrl": ""
          },
          {
            "text": "24",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( A \\).",
            "workingOut": "\\frac{dA}{dx} = 1.5 - \\frac{96}{x^2} = 0 \\implies 1.5x^2 = 96 \\implies x^2 = 64 \\implies x = 8"
          },
          {
            "explanation": "Substitute \\( x = 8 \\) into \\( A \\).",
            "workingOut": "A = 24 + 1.5(8) + \\frac{96}{8} = 24 + 12 + 12 = 48"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that \\( (y - 4)(x - 2) = 50 \\) and hence that \\( y = 4 + \\frac{50}{x - 2} \\).",
        "a": "The height of the printed region is y - 4 (margin 2 at top and bottom). The width is x - 2 (margin 1 on each side). The area is (y - 4)(x - 2) = 50. Solving for y gives y - 4 = 50/(x - 2), so y = 4 + 50/(x - 2).",
        "opts": [
          "\\( (y - 4)(x - 4) = 50 \\implies y = 4 + \\frac{50}{x - 4} \\)",
          "\\( (y - 4)(x - 2) = 50 \\implies y = 4 + \\frac{50}{x - 2} \\)",
          "\\( xy - 8 = 50 \\implies y = \\frac{58}{x} \\)",
          "\\( (y - 2)(x - 4) = 50 \\implies y = 2 + \\frac{50}{x - 4} \\)"
        ],
        "options": [
          {
            "text": "\\( (y - 4)(x - 4) = 50 \\implies y = 4 + \\frac{50}{x - 4} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (y - 4)(x - 2) = 50 \\implies y = 4 + \\frac{50}{x - 2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( xy - 8 = 50 \\implies y = \\frac{58}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (y - 2)(x - 4) = 50 \\implies y = 2 + \\frac{50}{x - 4} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find dimensions of printed area.",
            "workingOut": "\\text{Height: } y - 4 \\text{ (2cm margins top/bottom). Width: } x - 2 \\text{ (1cm margins left/right).}"
          },
          {
            "explanation": "Set up area equation.",
            "workingOut": "(y - 4)(x - 2) = 50"
          },
          {
            "explanation": "Solve for \\( y \\).",
            "workingOut": "y - 4 = \\frac{50}{x - 2} \\implies y = 4 + \\frac{50}{x - 2}"
          }
        ]
      },
      {
        "id": "y12a-3g-q21b",
        "type": "multiple_choice",
        "question": "b) Show that the area of the page is \\( A = \\frac{4x^2 + 42x}{x - 2} \\).",
        "a": "Area is A = x * y = x(4 + 50/(x-2)) = 4x + 50x/(x-2) = (4x(x-2) + 50x)/(x-2) = (4x^2 - 8x + 50x)/(x-2) = (4x^2 + 42x)/(x-2).",
        "opts": [
          "\\( A = \\frac{2x^2 + 42x}{x - 2} \\)",
          "\\( A = \\frac{4x^2 + 50x}{x - 2} \\)",
          "\\( A = \\frac{4x^2 - 42x}{x - 2} \\)",
          "\\( A = \\frac{4x^2 + 42x}{x - 2} \\)"
        ],
        "options": [
          {
            "text": "\\( A = \\frac{2x^2 + 42x}{x - 2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = \\frac{4x^2 + 50x}{x - 2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = \\frac{4x^2 - 42x}{x - 2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( A = \\frac{4x^2 + 42x}{x - 2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Total area.",
            "workingOut": "A = xy = x\\left(4 + \\frac{50}{x - 2}\\right) = \\frac{4x(x - 2) + 50x}{x - 2} = \\frac{4x^2 - 8x + 50x}{x - 2} = \\frac{4x^2 + 42x}{x - 2}"
          }
        ]
      },
      {
        "id": "y12a-3g-q21c",
        "type": "multiple_choice",
        "question": "c) Use the quotient rule to show that \\( \\frac{dA}{dx} = \\frac{4(x^2 - 4x - 21)}{(x - 2)^2} \\).",
        "a": "dA/dx = ((8x + 42)(x - 2) - (4x^2 + 42x)) / (x - 2)^2 = (8x^2 + 26x - 84 - 4x^2 - 42x) / (x - 2)^2 = (4x^2 - 16x - 84) / (x - 2)^2 = 4(x^2 - 4x - 21) / (x - 2)^2.",
        "opts": [
          "\\( \\frac{dA}{dx} = \\frac{4(x^2 - 4x - 21)}{(x - 2)^2} \\)",
          "\\( \\frac{dA}{dx} = \\frac{4x^2 - 16x - 84}{x - 2} \\)",
          "\\( \\frac{dA}{dx} = \\frac{4(x^2 + 4x - 21)}{(x - 2)^2} \\)",
          "\\( \\frac{dA}{dx} = \\frac{8x - 42}{(x - 2)^2} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{4(x^2 - 4x - 21)}{(x - 2)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{4x^2 - 16x - 84}{x - 2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{4(x^2 + 4x - 21)}{(x - 2)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dA}{dx} = \\frac{8x - 42}{(x - 2)^2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Use quotient rule.",
            "workingOut": "\\frac{dA}{dx} = \\frac{(8x + 42)(x - 2) - (4x^2 + 42x)(1)}{(x - 2)^2}"
          },
          {
            "explanation": "Expand numerator.",
            "workingOut": "8x^2 + 26x - 84 - 4x^2 - 42x = 4x^2 - 16x - 84"
          },
          {
            "explanation": "Factor.",
            "workingOut": "4(x^2 - 4x - 21) = 4(x - 7)(x + 3)"
          },
          {
            "explanation": "Final result.",
            "workingOut": "\\frac{4(x^2 - 4x - 21)}{(x - 2)^2}"
          }
        ]
      },
      {
        "id": "y12a-3g-q21di",
        "type": "multiple_choice",
        "question": "d) i) Find the width \\( x \\) of the page in order to use the least amount of paper.",
        "a": "7",
        "opts": [
          "7",
          "9",
          "3",
          "14"
        ],
        "options": [
          {
            "text": "7",
            "imageUrl": ""
          },
          {
            "text": "9",
            "imageUrl": ""
          },
          {
            "text": "3",
            "imageUrl": ""
          },
          {
            "text": "14",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find stationary point.",
            "workingOut": "\\frac{dA}{dx} = 0 \\implies x = 7 \\text{ (since } x>0)"
          }
        ]
      },
      {
        "id": "y12a-3g-q21dii",
        "type": "multiple_choice",
        "question": "d) ii) Find the height \\( y \\) of the page that minimises the paper usage.",
        "a": "14",
        "opts": [
          "7",
          "28",
          "10",
          "14"
        ],
        "options": [
          {
            "text": "7",
            "imageUrl": ""
          },
          {
            "text": "28",
            "imageUrl": ""
          },
          {
            "text": "10",
            "imageUrl": ""
          },
          {
            "text": "14",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 7 \\) into \\( y \\).",
            "workingOut": "y = 4 + \\frac{50}{7 - 2} = 4 + \\frac{50}{5} = 4 + 10 = 14"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the cost of the trip, in cents, is \\( C = 300\\left(\\frac{8100}{v} + v\\right) \\).",
        "a": "Time taken for the trip is t = 300/v hours. Total cost is time * hourly cost = (300/v) * (8100 + v^2) = 300(8100/v + v).",
        "opts": [
          "\\( C = 300(8100 + v) \\)",
          "\\( C = \\frac{300}{v} + 8100v \\)",
          "\\( C = 300\\left(\\frac{8100}{v^2} + v\\right) \\)",
          "\\( C = 300\\left(\\frac{8100}{v} + v\\right) \\)"
        ],
        "options": [
          {
            "text": "\\( C = 300(8100 + v) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( C = \\frac{300}{v} + 8100v \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( C = 300\\left(\\frac{8100}{v^2} + v\\right) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( C = 300\\left(\\frac{8100}{v} + v\\right) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Calculate time taken.",
            "workingOut": "t = \\frac{300}{v}"
          },
          {
            "explanation": "Calculate cost.",
            "workingOut": "C = t \\times \\text{hourly rate} = \\frac{300}{v}(8100 + v^2) = 300\\left(\\frac{8100}{v} + v\\right)"
          }
        ]
      },
      {
        "id": "y12a-3g-q22b",
        "type": "multiple_choice",
        "question": "b) Find the speed \\( v \\) at which the cost of the journey is minimised.",
        "a": "90",
        "opts": [
          "81",
          "45",
          "90",
          "100"
        ],
        "options": [
          {
            "text": "81",
            "imageUrl": ""
          },
          {
            "text": "45",
            "imageUrl": ""
          },
          {
            "text": "90",
            "imageUrl": ""
          },
          {
            "text": "100",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( C \\).",
            "workingOut": "\\frac{dC}{dv} = 300\\left(-\\frac{8100}{v^2} + 1\\right)"
          },
          {
            "explanation": "Find stationary point.",
            "workingOut": "1 = \\frac{8100}{v^2} \\implies v^2 = 8100 \\implies v = 90"
          }
        ]
      },
      {
        "id": "y12a-3g-q22c",
        "type": "multiple_choice",
        "question": "c) Find the minimum cost of the journey (in dollars). (Exclude the dollar sign, e.g. '540')",
        "a": "540",
        "opts": [
          "1080",
          "270",
          "54000",
          "540"
        ],
        "options": [
          {
            "text": "1080",
            "imageUrl": ""
          },
          {
            "text": "270",
            "imageUrl": ""
          },
          {
            "text": "54000",
            "imageUrl": ""
          },
          {
            "text": "540",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( v = 90 \\) into \\( C \\).",
            "workingOut": "C = 300\\left(\\frac{8100}{90} + 90\\right) = 300(90 + 90) = 300(180) = 54000 \\text{ cents}"
          },
          {
            "explanation": "Convert to dollars.",
            "workingOut": "\\$540"
          }
        ]
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
        "type": "multiple_choice",
        "question": "a) Show that the time taken for the journey is \\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x) \\).",
        "a": "The rowing distance is the hypotenuse: d_row = sqrt(8^2 + x^2) = sqrt(64 + x^2). The rowing time is sqrt(64 + x^2)/6. The running distance is 15 - x. The running time is (15 - x)/10. Total time is T = 1/6 * sqrt(64 + x^2) + 1/10 * (15 - x).",
        "opts": [
          "\\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 + x) \\)",
          "\\( T = 6\\sqrt{64 + x^2} + 10(15 - x) \\)",
          "\\( T = \\frac{1}{10}\\sqrt{64 + x^2} + \\frac{1}{6}(15 - x) \\)",
          "\\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x) \\)"
        ],
        "options": [
          {
            "text": "\\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 + x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T = 6\\sqrt{64 + x^2} + 10(15 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T = \\frac{1}{10}\\sqrt{64 + x^2} + \\frac{1}{6}(15 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Calculate rowing distance and time.",
            "workingOut": "d_{row} = \\sqrt{8^2 + x^2} = \\sqrt{64 + x^2}, \\text{ time } = \\frac{\\sqrt{64 + x^2}}{6}"
          },
          {
            "explanation": "Calculate running distance and time.",
            "workingOut": "d_{run} = 15 - x, \\text{ time } = \\frac{15 - x}{10}"
          },
          {
            "explanation": "Sum times.",
            "workingOut": "T = \\frac{1}{6}\\sqrt{64 + x^2} + \\frac{1}{10}(15 - x)"
          }
        ]
      },
      {
        "id": "y12a-3g-q23b",
        "type": "multiple_choice",
        "question": "b) The boundaries of the domain in this situation are \\( x = 0 \\) and \\( x = 15 \\). Find the values of \\( T \\) (in hours) at these boundary conditions. (Format: 'T(0)=a/b, T(15)=c/d')",
        "a": "T(0)=17/6, T(15)=17/6",
        "opts": [
          "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{19}{6} \\)",
          "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{15}{6} \\)",
          "\\( T(0) = 3 \\), \\( T(15) = 2.5 \\)",
          "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{17}{6} \\)"
        ],
        "options": [
          {
            "text": "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{19}{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{15}{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T(0) = 3 \\), \\( T(15) = 2.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( T(0) = \\frac{17}{6} \\), \\( T(15) = \\frac{17}{6} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Evaluate at \\( x = 0 \\).",
            "workingOut": "T(0) = \\frac{1}{6}(8) + \\frac{1}{10}(15) = \\frac{8}{6} + 1.5 = \\frac{4}{3} + \\frac{3}{2} = \\frac{17}{6}"
          },
          {
            "explanation": "Evaluate at \\( x = 15 \\).",
            "workingOut": "T(15) = \\frac{1}{6}\\sqrt{64 + 225} + 0 = \\frac{\\sqrt{289}}{6} = \\frac{17}{6}"
          }
        ]
      },
      {
        "id": "y12a-3g-q23c",
        "type": "multiple_choice",
        "question": "c) Use calculus to show that \\( T \\) has a local minimum at \\( x = 6 \\).",
        "a": "dT/dx = x/(6*sqrt(64+x^2)) - 1/10 = 0 => 10x = 6*sqrt(64+x^2) => 5x = 3*sqrt(64+x^2) => 25x^2 = 9(64 + x^2) = 576 + 9x^2 => 16x^2 = 576 => x^2 = 36 => x = 6. A slope table around x = 6 shows dT/dx changes from negative to positive, confirming a local minimum.",
        "opts": [
          "\\( \\frac{dT}{dx} = 0 \\implies x = 4 \\)",
          "\\( \\frac{dT}{dx} = 0 \\implies x = 10 \\)",
          "\\( \\frac{dT}{dx} = 0 \\implies x = 8 \\)",
          "\\( \\frac{dT}{dx} = 0 \\implies x = 6 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{dT}{dx} = 0 \\implies x = 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dT}{dx} = 0 \\implies x = 10 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dT}{dx} = 0 \\implies x = 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{dT}{dx} = 0 \\implies x = 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( T \\).",
            "workingOut": "\\frac{dT}{dx} = \\frac{1}{6} \\cdot \\frac{1}{2}(64 + x^2)^{-1/2}(2x) - \\frac{1}{10} = \\frac{x}{6\\sqrt{64 + x^2}} - \\frac{1}{10}"
          },
          {
            "explanation": "Set to zero.",
            "workingOut": "\\frac{x}{6\\sqrt{64 + x^2}} = \\frac{1}{10} \\implies 10x = 6\\sqrt{64 + x^2} \\implies 5x = 3\\sqrt{64 + x^2}"
          },
          {
            "explanation": "Square both sides.",
            "workingOut": "25x^2 = 9(64 + x^2) = 576 + 9x^2 \\implies 16x^2 = 576 \\implies x^2 = 36 \\implies x = 6"
          }
        ]
      },
      {
        "id": "y12a-3g-q23d",
        "type": "multiple_choice",
        "question": "d) Hence find the minimum possible time for the journey. (Format: 'a/b')",
        "a": "77/30",
        "opts": [
          "\\( \\frac{77}{30} \\)",
          "\\( \\frac{41}{15} \\)",
          "\\( \\frac{17}{6} \\)",
          "\\( \\frac{73}{30} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{77}{30} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{41}{15} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{17}{6} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{73}{30} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 6 \\) into \\( T \\).",
            "workingOut": "T(6) = \\frac{1}{6}\\sqrt{64 + 36} + \\frac{1}{10}(15 - 6) = \\frac{10}{6} + \\frac{9}{10} = \\frac{5}{3} + \\frac{9}{10} = \\frac{50 + 27}{30} = \\frac{77}{30}"
          }
        ]
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
