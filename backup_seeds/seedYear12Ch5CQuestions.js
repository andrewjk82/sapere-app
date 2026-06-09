export const Y12A_CH5C_QUESTIONS = [
  {
    "id": "y12a-5c-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\( y = e^{2x-2} \\):\na) Find the y-coordinate of the point \\( A \\) on the curve where \\( x = 1 \\).\nb) Find the derivative of \\( y = e^{2x-2} \\), and show that the gradient of the tangent at \\( A \\) is 2.\nc) Find the equation of the tangent at \\( A \\), and show that it passes through \\( (0, -1) \\).",
    "a": "a) y = 1\nb) dy/dx = 2e^(2x-2), gradient at A = 2\nc) y = 2x - 1, passes through (0, -1)",
    "solution": "a) Substitute \\( x = 1 \\) into \\( y = e^{2x-2} \\):\n\\( y = e^{2(1)-2} = e^0 = 1 \\). So point \\( A \\) is \\( (1, 1) \\).\n\nb) Differentiating using the chain rule:\n\\( \\frac{dy}{dx} = 2e^{2x-2} \\).\nAt \\( x = 1 \\), the gradient is:\n\\( m = 2e^{2(1)-2} = 2e^0 = 2 \\).\n\nc) The equation of the tangent at \\( A(1, 1) \\) with gradient \\( m = 2 \\) is:\n\\( y - 1 = 2(x - 1) \\implies y = 2x - 1 \\).\nTo check if it passes through \\( (0, -1) \\), substitute \\( x = 0 \\):\n\\( y = 2(0) - 1 = -1 \\). This is correct.",
    "solutionSteps": [
      {
        "explanation": "Find y-coordinate at x = 1",
        "workingOut": "y = e^{2(1)-2} = e^0 = 1"
      },
      {
        "explanation": "Differentiate the function",
        "workingOut": "\\frac{dy}{dx} = 2e^{2x-2}"
      },
      {
        "explanation": "Find gradient at A",
        "workingOut": "m = 2e^0 = 2"
      },
      {
        "explanation": "Formulate tangent equation",
        "workingOut": "y - 1 = 2(x - 1) \\implies y = 2x - 1"
      },
      {
        "explanation": "Verify passing through (0, -1)",
        "workingOut": "x=0 \\implies y = -1"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "First find the coordinates of point A, then differentiate the curve to find the tangent gradient.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\( y = e^{3x-3} \\):\na) Write down the coordinates of the point \\( R \\) on the curve where \\( x = 1 \\).\nb) Find \\( \\frac{dy}{dx} \\) and hence show that the gradient of the tangent at \\( R \\) is 3.\nc) What is the gradient of the normal at \\( R \\)?\nd) Hence find the equation of the normal at \\( R \\) in general form.",
    "a": "a) R(1, 1)\nb) dy/dx = 3e^(3x-3), gradient = 3\nc) -1/3\nd) x + 3y - 4 = 0",
    "solution": "a) At \\( x = 1 \\), \\( y = e^{3(1)-3} = e^0 = 1 \\). Coordinates are \\( R(1, 1) \\).\n\nb) Differentiating:\n\\( \\frac{dy}{dx} = 3e^{3x-3} \\).\nAt R \\( (x = 1) \\), the gradient of the tangent is \\( m_t = 3e^0 = 3 \\).\n\nc) The gradient of the normal is the negative reciprocal of the tangent gradient:\n\\( m_n = -\\frac{1}{m_t} = -\\frac{1}{3} \\).\n\nd) The equation of the normal at \\( R(1, 1) \\) is:\n\\( y - 1 = -\\frac{1}{3}(x - 1) \\implies 3(y - 1) = -(x - 1) \\implies 3y - 3 = -x + 1 \\implies x + 3y - 4 = 0 \\).",
    "solutionSteps": [
      {
        "explanation": "Find point R coordinates",
        "workingOut": "R(1, 1)"
      },
      {
        "explanation": "Find derivative and tangent gradient",
        "workingOut": "\\frac{dy}{dx} = 3e^{3x-3} \\implies m_t = 3"
      },
      {
        "explanation": "Find normal gradient",
        "workingOut": "m_n = -\\frac{1}{3}"
      },
      {
        "explanation": "Formulate normal equation in general form",
        "workingOut": "3(y-1) = -(x-1) \\implies x + 3y - 4 = 0"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "The normal is perpendicular to the tangent, so its gradient is -1/m.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\( y = e^{-x} \\) and point \\( P(0, 1) \\):\na) Find the gradient of the tangent to \\( y = e^{-x} \\) at the point \\( P \\).\nb) Write down the gradient of the normal at this point.\nc) Determine the equation of this normal.\nd) Find the x- and y-intercepts of the normal.\ne) Find the area of the triangle whose vertices lie at the intercepts and the origin.",
    "a": "a) -1\nb) 1\nc) y = x + 1\nd) x-intercept: -1, y-intercept: 1\ne) 0.5",
    "solution": "a) \\( \\frac{dy}{dx} = -e^{-x} \\). At \\( P(0, 1) \\), the gradient of the tangent is \\( m_t = -e^0 = -1 \\).\n\nb) The gradient of the normal is \\( m_n = -\\frac{1}{m_t} = -\\frac{1}{-1} = 1 \\).\n\nc) The equation of the normal at \\( (0, 1) \\) with gradient \\( 1 \\) is:\n\\( y - 1 = 1(x - 0) \\implies y = x + 1 \\).\n\nd) Intercepts:\n- y-intercept: let \\( x = 0 \\implies y = 1 \\), i.e., \\( (0, 1) \\).\n- x-intercept: let \\( y = 0 \\implies x = -1 \\), i.e., \\( (-1, 0) \\).\n\ne) The triangle vertices are \\( (0, 0) \\), \\( (0, 1) \\), and \\( (-1, 0) \\).\nThis is a right-angled triangle with base = 1 and height = 1.\n\\( \\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 1 \\times 1 = 0.5 \\).",
    "solutionSteps": [
      {
        "explanation": "Find tangent gradient",
        "workingOut": "\\frac{dy}{dx} = -e^{-x} \\implies m_t = -1"
      },
      {
        "explanation": "Find normal gradient",
        "workingOut": "m_n = 1"
      },
      {
        "explanation": "Formulate normal equation",
        "workingOut": "y = x + 1"
      },
      {
        "explanation": "Find intercepts",
        "workingOut": "x\\text{-intercept} = -1, \\; y\\text{-intercept} = 1"
      },
      {
        "explanation": "Calculate triangle area",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 1 \\times 1 = 0.5"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Find the normal equation first, then locate its intercepts on the x and y axes to find the base and height of the triangle.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the point \\( B(0, 2) \\):\na) Find the gradient of the tangent to \\( y = 2e^x \\) at \\( B \\).\nb) Find the equation of this tangent, showing it meets the x-axis at \\( F(-1, 0) \\).\nc) Find the gradient of the tangent to \\( y = 2e^{-x} \\) at \\( B \\).\nd) Find the equation of this tangent, showing it meets the x-axis at \\( G(1, 0) \\).\ne) What sort of triangle is \\( \\triangle BFG \\), and what is its area?",
    "a": "a) 2\nb) y = 2x + 2, meets x-axis at F(-1, 0)\nc) -2\nd) y = -2x + 2, meets x-axis at G(1, 0)\ne) Isosceles, area = 2",
    "solution": "a) \\( y = 2e^x \\implies y' = 2e^x \\). At \\( x = 0 \\), gradient \\( m_1 = 2e^0 = 2 \\).\n\nb) Tangent equation: \\( y - 2 = 2(x - 0) \\implies y = 2x + 2 \\).\nFor the x-intercept, let \\( y = 0 \\implies 2x + 2 = 0 \\implies x = -1 \\). This gives \\( F(-1, 0) \\).\n\nc) \\( y = 2e^{-x} \\implies y' = -2e^{-x} \\). At \\( x = 0 \\), gradient \\( m_2 = -2e^0 = -2 \\).\n\nd) Tangent equation: \\( y - 2 = -2(x - 0) \\implies y = -2x + 2 \\).\nFor the x-intercept, let \\( y = 0 \\implies -2x + 2 = 0 \\implies x = 1 \\). This gives \\( G(1, 0) \\).\n\ne) The vertices of \\( \\triangle BFG \\) are \\( B(0, 2) \\), \\( F(-1, 0) \\), and \\( G(1, 0) \\).\n- Lengths: \\( BF = \\sqrt{(0 - (-1))^2 + (2 - 0)^2} = \\sqrt{5} \\).\n\\( BG = \\sqrt{(0 - 1)^2 + (2 - 0)^2} = \\sqrt{5} \\).\nSince \\( BF = BG \\), \\( \\triangle BFG \\) is an isosceles triangle.\n- Area: base \\( FG \\) has length \\( 1 - (-1) = 2 \\). The height is the y-coordinate of \\( B \\), which is \\( 2 \\).\n\\( \\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 2 = 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Find first tangent gradient and equation",
        "workingOut": "y' = 2e^x \\implies m_1 = 2 \\implies y = 2x + 2"
      },
      {
        "explanation": "Determine intercept F",
        "workingOut": "y = 0 \\implies x = -1 \\implies F(-1, 0)"
      },
      {
        "explanation": "Find second tangent gradient and equation",
        "workingOut": "y' = -2e^{-x} \\implies m_2 = -2 \\implies y = -2x + 2"
      },
      {
        "explanation": "Determine intercept G",
        "workingOut": "y = 0 \\implies x = 1 \\implies G(1, 0)"
      },
      {
        "explanation": "Classify triangle and calculate area",
        "workingOut": "BF = BG = \\sqrt{5} \\implies \\text{Isosceles}. \\; \\text{Area} = \\frac{1}{2} \\times 2 \\times 2 = 2"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Find both tangent equations using point-slope form. The distance between intercepts F and G along the x-axis is the base.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q5",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\( y = 2x - e^x \\):\na) Find the gradient of the tangent to the curve at \\( x = 0 \\).\nb) Write down the equation of the tangent, and show that it passes through \\( (1, 0) \\).",
    "a": "a) 1\nb) y = x - 1, passes through (1, 0)",
    "solution": "a) Differentiating \\( y = 2x - e^x \\):\n\\( \\frac{dy}{dx} = 2 - e^x \\).\nAt \\( x = 0 \\), the gradient of the tangent is:\n\\( m = 2 - e^0 = 2 - 1 = 1 \\).\n\nb) At \\( x = 0 \\), the y-coordinate is:\n\\( y = 2(0) - e^0 = -1 \\). So the point is \\( (0, -1) \\).\nThe equation of the tangent is:\n\\( y - (-1) = 1(x - 0) \\implies y + 1 = x \\implies y = x - 1 \\).\nTo show it passes through \\( (1, 0) \\), substitute \\( x = 1 \\):\n\\( y = 1 - 1 = 0 \\), which is correct.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the function",
        "workingOut": "\\frac{dy}{dx} = 2 - e^x"
      },
      {
        "explanation": "Evaluate gradient at x = 0",
        "workingOut": "m = 2 - 1 = 1"
      },
      {
        "explanation": "Find point y-coordinate",
        "workingOut": "y(0) = -1"
      },
      {
        "explanation": "Determine tangent equation",
        "workingOut": "y - (-1) = 1(x - 0) \\implies y = x - 1"
      },
      {
        "explanation": "Verify point (1, 0)",
        "workingOut": "x=1 \\implies y = 0"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Differentiate the function to find gradient m, find the point of tangency (0, -1), then use y - y1 = m(x - x1).",
    "graphData": null
  },
  {
    "id": "y12a-5c-q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = 2x - e^x \\):\na) Find the first and second derivatives for the curve.\nb) Deduce that the curve is concave down for all values of \\( x \\).\nc) Find any stationary points, and determine their nature using the second derivative.",
    "a": "a) y' = 2 - e^x, y'' = -e^x\nb) y'' < 0 for all x\nc) (ln 2, 2 ln 2 - 2), local maximum",
    "solution": "a) Differentiating \\( y = 2x - e^x \\):\n\\( y' = 2 - e^x \\)\n\\( y'' = -e^x \\).\n\nb) Since \\( e^x > 0 \\) for all real \\( x \\), we have \\( y'' = -e^x < 0 \\) for all \\( x \\).\nBecause the second derivative is always negative, the curve is always concave down.\n\nc) Stationary points occur when \\( y' = 0 \\):\n\\( 2 - e^x = 0 \\implies e^x = 2 \\implies x = \\ln 2 \\).\nThe y-coordinate at \\( x = \\ln 2 \\) is:\n\\( y = 2\\ln 2 - e^{\\ln 2} = 2\\ln 2 - 2 \\).\nAt \\( x = \\ln 2 \\), \\( y'' = -2 < 0 \\), which confirms that \\( (\\ln 2, 2\\ln 2 - 2) \\) is a local maximum.",
    "solutionSteps": [
      {
        "explanation": "Find first and second derivatives",
        "workingOut": "y' = 2 - e^x, \\; y'' = -e^x"
      },
      {
        "explanation": "Analyse concavity from y''",
        "workingOut": "-e^x < 0 \\implies \\text{always concave down}"
      },
      {
        "explanation": "Solve for stationary points",
        "workingOut": "2 - e^x = 0 \\implies x = \\ln 2"
      },
      {
        "explanation": "Determine y-value and classify stationary point",
        "workingOut": "y = 2\\ln 2 - 2. \\; y'' < 0 \\implies \\text{local maximum}"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Stationary points occur when dy/dx = 0. Use the sign of d^2y/dx^2 to verify the nature (maximum if negative).",
    "graphData": null
  },
  {
    "id": "y12a-5c-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = (2 - x)e^x \\):\na) Differentiate \\( y = (2 - x)e^x \\) using the product rule.\nb) Find the equation of the tangent at \\( x = 0 \\).\nc) Hence find the x-intercept of this tangent.",
    "a": "a) y' = (1 - x)e^x\nb) y = x + 2\nc) -2",
    "solution": "a) Let \\( u = 2 - x \\implies u' = -1 \\) and \\( v = e^x \\implies v' = e^x \\).\nUsing product rule:\n\\( y' = u'v + uv' = -1(e^x) + (2 - x)e^x = e^x(-1 + 2 - x) = (1 - x)e^x \\).\n\nb) At \\( x = 0 \\):\n- y-coordinate: \\( y = (2 - 0)e^0 = 2 \\). So point is \\( (0, 2) \\).\n- Gradient: \\( y' = (1 - 0)e^0 = 1 \\).\nTangent equation:\n\\( y - 2 = 1(x - 0) \\implies y = x + 2 \\).\n\nc) For the x-intercept of the tangent, set \\( y = 0 \\):\n\\( 0 = x + 2 \\implies x = -2 \\).\nSo the x-intercept is \\( -2 \\).",
    "solutionSteps": [
      {
        "explanation": "Apply the product rule",
        "workingOut": "y' = -e^x + (2-x)e^x"
      },
      {
        "explanation": "Simplify the derivative",
        "workingOut": "y' = (1-x)e^x"
      },
      {
        "explanation": "Evaluate point and gradient at x = 0",
        "workingOut": "y(0) = 2, \\; y'(0) = 1"
      },
      {
        "explanation": "Formulate tangent equation",
        "workingOut": "y = x + 2"
      },
      {
        "explanation": "Solve for x-intercept",
        "workingOut": "y=0 \\implies x = -2"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Differentiate using the product rule. Find the tangent at (0, 2) and solve for y = 0 to get the x-intercept.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = (x + 2)e^{-x} \\):\na) Show that the equation of the tangent at \\( x = 0 \\) is \\( y = -x + 2 \\).\nb) Find the x-intercept and y-intercept of this tangent.\nc) Find the area of the triangle formed by these intercepts and the origin.",
    "a": "a) y = -x + 2\nb) x-intercept: 2, y-intercept: 2\nc) 2",
    "solution": "a) Differentiate using the product rule:\nLet \\( u = x + 2 \\implies u' = 1 \\), and \\( v = e^{-x} \\implies v' = -e^{-x} \\).\n\\( y' = 1 \\cdot e^{-x} + (x + 2)(-e^{-x}) = e^{-x}(1 - x - 2) = -(x + 1)e^{-x} \\).\nAt \\( x = 0 \\):\n- y-coordinate: \\( y = (0 + 2)e^0 = 2 \\).\n- Gradient: \\( y' = -(0 + 1)e^0 = -1 \\).\nTangent equation:\n\\( y - 2 = -1(x - 0) \\implies y = -x + 2 \\).\n\nb) Intercepts:\n- y-intercept: when \\( x = 0 \\implies y = 2 \\), i.e., \\( (0, 2) \\).\n- x-intercept: when \\( y = 0 \\implies x = 2 \\), i.e., \\( (2, 0) \\).\n\nc) The triangle vertices are \\( (0, 0) \\), \\( (2, 0) \\), and \\( (0, 2) \\).\n\\( \\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 2 = 2 \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate using product rule",
        "workingOut": "y' = e^{-x} - (x+2)e^{-x} = -(x+1)e^{-x}"
      },
      {
        "explanation": "Evaluate tangent equation at x = 0",
        "workingOut": "y(0) = 2, \\; y'(0) = -1 \\implies y = -x + 2"
      },
      {
        "explanation": "Find intercepts",
        "workingOut": "x-int = 2, \\; y-int = 2"
      },
      {
        "explanation": "Calculate area",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 2 \\times 2 = 2"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Differentiate using the product rule to get the tangent slope. Find the intercepts to calculate the area.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = e^{2x-4} \\):\na) Find the first and second derivatives of the function.\nb) Explain why every tangent to the curve has a positive gradient, and why the curve is concave up at every point.\nc) Find the coordinates of the point on the curve where the gradient is 2.\nd) Find the gradients of the tangent and normal at the y-intercept.",
    "a": "a) y' = 2e^(2x-4), y'' = 4e^(2x-4)\nb) y' > 0 and y'' > 0 for all x\nc) (2, 1)\nd) Tangent gradient: 2e^(-4), Normal gradient: -0.5e^4",
    "solution": "a) Differentiating \\( y = e^{2x-4} \\):\n\\( y' = 2e^{2x-4} \\)\n\\( y'' = 4e^{2x-4} \\).\n\nb) Since \\( e^{2x-4} > 0 \\) for all real \\( x \\):\n- The gradient \\( y' = 2e^{2x-4} > 0 \\) is always positive, meaning every tangent has a positive gradient.\n- The second derivative \\( y'' = 4e^{2x-4} > 0 \\) is always positive, meaning the curve is concave up everywhere.\n\nc) Set the gradient equal to 2:\n\\( 2e^{2x-4} = 2 \\implies e^{2x-4} = 1 \\implies 2x - 4 = 0 \\implies x = 2 \\).\nAt \\( x = 2 \\), \\( y = e^{2(2)-4} = e^0 = 1 \\).\nSo the coordinates are \\( (2, 1) \\).\n\nd) The y-intercept is at \\( x = 0 \\):\n- Tangent gradient: \\( m_t = y'(0) = 2e^{-4} \\).\n- Normal gradient: \\( m_n = -\\frac{1}{m_t} = -\\frac{1}{2e^{-4}} = -\\frac{e^4}{2} = -0.5e^4 \\).",
    "solutionSteps": [
      {
        "explanation": "Find first and second derivatives",
        "workingOut": "y' = 2e^{2x-4}, \\; y'' = 4e^{2x-4}"
      },
      {
        "explanation": "Analyse signs of derivatives",
        "workingOut": "e^{2x-4} > 0 \\implies y' > 0 \\text{ and } y'' > 0"
      },
      {
        "explanation": "Solve for gradient = 2",
        "workingOut": "2e^{2x-4} = 2 \\implies x = 2 \\implies y = 1"
      },
      {
        "explanation": "Find gradients at x = 0",
        "workingOut": "m_t = 2e^{-4}, \\; m_n = -0.5e^4"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Substitute x = 0 to find gradients at the y-intercept. Normal gradient is -1/m.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = e^{-x^2} \\):\na) Find the derivative \\( \\frac{dy}{dx} \\).\nb) Find the equation of the normal to the curve at the point where \\( x = 1 \\).\nc) Determine the x-intercept of this normal.",
    "a": "a) dy/dx = -2x*e^(-x^2)\nb) ex - 2y - e + 2e^(-1) = 0\nc) 1 - 2e^(-2)",
    "solution": "a) Using the chain rule:\n\\( \\frac{dy}{dx} = -2x e^{-x^2} \\).\n\nb) At \\( x = 1 \\):\n- y-coordinate: \\( y = e^{-1^2} = e^{-1} \\). Point is \\( (1, e^{-1}) \\).\n- Tangent gradient: \\( m_t = -2(1)e^{-1} = -2e^{-1} \\).\n- Normal gradient: \\( m_n = -\\frac{1}{m_t} = -\\frac{1}{-2e^{-1}} = \\frac{e}{2} \\).\nEquation of the normal:\n\\( y - e^{-1} = \\frac{e}{2}(x - 1) \\implies 2(y - e^{-1}) = e(x - 1) \\implies 2y - 2e^{-1} = ex - e \\implies ex - 2y - e + 2e^{-1} = 0 \\).\n\nc) For the x-intercept, set \\( y = 0 \\):\n\\( ex - 0 - e + 2e^{-1} = 0 \\implies ex = e - 2e^{-1} \\implies x = 1 - 2e^{-2} \\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the function using chain rule",
        "workingOut": "\\frac{dy}{dx} = -2x e^{-x^2}"
      },
      {
        "explanation": "Evaluate point and normal gradient at x = 1",
        "workingOut": "y = e^{-1}, \\; m_t = -2e^{-1} \\implies m_n = \\frac{e}{2}"
      },
      {
        "explanation": "Formulate normal equation",
        "workingOut": "y - e^{-1} = \\frac{e}{2}(x-1) \\implies ex - 2y - e + 2e^{-1} = 0"
      },
      {
        "explanation": "Find x-intercept",
        "workingOut": "y=0 \\implies ex = e - 2e^{-1} \\implies x = 1 - 2e^{-2}"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Find the tangent gradient at x = 1, get the normal gradient (negative reciprocal), write the normal equation, then find x when y = 0.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q11",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = 2 - 2e^{-x} \\):\na) Show that the equation of the tangent to the curve at the origin is \\( y = 2x \\).\nb) Deduce the equation of the normal at the origin without further use of calculus.\nc) What is the equation of the horizontal asymptote of this curve?\nd) Sketch the curve, showing the points \\( T \\) and \\( N \\) where the tangent and normal respectively cut the horizontal asymptote.",
    "a": "a) y = 2x\nb) y = -0.5x\nc) y = 2\nd) Asymptotic to y = 2. Tangent intersects at T(1, 2), Normal intersects at N(-4, 2)",
    "solution": "a) Origin is \\( (0, 0) \\).\n\\( \\frac{dy}{dx} = 2e^{-x} \\).\nAt \\( x = 0 \\), the tangent gradient is \\( m_t = 2e^0 = 2 \\).\nTangent equation: \\( y - 0 = 2(x - 0) \\implies y = 2x \\).\n\nb) The normal is perpendicular to the tangent at the origin. Since the tangent gradient is 2, the normal gradient is \\( m_n = -0.5 \\).\nNormal equation: \\( y = -0.5x \\).\n\nc) As \\( x \\to \\infty \\), \\( e^{-x} \\to 0 \\), so \\( y \\to 2 \\).\nThe horizontal asymptote is the line \\( y = 2 \\).\n\nd) Intersections with asymptote \\( y = 2 \\):\n- For tangent: \\( 2 = 2x \\implies x = 1 \\). Point \\( T \\) is \\( (1, 2) \\).\n- For normal: \\( 2 = -0.5x \\implies x = -4 \\). Point \\( N \\) is \\( (-4, 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Find tangent at origin",
        "workingOut": "y' = 2e^{-x} \\implies y'(0) = 2 \\implies y = 2x"
      },
      {
        "explanation": "Deduce normal at origin",
        "workingOut": "m_n = -\\frac{1}{2} \\implies y = -0.5x"
      },
      {
        "explanation": "Find horizontal asymptote",
        "workingOut": "x \\to \\infty \\implies y \\to 2"
      },
      {
        "explanation": "Find intersection points T and N",
        "workingOut": "y=2 \\implies T(1, 2) \\text{ and } N(-4, 2)"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "The horizontal asymptote is found by letting x go to positive infinity. Solve for the x values where the tangent and normal cross y = 2.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "General tangent properties of \\( y = e^x \\):\na) Show that the tangent to \\( y = e^x \\) at \\( T(t, e^t) \\) has gradient \\( e^t \\).\nb) Find the equation of the tangent at \\( x = t \\), and show that its x-intercept is \\( t - 1 \\).\nc) Explain geometrically what this means for any tangent to \\( y = e^x \\).",
    "a": "a) dy/dx = e^x, value at t is e^t\nb) y = e^t * x + e^t * (1 - t), x-intercept = t - 1\nc) The tangent at any point x = t always intersects the x-axis exactly 1 unit to the left of the x-coordinate of the point of contact.",
    "solution": "a) The derivative of \\( y = e^x \\) is \\( \\frac{dy}{dx} = e^x \\).\nAt \\( x = t \\), the gradient is \\( m = e^t \\).\n\nb) The equation of the tangent at \\( T(t, e^t) \\) is:\n\\( y - e^t = e^t(x - t) \\implies y = e^t x - t e^t + e^t \\implies y = e^t x + e^t(1 - t) \\).\nTo find the x-intercept, set \\( y = 0 \\):\n\\( e^t x + e^t(1 - t) = 0 \\implies e^t(x + 1 - t) = 0 \\).\nSince \\( e^t \\neq 0 \\):\n\\( x + 1 - t = 0 \\implies x = t - 1 \\).\nSo the x-intercept is \\( t - 1 \\).\n\nc) Geometrically, this means that for any point on the curve \\( y = e^x \\), if you draw a tangent line, it will always cross the x-axis exactly one unit to the left of that point's x-coordinate.",
    "solutionSteps": [
      {
        "explanation": "Find derivative and gradient at t",
        "workingOut": "\\frac{dy}{dx} = e^x \\implies m = e^t"
      },
      {
        "explanation": "Derive tangent equation",
        "workingOut": "y - e^t = e^t(x - t) \\implies y = e^t x + e^t(1 - t)"
      },
      {
        "explanation": "Solve for x-intercept",
        "workingOut": "0 = e^t(x - t + 1) \\implies x = t - 1"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Substitute the point (t, e^t) and slope e^t into the point-slope formula, then solve for y = 0.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = e^x \\) and its normal line at \\( x = t \\):\na) Find the equation of the normal at \\( x = t \\).\nb) Show that if this normal line passes through the origin \\( (0, 0) \\), then \\( t + e^{2t} = 0 \\).\nc) Explain why there is exactly one such point on the curve.",
    "a": "a) y - e^t = -e^(-t)(x - t)\nb) Proof shown\nc) The function g(t) = t + e^(2t) is strictly increasing and goes from negative to positive, so it has exactly one root.",
    "solution": "a) The gradient of the tangent at \\( x = t \\) is \\( e^t \\), so the gradient of the normal is \\( m_n = -e^{-t} \\).\nThe point of contact is \\( (t, e^t) \\).\nEquation of the normal:\n\\( y - e^t = -e^{-t}(x - t) \\).\n\nb) If this normal passes through \\( (0, 0) \\), substitute \\( x = 0 \\) and \\( y = 0 \\):\n\\( 0 - e^t = -e^{-t}(0 - t) \\implies -e^t = t e^{-t} \\).\nMultiply both sides by \\( e^t \\):\n\\( -e^{2t} = t \\implies t + e^{2t} = 0 \\).\n\nc) Let \\( g(t) = t + e^{2t} \\).\n- Differentiate \\( g(t) \\):\n\\( g'(t) = 1 + 2e^{2t} \\).\nSince \\( e^{2t} > 0 \\) for all \\( t \\), \\( g'(t) = 1 + 2e^{2t} > 0 \\) for all \\( t \\). This means \\( g(t) \\) is strictly increasing.\n- Limits: as \\( t \\to -\\infty \\), \\( g(t) \\to -\\infty \\), and as \\( t \\to \\infty \\), \\( g(t) \\to \\infty \\).\nBy the Intermediate Value Theorem, since \\( g(t) \\) is continuous and strictly increasing, it must cross 0 at exactly one value of \\( t \\). Thus, there is exactly one such point on the curve.",
    "solutionSteps": [
      {
        "explanation": "Formulate the normal equation",
        "workingOut": "y - e^t = -e^{-t}(x - t)"
      },
      {
        "explanation": "Substitute origin coordinates",
        "workingOut": "-e^t = t e^{-t} \\implies -e^{2t} = t \\implies t + e^{2t} = 0"
      },
      {
        "explanation": "Analyse monotonicity of function g(t)",
        "workingOut": "g'(t) = 1 + 2e^{2t} > 0 \\implies \\text{strictly increasing, exactly one root}"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "A function that is strictly increasing and ranges from negative to positive infinity crosses zero exactly once.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\( y = x e^{2x} \\):\na) Where is the function zero, positive, and negative?\nb) Find the first and second derivatives.\nc) Show that there is one stationary point, and determine its nature.\nd) Find the coordinates of the point of inflection.",
    "a": "a) Zero at x = 0, positive for x > 0, negative for x < 0\nb) y' = (2x+1)e^(2x), y'' = (4x+4)e^(2x)\nc) (-0.5, -0.5/e), local minimum\nd) (-1, -e^(-2))",
    "solution": "a) Since \\( e^{2x} > 0 \\) for all real \\( x \\), the sign of \\( y \\) is determined by \\( x \\):\n- \\( y = 0 \\) when \\( x = 0 \\).\n- \\( y > 0 \\) when \\( x > 0 \\).\n- \\( y < 0 \\) when \\( x < 0 \\).\n\nb) Differentiate using the product rule:\n\\( y' = 1 \\cdot e^{2x} + x(2e^{2x}) = (2x + 1)e^{2x} \\).\nDifferentiate again:\n\\( y'' = 2e^{2x} + (2x + 1)(2e^{2x}) = (4x + 4)e^{2x} \\).\n\nc) Stationary points occur when \\( y' = 0 \\):\n\\( 2x + 1 = 0 \\implies x = -0.5 \\).\nThe y-coordinate is \\( y = -0.5e^{-1} = -\\frac{1}{2e} \\).\nAt \\( x = -0.5 \\), \\( y'' = (4(-0.5) + 4)e^{-1} = 2e^{-1} > 0 \\), confirming it is a local minimum turning point.\n\nd) Inflection points occur when \\( y'' = 0 \\):\n\\( 4x + 4 = 0 \\implies x = -1 \\).\nThe coordinates are \\( (-1, -e^{-2}) \\). Since the concavity changes sign around \\( x = -1 \\) (from concave down to concave up), this is a point of inflection.",
    "solutionSteps": [
      {
        "explanation": "Determine function signs",
        "workingOut": "y = 0 \\implies x = 0, \\; y > 0 \\implies x > 0, \\; y < 0 \\implies x < 0"
      },
      {
        "explanation": "Find first and second derivatives",
        "workingOut": "y' = (2x+1)e^{2x}, \\; y'' = (4x+4)e^{2x}"
      },
      {
        "explanation": "Solve for stationary points",
        "workingOut": "2x + 1 = 0 \\implies x = -0.5 \\implies y = -\\frac{1}{2e}"
      },
      {
        "explanation": "Check concavity and solve for inflection point",
        "workingOut": "y''(-0.5) > 0 \\implies \\text{local min}. \\; y'' = 0 \\implies x = -1 \\implies (-1, -e^{-2})"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Find y' and y'' using product rule. Inflection point requires d^2y/dx^2 = 0 with a change in concavity.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q15",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( y = e^{-\\frac{1}{2}x^2} \\):\na) Show that the function is even. When is it zero, positive, or negative?\nb) Show that \\( y' = -x e^{-\\frac{1}{2}x^2} \\) and \\( y'' = (x^2 - 1)e^{-\\frac{1}{2}x^2} \\).\nc) Show that this curve has a maximum turning point at its y-intercept.\nd) Find the two points of inflection.",
    "a": "a) Even function because f(-x) = f(x). Always positive, never zero or negative.\nb) Proof shown\nc) (0, 1), maximum turning point\nd) (-1, e^(-0.5)) and (1, e^(-0.5))",
    "solution": "a) Let \\( f(x) = e^{-\\frac{1}{2}x^2} \\). Then \\( f(-x) = e^{-\\frac{1}{2}(-x)^2} = e^{-\\frac{1}{2}x^2} = f(x) \\), so it is even.\nSince exponential functions are always positive, \\( y > 0 \\) for all \\( x \\) (it is never zero or negative).\n\nb) Differentiating using the chain rule:\n\\( y' = -x e^{-\\frac{1}{2}x^2} \\).\nDifferentiate again using the product rule:\n\\( y'' = -1 \\cdot e^{-\\frac{1}{2}x^2} + (-x)(-x e^{-\\frac{1}{2}x^2}) = e^{-\\frac{1}{2}x^2}(x^2 - 1) \\).\n\nc) Stationary points: \\( y' = 0 \\implies -x = 0 \\implies x = 0 \\).\nWhen \\( x = 0 \\), \\( y = e^0 = 1 \\).\nAt \\( x = 0 \\), \\( y'' = (0^2 - 1)e^0 = -1 < 0 \\), confirming that \\( (0, 1) \\) is a local maximum.\n\nd) Points of inflection: \\( y'' = 0 \\implies x^2 - 1 = 0 \\implies x = \\pm 1 \\).\nWhen \\( x = \\pm 1 \\), \\( y = e^{-0.5} = \\frac{1}{\\sqrt{e}} \\).\nSo the inflection points are \\( (-1, e^{-0.5}) \\) and \\( (1, e^{-0.5}) \\).",
    "solutionSteps": [
      {
        "explanation": "Show even function property",
        "workingOut": "f(-x) = e^{-0.5(-x)^2} = f(x) \\implies \\text{even}"
      },
      {
        "explanation": "Find derivatives",
        "workingOut": "y' = -xe^{-0.5x^2}, \\; y'' = (x^2-1)e^{-0.5x^2}"
      },
      {
        "explanation": "Find and verify stationary point",
        "workingOut": "y' = 0 \\implies x = 0 \\implies y = 1. \\; y''(0) = -1 < 0 \\implies \\text{maximum}"
      },
      {
        "explanation": "Solve for inflection points",
        "workingOut": "x^2 - 1 = 0 \\implies x = \\pm 1 \\implies y = e^{-0.5}"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Verify even function by substituting -x for x. Inflection points occur where y'' = 0.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q16",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( y = (1 - x)e^x \\):\na) Find the zero of the function and draw up a table of signs.\nb) Show that \\( y' = -x e^x \\) and \\( y'' = -(x + 1)e^x \\).\nc) Show that the curve has a maximum turning point at its y-intercept, and a point of inflection at \\( (-1, 2e^{-1}) \\).\nd) Sketch the curve and state its range.",
    "a": "a) Zero at x = 1. Positive for x < 1, negative for x > 1.\nb) Proof shown.\nc) Max at (0, 1), Inflection at (-1, 2e^(-1)).\nd) Range: y <= 1",
    "solution": "a) \\( y = (1 - x)e^x = 0 \\implies 1 - x = 0 \\implies x = 1 \\).\nSince \\( e^x > 0 \\):\n- For \\( x < 1 \\), \\( 1 - x > 0 \\implies y > 0 \\).\n- For \\( x > 1 \\), \\( 1 - x < 0 \\implies y < 0 \\).\n\nb) Differentiating using product rule:\n\\( y' = -1(e^x) + (1 - x)e^x = -x e^x \\).\nDifferentiate again:\n\\( y'' = -1(e^x) + (-x)e^x = -(x + 1)e^x \\).\n\nc) Stationary points: \\( y' = 0 \\implies -x = 0 \\implies x = 0 \\).\nWhen \\( x = 0 \\), \\( y = (1-0)e^0 = 1 \\). (y-intercept is \\( (0, 1) \\)).\nAt \\( x = 0 \\), \\( y'' = -(0 + 1)e^0 = -1 < 0 \\), so it is a local maximum.\nInflection points: \\( y'' = 0 \\implies x + 1 = 0 \\implies x = -1 \\).\nWhen \\( x = -1 \\), \\( y = (1 - (-1))e^{-1} = 2e^{-1} \\).\nSo the inflection point is \\( (-1, 2e^{-1}) \\).\n\nd) Since the local maximum is the absolute maximum and as \\( x \\to -\\infty \\), \\( y \\to 0 \\), and as \\( x \\to \\infty \\), \\( y \\to -\\infty \\):\nThe range of the function is \\( y \\leq 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Find zero and analyze signs",
        "workingOut": "y = 0 \\implies x = 1"
      },
      {
        "explanation": "Find derivatives",
        "workingOut": "y' = -xe^x, \\; y'' = -(x+1)e^x"
      },
      {
        "explanation": "Verify stationary and inflection points",
        "workingOut": "y' = 0 \\implies x = 0. \\; y'' = 0 \\implies x = -1"
      },
      {
        "explanation": "State the range of the function",
        "workingOut": "\\text{Maximum y-value is 1} \\implies y \\leq 1"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Determine the maximum value from the stationary point analysis, then determine the vertical limits to state the range.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q17",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Consider \\( y = \\cosh x = \\frac{e^x + e^{-x}}{2} \\):\na) Show that \\( y = \\cosh x \\) is an even function, and is always positive.\nb) Find \\( \\frac{dy}{dx} \\) and show that there is a stationary point at the y-intercept.\nc) Show that the function is always concave up.\nd) Sketch the curve.",
    "a": "a) Even function since f(-x) = f(x). Positive because e^x > 0 and e^-x > 0.\nb) dy/dx = (e^x - e^(-x))/2. Stationary point at (0, 1).\nc) d^2y/dx^2 = cosh x > 0.\nd) U-shaped curve passing through (0,1).",
    "solution": "a) Let \\( f(x) = \\frac{e^x + e^{-x}}{2} \\).\n\\( f(-x) = \\frac{e^{-x} + e^{-(-x)}}{2} = \\frac{e^{-x} + e^x}{2} = f(x) \\). Thus, it is even.\nSince \\( e^x > 0 \\) and \\( e^{-x} > 0 \\) for all real x, their sum is positive. Therefore, \\( y > 0 \\) always.\n\nb) Differentiating:\n\\( y' = \\frac{e^x - e^{-x}}{2} \\).\nStationary points occur when \\( y' = 0 \\implies e^x - e^{-x} = 0 \\implies e^{2x} = 1 \\implies x = 0 \\).\nThe y-intercept is at \\( x = 0 \\), giving the stationary point \\( (0, 1) \\).\n\nc) Differentiating again:\n\\( y'' = \\frac{e^x + e^{-x}}{2} = \\cosh x \\).\nSince \\( y = \\cosh x > 0 \\) for all x, \\( y'' > 0 \\) everywhere. Thus, the function is always concave up.\n\nd) The curve is a symmetric U-shape (catenary) passing through \\( (0, 1) \\) and opening upwards.",
    "solutionSteps": [
      {
        "explanation": "Show even function and positive properties",
        "workingOut": "f(-x) = f(x) \\text{ and } e^x + e^{-x} > 0"
      },
      {
        "explanation": "Find derivative and stationary point",
        "workingOut": "y' = \\frac{e^x - e^{-x}}{2} = 0 \\implies x = 0 \\implies (0,1)"
      },
      {
        "explanation": "Deduce concavity from second derivative",
        "workingOut": "y'' = \\cosh x > 0 \\implies \\text{always concave up}"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Verify that the second derivative is the original function cosh x, which you proved is always positive.",
    "graphData": null
  },
  {
    "id": "y12a-5c-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Consider the curve \\( y = x^2 e^{-x} \\):\na) Show that \\( y' = x(2 - x)e^{-x} \\) and \\( y'' = (2 - 4x + x^2)e^{-x} \\).\nb) Show that the function has a minimum turning point at the origin and a maximum turning point at \\( (2, 4e^{-2}) \\).\nc) Show that \\( y'' = 0 \\) at \\( x = 2 - \\sqrt{2} \\) and \\( x = 2 + \\sqrt{2} \\), and show that there are inflection points at these values.\nd) Sketch the curve and state its range.",
    "a": "a) Proof shown.\nb) Min at (0,0), Max at (2, 4e^(-2)).\nc) Proof shown.\nd) Range: y >= 0",
    "solution": "a) Using the product rule on \\( y = x^2 e^{-x} \\):\n\\( y' = 2x e^{-x} + x^2(-e^{-x}) = (2x - x^2)e^{-x} = x(2 - x)e^{-x} \\).\n\nDifferentiate again:\n\\( y'' = (2 - 2x)e^{-x} + (2x - x^2)(-e^{-x}) = (2 - 2x - 2x + x^2)e^{-x} = (2 - 4x + x^2)e^{-x} \\).\n\nb) Stationary points: \\( y' = 0 \\implies x = 0 \\) or \\( x = 2 \\).\n- At \\( x = 0 \\): \\( y = 0 \\). Point is \\( (0, 0) \\).\n\\( y''(0) = (2 - 0)e^0 = 2 > 0 \\), so it is a minimum turning point.\n- At \\( x = 2 \\): \\( y = 4e^{-2} \\). Point is \\( (2, 4e^{-2}) \\).\n\\( y''(2) = (2 - 8 + 4)e^{-2} = -2e^{-2} < 0 \\), so it is a maximum turning point.\n\nc) Solve \\( y'' = 0 \\implies x^2 - 4x + 2 = 0 \\).\nUsing the quadratic formula:\n\\( x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(1)(2)}}{2} = \\frac{4 \\pm \\sqrt{8}}{2} = 2 \\pm \\sqrt{2} \\).\nSince \\( y'' \\) changes sign across these two roots, they represent points of inflection.\n\nd) The curve starts at \\( y \\to \\infty \\) as \\( x \\to -\\infty \\), goes down to a local minimum at \\( (0, 0) \\), rises to a local maximum at \\( (2, 4e^{-2}) \\), and decays asymptotically to \\( y = 0 \\) as \\( x \\to \\infty \\).\nSince \\( y \\geq 0 \\) for all real x, the range is \\( y \\geq 0 \\).",
    "solutionSteps": [
      {
        "explanation": "Find derivatives using product rule",
        "workingOut": "y' = x(2-x)e^{-x}, \\; y'' = (x^2-4x+2)e^{-x}"
      },
      {
        "explanation": "Verify turning points",
        "workingOut": "y'(0)=0, y''(0)>0 \\implies \\text{min}. \\; y'(2)=0, y''(2)<0 \\implies \\text{max}"
      },
      {
        "explanation": "Solve for second derivative roots",
        "workingOut": "x^2 - 4x + 2 = 0 \\implies x = 2 \\pm \\sqrt{2}"
      },
      {
        "explanation": "Find the range of the function",
        "workingOut": "y = x^2 e^{-x} \\geq 0 \\implies \\text{Range: } y \\geq 0"
      }
    ],
    "t": "Applications of differentiation",
    "hint": "Substitute the stationary points into the second derivative to verify concavity. The absolute minimum is 0, so the range is all non-negative numbers.",
    "graphData": null
  }
];
