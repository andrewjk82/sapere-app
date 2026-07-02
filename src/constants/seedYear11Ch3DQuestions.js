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
    question: "Consider the concave-up parabola with equation \\( y = (x - 2)(x - 4) \\). Explain why the parabola is concave up.",
    options: [
      { text: "The constant term is positive (\\( c = 8 > 0 \\)).", imageUrl: '' },
      { text: "The parabola has two distinct real roots.", imageUrl: '' },
      { text: "The coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).", imageUrl: '' },
      { text: "The coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).", imageUrl: '' }
    ],
    answer: '2',
    hint: "Look at the sign of the coefficient of the \\( x^2 \\) term when expanded.",
    solution: "When expanded, the equation is \\( y = x^2 - 6x + 8 \\). The leading coefficient of the quadratic term \\( x^2 \\) is \\( a = 1 \\), which is positive. This means the parabola is concave up.",
    solutionSteps: [
      {
        explanation: "Expand the factored form equation to find the general form.",
        workingOut: "y = (x - 2)(x - 4) = x^2 - 6x + 8"
      },
      {
        explanation: "Identify the leading coefficient a of the quadratic term.",
        workingOut: "a = 1"
      },
      {
        explanation: "Since the coefficient is positive, the parabola opens upwards.",
        workingOut: "a = 1 > 0 \\implies \\text{concave up}"
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
    question: "Find the \\( y \\)-intercept of the parabola with equation \\( y = (x - 2)(x - 4) \\).",
    options: [
      { text: "\\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( (0, -8) \\)", imageUrl: '' },
      { text: "\\( (0, 4) \\)", imageUrl: '' },
      { text: "\\( (0, 8) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Substitute \\( x = 0 \\) into the equation.",
    solution: "To find the vertical intercept, substitute \\( x = 0 \\): \\( y = (0 - 2)(0 - 4) = (-2) \\times (-4) = 8 \\). Thus, the vertical intercept is at \\( (0, 8) \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0 into the function rule.",
        workingOut: "y = (0 - 2)(0 - 4)"
      },
      {
        explanation: "Multiply the factors together to find the value of y.",
        workingOut: "y = (-2) \\times (-4) = 8 \\implies (0, 8)"
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
    question: "Find the \\( x \\)-intercepts of the parabola with equation \\( y = (x - 2)(x - 4) \\).",
    options: [
      { text: "\\( x = 2 \\) and \\( x = -4 \\)", imageUrl: '' },
      { text: "\\( x = 0 \\) and \\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 2 \\) and \\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = -2 \\) and \\( x = -4 \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Set \\( y = 0 \\) and apply the null factor law.",
    solution: "Set \\( y = 0 \\) to find the horizontal intercepts: \\( (x - 2)(x - 4) = 0 \\). By the null factor law, \\( x = 2 \\) or \\( x = 4 \\).",
    solutionSteps: [
      {
        explanation: "Set the equation equal to zero.",
        workingOut: "(x - 2)(x - 4) = 0"
      },
      {
        explanation: "Apply the null factor law to solve for the x-intercepts.",
        workingOut: "x - 2 = 0 \\implies x = 2, \\quad x - 4 = 0 \\implies x = 4"
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
    question: "Determine the equation of the axis of symmetry for the parabola \\( y = (x - 2)(x - 4) \\).",
    options: [
      { text: "\\( x = 2 \\)", imageUrl: '' },
      { text: "\\( x = 1 \\)", imageUrl: '' },
      { text: "\\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 3 \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "The axis of symmetry lies exactly halfway between the horizontal intercepts.",
    solution: "The horizontal intercepts are at \\( x = 2 \\) and \\( x = 4 \\). The axis of symmetry is the average of these intercepts: \\( x = \\dfrac{2 + 4}{2} = 3 \\).",
    solutionSteps: [
      {
        explanation: "Find the average of the two intercepts.",
        workingOut: "x = \\frac{2 + 4}{2} = \\frac{6}{2} = 3"
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
    question: "Determine the coordinates of the vertex of the parabola \\( y = (x - 2)(x - 4) \\).",
    options: [
      { text: "\\( (2, 0) \\)", imageUrl: '' },
      { text: "\\( (3, 1) \\)", imageUrl: '' },
      { text: "\\( (3, -1) \\)", imageUrl: '' },
      { text: "\\( (4, 0) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Substitute the x-value of the axis of symmetry back into the equation.",
    solution: "The axis of symmetry is \\( x = 3 \\). Substituting this into the function gives: \\( y = (3 - 2)(3 - 4) = 1 \\times (-1) = -1 \\). So the vertex is at \\( (3, -1) \\).",
    solutionSteps: [
      {
        explanation: "Substitute the axis of symmetry value x = 3 into the function.",
        workingOut: "y = (3 - 2)(3 - 4)"
      },
      {
        explanation: "Evaluate the expression to find the y-value of the vertex.",
        workingOut: "y = 1 \\times (-1) = -1 \\implies \\text{Vertex: } (3, -1)"
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
    question: "Does the quadratic function \\( y = (x - 2)(x - 4) \\) have equal zeroes or distinct zeroes?",
    options: [
      { text: "No real zeroes", imageUrl: '' },
      { text: "Infinite zeroes", imageUrl: '' },
      { text: "Equal zeroes", imageUrl: '' },
      { text: "Distinct zeroes", imageUrl: '' }
    ],
    answer: '3',
    hint: "Look at the values of the horizontal intercepts.",
    solution: "The zeroes of the function are \\( x = 2 \\) and \\( x = 4 \\). Since these two numbers are different, the zeroes are distinct.",
    solutionSteps: [
      {
        explanation: "Identify the zeroes of the function.",
        workingOut: "x_1 = 2, \\quad x_2 = 4"
      },
      {
        explanation: "Compare the zeroes to determine if they are distinct.",
        workingOut: "2 \\neq 4 \\implies \\text{distinct zeroes}"
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
    question: "For the parabola with equation \\( y = -x(x - 4) \\), explain why the graph is concave down.",
    options: [
      { text: "The constant term is zero.", imageUrl: '' },
      { text: "The vertex lies in the first quadrant.", imageUrl: '' },
      { text: "The coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).", imageUrl: '' },
      { text: "The coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).", imageUrl: '' }
    ],
    answer: '2',
    hint: "Determine the leading coefficient after expanding the function.",
    solution: "Expanding \\( y = -x(x-4) \\) yields \\( y = -x^2 + 4x \\). The coefficient of the quadratic term \\( x^2 \\) is \\( a = -1 \\). Since this is negative, the parabola is concave down.",
    solutionSteps: [
      {
        explanation: "Expand the factored equation.",
        workingOut: "y = -x(x - 4) = -x^2 + 4x"
      },
      {
        explanation: "Identify the leading coefficient and check its sign.",
        workingOut: "a = -1 < 0 \\implies \\text{concave down}"
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
    question: "Find the \\( y \\)-intercept of the parabola with equation \\( y = -x(x - 4) \\).",
    options: [
      { text: "\\( (0, 0) \\)", imageUrl: '' },
      { text: "\\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( (0, 4) \\)", imageUrl: '' },
      { text: "\\( (0, 8) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Substitute \\( x = 0 \\) into the equation.",
    solution: "Substitute \\( x = 0 \\) into the function: \\( y = -0(0 - 4) = 0 \\). The vertical intercept is at the origin, \\( (0, 0) \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0 into the function equation.",
        workingOut: "y = -0(0 - 4) = 0 \\implies (0, 0)"
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
    question: "Find the \\( x \\)-intercepts of the parabola with equation \\( y = -x(x - 4) \\).",
    options: [
      { text: "\\( x = 0 \\) and \\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 0 \\) and \\( x = -4 \\)", imageUrl: '' },
      { text: "\\( x = -4 \\) and \\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 2 \\) and \\( x = 4 \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Set the equation equal to zero and apply the null factor law.",
    solution: "Setting \\( y = 0 \\) gives \\( -x(x - 4) = 0 \\). Using the null factor law, \\( x = 0 \\) or \\( x = 4 \\).",
    solutionSteps: [
      {
        explanation: "Set y = 0.",
        workingOut: "-x(x - 4) = 0"
      },
      {
        explanation: "Solve for x.",
        workingOut: "-x = 0 \\implies x = 0, \\quad x - 4 = 0 \\implies x = 4"
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
    question: "Determine the equation of the axis of symmetry for the parabola \\( y = -x(x - 4) \\).",
    options: [
      { text: "\\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 0 \\)", imageUrl: '' },
      { text: "\\( x = -2 \\)", imageUrl: '' },
      { text: "\\( x = 2 \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Calculate the average of the horizontal intercepts.",
    solution: "The intercepts are at \\( x = 0 \\) and \\( x = 4 \\). The midpoint is \\( x = \\dfrac{0 + 4}{2} = 2 \\).",
    solutionSteps: [
      {
        explanation: "Find the midpoint between 0 and 4.",
        workingOut: "x = \\frac{0 + 4}{2} = 2"
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
    question: "Find the coordinates of the vertex of the parabola \\( y = -x(x - 4) \\).",
    options: [
      { text: "\\( (4, 0) \\)", imageUrl: '' },
      { text: "\\( (2, 4) \\)", imageUrl: '' },
      { text: "\\( (0, 0) \\)", imageUrl: '' },
      { text: "\\( (2, -4) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Substitute the axis of symmetry x = 2 back into the equation.",
    solution: "Substitute \\( x = 2 \\) into the equation: \\( y = -2(2 - 4) = -2 \\times (-2) = 4 \\). The vertex is at \\( (2, 4) \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 2 into the function formula.",
        workingOut: "y = -2(2 - 4)"
      },
      {
        explanation: "Simplify to find the vertical coordinate.",
        workingOut: "y = -2 \\times (-2) = 4 \\implies \\text{Vertex: } (2, 4)"
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
    id: 'y11a-3d-q2-6',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Does the quadratic function \\( y = -x(x - 4) \\) have equal zeroes or distinct zeroes?",
    options: [
      { text: "Infinite zeroes", imageUrl: '' },
      { text: "Distinct zeroes", imageUrl: '' },
      { text: "Equal zeroes", imageUrl: '' },
      { text: "No real zeroes", imageUrl: '' }
    ],
    answer: '1',
    hint: "Compare the zeroes of the function.",
    solution: "The zeroes are \\( x = 0 \\) and \\( x = 4 \\). Since they are distinct values, the function has two distinct zeroes.",
    solutionSteps: [
      {
        explanation: "Identify and compare the zeroes.",
        workingOut: "x_1 = 0 \\neq x_2 = 4 \\implies \\text{distinct zeroes}"
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
    question: "For the perfect square parabola with equation \\( y = (x - 3)^2 \\), explain its concavity.",
    options: [
      { text: "Concave down because it is a perfect square.", imageUrl: '' },
      { text: "Concave up because the vertex is at (3, 0).", imageUrl: '' },
      { text: "Concave up because the coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).", imageUrl: '' },
      { text: "Concave down because the coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).", imageUrl: '' }
    ],
    answer: '2',
    hint: "Look at the leading coefficient after expanding the perfect square.",
    solution: "Expanding \\( y = (x-3)^2 \\) yields \\( y = x^2 - 6x + 9 \\). The leading coefficient is \\( a = 1 \\), which is positive. Therefore, the parabola is concave up.",
    solutionSteps: [
      {
        explanation: "Expand the perfect square expression.",
        workingOut: "y = (x - 3)^2 = x^2 - 6x + 9"
      },
      {
        explanation: "Verify that the leading coefficient is positive.",
        workingOut: "a = 1 > 0 \\implies \\text{concave up}"
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
    question: "Find the \\( y \\)-intercept of the parabola with equation \\( y = (x - 3)^2 \\).",
    options: [
      { text: "\\( (0, -9) \\)", imageUrl: '' },
      { text: "\\( (0, -3) \\)", imageUrl: '' },
      { text: "\\( (0, 9) \\)", imageUrl: '' },
      { text: "\\( (0, 3) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Substitute \\( x = 0 \\) into the equation.",
    solution: "Substitute \\( x = 0 \\): \\( y = (0 - 3)^2 = (-3)^2 = 9 \\). The vertical intercept is at \\( (0, 9) \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 0.",
        workingOut: "y = (0 - 3)^2 = (-3)^2 = 9 \\implies (0, 9)"
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
    question: "Find the single \\( x \\)-intercept of the perfect square parabola \\( y = (x - 3)^2 \\).",
    options: [
      { text: "\\( x = -3 \\)", imageUrl: '' },
      { text: "\\( x = 9 \\)", imageUrl: '' },
      { text: "\\( x = 3 \\)", imageUrl: '' },
      { text: "\\( x = 0 \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Set \\( y = 0 \\) and solve.",
    solution: "Set \\( y = 0 \\) to find the horizontal intercept: \\( (x - 3)^2 = 0 \\implies x - 3 = 0 \\implies x = 3 \\). This is a single, repeated root.",
    solutionSteps: [
      {
        explanation: "Set the function to zero.",
        workingOut: "(x - 3)^2 = 0"
      },
      {
        explanation: "Take the square root and solve.",
        workingOut: "x - 3 = 0 \\implies x = 3"
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
    question: "For the parabola with equation \\( y = (x - 3)^2 \\), use symmetry about \\( x = 3 \\) and the vertical intercept \\( (0, 9) \\) to find another point on the parabola.",
    options: [
      { text: "\\( (6, -9) \\)", imageUrl: '' },
      { text: "\\( (6, 9) \\)", imageUrl: '' },
      { text: "\\( (-3, 9) \\)", imageUrl: '' },
      { text: "\\( (3, 9) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "The axis of symmetry is \\( x = 3 \\). A point 3 units to the left has a height of 9. Find the coordinates of the point 3 units to the right.",
    solution: "The axis of symmetry is at \\( x = 3 \\). The point \\( (0, 9) \\) is 3 units to the left of the axis of symmetry. Symmetrically, another point with the same y-value of 9 must exist 3 units to the right of the axis of symmetry, at \\( x = 3 + 3 = 6 \\). This point is \\( (6, 9) \\).",
    solutionSteps: [
      {
        explanation: "Analyze distance from axis of symmetry.",
        workingOut: "\\text{Axis: } x = 3, \\quad \\text{Distance from } x=0 \\text{ is } 3 \\text{ units}"
      },
      {
        explanation: "Reflect the point across the axis of symmetry.",
        workingOut: "x = 3 + 3 = 6 \\implies (6, 9)"
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
    id: 'y11a-3d-q3-5',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Does the quadratic function \\( y = (x - 3)^2 \\) have equal zeroes or distinct zeroes?",
    options: [
      { text: "Equal zeroes", imageUrl: '' },
      { text: "Infinite zeroes", imageUrl: '' },
      { text: "No real zeroes", imageUrl: '' },
      { text: "Distinct zeroes", imageUrl: '' }
    ],
    answer: '0',
    hint: "Check how many times the graph touches the x-axis.",
    solution: "The equation \\( y = (x - 3)^2 \\) has a single repeated root at \\( x = 3 \\). Since the roots are the same, it has equal zeroes.",
    solutionSteps: [
      {
        explanation: "Solve for the zeroes.",
        workingOut: "(x - 3)^2 = 0 \\implies x = 3 \\; (\\text{multiplicity } 2)"
      },
      {
        explanation: "Conclude that the roots are equal.",
        workingOut: "\\text{Equal zeroes}"
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
    id: 'y11a-3d-q4-1',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "For the parabola with equation \\( y = \\dfrac{1}{4}x^2 \\), find the value of \\( y \\) when \\( x = 4 \\).",
    options: [
      { text: "\\( 4 \\)", imageUrl: '' },
      { text: "\\( 2 \\)", imageUrl: '' },
      { text: "\\( 8 \\)", imageUrl: '' },
      { text: "\\( 16 \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Substitute \\( x = 4 \\) into the equation.",
    solution: "Substitute \\( x = 4 \\) into the function rule: \\( y = \\dfrac{1}{4}(4)^2 = \\dfrac{1}{4} \\times 16 = 4 \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 4 into the equation.",
        workingOut: "y = \\frac{1}{4}(4)^2"
      },
      {
        explanation: "Evaluate the power and simplify.",
        workingOut: "y = \\frac{1}{4} \\times 16 = 4"
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
    id: 'y11a-3d-q4-2',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Since \\( y = \\dfrac{1}{4}x^2 \\) passes through \\( (4, 4) \\), what other point must lie on the parabola due to symmetry about the \\( y \\)-axis?",
    options: [
      { text: "\\( (4, -4) \\)", imageUrl: '' },
      { text: "\\( (4, 4) \\)", imageUrl: '' },
      { text: "\\( (-4, -4) \\)", imageUrl: '' },
      { text: "\\( (-4, 4) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Reflect the point \\( (4, 4) \\) across the line \\( x = 0 \\).",
    solution: "The axis of symmetry is the y-axis (\\( x = 0 \\)). Reflecting the point \\( (4, 4) \\) across the y-axis yields the point \\( (-4, 4) \\).",
    solutionSteps: [
      {
        explanation: "Reflect the point across the line x = 0.",
        workingOut: "x \\to -x \\implies (-4, 4)"
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
    id: 'y11a-3d-q5a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \\( x = 3 \\) and \\( x = 5 \\).",
    options: [
      { text: "\\( y = x(x - 15) \\)", imageUrl: '' },
      { text: "\\( y = (x - 3)(x - 5) \\)", imageUrl: '' },
      { text: "\\( y = (x - 3)(x + 5) \\)", imageUrl: '' },
      { text: "\\( y = (x + 3)(x + 5) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "A zero at \\( x = k \\) corresponds to a factor of \\( (x - k) \\).",
    solution: "The zeroes are \\( 3 \\) and \\( 5 \\), so the factors are \\( (x - 3) \\) and \\( (x - 5) \\). Since the quadratic is monic, the coefficient of the product is 1: \\( y = (x - 3)(x - 5) \\).",
    solutionSteps: [
      {
        explanation: "Determine factors from the given zeroes.",
        workingOut: "x = 3 \\implies (x - 3), \\quad x = 5 \\implies (x - 5)"
      },
      {
        explanation: "Combine the factors with leading coefficient 1.",
        workingOut: "y = (x - 3)(x - 5)"
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
    id: 'y11a-3d-q5b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \\( x = 0 \\) and \\( x = 4 \\).",
    options: [
      { text: "\\( y = (x - 4)(x + 4) \\)", imageUrl: '' },
      { text: "\\( y = x(x + 4) \\)", imageUrl: '' },
      { text: "\\( y = x(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = (x - 2)(x - 2) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Use the factors \\( (x - 0) \\) and \\( (x - 4) \\).",
    solution: "The zeroes are \\( 0 \\) and \\( 4 \\). The factors are \\( (x - 0) = x \\) and \\( (x - 4) \\). The monic equation is \\( y = x(x - 4) \\).",
    solutionSteps: [
      {
        explanation: "Identify the factors.",
        workingOut: "x = 0 \\implies x, \\quad x = 4 \\implies (x - 4)"
      },
      {
        explanation: "Combine to form the equation.",
        workingOut: "y = x(x - 4)"
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
    id: 'y11a-3d-q5c',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \\( x = -2 \\) and \\( x = 6 \\).",
    options: [
      { text: "\\( y = (x - 2)(x - 6) \\)", imageUrl: '' },
      { text: "\\( y = (x - 2)(x + 6) \\)", imageUrl: '' },
      { text: "\\( y = (x + 2)(x - 6) \\)", imageUrl: '' },
      { text: "\\( y = (x + 2)(x + 6) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Subtract each zero from \\( x \\) to form the factors.",
    solution: "Zeroes are \\( -2 \\) and \\( 6 \\). The factors are \\( (x - (-2)) = (x + 2) \\) and \\( (x - 6) \\). The equation is \\( y = (x + 2)(x - 6) \\).",
    solutionSteps: [
      {
        explanation: "Create factors, taking care of negative values.",
        workingOut: "x = -2 \\implies (x - (-2)) = (x + 2), \\quad x = 6 \\implies (x - 6)"
      },
      {
        explanation: "Multiply factors to get the monic function.",
        workingOut: "y = (x + 2)(x - 6)"
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
    id: 'y11a-3d-q5d',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "Write down, in factored form, the equation of the monic quadratic function with zeroes \\( x = -5 \\) and \\( x = -2 \\).",
    options: [
      { text: "\\( y = (x - 5)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = (x + 5)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = (x + 5)(x + 2) \\)", imageUrl: '' },
      { text: "\\( y = (x - 5)(x + 2) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Subtract negative zeroes from \\( x \\).",
    solution: "The zeroes are \\( -5 \\) and \\( -2 \\). The factors are \\( (x - (-5)) = (x + 5) \\) and \\( (x - (-2)) = (x + 2) \\). The monic quadratic is \\( y = (x + 5)(x + 2) \\).",
    solutionSteps: [
      {
        explanation: "Determine factors from negative zeroes.",
        workingOut: "x_1 = -5 \\implies (x + 5), \\quad x_2 = -2 \\implies (x + 2)"
      },
      {
        explanation: "Form the equation.",
        workingOut: "y = (x + 5)(x + 2)"
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
    id: 'y11a-3d-q6a',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "A parabola is concave up and has \\( x \\)-intercepts at \\( x = 0 \\) and \\( x = 4 \\). What is the equation in factored form?",
    options: [
      { text: "\\( y = -x(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = (x + 4)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = x(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = x(x + 4) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Concave up means the leading coefficient is positive.",
    solution: "With intercepts at 0 and 4, the factors are \\( x \\) and \\( (x - 4) \\). Since the parabola is concave up, the leading coefficient is positive: \\( y = x(x - 4) \\).",
    solutionSteps: [
      {
        explanation: "Identify factors from intercepts.",
        workingOut: "x_1 = 0 \\implies x, \\quad x_2 = 4 \\implies (x - 4)"
      },
      {
        explanation: "Choose positive sign for concave up.",
        workingOut: "y = x(x - 4)"
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
    id: 'y11a-3d-q6b',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "A parabola is concave up and has \\( x \\)-intercepts at \\( x = -3 \\) and \\( x = 2 \\). What is the equation in factored form?",
    options: [
      { text: "\\( y = -(x + 3)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = (x - 3)(x + 2) \\)", imageUrl: '' },
      { text: "\\( y = (x + 3)(x + 2) \\)", imageUrl: '' },
      { text: "\\( y = (x + 3)(x - 2) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Setup factors for \\( x = -3 \\) and \\( x = 2 \\) and use a positive sign.",
    solution: "The zeroes are \\( -3 \\) and \\( 2 \\). The factors are \\( (x + 3) \\) and \\( (x - 2) \\). For a concave-up parabola, the leading coefficient is positive: \\( y = (x + 3)(x - 2) \\).",
    solutionSteps: [
      {
        explanation: "Form the factors.",
        workingOut: "x = -3 \\implies (x + 3), \\quad x = 2 \\implies (x - 2)"
      },
      {
        explanation: "Combine them for a concave-up parabola.",
        workingOut: "y = (x + 3)(x - 2)"
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
    id: 'y11a-3d-q6c',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "A parabola is concave down and has \\( x \\)-intercepts at \\( x = -2 \\) and \\( x = 4 \\). What is the equation in factored form?",
    options: [
      { text: "\\( y = (x + 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -(x - 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -(x - 2)(x + 4) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Concave down means the leading coefficient is negative.",
    solution: "The zeroes are \\( -2 \\) and \\( 4 \\). The factors are \\( (x + 2) \\) and \\( (x - 4) \\). Since the parabola is concave down, we add a negative sign: \\( y = -(x + 2)(x - 4) \\).",
    solutionSteps: [
      {
        explanation: "Identify factors from zeroes.",
        workingOut: "x = -2 \\implies (x + 2), \\quad x = 4 \\implies (x - 4)"
      },
      {
        explanation: "Combine factors with negative coefficient for concave down.",
        workingOut: "y = -(x + 2)(x - 4)"
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
    id: 'y11a-3d-q6d',
    difficulty: 'easy',
    type: 'multiple_choice',
    question: "A parabola is concave down and has \\( x \\)-intercepts at \\( x = -6 \\) and \\( x = -1 \\). What is the equation in factored form?",
    options: [
      { text: "\\( y = -(x - 6)(x - 1) \\)", imageUrl: '' },
      { text: "\\( y = (x + 6)(x + 1) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 6)(x + 1) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 6)(x - 1) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Set up factors for negative zeroes and add a negative leading sign.",
    solution: "The zeroes are \\( -6 \\) and \\( -1 \\). The factors are \\( (x + 6) \\) and \\( (x + 1) \\). As it is concave down, the equation is \\( y = -(x + 6)(x + 1) \\).",
    solutionSteps: [
      {
        explanation: "Form factors for negative intercepts.",
        workingOut: "x = -6 \\implies (x + 6), \\quad x = -1 \\implies (x + 1)"
      },
      {
        explanation: "Add a negative sign for concave down.",
        workingOut: "y = -(x + 6)(x + 1)"
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
    id: 'y11a-3d-q7a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Determine the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = x^2 - 16 \\).",
    options: [
      { text: "Zeroes: \\( x = -4, 4 \\); Vertex: \\( (0, -16) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -8, 8 \\); Vertex: \\( (0, -64) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -2, 2 \\); Vertex: \\( (0, -4) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -4, 4 \\); Vertex: \\( (0, 0) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Use difference of two squares to factorize the equation.",
    solution: "Factorize using the difference of two squares: \\( f(x) = (x - 4)(x + 4) \\). Setting \\( f(x) = 0 \\) yields zeroes at \\( x = -4 \\) and \\( x = 4 \\). The axis of symmetry is \\( x = 0 \\). Substituting \\( x = 0 \\) gives the vertex at \\( (0, -16) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the expression using the difference of squares formula.",
        workingOut: "f(x) = x^2 - 16 = (x - 4)(x + 4)"
      },
      {
        explanation: "Set the factors to zero to find the zeroes.",
        workingOut: "x - 4 = 0 \\implies x = 4, \\quad x + 4 = 0 \\implies x = -4"
      },
      {
        explanation: "Find the axis of symmetry and substitute to find the vertex.",
        workingOut: "x = \\frac{-4 + 4}{2} = 0 \\implies y = 0^2 - 16 = -16 \\implies \\text{Vertex: } (0, -16)"
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
    id: 'y11a-3d-q7b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = x^2 + 2x - 3 \\).",
    options: [
      { text: "Zeroes: \\( x = -3, 1 \\); Vertex: \\( (-1, -3) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -3, 1 \\); Vertex: \\( (-1, -4) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -2, 2 \\); Vertex: \\( (0, -3) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, 3 \\); Vertex: \\( (1, -4) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Find two numbers that multiply to -3 and add to 2 to factor the quadratic.",
    solution: "Factorize: \\( f(x) = (x + 3)(x - 1) \\). This gives zeroes at \\( x = -3 \\) and \\( x = 1 \\). The axis of symmetry is \\( x = \\dfrac{-3 + 1}{2} = -1 \\). Substitute \\( x = -1 \\) to find the vertex: \\( y = (-1)^2 + 2(-1) - 3 = 1 - 2 - 3 = -4 \\). So the vertex is at \\( (-1, -4) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the quadratic expression.",
        workingOut: "x^2 + 2x - 3 = (x + 3)(x - 1)"
      },
      {
        explanation: "Solve for the zeroes.",
        workingOut: "x + 3 = 0 \\implies x = -3, \\quad x - 1 = 0 \\implies x = 1"
      },
      {
        explanation: "Find the vertex coordinates.",
        workingOut: "x_{vertex} = \\frac{-3 + 1}{2} = -1 \\implies y_{vertex} = (-1)^2 + 2(-1) - 3 = -4 \\implies \\text{Vertex: } (-1, -4)"
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
    id: 'y11a-3d-q7c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = x^2 + 2x - 8 \\).",
    options: [
      { text: "Zeroes: \\( x = -2, 4 \\); Vertex: \\( (1, -9) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -4, 2 \\); Vertex: \\( (-1, -8) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -4, 4 \\); Vertex: \\( (0, -8) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -4, 2 \\); Vertex: \\( (-1, -9) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Find two numbers that multiply to -8 and add to 2.",
    solution: "Factorize: \\( f(x) = (x + 4)(x - 2) \\), giving zeroes at \\( x = -4 \\) and \\( x = 2 \\). The axis of symmetry is \\( x = \\dfrac{-4 + 2}{2} = -1 \\). Substitute \\( x = -1 \\): \\( y = (-1 + 4)(-1 - 2) = 3 \\times (-3) = -9 \\). The vertex is \\( (-1, -9) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the quadratic.",
        workingOut: "x^2 + 2x - 8 = (x + 4)(x - 2)"
      },
      {
        explanation: "Solve for the zeroes.",
        workingOut: "x + 4 = 0 \\implies x = -4, \\quad x - 2 = 0 \\implies x = 2"
      },
      {
        explanation: "Find the axis of symmetry and vertex.",
        workingOut: "x = -1 \\implies y = (-1)^2 + 2(-1) - 8 = -9 \\implies \\text{Vertex: } (-1, -9)"
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
    id: 'y11a-3d-q8a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Determine the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = 6x - x^2 \\).",
    options: [
      { text: "Zeroes: \\( x = 0, -6 \\); Vertex: \\( (-3, 9) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 0, 6 \\); Vertex: \\( (3, 0) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -3, 3 \\); Vertex: \\( (0, 9) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 0, 6 \\); Vertex: \\( (3, 9) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Factor out the common factor of x.",
    solution: "Factor: \\( f(x) = x(6 - x) \\). The zeroes are \\( x = 0 \\) and \\( x = 6 \\). Symmetrically, the vertex is at \\( x = 3 \\). Substituting \\( x = 3 \\) gives \\( y = 6(3) - 3^2 = 18 - 9 = 9 \\). The vertex is \\( (3, 9) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the expression.",
        workingOut: "6x - x^2 = x(6 - x)"
      },
      {
        explanation: "Solve for the zeroes.",
        workingOut: "x = 0 \\quad \\text{or} \\quad 6 - x = 0 \\implies x = 6"
      },
      {
        explanation: "Find the axis of symmetry and the vertex.",
        workingOut: "x = \\frac{0 + 6}{2} = 3 \\implies y = 6(3) - 3^2 = 9 \\implies \\text{Vertex: } (3, 9)"
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
    id: 'y11a-3d-q8b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Determine the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = -x^2 + 4x + 5 \\).",
    options: [
      { text: "Zeroes: \\( x = -5, 1 \\); Vertex: \\( (-2, 9) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, 5 \\); Vertex: \\( (2, 9) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, 5 \\); Vertex: \\( (2, 5) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, 5 \\); Vertex: \\( (2, 0) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Factor out -1 first, then factorize the resulting monic quadratic.",
    solution: "Factor out -1: \\( f(x) = -(x^2 - 4x - 5) = -(x - 5)(x + 1) \\). Zeroes are \\( x = 5 \\) and \\( x = -1 \\). Axis of symmetry: \\( x = \\dfrac{5 - 1}{2} = 2 \\). Vertex: \\( y = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9 \\). Vertex is at \\( (2, 9) \\).",
    solutionSteps: [
      {
        explanation: "Factor out -1.",
        workingOut: "-x^2 + 4x + 5 = -(x^2 - 4x - 5)"
      },
      {
        explanation: "Factor the inner quadratic expression.",
        workingOut: "= -(x - 5)(x + 1)"
      },
      {
        explanation: "Solve for the zeroes and find the vertex.",
        workingOut: "x = 5, -1 \\implies x_{vertex} = 2 \\implies y_{vertex} = -2^2 + 4(2) + 5 = 9 \\implies (2, 9)"
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
    id: 'y11a-3d-q8c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Determine the zeroes and the coordinates of the vertex for the quadratic function \\( f(x) = 12 - 4x - x^2 \\).",
    options: [
      { text: "Zeroes: \\( x = -3, 4 \\); Vertex: \\( (0.5, 9.75) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -6, 2 \\); Vertex: \\( (-2, 12) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -6, 2 \\); Vertex: \\( (-2, 16) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -2, 6 \\); Vertex: \\( (2, 16) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Rewrite the quadratic as \\( -(x^2 + 4x - 12) \\) and factorize.",
    solution: "Factor out -1: \\( f(x) = -(x^2 + 4x - 12) = -(x + 6)(x - 2) \\). Zeroes: \\( x = -6 \\) and \\( x = 2 \\). Midpoint: \\( x = -2 \\). Vertex: \\( y = 12 - 4(-2) - (-2)^2 = 12 + 8 - 4 = 16 \\). Vertex is \\( (-2, 16) \\).",
    solutionSteps: [
      {
        explanation: "Rewrite and factorize.",
        workingOut: "12 - 4x - x^2 = -(x^2 + 4x - 12) = -(x + 6)(x - 2)"
      },
      {
        explanation: "Solve for zeroes.",
        workingOut: "x = -6, \\quad x = 2"
      },
      {
        explanation: "Calculate vertex coordinates.",
        workingOut: "x = -2 \\implies y = 12 - 4(-2) - (-2)^2 = 16 \\implies \\text{Vertex: } (-2, 16)"
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
    id: 'y11a-3d-q9a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the vertex (the single horizontal intercept) and the vertical intercept for the parabola \\( y = x^2 - 4x + 4 \\).",
    options: [
      { text: "Vertex: \\( (4, 0) \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' },
      { text: "Vertex: \\( (2, 0) \\); \\( y \\)-intercept: \\( (0, -4) \\)", imageUrl: '' },
      { text: "Vertex: \\( (-2, 0) \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' },
      { text: "Vertex: \\( (2, 0) \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Express the quadratic as a perfect square.",
    solution: "Factorize as a perfect square: \\( y = (x - 2)^2 \\). The vertex (and single x-intercept) is at \\( (2, 0) \\). Substitute \\( x = 0 \\) to find the y-intercept: \\( y = 4 \\), so \\( (0, 4) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the expression as a perfect square.",
        workingOut: "x^2 - 4x + 4 = (x - 2)^2"
      },
      {
        explanation: "Determine the single x-intercept which is the vertex.",
        workingOut: "x - 2 = 0 \\implies x = 2 \\implies \\text{Vertex: } (2, 0)"
      },
      {
        explanation: "Find the y-intercept.",
        workingOut: "x = 0 \\implies y = 0^2 - 4(0) + 4 = 4 \\implies (0, 4)"
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
    id: 'y11a-3d-q9b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the vertex (the single horizontal intercept) and the vertical intercept for the parabola \\( y = -x^2 + 6x - 9 \\).",
    options: [
      { text: "Vertex: \\( (3, 0) \\); \\( y \\)-intercept: \\( (0, 9) \\)", imageUrl: '' },
      { text: "Vertex: \\( (3, 0) \\); \\( y \\)-intercept: \\( (0, -9) \\)", imageUrl: '' },
      { text: "Vertex: \\( (-3, 0) \\); \\( y \\)-intercept: \\( (0, -9) \\)", imageUrl: '' },
      { text: "Vertex: \\( (3, 0) \\); \\( y \\)-intercept: \\( (0, 0) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Factor out -1 to recognize the perfect square form.",
    solution: "Factor: \\( y = -(x^2 - 6x + 9) = -(x - 3)^2 \\). The vertex is at \\( (3, 0) \\). Substitute \\( x = 0 \\) to get the y-intercept: \\( y = -9 \\), so \\( (0, -9) \\).",
    solutionSteps: [
      {
        explanation: "Factor out -1 and recognize the perfect square.",
        workingOut: "y = -(x^2 - 6x + 9) = -(x - 3)^2"
      },
      {
        explanation: "Determine the vertex.",
        workingOut: "x - 3 = 0 \\implies x = 3 \\implies \\text{Vertex: } (3, 0)"
      },
      {
        explanation: "Find the y-intercept.",
        workingOut: "x = 0 \\implies y = -0^2 + 6(0) - 9 = -9 \\implies (0, -9)"
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
    id: 'y11a-3d-q10a',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the \\( x \\)-intercepts and the \\( y \\)-intercept of the non-monic quadratic function \\( y = 2x^2 + 9x + 4 \\).",
    options: [
      { text: "\\( x \\)-intercepts: \\( x = -4, -\\dfrac{1}{2} \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = -4, -\\dfrac{1}{2} \\); \\( y \\)-intercept: \\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = 4, \\dfrac{1}{2} \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = -2, -4 \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Factor by grouping to solve \\( 2x^2 + 9x + 4 = 0 \\).",
    solution: "Factor the quadratic: \\( 2x^2 + 9x + 4 = 2x^2 + 8x + x + 4 = 2x(x + 4) + 1(x + 4) = (2x + 1)(x + 4) \\).\\nSetting to zero gives zeroes at \\( x = -\\dfrac{1}{2} \\) and \\( x = -4 \\). Substitute \\( x = 0 \\) to find the y-intercept: \\( y = 4 \\).",
    solutionSteps: [
      {
        explanation: "Factor the non-monic expression by grouping.",
        workingOut: "2x^2 + 9x + 4 = 2x^2 + 8x + x + 4 = 2x(x+4) + 1(x+4) = (2x+1)(x+4)"
      },
      {
        explanation: "Solve for x-intercepts by setting the factors to zero.",
        workingOut: "2x + 1 = 0 \\implies x = -\\frac{1}{2}, \\quad x + 4 = 0 \\implies x = -4"
      },
      {
        explanation: "Identify y-intercept by substituting x = 0.",
        workingOut: "y = 2(0)^2 + 9(0) + 4 = 4 \\implies (0, 4)"
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
    id: 'y11a-3d-q10b',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the \\( x \\)-intercepts and the \\( y \\)-intercept of the non-monic quadratic function \\( y = 2x^2 + 3x - 5 \\).",
    options: [
      { text: "\\( x \\)-intercepts: \\( x = 1, -\\dfrac{5}{2} \\); \\( y \\)-intercept: \\( (0, -5) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = 1, 5 \\); \\( y \\)-intercept: \\( (0, -5) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = 1, -\\dfrac{5}{2} \\); \\( y \\)-intercept: \\( (0, 5) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = -1, \\dfrac{5}{2} \\); \\( y \\)-intercept: \\( (0, -5) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Factor by grouping: look for numbers that multiply to -10 and add to 3.",
    solution: "Factor: \\( 2x^2 + 3x - 5 = 2x^2 + 5x - 2x - 5 = x(2x + 5) - 1(2x + 5) = (2x + 5)(x - 1) \\). zeroes: \\( x = -\\dfrac{5}{2} \\) and \\( x = 1 \\). Substitute \\( x = 0 \\) to find y-intercept: \\( y = -5 \\).",
    solutionSteps: [
      {
        explanation: "Factorize by grouping.",
        workingOut: "2x^2 + 3x - 5 = 2x^2 - 2x + 5x - 5 = 2x(x - 1) + 5(x - 1) = (2x + 5)(x - 1)"
      },
      {
        explanation: "Solve for horizontal intercepts.",
        workingOut: "2x + 5 = 0 \\implies x = -\\frac{5}{2}, \\quad x - 1 = 0 \\implies x = 1"
      },
      {
        explanation: "Identify y-intercept.",
        workingOut: "x = 0 \\implies y = -5 \\implies (0, -5)"
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
    id: 'y11a-3d-q10c',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the \\( x \\)-intercepts and the \\( y \\)-intercept of the non-monic quadratic function \\( y = 3x^2 + 4x - 4 \\).",
    options: [
      { text: "\\( x \\)-intercepts: \\( x = \\dfrac{2}{3}, -2 \\); \\( y \\)-intercept: \\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = -\\dfrac{2}{3}, 2 \\); \\( y \\)-intercept: \\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = 1, -4 \\); \\( y \\)-intercept: \\( (0, -4) \\)", imageUrl: '' },
      { text: "\\( x \\)-intercepts: \\( x = \\dfrac{2}{3}, -2 \\); \\( y \\)-intercept: \\( (0, 4) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Factor the expression: product is -12, sum is 4.",
    solution: "Factor: \\( 3x^2 + 4x - 4 = 3x^2 + 6x - 2x - 4 = 3x(x + 2) - 2(x + 2) = (3x - 2)(x + 2) \\). Zeroes: \\( x = \\dfrac{2}{3} \\) and \\( x = -2 \\). Substitute \\( x = 0 \\) to find y-intercept: \\( y = -4 \\).",
    solutionSteps: [
      {
        explanation: "Factorize the expression.",
        workingOut: "3x^2 + 4x - 4 = 3x^2 + 6x - 2x - 4 = 3x(x+2) - 2(x+2) = (3x-2)(x+2)"
      },
      {
        explanation: "Solve for x-intercepts.",
        workingOut: "3x - 2 = 0 \\implies x = \\frac{2}{3}, \\quad x + 2 = 0 \\implies x = -2"
      },
      {
        explanation: "Identify y-intercept.",
        workingOut: "x = 0 \\implies y = -4 \\implies (0, -4)"
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
    id: 'y11a-3d-q11a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "A parabola is concave up, has \\( x \\)-intercepts at \\( x = -2 \\) and \\( x = 3 \\), and a \\( y \\)-intercept at \\( -6 \\). Find its equation in factored form.",
    options: [
      { text: "\\( y = 2(x + 2)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 2)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = (x - 2)(x + 3) \\)", imageUrl: '' },
      { text: "\\( y = (x + 2)(x - 3) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Write the general form \\( y = a(x + 2)(x - 3) \\) and find \\( a \\) using the y-intercept.",
    solution: "Using the intercepts, the general form is \\( y = a(x + 2)(x - 3) \\). The vertical intercept is at \\( (0, -6) \\). Substitute \\( x = 0, y = -6 \\):\\n\\( -6 = a(0 + 2)(0 - 3) \\implies -6 = -6a \\implies a = 1 \\). Therefore, the equation is \\( y = (x + 2)(x - 3) \\).",
    solutionSteps: [
      {
        explanation: "Write the equation using horizontal intercepts.",
        workingOut: "y = a(x + 2)(x - 3)"
      },
      {
        explanation: "Substitute the y-intercept point (0, -6).",
        workingOut: "-6 = a(0 + 2)(0 - 3) = -6a"
      },
      {
        explanation: "Solve for the coefficient a.",
        workingOut: "a = 1 \\implies y = (x + 2)(x - 3)"
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
    id: 'y11a-3d-q11b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "A parabola is concave down, has \\( x \\)-intercepts at \\( x = -4 \\) and \\( x = 2 \\), and a \\( y \\)-intercept at \\( 8 \\). Find its equation in factored form.",
    options: [
      { text: "\\( y = -(x + 4)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = (x + 4)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = -2(x + 4)(x - 2) \\)", imageUrl: '' },
      { text: "\\( y = -(x - 4)(x + 2) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Substitute \\( (0, 8) \\) into \\( y = a(x + 4)(x - 2) \\).",
    solution: "The general form is \\( y = a(x + 4)(x - 2) \\). Substituting the vertical intercept \\( (0, 8) \\):\\n\\( 8 = a(0 + 4)(0 - 2) \\implies 8 = -8a \\implies a = -1 \\). Thus, the equation is \\( y = -(x + 4)(x - 2) \\).",
    solutionSteps: [
      {
        explanation: "Write equation using intercepts.",
        workingOut: "y = a(x + 4)(x - 2)"
      },
      {
        explanation: "Substitute the point (0, 8) and solve.",
        workingOut: "8 = a(0 + 4)(0 - 2) = -8a \\implies a = -1"
      },
      {
        explanation: "State the final equation.",
        workingOut: "y = -(x + 4)(x - 2)"
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
    id: 'y11a-3d-q11c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "A parabola is concave up, has \\( x \\)-intercepts at \\( x = -3 \\) and \\( x = 3 \\), and a \\( y \\)-intercept at \\( -18 \\). Find its equation in factored form.",
    options: [
      { text: "\\( y = (x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = 2(x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = -2(x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = 3(x + 3)(x - 3) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Set up \\( y = a(x + 3)(x - 3) \\) and solve using the point \\( (0, -18) \\).",
    solution: "The general form is \\( y = a(x + 3)(x - 3) \\). Substitute \\( (0, -18) \\):\\n\\( -18 = a(0 + 3)(0 - 3) \\implies -18 = -9a \\implies a = 2 \\). So the equation is \\( y = 2(x + 3)(x - 3) \\).",
    solutionSteps: [
      {
        explanation: "Write general factored equation.",
        workingOut: "y = a(x + 3)(x - 3)"
      },
      {
        explanation: "Substitute (0, -18) to solve for a.",
        workingOut: "-18 = a(0 + 3)(0 - 3) = -9a \\implies a = 2"
      },
      {
        explanation: "Write final equation.",
        workingOut: "y = 2(x + 3)(x - 3)"
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
    id: 'y11a-3d-q11d',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "A parabola is concave down, has \\( x \\)-intercepts at \\( x = -3 \\) and \\( x = 3 \\), and a \\( y \\)-intercept at \\( 3 \\). Find its equation in factored form.",
    options: [
      { text: "\\( y = \\dfrac{1}{3}(x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = -\\dfrac{1}{3}(x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = -3(x + 3)(x - 3) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 3)(x - 3) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Use the general factored form and solve for \\( a \\) using the intercept \\( (0, 3) \\).",
    solution: "The general equation is \\( y = a(x + 3)(x - 3) \\). Substitute \\( (0, 3) \\):\\n\\( 3 = a(0 + 3)(0 - 3) \\implies 3 = -9a \\implies a = -\\dfrac{1}{3} \\). The equation is \\( y = -\\dfrac{1}{3}(x + 3)(x - 3) \\).",
    solutionSteps: [
      {
        explanation: "Write general equation.",
        workingOut: "y = a(x + 3)(x - 3)"
      },
      {
        explanation: "Substitute (0, 3).",
        workingOut: "3 = a(0 + 3)(0 - 3) = -9a"
      },
      {
        explanation: "Solve for the coefficient a.",
        workingOut: "a = -\\frac{1}{3} \\implies y = -\\frac{1}{3}(x + 3)(x - 3)"
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
    id: 'y11a-3d-q12a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = 2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\).",
    options: [
      { text: "\\( y = 2(x - 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -2(x - 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = 4(x - 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = (x - 2)(x - 4) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Start with \\( y = a(x - 2)(x - 4) \\) and find \\( a \\) using \\( (0, 16) \\).",
    solution: "Factored form: \\( y = a(x - 2)(x - 4) \\). Substitute \\( (0, 16) \\):\\n\\( 16 = a(0 - 2)(0 - 4) \\implies 16 = 8a \\implies a = 2 \\). The equation is \\( y = 2(x - 2)(x - 4) \\).",
    solutionSteps: [
      {
        explanation: "Write factored form with intercepts.",
        workingOut: "y = a(x - 2)(x - 4)"
      },
      {
        explanation: "Substitute the y-intercept (0, 16) and evaluate.",
        workingOut: "16 = a(0 - 2)(0 - 4) = 8a \\implies a = 2"
      },
      {
        explanation: "State the final equation.",
        workingOut: "y = 2(x - 2)(x - 4)"
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
    id: 'y11a-3d-q12b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -3, 1 \\) and \\( y \\)-intercept at \\( y = 6 \\).",
    options: [
      { text: "\\( y = -3(x + 3)(x - 1) \\)", imageUrl: '' },
      { text: "\\( y = 2(x + 3)(x - 1) \\)", imageUrl: '' },
      { text: "\\( y = -2(x + 3)(x - 1) \\)", imageUrl: '' },
      { text: "\\( y = (x + 3)(x - 1) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Substitute \\( (0, 6) \\) into \\( y = a(x + 3)(x - 1) \\).",
    solution: "Factored form: \\( y = a(x + 3)(x - 1) \\). Substitute \\( (0, 6) \\):\\n\\( 6 = a(0 + 3)(0 - 1) \\implies 6 = -3a \\implies a = -2 \\). The equation is \\( y = -2(x + 3)(x - 1) \\).",
    solutionSteps: [
      {
        explanation: "Form the initial equation.",
        workingOut: "y = a(x + 3)(x - 1)"
      },
      {
        explanation: "Substitute the y-intercept.",
        workingOut: "6 = a(0 + 3)(0 - 1) = -3a \\implies a = -2"
      },
      {
        explanation: "State final equation.",
        workingOut: "y = -2(x + 3)(x - 1)"
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
    id: 'y11a-3d-q12c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\).",
    options: [
      { text: "\\( y = -2(x + 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -4(x + 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = 2(x + 2)(x - 4) \\)", imageUrl: '' },
      { text: "\\( y = -(x + 2)(x - 4) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Substitute \\( (0, 16) \\) into \\( y = a(x + 2)(x - 4) \\).",
    solution: "Factored form: \\( y = a(x + 2)(x - 4) \\). Substitute \\( (0, 16) \\):\\n\\( 16 = a(0 + 2)(0 - 4) \\implies 16 = -8a \\implies a = -2 \\). The equation is \\( y = -2(x + 2)(x - 4) \\).",
    solutionSteps: [
      {
        explanation: "Set up general equation.",
        workingOut: "y = a(x + 2)(x - 4)"
      },
      {
        explanation: "Substitute the vertical intercept.",
        workingOut: "16 = a(0 + 2)(0 - 4) = -8a \\implies a = -2"
      },
      {
        explanation: "State final equation.",
        workingOut: "y = -2(x + 2)(x - 4)"
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
    id: 'y11a-3d-q12d',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -1, -3  \\) and \\( y \\)-intercept at \\( y = 6 \\).",
    options: [
      { text: "\\( y = 3(x + 1)(x + 3) \\)", imageUrl: '' },
      { text: "\\( y = -2(x + 1)(x + 3) \\)", imageUrl: '' },
      { text: "\\( y = (x + 1)(x + 3) \\)", imageUrl: '' },
      { text: "\\( y = 2(x + 1)(x + 3) \\)", imageUrl: '' }
    ],
    answer: '3',
    hint: "Substitute \\( (0, 6) \\) into \\( y = a(x + 1)(x + 3) \\).",
    solution: "Factored form: \\( y = a(x + 1)(x + 3) \\). Substitute \\( (0, 6) \\):\\n\\( 6 = a(0 + 1)(0 + 3) \\implies 6 = 3a \\implies a = 2 \\). The equation is \\( y = 2(x + 1)(x + 3) \\).",
    solutionSteps: [
      {
        explanation: "Set up factored equation.",
        workingOut: "y = a(x + 1)(x + 3)"
      },
      {
        explanation: "Substitute the vertical intercept.",
        workingOut: "6 = a(0 + 1)(0 + 3) = 3a \\implies a = 2"
      },
      {
        explanation: "State final equation.",
        workingOut: "y = 2(x + 1)(x + 3)"
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
    id: 'y11a-3d-q13b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Identify the two points through which all four parabolas from the family \\( y = a(x - 2)(x - 4) \\) pass, regardless of the value of \\( a \\).",
    options: [
      { text: "\\( (2, 0) \\) and \\( (4, 0) \\)", imageUrl: '' },
      { text: "\\( (0, 2) \\) and \\( (0, 4) \\)", imageUrl: '' },
      { text: "\\( (0, 8) \\) only", imageUrl: '' },
      { text: "\\( (2, 4) \\) and \\( (4, 2) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Think about what values of x make \\( y = 0 \\) regardless of what \\( a \\) is.",
    solution: "The equation is \\( y = a(x - 2)(x - 4) \\). If we substitute the horizontal intercepts \\( x = 2 \\) or \\( x = 4 \\), the product becomes zero, meaning \\( y = 0 \\) regardless of \\( a \\). Therefore, all curves in this family pass through \\( (2, 0) \\) and \\( (4, 0) \\).",
    solutionSteps: [
      {
        explanation: "Analyze the product in the function.",
        workingOut: "y = a(x - 2)(x - 4)"
      },
      {
        explanation: "Set x equal to the zeroes of the expression.",
        workingOut: "x = 2 \\implies y = a(0)(2 - 4) = 0, \\quad x = 4 \\implies y = a(4 - 2)(0) = 0"
      },
      {
        explanation: "Conclude that the points are independent of the value of a.",
        workingOut: "(2, 0) \\quad \\text{and} \\quad (4, 0)"
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
    id: 'y11a-3d-q14a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Find the zeroes and the coordinates of the vertex for the quadratic function \\( y = 3x^2 - 12 \\).",
    options: [
      { text: "Zeroes: \\( x = -2, 2 \\); Vertex: \\( (0, -12) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -4, 4 \\); Vertex: \\( (0, -12) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, 1 \\); Vertex: \\( (0, -12) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -2, 2 \\); Vertex: \\( (0, 0) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Factor out the common factor 3, then use difference of squares.",
    solution: "Factor out 3: \\( y = 3(x^2 - 4) = 3(x - 2)(x + 2) \\). Zeroes are at \\( x = 2 \\) and \\( x = -2 \\). The vertex is on the axis of symmetry \\( x = 0 \\). Substituting \\( x = 0 \\) yields \\( y = -12 \\). The vertex is \\( (0, -12) \\).",
    solutionSteps: [
      {
        explanation: "Factor out the common numerical factor.",
        workingOut: "3x^2 - 12 = 3(x^2 - 4)"
      },
      {
        explanation: "Factor the difference of squares.",
        workingOut: "= 3(x - 2)(x + 2)"
      },
      {
        explanation: "Find zeroes and evaluate vertex.",
        workingOut: "x = 2, -2 \\implies x_{vertex} = 0 \\implies y_{vertex} = -12 \\implies (0, -12)"
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
    id: 'y11a-3d-q14b',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the zeroes and the coordinates of the vertex for the quadratic function \\( y = 2x^2 + x - 3 \\).",
    options: [
      { text: "Zeroes: \\( x = 1, -\\dfrac{3}{2} \\); Vertex: \\( \\left(-\\dfrac{1}{4}, -\\dfrac{25}{8}\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 1, -\\dfrac{3}{2} \\); Vertex: \\( \\left(-\\dfrac{1}{4}, -3\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, \\dfrac{3}{2} \\); Vertex: \\( \\left(\\dfrac{1}{4}, -\\dfrac{25}{8}\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = -1, -\\dfrac{3}{2} \\); Vertex: \\( \\left(-\\dfrac{1}{4}, -\\dfrac{25}{8}\\right) \\)", imageUrl: '' }
    ],
    answer: '0',
    hint: "Factor the quadratic by grouping: product is -6, sum is 1.",
    solution: "Factor: \\( 2x^2 + x - 3 = 2x^2 + 3x - 2x - 3 = x(2x + 3) - 1(2x + 3) = (2x + 3)(x - 1) \\). Zeroes are \\( x = -\\dfrac{3}{2} \\) and \\( x = 1 \\). Axis of symmetry is the midpoint: \\( x = -\\dfrac{1}{4} \\). Vertex y-value: \\( y = 2\\left(-\\dfrac{1}{4}\\right)^2 + \\left(-\\dfrac{1}{4}\\right) - 3 = \\dfrac{2}{16} - \\dfrac{1}{4} - 3 = -\\dfrac{25}{8} \\). The vertex is \\( \\left(-\\dfrac{1}{4}, -\\dfrac{25}{8}\\right) \\).",
    solutionSteps: [
      {
        explanation: "Factorize the quadratic by grouping.",
        workingOut: "2x^2 + x - 3 = 2x^2 - 2x + 3x - 3 = 2x(x - 1) + 3(x - 1) = (2x + 3)(x - 1)"
      },
      {
        explanation: "Solve for x zeroes.",
        workingOut: "2x + 3 = 0 \\implies x = -\\frac{3}{2}, \\quad x - 1 = 0 \\implies x = 1"
      },
      {
        explanation: "Calculate axis of symmetry and vertex coordinates.",
        workingOut: "x = \\frac{1 - 1.5}{2} = -\\frac{1}{4} \\implies y = 2\\left(-\\frac{1}{4}\\right)^2 - \\frac{1}{4} - 3 = -\\frac{25}{8}"
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
    id: 'y11a-3d-q14c',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Find the zeroes and the coordinates of the vertex for the quadratic function \\( y = 5x - 2 - 3x^2 \\).",
    options: [
      { text: "Zeroes: \\( x = -1, -\\dfrac{2}{3} \\); Vertex: \\( \\left(-\\dfrac{5}{6}, \\dfrac{1}{12}\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 1, \\dfrac{2}{3} \\); Vertex: \\( \\left(\\dfrac{5}{6}, \\dfrac{1}{12}\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 2, \\dfrac{1}{3} \\); Vertex: \\( \\left(1, 0\\right) \\)", imageUrl: '' },
      { text: "Zeroes: \\( x = 1, \\dfrac{2}{3} \\); Vertex: \\( \\left(\\dfrac{5}{6}, -\\dfrac{1}{12}\\right) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Rewrite the equation as \\( -(3x^2 - 5x + 2) \\) and factorize.",
    solution: "Rewrite and factor out -1: \\( y = -(3x^2 - 5x + 2) = -(3x - 2)(x - 1) \\). Zeroes are at \\( x = \\dfrac{2}{3} \\) and \\( x = 1 \\). Axis of symmetry: \\( x = \\dfrac{5}{6} \\). Vertex y-value: \\( y = 5\\left(\\dfrac{5}{6}\\right) - 2 - 3\\left(\\dfrac{5}{6}\\right)^2 = \\dfrac{25}{6} - 2 - \\dfrac{75}{36} = \\dfrac{1}{12} \\). Vertex is \\( \\left(\\dfrac{5}{6}, \\dfrac{1}{12}\\right) \\).",
    solutionSteps: [
      {
        explanation: "Factor out -1 and rearrange terms.",
        workingOut: "5x - 2 - 3x^2 = -(3x^2 - 5x + 2)"
      },
      {
        explanation: "Factor the quadratic inside the brackets.",
        workingOut: "= -(3x - 2)(x - 1)"
      },
      {
        explanation: "Find zeroes and calculate vertex.",
        workingOut: "x = \\frac{2}{3}, 1 \\implies x_{vertex} = \\frac{5}{6} \\implies y = 5\\left(\\frac{5}{6}\\right) - 2 - 3\\left(\\frac{5}{6}\\right)^2 = \\frac{1}{12}"
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
    id: 'y11a-3d-q15a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of the parabola where the coefficient of \\( x^2 \\) is 2.",
    options: [
      { text: "\\( y = -2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = 2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = (x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = 2(x + 3)(x + 9) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "The coefficient of \\( x^2 \\) in the general form expansion is the parameter \\( a \\).",
    solution: "The general form is \\( y = a(x - 3)(x - 9) \\). Expanding this gives \\( y = a(x^2 - 12x + 27) \\). The coefficient of \\( x^2 \\) is \\( a \\). Since the coefficient must be 2, we have \\( a = 2 \\). The equation is \\( y = 2(x - 3)(x - 9) \\).",
    solutionSteps: [
      {
        explanation: "Expand general form to identify coefficient of x^2.",
        workingOut: "y = a(x^2 - 12x + 27)"
      },
      {
        explanation: "Set the parameter a equal to the given coefficient value.",
        workingOut: "a = 2 \\implies y = 2(x - 3)(x - 9)"
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
    id: 'y11a-3d-q15b',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of the parabola where the \\( y \\)-intercept is \\( -54 \\).",
    options: [
      { text: "\\( y = 2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -6(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -(x - 3)(x - 9) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Substitute \\( (0, -54) \\) into the general equation and solve for \\( a \\).",
    solution: "The general form is \\( y = a(x - 3)(x - 9) \\). Substitute the vertical intercept \\( (0, -54) \\):\\n\\( -54 = a(0 - 3)(0 - 9) \\implies -54 = 27a \\implies a = -2 \\). Thus, the equation is \\( y = -2(x - 3)(x - 9) \\).",
    solutionSteps: [
      {
        explanation: "Substitute the vertical intercept coordinates into general form.",
        workingOut: "-54 = a(0 - 3)(0 - 9)"
      },
      {
        explanation: "Simplify and solve for the coefficient a.",
        workingOut: "-54 = 27a \\implies a = -2 \\implies y = -2(x - 3)(x - 9)"
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
    id: 'y11a-3d-q15c',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of the parabola where the vertex is \\( (6, -18) \\).",
    options: [
      { text: "\\( y = -18(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = 2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = (x - 3)(x - 9) \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Substitute the vertex coordinates \\( (6, -18) \\) into the general equation.",
    solution: "Substitute \\( x = 6 \\) and \\( y = -18 \\) into the general equation \\( y = a(x - 3)(x - 9) \\):\\n\\( -18 = a(6 - 3)(6 - 9) \\implies -18 = a(3)(-3) \\implies -18 = -9a \\implies a = 2 \\). The equation is \\( y = 2(x - 3)(x - 9) \\).",
    solutionSteps: [
      {
        explanation: "Substitute the coordinates of the vertex.",
        workingOut: "-18 = a(6 - 3)(6 - 9)"
      },
      {
        explanation: "Simplify to solve for the coefficient a.",
        workingOut: "-18 = -9a \\implies a = 2 \\implies y = 2(x - 3)(x - 9)"
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
    id: 'y11a-3d-q15d',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of the parabola which passes through \\( (2, -14) \\).",
    options: [
      { text: "\\( y = 2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -2(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -(x - 3)(x - 9) \\)", imageUrl: '' },
      { text: "\\( y = -7(x - 3)(x - 9) \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Substitute the coordinates \\( (2, -14) \\) into the general equation.",
    solution: "Substitute \\( x = 2 \\) and \\( y = -14 \\) into \\( y = a(x - 3)(x - 9) \\):\\n\\( -14 = a(2 - 3)(2 - 9) \\implies -14 = a(-1)(-7) \\implies -14 = 7a \\implies a = -2 \\). The equation is \\( y = -2(x - 3)(x - 9) \\).",
    solutionSteps: [
      {
        explanation: "Substitute the given point into general form.",
        workingOut: "-14 = a(2 - 3)(2 - 9)"
      },
      {
        explanation: "Simplify and solve for the coefficient a.",
        workingOut: "-14 = 7a \\implies a = -2 \\implies y = -2(x - 3)(x - 9)"
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
    id: 'y11a-3d-q16a',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "Factor the quadratic \\( f(x) = x^2 - 4x - 5 \\) and find the equation of its axis of symmetry.",
    options: [
      { text: "\\( x = 4 \\)", imageUrl: '' },
      { text: "\\( x = 5 \\)", imageUrl: '' },
      { text: "\\( x = 2 \\)", imageUrl: '' },
      { text: "\\( x = -2 \\)", imageUrl: '' }
    ],
    answer: '2',
    hint: "Factor the expression to find zeroes, then find their midpoint.",
    solution: "Factorize: \\( f(x) = (x - 5)(x + 1) \\), giving zeroes at \\( x = 5 \\) and \\( x = -1 \\). Symmetrically, the axis of symmetry is the midpoint: \\( x = \\dfrac{5 - 1}{2} = 2 \\).",
    solutionSteps: [
      {
        explanation: "Factorize the expression.",
        workingOut: "x^2 - 4x - 5 = (x - 5)(x + 1)"
      },
      {
        explanation: "Find zeroes and calculate their midpoint.",
        workingOut: "x_1 = 5, \\; x_2 = -1 \\implies x = \\frac{5 - 1}{2} = 2"
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
    id: 'y11a-3d-q16bi',
    difficulty: 'hard',
    type: 'multiple_choice',
    question: "Substitute and expand \\( f(2 + h) \\) and \\( f(2 - h) \\) for \\( f(x) = x^2 - 4x - 5 \\). Both simplify to the same expression. What is that expression?",
    options: [
      { text: "\\( h^2 + 9 \\)", imageUrl: '' },
      { text: "\\( h^2 - 9 \\)", imageUrl: '' },
      { text: "\\( h^2 - 5 \\)", imageUrl: '' },
      { text: "\\( 4h^2 - 9 \\)", imageUrl: '' }
    ],
    answer: '1',
    hint: "Substitute \\( x = 2 \\pm h \\) into \\( x^2 - 4x - 5 \\) and simplify.",
    solution: "Substitute \\( x = 2 + h \\):\\n\\( f(2+h) = (2+h)^2 - 4(2+h) - 5 = (4 + 4h + h^2) - (8 + 4h) - 5 = h^2 - 9 \\).\\nSubstitute \\( x = 2 - h \\):\\n\\( f(2-h) = (2-h)^2 - 4(2-h) - 5 = (4 - 4h + h^2) - (8 - 4h) - 5 = h^2 - 9 \\).",
    solutionSteps: [
      {
        explanation: "Substitute x = 2 + h and simplify.",
        workingOut: "f(2+h) = (2+h)^2 - 4(2+h) - 5 = h^2 - 9"
      },
      {
        explanation: "Substitute x = 2 - h and simplify.",
        workingOut: "f(2-h) = (2-h)^2 - 4(2-h) - 5 = h^2 - 9"
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
    id: 'y11a-3d-q16bii',
    difficulty: 'medium',
    type: 'multiple_choice',
    question: "What geometric feature of the parabola does the algebraic result \\( f(2 + h) = f(2 - h) \\) demonstrate?",
    options: [
      { text: "It demonstrates that the parabola has two distinct real zeroes.", imageUrl: '' },
      { text: "It demonstrates that the y-intercept is at \\( y = -5 \\).", imageUrl: '' },
      { text: "It demonstrates that the parabola is symmetrical about the vertical line \\( x = 2 \\).", imageUrl: '' },
      { text: "It demonstrates that the parabola is concave up.", imageUrl: '' }
    ],
    answer: '2',
    hint: "Equal output heights at equal distances left and right of \\( x = 2 \\) indicate symmetry.",
    solution: "The result shows that at a distance \\( h \\) to the left or right of \\( x = 2 \\), the heights are equal. This shows that the parabola is symmetrical about the line \\( x = 2 \\).",
    solutionSteps: [
      {
        explanation: "Analyze symmetry relation.",
        workingOut: "f(2 + h) = f(2 - h) \\implies \\text{symmetry about } x = 2"
      }
    ]
  },
];
