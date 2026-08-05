export const Y12A_CH3I_QUESTIONS = [
  {
    id: "y12a-3i-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the first derivative is positive, \\( f'(x) > 0 \\).",
    a: 3,
    t: "Chapter review exercise",
    hint: "The first derivative f'(x) is positive where the curve is rising (increasing).",
    solutionSteps: [
      {
        explanation: "Understand f'(x) > 0",
        workingOut: "\\text{The first derivative } f'(x) \\text{ represents the gradient of the curve. When } f'(x) > 0 \\text{, the curve is sloping upwards (increasing) from left to right.}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify the sections of the curve that are going up. This happens between the local minimum B and the local maximum D, and also to the right of the local minimum G.}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{Point C is located between B and D. Point H is located after G. Both lie on the upward-sloping sections, so their gradients are positive.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "A, E, F",
      "B, D, G",
      "C, F",
      "C, H"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the first derivative is negative, \\( f'(x) < 0 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "The first derivative f'(x) is negative where the curve is falling (decreasing).",
    solutionSteps: [
      {
        explanation: "Understand f'(x) < 0",
        workingOut: "\\text{The first derivative } f'(x) < 0 \\text{ when the curve is sloping downwards (decreasing) from left to right.}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify the sections of the curve that are going down. This happens to the left of turning point B, and between turning points D and G.}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{Point A is to the left of B. Points E and F are between D and G. Thus, } f'(x) < 0 \\text{ at A, E, F.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "C, H",
      "A, E, F",
      "B, D, G",
      "D, E"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q1c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the first derivative is zero, \\( f'(x) = 0 \\).",
    a: 2,
    t: "Chapter review exercise",
    hint: "The first derivative is zero at stationary points (turning points).",
    solutionSteps: [
      {
        explanation: "Understand f'(x) = 0",
        workingOut: "\\text{The first derivative } f'(x) = 0 \\text{ at stationary points (turning points or horizontal points of inflection).}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify the turning points: local minima are at B and G, and a local maximum is at D.}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{The stationary points are exactly at B, D, and G.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "A, E, F",
      "C, F",
      "B, D, G",
      "C, H"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q1d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the second derivative is positive, \\( f''(x) > 0 \\).",
    a: 0,
    t: "Chapter review exercise",
    hint: "The second derivative is positive where the curve is concave up (holds water).",
    solutionSteps: [
      {
        explanation: "Understand f''(x) > 0",
        workingOut: "\\text{The second derivative } f''(x) > 0 \\text{ when the curve is concave up (shaped like a cup holding water).}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify the concave up regions. The curve is concave up on the far left (before inflection point C) and on the far right (after inflection point F).}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{Points A and B are in the left concave up region. Points G and H are in the right concave up region. Thus, A, B, G, H.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "A, B, G, H",
      "D, E",
      "C, F",
      "B, D, G"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q1e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the second derivative is negative, \\( f''(x) < 0 \\).",
    a: 3,
    t: "Chapter review exercise",
    hint: "The second derivative is negative where the curve is concave down (spills water).",
    solutionSteps: [
      {
        explanation: "Understand f''(x) < 0",
        workingOut: "\\text{The second derivative } f''(x) < 0 \\text{ when the curve is concave down (shaped like an umbrella spilling water).}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify the concave down region. The curve is concave down between the two inflection points C and F.}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{Points D and E lie between C and F, inside the concave down region. Thus, D, E.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "A, B, G, H",
      "C, F",
      "C, H",
      "D, E"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q1f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "In the diagram, name all labeled points where the second derivative is zero, \\( f''(x) = 0 \\).",
    a: 0,
    t: "Chapter review exercise",
    hint: "The second derivative is zero at inflection points where concavity changes.",
    solutionSteps: [
      {
        explanation: "Understand f''(x) = 0",
        workingOut: "\\text{The second derivative } f''(x) = 0 \\text{ typically occurs at points of inflection, where the concavity changes from up to down, or down to up.}"
      },
      {
        explanation: "Analyze the graph visually",
        workingOut: "\\text{Identify where concavity changes. It changes from concave up to down at C, and from down to up at F.}"
      },
      {
        explanation: "Select the correct points",
        workingOut: "\\text{The points of inflection are C and F.}"
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -4,
          8,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    opts: [
      "C, F",
      "B, D, G",
      "D, E",
      "A, B, G, H"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the derivative \\( f'(x) \\) of the function:\n\\( f(x) = x^3 - 3x^2 - 9x + 5 \\)",
    a: 3,
    t: "Chapter review exercise",
    hint: "Differentiate term-by-term using the power rule.",
    solutionSteps: [
      {
        explanation: "Differentiate each term using the power rule",
        workingOut: "f'(x) = \\frac{d}{dx}(x^3) - \\frac{d}{dx}(3x^2) - \\frac{d}{dx}(9x) + \\frac{d}{dx}(5)"
      },
      {
        explanation: "Simplify the derivative expression",
        workingOut: "f'(x) = 3x^2 - 6x - 9"
      }
    ],
    opts: [
      "\\( 3x^2 - 3x - 9 \\)",
      "\\( x^2 - 6x - 9 \\)",
      "\\( 3x^2 - 6x + 5 \\)",
      "\\( 3x^2 - 6x - 9 \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q2bi",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 0 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "Evaluate f'(0) and check its sign.",
    solutionSteps: [
      {
        explanation: "Evaluate the derivative at x = 0",
        workingOut: "f'(0) = 3(0)^2 - 6(0) - 9 = -9"
      },
      {
        explanation: "Determine the state based on the sign of the derivative",
        workingOut: "\\text{Since } f'(0) = -9 < 0 \\text{, the function is decreasing at } x = 0."
      }
    ],
    opts: [
      "increasing",
      "decreasing",
      "stationary"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q2bii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 4 \\).",
    a: 2,
    t: "Chapter review exercise",
    hint: "Substitute x = 4 into f'(x) and check whether it is positive, negative, or zero.",
    solutionSteps: [
      {
        explanation: "Evaluate the derivative at x = 4",
        workingOut: "f'(4) = 3(4)^2 - 6(4) - 9 = 48 - 24 - 9 = 15"
      },
      {
        explanation: "Determine the state based on the sign of the derivative",
        workingOut: "\\text{Since } f'(4) = 15 > 0 \\text{, the function is increasing at } x = 4."
      }
    ],
    opts: [
      "decreasing",
      "stationary",
      "increasing"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q2biii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = -1 \\).",
    a: 0,
    t: "Chapter review exercise",
    hint: "Check the value of f'(-1).",
    solutionSteps: [
      {
        explanation: "Evaluate the derivative at x = -1",
        workingOut: "f'(-1) = 3(-1)^2 - 6(-1) - 9 = 3 + 6 - 9 = 0"
      },
      {
        explanation: "Determine the state based on the value of the derivative",
        workingOut: "\\text{Since } f'(-1) = 0 \\text{, the function is stationary at } x = -1."
      }
    ],
    opts: [
      "stationary",
      "increasing",
      "decreasing"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q2biv",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 3 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "Find the value of f'(3).",
    solutionSteps: [
      {
        explanation: "Evaluate the derivative at x = 3",
        workingOut: "f'(3) = 3(3)^2 - 6(3) - 9 = 27 - 18 - 9 = 0"
      },
      {
        explanation: "Determine the state based on the value of the derivative",
        workingOut: "\\text{Since } f'(3) = 0 \\text{, the function is stationary at } x = 3."
      }
    ],
    opts: [
      "increasing",
      "stationary",
      "decreasing"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q3a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the derivative \\( f'(x) \\) of the function:\n\\( f(x) = x^2 - 6x + 8 \\)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Apply the power rule to each term.",
    solutionSteps: [
      {
        explanation: "Differentiate each term",
        workingOut: "f'(x) = 2x - 6"
      }
    ],
    opts: [
      "\\( 2x - 6 \\)",
      "\\( x - 6 \\)",
      "\\( 2x + 8 \\)",
      "\\( x^2 - 6 \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q3bi",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the range of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is increasing. (Write as an inequality, e.g. x > a)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Set f'(x) > 0 and solve for x.",
    solutionSteps: [
      {
        explanation: "Find the derivative f'(x)",
        workingOut: "f'(x) = 2x - 6"
      },
      {
        explanation: "Set the derivative to be strictly positive",
        workingOut: "2x - 6 > 0 \\implies 2x > 6"
      },
      {
        explanation: "Solve the inequality",
        workingOut: "x > 3"
      }
    ],
    opts: [
      "\\( x < 3 \\)",
      "\\( x > 3 \\)",
      "\\( x = 3 \\)",
      "\\( x > 6 \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q3bii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the range of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is decreasing. (Write as an inequality, e.g. x < a)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Set the derivative f'(x) < 0 and solve for x.",
    solutionSteps: [
      {
        explanation: "Set the derivative to be strictly negative",
        workingOut: "2x - 6 < 0 \\implies 2x < 6"
      },
      {
        explanation: "Solve the inequality",
        workingOut: "x < 3"
      }
    ],
    opts: [
      "\\( x > -3 \\)",
      "\\( x > 3 \\)",
      "\\( x < 3 \\)",
      "\\( x < -3 \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q3biii",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the value of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is stationary.",
    a: 3,
    t: "Chapter review exercise",
    hint: "Set f'(x) = 0 and solve for x.",
    solutionSteps: [
      {
        explanation: "Set the derivative to zero",
        workingOut: "2x - 6 = 0"
      },
      {
        explanation: "Solve for x",
        workingOut: "2x = 6 \\implies x = 3"
      }
    ],
    opts: [
      "\\( -3 \\)",
      "\\( 6 \\)",
      "\\( -6 \\)",
      "\\( 3 \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q4a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Differentiate \\( f(x) = x^4 \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    a: 0,
    t: "Chapter review exercise",
    hint: "Find f'(x), evaluate it at x = 1, and check if f'(1) is positive, negative, or zero.",
    solutionSteps: [
      {
        explanation: "Differentiate f(x)",
        workingOut: "f'(x) = 4x^3"
      },
      {
        explanation: "Evaluate f'(1)",
        workingOut: "f'(1) = 4(1)^3 = 4"
      },
      {
        explanation: "Determine the state",
        workingOut: "\\text{Since } f'(1) = 4 > 0 \\text{, the function is increasing at } x = 1."
      }
    ],
    opts: [
      "increasing",
      "decreasing",
      "stationary"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q4b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Differentiate \\( f(x) = (x-2)(x-4) \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "Expand f(x) to quadratic form first, find f'(x), and then substitute x = 1.",
    solutionSteps: [
      {
        explanation: "Expand f(x)",
        workingOut: "f(x) = x^2 - 6x + 8"
      },
      {
        explanation: "Find f'(x)",
        workingOut: "f'(x) = 2x - 6"
      },
      {
        explanation: "Evaluate f'(1)",
        workingOut: "f'(1) = 2(1) - 6 = -4"
      },
      {
        explanation: "Determine the state",
        workingOut: "\\text{Since } f'(1) = -4 < 0 \\text{, the function is decreasing at } x = 1."
      }
    ],
    opts: [
      "increasing",
      "decreasing",
      "stationary"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q4c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Differentiate \\( f(x) = (x-1)^4 \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    a: 2,
    t: "Chapter review exercise",
    hint: "Use chain rule to differentiate, then substitute x = 1.",
    solutionSteps: [
      {
        explanation: "Apply the chain rule to differentiate",
        workingOut: "f'(x) = 4(x-1)^3"
      },
      {
        explanation: "Evaluate f'(1)",
        workingOut: "f'(1) = 4(1-1)^3 = 0"
      },
      {
        explanation: "Determine the state",
        workingOut: "\\text{Since } f'(1) = 0 \\text{, the function is stationary at } x = 1."
      }
    ],
    opts: [
      "increasing",
      "decreasing",
      "stationary"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q4d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Differentiate \\( f(x) = \\frac{x+2}{x-2} \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "Use the quotient rule: (u'v - uv') / v^2.",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule to differentiate f(x)",
        workingOut: "f'(x) = \\frac{1(x-2) - (x+2)(1)}{(x-2)^2} = \\frac{x - 2 - x - 2}{(x-2)^2} = -\\frac{4}{(x-2)^2}"
      },
      {
        explanation: "Evaluate f'(1)",
        workingOut: "f'(1) = -\\frac{4}{(1-2)^2} = -\\frac{4}{1} = -4"
      },
      {
        explanation: "Determine the state",
        workingOut: "\\text{Since } f'(1) = -4 < 0 \\text{, the function is decreasing at } x = 1."
      }
    ],
    opts: [
      "increasing",
      "decreasing",
      "stationary"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q5a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the second derivative \\( y'' \\) of the function:\n\\( y = x^6 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Find the first derivative y' first, then differentiate again.",
    solutionSteps: [
      {
        explanation: "Find the first derivative y'",
        workingOut: "\\text{Apply the power rule to differentiate } x^6:\\\\ y' = 6x^5"
      },
      {
        explanation: "Differentiate y' to find the second derivative y''",
        workingOut: "\\text{Apply the power rule again to } 6x^5:\\\\ y'' = 30x^4"
      }
    ],
    opts: [
      "\\( 6x^5 \\)",
      "\\( 30x^4 \\)",
      "\\( 120x^3 \\)",
      "\\( 30x^5 \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the second derivative \\( y'' \\) of the function:\n\\( y = x^4 - 3x^2 \\)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Differentiate twice using the power rule.",
    solutionSteps: [
      {
        explanation: "Find the first derivative y'",
        workingOut: "\\text{Differentiate each term:}\\\\ y' = 4x^3 - 6x"
      },
      {
        explanation: "Find the second derivative y''",
        workingOut: "\\text{Differentiate } 4x^3 - 6x \\text{ again:}\\\\ y'' = 12x^2 - 6"
      }
    ],
    opts: [
      "\\( 4x^3 - 6x \\)",
      "\\( 12x^2 - 6x \\)",
      "\\( 12x^2 - 6 \\)",
      "\\( 12x^3 - 6 \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q5c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the second derivative \\( y'' \\) of the function:\n\\( y = (x-3)^4 \\)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Use chain rule twice.",
    solutionSteps: [
      {
        explanation: "Find the first derivative y'",
        workingOut: "\\text{Use the chain rule (or composite linear rule):}\\\\ y' = 4(x-3)^3 \\times 1 = 4(x-3)^3"
      },
      {
        explanation: "Find the second derivative y''",
        workingOut: "\\text{Apply the rule again to } y':\\\\ y'' = 12(x-3)^2 \\times 1 = 12(x-3)^2"
      }
    ],
    opts: [
      "\\( 12(x-3)^2 \\)",
      "\\( 4(x-3)^3 \\)",
      "\\( 12(x-3)^3 \\)",
      "\\( 24(x-3) \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q5d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the second derivative \\( y'' \\) of the function:\n\\( y = \\frac{2}{x} \\)",
    a: 3,
    t: "Chapter review exercise",
    hint: "Write y as 2x^(-1) before differentiating twice.",
    solutionSteps: [
      {
        explanation: "Rewrite function in index form",
        workingOut: "y = 2x^{-1}"
      },
      {
        explanation: "Find the first derivative y'",
        workingOut: "y' = -2x^{-2} = -\\frac{2}{x^2}"
      },
      {
        explanation: "Differentiate again to find y''",
        workingOut: "y'' = -2(-2)x^{-3} = 4x^{-3} = \\frac{4}{x^3}"
      }
    ],
    opts: [
      "\\( -\\frac{2}{x^2} \\)",
      "\\( \\frac{2}{x^3} \\)",
      "\\( -\\frac{4}{x^3} \\)",
      "\\( \\frac{4}{x^3} \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q6a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = x^3 - 2x^2 + 3x - 1 \\), find \\( f''(x) \\) and evaluate \\( f''(1) \\) to state whether the curve is concave up or concave down at \\( x = 1 \\).",
    a: 1,
    t: "Chapter review exercise",
    hint: "Find the second derivative, substitute x = 1, and check if the result is positive or negative.",
    solutionSteps: [
      {
        explanation: "Find the first derivative f'(x)",
        workingOut: "f'(x) = 3x^2 - 4x + 3"
      },
      {
        explanation: "Find the second derivative f''(x)",
        workingOut: "f''(x) = 6x - 4"
      },
      {
        explanation: "Evaluate at x = 1",
        workingOut: "f''(1) = 6(1) - 4 = 2"
      },
      {
        explanation: "State concavity state",
        workingOut: "\\text{Since } f''(1) = 2 > 0 \\text{, the curve is concave up at } x = 1."
      }
    ],
    opts: [
      "concave down",
      "concave up",
      "inflection"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q6b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = 5 - 3x^3 - 2x^4 \\), find \\( f''(x) \\) and evaluate \\( f''(1) \\) to state whether the curve is concave up or concave down at \\( x = 1 \\).",
    a: 2,
    t: "Chapter review exercise",
    hint: "Calculate the second derivative f''(x), plug in x = 1, and verify the concavity.",
    solutionSteps: [
      {
        explanation: "Find the first derivative f'(x)",
        workingOut: "f'(x) = -9x^2 - 8x^3"
      },
      {
        explanation: "Find the second derivative f''(x)",
        workingOut: "f''(x) = -18x - 24x^2"
      },
      {
        explanation: "Evaluate f''(1)",
        workingOut: "f''(1) = -18(1) - 24(1)^2 = -18 - 24 = -42"
      },
      {
        explanation: "State concavity state",
        workingOut: "\\text{Since } f''(1) = -42 < 0 \\text{, the curve is concave down at } x = 1."
      }
    ],
    opts: [
      "inflection",
      "concave up",
      "concave down"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q7",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 90,
    question: "For the function \\( f(x) = 2x^3 - 9x^2 + 12x - 3 \\), complete parts a) and b).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q7a",
        type: "multiple_choice",
        question: "a) Find the second derivative \\( f''(x) \\).",
        a: 1,
        solutionSteps: [
          {
            explanation: "Find the first derivative f'(x)",
            workingOut: "f'(x) = 6x^2 - 18x + 12"
          },
          {
            explanation: "Differentiate f'(x) to get f''(x)",
            workingOut: "f''(x) = 12x - 18"
          }
        ],
        opts: [
          "\\( 6x^2 - 18x + 12 \\)",
          "\\( 12x - 18 \\)",
          "\\( 6x - 9 \\)",
          "\\( 12x^2 - 18 \\)"
        ],
        answer: 1
      },
      {
        id: "y12a-3i-q7bi",
        type: "multiple_choice",
        question: "b) i) Find the values of \\( x \\) for which the function \\( f(x) \\) is concave up. (Write as an inequality, e.g. x > a)",
        a: 2,
        solutionSteps: [
          {
            explanation: "Understand concave up",
            workingOut: "\\text{A function is concave up when its second derivative is positive: } f''(x) > 0"
          },
          {
            explanation: "Set up the inequality",
            workingOut: "f''(x) > 0 \\implies 12x - 18 > 0"
          },
          {
            explanation: "Solve for x",
            workingOut: "12x > 18 \\implies x > \\frac{18}{12} \\implies x > 1.5"
          }
        ],
        opts: [
          "\\( x < 1.5 \\)",
          "\\( x > -1.5 \\)",
          "\\( x > 1.5 \\)",
          "\\( x > 3 \\)"
        ],
        answer: 2
      },
      {
        id: "y12a-3i-q7bii",
        type: "multiple_choice",
        question: "b) ii) Find the values of \\( x \\) for which the function \\( f(x) \\) is concave down. (Write as an inequality, e.g. x < a)",
        a: 3,
        solutionSteps: [
          {
            explanation: "Understand concave down",
            workingOut: "\\text{A function is concave down when its second derivative is negative: } f''(x) < 0"
          },
          {
            explanation: "Set up the inequality",
            workingOut: "f''(x) < 0 \\implies 12x - 18 < 0"
          },
          {
            explanation: "Solve for x",
            workingOut: "12x < 18 \\implies x < \\frac{18}{12} \\implies x < 1.5"
          }
        ],
        opts: [
          "\\( x < -1.5 \\)",
          "\\( x > 1.5 \\)",
          "\\( x < 3 \\)",
          "\\( x < 1.5 \\)"
        ],
        answer: 3
      }
    ]
  },
  {
    id: "y12a-3i-q8a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is increasing. (Format: x < a or x > b)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Set y' > 0 and solve the quadratic inequality.",
    solutionSteps: [
      {
        explanation: "Set condition for increasing",
        workingOut: "\\text{A curve is increasing when its first derivative is strictly positive: } y' > 0"
      },
      {
        explanation: "Find the first derivative y'",
        workingOut: "y' = 3x^2 - 6x - 24"
      },
      {
        explanation: "Solve the inequality",
        workingOut: "3x^2 - 6x - 24 > 0\\\\ 3(x^2 - 2x - 8) > 0\\\\ 3(x-4)(x+2) > 0"
      },
      {
        explanation: "Determine valid regions (See highlighted areas on graph)",
        workingOut: "\\text{The parabola } y = 3(x-4)(x+2) \\text{ opens upwards with roots at } x = 4 \\text{ and } x = -2.\\\\ \\text{It is positive for } x < -2 \\text{ and } x > 4.",
        graphData: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 300\" width=\"100%\" height=\"auto\" style=\"max-width: 500px;\">\n  <!-- Background -->\n  <rect width=\"100%\" height=\"100%\" fill=\"#ffffff\" />\n  \n  <!-- Highlight Regions -->\n  <rect x=\"0\" y=\"0\" width=\"128.57142857142858\" height=\"300\" fill=\"rgba(34, 197, 94, 0.15)\" /><rect x=\"321.42857142857144\" y=\"0\" width=\"128.5714285714286\" height=\"300\" fill=\"rgba(34, 197, 94, 0.15)\" /><text x=\"64.28571428571429\" y=\"280\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Increasing (x &lt; -2)</text><text x=\"385.7142857142858\" y=\"20\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Increasing (x &gt; 4)</text>\n\n  <!-- Axes -->\n  <line x1=\"0\" y1=\"115.38461538461542\" x2=\"450\" y2=\"115.38461538461542\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  <line x1=\"192.8571428571429\" y1=\"0\" x2=\"192.8571428571429\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  \n  <!-- Curve -->\n  <path d=\"M 0.00 346.15 L 3.21 346.15 L 6.43 346.15 L 9.64 346.15 L 12.86 346.15 L 16.07 346.15 L 19.29 346.15 L 22.50 336.80 L 25.71 315.99 L 28.93 296.03 L 32.14 276.92 L 35.36 258.64 L 38.57 241.18 L 41.79 224.52 L 45.00 208.65 L 48.21 193.56 L 51.43 179.22 L 54.64 165.64 L 57.86 152.79 L 61.07 140.66 L 64.29 129.23 L 67.50 118.50 L 70.71 108.44 L 73.93 99.05 L 77.14 90.31 L 80.36 82.21 L 83.57 74.73 L 86.79 67.86 L 90.00 61.59 L 93.21 55.89 L 96.43 50.77 L 99.64 46.20 L 102.86 42.17 L 106.07 38.66 L 109.29 35.67 L 112.50 33.17 L 115.71 31.16 L 118.93 29.62 L 122.14 28.54 L 125.36 27.90 L 128.57 27.69 L 131.79 27.90 L 135.00 28.50 L 138.21 29.50 L 141.43 30.87 L 144.64 32.60 L 147.86 34.67 L 151.07 37.08 L 154.29 39.80 L 157.50 42.83 L 160.71 46.15 L 163.93 49.75 L 167.14 53.61 L 170.36 57.72 L 173.57 62.07 L 176.79 66.63 L 180.00 71.41 L 183.21 76.38 L 186.43 81.53 L 189.64 86.84 L 192.86 92.31 L 196.07 97.91 L 199.29 103.64 L 202.50 109.48 L 205.71 115.42 L 208.93 121.44 L 212.14 127.53 L 215.36 133.68 L 218.57 139.86 L 221.79 146.08 L 225.00 152.31 L 228.21 158.54 L 231.43 164.75 L 234.64 170.94 L 237.86 177.08 L 241.07 183.17 L 244.29 189.19 L 247.50 195.13 L 250.71 200.97 L 253.93 206.70 L 257.14 212.31 L 260.36 217.77 L 263.57 223.09 L 266.79 228.24 L 270.00 233.21 L 273.21 237.98 L 276.43 242.55 L 279.64 246.89 L 282.86 251.00 L 286.07 254.86 L 289.29 258.46 L 292.50 261.78 L 295.71 264.81 L 298.93 267.54 L 302.14 269.94 L 305.36 272.02 L 308.57 273.75 L 311.79 275.12 L 315.00 276.11 L 318.21 276.72 L 321.43 276.92 L 324.64 276.71 L 327.86 276.07 L 331.07 274.99 L 334.29 273.45 L 337.50 271.44 L 340.71 268.95 L 343.93 265.95 L 347.14 262.45 L 350.36 258.42 L 353.57 253.85 L 356.79 248.72 L 360.00 243.03 L 363.21 236.75 L 366.43 229.88 L 369.64 222.40 L 372.86 214.30 L 376.07 205.56 L 379.29 196.17 L 382.50 186.12 L 385.71 175.38 L 388.93 163.96 L 392.14 151.83 L 395.36 138.98 L 398.57 125.39 L 401.79 111.06 L 405.00 95.96 L 408.21 80.09 L 411.43 63.43 L 414.64 45.97 L 417.86 27.69 L 421.07 8.58 L 424.29 -11.37 L 427.50 -32.19 L 430.71 -53.87 L 433.93 -76.44 L 437.14 -99.91 L 440.36 -115.38 L 443.57 -115.38 L 446.79 -115.38 L 450.00 -115.38 \" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" />\n  \n  <!-- Critical Points -->\n  <circle cx=\"128.57142857142858\" cy=\"27.692307692307736\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"136.57142857142858\" y=\"27.692307692307736\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Max(-2, 38)</text>\n\n  <circle cx=\"321.42857142857144\" cy=\"276.9230769230769\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"329.42857142857144\" y=\"276.9230769230769\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Min(4, -70)</text>\n\n  <circle cx=\"225.00000000000003\" cy=\"152.30769230769232\" r=\"5\" fill=\"#8b5cf6\" />\n  <text x=\"233.00000000000003\" y=\"152.30769230769232\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Inflection(1, -16)</text>\n</svg>"
        }
      }
    ],
    opts: [
      "\\( x < -2 \\text{ or } x > 4 \\)",
      "\\( -2 < x < 4 \\)",
      "\\( x < -4 \\text{ or } x > 2 \\)",
      "\\( x < 2 \\text{ or } x > 4 \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q8b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is decreasing. (Format: a < x < b)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Set y' < 0 and solve the quadratic inequality.",
    solutionSteps: [
      {
        explanation: "Set condition for decreasing",
        workingOut: "\\text{A curve is decreasing when its first derivative is strictly negative: } y' < 0"
      },
      {
        explanation: "Use the factored derivative y'",
        workingOut: "y' = 3(x-4)(x+2)"
      },
      {
        explanation: "Solve the inequality",
        workingOut: "3(x-4)(x+2) < 0"
      },
      {
        explanation: "Determine valid regions (See highlighted areas on graph)",
        workingOut: "\\text{The parabola } y = 3(x-4)(x+2) \\text{ opens upwards, so it is negative between its roots:}\\\\ -2 < x < 4",
        graphData: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 300\" width=\"100%\" height=\"auto\" style=\"max-width: 500px;\">\n  <!-- Background -->\n  <rect width=\"100%\" height=\"100%\" fill=\"#ffffff\" />\n  \n  <!-- Highlight Regions -->\n  <rect x=\"128.57142857142858\" y=\"0\" width=\"192.85714285714286\" height=\"300\" fill=\"rgba(34, 197, 94, 0.15)\" /><text x=\"225.00000000000003\" y=\"25\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Decreasing (-2 &lt; x &lt; 4)</text>\n\n  <!-- Axes -->\n  <line x1=\"0\" y1=\"115.38461538461542\" x2=\"450\" y2=\"115.38461538461542\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  <line x1=\"192.8571428571429\" y1=\"0\" x2=\"192.8571428571429\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  \n  <!-- Curve -->\n  <path d=\"M 0.00 346.15 L 3.21 346.15 L 6.43 346.15 L 9.64 346.15 L 12.86 346.15 L 16.07 346.15 L 19.29 346.15 L 22.50 336.80 L 25.71 315.99 L 28.93 296.03 L 32.14 276.92 L 35.36 258.64 L 38.57 241.18 L 41.79 224.52 L 45.00 208.65 L 48.21 193.56 L 51.43 179.22 L 54.64 165.64 L 57.86 152.79 L 61.07 140.66 L 64.29 129.23 L 67.50 118.50 L 70.71 108.44 L 73.93 99.05 L 77.14 90.31 L 80.36 82.21 L 83.57 74.73 L 86.79 67.86 L 90.00 61.59 L 93.21 55.89 L 96.43 50.77 L 99.64 46.20 L 102.86 42.17 L 106.07 38.66 L 109.29 35.67 L 112.50 33.17 L 115.71 31.16 L 118.93 29.62 L 122.14 28.54 L 125.36 27.90 L 128.57 27.69 L 131.79 27.90 L 135.00 28.50 L 138.21 29.50 L 141.43 30.87 L 144.64 32.60 L 147.86 34.67 L 151.07 37.08 L 154.29 39.80 L 157.50 42.83 L 160.71 46.15 L 163.93 49.75 L 167.14 53.61 L 170.36 57.72 L 173.57 62.07 L 176.79 66.63 L 180.00 71.41 L 183.21 76.38 L 186.43 81.53 L 189.64 86.84 L 192.86 92.31 L 196.07 97.91 L 199.29 103.64 L 202.50 109.48 L 205.71 115.42 L 208.93 121.44 L 212.14 127.53 L 215.36 133.68 L 218.57 139.86 L 221.79 146.08 L 225.00 152.31 L 228.21 158.54 L 231.43 164.75 L 234.64 170.94 L 237.86 177.08 L 241.07 183.17 L 244.29 189.19 L 247.50 195.13 L 250.71 200.97 L 253.93 206.70 L 257.14 212.31 L 260.36 217.77 L 263.57 223.09 L 266.79 228.24 L 270.00 233.21 L 273.21 237.98 L 276.43 242.55 L 279.64 246.89 L 282.86 251.00 L 286.07 254.86 L 289.29 258.46 L 292.50 261.78 L 295.71 264.81 L 298.93 267.54 L 302.14 269.94 L 305.36 272.02 L 308.57 273.75 L 311.79 275.12 L 315.00 276.11 L 318.21 276.72 L 321.43 276.92 L 324.64 276.71 L 327.86 276.07 L 331.07 274.99 L 334.29 273.45 L 337.50 271.44 L 340.71 268.95 L 343.93 265.95 L 347.14 262.45 L 350.36 258.42 L 353.57 253.85 L 356.79 248.72 L 360.00 243.03 L 363.21 236.75 L 366.43 229.88 L 369.64 222.40 L 372.86 214.30 L 376.07 205.56 L 379.29 196.17 L 382.50 186.12 L 385.71 175.38 L 388.93 163.96 L 392.14 151.83 L 395.36 138.98 L 398.57 125.39 L 401.79 111.06 L 405.00 95.96 L 408.21 80.09 L 411.43 63.43 L 414.64 45.97 L 417.86 27.69 L 421.07 8.58 L 424.29 -11.37 L 427.50 -32.19 L 430.71 -53.87 L 433.93 -76.44 L 437.14 -99.91 L 440.36 -115.38 L 443.57 -115.38 L 446.79 -115.38 L 450.00 -115.38 \" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" />\n  \n  <!-- Critical Points -->\n  <circle cx=\"128.57142857142858\" cy=\"27.692307692307736\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"136.57142857142858\" y=\"27.692307692307736\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Max(-2, 38)</text>\n\n  <circle cx=\"321.42857142857144\" cy=\"276.9230769230769\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"329.42857142857144\" y=\"276.9230769230769\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Min(4, -70)</text>\n\n  <circle cx=\"225.00000000000003\" cy=\"152.30769230769232\" r=\"5\" fill=\"#8b5cf6\" />\n  <text x=\"233.00000000000003\" y=\"152.30769230769232\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Inflection(1, -16)</text>\n</svg>"
        }
      }
    ],
    opts: [
      "\\( -4 < x < 2 \\)",
      "\\( x < -2 \\text{ or } x > 4 \\)",
      "\\( -2 < x < 4 \\)",
      "\\( -2 \\le x \\le 4 \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q8c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is concave up. (Format: x > a)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Set the second derivative y'' > 0 and solve.",
    solutionSteps: [
      {
        explanation: "Set condition for concave up",
        workingOut: "\\text{A curve is concave up when its second derivative is positive: } y'' > 0"
      },
      {
        explanation: "Find the second derivative y''",
        workingOut: "y' = 3x^2 - 6x - 24\\\\ y'' = 6x - 6"
      },
      {
        explanation: "Solve the inequality (See graph of original function)",
        workingOut: "6x - 6 > 0 \\implies 6x > 6 \\implies x > 1",
        graphData: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 300\" width=\"100%\" height=\"auto\" style=\"max-width: 500px;\">\n  <!-- Background -->\n  <rect width=\"100%\" height=\"100%\" fill=\"#ffffff\" />\n  \n  <!-- Highlight Regions -->\n  <rect x=\"225.00000000000003\" y=\"0\" width=\"225.00000000000003\" height=\"300\" fill=\"rgba(34, 197, 94, 0.15)\" /><text x=\"353.5714285714286\" y=\"20\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Concave Up (x &gt; 1)</text>\n\n  <!-- Axes -->\n  <line x1=\"0\" y1=\"115.38461538461542\" x2=\"450\" y2=\"115.38461538461542\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  <line x1=\"192.8571428571429\" y1=\"0\" x2=\"192.8571428571429\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  \n  <!-- Curve -->\n  <path d=\"M 0.00 346.15 L 3.21 346.15 L 6.43 346.15 L 9.64 346.15 L 12.86 346.15 L 16.07 346.15 L 19.29 346.15 L 22.50 336.80 L 25.71 315.99 L 28.93 296.03 L 32.14 276.92 L 35.36 258.64 L 38.57 241.18 L 41.79 224.52 L 45.00 208.65 L 48.21 193.56 L 51.43 179.22 L 54.64 165.64 L 57.86 152.79 L 61.07 140.66 L 64.29 129.23 L 67.50 118.50 L 70.71 108.44 L 73.93 99.05 L 77.14 90.31 L 80.36 82.21 L 83.57 74.73 L 86.79 67.86 L 90.00 61.59 L 93.21 55.89 L 96.43 50.77 L 99.64 46.20 L 102.86 42.17 L 106.07 38.66 L 109.29 35.67 L 112.50 33.17 L 115.71 31.16 L 118.93 29.62 L 122.14 28.54 L 125.36 27.90 L 128.57 27.69 L 131.79 27.90 L 135.00 28.50 L 138.21 29.50 L 141.43 30.87 L 144.64 32.60 L 147.86 34.67 L 151.07 37.08 L 154.29 39.80 L 157.50 42.83 L 160.71 46.15 L 163.93 49.75 L 167.14 53.61 L 170.36 57.72 L 173.57 62.07 L 176.79 66.63 L 180.00 71.41 L 183.21 76.38 L 186.43 81.53 L 189.64 86.84 L 192.86 92.31 L 196.07 97.91 L 199.29 103.64 L 202.50 109.48 L 205.71 115.42 L 208.93 121.44 L 212.14 127.53 L 215.36 133.68 L 218.57 139.86 L 221.79 146.08 L 225.00 152.31 L 228.21 158.54 L 231.43 164.75 L 234.64 170.94 L 237.86 177.08 L 241.07 183.17 L 244.29 189.19 L 247.50 195.13 L 250.71 200.97 L 253.93 206.70 L 257.14 212.31 L 260.36 217.77 L 263.57 223.09 L 266.79 228.24 L 270.00 233.21 L 273.21 237.98 L 276.43 242.55 L 279.64 246.89 L 282.86 251.00 L 286.07 254.86 L 289.29 258.46 L 292.50 261.78 L 295.71 264.81 L 298.93 267.54 L 302.14 269.94 L 305.36 272.02 L 308.57 273.75 L 311.79 275.12 L 315.00 276.11 L 318.21 276.72 L 321.43 276.92 L 324.64 276.71 L 327.86 276.07 L 331.07 274.99 L 334.29 273.45 L 337.50 271.44 L 340.71 268.95 L 343.93 265.95 L 347.14 262.45 L 350.36 258.42 L 353.57 253.85 L 356.79 248.72 L 360.00 243.03 L 363.21 236.75 L 366.43 229.88 L 369.64 222.40 L 372.86 214.30 L 376.07 205.56 L 379.29 196.17 L 382.50 186.12 L 385.71 175.38 L 388.93 163.96 L 392.14 151.83 L 395.36 138.98 L 398.57 125.39 L 401.79 111.06 L 405.00 95.96 L 408.21 80.09 L 411.43 63.43 L 414.64 45.97 L 417.86 27.69 L 421.07 8.58 L 424.29 -11.37 L 427.50 -32.19 L 430.71 -53.87 L 433.93 -76.44 L 437.14 -99.91 L 440.36 -115.38 L 443.57 -115.38 L 446.79 -115.38 L 450.00 -115.38 \" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" />\n  \n  <!-- Critical Points -->\n  <circle cx=\"128.57142857142858\" cy=\"27.692307692307736\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"136.57142857142858\" y=\"27.692307692307736\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Max(-2, 38)</text>\n\n  <circle cx=\"321.42857142857144\" cy=\"276.9230769230769\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"329.42857142857144\" y=\"276.9230769230769\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Min(4, -70)</text>\n\n  <circle cx=\"225.00000000000003\" cy=\"152.30769230769232\" r=\"5\" fill=\"#8b5cf6\" />\n  <text x=\"233.00000000000003\" y=\"152.30769230769232\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Inflection(1, -16)</text>\n</svg>"
        }
      }
    ],
    opts: [
      "\\( x < 1 \\)",
      "\\( x > 1 \\)",
      "\\( x > -1 \\)",
      "\\( x < -1 \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q8d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 90,
    question: "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is concave down. (Format: x < a)",
    a: 3,
    t: "Chapter review exercise",
    hint: "Set the second derivative y'' < 0 and solve.",
    solutionSteps: [
      {
        explanation: "Set condition for concave down",
        workingOut: "\\text{A curve is concave down when its second derivative is negative: } y'' < 0"
      },
      {
        explanation: "Find the second derivative y''",
        workingOut: "y'' = 6x - 6"
      },
      {
        explanation: "Solve the inequality (See graph of original function)",
        workingOut: "6x - 6 < 0 \\implies 6x < 6 \\implies x < 1",
        graphData: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 300\" width=\"100%\" height=\"auto\" style=\"max-width: 500px;\">\n  <!-- Background -->\n  <rect width=\"100%\" height=\"100%\" fill=\"#ffffff\" />\n  \n  <!-- Highlight Regions -->\n  <rect x=\"0\" y=\"0\" width=\"225.00000000000003\" height=\"300\" fill=\"rgba(34, 197, 94, 0.15)\" /><text x=\"96.42857142857144\" y=\"280\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Concave Down (x &lt; 1)</text>\n\n  <!-- Axes -->\n  <line x1=\"0\" y1=\"115.38461538461542\" x2=\"450\" y2=\"115.38461538461542\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  <line x1=\"192.8571428571429\" y1=\"0\" x2=\"192.8571428571429\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" />\n  \n  <!-- Curve -->\n  <path d=\"M 0.00 346.15 L 3.21 346.15 L 6.43 346.15 L 9.64 346.15 L 12.86 346.15 L 16.07 346.15 L 19.29 346.15 L 22.50 336.80 L 25.71 315.99 L 28.93 296.03 L 32.14 276.92 L 35.36 258.64 L 38.57 241.18 L 41.79 224.52 L 45.00 208.65 L 48.21 193.56 L 51.43 179.22 L 54.64 165.64 L 57.86 152.79 L 61.07 140.66 L 64.29 129.23 L 67.50 118.50 L 70.71 108.44 L 73.93 99.05 L 77.14 90.31 L 80.36 82.21 L 83.57 74.73 L 86.79 67.86 L 90.00 61.59 L 93.21 55.89 L 96.43 50.77 L 99.64 46.20 L 102.86 42.17 L 106.07 38.66 L 109.29 35.67 L 112.50 33.17 L 115.71 31.16 L 118.93 29.62 L 122.14 28.54 L 125.36 27.90 L 128.57 27.69 L 131.79 27.90 L 135.00 28.50 L 138.21 29.50 L 141.43 30.87 L 144.64 32.60 L 147.86 34.67 L 151.07 37.08 L 154.29 39.80 L 157.50 42.83 L 160.71 46.15 L 163.93 49.75 L 167.14 53.61 L 170.36 57.72 L 173.57 62.07 L 176.79 66.63 L 180.00 71.41 L 183.21 76.38 L 186.43 81.53 L 189.64 86.84 L 192.86 92.31 L 196.07 97.91 L 199.29 103.64 L 202.50 109.48 L 205.71 115.42 L 208.93 121.44 L 212.14 127.53 L 215.36 133.68 L 218.57 139.86 L 221.79 146.08 L 225.00 152.31 L 228.21 158.54 L 231.43 164.75 L 234.64 170.94 L 237.86 177.08 L 241.07 183.17 L 244.29 189.19 L 247.50 195.13 L 250.71 200.97 L 253.93 206.70 L 257.14 212.31 L 260.36 217.77 L 263.57 223.09 L 266.79 228.24 L 270.00 233.21 L 273.21 237.98 L 276.43 242.55 L 279.64 246.89 L 282.86 251.00 L 286.07 254.86 L 289.29 258.46 L 292.50 261.78 L 295.71 264.81 L 298.93 267.54 L 302.14 269.94 L 305.36 272.02 L 308.57 273.75 L 311.79 275.12 L 315.00 276.11 L 318.21 276.72 L 321.43 276.92 L 324.64 276.71 L 327.86 276.07 L 331.07 274.99 L 334.29 273.45 L 337.50 271.44 L 340.71 268.95 L 343.93 265.95 L 347.14 262.45 L 350.36 258.42 L 353.57 253.85 L 356.79 248.72 L 360.00 243.03 L 363.21 236.75 L 366.43 229.88 L 369.64 222.40 L 372.86 214.30 L 376.07 205.56 L 379.29 196.17 L 382.50 186.12 L 385.71 175.38 L 388.93 163.96 L 392.14 151.83 L 395.36 138.98 L 398.57 125.39 L 401.79 111.06 L 405.00 95.96 L 408.21 80.09 L 411.43 63.43 L 414.64 45.97 L 417.86 27.69 L 421.07 8.58 L 424.29 -11.37 L 427.50 -32.19 L 430.71 -53.87 L 433.93 -76.44 L 437.14 -99.91 L 440.36 -115.38 L 443.57 -115.38 L 446.79 -115.38 L 450.00 -115.38 \" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" />\n  \n  <!-- Critical Points -->\n  <circle cx=\"128.57142857142858\" cy=\"27.692307692307736\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"136.57142857142858\" y=\"27.692307692307736\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Max(-2, 38)</text>\n\n  <circle cx=\"321.42857142857144\" cy=\"276.9230769230769\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"329.42857142857144\" y=\"276.9230769230769\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Min(4, -70)</text>\n\n  <circle cx=\"225.00000000000003\" cy=\"152.30769230769232\" r=\"5\" fill=\"#8b5cf6\" />\n  <text x=\"233.00000000000003\" y=\"152.30769230769232\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#333\" text-anchor=\"start\" font-weight=\"bold\" dominant-baseline=\"middle\">Inflection(1, -16)</text>\n</svg>"
        }
      }
    ],
    opts: [
      "\\( x > 1 \\)",
      "\\( x > -1 \\)",
      "\\( x < -1 \\)",
      "\\( x < 1 \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q9a",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "The constant function \\( y = 3 \\) is graphed below. Sketch the graph of its derivative function \\( y' \\).",
    t: "Chapter review exercise",
    hint: "The derivative of any constant function is 0.",
    solutionSteps: [
      {
        explanation: "Differentiate constant function",
        workingOut: "y' = \\frac{d}{dx}(3) = 0"
      },
      {
        explanation: "Draw derivative graph shape (See red curve in the solution graph above/below)",
        workingOut: "\\text{The line } y = 0 \\text{ is a horizontal line lying exactly on the x-axis.}",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -5,
              5,
              5,
              -2
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-4,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nboard.create('segment', [[-4,0], [4,0]], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [2, 0.5, \"y' = 0\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -5,
          5,
          5,
          -2
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-4,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-3i-q9b",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "A rising line passing through the origin with slope 1.5, \\( y = 1.5x \\), is shown below. Sketch the graph of its derivative \\( y' \\).",
    t: "Chapter review exercise",
    hint: "The derivative of f(x) = mx + c is f'(x) = m.",
    solutionSteps: [
      {
        explanation: "Differentiate linear function",
        workingOut: "y' = \\frac{d}{dx}(1.5x) = 1.5"
      },
      {
        explanation: "Draw derivative graph shape (See red curve in the solution graph above/below)",
        workingOut: "\\text{Since the derivative is constant, it is represented by a horizontal line at } y = 1.5.",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -5,
              6,
              5,
              -6
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-3,-4.5], [3,4.5]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nboard.create('segment', [[-4,1.5], [4,1.5]], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [2, 2.5, \"y' = 1.5\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -5,
          6,
          5,
          -6
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-3,-4.5], [3,4.5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-3i-q9c",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "A parabola with vertex at \\( x = 3 \\), \\( y = (x-3)^2 \\), is graphed below. Sketch the graph of its derivative function \\( y' \\).",
    t: "Chapter review exercise",
    hint: "Differentiate f(x) to get a linear equation, and check where it is 0.",
    solutionSteps: [
      {
        explanation: "Differentiate quadratic function using chain rule",
        workingOut: "y' = 2(x-3) = 2x - 6"
      },
      {
        explanation: "Determine x-intercept of derivative line",
        workingOut: "2x - 6 = 0 \\implies x = 3"
      },
      {
        explanation: "Draw derivative graph shape (See red curve in the solution graph above/below)",
        workingOut: "\\text{The derivative is a line with positive gradient crossing the x-axis at } x = 3.",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -2,
              8,
              7,
              -4
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [6,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return (x-3)*(x-3);};\nboard.create('functiongraph', [f, -1, 6], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nvar df = function(x){return 2*x - 6;};\nboard.create('functiongraph', [df, -1, 6], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [4, 4, \"y' = 2x - 6\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -2,
          8,
          7,
          -2
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [6,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return (x-3)*(x-3);};\nboard.create('functiongraph', [f, -1, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-3i-q9d",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "A cubic curve with turning points at \\( x = -2 \\) and \\( x = 2 \\), \\( y = 0.1(12x - x^3) \\), is shown below. Sketch the graph of its derivative function \\( y' \\).",
    t: "Chapter review exercise",
    hint: "The derivative of a cubic is a quadratic (parabola). Identify where y' = 0.",
    solutionSteps: [
      {
        explanation: "Differentiate cubic function",
        workingOut: "y' = 0.1(12 - 3x^2) = 1.2 - 0.3x^2"
      },
      {
        explanation: "Determine critical values where y' = 0",
        workingOut: "1.2 - 0.3x^2 = 0 \\implies x^2 = 4 \\implies x = \\pm 2"
      },
      {
        explanation: "Draw derivative graph shape (See red curve in the solution graph above/below)",
        workingOut: "\\text{Since coefficient of } x^2 \\text{ is negative, it is a concave down parabola crossing x-axis at } \\pm 2.",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -5,
              4,
              5,
              -4
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -3], [0, 3]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 0.1*(12*x - x*x*x);};\nboard.create('functiongraph', [f, -4, 4], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nvar df = function(x){return 1.2 - 0.3*x*x;};\nboard.create('functiongraph', [df, -4, 4], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [0.5, 2, \"y' = 1.2 - 0.3x^2\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -5,
          4,
          5,
          -4
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -3], [0, 3]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 0.1*(12*x - x*x*x);};\nboard.create('functiongraph', [f, -4, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-3i-q10",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "The curve \\( y = x^3 - 3x^2 - 9x + 15 \\) is graphed below. The points \\( P \\) and \\( Q \\) are stationary points. Complete parts a) to c).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q10a",
        type: "multiple_choice",
        question: "a) Find the coordinates of \\( P \\) and \\( Q \\). (Format: P(x,y), Q(x,y))",
        a: 1,
        solutionSteps: [
          {
            explanation: "Differentiate the function to locate stationary points",
            workingOut: "y' = 3x^2 - 6x - 9 = 3(x-3)(x+1) = 0 \\implies x = -1, 3"
          },
          {
            explanation: "Evaluate the function at x = -1 to find point P",
            workingOut: "y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 15 = -1 - 3 + 9 + 15 = 20 \\implies P(-1, 20)"
          },
          {
            explanation: "Evaluate the function at x = 3 to find point Q",
            workingOut: "y(3) = 3^3 - 3(3)^2 - 9(3) + 15 = 27 - 27 - 27 + 15 = -12 \\implies Q(3, -12)"
          }
        ],
        opts: [
          "P(1,-20), Q(-3,12)",
          "P(-1,20), Q(3,-12)",
          "P(20,-1), Q(-12,3)",
          "P(3,20), Q(-1,-12)"
        ],
        answer: 1
      },
      {
        id: "y12a-3i-q10b",
        type: "multiple_choice",
        question: "b) For what values of \\( x \\) is the curve concave up? (Write as an inequality, e.g. x > a)",
        a: 2,
        solutionSteps: [
          {
            explanation: "Find the second derivative y''",
            workingOut: "y'' = 6x - 6"
          },
          {
            explanation: "Set second derivative strictly positive",
            workingOut: "6x - 6 > 0 \\implies 6x > 6 \\implies x > 1"
          }
        ],
        opts: [
          "x < 1",
          "x > -1",
          "x > 1",
          "x > 3"
        ],
        answer: 2
      },
      {
        id: "y12a-3i-q10c",
        type: "multiple_choice",
        question: "c) For what values of \\( k \\) are there three distinct solutions of the equation \\( x^3 - 3x^2 - 9x + 15 = k \\)? (Format: a < k < b)",
        a: 3,
        solutionSteps: [
          {
            explanation: "Analyze cubic solutions visually",
            workingOut: "\\text{Three solutions exist when the horizontal line } y = k \\text{ intersects the cubic in three places.}"
          },
          {
            explanation: "Identify boundary limits using stationary values",
            workingOut: "\\text{The line must lie strictly between the turning point coordinates } y(Q) = -12 \\text{ and } y(P) = 20."
          },
          {
            explanation: "State inequality range",
            workingOut: "-12 < k < 20"
          }
        ],
        opts: [
          "-1 < k < 3",
          "-12 \\le k \\le 20",
          "-20 < k < 12",
          "-12 < k < 20"
        ],
        answer: 3
      }
    ],
    graphData: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [
          -3,
          26,
          5,
          -18
        ],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-16.5], [0,24.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x - 9*x + 15;};\nboard.create('functiongraph', [f, -2.5, 4.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 20], {name: 'P(-1, 20)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.create('point', [3, -12], {name: 'Q(3, -12)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    id: "y12a-3i-q11a",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "Sketch the graph of \\( y = x^2 - 4x - 5 \\), indicating the coordinates of any stationary points and points of inflection.",
    a: "Vertex / Stationary point at (2, -9), no points of inflection.",
    t: "Chapter review exercise",
    hint: "This is a quadratic parabola. Find the vertex where y' = 0.",
    solutionSteps: [
      {
        explanation: "1. Domain",
        workingOut: "\\text{The function } f(x) = x^2 - 4x - 5 \\text{ is a polynomial, so the domain is all real } x."
      },
      {
        explanation: "2. Symmetry",
        workingOut: "f(-x) = (-x)^2 - 4(-x) - 5 = x^2 + 4x - 5. \\text{ This is neither } f(x) \\text{ nor } -f(x)\\text{, so it is neither even nor odd.}"
      },
      {
        explanation: "3. Intercepts and Sign",
        workingOut: "\\textbf{y-intercept:} f(0) = -5.\\\\ \\textbf{x-intercepts:} \\text{Set } y = 0 \\implies x^2 - 4x - 5 = 0 \\implies (x-5)(x+1) = 0 \\implies x = -1 \\text{ or } x = 5."
      },
      {
        explanation: "4. Asymptotes",
        workingOut: "\\text{Since } f(x) \\text{ is a polynomial, there are no vertical or horizontal asymptotes. As } x \\to \\pm\\infty, y \\to \\infty."
      },
      {
        explanation: "5. The first derivative",
        workingOut: "y' = 2x - 4.\\text{ Set } y' = 0 \\implies x = 2.\\\\ \\text{When } x=2, y = (2)^2 - 4(2) - 5 = -9. \\text{ Stationary point at } (2, -9).\\\\ y' < 0 \\text{ for } x < 2 \\text{ (decreasing) and } y' > 0 \\text{ for } x > 2 \\text{ (increasing). Thus, } (2, -9) \\text{ is a local minimum.}"
      },
      {
        explanation: "6. The second derivative",
        workingOut: "y'' = 2.\\text{ Since } y'' > 0 \\text{ for all } x\\text{, the curve is everywhere concave up. There are no points of inflection.}"
      },
      {
        explanation: "7. Any other features",
        workingOut: "\\text{The curve is a parabola opening upwards with its vertex at } (2, -9).",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -3,
              6,
              7,
              -11
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-10.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x - 4*x - 5;};\nboard.create('functiongraph', [f, -2, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, -9], {name: 'Vertex(2,-9)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    id: "y12a-3i-q11b",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "Sketch the graph of \\( y = x^3 - 3x^2 + 4 \\), indicating all stationary points and points of inflection.",
    a: "Local Max at (0, 4), Local Min at (2, 0), Inflection Point at (1, 2).",
    t: "Chapter review exercise",
    hint: "Integrate key calculus landmarks: find where y' = 0 and y'' = 0.",
    solutionSteps: [
      {
        explanation: "1. Domain",
        workingOut: "\\text{The function } f(x) = x^3 - 3x^2 + 4 \\text{ is a polynomial, so the domain is all real } x."
      },
      {
        explanation: "2. Symmetry",
        workingOut: "f(-x) = -x^3 - 3x^2 + 4. \\text{ This is neither even nor odd.}"
      },
      {
        explanation: "3. Intercepts and Sign",
        workingOut: "\\textbf{y-intercept:} f(0) = 4.\\\\ \\textbf{x-intercepts:} \\text{By testing factors of 4, } f(-1) = -1 - 3 + 4 = 0. \\text{ Thus, } (x+1) \\text{ is a factor.}\\\\ x^3 - 3x^2 + 4 = (x+1)(x^2 - 4x + 4) = (x+1)(x-2)^2.\\text{ Intercepts at } x = -1 \\text{ and } x = 2."
      },
      {
        explanation: "4. Asymptotes",
        workingOut: "\\text{No asymptotes. As } x \\to \\infty, y \\to \\infty. \\text{ As } x \\to -\\infty, y \\to -\\infty."
      },
      {
        explanation: "5. The first derivative",
        workingOut: "y' = 3x^2 - 6x = 3x(x - 2).\\text{ Set } y' = 0 \\implies x = 0 \\text{ or } x = 2.\\\\ \\text{When } x=0, y=4. \\text{ When } x=2, y=0. \\text{ Stationary points at } (0, 4) \\text{ and } (2, 0).\\\\ \\text{Using a table of slopes: } (0, 4) \\text{ is a local maximum and } (2, 0) \\text{ is a local minimum.}"
      },
      {
        explanation: "6. The second derivative",
        workingOut: "y'' = 6x - 6 = 6(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y=2. \\text{ The concavity changes from down } (y'' < 0) \\text{ to up } (y'' > 0) \\text{ at } x=1\\text{, so } (1, 2) \\text{ is a point of inflection.}"
      },
      {
        explanation: "7. Any other features",
        workingOut: "\\text{The } x\\text{-intercept at } x=2 \\text{ is also a stationary point, confirming it is a double root.}",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -2,
              7,
              4,
              -2
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x + 4;};\nboard.create('functiongraph', [f, -1.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {name: 'Local Max(0,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [2, 0], {name: 'Local Min(2,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [1, 2], {name: 'Inflection(1,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    id: "y12a-3i-q11c",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "Sketch the graph of \\( y = 2x^3 - 6x^2 - 18x + 5 \\), indicating all stationary points and points of inflection.",
    a: "Local Max at (-1, 15), Local Min at (3, -49), Inflection Point at (1, -17).",
    t: "Chapter review exercise",
    hint: "Analyze derivative roots and second derivative roots for landmarks.",
    solutionSteps: [
      {
        explanation: "1. Domain",
        workingOut: "\\text{The function } f(x) = 2x^3 - 6x^2 - 18x + 5 \\text{ is a polynomial, so the domain is all real } x."
      },
      {
        explanation: "2. Symmetry",
        workingOut: "\\text{The function contains both odd and even powers of } x \\text{, plus a constant, so it is neither even nor odd.}"
      },
      {
        explanation: "3. Intercepts and Sign",
        workingOut: "\\textbf{y-intercept:} f(0) = 5.\\\\ \\textbf{x-intercepts:} \\text{There are no obvious rational roots, so we approximate or leave them unmarked unless required.}"
      },
      {
        explanation: "4. Asymptotes",
        workingOut: "\\text{No asymptotes. As } x \\to \\infty, y \\to \\infty. \\text{ As } x \\to -\\infty, y \\to -\\infty."
      },
      {
        explanation: "5. The first derivative",
        workingOut: "y' = 6x^2 - 12x - 18 = 6(x^2 - 2x - 3) = 6(x - 3)(x + 1).\\text{ Set } y' = 0 \\implies x = -1 \\text{ or } x = 3.\\\\ \\text{At } x = -1, y = 2(-1) - 6(1) - 18(-1) + 5 = 15.\\\\ \\text{At } x = 3, y = 2(27) - 6(9) - 18(3) + 5 = -49.\\\\ \\text{Stationary points at } (-1, 15) \\text{ (local max) and } (3, -49) \\text{ (local min).}"
      },
      {
        explanation: "6. The second derivative",
        workingOut: "y'' = 12x - 12 = 12(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y = 2 - 6 - 18 + 5 = -17. \\text{ Since } y'' \\text{ changes sign across } x=1\\text{, } (1, -17) \\text{ is a point of inflection.}"
      },
      {
        explanation: "7. Any other features",
        workingOut: "\\text{Because the local maximum is positive (15) and the local minimum is negative (-49), the curve crosses the } x\\text{-axis three times.}",
        graphData: {
          jsxGraph: {
            width: 350,
            height: 250,
            boundingbox: [
              -3,
              25,
              5,
              -55
            ],
            script: "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-52.5], [0,22.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 2*x*x*x - 6*x*x - 18*x + 5;};\nboard.create('functiongraph', [f, -2.5, 4.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 15], {name: 'Max(-1,15)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.create('point', [3, -49], {name: 'Min(3,-49)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [1, -17], {name: 'Inflection(1,-17)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    id: "y12a-3i-q12",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "For the cubic curve \\( y = x^3 - 3x^2 - 24x + 28 \\), complete parts a) and b) for the domain \\( -3 \\le x \\le 6 \\).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q12a",
        type: "teacher_review",
        question: "a) Sketch the graph of the function on the domain, indicating all stationary points.",
        a: "Local Max at (-2, 56), Local Min at (4, -52). Endpoints at (-3, 46) and (6, -8).",
        solutionSteps: [
          {
            explanation: "1. Domain",
            workingOut: "\\text{The problem specifies a restricted domain: } -3 \\le x \\le 6."
          },
          {
            explanation: "2. Symmetry",
            workingOut: "\\text{The function } f(x) = x^3 - 3x^2 - 24x + 28 \\text{ is neither even nor odd.}"
          },
          {
            explanation: "3. Intercepts and Sign",
            workingOut: "\\textbf{y-intercept:} f(0) = 28.\\\\ \\textbf{x-intercepts:} \\text{Difficult to factorize simply, but we know where the curve generally lies based on endpoints and turning points.}"
          },
          {
            explanation: "4. Asymptotes",
            workingOut: "\\text{No asymptotes for a polynomial.}"
          },
          {
            explanation: "5. The first derivative",
            workingOut: "y' = 3x^2 - 6x - 24 = 3(x^2 - 2x - 8) = 3(x - 4)(x + 2).\\text{ Set } y' = 0 \\implies x = -2 \\text{ or } x = 4.\\\\ \\text{At } x = -2, y = 56 \\implies (-2, 56) \\text{ is a local maximum.}\\\\ \\text{At } x = 4, y = -52 \\implies (4, -52) \\text{ is a local minimum.}"
          },
          {
            explanation: "6. The second derivative",
            workingOut: "y'' = 6x - 6 = 6(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y = 2. \\text{ The point of inflection is at } (1, 2)."
          },
          {
            explanation: "7. Any other features (Endpoints)",
            workingOut: "\\text{We must evaluate the function at the boundaries of the domain.}\\\\ y(-3) = (-3)^3 - 3(-3)^2 - 24(-3) + 28 = -27 - 27 + 72 + 28 = 46.\\\\ y(6) = 6^3 - 3(6)^2 - 24(6) + 28 = 216 - 108 - 144 + 28 = -8.\\\\ \\text{The curve starts at } (-3, 46) \\text{ and ends at } (6, -8).",
            graphData: {
              jsxGraph: {
                width: 350,
                height: 250,
                boundingbox: [
                  -4.5,
                  70,
                  7.5,
                  -60
                ],
                script: "board.suspendUpdate();\nboard.create('arrow', [[-4.0,0], [7.0,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-58.0], [0,68.0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x - 24*x + 28;};\nboard.create('functiongraph', [f, -3, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 56], {name: 'Global Max(-2,56)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 12]}});\nboard.create('point', [4, -52], {name: 'Global Min(4,-52)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [-3, 46], {name: '(-3,46)', size: 2, color: 'green', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [6, -8], {name: '(6,-8)', size: 2, color: 'green', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        id: "y12a-3i-q12b",
        type: "multiple_choice",
        question: "b) Determine the global maximum and minimum values of the function in this domain. (Format: global maximum: max_val, global minimum: min_val)",
        a: 0,
        solutionSteps: [
          {
            explanation: "Compare local extrema and boundary values",
            workingOut: "\\text{Candidate values: } y(-3) = 46, \\, y(-2) = 56, \\, y(4) = -52, \\, y(6) = -8"
          },
          {
            explanation: "Select the absolute minimum and maximum values",
            workingOut: "\\text{The largest value is } 56 \\text{ at } x=-2 \\text{, and the smallest value is } -52 \\text{ at } x=4."
          }
        ],
        opts: [
          "global maximum: 56, global minimum: -52",
          "global maximum: 46, global minimum: -52",
          "global maximum: 56, global minimum: -8",
          "global maximum: 46, global minimum: -8"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "y12a-3i-q13a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "The tangent to the curve \\( y = x^2 - ax + 12 \\) is horizontal at \\( x = -2 \\). Find the value of \\( a \\).",
    a: 2,
    t: "Chapter review exercise",
    hint: "Set y' = 0 at x = -2 and solve for a.",
    solutionSteps: [
      {
        explanation: "Understand 'horizontal tangent'",
        workingOut: "\\text{A horizontal tangent means the gradient (or derivative) is zero at that point. So, } y' = 0 \\text{ when } x = -2."
      },
      {
        explanation: "Differentiate the function",
        workingOut: "y' = \\frac{d}{dx}(x^2 - ax + 12) = 2x - a"
      },
      {
        explanation: "Apply the horizontal tangent condition",
        workingOut: "\\text{Substitute } x = -2 \\text{ and set the derivative to zero: }\\\\ 2(-2) - a = 0 \\implies -4 - a = 0"
      },
      {
        explanation: "Solve for a",
        workingOut: "a = -4"
      }
    ],
    opts: [
      "\\( -8 \\)",
      "\\( 4 \\)",
      "\\( -4 \\)",
      "\\( -2 \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q13ba",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "The curve \\( y = ax^2 + bx + 5 \\) has a turning point at \\( (-2, 1) \\). Find the value of the coefficient \\( a \\).",
    a: 0,
    t: "Chapter review exercise",
    hint: "Set the derivative at x = -2 equal to 0, and plug the coordinate (-2, 1) into the curve equation.",
    solutionSteps: [
      {
        explanation: "Understand 'turning point'",
        workingOut: "\\text{A turning point at } (-2, 1) \\text{ gives us two pieces of information: the point lies on the curve, and the derivative is zero at } x = -2."
      },
      {
        explanation: "Use the derivative condition",
        workingOut: "\\text{Differentiate the curve: } y' = 2ax + b.\\\\ \\text{Set } y'(-2) = 0 \\implies 2a(-2) + b = 0 \\implies -4a + b = 0 \\implies b = 4a.\\\\ \\text{This is our first equation.}"
      },
      {
        explanation: "Use the point condition",
        workingOut: "\\text{The point } (-2, 1) \\text{ must satisfy the curve's equation. Substitute } x = -2 \\text{ and } y = 1:\\\\ 1 = a(-2)^2 + b(-2) + 5 \\implies 1 = 4a - 2b + 5 \\implies 4a - 2b = -4.\\\\ \\text{Dividing by 2 gives } 2a - b = -2.\\\\ \\text{This is our second equation.}"
      },
      {
        explanation: "Solve the simultaneous equations for a",
        workingOut: "\\text{Substitute } b = 4a \\text{ from the first equation into the second equation:}\\\\ 2a - (4a) = -2 \\implies -2a = -2 \\implies a = 1"
      }
    ],
    opts: [
      "\\( 1 \\)",
      "\\( -1 \\)",
      "\\( 4 \\)",
      "\\( -\\frac{1}{3} \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q13bb",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "The curve \\( y = ax^2 + bx + 5 \\) has a turning point at \\( (-2, 1) \\). Find the value of the coefficient \\( b \\).",
    a: 3,
    t: "Chapter review exercise",
    hint: "Use the relation b = 4a after finding a = 1.",
    solutionSteps: [
      {
        explanation: "Understand the turning point conditions",
        workingOut: "\\text{A turning point at } (-2, 1) \\text{ means the point lies on the curve, and the gradient (derivative) is zero at } x = -2."
      },
      {
        explanation: "Equation 1: Use the derivative condition",
        workingOut: "y' = 2ax + b \\implies 2a(-2) + b = 0 \\implies -4a + b = 0 \\implies b = 4a"
      },
      {
        explanation: "Equation 2: Use the point condition",
        workingOut: "y(-2) = 1 \\implies a(-2)^2 + b(-2) + 5 = 1 \\implies 4a - 2b = -4 \\implies 2a - b = -2"
      },
      {
        explanation: "Solve the simultaneous equations for b",
        workingOut: "\\text{We have two equations:}\\\\ \\text{1) } b = 4a\\\\ \\text{2) } 2a - b = -2\\\\ \\text{Substitute (1) into (2):}\\\\ 2a - (4a) = -2 \\implies -2a = -2 \\implies a = 1.\\\\ \\text{Now substitute } a = 1 \\text{ back into equation (1) to find } b:\\\\ b = 4(1) = 4"
      }
    ],
    opts: [
      "\\( 2 \\)",
      "\\( -4 \\)",
      "\\( 1 \\)",
      "\\( 4 \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q14",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "For the curve \\( y = x^4 - 4x^3 + 12 \\), complete parts a) to c).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q14a",
        type: "teacher_review",
        question: "a) Show that the curve has a point of inflection at \\( (2, -4) \\).",
        a: "The second derivative y'' = 12x(x-2) is 0 at x = 2. Since y'' changes sign from negative to positive around x = 2, and y(2) = -4, (2, -4) is a point of inflection.",
        solutionSteps: [
          {
            explanation: "Find the first and second derivatives of the function",
            workingOut: "y' = 4x^3 - 12x^2 \\implies y'' = 12x^2 - 24x = 12x(x - 2)"
          },
          {
            explanation: "Find where the second derivative is zero",
            workingOut: "12x(x - 2) = 0 \\implies x = 0 \\text{ or } x = 2"
          },
          {
            explanation: "Verify sign change of y'' around x = 2",
            workingOut: "\\text{For } x < 2, \\, y'' < 0. \\text{ For } x > 2, \\, y'' > 0. \\text{ Concavity changes.}"
          },
          {
            explanation: "Substitute x = 2 into y",
            workingOut: "y(2) = 2^4 - 4(2)^3 + 12 = 16 - 32 + 12 = -4 \\implies (2, -4) \\text{ is inflection point}"
          }
        ]
      },
      {
        id: "y12a-3i-q14b",
        type: "multiple_choice",
        question: "b) Find the gradient of the curve at this point of inflection.",
        a: 3,
        solutionSteps: [
          {
            explanation: "Understand the requirement",
            workingOut: "\\text{The gradient of a curve at any point is given by its first derivative, } y'."
          },
          {
            explanation: "Find the first derivative",
            workingOut: "\\text{Differentiate } y = x^4 - 4x^3 + 12 \\text{ to get }\\\\ y' = 4x^3 - 12x^2"
          },
          {
            explanation: "Evaluate at the given point",
            workingOut: "\\text{The point of inflection is at } x = 2 \\text{. Substitute } x = 2 \\text{ into } y':\\\\ y'(2) = 4(2)^3 - 12(2)^2 = 32 - 48 = -16"
          }
        ],
        opts: [
          "\\( 0 \\)",
          "\\( 16 \\)",
          "\\( -4 \\)",
          "\\( -16 \\)"
        ],
        answer: 3
      },
      {
        id: "y12a-3i-q14c",
        type: "teacher_review",
        question: "c) Hence show that the tangent at the point of inflection is \\( 16x + y - 28 = 0 \\).",
        a: "The tangent line passing through (2, -4) with gradient -16 is y - (-4) = -16(x - 2), which simplifies to 16x + y - 28 = 0.",
        solutionSteps: [
          {
            explanation: "Write line equation using point-slope formula",
            workingOut: "y - y_1 = m(x - x_1) \\implies y - (-4) = -16(x - 2)"
          },
          {
            explanation: "Expand and rearrange to standard form",
            workingOut: "y + 4 = -16x + 32 \\implies 16x + y - 28 = 0"
          }
        ]
      }
    ]
  },
  {
    id: "y12a-3i-q15",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "The number \\( S \\) of students logged onto a particular website over a five-hour period is given by the formula \\( S = 600 + 54t^2 - 3t^4 \\), for \\( 0 \\le t \\le 5 \\). Complete parts a) to c).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q15a",
        type: "multiple_choice",
        question: "a) What is the initial number of students that are logged on?",
        a: 1,
        solutionSteps: [
          {
            explanation: "Understand 'initial'",
            workingOut: "\\text{The word 'initial' refers to the very beginning of the period, which is when time } t = 0."
          },
          {
            explanation: "Evaluate the formula",
            workingOut: "\\text{Substitute } t = 0 \\text{ into the formula } S = 600 + 54t^2 - 3t^4:\\\\ S(0) = 600 + 54(0)^2 - 3(0)^4 = 600"
          }
        ],
        opts: [
          "\\( 75 \\)",
          "\\( 600 \\)",
          "\\( 651 \\)",
          "\\( 54 \\)"
        ],
        answer: 1
      },
      {
        id: "y12a-3i-q15b",
        type: "multiple_choice",
        question: "b) How many students are logged on at the end of the five hours?",
        a: 2,
        solutionSteps: [
          {
            explanation: "Understand 'end of the five hours'",
            workingOut: "\\text{The period is 5 hours long, so the end corresponds to time } t = 5."
          },
          {
            explanation: "Evaluate the formula",
            workingOut: "\\text{Substitute } t = 5 \\text{ into the formula } S = 600 + 54t^2 - 3t^4."
          },
          {
            explanation: "Calculate the terms",
            workingOut: "54(5)^2 = 54(25) = 1350\\\\ -3(5)^4 = -3(625) = -1875"
          },
          {
            explanation: "Find the final value",
            workingOut: "S(5) = 600 + 1350 - 1875 = 75"
          }
        ],
        opts: [
          "\\( 3825 \\)",
          "\\( -525 \\)",
          "\\( 75 \\)",
          "\\( 696 \\)"
        ],
        answer: 2
      },
      {
        id: "y12a-3i-q15c",
        type: "multiple_choice",
        question: "c) What was the maximum number of students logged onto the website during the five-hour period?",
        a: 0,
        solutionSteps: [
          {
            explanation: "Understand 'maximum number'",
            workingOut: "\\text{To find the maximum value of } S \\text{, we need to find the critical points by setting the derivative } \\frac{dS}{dt} \\text{ to zero.}"
          },
          {
            explanation: "Find the derivative",
            workingOut: "\\text{Differentiate } S \\text{ with respect to } t:\\\\ \\frac{dS}{dt} = 108t - 12t^3"
          },
          {
            explanation: "Find critical points",
            workingOut: "\\text{Set the derivative to zero:}\\\\ 12t(9 - t^2) = 0 \\implies t = 0 \\text{ or } t = 3 \\text{ or } t = -3.\\\\ \\text{Since } 0 \\le t \\le 5\\text{, the valid times are } t = 0 \\text{ and } t = 3."
          },
          {
            explanation: "Evaluate S at critical points and endpoints",
            workingOut: "\\text{We know } S(0) = 600 \\text{ and } S(5) = 75.\\\\ \\text{Now evaluate at } t = 3:\\\\ S(3) = 600 + 54(3)^2 - 3(3)^4 = 600 + 486 - 243 = 843.\\\\ \\text{Comparing 600, 75, and 843, the maximum is 843.}"
          }
        ],
        opts: [
          "\\( 843 \\)",
          "\\( 3 \\)",
          "\\( 600 \\)",
          "\\( 735 \\)"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "y12a-3i-q16",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "A rectangular sheet of cardboard measures 20 cm by 12 cm. Equal squares of side length \\( x \\) cm are cut out of the corners and the sides are turned up to form an open rectangular box. Complete parts a) and b).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q16a",
        type: "multiple_choice",
        question: "a) What is the equation for the volume \\( V \\) of the box in terms of \\( x \\)?",
        a: 1,
        solutionSteps: [
          {
            explanation: "Write expression for dimensions of the box",
            workingOut: "\\text{The sheet is } 20 \\text{ by } 12 \\text{. Cutting squares of side } x \\text{ means:}\\\\ \\text{Height } = x, \\, \\text{Length } = 20 - 2x, \\, \\text{Width } = 12 - 2x"
          },
          {
            explanation: "Write down the volume product and expand",
            workingOut: "V = x(20 - 2x)(12 - 2x) = x(240 - 40x - 24x + 4x^2)\\\\ V = x(240 - 64x + 4x^2)"
          },
          {
            explanation: "Distribute x to get final expression",
            workingOut: "V = 4x^3 - 64x^2 + 240x"
          }
        ],
        opts: [
          "\\( V = x^3 - 32x^2 + 240x \\)",
          "\\( V = 4x^3 - 64x^2 + 240x \\)",
          "\\( V = 4x^3 - 68x^2 + 220x \\)",
          "\\( V = 2x^3 - 48x^2 + 240x \\)"
        ],
        answer: 1
      },
      {
        id: "y12a-3i-q16b",
        type: "multiple_choice",
        question: "b) Find, in exact fraction form, the maximum volume of the box in cubic centimetres.",
        a: 3,
        solutionSteps: [
          {
            explanation: "Understand the goal",
            workingOut: "\\text{We need to find the maximum value of the volume } V = 4x^3 - 64x^2 + 240x \\text{ for valid values of } x."
          },
          {
            explanation: "Differentiate the volume function",
            workingOut: "\\text{To find the maximum, we first find the derivative } \\frac{dV}{dx}:\\\\ \\frac{dV}{dx} = 12x^2 - 128x + 240"
          },
          {
            explanation: "Find stationary points",
            workingOut: "\\text{Set the derivative to zero and factorise to solve for } x:\\\\ 12x^2 - 128x + 240 = 0\\\\ \\text{Divide by 4: } 3x^2 - 32x + 60 = 0\\\\ (3x - 10)(x - 6) = 0 \\implies x = \\frac{10}{3} \\text{ or } x = 6"
          },
          {
            explanation: "Determine the valid x value",
            workingOut: "\\text{The width of the box is } 12 - 2x \\text{. If } x = 6 \\text{, the width becomes 0. Thus, we must use } x = \\frac{10}{3}."
          },
          {
            explanation: "Calculate the maximum volume",
            workingOut: "\\text{Substitute } x = \\frac{10}{3} \\text{ back into the factored volume formula:}\\\\ V = \\frac{10}{3}\\left(20 - 2\\left(\\frac{10}{3}\\right)\\right)\\left(12 - 2\\left(\\frac{10}{3}\\right)\\right)\\\\ V = \\frac{10}{3}\\left(\\frac{40}{3}\\right)\\left(\\frac{16}{3}\\right) = \\frac{6400}{27}"
          }
        ],
        opts: [
          "\\( \\frac{3200}{27} \\)",
          "\\( \\frac{10}{3} \\)",
          "\\( \\frac{6400}{9} \\)",
          "\\( \\frac{6400}{27} \\)"
        ],
        answer: 3
      }
    ]
  },
  {
    id: "y12a-3i-q17",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 240,
    question: "A coal chute is built in the shape of an upturned cone. The sum of the base radius \\( r \\) and the height \\( h \\) is 15 metres. Complete parts a) and b).",
    t: "Chapter review exercise",
    solutionSteps: [],
    subQuestions: [
      {
        id: "y12a-3i-q17a",
        type: "multiple_choice",
        question: "a) What is the equation for the volume \\( V \\) of the coal chute in terms of \\( r \\)?",
        a: 3,
        solutionSteps: [
          {
            explanation: "Relate radius and height using the sum condition",
            workingOut: "r + h = 15 \\implies h = 15 - r"
          },
          {
            explanation: "Substitute height into the cone volume formula",
            workingOut: "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^2 (15 - r)"
          },
          {
            explanation: "Expand the expression",
            workingOut: "V = \\frac{1}{3}\\pi r^2(15) - \\frac{1}{3}\\pi r^2(r) = 5\\pi r^2 - \\frac{1}{3}\\pi r^3"
          }
        ],
        opts: [
          "\\( V = 75\\pi r - 10\\pi r^2 + \\frac{1}{3}\\pi r^3 \\)",
          "\\( V = 15\\pi r^2 - \\pi r^3 \\)",
          "\\( V = 15\\pi r^2 - \\frac{1}{3}\\pi r^3 \\)",
          "\\( V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3 \\)"
        ],
        answer: 3
      },
      {
        id: "y12a-3i-q17b",
        type: "multiple_choice",
        question: "b) Find the radius of the cone in metres that yields the maximum volume.",
        a: 0,
        solutionSteps: [
          {
            explanation: "Understand the goal",
            workingOut: "\\text{We are looking for the radius } r \\text{ that gives the maximum volume } V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3."
          },
          {
            explanation: "Differentiate the volume function",
            workingOut: "\\text{Find the derivative } \\frac{dV}{dr} \\text{ with respect to } r:\\\\ \\frac{dV}{dr} = 10\\pi r - \\pi r^2"
          },
          {
            explanation: "Find stationary points",
            workingOut: "\\text{Set the derivative to zero:}\\\\ 10\\pi r - \\pi r^2 = 0\\\\ \\pi r(10 - r) = 0\\\\ \\text{Since a cone must have a positive radius } (r > 0)\\text{, we divide by } \\pi r \\text{ to get:}\\\\ 10 - r = 0 \\implies r = 10"
          }
        ],
        opts: [
          "\\( 10 \\)",
          "\\( 5 \\)",
          "\\( 15 \\)",
          "\\( 7.5 \\)"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "y12a-3i-q18a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = x^8 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Use the integration power rule: increase the power by 1 and divide by the new power.",
    solutionSteps: [
      {
        explanation: "Understand 'primitive'",
        workingOut: "\\text{The primitive of a function is its antiderivative (or indefinite integral).}"
      },
      {
        explanation: "Apply the power rule for integration",
        workingOut: "\\text{To integrate } x^n \\text{, we increase the power by 1 and divide by the new power:}\\\\ \\int x^8 \\, dx = \\frac{x^{8+1}}{8+1} = \\frac{x^9}{9}"
      },
      {
        explanation: "Add the constant of integration",
        workingOut: "\\text{Since it is an indefinite integral, we must add the arbitrary constant } C:\\\\ \\frac{x^9}{9} + C"
      }
    ],
    opts: [
      "\\( 8x^7 + C \\)",
      "\\( \\frac{x^9}{9} + C \\)",
      "\\( x^9 + C \\)",
      "\\( \\frac{x^9}{9} \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q18b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = 4x \\)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Integrate x to x^2 / 2, keeping the coefficient.",
    solutionSteps: [
      {
        explanation: "Understand 'primitive'",
        workingOut: "\\text{The primitive is the antiderivative, or indefinite integral, of the function.}"
      },
      {
        explanation: "Apply the power rule",
        workingOut: "\\text{For a term } kx^n \\text{, the integral is } k\\left(\\frac{x^{n+1}}{n+1}\\right).\\text{ Here } n=1 \\text{, so we increase the power to 2 and divide by 2:}\\\\ \\int 4x \\, dx = 4\\left(\\frac{x^2}{2}\\right)"
      },
      {
        explanation: "Simplify and add constant",
        workingOut: "\\text{Simplify the coefficient and add the constant of integration } C:\\\\ 2x^2 + C"
      }
    ],
    opts: [
      "\\( 4x^2 + C \\)",
      "\\( 4 + C \\)",
      "\\( 2x^2 + C \\)",
      "\\( 2x + C \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q18c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the constant function:\n\\( f(x) = 6 \\)",
    a: 3,
    t: "Chapter review exercise",
    hint: "The primitive of a constant k is kx + C.",
    solutionSteps: [
      {
        explanation: "Understand the integral of a constant",
        workingOut: "\\text{A constant } k \\text{ can be thought of as } kx^0\\text{. Integrating it yields } \\frac{kx^1}{1} = kx."
      },
      {
        explanation: "Integrate",
        workingOut: "\\int 6 \\, dx = 6x"
      },
      {
        explanation: "Add constant of integration",
        workingOut: "\\text{Always add } C \\text{ for indefinite integrals:}\\\\ 6x + C"
      }
    ],
    opts: [
      "\\( 6x \\)",
      "\\( 3x^2 + C \\)",
      "\\( C \\)",
      "\\( 6x + C \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q18d",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = 15x^4 \\)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Add 1 to power of 4, then divide coefficient 15 by 5.",
    solutionSteps: [
      {
        explanation: "Apply the power rule",
        workingOut: "\\text{Increase the power of } x \\text{ from 4 to 5, then divide the term by the new power 5:}\\\\ \\int 15x^4 \\, dx = 15\\left(\\frac{x^5}{5}\\right)"
      },
      {
        explanation: "Simplify and add constant",
        workingOut: "\\text{Simplify the coefficient and add } C:\\\\ 3x^5 + C"
      }
    ],
    opts: [
      "\\( 3x^5 + C \\)",
      "\\( 60x^3 + C \\)",
      "\\( 15x^5 + C \\)",
      "\\( \\frac{15}{4}x^5 + C \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q18e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = 6x + 6x^2 - 4x^3 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Integrate each polynomial term individually.",
    solutionSteps: [
      {
        explanation: "Integrate term by term",
        workingOut: "\\text{Apply the power rule to each term individually. Increase each power by 1 and divide by the new power.}"
      },
      {
        explanation: "First term",
        workingOut: "\\int 6x \\, dx = 6\\left(\\frac{x^2}{2}\\right) = 3x^2"
      },
      {
        explanation: "Second term",
        workingOut: "\\int 6x^2 \\, dx = 6\\left(\\frac{x^3}{3}\\right) = 2x^3"
      },
      {
        explanation: "Third term",
        workingOut: "\\int -4x^3 \\, dx = -4\\left(\\frac{x^4}{4}\\right) = -x^4"
      },
      {
        explanation: "Combine and add constant",
        workingOut: "3x^2 + 2x^3 - x^4 + C"
      }
    ],
    opts: [
      "\\( 6x^2 + 6x^3 - 4x^4 + C \\)",
      "\\( 3x^2 + 2x^3 - x^4 + C \\)",
      "\\( 6 + 12x - 12x^2 + C \\)",
      "\\( 6x^2 + 3x^3 - \\frac{4}{3}x^4 + C \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q19a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive after expanding brackets first:\n\\( f(x) = 2x(x - 3) \\)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Expand brackets to 2x^2 - 6x, then integrate.",
    solutionSteps: [
      {
        explanation: "Expand the brackets",
        workingOut: "\\text{Before integrating, expand the expression } 2x(x - 3) \\text{ by distributing } 2x:\\\\ 2x^2 - 6x"
      },
      {
        explanation: "Integrate term by term",
        workingOut: "\\text{Apply the power rule to each term.}\\\\ \\text{For } 2x^2 \\text{, the integral is } \\frac{2x^3}{3}.\\\\ \\text{For } -6x \\text{, the integral is } -\\frac{6x^2}{2} = -3x^2."
      },
      {
        explanation: "Add the constant of integration",
        workingOut: "\\text{Since this is an indefinite integral, add } + C \\text{ at the end:}\\\\ \\frac{2x^3}{3} - 3x^2 + C"
      }
    ],
    opts: [
      "\\( 2x^3 - 6x^2 + C \\)",
      "\\( 4x - 6 + C \\)",
      "\\( \\frac{2x^3}{3} - 3x^2 + C \\)",
      "\\( \\frac{2x^3}{3} - \\frac{3x^2}{2} + C \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q19b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive after expanding brackets first:\n\\( f(x) = (x + 2)(x - 4) \\)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Expand using FOIL to get x^2 - 2x - 8, then integrate.",
    solutionSteps: [
      {
        explanation: "Expand the brackets",
        workingOut: "\\text{Use the FOIL method to expand } (x + 2)(x - 4):\\\\ x^2 - 4x + 2x - 8 = x^2 - 2x - 8"
      },
      {
        explanation: "Integrate term by term",
        workingOut: "\\text{Apply the power rule.}\\\\ \\text{The integral of } x^2 \\text{ is } \\frac{x^3}{3}.\\\\ \\text{The integral of } -2x \\text{ is } -x^2.\\\\ \\text{The integral of } -8 \\text{ is } -8x."
      },
      {
        explanation: "Add the constant of integration",
        workingOut: "\\text{Always add } + C \\text{ for indefinite integrals:}\\\\ \\frac{x^3}{3} - x^2 - 8x + C"
      }
    ],
    opts: [
      "\\( \\frac{x^3}{3} - x^2 - 8x + C \\)",
      "\\( \\frac{x^3}{3} + x^2 - 8x + C \\)",
      "\\( 2x - 2 + C \\)",
      "\\( \\frac{x^3}{3} - x^2 - 8 \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q19c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive after expanding brackets first:\n\\( f(x) = (3x - 2)^2 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Expand the perfect square trinomial to 9x^2 - 12x + 4, then integrate.",
    solutionSteps: [
      {
        explanation: "Expand the perfect square",
        workingOut: "\\text{Use the formula } (a - b)^2 = a^2 - 2ab + b^2 \\text{ to expand } (3x - 2)^2:\\\\ (3x)^2 - 2(3x)(2) + 2^2 = 9x^2 - 12x + 4"
      },
      {
        explanation: "Integrate term by term",
        workingOut: "\\text{Apply the power rule.}\\\\ \\int 9x^2 \\, dx = 9\\left(\\frac{x^3}{3}\\right) = 3x^3\\\\ \\int -12x \\, dx = -12\\left(\\frac{x^2}{2}\\right) = -6x^2\\\\ \\int 4 \\, dx = 4x"
      },
      {
        explanation: "Combine and add constant",
        workingOut: "3x^3 - 6x^2 + 4x + C"
      }
    ],
    opts: [
      "\\( 3x^3 + 4x + C \\)",
      "\\( 3x^3 - 6x^2 + 4x + C \\)",
      "\\( 18x - 12 + C \\)",
      "\\( 9x^3 - 6x^2 + 4x + C \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q20a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = (x+3)^4 \\)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Apply composite linear integration rule with a = 1.",
    solutionSteps: [
      {
        explanation: "Use the composite integration rule",
        workingOut: "\\text{For a linear function to a power } (ax+b)^n \\text{, the integral is } \\frac{(ax+b)^{n+1}}{a(n+1)}."
      },
      {
        explanation: "Apply the rule to the function",
        workingOut: "\\text{Here } a = 1\\text{, } b = 3\\text{, and } n = 4\\text{. Increase the power from 4 to 5, and divide by } 5 \\times 1 = 5.\\\\ \\int (x+3)^4 \\, dx = \\frac{(x+3)^5}{5}"
      },
      {
        explanation: "Add the constant of integration",
        workingOut: "\\text{Always add } + C \\text{ for indefinite integrals:}\\\\ \\frac{(x+3)^5}{5} + C"
      }
    ],
    opts: [
      "\\( 4(x+3)^3 + C \\)",
      "\\( (x+3)^5 + C \\)",
      "\\( \\frac{(x+3)^5}{5} + C \\)",
      "\\( \\frac{(x+3)^4}{5} + C \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q20b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = (x-2)^6 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Apply composite linear integration rule.",
    solutionSteps: [
      {
        explanation: "Integrate composite function",
        workingOut: "\\text{Apply the composite linear integration rule. Increase the power from 6 to 7, and divide by 7(1).}\\\\ \\int (x-2)^6 \\, dx = \\frac{(x-2)^7}{7} + C"
      }
    ],
    opts: [
      "\\( 6(x-2)^5 + C \\)",
      "\\( \\frac{(x-2)^7}{7} + C \\)",
      "\\( (x-2)^7 + C \\)",
      "\\( \\frac{(x-2)^5}{5} + C \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q20c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive of the function:\n\\( f(x) = (3x-1)^4 \\)",
    a: 3,
    t: "Chapter review exercise",
    hint: "The coefficient of x is a = 3. Divide by 3 * 5 = 15.",
    solutionSteps: [
      {
        explanation: "Apply composite linear integration rule",
        workingOut: "\\text{The coefficient of } x \\text{ is } a = 3\\text{. Increase power to 5, and divide by } a \\times n = 3 \\times 5 = 15.\\\\ \\int (3x-1)^4 \\, dx = \\frac{(3x-1)^5}{3 \\times 5} + C"
      },
      {
        explanation: "Simplify denominator",
        workingOut: "\\frac{(3x-1)^5}{15} + C"
      }
    ],
    opts: [
      "\\( 12(3x-1)^3 + C \\)",
      "\\( \\frac{(3x-1)^5}{5} + C \\)",
      "\\( \\frac{(3x-1)^5}{3} + C \\)",
      "\\( \\frac{(3x-1)^5}{15} + C \\)"
    ],
    answer: 3
  },
  {
    id: "y12a-3i-q21a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive after writing as a power of \\( x \\):\n\\( f(x) = \\frac{1}{x^3} \\)",
    a: 0,
    t: "Chapter review exercise",
    hint: "Rewrite as x^(-3) first, then integrate.",
    solutionSteps: [
      {
        explanation: "Rewrite in index form",
        workingOut: "\\text{Before integrating, move } x^3 \\text{ to the numerator using a negative index:}\\\\ f(x) = x^{-3}"
      },
      {
        explanation: "Integrate using power rule",
        workingOut: "\\text{Increase the power by 1 (-3 + 1 = -2), and divide by the new power -2:}\\\\ \\int x^{-3} \\, dx = \\frac{x^{-2}}{-2} + C"
      },
      {
        explanation: "Convert back to positive index",
        workingOut: "-\\frac{1}{2x^2} + C"
      }
    ],
    opts: [
      "\\( -\\frac{1}{2x^2} + C \\)",
      "\\( \\frac{1}{4x^4} + C \\)",
      "\\( -\\frac{3}{x^4} + C \\)",
      "\\( -\\frac{1}{4x^4} + C \\)"
    ],
    answer: 0
  },
  {
    id: "y12a-3i-q21b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the primitive after writing as a power of \\( x \\):\n\\( f(x) = \\sqrt[3]{x} \\)",
    a: 2,
    t: "Chapter review exercise",
    hint: "Rewrite in rational exponent index form x^(1/3).",
    solutionSteps: [
      {
        explanation: "Rewrite in index form",
        workingOut: "\\text{Convert the cube root into a fractional exponent:}\\\\ f(x) = x^{\\frac{1}{3}}"
      },
      {
        explanation: "Integrate using power rule",
        workingOut: "\\text{Increase the power by 1: } \\frac{1}{3} + 1 = \\frac{4}{3}\\text{. Divide by } \\frac{4}{3} \\text{, which is equivalent to multiplying by } \\frac{3}{4}:\\\\ \\int x^{\\frac{1}{3}} \\, dx = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + C = \\frac{3}{4}x^{\\frac{4}{3}} + C"
      }
    ],
    opts: [
      "\\( \\frac{1}{3}x^{-\\frac{2}{3}} + C \\)",
      "\\( \\frac{4}{3}x^{\\frac{4}{3}} + C \\)",
      "\\( \\frac{3}{4}x^{\\frac{4}{3}} + C \\)",
      "\\( \\frac{3}{4}x^{\\frac{1}{3}} + C \\)"
    ],
    answer: 2
  },
  {
    id: "y12a-3i-q22",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "Find the equation of the curve passing through the point \\( (2, 4) \\) with gradient function:\n\\( f'(x) = 3x^2 - 6x + 2 \\)",
    a: 1,
    t: "Chapter review exercise",
    hint: "Integrate gradient function to get family y = x^3 - 3x^2 + 2x + C, then plug in (2, 4).",
    solutionSteps: [
      {
        explanation: "Integrate the derivative to find the curve family",
        workingOut: "\\text{The equation of the curve } y \\text{ is the integral of the gradient function } f'(x):\\\\ y = \\int (3x^2 - 6x + 2) \\, dx = x^3 - 3x^2 + 2x + C"
      },
      {
        explanation: "Substitute coordinates to solve for C",
        workingOut: "\\text{Since the curve passes through } (2, 4)\\text{, substitute } x = 2 \\text{ and } y = 4:\\\\ 4 = (2)^3 - 3(2)^2 + 2(2) + C\\\\ 4 = 8 - 12 + 4 + C \\implies 4 = C"
      },
      {
        explanation: "State final curve equation",
        workingOut: "\\text{Substitute } C = 4 \\text{ back into the original equation:}\\\\ y = x^3 - 3x^2 + 2x + 4"
      }
    ],
    opts: [
      "\\( y = x^3 - 3x^2 + 2x - 4 \\)",
      "\\( y = x^3 - 3x^2 + 2x + 4 \\)",
      "\\( y = x^3 - 3x^2 + 2x \\)",
      "\\( y = 6x - 6 \\)"
    ],
    answer: 1
  },
  {
    id: "y12a-3i-q23",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 240,
    question: "If \\( f'(x) = 6x - 2 \\) and \\( f(2) = 11 \\), find the value of \\( f(3) \\).",
    a: 3,
    t: "Chapter review exercise",
    hint: "Integrate f'(x) to find f(x), solve for C with f(2) = 11, then calculate f(3).",
    solutionSteps: [
      {
        explanation: "Integrate derivative to get function f(x)",
        workingOut: "\\text{Find the primitive of } f'(x):\\\\ f(x) = \\int (6x - 2) \\, dx = 3x^2 - 2x + C"
      },
      {
        explanation: "Substitute x = 2 and f(2) = 11 to solve for C",
        workingOut: "\\text{We are given } f(2) = 11:\\\\ 11 = 3(2)^2 - 2(2) + C\\\\ 11 = 12 - 4 + C \\implies 11 = 8 + C \\implies C = 3"
      },
      {
        explanation: "State complete function f(x)",
        workingOut: "\\text{The full function is } f(x) = 3x^2 - 2x + 3"
      },
      {
        explanation: "Evaluate f(3)",
        workingOut: "\\text{Substitute } x = 3 \\text{ into the complete function:}\\\\ f(3) = 3(3)^2 - 2(3) + 3 = 27 - 6 + 3 = 24"
      }
    ],
    opts: [
      "\\( 16 \\)",
      "\\( 21 \\)",
      "\\( 27 \\)",
      "\\( 24 \\)"
    ],
    answer: 3
  }
];
