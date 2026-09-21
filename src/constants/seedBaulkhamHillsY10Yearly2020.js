export const BAULKHAM_Y10_2020_QUESTIONS = [
  {
    "id": "baulko-y10-2020-q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Which expression is a factorisation of \\(8x^3 - 27\\)?",
    "options": [
      {
        "text": "\\((2x - 3)(4x^2 + 6x + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)(4x^2 - 6x + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x - 3)(4x^2 + 12x + 9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2x + 3)(4x^2 - 12x + 9)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Use the difference of two cubes formula: \\(a^3 - b^3 = (a - b)(a^2 + ab + b^2)\\).",
        "workingOut": "\\[8x^3 - 27 = (2x)^3 - 3^3\\]"
      },
      {
        "explanation": "Substitute \\(a = 2x\\) and \\(b = 3\\).",
        "workingOut": "\\[(2x - 3)((2x)^2 + (2x)(3) + 3^2)\\]\n\\[= (2x - 3)(4x^2 + 6x + 9)\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "factorisation"
    ],
    "topicId": "y10-2a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Which of the following Venn diagrams illustrate \\(A \\cap \\bar{B}\\)?",
    "options": [
      {
        "text": "A",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 65\" width=\"200\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"100\" height=\"65\" fill=\"white\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"3\" y=\"12\" font-size=\"10\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">U</text>\n    \n    <!-- A only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 0 50 47.32 A 20 20 0 0 1 50 12.68 Z\" fill=\"white\"/>\n    <!-- B only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 1 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"white\"/>\n    <!-- Intersection -->\n    <path d=\"M 50 12.68 A 20 20 0 0 0 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    \n    <circle cx=\"40\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    <circle cx=\"60\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    \n    <text x=\"25\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">A</text>\n    <text x=\"70\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">B</text>\n  </svg>"
        }
      },
      {
        "text": "B",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 65\" width=\"200\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"100\" height=\"65\" fill=\"white\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"3\" y=\"12\" font-size=\"10\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">U</text>\n    \n    <!-- A only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 0 50 47.32 A 20 20 0 0 1 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    <!-- B only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 1 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    <!-- Intersection -->\n    <path d=\"M 50 12.68 A 20 20 0 0 0 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    \n    <circle cx=\"40\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    <circle cx=\"60\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    \n    <text x=\"25\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">A</text>\n    <text x=\"70\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">B</text>\n  </svg>"
        }
      },
      {
        "text": "C",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 65\" width=\"200\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"100\" height=\"65\" fill=\"white\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"3\" y=\"12\" font-size=\"10\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">U</text>\n    \n    <!-- A only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 0 50 47.32 A 20 20 0 0 1 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    <!-- B only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 1 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"white\"/>\n    <!-- Intersection -->\n    <path d=\"M 50 12.68 A 20 20 0 0 0 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"white\"/>\n    \n    <circle cx=\"40\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    <circle cx=\"60\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    \n    <text x=\"25\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">A</text>\n    <text x=\"70\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">B</text>\n  </svg>"
        }
      },
      {
        "text": "D",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 65\" width=\"200\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"100\" height=\"65\" fill=\"#e0e0e0\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"3\" y=\"12\" font-size=\"10\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">U</text>\n    \n    <!-- A only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 0 50 47.32 A 20 20 0 0 1 50 12.68 Z\" fill=\"#e0e0e0\"/>\n    <!-- B only -->\n    <path d=\"M 50 12.68 A 20 20 0 1 1 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"white\"/>\n    <!-- Intersection -->\n    <path d=\"M 50 12.68 A 20 20 0 0 0 50 47.32 A 20 20 0 0 0 50 12.68 Z\" fill=\"white\"/>\n    \n    <circle cx=\"40\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    <circle cx=\"60\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    \n    <text x=\"25\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">A</text>\n    <text x=\"70\" y=\"58\" font-size=\"8\" font-family=\"serif\" font-style=\"italic\" fill=\"black\">B</text>\n  </svg>"
        }
      }
    ],
    "answer": "2",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "\\(A \\cap \\bar{B}\\) represents the region that is in \\(A\\) AND NOT in \\(B\\).",
        "workingOut": "This corresponds to the area of circle \\(A\\) excluding the intersection with circle \\(B\\)."
      },
      {
        "explanation": "Looking at the options, C has only the left part of circle \\(A\\) shaded.",
        "workingOut": "Therefore, diagram C illustrates \\(A \\cap \\bar{B}\\)."
      }
    ],
    "tags": [
      "y10",
      "probability",
      "venn-diagrams"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "By using the graph below for \\(y = |2x + 6|\\), what is the solution to \\(|2x + 6| < 2\\)?",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 200 120\" width=\"300\" height=\"180\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <line x1=\"120\" y1=\"10\" x2=\"120\" y2=\"110\" stroke=\"#ccc\" stroke-width=\"1\"/>\n  <text x=\"185\" y=\"94\" font-size=\"10\" font-family=\"serif\">x</text>\n  <text x=\"120\" y=\"8\" font-size=\"10\" font-family=\"serif\" text-anchor=\"middle\">y</text>\n  \n  <line x1=\"45\" y1=\"87\" x2=\"45\" y2=\"93\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"45\" y=\"105\" font-size=\"10\" font-family=\"serif\" text-anchor=\"middle\">-10</text>\n  \n  <line x1=\"82.5\" y1=\"87\" x2=\"82.5\" y2=\"93\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"82.5\" y=\"105\" font-size=\"10\" font-family=\"serif\" text-anchor=\"middle\">-5</text>\n  \n  <line x1=\"117\" y1=\"52.5\" x2=\"123\" y2=\"52.5\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"110\" y=\"56\" font-size=\"10\" font-family=\"serif\" text-anchor=\"end\">5</text>\n  \n  <line x1=\"117\" y1=\"15\" x2=\"123\" y2=\"15\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"110\" y=\"19\" font-size=\"10\" font-family=\"serif\" text-anchor=\"end\">10</text>\n  \n  <!-- Graph y = |2x + 6|. At x=0, y=6. At x=-3, y=0. At x=-10, y=14. -->\n  <!-- Origin is (120, 90). scale is 7.5 px per unit. -->\n  <polyline points=\"45,15 97.5,90 150,15\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <polygon points=\"45,15 48,22 42,22\" fill=\"black\"/>\n  <polygon points=\"150,15 147,22 153,22\" fill=\"black\"/>\n</svg>"
    },
    "options": [
      {
        "text": "\\(x > -4, x > -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < -4, x > -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 > x > -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < -2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "3",
    "solutionSteps": [
      {
        "explanation": "The graph represents \\(y = |2x + 6|\\). We need to find where the \\(y\\)-values are less than 2.",
        "workingOut": "\\[|2x + 6| < 2\\]"
      },
      {
        "explanation": "This inequality implies:",
        "workingOut": "\\[-2 < 2x + 6 < 2\\]"
      },
      {
        "explanation": "Subtract 6 from all parts:",
        "workingOut": "\\[-8 < 2x < -4\\]"
      },
      {
        "explanation": "Divide by 2:",
        "workingOut": "\\[-4 < x < -2\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "absolute-value",
      "inequalities"
    ],
    "topicId": "y10-4f",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The first four terms of a geometric sequence are \\(6000, t_2, 8640, -10368\\).\nWhat is the value of \\(t_2\\)?",
    "options": [
      {
        "text": "\\(-7320\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7320\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "For a geometric sequence, the common ratio \\(r\\) is constant between consecutive terms.",
        "workingOut": "\\[r = \\frac{t_4}{t_3} = \\frac{-10368}{8640}\\]"
      },
      {
        "explanation": "Calculate the common ratio.",
        "workingOut": "\\[r = -1.2\\]"
      },
      {
        "explanation": "Multiply the first term by \\(r\\) to find \\(t_2\\).",
        "workingOut": "\\[t_2 = 6000 \\times (-1.2)\\]\n\\[t_2 = -7200\\]"
      }
    ],
    "tags": [
      "y10",
      "sequences-and-series",
      "geometric-sequence"
    ],
    "topicId": "y10-10b",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Which equation best represents the following graph?",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 240 140\" width=\"300\" height=\"175\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid/Axes -->\n  <line x1=\"20\" y1=\"40\" x2=\"220\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"120\" y1=\"10\" x2=\"120\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  \n  <text x=\"225\" y=\"44\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">x</text>\n  <text x=\"120\" y=\"8\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\" text-anchor=\"middle\">y</text>\n\n  <!-- Tick at x = 4 -->\n  <line x1=\"160\" y1=\"36\" x2=\"160\" y2=\"44\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"58\" font-size=\"12\" font-family=\"serif\" text-anchor=\"middle\">4</text>\n\n  <!-- Solid dot at (4, 0) -->\n  <circle cx=\"160\" cy=\"40\" r=\"2.5\" fill=\"black\"/>\n\n  <!-- Curve -->\n  <path d=\"M 160.00 40.00 L 159.00 43.16 L 158.00 44.47 L 157.00 45.48 L 156.00 46.32 L 155.00 47.07 L 154.00 47.75 L 153.00 48.37 L 152.00 48.94 L 151.00 49.49 L 150.00 50.00 L 149.00 50.49 L 148.00 50.95 L 147.00 51.40 L 146.00 51.83 L 145.00 52.25 L 144.00 52.65 L 143.00 53.04 L 142.00 53.42 L 141.00 53.78 L 140.00 54.14 L 139.00 54.49 L 138.00 54.83 L 137.00 55.17 L 136.00 55.49 L 135.00 55.81 L 134.00 56.12 L 133.00 56.43 L 132.00 56.73 L 131.00 57.03 L 130.00 57.32 L 129.00 57.61 L 128.00 57.89 L 127.00 58.17 L 126.00 58.44 L 125.00 58.71 L 124.00 58.97 L 123.00 59.24 L 122.00 59.49 L 121.00 59.75 L 120.00 60.00 L 119.00 60.25 L 118.00 60.49 L 117.00 60.74 L 116.00 60.98 L 115.00 61.21 L 114.00 61.45 L 113.00 61.68 L 112.00 61.91 L 111.00 62.14 L 110.00 62.36 L 109.00 62.58 L 108.00 62.80 L 107.00 63.02 L 106.00 63.24 L 105.00 63.45 L 104.00 63.66 L 103.00 63.87 L 102.00 64.08 L 101.00 64.29 L 100.00 64.49 L 99.00 64.70 L 98.00 64.90 L 97.00 65.10 L 96.00 65.30 L 95.00 65.50 L 94.00 65.69 L 93.00 65.88 L 92.00 66.08 L 91.00 66.27 L 90.00 66.46 L 89.00 66.65 L 88.00 66.83 L 87.00 67.02 L 86.00 67.20 L 85.00 67.39 L 84.00 67.57 L 83.00 67.75 L 82.00 67.93 L 81.00 68.11 L 80.00 68.28 L 79.00 68.46 L 78.00 68.64 L 77.00 68.81 L 76.00 68.98 L 75.00 69.15 L 74.00 69.33 L 73.00 69.50 L 72.00 69.66 L 71.00 69.83 L 70.00 70.00 L 69.00 70.17 L 68.00 70.33 L 67.00 70.50 L 66.00 70.66 L 65.00 70.82 L 64.00 70.98 L 63.00 71.14 L 62.00 71.30 L 61.00 71.46 L 60.00 71.62\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  \n  <!-- Arrow at the end -->\n  <path d=\"M 60.00 71.62 L 64.67 67.85 L 65.60 73.78 Z\" fill=\"black\"/>\n</svg>"
    },
    "options": [
      {
        "text": "\\(y = -\\sqrt{4 - x}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y = -\\sqrt{x - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\sqrt{y - 4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x = -\\sqrt{4 - y}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "The graph starts at \\(x = 4, y = 0\\) and extends to the left (\\(x \\le 4\\)) and downwards (\\(y \\le 0\\)).",
        "workingOut": "The domain is \\(x \\le 4\\), which implies the expression under the square root must be \\(4 - x\\)."
      },
      {
        "explanation": "The range is \\(y \\le 0\\), which corresponds to the negative square root.",
        "workingOut": "\\[y = -\\sqrt{4 - x}\\]"
      },
      {
        "explanation": "Check the \\(y\\)-intercept at \\(x = 0\\).",
        "workingOut": "\\[y = -\\sqrt{4 - 0} = -2\\]\nThis matches the visual representation on the graph."
      }
    ],
    "tags": [
      "y10",
      "functions",
      "domain-range"
    ],
    "topicId": "y10-20a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A family of 6 is seated randomly around a circular table. In how many ways can the two youngest members sit together?",
    "options": [
      {
        "text": "\\(4!\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4! 2!\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5!\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5! 2!\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Treat the two youngest members as a single combined unit. This leaves 5 units to arrange around the circular table.",
        "workingOut": "Number of units = \\(4\\) (other members) \\(+\\ 1\\) (youngest pair) = \\(5\\)"
      },
      {
        "explanation": "The number of ways to arrange \\(n\\) units in a circle is \\((n - 1)!\\).",
        "workingOut": "Ways to arrange 5 units = \\((5 - 1)! = 4!\\)"
      },
      {
        "explanation": "The two youngest members can swap places with each other within their unit.",
        "workingOut": "Ways to arrange the two youngest = \\(2!\\)"
      },
      {
        "explanation": "Multiply the possibilities together.",
        "workingOut": "Total ways = \\(4! \\times 2!\\)"
      }
    ],
    "tags": [
      "y10",
      "probability",
      "permutations",
      "circular-arrangements"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "What is the coefficient of \\(x^2\\) in the expansion of \\((1 - x)^4\\)?",
    "options": [
      {
        "text": "\\(-1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "3",
    "solutionSteps": [
      {
        "explanation": "Use the binomial theorem to find the general term in the expansion of \\((a + b)^n\\): \\(T_{k+1} = \\binom{n}{k} a^{n-k} b^k\\).",
        "workingOut": "Here, \\(a = 1\\), \\(b = -x\\), and \\(n = 4\\)."
      },
      {
        "explanation": "We want the term with \\(x^2\\), so we set \\(k = 2\\).",
        "workingOut": "\\[T_3 = \\binom{4}{2} (1)^{4-2} (-x)^2\\]"
      },
      {
        "explanation": "Evaluate the binomial coefficient and simplify.",
        "workingOut": "\\[T_3 = 6 \\times 1 \\times x^2\\]\n\\[= 6x^2\\]"
      },
      {
        "explanation": "The coefficient is the constant part of the term.",
        "workingOut": "Coefficient = \\(6\\)"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "binomial-theorem"
    ],
    "topicId": "y10-10b",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q8",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Which of the following best describes the given quadrilateral?",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 150 100\" width=\"200\" height=\"133\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Rhombus with diagonals -->\n  <polygon points=\"75,10 135,50 75,90 15,50\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"15\" y1=\"50\" x2=\"135\" y2=\"50\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"75\" y1=\"10\" x2=\"75\" y2=\"90\" stroke=\"black\" stroke-width=\"1\"/>\n  \n  <!-- Right angle -->\n  <polyline points=\"75,45 80,45 80,50\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  \n  <!-- Hash marks -->\n  <!-- horizontal diagonal -->\n  <line x1=\"43\" y1=\"47\" x2=\"47\" y2=\"53\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"47\" y1=\"47\" x2=\"51\" y2=\"53\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"103\" y1=\"47\" x2=\"107\" y2=\"53\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"107\" y1=\"47\" x2=\"111\" y2=\"53\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- vertical diagonal -->\n  <line x1=\"72\" y1=\"28\" x2=\"78\" y2=\"32\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"72\" y1=\"68\" x2=\"78\" y2=\"72\" stroke=\"black\" stroke-width=\"1.5\"/>\n</svg>"
    },
    "options": [
      {
        "text": "Parallelogram",
        "imageUrl": ""
      },
      {
        "text": "Rhombus",
        "imageUrl": ""
      },
      {
        "text": "Rectangle",
        "imageUrl": ""
      },
      {
        "text": "Square",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Observe the properties marked on the diagonals of the quadrilateral in the diagram.",
        "workingOut": "The tick marks show that the diagonals bisect each other (cut each other in half)."
      },
      {
        "explanation": "A quadrilateral whose diagonals bisect each other is a parallelogram.",
        "workingOut": "Because the diagonals intersect at right angles (\\(90^\\circ\\)), it is a special parallelogram."
      },
      {
        "explanation": "A parallelogram with perpendicular diagonals is a rhombus.",
        "workingOut": "Therefore, the best description is a Rhombus."
      }
    ],
    "tags": [
      "y10",
      "geometry",
      "quadrilaterals"
    ],
    "topicId": "y10-13a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The points \\(A\\), \\(B\\) and \\(P\\) lie on a circle centred at \\(O\\). The tangents to the circle at \\(A\\) and \\(B\\) meet at the point \\(T\\), and \\(\\angle ATB = \\theta\\).\n\nWhat is \\(\\angle APB\\) in terms of \\(\\theta\\)?",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 200 240\" width=\"250\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Circle -->\n  <circle cx=\"120\" cy=\"120\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Center O -->\n  <circle cx=\"120\" cy=\"120\" r=\"2\" fill=\"black\"/>\n  <text x=\"126\" y=\"124\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">O</text>\n  \n  <!-- Tangents from T(20, 120) -->\n  <!-- A=(84, 72), B=(84, 168) -->\n  <line x1=\"20\" y1=\"120\" x2=\"100\" y2=\"60\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"20\" y1=\"120\" x2=\"100\" y2=\"180\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Points T, A, B -->\n  <circle cx=\"20\" cy=\"120\" r=\"2\" fill=\"black\"/>\n  <text x=\"6\" y=\"124\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">T</text>\n  \n  <circle cx=\"84\" cy=\"72\" r=\"2\" fill=\"black\"/>\n  <text x=\"70\" y=\"65\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">A</text>\n  \n  <circle cx=\"84\" cy=\"168\" r=\"2\" fill=\"black\"/>\n  <text x=\"70\" y=\"182\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">B</text>\n  \n  <!-- Angle theta -->\n  <path d=\"M 32 111 A 15 15 0 0 1 32 129\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"38\" y=\"124\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">θ</text>\n  \n  <!-- Point P(172, 90) -->\n  <circle cx=\"172\" cy=\"90\" r=\"2\" fill=\"black\"/>\n  <text x=\"180\" y=\"94\" font-size=\"14\" font-family=\"serif\" font-style=\"italic\">P</text>\n  \n  <!-- Chords PA, PB -->\n  <line x1=\"172\" y1=\"90\" x2=\"84\" y2=\"72\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"172\" y1=\"90\" x2=\"84\" y2=\"168\" stroke=\"black\" stroke-width=\"1.5\"/>\n</svg>"
    },
    "options": [
      {
        "text": "\\(\\frac{\\theta}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(90^\\circ - \\frac{\\theta}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\theta\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(180^\\circ - \\theta\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "The angle between a tangent and the radius drawn to the point of contact is \\(90^\\circ\\).",
        "workingOut": "In quadrilateral \\(OATB\\), \\(\\angle OAT = 90^\\circ\\) and \\(\\angle OBT = 90^\\circ\\)."
      },
      {
        "explanation": "The sum of angles in a quadrilateral is \\(360^\\circ\\).",
        "workingOut": "\\[\\angle AOB + \\angle ATB + 90^\\circ + 90^\\circ = 360^\\circ\\]\n\\[\\angle AOB + \\theta + 180^\\circ = 360^\\circ\\]\n\\[\\angle AOB = 180^\\circ - \\theta\\]"
      },
      {
        "explanation": "The angle subtended by an arc at the centre is double the angle subtended by it at any remaining part of the circle.",
        "workingOut": "\\[\\angle APB = \\frac{1}{2} \\angle AOB\\]"
      },
      {
        "explanation": "Substitute the expression for \\(\\angle AOB\\).",
        "workingOut": "\\[\\angle APB = \\frac{1}{2}(180^\\circ - \\theta)\\]\n\\[= 90^\\circ - \\frac{\\theta}{2}\\]"
      }
    ],
    "tags": [
      "y10",
      "geometry",
      "circle-geometry"
    ],
    "topicId": "y10-13a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Which diagram best represents the graph \\(y = -x(1 - x)^2(x + 1)^3\\)?",
    "options": [
      {
        "text": "A",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 100\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"10\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"black\" stroke-width=\"1\"/>\n    <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"90\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"92\" y=\"53\" font-size=\"8\" font-family=\"serif\">x</text>\n    <text x=\"50\" y=\"8\" font-size=\"8\" font-family=\"serif\" text-anchor=\"middle\">y</text>\n    <text x=\"30\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">-1</text>\n    <text x=\"70\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">1</text>\n    <path d=\"M 30 10 Q 40 90 50 50 T 70 50 T 90 10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  </svg>"
        }
      },
      {
        "text": "B",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 100\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"10\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"black\" stroke-width=\"1\"/>\n    <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"90\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"92\" y=\"53\" font-size=\"8\" font-family=\"serif\">x</text>\n    <text x=\"50\" y=\"8\" font-size=\"8\" font-family=\"serif\" text-anchor=\"middle\">y</text>\n    <text x=\"30\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">-1</text>\n    <text x=\"70\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">1</text>\n    <path d=\"M 30 10 Q 40 80 50 50 T 70 80 T 90 10\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  </svg>"
        }
      },
      {
        "text": "C",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 100\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"10\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"black\" stroke-width=\"1\"/>\n    <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"90\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"92\" y=\"53\" font-size=\"8\" font-family=\"serif\">x</text>\n    <text x=\"50\" y=\"8\" font-size=\"8\" font-family=\"serif\" text-anchor=\"middle\">y</text>\n    <text x=\"30\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">-1</text>\n    <text x=\"70\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">1</text>\n    <path d=\"M 20 90 C 25 50 35 50 40 50 C 45 50 45 50 50 50 C 60 50 65 70 70 50 C 75 30 80 90 80 90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  </svg>"
        }
      },
      {
        "text": "D",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 100 100\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"10\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"black\" stroke-width=\"1\"/>\n    <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"90\" stroke=\"black\" stroke-width=\"1\"/>\n    <text x=\"92\" y=\"53\" font-size=\"8\" font-family=\"serif\">x</text>\n    <text x=\"50\" y=\"8\" font-size=\"8\" font-family=\"serif\" text-anchor=\"middle\">y</text>\n    <text x=\"30\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">-1</text>\n    <text x=\"70\" y=\"58\" font-size=\"6\" font-family=\"serif\" text-anchor=\"middle\">1</text>\n    <path d=\"M 20 90 Q 30 10 50 50 T 80 90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  </svg>"
        }
      }
    ],
    "answer": "2",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Find the roots of the polynomial and their multiplicities.",
        "workingOut": "Roots: \\(x = 0\\) (single), \\(x = 1\\) (double), \\(x = -1\\) (triple)."
      },
      {
        "explanation": "Determine the behaviour of the curve at each root.",
        "workingOut": "At \\(x = 0\\): crosses the axis directly.\nAt \\(x = 1\\): touches the axis and turns (turning point).\nAt \\(x = -1\\): crosses the axis with an inflection (horizontal point of inflection)."
      },
      {
        "explanation": "Determine the leading term to find the end behaviour.",
        "workingOut": "Leading term \\(\\approx (-x)(-x)^2(x)^3 = -x \\cdot x^2 \\cdot x^3 = -x^6\\)."
      },
      {
        "explanation": "Since the leading term has an even power and negative coefficient, both ends of the graph will approach \\(-\\infty\\).",
        "workingOut": "As \\(x \\to \\infty, y \\to -\\infty\\).\nAs \\(x \\to -\\infty, y \\to -\\infty\\)."
      },
      {
        "explanation": "Combining these features:\n- Ends point downwards.\n- Horizontal inflection at \\(x = -1\\).\n- Crosses at \\(x = 0\\).\n- Touches at \\(x = 1\\).",
        "workingOut": "Graph C is the only one that displays all these characteristics correctly."
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "polynomials",
      "graphing"
    ],
    "topicId": "y10-17e",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q11",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Solve \\(|2m + 3| = 9\\).",
    "options": [
      "\\(m = 3, m = -6\\)",
      "\\(m = 3, m = 6\\)",
      "\\(m = -3, m = 6\\)",
      "\\(m = -3, m = -6\\)"
    ],
    "answer": 0,
    "solution": "m = 3, m = -6",
    "solutionSteps": [
      {
        "explanation": "The absolute value equation \\(|x| = a\\) splits into two cases: \\(x = a\\) and \\(x = -a\\).",
        "workingOut": "\\[2m + 3 = 9 \\quad \\text{or} \\quad 2m + 3 = -9\\]"
      },
      {
        "explanation": "Solve the first case.",
        "workingOut": "\\[2m = 6\\]\n\\[m = 3\\]"
      },
      {
        "explanation": "Solve the second case.",
        "workingOut": "\\[2m = -12\\]\n\\[m = -6\\]"
      },
      {
        "explanation": "State the final solutions.",
        "workingOut": "Therefore, \\(m = 3\\) or \\(m = -6\\)."
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "absolute-value",
      "equations"
    ],
    "topicId": "y10-4f",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q12",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find all possible values of \\(x\\) for \\(\\sqrt{3}\\tan x = -1\\) for \\(0^\\circ \\le x \\le 360^\\circ\\).",
    "answer": 0,
    "solution": "x = 150^\\circ, 330^\\circ",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to isolate \\(\\tan x\\).",
        "workingOut": "\\[\\tan x = -\\frac{1}{\\sqrt{3}}\\]"
      },
      {
        "explanation": "Determine the related acute angle (reference angle) in the first quadrant.",
        "workingOut": "\\[\\text{Related angle} = \\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) = 30^\\circ\\]"
      },
      {
        "explanation": "Identify the quadrants where \\(\\tan x\\) is negative (ASTC rule).",
        "workingOut": "Tangent is negative in the 2nd and 4th quadrants."
      },
      {
        "explanation": "Calculate the angles in those quadrants.",
        "workingOut": "2nd Quadrant: \\(x = 180^\\circ - 30^\\circ = 150^\\circ\\)\n4th Quadrant: \\(x = 360^\\circ - 30^\\circ = 330^\\circ\\)"
      },
      {
        "explanation": "State the final solutions.",
        "workingOut": "Therefore, \\(x = 150^\\circ, 330^\\circ\\)."
      }
    ],
    "tags": [
      "y10",
      "trigonometry",
      "trigonometric-equations"
    ],
    "options": [
      "\\(x = 150^\\circ, 330^\\circ\\)",
      "\\(x = 30^\\circ, 210^\\circ\\)",
      "\\(x = 120^\\circ, 300^\\circ\\)",
      "\\(x = 60^\\circ, 240^\\circ\\)"
    ],
    "topicId": "y10-12a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q13",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Simplify:\n\\[\\frac{25^{3n} \\times 5^{n-1}}{5^{2n+1}}\\]",
    "answer": 0,
    "solution": "5^{5n-2}",
    "solutionSteps": [
      {
        "explanation": "Express all terms with a common base of \\(5\\). We know that \\(25 = 5^2\\).",
        "workingOut": "\\[25^{3n} = (5^2)^{3n} = 5^{6n}\\]"
      },
      {
        "explanation": "Substitute this back into the expression.",
        "workingOut": "\\[\\frac{5^{6n} \\times 5^{n-1}}{5^{2n+1}}\\]"
      },
      {
        "explanation": "Use index laws for multiplication in the numerator: \\(a^m \\times a^n = a^{m+n}\\).",
        "workingOut": "\\[\\frac{5^{6n + (n-1)}}{5^{2n+1}}\\]\n\\[= \\frac{5^{7n-1}}{5^{2n+1}}\\]"
      },
      {
        "explanation": "Use index laws for division: \\(\\frac{a^m}{a^n} = a^{m-n}\\).",
        "workingOut": "\\[= 5^{(7n-1) - (2n+1)}\\]\n\\[= 5^{7n - 1 - 2n - 1}\\]\n\\[= 5^{5n-2}\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "indices",
      "exponents"
    ],
    "options": [
      "\\(5^{5n-2}\\)",
      "\\(5^{4n-2}\\)",
      "\\(5^{5n}\\)",
      "\\(5^{4n}\\)"
    ],
    "topicId": "y10-14a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q14",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value(s) of \\(\\theta\\) in the diagram. Give your answer to the nearest degree.",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 200 100\" width=\"300\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"10,90 100,20 180,90\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <text x=\"45\" y=\"50\" font-size=\"12\" font-family=\"serif\">6</text>\n  <text x=\"90\" y=\"98\" font-size=\"12\" font-family=\"serif\">10</text>\n  <text x=\"100\" y=\"40\" font-size=\"12\" font-family=\"serif\">θ</text>\n  \n  <path d=\"M 150 90 A 30 30 0 0 1 157.4 70.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"128\" y=\"86\" font-size=\"12\" font-family=\"serif\">35°</text>\n</svg>"
    },
    "answer": 0,
    "solution": "\\theta = 73^\\circ \\text{ or } \\theta = 107^\\circ",
    "solutionSteps": [
      {
        "explanation": "Use the Sine Rule to find the unknown angle \\(\\theta\\).",
        "workingOut": "\\[\\frac{\\sin \\theta}{10} = \\frac{\\sin 35^\\circ}{6}\\]"
      },
      {
        "explanation": "Solve for \\(\\sin \\theta\\).",
        "workingOut": "\\[\\sin \\theta = \\frac{10 \\sin 35^\\circ}{6}\\]\n\\[\\sin \\theta \\approx 0.95596\\dots\\]"
      },
      {
        "explanation": "Calculate the principal angle.",
        "workingOut": "\\[\\theta = \\sin^{-1}(0.95596\\dots)\\]\n\\[\\theta \\approx 72.93^\\circ\\]\n\\[\\theta \\approx 73^\\circ \\text{ (nearest degree)}\\]"
      },
      {
        "explanation": "Consider the ambiguous case for the sine rule, as \\(\\sin \\theta\\) is positive in both the 1st and 2nd quadrants. The angle \\(\\theta\\) could be obtuse.",
        "workingOut": "Possible obtuse angle = \\(180^\\circ - 73^\\circ = 107^\\circ\\)"
      },
      {
        "explanation": "Check if the obtuse angle forms a valid triangle with the given \\(35^\\circ\\) angle.",
        "workingOut": "\\[107^\\circ + 35^\\circ = 142^\\circ < 180^\\circ\\]\nSo, both angles are possible."
      },
      {
        "explanation": "State the final solutions.",
        "workingOut": "Therefore, \\(\\theta = 73^\\circ\\) or \\(107^\\circ\\)."
      }
    ],
    "tags": [
      "y10",
      "trigonometry",
      "sine-rule",
      "ambiguous-case"
    ],
    "options": [
      "\\(73^\\circ, 107^\\circ\\)",
      "\\(73^\\circ\\)",
      "\\(107^\\circ\\)",
      "\\(73^\\circ, 253^\\circ\\)"
    ],
    "topicId": "y10-12a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q15a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Two marbles are selected at random from a bag containing 4 red and 7 yellow marbles.\n\nWhat is the probability that the two marbles will be of the same colour if the marbles are drawn without replacement?",
    "answer": 0,
    "solution": "\\frac{27}{55}",
    "solutionSteps": [
      {
        "explanation": "Determine the total number of marbles initially.",
        "workingOut": "Total marbles = \\(4\\) (red) \\(+\\ 7\\) (yellow) = \\(11\\)"
      },
      {
        "explanation": "Calculate the probability of drawing two red marbles (\\(RR\\)).",
        "workingOut": "\\[P(RR) = P(R_1) \\times P(R_2 | R_1)\\]\n\\[= \\frac{4}{11} \\times \\frac{3}{10} = \\frac{12}{110}\\]"
      },
      {
        "explanation": "Calculate the probability of drawing two yellow marbles (\\(YY\\)).",
        "workingOut": "\\[P(YY) = P(Y_1) \\times P(Y_2 | Y_1)\\]\n\\[= \\frac{7}{11} \\times \\frac{6}{10} = \\frac{42}{110}\\]"
      },
      {
        "explanation": "Add the probabilities of these mutually exclusive events to find the total probability of drawing two marbles of the same colour.",
        "workingOut": "\\[P(\\text{Same Colour}) = P(RR) + P(YY)\\]\n\\[= \\frac{12}{110} + \\frac{42}{110}\\]\n\\[= \\frac{54}{110}\\]"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "\\[= \\frac{27}{55}\\]"
      }
    ],
    "tags": [
      "y10",
      "probability",
      "tree-diagrams",
      "without-replacement"
    ],
    "options": [
      "\\(\\frac{27}{55}\\)",
      "\\(\\frac{27}{121}\\)",
      "\\(\\frac{28}{55}\\)",
      "\\(\\frac{14}{55}\\)"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q15b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Two marbles are selected at random from a bag containing 4 red and 7 yellow marbles.\n\nWhat is the probability that the two marbles will not be of the same colour if the marbles are drawn without replacement?",
    "answer": 0,
    "solution": "\\frac{28}{55}",
    "solutionSteps": [
      {
        "explanation": "The event of drawing two marbles that are not the same colour is the complement of drawing two marbles of the same colour.",
        "workingOut": "Using the result from the previous question, \\(P(\\text{Same Colour}) = \\frac{27}{55}\\)."
      },
      {
        "explanation": "Use the complement rule: \\(P(\\text{Not Same}) = 1 - P(\\text{Same Colour})\\).",
        "workingOut": "\\[P(\\text{Not Same}) = 1 - \\frac{27}{55}\\]\n\\[= \\frac{55}{55} - \\frac{27}{55}\\]\n\\[= \\frac{28}{55}\\]"
      }
    ],
    "tags": [
      "y10",
      "probability",
      "complementary-events"
    ],
    "options": [
      "\\(\\frac{28}{55}\\)",
      "\\(\\frac{27}{55}\\)",
      "\\(\\frac{28}{121}\\)",
      "\\(\\frac{27}{121}\\)"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q16",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the sum of the first 50 terms of the arithmetic series \\(3 + 7 + 11 + \\dots\\)",
    "answer": 0,
    "solution": "5050",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and the common difference \\(d\\) of the arithmetic series.",
        "workingOut": "\\[a = 3\\]\n\\[d = 7 - 3 = 4\\]"
      },
      {
        "explanation": "Use the arithmetic series sum formula: \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\).",
        "workingOut": "Substitute \\(n = 50\\), \\(a = 3\\), and \\(d = 4\\)."
      },
      {
        "explanation": "Calculate the sum.",
        "workingOut": "\\[S_{50} = \\frac{50}{2}[2(3) + (50-1)(4)]\\]\n\\[= 25[6 + 49(4)]\\]\n\\[= 25[6 + 196]\\]\n\\[= 25 \\times 202\\]\n\\[= 5050\\]"
      }
    ],
    "tags": [
      "y10",
      "sequences-and-series",
      "arithmetic-series"
    ],
    "options": [
      "5050",
      "5000",
      "4950",
      "5150"
    ],
    "topicId": "y10-10b",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q17",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the limiting sum of the geometric series \\(\\frac{3}{4} + \\frac{3}{10} + \\frac{3}{25} + \\dots\\)",
    "answer": 0,
    "solution": "\\frac{5}{4} \\text{ or } 1.25",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and find the common ratio \\(r\\).",
        "workingOut": "\\[a = \\frac{3}{4}\\]\n\\[r = \\frac{3/10}{3/4} = \\frac{3}{10} \\times \\frac{4}{3} = \\frac{4}{10} = \\frac{2}{5}\\]"
      },
      {
        "explanation": "Use the limiting sum formula for a geometric series: \\(S_\\infty = \\frac{a}{1 - r}\\).",
        "workingOut": "Substitute \\(a = \\frac{3}{4}\\) and \\(r = \\frac{2}{5}\\)."
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\[S_\\infty = \\frac{\\frac{3}{4}}{1 - \\frac{2}{5}}\\]\n\\[= \\frac{\\frac{3}{4}}{\\frac{3}{5}}\\]\n\\[= \\frac{3}{4} \\times \\frac{5}{3}\\]\n\\[= \\frac{5}{4} \\quad (\\text{or } 1.25)\\]"
      }
    ],
    "tags": [
      "y10",
      "sequences-and-series",
      "geometric-series",
      "limiting-sum"
    ],
    "options": [
      "\\(\\frac{5}{4}\\)",
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{4}{5}\\)",
      "\\(\\frac{5}{3}\\)"
    ],
    "topicId": "y10-10b",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q18",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Triangle \\(ADE\\) is similar to triangle \\(ABC\\). \\(AE\\) is \\(2\\text{cm}\\) and \\(EC\\) is \\(3\\text{cm}\\). Triangle \\(ADE\\) has an area of \\(16\\text{cm}^2\\). Find the area of the triangle \\(ABC\\).",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 200 150\" width=\"300\" height=\"225\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Triangle ABC -->\n  <polygon points=\"100,20 40,130 160,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Line DE -->\n  <line x1=\"76\" y1=\"64\" x2=\"124\" y2=\"64\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Labels -->\n  <text x=\"96\" y=\"15\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">A</text>\n  <text x=\"25\" y=\"135\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">B</text>\n  <text x=\"165\" y=\"135\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">C</text>\n  <text x=\"60\" y=\"60\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">D</text>\n  <text x=\"130\" y=\"60\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">E</text>\n  \n  <!-- Parallel arrows -->\n  <path d=\"M 96 61 L 104 64 L 96 67\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <path d=\"M 96 127 L 104 130 L 96 133\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Lengths -->\n  <text x=\"120\" y=\"40\" font-size=\"12\" font-family=\"serif\">2cm</text>\n  <text x=\"145\" y=\"100\" font-size=\"12\" font-family=\"serif\">3cm</text>\n</svg>"
    },
    "answer": 0,
    "solution": "100 \\text{ cm}^2",
    "solutionSteps": [
      {
        "explanation": "Find the ratio of corresponding side lengths for the similar triangles \\(ADE\\) and \\(ABC\\).",
        "workingOut": "\\[\\text{Length ratio } = AE : AC\\]\n\\[AC = AE + EC = 2 + 3 = 5\\]\n\\[\\text{Length ratio } = 2 : 5\\]"
      },
      {
        "explanation": "The ratio of the areas of similar figures is the square of the ratio of their corresponding lengths.",
        "workingOut": "\\[\\text{Area ratio } = 2^2 : 5^2 = 4 : 25\\]"
      },
      {
        "explanation": "Set up a proportion to find the area of triangle \\(ABC\\).",
        "workingOut": "\\[\\frac{\\text{Area of } ADE}{\\text{Area of } ABC} = \\frac{4}{25}\\]\n\\[\\frac{16}{\\text{Area of } ABC} = \\frac{4}{25}\\]"
      },
      {
        "explanation": "Solve for the area of triangle \\(ABC\\).",
        "workingOut": "\\[\\text{Area of } ABC = \\frac{16 \\times 25}{4} = 4 \\times 25 = 100\\text{ cm}^2\\]"
      }
    ],
    "tags": [
      "y10",
      "geometry",
      "similar-triangles",
      "area-ratios"
    ],
    "options": [
      "\\(100\\text{ cm}^2\\)",
      "\\(40\\text{ cm}^2\\)",
      "\\(64\\text{ cm}^2\\)",
      "\\(144\\text{ cm}^2\\)"
    ],
    "topicId": "y10-10a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q19a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(\\alpha\\) and \\(\\beta\\) are the roots of the quadratic equation \\(3x^2 - 3x + 1 = 0\\), find the value of:\n\\[\\alpha + \\beta\\]",
    "answer": 0,
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Use the relationship between the roots and coefficients of a quadratic equation \\(ax^2 + bx + c = 0\\).",
        "workingOut": "The sum of the roots is given by \\(\\alpha + \\beta = -\\frac{b}{a}\\)."
      },
      {
        "explanation": "Identify \\(a\\), \\(b\\), and \\(c\\) from the equation \\(3x^2 - 3x + 1 = 0\\).",
        "workingOut": "\\[a = 3, \\quad b = -3, \\quad c = 1\\]"
      },
      {
        "explanation": "Calculate the sum of the roots.",
        "workingOut": "\\[\\alpha + \\beta = -\\frac{-3}{3} = \\frac{3}{3} = 1\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "quadratic-equations",
      "roots-and-coefficients"
    ],
    "options": [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(-\\frac{1}{3}\\)"
    ],
    "topicId": "y10-3c",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q19b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\alpha\\) and \\(\\beta\\) are the roots of the quadratic equation \\(3x^2 - 3x + 1 = 0\\), find the value of:\n\\[\\alpha^2 + \\beta^2\\]",
    "answer": 0,
    "solution": "\\frac{1}{3}",
    "solutionSteps": [
      {
        "explanation": "Recall the sum and product of the roots from the equation \\(3x^2 - 3x + 1 = 0\\).",
        "workingOut": "\\[\\alpha + \\beta = -\\frac{b}{a} = -\\frac{-3}{3} = 1\\]\n\\[\\alpha\\beta = \\frac{c}{a} = \\frac{1}{3}\\]"
      },
      {
        "explanation": "Express \\(\\alpha^2 + \\beta^2\\) in terms of the sum and product of the roots.",
        "workingOut": "\\[\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta\\]"
      },
      {
        "explanation": "Substitute the values and simplify.",
        "workingOut": "\\[= (1)^2 - 2\\left(\\frac{1}{3}\\right)\\]\n\\[= 1 - \\frac{2}{3}\\]\n\\[= \\frac{1}{3}\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "quadratic-equations",
      "roots-and-coefficients"
    ],
    "options": [
      "\\(\\frac{1}{3}\\)",
      "\\(1\\)",
      "\\(-\\frac{1}{3}\\)",
      "\\(\\frac{5}{3}\\)"
    ],
    "topicId": "y10-3c",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q20",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Two secants from the point \\(P\\) intersect a circle as shown in the diagram.\nWhat is the value of \\(x\\)? Give reasons for your answer.",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 250 150\" width=\"300\" height=\"180\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"90\" cy=\"75\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Point P -->\n  <text x=\"225\" y=\"25\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">P</text>\n  \n  <!-- Secants -->\n  <!-- Top secant -->\n  <line x1=\"45\" y1=\"53.5\" x2=\"220\" y2=\"30\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <!-- Bottom secant -->\n  <line x1=\"50\" y1=\"105\" x2=\"220\" y2=\"30\" stroke=\"black\" stroke-width=\"1.5\"/>\n  \n  <!-- Labels -->\n  <text x=\"85\" y=\"38\" font-size=\"12\" font-family=\"serif\">3</text>\n  <text x=\"175\" y=\"35\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">x</text>\n  \n  <text x=\"85\" y=\"98\" font-size=\"12\" font-family=\"serif\">6</text>\n  <text x=\"175\" y=\"80\" font-size=\"12\" font-family=\"serif\">4</text>\n  \n  <!-- NOT TO SCALE text -->\n  <text x=\"180\" y=\"130\" font-size=\"10\" font-family=\"sans-serif\">NOT TO SCALE</text>\n</svg>"
    },
    "answer": 0,
    "solution": "x = 5",
    "solutionSteps": [
      {
        "explanation": "Apply the intersecting secants theorem.",
        "workingOut": "The product of the whole secant segment and its external part is equal for both secants from an external point.\n\\[\\text{External}_1 \\times \\text{Whole}_1 = \\text{External}_2 \\times \\text{Whole}_2\\]"
      },
      {
        "explanation": "Set up the equation using the given lengths.",
        "workingOut": "For the top secant: External = \\(x\\), Whole = \\(x + 3\\).\nFor the bottom secant: External = \\(4\\), Whole = \\(4 + 6 = 10\\).\n\\[x(x + 3) = 4(4 + 6)\\]"
      },
      {
        "explanation": "Expand and rearrange the equation into standard quadratic form.",
        "workingOut": "\\[x^2 + 3x = 4(10)\\]\n\\[x^2 + 3x = 40\\]\n\\[x^2 + 3x - 40 = 0\\]"
      },
      {
        "explanation": "Factorise the quadratic equation.",
        "workingOut": "We need factors of \\(-40\\) that add to \\(3\\): \\(8\\) and \\(-5\\).\n\\[(x + 8)(x - 5) = 0\\]"
      },
      {
        "explanation": "Solve for \\(x\\) and reject any invalid solutions.",
        "workingOut": "\\[x = -8 \\quad \\text{or} \\quad x = 5\\]\nSince length \\(x\\) must be positive (\\(x > 0\\)), we reject \\(-8\\).\n\\[x = 5\\]"
      }
    ],
    "tags": [
      "y10",
      "geometry",
      "circle-geometry",
      "secants"
    ],
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "topicId": "y10-13a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q21a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Show that \\(\\frac{2x - 3}{x + 1} = 2 - \\frac{5}{x + 1}\\).",
    "answer": "Proof",
    "solution": "\\text{Proof provided in steps.}",
    "solutionSteps": [
      {
        "explanation": "Start with the right-hand side (RHS) and express it with a common denominator.",
        "workingOut": "\\[\\text{RHS} = 2 - \\frac{5}{x+1}\\]\n\\[= \\frac{2(x+1)}{x+1} - \\frac{5}{x+1}\\]"
      },
      {
        "explanation": "Combine the fractions.",
        "workingOut": "\\[= \\frac{2x + 2 - 5}{x+1}\\]"
      },
      {
        "explanation": "Simplify the numerator.",
        "workingOut": "\\[= \\frac{2x - 3}{x+1}\\]"
      },
      {
        "explanation": "Conclude the proof.",
        "workingOut": "Since this matches the left-hand side (LHS), the identity is proven.\n\\[= \\text{LHS}\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "algebraic-fractions",
      "proof"
    ],
    "topicId": "y10-2a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q21b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence, or otherwise, sketch \\(y = \\frac{2x - 3}{x + 1}\\). Show all intercepts and asymptotes.",
    "solution": "Model graph provided.",
    "solutionSteps": [
      {
        "explanation": "Identify the vertical asymptote by setting the denominator to zero.",
        "workingOut": "\\[x + 1 = 0 \\implies x = -1\\]\nVertical asymptote: \\(x = -1\\)"
      },
      {
        "explanation": "Identify the horizontal asymptote from the form \\(y = 2 - \\frac{5}{x+1}\\). As \\(x \\to \\pm\\infty\\), the fraction approaches 0.",
        "workingOut": "Horizontal asymptote: \\(y = 2\\)"
      },
      {
        "explanation": "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        "workingOut": "\\[y = \\frac{2(0) - 3}{0 + 1} = -3\\]\n\\(y\\)-intercept is at \\((0, -3)\\)."
      },
      {
        "explanation": "Find the \\(x\\)-intercept by setting \\(y = 0\\).",
        "workingOut": "\\[\\frac{2x - 3}{x + 1} = 0\\]\n\\[2x - 3 = 0 \\implies x = \\frac{3}{2}\\]\n\\(x\\)-intercept is at \\((\\frac{3}{2}, 0)\\)."
      },
      {
        "explanation": "Sketch the hyperbola showing the asymptotes and intercepts.",
        "workingOut": "See the model graph.",
        "graphData": {
          "type": "svg",
          "svg": "<svg viewBox=\"0 0 200 200\" width=\"300\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- axes -->\n  <line x1=\"10\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"185\" y=\"115\" font-size=\"12\" font-family=\"serif\">x</text>\n  <text x=\"85\" y=\"15\" font-size=\"12\" font-family=\"serif\">y</text>\n  \n  <!-- asymptotes -->\n  <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"190\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <text x=\"45\" y=\"185\" font-size=\"10\" fill=\"#ef4444\">x = -1</text>\n  \n  <line x1=\"10\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <text x=\"15\" y=\"55\" font-size=\"10\" fill=\"#ef4444\">y = 2</text>\n  \n  <!-- intercepts -->\n  <text x=\"135\" y=\"95\" font-size=\"10\">3/2</text>\n  <circle cx=\"130\" cy=\"100\" r=\"2\" fill=\"black\"/>\n  \n  <text x=\"105\" y=\"165\" font-size=\"10\">-3</text>\n  <circle cx=\"100\" cy=\"160\" r=\"2\" fill=\"black\"/>\n  \n  <!-- Curve branches -->\n  <path d=\"M 10.0 31.4 L 11.0 31.0 L 12.0 30.6 L 13.0 30.1 L 14.0 29.7 L 15.0 29.2 L 16.0 28.8 L 17.0 28.3 L 18.0 27.7 L 19.0 27.2 L 20.0 26.7 L 21.0 26.1 L 22.0 25.5 L 23.0 24.9 L 24.0 24.3 L 25.0 23.6 L 26.0 23.0 L 27.0 22.3 L 28.0 21.5 L 29.0 20.8 L 30.0 20.0 L 31.0 19.2 L 32.0 18.3 L 33.0 17.4 L 34.0 16.5 L 35.0 15.6 L 36.0 14.5 L 37.0 13.5 L 38.0 12.4 L 39.0 11.2 L 40.0 10.0 L 41.0 8.7 L 42.0 7.4 L 43.0 5.9 L 44.0 4.4 L 45.0 2.9 L 46.0 1.2 \" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M 95.0 193.3 L 96.0 185.0 L 97.0 177.6 L 98.0 171.1 L 99.0 165.3 L 100.0 160.0 L 101.0 155.2 L 102.0 150.9 L 103.0 147.0 L 104.0 143.3 L 105.0 140.0 L 106.0 136.9 L 107.0 134.1 L 108.0 131.4 L 109.0 129.0 L 110.0 126.7 L 111.0 124.5 L 112.0 122.5 L 113.0 120.6 L 114.0 118.8 L 115.0 117.1 L 116.0 115.6 L 117.0 114.1 L 118.0 112.6 L 119.0 111.3 L 120.0 110.0 L 121.0 108.8 L 122.0 107.6 L 123.0 106.5 L 124.0 105.5 L 125.0 104.4 L 126.0 103.5 L 127.0 102.6 L 128.0 101.7 L 129.0 100.8 L 130.0 100.0 L 131.0 99.2 L 132.0 98.5 L 133.0 97.7 L 134.0 97.0 L 135.0 96.4 L 136.0 95.7 L 137.0 95.1 L 138.0 94.5 L 139.0 93.9 L 140.0 93.3 L 141.0 92.8 L 142.0 92.3 L 143.0 91.7 L 144.0 91.3 L 145.0 90.8 L 146.0 90.3 L 147.0 89.9 L 148.0 89.4 L 149.0 89.0 L 150.0 88.6 L 151.0 88.2 L 152.0 87.8 L 153.0 87.4 L 154.0 87.0 L 155.0 86.7 L 156.0 86.3 L 157.0 86.0 L 158.0 85.6 L 159.0 85.3 L 160.0 85.0 L 161.0 84.7 L 162.0 84.4 L 163.0 84.1 L 164.0 83.8 L 165.0 83.5 L 166.0 83.3 L 167.0 83.0 L 168.0 82.7 L 169.0 82.5 L 170.0 82.2 L 171.0 82.0 L 172.0 81.7 L 173.0 81.5 L 174.0 81.3 L 175.0 81.1 L 176.0 80.8 L 177.0 80.6 L 178.0 80.4 L 179.0 80.2 L 180.0 80.0 L 181.0 79.8 L 182.0 79.6 L 183.0 79.4 L 184.0 79.2 L 185.0 79.0 L 186.0 78.9 L 187.0 78.7 L 188.0 78.5 L 189.0 78.3 L 190.0 78.2 \" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
        }
      }
    ],
    "tags": [
      "y10",
      "functions",
      "hyperbola",
      "graphing",
      "asymptotes"
    ],
    "topicId": "y10-20a",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q22",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve \\(x^3 + 2x^2 - 5x - 6 = 0\\).",
    "answer": 0,
    "solution": "-3, -1, 2",
    "solutionSteps": [
      {
        "explanation": "Use the Factor Theorem to find the first root. Test factors of the constant term (-6).",
        "workingOut": "Try \\(x = 1\\): \\(1^3 + 2(1)^2 - 5(1) - 6 = 1 + 2 - 5 - 6 = -8 \\ne 0\\)\nTry \\(x = -1\\): \\((-1)^3 + 2(-1)^2 - 5(-1) - 6 = -1 + 2 + 5 - 6 = 0\\)"
      },
      {
        "explanation": "Since \\(x = -1\\) is a root, \\((x + 1)\\) is a factor. Perform polynomial division to find the remaining quadratic factor.",
        "workingOut": "\\[\\frac{x^3 + 2x^2 - 5x - 6}{x + 1} = x^2 + x - 6\\]"
      },
      {
        "explanation": "Factorise the resulting quadratic equation: \\(x^2 + x - 6 = 0\\).",
        "workingOut": "We need factors of -6 that add to 1: 3 and -2.\n\\[(x + 3)(x - 2) = 0\\]"
      },
      {
        "explanation": "State the fully factorised polynomial and solve for \\(x\\).",
        "workingOut": "\\[(x + 1)(x + 3)(x - 2) = 0\\]\n\\[x = -1, \\quad x = -3, \\quad x = 2\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "polynomials",
      "factor-theorem"
    ],
    "options": [
      "\\(x = -3, x = -1, x = 2\\)",
      "\\(x = -3, x = 1, x = 2\\)",
      "\\(x = -2, x = -1, x = 3\\)",
      "\\(x = -2, x = 1, x = 3\\)"
    ],
    "topicId": "y10-17e",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q23abcde",
    "type": "multipart",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In the following diagram, \\(ABCD\\) is a quadrilateral. The equation of the line \\(AD\\) is \\(2x - y - 1 = 0\\).",
    "graphData": {
      "type": "svg",
      "svg": "<svg viewBox=\"0 0 200 200\" width=\"250\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"30\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <line x1=\"70\" y1=\"20\" x2=\"70\" y2=\"180\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"175\" y=\"155\" font-size=\"12\" font-family=\"serif\">x</text>\n  <text x=\"55\" y=\"30\" font-size=\"12\" font-family=\"serif\">y</text>\n  \n  <polygon points=\"70,160 70,80 90,40 130,40\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"70\" y1=\"160\" x2=\"130\" y2=\"40\" stroke=\"black\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"140\" y2=\"20\" stroke=\"black\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  \n  <text x=\"25\" y=\"175\" font-size=\"12\" font-family=\"serif\">A(0, -1)</text>\n  <text x=\"25\" y=\"85\" font-size=\"12\" font-family=\"serif\">B(0, 3)</text>\n  <text x=\"75\" y=\"35\" font-size=\"12\" font-family=\"serif\">C(1, 5)</text>\n  <text x=\"135\" y=\"35\" font-size=\"12\" font-family=\"serif\" font-style=\"italic\">D</text>\n  \n  <text x=\"115\" y=\"110\" font-size=\"10\" transform=\"rotate(-63, 115, 110)\">2x - y - 1 = 0</text>\n  \n  <path d=\"M 105 40 L 110 37 L 110 43 Z\" fill=\"black\"/>\n  <path d=\"M 85 105 L 90 100 L 92 108 Z\" fill=\"black\" transform=\"rotate(-63, 85, 105)\"/>\n</svg>"
    },
    "solution": "Refer to solution steps.",
    "solutionSteps": [],
    "tags": [
      "y10",
      "coordinate-geometry",
      "trapezium",
      "perpendicular-distance",
      "area"
    ],
    "subQuestions": [
      {
        "id": "baulko-y10-2020-q23a",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Which of the following correctly proves that \\(ABCD\\) is a trapezium?",
        "options": [
          "The gradient of \\(BC\\) is 2 and the gradient of \\(AD\\) is 2. Since they are equal, the lines are parallel.",
          "The gradient of \\(BC\\) is -2 and the gradient of \\(AD\\) is -2. Since they are equal, the lines are parallel.",
          "The gradient of \\(AB\\) is 3 and the gradient of \\(CD\\) is 3. Since they are equal, the lines are parallel.",
          "The gradient of \\(BC\\) is 1/2 and the gradient of \\(AD\\) is 1/2. Since they are equal, the lines are parallel."
        ],
        "answer": 0,
        "solutionSteps": [
          {
            "explanation": "Find the gradient of line \\(BC\\) using coordinates \\(B(0, 3)\\) and \\(C(1, 5)\\).",
            "workingOut": "\\[m_{BC} = \\frac{5 - 3}{1 - 0} = \\frac{2}{1} = 2\\]"
          },
          {
            "explanation": "Find the gradient of line \\(AD\\) from its equation \\(2x - y - 1 = 0\\).",
            "workingOut": "\\[y = 2x - 1\\]\n\\[m_{AD} = 2\\]\nSince \\(m_{BC} = m_{AD}\\), the lines \\(BC\\) and \\(AD\\) are parallel. A quadrilateral with one pair of parallel sides is a trapezium."
          }
        ]
      },
      {
        "id": "baulko-y10-2020-q23b",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 60,
        "question": "The line \\(CD\\) is parallel to the \\(x\\)-axis. Find the coordinates of \\(D\\).",
        "options": [
          "\\((3, 5)\\)",
          "\\((2, 5)\\)",
          "\\((4, 5)\\)",
          "\\((3, 4)\\)"
        ],
        "answer": 0,
        "solutionSteps": [
          {
            "explanation": "Since \\(CD\\) is parallel to the \\(x\\)-axis, \\(D\\) shares the same \\(y\\)-coordinate as \\(C(1, 5)\\).",
            "workingOut": "\\(y\\)-coordinate of \\(D = 5\\)"
          },
          {
            "explanation": "Substitute \\(y = 5\\) into the equation for line \\(AD\\) to find the \\(x\\)-coordinate.",
            "workingOut": "\\[2x - (5) - 1 = 0\\]\n\\[2x - 6 = 0 \\implies x = 3\\]\nCoordinates of \\(D\\) are \\((3, 5)\\)."
          }
        ]
      },
      {
        "id": "baulko-y10-2020-q23c",
        "type": "multiple_choice",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the exact length of \\(BC\\).",
        "options": [
          "\\(\\sqrt{5}\\)",
          "\\(5\\)",
          "\\(2\\sqrt{5}\\)",
          "\\(\\sqrt{10}\\)"
        ],
        "answer": 0,
        "solutionSteps": [
          {
            "explanation": "Calculate the length of \\(BC\\) using the distance formula.",
            "workingOut": "\\[d_{BC} = \\sqrt{(1 - 0)^2 + (5 - 3)^2}\\]\n\\[= \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}\\text{ units}\\]"
          }
        ]
      },
      {
        "id": "baulko-y10-2020-q23d",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the perpendicular distance from \\(B\\) to \\(AD\\).",
        "options": [
          "\\(\\frac{4}{\\sqrt{5}}\\)",
          "\\(\\frac{2}{\\sqrt{5}}\\)",
          "\\(\\frac{5}{\\sqrt{5}}\\)",
          "\\(\\frac{3}{\\sqrt{5}}\\)"
        ],
        "answer": 0,
        "solutionSteps": [
          {
            "explanation": "Use the perpendicular distance formula from a point \\((x_1, y_1)\\) to a line \\(Ax + By + C = 0\\). Point \\(B\\) is \\((0, 3)\\) and line \\(AD\\) is \\(2x - y - 1 = 0\\).",
            "workingOut": "\\[d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}\\]\n\\[= \\frac{|2(0) - 1(3) - 1|}{\\sqrt{2^2 + (-1)^2}}\\]\n\\[= \\frac{|-3 - 1|}{\\sqrt{4 + 1}} = \\frac{|-4|}{\\sqrt{5}} = \\frac{4}{\\sqrt{5}}\\]"
          }
        ]
      },
      {
        "id": "baulko-y10-2020-q23e",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the area of the trapezium \\(ABCD\\).",
        "options": [
          "\\(8\\text{ square units}\\)",
          "\\(10\\text{ square units}\\)",
          "\\(6\\text{ square units}\\)",
          "\\(12\\text{ square units}\\)"
        ],
        "answer": 0,
        "solutionSteps": [
          {
            "explanation": "Calculate the length of the parallel side \\(AD\\) using points \\(A(0, -1)\\) and \\(D(3, 5)\\).",
            "workingOut": "\\[d_{AD} = \\sqrt{(3 - 0)^2 + (5 - (-1))^2}\\]\n\\[= \\sqrt{3^2 + 6^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}\\]"
          },
          {
            "explanation": "Calculate the area of the trapezium using Area = \\(\\frac{h}{2}(a + b)\\), where \\(h\\) is the perpendicular distance between parallel sides.",
            "workingOut": "\\[\\text{Area} = \\frac{1}{2} \\times \\frac{4}{\\sqrt{5}} \\times (\\sqrt{5} + 3\\sqrt{5})\\]\n\\[= \\frac{2}{\\sqrt{5}} \\times 4\\sqrt{5}\\]\n\\[= 8\\text{ square units}\\]"
          }
        ]
      }
    ],
    "topicId": "y10-8b",
    "examPaper": "baulko-y10-2020"
  },
  {
    "id": "baulko-y10-2020-q24a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Reuben needs to arrange 4 English books, 3 History books and 2 Geography books on a shelf.\n\nHow many arrangements are there if there are no restrictions?",
    "answer": 0,
    "solution": "362,880",
    "solutionSteps": [
      {
        "explanation": "Find the total number of books to be arranged.",
        "workingOut": "Total books = 4 (English) + 3 (History) + 2 (Geography) = 9 books."
      },
      {
        "explanation": "Calculate the total number of unconstrained linear arrangements.",
        "workingOut": "Number of arrangements = \\(9!\\)\n\\[9! = 362,880\\]"
      }
    ],
    "tags": [
      "y10",
      "probability",
      "permutations",
      "arrangements"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020",
    "options": [
      "362,880",
      "40,320",
      "3,024",
      "1728"
    ]
  },
  {
    "id": "baulko-y10-2020-q24b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Reuben needs to arrange 4 English books, 3 History books and 2 Geography books on a shelf.\n\nHow many arrangements are there if the books of each subject are kept together?",
    "answer": 0,
    "solution": "1728",
    "solutionSteps": [
      {
        "explanation": "Treat each subject's group of books as a single unit. There are 3 subjects (English, History, Geography).",
        "workingOut": "Number of ways to arrange the 3 subject groups = \\(3!\\)"
      },
      {
        "explanation": "Calculate the number of ways to arrange the books within each subject's group.",
        "workingOut": "English books = \\(4!\\) ways\nHistory books = \\(3!\\) ways\nGeography books = \\(2!\\) ways"
      },
      {
        "explanation": "Multiply all the possibilities together.",
        "workingOut": "Total arrangements = \\(3! \\times 4! \\times 3! \\times 2!\\)\n\\[= 6 \\times 24 \\times 6 \\times 2\\]\n\\[= 1728\\]"
      }
    ],
    "tags": [
      "y10",
      "probability",
      "permutations",
      "arrangements"
    ],
    "topicId": "y10-15a",
    "examPaper": "baulko-y10-2020",
    "options": [
      "1728",
      "24",
      "144",
      "362,880"
    ]
  },
  {
    "id": "baulko-y10-2020-q25",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve \\(2^{2x+1} - 5(2^x) + 2 = 0\\).",
    "answer": 0,
    "solution": "x = 1 \\text{ or } x = -1",
    "solutionSteps": [
      {
        "explanation": "Use index laws to rewrite \\(2^{2x+1}\\).",
        "workingOut": "\\[2^{2x+1} = 2^{2x} \\cdot 2^1 = 2(2^x)^2\\]"
      },
      {
        "explanation": "Substitute into the original equation.",
        "workingOut": "\\[2(2^x)^2 - 5(2^x) + 2 = 0\\]"
      },
      {
        "explanation": "Use substitution. Let \\(u = 2^x\\) to form a quadratic equation.",
        "workingOut": "\\[2u^2 - 5u + 2 = 0\\]"
      },
      {
        "explanation": "Factorise the quadratic equation.",
        "workingOut": "We need factors of \\(4\\) (since \\(2 \\times 2 = 4\\)) that add to \\(-5\\): \\(-4\\) and \\(-1\\).\n\\[2u^2 - 4u - u + 2 = 0\\]\n\\[2u(u - 2) - 1(u - 2) = 0\\]\n\\[(2u - 1)(u - 2) = 0\\]"
      },
      {
        "explanation": "Solve for \\(u\\).",
        "workingOut": "\\[u = \\frac{1}{2} \\quad \\text{or} \\quad u = 2\\]"
      },
      {
        "explanation": "Substitute back \\(u = 2^x\\) to find \\(x\\).",
        "workingOut": "Case 1: \\(2^x = \\frac{1}{2} = 2^{-1} \\implies x = -1\\)\nCase 2: \\(2^x = 2 = 2^1 \\implies x = 1\\)"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "exponentials",
      "reducible-to-quadratic"
    ],
    "topicId": "y10-2a",
    "examPaper": "baulko-y10-2020",
    "options": [
      "\\(x = -1, x = 1\\)",
      "\\(x = -2, x = 2\\)",
      "\\(x = 0, x = 1\\)",
      "\\(x = -1, x = 2\\)"
    ]
  },
  {
    "id": "baulko-y10-2020-q26",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "State the range of the relation \\(x = 2 - \\sqrt{-y^2 + 4y}\\).",
    "answer": 0,
    "solution": "0 \\le y \\le 4",
    "solutionSteps": [
      {
        "explanation": "The range of a relation is the set of all possible \\(y\\)-values.",
        "workingOut": "For the expression \\(\\sqrt{-y^2 + 4y}\\) to be defined, the term inside the square root must be non-negative."
      },
      {
        "explanation": "Set up the inequality.",
        "workingOut": "\\[-y^2 + 4y \\ge 0\\]"
      },
      {
        "explanation": "Solve the quadratic inequality by first factoring it.",
        "workingOut": "Multiply by -1 and flip the inequality sign:\n\\[y^2 - 4y \\le 0\\]\n\\[y(y - 4) \\le 0\\]"
      },
      {
        "explanation": "Find the roots and determine the interval.",
        "workingOut": "The roots are \\(y = 0\\) and \\(y = 4\\).\nThe inequality \\(y(y - 4) \\le 0\\) holds for values between the roots."
      },
      {
        "explanation": "State the final range.",
        "workingOut": "\\[0 \\le y \\le 4\\]"
      }
    ],
    "tags": [
      "y10",
      "functions",
      "domain-range",
      "relations"
    ],
    "topicId": "y10-20a",
    "examPaper": "baulko-y10-2020",
    "options": [
      "\\(0 \\le y \\le 4\\)",
      "\\(y \\le 0 \\text{ or } y \\ge 4\\)",
      "\\(0 < y < 4\\)",
      "\\(-4 \\le y \\le 0\\)"
    ]
  },
  {
    "id": "baulko-y10-2020-q27",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A sum of $9500 is invested at the beginning of each year in a superannuation fund. If interest is paid at \\(6\\%\\) p.a., how much money will be available at the end of 40 years?",
    "answer": 0,
    "solution": "\\$1558452.99",
    "solutionSteps": [
      {
        "explanation": "Set up the expression for the value of each investment at the end of 40 years.",
        "workingOut": "Let \\(A_n\\) be the amount at the end of \\(n\\) years.\nInterest rate \\(r = 1.06\\).\nThe first deposit earns interest for 40 years: \\(9500 \\times 1.06^{40}\\).\nThe second deposit earns interest for 39 years: \\(9500 \\times 1.06^{39}\\).\n...\nThe final deposit earns interest for 1 year: \\(9500 \\times 1.06^1\\)."
      },
      {
        "explanation": "Write the total amount as a geometric series.",
        "workingOut": "\\[A_{40} = 9500(1.06^1 + 1.06^2 + \\dots + 1.06^{40})\\]"
      },
      {
        "explanation": "Identify the parameters of the geometric series inside the brackets.",
        "workingOut": "First term \\(a = 1.06\\)\nCommon ratio \\(r = 1.06\\)\nNumber of terms \\(n = 40\\)"
      },
      {
        "explanation": "Apply the sum of a geometric series formula: \\(S_n = \\frac{a(r^n - 1)}{r - 1}\\).",
        "workingOut": "\\[S_{40} = \\frac{1.06(1.06^{40} - 1)}{1.06 - 1} = \\frac{1.06(1.06^{40} - 1)}{0.06}\\]"
      },
      {
        "explanation": "Calculate the total amount.",
        "workingOut": "\\[A_{40} = 9500 \\times \\frac{1.06(1.06^{40} - 1)}{0.06}\\]\n\\[A_{40} \\approx 1558452.994\\]"
      },
      {
        "explanation": "Round to the nearest cent.",
        "workingOut": "Total = \\$1,558,452.99"
      }
    ],
    "tags": [
      "y10",
      "sequences-and-series",
      "financial-mathematics",
      "superannuation"
    ],
    "topicId": "y10-10b",
    "examPaper": "baulko-y10-2020",
    "options": [
      "\\,558,452.99",
      "\\,470,238.67",
      "\\,651,960.17",
      "\\,000.00"
    ]
  },
  {
    "id": "baulko-y10-2020-q28a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(P(x) = (x+2)(x-1)Q(x) + a(x+2) + b\\), where \\(Q(x)\\) is a polynomial and \\(a\\) and \\(b\\) are real numbers.\nWhen \\(P(x)\\) is divided by \\((x+2)\\) the remainder is \\(-11\\).\nWhen \\(P(x)\\) is divided by \\((x-1)\\) the remainder is \\(1\\).\n\nWhat is the value of \\(b\\)?",
    "answer": 0,
    "solution": "-11",
    "solutionSteps": [
      {
        "explanation": "Use the Remainder Theorem: if \\(P(x)\\) is divided by \\((x - c)\\), the remainder is \\(P(c)\\).",
        "workingOut": "When divided by \\((x + 2)\\), the remainder is \\(-11\\), so \\(P(-2) = -11\\)."
      },
      {
        "explanation": "Substitute \\(x = -2\\) into the expression for \\(P(x)\\).",
        "workingOut": "\\[P(-2) = (-2 + 2)(-2 - 1)Q(-2) + a(-2 + 2) + b\\]\n\\[P(-2) = (0) + a(0) + b\\]"
      },
      {
        "explanation": "Solve for \\(b\\).",
        "workingOut": "\\[b = -11\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "polynomials",
      "remainder-theorem"
    ],
    "topicId": "y10-17e",
    "examPaper": "baulko-y10-2020",
    "options": [
      "\\(-11\\)",
      "\\(1\\)",
      "\\(12\\)",
      "\\(-10\\)"
    ]
  },
  {
    "id": "baulko-y10-2020-q28b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Let \\(P(x) = (x+2)(x-1)Q(x) + a(x+2) + b\\), where \\(Q(x)\\) is a polynomial and \\(a\\) and \\(b\\) are real numbers.\nWhen \\(P(x)\\) is divided by \\((x+2)\\) the remainder is \\(-11\\).\nWhen \\(P(x)\\) is divided by \\((x-1)\\) the remainder is \\(1\\).\n\nWhat is the remainder when \\(P(x)\\) is divided by \\((x+2)(x-1)\\)?",
    "answer": 0,
    "solution": "4x - 3",
    "solutionSteps": [
      {
        "explanation": "Use the Remainder Theorem for the second condition.",
        "workingOut": "When divided by \\((x - 1)\\), the remainder is \\(1\\), so \\(P(1) = 1\\)."
      },
      {
        "explanation": "Substitute \\(x = 1\\) into the expression for \\(P(x)\\).",
        "workingOut": "\\[P(1) = (1 + 2)(1 - 1)Q(1) + a(1 + 2) + b\\]\n\\[P(1) = 0 + 3a + b\\]\n\\[3a + b = 1\\]"
      },
      {
        "explanation": "Substitute the value of \\(b\\) from the previous part (\\(b = -11\\)) to find \\(a\\).",
        "workingOut": "\\[3a - 11 = 1\\]\n\\[3a = 12 \\implies a = 4\\]"
      },
      {
        "explanation": "Identify the remainder expression when dividing by \\((x+2)(x-1)\\).",
        "workingOut": "The given form is \\(P(x) = \\text{Divisor} \\times \\text{Quotient} + \\text{Remainder}\\).\nHere, Divisor = \\((x+2)(x-1)\\), Quotient = \\(Q(x)\\), and Remainder = \\(a(x+2) + b\\)."
      },
      {
        "explanation": "Substitute the values of \\(a\\) and \\(b\\) into the remainder expression.",
        "workingOut": "\\[\\text{Remainder} = 4(x + 2) - 11\\]\n\\[= 4x + 8 - 11\\]\n\\[= 4x - 3\\]"
      }
    ],
    "tags": [
      "y10",
      "algebra",
      "polynomials",
      "remainder-theorem"
    ],
    "topicId": "y10-17e",
    "examPaper": "baulko-y10-2020",
    "options": [
      "\\(4x - 3\\)",
      "\\(4x + 3\\)",
      "\\(-4x - 3\\)",
      "\\(3x - 4\\)"
    ]
  }
];
