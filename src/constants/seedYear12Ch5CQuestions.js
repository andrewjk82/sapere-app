export const Y12A_CH5C_QUESTIONS = [
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q1",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{2x-2} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Find the point first, then differentiate, then use point–gradient form for the tangent.",
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-5c-q1a",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the y-coordinate of the point \\(A\\) on the curve where \\(x=1\\).",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(e\\)",
          "\\(2\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Substitute \\(x=1\\) into \\(y=e^{2x-2}\\).",
        "solution": "At \\(x=1\\): \\(y=e^{2(1)-2}=e^{0}=1\\). So the y-coordinate is 1 (point \\(A(1,1)\\)).",
        "solutionSteps": [
          {
            "explanation": "The curve is given by \\(y=e^{2x-2}\\). To find the y-coordinate of point \\(A\\) where \\(x=1\\), substitute this value into the equation.",
            "workingOut": "\\(x=1\\)",
            "graphData": null
          },
          {
            "explanation": "Compute the exponent carefully: \\(2(1)-2=0\\). So \\(y=e^{0}\\).",
            "workingOut": "\\(y=e^{0}\\)",
            "graphData": null
          },
          {
            "explanation": "Recall that any non-zero number to the power 0 equals 1, so \\(e^{0}=1\\).",
            "workingOut": "\\(y=1\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the y-coordinate of \\(A\\) is 1, and the point is \\(A(1,1)\\).",
            "workingOut": "\\(A(1,1)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q1b",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the derivative of \\(y=e^{2x-2}\\), and the gradient of the tangent at \\(A\\) (where \\(x=1\\)).",
        "opts": [
          "\\(\\dfrac{dy}{dx}=2e^{2x-2},\\; m=2\\)",
          "\\(\\dfrac{dy}{dx}=e^{2x-2},\\; m=1\\)",
          "\\(\\dfrac{dy}{dx}=2e^{2x-2},\\; m=2e\\)",
          "\\(\\dfrac{dy}{dx}=2e^{2x},\\; m=2\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Chain rule: the exponent contributes a factor of 2. Then substitute \\(x=1\\).",
        "solution": "Chain rule: \\(\\dfrac{dy}{dx}=2e^{2x-2}\\). At \\(A\\) where \\(x=1\\): \\(m=2e^{0}=2\\).",
        "solutionSteps": [
          {
            "explanation": "We need \\(\\dfrac{dy}{dx}\\) for \\(y=e^{2x-2}\\). Use the chain rule: if \\(y=e^{u(x)}\\), then \\(y'=e^{u}u'\\).",
            "workingOut": "\\(y=e^{u},\\; u=2x-2\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate the exponent: \\(u'=\\dfrac{d}{dx}(2x-2)=2\\).",
            "workingOut": "\\(u'=2\\)",
            "graphData": null
          },
          {
            "explanation": "Apply the chain rule: \\(y'=e^{2x-2}\\cdot 2=2e^{2x-2}\\).",
            "workingOut": "\\(y'=2e^{2x-2}\\)",
            "graphData": null
          },
          {
            "explanation": "At point \\(A\\) where \\(x=1\\), the gradient is \\(m=2e^{2(1)-2}=2e^{0}=2\\cdot 1=2\\).",
            "workingOut": "\\(m=2\\)",
            "graphData": null
          },
          {
            "explanation": "So the derivative is \\(2e^{2x-2}\\) and the tangent at \\(A\\) has gradient 2.",
            "workingOut": "\\(\\dfrac{dy}{dx}=2e^{2x-2},\\; m_A=2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q1c",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the equation of the tangent at \\(A\\). Which statement is correct?",
        "opts": [
          "\\(y=2x-1\\), and it passes through \\((0,-1)\\)",
          "\\(y=2x+1\\), and it passes through \\((0,1)\\)",
          "\\(y=x-1\\), and it passes through \\((0,-1)\\)",
          "\\(y=2x-1\\), and it passes through \\((0,1)\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Point–gradient form with \\(A(1,1)\\) and gradient \\(m=2\\). Then check \\(x=0\\).",
        "solution": "Using point–gradient: \\(y-1=2(x-1)\\Rightarrow y=2x-1\\). When \\(x=0\\), \\(y=-1\\), so it passes through \\((0,-1)\\).",
        "solutionSteps": [
          {
            "explanation": "From parts (a) and (b) we know the point of contact is \\(A(1,1)\\) and the gradient is \\(m=2\\).",
            "workingOut": "\\(A(1,1),\\; m=2\\)",
            "graphData": null
          },
          {
            "explanation": "Use the point–gradient form of a straight line: \\(y-y_1=m(x-x_1)\\).",
            "workingOut": "\\(y-1=2(x-1)\\)",
            "graphData": null
          },
          {
            "explanation": "Expand the right-hand side: \\(y-1=2x-2\\).",
            "workingOut": "\\(y-1=2x-2\\)",
            "graphData": null
          },
          {
            "explanation": "Add 1 to both sides: \\(y=2x-1\\). This is the equation of the tangent at \\(A\\).",
            "workingOut": "\\(y=2x-1\\)",
            "graphData": null
          },
          {
            "explanation": "To check it passes through \\((0,-1)\\), substitute \\(x=0\\): \\(y=2(0)-1=-1\\). The point lies on the line.",
            "workingOut": "\\(x=0\\Rightarrow y=-1\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q2",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{3x-3} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Differentiate, then normal gradient is the negative reciprocal of the tangent gradient.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q2a",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Write down the coordinates of the point \\(R\\) on the curve where \\(x=1\\).",
        "opts": [
          "\\(R(1,0)\\)",
          "\\(R(1,1)\\)",
          "\\(R(1,e)\\)",
          "\\(R(0,1)\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Substitute \\(x=1\\) into \\(y=e^{3x-3}\\).",
        "solution": "At \\(x=1\\): \\(y=e^{3-3}=e^{0}=1\\). So \\(R(1,1)\\).",
        "solutionSteps": [
          {
            "explanation": "The curve is \\(y=e^{3x-3}\\). Point \\(R\\) is the point on the curve at \\(x=1\\).",
            "workingOut": "\\(x=1\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute: \\(y=e^{3(1)-3}=e^{0}=1\\).",
            "workingOut": "\\(y=1\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the coordinates are \\(R(1,1)\\).",
            "workingOut": "\\(R(1,1)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q2b",
        "difficulty": "easy",
        "type": "teacher_review",
        "question": "Find \\(\\dfrac{dy}{dx}\\) and hence show that the gradient of the tangent at \\(R\\) is 3.",
        "a": "\\(\\dfrac{dy}{dx}=3e^{3x-3}\\). At \\(R\\): \\(m=3\\).",
        "answer": "\\(\\dfrac{dy}{dx}=3e^{3x-3}\\). At \\(R\\): \\(m=3\\).",
        "hint": "Chain rule with exponent factor 3.",
        "solution": "Chain rule: \\(y'=3e^{3x-3}\\). At \\(x=1\\): \\(m=3e^{0}=3\\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\(y=e^{3x-3}\\) using the chain rule with \\(u=3x-3\\).",
            "workingOut": "\\(u=3x-3,\\; u'=3\\)",
            "graphData": null
          },
          {
            "explanation": "Then \\(\\dfrac{dy}{dx}=e^{u}u'=3e^{3x-3}\\).",
            "workingOut": "\\(y'=3e^{3x-3}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(R\\) where \\(x=1\\): \\(m_t=3e^{3(1)-3}=3e^{0}=3\\).",
            "workingOut": "\\(m_t=3\\)",
            "graphData": null
          },
          {
            "explanation": "Hence the gradient of the tangent at \\(R\\) is 3.",
            "workingOut": "\\(m_t=3\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q2c",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "What is the gradient of the normal at \\(R\\)?",
        "opts": [
          "\\(3\\)",
          "\\(-3\\)",
          "\\(-\\dfrac{1}{3}\\)",
          "\\(\\dfrac{1}{3}\\)"
        ],
        "a": 2,
        "answer": "2",
        "hint": "Normal gradient is the negative reciprocal of the tangent gradient.",
        "solution": "Tangent gradient is 3, so normal gradient is \\(-\\dfrac{1}{3}\\).",
        "solutionSteps": [
          {
            "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
            "workingOut": "\\(m_n=-\\dfrac{1}{m_t}\\)",
            "graphData": null
          },
          {
            "explanation": "Since \\(m_t=3\\), we have \\(m_n=-\\dfrac{1}{3}\\).",
            "workingOut": "\\(m_n=-\\dfrac{1}{3}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q2d",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Hence find the equation of the normal at \\(R\\) in general form.",
        "opts": [
          "\\(x+3y-4=0\\)",
          "\\(3x+y-4=0\\)",
          "\\(x-3y+2=0\\)",
          "\\(x+3y+4=0\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Use point–gradient with \\(R(1,1)\\) and \\(m=-\\dfrac{1}{3}\\), then clear denominators.",
        "solution": "\\(y-1=-\\dfrac{1}{3}(x-1)\\Rightarrow 3(y-1)=-(x-1)\\Rightarrow x+3y-4=0\\).",
        "solutionSteps": [
          {
            "explanation": "The normal passes through \\(R(1,1)\\) with gradient \\(m_n=-\\dfrac{1}{3}\\).",
            "workingOut": "\\(R(1,1),\\; m_n=-\\dfrac{1}{3}\\)",
            "graphData": null
          },
          {
            "explanation": "Point–gradient form: \\(y-1=-\\dfrac{1}{3}(x-1)\\).",
            "workingOut": "\\(y-1=-\\dfrac{1}{3}(x-1)\\)",
            "graphData": null
          },
          {
            "explanation": "Multiply through by 3: \\(3y-3=-(x-1)=-x+1\\).",
            "workingOut": "\\(3y-3=-x+1\\)",
            "graphData": null
          },
          {
            "explanation": "Rearrange all terms to one side: \\(x+3y-4=0\\).",
            "workingOut": "\\(x+3y-4=0\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q3",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Normal gradient is the negative reciprocal. Triangle area uses intercepts as base and height.",
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-5c-q3a",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the gradient of the tangent to \\(y=e^{-x}\\) at \\(P\\).",
        "opts": [
          "\\(1\\)",
          "\\(-1\\)",
          "\\(0\\)",
          "\\(e\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Differentiate and evaluate at \\(x=0\\).",
        "solution": "\\(y'=-e^{-x}\\). At \\(x=0\\): \\(m_t=-1\\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\(y=e^{-x}\\) using the chain rule. The exponent is \\(u=-x\\), so \\(u'=-1\\).",
            "workingOut": "\\(y'=-e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "At point \\(P(0,1)\\) we have \\(x=0\\), so the tangent gradient is \\(m_t=-e^{0}=-1\\).",
            "workingOut": "\\(m_t=-1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q3b",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Write down the gradient of the normal at this point.",
        "opts": [
          "\\(-1\\)",
          "\\(1\\)",
          "\\(0\\)",
          "\\(-e\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Negative reciprocal of the tangent gradient.",
        "solution": "\\(m_n=-1/(-1)=1\\).",
        "solutionSteps": [
          {
            "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
            "workingOut": "\\(m_n=-\\dfrac{1}{m_t}\\)",
            "graphData": null
          },
          {
            "explanation": "With \\(m_t=-1\\): \\(m_n=-\\dfrac{1}{-1}=1\\).",
            "workingOut": "\\(m_n=1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q3c",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Determine the equation of this normal.",
        "opts": [
          "\\(y=x+1\\)",
          "\\(y=-x+1\\)",
          "\\(y=x-1\\)",
          "\\(y=-x-1\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Point–gradient with \\(P(0,1)\\) and gradient 1.",
        "solution": "\\(y-1=1(x-0)\\Rightarrow y=x+1\\).",
        "solutionSteps": [
          {
            "explanation": "The normal passes through \\(P(0,1)\\) with gradient 1. Use point–gradient form.",
            "workingOut": "\\(y-1=1(x-0)\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(y=x+1\\).",
            "workingOut": "\\(y=x+1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q3d",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the x- and y-intercepts of the normal.",
        "opts": [
          "\\(x\\text{-int }=-1,\\; y\\text{-int }=1\\)",
          "\\(x\\text{-int }=1,\\; y\\text{-int }=-1\\)",
          "\\(x\\text{-int }=0,\\; y\\text{-int }=1\\)",
          "\\(x\\text{-int }=-1,\\; y\\text{-int }=-1\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Set \\(y=0\\) and \\(x=0\\) in \\(y=x+1\\).",
        "solution": "y-int: \\(x=0\\Rightarrow y=1\\). x-int: \\(y=0\\Rightarrow x=-1\\).",
        "solutionSteps": [
          {
            "explanation": "Y-intercept: set \\(x=0\\) in \\(y=x+1\\) to get \\(y=1\\). So the y-intercept is 1.",
            "workingOut": "\\(y\\text{-int}=1\\)",
            "graphData": null
          },
          {
            "explanation": "X-intercept: set \\(y=0\\): \\(0=x+1\\Rightarrow x=-1\\). So the x-intercept is \\(-1\\).",
            "workingOut": "\\(x\\text{-int}=-1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q3e",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the area of the triangle whose vertices lie at the intercepts and the origin.",
        "opts": [
          "\\(1\\)",
          "\\(\\dfrac{1}{2}\\)",
          "\\(2\\)",
          "\\(\\dfrac{1}{4}\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Right triangle with base 1 and height 1.",
        "solution": "Vertices \\((0,0)\\), \\((-1,0)\\), \\((0,1)\\). Area \\(=\\dfrac{1}{2}\\times 1\\times 1=\\dfrac{1}{2}\\).",
        "solutionSteps": [
          {
            "explanation": "The triangle has vertices at the origin \\((0,0)\\), the x-intercept \\((-1,0)\\), and the y-intercept \\((0,1)\\).",
            "workingOut": "\\((0,0),\\,(-1,0),\\,(0,1)\\)",
            "graphData": null
          },
          {
            "explanation": "This is a right-angled triangle with base 1 (along the x-axis) and height 1 (along the y-axis).",
            "workingOut": "\\(base=1,\\; height=1\\)",
            "graphData": null
          },
          {
            "explanation": "Area \\(=\\dfrac{1}{2}\\times\\text{base}\\times\\text{height}=\\dfrac{1}{2}\\times 1\\times 1=\\dfrac{1}{2}\\).",
            "workingOut": "\\(\\text{Area}=\\dfrac{1}{2}\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q4",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Find each tangent, its x-intercept, then classify triangle BFG.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q4a",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the gradient of the tangent to \\(y=2e^{x}\\) at \\(B\\).",
        "opts": [
          "\\(1\\)",
          "\\(2\\)",
          "\\(e\\)",
          "\\(0\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Differentiate and evaluate at \\(x=0\\).",
        "solution": "\\(y'=2e^{x}\\). At \\(x=0\\): \\(m=2\\).",
        "solutionSteps": [
          {
            "explanation": "For \\(y=2e^{x}\\), differentiate: \\(y'=2e^{x}\\).",
            "workingOut": "\\(y'=2e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(B\\) where \\(x=0\\): \\(m_1=2e^{0}=2\\).",
            "workingOut": "\\(m_1=2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q4b",
        "difficulty": "easy",
        "type": "teacher_review",
        "question": "Find the equation of this tangent, showing it meets the x-axis at \\(F(-1,0)\\).",
        "a": "\\(y=2x+2\\). When \\(y=0\\): \\(x=-1\\). So \\(F(-1,0)\\).",
        "answer": "\\(y=2x+2\\). When \\(y=0\\): \\(x=-1\\). So \\(F(-1,0)\\).",
        "hint": "Point–gradient with \\(B(0,2)\\) and \\(m=2\\).",
        "solution": "\\(y-2=2x\\Rightarrow y=2x+2\\). Set \\(y=0\\): \\(x=-1\\).",
        "solutionSteps": [
          {
            "explanation": "Point \\(B(0,2)\\) with gradient 2. Point–gradient form: \\(y-2=2(x-0)\\).",
            "workingOut": "\\(y-2=2x\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(y=2x+2\\).",
            "workingOut": "\\(y=2x+2\\)",
            "graphData": null
          },
          {
            "explanation": "X-intercept: set \\(y=0\\). Then \\(2x+2=0\\Rightarrow x=-1\\).",
            "workingOut": "\\(x=-1\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the tangent meets the x-axis at \\(F(-1,0)\\).",
            "workingOut": "\\(F(-1,0)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q4c",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the gradient of the tangent to \\(y=2e^{-x}\\) at \\(B\\).",
        "opts": [
          "\\(2\\)",
          "\\(-2\\)",
          "\\(-1\\)",
          "\\(1\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Differentiate \\(2e^{-x}\\) and evaluate at \\(x=0\\).",
        "solution": "\\(y'=-2e^{-x}\\). At \\(x=0\\): \\(m=-2\\).",
        "solutionSteps": [
          {
            "explanation": "For \\(y=2e^{-x}\\), chain rule gives \\(y'=2e^{-x}\\cdot(-1)=-2e^{-x}\\).",
            "workingOut": "\\(y'=-2e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(m_2=-2e^{0}=-2\\).",
            "workingOut": "\\(m_2=-2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q4d",
        "difficulty": "easy",
        "type": "teacher_review",
        "question": "Find the equation of this tangent, showing it meets the x-axis at \\(G(1,0)\\).",
        "a": "\\(y=-2x+2\\). When \\(y=0\\): \\(x=1\\). So \\(G(1,0)\\).",
        "answer": "\\(y=-2x+2\\). When \\(y=0\\): \\(x=1\\). So \\(G(1,0)\\).",
        "hint": "Point–gradient with \\(B(0,2)\\) and \\(m=-2\\).",
        "solution": "\\(y-2=-2x\\Rightarrow y=-2x+2\\). Set \\(y=0\\): \\(x=1\\).",
        "solutionSteps": [
          {
            "explanation": "Point \\(B(0,2)\\) with gradient \\(-2\\): \\(y-2=-2(x-0)\\).",
            "workingOut": "\\(y-2=-2x\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(y=-2x+2\\).",
            "workingOut": "\\(y=-2x+2\\)",
            "graphData": null
          },
          {
            "explanation": "X-intercept: \\(0=-2x+2\\Rightarrow x=1\\).",
            "workingOut": "\\(x=1\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the tangent meets the x-axis at \\(G(1,0)\\).",
            "workingOut": "\\(G(1,0)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q4e",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "What sort of triangle is \\(\\triangle BFG\\), and what is its area?",
        "opts": [
          "\\(\\text{Equilateral, area }=2\\)",
          "\\(\\text{Isosceles, area }=2\\)",
          "\\(\\text{Right-angled, area }=1\\)",
          "\\(\\text{Isosceles, area }=4\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Compare BF and BG; base FG = 2, height = 2.",
        "solution": "\\(BF=BG=\\sqrt{5}\\) (isosceles). Area \\(=\\dfrac{1}{2}\\times 2\\times 2=2\\).",
        "solutionSteps": [
          {
            "explanation": "Vertices: \\(B(0,2)\\), \\(F(-1,0)\\), \\(G(1,0)\\).",
            "workingOut": "\\(B,F,G\\)",
            "graphData": null
          },
          {
            "explanation": "Distance \\(BF=\\sqrt{(0-(-1))^{2}+(2-0)^{2}}=\\sqrt{5}\\) and similarly \\(BG=\\sqrt{5}\\). Equal sides ⇒ isosceles.",
            "workingOut": "\\(BF=BG=\\sqrt{5}\\)",
            "graphData": null
          },
          {
            "explanation": "Base \\(FG\\) has length \\(1-(-1)=2\\); height is the y-coordinate of \\(B\\), which is 2.",
            "workingOut": "\\(base=2,\\; height=2\\)",
            "graphData": null
          },
          {
            "explanation": "Area \\(=\\dfrac{1}{2}\\times 2\\times 2=2\\). So \\(\\triangle BFG\\) is isosceles with area 2.",
            "workingOut": "\\(\\text{Isosceles, area }=2\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q5",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 150,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Differentiate, find the point at \\(x=0\\), then use point–gradient form.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q5a",
        "difficulty": "easy",
        "type": "multiple_choice",
        "question": "Find the gradient of the tangent to the curve at \\(x=0\\).",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(-1\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Find \\(y'\\) and evaluate at \\(x=0\\).",
        "solution": "\\(y'=2-e^{x}\\). At \\(x=0\\): \\(m=2-1=1\\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\(y=2x-e^{x}\\) term by term: \\(\\dfrac{d}{dx}(2x)=2\\) and \\(\\dfrac{d}{dx}e^{x}=e^{x}\\).",
            "workingOut": "\\(y'=2-e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(m=2-e^{0}=2-1=1\\).",
            "workingOut": "\\(m=1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q5b",
        "difficulty": "easy",
        "type": "teacher_review",
        "question": "Write down the equation of the tangent, and show that it passes through \\((1,0)\\).",
        "a": "\\(y=x-1\\). At \\(x=1\\): \\(y=0\\).",
        "answer": "\\(y=x-1\\). At \\(x=1\\): \\(y=0\\).",
        "hint": "Point is \\((0,-1)\\) with gradient 1.",
        "solution": "At \\(x=0\\): \\(y=-1\\). Tangent: \\(y+1=x\\Rightarrow y=x-1\\). When \\(x=1\\), \\(y=0\\).",
        "solutionSteps": [
          {
            "explanation": "First find the point of contact at \\(x=0\\): \\(y=2(0)-e^{0}=-1\\). So the point is \\((0,-1)\\).",
            "workingOut": "\\((0,-1)\\)",
            "graphData": null
          },
          {
            "explanation": "With gradient \\(m=1\\) from part (a), point–gradient form gives \\(y-(-1)=1(x-0)\\).",
            "workingOut": "\\(y+1=x\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(y=x-1\\).",
            "workingOut": "\\(y=x-1\\)",
            "graphData": null
          },
          {
            "explanation": "Check \\((1,0)\\): when \\(x=1\\), \\(y=1-1=0\\). The tangent does pass through \\((1,0)\\).",
            "workingOut": "\\(x=1\\Rightarrow y=0\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q6",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Stationary points when \\(y'=0\\). Nature from sign of \\(y''\\).",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q6a",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the first and second derivatives of the curve.",
        "opts": [
          "\\(y'=2-e^{x},\\; y''=-e^{x}\\)",
          "\\(y'=2+e^{x},\\; y''=e^{x}\\)",
          "\\(y'=2-e^{x},\\; y''=e^{x}\\)",
          "\\(y'=-e^{x},\\; y''=-e^{x}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Differentiate term by term twice.",
        "solution": "\\(y'=2-e^{x}\\), \\(y''=-e^{x}\\).",
        "solutionSteps": [
          {
            "explanation": "Starting from \\(y=2x-e^{x}\\), differentiate once: \\(y'=2-e^{x}\\).",
            "workingOut": "\\(y'=2-e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again: the derivative of 2 is 0 and the derivative of \\(-e^{x}\\) is \\(-e^{x}\\).",
            "workingOut": "\\(y''=-e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "So the first derivative is \\(2-e^{x}\\) and the second is \\(-e^{x}\\).",
            "workingOut": "\\(y'=2-e^{x},\\; y''=-e^{x}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q6b",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Deduce that the curve is concave down for all values of \\(x\\).",
        "a": "\\(y''=-e^{x}<0\\) for all real \\(x\\), since \\(e^{x}>0\\).",
        "answer": "\\(y''=-e^{x}<0\\) for all real \\(x\\), since \\(e^{x}>0\\).",
        "hint": "Sign of \\(y''\\) determines concavity.",
        "solution": "Since \\(e^{x}>0\\) always, \\(y''=-e^{x}<0\\) always, so always concave down.",
        "solutionSteps": [
          {
            "explanation": "From part (a), \\(y''=-e^{x}\\).",
            "workingOut": "\\(y''=-e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "For every real number \\(x\\), the exponential \\(e^{x}\\) is strictly positive. Therefore \\(-e^{x}\\) is strictly negative.",
            "workingOut": "\\(e^{x}>0\\Rightarrow -e^{x}<0\\)",
            "graphData": null
          },
          {
            "explanation": "Since \\(y''<0\\) for all \\(x\\), the curve is concave down everywhere.",
            "workingOut": "\\(\\text{always concave down}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q6c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find any stationary points, and determine their nature.",
        "opts": [
          "\\((\\ln 2,\\; 2\\ln 2-2)\\), local maximum",
          "\\((\\ln 2,\\; 2\\ln 2-2)\\), local minimum",
          "\\((0,-1)\\), local maximum",
          "\\((\\ln 2,\\; 0)\\), point of inflection"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Solve \\(y'=0\\), then check \\(y''\\).",
        "solution": "\\(2-e^{x}=0\\Rightarrow x=\\ln 2\\), \\(y=2\\ln 2-2\\). \\(y''=-2<0\\): local max.",
        "solutionSteps": [
          {
            "explanation": "Stationary points occur where \\(y'=0\\): \\(2-e^{x}=0\\Rightarrow e^{x}=2\\Rightarrow x=\\ln 2\\).",
            "workingOut": "\\(x=\\ln 2\\)",
            "graphData": null
          },
          {
            "explanation": "The corresponding y-value is \\(y=2\\ln 2-e^{\\ln 2}=2\\ln 2-2\\).",
            "workingOut": "\\(y=2\\ln 2-2\\)",
            "graphData": null
          },
          {
            "explanation": "Second derivative test: \\(y''(\\ln 2)=-e^{\\ln 2}=-2<0\\), so the stationary point is a local maximum.",
            "workingOut": "\\(\\text{local maximum}\\)",
            "graphData": null
          },
          {
            "explanation": "Hence there is a local maximum at \\((\\ln 2,\\, 2\\ln 2-2)\\).",
            "workingOut": "\\((\\ln 2,\\, 2\\ln 2-2)\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q7",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (2-x)e^{x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Use the product rule for the derivative.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q7a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Differentiate \\(y=(2-x)e^{x}\\) using the product rule.",
        "a": "\\(y'=(1-x)e^{x}\\)",
        "answer": "\\(y'=(1-x)e^{x}\\)",
        "hint": "Set \\(u=2-x\\), \\(v=e^{x}\\).",
        "solution": "\\(u'=-1\\), \\(v'=e^{x}\\). \\(y'=-e^{x}+(2-x)e^{x}=(1-x)e^{x}\\).",
        "solutionSteps": [
          {
            "explanation": "Write \\(y=(2-x)e^{x}\\) as a product \\(uv\\) with \\(u=2-x\\) and \\(v=e^{x}\\).",
            "workingOut": "\\(u=2-x,\\; v=e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "Then \\(u'=-1\\) and \\(v'=e^{x}\\). The product rule says \\(y'=u'v+uv'\\).",
            "workingOut": "\\(u'=-1,\\; v'=e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "Substitute: \\(y'=(-1)e^{x}+(2-x)e^{x}=e^{x}(-1+2-x)=(1-x)e^{x}\\).",
            "workingOut": "\\(y'=(1-x)e^{x}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q7b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the equation of the tangent at \\(x=0\\).",
        "opts": [
          "\\(y=x+2\\)",
          "\\(y=2x+2\\)",
          "\\(y=x-2\\)",
          "\\(y=-x+2\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Find the point and gradient at \\(x=0\\).",
        "solution": "At \\(x=0\\): \\(y=2\\), \\(y'=1\\). Tangent: \\(y=x+2\\).",
        "solutionSteps": [
          {
            "explanation": "At \\(x=0\\): \\(y=(2-0)e^{0}=2\\) and \\(y'=(1-0)e^{0}=1\\). Point \\((0,2)\\), gradient 1.",
            "workingOut": "\\((0,2),\\; m=1\\)",
            "graphData": null
          },
          {
            "explanation": "Point–gradient form: \\(y-2=1(x-0)\\Rightarrow y=x+2\\).",
            "workingOut": "\\(y=x+2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q7c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Hence find the x-intercept of this tangent.",
        "opts": [
          "\\(-2\\)",
          "\\(2\\)",
          "\\(0\\)",
          "\\(-1\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Set \\(y=0\\) in the tangent equation.",
        "solution": "\\(0=x+2\\Rightarrow x=-2\\).",
        "solutionSteps": [
          {
            "explanation": "Set \\(y=0\\) in the tangent equation \\(y=x+2\\).",
            "workingOut": "\\(0=x+2\\)",
            "graphData": null
          },
          {
            "explanation": "Solve: \\(x=-2\\). The x-intercept is \\(-2\\).",
            "workingOut": "\\(x=-2\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q8",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (x+2)e^{-x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Product rule, then intercepts for triangle area.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q8a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that the equation of the tangent at \\(x=0\\) is \\(y=-x+2\\).",
        "a": "\\(y'=-(x+1)e^{-x}\\). At \\(x=0\\): \\(y=2\\), \\(m=-1\\). Tangent: \\(y=-x+2\\).",
        "answer": "\\(y'=-(x+1)e^{-x}\\). At \\(x=0\\): \\(y=2\\), \\(m=-1\\). Tangent: \\(y=-x+2\\).",
        "hint": "Product rule with \\(u=x+2\\), \\(v=e^{-x}\\).",
        "solution": "\\(y'=e^{-x}-(x+2)e^{-x}=-(x+1)e^{-x}\\). At 0: point (0,2), m=-1. So y=-x+2.",
        "solutionSteps": [
          {
            "explanation": "Let \\(u=x+2\\) and \\(v=e^{-x}\\). Then \\(u'=1\\) and \\(v'=-e^{-x}\\).",
            "workingOut": "\\(u'=1,\\; v'=-e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Product rule: \\(y'=e^{-x}+(x+2)(-e^{-x})=e^{-x}(1-x-2)=-(x+1)e^{-x}\\).",
            "workingOut": "\\(y'=-(x+1)e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(y=(0+2)e^{0}=2\\) and \\(y'=-(0+1)e^{0}=-1\\).",
            "workingOut": "\\((0,2),\\; m=-1\\)",
            "graphData": null
          },
          {
            "explanation": "Point–gradient: \\(y-2=-1(x-0)\\Rightarrow y=-x+2\\), as required.",
            "workingOut": "\\(y=-x+2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q8b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the x-intercept and y-intercept of this tangent.",
        "opts": [
          "\\(x\\text{-int }=2,\\; y\\text{-int }=2\\)",
          "\\(x\\text{-int }=-2,\\; y\\text{-int }=2\\)",
          "\\(x\\text{-int }=2,\\; y\\text{-int }=-2\\)",
          "\\(x\\text{-int }=1,\\; y\\text{-int }=2\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Set \\(y=0\\) and \\(x=0\\) in \\(y=-x+2\\).",
        "solution": "y-int 2; x-int: \\(0=-x+2\\Rightarrow x=2\\).",
        "solutionSteps": [
          {
            "explanation": "Y-intercept of \\(y=-x+2\\): set \\(x=0\\) to get \\(y=2\\).",
            "workingOut": "\\(y\\text{-int}=2\\)",
            "graphData": null
          },
          {
            "explanation": "X-intercept: set \\(y=0\\): \\(0=-x+2\\Rightarrow x=2\\).",
            "workingOut": "\\(x\\text{-int}=2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q8c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the area of the triangle formed by these intercepts and the origin.",
        "opts": [
          "\\(1\\)",
          "\\(2\\)",
          "\\(4\\)",
          "\\(\\dfrac{1}{2}\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Right triangle with base 2 and height 2.",
        "solution": "Area \\(=\\dfrac{1}{2}\\times 2\\times 2=2\\).",
        "solutionSteps": [
          {
            "explanation": "The intercepts with the axes give a right triangle with vertices \\((0,0)\\), \\((2,0)\\) and \\((0,2)\\).",
            "workingOut": "\\(vertices\\)",
            "graphData": null
          },
          {
            "explanation": "Base = 2 and height = 2, so area \\(=\\dfrac{1}{2}\\times 2\\times 2=2\\).",
            "workingOut": "\\(\\text{Area}=2\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q9",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{2x-4} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Chain rule for derivatives; normal gradient is negative reciprocal.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q9a",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the first and second derivatives of the function.",
        "opts": [
          "\\(y'=2e^{2x-4},\\; y''=4e^{2x-4}\\)",
          "\\(y'=e^{2x-4},\\; y''=2e^{2x-4}\\)",
          "\\(y'=2e^{2x-4},\\; y''=2e^{2x-4}\\)",
          "\\(y'=-2e^{2x-4},\\; y''=4e^{2x-4}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Chain rule twice; each time multiply by 2.",
        "solution": "\\(y'=2e^{2x-4}\\), \\(y''=4e^{2x-4}\\).",
        "solutionSteps": [
          {
            "explanation": "For \\(y=e^{2x-4}\\), chain rule with factor 2 from the exponent: \\(y'=2e^{2x-4}\\).",
            "workingOut": "\\(y'=2e^{2x-4}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again (another factor of 2): \\(y''=4e^{2x-4}\\).",
            "workingOut": "\\(y''=4e^{2x-4}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q9b",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Explain why every tangent to the curve has a positive gradient, and why the curve is concave up at every point.",
        "a": "Since \\(e^{2x-4}>0\\) always: \\(y'=2e^{2x-4}>0\\) and \\(y''=4e^{2x-4}>0\\).",
        "answer": "Since \\(e^{2x-4}>0\\) always: \\(y'=2e^{2x-4}>0\\) and \\(y''=4e^{2x-4}>0\\).",
        "hint": "Use the signs of \\(y'\\) and \\(y''\\).",
        "solution": "Exponential always positive ⇒ y' always positive (tangents slope up) and y'' always positive (concave up).",
        "solutionSteps": [
          {
            "explanation": "The natural exponential is always positive, so \\(e^{2x-4}>0\\) for every real \\(x\\).",
            "workingOut": "\\(e^{2x-4}>0\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'=2e^{2x-4}>0\\) always: every tangent has a positive gradient (the curve is always increasing).",
            "workingOut": "\\(y'>0\\)",
            "graphData": null
          },
          {
            "explanation": "Likewise \\(y''=4e^{2x-4}>0\\) always: the curve is concave up at every point.",
            "workingOut": "\\(y''>0\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q9c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point on the curve where the gradient is 2.",
        "opts": [
          "\\((1,e^{-2})\\)",
          "\\((2,1)\\)",
          "\\((0,e^{-4})\\)",
          "\\((2,e)\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Solve \\(2e^{2x-4}=2\\).",
        "solution": "\\(e^{2x-4}=1\\Rightarrow 2x-4=0\\Rightarrow x=2\\), \\(y=1\\). Point \\((2,1)\\).",
        "solutionSteps": [
          {
            "explanation": "Set the gradient equal to 2: \\(2e^{2x-4}=2\\Rightarrow e^{2x-4}=1\\).",
            "workingOut": "\\(e^{2x-4}=1\\)",
            "graphData": null
          },
          {
            "explanation": "Taking natural log: \\(2x-4=0\\Rightarrow x=2\\).",
            "workingOut": "\\(x=2\\)",
            "graphData": null
          },
          {
            "explanation": "Then \\(y=e^{2(2)-4}=e^{0}=1\\). The point is \\((2,1)\\).",
            "workingOut": "\\((2,1)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q9d",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the gradients of the tangent and normal at the y-intercept.",
        "opts": [
          "\\(m_t=2e^{-4},\\; m_n=-\\dfrac{e^{4}}{2}\\)",
          "\\(m_t=2,\\; m_n=-\\dfrac{1}{2}\\)",
          "\\(m_t=e^{-4},\\; m_n=-e^{4}\\)",
          "\\(m_t=2e^{-4},\\; m_n=\\dfrac{e^{4}}{2}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Y-intercept is at \\(x=0\\). Normal is negative reciprocal.",
        "solution": "\\(m_t=2e^{-4}\\), \\(m_n=-\\dfrac{1}{2e^{-4}}=-\\dfrac{e^{4}}{2}\\).",
        "solutionSteps": [
          {
            "explanation": "The y-intercept is at \\(x=0\\). Tangent gradient: \\(m_t=y'(0)=2e^{-4}\\).",
            "workingOut": "\\(m_t=2e^{-4}\\)",
            "graphData": null
          },
          {
            "explanation": "Normal gradient is the negative reciprocal: \\(m_n=-\\dfrac{1}{2e^{-4}}=-\\dfrac{e^{4}}{2}\\).",
            "workingOut": "\\(m_n=-\\dfrac{e^{4}}{2}\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q10",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{-x^{2}} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Chain rule for the derivative; normal gradient is the negative reciprocal of the tangent gradient.",
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-5c-q10a",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the derivative \\(\\dfrac{dy}{dx}\\).",
        "opts": [
          "\\(-2x e^{-x^{2}}\\)",
          "\\(2x e^{-x^{2}}\\)",
          "\\(-e^{-x^{2}}\\)",
          "\\(-2e^{-x^{2}}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Chain rule with inner function \\(u=-x^{2}\\).",
        "solution": "Let \\(u=-x^{2}\\). Then \\(u'=-2x\\) and \\(y'=e^{u}u'=-2x e^{-x^{2}}\\).",
        "solutionSteps": [
          {
            "explanation": "The function is \\(y=e^{-x^{2}}\\), a composite: outer exponential, inner \\(u=-x^{2}\\). Use the chain rule \\(y'=e^{u}u'\\).",
            "workingOut": "\\(u=-x^{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate the inner function with the power rule: \\(u'=-2x\\).",
            "workingOut": "\\(u'=-2x\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore \\(y'=e^{-x^{2}}\\cdot(-2x)=-2x e^{-x^{2}}\\).",
            "workingOut": "\\(y'=-2x e^{-x^{2}}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q10b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the equation of the normal to the curve at the point where \\(x=1\\).",
        "opts": [
          "\\(ex - 2y - e + 2e^{-1} = 0\\)",
          "\\(ex + 2y - e + 2e^{-1} = 0\\)",
          "\\(y - e^{-1} = -2e^{-1}(x - 1)\\)",
          "\\(2ex - y - 2e + e^{-1} = 0\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "At \\(x=1\\): point \\((1,e^{-1})\\), tangent slope \\(-2e^{-1}\\), so normal slope is \\(\\dfrac{e}{2}\\).",
        "solution": "Point \\((1,e^{-1})\\), \\(m_t=-2e^{-1}\\), \\(m_n=\\dfrac{e}{2}\\). Normal: \\(y-e^{-1}=\\dfrac{e}{2}(x-1)\\Rightarrow ex-2y-e+2e^{-1}=0\\).",
        "solutionSteps": [
          {
            "explanation": "At \\(x=1\\), the y-coordinate on the curve is \\(y=e^{-1^{2}}=e^{-1}\\). The point of contact is \\((1,e^{-1})\\).",
            "workingOut": "\\((1,e^{-1})\\)",
            "graphData": null
          },
          {
            "explanation": "The tangent gradient is \\(m_t=y'(1)=-2(1)e^{-1}=-2e^{-1}\\).",
            "workingOut": "\\(m_t=-2e^{-1}\\)",
            "graphData": null
          },
          {
            "explanation": "The normal gradient is the negative reciprocal: \\(m_n=-\\dfrac{1}{-2e^{-1}}=\\dfrac{e}{2}\\).",
            "workingOut": "\\(m_n=\\dfrac{e}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Point–gradient form of the normal line:",
            "workingOut": "\\(y-e^{-1}=\\dfrac{e}{2}(x-1)\\)",
            "graphData": null
          },
          {
            "explanation": "Multiply through by 2: \\(2y-2e^{-1}=ex-e\\). Rearrange to general form: \\(ex-2y-e+2e^{-1}=0\\).",
            "workingOut": "\\(ex-2y-e+2e^{-1}=0\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q10c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Determine the x-intercept of this normal.",
        "opts": [
          "\\(1-2e^{-2}\\)",
          "\\(1+2e^{-2}\\)",
          "\\(e-2e^{-1}\\)",
          "\\(1-2e^{-1}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Set \\(y=0\\) in \\(ex-2y-e+2e^{-1}=0\\).",
        "solution": "Set \\(y=0\\): \\(ex-e+2e^{-1}=0\\Rightarrow ex=e-2e^{-1}\\Rightarrow x=1-2e^{-2}\\).",
        "solutionSteps": [
          {
            "explanation": "Start from the normal equation \\(ex-2y-e+2e^{-1}=0\\). For the x-intercept, set \\(y=0\\).",
            "workingOut": "\\(ex-e+2e^{-1}=0\\)",
            "graphData": null
          },
          {
            "explanation": "Solve for \\(x\\): \\(ex=e-2e^{-1}\\).",
            "workingOut": "\\(ex=e-2e^{-1}\\)",
            "graphData": null
          },
          {
            "explanation": "Divide by \\(e\\): \\(x=1-2e^{-1}\\cdot e^{-1}=1-2e^{-2}\\).",
            "workingOut": "\\(x=1-2e^{-2}\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = 2-2e^{-x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Differentiate for the tangent; normal is perpendicular; asymptote as \\(x\\to\\infty\\).",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q11a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that the equation of the tangent to the curve at the origin is \\(y=2x\\).",
        "a": "\\(y'=2e^{-x}\\). At origin: \\(m=2\\). Tangent: \\(y=2x\\).",
        "answer": "\\(y'=2e^{-x}\\). At origin: \\(m=2\\). Tangent: \\(y=2x\\).",
        "hint": "Origin is (0,0). Find y'(0).",
        "solution": "y'=2e^{-x}. At x=0, m=2. Point (0,0): y=2x.",
        "solutionSteps": [
          {
            "explanation": "The origin is the point \\((0,0)\\). Differentiate \\(y=2-2e^{-x}\\): \\(y'=2e^{-x}\\) (chain rule on the second term).",
            "workingOut": "\\(y'=2e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\), the tangent gradient is \\(m_t=2e^{0}=2\\).",
            "workingOut": "\\(m_t=2\\)",
            "graphData": null
          },
          {
            "explanation": "Point–gradient form through the origin with gradient 2: \\(y-0=2(x-0)\\Rightarrow y=2x\\).",
            "workingOut": "\\(y=2x\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q11b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Deduce the equation of the normal at the origin without further use of calculus.",
        "opts": [
          "\\(y=-2x\\)",
          "\\(y=-\\dfrac{1}{2}x\\)",
          "\\(y=\\dfrac{1}{2}x\\)",
          "\\(y=-x\\)"
        ],
        "a": 1,
        "answer": "1",
        "hint": "Negative reciprocal of tangent gradient 2.",
        "solution": "\\(m_n=-\\dfrac{1}{2}\\), so \\(y=-\\dfrac{1}{2}x\\).",
        "solutionSteps": [
          {
            "explanation": "The normal is perpendicular to the tangent. With tangent gradient 2, the normal gradient is \\(-\\dfrac{1}{2}\\).",
            "workingOut": "\\(m_n=-\\dfrac{1}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Through the origin: \\(y=-\\dfrac{1}{2}x\\).",
            "workingOut": "\\(y=-\\dfrac{1}{2}x\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q11c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "What is the equation of the horizontal asymptote of this curve?",
        "opts": [
          "\\(y=0\\)",
          "\\(y=1\\)",
          "\\(y=2\\)",
          "\\(x=2\\)"
        ],
        "a": 2,
        "answer": "2",
        "hint": "Let \\(x\\to\\infty\\).",
        "solution": "As \\(x\\to\\infty\\), \\(e^{-x}\\to 0\\), so \\(y\\to 2\\). Asymptote \\(y=2\\).",
        "solutionSteps": [
          {
            "explanation": "As \\(x\\to\\infty\\), the term \\(e^{-x}\\to 0\\), so \\(y=2-2e^{-x}\\to 2\\).",
            "workingOut": "\\(y\\to 2\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the horizontal asymptote is the line \\(y=2\\).",
            "workingOut": "\\(y=2\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q11d",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Sketch the curve, showing the points \\(T\\) and \\(N\\) where the tangent and normal respectively cut the horizontal asymptote.",
        "a": "Asymptote y=2. Tangent meets it at T(1,2). Normal meets it at N(-4,2).",
        "answer": "Asymptote y=2. Tangent meets it at T(1,2). Normal meets it at N(-4,2).",
        "hint": "Solve y=2x and y=-x/2 with y=2.",
        "solution": "2=2x ⇒ T(1,2). 2=-x/2 ⇒ N(-4,2). Curve rises from (0,0) toward y=2.",
        "solutionSteps": [
          {
            "explanation": "The curve starts at the origin (when \\(x=0\\), \\(y=0\\)), increases, and approaches the asymptote \\(y=2\\) from below.",
            "workingOut": "\\(y=2-2e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "The tangent \\(y=2x\\) meets the asymptote where \\(2=2x\\Rightarrow x=1\\). Mark \\(T(1,2)\\).",
            "workingOut": "\\(T(1,2)\\)",
            "graphData": null
          },
          {
            "explanation": "The normal \\(y=-\\dfrac{1}{2}x\\) meets the asymptote where \\(2=-\\dfrac{1}{2}x\\Rightarrow x=-4\\). Mark \\(N(-4,2)\\).",
            "workingOut": "\\(N(-4,2)\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch the curve with the asymptote, the tangent, the normal, and the points \\(T\\) and \\(N\\) labelled.",
            "workingOut": "\\(T(1,2),\\; N(-4,2)\\)",
            "graphData": {
              "jsxGraph": {
                "boundingbox": [
                  -5,
                  2.6,
                  2.8,
                  -0.6
                ],
                "width": 380,
                "height": 170,
                "axis": false,
                "showCopyright": false,
                "showNavigation": false,
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.8,0],[2.6,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-0.5],[0,2.5]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [2.45,-0.22], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.28,2.35], 'y', {fontSize:12, color:'#64748b'});\nboard.create('line', [[-4.8,2],[2.6,2]], {strokeColor:'#94a3b8', strokeWidth:1.3, dash:2, straightFirst:false, straightLast:false});\nboard.create('text', [2.0,2.18], 'y=2', {fontSize:10, color:'#64748b'});\nboard.create('functiongraph', [function(x){return 2-2*Math.exp(-x);}, -4.8, 2.5], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('line', [[0,0],[1.15,2.3]], {strokeColor:'#10b981', strokeWidth:1.8, straightFirst:false, straightLast:false});\nboard.create('line', [[0,0],[-4.3,2.15]], {strokeColor:'#f59e0b', strokeWidth:1.8, straightFirst:false, straightLast:false});\nboard.create('point', [0,0], {name:'O', size:2.5, fillColor:'#64748b', strokeColor:'#64748b', label:{offset:[6,-12]}});\nboard.create('point', [1,2], {name:'T', size:3.5, fillColor:'#10b981', strokeColor:'#10b981', label:{offset:[6,8]}});\nboard.create('point', [-4,2], {name:'N', size:3.5, fillColor:'#f59e0b', strokeColor:'#f59e0b', label:{offset:[-16,8]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q12",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "General tangent properties of \\( y = e^{x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Work with general point \\(T(t,e^{t})\\).",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q12a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that the tangent to \\(y=e^{x}\\) at \\(T(t,e^{t})\\) has gradient \\(e^{t}\\).",
        "a": "\\(\\dfrac{dy}{dx}=e^{x}\\). At \\(x=t\\): gradient \\(=e^{t}\\).",
        "answer": "\\(\\dfrac{dy}{dx}=e^{x}\\). At \\(x=t\\): gradient \\(=e^{t}\\).",
        "hint": "The derivative of \\(e^{x}\\) is itself.",
        "solution": "y'=e^x, so at x=t the gradient is e^t.",
        "solutionSteps": [
          {
            "explanation": "The derivative of \\(y=e^{x}\\) is \\(y'=e^{x}\\) (the exponential is its own derivative).",
            "workingOut": "\\(y'=e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "At the general point of contact \\(T(t,e^{t})\\), the gradient is obtained by substituting \\(x=t\\): \\(m=e^{t}\\).",
            "workingOut": "\\(m=e^{t}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q12b",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Find the equation of the tangent at \\(x=t\\), and show that its x-intercept is \\(t-1\\).",
        "a": "\\(y=e^{t}(x-t+1)\\). Setting y=0 gives x=t-1.",
        "answer": "\\(y=e^{t}(x-t+1)\\). Setting y=0 gives x=t-1.",
        "hint": "Point–gradient form, then set y=0.",
        "solution": "y-e^t=e^t(x-t). Set y=0: e^t(x-t+1)=0 ⇒ x=t-1.",
        "solutionSteps": [
          {
            "explanation": "Point–gradient form at \\(T(t,e^{t})\\) with gradient \\(e^{t}\\): \\(y-e^{t}=e^{t}(x-t)\\).",
            "workingOut": "\\(y-e^{t}=e^{t}(x-t)\\)",
            "graphData": null
          },
          {
            "explanation": "Expand: \\(y=e^{t}x-te^{t}+e^{t}=e^{t}x+e^{t}(1-t)\\).",
            "workingOut": "\\(y=e^{t}(x-t+1)\\)",
            "graphData": null
          },
          {
            "explanation": "For the x-intercept set \\(y=0\\): \\(e^{t}(x-t+1)=0\\). Since \\(e^{t}\\neq 0\\), we get \\(x=t-1\\).",
            "workingOut": "\\(x=t-1\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q12c",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Explain geometrically what this means for any tangent to \\(y=e^{x}\\).",
        "a": "Any tangent at x=t meets the x-axis exactly 1 unit to the left of the point of contact.",
        "answer": "Any tangent at x=t meets the x-axis exactly 1 unit to the left of the point of contact.",
        "hint": "Compare the contact x-coordinate t with the intercept t-1.",
        "solution": "The x-intercept is always 1 less than the x-coordinate of the point of tangency.",
        "solutionSteps": [
          {
            "explanation": "The point of contact has x-coordinate \\(t\\), while the tangent meets the x-axis at \\(x=t-1\\).",
            "workingOut": "\\(t\\text{ vs }t-1\\)",
            "graphData": null
          },
          {
            "explanation": "Geometrically, every tangent to \\(y=e^{x}\\) meets the x-axis exactly one unit to the left of the point of contact.",
            "workingOut": "\\(\\text{1 unit to the left}\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q13",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{x} \\) and its normal line at \\( x = t \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Normal gradient is \\(-e^{-t}\\). Substitute the origin carefully for part (b).",
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-5c-q13a",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the equation of the normal to \\(y=e^{x}\\) at \\(x=t\\).",
        "opts": [
          "\\(y - e^{t} = -e^{-t}(x - t)\\)",
          "\\(y - e^{t} = e^{t}(x - t)\\)",
          "\\(y - e^{t} = -e^{t}(x - t)\\)",
          "\\(y - e^{t} = e^{-t}(x - t)\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Tangent slope is \\(e^{t}\\), so normal slope is \\(-e^{-t}\\). Point of contact is \\((t,e^{t})\\).",
        "solution": "Tangent gradient at \\(x=t\\) is \\(e^{t}\\), so normal gradient is \\(-e^{-t}\\). Point–gradient form: \\(y-e^{t}=-e^{-t}(x-t)\\).",
        "solutionSteps": [
          {
            "explanation": "For \\(y=e^{x}\\), the tangent gradient at \\(x=t\\) is \\(e^{t}\\).",
            "workingOut": "\\(m_t=e^{t}\\)",
            "graphData": null
          },
          {
            "explanation": "The normal gradient is the negative reciprocal: \\(m_n=-e^{-t}\\).",
            "workingOut": "\\(m_n=-e^{-t}\\)",
            "graphData": null
          },
          {
            "explanation": "Point of contact \\((t,e^{t})\\). Point–gradient form: \\(y-e^{t}=-e^{-t}(x-t)\\).",
            "workingOut": "\\(y-e^{t}=-e^{-t}(x-t)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q13b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "If this normal line passes through the origin \\((0,0)\\), which equation must be satisfied by \\(t\\)?",
        "opts": [
          "\\(t + e^{2t} = 0\\)",
          "\\(t - e^{2t} = 0\\)",
          "\\(t + e^{t} = 0\\)",
          "\\(1 + e^{2t} = 0\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Substitute \\(x=0\\), \\(y=0\\) into the normal equation and simplify.",
        "solution": "Substitute \\((0,0)\\) into \\(y-e^{t}=-e^{-t}(x-t)\\): \\(-e^{t}=-e^{-t}(-t)=t e^{-t}\\). Multiply by \\(e^{t}\\): \\(-e^{2t}=t\\), so \\(t+e^{2t}=0\\).",
        "solutionSteps": [
          {
            "explanation": "Substitute the origin \\((0,0)\\) into the normal equation \\(y-e^{t}=-e^{-t}(x-t)\\).",
            "workingOut": "\\(0-e^{t}=-e^{-t}(0-t)\\)",
            "graphData": null
          },
          {
            "explanation": "Simplify: \\(-e^{t}=t e^{-t}\\).",
            "workingOut": "\\(-e^{t}=t e^{-t}\\)",
            "graphData": null
          },
          {
            "explanation": "Multiply both sides by \\(e^{t}\\): \\(-e^{2t}=t\\).",
            "workingOut": "\\(-e^{2t}=t\\)",
            "graphData": null
          },
          {
            "explanation": "Rearrange to obtain \\(t+e^{2t}=0\\).",
            "workingOut": "\\(t+e^{2t}=0\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q13c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Why is there exactly one value of \\(t\\) for which the normal passes through the origin?",
        "opts": [
          "\\(g(t)=t+e^{2t}\\) is strictly increasing and ranges from \\(-\\infty\\) to \\(\\infty\\), so it has exactly one root",
          "\\(g(t)=t+e^{2t}\\) is always positive, so it has no roots",
          "\\(g(t)=t+e^{2t}\\) is a quadratic with two real roots",
          "\\(g(t)=t+e^{2t}\\) is periodic, so it has infinitely many roots"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Analyse \\(g(t)=t+e^{2t}\\) and its derivative \\(g'(t)\\).",
        "solution": "Let \\(g(t)=t+e^{2t}\\). Then \\(g'(t)=1+2e^{2t}>0\\) for all \\(t\\) (strictly increasing). As \\(t\\to-\\infty\\), \\(g\\to-\\infty\\); as \\(t\\to\\infty\\), \\(g\\to\\infty\\). By the IVT there is exactly one root.",
        "solutionSteps": [
          {
            "explanation": "Define \\(g(t)=t+e^{2t}\\). We must show \\(g(t)=0\\) has exactly one real root.",
            "workingOut": "\\(g(t)=t+e^{2t}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate: \\(g'(t)=1+2e^{2t}\\). Since \\(e^{2t}>0\\) always, \\(g'(t)>0\\) always — \\(g\\) is strictly increasing.",
            "workingOut": "\\(g'(t)>0\\)",
            "graphData": null
          },
          {
            "explanation": "As \\(t\\to-\\infty\\), \\(g\\to-\\infty\\); as \\(t\\to\\infty\\), \\(g\\to\\infty\\).",
            "workingOut": "\\(g\\to\\pm\\infty\\)",
            "graphData": null
          },
          {
            "explanation": "A continuous strictly increasing function ranging over all reals crosses zero exactly once. Hence exactly one such normal.",
            "workingOut": "\\(\\text{exactly one }t\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q14",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the curve \\( y = x e^{2x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Product rule for derivatives; signs follow from e^{2x}>0.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q14a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Where is the function zero, positive, and negative?",
        "a": "Zero at x=0; positive for x>0; negative for x<0.",
        "answer": "Zero at x=0; positive for x>0; negative for x<0.",
        "hint": "Sign of y is the sign of x, since e^{2x}>0 always.",
        "solution": "e^{2x}>0 always, so y has the sign of x. y=0 at x=0 only.",
        "solutionSteps": [
          {
            "explanation": "Write \\(y=x e^{2x}\\). The factor \\(e^{2x}\\) is always positive for all real \\(x\\).",
            "workingOut": "\\(e^{2x}>0\\)",
            "graphData": null
          },
          {
            "explanation": "Therefore the sign of \\(y\\) is the same as the sign of \\(x\\): zero only at \\(x=0\\), positive for \\(x>0\\), negative for \\(x<0\\).",
            "workingOut": "\\(sign(y)=sign(x)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q14b",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the first and second derivatives.",
        "opts": [
          "\\(y'=(2x+1)e^{2x},\\; y''=(4x+4)e^{2x}\\)",
          "\\(y'=(2x-1)e^{2x},\\; y''=(4x-4)e^{2x}\\)",
          "\\(y'=2x e^{2x},\\; y''=4x e^{2x}\\)",
          "\\(y'=(x+1)e^{2x},\\; y''=(x+2)e^{2x}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Product rule twice.",
        "solution": "y'=(2x+1)e^{2x}, y''=4(x+1)e^{2x}=(4x+4)e^{2x}.",
        "solutionSteps": [
          {
            "explanation": "Product rule with \\(u=x\\), \\(v=e^{2x}\\): \\(u'=1\\), \\(v'=2e^{2x}\\).",
            "workingOut": "\\(u'=1,\\; v'=2e^{2x}\\)",
            "graphData": null
          },
          {
            "explanation": "Then \\(y'=e^{2x}+x\\cdot 2e^{2x}=(2x+1)e^{2x}\\).",
            "workingOut": "\\(y'=(2x+1)e^{2x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again: \\(y''=2e^{2x}+(2x+1)\\cdot 2e^{2x}=(4x+4)e^{2x}\\).",
            "workingOut": "\\(y''=(4x+4)e^{2x}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q14c",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Show that there is one stationary point, and determine its nature.",
        "opts": [
          "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\), local minimum",
          "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\), local maximum",
          "\\((0,0)\\), local minimum",
          "\\((-1,-e^{-2})\\), local minimum"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Solve y'=0; use y'' test.",
        "solution": "2x+1=0 ⇒ x=-1/2, y=-1/(2e). y''(-1/2)>0 ⇒ local min.",
        "solutionSteps": [
          {
            "explanation": "Set \\(y'=0\\). Since \\(e^{2x}\\neq 0\\), we need \\(2x+1=0\\Rightarrow x=-\\dfrac{1}{2}\\). Only one stationary point.",
            "workingOut": "\\(x=-\\dfrac{1}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "Y-value: \\(y=\\left(-\\dfrac{1}{2}\\right)e^{-1}=-\\dfrac{1}{2e}\\).",
            "workingOut": "\\(y=-\\dfrac{1}{2e}\\)",
            "graphData": null
          },
          {
            "explanation": "Second derivative test: \\(y''\\!\\left(-\\dfrac{1}{2}\\right)=\\left(-2+4\\right)e^{-1}=2e^{-1}>0\\), so it is a local minimum.",
            "workingOut": "\\(\\text{local minimum}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q14d",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point of inflection.",
        "opts": [
          "\\((-1,-e^{-2})\\)",
          "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\)",
          "\\((0,0)\\)",
          "\\((1,e^{2})\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Solve y''=0.",
        "solution": "4x+4=0 ⇒ x=-1, y=-e^{-2}. Point (-1,-e^{-2}).",
        "solutionSteps": [
          {
            "explanation": "Inflection points require \\(y''=0\\). With \\(e^{2x}\\neq 0\\), solve \\(4x+4=0\\Rightarrow x=-1\\).",
            "workingOut": "\\(x=-1\\)",
            "graphData": null
          },
          {
            "explanation": "Y-value: \\(y=(-1)e^{-2}=-e^{-2}\\). The inflection point is \\((-1,-e^{-2})\\).",
            "workingOut": "\\((-1,-e^{-2})\\)",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q15",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the function \\( y = e^{-\\frac{1}{2}x^{2}} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Even function: f(-x)=f(x). Gaussian-type shape.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q15a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that the function is even. When is it zero, positive, or negative?",
        "a": "f(-x)=f(x) (even). Always positive; never zero or negative.",
        "answer": "f(-x)=f(x) (even). Always positive; never zero or negative.",
        "hint": "Compare f(-x) and f(x). Exponential is always positive.",
        "solution": "f(-x)=e^{-½x²}=f(x). e^{anything}>0 so y>0 always.",
        "solutionSteps": [
          {
            "explanation": "Let \\(f(x)=e^{-\\frac{1}{2}x^{2}}\\). Then \\(f(-x)=e^{-\\frac{1}{2}(-x)^{2}}=e^{-\\frac{1}{2}x^{2}}=f(x)\\), so \\(f\\) is even.",
            "workingOut": "\\(f(-x)=f(x)\\)",
            "graphData": null
          },
          {
            "explanation": "The exponential function is always positive, so \\(y>0\\) for all real \\(x\\). It is never zero or negative.",
            "workingOut": "\\(y>0\\;\\forall x\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q15b",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that \\(y'=-x e^{-\\frac{1}{2}x^{2}}\\) and \\(y''=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\).",
        "a": "Chain rule then product rule as required.",
        "answer": "Chain rule then product rule as required.",
        "hint": "Differentiate carefully with product/chain rules.",
        "solution": "Chain: y'=-x e^{-½x²}. Product: y''=-e^{-½x²}+x²e^{-½x²}=(x²-1)e^{-½x²}.",
        "solutionSteps": [
          {
            "explanation": "Chain rule with \\(u=-\\dfrac{1}{2}x^{2}\\): \\(u'=-x\\). Hence \\(y'=e^{u}u'=-x e^{-\\frac{1}{2}x^{2}}\\).",
            "workingOut": "\\(y'=-x e^{-\\frac{1}{2}x^{2}}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again with the product rule on \\(-x\\cdot e^{-\\frac{1}{2}x^{2}}\\):",
            "workingOut": "\\(y''=-e^{-\\frac{1}{2}x^{2}}+x^{2}e^{-\\frac{1}{2}x^{2}}=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q15c",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that this curve has a maximum turning point at its y-intercept.",
        "a": "y'=0 at x=0 only; y(0)=1; y''(0)=-1<0 ⇒ local max at (0,1).",
        "answer": "y'=0 at x=0 only; y(0)=1; y''(0)=-1<0 ⇒ local max at (0,1).",
        "hint": "Solve y'=0 and use second derivative test.",
        "solution": "y'=0 ⇒ x=0, y=1. y''(0)=-1<0: maximum at y-intercept (0,1).",
        "solutionSteps": [
          {
            "explanation": "Stationary points: \\(y'=0\\Rightarrow -x=0\\Rightarrow x=0\\) (since the exponential never vanishes).",
            "workingOut": "\\(x=0\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(y=e^{0}=1\\). The point is the y-intercept \\((0,1)\\).",
            "workingOut": "\\((0,1)\\)",
            "graphData": null
          },
          {
            "explanation": "Second derivative test: \\(y''(0)=(0-1)e^{0}=-1<0\\), confirming a local maximum.",
            "workingOut": "\\(\\text{local maximum}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q15d",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Find the two points of inflection.",
        "opts": [
          "\\((-1,e^{-1/2})\\) and \\((1,e^{-1/2})\\)",
          "\\((-1,e^{-1})\\) and \\((1,e^{-1})\\)",
          "\\((0,1)\\) only",
          "\\((-2,e^{-2})\\) and \\((2,e^{-2})\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Solve y''=0: x²-1=0.",
        "solution": "x=±1, y=e^{-1/2}. Points (±1, e^{-1/2}).",
        "solutionSteps": [
          {
            "explanation": "Set \\(y''=0\\): \\((x^{2}-1)e^{-\\frac{1}{2}x^{2}}=0\\Rightarrow x^{2}-1=0\\Rightarrow x=\\pm 1\\).",
            "workingOut": "\\(x=\\pm 1\\)",
            "graphData": null
          },
          {
            "explanation": "At both points, \\(y=e^{-\\frac{1}{2}}=e^{-1/2}\\). Inflection points: \\(\\bigl(\\pm 1,\\, e^{-1/2}\\bigr)\\).",
            "workingOut": "\\((\\pm 1, e^{-1/2})\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch: even bell-shaped curve, maximum at \\((0,1)\\), inflection points marked.",
            "workingOut": "\\((\\pm 1, e^{-1/2})\\)",
            "graphData": {
              "jsxGraph": {
                "boundingbox": [
                  -3.2,
                  1.25,
                  3.2,
                  -0.15
                ],
                "width": 380,
                "height": 150,
                "axis": false,
                "showCopyright": false,
                "showNavigation": false,
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0],[3,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-0.1],[0,1.2]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [2.85,-0.12], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.28,1.12], 'y', {fontSize:12, color:'#64748b'});\nboard.create('functiongraph', [function(x){return Math.exp(-0.5*x*x);}, -3, 3], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('point', [0,1], {name:'max', size:3.5, fillColor:'#f43f5e', strokeColor:'#f43f5e', label:{offset:[8,6]}});\nboard.create('point', [1, Math.exp(-0.5)], {name:'', size:3, fillColor:'#f59e0b', strokeColor:'#f59e0b'});\nboard.create('point', [-1, Math.exp(-0.5)], {name:'inflection', size:3, fillColor:'#f59e0b', strokeColor:'#f59e0b', label:{offset:[-52,6]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q16",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the function \\( y = (1-x)e^{x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Product rule; maximum at y-intercept; range from absolute max.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q16a",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Find the zero of the function and draw up a table of signs.",
        "a": "Zero at x=1. y>0 for x<1; y<0 for x>1.",
        "answer": "Zero at x=1. y>0 for x<1; y<0 for x>1.",
        "hint": "Solve (1-x)e^x=0; e^x>0 always.",
        "solution": "x=1 is the only zero. Sign of y = sign of (1-x).",
        "solutionSteps": [
          {
            "explanation": "Set \\(y=(1-x)e^{x}=0\\). Since \\(e^{x}\\neq 0\\), we need \\(1-x=0\\Rightarrow x=1\\).",
            "workingOut": "\\(x=1\\)",
            "graphData": null
          },
          {
            "explanation": "Because \\(e^{x}>0\\) always, the sign of \\(y\\) matches the sign of \\((1-x)\\): positive for \\(x<1\\), negative for \\(x>1\\).",
            "workingOut": "\\(y>0\\ (x<1);\\ y<0\\ (x>1)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q16b",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that \\(y'=-x e^{x}\\) and \\(y''=-(x+1)e^{x}\\).",
        "a": "Product rule twice.",
        "answer": "Product rule twice.",
        "hint": "u=1-x, v=e^x.",
        "solution": "y'=-e^x+(1-x)e^x=-x e^x. y''=-e^x-x e^x=-(x+1)e^x.",
        "solutionSteps": [
          {
            "explanation": "Product rule with \\(u=1-x\\), \\(v=e^{x}\\): \\(y'=-e^{x}+(1-x)e^{x}=-x e^{x}\\).",
            "workingOut": "\\(y'=-x e^{x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again: \\(y''=-e^{x}-x e^{x}=-(x+1)e^{x}\\).",
            "workingOut": "\\(y''=-(x+1)e^{x}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q16c",
        "difficulty": "medium",
        "type": "teacher_review",
        "question": "Show that the curve has a maximum turning point at its y-intercept, and a point of inflection at \\((-1,2e^{-1})\\).",
        "a": "Max at (0,1); inflection at (-1, 2/e).",
        "answer": "Max at (0,1); inflection at (-1, 2/e).",
        "hint": "y'=0 at x=0; y''=0 at x=-1.",
        "solution": "y'=0⇒x=0, y=1, y''=-1<0 max. y''=0⇒x=-1, y=2e^{-1}.",
        "solutionSteps": [
          {
            "explanation": "Stationary: \\(y'=0\\Rightarrow -x=0\\Rightarrow x=0\\). Then \\(y=(1-0)e^{0}=1\\). Y-intercept is \\((0,1)\\).",
            "workingOut": "\\((0,1)\\)",
            "graphData": null
          },
          {
            "explanation": "Second derivative test: \\(y''(0)=-(0+1)e^{0}=-1<0\\) ⇒ local maximum at the y-intercept.",
            "workingOut": "\\(\\text{local max}\\)",
            "graphData": null
          },
          {
            "explanation": "Inflection: \\(y''=0\\Rightarrow x+1=0\\Rightarrow x=-1\\). Then \\(y=(1-(-1))e^{-1}=2e^{-1}\\).",
            "workingOut": "\\((-1,2e^{-1})\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q16d",
        "difficulty": "medium",
        "type": "multiple_choice",
        "question": "Sketch the curve and state its range.",
        "opts": [
          "\\(y\\leq 1\\)",
          "\\(y\\geq 1\\)",
          "\\(y\\geq 0\\)",
          "\\(y\\in\\mathbb{R}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Absolute maximum is 1; y→−∞ as x→∞.",
        "solution": "Local max at (0,1) is absolute max. Range: y≤1.",
        "solutionSteps": [
          {
            "explanation": "The absolute maximum value is 1 (at the y-intercept). As \\(x\\to\\infty\\), \\(y\\to-\\infty\\); as \\(x\\to-\\infty\\), \\(y\\to 0\\).",
            "workingOut": "\\(y\\leq 1\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch: max at \\((0,1)\\), zero at \\((1,0)\\), inflection at \\((-1,2e^{-1})\\). Range: \\(y\\leq 1\\).",
            "workingOut": "\\(y\\leq 1\\)",
            "graphData": {
              "jsxGraph": {
                "boundingbox": [
                  -3,
                  1.8,
                  2.5,
                  -3.2
                ],
                "width": 360,
                "height": 200,
                "axis": false,
                "showCopyright": false,
                "showNavigation": false,
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0],[2.3,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-3],[0,1.7]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [2.15,-0.2], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.28,1.55], 'y', {fontSize:12, color:'#64748b'});\nboard.create('functiongraph', [function(x){return (1-x)*Math.exp(x);}, -2.8, 2], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('point', [0,1], {name:'max', size:3.5, fillColor:'#f43f5e', strokeColor:'#f43f5e', label:{offset:[8,6]}});\nboard.create('point', [1,0], {name:'(1,0)', size:3, fillColor:'#10b981', strokeColor:'#10b981', label:{offset:[6,-12]}});\nboard.create('point', [-1, 2/Math.E], {name:'inflection', size:3, fillColor:'#f59e0b', strokeColor:'#f59e0b', label:{offset:[-48,8]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q17",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 220,
    "question": "Consider \\( y = \\cosh x = \\dfrac{e^{x}+e^{-x}}{2} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Even function; \\(y'=\\sinh x\\); \\(y''=\\cosh x>0\\).",
    "requiresManualGrading": false,
    "subQuestions": [
      {
        "id": "y12a-5c-q17a",
        "difficulty": "hard",
        "type": "multiple_choice",
        "question": "Which statement about \\(y=\\cosh x=\\dfrac{e^{x}+e^{-x}}{2}\\) is correct?",
        "opts": [
          "\\(\\cosh x\\) is even and always positive",
          "\\(\\cosh x\\) is odd and always positive",
          "\\(\\cosh x\\) is even and can be negative",
          "\\(\\cosh x\\) is odd and can be negative"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Check \\(f(-x)\\) and the sign of \\(e^{x}+e^{-x}\\).",
        "solution": "\\(f(-x)=\\dfrac{e^{-x}+e^{x}}{2}=f(x)\\) (even). Since \\(e^{x}>0\\) and \\(e^{-x}>0\\), their average is always positive.",
        "solutionSteps": [
          {
            "explanation": "Let \\(f(x)=\\dfrac{e^{x}+e^{-x}}{2}\\). Then \\(f(-x)=\\dfrac{e^{-x}+e^{x}}{2}=f(x)\\), so \\(\\cosh x\\) is even.",
            "workingOut": "\\(\\cosh(-x)=\\cosh x\\)",
            "graphData": null
          },
          {
            "explanation": "Both \\(e^{x}>0\\) and \\(e^{-x}>0\\) for all real \\(x\\), so their average is always positive: \\(\\cosh x>0\\).",
            "workingOut": "\\(\\cosh x>0\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q17b",
        "difficulty": "hard",
        "type": "multiple_choice",
        "question": "Find \\(\\dfrac{dy}{dx}\\) for \\(y=\\cosh x\\), and the stationary point at the y-intercept.",
        "opts": [
          "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}=\\sinh x\\); stationary point \\((0,1)\\)",
          "\\(y'=\\dfrac{e^{x}+e^{-x}}{2}=\\cosh x\\); stationary point \\((0,1)\\)",
          "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\); stationary point \\((1,0)\\)",
          "\\(y'=e^{x}-e^{-x}\\); stationary point \\((0,1)\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Differentiate term by term. Set \\(y'=0\\) to find stationary points.",
        "solution": "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}=\\sinh x\\). Set \\(y'=0\\): \\(e^{x}=e^{-x}\\Rightarrow x=0\\), \\(y=1\\). Stationary point \\((0,1)\\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate term by term: \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{e^{x}}{2}\\right)=\\dfrac{e^{x}}{2}\\) and \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{e^{-x}}{2}\\right)=-\\dfrac{e^{-x}}{2}\\).",
            "workingOut": "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\)",
            "graphData": null
          },
          {
            "explanation": "By definition this is \\(\\sinh x\\). So \\(y'=\\sinh x\\).",
            "workingOut": "\\(y'=\\sinh x\\)",
            "graphData": null
          },
          {
            "explanation": "Set \\(y'=0\\): \\(e^{x}-e^{-x}=0\\Rightarrow e^{2x}=1\\Rightarrow x=0\\).",
            "workingOut": "\\(x=0\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(y=\\dfrac{1+1}{2}=1\\). Stationary point is the y-intercept \\((0,1)\\).",
            "workingOut": "\\((0,1)\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q17c",
        "difficulty": "hard",
        "type": "multiple_choice",
        "question": "Which statement correctly describes the concavity of \\(y=\\cosh x\\)?",
        "opts": [
          "\\(y''=\\cosh x>0\\) for all \\(x\\), so the curve is always concave up",
          "\\(y''=\\sinh x\\), which changes sign, so concavity changes",
          "\\(y''=-\\cosh x<0\\) for all \\(x\\), so always concave down",
          "\\(y''=0\\) for all \\(x\\), so the curve is a straight line"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Differentiate \\(y'=\\sinh x\\) again. Recall that \\(\\cosh x>0\\) always.",
        "solution": "\\(y''=\\dfrac{e^{x}+e^{-x}}{2}=\\cosh x>0\\) for all \\(x\\). Therefore the curve is always concave up.",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\) again: \\(y''=\\dfrac{e^{x}+e^{-x}}{2}=\\cosh x\\).",
            "workingOut": "\\(y''=\\cosh x\\)",
            "graphData": null
          },
          {
            "explanation": "From part (a), \\(\\cosh x>0\\) for all \\(x\\). Hence \\(y''>0\\) everywhere: the curve is always concave up.",
            "workingOut": "\\(y''>0\\;\\forall x\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q17d",
        "difficulty": "hard",
        "type": "multiple_choice",
        "question": "Which description matches the sketch of \\(y=\\cosh x\\)?",
        "opts": [
          "Symmetric U-shape (catenary) with minimum at \\((0,1)\\), range \\(y\\geq 1\\)",
          "S-shape through the origin, range all real \\(y\\)",
          "Bell curve with maximum at \\((0,1)\\), range \\(0<y\\leq 1\\)",
          "Straight line through \\((0,1)\\) with gradient 1"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Even, minimum at the y-intercept, always concave up.",
        "solution": "Even symmetry, local (and absolute) minimum at \\((0,1)\\), always concave up: a catenary (U-shape) with range \\(y\\geq 1\\).",
        "solutionSteps": [
          {
            "explanation": "Combining earlier results: even symmetry, absolute minimum at \\((0,1)\\), always concave up, range \\(y\\geq 1\\).",
            "workingOut": "\\(y\\geq 1\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch the catenary (U-shape) through \\((0,1)\\), symmetric about the y-axis.",
            "workingOut": "\\(y=\\cosh x\\)",
            "graphData": {
              "jsxGraph": {
                "boundingbox": [
                  -2.8,
                  4.2,
                  2.8,
                  -0.3
                ],
                "width": 360,
                "height": 180,
                "axis": false,
                "showCopyright": false,
                "showNavigation": false,
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.6,0],[2.6,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-0.2],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [2.45,-0.18], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.28,3.85], 'y', {fontSize:12, color:'#64748b'});\nboard.create('functiongraph', [function(x){return 0.5*(Math.exp(x)+Math.exp(-x));}, -2.5, 2.5], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('point', [0,1], {name:'(0,1)', size:3.5, fillColor:'#f43f5e', strokeColor:'#f43f5e', label:{offset:[8,6]}});\nboard.create('text', [1.1, 2.0], 'y=cosh x', {fontSize:11, color:'#6366f1'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "graphData": null,
    "isNew": true,
    "id": "y12a-5c-q18",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the curve \\( y = x^{2} e^{-x} \\).",
    "a": "See sub-questions.",
    "answer": "See sub-questions.",
    "solution": "See sub-question solutions.",
    "solutionSteps": [],
    "hint": "Product rule carefully; factor e^{-x}>0 when solving.",
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y12a-5c-q18a",
        "difficulty": "hard",
        "type": "teacher_review",
        "question": "Show that \\(y'=x(2-x)e^{-x}\\) and \\(y''=(x^{2}-4x+2)e^{-x}\\).",
        "a": "Product rule twice as required.",
        "answer": "Product rule twice as required.",
        "hint": "u=x², v=e^{-x}.",
        "solution": "y'=(2x-x²)e^{-x}=x(2-x)e^{-x}. y''=(x²-4x+2)e^{-x}.",
        "solutionSteps": [
          {
            "explanation": "Product rule on \\(y=x^{2}e^{-x}\\) with \\(u=x^{2}\\), \\(v=e^{-x}\\): \\(u'=2x\\), \\(v'=-e^{-x}\\).",
            "workingOut": "\\(u'=2x,\\; v'=-e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Then \\(y'=2x e^{-x}+x^{2}(-e^{-x})=(2x-x^{2})e^{-x}=x(2-x)e^{-x}\\).",
            "workingOut": "\\(y'=x(2-x)e^{-x}\\)",
            "graphData": null
          },
          {
            "explanation": "Differentiate again (product of \\((2x-x^{2})\\) and \\(e^{-x}\\)):",
            "workingOut": "\\(y''=(2-2x)e^{-x}-(2x-x^{2})e^{-x}=(x^{2}-4x+2)e^{-x}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q18b",
        "difficulty": "hard",
        "type": "teacher_review",
        "question": "Show that the function has a minimum turning point at the origin and a maximum turning point at \\((2,4e^{-2})\\).",
        "a": "y'=0 at x=0,2. y''(0)>0 min; y''(2)<0 max.",
        "answer": "y'=0 at x=0,2. y''(0)>0 min; y''(2)<0 max.",
        "hint": "Second derivative test at each critical point.",
        "solution": "At 0: y=0, y''=2>0 min. At 2: y=4e^{-2}, y''=-2e^{-2}<0 max.",
        "solutionSteps": [
          {
            "explanation": "Set \\(y'=0\\). Since \\(e^{-x}\\neq 0\\), either \\(x=0\\) or \\(x=2\\).",
            "workingOut": "\\(x=0\\text{ or }x=2\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=0\\): \\(y=0\\). And \\(y''(0)=(0-0+2)e^{0}=2>0\\) ⇒ local minimum at the origin.",
            "workingOut": "\\(\\text{min at }(0,0)\\)",
            "graphData": null
          },
          {
            "explanation": "At \\(x=2\\): \\(y=4e^{-2}\\). And \\(y''(2)=(4-8+2)e^{-2}=-2e^{-2}<0\\) ⇒ local maximum at \\((2,4e^{-2})\\).",
            "workingOut": "\\(\\text{max at }(2,4e^{-2})\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q18c",
        "difficulty": "hard",
        "type": "teacher_review",
        "question": "Show that \\(y''=0\\) at \\(x=2\\pm\\sqrt{2}\\), and that there are inflection points at these values.",
        "a": "x²-4x+2=0 ⇒ x=2±√2. Sign of y'' changes at each root.",
        "answer": "x²-4x+2=0 ⇒ x=2±√2. Sign of y'' changes at each root.",
        "hint": "Quadratic formula; check concavity change.",
        "solution": "Discriminant 8; roots 2±√2. y'' changes sign ⇒ inflection points.",
        "solutionSteps": [
          {
            "explanation": "Set \\(y''=0\\): \\(x^{2}-4x+2=0\\) (since \\(e^{-x}\\neq 0\\)).",
            "workingOut": "\\(x^{2}-4x+2=0\\)",
            "graphData": null
          },
          {
            "explanation": "Quadratic formula: \\(x=\\dfrac{4\\pm\\sqrt{16-8}}{2}=\\dfrac{4\\pm\\sqrt{8}}{2}=2\\pm\\sqrt{2}\\).",
            "workingOut": "\\(x=2\\pm\\sqrt{2}\\)",
            "graphData": null
          },
          {
            "explanation": "These are simple roots of \\(y''\\), so the sign of \\(y''\\) changes at each: both are points of inflection.",
            "workingOut": "\\(\\text{inflection points}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y12a-5c-q18d",
        "difficulty": "hard",
        "type": "multiple_choice",
        "question": "Sketch the curve and state its range.",
        "opts": [
          "\\(y\\geq 0\\)",
          "\\(y\\leq 0\\)",
          "\\(y\\geq 4e^{-2}\\)",
          "\\(y\\in\\mathbb{R}\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "x²≥0 and e^{-x}>0 always.",
        "solution": "y=x²e^{-x}≥0 for all x. Range: y≥0.",
        "solutionSteps": [
          {
            "explanation": "Since \\(x^{2}\\geq 0\\) and \\(e^{-x}>0\\) for all real \\(x\\), we have \\(y=x^{2}e^{-x}\\geq 0\\) always. The minimum value is 0.",
            "workingOut": "\\(y\\geq 0\\)",
            "graphData": null
          },
          {
            "explanation": "Sketch: local min at origin, local max at \\((2,4e^{-2})\\), then decaying toward 0 as \\(x\\to\\infty\\). Range: \\(y\\geq 0\\).",
            "workingOut": "\\(y\\geq 0\\)",
            "graphData": {
              "jsxGraph": {
                "boundingbox": [
                  -0.8,
                  0.7,
                  7.5,
                  -0.15
                ],
                "width": 400,
                "height": 150,
                "axis": false,
                "showCopyright": false,
                "showNavigation": false,
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.6,0],[7.3,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-0.1],[0,0.65]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [7.1,-0.08], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.25,0.6], 'y', {fontSize:12, color:'#64748b'});\nboard.create('functiongraph', [function(x){return x*x*Math.exp(-x);}, -0.5, 7.2], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('point', [0,0], {name:'min', size:3.5, fillColor:'#f43f5e', strokeColor:'#f43f5e', label:{offset:[8,6]}});\nboard.create('point', [2, 4*Math.exp(-2)], {name:'max', size:3.5, fillColor:'#10b981', strokeColor:'#10b981', label:{offset:[6,6]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  }
];
