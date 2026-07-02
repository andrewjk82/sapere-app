export const Y11_CH3D_QUESTIONS = [
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-1',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 2)(x - 4) \), explain why the graph is concave up.",
    options: [
      { text: 'The vertical intercept is positive (\( c = 8 \)).', imageUrl: '' },
      { text: 'The leading coefficient after expansion is negative (\( a = -1 < 0 \)).', imageUrl: '' },
      { text: 'The horizontal intercepts are both positive.', imageUrl: '' },
      { text: 'The leading coefficient after expansion is positive (\( a = 1 > 0 \)).', imageUrl: '' }
    ],
    answer: '3',
    hint: "Expand the equation to find the coefficient of the quadratic term \( x^2 \).",
    solution: "Expanding the equation gives \( y = x^2 - 6x + 8 \). The coefficient of the quadratic term is \( a = 1 \). Since this coefficient is positive, the parabola opens upwards (concave up).",
    solutionSteps: [
      {
        explanation: "Expand the factored form of the equation into general form.",
        workingOut: "y = (x - 2)(x - 4) = x^2 - 6x + 8"
      },
      {
        explanation: "Identify the coefficient of the x^2 term, which is the leading coefficient.",
        workingOut: "a = 1"
      },
      {
        explanation: "Apply the rule: if the leading coefficient is positive, the parabola is concave up.",
        workingOut: "a = 1 > 0 \implies \text{concave up}"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-2',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 2)(x - 4) \), find the \( y \)-intercept.",
    options: [
      { text: '\( (0, 2) \)', imageUrl: '' },
      { text: '\( (0, 6) \)', imageUrl: '' },
      { text: '\( (0, 8) \)', imageUrl: '' },
      { text: '\( (0, -8) \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Set \( x = 0 \) in the function equation to find where the graph intersects the vertical axis.",
    solution: "To find the vertical intercept, substitute \( x = 0 \) into the equation:\n\( y = (0 - 2)(0 - 4) = (-2) \times (-4) = 8 \). Thus, the vertical intercept is at \( (0, 8) \).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0 into the equation.",
        workingOut: "y = (0 - 2)(0 - 4)"
      },
      {
        explanation: "Calculate the value inside each bracket.",
        workingOut: "y = (-2) \times (-4)"
      },
      {
        explanation: "Multiply the numbers to get the final vertical intercept.",
        workingOut: "y = 8 \implies (0, 8)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-3',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 2)(x - 4) \), find the \( x \)-intercepts.",
    options: [
      { text: '\( x = -2 \) and \( x = -4 \)', imageUrl: '' },
      { text: '\( x = -2 \) and \( x = 4 \)', imageUrl: '' },
      { text: '\( x = 2 \) and \( x = -4 \)', imageUrl: '' },
      { text: '\( x = 2 \) and \( x = 4 \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Set \( y = 0 \) and solve for \( x \) using the null factor law.",
    solution: "Setting \( y = 0 \) gives the equation \( (x - 2)(x - 4) = 0 \). Applying the null factor law, either \( x - 2 = 0 \implies x = 2 \) or \( x - 4 = 0 \implies x = 4 \).",
    solutionSteps: [
      {
        explanation: "Set the function equal to zero to find horizontal intercepts.",
        workingOut: "(x - 2)(x - 4) = 0"
      },
      {
        explanation: "Apply the null factor law to solve for each intercept.",
        workingOut: "x - 2 = 0 \implies x = 2 \quad \text{or} \quad x - 4 = 0 \implies x = 4"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-4',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 2)(x - 4) \), determine the equation of the axis of symmetry.",
    options: [
      { text: '\( x = -3 \)', imageUrl: '' },
      { text: '\( x = 2 \)', imageUrl: '' },
      { text: '\( x = 3 \)', imageUrl: '' },
      { text: '\( x = 4 \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "The axis of symmetry lies exactly halfway between the two horizontal intercepts.",
    solution: "The horizontal intercepts are at \( x = 2 \) and \( x = 4 \). The axis of symmetry is the midpoint of these values:\n\( x = \dfrac{2 + 4}{2} = 3 \).",
    solutionSteps: [
      {
        explanation: "Identify the two horizontal intercepts.",
        workingOut: "x_1 = 2, \quad x_2 = 4"
      },
      {
        explanation: "Use the midpoint formula to calculate the average of the intercepts.",
        workingOut: "x = \frac{2 + 4}{2} = \frac{6}{2} = 3"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-5',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 2)(x - 4) \), find the coordinates of the vertex.",
    options: [
      { text: '\( (3, 1) \)', imageUrl: '' },
      { text: '\( (-3, -1) \)', imageUrl: '' },
      { text: '\( (3, 0) \)', imageUrl: '' },
      { text: '\( (3, -1) \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Substitute the x-value of the axis of symmetry back into the function formula.",
    solution: "The axis of symmetry is at \( x = 3 \). Substitute this into the equation to find the corresponding y-value:\n\( y = (3 - 2)(3 - 4) = 1 \times (-1) = -1 \). Therefore, the vertex is at \( (3, -1) \).",
    solutionSteps: [
      {
        explanation: "Substitute the axis of symmetry x = 3 into the original equation.",
        workingOut: "y = (3 - 2)(3 - 4)"
      },
      {
        explanation: "Calculate the values inside the brackets.",
        workingOut: "y = 1 \times (-1)"
      },
      {
        explanation: "Evaluate the multiplication to get the vertical coordinate.",
        workingOut: "y = -1 \implies \text{Vertex: } (3, -1)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q1-6',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Analyze the function \( y = (x - 2)(x - 4) \). Does it have equal zeroes or are the zeroes distinct?",
    options: [
      { text: 'Equal zeroes (one repeated real solution).', imageUrl: '' },
      { text: 'Infinite zeroes.', imageUrl: '' },
      { text: 'No real zeroes (zeroes are complex/imaginary).', imageUrl: '' },
      { text: 'Distinct zeroes (two different real solutions).', imageUrl: '' }
    ],
    answer: '3',
    hint: "Check the number of horizontal intercepts.",
    solution: "The function has horizontal intercepts at \( x = 2 \) and \( x = 4 \). Since these are two different numbers, the function has two distinct zeroes.",
    solutionSteps: [
      {
        explanation: "Identify the zeroes by finding where the function equals zero.",
        workingOut: "(x - 2)(x - 4) = 0 \implies x = 2 \quad \text{or} \quad x = 4"
      },
      {
        explanation: "Since 2 is not equal to 4, the roots are distinct.",
        workingOut: "2 \neq 4 \implies \text{distinct zeroes}"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q2-1',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = -x(x - 4) \), explain why the graph is concave down.",
    options: [
      { text: 'The constant term is zero.', imageUrl: '' },
      { text: 'The coefficient of \( x^2 \) is positive (\( a = 1 > 0 \)).', imageUrl: '' },
      { text: 'The coefficient of \( x^2 \) is negative (\( a = -1 < 0 \)).', imageUrl: '' },
      { text: 'The vertex lies in the first quadrant.', imageUrl: '' }
    ],
    answer: '2',
    hint: "Expand the equation to determine the leading coefficient.",
    solution: "Expanding the equation gives \( y = -x^2 + 4x \). The coefficient of \( x^2 \) is \( a = -1 \). Since this coefficient is negative, the parabola opens downwards (concave down).",
    solutionSteps: [
      {
        explanation: "Expand the factored form of the equation into general form.",
        workingOut: "y = -x(x - 4) = -x^2 + 4x"
      },
      {
        explanation: "Identify the coefficient of the x^2 term.",
        workingOut: "a = -1"
      },
      {
        explanation: "Apply the concavity test.",
        workingOut: "a = -1 < 0 \implies \text{concave down}"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q2-2',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = -x(x - 4) \), find the \( y \)-intercept.",
    options: [
      { text: '\( (0, 4) \)', imageUrl: '' },
      { text: '\( (0, 2) \)', imageUrl: '' },
      { text: '\( (0, 0) \)', imageUrl: '' },
      { text: '\( (0, -4) \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Substitute \( x = 0 \) into the equation.",
    solution: "Substitute \( x = 0 \) into the function: \( y = -0(0 - 4) = 0 \). Thus, the vertical intercept is at the origin, \( (0, 0) \).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0 into the function.",
        workingOut: "y = -0(0 - 4)"
      },
      {
        explanation: "Evaluate the expression.",
        workingOut: "y = 0 \implies (0, 0)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q2-3',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = -x(x - 4) \), find the \( x \)-intercepts.",
    options: [
      { text: '\( x = 0 \) and \( x = 4 \)', imageUrl: '' },
      { text: '\( x = 1 \) and \( x = 4 \)', imageUrl: '' },
      { text: '\( x = 0 \) and \( x = -4 \)', imageUrl: '' },
      { text: '\( x = -1 \) and \( x = 4 \)', imageUrl: '' }
    ],
    answer: '0',
    hint: "Set \( y = 0 \) and apply the null factor law.",
    solution: "Setting \( y = 0 \) gives \( -x(x - 4) = 0 \). This implies either \( -x = 0 \implies x = 0 \) or \( x - 4 = 0 \implies x = 4 \).",
    solutionSteps: [
      {
        explanation: "Set the function equal to zero.",
        workingOut: "-x(x - 4) = 0"
      },
      {
        explanation: "Solve each factor for x.",
        workingOut: "-x = 0 \implies x = 0 \quad \text{or} \quad x - 4 = 0 \implies x = 4"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q2-4',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = -x(x - 4) \), determine the equation of the axis of symmetry.",
    options: [
      { text: '\( x = 4 \)', imageUrl: '' },
      { text: '\( x = 0 \)', imageUrl: '' },
      { text: '\( x = 2 \)', imageUrl: '' },
      { text: '\( x = -2 \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Find the average of the horizontal intercepts.",
    solution: "The horizontal intercepts are at \( x = 0 \) and \( x = 4 \). The axis of symmetry is the midpoint:\n\( x = \dfrac{0 + 4}{2} = 2 \).",
    solutionSteps: [
      {
        explanation: "Find the midpoint of the horizontal intercepts.",
        workingOut: "x = \frac{0 + 4}{2} = 2"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q2-5',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = -x(x - 4) \), find the coordinates of the vertex.",
    options: [
      { text: '\( (-2, 4) \)', imageUrl: '' },
      { text: '\( (2, -4) \)', imageUrl: '' },
      { text: '\( (2, 0) \)', imageUrl: '' },
      { text: '\( (2, 4) \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Substitute the x-coordinate of the axis of symmetry into the equation.",
    solution: "Substitute \( x = 2 \) into the equation:\n\( y = -2(2 - 4) = -2 \times (-2) = 4 \). Thus, the vertex is at \( (2, 4) \).",
    solutionSteps: [
      {
        explanation: "Substitute the axis of symmetry x = 2 into the function.",
        workingOut: "y = -2(2 - 4)"
      },
      {
        explanation: "Perform the subtraction and multiplication.",
        workingOut: "y = -2 \times (-2) = 4 \implies \text{Vertex: } (2, 4)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q3-1',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the perfect square parabola with equation \( y = (x - 3)^2 \), explain its concavity.",
    options: [
      { text: 'Concave down because it is a perfect square.', imageUrl: '' },
      { text: 'Concave up because the constant term is positive (\( c = 9 \)).', imageUrl: '' },
      { text: 'Concave down because the coefficient of \( x^2 \) is negative (\( a = -1 < 0 \)).', imageUrl: '' },
      { text: 'Concave up because the coefficient of \( x^2 \) is positive (\( a = 1 > 0 \)).', imageUrl: '' }
    ],
    answer: '3',
    hint: "Expand \( (x-3)^2 \) and check the coefficient of \( x^2 \).",
    solution: "Expanding the equation gives \( y = x^2 - 6x + 9 \). The leading coefficient is \( a = 1 > 0 \), so the graph opens upwards (concave up).",
    solutionSteps: [
      {
        explanation: "Expand the perfect square expression.",
        workingOut: "y = (x - 3)^2 = x^2 - 6x + 9"
      },
      {
        explanation: "Identify the leading coefficient and check its sign.",
        workingOut: "a = 1 > 0 \implies \text{concave up}"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q3-2',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 3)^2 \), find the \( y \)-intercept.",
    options: [
      { text: '\( (0, 6) \)', imageUrl: '' },
      { text: '\( (0, -9) \)', imageUrl: '' },
      { text: '\( (0, 9) \)', imageUrl: '' },
      { text: '\( (0, 3) \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Set \( x = 0 \) to find the point where the curve crosses the y-axis.",
    solution: "Set \( x = 0 \):\n\( y = (0 - 3)^2 = (-3)^2 = 9 \). Thus, the vertical intercept is at \( (0, 9) \).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0 into the function equation.",
        workingOut: "y = (0 - 3)^2"
      },
      {
        explanation: "Square the resulting number.",
        workingOut: "y = (-3)^2 = 9 \implies (0, 9)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q3-3',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 3)^2 \), find its single \( x \)-intercept.",
    options: [
      { text: '\( x = 9 \)', imageUrl: '' },
      { text: '\( x = 0 \)', imageUrl: '' },
      { text: '\( x = -3 \)', imageUrl: '' },
      { text: '\( x = 3 \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Set \( y = 0 \) and solve for \( x \).",
    solution: "Setting \( y = 0 \) gives \( (x - 3)^2 = 0 \). Taking the square root of both sides gives \( x - 3 = 0 \implies x = 3 \). Since this is the only solution, the graph touches the x-axis at a single point.",
    solutionSteps: [
      {
        explanation: "Set the function equal to zero.",
        workingOut: "(x - 3)^2 = 0"
      },
      {
        explanation: "Take the square root of both sides and solve.",
        workingOut: "x - 3 = 0 \implies x = 3"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q3-4',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "For the parabola with equation \( y = (x - 3)^2 \), use symmetry and the vertical intercept \( (0, 9) \) to find another point on the parabola.",
    options: [
      { text: '\( (6, 9) \)', imageUrl: '' },
      { text: '\( (3, 9) \)', imageUrl: '' },
      { text: '\( (-3, 9) \)', imageUrl: '' },
      { text: '\( (6, 0) \)', imageUrl: '' }
    ],
    answer: '0',
    hint: "The vertex is at \( (3, 0) \). The vertical intercept is 3 units to the left of the vertex axis of symmetry. The symmetrical point must be 3 units to the right.",
    solution: "The axis of symmetry is at \( x = 3 \). The vertical intercept \( (0, 9) \) has an x-coordinate of 0, which is 3 units to the left of the axis of symmetry. By symmetry, another point with the same y-value of 9 must exist 3 units to the right of the axis of symmetry, at \( x = 3 + 3 = 6 \). Therefore, the point is \( (6, 9) \).",
    solutionSteps: [
      {
        explanation: "Identify the axis of symmetry and the horizontal distance to the y-intercept.",
        workingOut: "\text{Axis: } x = 3, \quad \text{Distance from } x=0 \text{ is } 3 \text{ units}"
      },
      {
        explanation: "Add this distance to the axis of symmetry to find the symmetrical x-coordinate.",
        workingOut: "x = 3 + 3 = 6"
      },
      {
        explanation: "The y-value remains the same by symmetry.",
        workingOut: "y = 9 \implies (6, 9)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q5-1',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \( x = 2 \) and \( x = -5 \).",
    options: [
      { text: '\( y = 2(x - 2)(x + 5) \)', imageUrl: '' },
      { text: '\( y = (x - 2)(x + 5) \)', imageUrl: '' },
      { text: '\( y = (x - 2)(x - 5) \)', imageUrl: '' },
      { text: '\( y = (x + 2)(x - 5) \)', imageUrl: '' }
    ],
    answer: '1',
    hint: "For a zero at \( x = k \), the corresponding factor is \( (x - k) \). A monic quadratic has a leading coefficient of 1.",
    solution: "The zeroes are \( x = 2 \) and \( x = -5 \). The corresponding factors are \( (x - 2) \) and \( (x - (-5)) = (x + 5) \). Since the quadratic is monic, the leading coefficient is 1. Thus, the equation is \( y = (x - 2)(x + 5) \).",
    solutionSteps: [
      {
        explanation: "Determine the factor for the first zero x = 2.",
        workingOut: "x = 2 \implies (x - 2)"
      },
      {
        explanation: "Determine the factor for the second zero x = -5.",
        workingOut: "x = -5 \implies (x - (-5)) = (x + 5)"
      },
      {
        explanation: "Combine the factors with a leading coefficient of 1 (monic).",
        workingOut: "y = (x - 2)(x + 5)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q5-2',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \( x = -3 \) and \( x = -1 \).",
    options: [
      { text: '\( y = (x - 3)(x - 1) \)', imageUrl: '' },
      { text: '\( y = -(x + 3)(x + 1) \)', imageUrl: '' },
      { text: '\( y = (x + 3)(x - 1) \)', imageUrl: '' },
      { text: '\( y = (x + 3)(x + 1) \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Set up the factors using \( (x - x_1)(x - x_2) \).",
    solution: "The zeroes are \( x = -3 \) and \( x = -1 \). The factors are \( (x - (-3)) = (x + 3) \) and \( (x - (-1)) = (x + 1) \). As it is monic, the equation is \( y = (x + 3)(x + 1) \).",
    solutionSteps: [
      {
        explanation: "Identify factors corresponding to negative zeroes.",
        workingOut: "x_1 = -3 \implies (x + 3), \quad x_2 = -1 \implies (x + 1)"
      },
      {
        explanation: "Form the monic equation.",
        workingOut: "y = (x + 3)(x + 1)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q6-1',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the quadratic function with zeroes \( x = 1 \) and \( x = 3 \), passing through the vertical intercept \( (0, 6) \).",
    options: [
      { text: '\( y = (x - 1)(x - 3) \)', imageUrl: '' },
      { text: '\( y = 6(x - 1)(x - 3) \)', imageUrl: '' },
      { text: '\( y = 2(x - 1)(x - 3) \)', imageUrl: '' },
      { text: '\( y = -2(x - 1)(x - 3) \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Set up the equation as \( y = a(x - 1)(x - 3) \) and substitute \( (0, 6) \) to solve for \( a \).",
    solution: "Start with the general factored form: \( y = a(x - 1)(x - 3) \). Substitute \( x = 0 \) and \( y = 6 \) to find \( a \):\n\( 6 = a(0 - 1)(0 - 3) \implies 6 = a(-1)(-3) \implies 6 = 3a \implies a = 2 \). Therefore, the equation is \( y = 2(x - 1)(x - 3) \).",
    solutionSteps: [
      {
        explanation: "Write the general equation in factored form using the zeroes.",
        workingOut: "y = a(x - 1)(x - 3)"
      },
      {
        explanation: "Substitute the point (0, 6) into this equation.",
        workingOut: "6 = a(0 - 1)(0 - 3)"
      },
      {
        explanation: "Simplify the expression to find the value of the leading coefficient a.",
        workingOut: "6 = 3a \implies a = 2"
      },
      {
        explanation: "Write the final equation.",
        workingOut: "y = 2(x - 1)(x - 3)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q6-2',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the quadratic function with zeroes \( x = -2 \) and \( x = 4 \), passing through the point \( (1, -9) \).",
    options: [
      { text: '\( y = 3(x + 2)(x - 4) \)', imageUrl: '' },
      { text: '\( y = -(x + 2)(x - 4) \)', imageUrl: '' },
      { text: '\( y = 2(x + 2)(x - 4) \)', imageUrl: '' },
      { text: '\( y = (x + 2)(x - 4) \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Write \( y = a(x + 2)(x - 4) \) and substitute the given coordinates to find \( a \).",
    solution: "Using the zeroes, the equation is \( y = a(x + 2)(x - 4) \). Substituting \( (1, -9) \):\n\( -9 = a(1 + 2)(1 - 4) \implies -9 = a(3)(-3) \implies -9 = -9a \implies a = 1 \). Thus, the equation is \( y = (x + 2)(x - 4) \).",
    solutionSteps: [
      {
        explanation: "Write down the factored form equation.",
        workingOut: "y = a(x + 2)(x - 4)"
      },
      {
        explanation: "Substitute x = 1 and y = -9.",
        workingOut: "-9 = a(1 + 2)(1 - 4)"
      },
      {
        explanation: "Solve for the leading coefficient.",
        workingOut: "-9 = a(3)(-3) \implies -9 = -9a \implies a = 1"
      },
      {
        explanation: "State the final equation.",
        workingOut: "y = (x + 2)(x - 4)"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q7-1',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the zeroes of the quadratic function \( y = x^2 - 5x + 6 \).",
    options: [
      { text: '\( x = 2 \) and \( x = 3 \)', imageUrl: '' },
      { text: '\( x = -2 \) and \( x = -3 \)', imageUrl: '' },
      { text: '\( x = 1 \) and \( x = 6 \)', imageUrl: '' },
      { text: '\( x = -1 \) and \( x = -6 \)', imageUrl: '' }
    ],
    answer: '0',
    hint: "Factorize the quadratic expression into two linear factors by finding two numbers that multiply to 6 and add to -5.",
    solution: "Factorize the quadratic: \( x^2 - 5x + 6 = (x - 2)(x - 3) \). Set the factors equal to zero to find the zeroes: \( (x - 2)(x - 3) = 0 \implies x = 2 \) or \( x = 3 \).",
    solutionSteps: [
      {
        explanation: "Find two numbers that multiply to the constant term 6 and add to the linear coefficient -5.",
        workingOut: "\text{Numbers: } -2 \text{ and } -3 \quad (-2 \times -3 = 6, \; -2 + -3 = -5)"
      },
      {
        explanation: "Write the quadratic in factored form.",
        workingOut: "y = (x - 2)(x - 3)"
      },
      {
        explanation: "Solve for the zeroes using the null factor law.",
        workingOut: "(x - 2)(x - 3) = 0 \implies x = 2 \quad \text{or} \quad x = 3"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q7-2',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the zeroes of the quadratic function \( y = x^2 + 2x - 8 \).",
    options: [
      { text: '\( x = 2 \) and \( x = -4 \)', imageUrl: '' },
      { text: '\( x = 1 \) and \( x = -8 \)', imageUrl: '' },
      { text: '\( x = 2 \) and \( x = 4 \)', imageUrl: '' },
      { text: '\( x = -2 \) and \( x = 4 \)', imageUrl: '' }
    ],
    answer: '0',
    hint: "Find two numbers that multiply to -8 and add to 2.",
    solution: "Factorize: \( x^2 + 2x - 8 = (x - 2)(x + 4) \). Setting to zero: \( (x - 2)(x + 4) = 0 \implies x = 2 \) or \( x = -4 \).",
    solutionSteps: [
      {
        explanation: "Find two factors of -8 that add up to 2.",
        workingOut: "\text{Numbers: } 4 \text{ and } -2 \quad (4 \times -2 = -8, \; 4 + (-2) = 2)"
      },
      {
        explanation: "Factorize the expression.",
        workingOut: "y = (x - 2)(x + 4)"
      },
      {
        explanation: "Find the zeroes.",
        workingOut: "(x - 2)(x + 4) = 0 \implies x = 2 \quad \text{or} \quad x = -4"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q8-1',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the zeroes of the quadratic function \( y = 2x^2 - 5x - 3 \).",
    options: [
      { text: '\( x = 3 \) and \( x = -\dfrac{1}{2} \)', imageUrl: '' },
      { text: '\( x = -3 \) and \( x = -\dfrac{1}{2} \)', imageUrl: '' },
      { text: '\( x = 3 \) and \( x = \dfrac{1}{2} \)', imageUrl: '' },
      { text: '\( x = -3 \) and \( x = \dfrac{1}{2} \)', imageUrl: '' }
    ],
    answer: '0',
    hint: "Factorize by grouping. Find two numbers that multiply to \( 2 \times (-3) = -6 \) and add to -5.",
    solution: "Factorize the quadratic expression:\n1. Find numbers that multiply to -6 and add to -5: \( -6 \) and \( 1 \).\n2. Split the middle term: \( 2x^2 - 6x + x - 3 \).\n3. Factor by grouping: \( 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3) \).\n4. Set to zero: \( (2x + 1)(x - 3) = 0 \implies x = 3 \) or \( x = -\dfrac{1}{2} \).",
    solutionSteps: [
      {
        explanation: "Identify the product ac and coefficient b to split the middle term.",
        workingOut: "a \times c = 2 \times (-3) = -6, \quad b = -5 \implies \text{Numbers: } -6 \text{ and } 1"
      },
      {
        explanation: "Rewrite the equation splitting the middle term and factor by grouping.",
        workingOut: "y = 2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)"
      },
      {
        explanation: "Set the factors equal to zero and solve for the zeroes.",
        workingOut: "(2x + 1)(x - 3) = 0 \implies 2x + 1 = 0 \implies x = -\frac{1}{2} \quad \text{or} \quad x - 3 = 0 \implies x = 3"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q8-2',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the zeroes of the quadratic function \( y = 3x^2 - 10x + 8 \).",
    options: [
      { text: '\( x = -2 \) and \( x = -\dfrac{4}{3} \)', imageUrl: '' },
      { text: '\( x = -2 \) and \( x = \dfrac{4}{3} \)', imageUrl: '' },
      { text: '\( x = 2 \) and \( x = -\dfrac{4}{3} \)', imageUrl: '' },
      { text: '\( x = 2 \) and \( x = \dfrac{4}{3} \)', imageUrl: '' }
    ],
    answer: '3',
    hint: "Find two numbers that multiply to \( 3 \times 8 = 24 \) and add to -10.",
    solution: "Factorize by grouping:\n1. Find two numbers that multiply to 24 and add to -10: \( -6 \) and \( -4 \).\n2. Split the middle term: \( 3x^2 - 6x - 4x + 8 \).\n3. Group factors: \( 3x(x - 2) - 4(x - 2) = (3x - 4)(x - 2) \).\n4. Set to zero: \( (3x - 4)(x - 2) = 0 \implies x = 2 \) or \( x = \dfrac{4}{3} \).",
    solutionSteps: [
      {
        explanation: "Determine the numbers for splitting the middle term.",
        workingOut: "a \times c = 24, \quad b = -10 \implies \text{Numbers: } -6 \text{ and } -4"
      },
      {
        explanation: "Factorize the quadratic expression.",
        workingOut: "y = 3x^2 - 6x - 4x + 8 = 3x(x - 2) - 4(x - 2) = (3x - 4)(x - 2)"
      },
      {
        explanation: "Solve for the horizontal intercepts.",
        workingOut: "(3x - 4)(x - 2) = 0 \implies 3x - 4 = 0 \implies x = \frac{4}{3} \quad \text{or} \quad x - 2 = 0 \implies x = 2"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q16-1',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Factor the quadratic function \( f(x) = x^2 - 4x - 5 \) and find its zeroes.",
    options: [
      { text: '\( x = 5 \) and \( x = 1 \)', imageUrl: '' },
      { text: '\( x = -5 \) and \( x = -1 \)', imageUrl: '' },
      { text: '\( x = 5 \) and \( x = -1 \)', imageUrl: '' },
      { text: '\( x = -5 \) and \( x = 1 \)', imageUrl: '' }
    ],
    answer: '2',
    hint: "Find two numbers that multiply to -5 and add to -4.",
    solution: "Factorize the quadratic: \( x^2 - 4x - 5 = (x - 5)(x + 1) \). The zeroes are the values that make the function zero: \( x = 5 \) and \( x = -1 \).",
    solutionSteps: [
      {
        explanation: "Find two numbers that multiply to -5 and add to -4.",
        workingOut: "-5 \text{ and } 1 \quad (-5 \times 1 = -5, \; -5 + 1 = -4)"
      },
      {
        explanation: "Write in factored form.",
        workingOut: "f(x) = (x - 5)(x + 1)"
      },
      {
        explanation: "Find the zeroes.",
        workingOut: "(x - 5)(x + 1) = 0 \implies x = 5 \quad \text{or} \quad x = -1"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q16-2',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "For the quadratic function \( f(x) = x^2 - 4x - 5 \), substitute and simplify the expressions for \( f(2 + h) \) and \( f(2 - h) \). What are the simplified expressions?",
    options: [
      { text: '\( f(2 + h) = h^2 + 5 \) and \( f(2 - h) = h^2 + 5 \)', imageUrl: '' },
      { text: '\( f(2 + h) = h^2 - 9 \) and \( f(2 - h) = h^2 - 9 \)', imageUrl: '' },
      { text: '\( f(2 + h) = h^2 - 9 \) and \( f(2 - h) = -h^2 - 9 \)', imageUrl: '' },
      { text: '\( f(2 + h) = h^2 - 5 \) and \( f(2 - h) = h^2 - 5 \)', imageUrl: '' }
    ],
    answer: '1',
    hint: "Substitute \( x = 2 + h \) and \( x = 2 - h \) into the expression \( x^2 - 4x - 5 \) and expand carefully.",
    solution: "Substitute \( x = 2 + h \):\n\( f(2+h) = (2+h)^2 - 4(2+h) - 5 = (4 + 4h + h^2) - (8 + 4h) - 5 = h^2 - 9 \).\nSubstitute \( x = 2 - h \):\n\( f(2-h) = (2-h)^2 - 4(2-h) - 5 = (4 - 4h + h^2) - (8 - 4h) - 5 = h^2 - 9 \).\nBoth simplify to \( h^2 - 9 \).",
    solutionSteps: [
      {
        explanation: "Substitute x = 2 + h and expand the brackets.",
        workingOut: "f(2+h) = (2+h)^2 - 4(2+h) - 5 = (4 + 4h + h^2) - 8 - 4h - 5"
      },
      {
        explanation: "Combine like terms for f(2+h).",
        workingOut: "f(2+h) = h^2 + 4h - 4h + 4 - 8 - 5 = h^2 - 9"
      },
      {
        explanation: "Substitute x = 2 - h and expand the brackets.",
        workingOut: "f(2-h) = (2-h)^2 - 4(2-h) - 5 = (4 - 4h + h^2) - 8 + 4h - 5"
      },
      {
        explanation: "Combine like terms for f(2-h).",
        workingOut: "f(2-h) = h^2 - 4h + 4h + 4 - 8 - 5 = h^2 - 9"
      }
    ]
  },
  {
    chapterId: 'y11a-3',
    chapterTitle: 'Chapter 3: Functions and graphs',
    topicId: 'y11a-3D',
    topicCode: '3D',
    topicTitle: 'Quadratic functions — factoring and the graph',
    year: 'Year 11',
    isManual: true,
    id: 'y11a-3d-q16-3',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "For the function \( f(x) = x^2 - 4x - 5 \), we found that \( f(2 + h) = f(2 - h) = h^2 - 9 \). What geometric feature of the parabola does this result prove?",
    options: [
      { text: 'The parabola has a y-intercept at \( y = -9 \).', imageUrl: '' },
      { text: 'The vertex of the parabola is at \( (0, -9) \).', imageUrl: '' },
      { text: 'The parabola is symmetric about the vertical line \( x = 2 \) (its axis of symmetry).', imageUrl: '' },
      { text: 'The parabola opens downwards.', imageUrl: '' }
    ],
    answer: '2',
    hint: "Consider what happens to the output values when you step a distance \( h \) to the left and right of \( x = 2 \).",
    solution: "The relation \( f(2 + h) = f(2 - h) \) means that moving an equal distance \( h \) to the right (to \( 2+h \)) and to the left (to \( 2-h \)) of \( x = 2 \) yields the exact same vertical value. This mathematically proves that the line \( x = 2 \) is the axis of symmetry of the parabola.",
    solutionSteps: [
      {
        explanation: "Analyze the meaning of the equality for any distance h.",
        workingOut: "f(2 + h) = f(2 - h) \implies \text{symmetrical heights at distance } h \text{ from } x = 2"
      },
      {
        explanation: "Conclude that the line of symmetry is the line x = 2.",
        workingOut: "\text{Axis of symmetry: } x = 2"
      }
    ]
  },
];
