export const Y12A_CH5C_QUESTIONS = [
  {
    "id": "y12a-5c-q1a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{2x-2} \\).\n\nFind the y-coordinate of the point \\(A\\) on the curve where \\(x=1\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(e\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q1b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{2x-2} \\).\n\nFind the derivative of \\(y=e^{2x-2}\\), and the gradient of the tangent at \\(A\\) (where \\(x=1\\)).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{dy}{dx}=2e^{2x-2},\\; m=2\\)",
      "\\(\\dfrac{dy}{dx}=e^{2x-2},\\; m=1\\)",
      "\\(\\dfrac{dy}{dx}=2e^{2x-2},\\; m=2e\\)",
      "\\(\\dfrac{dy}{dx}=2e^{2x},\\; m=2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q1c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{2x-2} \\).\n\nFind the equation of the tangent at \\(A\\). Which statement is correct?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=2x-1\\), and it passes through \\((0,-1)\\)",
      "\\(y=2x+1\\), and it passes through \\((0,1)\\)",
      "\\(y=x-1\\), and it passes through \\((0,-1)\\)",
      "\\(y=2x-1\\), and it passes through \\((0,1)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q2a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{3x-3} \\).\n\nWrite down the coordinates of the point \\(R\\) on the curve where \\(x=1\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(R(1,0)\\)",
      "\\(R(1,1)\\)",
      "\\(R(1,e)\\)",
      "\\(R(0,1)\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q2b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{3x-3} \\).\n\nFind \\(\\dfrac{dy}{dx}\\) for \\(y=e^{3x-3}\\), and the gradient of the tangent at \\(R\\) (where \\(x=1\\)).",
    "hint": "Chain rule: factor 3 from the exponent. Then substitute \\(x=1\\).",
    "solution": "Chain rule: \\(y'=3e^{3x-3}\\). At \\(x=1\\): \\(m=3e^{0}=3\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y=e^{3x-3}\\) with the chain rule. Set \\(u=3x-3\\), so \\(u'=3\\).",
        "workingOut": "\\(u=3x-3,\\; u'=3\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(\\dfrac{dy}{dx}=e^{u}u'=3e^{3x-3}\\).",
        "workingOut": "\\(y'=3e^{3x-3}\\)",
        "graphData": null
      },
      {
        "explanation": "At point \\(R\\) where \\(x=1\\): \\(m=3e^{3(1)-3}=3e^{0}=3\\).",
        "workingOut": "\\(m=3\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the derivative is \\(3e^{3x-3}\\) and the tangent gradient at \\(R\\) is 3.",
        "workingOut": "\\(y'=3e^{3x-3},\\; m_R=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\dfrac{dy}{dx}=3e^{3x-3},\\; m=3\\)",
      "\\(\\dfrac{dy}{dx}=e^{3x-3},\\; m=1\\)",
      "\\(\\dfrac{dy}{dx}=3e^{3x-3},\\; m=3e\\)",
      "\\(\\dfrac{dy}{dx}=3e^{3x},\\; m=3\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q2c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{3x-3} \\).\n\nWhat is the gradient of the normal at \\(R\\)?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(3\\)",
      "\\(-3\\)",
      "\\(-\\dfrac{1}{3}\\)",
      "\\(\\dfrac{1}{3}\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5c-q2d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{3x-3} \\).\n\nHence find the equation of the normal at \\(R\\) in general form.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x+3y-4=0\\)",
      "\\(3x+y-4=0\\)",
      "\\(x-3y+2=0\\)",
      "\\(x+3y+4=0\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q3a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).\n\nFind the gradient of the tangent to \\(y=e^{-x}\\) at \\(P\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(0\\)",
      "\\(e\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q3b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).\n\nWrite down the gradient of the normal at this point.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-1\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(-e\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q3c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).\n\nDetermine the equation of this normal.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=x+1\\)",
      "\\(y=-x+1\\)",
      "\\(y=x-1\\)",
      "\\(y=-x-1\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q3d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).\n\nFind the x- and y-intercepts of the normal.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x\\text{-int }=-1,\\; y\\text{-int }=1\\)",
      "\\(x\\text{-int }=1,\\; y\\text{-int }=-1\\)",
      "\\(x\\text{-int }=0,\\; y\\text{-int }=1\\)",
      "\\(x\\text{-int }=-1,\\; y\\text{-int }=-1\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q3e",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{-x} \\) and the point \\( P(0,1) \\).\n\nFind the area of the triangle whose vertices lie at the intercepts and the origin.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(2\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q4a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).\n\nFind the gradient of the tangent to \\(y=2e^{x}\\) at \\(B\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(e\\)",
      "\\(0\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q4b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).\n\nFind the equation of the tangent to \\(y=2e^{x}\\) at \\(B(0,2)\\), and where it meets the x-axis.",
    "hint": "Gradient at \\(B\\) is 2. Point–gradient form, then set \\(y=0\\).",
    "solution": "\\(y-2=2x\\Rightarrow y=2x+2\\). When \\(y=0\\): \\(x=-1\\). So \\(F(-1,0)\\).",
    "solutionSteps": [
      {
        "explanation": "From part (a), the gradient at \\(B(0,2)\\) is 2. Use point–gradient form.",
        "workingOut": "\\(y-2=2(x-0)\\)",
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
        "explanation": "Therefore the tangent is \\(y=2x+2\\) and meets the x-axis at \\(F(-1,0)\\).",
        "workingOut": "\\(F(-1,0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=2x+2\\), meets x-axis at \\(F(-1,0)\\)",
      "\\(y=2x+2\\), meets x-axis at \\(F(1,0)\\)",
      "\\(y=x+2\\), meets x-axis at \\(F(-2,0)\\)",
      "\\(y=2x-2\\), meets x-axis at \\(F(1,0)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q4c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).\n\nFind the gradient of the tangent to \\(y=2e^{-x}\\) at \\(B\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(2\\)",
      "\\(-2\\)",
      "\\(-1\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q4d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).\n\nFind the equation of the tangent to \\(y=2e^{-x}\\) at \\(B(0,2)\\), and where it meets the x-axis.",
    "hint": "Gradient at \\(B\\) is \\(-2\\). Point–gradient form, then set \\(y=0\\).",
    "solution": "\\(y-2=-2x\\Rightarrow y=-2x+2\\). When \\(y=0\\): \\(x=1\\). So \\(G(1,0)\\).",
    "solutionSteps": [
      {
        "explanation": "From part (c), the gradient at \\(B(0,2)\\) is \\(-2\\).",
        "workingOut": "\\(m=-2\\)",
        "graphData": null
      },
      {
        "explanation": "Point–gradient form: \\(y-2=-2(x-0)\\Rightarrow y=-2x+2\\).",
        "workingOut": "\\(y=-2x+2\\)",
        "graphData": null
      },
      {
        "explanation": "X-intercept: \\(0=-2x+2\\Rightarrow x=1\\).",
        "workingOut": "\\(x=1\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the tangent is \\(y=-2x+2\\) and meets the x-axis at \\(G(1,0)\\).",
        "workingOut": "\\(G(1,0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=-2x+2\\), meets x-axis at \\(G(1,0)\\)",
      "\\(y=-2x+2\\), meets x-axis at \\(G(-1,0)\\)",
      "\\(y=2x+2\\), meets x-axis at \\(G(1,0)\\)",
      "\\(y=-x+2\\), meets x-axis at \\(G(2,0)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q4e",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 220,
    "question": "Consider the point \\( B(0,2) \\) on the curves \\(y=2e^{x}\\) and \\(y=2e^{-x}\\).\n\nWhat sort of triangle is \\(\\triangle BFG\\), and what is its area?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\text{Equilateral, area }=2\\)",
      "\\(\\text{Isosceles, area }=2\\)",
      "\\(\\text{Right-angled, area }=1\\)",
      "\\(\\text{Isosceles, area }=4\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q5a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 150,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).\n\nFind the gradient of the tangent to the curve at \\(x=0\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(-1\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q5b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 150,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).\n\nWrite down the equation of the tangent at \\(x=0\\), and which point it passes through.",
    "hint": "Point of contact is \\((0,-1)\\) with gradient 1.",
    "solution": "At \\(x=0\\): \\(y=-1\\), \\(m=1\\). Tangent: \\(y=x-1\\). When \\(x=1\\), \\(y=0\\).",
    "solutionSteps": [
      {
        "explanation": "At \\(x=0\\): \\(y=2(0)-e^{0}=-1\\). From part (a), \\(m=1\\). Point \\((0,-1)\\).",
        "workingOut": "\\((0,-1),\\; m=1\\)",
        "graphData": null
      },
      {
        "explanation": "Point–gradient form: \\(y-(-1)=1(x-0)\\Rightarrow y=x-1\\).",
        "workingOut": "\\(y=x-1\\)",
        "graphData": null
      },
      {
        "explanation": "Check \\((1,0)\\): when \\(x=1\\), \\(y=1-1=0\\). The tangent passes through \\((1,0)\\).",
        "workingOut": "\\(x=1\\Rightarrow y=0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=x-1\\), and it passes through \\((1,0)\\)",
      "\\(y=x+1\\), and it passes through \\((1,2)\\)",
      "\\(y=2x-1\\), and it passes through \\((1,1)\\)",
      "\\(y=x-1\\), and it passes through \\((0,1)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q6a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).\n\nFind the first and second derivatives of the curve.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=2-e^{x},\\; y''=-e^{x}\\)",
      "\\(y'=2+e^{x},\\; y''=e^{x}\\)",
      "\\(y'=2-e^{x},\\; y''=e^{x}\\)",
      "\\(y'=-e^{x},\\; y''=-e^{x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q6b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).\n\nWhich statement correctly describes the concavity of \\(y=2x-e^{x}\\)?",
    "hint": "Use the sign of \\(y''=-e^{x}\\).",
    "solution": "Since \\(e^{x}>0\\) always, \\(y''=-e^{x}<0\\) always: always concave down.",
    "solutionSteps": [
      {
        "explanation": "From part (a), the second derivative is \\(y''=-e^{x}\\).",
        "workingOut": "\\(y''=-e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "For every real \\(x\\), \\(e^{x}>0\\). Multiplying by \\(-1\\) gives \\(-e^{x}<0\\).",
        "workingOut": "\\(e^{x}>0\\Rightarrow y''<0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the curve is concave down for all values of \\(x\\).",
        "workingOut": "\\(\\text{always concave down}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y''=-e^{x}<0\\) for all \\(x\\), so the curve is always concave down",
      "\\(y''=-e^{x}>0\\) for all \\(x\\), so the curve is always concave up",
      "\\(y''\\) changes sign, so there is a point of inflection",
      "\\(y''=0\\) for all \\(x\\), so the curve is a straight line"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q6c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = 2x - e^{x} \\).\n\nFind any stationary points, and determine their nature.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((\\ln 2,\\; 2\\ln 2-2)\\), local maximum",
      "\\((\\ln 2,\\; 2\\ln 2-2)\\), local minimum",
      "\\((0,-1)\\), local maximum",
      "\\((\\ln 2,\\; 0)\\), point of inflection"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q7a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (2-x)e^{x} \\).\n\nDifferentiate \\(y=(2-x)e^{x}\\) using the product rule. What is \\(y'\\)?",
    "hint": "Product rule with \\(u=2-x\\), \\(v=e^{x}\\).",
    "solution": "\\(u'=-1\\), \\(v'=e^{x}\\). \\(y'=-e^{x}+(2-x)e^{x}=(1-x)e^{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Write as a product: \\(u=2-x\\), \\(v=e^{x}\\). Then \\(u'=-1\\) and \\(v'=e^{x}\\).",
        "workingOut": "\\(u=2-x,\\; v=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y'=u'v+uv'=(-1)e^{x}+(2-x)e^{x}\\).",
        "workingOut": "\\(y'=-e^{x}+(2-x)e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor \\(e^{x}\\): \\(y'=e^{x}(-1+2-x)=(1-x)e^{x}\\).",
        "workingOut": "\\(y'=(1-x)e^{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=(1-x)e^{x}\\)",
      "\\(y'=(2-x)e^{x}\\)",
      "\\(y'=-e^{x}\\)",
      "\\(y'=(x-1)e^{x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q7b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (2-x)e^{x} \\).\n\nFind the equation of the tangent at \\(x=0\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=x+2\\)",
      "\\(y=2x+2\\)",
      "\\(y=x-2\\)",
      "\\(y=-x+2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q7c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (2-x)e^{x} \\).\n\nHence find the x-intercept of this tangent.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-2\\)",
      "\\(2\\)",
      "\\(0\\)",
      "\\(-1\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q8a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (x+2)e^{-x} \\).\n\nWhat is the equation of the tangent to \\(y=(x+2)e^{-x}\\) at \\(x=0\\)?",
    "hint": "Find \\(y'\\) by the product rule, evaluate at \\(x=0\\), then use point–gradient form.",
    "solution": "\\(y'=-(x+1)e^{-x}\\). At \\(x=0\\): point \\((0,2)\\), \\(m=-1\\). Tangent: \\(y=-x+2\\).",
    "solutionSteps": [
      {
        "explanation": "Product rule with \\(u=x+2\\), \\(v=e^{-x}\\): \\(u'=1\\), \\(v'=-e^{-x}\\).",
        "workingOut": "\\(u'=1,\\; v'=-e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y'=e^{-x}+(x+2)(-e^{-x})=-(x+1)e^{-x}\\).",
        "workingOut": "\\(y'=-(x+1)e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=0\\): \\(y=2\\), \\(m=-1\\). Point–gradient: \\(y-2=-x\\Rightarrow y=-x+2\\).",
        "workingOut": "\\(y=-x+2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=-x+2\\)",
      "\\(y=x+2\\)",
      "\\(y=-x-2\\)",
      "\\(y=-2x+2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q8b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (x+2)e^{-x} \\).\n\nFind the x-intercept and y-intercept of this tangent.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x\\text{-int }=2,\\; y\\text{-int }=2\\)",
      "\\(x\\text{-int }=-2,\\; y\\text{-int }=2\\)",
      "\\(x\\text{-int }=2,\\; y\\text{-int }=-2\\)",
      "\\(x\\text{-int }=1,\\; y\\text{-int }=2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q8c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = (x+2)e^{-x} \\).\n\nFind the area of the triangle formed by these intercepts and the origin.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q9a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{2x-4} \\).\n\nFind the first and second derivatives of the function.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=2e^{2x-4},\\; y''=4e^{2x-4}\\)",
      "\\(y'=e^{2x-4},\\; y''=2e^{2x-4}\\)",
      "\\(y'=2e^{2x-4},\\; y''=2e^{2x-4}\\)",
      "\\(y'=-2e^{2x-4},\\; y''=4e^{2x-4}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q9b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{2x-4} \\).\n\nFor \\(y=e^{2x-4}\\), which statement is correct?",
    "hint": "Use the signs of \\(y'=2e^{2x-4}\\) and \\(y''=4e^{2x-4}\\).",
    "solution": "Since \\(e^{2x-4}>0\\) always: \\(y'>0\\) and \\(y''>0\\) always.",
    "solutionSteps": [
      {
        "explanation": "From part (a): \\(y'=2e^{2x-4}\\) and \\(y''=4e^{2x-4}\\).",
        "workingOut": "\\(y'=2e^{2x-4},\\; y''=4e^{2x-4}\\)",
        "graphData": null
      },
      {
        "explanation": "The exponential \\(e^{2x-4}\\) is positive for every real \\(x\\).",
        "workingOut": "\\(e^{2x-4}>0\\)",
        "graphData": null
      },
      {
        "explanation": "Hence \\(y'>0\\) always (every tangent slopes up) and \\(y''>0\\) always (always concave up).",
        "workingOut": "\\(y'>0,\\; y''>0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Every tangent has positive gradient, and the curve is always concave up",
      "Every tangent has negative gradient, and the curve is always concave down",
      "Tangents can have either sign, but the curve is always concave up",
      "Every tangent has positive gradient, but concavity changes"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q9c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{2x-4} \\).\n\nFind the coordinates of the point on the curve where the gradient is 2.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((1,e^{-2})\\)",
      "\\((2,1)\\)",
      "\\((0,e^{-4})\\)",
      "\\((2,e)\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q9d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{2x-4} \\).\n\nFind the gradients of the tangent and normal at the y-intercept.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(m_t=2e^{-4},\\; m_n=-\\dfrac{e^{4}}{2}\\)",
      "\\(m_t=2,\\; m_n=-\\dfrac{1}{2}\\)",
      "\\(m_t=e^{-4},\\; m_n=-e^{4}\\)",
      "\\(m_t=2e^{-4},\\; m_n=\\dfrac{e^{4}}{2}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q10a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{-x^{2}} \\).\n\nFind the derivative \\(\\dfrac{dy}{dx}\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(-2x e^{-x^{2}}\\)",
      "\\(2x e^{-x^{2}}\\)",
      "\\(-e^{-x^{2}}\\)",
      "\\(-2e^{-x^{2}}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q10b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{-x^{2}} \\).\n\nFind the equation of the normal to the curve at the point where \\(x=1\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(ex - 2y - e + 2e^{-1} = 0\\)",
      "\\(ex + 2y - e + 2e^{-1} = 0\\)",
      "\\(y - e^{-1} = -2e^{-1}(x - 1)\\)",
      "\\(2ex - y - 2e + e^{-1} = 0\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q10c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = e^{-x^{2}} \\).\n\nDetermine the x-intercept of this normal.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(1-2e^{-2}\\)",
      "\\(1+2e^{-2}\\)",
      "\\(e-2e^{-1}\\)",
      "\\(1-2e^{-1}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q11a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = 2-2e^{-x} \\).\n\nWhat is the equation of the tangent to \\(y=2-2e^{-x}\\) at the origin?",
    "hint": "Find \\(y'(0)\\), then use point–gradient through \\((0,0)\\).",
    "solution": "\\(y'=2e^{-x}\\). At origin \\(m=2\\). Tangent: \\(y=2x\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate: \\(y'=2e^{-x}\\) (chain rule on the second term).",
        "workingOut": "\\(y'=2e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "At the origin \\((0,0)\\): \\(m=2e^{0}=2\\).",
        "workingOut": "\\(m=2\\)",
        "graphData": null
      },
      {
        "explanation": "Point–gradient through the origin: \\(y=2x\\).",
        "workingOut": "\\(y=2x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=2x\\)",
      "\\(y=x\\)",
      "\\(y=-2x\\)",
      "\\(y=2x+2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q11b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = 2-2e^{-x} \\).\n\nDeduce the equation of the normal at the origin without further use of calculus.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=-2x\\)",
      "\\(y=-\\dfrac{1}{2}x\\)",
      "\\(y=\\dfrac{1}{2}x\\)",
      "\\(y=-x\\)"
    ],
    "a": 1,
    "answer": "1"
  },
  {
    "id": "y12a-5c-q11c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = 2-2e^{-x} \\).\n\nWhat is the equation of the horizontal asymptote of this curve?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=0\\)",
      "\\(y=1\\)",
      "\\(y=2\\)",
      "\\(x=2\\)"
    ],
    "a": 2,
    "answer": "2"
  },
  {
    "id": "y12a-5c-q11d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = 2-2e^{-x} \\).\n\nThe tangent and normal at the origin meet the horizontal asymptote \\(y=2\\) at points \\(T\\) and \\(N\\). What are these points?",
    "hint": "Solve \\(y=2x\\) and \\(y=-\\dfrac{1}{2}x\\) with \\(y=2\\).",
    "solution": "Tangent: \\(2=2x\\Rightarrow T(1,2)\\). Normal: \\(2=-\\dfrac{1}{2}x\\Rightarrow N(-4,2)\\).",
    "solutionSteps": [
      {
        "explanation": "Horizontal asymptote is \\(y=2\\). Tangent is \\(y=2x\\). Intersect: \\(2=2x\\Rightarrow x=1\\). So \\(T(1,2)\\).",
        "workingOut": "\\(T(1,2)\\)",
        "graphData": null
      },
      {
        "explanation": "Normal is \\(y=-\\dfrac{1}{2}x\\). Intersect: \\(2=-\\dfrac{1}{2}x\\Rightarrow x=-4\\). So \\(N(-4,2)\\).",
        "workingOut": "\\(N(-4,2)\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch: curve through origin rising toward \\(y=2\\); mark tangent through \\(T\\) and normal through \\(N\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(T(1,2)\\) and \\(N(-4,2)\\)",
      "\\(T(2,2)\\) and \\(N(-2,2)\\)",
      "\\(T(1,2)\\) and \\(N(4,2)\\)",
      "\\(T(-1,2)\\) and \\(N(4,2)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q12a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "The tangent to \\(y=e^{x}\\) at \\(T(t,e^{t})\\) has gradient equal to",
    "hint": "Differentiate \\(y=e^{x}\\) and evaluate at \\(x=t\\).",
    "solution": "\\(y'=e^{x}\\). At \\(x=t\\), gradient \\(=e^{t}\\).",
    "solutionSteps": [
      {
        "explanation": "The derivative of \\(y=e^{x}\\) is \\(y'=e^{x}\\).",
        "workingOut": "\\(y'=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "At the point of contact \\(x=t\\), the gradient is \\(m=e^{t}\\).",
        "workingOut": "\\(m=e^{t}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(e^{t}\\)",
      "\\(t\\)",
      "\\(e^{-t}\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q12b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "The equation of the tangent at \\(x=t\\) and its x-intercept are",
    "hint": "Point–gradient form, then set \\(y=0\\).",
    "solution": "\\(y-e^{t}=e^{t}(x-t)\\Rightarrow y=e^{t}(x-t+1)\\). X-intercept: \\(x=t-1\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient at \\((t,e^{t})\\) with slope \\(e^{t}\\): \\(y-e^{t}=e^{t}(x-t)\\).",
        "workingOut": "\\(y-e^{t}=e^{t}(x-t)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange: \\(y=e^{t}x-te^{t}+e^{t}=e^{t}(x-t+1)\\).",
        "workingOut": "\\(y=e^{t}(x-t+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(y=0\\): \\(e^{t}(x-t+1)=0\\Rightarrow x=t-1\\) (since \\(e^{t}\\neq 0\\)).",
        "workingOut": "\\(x=t-1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y=e^{t}(x-t+1)\\), x-intercept \\(t-1\\)",
      "\\(y=e^{t}(x-t)\\), x-intercept \\(t\\)",
      "\\(y=e^{t}x\\), x-intercept \\(0\\)",
      "\\(y=e^{t}(x+t-1)\\), x-intercept \\(1-t\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q12c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Geometrically, what does the result of part (b) mean for any tangent to \\(y=e^{x}\\)?",
    "hint": "Compare the contact x-coordinate \\(t\\) with the intercept \\(t-1\\).",
    "solution": "Contact at \\(x=t\\), intercept at \\(x=t-1\\): always 1 unit to the left.",
    "solutionSteps": [
      {
        "explanation": "The point of contact has x-coordinate \\(t\\); the tangent meets the x-axis at \\(t-1\\).",
        "workingOut": "\\(t\\text{ vs }t-1\\)",
        "graphData": null
      },
      {
        "explanation": "So every tangent crosses the x-axis exactly one unit to the left of its point of contact.",
        "workingOut": "\\(\\text{1 unit left}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "It meets the x-axis exactly 1 unit to the left of the point of contact",
      "It meets the x-axis exactly 1 unit to the right of the point of contact",
      "It always passes through the origin",
      "It is always horizontal"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q13a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{x} \\) and its normal line at \\( x = t \\).\n\nFind the equation of the normal to \\(y=e^{x}\\) at \\(x=t\\).",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y - e^{t} = -e^{-t}(x - t)\\)",
      "\\(y - e^{t} = e^{t}(x - t)\\)",
      "\\(y - e^{t} = -e^{t}(x - t)\\)",
      "\\(y - e^{t} = e^{-t}(x - t)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q13b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{x} \\) and its normal line at \\( x = t \\).\n\nIf this normal line passes through the origin \\((0,0)\\), which equation must be satisfied by \\(t\\)?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(t + e^{2t} = 0\\)",
      "\\(t - e^{2t} = 0\\)",
      "\\(t + e^{t} = 0\\)",
      "\\(1 + e^{2t} = 0\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q13c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 200,
    "question": "Consider the curve \\( y = e^{x} \\) and its normal line at \\( x = t \\).\n\nWhy is there exactly one value of \\(t\\) for which the normal passes through the origin?",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(g(t)=t+e^{2t}\\) is strictly increasing and ranges from \\(-\\infty\\) to \\(\\infty\\), so it has exactly one root",
      "\\(g(t)=t+e^{2t}\\) is always positive, so it has no roots",
      "\\(g(t)=t+e^{2t}\\) is a quadratic with two real roots",
      "\\(g(t)=t+e^{2t}\\) is periodic, so it has infinitely many roots"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q14a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the curve \\( y = x e^{2x} \\).\n\nFor \\(y=x e^{2x}\\), where is the function zero, positive, and negative?",
    "hint": "Factor: sign of \\(y\\) matches sign of \\(x\\) because \\(e^{2x}>0\\).",
    "solution": "\\(e^{2x}>0\\) always, so sign\\((y)\\)=sign\\((x)\\). Zero only at \\(x=0\\).",
    "solutionSteps": [
      {
        "explanation": "Write \\(y=x\\cdot e^{2x}\\). The factor \\(e^{2x}\\) is positive for every real \\(x\\).",
        "workingOut": "\\(e^{2x}>0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the sign of \\(y\\) is the same as the sign of \\(x\\): zero only at \\(x=0\\), positive for \\(x>0\\), negative for \\(x<0\\).",
        "workingOut": "\\(sign(y)=sign(x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Zero at \\(x=0\\); positive for \\(x>0\\); negative for \\(x<0\\)",
      "Zero at \\(x=0\\); positive for \\(x<0\\); negative for \\(x>0\\)",
      "Never zero; always positive",
      "Zero at \\(x=1\\); positive for \\(x>1\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q14b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the curve \\( y = x e^{2x} \\).\n\nFind the first and second derivatives.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=(2x+1)e^{2x},\\; y''=(4x+4)e^{2x}\\)",
      "\\(y'=(2x-1)e^{2x},\\; y''=(4x-4)e^{2x}\\)",
      "\\(y'=2x e^{2x},\\; y''=4x e^{2x}\\)",
      "\\(y'=(x+1)e^{2x},\\; y''=(x+2)e^{2x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q14c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the curve \\( y = x e^{2x} \\).\n\nShow that there is one stationary point, and determine its nature.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\), local minimum",
      "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\), local maximum",
      "\\((0,0)\\), local minimum",
      "\\((-1,-e^{-2})\\), local minimum"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q14d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Consider the curve \\( y = x e^{2x} \\).\n\nFind the coordinates of the point of inflection.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((-1,-e^{-2})\\)",
      "\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\)",
      "\\((0,0)\\)",
      "\\((1,e^{2})\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q15a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "For \\(y=e^{-\\frac{1}{2}x^{2}}\\), which statement is correct?",
    "hint": "Check \\(f(-x)\\). Exponential is always positive.",
    "solution": "\\(f(-x)=f(x)\\) (even). Exponential > 0 always.",
    "solutionSteps": [
      {
        "explanation": "Compute \\(f(-x)=e^{-\\frac{1}{2}(-x)^{2}}=e^{-\\frac{1}{2}x^{2}}=f(x)\\). So the function is even.",
        "workingOut": "\\(f(-x)=f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "The exponential is always positive, so \\(y>0\\) for all real \\(x\\). It is never zero or negative.",
        "workingOut": "\\(y>0\\;\\forall x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Even function; always positive (never zero or negative)",
      "Odd function; always positive",
      "Even function; zero at \\(x=0\\)",
      "Odd function; can be negative"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q15b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Which pair correctly gives the first and second derivatives of \\(y=e^{-\\frac{1}{2}x^{2}}\\)?",
    "hint": "Chain rule for \\(y'\\); product rule for \\(y''\\).",
    "solution": "Chain: \\(y'=-x e^{-\\frac{1}{2}x^{2}}\\). Product: \\(y''=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Chain rule with \\(u=-\\dfrac{1}{2}x^{2}\\): \\(u'=-x\\). So \\(y'=e^{u}u'=-x e^{-\\frac{1}{2}x^{2}}\\).",
        "workingOut": "\\(y'=-x e^{-\\frac{1}{2}x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule on \\(-x\\cdot e^{-\\frac{1}{2}x^{2}}\\):",
        "workingOut": "\\(y''=-e^{-\\frac{1}{2}x^{2}}+x^{2}e^{-\\frac{1}{2}x^{2}}=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=-x e^{-\\frac{1}{2}x^{2}},\\; y''=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\)",
      "\\(y'=x e^{-\\frac{1}{2}x^{2}},\\; y''=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\)",
      "\\(y'=-x e^{-\\frac{1}{2}x^{2}},\\; y''=(1-x^{2})e^{-\\frac{1}{2}x^{2}}\\)",
      "\\(y'=-2x e^{-\\frac{1}{2}x^{2}},\\; y''=(x^{2}-1)e^{-\\frac{1}{2}x^{2}}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q15c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "The curve has a maximum turning point at its y-intercept. That point is",
    "hint": "Solve \\(y'=0\\); check \\(y''\\).",
    "solution": "\\(y'=0\\Rightarrow x=0\\), \\(y=1\\). \\(y''(0)=-1<0\\): maximum at \\((0,1)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y'=0\\): \\(-x e^{-\\frac{1}{2}x^{2}}=0\\Rightarrow x=0\\).",
        "workingOut": "\\(x=0\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y=e^{0}=1\\). The y-intercept is \\((0,1)\\).",
        "workingOut": "\\((0,1)\\)",
        "graphData": null
      },
      {
        "explanation": "Second derivative test: \\(y''(0)=(0-1)e^{0}=-1<0\\), confirming a local maximum.",
        "workingOut": "\\(\\text{local maximum}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((0,1)\\)",
      "\\((0,0)\\)",
      "\\((1,e^{-1/2})\\)",
      "\\((-1,e^{-1/2})\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q15d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Find the two points of inflection.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\((-1,e^{-1/2})\\) and \\((1,e^{-1/2})\\)",
      "\\((-1,e^{-1})\\) and \\((1,e^{-1})\\)",
      "\\((0,1)\\) only",
      "\\((-2,e^{-2})\\) and \\((2,e^{-2})\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q16a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "For \\(y=(1-x)e^{x}\\), which description of the zero and sign table is correct?",
    "hint": "Solve \\((1-x)e^{x}=0\\). Sign follows \\((1-x)\\) since \\(e^{x}>0\\).",
    "solution": "Zero at \\(x=1\\). Sign of \\(y\\) matches sign of \\((1-x)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y=0\\): \\((1-x)e^{x}=0\\Rightarrow x=1\\) (because \\(e^{x}\\neq 0\\)).",
        "workingOut": "\\(x=1\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(e^{x}>0\\) always, sign\\((y)\\)=sign\\((1-x)\\): positive for \\(x<1\\), negative for \\(x>1\\).",
        "workingOut": "\\(y>0\\ (x<1);\\ y<0\\ (x>1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Zero at \\(x=1\\); positive for \\(x<1\\); negative for \\(x>1\\)",
      "Zero at \\(x=0\\); positive for \\(x>0\\); negative for \\(x<0\\)",
      "Zero at \\(x=1\\); positive for \\(x>1\\); negative for \\(x<1\\)",
      "Never zero; always positive"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q16b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Which pair correctly gives the derivatives of \\(y=(1-x)e^{x}\\)?",
    "hint": "Product rule twice with \\(u=1-x\\), \\(v=e^{x}\\).",
    "solution": "\\(y'=-e^{x}+(1-x)e^{x}=-x e^{x}\\); \\(y''=-e^{x}-x e^{x}=-(x+1)e^{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Product rule: \\(u=1-x\\), \\(v=e^{x}\\). Then \\(y'=-e^{x}+(1-x)e^{x}=-x e^{x}\\).",
        "workingOut": "\\(y'=-x e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again: \\(y''=-e^{x}-x e^{x}=-(x+1)e^{x}\\).",
        "workingOut": "\\(y''=-(x+1)e^{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=-x e^{x},\\; y''=-(x+1)e^{x}\\)",
      "\\(y'=x e^{x},\\; y''=(x+1)e^{x}\\)",
      "\\(y'=-x e^{x},\\; y''=-(x-1)e^{x}\\)",
      "\\(y'=(1-x)e^{x},\\; y''=-e^{x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q16c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "The curve has a maximum at its y-intercept and an inflection point at",
    "hint": "Solve \\(y'=0\\) and \\(y''=0\\); use the second derivative test.",
    "solution": "\\(y'=0\\Rightarrow x=0\\), \\(y=1\\), max. \\(y''=0\\Rightarrow x=-1\\), \\(y=2e^{-1}\\).",
    "solutionSteps": [
      {
        "explanation": "Stationary: \\(y'=0\\Rightarrow x=0\\), \\(y=1\\). And \\(y''(0)=-1<0\\) ⇒ local max at y-intercept \\((0,1)\\).",
        "workingOut": "\\((0,1)\\text{ max}\\)",
        "graphData": null
      },
      {
        "explanation": "Inflection: \\(y''=0\\Rightarrow x=-1\\), \\(y=(1-(-1))e^{-1}=2e^{-1}\\).",
        "workingOut": "\\((-1,2e^{-1})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Max \\((0,1)\\); inflection \\((-1,2e^{-1})\\)",
      "Max \\((0,1)\\); inflection \\((1,0)\\)",
      "Max \\((-1,2e^{-1})\\); inflection \\((0,1)\\)",
      "Max \\((1,0)\\); inflection \\((0,1)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q16d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 220,
    "question": "Sketch the curve and state its range.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y\\leq 1\\)",
      "\\(y\\geq 1\\)",
      "\\(y\\geq 0\\)",
      "\\(y\\in\\mathbb{R}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q17a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 220,
    "question": "The hyperbolic cosine is defined by\n\\( \\displaystyle \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\).\nConsider the curve \\( y = \\cosh x \\).\n\nUsing the definition \\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}\\), which statement is correct?",
    "hint": "Compute \\(\\cosh(-x)\\) from the definition, and note that both exponentials are positive.",
    "solution": "\\(\\cosh(-x)=\\dfrac{e^{-x}+e^{x}}{2}=\\cosh x\\) (even). Since \\(e^{x}>0\\) and \\(e^{-x}>0\\), their average is always positive.",
    "solutionSteps": [
      {
        "explanation": "By definition, \\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}\\). This is the average of two exponential curves.",
        "workingOut": "\\(\\cosh x = \\dfrac{e^{x}+e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Replace \\(x\\) by \\(-x\\): \\(\\cosh(-x)=\\dfrac{e^{-x}+e^{-(-x)}}{2}=\\dfrac{e^{-x}+e^{x}}{2}=\\cosh x\\). So the function is even (mirror symmetry in the y-axis).",
        "workingOut": "\\(\\cosh(-x)=\\cosh x\\)",
        "graphData": null
      },
      {
        "explanation": "For every real number \\(x\\), both \\(e^{x}>0\\) and \\(e^{-x}>0\\). Therefore their sum is positive and so is their average: \\(\\cosh x > 0\\) for all \\(x\\).",
        "workingOut": "\\(\\cosh x > 0\\;\\forall x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(\\cosh x\\) is even (\\(f(-x)=f(x)\\)) and always positive",
      "\\(\\cosh x\\) is odd (\\(f(-x)=-f(x)\\)) and always positive",
      "\\(\\cosh x\\) is even and can be negative",
      "\\(\\cosh x\\) is odd and can be negative"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q17b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 220,
    "question": "The hyperbolic cosine is defined by\n\\( \\displaystyle \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\).\nConsider the curve \\( y = \\cosh x \\).\n\nUsing \\(y=\\dfrac{e^{x}+e^{-x}}{2}\\), find \\(\\dfrac{dy}{dx}\\) and the stationary point at the y-intercept.",
    "hint": "Differentiate each exponential term separately. Set the derivative equal to zero.",
    "solution": "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\). Set \\(y'=0\\): \\(e^{x}=e^{-x}\\Rightarrow x=0\\), and \\(y=1\\). Stationary point \\((0,1)\\). (This derivative is also written \\(\\sinh x\\).)",
    "solutionSteps": [
      {
        "explanation": "Start from the definition (not a memorised name): \\(y=\\dfrac{e^{x}+e^{-x}}{2}\\). Differentiate term by term.",
        "workingOut": "\\(y=\\dfrac{e^{x}+e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\dfrac{d}{dx}\\!\\left(\\dfrac{e^{x}}{2}\\right)=\\dfrac{e^{x}}{2}\\) and \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{e^{-x}}{2}\\right)=\\dfrac{1}{2}\\cdot(-e^{-x})=-\\dfrac{e^{-x}}{2}\\).",
        "workingOut": "\\(y'=\\dfrac{e^{x}}{2}-\\dfrac{e^{-x}}{2}=\\dfrac{e^{x}-e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "This expression is sometimes called \\(\\sinh x\\) (hyperbolic sine), but you only need the exponential form for the exam work here.",
        "workingOut": "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary points: set \\(y'=0\\). Then \\(e^{x}-e^{-x}=0\\Rightarrow e^{x}=e^{-x}\\). Multiply both sides by \\(e^{x}\\): \\(e^{2x}=1\\Rightarrow x=0\\).",
        "workingOut": "\\(x=0\\)",
        "graphData": null
      },
      {
        "explanation": "When \\(x=0\\): \\(y=\\dfrac{e^{0}+e^{0}}{2}=\\dfrac{1+1}{2}=1\\). So the only stationary point is the y-intercept \\((0,1)\\).",
        "workingOut": "\\((0,1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\); stationary point \\((0,1)\\)",
      "\\(y'=\\dfrac{e^{x}+e^{-x}}{2}\\); stationary point \\((0,1)\\)",
      "\\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\); stationary point \\((1,0)\\)",
      "\\(y'=e^{x}-e^{-x}\\); stationary point \\((0,1)\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q17c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 220,
    "question": "The hyperbolic cosine is defined by\n\\( \\displaystyle \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\).\nConsider the curve \\( y = \\cosh x \\).\n\nWhich statement correctly describes the concavity of \\(y=\\dfrac{e^{x}+e^{-x}}{2}\\)?",
    "hint": "Differentiate the first derivative again. Compare with the original function.",
    "solution": "\\(y''=\\dfrac{e^{x}+e^{-x}}{2}\\), which is exactly the original function and is always positive. Always concave up.",
    "solutionSteps": [
      {
        "explanation": "From part (b), \\(y'=\\dfrac{e^{x}-e^{-x}}{2}\\). Differentiate again term by term.",
        "workingOut": "\\(y''=\\dfrac{e^{x}}{2}-\\left(-\\dfrac{e^{-x}}{2}\\right)=\\dfrac{e^{x}+e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Notice that \\(y''\\) is exactly the same expression as \\(y\\) itself (the definition of \\(\\cosh x\\)).",
        "workingOut": "\\(y''=y=\\dfrac{e^{x}+e^{-x}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "We already know from part (a) that this is always positive. Therefore \\(y''>0\\) for all \\(x\\): the curve is always concave up.",
        "workingOut": "\\(y''>0\\;\\forall x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y''=\\dfrac{e^{x}+e^{-x}}{2}>0\\) for all \\(x\\), so always concave up",
      "\\(y''=\\dfrac{e^{x}-e^{-x}}{2}\\) changes sign, so concavity changes",
      "\\(y''=-\\dfrac{e^{x}+e^{-x}}{2}<0\\) for all \\(x\\), so always concave down",
      "\\(y''=0\\) for all \\(x\\), so the curve is a straight line"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q17d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 220,
    "question": "The hyperbolic cosine is defined by\n\\( \\displaystyle \\cosh x = \\dfrac{e^{x} + e^{-x}}{2} \\).\nConsider the curve \\( y = \\cosh x \\).\n\nWhich description matches the sketch of \\(y=\\dfrac{e^{x}+e^{-x}}{2}\\)?",
    "hint": "Even, minimum at the y-intercept, always concave up.",
    "solution": "Even symmetry, absolute minimum at \\((0,1)\\), always concave up: a U-shaped “catenary” with range \\(y\\geq 1\\).",
    "solutionSteps": [
      {
        "explanation": "Summary so far: the graph is even (mirror in the y-axis), has an absolute minimum at the y-intercept \\((0,1)\\), and is always concave up. Hence the range is \\(y\\geq 1\\).",
        "workingOut": "\\(y\\geq 1,\\;\\text{min at }(0,1)\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch: a U-shaped curve through \\((0,1)\\), symmetric about the y-axis, rising steeply for large \\(|x|\\). (This shape is called a catenary — the shape of a hanging cable. The name \\(\\cosh\\) is short for “hyperbolic cosine”.)",
        "workingOut": "\\(y=\\dfrac{e^{x}+e^{-x}}{2}\\)",
        "graphData": {
          "jsxGraph": {
            "boundingbox": [
              -2.6,
              3.8,
              2.6,
              -0.25
            ],
            "width": 360,
            "height": 170,
            "axis": false,
            "showCopyright": false,
            "showNavigation": false,
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.6,0],[2.6,0]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('arrow', [[0,-0.2],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.4});\nboard.create('text', [2.45,-0.18], 'x', {fontSize:12, color:'#64748b'});\nboard.create('text', [-0.28,3.85], 'y', {fontSize:12, color:'#64748b'});\nboard.create('functiongraph', [function(x){return 0.5*(Math.exp(x)+Math.exp(-x));}, -2.5, 2.5], {strokeColor:'#6366f1', strokeWidth:2.4});\nboard.create('point', [0,1], {name:'(0,1)', size:3.5, fillColor:'#f43f5e', strokeColor:'#f43f5e', label:{offset:[8,6]}});\nboard.create('text', [1.1, 2.0], 'y=cosh x', {fontSize:11, color:'#6366f1'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Symmetric U-shape with minimum at \\((0,1)\\), range \\(y\\geq 1\\)",
      "S-shape through the origin, range all real \\(y\\)",
      "Bell curve with maximum at \\((0,1)\\), range \\(0<y\\leq 1\\)",
      "Straight line through \\((0,1)\\) with gradient 1"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q18a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the curve \\( y = x^{2} e^{-x} \\).\n\nWhich pair correctly gives the derivatives of \\(y=x^{2}e^{-x}\\)?",
    "hint": "Product rule twice; factor carefully.",
    "solution": "\\(y'=(2x-x^{2})e^{-x}=x(2-x)e^{-x}\\); \\(y''=(x^{2}-4x+2)e^{-x}\\).",
    "solutionSteps": [
      {
        "explanation": "Product rule with \\(u=x^{2}\\), \\(v=e^{-x}\\): \\(y'=2xe^{-x}-x^{2}e^{-x}=x(2-x)e^{-x}\\).",
        "workingOut": "\\(y'=x(2-x)e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again (product of \\((2x-x^{2})\\) and \\(e^{-x}\\)):",
        "workingOut": "\\(y''=(2-2x)e^{-x}-(2x-x^{2})e^{-x}=(x^{2}-4x+2)e^{-x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y'=x(2-x)e^{-x},\\; y''=(x^{2}-4x+2)e^{-x}\\)",
      "\\(y'=x(2+x)e^{-x},\\; y''=(x^{2}+4x+2)e^{-x}\\)",
      "\\(y'=(2-x)e^{-x},\\; y''=(x^{2}-4x+2)e^{-x}\\)",
      "\\(y'=x(2-x)e^{-x},\\; y''=(2-4x)e^{-x}\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q18b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the curve \\( y = x^{2} e^{-x} \\).\n\nThe turning points of \\(y=x^{2}e^{-x}\\) are",
    "hint": "Solve \\(y'=0\\); use the second derivative test at each critical point.",
    "solution": "\\(y'=0\\) at \\(x=0,2\\). \\(y''(0)>0\\) min; \\(y''(2)<0\\) max at \\((2,4e^{-2})\\).",
    "solutionSteps": [
      {
        "explanation": "From \\(y'=x(2-x)e^{-x}=0\\): \\(x=0\\) or \\(x=2\\) (since \\(e^{-x}\\neq 0\\)).",
        "workingOut": "\\(x=0\\text{ or }2\\)",
        "graphData": null
      },
      {
        "explanation": "At \\((0,0)\\): \\(y''(0)=2>0\\) ⇒ local minimum.",
        "workingOut": "\\(\\text{min at origin}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=2\\): \\(y=4e^{-2}\\). \\(y''(2)=-2e^{-2}<0\\) ⇒ local maximum at \\((2,4e^{-2})\\).",
        "workingOut": "\\(\\text{max at }(2,4e^{-2})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "Local minimum at \\((0,0)\\) and local maximum at \\((2,4e^{-2})\\)",
      "Local maximum at \\((0,0)\\) and local minimum at \\((2,4e^{-2})\\)",
      "Local minimum at \\((0,0)\\) only",
      "Local maximum at \\((2,4e^{-2})\\) only"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q18c",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the curve \\( y = x^{2} e^{-x} \\).\n\nThe points of inflection occur where \\(y''=0\\). These x-values are",
    "hint": "Solve \\(x^{2}-4x+2=0\\) using the quadratic formula.",
    "solution": "\\(x^{2}-4x+2=0\\Rightarrow x=\\dfrac{4\\pm\\sqrt{8}}{2}=2\\pm\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y''=0\\): \\((x^{2}-4x+2)e^{-x}=0\\Rightarrow x^{2}-4x+2=0\\).",
        "workingOut": "\\(x^{2}-4x+2=0\\)",
        "graphData": null
      },
      {
        "explanation": "Quadratic formula: \\(x=\\dfrac{4\\pm\\sqrt{16-8}}{2}=\\dfrac{4\\pm\\sqrt{8}}{2}=2\\pm\\sqrt{2}\\).",
        "workingOut": "\\(x=2\\pm\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "These are simple roots, so \\(y''\\) changes sign at each: both are points of inflection.",
        "workingOut": "\\(\\text{inflection points}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(x=2\\pm\\sqrt{2}\\)",
      "\\(x=2\\pm 2\\)",
      "\\(x=\\pm\\sqrt{2}\\)",
      "\\(x=0\\) and \\(x=2\\)"
    ],
    "a": 0,
    "answer": "0"
  },
  {
    "id": "y12a-5c-q18d",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Consider the curve \\( y = x^{2} e^{-x} \\).\n\nSketch the curve and state its range.",
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
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(y\\geq 0\\)",
      "\\(y\\leq 0\\)",
      "\\(y\\geq 4e^{-2}\\)",
      "\\(y\\in\\mathbb{R}\\)"
    ],
    "a": 0,
    "answer": "0"
  }
];
