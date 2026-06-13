export const Y11_CH1_QUESTIONS = [
  {
    "id": "y11-5g-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.",
    "hint": "Factor the expression to find x-intercepts, and use the axis of symmetry to find the vertex.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Find the x-intercepts by setting \\(y = 0\\). Factor the quadratic equation: \\(x(x - 6) = 0\\). This gives the intercepts at \\(x = 0\\) and \\(x = 6\\).",
        "workingOut": "\\(x = 0 \\quad \\text{or} \\quad x = 6\\)"
      },
      {
        "explanation": "Find the vertex. The axis of symmetry lies midway between the intercepts: \\(x = 3\\). Substitute \\(x = 3\\) into the original equation to find the y-coordinate: \\(y = 3^2 - 6(3) = 9 - 18 = -9\\). So the vertex is at \\((3, -9)\\).",
        "workingOut": "\\(\\text{Vertex: } (3, -9)\\)"
      },
      {
        "explanation": "Sketch the parabola passing through \\((0,0)\\) and \\((6,0)\\), with the vertex at \\((3, -9)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-2, 4, 8, -11],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-11],[0,4]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x*x - 6*x; }, -1, 7], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [3,-9], {name:'(3,-9)', size:3, color:'red', label:{offset:[10,-10]}});\nboard.create('point', [6,0], {name:'(6,0)', size:3, color:'red', label:{offset:[8,8]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "subQuestions": [
      {
        "id": "y11-5g-q1a-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "i) The parabola is shifted right by 2 units. Find its new equation, expanding any brackets.",
        "a": "y = x^2 - 10x + 16",
        "solutionSteps": [
          {
            "explanation": "To shift a graph right by 2 units, replace \\(x\\) with \\(x - 2\\) in the equation.",
            "workingOut": "\\(y = (x - 2)^2 - 6(x - 2)\\)"
          },
          {
            "explanation": "Expand the terms: \\((x - 2)^2 = x^2 - 4x + 4\\) and \\(-6(x - 2) = -6x + 12\\).",
            "workingOut": "\\(y = x^2 - 4x + 4 - 6x + 12\\)"
          },
          {
            "explanation": "Collect like terms to obtain the final equation.",
            "workingOut": "\\(y = x^2 - 10x + 16\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q1a-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The shifted parabola in part i is then shifted up 3 units. Find its final equation.",
        "a": "y = x^2 - 10x + 19",
        "solutionSteps": [
          {
            "explanation": "To shift a graph up by 3 units, add 3 to the entire function.",
            "workingOut": "\\(y = (x^2 - 10x + 16) + 3\\)"
          },
          {
            "explanation": "Simplify the constant terms.",
            "workingOut": "\\(y = x^2 - 10x + 19\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q1b-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "b) i) The original parabola \\(y = x^2 - 6x\\) is translated up 3 units. Find its equation.",
        "a": "y = x^2 - 6x + 3",
        "solutionSteps": [
          {
            "explanation": "To translate a graph up by 3 units, add 3 to the function.",
            "workingOut": "\\(y = x^2 - 6x + 3\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q1b-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The translated parabola in part i is then translated 2 units right. Find its equation, expanding any brackets.",
        "a": "y = x^2 - 10x + 19",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(x - 2\\) in the translated equation \\(y = x^2 - 6x + 3\\).",
            "workingOut": "\\(y = (x - 2)^2 - 6(x - 2) + 3\\)"
          },
          {
            "explanation": "Expand the brackets and simplify.",
            "workingOut": "\\(y = (x^2 - 4x + 4) - (6x - 12) + 3 = x^2 - 10x + 19\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q1c",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "c) Parts a and b used the same translations, 2 units right and 3 units up, but in a different order. Do these transformations commute?",
        "a": "Yes, they commute",
        "opts": ["Yes, they commute", "No, they do not commute"],
        "solutionSteps": [
          {
            "explanation": "Compare the final equations from parts a(ii) and b(ii). Both result in \\(y = x^2 - 10x + 19\\). Since the order of these translations does not affect the final graph, they commute.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.",
    "hint": "Remember that horizontal dilation replaces \\(x\\) with \\(\\frac{x}{k}\\), and vertical dilation multiplies the entire expression by \\(c\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "The original graph has x-intercepts at \\(x = 0\\) and \\(x = 4\\), with a vertex at \\((2, -4)\\).",
        "workingOut": "\\(y = x(x - 4)\\)"
      }
    ],
    "subQuestions": [
      {
        "id": "y11-5g-q2a-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "a) i) The parabola is dilated by a factor of 3 horizontally. Find its equation.",
        "a": "y = (x/3)^2 - 4(x/3)",
        "solutionSteps": [
          {
            "explanation": "For a horizontal dilation by a factor of 3, replace \\(x\\) with \\(\\frac{x}{3}\\).",
            "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 - 4\\left(\\frac{x}{3}\\right)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q2a-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The parabola in part i is then dilated by a factor of 2 vertically. Find its equation.",
        "a": "y = 2*(x/3)^2 - 8*(x/3)",
        "solutionSteps": [
          {
            "explanation": "For a vertical dilation by a factor of 2, multiply the entire equation by 2.",
            "workingOut": "\\(y = 2\\left[\\left(\\frac{x}{3}\\right)^2 - 4\\left(\\frac{x}{3}\\right)\\right] = 2\\left(\\frac{x}{3}\\right)^2 - 8\\left(\\frac{x}{3}\\right)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q2b-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "b) i) The original parabola \\(y = x^2 - 4x\\) is stretched by a factor of 2 vertically. Find its equation.",
        "a": "y = 2*x^2 - 8*x",
        "solutionSteps": [
          {
            "explanation": "Multiply the original function by 2.",
            "workingOut": "\\(y = 2(x^2 - 4x) = 2x^2 - 8x\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q2b-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The parabola in part i is then stretched by a factor of 3 horizontally. Find its equation.",
        "a": "y = 2*(x/3)^2 - 8*(x/3)",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(\\frac{x}{3}\\) in \\(y = 2x^2 - 8x\\).",
            "workingOut": "\\(y = 2\\left(\\frac{x}{3}\\right)^2 - 8\\left(\\frac{x}{3}\\right)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q2c",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "c) Parts a and b used the same dilations, a factor of 3 horizontally and a factor of 2 vertically, but in a different order. Do these transformations commute?",
        "a": "Yes, they commute",
        "opts": ["Yes, they commute", "No, they do not commute"],
        "solutionSteps": [
          {
            "explanation": "Both orderings result in the same final equation: \\(y = 2(\\frac{x}{3})^2 - 8(\\frac{x}{3})\\). Thus, vertical and horizontal dilations commute.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.",
    "hint": "Check if changing the order of horizontal dilation and vertical translation affects the equation.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "The starting function is \\(y = x^2 + 4x\\).",
        "workingOut": ""
      }
    ],
    "subQuestions": [
      {
        "id": "y11-5g-q3a-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "a) i) The parabola is dilated by a factor of 3 horizontally. Find its equation.",
        "a": "y = (x/3)^2 + 4(x/3)",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(\\frac{x}{3}\\) for \\(x\\) in the equation.",
            "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q3a-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The parabola in part i is then translated 2 units up. Find its equation.",
        "a": "y = (x/3)^2 + 4(x/3) + 2",
        "solutionSteps": [
          {
            "explanation": "Add 2 to the equation from part i.",
            "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right) + 2\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q3b-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "b) i) The original parabola is shifted 2 units up. Find its equation.",
        "a": "y = x^2 + 4x + 2",
        "solutionSteps": [
          {
            "explanation": "Add 2 to the original equation.",
            "workingOut": "\\(y = x^2 + 4x + 2\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q3b-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The parabola in part i is then dilated by a factor of 3 horizontally. Find its equation.",
        "a": "y = (x/3)^2 + 4(x/3) + 2",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(\\frac{x}{3}\\) in \\(y = x^2 + 4x + 2\\).",
            "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right) + 2\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q3c",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "c) Do these transformations (horizontal dilation and vertical translation) commute?",
        "a": "Yes, they commute",
        "opts": ["Yes, they commute", "No, they do not commute"],
        "solutionSteps": [
          {
            "explanation": "Compare the results. Both processes yield \\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right) + 2\\), so they commute.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.",
    "hint": "Recall that reflection in the y-axis replaces \\(x\\) with \\(-x\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "We begin with \\(y = x^2 - 8x\\).",
        "workingOut": ""
      }
    ],
    "subQuestions": [
      {
        "id": "y11-5g-q4a-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "a) i) The parabola is shifted right by 3 units. Find its equation, expanding any brackets.",
        "a": "y = x^2 - 14x + 33",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(x - 3\\) in the equation.",
            "workingOut": "\\(y = (x - 3)^2 - 8(x - 3)\\)"
          },
          {
            "explanation": "Expand the terms: \\(y = x^2 - 6x + 9 - 8x + 24\\).",
            "workingOut": "\\(y = x^2 - 14x + 33\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q4a-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The shifted parabola is then reflected in the y-axis. Find its equation.",
        "a": "y = x^2 + 14x + 33",
        "solutionSteps": [
          {
            "explanation": "To reflect in the y-axis, replace \\(x\\) with \\(-x\\) in \\(y = x^2 - 14x + 33\\).",
            "workingOut": "\\(y = (-x)^2 - 14(-x) + 33 = x^2 + 14x + 33\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q4b-i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "b) i) The original parabola is reflected in the y-axis. Find its equation.",
        "a": "y = x^2 + 8x",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(-x\\) in the original equation \\(y = x^2 - 8x\\).",
            "workingOut": "\\(y = (-x)^2 - 8(-x) = x^2 + 8x\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q4b-ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "ii) The reflected parabola is then shifted 3 units right. Find its equation, expanding any brackets.",
        "a": "y = x^2 + 2x - 15",
        "solutionSteps": [
          {
            "explanation": "Replace \\(x\\) with \\(x - 3\\) in \\(y = x^2 + 8x\\).",
            "workingOut": "\\(y = (x - 3)^2 + 8(x - 3)\\)"
          },
          {
            "explanation": "Expand the brackets: \\(y = x^2 - 6x + 9 + 8x - 24\\).",
            "workingOut": "\\(y = x^2 + 2x - 15\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q4c",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "c) Do these transformations (shift right and reflection in the y-axis) commute?",
        "a": "No, they do not commute",
        "opts": ["Yes, they commute", "No, they do not commute"],
        "solutionSteps": [
          {
            "explanation": "Compare the final equations: \\(y = x^2 + 14x + 33\\) (from part a) vs \\(y = x^2 + 2x - 15\\) (from part b). Since the final functions are different, these transformations do not commute.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q5a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do reflection in the y-axis and horizontal translation commute?",
    "a": "No, they do not commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Try translating a function by \\(a\\) and reflecting it, compared to reflecting first and then translating.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Let \\(f(x)\\) be a function. Applying reflection in the y-axis then horizontal translation by \\(k\\) gives \\(f(-(x - k)) = f(-x + k)\\). Applying horizontal translation then reflection gives \\(f(-x - k)\\). Since \\(-x + k \\neq -x - k\\), they do not commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q5b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do vertical dilation and vertical translation commute?",
    "a": "No, they do not commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Compare multiplying a function by a factor after translating, versus translating after multiplying.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "If we dilate vertically by \\(c\\) and translate vertically by \\(d\\), the operations are: Dilation then translation: \\(c \\cdot f(x) + d\\). Translation then dilation: \\(c \\cdot (f(x) + d) = c \\cdot f(x) + c \\cdot d\\). Since \\(d \\neq c \\cdot d\\) (unless \\(d=0\\) or \\(c=1\\)), they do not commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q5c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do vertical dilation and reflection in the x-axis commute?",
    "a": "Yes, they commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Both transformations correspond to multiplying the entire y-value by a constant.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Vertical dilation by \\(c\\) multiplies the function by \\(c\\). Reflection in the x-axis multiplies the function by \\(-1\\). Since multiplication is commutative, \\(-1 \\cdot (c \\cdot f(x)) = c \\cdot (-f(x))\\), they commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q5d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do horizontal translation and vertical translation commute?",
    "a": "Yes, they commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Think about whether moving a graph horizontally and then vertically differs from doing it in reverse.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Horizontal translation changes the input \\(x\\) to \\(x - h\\). Vertical translation adds \\(v\\) to the output. Applying both in any order results in \\(f(x - h) + v\\). Therefore, they commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q5e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do horizontal dilation and horizontal translation commute?",
    "a": "No, they do not commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Check the arguments of the function under both orders of transformations.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Horizontal dilation by factor \\(a\\) maps \\(x \\to a x\\). Horizontal translation by \\(b\\) maps \\(x \\to x - b\\). In one order, we get \\(f(a(x - b)) = f(ax - ab)\\). In the other, we get \\(f(ax - b)\\). Since \\(ab \\neq b\\) generally, they do not commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q5f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do reflection in the x-axis and horizontal translation commute?",
    "a": "Yes, they commute",
    "opts": ["Yes, they commute", "No, they do not commute"],
    "hint": "Check if shifting horizontally affects the vertical reflection or vice versa.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Reflection in the x-axis maps \\(y \\to -f(x)\\). Horizontal translation maps \\(x \\to x - h\\). Under both orders, the result is \\(-f(x - h)\\). Hence, they commute.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11-5g-q6a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = x^2\\) after it is shifted right 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) horizontally. Sketch the resulting graph.",
    "hint": "Shift right by replacing \\(x\\) with \\(x - 3\\), then dilate horizontally by replacing \\(x\\) with \\(3x\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "First, translate the parabola \\(y = x^2\\) right by 3 units to get: \\(y = (x - 3)^2\\).",
        "workingOut": "\\(y = (x - 3)^2\\)"
      },
      {
        "explanation": "Next, apply the horizontal dilation by factor \\(\\frac{1}{3}\\) by replacing \\(x\\) with \\(3x\\).",
        "workingOut": "\\(y = (3x - 3)^2 = 9(x - 1)^2\\)"
      },
      {
        "explanation": "Sketch the final graph, which is a steep parabola with vertex at \\((1, 0)\\) and y-intercept at \\((0, 9)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-2, 10, 4, -2],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,10]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 9*(x-1)*(x-1); }, -1, 3], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [1,0], {name:'(1,0)', size:3, color:'red'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q6b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = 3^x\\) after it is translated down 2 units, then reflected in the y-axis. Sketch the resulting graph.",
    "hint": "Subtract 2 from the function, then replace \\(x\\) with \\(-x\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Translate \\(y = 3^x\\) down by 2 units.",
        "workingOut": "\\(y = 3^x - 2\\)"
      },
      {
        "explanation": "Reflect the resulting graph in the y-axis by replacing \\(x\\) with \\(-x\\).",
        "workingOut": "\\(y = 3^{-x} - 2 = \\left(\\frac{1}{3}\\right)^x - 2\\)"
      },
      {
        "explanation": "Sketch the graph. It has a horizontal asymptote at \\(y = -2\\) and y-intercept at \\((0, -1)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-4, 6, 4, -4],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,6]], {strokeColor:'black'});\nboard.create('line', [[-4,-2],[4,-2]], {strokeColor:'gray', dash:2});\nboard.create('functiongraph', [function(x){ return Math.pow(3,-x) - 2; }, -4, 4], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q6c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = x^2 - 2\\) after it is translated down 2 units, then dilated by a factor of \\(-1\\) vertically. Sketch the graph.",
    "hint": "Subtract 2, then multiply the entire function by \\(-1\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Translate down by 2 units: \\(y = (x^2 - 2) - 2 = x^2 - 4\\).",
        "workingOut": "\\(y = x^2 - 4\\)"
      },
      {
        "explanation": "Dilate vertically by a factor of \\(-1\\) (which is a reflection in the x-axis) by multiplying the equation by \\(-1\\).",
        "workingOut": "\\(y = -(x^2 - 4) = 4 - x^2\\)"
      },
      {
        "explanation": "Sketch the concave-down parabola with vertex at \\((0, 4)\\) and x-intercepts at \\((-2, 0)\\) and \\((2, 0)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-4, 6, 4, -6],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 4 - x*x; }, -3, 3], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q6d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = \\frac{1}{x}\\) after it is shifted right 2 units, then dilated by a factor of 3 vertically. Sketch the graph.",
    "hint": "Replace \\(x\\) with \\(x - 2\\), then multiply the output by 3.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Shift right by 2 units: replace \\(x\\) with \\(x - 2\\).",
        "workingOut": "\\(y = \\frac{1}{x - 2}\\)"
      },
      {
        "explanation": "Dilate vertically by 3: multiply the equation by 3.",
        "workingOut": "\\(y = \\frac{3}{x - 2}\\)"
      },
      {
        "explanation": "Sketch the hyperbola with vertical asymptote at \\(x = 2\\) and horizontal asymptote at \\(y = 0\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-2, 8, 6, -8],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-8],[0,8]], {strokeColor:'black'});\nboard.create('line', [[2,-8],[2,8]], {strokeColor:'gray', dash:2});\nboard.create('functiongraph', [function(x){ return 3/(x-2); }, -2, 1.9], {strokeColor:'blue',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 3/(x-2); }, 2.1, 6], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q6e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(x^2 + y^2 = 9\\) after it is translated up 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) vertically. Sketch the graph.",
    "hint": "Replace \\(y\\) with \\(y - 3\\), then replace \\(y\\) with \\(3y\\) to dilate vertically by \\(\\frac{1}{3}\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "First, translate the circle \\(x^2 + y^2 = 9\\) up by 3 units: replace \\(y\\) with \\(y - 3\\).",
        "workingOut": "\\(x^2 + (y - 3)^2 = 9\\)"
      },
      {
        "explanation": "Next, apply vertical dilation by factor \\(\\frac{1}{3}\\) by replacing \\(y\\) with \\(3y\\).",
        "workingOut": "\\(x^2 + (3y - 3)^2 = 9 \\implies x^2 + 9(y - 1)^2 = 9 \\implies \\frac{x^2}{9} + (y - 1)^2 = 1\\)"
      },
      {
        "explanation": "Sketch the ellipse centered at \\((0, 1)\\) with semi-major axis 3 horizontally and semi-minor axis 1 vertically.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-5, 4, 5, -2],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,4]], {strokeColor:'black'});\nboard.create('ellipse', [[0,1], [3,1], [0,2]], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q6f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = \\sqrt{x}\\) after it is translated up 3 units, then dilated by a factor of \\(-1\\) horizontally. Sketch the graph.",
    "hint": "Add 3, then replace \\(x\\) with \\(-x\\) to reflect in the y-axis.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Translate up by 3 units: \\(y = \\sqrt{x} + 3\\).",
        "workingOut": "\\(y = \\sqrt{x} + 3\\)"
      },
      {
        "explanation": "Dilate horizontally by \\(-1\\) by replacing \\(x\\) with \\(-x\\). This is a reflection in the y-axis.",
        "workingOut": "\\(y = \\sqrt{-x} + 3\\)"
      },
      {
        "explanation": "Sketch the graph. It starts at \\((0, 3)\\) and extends to the left.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-10, 8, 2, -1],
            "boardOptions": { "keepaspectratio": true },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-10,0],[2,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,8]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return Math.sqrt(-x) + 3; }, -10, 0], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "y11-5g-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A table shows whether pairs of transformations commute. We use H for horizontal, V for vertical, T for translation, and D for dilation. Thus HT is horizontal translation, VT is vertical translation, HD is horizontal dilation, and VD is vertical dilation.\nLet C indicate that they commute, and N indicate that they do not commute.\n\n$$\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & & & \\\\ \\text{VT} & & C & & \\\\ \\text{HD} & N & & C & \\\\ \\text{VD} & & & C & C \\end{array}$$",
    "hint": "Think about how each pair of transformations acts on a general function \\(f(x)\\).",
    "t": "Combining transformations",
    "subQuestions": [
      {
        "id": "y11-5g-q7a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) Complete the entries below the diagonal in the table.",
        "solutionSteps": [
          {
            "explanation": "Determine the remaining entries: VT and HT (commute -> C); HD and VT (commute -> C); VD and HT (commute -> C); VD and VT (do not commute -> N). This completes the symmetric entries.",
            "workingOut": "\\(\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & C & N & C \\\\ \\text{VT} & C & C & C & N \\\\ \\text{HD} & N & C & C & C \\\\ \\text{VD} & C & N & C & C \\end{array}\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q7b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) The table does not directly include reflections. How can the table be used to decide whether a reflection commutes with another transformation?",
        "solutionSteps": [
          {
            "explanation": "Reflections are special cases of dilations: reflection in the y-axis is horizontal dilation by factor \\(-1\\) (HD), and reflection in the x-axis is vertical dilation by factor \\(-1\\) (VD). Thus, they follow the same commutation rules as HD and VD.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q7c",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) Check that the table agrees with your answers to Question 5.",
        "solutionSteps": [
          {
            "explanation": "Confirm matches with Q5: reflection in y (HD) and horizontal translation (HT) -> N; vertical dilation (VD) and vertical translation (VT) -> N; vertical dilation (VD) and reflection in x (VD) -> C; HT and VT -> C; HD and HT -> N; reflection in x (VD) and HT -> C. The table is consistent.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = x^2\\) after shifting left 2 units, down 3 units, then dilating horizontally by a factor of 3.",
    "a": "y = (x/3+2)^2-3",
    "hint": "First shift: \\(x \\to x + 2\\). Second shift: subtract 3. Dilate: replace \\(x\\) with \\(\\frac{x}{3}\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Shift left by 2 units: replace \\(x\\) with \\(x + 2\\) to get \\(y = (x + 2)^2\\).",
        "workingOut": "\\(y = (x + 2)^2\\)"
      },
      {
        "explanation": "Shift down by 3 units: subtract 3 to get \\(y = (x + 2)^2 - 3\\).",
        "workingOut": "\\(y = (x + 2)^2 - 3\\)"
      },
      {
        "explanation": "Dilate horizontally by a factor of 3: replace \\(x\\) with \\(\\frac{x}{3}\\).",
        "workingOut": "\\(y = \\left(\\frac{x}{3} + 2\\right)^2 - 3\\)"
      }
    ]
  },
  {
    "id": "y11-5g-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = x^2\\) after shifting down 3 units, dilating horizontally by a factor of 3, then shifting left 2 units.",
    "a": "y = ((x+2)/3)^2-3",
    "hint": "First subtract 3. Then replace \\(x\\) with \\(\\frac{x}{3}\\). Finally replace \\(x\\) with \\(x + 2\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Shift down 3 units: \\(y = x^2 - 3\\).",
        "workingOut": "\\(y = x^2 - 3\\)"
      },
      {
        "explanation": "Dilate horizontally by factor 3: replace \\(x\\) with \\(\\frac{x}{3}\\).",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 - 3\\)"
      },
      {
        "explanation": "Shift left 2 units: replace \\(x\\) with \\(x + 2\\).",
        "workingOut": "\\(y = \\left(\\frac{x + 2}{3}\\right)^2 - 3\\)"
      }
    ]
  },
  {
    "id": "y11-5g-q8c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = 3^x\\) after shifting down 2 units, right 2 units, then dilating vertically by a factor of \\(-3\\).",
    "a": "y = -3^(x-1)+6",
    "hint": "Subtract 2, replace \\(x\\) with \\(x - 2\\), then multiply the entire function by \\(-3\\).",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Shift down 2: \\(y = 3^x - 2\\).",
        "workingOut": "\\(y = 3^x - 2\\)"
      },
      {
        "explanation": "Shift right 2: replace \\(x\\) with \\(x - 2\\).",
        "workingOut": "\\(y = 3^{x-2} - 2\\)"
      },
      {
        "explanation": "Dilate vertically by \\(-3\\): multiply the function by \\(-3\\).",
        "workingOut": "\\(y = -3(3^{x-2} - 2) = -3 \\cdot 3^{x-2} + 6 = -3^{x-1} + 6\\)"
      }
    ]
  },
  {
    "id": "y11-5g-q8d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = \\frac{1}{x}\\) after shifting right 4 units, dilating by 3 vertically, then shifting up 2 units.",
    "a": "y = 3/(x-4)+2",
    "hint": "Replace \\(x\\) with \\(x - 4\\), multiply by 3, then add 2.",
    "t": "Combining transformations",
    "solutionSteps": [
      {
        "explanation": "Shift right 4: \\(y = \\frac{1}{x - 4}\\).",
        "workingOut": "\\(y = \\frac{1}{x - 4}\\)"
      },
      {
        "explanation": "Dilate vertically by 3: \\(y = \\frac{3}{x - 4}\\).",
        "workingOut": "\\(y = \\frac{3}{x - 4}\\)"
      },
      {
        "explanation": "Shift up 2: \\(y = \\frac{3}{x - 4} + 2\\).",
        "workingOut": "\\(y = \\frac{3}{x - 4} + 2\\)"
      }
    ]
  },
  {
    "id": "y11-5g-q9",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The parabola \\(y = (x - 2)^2\\) is shifted 4 units left and then reflected in the y-axis.",
    "hint": "Perform the operations one by one and check the final equation.",
    "t": "Combining transformations",
    "subQuestions": [
      {
        "id": "y11-5g-q9a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "a) Show that the new parabola has the same equation as the original.",
        "solutionSteps": [
          {
            "explanation": "Start with the equation: \\(y = (x - 2)^2\\). Shift 4 left: replace \\(x\\) with \\(x + 4\\) to get: \\(y = (x + 4 - 2)^2 = (x + 2)^2\\).",
            "workingOut": "\\(y = (x + 2)^2\\)"
          },
          {
            "explanation": "Next, reflect in the y-axis: replace \\(x\\) with \\(-x\\) to get: \\(y = (-x + 2)^2\\).",
            "workingOut": "\\(y = (2 - x)^2 = (x - 2)^2\\)"
          },
          {
            "explanation": "Since \\((x - 2)^2\\) matches the original equation, the new parabola is identical.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q9b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "b) Investigate why this has happened.",
        "solutionSteps": [
          {
            "explanation": "The original vertex is at \\((2, 0)\\). Shifting it 4 left moves the vertex to \\((-2, 0)\\). Reflecting it in the y-axis moves it back to \\((2, 0)\\). Since the shape (vertical stretch) is unchanged and the vertex is in the same position, the equation is identical.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y11-5g-q10",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).",
    "hint": "Analyze the shifts and dilations step-by-step.",
    "t": "Combining transformations",
    "subQuestions": [
      {
        "id": "y11-5g-q10a-i",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "a) i) Let \\(g(x) = f(x + 2)\\). Describe the transformation of \\(f(x)\\) to obtain \\(g(x)\\).",
        "solutionSteps": [
          {
            "explanation": "Replacing \\(x\\) with \\(x + 2\\) translates the graph of \\(f(x)\\) horizontally by 2 units to the left.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10a-ii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "ii) Let \\(h(x) = g(3x)\\). Describe the transformation of \\(g(x)\\) to obtain \\(h(x)\\).",
        "solutionSteps": [
          {
            "explanation": "Replacing \\(x\\) with \\(3x\\) dilates the graph of \\(g(x)\\) horizontally by a factor of \\(\\frac{1}{3}\\) towards the y-axis.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10a-iii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "iii) Hence describe \\(h(x)\\) as a transformation of \\(f(x)\\), and write \\(h(x)\\) in terms of \\(f\\).",
        "solutionSteps": [
          {
            "explanation": "We have \\(h(x) = g(3x) = f(3x + 2)\\). To obtain this from \\(f(x)\\), we translate the graph of \\(f(x)\\) left by 2 units, then dilate horizontally by a factor of \\(\\frac{1}{3}\\).",
            "workingOut": "\\(h(x) = f(3x + 2)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q10b-i",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "b) i) Let \\(p(x) = f(3x)\\). Describe the transformation of \\(f(x)\\) to obtain \\(p(x)\\).",
        "solutionSteps": [
          {
            "explanation": "Replacing \\(x\\) with \\(3x\\) is a horizontal dilation of \\(f(x)\\) by a factor of \\(\\frac{1}{3}\\) towards the y-axis.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10b-ii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "ii) Let \\(q(x) = p\\left(x + \\frac{2}{3}\\right)\\). Describe the transformation of \\(p(x)\\) to obtain \\(q(x)\\).",
        "solutionSteps": [
          {
            "explanation": "Replacing \\(x\\) with \\(x + \\frac{2}{3}\\) translates the graph of \\(p(x)\\) horizontally by \\(\\frac{2}{3}\\) units to the left.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10b-iii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "iii) Hence describe \\(q(x)\\) as a transformation of \\(f(x)\\), and write \\(q(x)\\) in terms of \\(f\\).",
        "solutionSteps": [
          {
            "explanation": "We have \\(q(x) = p\\left(x + \\frac{2}{3}\\right) = f\\left(3\\left(x + \\frac{2}{3}\\right)\\right) = f(3x + 2)\\). To obtain this from \\(f(x)\\), we dilate horizontally by a factor of \\(\\frac{1}{3}\\), then translate left by \\(\\frac{2}{3}\\) units.",
            "workingOut": "\\(q(x) = f(3x + 2)\\)"
          }
        ]
      },
      {
        "id": "y11-5g-q10c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "c) The functions \\(h(x)\\) and \\(q(x)\\) are identical. Explain why the horizontal shifts of \\(f\\) differ in parts a and b.",
        "solutionSteps": [
          {
            "explanation": "In part a, we shift first and then dilate. The dilation applies to everything, including the shift amount, compressing it from 2 to \\(\\frac{2}{3}\\). In part b, we dilate first, so to achieve the final shift of \\(\\frac{2}{3}\\) in the argument, we only need to shift the dilated graph by \\(\\frac{2}{3}\\) units directly.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10d",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "d) Describe \\(y = f(ax + b)\\) as transformations of \\(y = f(x)\\) in two different ways.",
        "solutionSteps": [
          {
            "explanation": "Method 1: Translate left by \\(b\\) units, then dilate horizontally by factor \\(\\frac{1}{a}\\).\nMethod 2: Dilate horizontally by factor \\(\\frac{1}{a}\\), then translate left by \\(\\frac{b}{a}\\) units.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y11-5g-q10e",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "e) Describe \\(y = a f(x) + b\\) as transformations of \\(y = f(x)\\) in two different ways.",
        "solutionSteps": [
          {
            "explanation": "Method 1: Dilate vertically by a factor of \\(a\\), then translate vertically by \\(b\\) units.\nMethod 2: Translate vertically by \\(\\frac{b}{a}\\) units, then dilate vertically by a factor of \\(a\\).",
            "workingOut": ""
          }
        ]
      }
    ]
  }
];
