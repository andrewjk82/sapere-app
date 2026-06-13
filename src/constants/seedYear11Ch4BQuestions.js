export const Y11_CH4B_QUESTIONS = [
  // Q1a(i)
  {
    id: "y11a-4b-q1ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = (x+2)(x-2)\\) is below the \\(x\\)-axis.",
    a: "-2 < x < 2",
    solution: "-2 < x < 2",
    t: "Solving quadratic inequations",
    hint: "Identify the interval of x where the y-coordinates are negative.",
    solutionSteps: [
      {
        explanation: "To find the values of \\(x\\) where the parabola is below the \\(x\\)-axis, we need to solve the inequality \\(y < 0\\). Start by finding the \\(x\\)-intercepts of the parabola.",
        workingOut: "(x+2)(x-2) = 0",
        graphData: null
      },
      {
        explanation: "Set each linear factor to zero to find the boundary points.",
        workingOut: "x = -2 \\quad \\mathrm{or} \\quad x = 2",
        graphData: null
      },
      {
        explanation: "Since the coefficient of \\(x^2\\) is positive, the parabola opens upwards. This means the graph is below the \\(x\\)-axis between the two boundary points.",
        workingOut: "-2 < x < 2",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-4, 5, 4, -5],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "V", coords: [0, -4], name: "", color: "blue", size: 1 },
          { type: "point", id: "A", coords: [-2, 0], name: "-2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [2, 0], name: "2", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "circle", id: "c1", center: [0, -4], radius: 4, color: "none" }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-5],[0,5]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 4; }, -3.5, 3.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q1a(ii)
  {
    id: "y11a-4b-q1aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = (x+2)(x-2)\\) is above the \\(x\\)-axis.",
    a: "x < -2 or x > 2",
    solution: "x < -2 or x > 2",
    t: "Solving quadratic inequations",
    hint: "Identify the interval of x where the y-coordinates are positive.",
    solutionSteps: [
      {
        explanation: "To find the values of \\(x\\) where the parabola is above the \\(x\\)-axis, solve the inequality \\(y > 0\\). Identify the boundary \\(x\\)-intercepts by setting the function to zero.",
        workingOut: "(x+2)(x-2) = 0",
        graphData: null
      },
      {
        explanation: "Solve the linear factors to find the roots.",
        workingOut: "x = -2 \\quad \\mathrm{or} \\quad x = 2",
        graphData: null
      },
      {
        explanation: "Because the parabola opens upwards, it lies above the \\(x\\)-axis outside the interval bounded by the roots.",
        workingOut: "x < -2 \\quad \\mathrm{or} \\quad x > 2",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-4, 5, 4, -5],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-2, 0], name: "-2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [2, 0], name: "2", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-5],[0,5]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 4; }, -3.5, 3.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q1b(i)
  {
    id: "y11a-4b-q1bi",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = x^2 - 5x + 4\\) is below the \\(x\\)-axis.",
    a: "1 < x < 4",
    solution: "1 < x < 4",
    t: "Solving quadratic inequations",
    hint: "Factorise the quadratic to find the boundary roots.",
    solutionSteps: [
      {
        explanation: "Locate the boundary points where the parabola intersects the horizontal axis by solving the quadratic equation.",
        workingOut: "x^2 - 5x + 4 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression to solve for the root values.",
        workingOut: "(x-1)(x-4) = 0 \\implies x = 1 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Since the parabola opens upwards, it goes below the \\(x\\)-axis in the open interval between the roots.",
        workingOut: "1 < x < 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-1, 6, 6, -4],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 4], name: "4", color: "blue", size: 1, label: { offset: [-12, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-4],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 5*x + 4; }, -0.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q1b(ii)
  {
    id: "y11a-4b-q1bii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = x^2 - 5x + 4\\) is above the \\(x\\)-axis.",
    a: "x < 1 or x > 4",
    solution: "x < 1 or x > 4",
    t: "Solving quadratic inequations",
    hint: "Identify the outer regions from the roots.",
    solutionSteps: [
      {
        explanation: "Find the root values where the parabola meets the horizontal axis.",
        workingOut: "x^2 - 5x + 4 = 0 \\implies (x-1)(x-4) = 0",
        graphData: null
      },
      {
        explanation: "Obtain the boundary values of \\(x\\).",
        workingOut: "x = 1 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Because the coefficient of \\(x^2\\) is positive, the graph lies above the \\(x\\)-axis to the left of the smaller root and to the right of the larger root.",
        workingOut: "x < 1 \\quad \\mathrm{or} \\quad x > 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-1, 6, 6, -4],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 4], name: "4", color: "blue", size: 1, label: { offset: [-12, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-4],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 5*x + 4; }, -0.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q1c(i)
  {
    id: "y11a-4b-q1ci",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = -x^2 - 2x + 3\\) is below the \\(x\\)-axis.",
    a: "x < -3 or x > 1",
    solution: "x < -3 or x > 1",
    t: "Solving quadratic inequations",
    hint: "Keep in mind that this is a concave down parabola.",
    solutionSteps: [
      {
        explanation: "Set the quadratic expression to zero to find where it crosses the horizontal boundary axis.",
        workingOut: "-x^2 - 2x + 3 = 0",
        graphData: null
      },
      {
        explanation: "Multiply by negative one and factorise to solve for the root boundaries.",
        workingOut: "x^2 + 2x - 3 = 0 \\implies (x+3)(x-1) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 1",
        graphData: null
      },
      {
        explanation: "Since the coefficient of \\(x^2\\) is negative, the parabola opens downwards. This means it is below the \\(x\\)-axis in the outer intervals.",
        workingOut: "x < -3 \\quad \\mathrm{or} \\quad x > 1",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-5, 5, 3, -5],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-3, 0], name: "-3", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 3], name: "3", color: "blue", size: 1, label: { offset: [8, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-5],[0,5]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return -x*x - 2*x + 3; }, -4.5, 2.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q1c(ii)
  {
    id: "y11a-4b-q1cii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write down the values of \\(x\\) for which the parabola \\(y = -x^2 - 2x + 3\\) is above the \\(x\\)-axis.",
    a: "-3 < x < 1",
    solution: "-3 < x < 1",
    t: "Solving quadratic inequations",
    hint: "Identify the region between the roots where y is positive.",
    solutionSteps: [
      {
        explanation: "Set the quadratic function to zero to locate the boundary points.",
        workingOut: "-x^2 - 2x + 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression to solve for the root boundaries.",
        workingOut: "-(x+3)(x-1) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 1",
        graphData: null
      },
      {
        explanation: "Since the parabola opens downwards, the loop of the curve lies above the horizontal axis between the two roots.",
        workingOut: "-3 < x < 1",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-5, 5, 3, -5],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-3, 0], name: "-3", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 3], name: "3", color: "blue", size: 1, label: { offset: [8, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-5],[0,5]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return -x*x - 2*x + 3; }, -4.5, 2.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2a(i)
  {
    id: "y11a-4b-q2ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = x^2 - 6x + 8\\), state the values of \\(x\\) for which \\(y = 0\\).",
    a: "2, 4",
    solution: "2, 4",
    t: "Solving quadratic inequations",
    hint: "Find the x-intercepts of the parabola.",
    solutionSteps: [
      {
        explanation: "To find where \\(y = 0\\), set the quadratic expression equal to zero.",
        workingOut: "x^2 - 6x + 8 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic by finding two numbers that multiply to 8 and add to -6.",
        workingOut: "(x-2)(x-4) = 0",
        graphData: null
      },
      {
        explanation: "Set each linear factor to zero to solve for the boundary points.",
        workingOut: "x = 2, \\; 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-1, 10, 6, -3],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [2, 0], name: "2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 8], name: "8", color: "blue", size: 1, label: { offset: [-12, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-3],[0,10]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 6*x + 8; }, -0.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2a(ii)
  {
    id: "y11a-4b-q2aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = x^2 - 6x + 8\\), state the values of \\(x\\) for which \\(y > 0\\).",
    a: "x < 2 or x > 4",
    solution: "x < 2 or x > 4",
    t: "Solving quadratic inequations",
    hint: "Identify the intervals where the curve goes above the x-axis.",
    solutionSteps: [
      {
        explanation: "Determine the root boundary values by factorising the expression.",
        workingOut: "x^2 - 6x + 8 = 0 \\implies (x-2)(x-4) = 0",
        graphData: null
      },
      {
        explanation: "Identify the boundary values.",
        workingOut: "x = 2 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Since the parabola opens upwards, it is positive (above the horizontal axis) outside the boundary points.",
        workingOut: "x < 2 \\quad \\mathrm{or} \\quad x > 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-1, 10, 6, -3],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [2, 0], name: "2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 8], name: "8", color: "blue", size: 1, label: { offset: [-12, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-3],[0,10]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 6*x + 8; }, -0.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2a(iii)
  {
    id: "y11a-4b-q2aiii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = x^2 - 6x + 8\\), state the values of \\(x\\) for which \\(y < 0\\).",
    a: "2 < x < 4",
    solution: "2 < x < 4",
    t: "Solving quadratic inequations",
    hint: "Identify the region between the roots where the parabola goes below the x-axis.",
    solutionSteps: [
      {
        explanation: "Find the intercepts where \\(y = 0\\).",
        workingOut: "x^2 - 6x + 8 = 0 \\implies (x-2)(x-4) = 0",
        graphData: null
      },
      {
        explanation: "Identify the boundary roots.",
        workingOut: "x = 2 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Since the parabola opens upwards, it is negative (below the horizontal axis) between the root values.",
        workingOut: "2 < x < 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-1, 10, 6, -3],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [2, 0], name: "2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } },
          { type: "point", id: "Y", coords: [0, 8], name: "8", color: "blue", size: 1, label: { offset: [-12, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-3],[0,10]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*x - 6*x + 8; }, -0.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2b(i)
  {
    id: "y11a-4b-q2bi",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = 2x^2 + 4x - 6\\), state the values of \\(x\\) for which \\(y = 0\\).",
    a: "-3, 1",
    solution: "-3, 1",
    t: "Solving quadratic inequations",
    hint: "Identify the boundary roots by factorising the quadratic expression.",
    solutionSteps: [
      {
        explanation: "Set the quadratic expression equal to zero to find the roots.",
        workingOut: "2x^2 + 4x - 6 = 0",
        graphData: null
      },
      {
        explanation: "Divide the entire equation by 2 to simplify the quadratic expression, then factorise.",
        workingOut: "x^2 + 2x - 3 = 0 \\implies (x+3)(x-1) = 0",
        graphData: null
      },
      {
        explanation: "Set each linear factor to zero to solve for the boundary points.",
        workingOut: "x = -3, \\; 1",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-5, 6, 3, -10],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-3, 0], name: "-3", color: "blue", size: 1, label: { offset: [-12, 8] } },
          { type: "point", id: "B", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [8, 8] } },
          { type: "point", id: "Y", coords: [0, -6], name: "-6", color: "blue", size: 1, label: { offset: [8, -8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-10],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return 2*x*x + 4*x - 6; }, -4.5, 2.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2b(ii)
  {
    id: "y11a-4b-q2bii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = 2x^2 + 4x - 6\\), state the values of \\(x\\) for which \\(y > 0\\).",
    a: "x < -3 or x > 1",
    solution: "x < -3 or x > 1",
    t: "Solving quadratic inequations",
    hint: "Identify the intervals where the parabola goes above the x-axis.",
    solutionSteps: [
      {
        explanation: "Set the quadratic expression to zero to find the boundary roots.",
        workingOut: "2x^2 + 4x - 6 = 0 \\implies x^2 + 2x - 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the simplified expression.",
        workingOut: "(x+3)(x-1) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 1",
        graphData: null
      },
      {
        explanation: "Because the coefficient of \\(x^2\\) is positive, the parabola opens upwards and lies above the horizontal axis outside the root intervals.",
        workingOut: "x < -3 \\quad \\mathrm{or} \\quad x > 1",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-5, 6, 3, -10],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-3, 0], name: "-3", color: "blue", size: 1, label: { offset: [-12, 8] } },
          { type: "point", id: "B", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [8, 8] } },
          { type: "point", id: "Y", coords: [0, -6], name: "-6", color: "blue", size: 1, label: { offset: [8, -8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-10],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return 2*x*x + 4*x - 6; }, -4.5, 2.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2b(iii)
  {
    id: "y11a-4b-q2biii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = 2x^2 + 4x - 6\\), state the values of \\(x\\) for which \\(y < 0\\).",
    a: "-3 < x < 1",
    solution: "-3 < x < 1",
    t: "Solving quadratic inequations",
    hint: "Identify the region between the roots where the parabola lies below the x-axis.",
    solutionSteps: [
      {
        explanation: "Locate the boundary points where the parabola crosses the horizontal axis.",
        workingOut: "2x^2 + 4x - 6 = 0 \\implies x^2 + 2x - 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise to solve for the boundary points.",
        workingOut: "(x+3)(x-1) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 1",
        graphData: null
      },
      {
        explanation: "Since the parabola opens upwards, it goes below the horizontal axis between the boundary roots.",
        workingOut: "-3 < x < 1",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-5, 6, 3, -10],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-3, 0], name: "-3", color: "blue", size: 1, label: { offset: [-12, 8] } },
          { type: "point", id: "B", coords: [1, 0], name: "1", color: "blue", size: 1, label: { offset: [8, 8] } },
          { type: "point", id: "Y", coords: [0, -6], name: "-6", color: "blue", size: 1, label: { offset: [8, -8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-10],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return 2*x*x + 4*x - 6; }, -4.5, 2.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2c(i)
  {
    id: "y11a-4b-q2ci",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = -x^2 + 4x\\), state the values of \\(x\\) for which \\(y = 0\\).",
    a: "0, 4",
    solution: "0, 4",
    t: "Solving quadratic inequations",
    hint: "Identify the x-intercepts of the parabola.",
    solutionSteps: [
      {
        explanation: "Set the quadratic expression to zero to find the boundary roots.",
        workingOut: "-x^2 + 4x = 0",
        graphData: null
      },
      {
        explanation: "Factorise the common factor of \\(-x\\) from the expression.",
        workingOut: "-x(x - 4) = 0",
        graphData: null
      },
      {
        explanation: "Set each factor to zero to find the coordinates where the curve meets the horizontal axis.",
        workingOut: "x = 0, \\; 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-2, 6, 6, -6],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [0, 0], name: "0", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return -x*x + 4*x; }, -1.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2c(ii)
  {
    id: "y11a-4b-q2cii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = -x^2 + 4x\\), state the values of \\(x\\) for which \\(y > 0\\).",
    a: "0 < x < 4",
    solution: "0 < x < 4",
    t: "Solving quadratic inequations",
    hint: "Keep in mind that this is a concave down parabola.",
    solutionSteps: [
      {
        explanation: "Find the roots of the expression by setting \\(y = 0\\).",
        workingOut: "-x^2 + 4x = 0 \\implies -x(x-4) = 0",
        graphData: null
      },
      {
        explanation: "Identify the boundary roots.",
        workingOut: "x = 0 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Since the leading coefficient is negative, the parabola opens downwards and lies above the horizontal axis between the roots.",
        workingOut: "0 < x < 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-2, 6, 6, -6],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [0, 0], name: "0", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return -x*x + 4*x; }, -1.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q2c(iii)
  {
    id: "y11a-4b-q2ciii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "For the parabola \\(y = -x^2 + 4x\\), state the values of \\(x\\) for which \\(y < 0\\).",
    a: "x < 0 or x > 4",
    solution: "x < 0 or x > 4",
    t: "Solving quadratic inequations",
    hint: "Identify the intervals where the concave down parabola goes below the x-axis.",
    solutionSteps: [
      {
        explanation: "Find where the parabola crosses the horizontal axis.",
        workingOut: "-x^2 + 4x = 0 \\implies -x(x-4) = 0",
        graphData: null
      },
      {
        explanation: "State the boundary roots.",
        workingOut: "x = 0 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Because the parabola opens downwards, it lies below the horizontal axis in the outer regions.",
        workingOut: "x < 0 \\quad \\mathrm{or} \\quad x > 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-2, 6, 6, -6],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [0, 0], name: "0", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return -x*x + 4*x; }, -1.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q3ai
  {
    id: "y11a-4b-q3ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Use the given graph of \\(y = x(x-6)\\) to solve the inequation: \\(x(x-6) < 0\\).",
    a: "0 < x < 6",
    solution: "0 < x < 6",
    t: "Solving quadratic inequations",
    hint: "Identify the interval where the graph is strictly below the horizontal axis.",
    solutionSteps: [
      {
        explanation: "Observe the graph to find the intercepts where the curve meets the horizontal axis.",
        workingOut: "x(x-6) = 0 \\implies x = 0 \\quad \\mathrm{or} \\quad x = 6",
        graphData: null
      },
      {
        explanation: "The inequation asks for where the function value is strictly less than zero.",
        workingOut: "y < 0",
        graphData: null
      },
      {
        explanation: "Identify the region between the roots where the parabola is below the axis.",
        workingOut: "0 < x < 6",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-2, 6, 8, -10],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [0, 0], name: "0", color: "blue", size: 1, label: { offset: [-12, 8] } },
          { type: "point", id: "B", coords: [6, 0], name: "6", color: "blue", size: 1, label: { offset: [8, 8] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[8,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-10],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*(x-6); }, -1.5, 7.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q3aii
  {
    id: "y11a-4b-q3aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Use the given graph of \\(y = (x-4)(x+2)\\) to solve the inequation: \\((x-4)(x+2) \\ge 0\\).",
    a: "x <= -2 or x >= 4",
    solution: "x <= -2 or x >= 4",
    t: "Solving quadratic inequations",
    hint: "Look for intervals where the curve is above or on the x-axis.",
    solutionSteps: [
      {
        explanation: "Find the boundary intercept coordinates where the parabola meets the horizontal axis.",
        workingOut: "(x-4)(x+2) = 0 \\implies x = -2 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "The inequality condition is greater than or equal to zero.",
        workingOut: "y \\ge 0",
        graphData: null
      },
      {
        explanation: "Because the inequality includes equality and the curve opens upwards, include the boundary points and state the outer regions.",
        workingOut: "x \\le -2 \\quad \\mathrm{or} \\quad x \\ge 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-4, 6, 6, -10],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-2, 0], name: "-2", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [4, 0], name: "4", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-10],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return (x-4)*(x+2); }, -3.5, 5.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q3aiii
  {
    id: "y11a-4b-q3aiii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Use the given graph of \\(y = x(3-x)\\) to solve the inequation: \\(x(3-x) \\le 0\\).",
    a: "x <= 0 or x >= 3",
    solution: "x <= 0 or x >= 3",
    t: "Solving quadratic inequations",
    hint: "Remember that this is a concave down parabola.",
    solutionSteps: [
      {
        explanation: "Observe the intercepts where the parabola meets the horizontal axis.",
        workingOut: "x(3-x) = 0 \\implies x = 0 \\quad \\mathrm{or} \\quad x = 3",
        graphData: null
      },
      {
        explanation: "Determine the condition representing the inequality.",
        workingOut: "y \\le 0",
        graphData: null
      },
      {
        explanation: "Since the parabola opens downwards, the curve lies below or on the horizontal axis outside the boundary points.",
        workingOut: "x \\le 0 \\quad \\mathrm{or} \\quad x \\ge 3",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-2, 5, 5, -5],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [0, 0], name: "0", color: "blue", size: 1, label: { offset: [-12, -12] } },
          { type: "point", id: "B", coords: [3, 0], name: "3", color: "blue", size: 1, label: { offset: [8, -12] } }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[5,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-5],[0,5]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return x*(3-x); }, -1.5, 4.5], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q3b
  {
    id: "y11a-4b-q3b",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Explain how you can confirm your answers to part a by using tables of values.",
    a: "Select test values of x in each interval (e.g. x = -1, 1, 7 for part i) and evaluate the quadratic expression to verify if the inequality holds true.",
    solution: "Select test values of x in each interval (e.g. x = -1, 1, 7 for part i) and evaluate the quadratic expression to verify if the inequality holds true.",
    t: "Solving quadratic inequations",
    hint: "Choose numbers outside and between the boundary roots.",
    solutionSteps: [
      {
        explanation: "Set up intervals bounded by the roots. For example, for \\(x(x-6) < 0\\), the boundaries are 0 and 6, dividing the number line into three regions: \\(x < 0\\), \\(0 < x < 6\\), and \\(x > 6\\).",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Choose test values in each interval (such as \\(x = -1\\), \\(x = 2\\), and \\(x = 7\\)) and substitute them into the expression to evaluate their signs.",
        workingOut: "(-1)(-1-6) = 7 > 0, \\quad (2)(2-6) = -8 < 0, \\quad (7)(7-6) = 7 > 0",
        graphData: null
      },
      {
        explanation: "Confirm that only the region between 0 and 6 yields a negative result, verifying the solution \\(0 < x < 6\\).",
        workingOut: "",
        graphData: null
      }
    ]
  },
  // Q4ai
  {
    id: "y11a-4b-q4ai",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((x+3)(x-5) < 0\\).",
    a: "-3 < x < 5",
    solution: "-3 < x < 5",
    t: "Solving quadratic inequations",
    hint: "Identify the roots and find where the curve is negative.",
    solutionSteps: [
      {
        explanation: "Identify the boundary roots by setting the expression to zero.",
        workingOut: "(x+3)(x-5) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 5",
        graphData: null
      },
      {
        explanation: "Recall that the associated parabola opens upwards because the product expansion yields a positive leading coefficient of \\(x^2\\).",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Solve the inequality by stating the interval where the parabola is below the horizontal axis.",
        workingOut: "-3 < x < 5",
        graphData: null
      }
    ]
  },
  // Q4aii
  {
    id: "y11a-4b-q4aii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((4-x)(x+2) > 0\\).",
    a: "-2 < x < 4",
    solution: "-2 < x < 4",
    t: "Solving quadratic inequations",
    hint: "Notice the negative coefficient of x^2.",
    solutionSteps: [
      {
        explanation: "Find the boundary points by setting the expression equal to zero.",
        workingOut: "(4-x)(x+2) = 0 \\implies x = -2 \\quad \\mathrm{or} \\quad x = 4",
        graphData: null
      },
      {
        explanation: "Observe that the parabola opens downwards because the coefficient of \\(x^2\\) is negative.",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Solve the inequality by identifying where the curve lies above the horizontal axis.",
        workingOut: "-2 < x < 4",
        graphData: null
      }
    ]
  },
  // Q4aiii
  {
    id: "y11a-4b-q4aiii",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((3-x)(x-6) \\le 0\\).",
    a: "x <= 3 or x >= 6",
    solution: "x <= 3 or x >= 6",
    t: "Solving quadratic inequations",
    hint: "Be careful with the signs and the concave down direction.",
    solutionSteps: [
      {
        explanation: "Identify the boundary roots of the equation.",
        workingOut: "(3-x)(x-6) = 0 \\implies x = 3 \\quad \\mathrm{or} \\quad x = 6",
        graphData: null
      },
      {
        explanation: "Observe that expanding the expression yields \\(-x^2 + 9x - 18\\). The parabola opens downwards.",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Determine the regions where the curve is below or on the horizontal axis.",
        workingOut: "x \\le 3 \\quad \\mathrm{or} \\quad x \\ge 6",
        graphData: null
      }
    ]
  },
  // Q4aiv
  {
    id: "y11a-4b-q4aiv",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((x+2)(x+4) \\ge 0\\).",
    a: "x <= -4 or x >= -2",
    solution: "x <= -4 or x >= -2",
    t: "Solving quadratic inequations",
    hint: "Identify the roots and find where the parabola is positive or zero.",
    solutionSteps: [
      {
        explanation: "Set the expression to zero to find the roots.",
        workingOut: "(x+2)(x+4) = 0 \\implies x = -4 \\quad \\mathrm{or} \\quad x = -2",
        graphData: null
      },
      {
        explanation: "The parabola opens upwards. We want the regions where the curve is above or on the horizontal axis.",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Combine the intervals including the boundary points.",
        workingOut: "x \\le -4 \\quad \\mathrm{or} \\quad x \\ge -2",
        graphData: null
      }
    ]
  },
  // Q4av
  {
    id: "y11a-4b-q4av",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((x+3)(3-x) < 0\\).",
    a: "x < -3 or x > 3",
    solution: "x < -3 or x > 3",
    t: "Solving quadratic inequations",
    hint: "Note the concave down shape.",
    solutionSteps: [
      {
        explanation: "Determine the intercepts where the parabola meets the horizontal axis.",
        workingOut: "(x+3)(3-x) = 0 \\implies x = -3 \\quad \\mathrm{or} \\quad x = 3",
        graphData: null
      },
      {
        explanation: "Since the leading term of the expansion is negative, the parabola opens downwards.",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Identify the outer regions where the parabola is strictly below the horizontal axis.",
        workingOut: "x < -3 \\quad \\mathrm{or} \\quad x > 3",
        graphData: null
      }
    ]
  },
  // Q4avi
  {
    id: "y11a-4b-q4avi",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Sketch the associated parabola and hence solve: \\((x+3)(x+4) \\le 0\\).",
    a: "-4 <= x <= -3",
    solution: "-4 <= x <= -3",
    t: "Solving quadratic inequations",
    hint: "Find where the parabola lies below or on the horizontal axis.",
    solutionSteps: [
      {
        explanation: "Identify the boundary roots.",
        workingOut: "(x+3)(x+4) = 0 \\implies x = -4 \\quad \\mathrm{or} \\quad x = -3",
        graphData: null
      },
      {
        explanation: "Since the parabola opens upwards, it is negative or zero between the roots.",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Write the closed interval representing the solution.",
        workingOut: "-4 \\le x \\le -3",
        graphData: null
      }
    ]
  },
  // Q4b
  {
    id: "y11a-4b-q4b",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Confirm your answers to part a by using tables of values.",
    a: "Choose points in each interval to test the sign of the product expression.",
    solution: "Choose points in each interval to test the sign of the product expression.",
    t: "Solving quadratic inequations",
    hint: "Select integer values from each region.",
    solutionSteps: [
      {
        explanation: "Set up sign check intervals. For example, in part i, testing values in regions \\(x < -3\\), \\(-3 < x < 5\\), and \\(x > 5\\).",
        workingOut: "",
        graphData: null
      },
      {
        explanation: "Substitute values like \\(x = -4\\), \\(x = 0\\), and \\(x = 6\\) into \\((x+3)(x-5)\\).",
        workingOut: "(-4+3)(-4-5) = 9 > 0, \\quad (0+3)(0-5) = -15 < 0, \\quad (6+3)(6-5) = 9 > 0",
        graphData: null
      },
      {
        explanation: "Confirm the product is negative only in the middle interval, supporting the solution \\(-3 < x < 5\\).",
        workingOut: "",
        graphData: null
      }
    ]
  },
  // Q5
  {
    id: "y11a-4b-q5",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve the sub-questions by first factorising the quadratic expression and sketching the associated parabola.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q5a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 + 3x - 4 < 0\\).",
        a: "-4 < x < 1",
        solutionSteps: [
          {
            explanation: "Factorise the quadratic expression on the left hand side.",
            workingOut: "(x+4)(x-1) < 0",
            graphData: null
          },
          {
            explanation: "Find the boundary points where the associated parabola intersects the horizontal axis.",
            workingOut: "x = -4 \\quad \\mathrm{or} \\quad x = 1",
            graphData: null
          },
          {
            explanation: "Because the parabola opens upwards, it is negative between the roots.",
            workingOut: "-4 < x < 1",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q5b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 - 6x + 5 \\ge 0\\).",
        a: "x <= 1 or x >= 5",
        solutionSteps: [
          {
            explanation: "Factorise the quadratic expression.",
            workingOut: "(x-1)(x-5) \\ge 0",
            graphData: null
          },
          {
            explanation: "Determine the intercepts of the parabola.",
            workingOut: "x = 1 \\quad \\mathrm{or} \\quad x = 5",
            graphData: null
          },
          {
            explanation: "Since the parabola opens upwards, it is positive or zero in the outer regions.",
            workingOut: "x \\le 1 \\quad \\mathrm{or} \\quad x \\ge 5",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q5c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 + 7x + 10 > 0\\).",
        a: "x < -5 or x > -2",
        solutionSteps: [
          {
            explanation: "Factorise the quadratic expression on the left hand side.",
            workingOut: "(x+5)(x+2) > 0",
            graphData: null
          },
          {
            explanation: "Find the root boundary values.",
            workingOut: "x = -5 \\quad \\mathrm{or} \\quad x = -2",
            graphData: null
          },
          {
            explanation: "Because the parabola opens upwards, it is strictly positive outside the roots.",
            workingOut: "x < -5 \\quad \\mathrm{or} \\quad x > -2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q5d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 - 2x - 8 \\le 0\\).",
        a: "-2 <= x <= 4",
        solutionSteps: [
          {
            explanation: "Factorise the quadratic expression.",
            workingOut: "(x-4)(x+2) \\le 0",
            graphData: null
          },
          {
            explanation: "Obtain the intercepts.",
            workingOut: "x = -2 \\quad \\mathrm{or} \\quad x = 4",
            graphData: null
          },
          {
            explanation: "Since the parabola opens upwards, it is below or on the horizontal axis in the closed interval between the roots.",
            workingOut: "-2 \\le x \\le 4",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q5e",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(2x^2 + x - 3 \\le 0\\).",
        a: "-1.5 <= x <= 1",
        solutionSteps: [
          {
            explanation: "Factorise the non-monic quadratic expression by decomposition.",
            workingOut: "(2x+3)(x-1) \\le 0",
            graphData: null
          },
          {
            explanation: "Find the boundary points.",
            workingOut: "x = -\\frac{3}{2} \\quad \\mathrm{or} \\quad x = 1",
            graphData: null
          },
          {
            explanation: "Since the parabola opens upwards, it is negative or zero between the boundary values.",
            workingOut: "-1.5 \\le x \\le 1",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q5f",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(5 + 4x - x^2 > 0\\).",
        a: "-1 < x < 5",
        solutionSteps: [
          {
            explanation: "Rearrange the expression and multiply by negative one (reversing the inequality direction).",
            workingOut: "x^2 - 4x - 5 < 0",
            graphData: null
          },
          {
            explanation: "Factorise the expression to find the roots.",
            workingOut: "(x-5)(x+1) < 0 \\implies x = -1 \\quad \\mathrm{or} \\quad x = 5",
            graphData: null
          },
          {
            explanation: "Since the simplified parabola opens upwards, it is negative between the roots.",
            workingOut: "-1 < x < 5",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q6
  {
    id: "y11a-4b-q6",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve the following quadratic inequations.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q6a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 \\le 4\\).",
        a: "-2 <= x <= 2",
        solutionSteps: [
          {
            explanation: "Rearrange the inequation by moving the constant term to the left hand side.",
            workingOut: "x^2 - 4 \\le 0",
            graphData: null
          },
          {
            explanation: "Factorise using the difference of two squares identity.",
            workingOut: "(x-2)(x+2) \\le 0 \\implies x = -2 \\quad \\mathrm{or} \\quad x = 2",
            graphData: null
          },
          {
            explanation: "State the solution representing the interval between the roots.",
            workingOut: "-2 \\le x \\le 2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q6b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 > 4x\\).",
        a: "x < 0 or x > 4",
        solutionSteps: [
          {
            explanation: "Move the linear term to the left hand side.",
            workingOut: "x^2 - 4x > 0",
            graphData: null
          },
          {
            explanation: "Factorise the common term to identify the roots.",
            workingOut: "x(x - 4) > 0 \\implies x = 0 \\quad \\mathrm{or} \\quad x = 4",
            graphData: null
          },
          {
            explanation: "Because it is greater than zero and opens upwards, state the outer intervals.",
            workingOut: "x < 0 \\quad \\mathrm{or} \\quad x > 4",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q6c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 \\ge 100\\).",
        a: "x <= -10 or x >= 10",
        solutionSteps: [
          {
            explanation: "Rearrange the inequality to form a quadratic expression on the left.",
            workingOut: "x^2 - 100 \\ge 0",
            graphData: null
          },
          {
            explanation: "Factorise using the difference of squares.",
            workingOut: "(x-10)(x+10) \\ge 0 \\implies x = -10 \\quad \\mathrm{or} \\quad x = 10",
            graphData: null
          },
          {
            explanation: "State the outer regions.",
            workingOut: "x \\le -10 \\quad \\mathrm{or} \\quad x \\ge 10",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q6d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(2x^2 > 0\\).",
        a: "x != 0",
        solutionSteps: [
          {
            explanation: "Divide both sides of the inequality by 2.",
            workingOut: "x^2 > 0",
            graphData: null
          },
          {
            explanation: "Observe that the square of any real number is always non-negative (greater than or equal to zero).",
            workingOut: "x^2 \\ge 0",
            graphData: null
          },
          {
            explanation: "The inequality requires it to be strictly greater than zero, which excludes only the value where the square is zero.",
            workingOut: "x \\neq 0",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q6e",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 + 16 \\le 8x\\).",
        a: "x = 4",
        solutionSteps: [
          {
            explanation: "Move the linear term to the left hand side.",
            workingOut: "x^2 - 8x + 16 \\le 0",
            graphData: null
          },
          {
            explanation: "Recognise the perfect square trinomial pattern.",
            workingOut: "(x - 4)^2 \\le 0",
            graphData: null
          },
          {
            explanation: "A squared term cannot be strictly negative; it can only equal zero. Solve the equation.",
            workingOut: "x - 4 = 0 \\implies x = 4",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q6f",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(6x - 5 \\ge x^2\\).",
        a: "1 <= x <= 5",
        solutionSteps: [
          {
            explanation: "Rearrange all terms to the left hand side so that the leading coefficient is positive.",
            workingOut: "x^2 - 6x + 5 \\le 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic trinomial.",
            workingOut: "(x - 1)(x - 5) \\le 0 \\implies x = 1 \\quad \\mathrm{or} \\quad x = 5",
            graphData: null
          },
          {
            explanation: "Solve the inequality by stating the interval between the roots.",
            workingOut: "1 \\le x \\le 5",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q7
  {
    id: "y11a-4b-q7",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve the inequations with quadratics on both sides.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q7a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(2x^2 + 2x - 3 < x^2 + 5x + 7\\).",
        a: "-2 < x < 5",
        solutionSteps: [
          {
            explanation: "Subtract all terms on the right hand side from both sides to gather them on the left.",
            workingOut: "(2x^2 - x^2) + (2x - 5x) + (-3 - 7) < 0",
            graphData: null
          },
          {
            explanation: "Simplify the quadratic expression.",
            workingOut: "x^2 - 3x - 10 < 0",
            graphData: null
          },
          {
            explanation: "Factorise and solve for the boundary points.",
            workingOut: "(x-5)(x+2) < 0 \\implies -2 < x < 5",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q7b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 + 6x + 5 \\le -x^2 + 2x + 11\\).",
        a: "-3 <= x <= 1",
        solutionSteps: [
          {
            explanation: "Collect all terms on the left hand side.",
            workingOut: "(x^2 + x^2) + (6x - 2x) + (5 - 11) \\le 0",
            graphData: null
          },
          {
            explanation: "Simplify and divide the entire expression by 2.",
            workingOut: "2x^2 + 4x - 6 \\le 0 \\implies x^2 + 2x - 3 \\le 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic and state the interval between the roots.",
            workingOut: "(x+3)(x-1) \\le 0 \\implies -3 \\le x \\le 1",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q7c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(x^2 + 5x + 4 \\ge -x^2 + 6x + 7\\).",
        a: "x <= -1 or x >= 1.5",
        solutionSteps: [
          {
            explanation: "Rearrange all terms to the left hand side.",
            workingOut: "2x^2 - x - 3 \\ge 0",
            graphData: null
          },
          {
            explanation: "Factorise the non-monic trinomial expression.",
            workingOut: "(2x-3)(x+1) \\ge 0 \\implies x = -1 \\quad \\mathrm{or} \\quad x = 1.5",
            graphData: null
          },
          {
            explanation: "Since the parabola opens upwards, state the outer intervals.",
            workingOut: "x \\le -1 \\quad \\mathrm{or} \\quad x \\ge 1.5",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q7d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Solve: \\(2x^2 - 8x - 3 > 2x^2 - 3x\\).",
        a: "x < -0.6",
        solutionSteps: [
          {
            explanation: "Subtract \\(2x^2\\) from both sides. Notice that the quadratic term cancels out.",
            workingOut: "-8x - 3 > -3x",
            graphData: null
          },
          {
            explanation: "Add \\(8x\\) to both sides to gather the variable terms on the right.",
            workingOut: "-3 > 5x",
            graphData: null
          },
          {
            explanation: "Divide by 5 to solve the resulting linear inequation.",
            workingOut: "x < -\\frac{3}{5} \\implies x < -0.6",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q8a
  {
    id: "y11a-4b-q8a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Using the given graph of the LHS, solve the quadratic inequation: \\(8 + 2x - x^2 > 5\\).",
    a: "-1 < x < 3",
    solution: "-1 < x < 3",
    t: "Solving quadratic inequations",
    hint: "Find where the parabola y = 8 + 2x - x^2 is above the line y = 5.",
    solutionSteps: [
      {
        explanation: "Write the inequality in standard form by subtracting 5 from both sides.",
        workingOut: "8 + 2x - x^2 - 5 > 0 \\implies -x^2 + 2x + 3 > 0",
        graphData: null
      },
      {
        explanation: "Multiply the entire inequality by -1 and reverse the sign to make factorisation easier.",
        workingOut: "x^2 - 2x - 3 < 0 \\implies (x-3)(x+1) < 0",
        graphData: null
      },
      {
        explanation: "The boundaries where the parabola intersects the line \\(y = 5\\) are at \\(x = -1\\) and \\(x = 3\\). Identify where the curve is above this line.",
        workingOut: "-1 < x < 3",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-3, 11, 5, -2],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-1, 5], name: "", color: "red", size: 2 },
          { type: "point", id: "B", coords: [3, 5], name: "", color: "red", size: 2 },
          { type: "point", id: "V", coords: [1, 9], name: "", color: "blue", size: 1 },
          { type: "segment", id: "line5", from: [-3, 5], to: [5, 5], color: "orange", dash: 2 }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3,0],[5,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-2],[0,11]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return 8 + 2*x - x*x; }, -2.2, 4.2], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q8b
  {
    id: "y11a-4b-q8b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Using the given graph of the LHS, solve the quadratic inequation: \\(3 + 2x - x^2 \\le -5\\).",
    a: "x <= -2 or x >= 4",
    solution: "x <= -2 or x >= 4",
    t: "Solving quadratic inequations",
    hint: "Find where the parabola y = 3 + 2x - x^2 is below or on the line y = -5.",
    solutionSteps: [
      {
        explanation: "Set up the inequality by moving all terms to one side.",
        workingOut: "3 + 2x - x^2 + 5 \\le 0 \\implies -x^2 + 2x + 8 \\le 0",
        graphData: null
      },
      {
        explanation: "Multiply by -1 and reverse the inequality sign to factorise the quadratic.",
        workingOut: "x^2 - 2x - 8 \\ge 0 \\implies (x-4)(x+2) \\ge 0",
        graphData: null
      },
      {
        explanation: "Identify the boundary values and write down the intervals where the graph is below the line \\(y = -5\\).",
        workingOut: "x \\le -2 \\quad \\mathrm{or} \\quad x \\ge 4",
        graphData: null
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-4, 6, 6, -7],
        boardOptions: { keepaspectratio: true },
        elements: [
          { type: "point", id: "A", coords: [-2, -5], name: "", color: "red", size: 2 },
          { type: "point", id: "B", coords: [4, -5], name: "", color: "red", size: 2 },
          { type: "segment", id: "lineNeg5", from: [-4, -5], to: [6, -5], color: "orange", dash: 2 }
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[6,0]], {strokeColor:'gray', strokeWidth:1});\nboard.create('arrow', [[0,-7],[0,6]], {strokeColor:'gray', strokeWidth:1});\nboard.create('functiongraph', [function(x){ return 3 + 2*x - x*x; }, -3.2, 5.2], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
      }
    }
  },
  // Q8c
  {
    id: "y11a-4b-q8c",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "How could the graph in part a (which plots \\(y = 8 + 2x - x^2\\)) be used to solve the problem in part b?",
    a: "The curve in part b is shifted down by 5 units compared to part a. Therefore, solving part b is equivalent to finding where the curve in part a is less than or equal to 0.",
    solution: "The curve in part b is shifted down by 5 units compared to part a. Therefore, solving part b is equivalent to finding where the curve in part a is less than or equal to 0.",
    t: "Solving quadratic inequations",
    hint: "Compare the expressions \\(8+2x-x^2\\) and \\(3+2x-x^2\\).",
    solutionSteps: [
      {
        explanation: "Compare the two quadratic functions algebraically by taking their difference.",
        workingOut: "(8 + 2x - x^2) - (3 + 2x - x^2) = 5",
        graphData: null
      },
      {
        explanation: "Notice that the function in part b is exactly 5 units lower than the function in part a.",
        workingOut: "f_b(x) = f_a(x) - 5",
        graphData: null
      },
      {
        explanation: "Therefore, solving \\(f_b(x) \\le -5\\) is equivalent to solving \\(f_a(x) - 5 \\le -5\\), which simplifies directly.",
        workingOut: "f_a(x) \\le 0",
        graphData: null
      }
    ]
  },
  // Q9
  {
    id: "y11a-4b-q9",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Consider the graph and solving inequations together.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q9a",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "Graph the parabola \\(y = x^2 - 3x\\) and the line \\(y = 4 - 3x\\) on the same number plane.",
        a: "Plot the parabola with vertex at (1.5, -2.25) and intercepts at 0 and 3, and the straight line with y-intercept 4 and slope -3. The intersection points are at (-2, 10) and (2, -2).",
        solutionSteps: [
          {
            explanation: "Determine the intersection points of the parabola and the line by equating their expressions.",
            workingOut: "x^2 - 3x = 4 - 3x",
            graphData: null
          },
          {
            explanation: "Solve the simplified quadratic equation for \\(x\\).",
            workingOut: "x^2 = 4 \\implies x = -2 \\quad \\mathrm{or} \\quad x = 2",
            graphData: null
          },
          {
            explanation: "Calculate the corresponding \\(y\\)-coordinates for the intersection points: \\(y(-2) = 10\\) and \\(y(2) = -2\\). Sketch the curves crossing at these points.",
            workingOut: "(-2, 10), \\; (2, -2)",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q9b",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "How can this graph be used to solve \\(x^2 - 3x < 4 - 3x\\)? Write down the solution.",
        a: "-2 < x < 2",
        solutionSteps: [
          {
            explanation: "Identify that the inequation is satisfied where the graph of the parabola \\(y = x^2 - 3x\\) lies below the line \\(y = 4 - 3x\\).",
            workingOut: "",
            graphData: null
          },
          {
            explanation: "Determine the boundary vertical values from the intersection points found in part a.",
            workingOut: "x = -2 \\quad \\mathrm{or} \\quad x = 2",
            graphData: null
          },
          {
            explanation: "State the interval of \\(x\\) where the parabola is below the line.",
            workingOut: "-2 < x < 2",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q10
  {
    id: "y11a-4b-q10",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Write down and solve a suitable inequation to find the values of \\(x\\) for which the line \\(y = 3x - 5\\) is below the parabola \\(y = x^2 - 2x + 1\\).",
    a: "x < 2 or x > 3",
    solution: "x < 2 or x > 3",
    t: "Solving quadratic inequations",
    hint: "Set up the inequality where the line is less than the parabola.",
    solutionSteps: [
      {
        explanation: "Set up the inequality stating that the \\(y\\)-value of the line is strictly less than the \\(y\\)-value of the parabola.",
        workingOut: "3x - 5 < x^2 - 2x + 1",
        graphData: null
      },
      {
        explanation: "Rearrange the inequality to form a quadratic expression on one side.",
        workingOut: "0 < x^2 - 5x + 6 \\implies x^2 - 5x + 6 > 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression to solve for the boundary points and identify the outer regions.",
        workingOut: "(x-2)(x-3) > 0 \\implies x < 2 \\quad \\mathrm{or} \\quad x > 3",
        graphData: null
      }
    ]
  },
  // Q11
  {
    id: "y11a-4b-q11",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Two positive numbers have a sum of 40. Let one of the numbers be \\(x\\).",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q11a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Find an expression for the product \\(P\\) of the two numbers in terms of \\(x\\).",
        a: "x(40-x)",
        solutionSteps: [
          {
            explanation: "Let the second number be \\(y\\). Since the sum of the two numbers is 40, we have \\(x + y = 40\\). Express \\(y\\) in terms of \\(x\\).",
            workingOut: "y = 40 - x",
            graphData: null
          },
          {
            explanation: "Multiply the first number \\(x\\) by the second number \\(y\\) to find the expression for the product \\(P\\).",
            workingOut: "P = x \\times (40 - x)",
            graphData: null
          },
          {
            explanation: "Simplify the product formula.",
            workingOut: "P = x(40-x)",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q11b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Find the values of \\(x\\) for which the product \\(P\\) is at least 300.",
        a: "10 <= x <= 30",
        solutionSteps: [
          {
            explanation: "Set up the inequality where the product expression is greater than or equal to 300.",
            workingOut: "x(40-x) \\ge 300",
            workingOut: "40x - x^2 \\ge 300",
            graphData: null
          },
          {
            explanation: "Rearrange the quadratic inequality into standard form.",
            workingOut: "x^2 - 40x + 300 \\le 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic expression to solve for \\(x\\).",
            workingOut: "(x-10)(x-30) \\le 0 \\implies 10 \\le x \\le 30",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q11c",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "List the distinct pairs of integers that have a sum of 40 and a product of at least 300.",
        a: "(10, 30), (11, 29), (12, 28), (13, 27), (14, 26), (15, 25), (16, 24), (17, 23), (18, 22), (19, 21), (20, 20)",
        solutionSteps: [
          {
            explanation: "Recall the valid range for \\(x\\) from part b, which is \\(10 \\le x \\le 30\\).",
            workingOut: "x \\in \\{10, 11, \\dots, 20\\}",
            graphData: null
          },
          {
            explanation: "Each value of \\(x\\) corresponds to a pair of integers \\((x, 40-x)\\). Keep only the unique pairs to avoid duplicates.",
            workingOut: "",
            graphData: null
          },
          {
            explanation: "List all distinct pairs satisfying the conditions.",
            workingOut: "(10, 30), \\; (11, 29), \\; (12, 28), \\; (13, 27), \\; (14, 26), \\; (15, 25), \\; (16, 24), \\; (17, 23), \\; (18, 22), \\; (19, 21), \\; (20, 20)",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q12
  {
    id: "y11a-4b-q12",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "A rectangle has perimeter 200 mm. Let one side have length of \\(x\\) mm.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q12a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Write down an expression for the area \\(A\\) of this rectangle in terms of \\(x\\).",
        a: "x(100-x)",
        solutionSteps: [
          {
            explanation: "Use the perimeter formula to find the relationship between the two sides of the rectangle.",
            workingOut: "2(x + y) = 200 \\implies x + y = 100",
            graphData: null
          },
          {
            explanation: "Express the adjacent side \\(y\\) in terms of \\(x\\).",
            workingOut: "y = 100 - x",
            graphData: null
          },
          {
            explanation: "Multiply the two side expressions to find the area \\(A\\).",
            workingOut: "A = x(100 - x)",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q12b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "What values may \\(x\\) take if the area \\(A > 24\\) square centimetres? Take care with the units.",
        a: "40 < x < 60",
        solutionSteps: [
          {
            explanation: "Convert the area condition from square centimetres to square millimetres to match the unit of \\(x\\).",
            workingOut: "24 \\; \\mathrm{cm^2} = 24 \\times 100 \\; \\mathrm{mm^2} = 2400 \\; \\mathrm{mm^2}",
            graphData: null
          },
          {
            explanation: "Set up the quadratic inequality representing the area constraint.",
            workingOut: "x(100-x) > 2400 \\implies x^2 - 100x + 2400 < 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic expression to solve for the range of \\(x\\).",
            workingOut: "(x-40)(x-60) < 0 \\implies 40 < x < 60",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q13
  {
    id: "y11a-4b-q13",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "A farmer needs to build a rectangular holding pen for some sheep. The side of a barn will be used for one side of the pen and there is 60 m of fencing available for the remaining three sides. Let \\(x\\) be the length of each side perpendicular to the barn wall.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q13a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Find an expression for the third side in terms of \\(x\\).",
        a: "60-2x",
        solutionSteps: [
          {
            explanation: "Let the length of the third side (opposite to the barn) be \\(L\\). The three fenced sides have lengths \\(x\\), \\(x\\), and \\(L\\). Sum them to find the total fencing used.",
            workingOut: "2x + L",
            graphData: null
          },
          {
            explanation: "Equate the total fencing used to the available length of 60 m.",
            workingOut: "2x + L = 60",
            graphData: null
          },
          {
            explanation: "Solve for \\(L\\) to find the expression for the third side.",
            workingOut: "L = 60 - 2x",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q13b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "The area \\(A\\) of the pen must be at least 450 square metres so that the sheep are not overcrowded. What are the possible dimensions of the pen?",
        a: "15 by 30",
        solutionSteps: [
          {
            explanation: "Express the area \\(A\\) as a product of the side lengths.",
            workingOut: "A = x(60 - 2x) = 60x - 2x^2",
            graphData: null
          },
          {
            explanation: "Set up the inequality stating that the area must be at least 450 square metres, and simplify the expression by dividing by -2.",
            workingOut: "-2x^2 + 60x \\ge 450 \\implies x^2 - 30x + 225 \\le 0",
            graphData: null
          },
          {
            explanation: "Factorise the quadratic expression to solve for the boundary values.",
            workingOut: "(x - 15)^2 \\le 0 \\implies x = 15",
            graphData: null
          },
          {
            explanation: "Calculate the corresponding length of the third side. The only solution is a width of 15 m and a length of 30 m.",
            workingOut: "60 - 2(15) = 30",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q14
  {
    id: "y11a-4b-q14",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "The surface area of a cylinder with fixed height 4 cm is given by \\(SA = 2\\pi r(r+4)\\). What values may the radius \\(r\\) take if \\(SA\\) is no greater than \\(12\\pi\\) square centimetres?",
    a: "0 < r <= 1",
    solution: "0 < r <= 1",
    t: "Solving quadratic inequations",
    hint: "Set up the inequality and remember that radius must be positive.",
    solutionSteps: [
      {
        explanation: "Set up the inequality representing the surface area limit.",
        workingOut: "2\\pi r(r+4) \\le 12\\pi",
        graphData: null
      },
      {
        explanation: "Divide both sides of the inequality by \\(2\\pi\\) and rearrange the terms.",
        workingOut: "r(r+4) \\le 6 \\implies r^2 + 4r - 5 \\le 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic trinomial.",
        workingOut: "(r+5)(r-1) \\le 0 \\implies -5 \\le r \\le 1",
        graphData: null
      },
      {
        explanation: "Since the radius must be strictly positive, combine the physical and algebraic constraints to state the final interval.",
        workingOut: "0 < r \\le 1",
        graphData: null
      }
    ]
  },
  // Q15
  {
    id: "y11a-4b-q15",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the range of values for the expression.",
    a: "",
    solution: "",
    t: "Solving quadratic inequations",
    subQuestions: [
      {
        id: "y11a-4b-q15a",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 120,
        question: "What range of values may \\(x^2 + 2\\) take if \\(3 < x < 5\\)?",
        a: "11 < x^2 + 2 < 27",
        solutionSteps: [
          {
            explanation: "Square the components of the inequality since all terms are positive.",
            workingOut: "3 < x < 5 \\implies 3^2 < x^2 < 5^2",
            graphData: null
          },
          {
            explanation: "Evaluate the squared values.",
            workingOut: "9 < x^2 < 25",
            graphData: null
          },
          {
            explanation: "Add 2 to all parts of the inequality to find the final range.",
            workingOut: "9 + 2 < x^2 + 2 < 25 + 2 \\implies 11 < x^2 + 2 < 27",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4b-q15b",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 120,
        question: "What range of values may \\(x^2 + 2\\) take if \\(-2 < x \\le 4\\)?",
        a: "2 <= x^2 + 2 <= 18",
        solutionSteps: [
          {
            explanation: "Recall that the square of any real number is greater than or equal to zero. Identify the minimum value \\(x^2\\) can take in this interval.",
            workingOut: "\\min(x^2) = 0 \\quad (\\mathrm{at} \\; x = 0)",
            graphData: null
          },
          {
            explanation: "Find the maximum square value by evaluating the squares at the endpoints.",
            workingOut: "(-2)^2 = 4, \\quad 4^2 = 16 \\implies \\max(x^2) = 16",
            graphData: null
          },
          {
            explanation: "Combine these bounds to find the range of \\(x^2\\) and add 2 to calculate the final range.",
            workingOut: "0 \\le x^2 \\le 16 \\implies 2 \\le x^2 + 2 \\le 18",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q16a
  {
    id: "y11a-4b-q16a",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "A business-owner leases a shop in a shopping centre. There is only one type of product sold. It is found that the number \\(n\\) of items sold each week varies directly with the difference between 100 dollars and the price \\(p\\) dollars. That is, when \\(p = 100\\) there are no items sold. When the price is 80 dollars there are 160 items sold. Find \\(n\\) as a function of \\(p\\).",
    a: "8(100-p)",
    solution: "n = 8(100-p)",
    t: "Solving quadratic inequations",
    hint: "Set up the variation equation n = k(100 - p) and solve for the constant k.",
    solutionSteps: [
      {
        explanation: "Set up the direct variation equation with a constant \\(k\\).",
        workingOut: "n = k(100 - p)",
        graphData: null
      },
      {
        explanation: "Substitute the given values \\(p = 80\\) and \\(n = 160\\) to solve for the constant \\(k\\).",
        workingOut: "160 = k(100 - 80) \\implies 160 = 20k \\implies k = 8",
        graphData: null
      },
      {
        explanation: "Substitute the constant \\(k\\) back to write the final formula.",
        workingOut: "n = 8(100-p)",
        graphData: null
      }
    ]
  },
  // Q16b
  {
    id: "y11a-4b-q16b",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "The turnover \\(T\\) for the product is the number sold times the price. Find \\(T\\) as a function of \\(p\\).",
    a: "8p(100-p)",
    solution: "T = 8p(100-p)",
    t: "Solving quadratic inequations",
    hint: "Turnover is product of quantity n and unit price p.",
    solutionSteps: [
      {
        explanation: "State the algebraic definition of turnover \\(T\\).",
        workingOut: "T = n \\times p",
        graphData: null
      },
      {
        explanation: "Substitute the expression for \\(n\\) from part a into the turnover formula.",
        workingOut: "T = 8(100 - p) \\times p",
        graphData: null
      },
      {
        explanation: "Rearrange to write down the final expression.",
        workingOut: "T = 8p(100-p)",
        graphData: null
      }
    ]
  },
  // Q16c
  {
    id: "y11a-4b-q16c",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "In order to stay in business, the turnover must be at least 15 000 dollars. What price may be charged for the product in order to stay in business?",
    a: "25 <= p <= 75",
    solution: "25 <= p <= 75",
    t: "Solving quadratic inequations",
    hint: "Set the turnover expression greater than or equal to 15000.",
    solutionSteps: [
      {
        explanation: "Set up the inequality stating that the turnover \\(T\\) is at least 15000 dollars.",
        workingOut: "8p(100 - p) \\ge 15000",
        graphData: null
      },
      {
        explanation: "Divide both sides by 8 and expand the expression.",
        workingOut: "p(100 - p) \\ge 1875 \\implies 100p - p^2 \\ge 1875",
        graphData: null
      },
      {
        explanation: "Rearrange the expression into standard form.",
        workingOut: "p^2 - 100p + 1875 \\le 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic to find the roots and solve the inequality.",
        workingOut: "(p-25)(p-75) \\le 0 \\implies 25 \\le p \\le 75",
        graphData: null
      }
    ]
  },
  // Q16d
  {
    id: "y11a-4b-q16d",
    type: "short_answer",
    difficulty: "hard",
    timeLimit: 120,
    question: "Because of the business-owner's lease agreement, if turnover is greater than 19 200 dollars then extra rent must be paid. What prices can be charged without paying extra rent but still staying in business?",
    a: "25 <= p <= 40 or 60 <= p <= 75",
    solution: "25 <= p <= 40 or 60 <= p <= 75",
    t: "Solving quadratic inequations",
    hint: "Find where turnover is less than or equal to 19200 but at least 15000.",
    solutionSteps: [
      {
        explanation: "Identify the price condition for paying extra rent by solving \\(T > 19200\\). Divide by 8 and rearrange.",
        workingOut: "8p(100-p) > 19200 \\implies p(100-p) > 2400 \\implies p^2 - 100p + 2400 < 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic to find the boundary roots.",
        workingOut: "(p-40)(p-60) < 0 \\implies 40 < p < 60",
        graphData: null
      },
      {
        explanation: "State the prices that do not trigger extra rent (which are outside this interval).",
        workingOut: "p \\le 40 \\quad \\mathrm{or} \\quad p \\ge 60",
        graphData: null
      },
      {
        explanation: "Combine this with the staying in business price condition \\(25 \\le p \\le 75\\) from part c.",
        workingOut: "25 \\le p \\le 40 \\quad \\mathrm{or} \\quad 60 \\le p \\le 75",
        graphData: null
      }
    ]
  }
];
