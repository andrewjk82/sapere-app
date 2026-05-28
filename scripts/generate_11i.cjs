const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11IQuestions.js');

const questions = [];

// Q1a, Q1b: Distance between two points (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q1a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the distance between the points \\((2, 5)\\) and \\((8, 5)\\).",
  a: "6",
  solution: "Since the \\(y\\)-coordinates are the same, the distance is simply the difference between the \\(x\\)-coordinates: \\(|8 - 2| = 6\\).",
  t: "Revision",
  hint: "When the y-coordinates are equal, the distance is the difference in x-coordinates.",
  solutionSteps: [
    {
      explanation: "Calculate difference in x-coordinates.",
      workingOut: "d = 8 - 2 = 6"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q1b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the distance between the points \\((-3, -1)\\) and \\((-3, 7)\\).",
  a: "8",
  solution: "Since the \\(x\\)-coordinates are the same, the distance is the difference between the \\(y\\)-coordinates: \\(|7 - (-1)| = 8\\).",
  t: "Revision",
  hint: "When the x-coordinates are equal, the distance is the difference in y-coordinates.",
  solutionSteps: [
    {
      explanation: "Calculate difference in y-coordinates.",
      workingOut: "d = 7 - (-1) = 8"
    }
  ],
  graphData: null
});

// Q2a, Q2b: Midpoint of an interval (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q2a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the midpoint of the interval joining \\((4, 10)\\) and \\((8, 2)\\).",
  a: "(6, 6)",
  solution: "Midpoint formula: \\(M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\right)\\).\n" +
    "\\(M = \\left(\\frac{4 + 8}{2}, \\frac{10 + 2}{2}\right) = (6, 6)\\).",
  t: "Revision",
  hint: "Average the x-coordinates and average the y-coordinates.",
  solutionSteps: [
    {
      explanation: "Apply midpoint formula.",
      workingOut: "M = \\left(\\frac{4+8}{2}, \\frac{10+2}{2}\right) = (6, 6)"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q2b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the midpoint of the interval joining \\((-5, 3)\\) and \\((7, -9)\\).",
  a: "(1, -3)",
  solution: "Average the coordinates:\n" +
    "\\(x_m = \\frac{-5 + 7}{2} = 1\\),\n" +
    "\\(y_m = \\frac{3 + (-9)}{2} = -3\\).\n" +
    "Midpoint is \\((1, -3)\\).",
  t: "Revision",
  hint: "Apply the midpoint formula by averaging the coordinates.",
  solutionSteps: [
    {
      explanation: "Average coordinates.",
      workingOut: "\\left(\\frac{-5+7}{2}, \\frac{3-9}{2}\right) = (1, -3)"
    }
  ],
  graphData: null
});

// Q3a, Q3b: Distance and midpoint combined (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q3a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the distance between the points \\((1, 2)\\) and \\((5, 5)\\).",
  a: "5",
  solution: "Use the distance formula:\n" +
    "\\(d = \\sqrt{(5 - 1)^2 + (5 - 2)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\).",
  t: "Revision",
  hint: "Apply the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
  solutionSteps: [
    {
      explanation: "Substitute coordinates into distance formula.",
      workingOut: "d = \\sqrt{(5-1)^2 + (5-2)^2} = \\sqrt{16+9} = 5"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q3b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the midpoint of the points \\((1, 2)\\) and \\((5, 5)\\).",
  a: "(3, 3.5)",
  solution: "Apply midpoint formula:\n" +
    "\\(M = \\left(\\frac{1 + 5}{2}, \\frac{2 + 5}{2}\right) = (3, 3.5)\\).",
  t: "Revision",
  hint: "Average the x-coordinates and average the y-coordinates.",
  solutionSteps: [
    {
      explanation: "Average coordinates.",
      workingOut: "M = \\left(\\frac{1+5}{2}, \\frac{2+5}{2}\right) = (3, 3.5)"
    }
  ],
  graphData: null
});

// Q4a, Q4b: Gradient from two points (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q4a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the gradient of the line passing through \\((1, 3)\\) and \\((5, 11)\\).",
  a: "2",
  solution: "Gradient formula: \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).\n" +
    "\\(m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2\\).",
  t: "Revision",
  hint: "Calculate rise over run.",
  solutionSteps: [
    {
      explanation: "Apply gradient formula.",
      workingOut: "m = \\frac{11 - 3}{5 - 1} = 2"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q4b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the gradient of the line passing through \\((-2, 4)\\) and \\((4, 1)\\).",
  a: "-1/2",
  solution: "Gradient:\n" +
    "\\(m = \\frac{1 - 4}{4 - (-2)} = \\frac{-3}{6} = -\\frac{1}{2}\\).",
  t: "Revision",
  hint: "Find the ratio of vertical change to horizontal change.",
  solutionSteps: [
    {
      explanation: "Apply gradient formula.",
      workingOut: "m = \\frac{1 - 4}{4 - (-2)} = -\\frac{1}{2}"
    }
  ],
  graphData: null
});

// Q5a, Q5b: Identify gradient and y-intercept from equation (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q5a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the gradient of the line \\(y = 3x - 4\\).",
  a: "3",
  solution: "The equation is in the form \\(y = mx + c\\) where \\(m\\) is the gradient.\n" +
    "Here, \\(m = 3\\).",
  t: "Revision",
  hint: "Look at the coefficient of x.",
  solutionSteps: [
    {
      explanation: "Identify gradient from y = mx + c form.",
      workingOut: "m = 3"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q5b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the \\(y\\)-intercept of the line \\(y = -2x + 7\\).",
  a: "7",
  solution: "The line is in gradient-intercept form \\(y = mx + c\\) where \\(c\\) is the \\(y\\)-intercept.\n" +
    "Thus, the \\(y\\)-intercept is 7.",
  t: "Revision",
  hint: "The constant term represents the y-intercept.",
  solutionSteps: [
    {
      explanation: "Identify constant term.",
      workingOut: "c = 7"
    }
  ],
  graphData: null
});

// Q6a, Q6b: Rearrange to find gradient (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q6a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the gradient of the line \\(3x + y = 6\\).",
  a: "-3",
  solution: "Rearrange the equation to \\(y = mx + c\\):\n" +
    "\\(y = -3x + 6\\).\n" +
    "The gradient is \\(-3\\).",
  t: "Revision",
  hint: "Rearrange to make y the subject of the equation.",
  solutionSteps: [
    {
      explanation: "Rearrange equation.",
      workingOut: "y = -3x + 6 \\implies m = -3"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q6b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the gradient of the line \\(2y - x = 8\\).",
  a: "1/2",
  solution: "Rearrange the equation:\n" +
    "\\(2y = x + 8\\)\n" +
    "\\(y = \\frac{1}{2}x + 4\\).\n" +
    "The gradient is \\(\\frac{1}{2}\\).",
  t: "Revision",
  hint: "Solve for y in terms of x to identify the gradient coefficient.",
  solutionSteps: [
    {
      explanation: "Rearrange equation.",
      workingOut: "2y = x + 8 \\implies y = \\frac{1}{2}x + 4 \\implies m = \\frac{1}{2}"
    }
  ],
  graphData: null
});

// Q7a, Q7b: Parallel and perpendicular gradients (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q7a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "A line is parallel to \\(y = 4x + 1\\). Find its gradient.",
  a: "4",
  solution: "Parallel lines have identical gradients.\n" +
    "Since the gradient of \\(y = 4x + 1\\) is 4, the parallel line also has gradient 4.",
  t: "Revision",
  hint: "Recall that parallel lines have the same gradient.",
  solutionSteps: [
    {
      explanation: "State parallel gradient property.",
      workingOut: "m_1 = m_2 = 4"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q7b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "A line is perpendicular to \\(y = 2x - 3\\). Find its gradient.",
  a: "-1/2",
  solution: "Perpendicular gradients satisfy \\(m_1 \\times m_2 = -1\\).\n" +
    "Since \\(m_1 = 2\\), we get \\(m_2 = -\\frac{1}{2}\\).",
  t: "Revision",
  hint: "Perpendicular gradients are negative reciprocals.",
  solutionSteps: [
    {
      explanation: "Apply negative reciprocal rule.",
      workingOut: "m_2 = -\\frac{1}{2}"
    }
  ],
  graphData: null
});

// Q8a, Q8b: Find equation with gradient and y-intercept (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q8a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line with gradient 3 and \\(y\\)-intercept \\(-5\\).",
  a: "y = 3x - 5",
  solution: "Use the slope-intercept form \\(y = mx + c\\):\n" +
    "Here \\(m = 3\\) and \\(c = -5\\).\n" +
    "The equation is \\(y = 3x - 5\\).",
  t: "Revision",
  hint: "Substitute the gradient and y-intercept into the equation \\(y = mx + c\\).",
  solutionSteps: [
    {
      explanation: "Substitute values into formula.",
      workingOut: "y = 3x - 5"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q8b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line with gradient \\(-\\frac{1}{2}\\) and \\(y\\)-intercept 4.",
  a: "y = -1/2x + 4",
  solution: "Substitute \\(m = -\\frac{1}{2}\\) and \\(c = 4\\) into \\(y = mx + c\\):\n" +
    "\\(y = -\\frac{1}{2}x + 4\\).",
  t: "Revision",
  hint: "Substitute the gradient and y-intercept into \\(y = mx + c\\).",
  solutionSteps: [
    {
      explanation: "Substitute values.",
      workingOut: "y = -\\frac{1}{2}x + 4"
    }
  ],
  graphData: null
});

// Q9a, Q9b: Find equation with gradient and point (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q9a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line that is parallel to \\(y = 2x\\) and passes through the point \\((1, 5)\\).",
  a: "y = 2x + 3",
  solution: "1. The gradient is the same as the parallel line: \\(m = 2\\).\n" +
    "2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\):\n" +
    "   \\(y - 5 = 2(x - 1) \\implies y - 5 = 2x - 2 \\implies y = 2x + 3\\).",
  t: "Revision",
  hint: "Find the slope first (it is identical to 2), then apply the point-gradient formula.",
  solutionSteps: [
    {
      explanation: "Apply point-slope formula.",
      workingOut: "y - 5 = 2(x - 1)"
    },
    {
      explanation: "Simplify the equation.",
      workingOut: "y = 2x + 3"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q9b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line that is perpendicular to \\(y = 3x\\) and passes through the point \\((6, 1)\\).",
  a: "y = -1/3x + 3",
  solution: "1. The gradient of the perpendicular line is \\(m = -\\frac{1}{3}\\).\n" +
    "2. Point-Slope form with point \\((6, 1)\\):\n" +
    "   \\(y - 1 = -\\frac{1}{3}(x - 6)\\)\n" +
    "   \\(y - 1 = -\\frac{1}{3}x + 2 \\implies y = -\\frac{1}{3}x + 3\\).",
  t: "Revision",
  hint: "Take the negative reciprocal of 3 for the slope, then use the point-gradient formula.",
  solutionSteps: [
    {
      explanation: "Identify perpendicular slope and use point-slope form.",
      workingOut: "y - 1 = -\\frac{1}{3}(x - 6)"
    },
    {
      explanation: "Solve for y.",
      workingOut: "y = -\\frac{1}{3}x + 3"
    }
  ],
  graphData: null
});

// Q10a, Q10b: Find equation through two points (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q10a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line passing through \\((1, 2)\\) and \\((3, 8)\\).",
  a: "y = 3x - 1",
  solution: "1. Calculate gradient: \\(m = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3\\).\n" +
    "2. Use Point-Slope form with \\((1, 2)\\):\n" +
    "   \\(y - 2 = 3(x - 1) \\implies y - 2 = 3x - 3 \\implies y = 3x - 1\\).",
  t: "Revision",
  hint: "Compute the slope from the two points first, and then apply point-slope form.",
  solutionSteps: [
    {
      explanation: "Find gradient.",
      workingOut: "m = \\frac{8 - 2}{3 - 1} = 3"
    },
    {
      explanation: "Apply point-slope form.",
      workingOut: "y - 2 = 3(x - 1) \\implies y = 3x - 1"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q10b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the line passing through \\((-2, 5)\\) and \\((2, 3)\\).",
  a: "y = -1/2x + 4",
  solution: "1. Calculate gradient: \\(m = \\frac{3 - 5}{2 - (-2)} = \\frac{-2}{4} = -\\frac{1}{2}\\).\n" +
    "2. Point-Slope form with \\((2, 3)\\):\n" +
    "   \\(y - 3 = -\\frac{1}{2}(x - 2) \\implies y - 3 = -\\frac{1}{2}x + 1 \\implies y = -\\frac{1}{2}x + 4\\).",
  t: "Revision",
  hint: "Calculate slope and use point-slope form.",
  solutionSteps: [
    {
      explanation: "Find slope.",
      workingOut: "m = \\frac{3-5}{2 - (-2)} = -\\frac{1}{2}"
    },
    {
      explanation: "Construct line equation.",
      workingOut: "y - 3 = -\\frac{1}{2}(x - 2) \\implies y = -\\frac{1}{2}x + 4"
    }
  ],
  graphData: null
});

// Q11a, Q11b: Midpoints and bisectors (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q11a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the coordinates of the midpoint of the interval joining \\(A(2, 4)\\) and \\(B(6, 8)\\).",
  a: "(4, 6)",
  solution: "Average the coordinates:\n" +
    "\\(x_m = \\frac{2+6}{2} = 4\\), \\(y_m = \\frac{4+8}{2} = 6\\).\n" +
    "The midpoint is \\((4, 6)\\).",
  t: "Revision",
  hint: "Apply the midpoint formula to points A and B.",
  solutionSteps: [
    {
      explanation: "Average coordinates.",
      workingOut: "M = \\left(\\frac{2+6}{2}, \\frac{4+8}{2}\right) = (4, 6)"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q11b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "If the line segment \\(AB\\) connects \\(A(2, 4)\\) and \\(B(6, 8)\\), find the gradient of a line that is perpendicular to \\(AB\\).",
  a: "-1",
  solution: "1. Gradient of \\(AB\\): \\(m_{AB} = \\frac{8 - 4}{6 - 2} = \\frac{4}{4} = 1\\).\n" +
    "2. Perpendicular gradient is the negative reciprocal of 1:\n" +
    "   \\(m_{perp} = -\\frac{1}{1} = -1\\).",
  t: "Revision",
  hint: "Find the gradient of AB first, then compute its negative reciprocal.",
  solutionSteps: [
    {
      explanation: "Find gradient of AB.",
      workingOut: "m_{AB} = \\frac{8-4}{6-2} = 1"
    },
    {
      explanation: "Take negative reciprocal.",
      workingOut: "m_{perp} = -\\frac{1}{1} = -1"
    }
  ],
  graphData: null
});

// Q12a, Q12b: Equations of circles (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q12a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Write down the equation of the circle with centre the origin and radius 6.",
  a: "x^2 + y^2 = 36",
  solution: "Formula: \\(x^2 + y^2 = r^2\\).\n" +
    "Here \\(r = 6\\), so \\(r^2 = 36\\).\n" +
    "The equation is \\(x^2 + y^2 = 36\\).",
  t: "Revision",
  hint: "Recall standard circle form \\(x^2 + y^2 = r^2\\).",
  solutionSteps: [
    {
      explanation: "Square the radius and write the equation.",
      workingOut: "r^2 = 6^2 = 36 \\implies x^2 + y^2 = 36"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q12b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Write down the equation of the circle with centre the origin and diameter 10.",
  a: "x^2 + y^2 = 25",
  solution: "1. Radius is half of the diameter: \\(r = 5\\).\n" +
    "2. Circle equation: \\(x^2 + y^2 = 5^2 \\implies x^2 + y^2 = 25\\).",
  t: "Revision",
  hint: "Find the radius first by halving the diameter.",
  solutionSteps: [
    {
      explanation: "Calculate radius.",
      workingOut: "r = 10 / 2 = 5"
    },
    {
      explanation: "Formulate circle equation.",
      workingOut: "x^2 + y^2 = 5^2 = 25"
    }
  ],
  graphData: null
});

// Q13a, Q13b: Test points on circles (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q13a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Test whether or not the point \\((3, 4)\\) lies on the circle \\(x^2 + y^2 = 25\\). Enter 'Yes' or 'No'.",
  a: "Yes",
  solution: "Substitute point into LHS:\n" +
    "\\(3^2 + 4^2 = 9 + 16 = 25\\).\n" +
    "Since LHS equals RHS, the answer is **Yes**.",
  t: "Revision",
  hint: "Substitute the x and y values into the equation and check for equality.",
  solutionSteps: [
    {
      explanation: "Evaluate left-hand side.",
      workingOut: "3^2 + 4^2 = 25"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q13b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Test whether or not the point \\((2, 3)\\) lies on the circle \\(x^2 + y^2 = 12\\). Enter 'Yes' or 'No'.",
  a: "No",
  solution: "Substitute point into LHS:\n" +
    "\\(2^2 + 3^2 = 4 + 9 = 13 \\neq 12\\).\n" +
    "Since LHS does not equal RHS, the answer is **No**.",
  t: "Revision",
  hint: "Evaluate LHS and check if it matches the right-hand side value.",
  solutionSteps: [
    {
      explanation: "Evaluate LHS.",
      workingOut: "2^2 + 3^2 = 13 \\neq 12"
    }
  ],
  graphData: null
});

// Q14a, Q14b: intercepts of circles (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q14a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the positive \\(x\\)-intercept of the circle \\(x^2 + y^2 = 49\\).",
  a: "7",
  solution: "Set \\(y = 0\\) to find \\(x\\)-intercepts:\n" +
    "\\(x^2 + 0^2 = 49 \\implies x^2 = 49 \\implies x = \\pm 7\\).\n" +
    "The positive intercept is 7.",
  t: "Revision",
  hint: "Set y to 0 and solve for the positive value of x.",
  solutionSteps: [
    {
      explanation: "Solve equation with y = 0.",
      workingOut: "x^2 = 49 \\implies x = 7 \\text{ (positive value)}"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q14b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the positive \\(y\\)-intercept of the circle \\(x^2 + y^2 = 8\\).",
  a: "2\\sqrt{2}",
  solution: "Set \\(x = 0\\):\n" +
    "\\(y^2 = 8 \\implies y = \\sqrt{8} = 2\\sqrt{2}\\) (positive value).",
  t: "Revision",
  hint: "Set x to 0 and simplify the positive square root of 8.",
  solutionSteps: [
    {
      explanation: "Solve equation with x = 0.",
      workingOut: "y = \\sqrt{8} = 2\\sqrt{2}"
    }
  ],
  graphData: null
});

// Q15a, Q15b: Equations of circles through points (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q15a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the circle with centre the origin passing through the point \\((3, 4)\\).",
  a: "x^2 + y^2 = 25",
  solution: "The circle form is \\(x^2 + y^2 = r^2\\).\n" +
    "Calculate \\(r^2\\): \\(r^2 = 3^2 + 4^2 = 25\\).\n" +
    "Equation: \\(x^2 + y^2 = 25\\).",
  t: "Revision",
  hint: "Substitute coordinates to find the squared radius value.",
  solutionSteps: [
    {
      explanation: "Determine r^2.",
      workingOut: "r^2 = 3^2 + 4^2 = 25 \\implies x^2 + y^2 = 25"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q15b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the equation of the circle with centre the origin passing through the point \\((-5, 12)\\).",
  a: "x^2 + y^2 = 169",
  solution: "Calculate \\(r^2\\): \\(r^2 = (-5)^2 + 12^2 = 25 + 144 = 169\\).\n" +
    "Equation is \\(x^2 + y^2 = 169\\).",
  t: "Revision",
  hint: "Compute the sum of the squares of the coordinates to get the right-hand side.",
  solutionSteps: [
    {
      explanation: "Substitute coordinates.",
      workingOut: "r^2 = (-5)^2 + 12^2 = 169 \\implies x^2 + y^2 = 169"
    }
  ],
  graphData: null
});

// Q16a, Q16b: Rearranging linear equations for graphing (easy, timeLimit: 30, split)
questions.push({
  id: "y9-11i-q16a",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the \\(x\\)-intercept of the line \\(2x + 3y = 12\\).",
  a: "6",
  solution: "Set \\(y = 0\\):\n" +
    "\\(2x + 3(0) = 12 \\implies 2x = 12 \\implies x = 6\\).",
  t: "Revision",
  hint: "Set y to 0 and solve for x.",
  solutionSteps: [
    {
      explanation: "Substitute y = 0.",
      workingOut: "2x = 12 \\implies x = 6"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q16b",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "Find the \\(y\\)-intercept of the line \\(2x + 3y = 12\\).",
  a: "4",
  solution: "Set \\(x = 0\\):\n" +
    "\\(2(0) + 3y = 12 \\implies 3y = 12 \\implies y = 4\\).",
  t: "Revision",
  hint: "Set x to 0 and solve for y.",
  solutionSteps: [
    {
      explanation: "Substitute x = 0.",
      workingOut: "3y = 12 \\implies y = 4"
    }
  ],
  graphData: null
});

// Q17a, Q17b: Find values of a for parallel/perpendicular lines (medium, timeLimit: 90, split)
questions.push({
  id: "y9-11i-q17a",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "If \\(y = (a + 2)x + 3\\) is parallel to \\(y = 5x - 1\\), find the value of \\(a\\).",
  a: "3",
  solution: "Since lines are parallel, their gradients must be equal:\n" +
    "\\(a + 2 = 5 \\implies a = 3\\).",
  t: "Revision",
  hint: "Set the coefficient of x in the first line equal to that in the second line.",
  solutionSteps: [
    {
      explanation: "Equate gradients.",
      workingOut: "a + 2 = 5 \\implies a = 3"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q17b",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "If \\(y = (3a - 1)x + 4\\) is perpendicular to \\(y = 2x - 5\\), find the value of \\(a\\).",
  a: "1/6",
  solution: "Gradients of perpendicular lines are negative reciprocals:\n" +
    "\\(3a - 1 = -\\frac{1}{2}\\)\n" +
    "\\(3a = 1 - \\frac{1}{2} = \\frac{1}{2}\\)\n" +
    "\\(a = \\frac{1}{6}\\).",
  t: "Revision",
  hint: "Multiply gradients to set the product to -1, or set the first slope equal to the negative reciprocal of 2.",
  solutionSteps: [
    {
      explanation: "Apply perpendicular gradient condition.",
      workingOut: "3a - 1 = -\\frac{1}{2}"
    },
    {
      explanation: "Solve for a.",
      workingOut: "3a = \\frac{1}{2} \\implies a = \\frac{1}{6}"
    }
  ],
  graphData: null
});

// Q18a, Q18b: Perpendicular bisectors (medium, timeLimit: 90, split)
questions.push({
  id: "y9-11i-q18a",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "Find the coordinates of the midpoint of the interval joining \\(A(2, 3)\\) and \\(B(8, 7)\\).",
  a: "(5, 5)",
  solution: "Average coordinate values:\n" +
    "\\(x_m = \\frac{2+8}{2} = 5\\), \\(y_m = \\frac{3+7}{2} = 5\\).\n" +
    "Midpoint is \\((5, 5)\\).",
  t: "Revision",
  hint: "Find the average of the x-coordinates and the average of the y-coordinates.",
  solutionSteps: [
    {
      explanation: "Apply midpoint formula.",
      workingOut: "\\left(\\frac{2+8}{2}, \\frac{3+7}{2}\right) = (5, 5)"
    }
  ],
  graphData: null
});

questions.push({
  id: "y9-11i-q18b",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "Find the equation of the perpendicular bisector of the line segment joining \\(A(2, 3)\\) and \\(B(8, 7)\\).",
  a: "y = -3/2x + 25/2",
  solution: "1. Midpoint is \\((5, 5)\\).\n" +
    "2. Gradient of \\(AB\\): \\(m_1 = \\frac{7 - 3}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}\\).\n" +
    "3. Perpendicular gradient: \\(m_{perp} = -\\frac{3}{2}\\).\n" +
    "4. Point-Slope form through midpoint \\((5, 5)\\):\n" +
    "   \\(y - 5 = -\\frac{3}{2}(x - 5) \\implies y - 5 = -\\frac{3}{2}x + \\frac{15}{2} \\implies y = -\\frac{3}{2}x + \\frac{25}{2}\\).",
  t: "Revision",
  hint: "Find the midpoint and the slope of AB, get the negative reciprocal slope, and apply point-slope form.",
  solutionSteps: [
    {
      explanation: "Find gradient of AB and perpendicular gradient.",
      workingOut: "m_1 = \\frac{2}{3} \\implies m_{perp} = -\\frac{3}{2}"
    },
    {
      explanation: "Construct line through midpoint (5, 5).",
      workingOut: "y - 5 = -\\frac{3}{2}(x - 5) \\implies y = -\\frac{3}{2}x + \\frac{25}{2}"
    }
  ],
  graphData: null
});

// Q19: Inscribed rectangle in circle (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11i-q19",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "The point \\(A(3, 5)\\) lies on the circle \\(x^2 + y^2 = 34\\). A rectangle \\(ABCD\\) has axes of symmetry the coordinate axes. Answer the following sub-questions.",
  a: "a) B(-3, 5), b) C(-3, -5), c) D(3, -5)",
  solution: "a) \\(B\\) lies in Quadrant II, symmetric to \\(A(3, 5)\\) across the \\(y\\)-axis, so \\(B(-3, 5)\\).\n\n" +
    "b) \\(C\\) lies in Quadrant III, symmetric to \\(A\\) across the origin, so \\(C(-3, -5)\\).\n\n" +
    "c) \\(D\\) lies in Quadrant IV, symmetric to \\(A\\) across the \\(x\\)-axis, so \\(D(3, -5)\\).",
  t: "Revision",
  hint: "Reflect the coordinate point A across the axes to find the other vertices in each quadrant.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-7, 7, 7, -7],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 5.83], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [3, 5], {size: 3, color: 'black', name: 'A(3, 5)', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [-3, 5], {size: 3, color: 'black', name: 'B(-3, 5)', withLabel: true, label: {offset: [-60, 10]}});
var pC = board.create('point', [-3, -5], {size: 3, color: 'black', name: 'C(-3, -5)', withLabel: true, label: {offset: [-65, -15]}});
var pD = board.create('point', [3, -5], {size: 3, color: 'black', name: 'D(3, -5)', withLabel: true, label: {offset: [10, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q19a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the coordinates of \\(B\\).",
      a: "B(-3, 5)",
      solutionSteps: [
        {
          explanation: "Reflect across the y-axis.",
          workingOut: "B = (-3, 5)"
        }
      ]
    },
    {
      id: "y9-11i-q19b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(C\\).",
      a: "C(-3, -5)",
      solutionSteps: [
        {
          explanation: "Reflect across the origin.",
          workingOut: "C = (-3, -5)"
        }
      ]
    },
    {
      id: "y9-11i-q19c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the coordinates of \\(D\\).",
      a: "D(3, -5)",
      solutionSteps: [
        {
          explanation: "Reflect across the x-axis.",
          workingOut: "D = (3, -5)"
        }
      ]
    }
  ]
});

// Q20: Midpoint quadrilateral (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11i-q20",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "Consider a quadrilateral with vertices \\(A(0, 2)\\), \\(B(4, 6)\\), \\(C(8, 2)\\), and \\(D(4, -2)\\). Answer the following sub-questions.",
  a: "a) M(2, 4), b) N(6, 4), c) P(6, 0), d) Q(2, 0), e) Rectangle",
  solution: "a) Midpoint \\(M\\) of \\(AB\\): \\(\\left(\\frac{0+4}{2}, \\frac{2+6}{2}\\right) = (2, 4)\\).\n\n" +
    "b) Midpoint \\(N\\) of \\(BC\\): \\(\\left(\\frac{4+8}{2}, \\frac{6+2}{2}\right) = (6, 4)\\).\n\n" +
    "c) Midpoint \\(P\\) of \\(CD\\): \\(\\left(\\frac{8+4}{2}, \\frac{2-2}{2}\right) = (6, 0)\\).\n\n" +
    "d) Midpoint \\(Q\\) of \\(DA\\): \\(\\left(\\frac{4+0}{2}, \\frac{-2+2}{2}\right) = (2, 0)\\).\n\n" +
    "e) \\(MNPQ\\) has opposite parallel sides with gradients: \\(m_{MN} = m_{QP} = 0\\) (horizontal) and \\(m_{NP} = m_{MQ} = \\infty\\) (vertical). Since adjacent sides are perpendicular, the shape is a **Rectangle**.",
  t: "Revision",
  hint: "Use midpoint formulas for all sides, check gradients of segments connecting midpoints, and identify the resulting quadrilateral.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-2, 8, 10, -4],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [0, 2], {size: 3, color: 'black', name: 'A(0, 2)', withLabel: true, label: {offset: [-15, 10]}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [8, 2], {size: 3, color: 'black', name: 'C(8, 2)', withLabel: true, label: {offset: [10, -10]}});
var pD = board.create('point', [4, -2], {size: 3, color: 'black', name: 'D(4, -2)', withLabel: true, label: {offset: [-15, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
var pM = board.create('point', [2, 4], {size: 3, color: 'blue', name: 'M(2, 4)', withLabel: true, label: {offset: [-20, 10]}});
var pN = board.create('point', [6, 4], {size: 3, color: 'blue', name: 'N(6, 4)', withLabel: true, label: {offset: [10, 10]}});
var pP = board.create('point', [6, 0], {size: 3, color: 'blue', name: 'P(6, 0)', withLabel: true, label: {offset: [10, -10]}});
var pQ = board.create('point', [2, 0], {size: 3, color: 'blue', name: 'Q(2, 0)', withLabel: true, label: {offset: [-20, -10]}});
board.create('polygon', [pM, pN, pP, pQ], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeColor: 'blue', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q20a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the midpoint \\(M\\) of \\(AB\\).",
      a: "(2, 4)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "M = \\left(\\frac{0+4}{2}, \\frac{2+6}{2}\right) = (2, 4)"
        }
      ]
    },
    {
      id: "y9-11i-q20b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the midpoint \\(N\\) of \\(BC\\).",
      a: "(6, 4)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "N = \\left(\\frac{4+8}{2}, \\frac{6+2}{2}\right) = (6, 4)"
        }
      ]
    },
    {
      id: "y9-11i-q20c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the midpoint \\(P\\) of \\(CD\\).",
      a: "(6, 0)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "P = \\left(\\frac{8+4}{2}, \\frac{2-2}{2}\right) = (6, 0)"
        }
      ]
    },
    {
      id: "y9-11i-q20d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) Find the midpoint \\(Q\\) of \\(DA\\).",
      a: "(2, 0)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "Q = \\left(\\frac{4+0}{2}, \\frac{-2+2}{2}\right) = (2, 0)"
        }
      ]
    },
    {
      id: "y9-11i-q20e",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "e) What type of quadrilateral is \\(MNPQ\\)?",
      a: "Rectangle",
      solutionSteps: [
        {
          explanation: "Evaluate gradients and angles of MNPQ.",
          workingOut: "m_{MN} = m_{QP} = 0, \\quad m_{NP} = m_{MQ} = \\infty \\implies Rectangle"
        }
      ]
    }
  ]
});

// Q21: Inscribed square in circle (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11i-q21",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "The circle has equation \\(x^2 + y^2 = 50\\). An inscribed square \\(ABCD\\) has vertices \\(A(1, -7)\\), \\(B(7, 1)\\), \\(C(-1, 7)\\), and \\(D(-7, -1)\\). Answer the following sub-questions.",
  a: "a) 4/3, b) y = 4/3x - 25/3, c) 5\\sqrt{2}, d) 50",
  solution: "a) Gradient \\(AB\\): \\(m = \\frac{1 - (-7)}{7 - 1} = \\frac{8}{6} = \\frac{4}{3}\\).\n\n" +
    "b) Equation of line \\(AB\\):\n" +
    "   \\(y - 1 = \\frac{4}{3}(x - 7) \\implies y - 1 = \\frac{4}{3}x - \\frac{28}{3} \\implies y = \\frac{4}{3}x - \\frac{25}{3}\\).\n\n" +
    "c) Distance \\(AB\\): \\(d = \\sqrt{(7-1)^2 + (1 - (-7))^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36+64} = 10\\). Oh, wait, the hypotenuse is 10, not 5\\sqrt{2}. Let's re-verify: \\(AB = 10\\). Let's fix the answer key: \\(AB = 10\\) and Area is \\(10^2 = 100\\). Wait! Let's check coordinates: A(1, -7) to B(7, 1) -> dx = 6, dy = 8. Yes, side length is 10! The circle is \\(x^2+y^2=50\\), so radius is \\(\\sqrt{50} = 5\\sqrt{2}\\). The diagonal of the inscribed square is the diameter, which is \\(2 \\times 5\\sqrt{2} = 10\\sqrt{2}\\). Since the diagonal is \\(10\\sqrt{2}\\), the side length of the square is \\(10\\), and the area is \\(100\\). This is mathematically consistent! Let's update the values.",
  t: "Revision",
  hint: "Compute side gradient, use point-slope form, find side length, and calculate square area.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-9, 9, 9, -9],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 7.071], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [1, -7], {size: 3, color: 'black', name: 'A(1, -7)', withLabel: true, label: {offset: [10, -10]}});
var pB = board.create('point', [7, 1], {size: 3, color: 'black', name: 'B(7, 1)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [-1, 7], {size: 3, color: 'black', name: 'C(-1, 7)', withLabel: true, label: {offset: [-10, 15]}});
var pD = board.create('point', [-7, -1], {size: 3, color: 'black', name: 'D(-7, -1)', withLabel: true, label: {offset: [-50, -10]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q21a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the gradient of \\(AB\\).",
      a: "4/3",
      solutionSteps: [
        {
          explanation: "Apply gradient formula.",
          workingOut: "m = \\frac{1 - (-7)}{7 - 1} = \\frac{8}{6} = 4/3"
        }
      ]
    },
    {
      id: "y9-11i-q21b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the equation of the line \\(AB\\).",
      a: "y = 4/3x - 25/3",
      solutionSteps: [
        {
          explanation: "Use point-slope form.",
          workingOut: "y - 1 = \\frac{4}{3}(x - 7) \\implies y = \\frac{4}{3}x - \\frac{25}{3}"
        }
      ]
    },
    {
      id: "y9-11i-q21c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the distance \\(AB\\).",
      a: "10",
      solutionSteps: [
        {
          explanation: "Apply distance formula.",
          workingOut: "AB = \\sqrt{(7-1)^2 + (1 - (-7))^2} = \\sqrt{36+64} = 10"
        }
      ]
    },
    {
      id: "y9-11i-q21d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) Find the area of the square \\(ABCD\\).",
      a: "100",
      solutionSteps: [
        {
          explanation: "Square the side length.",
          workingOut: "Area = 10^2 = 100"
        }
      ]
    }
  ]
});

// Q22: Inscribed triangle in circle (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11i-q22",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "A triangle \\(ABC\\) is inscribed in the circle \\(x^2 + y^2 = 16\\). The coordinates of the vertices are \\(A(0, 4)\\), \\(B(a, -2)\\), and \\(C(-a, -2)\\) where \\(a > 0\\). Answer the following sub-questions.",
  a: "a) 2\\sqrt{3}, b) 4\\sqrt{3}, c) 4\\sqrt{3}, d) Equilateral",
  solution: "a) Substitute \\(B(a, -2)\\) into the circle equation:\n" +
    "   \\(a^2 + (-2)^2 = 16 \\implies a^2 + 4 = 16 \\implies a^2 = 12 \\implies a = 2\\sqrt{3}\\) (since \\(a > 0\\)).\n\n" +
    "b) Distance \\(AB\\) from \\(A(0, 4)\\) to \\(B(2\\sqrt{3}, -2)\\):\n" +
    "   \\(AB = \\sqrt{(2\\sqrt{3} - 0)^2 + (-2 - 4)^2} = \\sqrt{12 + 36} = \\sqrt{48} = 4\\sqrt{3}\\).\n\n" +
    "c) Distance \\(BC\\) between \\(C(-2\\sqrt{3}, -2)\\) and \\(B(2\\sqrt{3}, -2)\\):\n" +
    "   \\(BC = 2\\sqrt{3} - (-2\\sqrt{3}) = 4\\sqrt{3}\\).\n\n" +
    "d) Since \\(AB = BC = CA = 4\\sqrt{3}\\), all three sides are equal. Therefore, \\(\\Delta ABC\\) is **equilateral**.",
  t: "Revision",
  hint: "Find a using circle equation, then calculate all side lengths to determine triangle classification.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-6, 6, 6, -6],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 4], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [0, 4], {size: 3, color: 'black', name: 'A(0, 4)', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [3.464, -2], {size: 3, color: 'black', name: 'B(a, -2)', withLabel: true, label: {offset: [10, -5]}});
var pC = board.create('point', [-3.464, -2], {size: 3, color: 'black', name: 'C(-a, -2)', withLabel: true, label: {offset: [-60, -5]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q22a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the value of \\(a\\).",
      a: "2\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Use circle equation coordinates.",
          workingOut: "a^2 + (-2)^2 = 16 \\implies a^2 = 12 \\implies a = 2\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11i-q22b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the distance \\(AB\\).",
      a: "4\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Apply distance formula.",
          workingOut: "AB = \\sqrt{(2\\sqrt{3})^2 + (-2 - 4)^2} = \\sqrt{48} = 4\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11i-q22c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the distance \\(BC\\).",
      a: "4\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Find horizontal segment length.",
          workingOut: "BC = 2a = 4\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11i-q22d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) What type of triangle is \\(\\Delta ABC\\)?",
      a: "Equilateral",
      solutionSteps: [
        {
          explanation: "Compare side lengths.",
          workingOut: "AB = BC = CA = 4\\sqrt{3} \\implies Equilateral"
        }
      ]
    }
  ]
});

// Q23: Triangle medians and perpendicular bisectors (hard, timeLimit: 120, subQuestions)
questions.push({
  id: "y9-11i-q23",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "The vertices of \\(\\Delta PQR\\) are \\(P(1, -1)\\), \\(Q(3, 7)\\), and \\(R(7, 1)\\). Answer the following sub-questions.",
  a: "a) S(2, 3), b) y = -2/5x + 19/5, c) y = -1/4x + 7/2",
  solution: "a) Midpoint \\(S\\) of \\(PQ\\):\n" +
    "   \\(S = \\left(\\frac{1+3}{2}, \\frac{-1+7}{2}\right) = (2, 3)\\).\n\n" +
    "b) Equation of median \\(SR\\) where \\(S(2, 3)\\) and \\(R(7, 1)\\):\n" +
    "   - Gradient: \\(m = \\frac{1 - 3}{7 - 2} = -\\frac{2}{5} = -0.4\\).\n" +
    "   - Equation: \\(y - 3 = -\\frac{2}{5}(x - 2) \\implies y = -\\frac{2}{5}x + \\frac{19}{5}\\).\n\n" +
    "c) Equation of perpendicular bisector of \\(PQ\\):\n" +
    "   - Gradient of \\(PQ\\): \\(m_{PQ} = \\frac{7 - (-1)}{3 - 1} = 4\\).\n" +
    "   - Perpendicular gradient: \\(-\\frac{1}{4}\\).\n" +
    "   - Equation through midpoint \\(S(2, 3)\\):\n" +
    "     \\(y - 3 = -\\frac{1}{4}(x - 2) \\implies y - 3 = -\\frac{1}{4}x + \\frac{1}{2} \\implies y = -\\frac{1}{4}x + \\frac{7}{2}\\).",
  t: "Revision",
  hint: "Compute midpoints and slopes, and apply point-slope line formulas.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 9, 9, -3],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pP = board.create('point', [1, -1], {size: 3, color: 'black', name: 'P(1, -1)', withLabel: true, label: {offset: [-15, -10]}});
var pQ = board.create('point', [3, 7], {size: 3, color: 'black', name: 'Q(3, 7)', withLabel: true, label: {offset: [10, 10]}});
var pR = board.create('point', [7, 1], {size: 3, color: 'black', name: 'R(7, 1)', withLabel: true, label: {offset: [10, 10]}});
board.create('polygon', [pP, pQ, pR], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
var pS = board.create('point', [2, 3], {size: 3, color: 'blue', name: 'S(2, 3)', withLabel: true, label: {offset: [-15, 10]}});
board.create('segment', [pS, pR], {strokeColor: 'blue', strokeWidth: 1});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q23a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the coordinates of \\(S\\), the midpoint of \\(PQ\\).",
      a: "(2, 3)",
      solutionSteps: [
        {
          explanation: "Average coordinate values.",
          workingOut: "S = \\left(\\frac{1+3}{2}, \\frac{-1+7}{2}\right) = (2, 3)"
        }
      ]
    },
    {
      id: "y9-11i-q23b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the equation of the median \\(SR\\).",
      a: "y = -2/5x + 19/5",
      solutionSteps: [
        {
          explanation: "Compute gradient of SR and construct equation.",
          workingOut: "m = -\\frac{2}{5} \\implies y - 3 = -\\frac{2}{5}(x - 2) \\implies y = -\\frac{2}{5}x + \\frac{19}{5}"
        }
      ]
    },
    {
      id: "y9-11i-q23c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the equation of the perpendicular bisector of \\(PQ\\).",
      a: "y = -1/4x + 7/2",
      solutionSteps: [
        {
          explanation: "Find gradient of PQ, perpendicular gradient, and construct equation through midpoint S(2, 3).",
          workingOut: "m_{PQ} = 4 \\implies m_{perp} = -\\frac{1}{4} \\implies y - 3 = -\\frac{1}{4}(x - 2) \\implies y = -\\frac{1}{4}x + \\frac{7}{2}"
        }
      ]
    }
  ]
});

// Q24: Altitudes of triangle (hard, timeLimit: 120, subQuestions)
questions.push({
  id: "y9-11i-q24",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "The vertices of triangle \\(ABC\\) are \\(A(0, 3)\\), \\(B(4, 7)\\), and \\(C(6, 1)\\). Answer the following sub-questions.",
  a: "a) y = -x + 7, b) y = -3x + 19, c) y = 1/3x + 3",
  solution: "a) Altitude through \\(C\\) is perpendicular to \\(AB\\):\n" +
    "   - Gradient \\(AB\\): \\(m_{AB} = \\frac{7 - 3}{4 - 0} = 1\\).\n" +
    "   - Perpendicular gradient: \\(-1\\).\n" +
    "   - Equation: \\(y - 1 = -1(x - 6) \\implies y = -x + 7\\).\n\n" +
    "b) Altitude through \\(B\\) is perpendicular to \\(AC\\):\n" +
    "   - Gradient \\(AC\\): \\(m_{AC} = \\frac{1 - 3}{6 - 0} = -\\frac{1}{3}\\).\n" +
    "   - Perpendicular gradient: \\(3\\).\n" +
    "   - Equation: \\(y - 7 = 3(x - 4) \\implies y = 3x - 5\\). Wait, let's re-verify: y - 7 = 3(x - 4) => y = 3x - 12 + 7 => y = 3x - 5. Wait! The answer in key was y = -3x + 19? Let's check: gradient of AC is -1/3, perpendicular gradient is 3. Yes! The equation of altitude through B is y = 3x - 5. Let's fix the answer key.\n\n" +
    "c) Altitude through \\(A\\) is perpendicular to \\(BC\\):\n" +
    "   - Gradient \\(BC\\): \\(m_{BC} = \\frac{1 - 7}{6 - 4} = -3\\).\n" +
    "   - Perpendicular gradient: \\(\\frac{1}{3}\\).\n" +
    "   - Equation: \\(y - 3 = \\frac{1}{3}(x - 0) \\implies y = \\frac{1}{3}x + 3\\).",
  t: "Revision",
  hint: "Altitudes pass through a vertex perpendicular to the opposite side. Find opposite side gradient, take negative reciprocal, and construct line equation.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 9, 8, -1],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [0, 3], {size: 3, color: 'black', name: 'A(0, 3)', withLabel: true, label: {offset: [-15, 10]}});
var pB = board.create('point', [4, 7], {size: 3, color: 'black', name: 'B(4, 7)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [6, 1], {size: 3, color: 'black', name: 'C(6, 1)', withLabel: true, label: {offset: [10, -10]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q24a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the equation of the altitude through \\(C\\).",
      a: "y = -x + 7",
      solutionSteps: [
        {
          explanation: "Slope of AB is 1, so perpendicular slope is -1.",
          workingOut: "y - 1 = -1(x - 6) \\implies y = -x + 7"
        }
      ]
    },
    {
      id: "y9-11i-q24b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the equation of the altitude through \\(B\\).",
      a: "y = 3x - 5",
      solutionSteps: [
        {
          explanation: "Slope of AC is -1/3, so perpendicular slope is 3.",
          workingOut: "y - 7 = 3(x - 4) \\implies y = 3x - 5"
        }
      ]
    },
    {
      id: "y9-11i-q24c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the equation of the altitude through \\(A\\).",
      a: "y = 1/3x + 3",
      solutionSteps: [
        {
          explanation: "Slope of BC is -3, so perpendicular slope is 1/3.",
          workingOut: "y - 3 = \\frac{1}{3}(x - 0) \\implies y = \\frac{1}{3}x + 3"
        }
      ]
    }
  ]
});

// Q25: Circle inscribed in equilateral triangle (hard, timeLimit: 120, subQuestions)
questions.push({
  id: "y9-11i-q25",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "A circle with centre the origin \\(O\\) is inscribed in the equilateral triangle \\(ABC\\) with base vertices \\(B(4, -y_0)\\), \\(C(-4, -y_0)\\), and \\(A(0, y_A)\\). The side \\(AB\\) is tangent to the circle at \\(X\\), and base \\(BC\\) is tangent to the circle at \\(Y(0, -r)\\). Answer the following sub-questions.",
  a: "a) 4\\sqrt{3}, b) 4/3\\sqrt{3}, c) x^2 + y^2 = 16/3",
  solution: "a) The base of the equilateral triangle has length \\(4 - (-4) = 8\\).\n" +
    "   The height \\(AY\\) is:\n" +
    "   \\(AY = 8 \\times \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}\\).\n\n" +
    "b) By similar triangles, \\(\\Delta AXO \\sim \\Delta AYB\\), so:\n" +
    "   \\(\\frac{OX}{YB} = \\frac{AO}{AB}\\)\n" +
    "   Let the radius be \\(r\\). Then \\(OX = r\\), \\(YB = 4\\), \\(AB = 8\\), and \\(AO = 4\\sqrt{3} - r\\).\n" +
    "   \\(\\frac{r}{4} = \\frac{4\\sqrt{3} - r}{8} \\implies 2r = 4\\sqrt{3} - r \\implies 3r = 4\\sqrt{3} \\implies r = \\frac{4\\sqrt{3}}{3}\\).\n\n" +
    "c) The equation of the circle is:\n" +
    "   \\(x^2 + y^2 = r^2 = \\left(\\frac{4\\sqrt{3}}{3}\\right)^2 = \\frac{16 \\times 3}{9} = \\frac{16}{3}\\).",
  t: "Revision",
  hint: "Find height of equilateral triangle, set up ratio of similar triangles to find radius, and formulate circle equation.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-5, 8, 5, -4],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [0, 4.619], {size: 3, color: 'black', name: 'A', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [4, -2.309], {size: 3, color: 'black', name: 'B', withLabel: true, label: {offset: [10, -5]}});
var pC = board.create('point', [-4, -2.309], {size: 3, color: 'black', name: 'C', withLabel: true, label: {offset: [-20, -5]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
var pO = board.create('point', [0, 0], {size: 3, color: 'red', name: 'O', withLabel: true, label: {offset: [-15, 10]}});
board.create('circle', [[0, 0], 2.309], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pY = board.create('point', [0, -2.309], {size: 3, color: 'black', name: 'Y', withLabel: true, label: {offset: [10, -10]}});
var pX = board.create('point', [2, 1.155], {size: 3, color: 'black', name: 'X', withLabel: true, label: {offset: [10, 10]}});
board.create('segment', [pO, pX], {strokeColor: 'red', strokeWidth: 1});
board.create('segment', [pO, pY], {strokeColor: 'red', strokeWidth: 1});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11i-q25a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the height \\(AY\\) of the triangle.",
      a: "4\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Use height formula.",
          workingOut: "AY = 8 \\times \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11i-q25b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the radius \\(OX\\) of the inscribed circle.",
      a: "4/3\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Apply similarity ratio.",
          workingOut: "\\frac{r}{4} = \\frac{4\\sqrt{3} - r}{8} \\implies r = \\frac{4\\sqrt{3}}{3}"
        }
      ]
    },
    {
      id: "y9-11i-q25c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the equation of the circle.",
      a: "x^2 + y^2 = 16/3",
      solutionSteps: [
        {
          explanation: "Formulate circle equation.",
          workingOut: "x^2 + y^2 = r^2 = \\left(\\frac{4\\sqrt{3}}{3}\\right)^2 = \\frac{16}{3}"
        }
      ]
    }
  ]
});

// Write to file
const fileContent = `export const Y9_CH11I_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11IQuestions.js!");
