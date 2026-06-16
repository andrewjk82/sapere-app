import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

// 1. Original 74 Questions (Algebra Review)
export const originalQuestions = [
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "3(x + 5) + 4(3x - 2)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(15x + 23\\)",
      "\\(7x + 7\\)",
      "\\(15x + 7\\)",
      "\\(15x - 7\\)"
    ],
    "answer": "2",
    "hint": "Distribute the 3 and 4 across the brackets.",
    "solution": "\\(3x + 15 + 12x - 8 = 15x + 7\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(x + 5) + 4(3x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(3x + 15 + 12x - 8 = 15x + 7\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "7(a - 3b) - 5(2a - 4b)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(17a - 41b\\)",
      "\\(3a - b\\)",
      "\\(-3a - b\\)",
      "\\(-3a + b\\)"
    ],
    "answer": "2",
    "hint": "Careful with the negative sign when distributing the -5.",
    "solution": "\\(7a - 21b - 10a + 20b = -3a - b\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(7(a - 3b) - 5(2a - 4b)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(7a - 21b - 10a + 20b = -3a - b\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "-(2x - 3y) - (3x + 2y)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(-x + y\\)",
      "\\(-5x + y\\)",
      "\\(x - 5y\\)",
      "\\(-5x - y\\)"
    ],
    "answer": "1",
    "hint": "Distribute the negative sign to both terms in each bracket.",
    "solution": "\\(-2x + 3y - 3x - 2y = -5x + y\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-(2x - 3y) - (3x + 2y)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-2x + 3y - 3x - 2y = -5x + y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\(-3x^2(2x + 4) - 4x^2(x - 2)\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(-10x^3 + 4x^2\\)",
      "\\(-10x^3 - 20x^2\\)",
      "\\(-2x^3 - 4x^2\\)",
      "\\(-10x^3 - 4x^2\\)"
    ],
    "answer": "3",
    "hint": "Multiply coefficients and add powers of x.",
    "solution": "\\(-6x^3 - 12x^2 - 4x^3 + 8x^2 = -10x^3 - 4x^2\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-3x^2(2x + 4) - 4x^2(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-6x^3 - 12x^2 - 4x^3 + 8x^2 = -10x^3 - 4x^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((2n + 5)(n - 4)\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(2n^2 - 3n + 20\\)",
      "\\(2n^2 + 13n - 20\\)",
      "\\(2n^2 - 3n - 20\\)",
      "\\(2n^2 + 3n - 20\\)"
    ],
    "answer": "2",
    "hint": "Use FOIL method.",
    "solution": "\\(2n^2 - 8n + 5n - 20 = 2n^2 - 3n - 20\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((2n + 5)(n - 4) = 2n \\times n - 2n \\times 4 + 5 \\times n +- 5 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(2n^2 - 8n + 5n - 20 = 2n^2 - 3n - 20\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((2r + 5)^2\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(2r^2 + 20r + 25\\)",
      "\\(4r^2 + 25\\)",
      "\\(4r^2 + 20r + 25\\)",
      "\\(4r^2 + 10r + 25\\)"
    ],
    "answer": "2",
    "hint": "Use $(a+b)^2 = a^2 + 2ab + b^2$.",
    "solution": "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2r + 5)^2 = (2r)^2 + 2(2r)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((2y - 7)(2y + 7)\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(4y^2 - 49\\)",
      "\\(2y^2 - 49\\)",
      "\\(4y^2 + 49\\)",
      "\\(4y^2 - 28y - 49\\)"
    ],
    "answer": "0",
    "hint": "Difference of squares pattern: $(a-b)(a+b) = a^2 - b^2$.",
    "solution": "\\((2y)^2 - 7^2 = 4y^2 - 49\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2y - 7)(2y + 7) = (2y)^2 - (7)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\((2y)^2 - 7^2 = 4y^2 - 49\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((4x - 3)(3x - 2)\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(12x^2 - 17x + 6\\)",
      "\\(12x^2 + 17x + 6\\)",
      "\\(7x^2 - 17x + 6\\)",
      "\\(12x^2 - 17x - 6\\)"
    ],
    "answer": "0",
    "hint": "Use FOIL.",
    "solution": "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((4x - 3)(3x - 2) = 4x \\times 3x - 4x \\times 2 - 3 \\times 3x -- 3 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((3t - 4)^2\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(9t^2 - 24t + 16\\)",
      "\\(9t^2 + 16\\)",
      "\\(9t^2 - 12t + 16\\)",
      "\\(9t^2 - 24t - 16\\)"
    ],
    "answer": "0",
    "hint": "Use $(a-b)^2 = a^2 - 2ab + b^2$.",
    "solution": "\\((3t)^2 - 2(3t)(4) + 4^2 = 9t^2 - 24t + 16\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((3t - 4)^2 = (3t)^2 - 2(3t)(4) + (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\((3t)^2 - 2(3t)(4) + 4^2 = 9t^2 - 24t + 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((5c + 4)(5c - 4)\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(25c^2 - 40c - 16\\)",
      "\\(10c^2 - 16\\)",
      "\\(25c^2 - 16\\)",
      "\\(25c^2 + 16\\)"
    ],
    "answer": "2",
    "hint": "Difference of squares.",
    "solution": "\\((5c)^2 - 4^2 = 25c^2 - 16\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((5c - 4)(5c + 4) = (5c)^2 - (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\((5c)^2 - 4^2 = 25c^2 - 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((2p + 9)^2\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(4p^2 + 18p + 81\\)",
      "\\(4p^2 + 81\\)",
      "\\(4p^2 + 36p + 81\\)",
      "\\(4p^2 + 36p + 18\\)"
    ],
    "answer": "2",
    "hint": "Square the first, twice the product, square the last.",
    "solution": "\\(4p^2 + 18p + 18p + 81 = 4p^2 + 36p + 81\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2p + 9)^2 = (2p)^2 + 2(2p)(9) + (9)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4p^2 + 18p + 18p + 81 = 4p^2 + 36p + 81\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "isManual": true,
    "question": "\\((4u - 5)^2\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(16u^2 - 20u + 25\\)",
      "\\(16u^2 + 25\\)",
      "\\(16u^2 - 40u - 25\\)",
      "\\(16u^2 - 40u + 25\\)"
    ],
    "answer": "3",
    "hint": "Square the first, twice the product, square the last.",
    "solution": "\\(16u^2 - 20u - 20u + 25 = 16u^2 - 40u + 25\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4u - 5)^2 = (4u)^2 - 2(4u)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16u^2 - 20u - 20u + 25 = 16u^2 - 40u + 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(24a + 60\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(12(2a + 5)\\)",
      "\\(6(4a + 10)\\)",
      "\\(12a(2 + 5)\\)",
      "\\(12(a + 5)\\)"
    ],
    "answer": "0",
    "hint": "Find the HCF of 24 and 60.",
    "solution": "\\(12(2a) + 12(5) = 12(2a + 5)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(24a + 60\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(12(2a) + 12(5) = 12(2a + 5)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(35b - 49\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(7(5b + 7)\\)",
      "\\(5(7b - 7)\\)",
      "\\(7(5b - 7)\\)",
      "\\(7b(5 - 7)\\)"
    ],
    "answer": "2",
    "hint": "Find the HCF of 35 and 49.",
    "solution": "\\(7(5b) - 7(7) = 7(5b - 7)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(35b - 49\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(7(5b) - 7(7) = 7(5b - 7)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(12c^2 + 48c\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(12(c^2 + 4c)\\)",
      "\\(12c(c + 4)\\)",
      "\\(12c(c + 48)\\)",
      "\\(c(12c + 48)\\)"
    ],
    "answer": "1",
    "hint": "Look for common number and variable.",
    "solution": "\\(12c(c) + 12c(4) = 12c(c + 4)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(12c^2 + 48c\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(12c(c) + 12c(4) = 12c(c + 4)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(x^2 - 81\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((x - 27)(x + 27)\\)",
      "\\((x - 9)(x + 9)\\)",
      "\\((x - 9)^2\\)",
      "\\((x + 9)^2\\)"
    ],
    "answer": "1",
    "hint": "Difference of squares: $x^2 - 9^2$.",
    "solution": "\\((x-9)(x+9)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(x^2 - 81\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x-9)(x+9)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(e^2 + 11e + 24\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((e + 3)(e + 8)\\)",
      "\\((e + 4)(e + 6)\\)",
      "\\((e - 3)(e - 8)\\)",
      "\\((e + 2)(e + 12)\\)"
    ],
    "answer": "0",
    "hint": "Find numbers that multiply to 24 and add to 11.",
    "solution": "\\(3 \\times 8 = 24, 3 + 8 = 11 \\rightarrow (e+3)(e+8)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(e^2 + 11e + 24\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(3 \\times 8 = 24, 3 + 8 = 11 \\rightarrow (e+3)(e+8)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(f^2 - 14f + 49\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((f - 49)(f + 1)\\)",
      "\\((f - 7)(f + 7)\\)",
      "\\((f - 7)^2\\)",
      "\\((f + 7)^2\\)"
    ],
    "answer": "2",
    "hint": "Perfect square trinomial.",
    "solution": "\\(-7 \\times -7 = 49, -7 - 7 = -14 \\rightarrow (f-7)^2\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(f^2 - 14f + 49\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-7 \\times -7 = 49, -7 - 7 = -14 \\rightarrow (f-7)^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(64 - 9g^2\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((3g - 8)(3g + 8)\\)",
      "\\((8 - 3g)(8 + 3g)\\)",
      "\\((8 - 3g)^2\\)",
      "\\((8 + 3g)^2\\)"
    ],
    "answer": "1",
    "hint": "Difference of squares: $8^2 - (3g)^2$.",
    "solution": "\\((8-3g)(8+3g)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(64 - 9g^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((8-3g)(8+3g)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(h^2 - 2h - 48\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((h - 12)(h + 4)\\)",
      "\\((h - 8)^2\\)",
      "\\((h - 8)(h + 6)\\)",
      "\\((h + 8)(h - 6)\\)"
    ],
    "answer": "2",
    "hint": "Find numbers that multiply to -48 and add to -2.",
    "solution": "\\(-8 \\times 6 = -48, -8 + 6 = -2 \\rightarrow (h-8)(h+6)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(h^2 - 2h - 48\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-8 \\times 6 = -48, -8 + 6 = -2 \\rightarrow (h-8)(h+6)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(i^2 + 3i - 40\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((i + 8)(i - 5)\\)",
      "\\((i + 10)(i - 4)\\)",
      "\\((i - 8)(i + 5)\\)",
      "\\((i + 20)(i - 2)\\)"
    ],
    "answer": "0",
    "hint": "Find numbers that multiply to -40 and add to 3.",
    "solution": "\\(8 \\times -5 = -40, 8 - 5 = 3 \\rightarrow (i+8)(i-5)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(i^2 + 3i - 40\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(8 \\times -5 = -40, 8 - 5 = 3 \\rightarrow (i+8)(i-5)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(3j^2 + 10j + 8\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((3j + 8)(j + 1)\\)",
      "\\((3j + 2)(j + 4)\\)",
      "\\((j + 8)(3j + 1)\\)",
      "\\((3j + 4)(j + 2)\\)"
    ],
    "answer": "3",
    "hint": "Factor by grouping (AC method).",
    "solution": "\\(3j^2 + 6j + 4j + 8 = 3j(j+2) + 4(j+2) = (3j+4)(j+2)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3j^2 + 10j + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(3j^2 + 6j + 4j + 8 = 3j(j+2) + 4(j+2) = (3j+4)(j+2)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(2k^2 - 9k - 5\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((2k + 1)(k - 5)\\)",
      "\\((2k + 5)(k - 1)\\)",
      "\\((k - 5)(2k - 1)\\)",
      "\\((2k - 1)(k + 5)\\)"
    ],
    "answer": "0",
    "hint": "Factor by grouping.",
    "solution": "\\(2k^2 - 10k + k - 5 = 2k(k-5) + 1(k-5) = (2k+1)(k-5)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2k^2 - 9k - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2k^2 - 10k + k - 5 = 2k(k-5) + 1(k-5) = (2k+1)(k-5)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(4l^2 - 11l + 6\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((2l - 3)(2l - 2)\\)",
      "\\((l - 6)(4l - 1)\\)",
      "\\((4l - 3)(l - 2)\\)",
      "\\((4l - 2)(l - 3)\\)"
    ],
    "answer": "2",
    "hint": "Factor by grouping.",
    "solution": "\\(4l^2 - 8l - 3l + 6 = 4l(l-2) - 3(l-2) = (4l-3)(l-2)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(4l^2 - 11l + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(4l^2 - 8l - 3l + 6 = 4l(l-2) - 3(l-2) = (4l-3)(l-2)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(6m^2 + m - 12\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((6m + 4)(m - 3)\\)",
      "\\((2m + 3)(3m - 4)\\)",
      "\\((2m - 3)(3m + 4)\\)",
      "\\((3m + 4)(2m - 3)\\)"
    ],
    "answer": "1",
    "hint": "Factor by grouping.",
    "solution": "\\(6m^2 - 8m + 9m - 12 = 2m(3m-4) + 3(3m-4) = (2m+3)(3m-4)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(6m^2 + m - 12\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(6m^2 - 8m + 9m - 12 = 2m(3m-4) + 3(3m-4) = (2m+3)(3m-4)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(xy + 2x + 3y + 6\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((x + 3)(y + 2)\\)",
      "\\((x + 2)(y + 3)\\)",
      "\\((x + y)(2 + 3)\\)",
      "\\(x(y + 2) + 3\\)"
    ],
    "answer": "0",
    "hint": "Factor by grouping in pairs.",
    "solution": "\\(x(y+2) + 3(y+2) = (x+3)(y+2)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(xy + 2x + 3y + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x(y+2) + 3(y+2) = (x+3)(y+2)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(p^3 + 5p^2 + 3p + 15\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((p^2 + 5)(p + 3)\\)",
      "\\((p + 1)(p^2 + 15)\\)",
      "\\(p(p^2 + 5p + 3) + 15\\)",
      "\\((p^2 + 3)(p + 5)\\)"
    ],
    "answer": "3",
    "hint": "Factor by grouping in pairs.",
    "solution": "\\(p^2(p+5) + 3(p+5) = (p^2+3)(p+5)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(p^3 + 5p^2 + 3p + 15\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(p^2(p+5) + 3(p+5) = (p^2+3)(p+5)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(ax - bx - 4a + 4b\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((a - b)(x + 4)\\)",
      "\\((a + b)(x - 4)\\)",
      "\\((a - b)(x - 4)\\)",
      "\\((ax - 4)(b - 1)\\)"
    ],
    "answer": "2",
    "hint": "Factor by grouping in pairs.",
    "solution": "\\(x(a-b) - 4(a-b) = (a-b)(x-4)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(ax - bx - 4a + 4b\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x(a-b) - 4(a-b) = (a-b)(x-4)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(x^2z + yz - x^2w - yw\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((x^2 + y)(z - w)\\)",
      "\\((x^2 - y)(z + w)\\)",
      "\\((x^2 + z)(y - w)\\)",
      "\\((xz + y)(x - w)\\)"
    ],
    "answer": "0",
    "hint": "Factor by grouping in pairs.",
    "solution": "\\(z(x^2+y) - w(x^2+y) = (x^2+y)(z-w)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(x^2z + yz - x^2w - yw\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(z(x^2+y) - w(x^2+y) = (x^2+y)(z-w)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1B",
    "topicCode": "1B",
    "topicTitle": "Factoring",
    "isManual": true,
    "question": "\\(a^2 - b^2 + 5a - 5b\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\((a - b)^2 + 5\\)",
      "\\((a - b)(a + b + 5)\\)",
      "\\((a + b)(a - b + 5)\\)",
      "\\((a - b)(a + b - 5)\\)"
    ],
    "answer": "1",
    "hint": "Factor the difference of squares then factor out 5.",
    "solution": "\\((a-b)(a+b) + 5(a-b) = (a-b)(a+b+5)\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(a^2 - b^2 + 5a - 5b\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((a-b)(a+b) + 5(a-b) = (a-b)(a+b+5)\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x}{3} + \\frac{x}{6}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x}{9}\\)",
      "\\(\\frac{2x}{9}\\)",
      "\\(\\frac{x}{2}\\)",
      "\\(\\frac{3x}{6}\\)"
    ],
    "answer": "2",
    "hint": "Find common denominator (6).",
    "solution": "\\(\\frac{2x}{6} + \\frac{x}{6} = \\frac{3x}{6} = \\frac{x}{2}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x\\}\\{3\\} + \\frac\\{x\\}\\{6\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{2x\\}\\{6\\} + \\frac\\{x\\}\\{6\\} = \\frac\\{3x\\}\\{6\\} = \\frac\\{x\\}\\{2\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{a}{4} - \\frac{a}{12}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{2a}{12}\\)",
      "\\(\\frac{a}{8}\\)",
      "\\(\\frac{a}{6}\\)",
      "\\(\\frac{a}{3}\\)"
    ],
    "answer": "2",
    "hint": "Find common denominator (12).",
    "solution": "\\(\\frac{3a}{12} - \\frac{a}{12} = \\frac{2a}{12} = \\frac{a}{6}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{a\\}\\{4\\} - \\frac\\{a\\}\\{12\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{3a\\}\\{12\\} - \\frac\\{a\\}\\{12\\} = \\frac\\{2a\\}\\{12\\} = \\frac\\{a\\}\\{6\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x}{5} \\times \\frac{y}{2}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x+y}{7}\\)",
      "\\(\\frac{xy}{10}\\)",
      "\\(\\frac{xy}{7}\\)",
      "\\(\\frac{2x+5y}{10}\\)"
    ],
    "answer": "1",
    "hint": "Multiply numerators and multiply denominators.",
    "solution": "\\(\\frac{x \\times y}{5 \\times 2} = \\frac{xy}{10}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x\\}\\{5\\} \\times \\frac\\{y\\}\\{2\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{x \\times y\\}\\{5 \\times 2\\} = \\frac\\{xy\\}\\{10\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{2x}{3} \\div \\frac{4x}{9}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{8x^2}{27}\\)",
      "\\(6\\)",
      "\\(\\frac{3}{2}\\)",
      "\\(\\frac{2}{3}\\)"
    ],
    "answer": "2",
    "hint": "Multiply by the reciprocal.",
    "solution": "\\(\\frac{2x}{3} \\times \\frac{9}{4x} = \\frac{18x}{12x} = \\frac{3}{2}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{2x\\}\\{3\\} \\div \\frac\\{4x\\}\\{9\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{2x\\}\\{3\\} \\times \\frac\\{9\\}\\{4x\\} = \\frac\\{18x\\}\\{12x\\} = \\frac\\{3\\}\\{2\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{4x}{3y} + \\frac{x}{2y}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{3x}{6y}\\)",
      "\\(\\frac{4x^2}{6y^2}\\)",
      "\\(\\frac{11x}{6y}\\)",
      "\\(\\frac{5x}{5y}\\)"
    ],
    "answer": "2",
    "hint": "Common denominator 6y.",
    "solution": "\\(\\frac{8x}{6y} + \\frac{3x}{6y} = \\frac{11x}{6y}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{4x\\}\\{3y\\} + \\frac\\{x\\}\\{2y\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{8x\\}\\{6y\\} + \\frac\\{3x\\}\\{6y\\} = \\frac\\{11x\\}\\{6y\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{5a}{2b} - \\frac{a}{3b}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{4a}{b}\\)",
      "\\(\\frac{7a}{6b}\\)",
      "\\(\\frac{13a}{5b}\\)",
      "\\(\\frac{13a}{6b}\\)"
    ],
    "answer": "3",
    "hint": "Common denominator 6b.",
    "solution": "\\(\\frac{15a}{6b} - \\frac{2a}{6b} = \\frac{13a}{6b}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{5a\\}\\{2b\\} - \\frac\\{a\\}\\{3b\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{15a\\}\\{6b\\} - \\frac\\{2a\\}\\{6b\\} = \\frac\\{13a\\}\\{6b\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{2a}{5b} \\times \\frac{10b}{a}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(20\\)",
      "\\(\\frac{2a}{b}\\)",
      "\\(4\\)",
      "\\(\\frac{20ab}{5ab}\\)"
    ],
    "answer": "2",
    "hint": "Cancel out common factors.",
    "solution": "\\(\\frac{2a \\times 10b}{5b \\times a} = \\frac{20ab}{5ab} = 4\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{2a\\}\\{5b\\} \\times \\frac\\{10b\\}\\{a\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{2a \\times 10b\\}\\{5b \\times a\\} = \\frac\\{20ab\\}\\{5ab\\} = 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{3x}{4y} \\div \\frac{x}{8y}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{1}{6}\\)",
      "\\(24\\)",
      "\\(\\frac{3}{32}\\)",
      "\\(6\\)"
    ],
    "answer": "3",
    "hint": "Multiply by reciprocal.",
    "solution": "\\(\\frac{3x}{4y} \\times \\frac{8y}{x} = \\frac{24xy}{4xy} = 6\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{3x\\}\\{4y\\} \\div \\frac\\{x\\}\\{8y\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{3x\\}\\{4y\\} \\times \\frac\\{8y\\}\\{x\\} = \\frac\\{24xy\\}\\{4xy\\} = 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{2}{x} + \\frac{3}{y}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{5}{x+y}\\)",
      "\\(\\frac{2y + 3x}{xy}\\)",
      "\\(\\frac{6}{xy}\\)",
      "\\(\\frac{5}{xy}\\)"
    ],
    "answer": "1",
    "hint": "Common denominator xy.",
    "solution": "\\(\\frac{2y}{xy} + \\frac{3x}{xy} = \\frac{2y+3x}{xy}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{2\\}\\{x\\} + \\frac\\{3\\}\\{y\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{2y\\}\\{xy\\} + \\frac\\{3x\\}\\{xy\\} = \\frac\\{2y+3x\\}\\{xy\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{4}{a} - \\frac{1}{b}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{3}{ab}\\)",
      "\\(\\frac{4b+a}{ab}\\)",
      "\\(\\frac{4b - a}{ab}\\)",
      "\\(\\frac{3}{a-b}\\)"
    ],
    "answer": "2",
    "hint": "Common denominator ab.",
    "solution": "\\(\\frac{4b}{ab} - \\frac{a}{ab} = \\frac{4b-a}{ab}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{4\\}\\{a\\} - \\frac\\{1\\}\\{b\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{4b\\}\\{ab\\} - \\frac\\{a\\}\\{ab\\} = \\frac\\{4b-a\\}\\{ab\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x^2}{y} \\times \\frac{y^2}{x}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(xy\\)",
      "\\(1\\)",
      "\\(x/y\\)",
      "\\(x^2y^2\\)"
    ],
    "answer": "0",
    "hint": "Simplify common powers.",
    "solution": "\\(x^{2-1} y^{2-1} = xy\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x^2\\}\\{y\\} \\times \\frac\\{y^2\\}\\{x\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^\\{2-1\\} y^\\{2-1\\} = xy\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x^2}{y} \\div \\frac{x}{y^2}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(1\\)",
      "\\(x^3y\\)",
      "\\(xy^3\\)",
      "\\(x/y\\)"
    ],
    "answer": "2",
    "hint": "Multiply by reciprocal.",
    "solution": "\\(\\frac{x^2}{y} \\times \\frac{y^2}{x} = xy\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x^2\\}\\{y\\} \\div \\frac\\{x\\}\\{y^2\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{x^2\\}\\{y\\} \\times \\frac\\{y^2\\}\\{x\\} = xy\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x + 2}{4} + \\frac{x - 3}{5}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{9x - 2}{20}\\)",
      "\\(\\frac{9x - 1}{20}\\)",
      "\\(\\frac{2x - 1}{9}\\)",
      "\\(\\frac{9x + 22}{20}\\)"
    ],
    "answer": "0",
    "hint": "Common denominator 20.",
    "solution": "\\(\\frac{5(x+2) + 4(x-3)}{20} = \\frac{5x+10+4x-12}{20} = \\frac{9x-2}{20}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x + 2\\}\\{4\\} + \\frac\\{x - 3\\}\\{5\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{5(x+2) + 4(x-3)\\}\\{20\\} = \\frac\\{5x+10+4x-12\\}\\{20\\} = \\frac\\{9x-2\\}\\{20\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{4}{x + 2} + \\frac{5}{x - 3}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{9x - 2}{(x + 2)(x - 3)}\\)",
      "\\(\\frac{9}{2x - 1}\\)",
      "\\(\\frac{x-2}{x^2}\\)",
      "\\(\\frac{9x + 22}{(x+2)(x-3)}\\)"
    ],
    "answer": "0",
    "hint": "Common denominator $(x+2)(x-3)$.",
    "solution": "\\(\\frac{4(x-3) + 5(x+2)}{(x+2)(x-3)} = \\frac{4x-12+5x+10}{(x+2)(x-3)} = \\frac{9x-2}{(x+2)(x-3)}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{4\\}\\{x + 2\\} + \\frac\\{5\\}\\{x - 3\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{4(x-3) + 5(x+2)\\}\\{(x+2)(x-3)\\} = \\frac\\{4x-12+5x+10\\}\\{(x+2)(x-3)\\} = \\frac\\{9x-2\\}\\{(x+2)(x-3)\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x + 3}{2} - \\frac{x - 1}{3}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{2x + 11}{6}\\)",
      "\\(\\frac{x + 11}{5}\\)",
      "\\(\\frac{x + 7}{6}\\)",
      "\\(\\frac{x + 11}{6}\\)"
    ],
    "answer": "3",
    "hint": "Common denominator 6. Be careful with the minus sign.",
    "solution": "\\(\\frac{3(x+3) - 2(x-1)}{6} = \\frac{3x+9-2x+2}{6} = \\frac{x+11}{6}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x + 3\\}\\{2\\} - \\frac\\{x - 1\\}\\{3\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{3(x+3) - 2(x-1)\\}\\{6\\} = \\frac\\{3x+9-2x+2\\}\\{6\\} = \\frac\\{x+11\\}\\{6\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{3}{x + 3} - \\frac{2}{x - 1}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x - 9}{(x + 3)(x - 1)}\\)",
      "\\(\\frac{x-3}{x^2}\\)",
      "\\(\\frac{1}{2x + 2}\\)",
      "\\(\\frac{x + 9}{(x + 3)(x - 1)}\\)"
    ],
    "answer": "0",
    "hint": "Common denominator $(x+3)(x-1)$.",
    "solution": "\\(\\frac{3(x-1) - 2(x+3)}{(x+3)(x-1)} = \\frac{3x-3-2x-6}{(x+3)(x-1)} = \\frac{x-9}{(x+3)(x-1)}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{3\\}\\{x + 3\\} - \\frac\\{2\\}\\{x - 1\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{3(x-1) - 2(x+3)\\}\\{(x+3)(x-1)\\} = \\frac\\{3x-3-2x-6\\}\\{(x+3)(x-1)\\} = \\frac\\{x-9\\}\\{(x+3)(x-1)\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{x}{3} - \\frac{x + 4}{6}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x - 4}{6}\\)",
      "\\(\\frac{x + 4}{6}\\)",
      "\\(\\frac{3x + 4}{6}\\)",
      "\\(\\frac{x - 4}{3}\\)"
    ],
    "answer": "0",
    "hint": "Common denominator 6.",
    "solution": "\\(\\frac{2x - (x+4)}{6} = \\frac{x-4}{6}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x\\}\\{3\\} - \\frac\\{x + 4\\}\\{6\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{2x - (x+4)\\}\\{6\\} = \\frac\\{x-4\\}\\{6\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "\\(\\frac{5}{x} - \\frac{x}{x + 2}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{10 + 5x - x^2}{x(x + 2)}\\)",
      "\\(\\frac{5x + 10 - x}{x(x+2)}\\)",
      "\\(\\frac{5}{x+2}\\)",
      "\\(\\frac{10 - x^2}{x(x+2)}\\)"
    ],
    "answer": "0",
    "hint": "Common denominator $x(x+2)$.",
    "solution": "\\(\\frac{5(x+2) - x^2}{x(x+2)} = \\frac{5x+10-x^2}{x(x+2)}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{5\\}\\{x\\} - \\frac\\{x\\}\\{x + 2\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{5(x+2) - x^2\\}\\{x(x+2)\\} = \\frac\\{5x+10-x^2\\}\\{x(x+2)\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{8a + 4b}{12a + 6b}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{8}{12}\\)",
      "\\(\\frac{3}{4}\\)",
      "\\(\\frac{2}{3}\\)"
    ],
    "answer": "3",
    "hint": "Factor out the HCF in numerator and denominator.",
    "solution": "\\(\\frac{4(2a+b)}{6(2a+b)} = \\frac{4}{6} = \\frac{2}{3}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{8a + 4b\\}\\{12a + 6b\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{4(2a+b)\\}\\{6(2a+b)\\} = \\frac\\{4\\}\\{6\\} = \\frac\\{2\\}\\{3\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{3x - 3y}{x^2 - y^2}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{1}{x + y}\\)",
      "\\(\\frac{3x}{x^2}\\)",
      "\\(\\frac{3}{x - y}\\)",
      "\\(\\frac{3}{x + y}\\)"
    ],
    "answer": "3",
    "hint": "Factor numerator and denominator.",
    "solution": "\\(\\frac{3(x-y)}{(x-y)(x+y)} = \\frac{3}{x+y}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{3x - 3y\\}\\{x^2 - y^2\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{3(x-y)\\}\\{(x-y)(x+y)\\} = \\frac\\{3\\}\\{x+y\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{x^2 + 3x - 10}{x^2 - x - 2}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x + 5}{x + 1}\\)",
      "\\(\\frac{x + 2}{x + 1}\\)",
      "\\(\\frac{x + 5}{x - 2}\\)",
      "\\(\\frac{x - 5}{x - 1}\\)"
    ],
    "answer": "0",
    "hint": "Factor the quadratics.",
    "solution": "\\(\\frac{(x+5)(x-2)}{(x+1)(x-2)} = \\frac{x+5}{x+1}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x^2 + 3x - 10\\}\\{x^2 - x - 2\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{(x+5)(x-2)\\}\\{(x+1)(x-2)\\} = \\frac\\{x+5\\}\\{x+1\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{3x^2 + 4x + 1}{3x^3 + x^2 + 3x + 1}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x^2 + 1}{x + 1}\\)",
      "\\(\\frac{1}{x + 1}\\)",
      "\\(\\frac{x + 1}{x^2 + 1}\\)",
      "\\(\\frac{x + 1}{x + 1}\\)"
    ],
    "answer": "2",
    "hint": "Factor by grouping in the denominator.",
    "solution": "\\(\\frac{(3x+1)(x+1)}{x^2(3x+1) + (3x+1)} = \\frac{(3x+1)(x+1)}{(3x+1)(x^2+1)} = \\frac{x+1}{x^2+1}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{3x^2 + 4x + 1\\}\\{3x^3 + x^2 + 3x + 1\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{(3x+1)(x+1)\\}\\{x^2(3x+1) + (3x+1)\\} = \\frac\\{(3x+1)(x+1)\\}\\{(3x+1)(x^2+1)\\} = \\frac\\{x+1\\}\\{x^2+1\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{x - 3}{x^2 - 6x + 9}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(1\\)",
      "\\(\\frac{1}{x + 3}\\)",
      "\\(x - 3\\)",
      "\\(\\frac{1}{x - 3}\\)"
    ],
    "answer": "3",
    "hint": "Recognize the perfect square denominator.",
    "solution": "\\(\\frac{x-3}{(x-3)^2} = \\frac{1}{x-3}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{x - 3\\}\\{x^2 - 6x + 9\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{x-3\\}\\{(x-3)^2\\} = \\frac\\{1\\}\\{x-3\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1C",
    "topicCode": "1C",
    "topicTitle": "Algebraic fractions",
    "isManual": true,
    "question": "Simplify: \\(\\frac{2x^2 - 7x - 15}{4x^2 - 25}\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{x + 5}{2x + 5}\\)",
      "\\(\\frac{2x + 3}{2x - 5}\\)",
      "\\(\\frac{x - 5}{2x + 5}\\)",
      "\\(\\frac{x - 5}{2x - 5}\\)"
    ],
    "answer": "3",
    "hint": "Factor both numerator and denominator.",
    "solution": "\\(\\frac{(2x+3)(x-5)}{(2x-5)(2x+3)} = \\frac{x-5}{2x-5}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(\\frac\\{2x^2 - 7x - 15\\}\\{4x^2 - 25\\}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(\\frac\\{(2x+3)(x-5)\\}\\{(2x-5)(2x+3)\\} = \\frac\\{x-5\\}\\{2x-5\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(x^2 - 64 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{8, -8\\}\\)",
      "\\(\\{8\\}\\)",
      "\\(\\{64, -64\\}\\)",
      "\\(\\{8, 0\\}\\)"
    ],
    "answer": "0",
    "hint": "Use difference of squares.",
    "solution": "\\((x-8)(x+8) = 0 \\Rightarrow x=8, -8\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 64 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x-8)(x+8) = 0 \\Rightarrow x=8, -8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(x^2 + 9x = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{0, 9\\}\\)",
      "\\(\\{9, -9\\}\\)",
      "\\(\\{0\\}\\)",
      "\\(\\{0, -9\\}\\)"
    ],
    "answer": "3",
    "hint": "Factor out x.",
    "solution": "\\(x(x+9) = 0 \\Rightarrow x=0, -9\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 9x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x(x+9) = 0 \\Rightarrow x=0, -9\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(x^2 + 8x + 12 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{6, 2\\}\\)",
      "\\(\\{-6, -2\\}\\)",
      "\\(\\{-6, 2\\}\\)",
      "\\(\\{-4, -3\\}\\)"
    ],
    "answer": "1",
    "hint": "Find numbers that multiply to 12 and add to 8.",
    "solution": "\\((x+6)(x+2) = 0 \\Rightarrow x=-6, -2\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 8x + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x+6)(x+2) = 0 \\Rightarrow x=-6, -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(x^2 + 2x - 15 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{5, -3\\}\\)",
      "\\(\\{-5, 3\\}\\)",
      "\\(\\{-5, -3\\}\\)",
      "\\(\\{5, 3\\}\\)"
    ],
    "answer": "1",
    "hint": "Find numbers that multiply to -15 and add to 2.",
    "solution": "\\((x+5)(x-3) = 0 \\Rightarrow x=-5, 3\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 2x - 15 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x+5)(x-3) = 0 \\Rightarrow x=-5, 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(x^2 - 9x + 20 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{10, 2\\}\\)",
      "\\(\\{4, 5\\}\\)",
      "\\(\\{4, -5\\}\\)",
      "\\(\\{-4, -5\\}\\)"
    ],
    "answer": "1",
    "hint": "Find numbers that multiply to 20 and add to -9.",
    "solution": "\\((x-4)(x-5) = 0 \\Rightarrow x=4, 5\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 9x + 20 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x-4)(x-5) = 0 \\Rightarrow x=4, 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(3x^2 + 2x - 5 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{1, 5/3\\}\\)",
      "\\(\\{-1, 5/3\\}\\)",
      "\\(\\{1, -5/3\\}\\)",
      "\\(\\{5, -1\\}\\)"
    ],
    "answer": "2",
    "hint": "Factor by grouping.",
    "solution": "\\((3x+5)(x-1) = 0 \\Rightarrow x=1, -5/3\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 3x^2 + 2x - 5 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((3x+5)(x-1) = 0 \\Rightarrow x=1, -5/3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(2x^2 - 11x + 12 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{1.5, 4\\}\\)",
      "\\(\\{-1.5, -4\\}\\)",
      "\\(\\{1.5, -4\\}\\)",
      "\\(\\{3, 4\\}\\)"
    ],
    "answer": "0",
    "hint": "Factor by grouping.",
    "solution": "\\((2x-3)(x-4) = 0 \\Rightarrow x=1.5, 4\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 2x^2 - 11x + 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((2x-3)(x-4) = 0 \\Rightarrow x=1.5, 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1D",
    "topicCode": "1D",
    "topicTitle": "Quadratic equations",
    "isManual": true,
    "question": "Solve \\(4x^2 + 7x - 2 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\{0.25, -2\\}\\)",
      "\\(\\{1, -2\\}\\)",
      "\\(\\{0.5, -1\\}\\)",
      "\\(\\{-0.25, 2\\}\\)"
    ],
    "answer": "0",
    "hint": "Factor by grouping.",
    "solution": "\\((4x-1)(x+2) = 0 \\Rightarrow x=0.25, -2\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 4x^2 + 7x - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((4x-1)(x+2) = 0 \\Rightarrow x=0.25, -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(x^2 - 6x + 4 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(3 \\pm \\sqrt{13}\\)",
      "\\(6 \\pm \\sqrt{5}\\)",
      "\\(3 + \\sqrt{5}\\)",
      "\\(3 \\pm \\sqrt{5}\\)"
    ],
    "answer": "3",
    "hint": "Use quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
    "solution": "\\(x = \\frac{6 \\pm \\sqrt{36-16}}{2} = \\frac{6 \\pm \\sqrt{20}}{2} = 3 \\pm \\sqrt{5}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 6x + 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{6 \\pm \\sqrt\\{36-16\\}\\}\\{2\\} = \\frac\\{6 \\pm \\sqrt\\{20\\}\\}\\{2\\} = 3 \\pm \\sqrt\\{5\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(x^2 + 5x - 2 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{5 \\pm \\sqrt{33}}{2}\\)",
      "\\(\\frac{-5 \\pm \\sqrt{17}}{2}\\)",
      "\\(-5 \\pm \\sqrt{33}\\)",
      "\\(\\frac{-5 \\pm \\sqrt{33}}{2}\\)"
    ],
    "answer": "3",
    "hint": "Apply formula with $a=1, b=5, c=-2$.",
    "solution": "\\(x = \\frac{-5 \\pm \\sqrt{25+8}}{2} = \\frac{-5 \\pm \\sqrt{33}}{2}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 5x - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{-5 \\pm \\sqrt\\{25+8\\}\\}\\{2\\} = \\frac\\{-5 \\pm \\sqrt\\{33\\}\\}\\{2\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(x^2 + 4x - 1 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(-2 + \\sqrt{5}\\)",
      "\\(2 \\pm \\sqrt{5}\\)",
      "\\(-2 \\pm \\sqrt{5}\\)",
      "\\(-2 \\pm \\sqrt{17}\\)"
    ],
    "answer": "2",
    "hint": "Apply formula and simplify surd.",
    "solution": "\\(x = \\frac{-4 \\pm \\sqrt{16+4}}{2} = \\frac{-4 \\pm \\sqrt{20}}{2} = -2 \\pm \\sqrt{5}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 4x - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{-4 \\pm \\sqrt\\{16+4\\}\\}\\{2\\} = \\frac\\{-4 \\pm \\sqrt\\{20\\}\\}\\{2\\} = -2 \\pm \\sqrt\\{5\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(2x^2 - 3x - 4 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{3 \\pm \\sqrt{41}}{4}\\)",
      "\\(\\frac{3 \\pm \\sqrt{41}}{2}\\)",
      "\\(\\frac{-3 \\pm \\sqrt{41}}{4}\\)",
      "\\(\\frac{3 \\pm \\sqrt{23}}{4}\\)"
    ],
    "answer": "0",
    "hint": "Apply formula with $a=2, b=-3, c=-4$.",
    "solution": "\\(x = \\frac{3 \\pm \\sqrt{9+32}}{4} = \\frac{3 \\pm \\sqrt{41}}{4}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 2x^2 - 3x - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{3 \\pm \\sqrt\\{9+32\\}\\}\\{4\\} = \\frac\\{3 \\pm \\sqrt\\{41\\}\\}\\{4\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(3x^2 + 5x - 1 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{-5 \\pm \\sqrt{13}}{6}\\)",
      "\\(\\frac{5 \\pm \\sqrt{37}}{6}\\)",
      "\\(-5 \\pm \\sqrt{37}\\)",
      "\\(\\frac{-5 \\pm \\sqrt{37}}{6}\\)"
    ],
    "answer": "3",
    "hint": "Apply formula with $a=3, b=5, c=-1$.",
    "solution": "\\(x = \\frac{-5 \\pm \\sqrt{25+12}}{6} = \\frac{-5 \\pm \\sqrt{37}}{6}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 3x^2 + 5x - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{-5 \\pm \\sqrt\\{25+12\\}\\}\\{6\\} = \\frac\\{-5 \\pm \\sqrt\\{37\\}\\}\\{6\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1E",
    "topicCode": "1E",
    "topicTitle": "Quadratic formula",
    "isManual": true,
    "question": "Solve \\(5x^2 - 8x + 2 = 0\\)",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(\\frac{-4 \\pm \\sqrt{6}}{5}\\)",
      "\\(\\frac{8 \\pm \\sqrt{24}}{10}\\)",
      "\\(\\frac{4 \\pm \\sqrt{24}}{5}\\)",
      "\\(\\frac{4 \\pm \\sqrt{6}}{5}\\)"
    ],
    "answer": "3",
    "hint": "Apply formula and simplify.",
    "solution": "\\(x = \\frac{8 \\pm \\sqrt{64-40}}{10} = \\frac{8 \\pm \\sqrt{24}}{10} = \\frac{4 \\pm \\sqrt{6}}{5}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve 5x^2 - 8x + 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x = \\frac\\{8 \\pm \\sqrt\\{64-40\\}\\}\\{10\\} = \\frac\\{8 \\pm \\sqrt\\{24\\}\\}\\{10\\} = \\frac\\{4 \\pm \\sqrt\\{6\\}\\}\\{5\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1F",
    "topicCode": "1F",
    "topicTitle": "Completing the square",
    "isManual": true,
    "question": "Solve \\(x^2 + 6x = 5\\) by completing the square.",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(-3 \\pm \\sqrt{5}\\)",
      "\\(-3 \\pm \\sqrt{14}\\)",
      "\\(-6 \\pm \\sqrt{14}\\)",
      "\\(3 \\pm \\sqrt{14}\\)"
    ],
    "answer": "1",
    "hint": "Add $(b/2)^2 = 9$ to both sides.",
    "solution": "\\(x^2 + 6x + 9 = 14 \\Rightarrow (x+3)^2 = 14 \\Rightarrow x = -3 \\pm \\sqrt{14}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 6x = 5 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 + 6x + 9 = 14 \\Rightarrow (x+3)^2 = 14 \\Rightarrow x = -3 \\pm \\sqrt\\{14\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1F",
    "topicCode": "1F",
    "topicTitle": "Completing the square",
    "isManual": true,
    "question": "Solve \\(x^2 - 8x + 4 = 0\\) by completing the square.",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(4 \\pm 2\\sqrt{3}\\)",
      "\\(4 \\pm \\sqrt{12}\\)",
      "\\(8 \\pm 2\\sqrt{3}\\)",
      "\\(-4 \\pm 2\\sqrt{3}\\)"
    ],
    "answer": "0",
    "hint": "Add $(b/2)^2 = 16$ after moving constant.",
    "solution": "\\(x^2 - 8x + 16 = 12 \\Rightarrow (x-4)^2 = 12 \\Rightarrow x = 4 \\pm \\sqrt{12} = 4 \\pm 2\\sqrt{3}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 8x + 4 = 0 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 - 8x + 16 = 12 \\Rightarrow (x-4)^2 = 12 \\Rightarrow x = 4 \\pm \\sqrt\\{12\\} = 4 \\pm 2\\sqrt\\{3\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1F",
    "topicCode": "1F",
    "topicTitle": "Completing the square",
    "isManual": true,
    "question": "Solve \\(x^2 - 4x = 11\\) by completing the square.",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(2 \\pm \\sqrt{11}\\)",
      "\\(4 \\pm \\sqrt{15}\\)",
      "\\(-2 \\pm \\sqrt{15}\\)",
      "\\(2 \\pm \\sqrt{15}\\)"
    ],
    "answer": "3",
    "hint": "Add $(b/2)^2 = 4$.",
    "solution": "\\(x^2 - 4x + 4 = 15 \\Rightarrow (x-2)^2 = 15 \\Rightarrow x = 2 \\pm \\sqrt{15}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 - 4x = 11 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 - 4x + 4 = 15 \\Rightarrow (x-2)^2 = 15 \\Rightarrow x = 2 \\pm \\sqrt\\{15\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "topicId": "y11a-1F",
    "topicCode": "1F",
    "topicTitle": "Completing the square",
    "isManual": true,
    "question": "Solve \\(x^2 + 12x + 10 = 0\\) by completing the square.",
    "difficulty": "medium",
    "timeLimit": 120,
    "type": "multiple_choice",
    "options": [
      "\\(6 \\pm \\sqrt{26}\\)",
      "\\(-6 \\pm \\sqrt{10}\\)",
      "\\(-6 \\pm \\sqrt{26}\\)",
      "\\(-12 \\pm \\sqrt{26}\\)"
    ],
    "answer": "2",
    "hint": "Add $(b/2)^2 = 36$.",
    "solution": "\\(x^2 + 12x + 36 = 26 \\Rightarrow (x+6)^2 = 26 \\Rightarrow x = -6 \\pm \\sqrt{26}\\)",
    "isActive": true,
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Solve x^2 + 12x + 10 = 0 by completing the square.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2 + 12x + 36 = 26 \\Rightarrow (x+6)^2 = 26 \\Rightarrow x = -6 \\pm \\sqrt\\{26\\}\\)",
        "graphData": null
      }
    ]
  }
];

// 2. Medium Questions (72 items)
export const mediumQuestions = [
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(4(x - 3)\\)",
    "answer": "4x-12",
    "solution": "1. \\(4x - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(4 \\times (x) - 4 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(4x-12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(5(a - 2)\\)",
    "answer": "5a-10",
    "solution": "1. \\(5a - 10\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(5 \\times (a) - 5 \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(5a-10\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-2(y - 5)\\)",
    "answer": "-2y+10",
    "solution": "1. \\(-2y + 10\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-2 \\times (y) - -2 \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-2y+10\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-3(z + 4)\\)",
    "answer": "-3z-12",
    "solution": "1. \\(-3z - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3 \\times (z) + -3 \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-3z-12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(6(2x + 3)\\)",
    "answer": "12x+18",
    "solution": "1. \\(12x + 18\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(6 \\times (2x) + 6 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(12x+18\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-(x + 7)\\)",
    "answer": "-x-7",
    "solution": "1. \\(-x - 7\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(-(x + 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-x-7\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(3(a + 4)\\)",
    "answer": "3a+12",
    "solution": "1. \\(3a + 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(3 \\times (a) + 3 \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(3a+12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(7(x - 2)\\)",
    "answer": "7x-14",
    "solution": "1. \\(7x - 14\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(7 \\times (x) - 7 \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(7x-14\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-4(y + 3)\\)",
    "answer": "-4y-12",
    "solution": "1. \\(-4y - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-4 \\times (y) + -4 \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-4y-12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-2(5 - z)\\)",
    "answer": "-10+2z",
    "solution": "1. \\(-10 + 2z\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-2 \\times (5) - -2 \\times (z)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-10+2z\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(2(x + 3y)\\)",
    "answer": "2x+6y",
    "solution": "1. \\(2x + 6y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2 \\times (x) + 2 \\times (3y)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2x+6y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-3(p - 2q)\\)",
    "answer": "-3p+6q",
    "solution": "1. \\(-3p + 6q\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3 \\times (p) - -3 \\times (2q)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-3p+6q\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(k(x - 5)\\)",
    "answer": "kx-5k",
    "solution": "1. \\(kx - 5k\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(k \\times (x) - k \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(kx-5k\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-y(y - 2)\\)",
    "answer": "-y^2+2y",
    "solution": "1. \\(-y^2 + 2y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-y \\times (y) - -y \\times (2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-y^2+2y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(x(x + 5)\\)",
    "answer": "x^2+5x",
    "solution": "1. \\(x^2 + 5x\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(x \\times (x) + x \\times (5)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(x^2+5x\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(2a(a - 3)\\)",
    "answer": "2a^2-6a",
    "solution": "1. \\(2a^2 - 6a\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2a \\times (a) - 2a \\times (3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2a^2-6a\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-3y(2y + 1)\\)",
    "answer": "-6y^2-3y",
    "solution": "1. \\(-6y^2 - 3y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-3y \\times (2y) + -3y \\times (1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-6y^2-3y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(4(3x - 2y)\\)",
    "answer": "12x-8y",
    "solution": "1. \\(12x - 8y\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(4 \\times (3x) - 4 \\times (2y)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(12x-8y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(-k(k^2 - 4)\\)",
    "answer": "-k^3+4k",
    "solution": "1. \\(-k^3 + 4k\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(-k \\times (k^2) - -k \\times (4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(-k^3+4k\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\(2x(y - z)\\)",
    "answer": "2xy-2xz",
    "solution": "1. \\(2xy - 2xz\\)",
    "solutionSteps": [
      {
        "explanation": "Distribute the term outside the parentheses to each term inside.",
        "workingOut": "\\(2x \\times (y) - 2x \\times (z)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the multiplications and simplify the final expression.",
        "workingOut": "\\(2xy-2xz\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(3(x + 2) - 2x\\)",
    "options": [
      {
        "text": "\\(x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(x + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(x + 2) - 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x + 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(2a + 4 + 3(a - 1)\\)",
    "options": [
      {
        "text": "\\(5a + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5a - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(5a + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2a + 4 + 3(a - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5a + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(7 - (x + 2)\\)",
    "options": [
      {
        "text": "\\(5 - x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9 - x\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(5 - x\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(7 - (x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5 - x\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)",
    "options": [
      {
        "text": "\\(x - 5y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x + y\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(x + y\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((3x - 2y) - (2x - 3y)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x + y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)",
    "options": [
      {
        "text": "\\(-x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-x + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(-x - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(x - 3) - 3(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-x - 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(5(x + 1) - 3x\\)",
    "options": [
      {
        "text": "\\(2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(2x + 5\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(5(x + 1) - 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2x + 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(2(3a - 4) + 5\\)",
    "options": [
      {
        "text": "\\(6a - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6a + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(6a - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(3a - 4) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(6a - 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(10 - 2(y + 4)\\)",
    "options": [
      {
        "text": "\\(18 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2 - 2y\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(2 - 2y\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(10 - 2(y + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2 - 2y\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(4(x - 2) - 3(x + 1)\\)",
    "options": [
      {
        "text": "\\(7x - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(x - 11\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(4(x - 2) - 3(x + 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x - 11\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(3(2a + b) + 2(a - 2b)\\)",
    "options": [
      {
        "text": "\\(8a + b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a - b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a - 3b\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a - b\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(8a - b\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(3(2a + b) + 2(a - 2b)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(8a - b\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(x(x + 2) - x(x - 3)\\)",
    "options": [
      {
        "text": "\\(-x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^2 + 5x\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(5x\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(x(x + 2) - x(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(5x\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\(2(p - q) - (p + q)\\)",
    "options": [
      {
        "text": "\\(p - 3q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p - q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p + q\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p - q\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(p - 3q\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(2(p - q) - (p + q)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(p - 3q\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x + 1)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^2 + 5x + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(x^2 + 5x + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x + 1)(x + 4) = x \\times x + x \\times 4 + 1 \\times x ++ 1 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 + 5x + 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((y + 3)(y + 2)\\)",
    "options": [
      {
        "text": "\\(y^2 + 5y + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 6y + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + 5y + 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(y^2 + 5y + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((y + 3)(y + 2) = y \\times y + y \\times 2 + 3 \\times y ++ 3 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(y^2 + 5y + 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((t + 5)(t - 2)\\)",
    "options": [
      {
        "text": "\\(t^2 + 3t - 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 3t + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 7t - 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 - 3t - 10\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(t^2 + 3t - 10\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((t + 5)(t - 2) = t \\times t - t \\times 2 + 5 \\times t +- 5 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(t^2 + 3t - 10\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x - 3)(x + 1)\\)",
    "options": [
      {
        "text": "\\(x^2 - 4x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2x - 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 2x - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(x^2 - 2x - 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x - 3)(x + 1) = x \\times x + x \\times 1 - 3 \\times x -+ 3 \\times 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 - 2x - 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((3a + 1)(a + 2)\\)",
    "options": [
      {
        "text": "\\(3a^2 + 7a + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 7a + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a^2 + 7a + 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3a^2 + 6a + 2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(3a^2 + 7a + 2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((3a + 1)(a + 2) = 3a \\times a + 3a \\times 2 + 1 \\times a ++ 1 \\times 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(3a^2 + 7a + 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x + 2)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + 7x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 10x + 7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 7x + 10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x + 7\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(x^2 + 7x + 10\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x + 2)(x + 5) = x \\times x + x \\times 5 + 2 \\times x ++ 2 \\times 5\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(x^2 + 7x + 10\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((a - 3)(a - 4)\\)",
    "options": [
      {
        "text": "\\(a^2 - 7a + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 7a + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 7a - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(a^2 - 7a + 12\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((a - 3)(a - 4) = a \\times a - a \\times 4 - 3 \\times a -- 3 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(a^2 - 7a + 12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((2y + 1)(y + 3)\\)",
    "options": [
      {
        "text": "\\(2y^2 + 7y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y^2 + 6y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2y^2 + 5y + 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3y^2 + 7y + 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(2y^2 + 7y + 3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((2y + 1)(y + 3) = 2y \\times y + 2y \\times 3 + 1 \\times y ++ 1 \\times 3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(2y^2 + 7y + 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((3k - 2)(k + 4)\\)",
    "options": [
      {
        "text": "\\(3k^2 - 10k - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 10k - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 10k + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3k^2 + 12k - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(3k^2 + 10k - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((3k - 2)(k + 4) = 3k \\times k + 3k \\times 4 - 2 \\times k -+ 2 \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(3k^2 + 10k - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x + 6)(x - 6)\\)",
    "options": [
      {
        "text": "\\(x^2 - 12x + 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 36\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(x^2 - 36\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((x - 6)(x + 6) = (x)^2 - (6)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(x^2 - 36\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((2a - 1)(2a + 1)\\)",
    "options": [
      {
        "text": "\\(2a^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 4a - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(4a^2 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2a - 1)(2a + 1) = (2a)^2 - (1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(4a^2 - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((t + 4)^2\\)",
    "options": [
      {
        "text": "\\(t^2 + 8t + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 4t + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 8t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(t^2 + 8t + 16\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((t + 4)^2 = (t)^2 + 2(t)(4) + (4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(t^2 + 8t + 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((2x - 3)^2\\)",
    "options": [
      {
        "text": "\\(2x^2 - 12x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 12x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 6x + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(4x^2 - 12x + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2x - 3)^2 = (2x)^2 - 2(2x)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4x^2 - 12x + 9\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((A + B)(A + B)\\)",
    "options": [
      {
        "text": "\\(2A + 2B\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(A^2 + 2AB + B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((A - B)(A + B) = (A)^2 - (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(A^2 + 2AB + B^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((A - B)^2\\)",
    "options": [
      {
        "text": "\\(A^2 - 2AB - B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(A^2 - 2AB + B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((A - B)^2 = (A)^2 - 2(A)(B) + (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(A^2 - 2AB + B^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((A - B)(A + B)\\)",
    "options": [
      {
        "text": "\\(A^2 - 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 - B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + 2AB + B^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(A^2 + B^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(A^2 - B^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((A - B)(A + B) = (A)^2 - (B)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(A^2 - B^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((m + n)^2\\)",
    "answer": "m^2+2mn+n^2",
    "solution": "1. \\(m^2 + 2mn + n^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((m + n)^2 = (m)^2 + 2(m)(n) + (n)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(m^2+2mn+n^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((p - q)^2\\)",
    "answer": "p^2-2pq+q^2",
    "solution": "1. \\(p^2 - 2pq + q^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((p - q)^2 = (p)^2 - 2(p)(q) + (q)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(p^2-2pq+q^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((u - v)(u + v)\\)",
    "answer": "u^2-v^2",
    "solution": "1. \\(u^2 - v^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((u - v)(u + v) = (u)^2 - (v)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(u^2-v^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((x + 5)^2\\)",
    "answer": "x^2+10x+25",
    "solution": "1. \\(x^2 + 10x + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((x + 5)^2 = (x)^2 + 2(x)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(x^2+10x+25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((y - 3)^2\\)",
    "answer": "y^2-6y+9",
    "solution": "1. \\(y^2 - 6y + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((y - 3)^2 = (y)^2 - 2(y)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(y^2-6y+9\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((k + 8)^2\\)",
    "answer": "k^2+16k+64",
    "solution": "1. \\(k^2 + 16k + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((k + 8)^2 = (k)^2 + 2(k)(8) + (8)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(k^2+16k+64\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((a - 7)(a + 7)\\)",
    "answer": "a^2-49",
    "solution": "1. \\(a^2 - 49\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((a - 7)(a + 7) = (a)^2 - (7)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(a^2-49\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((10 + b)(10 - b)\\)",
    "answer": "100-b^2",
    "solution": "1. \\(100 - b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((10 - b)(10 + b) = (10)^2 - (b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(100-b^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((5 + c)^2\\)",
    "answer": "c^2+10c+25",
    "solution": "1. \\(25 + 10c + c^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5 + c)^2 = (5)^2 + 2(5)(c) + (c)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(c^2+10c+25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((11 - g)^2\\)",
    "answer": "121-22g+g^2",
    "solution": "1. \\(121 - 22g + g^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((11 - g)^2 = (11)^2 - 2(11)(g) + (g)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(121-22g+g^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((h + 12)(h - 12)\\)",
    "answer": "h^2-144",
    "solution": "1. \\(h^2 - 144\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((h - 12)(h + 12) = (h)^2 - (12)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(h^2-144\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand: \\((i + 13)^2\\)",
    "answer": "i^2+26i+169",
    "solution": "1. \\(i^2 + 26i + 169\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((i + 13)^2 = (i)^2 + 2(i)(13) + (13)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(i^2+26i+169\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((3x + 1)^2\\)",
    "options": [
      {
        "text": "\\(9x^2 + 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 6x + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(9x^2 + 6x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((3x + 1)^2 = (3x)^2 + 2(3x)(1) + (1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(9x^2 + 6x + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((4y - 5)^2\\)",
    "options": [
      {
        "text": "\\(8y^2 - 40y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 20y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 40y + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16y^2 - 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(16y^2 - 40y + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4y - 5)^2 = (4y)^2 - 2(4y)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16y^2 - 40y + 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((2z + 3)^2\\)",
    "options": [
      {
        "text": "\\(4z^2 + 6z + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4z^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2z^2 + 12z + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4z^2 + 12z + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(4z^2 + 12z + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((2z + 3)^2 = (2z)^2 + 2(2z)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(4z^2 + 12z + 9\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((5a + 2b)^2\\)",
    "options": [
      {
        "text": "\\(10a^2 + 20ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 10ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 20ab + 4b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25a^2 + 4b^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(25a^2 + 20ab + 4b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5a + 2b)^2 = (5a)^2 + 2(5a)(2b) + (2b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(25a^2 + 20ab + 4b^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((3p + 4q)(3p - 4q)\\)",
    "options": [
      {
        "text": "\\(9p^2 + 16q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3p^2 - 4q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p^2 - 24pq + 16q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9p^2 - 16q^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(9p^2 - 16q^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((3p - 4q)(3p + 4q) = (3p)^2 - (4q)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(9p^2 - 16q^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((2u - 5v)(2u + 5v)\\)",
    "options": [
      {
        "text": "\\(4u^2 + 25v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2u^2 - 5v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - 25v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - 20uv + 25v^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(4u^2 - 25v^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((2u - 5v)(2u + 5v) = (2u)^2 - (5v)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(4u^2 - 25v^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((4j + 3)^2\\)",
    "options": [
      {
        "text": "\\(16j^2 + 24j + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16j^2 + 12j + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16j^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8j^2 + 24j + 9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(16j^2 + 24j + 9\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((4j + 3)^2 = (4j)^2 + 2(4j)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(16j^2 + 24j + 9\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((5x - 2y)^2\\)",
    "options": [
      {
        "text": "\\(5x^2 - 20xy + 2y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 - 20xy + 4y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 - 10xy + 4y^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\(25x^2 - 20xy + 4y^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((5x - 2y)^2 = (5x)^2 - 2(5x)(2y) + (2y)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(25x^2 - 20xy + 4y^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((6 + 7n)(6 - 7n)\\)",
    "options": [
      {
        "text": "\\(36 - 14n\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(49n^2 - 36\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36 + 49n^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(36 - 49n^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "1. \\(36 - 49n^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((6 - 7n)(6 + 7n) = (6)^2 - (7n)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(36 - 49n^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((9 - 2m)^2\\)",
    "options": [
      {
        "text": "\\(81 - 18m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(81 - 36m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18 - 36m + 4m^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(81 + 4m^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(81 - 36m + 4m^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((9 - 2m)^2 = (9)^2 - 2(9)(2m) + (2m)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(81 - 36m + 4m^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((8a + 3b)^2\\)",
    "options": [
      {
        "text": "\\(64a^2 + 48ab + 9b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64a^2 + 24ab + 9b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16a^2 + 48ab + 6b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64a^2 + 9b^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(64a^2 + 48ab + 9b^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((8a + 3b)^2 = (8a)^2 + 2(8a)(3b) + (3b)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(64a^2 + 48ab + 9b^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "medium",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand: \\((10 - 7k)^2\\)",
    "options": [
      {
        "text": "\\(100 - 140k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100 - 70k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20 - 140k + 49k^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100 + 49k^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(100 - 140k + 49k^2\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\((10 - 7k)^2 = (10)^2 - 2(10)(7k) + (7k)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(100 - 140k + 49k^2\\)",
        "graphData": null
      }
    ]
  }
];

// 3. Hard Questions (112 items)
export const hardQuestions = [
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((t + \\frac{1}{t})^2\\)",
    "options": [
      {
        "text": "\\(t^2 + \\frac{2}{t} + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + 2 + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2t + \\frac{2}{t}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^2 + \\frac{1}{t^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\((t)^2 + 2(t)(\\frac{1}{t}) + (\\frac{1}{t})^2\\)\n2. \\(t^2 + 2 + \\frac{1}{t^2}\\)\n\nResult: **\\(t^2 + 2 + \\frac{1}{t^2}\\)**",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\(\\left(t + \\frac\\{1\\}\\{t\\}\\right)^2 = (t)^2 + 2\\left(t\\right)\\left(\\frac\\{1\\}\\{t\\}\\right) + \\left(\\frac\\{1\\}\\{t\\}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(= t^2 + 2 + \\frac\\{1\\}\\{t\\}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified expression.",
        "workingOut": "\\((t)^2 + 2(t)(\\frac\\{1\\}\\{t\\}) + (\\frac\\{1\\}\\{t\\})^2\n2. t^2 + 2 + \\frac\\{1\\}\\{t^2\\}\n\nResult: **t^2 + 2 + \\frac\\{1\\}\\{t^2\\}**\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x - \\frac{2}{x})^2\\)",
    "options": [
      {
        "text": "\\(x^2 - 4x + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 2 + \\frac{4}{x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\(x^2 - 2(x)(\\frac{2}{x}) + (\\frac{2}{x})^2 = x^2 - 4 + \\frac{4}{x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the perfect square identity: (A ± B)² = A² ± 2AB + B².",
        "workingOut": "\\(\\left(x - \\frac\\{2\\}\\{x\\}\\right)^2 = (x)^2 - 2\\left(x\\right)\\left(\\frac\\{2\\}\\{x\\}\\right) + \\left(\\frac\\{2\\}\\{x\\}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the terms.",
        "workingOut": "\\(= x - 2 + \\frac\\{2\\}\\{x\\}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final simplified expression.",
        "workingOut": "\\(x^2 - 2(x)(\\frac\\{2\\}\\{x\\}) + (\\frac\\{2\\}\\{x\\})^2 = x^2 - 4 + \\frac\\{4\\}\\{x^2\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((y + \\frac{3}{y})(y - \\frac{3}{y})\\)",
    "options": [
      {
        "text": "\\(y^2 - \\frac{9}{y^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 + \\frac{9}{y^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^2 - 3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "solution": "1. \\(y^2 - (\\frac{3}{y})^2 = y^2 - \\frac{9}{y^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        "workingOut": "\\((y - \\frac\\{3\\}\\{y\\})(y + \\frac\\{3\\}\\{y\\}) = (y)^2 - (\\frac\\{3\\}\\{y\\})^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the squares.",
        "workingOut": "\\(y^2 - (\\frac\\{3\\}\\{y\\})^2 = y^2 - \\frac\\{9\\}\\{y^2\\}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Find the value of \\(103^2\\) using special expansions.",
    "answer": "10609",
    "solution": "1. \\((100 + 3)^2 = 100^2 + 2(100)(3) + 3^2\\)\n2. \\(10000 + 600 + 9 = 10609\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 103^2 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(10609\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Find the value of \\(998^2\\) using special expansions.",
    "answer": "996004",
    "solution": "1. \\((1000 - 2)^2 = 1000^2 - 2(1000)(2) + 2^2\\)\n2. \\(1000000 - 4000 + 4 = 996004\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 998^2 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(996004\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Find the value of \\(302 \\times 298\\) using special expansions.",
    "answer": "89996",
    "solution": "1. \\((300 + 2)(300 - 2) = 300^2 - 2^2\\)\n2. \\(90000 - 4 = 89996\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\(Find the value of 302 \\times 298 using special expansions.\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(89996\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x - y)(x^2 + xy + y^2)\\)",
    "options": [
      {
        "text": "\\(x^3 - 3x^2y + 3xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((x - y)^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "solution": "This is the difference of cubes identity: \\(x^3 - y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the brackets by multiplying each term of the first binomial by each term of the second.",
        "workingOut": "\\((x - y)(x^2 + xy + y^2) = x \\times x^2 + x \\times xy + y^2 - y \\times x^2 -+ y \\times xy + y^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the multiplication products and combine like terms.",
        "workingOut": "\\(This is the difference of cubes identity: x^3 - y^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand and simplify: \\((x + 3)^2 - (x + 2)^2\\)",
    "answer": "2x+5",
    "solution": "1. \\((x^2 + 6x + 9) - (x^2 + 4x + 4)\\)\n2. \\(x^2 + 6x + 9 - x^2 - 4x - 4 = 2x + 5\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((x + 3)^2 - (x + 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(2x+5\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand and simplify: \\((a - 4)^2 - (a - 4)(a + 4)\\)",
    "answer": "-8a+32",
    "solution": "1. \\((a^2 - 8a + 16) - (a^2 - 16)\\)\n2. \\(a^2 - 8a + 16 - a^2 + 16 = -8a + 32\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((a - 4)^2 - (a - 4)(a + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(-8a+32\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "short_answer",
    "question": "Expand and simplify: \\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)",
    "answer": "x^2-2x+4",
    "solution": "1. \\((2x^2 - 4x + x - 2) - (x^2 + 2x - 3x - 6)\\)\n2. \\((2x^2 - 3x - 2) - (x^2 - x - 6)\\)\n3. \\(x^2 - 2x + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\(x^2-2x+4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Expand and simplify: \\((x - 2)^3\\)",
    "options": [
      {
        "text": "\\(x^3 - 2x^2 + 4x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 + 12x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 4x^2 + 8x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "solution": "1. \\((x - 2)(x^2 - 4x + 4)\\)\n2. \\(x(x^2 - 4x + 4) - 2(x^2 - 4x + 4)\\)\n3. \\(x^3 - 4x^2 + 4x - 2x^2 + 8x - 8 = x^3 - 6x^2 + 12x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((x - 2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((x - 2)(x^2 - 4x + 4)\n2. x(x^2 - 4x + 4) - 2(x^2 - 4x + 4)\n3. x^3 - 4x^2 + 4x - 2x^2 + 8x - 8 = x^3 - 6x^2 + 12x - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "type": "multiple_choice",
    "question": "Simplify: \\((a + b + c)^2 - 2(ab + bc + ca)\\)",
    "options": [
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((a + b + c)^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 + 4(ab+bc+ca)\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "solution": "1. \\((a^2 + b^2 + c^2 + 2ab + 2bc + 2ca) - 2(ab + bc + ca) = a^2 + b^2 + c^2\\)",
    "solutionSteps": [
      {
        "explanation": "Expand the algebraic terms.",
        "workingOut": "\\((a + b + c)^2 - 2(ab + bc + ca)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression by combining like terms.",
        "workingOut": "\\((a^2 + b^2 + c^2 + 2ab + 2bc + 2ca) - 2(ab + bc + ca) = a^2 + b^2 + c^2\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + 1)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2 + 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + 1)^3 = x^3 + 3x^2 + 3x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + 1)^3 = (x)^3 + 3(x)^2(1) + 3(x)(1)^2 + (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(1) + 3(x)(1) + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 3x^2 + 3x + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + 2)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 6x^2 - 12x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 12x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 12x^2 + 24x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + 2)^3 = x^3 + 6x^2 + 12x + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + 2)^3 = (x)^3 + 3(x)^2(2) + 3(x)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(2) + 3(x)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 6x^2 + 12x + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x - 3)^3\\)",
    "options": [
      {
        "text": "\\(x^3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 18x^2 + 54x - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 9x^2 + 27x - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 9x^2 - 27x - 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x - 3)^3 = x^3 - 9x^2 + 27x - 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(3\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x - 3)^3 = (x)^3 - 3(x)^2(3) + 3(x)(3)^2 - (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 - 3(x^2)(3) + 3(x)(9) - 27\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 - 9x^2 + 27x - 27\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((y + 4)^3\\)",
    "options": [
      {
        "text": "\\(y^3 + 24y^2 + 96y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 12y^2 - 48y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 12y^2 + 48y + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 64\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((y + 4)^3 = y^3 + 12y^2 + 48y + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(y\\) and second term B = \\(4\\), then apply the cubic expansion formula.",
        "workingOut": "\\((y + 4)^3 = (y)^3 + 3(y)^2(4) + 3(y)(4)^2 + (4)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= y^3 + 3(y^2)(4) + 3(y)(16) + 64\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= y^3 + 12y^2 + 48y + 64\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((a - 5)^3\\)",
    "options": [
      {
        "text": "\\(a^3 - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 15a^2 - 75a - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 30a^2 + 150a - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 15a^2 + 75a - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((a - 5)^3 = a^3 - 15a^2 + 75a - 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(a\\) and second term B = \\(5\\), then apply the cubic expansion formula.",
        "workingOut": "\\((a - 5)^3 = (a)^3 - 3(a)^2(5) + 3(a)(5)^2 - (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= a^3 - 3(a^2)(5) + 3(a)(25) - 125\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= a^3 - 15a^2 + 75a - 125\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2x + 1)^3\\)",
    "options": [
      {
        "text": "\\(8x^3 + 24x^2 + 12x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 12x^2 + 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 12x^2 - 6x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2x\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8x^3 + 3(4x^2)(1) + 3(2x)(1) + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8x^3 + 12x^2 + 6x + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((3x - 2)^3\\)",
    "options": [
      {
        "text": "\\(27x^3 - 54x^2 + 36x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 108x^2 + 72x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27x^3 - 54x^2 - 36x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((3x - 2)^3 = 27x^3 - 54x^2 + 36x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(3x\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((3x - 2)^3 = (3x)^3 - 3(3x)^2(2) + 3(3x)(2)^2 - (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 27x^3 - 3(9x^2)(2) + 3(3x)(4) - 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 27x^3 - 54x^2 + 36x - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2a + 3)^3\\)",
    "options": [
      {
        "text": "\\(8a^3 + 36a^2 + 54a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 72a^2 + 108a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 36a^2 - 54a + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2a + 3)^3 = 8a^3 + 36a^2 + 54a + 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2a\\) and second term B = \\(3\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2a + 3)^3 = (2a)^3 + 3(2a)^2(3) + 3(2a)(3)^2 + (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8a^3 + 3(4a^2)(3) + 3(2a)(9) + 27\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8a^3 + 36a^2 + 54a + 27\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((4y - 1)^3\\)",
    "options": [
      {
        "text": "\\(64y^3 - 96y^2 + 24y - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 48y^2 - 12y - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 48y^2 + 12y - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((4y - 1)^3 = 64y^3 - 48y^2 + 12y - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(4y\\) and second term B = \\(1\\), then apply the cubic expansion formula.",
        "workingOut": "\\((4y - 1)^3 = (4y)^3 - 3(4y)^2(1) + 3(4y)(1)^2 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 64y^3 - 3(16y^2)(1) + 3(4y)(1) - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 64y^3 - 48y^2 + 12y - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((5t + 2)^3\\)",
    "options": [
      {
        "text": "\\(125t^3 + 150t^2 + 60t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 150t^2 - 60t + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(125t^3 + 300t^2 + 120t + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((5t + 2)^3 = 125t^3 + 150t^2 + 60t + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(5t\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((5t + 2)^3 = (5t)^3 + 3(5t)^2(2) + 3(5t)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 125t^3 + 3(25t^2)(2) + 3(5t)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 125t^3 + 150t^2 + 60t + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + y)^3\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2y - 3xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2y + 3xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2y + 6xy^2 + y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x\\) and second term B = \\(y\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x + y)^3 = (x)^3 + 3(x)^2(y) + 3(x)(y)^2 + (y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^3 + 3(x^2)(y) + 3(x)(y^2) + y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^3 + 3x^2y + 3xy^2 + y^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2x - y)^3\\)",
    "options": [
      {
        "text": "\\(8x^3 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 24x^2y + 12xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 12x^2y - 6xy^2 - y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((2x - y)^3 = 8x^3 - 12x^2y + 6xy^2 - y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(2x\\) and second term B = \\(y\\), then apply the cubic expansion formula.",
        "workingOut": "\\((2x - y)^3 = (2x)^3 - 3(2x)^2(y) + 3(2x)(y)^2 - (y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 8x^3 - 3(4x^2)(y) + 3(2x)(y^2) - y^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((a + 3b)^3\\)",
    "options": [
      {
        "text": "\\(a^3 + 3a^23b - 3a3b^2 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 6a^23b + 6a3b^2 + 3b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((a + 3b)^3 = a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(a\\) and second term B = \\(3b\\), then apply the cubic expansion formula.",
        "workingOut": "\\((a + 3b)^3 = (a)^3 + 3(a)^2(3b) + 3(a)(3b)^2 + (3b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= a^3 + 3(a^2)(3b) + 3(a)(3b^2) + 3b^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((3u - 2v)^3\\)",
    "options": [
      {
        "text": "\\(27u^3 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 27u^22v - 9u2v^2 - 2v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 54u^22v + 18u2v^2 - 2v^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((3u - 2v)^3 = 27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(3u\\) and second term B = \\(2v\\), then apply the cubic expansion formula.",
        "workingOut": "\\((3u - 2v)^3 = (3u)^3 - 3(3u)^2(2v) + 3(3u)(2v)^2 - (2v)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= 27u^3 - 3(9u^2)(2v) + 3(3u)(2v^2) - 2v^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= 27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x^2 + 2)^3\\)",
    "options": [
      {
        "text": "\\(x^6 + 12x^4 + 24x^ + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 6x^4 - 12x^ + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    "solution": "\\((x^2 + 2)^3 = x^6 + 6x^4 + 12x^ + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify the first term A = \\(x^2\\) and second term B = \\(2\\), then apply the cubic expansion formula.",
        "workingOut": "\\((x^2 + 2)^3 = (x^2)^3 + 3(x^2)^2(2) + 3(x^2)(2)^2 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the squares and products inside each term.",
        "workingOut": "\\(= x^6 + 3(x^4)(2) + 3(x^2)(4) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the coefficients to state the final polynomial expression.",
        "workingOut": "\\(= x^6 + 6x^4 + 12x^ + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x - 2)(x^2 + 2x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 3x2 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x - 2)(x^2 + 2x + 4) = x^3 - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(2\\).",
        "workingOut": "\\(A = x, \\quad B = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x - 2)((x)^2 + (x)(2) + (2)^2) = (x)^3 - (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 3)(x^2 - 3x + 9)\\)",
    "options": [
      {
        "text": "\\(x^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x3 + 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x + 3)(x^2 - 3x + 9) = x^3 + 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(3\\).",
        "workingOut": "\\(A = x, \\quad B = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x + 3)((x)^2 - (x)(3) + (3)^2) = (x)^3 + (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 + 27\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((y - 1)(y^2 + 1y + 1)\\)",
    "options": [
      {
        "text": "\\(y^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 - 3y1 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^3 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((y - 1)(y^2 + 1y + 1) = y^3 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(y\\) and B = \\(1\\).",
        "workingOut": "\\(A = y, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((y - 1)((y)^2 + (y)(1) + (1)^2) = (y)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= y^3 - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((a + 4)(a^2 - 4a + 16)\\)",
    "options": [
      {
        "text": "\\(a^3 + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 - 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^3 + 3a4 + 64\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((a + 4)(a^2 - 4a + 16) = a^3 + 64\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(a\\) and B = \\(4\\).",
        "workingOut": "\\(A = a, \\quad B = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((a + 4)((a)^2 - (a)(4) + (4)^2) = (a)^3 + (4)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= a^3 + 64\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((2x - 1)(4x^2 + 2x + 1)\\)",
    "options": [
      {
        "text": "\\(8x^3 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8x^3 - 32x1 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2x - 1)(4x^2 + 2x + 1) = 8x^3 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2x\\) and B = \\(1\\).",
        "workingOut": "\\(A = 2x, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2x - 1)((2x)^2 + (2x)(1) + (1)^2) = (2x)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8x^3 - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((3m + 2)(9m^2 - 6m + 4)\\)",
    "options": [
      {
        "text": "\\(27m^3 + 33m2 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27m^3 + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27m^3 - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3m^2 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((3m + 2)(9m^2 - 6m + 4) = 27m^3 + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(3m\\) and B = \\(2\\).",
        "workingOut": "\\(A = 3m, \\quad B = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((3m + 2)((3m)^2 - (3m)(2) + (2)^2) = (3m)^3 + (2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 27m^3 + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((p - q)(p^2 + qp + q^2)\\)",
    "options": [
      {
        "text": "\\(p^2 - q^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 + q^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 - 3pq - q^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^3 - q^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((p - q)(p^2 + qp + q^2) = p^3 - q^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(p\\) and B = \\(q\\).",
        "workingOut": "\\(A = p, \\quad B = q\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((p - q)((p)^2 + (p)(q) + (q)^2) = (p)^3 - (q)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= p^3 - q^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((2a + 3b)(4a^2 - 6ab + 3b^2)\\)",
    "options": [
      {
        "text": "\\(8a^3 - 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2a^2 + 3b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 32a3b + 3b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8a^3 + 3b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2a + 3b)(4a^2 - 6ab + 3b^2) = 8a^3 + 3b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2a\\) and B = \\(3b\\).",
        "workingOut": "\\(A = 2a, \\quad B = 3b\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2a + 3b)((2a)^2 - (2a)(3b) + (3b)^2) = (2a)^3 + (3b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8a^3 + 3b^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 - 1)(x^4 + 1x^2 + 1)\\)",
    "options": [
      {
        "text": "\\(x^4 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 3x^21 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x^2 - 1)(x^4 + 1x^2 + 1) = x^6 - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x^2\\) and B = \\(1\\).",
        "workingOut": "\\(A = x^2, \\quad B = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x^2 - 1)((x^2)^2 + (x^2)(1) + (1)^2) = (x^2)^3 - (1)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^6 - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((4y - 3)(16y^2 + 12y + 9)\\)",
    "options": [
      {
        "text": "\\(4y^2 - 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 34y3 - 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 + 27\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(64y^3 - 27\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((4y - 3)(16y^2 + 12y + 9) = 64y^3 - 27\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(4y\\) and B = \\(3\\).",
        "workingOut": "\\(A = 4y, \\quad B = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((4y - 3)((4y)^2 + (4y)(3) + (3)^2) = (4y)^3 - (3)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 64y^3 - 27\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((t + 5)(t^2 - 5t + 25)\\)",
    "options": [
      {
        "text": "\\(t^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 + 3t5 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^3 - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((t + 5)(t^2 - 5t + 25) = t^3 + 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(t\\) and B = \\(5\\).",
        "workingOut": "\\(A = t, \\quad B = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((t + 5)((t)^2 - (t)(5) + (5)^2) = (t)^3 + (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= t^3 + 125\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((2k - 5)(4k^2 + 10k + 25)\\)",
    "options": [
      {
        "text": "\\(2k^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 + 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 - 32k5 - 125\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8k^3 - 125\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((2k - 5)(4k^2 + 10k + 25) = 8k^3 - 125\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(2k\\) and B = \\(5\\).",
        "workingOut": "\\(A = 2k, \\quad B = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((2k - 5)((2k)^2 + (2k)(5) + (5)^2) = (2k)^3 - (5)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 8k^3 - 125\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 2y)(x^2 - 2xy + 2y^2)\\)",
    "options": [
      {
        "text": "\\(x^3 + 2y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2y^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2y^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x2y + 2y^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((x + 2y)(x^2 - 2xy + 2y^2) = x^3 + 2y^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(x\\) and B = \\(2y\\).",
        "workingOut": "\\(A = x, \\quad B = 2y\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((x + 2y)((x)^2 - (x)(2y) + (2y)^2) = (x)^3 + (2y)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= x^3 + 2y^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((3u - v)(9u^2 + 3uv + v^2)\\)",
    "options": [
      {
        "text": "\\(27u^3 - v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 - 33uv - v^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3u^2 - v^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(27u^3 + v^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((3u - v)(9u^2 + 3uv + v^2) = 27u^3 - v^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(3u\\) and B = \\(v\\).",
        "workingOut": "\\(A = 3u, \\quad B = v\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((3u - v)((3u)^2 + (3u)(v) + (v)^2) = (3u)^3 - (v)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= 27u^3 - v^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((a^2 + b)(a^4 - ba^2 + b^2)\\)",
    "options": [
      {
        "text": "\\(a^6 - b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^6 + 3a^2b + b^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2^2 + b^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^6 + b^3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    "solution": "\\((a^2 + b)(a^4 - ba^2 + b^2) = a^6 + b^3\\)",
    "solutionSteps": [
      {
        "explanation": "Identify that the expression is in the form \\((A \\pm B)(A^2 \\mp AB + B^2)\\) with A = \\(a^2\\) and B = \\(b\\).",
        "workingOut": "\\(A = a^2, \\quad B = b\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum/difference of cubes identity directly.",
        "workingOut": "\\((a^2 + b)((a^2)^2 - (a^2)(b) + (b)^2) = (a^2)^3 + (b)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the powers to find the final result.",
        "workingOut": "\\(= a^6 + b^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + y + z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + y + z)^2 = (x)^2 + (+y)^2 + (+z)^2 + 2(x)(+y) + 2(+y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(+y) + 2(+y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x - y + z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 - 2xy + 2yz + 2zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x - y + z)^2 = x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x - y + z)^2 = (x)^2 + (-y)^2 + (+z)^2 + 2(x)(-y) + 2(-y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(-y) + 2(-y)(+z) + 2(+z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + y - z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2 + 2xy - 2yz + 2zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + y - z)^2 = x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + y - z)^2 = (x)^2 + (+y)^2 + (-z)^2 + 2(x)(+y) + 2(+y)(-z) + 2(-z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2(x)(+y) + 2(+y)(-z) + 2(-z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((a - b - c)^2\\)",
    "options": [
      {
        "text": "\\(a^2 + b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + b^2 + c^2 - 2ab - 2bc + 2ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - b - c)^2 = (a)^2 + (-b)^2 + (-c)^2 + 2(a)(-b) + 2(-b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + b^2 + c^2 + 2(a)(-b) + 2(-b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2x + y + z)^2\\)",
    "options": [
      {
        "text": "\\(4x^2 + y^2 + z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - y^2 + z^2 - 4xy + 2yz - 4zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2x + y + z)^2 = 4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2x + y + z)^2 = (2x)^2 + (+y)^2 + (+z)^2 + 2(2x)(+y) + 2(+y)(+z) + 2(+z)(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4x^2 + y^2 + z^2 + 2(2x)(+y) + 2(+y)(+z) + 2(+z)(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x + 2y + 3z)^2\\)",
    "options": [
      {
        "text": "\\(x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 9z^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 4y^2 + 9z^2 - 4xy + 12yz - 6zx\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x + 2y + 3z)^2 = x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x + 2y + 3z)^2 = (x)^2 + (+2y)^2 + (+3z)^2 + 2(x)(+2y) + 2(+2y)(+3z) + 2(+3z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^2 + 4y^2 + 9z^2 + 2(x)(+2y) + 2(+2y)(+3z) + 2(+3z)(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((a - 3b + 2)^2\\)",
    "options": [
      {
        "text": "\\(a^2 - 9b^2 + 4 - 6ab + 12b - 4a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 9b^2 + 4 - 6ab + 12b + 4a\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - 3b + 2)^2 = a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - 3b + 2)^2 = (a)^2 + (-3b)^2 + (+2)^2 + 2(a)(-3b) + 2(-3b)(+2) + 2(+2)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + 9b^2 + 4 + 2(a)(-3b) + 2(-3b)(+2) + 2(+2)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((p + q - r)^2\\)",
    "options": [
      {
        "text": "\\(p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 + q^2 + r^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 + q^2 + r^2 + 2pq - 2qr + 2rp\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^2 - q^2 + r^2 - 2pq + 2qr - 2rp\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((p + q - r)^2 = p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((p + q - r)^2 = (p)^2 + (+q)^2 + (-r)^2 + 2(p)(+q) + 2(+q)(-r) + 2(-r)(p)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= p^2 + q^2 + r^2 + 2(p)(+q) + 2(+q)(-r) + 2(-r)(p)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((3x - 2y - z)^2\\)",
    "options": [
      {
        "text": "\\(9x^2 - 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2 - 12xy - 4yz + 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9x^2 + 4y^2 + z^2\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((3x - 2y - z)^2 = 9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((3x - 2y - z)^2 = (3x)^2 + (-2y)^2 + (-z)^2 + 2(3x)(-2y) + 2(-2y)(-z) + 2(-z)(3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 9x^2 + 4y^2 + z^2 + 2(3x)(-2y) + 2(-2y)(-z) + 2(-z)(3x)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2a + 2b - c)^2\\)",
    "options": [
      {
        "text": "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc + 4ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 4b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 - 4b^2 + c^2 - 8ab + 4bc - 4ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2a + 2b - c)^2 = 4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2a + 2b - c)^2 = (2a)^2 + (+2b)^2 + (-c)^2 + 2(2a)(+2b) + 2(+2b)(-c) + 2(-c)(2a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4a^2 + 4b^2 + c^2 + 2(2a)(+2b) + 2(+2b)(-c) + 2(-c)(2a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x^2 + x + 1)^2\\)",
    "options": [
      {
        "text": "\\(x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - x^2 + 1 - 2x^x + 2x - 2x^\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x^2 + x + 1)^2 = x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x^2 + x + 1)^2 = (x^2)^2 + (+x)^2 + (+1)^2 + 2(x^2)(+x) + 2(+x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2(x^2)(+x) + 2(+x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2x^x + 2x + 2x^\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((x^2 - x + 1)^2\\)",
    "options": [
      {
        "text": "\\(x^4 - 2x^3 + 3x^2 + 2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2x^3 - x^2 - 2x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((x^2 - x + 1)^2 = x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((x^2 - x + 1)^2 = (x^2)^2 + (-x)^2 + (+1)^2 + 2(x^2)(-x) + 2(-x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= x^4 + x^2 + 1 + 2(x^2)(-x) + 2(-x)(+1) + 2(+1)(x^2)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((a - 2b - c)^2\\)",
    "options": [
      {
        "text": "\\(a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 - 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 4b^2 + c^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^2 + 4b^2 + c^2 - 4ab - 4bc + 2ca\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((a - 2b - c)^2 = a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((a - 2b - c)^2 = (a)^2 + (-2b)^2 + (-c)^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= a^2 + 4b^2 + c^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((m + n - 3)^2\\)",
    "options": [
      {
        "text": "\\(m^2 - n^2 + 9 - 2mn + 6n - 6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9 + 2mn - 6n + 6m\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((m + n - 3)^2 = m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((m + n - 3)^2 = (m)^2 + (+n)^2 + (-3)^2 + 2(m)(+n) + 2(+n)(-3) + 2(-3)(m)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= m^2 + n^2 + 9 + 2(m)(+n) + 2(+n)(-3) + 2(-3)(m)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand: \\((2u - v + 4w)^2\\)",
    "options": [
      {
        "text": "\\(4u^2 + v^2 + 16w^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 + v^2 + 16w^2 - 4uv + 8vw + 16wu\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 - v^2 + 16w^2 - 4uv + 8vw - 16wu\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    "solution": "\\((2u - v + 4w)^2 = 4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
    "solutionSteps": [
      {
        "explanation": "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        "workingOut": "\\((2u - v + 4w)^2 = (2u)^2 + (-v)^2 + (+4w)^2 + 2(2u)(-v) + 2(-v)(+4w) + 2(+4w)(2u)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        "workingOut": "\\(= 4u^2 + v^2 + 16w^2 + 2(2u)(-v) + 2(-v)(+4w) + 2(+4w)(2u)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        "workingOut": "\\(= 4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + \\frac{1}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4  - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 + \\frac{1}{x^2})^2 = x^4 + 2 + \\frac{1}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{1}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 + \\frac{1}{x^2})^2 = \\left(x^2\\right)^2 + 2\\left(x^2\\right)\\left(\\frac{1}{x^2}\\right) + \\left(\\frac{1}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 + 2 + \\frac{1}{x^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 - \\frac{1}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4  + 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{1}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 - \\frac{1}{x^2})^2 = x^4 - 2 + \\frac{1}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{1}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 - \\frac{1}{x^2})^2 = \\left(x^2\\right)^2 - 2\\left(x^2\\right)\\left(\\frac{1}{x^2}\\right) + \\left(\\frac{1}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 - 2 + \\frac{1}{x^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((2x - \\frac{3}{2x})^2\\)",
    "options": [
      {
        "text": "\\(4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2  + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4x^2  + 6 + \\frac{9}{4x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((2x - \\frac{3}{2x})^2 = 4x^2 - 6 + \\frac{9}{4x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 2x, \\quad B = \\frac{3}{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((2x - \\frac{3}{2x})^2 = \\left(2x\\right)^2 - 2\\left(2x\\right)\\left(\\frac{3}{2x}\\right) + \\left(\\frac{3}{2x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 4x^2 - 6 + \\frac{9}{4x^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((3a + \\frac{1}{3a})^2\\)",
    "options": [
      {
        "text": "\\(9a^2  - 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9a^2  + \\frac{1}{9a^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((3a + \\frac{1}{3a})^2 = 9a^2 + 2 + \\frac{1}{9a^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 3a, \\quad B = \\frac{1}{3a}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((3a + \\frac{1}{3a})^2 = \\left(3a\\right)^2 + 2\\left(3a\\right)\\left(\\frac{1}{3a}\\right) + \\left(\\frac{1}{3a}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 9a^2 + 2 + \\frac{1}{9a^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((y^3 + \\frac{1}{y^3})^2\\)",
    "options": [
      {
        "text": "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6  + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6  - 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((y^3 + \\frac{1}{y^3})^2 = y^6 + 2 + \\frac{1}{y^6}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = y^3, \\quad B = \\frac{1}{y^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((y^3 + \\frac{1}{y^3})^2 = \\left(y^3\\right)^2 + 2\\left(y^3\\right)\\left(\\frac{1}{y^3}\\right) + \\left(\\frac{1}{y^3}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= y^6 + 2 + \\frac{1}{y^6}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((m^2 + \\frac{2}{m^2})^2\\)",
    "options": [
      {
        "text": "\\(m^4  - 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4  + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((m^2 + \\frac{2}{m^2})^2 = m^4 + 4 + \\frac{4}{m^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = m^2, \\quad B = \\frac{2}{m^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((m^2 + \\frac{2}{m^2})^2 = \\left(m^2\\right)^2 + 2\\left(m^2\\right)\\left(\\frac{2}{m^2}\\right) + \\left(\\frac{2}{m^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= m^4 + 4 + \\frac{4}{m^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^3 - \\frac{2}{x^3})^2\\)",
    "options": [
      {
        "text": "\\(x^6  + 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6  + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^6 - 4 + \\frac{4}{x^6}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^3 - \\frac{2}{x^3})^2 = x^6 - 4 + \\frac{4}{x^6}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^3, \\quad B = \\frac{2}{x^3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^3 - \\frac{2}{x^3})^2 = \\left(x^3\\right)^2 - 2\\left(x^3\\right)\\left(\\frac{2}{x^3}\\right) + \\left(\\frac{2}{x^3}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^6 - 4 + \\frac{4}{x^6}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((3t^2 - \\frac{1}{2t^2})^2\\)",
    "options": [
      {
        "text": "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4  + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4  + 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((3t^2 - \\frac{1}{2t^2})^2 = 9t^4 - 3 + \\frac{1}{4t^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 3t^2, \\quad B = \\frac{1}{2t^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((3t^2 - \\frac{1}{2t^2})^2 = \\left(3t^2\\right)^2 - 2\\left(3t^2\\right)\\left(\\frac{1}{2t^2}\\right) + \\left(\\frac{1}{2t^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 9t^4 - 3 + \\frac{1}{4t^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((a^2 + \\frac{3}{a^2})^2\\)",
    "options": [
      {
        "text": "\\(a^4  + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4  - 6 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((a^2 + \\frac{3}{a^2})^2 = a^4 + 6 + \\frac{9}{a^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = a^2, \\quad B = \\frac{3}{a^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((a^2 + \\frac{3}{a^2})^2 = \\left(a^2\\right)^2 + 2\\left(a^2\\right)\\left(\\frac{3}{a^2}\\right) + \\left(\\frac{3}{a^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= a^4 + 6 + \\frac{9}{a^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((y^4 - \\frac{1}{y^4})^2\\)",
    "options": [
      {
        "text": "\\(y^8  + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8 - 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8  + 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^8 - 2 + \\frac{1}{y^8}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((y^4 - \\frac{1}{y^4})^2 = y^8 - 2 + \\frac{1}{y^8}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = y^4, \\quad B = \\frac{1}{y^4}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((y^4 - \\frac{1}{y^4})^2 = \\left(y^4\\right)^2 - 2\\left(y^4\\right)\\left(\\frac{1}{y^4}\\right) + \\left(\\frac{1}{y^4}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= y^8 - 2 + \\frac{1}{y^8}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((5x + \\frac{1}{5x})^2\\)",
    "options": [
      {
        "text": "\\(25x^2  - 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25x^2  + \\frac{1}{25x^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((5x + \\frac{1}{5x})^2 = 25x^2 + 2 + \\frac{1}{25x^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 5x, \\quad B = \\frac{1}{5x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((5x + \\frac{1}{5x})^2 = \\left(5x\\right)^2 + 2\\left(5x\\right)\\left(\\frac{1}{5x}\\right) + \\left(\\frac{1}{5x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 25x^2 + 2 + \\frac{1}{25x^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 - \\frac{5}{x^2})^2\\)",
    "options": [
      {
        "text": "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4  + 10 + \\frac{25}{x^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((x^2 - \\frac{5}{x^2})^2 = x^4 - 10 + \\frac{25}{x^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = x^2, \\quad B = \\frac{5}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((x^2 - \\frac{5}{x^2})^2 = \\left(x^2\\right)^2 - 2\\left(x^2\\right)\\left(\\frac{5}{x^2}\\right) + \\left(\\frac{5}{x^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= x^4 - 10 + \\frac{25}{x^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((2a^2 + \\frac{3}{a^2})^2\\)",
    "options": [
      {
        "text": "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4  + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4  - 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((2a^2 + \\frac{3}{a^2})^2 = 4a^4 + 12 + \\frac{9}{a^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 2a^2, \\quad B = \\frac{3}{a^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((2a^2 + \\frac{3}{a^2})^2 = \\left(2a^2\\right)^2 + 2\\left(2a^2\\right)\\left(\\frac{3}{a^2}\\right) + \\left(\\frac{3}{a^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 4a^4 + 12 + \\frac{9}{a^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((4m - \\frac{1}{4m})^2\\)",
    "options": [
      {
        "text": "\\(16m^2  + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(16m^2  + 2 + \\frac{1}{16m^2}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((4m - \\frac{1}{4m})^2 = 16m^2 - 2 + \\frac{1}{16m^2}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = 4m, \\quad B = \\frac{1}{4m}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((4m - \\frac{1}{4m})^2 = \\left(4m\\right)^2 - 2\\left(4m\\right)\\left(\\frac{1}{4m}\\right) + \\left(\\frac{1}{4m}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= 16m^2 - 2 + \\frac{1}{16m^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((p^2 + \\frac{4}{p^2})^2\\)",
    "options": [
      {
        "text": "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4  - 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4  + \\frac{16}{p^4}\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    "solution": "\\((p^2 + \\frac{4}{p^2})^2 = p^4 + 8 + \\frac{16}{p^4}\\)",
    "solutionSteps": [
      {
        "explanation": "Identify A and B for expansion, then apply the formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\).",
        "workingOut": "\\(A = p^2, \\quad B = \\frac{4}{p^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the expansion expression.",
        "workingOut": "\\((p^2 + \\frac{4}{p^2})^2 = \\left(p^2\\right)^2 + 2\\left(p^2\\right)\\left(\\frac{4}{p^2}\\right) + \\left(\\frac{4}{p^2}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the squaring of the terms and simplify the middle multiplication product.",
        "workingOut": "\\(= p^4 + 8 + \\frac{16}{p^4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + x + 1)(x^2 - x + 1)\\)",
    "options": [
      {
        "text": "\\(x^4 - x^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + x^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + x + 1)(x^2 - x + 1) = x^4 + x^2 + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + x + 1)(x^2 - x + 1) = [(x^2 + 1) + x][(x^2 + 1) - x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 1)^2 - (x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + x^2 + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((a^2 + ab + b^2)(a^2 - ab + b^2)\\)",
    "options": [
      {
        "text": "\\(a^4 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 - a^2b^2 - b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + a^2b^2 + b^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((a^2 + ab + b^2)(a^2 - ab + b^2) = a^4 + a^2b^2 + b^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((a^2 + ab + b^2)(a^2 - ab + b^2) = [(a^2 + b^2) + ab][(a^2 + b^2) - ab]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (a^2 + b^2)^2 - (ab)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= a^4 + a^2b^2 + b^4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((y^2 + 2y + 4)(y^2 - 2y + 4)\\)",
    "options": [
      {
        "text": "\\(y^4 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^4 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4y^2 + 16\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(y^4 - 4y^2 - 16\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((y^2 + 2y + 4)(y^2 - 2y + 4) = y^4 + 4y^2 + 16\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((y^2 + 2y + 4)(y^2 - 2y + 4) = [(y^2 + 4) + 2y][(y^2 + 4) - 2y]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (y^2 + 4)^2 - (2y)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= y^4 + 4y^2 + 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((m^2 + 3m + 9)(m^2 - 3m + 9)\\)",
    "options": [
      {
        "text": "\\(m^4 - 9m^2 - 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 9m^2 + 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 9m^2 + 81\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(m^4 + 9m^2 + 81\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((m^2 + 3m + 9)(m^2 - 3m + 9) = m^4 + 9m^2 + 81\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((m^2 + 3m + 9)(m^2 - 3m + 9) = [(m^2 + 9) + 3m][(m^2 + 9) - 3m]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (m^2 + 9)^2 - (3m)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= m^4 + 9m^2 + 81\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + 2x + 2)(x^2 - 2x + 2)\\)",
    "options": [
      {
        "text": "\\(x^4 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 2x + 2)(x^2 - 2x + 2) = x^4 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 2x + 2)(x^2 - 2x + 2) = [(x^2 + 2) + 2x][(x^2 + 2) - 2x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 2)^2 - (2x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((t^2 + 4t + 16)(t^2 - 4t + 16)\\)",
    "options": [
      {
        "text": "\\(t^4 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^4 + 16t^2 + 256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(t^4 - 16t^2 - 256\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((t^2 + 4t + 16)(t^2 - 4t + 16) = t^4 + 16t^2 + 256\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((t^2 + 4t + 16)(t^2 - 4t + 16) = [(t^2 + 16) + 4t][(t^2 + 16) - 4t]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (t^2 + 16)^2 - (4t)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= t^4 + 16t^2 + 256\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + 5x + 25)(x^2 - 5x + 25)\\)",
    "options": [
      {
        "text": "\\(x^4 + 25x^2 + 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 25x^2 + 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 25x^2 - 625\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 25x^2 + 625\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = x^4 + 25x^2 + 625\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = [(x^2 + 25) + 5x][(x^2 + 25) - 5x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 25)^2 - (5x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 25x^2 + 625\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)\\)",
    "options": [
      {
        "text": "\\(a^4 + 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 + 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(a^4 - 4b^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 4b^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) = a^4 + 4b^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) = [(a^2 + 2b^2) + 2ab][(a^2 + 2b^2) - 2ab]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (a^2 + 2b^2)^2 - (2ab)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= a^4 + 4b^4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((u^2 + uv + v^2)(u^2 - uv + v^2)\\)",
    "options": [
      {
        "text": "\\(u^4 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u^4 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(u^4 - u^2v^2 - v^4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + u^2v^2 + v^4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((u^2 + uv + v^2)(u^2 - uv + v^2) = u^4 + u^2v^2 + v^4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((u^2 + uv + v^2)(u^2 - uv + v^2) = [(u^2 + v^2) + uv][(u^2 + v^2) - uv]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (u^2 + v^2)^2 - (uv)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= u^4 + u^2v^2 + v^4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((z^2 + 3z + 5)(z^2 - 3z + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + z^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 - z^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 + z^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(z^4 + z^2 + 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((z^2 + 3z + 5)(z^2 - 3z + 5) = z^4 + z^2 + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((z^2 + 3z + 5)(z^2 - 3z + 5) = [(z^2 + 5) + 3z][(z^2 + 5) - 3z]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (z^2 + 5)^2 - (3z)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= z^4 + z^2 + 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + 6x + 36)(x^2 - 6x + 36)\\)",
    "options": [
      {
        "text": "\\(x^4 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 36x^2 + 1296\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 36x^2 - 1296\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 6x + 36)(x^2 - 6x + 36) = x^4 + 36x^2 + 1296\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 6x + 36)(x^2 - 6x + 36) = [(x^2 + 36) + 6x][(x^2 + 36) - 6x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 36)^2 - (6x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 + 36x^2 + 1296\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((k^2 + k + 2)(k^2 - k + 2)\\)",
    "options": [
      {
        "text": "\\(k^4 + 3k^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^4 + 3k^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(k^4 - 3k^2 - 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 3k^2 + 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((k^2 + k + 2)(k^2 - k + 2) = k^4 + 3k^2 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((k^2 + k + 2)(k^2 - k + 2) = [(k^2 + 2) + k][(k^2 + 2) - k]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (k^2 + 2)^2 - (k)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= k^4 + 3k^2 + 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((p^2 + 2p + 5)(p^2 - 2p + 5)\\)",
    "options": [
      {
        "text": "\\(p^4 - 6p^2 - 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 6p^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 6p^2 + 25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(p^4 + 6p^2 + 25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((p^2 + 2p + 5)(p^2 - 2p + 5) = p^4 + 6p^2 + 25\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((p^2 + 2p + 5)(p^2 - 2p + 5) = [(p^2 + 5) + 2p][(p^2 + 5) - 2p]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (p^2 + 5)^2 - (2p)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= p^4 + 6p^2 + 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((w^2 + 3w + 1)(w^2 - 3w + 1)\\)",
    "options": [
      {
        "text": "\\(w^4 - 7w^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 7w^2 + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(w^4 + 7w^2 - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(w^4 - 7w^2 + 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((w^2 + 3w + 1)(w^2 - 3w + 1) = w^4 - 7w^2 + 1\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((w^2 + 3w + 1)(w^2 - 3w + 1) = [(w^2 + 1) + 3w][(w^2 + 1) - 3w]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (w^2 + 1)^2 - (3w)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= w^4 - 7w^2 + 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x^2 + 4x + 2)(x^2 - 4x + 2)\\)",
    "options": [
      {
        "text": "\\(x^4 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 - 12x^2 + 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^4 + 12x^2 - 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    "solution": "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = x^4 - 12x^2 + 4\\)",
    "solutionSteps": [
      {
        "explanation": "Regroup the trinomials to isolate a common part and a part with opposite signs.",
        "workingOut": "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = [(x^2 + 2) + 4x][(x^2 + 2) - 4x]\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= (x^2 + 2)^2 - (4x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the perfect square and simplify by combining like terms.",
        "workingOut": "\\(= x^4 - 12x^2 + 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x + 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 + 11x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 - 11x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 6x^2 + 11x + 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x + 3) = x^3 + 6x^2 + 11x + 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x + 3) = x(x^2 + 3x + 2) + 3(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 6x^2 + 11x + 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x - 3)\\)",
    "options": [
      {
        "text": "\\(x^2 - 7x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 7x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 7x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x - 3) = x^3 - 7x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x - 3) = x(x^2 + 3x + 2) - 3(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 7x - 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x - 1)(x - 2)(x - 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 6x^2 + 11x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 6x^2 - 11x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 6x^2 + 11x - 6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x - 2)(x - 3) = x^3 - 6x^2 + 11x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x - 2) = x^2 + (-1 + -2)x + (-1 \\times -2) = x^2 - 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 3x + 2)(x - 3) = x(x^2 - 3x + 2) - 3(x^2 - 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 6x^2 + 11x - 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 2)(x + 3)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 9x^2 - 26x - 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 9x^2 + 26x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 9x^2 + 26x + 24\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 3)(x + 4) = x^3 + 9x^2 + 26x + 24\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 3) = x^2 + (2 + 3)x + (2 \\times 3) = x^2 + 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 5x + 6)(x + 4) = x(x^2 + 5x + 6) + 4(x^2 + 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 9x^2 + 26x + 24\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x - 1)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^3 + -5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 5x^2 + x + 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x^2 - x - 5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 5x^2 - x - 5\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x - 1)(x + 5) = x^3 + 5x^2 - x - 5\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x - 1) = x^2 + (1 + -1)x + (1 \\times -1) = x^2  1\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  1)(x + 5) = x(x^2  1) + 5(x^2  1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 5x^2 - x - 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 2)(x - 2)(x + 3)\\)",
    "options": [
      {
        "text": "\\(x^3 + -12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 4x + 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 4x - 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 3x^2 - 4x - 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x - 2)(x + 3) = x^3 + 3x^2 - 4x - 12\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x - 2) = x^2 + (2 + -2)x + (2 \\times -2) = x^2  4\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  4)(x + 3) = x(x^2  4) + 3(x^2  4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 3x^2 - 4x - 12\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x + 3)(x - 2)\\)",
    "options": [
      {
        "text": "\\(x^2 + 2x^2 - 5x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 5x - 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2x^2 + 5x + 6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -6\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 3)(x - 2) = x^3 + 2x^2 - 5x - 6\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 3) = x^2 + (1 + 3)x + (1 \\times 3) = x^2 + 4x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 4x + 3)(x - 2) = x(x^2 + 4x + 3) - 2(x^2 + 4x + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 5x - 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x - 1)(x + 2)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 + -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 5x^2 + 2x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 5x^2 - 2x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 5x^2 + 2x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x + 2)(x + 4) = x^3 + 5x^2 + 2x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x + 2) = x^2 + (-1 + 2)x + (-1 \\times 2) = x^2 + 1x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 1x - 2)(x + 4) = x(x^2 + 1x - 2) + 4(x^2 + 1x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 5x^2 + 2x - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 3)(x - 3)(x + 2)\\)",
    "options": [
      {
        "text": "\\(x^3 - 2x^2 + 9x + 18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 9x - 18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 2x^2 - 9x - 18\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 3)(x - 3)(x + 2) = x^3 + 2x^2 - 9x - 18\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 3)(x - 3) = x^2 + (3 + -3)x + (3 \\times -3) = x^2  9\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2  9)(x + 2) = x(x^2  9) + 2(x^2  9)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 9x - 18\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x + 2)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - 7x^2 - 14x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 + 7x^2 + 14x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 7x^2 + 14x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x + 2)(x + 4) = x^3 + 7x^2 + 14x + 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1 \\times 2) = x^2 + 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 3x + 2)(x + 4) = x(x^2 + 3x + 2) + 4(x^2 + 3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 7x^2 + 14x + 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x - 2)(x - 3)(x + 4)\\)",
    "options": [
      {
        "text": "\\(x^3 - x^2 - 14x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - x^2 - 14x + 24\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + x^2 + 14x - 24\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 2)(x - 3)(x + 4) = x^3 - x^2 - 14x + 24\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 2)(x - 3) = x^2 + (-2 + -3)x + (-2 \\times -3) = x^2 - 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 5x + 6)(x + 4) = x(x^2 - 5x + 6) + 4(x^2 - 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - x^2 - 14x + 24\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 1)(x - 3)(x + 5)\\)",
    "options": [
      {
        "text": "\\(x^2 + 3x^2 - 13x - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 3x^2 - 13x - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 13x + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -15\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 1)(x - 3)(x + 5) = x^3 + 3x^2 - 13x - 15\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 1)(x - 3) = x^2 + (1 + -3)x + (1 \\times -3) = x^2 - 2x - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 2x - 3)(x + 5) = x(x^2 - 2x - 3) + 5(x^2 - 2x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 3x^2 - 13x - 15\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 2)(x + 2)(x - 2)\\)",
    "options": [
      {
        "text": "\\(x^2 + 2x^2 - 4x - 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 2x^2 + 4x + 8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 2x^2 - 4x - 8\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 2)(x - 2) = x^3 + 2x^2 - 4x - 8\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 2) = x^2 + (2 + 2)x + (2 \\times 2) = x^2 + 4x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 4x + 4)(x - 2) = x(x^2 + 4x + 4) - 2(x^2 + 4x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 + 2x^2 - 4x - 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x - 1)(x - 1)(x - 1)\\)",
    "options": [
      {
        "text": "\\(x^3 + 3x^2 - 3x + 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^2 - 3x^2 + 3x - 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 3x^2 + 3x - 1\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x - 1)(x - 1)(x - 1) = x^3 - 3x^2 + 3x - 1\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x - 1)(x - 1) = x^2 + (-1 + -1)x + (-1 \\times -1) = x^2 - 2x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 - 2x + 1)(x - 1) = x(x^2 - 2x + 1) - 1(x^2 - 2x + 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 3x^2 + 3x - 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Expand and simplify: \\((x + 2)(x + 3)(x - 5)\\)",
    "options": [
      {
        "text": "\\(x^2 - 19x - 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + 19x + 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 - 19x - 30\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x^3 + -30\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    "solution": "\\((x + 2)(x + 3)(x - 5) = x^3 - 19x - 30\\)",
    "solutionSteps": [
      {
        "explanation": "Multiply the first two binomials first.",
        "workingOut": "\\((x + 2)(x + 3) = x^2 + (2 + 3)x + (2 \\times 3) = x^2 + 5x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the resulting quadratic expression by the third binomial.",
        "workingOut": "\\((x^2 + 5x + 6)(x - 5) = x(x^2 + 5x + 6) - 5(x^2 + 5x + 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the full distribution and combine like terms.",
        "workingOut": "\\(= x^3 - 19x - 30\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(1005^2\\)",
    "options": [
      {
        "text": "\\(1010015\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1010025\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1010035\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1020125.2500\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((1000 + 5)^2 = 1000^2 + 2(1000)(5) + 5^2 = 1010025\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(1005^2 = (1000 + 5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 1000^2 + 2(1000)(5) + (5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 1000000 + 10000 + 25 = 1010025\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(9997^2\\)",
    "options": [
      {
        "text": "\\(100939409.0900\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99939999\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99940009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(99940019\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((10000 - 3)^2 = 10000^2 - 2(10000)(3) + 3^2 = 99940009\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(9997^2 = (10000 - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 10000^2 - 2(10000)(3) + (3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 100000000 - 60000 + 9 = 99940009\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(200.5^2\\)",
    "options": [
      {
        "text": "\\(40190.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40602.2525\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40210.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(40200.25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((200 + 0.5)^2 = 200^2 + 2(200)(0.5) + 0.5^2 = 40200.25\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(200.5^2 = (200 + 0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 200^2 + 2(200)(0.5) + (0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 40000 + 200 + 0.25 = 40200.25\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using difference of squares: \\(403 \\times 397\\)",
    "options": [
      {
        "text": "\\(160001\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(161590.9100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(159981\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(159991\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((400 + 3)(400 - 3) = 400^2 - 3^2 = 160000 - 9 = 159991\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(403 \\times 397 = (400 + 3)(400 - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 400^2 - 3^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 160000 - 9 = 159991\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(10.02^2\\)",
    "options": [
      {
        "text": "\\(110.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(90.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100.4004\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(101.4044\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((10 + 0.02)^2 = 10^2 + 2(10)(0.02) + 0.02^2 = 100.4004\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(10.02^2 = (10 + 0.02)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 10^2 + 2(10)(0.02) + (0.02)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 100 + 0.4 + 0.0004 = 100.4004\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(1.003^2\\)",
    "options": [
      {
        "text": "\\(1.0161\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11.006009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.006009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-8.993991\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((1 + 0.003)^2 = 1^2 + 2(1)(0.003) + 0.003^2 = 1.006009\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(1.003^2 = (1 + 0.003)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 1^2 + 2(1)(0.003) + (0.003)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 1 + 0.006 + 0.000009 = 1.006009\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(29.8^2\\)",
    "options": [
      {
        "text": "\\(888.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(878.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(898.04\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(896.9204\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((30 - 0.2)^2 = 30^2 - 2(30)(0.2) + 0.2^2 = 888.04\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(29.8^2 = (30 - 0.2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 30^2 - 2(30)(0.2) + (0.2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 900 - 12 + 0.04000000000000001 = 888.04\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using difference of squares: \\(50.1 \\times 49.9\\)",
    "options": [
      {
        "text": "\\(2524.9899\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2499.99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2489.99\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2509.99\\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((50 + 0.1)(50 - 0.1) = 50^2 - 0.1^2 = 2500 - 0.010000000000000002 = 2499.99\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(50.1 \\times 49.9 = (50 + 0.1)(50 - 0.1)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 50^2 - 0.1^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 2500 - 0.010000000000000002 = 2499.99\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using difference of squares: \\(1002 \\times 998\\)",
    "options": [
      {
        "text": "\\(999996\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1000006\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(999986\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1009995.9600\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "hint": "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    "solution": "\\((1000 + 2)(1000 - 2) = 1000^2 - 2^2 = 1000000 - 4 = 999996\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the product using a round base and a small symmetric difference.",
        "workingOut": "\\(1002 \\times 998 = (1000 + 2)(1000 - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the difference of squares identity: (A + B)(A - B) = A^2 - B^2.",
        "workingOut": "\\(= 1000^2 - 2^2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the squares and subtract to find the final result.",
        "workingOut": "\\(= 1000000 - 4 = 999996\\)",
        "graphData": null
      }
    ]
  },
  {
    "chapterId": "y11a-1",
    "chapterTitle": "Chapter 1: Algebra review",
    "year": "Year 11",
    "isManual": true,
    "difficulty": "hard",
    "topicId": "y11a-1A",
    "topicCode": "1A",
    "topicTitle": "Expanding brackets",
    "type": "multiple_choice",
    "isActive": true,
    "question": "Evaluate using algebraic expansion: \\(99.5^2\\)",
    "options": [
      {
        "text": "\\(9910.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9890.25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9999.2525\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9900.25\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "hint": "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    "solution": "\\((100 - 0.5)^2 = 100^2 - 2(100)(0.5) + 0.5^2 = 9900.25\\)",
    "solutionSteps": [
      {
        "explanation": "Rewrite the number as a sum or difference of a round base and a decimal/number.",
        "workingOut": "\\(99.5^2 = (100 - 0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the perfect square binomial identity: (A ± B)^2 = A^2 ± 2AB + B^2.",
        "workingOut": "\\(= 100^2 - 2(100)(0.5) + (0.5)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculations and add the terms to obtain the final simplified value.",
        "workingOut": "\\(= 10000 - 100 + 0.25 = 9900.25\\)",
        "graphData": null
      }
    ]
  }
];

export const allQuestions = [
  ...originalQuestions,
  ...mediumQuestions,
  ...hardQuestions
];

export const importYear11AdvCh1 = async (forceReset = false) => {
  console.log('[importYear11AdvCh1] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    if (forceReset) {
      console.log('[importYear11AdvCh1] Force Reset requested. Wiping all questions for chapter y11a-1...');
      const oldSnap = await db.collection('questions').where('chapterId', '==', 'y11a-1').get();
      if (!oldSnap.empty) {
        const batchSize = 400;
        let batch = db.batch();
        let count = 0;
        for (const doc of oldSnap.docs) {
          batch.delete(doc.ref);
          count++;
          if (count === batchSize) {
            await batch.commit();
            batch = db.batch();
            count = 0;
          }
        }
        if (count > 0) {
          await batch.commit();
        }
        console.log('[importYear11AdvCh1] Deleted old questions successfully.');
      }
    }
    
    const existingSnap = await db.collection('questions').where('chapterId', '==', 'y11a-1').get();
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    // Batch write in chunks of 400 to avoid Firestore limits
    const chunkSize = 400;
    for (let i = 0; i < allQuestions.length; i += chunkSize) {
      const chunk = allQuestions.slice(i, i + chunkSize);
      const batch = db.batch();
      let batchCount = 0;
      
      for (const q of chunk) {
        if (forceReset || !existingQuestions.has(q.question.trim())) {
          const docRef = db.collection('questions').doc();
          batch.set(docRef, q);
          importedCount++;
          batchCount++;
        }
      }
      
      if (batchCount > 0) {
        await batch.commit();
        console.log(`[${importedCount} questions synced]\n`);
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
