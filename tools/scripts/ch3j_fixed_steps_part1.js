#!/usr/bin/env node
/**
 * Complete rewrite of solutionSteps for ALL Y10 Ch3J questions.
 * Each question gets mathematically accurate, specific intermediate steps.
 */

export const Y10_CH3J_QUESTIONS = [
  // ─────────────────────────────────────────────
  // Q1: SIMPLIFY
  // ─────────────────────────────────────────────
  {
    "id": "y10-3j-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Simplify: \\\\(4a^2 - 5b + 2a^2 + 6b\\\\)",
    "opts": [
      "\\\\(6a^2 + b\\\\)",
      "\\\\(6a^2 - b\\\\)",
      "\\\\(7a^3 + b\\\\)",
      "\\\\(5a^1 + b\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Identify the like terms. Terms with \\\\(a^2\\\\) can be grouped together, and terms with \\\\(b\\\\) can be grouped together. Like terms share the same variable and exponent.",
        "workingOut": "\\\\(\\underbrace{4a^2 + 2a^2}_{a^2\\text{ terms}} + \\underbrace{(-5b + 6b)}_{b\\text{ terms}}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Add the coefficients of the \\\\(a^2\\\\) terms: \\\\(4 + 2 = 6\\\\), giving \\\\(6a^2\\\\). Add the coefficients of the \\\\(b\\\\) terms: \\\\(-5 + 6 = 1\\\\), giving \\\\(b\\\\).",
        "workingOut": "\\\\(6a^2 + b\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(6a^2 + b\\\\). There are no more like terms to combine.",
        "workingOut": "\\\\(6a^2 + b\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Simplify: \\\\(4x \\times 2y - 3x^2 - 5xy + 2x \\times 4x\\\\)",
    "opts": [
      "\\\\(5x^2 - 3xy\\\\)",
      "\\\\(6x^3 + 4xy\\\\)",
      "\\\\(5x^2 + 3xy\\\\)",
      "\\\\(4x^1 + 2xy\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "First, evaluate the multiplication terms: \\\\(4x \\times 2y = 8xy\\\\) and \\\\(2x \\times 4x = 8x^2\\\\). Rewrite the expression using these results.",
        "workingOut": "\\\\(8xy - 3x^2 - 5xy + 8x^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Group like terms together: \\\\(x^2\\\\) terms are \\\\(-3x^2 + 8x^2\\\\) and \\\\(xy\\\\) terms are \\\\(8xy - 5xy\\\\).",
        "workingOut": "\\\\((-3x^2 + 8x^2) + (8xy - 5xy) = 5x^2 + 3xy\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(5x^2 + 3xy\\\\).",
        "workingOut": "\\\\(5x^2 + 3xy\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Simplify: \\\\(\\\\frac{6x^2y^3}{3xy} + 4x^2 - \\\\frac{8x^3y^2}{2x^2y^2} + 2xy^2\\\\)",
    "opts": [
      "\\\\(4xy^2 - 4x^2 + 4x\\\\)",
      "\\\\(3xy^1 + 3x^1 - 3x\\\\)",
      "\\\\(5xy^3 + 5x^3 - 5x\\\\)",
      "\\\\(4xy^2 + 4x^2 - 4x\\\\)"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Simplify each fraction separately using index laws. \\\\(\\frac{6x^2y^3}{3xy} = 2xy^2\\\\) and \\\\(\\frac{8x^3y^2}{2x^2y^2} = 4x\\\\).",
        "workingOut": "\\\\(2xy^2 + 4x^2 - 4x + 2xy^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the \\\\(xy^2\\\\) like terms: \\\\(2xy^2 + 2xy^2 = 4xy^2\\\\). The other terms remain.",
        "workingOut": "\\\\(4xy^2 + 4x^2 - 4x\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(4xy^2 + 4x^2 - 4x\\\\). You can factor out \\\\(4x\\\\): \\\\(4x(y^2 + x - 1)\\\\).",
        "workingOut": "\\\\(4xy^2 + 4x^2 - 4x\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q1d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Simplify: \\\\(\\\\frac{8a^3b^3}{ab} + \\\\frac{4a^3b^2}{b^2} - \\\\frac{10a^5b}{2a^2b} + \\\\frac{15a^4b^2}{3a^2}\\\\)",
    "opts": [
      "\\\\(12a^1b^1 - a^2\\\\)",
      "\\\\(14a^3b^3 - a^4\\\\)",
      "\\\\(13a^2b^2 - a^3\\\\)",
      "\\\\(13a^2b^2 + a^3\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Simplify each fraction using index laws: \\\\(\\frac{8a^3b^3}{ab} = 8a^2b^2\\\\), \\\\(\\frac{4a^3b^2}{b^2} = 4a^3\\\\), \\\\(\\frac{10a^5b}{2a^2b} = 5a^3\\\\), \\\\(\\frac{15a^4b^2}{3a^2} = 5a^2b^2\\\\).",
        "workingOut": "\\\\(8a^2b^2 + 4a^3 - 5a^3 + 5a^2b^2\\\\)",
        "graphData": null
      },
      {
        "explanation": "Group like terms: \\\\(a^2b^2\\\\) terms give \\\\(8a^2b^2 + 5a^2b^2 = 13a^2b^2\\\\). The \\\\(a^3\\\\) terms give \\\\(4a^3 - 5a^3 = -a^3\\\\).",
        "workingOut": "\\\\(13a^2b^2 - a^3\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(13a^2b^2 - a^3\\\\).",
        "workingOut": "\\\\(13a^2b^2 - a^3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  // ─────────────────────────────────────────────
  // Q2: EXPAND and COLLECT (single brackets)
  // ─────────────────────────────────────────────
  {
    "id": "y10-3j-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(4(x+3) + 3(x-2)\\\\)",
    "opts": [
      "\\\\(7x - 6\\\\)",
      "\\\\(7x + 6\\\\)",
      "\\\\(6x + 5\\\\)",
      "\\\\(8x + 7\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Distribute each bracket: multiply \\\\(4\\\\) by every term inside \\\\((x+3)\\\\), and \\\\(3\\\\) by every term inside \\\\((x-2)\\\\).",
        "workingOut": "\\\\(4x + 12 + 3x - 6\\\\)",
        "graphData": null
      },
      {
        "explanation": "Group and add the \\\\(x\\\\) terms: \\\\(4x + 3x = 7x\\\\). Group and add the constants: \\\\(12 - 6 = 6\\\\).",
        "workingOut": "\\\\(7x + 6\\\\)",
        "graphData": null
      },
      {
        "explanation": "The fully expanded and simplified expression is \\\\(7x + 6\\\\).",
        "workingOut": "\\\\(7x + 6\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(6(y+2) - 4(y-3)\\\\)",
    "opts": [
      "\\\\(2y - 24\\\\)",
      "\\\\(1y + 23\\\\)",
      "\\\\(3y + 25\\\\)",
      "\\\\(2y + 24\\\\)"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Distribute each bracket: \\\\(6(y+2) = 6y + 12\\\\) and \\\\(-4(y-3) = -4y + 12\\\\). Note: distributing a negative changes the sign of each inner term.",
        "workingOut": "\\\\(6y + 12 - 4y + 12\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect \\\\(y\\\\) terms: \\\\(6y - 4y = 2y\\\\). Collect constants: \\\\(12 + 12 = 24\\\\).",
        "workingOut": "\\\\(2y + 24\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(2y + 24\\\\).",
        "workingOut": "\\\\(2y + 24\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(3x(x+4) + 2x(x-5)\\\\)",
    "opts": [
      "\\\\(5x^2 - 2x\\\\)",
      "\\\\(6x^3 + 3x\\\\)",
      "\\\\(5x^2 + 2x\\\\)",
      "\\\\(4x^1 + 1x\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Distribute each bracket: \\\\(3x(x+4) = 3x^2 + 12x\\\\) and \\\\(2x(x-5) = 2x^2 - 10x\\\\).",
        "workingOut": "\\\\(3x^2 + 12x + 2x^2 - 10x\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect \\\\(x^2\\\\) terms: \\\\(3x^2 + 2x^2 = 5x^2\\\\). Collect \\\\(x\\\\) terms: \\\\(12x - 10x = 2x\\\\).",
        "workingOut": "\\\\(5x^2 + 2x\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(5x^2 + 2x\\\\), which can also be written as \\\\(x(5x + 2)\\\\).",
        "workingOut": "\\\\(5x^2 + 2x\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(4y(y-2) - 3y(2y-4)\\\\)",
    "opts": [
      "\\\\(-1y^1 + 3y\\\\)",
      "\\\\(-3y^3 + 5y\\\\)",
      "\\\\(+2y^2 - 4y\\\\)",
      "\\\\(-2y^2 + 4y\\\\)"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Distribute: \\\\(4y(y-2) = 4y^2 - 8y\\\\) and \\\\(-3y(2y-4) = -6y^2 + 12y\\\\). Be careful with the sign when distributing \\\\(-3y\\\\).",
        "workingOut": "\\\\(4y^2 - 8y - 6y^2 + 12y\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect \\\\(y^2\\\\) terms: \\\\(4y^2 - 6y^2 = -2y^2\\\\). Collect \\\\(y\\\\) terms: \\\\(-8y + 12y = 4y\\\\).",
        "workingOut": "\\\\(-2y^2 + 4y\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expression is \\\\(-2y^2 + 4y\\\\), which factors as \\\\(2y(2 - y)\\\\).",
        "workingOut": "\\\\(-2y^2 + 4y\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((3x+2)(x+4)\\\\)",
    "opts": [
      "\\\\(3x^2 - 14x - 8\\\\)",
      "\\\\(3x^2 + 14x + 8\\\\)",
      "\\\\(4x^3 + 15x + 9\\\\)",
      "\\\\(2x^1 + 13x + 7\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Use FOIL (First, Outer, Inner, Last): \\\\(3x \\cdot x = 3x^2\\\\), \\\\(3x \\cdot 4 = 12x\\\\), \\\\(2 \\cdot x = 2x\\\\), \\\\(2 \\cdot 4 = 8\\\\).",
        "workingOut": "\\\\(3x^2 + 12x + 2x + 8\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect the middle (\\\\(x\\\\)) terms: \\\\(12x + 2x = 14x\\\\).",
        "workingOut": "\\\\(3x^2 + 14x + 8\\\\)",
        "graphData": null
      },
      {
        "explanation": "The fully expanded expression is \\\\(3x^2 + 14x + 8\\\\).",
        "workingOut": "\\\\(3x^2 + 14x + 8\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((3a+5)(2a-3)\\\\)",
    "opts": [
      "\\\\(7a^3 + a - 16\\\\)",
      "\\\\(6a^2 + a - 15\\\\)",
      "\\\\(6a^2 - a + 15\\\\)",
      "\\\\(5a^1 + a - 14\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Expand using FOIL: \\\\(3a \\cdot 2a = 6a^2\\\\), \\\\(3a \\cdot (-3) = -9a\\\\), \\\\(5 \\cdot 2a = 10a\\\\), \\\\(5 \\cdot (-3) = -15\\\\).",
        "workingOut": "\\\\(6a^2 - 9a + 10a - 15\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect the \\\\(a\\\\) terms: \\\\(-9a + 10a = a\\\\). The constant is \\\\(-15\\\\).",
        "workingOut": "\\\\(6a^2 + a - 15\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expanded expression is \\\\(6a^2 + a - 15\\\\).",
        "workingOut": "\\\\(6a^2 + a - 15\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((3y+2)(y+4) - (y-2)(y+5)\\\\)",
    "opts": [
      "\\\\(2y^2 + 11y + 18\\\\)",
      "\\\\(1y^1 + 10y + 17\\\\)",
      "\\\\(3y^3 + 12y + 19\\\\)",
      "\\\\(2y^2 - 11y - 18\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Expand each bracket separately. \\\\((3y+2)(y+4) = 3y^2 + 12y + 2y + 8 = 3y^2 + 14y + 8\\\\). \\\\((y-2)(y+5) = y^2 + 5y - 2y - 10 = y^2 + 3y - 10\\\\).",
        "workingOut": "\\\\((3y^2 + 14y + 8) - (y^2 + 3y - 10)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the second expansion from the first. Distribute the minus sign: \\\\(3y^2 + 14y + 8 - y^2 - 3y + 10\\\\).",
        "workingOut": "\\\\((3y^2 - y^2) + (14y - 3y) + (8 + 10)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect like terms: \\\\(2y^2 + 11y + 18\\\\).",
        "workingOut": "\\\\(2y^2 + 11y + 18\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q2h",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((c+4)(2c+3) - (3c-2)(c-4)\\\\)",
    "opts": [
      "\\\\(-c^1 + 24c + 3\\\\)",
      "\\\\(-c^2 + 25c + 4\\\\)",
      "\\\\(-c^3 + 26c + 5\\\\)",
      "\\\\(+c^2 - 25c - 4\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Expand both brackets: \\\\((c+4)(2c+3) = 2c^2 + 3c + 8c + 12 = 2c^2 + 11c + 12\\\\). \\\\((3c-2)(c-4) = 3c^2 - 12c - 2c + 8 = 3c^2 - 14c + 8\\\\).",
        "workingOut": "\\\\((2c^2 + 11c + 12) - (3c^2 - 14c + 8)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the negative: \\\\(2c^2 + 11c + 12 - 3c^2 + 14c - 8\\\\). Then collect like terms.",
        "workingOut": "\\\\((2c^2 - 3c^2) + (11c + 14c) + (12 - 8)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\\\(-c^2 + 25c + 4\\\\).",
        "workingOut": "\\\\(-c^2 + 25c + 4\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  // Q3 series (expand with outer coefficient)
  {
    "id": "y10-3j-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(4(x+2)(2x+3)\\\\)",
    "opts": [
      "\\\\(8x^2 + 28x + 24\\\\)",
      "\\\\(8x^2 - 28x - 24\\\\)",
      "\\\\(9x^3 + 29x + 25\\\\)",
      "\\\\(7x^1 + 27x + 23\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "First expand the two brackets using FOIL: \\\\((x+2)(2x+3) = 2x^2 + 3x + 4x + 6 = 2x^2 + 7x + 6\\\\).",
        "workingOut": "\\\\(4(2x^2 + 7x + 6)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Now multiply through by 4: \\\\(4 \\times 2x^2 = 8x^2\\\\), \\\\(4 \\times 7x = 28x\\\\), \\\\(4 \\times 6 = 24\\\\).",
        "workingOut": "\\\\(8x^2 + 28x + 24\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expanded expression is \\\\(8x^2 + 28x + 24\\\\).",
        "workingOut": "\\\\(8x^2 + 28x + 24\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(3(2a+3)(4a-1)\\\\)",
    "opts": [
      "\\\\(24a^2 + 30a - 9\\\\)",
      "\\\\(24a^2 - 30a + 9\\\\)",
      "\\\\(25a^3 + 31a - 10\\\\)",
      "\\\\(23a^1 + 29a - 8\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "First expand \\\\((2a+3)(4a-1)\\\\) using FOIL: \\\\(8a^2 - 2a + 12a - 3 = 8a^2 + 10a - 3\\\\).",
        "workingOut": "\\\\(3(8a^2 + 10a - 3)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply through by 3: \\\\(3 \\times 8a^2 = 24a^2\\\\), \\\\(3 \\times 10a = 30a\\\\), \\\\(3 \\times (-3) = -9\\\\).",
        "workingOut": "\\\\(24a^2 + 30a - 9\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expanded expression is \\\\(24a^2 + 30a - 9\\\\).",
        "workingOut": "\\\\(24a^2 + 30a - 9\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(3(2y+3)(y+4) + 2(y-3)(2y+5)\\\\)",
    "opts": [
      "\\\\(11y^3 + 32y + 7\\\\)",
      "\\\\(9y^1 + 30y + 5\\\\)",
      "\\\\(10y^2 + 31y + 6\\\\)",
      "\\\\(10y^2 - 31y - 6\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Expand \\\\((2y+3)(y+4) = 2y^2 + 8y + 3y + 12 = 2y^2 + 11y + 12\\\\), so \\\\(3(2y^2 + 11y + 12) = 6y^2 + 33y + 36\\\\). Expand \\\\((y-3)(2y+5) = 2y^2 + 5y - 6y - 15 = 2y^2 - y - 15\\\\), so \\\\(2(2y^2 - y - 15) = 4y^2 - 2y - 30\\\\).",
        "workingOut": "\\\\((6y^2 + 33y + 36) + (4y^2 - 2y - 30)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Collect like terms: \\\\(y^2\\\\): \\\\(6+4=10\\\\), \\\\(y\\\\): \\\\(33-2=31\\\\), constant: \\\\(36-30=6\\\\).",
        "workingOut": "\\\\(10y^2 + 31y + 6\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(10y^2 + 31y + 6\\\\).",
        "workingOut": "\\\\(10y^2 + 31y + 6\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q3d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(4(b+3)(2b+1) - 2(b-2)(b-4)\\\\)",
    "opts": [
      "\\\\(7b^3 + 41b - 5\\\\)",
      "\\\\(6b^2 + 40b - 4\\\\)",
      "\\\\(6b^2 - 40b + 4\\\\)",
      "\\\\(5b^1 + 39b - 3\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "Expand \\\\((b+3)(2b+1) = 2b^2 + b + 6b + 3 = 2b^2 + 7b + 3\\\\), so \\\\(4(2b^2 + 7b + 3) = 8b^2 + 28b + 12\\\\). Expand \\\\((b-2)(b-4) = b^2 - 4b - 2b + 8 = b^2 - 6b + 8\\\\), so \\\\(2(b^2 - 6b + 8) = 2b^2 - 12b + 16\\\\).",
        "workingOut": "\\\\((8b^2 + 28b + 12) - (2b^2 - 12b + 16)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the negative and collect like terms: \\\\(8b^2 + 28b + 12 - 2b^2 + 12b - 16\\\\). So \\\\(b^2\\\\): \\\\(8-2=6\\\\), \\\\(b\\\\): \\\\(28+12=40\\\\), constant: \\\\(12-16=-4\\\\).",
        "workingOut": "\\\\(6b^2 + 40b - 4\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(6b^2 + 40b - 4\\\\).",
        "workingOut": "\\\\(6b^2 + 40b - 4\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  // Q4 series (fractions)
  {
    "id": "y10-3j-q4a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(\\\\frac{2}{3}(x+3) + \\\\frac{1}{4}(x-2)\\\\)",
    "opts": [
      "\\\\(\\\\frac{11x+18}{12}\\\\)",
      "\\\\(\\\\frac{11x-18}{12}\\\\)",
      "\\\\(\\\\frac{10x+17}{11}\\\\)",
      "\\\\(\\\\frac{12x+19}{13}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Distribute each fraction: \\\\(\\frac{2}{3}(x+3) = \\frac{2x}{3} + 2\\\\) and \\\\(\\frac{1}{4}(x-2) = \\frac{x}{4} - \\frac{1}{2}\\\\).",
        "workingOut": "\\\\(\\frac{2x}{3} + 2 + \\frac{x}{4} - \\frac{1}{2}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Use a common denominator of 12: \\\\(\\frac{8x}{12} + \\frac{24}{12} + \\frac{3x}{12} - \\frac{6}{12} = \\frac{11x + 18}{12}\\\\).",
        "workingOut": "\\\\(\\frac{8x + 3x}{12} + \\frac{24 - 6}{12} = \\frac{11x + 18}{12}\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final simplified expression is \\\\(\\frac{11x + 18}{12}\\\\).",
        "workingOut": "\\\\(\\frac{11x+18}{12}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q4b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(4(\\\\frac{a}{2} + \\\\frac{1}{3}) - 2(\\\\frac{a}{3} - \\\\frac{1}{4})\\\\)",
    "opts": [
      "\\\\(\\\\frac{4a}{3} + \\\\frac{11}{6}\\\\)",
      "\\\\(\\\\frac{5a}{4} + \\\\frac{12}{7}\\\\)",
      "\\\\(\\\\frac{3a}{2} + \\\\frac{10}{5}\\\\)",
      "\\\\(\\\\frac{4a}{3} - \\\\frac{11}{6}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Distribute: \\\\(4(\\frac{a}{2} + \\frac{1}{3}) = 2a + \\frac{4}{3}\\\\) and \\\\(-2(\\frac{a}{3} - \\frac{1}{4}) = -\\frac{2a}{3} + \\frac{1}{2}\\\\).",
        "workingOut": "\\\\(2a + \\frac{4}{3} - \\frac{2a}{3} + \\frac{1}{2}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine \\\\(a\\\\) terms with LCD 3: \\\\(\\frac{6a}{3} - \\frac{2a}{3} = \\frac{4a}{3}\\\\). Combine constants with LCD 6: \\\\(\\frac{8}{6} + \\frac{3}{6} = \\frac{11}{6}\\\\).",
        "workingOut": "\\\\(\\frac{4a}{3} + \\frac{11}{6}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\\\(\\frac{4a}{3} + \\frac{11}{6}\\\\).",
        "workingOut": "\\\\(\\frac{4a}{3} + \\frac{11}{6}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q4c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(\\\\frac{1}{2}x(x+4) + \\\\frac{1}{3}x(x-2)\\\\)",
    "opts": [
      "\\\\(\\\\frac{5x^2-8x}{6}\\\\)",
      "\\\\(\\\\frac{6x^3+9x}{7}\\\\)",
      "\\\\(\\\\frac{5x^2+8x}{6}\\\\)",
      "\\\\(\\\\frac{4x^1+7x}{5}\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Expand: \\\\(\\frac{1}{2}x(x+4) = \\frac{x^2}{2} + 2x\\\\) and \\\\(\\frac{1}{3}x(x-2) = \\frac{x^2}{3} - \\frac{2x}{3}\\\\).",
        "workingOut": "\\\\(\\frac{x^2}{2} + 2x + \\frac{x^2}{3} - \\frac{2x}{3}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine \\\\(x^2\\\\) terms using LCD 6: \\\\(\\frac{3x^2}{6} + \\frac{2x^2}{6} = \\frac{5x^2}{6}\\\\). Combine \\\\(x\\\\) terms: \\\\(\\frac{6x}{3} - \\frac{2x}{3} = \\frac{4x}{3} = \\frac{8x}{6}\\\\).",
        "workingOut": "\\\\(\\frac{5x^2 + 8x}{6}\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expression is \\\\(\\frac{5x^2 + 8x}{6}\\\\).",
        "workingOut": "\\\\(\\frac{5x^2 + 8x}{6}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q4d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\(\\\\frac{3}{4}y(\\\\frac{y}{2} - 2) - \\\\frac{1}{3}y(3y-4)\\\\)",
    "opts": [
      "\\\\(+\\\\frac{5y^2}{8} + \\\\frac{y}{6}\\\\)",
      "\\\\(-\\\\frac{6y^3}{9} - \\\\frac{y}{7}\\\\)",
      "\\\\(-\\\\frac{4y^1}{7} - \\\\frac{y}{5}\\\\)",
      "\\\\(-\\\\frac{5y^2}{8} - \\\\frac{y}{6}\\\\)"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Expand first part: \\\\(\\frac{3}{4}y(\\frac{y}{2} - 2) = \\frac{3y^2}{8} - \\frac{3y}{2}\\\\). Expand second part: \\\\(\\frac{1}{3}y(3y - 4) = y^2 - \\frac{4y}{3}\\\\).",
        "workingOut": "\\\\(\\frac{3y^2}{8} - \\frac{3y}{2} - y^2 + \\frac{4y}{3}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine \\\\(y^2\\\\) terms (LCD 8): \\\\(\\frac{3y^2}{8} - \\frac{8y^2}{8} = -\\frac{5y^2}{8}\\\\). Combine \\\\(y\\\\) terms (LCD 6): \\\\(-\\frac{9y}{6} + \\frac{8y}{6} = -\\frac{y}{6}\\\\).",
        "workingOut": "\\\\(-\\frac{5y^2}{8} - \\frac{y}{6}\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expression is \\\\(-\\frac{5y^2}{8} - \\frac{y}{6}\\\\).",
        "workingOut": "\\\\(-\\frac{5y^2}{8} - \\frac{y}{6}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q4e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((\\\\frac{1}{2}x + 2)(x + \\\\frac{1}{3})\\\\)",
    "opts": [
      "\\\\(\\\\frac{1}{1}x^1 + \\\\frac{12}{5}x + \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\frac{2}{3}x^3 + \\\\frac{14}{7}x + \\\\frac{3}{4}\\\\)",
      "\\\\(\\\\frac{1}{2}x^2 - \\\\frac{13}{6}x - \\\\frac{2}{3}\\\\)",
      "\\\\(\\\\frac{1}{2}x^2 + \\\\frac{13}{6}x + \\\\frac{2}{3}\\\\)"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "Use FOIL: \\\\(\\frac{1}{2}x \\cdot x = \\frac{x^2}{2}\\\\), \\\\(\\frac{1}{2}x \\cdot \\frac{1}{3} = \\frac{x}{6}\\\\), \\\\(2 \\cdot x = 2x\\\\), \\\\(2 \\cdot \\frac{1}{3} = \\frac{2}{3}\\\\).",
        "workingOut": "\\\\(\\frac{x^2}{2} + \\frac{x}{6} + 2x + \\frac{2}{3}\\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the \\\\(x\\\\) terms using LCD 6: \\\\(\\frac{x}{6} + \\frac{12x}{6} = \\frac{13x}{6}\\\\).",
        "workingOut": "\\\\(\\frac{x^2}{2} + \\frac{13x}{6} + \\frac{2}{3}\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expression is \\\\(\\frac{x^2}{2} + \\frac{13x}{6} + \\frac{2}{3}\\\\).",
        "workingOut": "\\\\(\\frac{x^2}{2} + \\frac{13x}{6} + \\frac{2}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-3j-q4f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Revision",
    "question": "Expand and collect like terms: \\\\((\\\\frac{1}{2}y + 4)(\\\\frac{2}{3}y + 3) - (y - \\\\frac{1}{2})(y + \\\\frac{1}{3})\\\\)",
    "opts": [
      "\\\\(-\\\\frac{3}{4}y^3 + \\\\frac{14}{4}y + \\\\frac{74}{7}\\\\)",
      "\\\\(-\\\\frac{1}{2}y^1 + \\\\frac{12}{2}y + \\\\frac{72}{5}\\\\)",
      "\\\\(-\\\\frac{2}{3}y^2 + \\\\frac{13}{3}y + \\\\frac{73}{6}\\\\)",
      "\\\\(+\\\\frac{2}{3}y^2 - \\\\frac{13}{3}y - \\\\frac{73}{6}\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Expand the first product: \\\\((\\frac{y}{2}+4)(\\frac{2y}{3}+3) = \\frac{y^2}{3} + \\frac{3y}{2} + \\frac{8y}{3} + 12\\\\). Expand the second: \\\\((y - \\frac{1}{2})(y + \\frac{1}{3}) = y^2 + \\frac{y}{3} - \\frac{y}{2} - \\frac{1}{6}\\\\).",
        "workingOut": "\\\\(\\left(\\frac{y^2}{3} + \\frac{25y}{6} + 12\\right) - \\left(y^2 - \\frac{y}{6} - \\frac{1}{6}\\right)\\\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the subtraction and collect terms: \\\\(y^2\\\\): \\\\(\\frac{1}{3} - 1 = -\\frac{2}{3}\\\\). \\\\(y\\\\): \\\\(\\frac{25}{6} + \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\\\). Constant: \\\\(12 + \\frac{1}{6} = \\frac{73}{6}\\\\).",
        "workingOut": "\\\\(-\\frac{2}{3}y^2 + \\frac{13}{3}y + \\frac{73}{6}\\\\)",
        "graphData": null
      },
      {
        "explanation": "The final expression is \\\\(-\\frac{2}{3}y^2 + \\frac{13}{3}y + \\frac{73}{6}\\\\).",
        "workingOut": "\\\\(-\\frac{2}{3}y^2 + \\frac{13}{3}y + \\frac{73}{6}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null
  }
];
