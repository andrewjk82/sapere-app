export const Y11_CH1A_QUESTIONS = [
  {
    id: "0020afdcda6504b35f3882205e8211b9",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((4y - 1)^3\\)",
    options: [
      {
        text: "\\(64y^3 - 48y^2 + 12y - 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(64y^3 - 48y^2 - 12y - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64y^3 - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64y^3 - 96y^2 + 24y - 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(64y^3 - 48y^2 + 12y - 1\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect cube binomial with A = 4y and B = 1, and apply the identity (A-B)^3 = A^3 - 3A^2B + 3AB^2 - B^3.",
        workingOut: "\\((4y - 1)^3 = (4y)^3 - 3(4y)^2(1) + 3(4y)(1)^2 - (1)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the first term: (4y)^3.",
        workingOut: "\\((4y)^3 = 64y^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the second term: 3(4y)^2(1).",
        workingOut: "\\(3(4y)^2(1) = 48y^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the third term: 3(4y)(1)^2.",
        workingOut: "\\(3(4y)(1)^2 = 12y\\)",
        graphData: null
      },
      {
        explanation: "Compute the fourth term: (1)^3.",
        workingOut: "\\((1)^3 = 1\\)",
        graphData: null
      },
      {
        explanation: "Combine all four terms, applying the alternating sign pattern, to get the final expanded expression.",
        workingOut: "\\(64y^3 - 48y^2 + 12y - 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "00b38d80a36d4d2299dcb396fbfbf031",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 - \\frac{1}{x^2})^2\\)",
    options: [
      {
        text: "\\(x^4  + 2 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 1 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = x^2 and B = \\frac{1}{x^2}, and apply the identity (A-B)^2 = A^2 - 2AB + B^2.",
        workingOut: "\\(\\left(x^2 - \\frac{1}{x^2}\\right)^2 = (x^2)^2 - 2(x^2)(\\frac{1}{x^2}) + (\\frac{1}{x^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (x^2)^2.",
        workingOut: "\\((x^2)^2 = x^4\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × x^2 × \\frac{1}{x^2} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(x^2)\\left(\\frac{1}{x^2}\\right) = 2\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{1}{x^2})^2.",
        workingOut: "\\(\\left(\\frac{1}{x^2}\\right)^2 = \\frac{1}{x^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(x^4 - 2 + \\frac{1}{x^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "03832022b0a22f0e935270f33b507588",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x - y + z)^2\\)",
    options: [
      {
        text: "\\(x^2 + y^2 + z^2 - 2xy + 2yz + 2zx\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + y^2 + z^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((x - y + z)^2 = x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
    solutionSteps: [
      {
        explanation: "Group the trinomial and apply the algebraic identity for squaring a trinomial.",
        workingOut: "<div style=\"text-align: left;\"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators or conversion method.</p></div>",
        graphData: null
      },
      {
        explanation: "Evaluate the squares of the individual terms (note that negative terms squared become positive).",
        workingOut: "\\(= x^2 + y^2 + z^2 + 2(x)(-y) + 2(-y)(+z) + 2(+z)(x)\\)",
        graphData: null
      },
      {
        explanation: "Expand the remaining products, adjusting the signs appropriately to obtain the simplified expression.",
        workingOut: "\\(= x^2 + y^2 + z^2 - 2xy - 2yz + 2zx\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "067b500417f518fb02defeaaa5287eab",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\(-4(y + 3)\\)",
    options: [
      {
        text: "\\(-4y-12\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(+4y+12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-6y-14\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(-4y - 12\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic structure and expansion pattern.",
        workingOut: "Question: Expand: \\(-4(y + 3)\\)",
        graphData: null
      },
      {
        explanation: "Apply appropriate algebraic identities or distribution rules.",
        workingOut: "Set up the expansion",
        graphData: null
      },
      {
        explanation: "Perform all multiplications and calculate intermediate values.",
        workingOut: "Expand and simplify",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final simplified result.",
        workingOut: "\\(-4y-12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "08854c29d728e6058361515d5a7565b3",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((A + B)(A + B)\\)",
    options: [
      {
        text: "\\(2A + 2B\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 + B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 + AB + B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 + 2AB + B^2\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(A^2 + 2AB + B^2\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure as a difference of squares pattern: (A-B)(A+B) = A² - B² or recognize conjugate products.",
        workingOut: "Analyze: Expand: \\((A + B)(A + B)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity directly or expand both binomials.",
        workingOut: "Use (A-B)(A+B) = A² - B² or distribute each term",
        graphData: null
      },
      {
        explanation: "Calculate the squares and products.",
        workingOut: "Compute all necessary multiplications",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final result.",
        workingOut: "\\(A^2 + 2AB + B^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "0a8034a4950b914844c8485647e52c8e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((w^2 + 3w + 1)(w^2 - 3w + 1)\\)",
    options: [
      {
        text: "\\(w^4 - 7w^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 - 7w^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(w^4 + 2w^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(w^4 + 7w^2 - 1\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\(w^4+2w^2+1-9w^2 = w^4 - 7w^2 + 1\\)",
    solutionSteps: [
      {
        explanation: "Group each factor as (w^2+1) ± 3w, so the product has the form (P+Q)(P-Q) with P = w^2+1 and Q = 3w.",
        workingOut: "\\((w^2+3w+1)(w^2-3w+1) = \\left[(w^2+1)+3w\\right]\\left[(w^2+1)-3w\\right]\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: (P+Q)(P-Q) = P^2 - Q^2.",
        workingOut: "\\(= (w^2+1)^2 - (3w)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (w^2+1)^2 and (3w)^2 separately.",
        workingOut: "\\((w^2+1)^2 = w^4+2w^2+1, \\quad (3w)^2 = 9w^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract and combine the like w^2 terms.",
        workingOut: "\\(w^4+2w^2+1-9w^2 = w^4 - 7w^2 + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "0a91d9414544bed305189fe3a96851f3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - y)(x^2 + xy + y^2)\\)",
    options: [
      {
        text: "\\((x - y)^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 3x^2y + 3xy^2 - y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - y^3\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(x^3 - y^3\\)",
    solutionSteps: [
      {
        explanation: "Recognise the difference-of-cubes identity: (A-B)(A^2+AB+B^2) = A^3 - B^3, with A = x and B = y.",
        workingOut: "\\((x-y)(x^2+xy+y^2) = x^3 - y^3\\)",
        graphData: null
      },
      {
        explanation: "Verify by checking the given factor matches A^2+AB+B^2 exactly: x^2 + xy + y^2 ✓.",
        workingOut: "\\(x^2+xy+y^2 = (x)^2 + (x)(y) + (y)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the identity directly to state the final simplified result.",
        workingOut: "\\(x^3 - y^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "0aec8aff2244829ef70fff1efccd1df6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((y + 4)^3\\)",
    options: [
      {
        text: "\\(y^3 + 24y^2 + 96y + 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^3 + 12y^2 - 48y + 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^3 + 12y^2 + 48y + 64\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(y^3 + 64\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(y^3 + 12y^2 + 48y + 64\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect cube binomial with A = y and B = 4, and apply the identity (A+B)^3 = A^3 + 3A^2B + 3AB^2 + B^3.",
        workingOut: "\\((y + 4)^3 = (y)^3 + 3(y)^2(4) + 3(y)(4)^2 + (4)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the first term: (y)^3.",
        workingOut: "\\((y)^3 = y^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the second term: 3(y)^2(4).",
        workingOut: "\\(3(y)^2(4) = 12y^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the third term: 3(y)(4)^2.",
        workingOut: "\\(3(y)(4)^2 = 48y\\)",
        graphData: null
      },
      {
        explanation: "Compute the fourth term: (4)^3.",
        workingOut: "\\((4)^3 = 64\\)",
        graphData: null
      },
      {
        explanation: "Combine all four terms, applying the alternating sign pattern, to get the final expanded expression.",
        workingOut: "\\(y^3 + 12y^2 + 48y + 64\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "0c350a9d804cdae50ff5e8c70c74d2dd",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((5x - 2y)^2\\)",
    options: [
      {
        text: "\\(25x^2 - 20xy + 4y^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(5x^2 - 20xy + 2y^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^2 + 4y^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^2 - 10xy + 4y^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(25x^2 - 20xy + 4y^2\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = 5x and B = 2y, and apply the identity (A-B)^2 = A^2 - 2AB + B^2.",
        workingOut: "\\((5x - 2y)^2 = (5x)^2 - 2(5x)(2y) + (2y)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (5x)^2.",
        workingOut: "\\((5x)^2 = 25x^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × 5x × 2y, then square the last term: (2y)^2.",
        workingOut: "\\(2(5x)(2y) = 20xy, \\quad (2y)^2 = 4y^2\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(25x^2 - 20xy + 4y^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "0c98e3c3dc54f2b5d330c778de46ae5e",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\(-k(k^2 - 4)\\)",
    options: [
      {
        text: "\\(+k^3+4k\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-k^5+6k\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-k^3+4k\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-k^3-4k\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(-k^3+4k\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, -k, and the two terms inside, k^2 and -4.",
        workingOut: "\\(-k(k^2 - 4)\\)",
        graphData: null
      },
      {
        explanation: "Multiply -k by each term inside the bracket, being careful with the signs.",
        workingOut: "\\((-k)\\times k^2 + (-k)\\times(-4) = -k^3 + 4k\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final expanded expression.",
        workingOut: "\\(-k^3+4k\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "11ae84244b8aa2a3e82b279a8906422f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2a + 3b)(4a^2 - 6ab + 9b^2)\\)",
    options: [
      {
        text: "\\(8a^3 - 27b^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(8a^3 + 9b^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(8a^3 + 27b^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(8a^3 + 18ab^2 + 27b^3\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Recognise the sum of cubes identity: \\((A + B)(A^2 - AB + B^2) = A^3 + B^3\\)",
    solution: "\\(8a^3 + 27b^3\\)",
    solutionSteps: [
      {
        explanation: "Recognise the sum-of-cubes identity: (A+B)(A^2-AB+B^2) = A^3 + B^3, with A = 2a and B = 3b. Note: the question's second factor must be (2a)^2-(2a)(3b)+(3b)^2 for the identity to apply — check each term.",
        workingOut: "\\((2a+3b)(4a^2-6ab+9b^2) = (2a)^3 + (3b)^3\\)",
        graphData: null
      },
      {
        explanation: "Verify the given factor matches: (2a)^2=4a^2, (2a)(3b)=6ab, (3b)^2=9b^2 ✓.",
        workingOut: "\\(4a^2 - 6ab + 9b^2 = (2a)^2 - (2a)(3b) + (3b)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the two cubes.",
        workingOut: "\\((2a)^3 = 8a^3, \\quad (3b)^3 = 27b^3\\)",
        graphData: null
      },
      {
        explanation: "Combine to give the final simplified expression.",
        workingOut: "\\(8a^3 + 27b^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "126e507491110e75870fd99e054fa1e9",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + 1)^3\\)",
    options: [
      {
        text: "\\(x^3 + 3x^2 - 3x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 6x^2 + 6x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 3x^2 + 3x + 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(x^3 + 3x^2 + 3x + 1\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect cube binomial with A = x and B = 1, and apply the identity (A+B)^3 = A^3 + 3A^2B + 3AB^2 + B^3.",
        workingOut: "\\((x + 1)^3 = (x)^3 + 3(x)^2(1) + 3(x)(1)^2 + (1)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the first term: (x)^3.",
        workingOut: "\\((x)^3 = x^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the second term: 3(x)^2(1).",
        workingOut: "\\(3(x)^2(1) = 3x^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the third term: 3(x)(1)^2.",
        workingOut: "\\(3(x)(1)^2 = 3x\\)",
        graphData: null
      },
      {
        explanation: "Compute the fourth term: (1)^3.",
        workingOut: "\\((1)^3 = 1\\)",
        graphData: null
      },
      {
        explanation: "Combine all four terms, applying the alternating sign pattern, to get the final expanded expression.",
        workingOut: "\\(x^3 + 3x^2 + 3x + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "13ae5c9d99e2677dd6f2ae1e85cef642",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 1)(x - 1)(x - 1)\\)",
    options: [
      {
        text: "\\(x^3 - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 3x^2 + 3x - 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 3x^2 - 3x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 3x^2 + 3x - 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\(x^3 - 3x^2 + 3x - 1\\)",
    solutionSteps: [
      {
        explanation: "Recognise that (x-1)(x-1)(x-1) is the same as (x-1)^3, a perfect cube binomial with A = x, B = 1.",
        workingOut: "\\((x-1)(x-1)(x-1) = (x-1)^3 = x^3 - 3x^2(1) + 3x(1)^2 - 1^3\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: the cube of x, the middle terms, and the cube of 1.",
        workingOut: "\\(x^3 - 3x^2 + 3x - 1\\)",
        graphData: null
      },
      {
        explanation: "This is already fully simplified — no like terms remain to combine.",
        workingOut: "\\(x^3 - 3x^2 + 3x - 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "14dbd0fcdecc60271a7dfb1cf5a4d5d8",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((x + 5)^2\\)",
    options: [
      {
        text: "\\(x^2+10x+25\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4+12x+27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2-10x-25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(x^2+10x+25\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = x and B = 5, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\((x + 5)^2 = (x)^2 + 2(x)(5) + (5)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (x)^2.",
        workingOut: "\\((x)^2 = x^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × x × 5, then square the last term: (5)^2.",
        workingOut: "\\(2(x)(5) = 10x, \\quad (5)^2 = 25\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(x^2+10x+25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "15413390b7e096180b1c55c6737db65a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(x(x + 2) - x(x - 3)\\)",
    options: [
      {
        text: "\\(5x\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(7x\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative C",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(5x\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic structure and expansion pattern.",
        workingOut: "Question: Expand and simplify: \\(x(x + 2) - x(x - 3)\\)",
        graphData: null
      },
      {
        explanation: "Apply appropriate algebraic identities or distribution rules.",
        workingOut: "Set up the expansion",
        graphData: null
      },
      {
        explanation: "Perform all multiplications and calculate intermediate values.",
        workingOut: "Expand and simplify",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final simplified result.",
        workingOut: "\\(5x\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "173915e09f765549ebf4ac727e1c31a3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a^2 + \\frac{3}{a^2})^2\\)",
    options: [
      {
        text: "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 + 3 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4  + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4  - 6 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = a^2 and B = \\frac{3}{a^2}, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\(\\left(a^2 + \\frac{3}{a^2}\\right)^2 = (a^2)^2 + 2(a^2)(\\frac{3}{a^2}) + (\\frac{3}{a^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (a^2)^2.",
        workingOut: "\\((a^2)^2 = a^4\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × a^2 × \\frac{3}{a^2} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(a^2)\\left(\\frac{3}{a^2}\\right) = 6\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{3}{a^2})^2.",
        workingOut: "\\(\\left(\\frac{3}{a^2}\\right)^2 = \\frac{9}{a^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(a^4 + 6 + \\frac{9}{a^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "17f36b17c641b8e11592e6ed4b476543",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((t + 4)^2\\)",
    options: [
      {
        text: "\\(t^2 + 8t + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + 4t + 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + 8t + 16\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(t^2 + 16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(t^2 + 8t + 16\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = t and B = 4, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\((t + 4)^2 = (t)^2 + 2(t)(4) + (4)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (t)^2.",
        workingOut: "\\((t)^2 = t^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × t × 4, then square the last term: (4)^2.",
        workingOut: "\\(2(t)(4) = 8t, \\quad (4)^2 = 16\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(t^2 + 8t + 16\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "18146ea0b4d35bd4dbbfeb5a8f30e599",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((2a - 1)(2a + 1)\\)",
    options: [
      {
        text: "\\(2a^2 - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4a^2 + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4a^2 - 4a - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4a^2 - 1\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(4a^2 - 1\\)",
    solutionSteps: [
      {
        explanation: "Recognise this is a difference of squares: (A+B)(A-B) = A^2 - B^2, with A = 2a and B = 1.",
        workingOut: "\\((2a-1)(2a+1) = (2a)^2 - 1^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate (2a)^2 = 4a^2 and 1^2 = 1 to give the final simplified expression.",
        workingOut: "\\(4a^2 - 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "18b75eaedde35094e636779d537b59b4",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((m + n)^2\\)",
    options: [
      {
        text: "\\(m^4+4mn+n^4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(m^2+2mn+n^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(m^2-2mn-n^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(m^2+2mn+n^2\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = m and B = n, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\((m + n)^2 = (m)^2 + 2(m)(n) + (n)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (m)^2.",
        workingOut: "\\((m)^2 = m^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × m × n, then square the last term: (n)^2.",
        workingOut: "\\(2(m)(n) = 2mn, \\quad (n)^2 = n^2\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(m^2+2mn+n^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1a71d27d7687a5b2a936b7602307e2fc",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 1)(x - 2)(x - 3)\\)",
    options: [
      {
        text: "\\(x^3 + 6x^2 - 11x + 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 6x^2 + 11x - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 6x^2 + 11x - 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\(= x^3 - 6x^2 + 11x - 6\\)",
    solutionSteps: [
      {
        explanation: "Multiply the first two factors together first, using FOIL.",
        workingOut: "\\((x-1)(x-2) = x^2 - 2x - x + 2 = x^2 - 3x + 2\\)",
        graphData: null
      },
      {
        explanation: "Multiply this quadratic result by the third factor, (x-3), distributing each term.",
        workingOut: "\\((x^2-3x+2)(x-3) = x^3 - 3x^2 - 3x^2 + 9x + 2x - 6\\)",
        graphData: null
      },
      {
        explanation: "Combine the like x^2 terms and the like x terms.",
        workingOut: "\\(= x^3 - 6x^2 + 11x - 6\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1b5899a9c5cd56129ebf33fb25f07a88",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 3)^2 - (x + 2)^2\\)",
    options: [
      {
        text: "\\(2x+5\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x-5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x+7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(= (6x-4x) + (9-4) = 2x+5\\)",
    solutionSteps: [
      {
        explanation: "Expand each squared binomial separately using (A+B)^2 = A^2+2AB+B^2.",
        workingOut: "\\((x+3)^2 = x^2+6x+9, \\quad (x+2)^2 = x^2+4x+4\\)",
        graphData: null
      },
      {
        explanation: "Subtract the second expansion from the first.",
        workingOut: "\\((x^2+6x+9) - (x^2+4x+4)\\)",
        graphData: null
      },
      {
        explanation: "Cancel the x^2 terms (they subtract to zero), then combine the remaining x-terms and constants.",
        workingOut: "\\(= (6x-4x) + (9-4) = 2x+5\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1b81dda55f85ab640214ef848ce88887",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2k - 5)(4k^2 + 10k + 25)\\)",
    options: [
      {
        text: "\\(8k^3 - 32k5 - 125\\)",
        imageUrl: ""
      },
      {
        text: "\\(8k^3 - 125\\)",
        imageUrl: ""
      },
      {
        text: "\\(8k^3 + 125\\)",
        imageUrl: ""
      },
      {
        text: "\\(2k^2 - 25\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\(8k^3 - 125\\)",
    solutionSteps: [
      {
        explanation: "Recognise the difference-of-cubes identity: (A-B)(A^2+AB+B^2) = A^3 - B^3, with A = 2k and B = 5.",
        workingOut: "\\((2k-5)(4k^2+10k+25) = (2k)^3 - 5^3\\)",
        graphData: null
      },
      {
        explanation: "Verify the given factor matches: (2k)^2=4k^2, (2k)(5)=10k, 5^2=25 ✓.",
        workingOut: "\\(4k^2 + 10k + 25 = (2k)^2 + (2k)(5) + (5)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the two cubes.",
        workingOut: "\\((2k)^3 = 8k^3, \\quad 5^3 = 125\\)",
        graphData: null
      },
      {
        explanation: "Combine to give the final simplified expression.",
        workingOut: "\\(8k^3 - 125\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1d3dea947f7b4a31390d6260a27595ef",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the value of \\(302 \\times 298\\) using special expansions.",
    options: [
      {
        text: "\\(90000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(90004\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(89004\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(89996\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\((300 + 2)(300 - 2) = 300^2 - 2^2\\)\n2. \\(90000 - 4 = 89996\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic structure and expansion pattern.",
        workingOut: "Question: Find the value of \\(302 \\times 298\\) using special expansions.",
        graphData: null
      },
      {
        explanation: "Apply appropriate algebraic identities or distribution rules.",
        workingOut: "Set up the expansion",
        graphData: null
      },
      {
        explanation: "Perform all multiplications and calculate intermediate values.",
        workingOut: "Expand and simplify",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final simplified result.",
        workingOut: "\\(89996\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1d878044fafb2233b9bf1871293f844a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((3a + \\frac{1}{3a})^2\\)",
    options: [
      {
        text: "\\(9a^2  + \\frac{1}{9a^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9a^2  - 2 + \\frac{1}{9a^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9a^2 + 1 + \\frac{1}{9a^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = 3a and B = \\frac{1}{3a}, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\(\\left(3a + \\frac{1}{3a}\\right)^2 = (3a)^2 + 2(3a)(\\frac{1}{3a}) + (\\frac{1}{3a})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (3a)^2.",
        workingOut: "\\((3a)^2 = 9a^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × 3a × \\frac{1}{3a} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(3a)\\left(\\frac{1}{3a}\\right) = 2\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{1}{3a})^2.",
        workingOut: "\\(\\left(\\frac{1}{3a}\\right)^2 = \\frac{1}{9a^2}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(9a^2 + 2 + \\frac{1}{9a^2}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "1df31b465f9383be6d44abeb33bc6df9",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((5a + 2b)^2\\)",
    options: [
      {
        text: "\\(25a^2 + 4b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10a^2 + 20ab + 4b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25a^2 + 20ab + 4b^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(25a^2 + 10ab + 4b^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(25a^2 + 20ab + 4b^2\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = 5a and B = 2b, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\((5a + 2b)^2 = (5a)^2 + 2(5a)(2b) + (2b)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (5a)^2.",
        workingOut: "\\((5a)^2 = 25a^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × 5a × 2b, then square the last term: (2b)^2.",
        workingOut: "\\(2(5a)(2b) = 20ab, \\quad (2b)^2 = 4b^2\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(25a^2 + 20ab + 4b^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "218f468e597a23ba218d1b965f78ac4a",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2y)(x^2 - 2xy + 4y^2)\\)",
    options: [
      {
        text: "\\(x^3 - 8y^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 + 4y^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 + 8y^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 + 4xy^2 + 8y^3\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Recognise the sum of cubes identity: \\((A + B)(A^2 - AB + B^2) = A^3 + B^3\\)",
    solution: "\\(x^3 + 8y^3\\)",
    solutionSteps: [
      {
        explanation: "Recognise the sum-of-cubes identity: (A+B)(A^2-AB+B^2) = A^3 + B^3, with A = x and B = 2y.",
        workingOut: "\\((x+2y)(x^2-2xy+4y^2) = x^3 + (2y)^3\\)",
        graphData: null
      },
      {
        explanation: "Verify the given factor matches: (x)^2=x^2, (x)(2y)=2xy, (2y)^2=4y^2 ✓.",
        workingOut: "\\(x^2 - 2xy + 4y^2 = (x)^2 - (x)(2y) + (2y)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate (2y)^3 = 8y^3, leaving x^3 unchanged.",
        workingOut: "\\((2y)^3 = 8y^3\\)",
        graphData: null
      },
      {
        explanation: "Combine to give the final simplified expression.",
        workingOut: "\\(x^3 + 8y^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "22f6daad4970191f111500e1ec8ee683",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Simplify: \\((a + b + c)^2 - 2(ab + bc + ca)\\)",
    options: [
      {
        text: "\\(0\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\((a + b + c)^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + b^2 + c^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^2 + b^2 + c^2 + 4(ab+bc+ca)\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(= a^2+b^2+c^2\\)",
    solutionSteps: [
      {
        explanation: "Expand the trinomial square using (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA, with A=a, B=b, C=c.",
        workingOut: "\\((a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca\\)",
        graphData: null
      },
      {
        explanation: "Substitute this expansion into the original expression, then distribute the subtraction across the second bracket.",
        workingOut: "\\(a^2+b^2+c^2+2ab+2bc+2ca - 2(ab+bc+ca) = a^2+b^2+c^2+2ab+2bc+2ca-2ab-2bc-2ca\\)",
        graphData: null
      },
      {
        explanation: "The cross terms (2ab, 2bc, 2ca) cancel exactly with (-2ab, -2bc, -2ca), leaving only the squared terms.",
        workingOut: "\\(= a^2+b^2+c^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "25292ed7b12208eefa2308b913b66284",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((p^2 + \\frac{4}{p^2})^2\\)",
    options: [
      {
        text: "\\(p^4  - 8 + \\frac{16}{p^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^4  + \\frac{16}{p^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^4 + 4 + \\frac{16}{p^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = p^2 and B = \\frac{4}{p^2}, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\(\\left(p^2 + \\frac{4}{p^2}\\right)^2 = (p^2)^2 + 2(p^2)(\\frac{4}{p^2}) + (\\frac{4}{p^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (p^2)^2.",
        workingOut: "\\((p^2)^2 = p^4\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × p^2 × \\frac{4}{p^2} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(p^2)\\left(\\frac{4}{p^2}\\right) = 8\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{4}{p^2})^2.",
        workingOut: "\\(\\left(\\frac{4}{p^2}\\right)^2 = \\frac{16}{p^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(p^4 + 8 + \\frac{16}{p^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2623d16268a367abc83eec2ce8e3a808",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((3t^2 - \\frac{1}{2t^2})^2\\)",
    options: [
      {
        text: "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(3t^4 - 3 + \\frac{1}{4t^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9t^4  + \\frac{1}{4t^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9t^4  + 3 + \\frac{1}{4t^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = 3t^2 and B = \\frac{1}{2t^2}, and apply the identity (A-B)^2 = A^2 - 2AB + B^2.",
        workingOut: "\\(\\left(3t^2 - \\frac{1}{2t^2}\\right)^2 = (3t^2)^2 - 2(3t^2)(\\frac{1}{2t^2}) + (\\frac{1}{2t^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (3t^2)^2.",
        workingOut: "\\((3t^2)^2 = 9t^4\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × 3t^2 × \\frac{1}{2t^2} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(3t^2)\\left(\\frac{1}{2t^2}\\right) = 3\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{1}{2t^2})^2.",
        workingOut: "\\(\\left(\\frac{1}{2t^2}\\right)^2 = \\frac{1}{4t^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(9t^4 - 3 + \\frac{1}{4t^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "262ba50f8f1cb57e89a629605edcb118",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((3t - 4)^2\\)",
    options: [
      {
        text: "\\(9t^2 - 24t - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9t^2 - 12t + 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9t^2 - 24t + 16\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(9t^2 + 16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use $(a-b)^2 = a^2 - 2ab + b^2$.",
    solution: "\\(9t^2 - 24t + 16\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = 3t and B = 4, and apply the identity (A-B)^2 = A^2 - 2AB + B^2.",
        workingOut: "\\((3t - 4)^2 = (3t)^2 - 2(3t)(4) + (4)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (3t)^2.",
        workingOut: "\\((3t)^2 = 9t^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × 3t × 4, then square the last term: (4)^2.",
        workingOut: "\\(2(3t)(4) = 24t, \\quad (4)^2 = 16\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(9t^2 - 24t + 16\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "26c6195673df71f4f88bfc471128d0d0",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2x - y)^3\\)",
    options: [
      {
        text: "\\(8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(8x^3 - 12x^2y - 6xy^2 - y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8x^3 - y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8x^3 - 24x^2y + 12xy^2 - y^3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(8x^3 - 12x^2y + 6xy^2 - y^3\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect cube binomial with A = 2x and B = y, and apply the identity (A-B)^3 = A^3 - 3A^2B + 3AB^2 - B^3.",
        workingOut: "\\((2x - y)^3 = (2x)^3 - 3(2x)^2(y) + 3(2x)(y)^2 - (y)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the first term: (2x)^3.",
        workingOut: "\\((2x)^3 = 8x^3\\)",
        graphData: null
      },
      {
        explanation: "Compute the second term: 3(2x)^2(y).",
        workingOut: "\\(3(2x)^2(y) = 12x^2y\\)",
        graphData: null
      },
      {
        explanation: "Compute the third term: 3(2x)(y)^2.",
        workingOut: "\\(3(2x)(y)^2 = 6xy^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the fourth term: (y)^3.",
        workingOut: "\\((y)^3 = y^3\\)",
        graphData: null
      },
      {
        explanation: "Combine all four terms, applying the alternating sign pattern, to get the final expanded expression.",
        workingOut: "\\(8x^3 - 12x^2y + 6xy^2 - y^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "27217c58e85d0d37e446547862fd1977",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\(3(a + 4)\\)",
    options: [
      {
        text: "\\(3a+12\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3a+4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a+12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3a+7\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(3a + 12\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic structure and expansion pattern.",
        workingOut: "Question: Expand: \\(3(a + 4)\\)",
        graphData: null
      },
      {
        explanation: "Apply appropriate algebraic identities or distribution rules.",
        workingOut: "Set up the expansion",
        graphData: null
      },
      {
        explanation: "Perform all multiplications and calculate intermediate values.",
        workingOut: "Expand and simplify",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final simplified result.",
        workingOut: "\\(3a+12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2782ed52b40362bf547a2785b68edc10",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((k + 8)^2\\)",
    options: [
      {
        text: "\\(k^4+18k+66\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(k^2-16k-64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(k^2+16k+64\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(k^2+16k+64\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = k and B = 8, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\((k + 8)^2 = (k)^2 + 2(k)(8) + (8)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (k)^2.",
        workingOut: "\\((k)^2 = k^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle cross term: 2 × k × 8, then square the last term: (8)^2.",
        workingOut: "\\(2(k)(8) = 16k, \\quad (8)^2 = 64\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms into the final simplified expression.",
        workingOut: "\\(k^2+16k+64\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "285ac4c17dab3b4b06a2cf2561ffe8bc",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a^2 + b)(a^4 - ba^2 + b^2)\\)",
    options: [
      {
        text: "\\(a^6 - b^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^6 + b^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^2 + b^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^6 + 3a^2b + b^3\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\(a^6 + b^3\\)",
    solutionSteps: [
      {
        explanation: "Recognise the sum-of-cubes identity: (A+B)(A^2-AB+B^2) = A^3 + B^3, with A = a^2 and B = b.",
        workingOut: "\\((a^2+b)(a^4-a^2b+b^2) = (a^2)^3 + b^3\\)",
        graphData: null
      },
      {
        explanation: "Verify the given factor matches: (a^2)^2=a^4, (a^2)(b)=a^2b, b^2=b^2 ✓.",
        workingOut: "\\(a^4 - a^2b + b^2 = (a^2)^2 - (a^2)(b) + (b)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate (a^2)^3 = a^6, leaving b^3 unchanged.",
        workingOut: "\\((a^2)^3 = a^6\\)",
        graphData: null
      },
      {
        explanation: "Combine to give the final simplified expression.",
        workingOut: "\\(a^6 + b^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "28b668b8ea9d68284275dfb9c0cd899e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((m^2 + \\frac{2}{m^2})^2\\)",
    options: [
      {
        text: "\\(m^4  + \\frac{4}{m^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(m^4  - 4 + \\frac{4}{m^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(m^4 + 2 + \\frac{4}{m^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = m^2 and B = \\frac{2}{m^2}, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\(\\left(m^2 + \\frac{2}{m^2}\\right)^2 = (m^2)^2 + 2(m^2)(\\frac{2}{m^2}) + (\\frac{2}{m^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (m^2)^2.",
        workingOut: "\\((m^2)^2 = m^4\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × m^2 × \\frac{2}{m^2} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(m^2)\\left(\\frac{2}{m^2}\\right) = 4\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{2}{m^2})^2.",
        workingOut: "\\(\\left(\\frac{2}{m^2}\\right)^2 = \\frac{4}{m^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(m^4 + 4 + \\frac{4}{m^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2ac0dfdc6d8b10406eea1731129dc170",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x^2 - x + 1)^2\\)",
    options: [
      {
        text: "\\(x^4 - 2x^3 + 3x^2 + 2x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 2x^3 + 3x^2 - 2x + 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 2x^3 - x^2 - 2x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + x^2 + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\(x^4-2x^3+(x^2+2x^2)-2x+1 = x^4-2x^3+3x^2-2x+1\\)",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA, with A = x^2, B = -x, C = 1.",
        workingOut: "\\((x^2-x+1)^2 = (x^2)^2+(-x)^2+(1)^2+2(x^2)(-x)+2(-x)(1)+2(1)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Square each of the three terms (note the negative term squared becomes positive).",
        workingOut: "\\((x^2)^2=x^4, \\quad (-x)^2=x^2, \\quad (1)^2=1\\)",
        graphData: null
      },
      {
        explanation: "Compute each of the three cross-product terms.",
        workingOut: "\\(2(x^2)(-x)=-2x^3, \\quad 2(-x)(1)=-2x, \\quad 2(1)(x^2)=2x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine all six terms, collecting the like x^2 terms.",
        workingOut: "\\(x^4-2x^3+(x^2+2x^2)-2x+1 = x^4-2x^3+3x^2-2x+1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2d8924be0f47a2677c07d81d1d397e61",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(5(x + 1) - 3x\\)",
    options: [
      {
        text: "\\(2x + 5\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x - 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x + 7\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(2x + 5\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic structure and expansion pattern.",
        workingOut: "Question: Expand and simplify: \\(5(x + 1) - 3x\\)",
        graphData: null
      },
      {
        explanation: "Apply appropriate algebraic identities or distribution rules.",
        workingOut: "Set up the expansion",
        graphData: null
      },
      {
        explanation: "Perform all multiplications and calculate intermediate values.",
        workingOut: "Expand and simplify",
        graphData: null
      },
      {
        explanation: "Combine like terms and state the final simplified result.",
        workingOut: "\\(2x + 5\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2d9e85410314eea49c006c5d1de13c97",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((a - 7)(a + 7)\\)",
    options: [
      {
        text: "\\(a^2+49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2-49\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^2-14a-49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2-14\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "a^2 - 49",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A - B)(A + B), which is the difference of squares identity where A = a and B = 7.",
        workingOut: "\\((a - 7)(a + 7)\\) is in the form \\((A - B)(A + B)\\)"
      },
      {
        explanation: "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        workingOut: "\\(= (a)^2 - (7)^2\\)"
      },
      {
        explanation: "Square each term: a squared is a², and 7 squared is 49.",
        workingOut: "\\(= a^2 - 49\\)"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2de4a42f81a78f7a5fa195c8e7decf7c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(2(x - 3) - 3(x - 1)\\)",
    options: [
      {
        text: "\\(-x - 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-x - 3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(+x + 3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "-x - 3",
    solutionSteps: [
      {
        explanation: "Distribute 2 to each term in (x - 3): 2·x - 2·3 = 2x - 6.",
        workingOut: "2(x - 3) = 2x - 6"
      },
      {
        explanation: "Distribute -3 to each term in (x - 1): -3·x - (-3)·1 = -3x + 3.",
        workingOut: "-3(x - 1) = -3x + 3"
      },
      {
        explanation: "Combine the expanded expressions: (2x - 6) + (-3x + 3).",
        workingOut: "= 2x - 6 - 3x + 3"
      },
      {
        explanation: "Combine like terms: 2x - 3x = -x, and -6 + 3 = -3.",
        workingOut: "= -x - 3"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2e0c51d23979d58e0086d2a5bfbe13a0",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((m^2 + 3m + 9)(m^2 - 3m + 9)\\)",
    options: [
      {
        text: "\\(m^4 + 9m^2 + 81\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 9m^2 + 81\\)",
        imageUrl: ""
      },
      {
        text: "\\(m^4 - 9m^2 - 81\\)",
        imageUrl: ""
      },
      {
        text: "\\(m^4 + 18m^2 + 81\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "m^4 + 9m^2 + 81",
    solutionSteps: [
      {
        explanation: "Recognize that both factors have the form (m² + 9) with ±3m. Rewrite to expose this structure: (m^2 + 3m + 9) = [(m^2 + 9) + 3m] and (m^2 - 3m + 9) = [(m^2 + 9) - 3m].",
        workingOut: "[(m^2 + 9) + 3m][(m^2 + 9) - 3m]"
      },
      {
        explanation: "This is now in the form (A + B)(A - B) where A = (m² + 9) and B = 3m. Apply the difference of squares identity: (A + B)(A - B) = A² - B².",
        workingOut: "= (m^2 + 9)^2 - (3m)^2"
      },
      {
        explanation: "Expand (m² + 9)²: (m²)² + 2(m²)(9) + 9² = m⁴ + 18m² + 81.",
        workingOut: "(m^2 + 9)^2 = m^4 + 18m^2 + 81"
      },
      {
        explanation: "Expand (3m)²: 9m².",
        workingOut: "(3m)^2 = 9m^2"
      },
      {
        explanation: "Subtract: (m⁴ + 18m² + 81) - 9m² = m⁴ + (18m² - 9m²) + 81 = m⁴ + 9m² + 81.",
        workingOut: "= m^4 + 18m^2 + 81 - 9m^2 = m^4 + 9m^2 + 81"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2f025b72944f9b300e7ec0cb70ff86e4",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((9 - 2m)^2\\)",
    options: [
      {
        text: "\\(81 + 4m^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(18 - 36m + 4m^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81 - 18m + 4m^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81 - 36m + 4m^2\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "81 - 36m + 4m^2",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square trinomial (A - B)² where A = 9 and B = 2m.",
        workingOut: "\\((9 - 2m)^2\\) where A = 9, B = 2m"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "= (9)^2 - 2(9)(2m) + (2m)^2"
      },
      {
        explanation: "Calculate 9²: 81.",
        workingOut: "(9)^2 = 81"
      },
      {
        explanation: "Calculate 2(9)(2m): 36m.",
        workingOut: "2(9)(2m) = 36m"
      },
      {
        explanation: "Calculate (2m)²: 4m².",
        workingOut: "(2m)^2 = 4m^2"
      },
      {
        explanation: "Combine all terms: 81 - 36m + 4m².",
        workingOut: "= 81 - 36m + 4m^2"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "2f6f780cdaff54742f802391871d7f27",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((t + 5)(t^2 - 5t + 25)\\)",
    options: [
      {
        text: "\\(t^2 + 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(t^3 + 125\\)",
        imageUrl: ""
      },
      {
        text: "\\(t^3 + 3t5 + 125\\)",
        imageUrl: ""
      },
      {
        text: "\\(t^3 - 125\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "t^3 + 125",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A + B)(A² - AB + B²), which is the sum of cubes identity where A = t and B = 5.",
        workingOut: "A = t, \\quad B = 5"
      },
      {
        explanation: "Note that t² - 5t + 25 = t² - (t)(5) + 5², matching the second factor in the sum of cubes pattern.",
        workingOut: "\\((t + 5)(t^2 - 5t + 25)\\) matches \\((A + B)(A^2 - AB + B^2)\\)"
      },
      {
        explanation: "Apply the sum of cubes identity: (A + B)(A² - AB + B²) = A³ + B³.",
        workingOut: "= (t)^3 + (5)^3"
      },
      {
        explanation: "Evaluate the cubes: t³ and 125.",
        workingOut: "= t^3 + 125"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3236461fe0cf2defdedf099ebb39d9e3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x - 1)(x + 5)\\)",
    options: [
      {
        text: "\\(x^3 + 5x^2 - x - 5\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 5x^2 + x + 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 5x^2 - x - 5\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "x^3 + 5x^2 - x - 5",
    solutionSteps: [
      {
        explanation: "First, multiply (x + 1)(x - 1) using the difference of squares identity: (A + B)(A - B) = A² - B² where A = x and B = 1.",
        workingOut: "\\((x + 1)(x - 1) = x^2 - 1\\)"
      },
      {
        explanation: "Now multiply the result (x² - 1) by the third binomial (x + 5): (x² - 1)(x + 5).",
        workingOut: "\\((x^2 - 1)(x + 5)\\)"
      },
      {
        explanation: "Distribute x to both terms in (x² - 1): x·x² - x·1 = x³ - x.",
        workingOut: "x(x^2 - 1) = x^3 - x"
      },
      {
        explanation: "Distribute 5 to both terms in (x² - 1): 5·x² - 5·1 = 5x² - 5.",
        workingOut: "5(x^2 - 1) = 5x^2 - 5"
      },
      {
        explanation: "Combine both distributions: (x³ - x) + (5x² - 5) = x³ + 5x² - x - 5.",
        workingOut: "= x^3 + 5x^2 - x - 5"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "326967100407fd68a210906e4974b111",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "3(x + 5) + 4(3x - 2)",
    options: [
      {
        text: "\\(15x - 7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(15x + 7\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(17x + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Distribute the 3 and 4 across the brackets.",
    solution: "15x + 7",
    solutionSteps: [
      {
        explanation: "Distribute 3 to each term in (x + 5): 3·x + 3·5 = 3x + 15.",
        workingOut: "3(x + 5) = 3x + 15"
      },
      {
        explanation: "Distribute 4 to each term in (3x - 2): 4·3x + 4·(-2) = 12x - 8.",
        workingOut: "4(3x - 2) = 12x - 8"
      },
      {
        explanation: "Add the expanded expressions: (3x + 15) + (12x - 8).",
        workingOut: "= 3x + 15 + 12x - 8"
      },
      {
        explanation: "Combine like terms: 3x + 12x = 15x, and 15 - 8 = 7.",
        workingOut: "= 15x + 7"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "32920bf54887429d7349a118ec17bbe2",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((4m - \\frac{1}{4m})^2\\)",
    options: [
      {
        text: "\\(16m^2  + \\frac{1}{16m^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(16m^2 - 2 + \\frac{1}{16m^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(16m^2 - 1 + \\frac{1}{16m^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(16m^2  + 2 + \\frac{1}{16m^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "16m^2 - 2 + \\frac{1}{16m^2}",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A - B)² where A = 4m and B = 1/(4m).",
        workingOut: "A = 4m, \\quad B = \\frac{1}{4m}"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "\\left(4m - \\frac{1}{4m}\\right)^2 = (4m)^2 - 2(4m)\\left(\\frac{1}{4m}\\right) + \\left(\\frac{1}{4m}\\right)^2"
      },
      {
        explanation: "Calculate (4m)²: 16m².",
        workingOut: "(4m)^2 = 16m^2"
      },
      {
        explanation: "Calculate 2(4m)(1/(4m)): 2·1 = 2 (the 4m cancels).",
        workingOut: "2(4m)\\left(\\frac{1}{4m}\\right) = 2"
      },
      {
        explanation: "Calculate (1/(4m))²: 1/(16m²).",
        workingOut: "\\left(\\frac{1}{4m}\\right)^2 = \\frac{1}{16m^2}"
      },
      {
        explanation: "Combine all terms: 16m² - 2 + 1/(16m²).",
        workingOut: "= 16m^2 - 2 + \\frac{1}{16m^2}"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "32b85d39dbdeb8aa35548f870098684f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((t + \\frac{1}{t})^2\\)",
    options: [
      {
        text: "\\(t^2 + \\frac{2}{t} + \\frac{1}{t^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + \\frac{1}{t^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2t + \\frac{2}{t}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + 2 + \\frac{1}{t^2}\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "t^2 + 2 + \\frac{1}{t^2}",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A + B)² where A = t and B = 1/t.",
        workingOut: "A = t, \\quad B = \\frac{1}{t}"
      },
      {
        explanation: "Apply the perfect square identity: (A + B)² = A² + 2AB + B².",
        workingOut: "\\left(t + \\frac{1}{t}\\right)^2 = (t)^2 + 2(t)\\left(\\frac{1}{t}\\right) + \\left(\\frac{1}{t}\\right)^2"
      },
      {
        explanation: "Calculate (t)²: t².",
        workingOut: "(t)^2 = t^2"
      },
      {
        explanation: "Calculate 2(t)(1/t): 2·1 = 2 (the t cancels).",
        workingOut: "2(t)\\left(\\frac{1}{t}\\right) = 2"
      },
      {
        explanation: "Calculate (1/t)²: 1/t².",
        workingOut: "\\left(\\frac{1}{t}\\right)^2 = \\frac{1}{t^2}"
      },
      {
        explanation: "Combine all terms: t² + 2 + 1/t².",
        workingOut: "= t^2 + 2 + \\frac{1}{t^2}"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "33e8e3887bc40446da6bc748d4eb48bc",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 - 1)(x^4 + 1x^2 + 1)\\)",
    options: [
      {
        text: "\\(x^4 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6 - 3x^21 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6 - 1\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "x^6 - 1",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A - B)(A² + AB + B²), which is the difference of cubes identity where A = x² and B = 1.",
        workingOut: "A = x^2, \\quad B = 1"
      },
      {
        explanation: "Note that x⁴ + x² + 1 = (x²)² + (x²)(1) + 1², matching the second factor in the difference of cubes pattern.",
        workingOut: "\\((x^2 - 1)(x^4 + x^2 + 1)\\) matches \\((A - B)(A^2 + AB + B^2)\\)"
      },
      {
        explanation: "Apply the difference of cubes identity: (A - B)(A² + AB + B²) = A³ - B³.",
        workingOut: "= (x^2)^3 - (1)^3"
      },
      {
        explanation: "Evaluate the cubes: (x²)³ = x⁶ and 1³ = 1.",
        workingOut: "= x^6 - 1"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "33f3d8efa1fe5aa97c00690e4244c8db",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((4y - 5)^2\\)",
    options: [
      {
        text: "\\(16y^2 - 20y + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16y^2 - 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8y^2 - 40y + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16y^2 - 40y + 25\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "16y^2 - 40y + 25",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A - B)² where A = 4y and B = 5.",
        workingOut: "\\((4y - 5)^2\\) where A = 4y, B = 5"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "= (4y)^2 - 2(4y)(5) + (5)^2"
      },
      {
        explanation: "Calculate (4y)²: 16y².",
        workingOut: "(4y)^2 = 16y^2"
      },
      {
        explanation: "Calculate 2(4y)(5): 40y.",
        workingOut: "2(4y)(5) = 40y"
      },
      {
        explanation: "Calculate (5)²: 25.",
        workingOut: "(5)^2 = 25"
      },
      {
        explanation: "Combine all terms: 16y² - 40y + 25.",
        workingOut: "= 16y^2 - 40y + 25"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "34f94d0b177c324ceea9e6ac5b541dad",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((a - 2b - c)^2\\)",
    options: [
      {
        text: "\\(a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^2 - 4b^2 + c^2 - 4ab + 4bc - 2ca\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + 4b^2 + c^2 - 4ab - 4bc + 2ca\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + 4b^2 + c^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca",
    solutionSteps: [
      {
        explanation: "Recognize this is the square of a trinomial (A + B + C)² where A = a, B = -2b, and C = -c.",
        workingOut: "\\((a - 2b - c)^2\\) where A = a, B = -2b, C = -c"
      },
      {
        explanation: "Apply the trinomial square identity: (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA.",
        workingOut: "= (a)^2 + (-2b)^2 + (-c)^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)"
      },
      {
        explanation: "Calculate the squares: a² = a², (-2b)² = 4b², (-c)² = c².",
        workingOut: "= a^2 + 4b^2 + c^2 + 2(a)(-2b) + 2(-2b)(-c) + 2(-c)(a)"
      },
      {
        explanation: "Calculate the cross products: 2(a)(-2b) = -4ab, 2(-2b)(-c) = 4bc, 2(-c)(a) = -2ca.",
        workingOut: "= a^2 + 4b^2 + c^2 - 4ab + 4bc - 2ca"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3519b72b8eb9941ff3b42b06371560a3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((5x + \\frac{1}{5x})^2\\)",
    options: [
      {
        text: "\\(25x^2 + 2 + \\frac{1}{25x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(25x^2  - 2 + \\frac{1}{25x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(25x^2 + 1 + \\frac{1}{25x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(25x^2  + \\frac{1}{25x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "25x^2 + 2 + \\frac{1}{25x^2}",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A + B)² where A = 5x and B = 1/(5x).",
        workingOut: "A = 5x, \\quad B = \\frac{1}{5x}"
      },
      {
        explanation: "Apply the perfect square identity: (A + B)² = A² + 2AB + B².",
        workingOut: "\\left(5x + \\frac{1}{5x}\\right)^2 = (5x)^2 + 2(5x)\\left(\\frac{1}{5x}\\right) + \\left(\\frac{1}{5x}\\right)^2"
      },
      {
        explanation: "Calculate (5x)²: 25x².",
        workingOut: "(5x)^2 = 25x^2"
      },
      {
        explanation: "Calculate 2(5x)(1/(5x)): 2·1 = 2 (the 5x cancels).",
        workingOut: "2(5x)\\left(\\frac{1}{5x}\\right) = 2"
      },
      {
        explanation: "Calculate (1/(5x))²: 1/(25x²).",
        workingOut: "\\left(\\frac{1}{5x}\\right)^2 = \\frac{1}{25x^2}"
      },
      {
        explanation: "Combine all terms: 25x² + 2 + 1/(25x²).",
        workingOut: "= 25x^2 + 2 + \\frac{1}{25x^2}"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "35be4c6aea2df381022d0b8d2d33ab49",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x^2 + x + 1)^2\\)",
    options: [
      {
        text: "\\(x^4 + 2x^3 + 3x^2 + 2x + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - x^2 + 1 - 2x^3 + 2x - 2x^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + x^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  + 2x^3  + 3x^2+2x+1\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "x^4 + 2x^3 + 3x^2 + 2x + 1",
    solutionSteps: [
      {
        explanation: "Recognize this is the square of a trinomial (A + B + C)² where A = x², B = x, and C = 1.",
        workingOut: "\\((x^2 + x + 1)^2\\) where A = x^2, B = x, C = 1"
      },
      {
        explanation: "Apply the trinomial square identity: (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA.",
        workingOut: "= (x^2)^2 + (x)^2 + (1)^2 + 2(x^2)(x) + 2(x)(1) + 2(1)(x^2)"
      },
      {
        explanation: "Calculate the squares: (x²)² = x⁴, x² = x², 1² = 1.",
        workingOut: "= x^4 + x^2 + 1 + 2(x^2)(x) + 2(x)(1) + 2(1)(x^2)"
      },
      {
        explanation: "Calculate the cross products: 2(x²)(x) = 2x³, 2(x)(1) = 2x, 2(1)(x²) = 2x².",
        workingOut: "= x^4 + x^2 + 1 + 2x^3 + 2x + 2x^2"
      },
      {
        explanation: "Combine like terms: x⁴ + 2x³ + (x² + 2x²) + 2x + 1 = x⁴ + 2x³ + 3x² + 2x + 1.",
        workingOut: "= x^4 + 2x^3 + 3x^2 + 2x + 1"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "378c40dcdf92bad1a15ba5a2c75ea620",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x - 3)(x + 5)\\)",
    options: [
      {
        text: "\\(x^2 + 3x^2 - 13x - 15\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 15\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 3x^2 - 13x - 15\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 3x^2 + 13x + 15\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "x^3 + 3x^2 - 13x - 15",
    solutionSteps: [
      {
        explanation: "First, multiply (x + 1)(x - 3) using FOIL: x·x + x·(-3) + 1·x + 1·(-3) = x² - 3x + x - 3 = x² - 2x - 3.",
        workingOut: "\\((x + 1)(x - 3) = x^2 - 2x - 3\\)"
      },
      {
        explanation: "Now multiply the result (x² - 2x - 3) by the third binomial (x + 5).",
        workingOut: "\\((x^2 - 2x - 3)(x + 5)\\)"
      },
      {
        explanation: "Distribute x: x·(x² - 2x - 3) = x³ - 2x² - 3x.",
        workingOut: "x(x^2 - 2x - 3) = x^3 - 2x^2 - 3x"
      },
      {
        explanation: "Distribute 5: 5·(x² - 2x - 3) = 5x² - 10x - 15.",
        workingOut: "5(x^2 - 2x - 3) = 5x^2 - 10x - 15"
      },
      {
        explanation: "Add both distributions: (x³ - 2x² - 3x) + (5x² - 10x - 15) = x³ + (-2x² + 5x²) + (-3x - 10x) - 15 = x³ + 3x² - 13x - 15.",
        workingOut: "= x^3 + 3x^2 - 13x - 15"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "37f3c82ec3ad9696f5353306a38cfd37",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((2z + 3)^2\\)",
    options: [
      {
        text: "\\(2z^2 + 12z + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4z^2 + 12z + 9\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4z^2 + 6z + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4z^2 + 9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "4z^2 + 12z + 9",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A + B)² where A = 2z and B = 3.",
        workingOut: "\\((2z + 3)^2\\) where A = 2z, B = 3"
      },
      {
        explanation: "Apply the perfect square identity: (A + B)² = A² + 2AB + B².",
        workingOut: "= (2z)^2 + 2(2z)(3) + (3)^2"
      },
      {
        explanation: "Calculate (2z)²: 4z².",
        workingOut: "(2z)^2 = 4z^2"
      },
      {
        explanation: "Calculate 2(2z)(3): 12z.",
        workingOut: "2(2z)(3) = 12z"
      },
      {
        explanation: "Calculate (3)²: 9.",
        workingOut: "(3)^2 = 9"
      },
      {
        explanation: "Combine all terms: 4z² + 12z + 9.",
        workingOut: "= 4z^2 + 12z + 9"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "387638a35ff96f119508e0461fbc0413",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(3(2a + b) + 2(a - 2b)\\)",
    options: [
      {
        text: "\\(8a - b\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(8a+b\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8a-3b\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(6a-b\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "8a - b",
    solutionSteps: [
      {
        explanation: "Distribute 3 to each term in (2a + b): 3·2a + 3·b = 6a + 3b.",
        workingOut: "3(2a + b) = 6a + 3b"
      },
      {
        explanation: "Distribute 2 to each term in (a - 2b): 2·a + 2·(-2b) = 2a - 4b.",
        workingOut: "2(a - 2b) = 2a - 4b"
      },
      {
        explanation: "Add the expanded expressions: (6a + 3b) + (2a - 4b).",
        workingOut: "= 6a + 3b + 2a - 4b"
      },
      {
        explanation: "Combine like terms: 6a + 2a = 8a, and 3b - 4b = -b.",
        workingOut: "= 8a - b"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3abb0585a23cb51f1c5b1e76b06817b6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2x + 1)(x - 2) - (x - 3)(x + 2)\\)",
    options: [
      {
        text: "\\(x^2-2x+4\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2+2x+4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2-2x-4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4-4x+6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "x^2 - 2x + 4",
    solutionSteps: [
      {
        explanation: "Expand the first product (2x + 1)(x - 2) using FOIL: 2x·x + 2x·(-2) + 1·x + 1·(-2) = 2x² - 4x + x - 2 = 2x² - 3x - 2.",
        workingOut: "\\((2x + 1)(x - 2) = 2x^2 - 3x - 2\\)"
      },
      {
        explanation: "Expand the second product (x - 3)(x + 2) using FOIL: x·x + x·2 + (-3)·x + (-3)·2 = x² + 2x - 3x - 6 = x² - x - 6.",
        workingOut: "\\((x - 3)(x + 2) = x^2 - x - 6\\)"
      },
      {
        explanation: "Subtract the second product from the first: (2x² - 3x - 2) - (x² - x - 6).",
        workingOut: "= 2x^2 - 3x - 2 - x^2 + x + 6"
      },
      {
        explanation: "Combine like terms: 2x² - x² = x², -3x + x = -2x, and -2 + 6 = 4.",
        workingOut: "= x^2 - 2x + 4"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3b2decd987cf0200254a889859ec03c2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Expand: \\(7(x - 2)\\)",
    options: [
      {
        text: "\\(7x-14\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(7x+14\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x-16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(7x - 14\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, 7, and the two terms inside, x and -2.",
        workingOut: "\\(7(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Multiply 7 by each term inside the bracket separately.",
        workingOut: "\\(7 \\times x + 7 \\times (-2) = 7x - 14\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final simplified expansion.",
        workingOut: "\\(7x - 14\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3b429019908ed2e1896ffbc6907efcae",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(3(x + 2) - 2x\\)",
    options: [
      {
        text: "\\(x + 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "x + 6",
    solutionSteps: [
      {
        explanation: "Distribute 3 to each term in (x + 2): 3·x + 3·2 = 3x + 6.",
        workingOut: "3(x + 2) = 3x + 6"
      },
      {
        explanation: "Subtract 2x from the result: (3x + 6) - 2x.",
        workingOut: "= 3x + 6 - 2x"
      },
      {
        explanation: "Combine like terms: 3x - 2x = x, so the result is x + 6.",
        workingOut: "= x + 6"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3e9e6f5e2a915b6a7a28cf83427eac67",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((3m + 2)(9m^2 - 6m + 4)\\)",
    options: [
      {
        text: "\\(3m^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(27m^3 - 8\\)",
        imageUrl: ""
      },
      {
        text: "\\(27m^3 + 33m2 + 8\\)",
        imageUrl: ""
      },
      {
        text: "\\(27m^3 + 8\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "27m^3 + 8",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A + B)(A² - AB + B²), which is the sum of cubes identity where A = 3m and B = 2.",
        workingOut: "A = 3m, \\quad B = 2"
      },
      {
        explanation: "Note that 9m² - 6m + 4 = (3m)² - (3m)(2) + 2², matching the second factor in the sum of cubes pattern.",
        workingOut: "\\((3m + 2)(9m^2 - 6m + 4)\\) matches \\((A + B)(A^2 - AB + B^2)\\)"
      },
      {
        explanation: "Apply the sum of cubes identity: (A + B)(A² - AB + B²) = A³ + B³.",
        workingOut: "= (3m)^3 + (2)^3"
      },
      {
        explanation: "Evaluate the cubes: (3m)³ = 27m³ and 2³ = 8.",
        workingOut: "= 27m^3 + 8"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3ee10ae2b4b6be5b82b76ad630d300cd",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((u - v)(u + v)\\)",
    options: [
      {
        text: "\\(u^2+v^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(u^2-2uv+v^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(u^2-2v^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(u^2-v^2\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "u^2 - v^2",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A - B)(A + B), which is the difference of squares identity where A = u and B = v.",
        workingOut: "\\((u - v)(u + v)\\) is in the form \\((A - B)(A + B)\\)"
      },
      {
        explanation: "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        workingOut: "= (u)^2 - (v)^2"
      },
      {
        explanation: "Simplify: u² - v².",
        workingOut: "= u^2 - v^2"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3eec009d1f553be60ad33fb0985a6711",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x + 2)(x + 4)\\)",
    options: [
      {
        text: "\\(x^3 + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 7x^2 + 14x + 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 + 7x^2 + 14x + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 7x^2 - 14x - 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "x^3 + 7x^2 + 14x + 8",
    solutionSteps: [
      {
        explanation: "First, multiply (x + 1)(x + 2) using FOIL: x·x + x·2 + 1·x + 1·2 = x² + 2x + x + 2 = x² + 3x + 2.",
        workingOut: "\\((x + 1)(x + 2) = x^2 + 3x + 2\\)"
      },
      {
        explanation: "Now multiply the result (x² + 3x + 2) by the third binomial (x + 4).",
        workingOut: "\\((x^2 + 3x + 2)(x + 4)\\)"
      },
      {
        explanation: "Distribute x: x·(x² + 3x + 2) = x³ + 3x² + 2x.",
        workingOut: "x(x^2 + 3x + 2) = x^3 + 3x^2 + 2x"
      },
      {
        explanation: "Distribute 4: 4·(x² + 3x + 2) = 4x² + 12x + 8.",
        workingOut: "4(x^2 + 3x + 2) = 4x^2 + 12x + 8"
      },
      {
        explanation: "Add both distributions: (x³ + 3x² + 2x) + (4x² + 12x + 8) = x³ + (3x² + 4x²) + (2x + 12x) + 8 = x³ + 7x² + 14x + 8.",
        workingOut: "= x^3 + 7x^2 + 14x + 8"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "3fa68c56fa138e73f10de3639790cd98",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + 2y + 3z)^2\\)",
    options: [
      {
        text: "\\(x^2 + 4y^2 + 9z^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 4y^2 + 9z^2 + 2xy + 6yz + 3zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 - 4y^2 + 9z^2 - 4xy + 12yz - 6zx\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx",
    solutionSteps: [
      {
        explanation: "Recognize this is the square of a trinomial (A + B + C)² where A = x, B = 2y, and C = 3z.",
        workingOut: "\\((x + 2y + 3z)^2\\) where A = x, B = 2y, C = 3z"
      },
      {
        explanation: "Apply the trinomial square identity: (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA.",
        workingOut: "= (x)^2 + (2y)^2 + (3z)^2 + 2(x)(2y) + 2(2y)(3z) + 2(3z)(x)"
      },
      {
        explanation: "Calculate the squares: x² = x², (2y)² = 4y², (3z)² = 9z².",
        workingOut: "= x^2 + 4y^2 + 9z^2 + 2(x)(2y) + 2(2y)(3z) + 2(3z)(x)"
      },
      {
        explanation: "Calculate the cross products: 2(x)(2y) = 4xy, 2(2y)(3z) = 12yz, 2(3z)(x) = 6zx.",
        workingOut: "= x^2 + 4y^2 + 9z^2 + 4xy + 12yz + 6zx"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "415bcb87f834277f3a83ddb8c038ec8c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((y - 3)^2\\)",
    options: [
      {
        text: "\\(y^4-8y+11\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2-6y+9\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(y^2-6y-9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2+6y+9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "y^2 - 6y + 9",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A - B)² where A = y and B = 3.",
        workingOut: "\\((y - 3)^2\\) where A = y, B = 3"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "= (y)^2 - 2(y)(3) + (3)^2"
      },
      {
        explanation: "Calculate (y)²: y².",
        workingOut: "(y)^2 = y^2"
      },
      {
        explanation: "Calculate 2(y)(3): 6y.",
        workingOut: "2(y)(3) = 6y"
      },
      {
        explanation: "Calculate (3)²: 9.",
        workingOut: "(3)^2 = 9"
      },
      {
        explanation: "Combine all terms: y² - 6y + 9.",
        workingOut: "= y^2 - 6y + 9"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "419c41e35029d8f76b4ad1215416b685",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2a + 2b - c)^2\\)",
    options: [
      {
        text: "\\(4a^2 - 4b^2 + c^2 - 8ab + 4bc - 4ca\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc + 4ca\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^2 + 4b^2 + c^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca",
    solutionSteps: [
      {
        explanation: "Recognize this is the square of a trinomial (A + B + C)² where A = 2a, B = 2b, and C = -c.",
        workingOut: "\\((2a + 2b - c)^2\\) where A = 2a, B = 2b, C = -c"
      },
      {
        explanation: "Apply the trinomial square identity: (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA.",
        workingOut: "= (2a)^2 + (2b)^2 + (-c)^2 + 2(2a)(2b) + 2(2b)(-c) + 2(-c)(2a)"
      },
      {
        explanation: "Calculate the squares: (2a)² = 4a², (2b)² = 4b², (-c)² = c².",
        workingOut: "= 4a^2 + 4b^2 + c^2 + 2(2a)(2b) + 2(2b)(-c) + 2(-c)(2a)"
      },
      {
        explanation: "Calculate the cross products: 2(2a)(2b) = 8ab, 2(2b)(-c) = -4bc, 2(-c)(2a) = -4ca.",
        workingOut: "= 4a^2 + 4b^2 + c^2 + 8ab - 4bc - 4ca"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "4222bb235925314e2ae2519a271c1ab5",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand and simplify: \\(2(p - q) - (p + q)\\)",
    options: [
      {
        text: "\\(p-q\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p+3q\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p - 3q\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3p-3q\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "p - 3q",
    solutionSteps: [
      {
        explanation: "Distribute 2 to each term in (p - q): 2·p - 2·q = 2p - 2q.",
        workingOut: "2(p - q) = 2p - 2q"
      },
      {
        explanation: "Distribute -1 to each term in (p + q): -1·p - 1·q = -p - q.",
        workingOut: "-(p + q) = -p - q"
      },
      {
        explanation: "Add both results: (2p - 2q) + (-p - q).",
        workingOut: "= 2p - 2q - p - q"
      },
      {
        explanation: "Combine like terms: 2p - p = p, and -2q - q = -3q.",
        workingOut: "= p - 3q"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "42fb9493fe0e0c6af16e28c956a7e50d",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Evaluate using algebraic expansion: \\(29.8^2\\)",
    options: [
      {
        text: "\\(959.08\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(754.83\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1021.25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(888.04\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "888.04",
    solutionSteps: [
      {
        explanation: "Rewrite 29.8 as (30 - 0.2) to use a convenient base that is close to 29.8.",
        workingOut: "29.8^2 = (30 - 0.2)^2"
      },
      {
        explanation: "Recognize this is a perfect square (A - B)² where A = 30 and B = 0.2.",
        workingOut: "\\((30 - 0.2)^2\\) where A = 30, B = 0.2"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "= (30)^2 - 2(30)(0.2) + (0.2)^2"
      },
      {
        explanation: "Calculate (30)²: 900.",
        workingOut: "(30)^2 = 900"
      },
      {
        explanation: "Calculate 2(30)(0.2): 12.",
        workingOut: "2(30)(0.2) = 12"
      },
      {
        explanation: "Calculate (0.2)²: 0.04.",
        workingOut: "(0.2)^2 = 0.04"
      },
      {
        explanation: "Combine all terms: 900 - 12 + 0.04 = 888.04.",
        workingOut: "= 900 - 12 + 0.04 = 888.04"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "438f2e0d5beeee35d31c04fa5e4efc53",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\(-3(p - 2q)\\)",
    options: [
      {
        text: "\\(-3p-6q\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3p+2q\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3p+6q\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3p-6q\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(-3p + 6q\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, -3, and the two terms inside, p and -2q.",
        workingOut: "\\(-3(p - 2q)\\)",
        graphData: null
      },
      {
        explanation: "Multiply -3 by each term inside the bracket, being careful with the signs.",
        workingOut: "\\((-3) \\times p + (-3) \\times (-2q) = -3p + 6q\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final answer.",
        workingOut: "\\(-3p + 6q\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "45b598c53ff9f5fda8e4e8e7185d608c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((a + 3b)^3\\)",
    options: [
      {
        text: "\\(a^3 + 3b^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^3 + 3a^23b - 3a3b^2 + 3b^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^3 + 3a^23b + 3a3b^2 + 3b^3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^3 + 6a^23b + 6a3b^2 + 3b^3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "a^3 + 9a^2b + 27ab^2 + 27b^3",
    solutionSteps: [
      {
        explanation: "Recognize this is a binomial raised to the third power (A + B)³ where A = a and B = 3b.",
        workingOut: "\\((a + 3b)^3\\) where A = a, B = 3b"
      },
      {
        explanation: "Apply the binomial cube expansion formula: (A + B)³ = A³ + 3A²B + 3AB² + B³.",
        workingOut: "= (a)^3 + 3(a)^2(3b) + 3(a)(3b)^2 + (3b)^3"
      },
      {
        explanation: "Calculate A³: a³.",
        workingOut: "(a)^3 = a^3"
      },
      {
        explanation: "Calculate 3A²B: 3(a²)(3b) = 9a²b.",
        workingOut: "3(a)^2(3b) = 9a^2b"
      },
      {
        explanation: "Calculate 3AB²: 3(a)(3b)² = 3(a)(9b²) = 27ab².",
        workingOut: "3(a)(3b)^2 = 27ab^2"
      },
      {
        explanation: "Calculate B³: (3b)³ = 27b³.",
        workingOut: "(3b)^3 = 27b^3"
      },
      {
        explanation: "Combine all terms: a³ + 9a²b + 27ab² + 27b³.",
        workingOut: "= a^3 + 9a^2b + 27ab^2 + 27b^3"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "463c6f47799eeb0a4681a122cbfb459f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((2y - 7)(2y + 7)\\)",
    options: [
      {
        text: "\\(4y^2 - 28y - 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2y^2 - 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4y^2 + 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4y^2 - 49\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Difference of squares pattern: $(a-b)(a+b) = a^2 - b^2$.",
    solution: "4y^2 - 49",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A - B)(A + B), which is the difference of squares identity where A = 2y and B = 7.",
        workingOut: "\\((2y - 7)(2y + 7)\\) is in the form \\((A - B)(A + B)\\)"
      },
      {
        explanation: "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        workingOut: "= (2y)^2 - (7)^2"
      },
      {
        explanation: "Calculate (2y)²: 4y².",
        workingOut: "(2y)^2 = 4y^2"
      },
      {
        explanation: "Calculate (7)²: 49.",
        workingOut: "(7)^2 = 49"
      },
      {
        explanation: "Simplify: 4y² - 49.",
        workingOut: "= 4y^2 - 49"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "475951ae2f4bd6abbf742e2919f15fe2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((5 + c)^2\\)",
    options: [
      {
        text: "\\(c^2+25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(c^2+5c+25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(c^2+10c+10\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(c^2+10c+25\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "c^2 + 10c + 25",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A + B)² where A = 5 and B = c.",
        workingOut: "\\((5 + c)^2\\) where A = 5, B = c"
      },
      {
        explanation: "Apply the perfect square identity: (A + B)² = A² + 2AB + B².",
        workingOut: "= (5)^2 + 2(5)(c) + (c)^2"
      },
      {
        explanation: "Calculate (5)²: 25.",
        workingOut: "(5)^2 = 25"
      },
      {
        explanation: "Calculate 2(5)(c): 10c.",
        workingOut: "2(5)(c) = 10c"
      },
      {
        explanation: "Calculate (c)²: c².",
        workingOut: "(c)^2 = c^2"
      },
      {
        explanation: "Combine all terms in standard form: c² + 10c + 25.",
        workingOut: "= c^2 + 10c + 25"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "47d4eb00cda18dca856793ff8345b2a9",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 2)(x - 3)(x + 4)\\)",
    options: [
      {
        text: "\\(x^2 - x^2 - 14x + 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - x^2 - 14x + 24\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + x^2 + 14x - 24\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "x^3 - x^2 - 14x + 24",
    solutionSteps: [
      {
        explanation: "First, multiply (x - 2)(x - 3) using FOIL: x·x + x·(-3) + (-2)·x + (-2)·(-3) = x² - 3x - 2x + 6 = x² - 5x + 6.",
        workingOut: "\\((x - 2)(x - 3) = x^2 - 5x + 6\\)"
      },
      {
        explanation: "Now multiply the result (x² - 5x + 6) by the third binomial (x + 4).",
        workingOut: "\\((x^2 - 5x + 6)(x + 4)\\)"
      },
      {
        explanation: "Distribute x: x·(x² - 5x + 6) = x³ - 5x² + 6x.",
        workingOut: "x(x^2 - 5x + 6) = x^3 - 5x^2 + 6x"
      },
      {
        explanation: "Distribute 4: 4·(x² - 5x + 6) = 4x² - 20x + 24.",
        workingOut: "4(x^2 - 5x + 6) = 4x^2 - 20x + 24"
      },
      {
        explanation: "Add both distributions: (x³ - 5x² + 6x) + (4x² - 20x + 24) = x³ + (-5x² + 4x²) + (6x - 20x) + 24 = x³ - x² - 14x + 24.",
        workingOut: "= x^3 - x^2 - 14x + 24"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "4864d425af8910a1201060618085c822",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Evaluate using difference of squares: \\(1002 \\times 998\\)",
    options: [
      {
        text: "\\(1000000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1000004\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(998000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(999996\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    solution: "999996",
    solutionSteps: [
      {
        explanation: "Rewrite the product using a convenient base 1000 and symmetric differences: 1002 = 1000 + 2 and 998 = 1000 - 2.",
        workingOut: "1002 \\times 998 = (1000 + 2)(1000 - 2)"
      },
      {
        explanation: "Recognize the pattern (A + B)(A - B), which is the difference of squares identity where A = 1000 and B = 2.",
        workingOut: "\\((1000 + 2)(1000 - 2)\\) is in the form \\((A + B)(A - B)\\)"
      },
      {
        explanation: "Apply the difference of squares identity: (A + B)(A - B) = A² - B².",
        workingOut: "= (1000)^2 - (2)^2"
      },
      {
        explanation: "Calculate (1000)²: 1,000,000.",
        workingOut: "(1000)^2 = 1000000"
      },
      {
        explanation: "Calculate (2)²: 4.",
        workingOut: "(2)^2 = 4"
      },
      {
        explanation: "Subtract: 1,000,000 - 4 = 999,996.",
        workingOut: "= 1000000 - 4 = 999996"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "48fdb8e005e1815c03690adfa9295cd8",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((y^4 - \\frac{1}{y^4})^2\\)",
    options: [
      {
        text: "\\(y^8  + \\frac{1}{y^8}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^8 - 2 + \\frac{1}{y^8}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^8  + 2 + \\frac{1}{y^8}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^8 - 1 + \\frac{1}{y^8}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "y^8 - 2 + \\frac{1}{y^8}",
    solutionSteps: [
      {
        explanation: "Recognize this is a perfect square (A - B)² where A = y⁴ and B = 1/y⁴.",
        workingOut: "A = y^4, \\quad B = \\frac{1}{y^4}"
      },
      {
        explanation: "Apply the perfect square identity: (A - B)² = A² - 2AB + B².",
        workingOut: "\\left(y^4 - \\frac{1}{y^4}\\right)^2 = (y^4)^2 - 2(y^4)\\left(\\frac{1}{y^4}\\right) + \\left(\\frac{1}{y^4}\\right)^2"
      },
      {
        explanation: "Calculate (y⁴)²: y⁸.",
        workingOut: "(y^4)^2 = y^8"
      },
      {
        explanation: "Calculate 2(y⁴)(1/y⁴): 2·1 = 2 (the y⁴ cancels).",
        workingOut: "2(y^4)\\left(\\frac{1}{y^4}\\right) = 2"
      },
      {
        explanation: "Calculate (1/y⁴)²: 1/y⁸.",
        workingOut: "\\left(\\frac{1}{y^4}\\right)^2 = \\frac{1}{y^8}"
      },
      {
        explanation: "Combine all terms: y⁸ - 2 + 1/y⁸.",
        workingOut: "= y^8 - 2 + \\frac{1}{y^8}"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "4c7505d63219604b87464c4eaee8ada9",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2)(x + 3)(x + 4)\\)",
    options: [
      {
        text: "\\(x^3 - 9x^2 - 26x - 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 9x^2 + 26x + 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 9x^2 + 26x + 24\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 24\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "x^3 + 9x^2 + 26x + 24",
    solutionSteps: [
      {
        explanation: "First, multiply (x + 2)(x + 3) using FOIL: x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6 = x² + 5x + 6.",
        workingOut: "\\((x + 2)(x + 3) = x^2 + 5x + 6\\)"
      },
      {
        explanation: "Now multiply the result (x² + 5x + 6) by the third binomial (x + 4).",
        workingOut: "\\((x^2 + 5x + 6)(x + 4)\\)"
      },
      {
        explanation: "Distribute x: x·(x² + 5x + 6) = x³ + 5x² + 6x.",
        workingOut: "x(x^2 + 5x + 6) = x^3 + 5x^2 + 6x"
      },
      {
        explanation: "Distribute 4: 4·(x² + 5x + 6) = 4x² + 20x + 24.",
        workingOut: "4(x^2 + 5x + 6) = 4x^2 + 20x + 24"
      },
      {
        explanation: "Add both distributions: (x³ + 5x² + 6x) + (4x² + 20x + 24) = x³ + (5x² + 4x²) + (6x + 20x) + 24 = x³ + 9x² + 26x + 24.",
        workingOut: "= x^3 + 9x^2 + 26x + 24"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "4f246d1c5de74e69f87373f9665528f0",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((A - B)(A + B)\\)",
    options: [
      {
        text: "\\(A^2 + B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 + 2AB + B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 - B^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(A^2 - 2AB + B^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "A^2 - B^2",
    solutionSteps: [
      {
        explanation: "Recognize this is the difference of squares identity (A - B)(A + B) = A² - B² in its generic form.",
        workingOut: "\\((A - B)(A + B)\\)"
      },
      {
        explanation: "Apply the difference of squares identity: (A - B)(A + B) = A² - B².",
        workingOut: "= (A)^2 - (B)^2"
      },
      {
        explanation: "Simplify: A² - B².",
        workingOut: "= A^2 - B^2"
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5005ebb331bda31ef0e43450cee534ef",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + y + z)^2\\)",
    options: [
      {
        text: "\\(x^2 + y^2 + z^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + y^2 + z^2 + xy + yz + zx\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
    solutionSteps: [
      {
        explanation: "Identify the pattern: we are squaring a trinomial. Apply the trinomial square identity: (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA. Here A = x, B = y, C = z.",
        workingOut: "\\((x + y + z)^2 = (x)^2 + (y)^2 + (z)^2 + 2(x)(y) + 2(y)(z) + 2(z)(x)\\)",
        graphData: null
      },
      {
        explanation: "Compute the squares of each individual term.",
        workingOut: "\\(= x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        graphData: null
      },
      {
        explanation: "All terms are now simplified. This is the final answer.",
        workingOut: "\\(= x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "501681aad198d8161bf3b58097952475",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(2x(y - z)\\)",
    options: [
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2xy-2xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2xy+2xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4xy-4xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(2xy - 2xz\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, 2x, and the two terms inside, y and -z.",
        workingOut: "\\(2x(y - z)\\)",
        graphData: null
      },
      {
        explanation: "Multiply 2x by each term inside the bracket separately.",
        workingOut: "\\(2x \\times y + 2x \\times (-z) = 2xy - 2xz\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final expanded expression.",
        workingOut: "\\(2xy - 2xz\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "518e780768399722b458fde25f55ad15",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x + 4)\\)",
    options: [
      {
        text: "\\(x^2 + 5x + 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x + 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 5x + 4\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 + 4x + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(= x^2 + 5x + 4\\)",
    solutionSteps: [
      {
        explanation: "Use FOIL to multiply the two binomials: First, Outer, Inner, Last.",
        workingOut: "\\((x + 1)(x + 4) = x \\cdot x + x \\cdot 4 + 1 \\cdot x + 1 \\cdot 4\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each of the four products.",
        workingOut: "\\(= x^2 + 4x + x + 4\\)",
        graphData: null
      },
      {
        explanation: "Combine the two like x-terms (4x and x).",
        workingOut: "\\(= x^2 + 5x + 4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5267033be0aafdf8735eb2083e411abb",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((2y + 1)(y + 3)\\)",
    options: [
      {
        text: "\\(2y^2 + 7y + 3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3y^2 + 7y + 3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2y^2 + 5y + 3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2y^2 + 6y + 3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\((2y + 1)(y + 3) = 2y^2 + 7y + 3\\)",
    solutionSteps: [
      {
        explanation: "Expand using FOIL: Firsts, Outers, Inners, Lasts. Multiply each term in the first binomial by each term in the second binomial.",
        workingOut: "\\((2y + 1)(y + 3) = (2y)(y) + (2y)(3) + (1)(y) + (1)(3)\\)",
        graphData: null
      },
      {
        explanation: "Compute each product: 2y · y = 2y², 2y · 3 = 6y, 1 · y = y, 1 · 3 = 3.",
        workingOut: "\\(= 2y^2 + 6y + y + 3\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms (the y terms).",
        workingOut: "\\(= 2y^2 + 7y + 3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5350c33f080cc436b5c02e8ce2e49fbe",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 2)^3\\)",
    options: [
      {
        text: "\\(x^3 - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 2x^2 + 4x - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 6x^2 + 12x - 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 4x^2 + 8x - 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\((x - 2)^3 = x^3 - 6x^2 + 12x - 8\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we are cubing a binomial. Apply the cubic expansion identity (A - B)³ = A³ - 3A²B + 3AB² - B³. Here A = x and B = 2.",
        workingOut: "\\((x - 2)^3 = (x)^3 - 3(x)^2(2) + 3(x)(2)^2 - (2)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute each power and product: x³ = x³, 3x² · 2 = 6x², 3x · 4 = 12x, 2³ = 8.",
        workingOut: "\\(= x^3 - 6x^2 + 12x - 8\\)",
        graphData: null
      },
      {
        explanation: "All terms are simplified. This is the final cubic expansion.",
        workingOut: "\\(= x^3 - 6x^2 + 12x - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "53861ceb1598290b006c361e3630718f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((z^2 + 3z + 5)(z^2 - 3z + 5)\\)",
    options: [
      {
        text: "\\(z^4 + z^2 + 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(z^4 - z^2 - 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + z^2 + 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(z^4 + 10z^2 + 25\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((z^2 + 3z + 5)(z^2 - 3z + 5) = z^4 + z^2 + 25\\)",
    solutionSteps: [
      {
        explanation: "Notice the pattern: this is of the form (A + B)(A - B) where A = z² + 5 and B = 3z. However, the more direct observation is (z² + 3z + 5)(z² - 3z + 5) = ((z² + 5) + 3z)((z² + 5) - 3z). By the difference of squares (u + v)(u - v) = u² - v², we have u = z² + 5, v = 3z.",
        workingOut: "\\(= (z^2 + 5)^2 - (3z)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (z² + 5)² using the binomial square formula (a + b)² = a² + 2ab + b², with a = z² and b = 5.",
        workingOut: "\\((z^2 + 5)^2 = (z^2)^2 + 2(z^2)(5) + (5)^2 = z^4 + 10z^2 + 25\\)",
        graphData: null
      },
      {
        explanation: "Expand (3z)² = 9z².",
        workingOut: "\\((3z)^2 = 9z^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract to complete the calculation.",
        workingOut: "\\(= z^4 + 10z^2 + 25 - 9z^2 = z^4 + z^2 + 25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "541254c774322eaa3863e74f0cd9a31b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^3 - \\frac{2}{x^3})^2\\)",
    options: [
      {
        text: "\\(x^6 - 4 + \\frac{4}{x^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6  + \\frac{4}{x^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6 - 2 + \\frac{4}{x^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^6  + 4 + \\frac{4}{x^6}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\((x^3 - \\frac{2}{x^3})^2 = x^6 - 4 + \\frac{4}{x^6}\\)",
    solutionSteps: [
      {
        explanation: "Identify the pattern: we are squaring a binomial with fractional exponents. Apply (A - B)² = A² - 2AB + B², where A = x³ and B = 2/x³.",
        workingOut: "\\((x^3 - \\frac{2}{x^3})^2 = (x^3)^2 - 2(x^3)(\\frac{2}{x^3}) + (\\frac{2}{x^3})^2\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: (x³)² = x⁶, 2 · x³ · 2/x³ = 4, (2/x³)² = 4/x⁶.",
        workingOut: "\\(= x^6 - 4 + \\frac{4}{x^6}\\)",
        graphData: null
      },
      {
        explanation: "Rewrite in standard form.",
        workingOut: "\\(= x^6 - 4 + \\frac{4}{x^6}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "54919daf3ba6a6159796300d5d511798",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Evaluate using difference of squares: \\(403 \\times 397\\)",
    options: [
      {
        text: "\\(159991\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(160000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(160009\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(159919\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    solution: "\\(403 \\times 397 = 159{,}991\\)",
    solutionSteps: [
      {
        explanation: "Recognize that 403 = 400 + 3 and 397 = 400 - 3. This allows us to use the difference of squares identity: (a + b)(a - b) = a² - b², where a = 400 and b = 3.",
        workingOut: "\\(403 \\times 397 = (400 + 3)(400 - 3) = (400)^2 - (3)^2\\)",
        graphData: null
      },
      {
        explanation: "Compute the squares: 400² = 160,000 and 3² = 9.",
        workingOut: "\\(= 160{,}000 - 9\\)",
        graphData: null
      },
      {
        explanation: "Subtract to find the final result.",
        workingOut: "\\(= 159{,}991\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "54ad7c3b1fcb6e37da867bce8cb9973d",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + \\frac{1}{x^2})^2\\)",
    options: [
      {
        text: "\\(x^4 + 2 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  - 2 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 1 + \\frac{1}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  + \\frac{1}{x^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\((x^2 + \\frac{1}{x^2})^2 = x^4 + 2 + \\frac{1}{x^4}\\)",
    solutionSteps: [
      {
        explanation: "Identify the pattern: squaring a binomial with fractional exponents. Apply (A + B)² = A² + 2AB + B², where A = x² and B = 1/x².",
        workingOut: "\\((x^2 + \\frac{1}{x^2})^2 = (x^2)^2 + 2(x^2)(\\frac{1}{x^2}) + (\\frac{1}{x^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: (x²)² = x⁴, 2 · x² · 1/x² = 2, (1/x²)² = 1/x⁴.",
        workingOut: "\\(= x^4 + 2 + \\frac{1}{x^4}\\)",
        graphData: null
      },
      {
        explanation: "All terms are now simplified. This is the final answer.",
        workingOut: "\\(= x^4 + 2 + \\frac{1}{x^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "54ca2f47ebae4a1b2b732899bd8953dc",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((y + \\frac{3}{y})(y - \\frac{3}{y})\\)",
    options: [
      {
        text: "\\(y^2 + \\frac{9}{y^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2 - \\frac{9}{y^2}\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(y^2 - 3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2 - 9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(= y^2 - \\frac{9}{y^2}\\)",
    solutionSteps: [
      {
        explanation: "Recognise this is a difference of squares: \\((A+B)(A-B) = A^2 - B^2\\), with \\(A = y\\) and \\(B = \\frac{3}{y}\\).",
        workingOut: "\\(\\left(y + \\frac{3}{y}\\right)\\left(y - \\frac{3}{y}\\right) = y^2 - \\left(\\frac{3}{y}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Square each term: \\(y^2\\) stays as is, and \\(\\left(\\frac{3}{y}\\right)^2 = \\frac{9}{y^2}\\).",
        workingOut: "\\(= y^2 - \\frac{9}{y^2}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "54cf7eb6ef6a2a124ae416fa28e42a9f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2a + 3)^3\\)",
    options: [
      {
        text: "\\(8a^3 + 27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8a^3 + 36a^2 + 54a + 27\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(8a^3 + 72a^2 + 108a + 27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8a^3 + 36a^2 - 54a + 27\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\((2a + 3)^3 = 8a^3 + 36a^2 + 54a + 27\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: cubing a binomial. Apply the cubic expansion identity (A + B)³ = A³ + 3A²B + 3AB² + B³. Here A = 2a and B = 3.",
        workingOut: "\\((2a + 3)^3 = (2a)^3 + 3(2a)^2(3) + 3(2a)(3)^2 + (3)^3\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: (2a)³ = 8a³, 3 · (2a)² · 3 = 3 · 4a² · 3 = 36a², 3 · (2a) · 3² = 3 · (2a) · 9 = 54a, 3³ = 27.",
        workingOut: "\\(= 8a^3 + 36a^2 + 54a + 27\\)",
        graphData: null
      },
      {
        explanation: "All terms are simplified. This is the final cubic expansion.",
        workingOut: "\\(= 8a^3 + 36a^2 + 54a + 27\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5a6ecd3bfb422babecea7536604ff6c0",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-3y(2y + 1)\\)",
    options: [
      {
        text: "\\(-6y^2-3y\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(+6y^2+3y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-8y^4-5y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(-6y^2 - 3y\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, -3y, and the two terms inside, 2y and 1.",
        workingOut: "\\(-3y(2y + 1)\\)",
        graphData: null
      },
      {
        explanation: "Multiply -3y by each term inside the bracket.",
        workingOut: "\\((-3y) \\times 2y + (-3y) \\times 1 = -6y^2 - 3y\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final expanded expression.",
        workingOut: "\\(-6y^2 - 3y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5b3c83aeb94126b2bce2a719ac492bca",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using algebraic expansion: \\(1005^2\\)",
    options: [
      {
        text: "\\(1010025\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(1010000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1000025\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1025025\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\(1005^2 = 1{,}010{,}025\\)",
    solutionSteps: [
      {
        explanation: "Recognize that 1005 = 1000 + 5. Apply the binomial square formula (a + b)² = a² + 2ab + b², where a = 1000 and b = 5.",
        workingOut: "\\(1005^2 = (1000 + 5)^2 = (1000)^2 + 2(1000)(5) + (5)^2\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: 1000² = 1,000,000; 2 · 1000 · 5 = 10,000; 5² = 25.",
        workingOut: "\\(= 1{,}000{,}000 + 10{,}000 + 25\\)",
        graphData: null
      },
      {
        explanation: "Add the terms to find the final result.",
        workingOut: "\\(= 1{,}010{,}025\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5c3828e6cf06d4caa13685f78f9d2d42",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-2(5 - z)\\)",
    options: [
      {
        text: "\\(-10+2z\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-10-2z\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10-2z\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-10+z\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(-10 + 2z\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, -2, and the two terms inside, 5 and -z.",
        workingOut: "\\(-2(5 - z)\\)",
        graphData: null
      },
      {
        explanation: "Multiply -2 by each term inside the bracket, being careful with the signs.",
        workingOut: "\\((-2) \\times 5 + (-2) \\times (-z) = -10 + 2z\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final answer.",
        workingOut: "\\(-10 + 2z\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5cb6bfb8d0429d397582cd10d3b60954",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((m + n - 3)^2\\)",
    options: [
      {
        text: "\\(m^2 - n^2 + 9 - 2mn + 6n - 6m\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(m^2 + n^2 + 9 + 2mn - 6n + 6m\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(m^2 + n^2 + 9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((m + n - 3)^2 = m^2 + n^2 + 2mn - 6m - 6n + 9\\)",
    solutionSteps: [
      {
        explanation: "Identify the pattern: squaring a trinomial with one negative term. Rewrite as (m + n + (-3))² and apply (A + B + C)² = A² + B² + C² + 2AB + 2BC + 2CA, where A = m, B = n, C = -3.",
        workingOut: "\\((m + n - 3)^2 = (m)^2 + (n)^2 + (-3)^2 + 2(m)(n) + 2(n)(-3) + 2(-3)(m)\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: m² = m², n² = n², (-3)² = 9, 2mn = 2mn, 2n · (-3) = -6n, 2 · (-3) · m = -6m.",
        workingOut: "\\(= m^2 + n^2 + 9 + 2mn - 6n - 6m\\)",
        graphData: null
      },
      {
        explanation: "Rearrange in standard polynomial form (descending degree).",
        workingOut: "\\(= m^2 + n^2 + 2mn - 6m - 6n + 9\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "5cf72bf6b564775a161299ef3379c290",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((h + 12)(h - 12)\\)",
    options: [
      {
        text: "\\(h^2+144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(h^2-24h-144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(h^2-24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(h^2-144\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(= h^2 - 144\\)",
    solutionSteps: [
      {
        explanation: "Recognise this is a difference of squares: \\((A+B)(A-B) = A^2 - B^2\\), with \\(A = h\\) and \\(B = 12\\).",
        workingOut: "\\((h + 12)(h - 12) = h^2 - 12^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate \\(12^2 = 144\\) to give the final simplified expression.",
        workingOut: "\\(= h^2 - 144\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "600c5ccef8db70bd0d4ad24eb5757995",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using algebraic expansion: \\(200.5^2\\)",
    options: [
      {
        text: "\\(43416.27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(46230.29\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(34170.21\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(40200.25\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\(200.5^2 = 40{,}200.25\\)",
    solutionSteps: [
      {
        explanation: "Recognize that 200.5 = 200 + 0.5. Apply the binomial square formula (a + b)² = a² + 2ab + b², where a = 200 and b = 0.5.",
        workingOut: "\\(200.5^2 = (200 + 0.5)^2 = (200)^2 + 2(200)(0.5) + (0.5)^2\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: 200² = 40,000; 2 · 200 · 0.5 = 200; 0.5² = 0.25.",
        workingOut: "\\(= 40{,}000 + 200 + 0.25\\)",
        graphData: null
      },
      {
        explanation: "Add the terms to find the final result.",
        workingOut: "\\(= 40{,}200.25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6033155045ff7e4d353367f9655c53ec",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\(-3x^2(2x + 4) - 4x^2(x - 2)\\)",
    options: [
      {
        text: "\\(-10x^3 + 4x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-10x^3 - 4x^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-10x^3 - 20x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-2x^3 - 4x^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Multiply coefficients and add powers of x.",
    solution: "\\(-3x^2(2x + 4) - 4x^2(x - 2) = -10x^3 - 4x^2\\)",
    solutionSteps: [
      {
        explanation: "Distribute -3x² to each term in (2x + 4): -3x² · 2x = -6x³; -3x² · 4 = -12x².",
        workingOut: "\\(-3x^2(2x + 4) = -6x^3 - 12x^2\\)",
        graphData: null
      },
      {
        explanation: "Distribute -4x² to each term in (x - 2): -4x² · x = -4x³; -4x² · (-2) = 8x².",
        workingOut: "\\(-4x^2(x - 2) = -4x^3 + 8x^2\\)",
        graphData: null
      },
      {
        explanation: "Add the two expressions and combine like terms.",
        workingOut: "\\((-6x^3 - 12x^2) + (-4x^3 + 8x^2) = -6x^3 - 4x^3 - 12x^2 + 8x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine: -6x³ - 4x³ = -10x³; -12x² + 8x² = -4x².",
        workingOut: "\\(= -10x^3 - 4x^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6074afedb162ad9115f5f7d4f7092020",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(2a(a - 3)\\)",
    options: [
      {
        text: "\\(2a^2-6a\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2a^2-3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2a^2-6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2a-6a\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(2a^2 - 6a\\)",
    solutionSteps: [
      {
        explanation: "Identify the term outside the bracket, 2a, and the two terms inside, a and -3.",
        workingOut: "\\(2a(a - 3)\\)",
        graphData: null
      },
      {
        explanation: "Multiply 2a by each term inside the bracket.",
        workingOut: "\\(2a \\times a + 2a \\times (-3) = 2a^2 - 6a\\)",
        graphData: null
      },
      {
        explanation: "No like terms to combine, so this is the final expanded expression.",
        workingOut: "\\(2a^2 - 6a\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "60a65a49a17544b674fa202511953442",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand and simplify: \\((3x - 2y) - (2x - 3y)\\)",
    options: [
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x+y\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x-y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative C",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\((3x - 2y) - (2x - 3y) = x + y\\)",
    solutionSteps: [
      {
        explanation: "Distribute the negative sign to each term in the second binomial: -(2x - 3y) = -2x + 3y.",
        workingOut: "\\((3x - 2y) - (2x - 3y) = 3x - 2y - 2x + 3y\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: group the x terms and the y terms.",
        workingOut: "\\(= (3x - 2x) + (-2y + 3y)\\)",
        graphData: null
      },
      {
        explanation: "Simplify each group.",
        workingOut: "\\(= x + y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "614626aeaef400ec904466975bffb15a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand and simplify: \\(4(x - 2) - 3(x + 1)\\)",
    options: [
      {
        text: "\\(x - 11\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x + 11\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x - 13\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(4(x - 2) - 3(x + 1) = x - 11\\)",
    solutionSteps: [
      {
        explanation: "Distribute 4 to each term in (x - 2): 4x - 8.",
        workingOut: "\\(4(x - 2) = 4x - 8\\)",
        graphData: null
      },
      {
        explanation: "Distribute -3 to each term in (x + 1): -3x - 3.",
        workingOut: "\\(-3(x + 1) = -3x - 3\\)",
        graphData: null
      },
      {
        explanation: "Add the two expressions and combine like terms.",
        workingOut: "\\((4x - 8) + (-3x - 3) = 4x - 3x - 8 - 3\\)",
        graphData: null
      },
      {
        explanation: "Combine: 4x - 3x = x; -8 - 3 = -11.",
        workingOut: "\\(= x - 11\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "61a47cae2fb9a3114e71de41ad347f0c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 6)(x - 6)\\)",
    options: [
      {
        text: "\\(x^2 + 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 36\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 - 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 12x + 36\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(= x^2 - 36\\)",
    solutionSteps: [
      {
        explanation: "Recognise this is a difference of squares: \\((A+B)(A-B) = A^2 - B^2\\), with \\(A = x\\) and \\(B = 6\\).",
        workingOut: "\\((x + 6)(x - 6) = x^2 - 6^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate \\(6^2 = 36\\) to give the final simplified expression.",
        workingOut: "\\(= x^2 - 36\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "62385a403d22366e756dfd2afabc44b0",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((a - 3)(a - 4)\\)",
    options: [
      {
        text: "\\(a^2 - 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 - 7a + 12\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^2 + 7a + 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 - 7a - 12\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(= a^2 - 7a + 12\\)",
    solutionSteps: [
      {
        explanation: "Use FOIL to multiply the two binomials: First, Outer, Inner, Last.",
        workingOut: "\\((a - 3)(a - 4) = a \\cdot a + a \\cdot (-4) + (-3) \\cdot a + (-3) \\cdot (-4)\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each of the four products.",
        workingOut: "\\(= a^2 - 4a - 3a + 12\\)",
        graphData: null
      },
      {
        explanation: "Combine the two like a-terms (-4a and -3a).",
        workingOut: "\\(= a^2 - 7a + 12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "62e8f87a81851f0ee11e092be50699ac",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((t + 5)(t - 2)\\)",
    options: [
      {
        text: "\\(t^2 - 3t - 10\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + 3t - 10\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(t^2 + 7t - 10\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(t^2 + 3t + 10\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\((t + 5)(t - 2) = t^2 + 3t - 10\\)",
    solutionSteps: [
      {
        explanation: "Expand using FOIL: multiply each term in (t + 5) by each term in (t - 2).",
        workingOut: "\\((t + 5)(t - 2) = (t)(t) + (t)(-2) + (5)(t) + (5)(-2)\\)",
        graphData: null
      },
      {
        explanation: "Compute each product: t · t = t²; t · (-2) = -2t; 5 · t = 5t; 5 · (-2) = -10.",
        workingOut: "\\(= t^2 - 2t + 5t - 10\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: -2t + 5t = 3t.",
        workingOut: "\\(= t^2 + 3t - 10\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "636766061dbb89d1374c3cdb775fea5c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((2p + 9)^2\\)",
    options: [
      {
        text: "\\(4p^2 + 81\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4p^2 + 36p + 18\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4p^2 + 36p + 81\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4p^2 + 18p + 81\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Square the first, twice the product, square the last.",
    solution: "\\(= 4p^2 + 36p + 81\\)",
    solutionSteps: [
      {
        explanation: "Apply the binomial square identity \\((A+B)^2 = A^2 + 2AB + B^2\\), with \\(A = 2p\\) and \\(B = 9\\).",
        workingOut: "\\((2p + 9)^2 = (2p)^2 + 2(2p)(9) + 9^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each term: square the first term, compute the middle product, square the last term.",
        workingOut: "\\(= 4p^2 + 36p + 81\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6625701025b0f59a1353d11b8e97d2fb",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 3)(x^2 - 3x + 9)\\)",
    options: [
      {
        text: "\\(x^3 - 27\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 + 27\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 9\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 + 3x3 + 27\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\((x + 3)(x^2 - 3x + 9) = x^3 + 27\\)",
    solutionSteps: [
      {
        explanation: "Recognize the sum of cubes pattern: (a + b)(a² - ab + b²) = a³ + b³. Here a = x and b = 3.",
        workingOut: "\\((x + 3)(x^2 - 3x + 9) = x(x^2 - 3x + 9) + 3(x^2 - 3x + 9)\\)",
        graphData: null
      },
      {
        explanation: "Distribute x: x · x² = x³, x · (-3x) = -3x², x · 9 = 9x.",
        workingOut: "\\(x(x^2 - 3x + 9) = x^3 - 3x^2 + 9x\\)",
        graphData: null
      },
      {
        explanation: "Distribute 3: 3 · x² = 3x², 3 · (-3x) = -9x, 3 · 9 = 27.",
        workingOut: "\\(3(x^2 - 3x + 9) = 3x^2 - 9x + 27\\)",
        graphData: null
      },
      {
        explanation: "Add the results and combine like terms.",
        workingOut: "\\((x^3 - 3x^2 + 9x) + (3x^2 - 9x + 27) = x^3 + (-3x^2 + 3x^2) + (9x - 9x) + 27\\)",
        graphData: null
      },
      {
        explanation: "The middle terms cancel to give the final result.",
        workingOut: "\\(= x^3 + 27\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6641951d9a6ae846e2f8b3a8b78f7745",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 3)(x - 3)(x + 2)\\)",
    options: [
      {
        text: "\\(x^2 + 2x^2 - 9x - 18\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 2x^2 + 9x + 18\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 2x^2 - 9x - 18\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 18\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 3)(x - 3)(x + 2) = x^3 + 2x^2 - 9x - 18\\)",
    solutionSteps: [
      {
        explanation: "Begin by multiplying (x + 3)(x - 3) using the difference of squares identity (a + b)(a - b) = a² - b².",
        workingOut: "\\((x + 3)(x - 3) = (x)^2 - (3)^2 = x^2 - 9\\)",
        graphData: null
      },
      {
        explanation: "Now multiply this result by (x + 2) using distribution.",
        workingOut: "\\((x^2 - 9)(x + 2) = x(x^2 - 9) + 2(x^2 - 9)\\)",
        graphData: null
      },
      {
        explanation: "Distribute x: x · x² = x³, x · (-9) = -9x.",
        workingOut: "\\(x(x^2 - 9) = x^3 - 9x\\)",
        graphData: null
      },
      {
        explanation: "Distribute 2: 2 · x² = 2x², 2 · (-9) = -18.",
        workingOut: "\\(2(x^2 - 9) = 2x^2 - 18\\)",
        graphData: null
      },
      {
        explanation: "Add the results to get the final answer.",
        workingOut: "\\((x^3 - 9x) + (2x^2 - 18) = x^3 + 2x^2 - 9x - 18\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "66f6fe1adffcf957a7f5b2a644581362",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((a - b - c)^2\\)",
    options: [
      {
        text: "\\(a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^2 + b^2 + c^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + b^2 + c^2 - 2ab - 2bc + 2ca\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 - b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\(a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square identity \\((A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA\\), with \\(A = a\\), \\(B = -b\\), \\(C = -c\\).",
        workingOut: "\\((a - b - c)^2 = a^2 + (-b)^2 + (-c)^2 + 2(a)(-b) + 2(-b)(-c) + 2(-c)(a)\\)",
        graphData: null
      },
      {
        explanation: "Square each term (note the negative terms squared become positive).",
        workingOut: "\\(= a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        graphData: null
      },
      {
        explanation: "This is already fully simplified — no like terms remain to combine.",
        workingOut: "\\(a^2 + b^2 + c^2 - 2ab + 2bc - 2ca\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "67d9575398da5867d11ea421110d61dd",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + 5x + 25)(x^2 - 5x + 25)\\)",
    options: [
      {
        text: "\\(x^2 + 25x^2 + 625\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 25x^2 - 625\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 25x^2 + 625\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 50x^2 + 625\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = x^4 + 25x^2 + 625\\)",
    solutionSteps: [
      {
        explanation: "Rewrite as ((x² + 25) + 5x)((x² + 25) - 5x) and recognize the difference of squares pattern: (u + v)(u - v) = u² - v², where u = x² + 25 and v = 5x.",
        workingOut: "\\((x^2 + 5x + 25)(x^2 - 5x + 25) = (x^2 + 25)^2 - (5x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x² + 25)² using (a + b)² = a² + 2ab + b², where a = x² and b = 25.",
        workingOut: "\\((x^2 + 25)^2 = (x^2)^2 + 2(x^2)(25) + (25)^2 = x^4 + 50x^2 + 625\\)",
        graphData: null
      },
      {
        explanation: "Compute (5x)² = 25x².",
        workingOut: "\\((5x)^2 = 25x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract to complete the calculation.",
        workingOut: "\\(= x^4 + 50x^2 + 625 - 25x^2 = x^4 + 25x^2 + 625\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6a4e1a401223d4deceb73300ac471064",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 30,
    question: "Evaluate using algebraic expansion: \\(10.02^2\\)",
    options: [
      {
        text: "\\(100.04\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100.4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100.4004\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(104.0004\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\(10.02^2 = 100.4004\\)",
    solutionSteps: [
      {
        explanation: "Recognize that 10.02 = 10 + 0.02. Apply the binomial square formula (a + b)² = a² + 2ab + b², where a = 10 and b = 0.02.",
        workingOut: "\\(10.02^2 = (10 + 0.02)^2 = (10)^2 + 2(10)(0.02) + (0.02)^2\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: 10² = 100; 2 · 10 · 0.02 = 0.4; 0.02² = 0.0004.",
        workingOut: "\\(= 100 + 0.4 + 0.0004\\)",
        graphData: null
      },
      {
        explanation: "Add the terms to find the final result.",
        workingOut: "\\(= 100.4004\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6ac9484975fc1e82df2dba20ab0947b0",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - \\frac{2}{x})^2\\)",
    options: [
      {
        text: "\\(x^2 - 4x + \\frac{4}{x^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + \\frac{4}{x^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 2 + \\frac{4}{x^2}\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 4 + \\frac{4}{x^2}\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(= x^2 - 4 + \\frac{4}{x^2}\\)",
    solutionSteps: [
      {
        explanation: "Apply the binomial square identity \\((A-B)^2 = A^2 - 2AB + B^2\\), with \\(A = x\\) and \\(B = \\frac{2}{x}\\).",
        workingOut: "\\(\\left(x - \\frac{2}{x}\\right)^2 = x^2 - 2(x)\\left(\\frac{2}{x}\\right) + \\left(\\frac{2}{x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the middle term (the \\(x\\) cancels) and square the last term.",
        workingOut: "\\(= x^2 - 4 + \\frac{4}{x^2}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6d0af750c053c61946cda6edac3db12a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((4j + 3)^2\\)",
    options: [
      {
        text: "\\(16j^2 + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8j^2 + 24j + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16j^2 + 12j + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16j^2 + 24j + 9\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(= 16j^2 + 24j + 9\\)",
    solutionSteps: [
      {
        explanation: "Apply the binomial square identity \\((A+B)^2 = A^2 + 2AB + B^2\\), with \\(A = 4j\\) and \\(B = 3\\).",
        workingOut: "\\((4j + 3)^2 = (4j)^2 + 2(4j)(3) + 3^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each term: square the first term, compute the middle product, square the last term.",
        workingOut: "\\(= 16j^2 + 24j + 9\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6e3543ff31313ce1735d42261ef28a3b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((5c + 4)(5c - 4)\\)",
    options: [
      {
        text: "\\(25c^2 + 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10c^2 - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25c^2 - 40c - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25c^2 - 16\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Difference of squares.",
    solution: "\\(= 25c^2 - 16\\)",
    solutionSteps: [
      {
        explanation: "Recognise this is a difference of squares: \\((A+B)(A-B) = A^2 - B^2\\), with \\(A = 5c\\) and \\(B = 4\\).",
        workingOut: "\\((5c + 4)(5c - 4) = (5c)^2 - 4^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate \\((5c)^2 = 25c^2\\) and \\(4^2 = 16\\) to give the final simplified expression.",
        workingOut: "\\(= 25c^2 - 16\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "6f11828461d59918658b1ce9684cdfee",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((y - 1)(y^2 + 1y + 1)\\)",
    options: [
      {
        text: "\\(y^3 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^3 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^2 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^3 - 3y1 - 1\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\((y - 1)(y^2 + y + 1) = y^3 - 1\\)",
    solutionSteps: [
      {
        explanation: "Recognize the difference of cubes pattern: (a - b)(a² + ab + b²) = a³ - b³. Here a = y and b = 1.",
        workingOut: "\\((y - 1)(y^2 + y + 1) = y(y^2 + y + 1) - 1(y^2 + y + 1)\\)",
        graphData: null
      },
      {
        explanation: "Distribute y: y · y² = y³, y · y = y², y · 1 = y.",
        workingOut: "\\(y(y^2 + y + 1) = y^3 + y^2 + y\\)",
        graphData: null
      },
      {
        explanation: "Distribute -1: -1 · y² = -y², -1 · y = -y, -1 · 1 = -1.",
        workingOut: "\\(-1(y^2 + y + 1) = -y^2 - y - 1\\)",
        graphData: null
      },
      {
        explanation: "Add the results and combine like terms.",
        workingOut: "\\((y^3 + y^2 + y) + (-y^2 - y - 1) = y^3 + (y^2 - y^2) + (y - y) - 1\\)",
        graphData: null
      },
      {
        explanation: "The middle terms cancel to give the final result.",
        workingOut: "\\(= y^3 - 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "75693548b706af8a9faca9cf7cd3eb8e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + 4x + 2)(x^2 - 4x + 2)\\)",
    options: [
      {
        text: "\\(x^4 + 12x^2 - 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 12x^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 4x^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 - 12x^2 + 4\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = x^4 - 12x^2 + 4\\)",
    solutionSteps: [
      {
        explanation: "Rewrite as ((x² + 2) + 4x)((x² + 2) - 4x) and recognize the difference of squares: (u + v)(u - v) = u² - v², where u = x² + 2 and v = 4x.",
        workingOut: "\\((x^2 + 4x + 2)(x^2 - 4x + 2) = (x^2 + 2)^2 - (4x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x² + 2)² = x⁴ + 4x² + 4 using (a + b)² = a² + 2ab + b².",
        workingOut: "\\((x^2 + 2)^2 = (x^2)^2 + 2(x^2)(2) + (2)^2 = x^4 + 4x^2 + 4\\)",
        graphData: null
      },
      {
        explanation: "Compute (4x)² = 16x².",
        workingOut: "\\((4x)^2 = 16x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract to complete the calculation.",
        workingOut: "\\(= x^4 + 4x^2 + 4 - 16x^2 = x^4 - 12x^2 + 4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "76c4d5a1a60d12710f2b6b514cae5187",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((2n + 5)(n - 4)\\)",
    options: [
      {
        text: "\\(2n^2 - 3n + 20\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2n^2 + 13n - 20\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2n^2 + 3n - 20\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2n^2 - 3n - 20\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use FOIL method.",
    solution: "\\((2n + 5)(n - 4) = 2n^2 - 3n - 20\\)",
    solutionSteps: [
      {
        explanation: "Expand using FOIL: multiply each term in (2n + 5) by each term in (n - 4).",
        workingOut: "\\((2n + 5)(n - 4) = (2n)(n) + (2n)(-4) + (5)(n) + (5)(-4)\\)",
        graphData: null
      },
      {
        explanation: "Compute each product: 2n · n = 2n²; 2n · (-4) = -8n; 5 · n = 5n; 5 · (-4) = -20.",
        workingOut: "\\(= 2n^2 - 8n + 5n - 20\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: -8n + 5n = -3n.",
        workingOut: "\\(= 2n^2 - 3n - 20\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "77eb4d1853ff4875c55b696dcfb71b78",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x + 2)(x + 3)\\)",
    options: [
      {
        text: "\\(x^3 - 6x^2 - 11x - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 6x^2 + 11x + 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 6x^2 + 11x + 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 1)(x + 2)(x + 3) = x^3 + 6x^2 + 11x + 6\\)",
    solutionSteps: [
      {
        explanation: "Begin by multiplying the first two binomials (x + 1)(x + 2) using the pattern (x + a)(x + b) = x² + (a + b)x + ab, where a = 1 and b = 2.",
        workingOut: "\\((x + 1)(x + 2) = x^2 + (1 + 2)x + (1)(2) = x^2 + 3x + 2\\)",
        graphData: null
      },
      {
        explanation: "Now multiply this result by the third binomial (x + 3) using distribution.",
        workingOut: "\\((x^2 + 3x + 2)(x + 3) = x(x^2 + 3x + 2) + 3(x^2 + 3x + 2)\\)",
        graphData: null
      },
      {
        explanation: "Distribute x: x · x² = x³, x · 3x = 3x², x · 2 = 2x.",
        workingOut: "\\(x(x^2 + 3x + 2) = x^3 + 3x^2 + 2x\\)",
        graphData: null
      },
      {
        explanation: "Distribute 3: 3 · x² = 3x², 3 · 3x = 9x, 3 · 2 = 6.",
        workingOut: "\\(3(x^2 + 3x + 2) = 3x^2 + 9x + 6\\)",
        graphData: null
      },
      {
        explanation: "Add the results and combine like terms.",
        workingOut: "\\((x^3 + 3x^2 + 2x) + (3x^2 + 9x + 6) = x^3 + 6x^2 + 11x + 6\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "78014166638f347f4e03c729be618af6",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((3a + 1)(a + 2)\\)",
    options: [
      {
        text: "\\(3a^2 + 7a + 2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3a^2 + 6a + 2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4a^2 + 7a + 2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3a^2 + 7a + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(3a^2 + 7a + 2\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a binomial product that expands using FOIL (First, Outer, Inner, Last).",
        workingOut: "\\((3a + 1)(a + 2)\\)",
        graphData: null
      },
      {
        explanation: "Multiply First terms: \\(3a \\times a = 3a^2\\)",
        workingOut: "\\(\\text{First: } 3a^2\\)",
        graphData: null
      },
      {
        explanation: "Multiply Outer terms: \\(3a \\times 2 = 6a\\)",
        workingOut: "\\(\\text{Outer: } 6a\\)",
        graphData: null
      },
      {
        explanation: "Multiply Inner terms: \\(1 \\times a = a\\)",
        workingOut: "\\(\\text{Inner: } a\\)",
        graphData: null
      },
      {
        explanation: "Multiply Last terms: \\(1 \\times 2 = 2\\)",
        workingOut: "\\(\\text{Last: } 2\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like terms: \\(3a^2 + 6a + a + 2 = 3a^2 + 7a + 2\\)",
        workingOut: "\\(3a^2 + 7a + 2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "78aa422221c73da1127a736edc4519e2",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((2x - 3)^2\\)",
    options: [
      {
        text: "\\(2x^2 - 12x + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^2 - 12x + 9\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4x^2 + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^2 - 6x + 9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "1. \\(4x^2 - 12x + 9\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a perfect square binomial with the form \\((A - B)^2\\) where \\(A = 2x\\) and \\(B = 3\\).",
        workingOut: "\\((2x - 3)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\((2x - 3)^2 = (2x)^2 - 2(2x)(3) + (3)^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: \\((2x)^2 = 4x^2\\)",
        workingOut: "\\(4x^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the double product (middle term): \\(-2(2x)(3) = -12x\\)",
        workingOut: "\\(-12x\\)",
        graphData: null
      },
      {
        explanation: "Square the second term: \\((3)^2 = 9\\)",
        workingOut: "\\(9\\)",
        graphData: null
      },
      {
        explanation: "Combine to get the final expanded form.",
        workingOut: "\\(4x^2 - 12x + 9\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "7a3dd28d7df2a9cf6a4112bff143fc4c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a^2 + ab + b^2)(a^2 - ab + b^2)\\)",
    options: [
      {
        text: "\\(x^2 + a^2b^2 + b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 + a^2b^2 + b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 + 2a^2b^2 + b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 - a^2b^2 - b^4\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((a^2 + ab + b^2)(a^2 - ab + b^2) = a^4 + a^2b^2 + b^4\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a conjugate product pattern: \\((A^2 + AB + B^2)(A^2 - AB + B^2)\\) where \\(A = a\\) and \\(B = b\\).",
        workingOut: "\\((a^2 + ab + b^2)(a^2 - ab + b^2)\\)",
        graphData: null
      },
      {
        explanation: "Regroup by factoring out the common middle parts: \\([(a^2 + b^2) + ab][(a^2 + b^2) - ab]\\)",
        workingOut: "\\([(a^2 + b^2) + ab][(a^2 + b^2) - ab]\\)",
        graphData: null
      },
      {
        explanation: "Recognize this as a difference of squares \\((X + Y)(X - Y) = X^2 - Y^2\\) where \\(X = a^2 + b^2\\) and \\(Y = ab\\).",
        workingOut: "\\(= (a^2 + b^2)^2 - (ab)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand \\((a^2 + b^2)^2 = a^4 + 2a^2b^2 + b^4\\) and \\((ab)^2 = a^2b^2\\).",
        workingOut: "\\(= a^4 + 2a^2b^2 + b^4 - a^2b^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to get the final result.",
        workingOut: "\\(= a^4 + a^2b^2 + b^4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "7ad07e88a517d825565161b955175767",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2x + 1)^3\\)",
    options: [
      {
        text: "\\(8x^3 + 12x^2 - 6x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8x^3 + 12x^2 + 6x + 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(8x^3 + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8x^3 + 24x^2 + 12x + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\((2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a cubic expansion of the form \\((A + B)^3\\) where \\(A = 2x\\) and \\(B = 1\\).",
        workingOut: "\\((2x + 1)^3\\)",
        graphData: null
      },
      {
        explanation: "Apply the cubic expansion identity: \\((A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3\\).",
        workingOut: "\\((2x + 1)^3 = (2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + (1)^3\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each term: \\((2x)^3 = 8x^3\\), \\(3(2x)^2(1) = 3(4x^2) = 12x^2\\), \\(3(2x)(1)^2 = 6x\\), \\((1)^3 = 1\\).",
        workingOut: "\\(8x^3 + 12x^2 + 6x + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "7bc0be865ff2485f61db508bfacc1a7e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + 6x + 36)(x^2 - 6x + 36)\\)",
    options: [
      {
        text: "\\(x^4 + 36x^2 + 1296\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 72x^2 + 1296\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 36x^2 - 1296\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 36x^2 + 1296\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((x^2 + 6x + 36)(x^2 - 6x + 36) = x^4 + 36x^2 + 1296\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a conjugate product: \\((x^2 + 6x + 36)(x^2 - 6x + 36)\\).",
        workingOut: "\\((x^2 + 6x + 36)(x^2 - 6x + 36)\\)",
        graphData: null
      },
      {
        explanation: "Regroup by identifying the common parts: \\([(x^2 + 36) + 6x][(x^2 + 36) - 6x]\\)",
        workingOut: "\\([(x^2 + 36) + 6x][(x^2 + 36) - 6x]\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity with \\(A = x^2 + 36\\) and \\(B = 6x\\).",
        workingOut: "\\(= (x^2 + 36)^2 - (6x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand \\((x^2 + 36)^2 = x^4 + 72x^2 + 1296\\) and \\((6x)^2 = 36x^2\\).",
        workingOut: "\\(= x^4 + 72x^2 + 1296 - 36x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the final answer.",
        workingOut: "\\(= x^4 + 36x^2 + 1296\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "7e67ce97bec038e63db84ca7c011119d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand: \\(6(2x + 3)\\)",
    options: [
      {
        text: "\\(12x+18\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(12x-18\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(14x+20\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(12x + 18\\)",
    solutionSteps: [
      {
        explanation: "Distribute the coefficient 6 to each term inside the brackets.",
        workingOut: "\\(6(2x + 3) = 6 \\times 2x + 6 \\times 3\\)",
        graphData: null
      },
      {
        explanation: "Multiply the first term: \\(6 \\times 2x = 12x\\)",
        workingOut: "\\(12x\\)",
        graphData: null
      },
      {
        explanation: "Multiply the second term: \\(6 \\times 3 = 18\\)",
        workingOut: "\\(18\\)",
        graphData: null
      },
      {
        explanation: "Combine the results.",
        workingOut: "\\(12x + 18\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "7f229ad53fcb15c4ca69184748a2d4ac",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Find the value of \\(998^2\\) using special expansions.",
    options: [
      {
        text: "\\(996000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(994004\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1004004\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(996004\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\((1000 - 2)^2 = 1000^2 - 2(1000)(2) + 2^2\\)\n2. \\(1000000 - 4000 + 4 = 996004\\)",
    solutionSteps: [
      {
        explanation: "Recognize that \\(998 = 1000 - 2\\), so rewrite the expression using this difference.",
        workingOut: "\\(998^2 = (1000 - 2)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square binomial identity \\((A - B)^2 = A^2 - 2AB + B^2\\) where \\(A = 1000\\) and \\(B = 2\\).",
        workingOut: "\\((1000 - 2)^2 = (1000)^2 - 2(1000)(2) + (2)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate each term: \\((1000)^2 = 1000000\\), \\(2(1000)(2) = 4000\\), \\((2)^2 = 4\\).",
        workingOut: "\\(1000000 - 4000 + 4\\)",
        graphData: null
      },
      {
        explanation: "Combine the results: \\(1000000 - 4000 + 4 = 996004\\).",
        workingOut: "\\(996004\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8180c153c3fa3e75f9c3ed3b10dab619",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a + 4)(a^2 - 4a + 16)\\)",
    options: [
      {
        text: "\\(a^3 + 64\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^2 + 16\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^3 - 64\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^3 + 3a4 + 64\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\((a + 4)(a^2 - 4a + 16) = a^3 + 64\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a sum of cubes pattern: \\((A + B)(A^2 - AB + B^2) = A^3 + B^3\\) where \\(A = a\\) and \\(B = 4\\).",
        workingOut: "\\((a + 4)(a^2 - 4a + 16)\\)",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes identity directly.",
        workingOut: "\\(= (a)^3 + (4)^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes: \\((a)^3 = a^3\\) and \\((4)^3 = 64\\).",
        workingOut: "\\(= a^3 + 64\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "822bb69b8185c671cfa6b27489376125",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand: \\((10 + b)(10 - b)\\)",
    options: [
      {
        text: "\\(100+b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100-b^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(100-20b-b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100-b\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "1. \\(100 - b^2\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a difference of squares with the form \\((A - B)(A + B)\\) where \\(A = 10\\) and \\(B = b\\).",
        workingOut: "\\((10 - b)(10 + b)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity \\((A - B)(A + B) = A^2 - B^2\\).",
        workingOut: "\\((10)^2 - (b)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squares.",
        workingOut: "\\(= 100 - b^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "834ee672d7b0a66cacf4908844956e79",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((3x + 1)^2\\)",
    options: [
      {
        text: "\\(6x^2 + 6x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 3x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 6x + 1\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(9x^2 + 6x + 1\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a perfect square binomial \\((A + B)^2\\) where \\(A = 3x\\) and \\(B = 1\\).",
        workingOut: "\\((3x + 1)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A + B)^2 = A^2 + 2AB + B^2\\).",
        workingOut: "\\((3x)^2 + 2(3x)(1) + (1)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: \\((3x)^2 = 9x^2\\), \\(2(3x)(1) = 6x\\), \\((1)^2 = 1\\).",
        workingOut: "\\(= 9x^2 + 6x + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "83b7af89485183047cbb50aac04b6c6d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-y(y - 2)\\)",
    options: [
      {
        text: "\\(-y^4+4y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-y^2-2y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(+y^2+2y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-y^2+2y\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(-y^2 + 2y\\)",
    solutionSteps: [
      {
        explanation: "Distribute \\(-y\\) to each term inside the brackets.",
        workingOut: "\\(-y(y - 2) = (-y) \\times y + (-y) \\times (-2)\\)",
        graphData: null
      },
      {
        explanation: "Multiply the first term: \\((-y) \\times y = -y^2\\)",
        workingOut: "\\(-y^2\\)",
        graphData: null
      },
      {
        explanation: "Multiply the second term: \\((-y) \\times (-2) = 2y\\) (negative times negative equals positive)",
        workingOut: "\\(2y\\)",
        graphData: null
      },
      {
        explanation: "Combine the results.",
        workingOut: "\\(-y^2 + 2y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8464bd25ae6be56751215575e5742085",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-2(y - 5)\\)",
    options: [
      {
        text: "\\(-2y+10\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(+2y+10\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-4y+12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-2y-10\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(-2y + 10\\)",
    solutionSteps: [
      {
        explanation: "Distribute \\(-2\\) to each term inside the brackets.",
        workingOut: "\\(-2(y - 5) = (-2) \\times y + (-2) \\times (-5)\\)",
        graphData: null
      },
      {
        explanation: "Multiply the first term: \\((-2) \\times y = -2y\\)",
        workingOut: "\\(-2y\\)",
        graphData: null
      },
      {
        explanation: "Multiply the second term: \\((-2) \\times (-5) = 10\\) (negative times negative equals positive)",
        workingOut: "\\(10\\)",
        graphData: null
      },
      {
        explanation: "Combine the results.",
        workingOut: "\\(-2y + 10\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "84b10bd1a754e27fb3d79f48a0282e90",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using difference of squares: \\(50.1 \\times 49.9\\)",
    options: [
      {
        text: "\\(2699.99\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2124.99\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2874.99\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2499.99\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the numbers as \\((B + d)(B - d)\\) where B is the round base, then apply the difference of squares identity.",
    solution: "\\((50 + 0.1)(50 - 0.1) = 50^2 - 0.1^2 = 2500 - 0.010000000000000002 = 2499.99\\)",
    solutionSteps: [
      {
        explanation: "Observe that \\(50.1 = 50 + 0.1\\) and \\(49.9 = 50 - 0.1\\), creating a difference of squares pattern.",
        workingOut: "\\(50.1 \\times 49.9 = (50 + 0.1)(50 - 0.1)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity \\((A + B)(A - B) = A^2 - B^2\\).",
        workingOut: "\\(= 50^2 - (0.1)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squares: \\(50^2 = 2500\\) and \\((0.1)^2 = 0.01\\).",
        workingOut: "\\(2500 - 0.01\\)",
        graphData: null
      },
      {
        explanation: "Subtract to get the final result.",
        workingOut: "\\(= 2499.99\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "86ac34985f8e30d0453bd7c11b93accb",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\((3p + 4q)(3p - 4q)\\)",
    options: [
      {
        text: "\\(9p^2 + 16q^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9p^2 - 24pq + 16q^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3p^2 - 4q^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9p^2 - 16q^2\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(9p^2 - 16q^2\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic pattern and the identity to apply.",
        workingOut: "\\(9p^2 - 16q^2\\)",
        graphData: null
      },
      {
        explanation: "Expand each term carefully according to the pattern.",
        workingOut: "\\(9p^2 - 16q^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the simplified form.",
        workingOut: "\\(9p^2 - 16q^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "873ee7c142a6245ffa91056c47deedf6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((u^2 + uv + v^2)(u^2 - uv + v^2)\\)",
    options: [
      {
        text: "\\(u^4 + u^2v^2 + v^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(u^4 - u^2v^2 - v^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + u^2v^2 + v^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(u^4 + 2u^2v^2 + v^4\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((u^2 + uv + v^2)(u^2 - uv + v^2) = u^4 + u^2v^2 + v^4\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic pattern and the identity to apply.",
        workingOut: "\\(u^4 + u^2v^2 + v^4\\)",
        graphData: null
      },
      {
        explanation: "Expand each term carefully according to the pattern.",
        workingOut: "\\(u^4 + u^2v^2 + v^4\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the simplified form.",
        workingOut: "\\(u^4 + u^2v^2 + v^4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "875688f6f5e5cb3834e68e5bb42a4633",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((10 - 7k)^2\\)",
    options: [
      {
        text: "\\(100 + 49k^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(20 - 140k + 49k^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100 - 70k + 49k^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100 - 140k + 49k^2\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(100 - 140k + 49k^2\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic pattern and the identity to apply.",
        workingOut: "\\(100 - 140k + 49k^2\\)",
        graphData: null
      },
      {
        explanation: "Expand each term carefully according to the pattern.",
        workingOut: "\\(100 - 140k + 49k^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the simplified form.",
        workingOut: "\\(100 - 140k + 49k^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8846ac6a99572e541906b4444022981a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-3(z + 4)\\)",
    options: [
      {
        text: "\\(-3z+12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3z-4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3z-12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3z-12\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(-3z - 12\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic pattern and the identity to apply.",
        workingOut: "\\(-3z-12\\)",
        graphData: null
      },
      {
        explanation: "Expand each term carefully according to the pattern.",
        workingOut: "\\(-3z-12\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the simplified form.",
        workingOut: "\\(-3z-12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8f794b5b8a4b9fa5b64e5781a6dd6ae8",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x^2 + 2)^3\\)",
    options: [
      {
        text: "\\(x^6 + 12x^4 + 24x^ + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^6 + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^6 + 6x^4 - 12x^ + 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\((x^2 + 2)^3 = x^6 + 6x^4 + 12x^ + 8\\)",
    solutionSteps: [
      {
        explanation: "Identify the algebraic pattern and the identity to apply.",
        workingOut: "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        graphData: null
      },
      {
        explanation: "Expand each term carefully according to the pattern.",
        workingOut: "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms to reach the simplified form.",
        workingOut: "\\(x^6 + 6x^4 + 12x^ + 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8f83c4cf5789f6366d5f1e32e3fdc543",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x + 3)(x - 2)\\)",
    options: [
      {
        text: "\\(x^3 + 2x^2 - 5x - 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 + 2x^2 - 5x - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 2x^2 + 5x + 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 1)(x + 3)(x - 2) = x^3 + 2x^2 - 5x - 6\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a difference of cubes pattern: \\((A - B)(A^2 + AB + B^2) = A^3 - B^3\\) where \\(A = x\\) and \\(B = 2\\).",
        workingOut: "\\((x - 2)(x^2 + 2x + 4)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of cubes identity directly.",
        workingOut: "\\(= (x)^3 - (2)^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes: \\((x)^3 = x^3\\) and \\((2)^3 = 8\\).",
        workingOut: "\\(= x^3 - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8fda8af26c79eaae282af61b19bb6c64",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 2)(x^2 + 2x + 4)\\)",
    options: [
      {
        text: "\\(x^3 + 8\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 - 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 - 8\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^3 - 3x2 - 8\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\((x - 2)(x^2 + 2x + 4) = x^3 - 8\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a difference of cubes pattern: \\((A - B)(A^2 + AB + B^2) = A^3 - B^3\\) where \\(A = x\\) and \\(B = 2\\).",
        workingOut: "\\((x - 2)(x^2 + 2x + 4)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of cubes identity directly.",
        workingOut: "\\(= (x)^3 - (2)^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes.",
        workingOut: "\\(= x^3 - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "8fe44db1d9f71b29550b1aec86953a93",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((4y - 3)(16y^2 + 12y + 9)\\)",
    options: [
      {
        text: "\\(4y^2 - 9\\)",
        imageUrl: ""
      },
      {
        text: "\\(64y^3 + 27\\)",
        imageUrl: ""
      },
      {
        text: "\\(64y^3 - 34y3 - 27\\)",
        imageUrl: ""
      },
      {
        text: "\\(64y^3 - 27\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\((4y - 3)(16y^2 + 12y + 9) = 64y^3 - 27\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a difference of cubes: \\((A - B)(A^2 + AB + B^2) = A^3 - B^3\\) where \\(A = 4y\\) and \\(B = 3\\).",
        workingOut: "\\((4y - 3)(16y^2 + 12y + 9)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of cubes identity.",
        workingOut: "\\(= (4y)^3 - (3)^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes: \\((4y)^3 = 64y^3\\) and \\((3)^3 = 27\\).",
        workingOut: "\\(= 64y^3 - 27\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "90a0105375acf84578c6b2c2db938185",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2)(x + 2)(x - 2)\\)",
    options: [
      {
        text: "\\(x^2 + 2x^2 - 4x - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 2x^2 - 4x - 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 2x^2 + 4x + 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 2)(x + 2)(x - 2) = x^3 + 2x^2 - 4x - 8\\)",
    solutionSteps: [
      {
        explanation: "Start by multiplying the first two factors: \\((x + 2)(x + 2) = (x + 2)^2\\).",
        workingOut: "\\((x + 2)^2 = x^2 + 4x + 4\\)",
        graphData: null
      },
      {
        explanation: "Now multiply the result by the third binomial: \\((x^2 + 4x + 4)(x - 2)\\).",
        workingOut: "\\((x^2 + 4x + 4)(x - 2)\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(x\\) to each term: \\(x(x^2 + 4x + 4) = x^3 + 4x^2 + 4x\\).",
        workingOut: "\\(x^3 + 4x^2 + 4x\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(-2\\) to each term: \\(-2(x^2 + 4x + 4) = -2x^2 - 8x - 8\\).",
        workingOut: "\\(-2x^2 - 8x - 8\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like terms.",
        workingOut: "\\(= x^3 + 2x^2 - 4x - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "9195a4ed44c56bcfa887fce0f6cb1961",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\(10 - 2(y + 4)\\)",
    options: [
      {
        text: "\\(2y + 2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2 - 2y\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(6 - 2y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(18 - 2y\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(= 2 - 2y\\)",
    solutionSteps: [
      {
        explanation: "First distribute the -2 across the bracket (y + 4).",
        workingOut: "\\(10 - 2(y + 4) = 10 - 2y - 8\\)",
        graphData: null
      },
      {
        explanation: "Combine the constant terms, 10 and -8, leaving the y-term unchanged.",
        workingOut: "\\(= 2 - 2y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "93669424b250fedc270dcb3f58c3c337",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Expand: \\((p - q)^2\\)",
    options: [
      {
        text: "\\(\\$p^2-2pq+q^2\\$\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(p^2+2pq+q^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p^2-3pq+q\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p^2+3pq+q^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(p^2 - 2pq + q^2\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a perfect square binomial \\((A - B)^2\\) where \\(A = p\\) and \\(B = q\\).",
        workingOut: "\\((p - q)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\((p)^2 - 2(p)(q) + (q)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify to get the final expanded form.",
        workingOut: "\\(= p^2 - 2pq + q^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "9478d1dbe54362c7c22a313b57849364",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + y)^3\\)",
    options: [
      {
        text: "\\(x^3 + y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 6x^2y + 6xy^2 + y^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 3x^2y + 3xy^2 + y^3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 3x^2y - 3xy^2 + y^3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\((x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a cubic expansion \\((A + B)^3\\) where \\(A = x\\) and \\(B = y\\).",
        workingOut: "\\((x + y)^3\\)",
        graphData: null
      },
      {
        explanation: "Apply the cubic expansion identity: \\((A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3\\).",
        workingOut: "\\(= (x)^3 + 3(x)^2(y) + 3(x)(y)^2 + (y)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify each term to get the final polynomial.",
        workingOut: "\\(= x^3 + 3x^2y + 3xy^2 + y^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "9b3dd8329cb670333a80ae5c671a2557",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((3u - 2v)^3\\)",
    options: [
      {
        text: "\\(27u^3 - 27u^22v - 9u2v^2 - 2v^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27u^3 - 2v^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27u^3 - 54u^22v + 18u2v^2 - 2v^3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\((3u - 2v)^3 = 27u^3 - 27u^22v + 9u2v^2 - 2v^3\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a cubic expansion \\((A - B)^3\\) where \\(A = 3u\\) and \\(B = 2v\\).",
        workingOut: "\\((3u - 2v)^3\\)",
        graphData: null
      },
      {
        explanation: "Apply the cubic expansion identity: \\((A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3\\).",
        workingOut: "\\(= (3u)^3 - 3(3u)^2(2v) + 3(3u)(2v)^2 - (2v)^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term carefully, paying attention to signs and coefficients.",
        workingOut: "\\(= 27u^3 - 3(9u^2)(2v) + 3(3u)(4v^2) - 8v^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify to get the final result.",
        workingOut: "\\(= 27u^3 - 54u^2v + 36uv^2 - 8v^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "9c330c8a29bcd02a5c3e5bd9bb767876",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2x - \\frac{3}{2x})^2\\)",
    options: [
      {
        text: "\\(4x^2  + \\frac{9}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - 6 + \\frac{9}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - 3 + \\frac{9}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2  + 6 + \\frac{9}{4x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\((2x - \\frac{3}{2x})^2 = 4x^2 - 6 + \\frac{9}{4x^2}\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a perfect square binomial with fractions: \\((A - B)^2\\) where \\(A = 2x\\) and \\(B = \\frac{3}{2x}\\).",
        workingOut: "\\((2x - \\frac{3}{2x})^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\((2x)^2 - 2(2x)(\\frac{3}{2x}) + (\\frac{3}{2x})^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify each term: \\((2x)^2 = 4x^2\\), \\(2(2x)(\\frac{3}{2x}) = 6\\), \\((\\frac{3}{2x})^2 = \\frac{9}{4x^2}\\).",
        workingOut: "\\(= 4x^2 - 6 + \\frac{9}{4x^2}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "9eb95b6add1acf06f4aa32cb8bca5154",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + 2x + 2)(x^2 - 2x + 2)\\)",
    options: [
      {
        text: "\\(x^4 - 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 4x^2 + 4\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((x^2 + 2x + 2)(x^2 - 2x + 2) = x^4 + 4\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a conjugate product: \\((x^2 + 2x + 2)(x^2 - 2x + 2)\\).",
        workingOut: "\\((x^2 + 2x + 2)(x^2 - 2x + 2)\\)",
        graphData: null
      },
      {
        explanation: "Regroup to identify the structure: \\([(x^2 + 2) + 2x][(x^2 + 2) - 2x]\\)",
        workingOut: "\\([(x^2 + 2) + 2x][(x^2 + 2) - 2x]\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares \\((A + B)(A - B) = A^2 - B^2\\).",
        workingOut: "\\(= (x^2 + 2)^2 - (2x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand: \\((x^2 + 2)^2 = x^4 + 4x^2 + 4\\) and \\((2x)^2 = 4x^2\\).",
        workingOut: "\\(= x^4 + 4x^2 + 4 - 4x^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify by canceling \\(4x^2\\) terms.",
        workingOut: "\\(= x^4 + 4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "a3a4b50a55c1e3e67a0795d7ba093bed",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand and simplify: \\(2(3a - 4) + 5\\)",
    options: [
      {
        text: "\\(6a-8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(6a+1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(6a - 3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(6a-13\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(= 6a - 3\\)",
    solutionSteps: [
      {
        explanation: "First distribute the 2 across the bracket (3a - 4).",
        workingOut: "\\(2(3a - 4) + 5 = 6a - 8 + 5\\)",
        graphData: null
      },
      {
        explanation: "Combine the constant terms, -8 and 5, leaving the a-term unchanged.",
        workingOut: "\\(= 6a - 3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "a5b110a09194ef9f32b7ca945fce8072",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((a - 3b + 2)^2\\)",
    options: [
      {
        text: "\\(a^2 - 9b^2 + 4 - 6ab + 12b - 4a\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + 9b^2 + 4 - 6ab + 12b + 4a\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + 9b^2 + 4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((a - 3b + 2)^2 = a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion formula: \\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\).",
        workingOut: "\\((a - 3b + 2)^2\\)",
        graphData: null
      },
      {
        explanation: "Square each individual term: \\((a)^2 = a^2\\), \\((-3b)^2 = 9b^2\\), \\((2)^2 = 4\\).",
        workingOut: "\\(a^2 + 9b^2 + 4 + \\ldots\\)",
        graphData: null
      },
      {
        explanation: "Add the cross-product terms with appropriate signs: \\(2(a)(-3b) = -6ab\\), \\(2(-3b)(2) = -12b\\), \\(2(2)(a) = 4a\\).",
        workingOut: "\\(+ 2(a)(-3b) + 2(-3b)(2) + 2(2)(a)\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms to get the final expanded form.",
        workingOut: "\\(= a^2 + 9b^2 + 4 - 6ab - 12b + 4a\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "a6b7379f519277b96acc59b17fd8e384",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((2u - 5v)(2u + 5v)\\)",
    options: [
      {
        text: "\\(4u^2 - 25v^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2u^2 - 5v^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4u^2 + 25v^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4u^2 - 20uv + 25v^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(4u^2 - 25v^2\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a difference of squares \\((A - B)(A + B)\\) where \\(A = 2u\\) and \\(B = 5v\\).",
        workingOut: "\\((2u - 5v)(2u + 5v)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity \\((A - B)(A + B) = A^2 - B^2\\).",
        workingOut: "\\(= (2u)^2 - (5v)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squares.",
        workingOut: "\\(= 4u^2 - 25v^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "a8c558bf44ac7a09392ffde0f2156f91",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 1)(x + 2)(x + 4)\\)",
    options: [
      {
        text: "\\(x^3 - 5x^2 - 2x + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 5x^2 + 2x - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 5x^2 + 2x - 8\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x - 1)(x + 2)(x + 4) = x^3 + 5x^2 + 2x - 8\\)",
    solutionSteps: [
      {
        explanation: "Multiply the first two factors: \\((x - 1)(x + 2) = x^2 + 2x - x - 2 = x^2 + x - 2\\).",
        workingOut: "\\((x - 1)(x + 2) = x^2 + x - 2\\)",
        graphData: null
      },
      {
        explanation: "Multiply the result by the third binomial: \\((x^2 + x - 2)(x + 4)\\).",
        workingOut: "\\((x^2 + x - 2)(x + 4)\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(x\\): \\(x(x^2 + x - 2) = x^3 + x^2 - 2x\\).",
        workingOut: "\\(x^3 + x^2 - 2x\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(4\\): \\(4(x^2 + x - 2) = 4x^2 + 4x - 8\\).",
        workingOut: "\\(4x^2 + 4x - 8\\)",
        graphData: null
      },
      {
        explanation: "Combine all like terms.",
        workingOut: "\\(= x^3 + 5x^2 + 2x - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "a9ad4cb7ecb6b4f53f67bf3e53da8427",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 1)(x + 2)(x - 3)\\)",
    options: [
      {
        text: "\\(x^3 + 7x + 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 7x - 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 7x - 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 1)(x + 2)(x - 3) = x^3 - 7x - 6\\)",
    solutionSteps: [
      {
        explanation: "Multiply the first two factors: \\((x + 1)(x + 2) = x^2 + 3x + 2\\).",
        workingOut: "\\((x + 1)(x + 2) = x^2 + 3x + 2\\)",
        graphData: null
      },
      {
        explanation: "Multiply the result by the third binomial: \\((x^2 + 3x + 2)(x - 3)\\).",
        workingOut: "\\((x^2 + 3x + 2)(x - 3)\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(x\\): \\(x(x^2 + 3x + 2) = x^3 + 3x^2 + 2x\\).",
        workingOut: "\\(x^3 + 3x^2 + 2x\\)",
        graphData: null
      },
      {
        explanation: "Distribute \\(-3\\): \\(-3(x^2 + 3x + 2) = -3x^2 - 9x - 6\\).",
        workingOut: "\\(-3x^2 - 9x - 6\\)",
        graphData: null
      },
      {
        explanation: "Combine all like terms to reach the final cubic.",
        workingOut: "\\(= x^3 - 7x - 6\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "aaaba67f5403f55636a29df6b694926f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((p + q - r)^2\\)",
    options: [
      {
        text: "\\(p^2 - q^2 + r^2 - 2pq + 2qr - 2rp\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(p^2 + q^2 + r^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(p^2 + q^2 + r^2 + 2pq - 2qr + 2rp\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((p + q - r)^2 = p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion: \\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\).",
        workingOut: "\\((p + q - r)^2\\)",
        graphData: null
      },
      {
        explanation: "Square each term: \\((p)^2 = p^2\\), \\((q)^2 = q^2\\), \\((-r)^2 = r^2\\).",
        workingOut: "\\(p^2 + q^2 + r^2 + \\ldots\\)",
        graphData: null
      },
      {
        explanation: "Add the cross-product terms: \\(2(p)(q) = 2pq\\), \\(2(q)(-r) = -2qr\\), \\(2(-r)(p) = -2rp\\).",
        workingOut: "\\(+ 2pq - 2qr - 2rp\\)",
        graphData: null
      },
      {
        explanation: "Combine to get the final expanded form.",
        workingOut: "\\(= p^2 + q^2 + r^2 + 2pq - 2qr - 2rp\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ab8d533a4730a42645defea9eaa87fba",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using algebraic expansion: \\(9997^2\\)",
    options: [
      {
        text: "\\(99940000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100060009\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(99880009\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(99940009\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\((10000 - 3)^2 = 10000^2 - 2(10000)(3) + 3^2 = 99940009\\)",
    solutionSteps: [
      {
        explanation: "Express 9997 as a difference from a round number: \\(9997 = 10000 - 3\\).",
        workingOut: "\\(9997^2 = (10000 - 3)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\((10000 - 3)^2 = (10000)^2 - 2(10000)(3) + (3)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: \\((10000)^2 = 100000000\\), \\(2(10000)(3) = 60000\\), \\((3)^2 = 9\\).",
        workingOut: "\\(= 100000000 - 60000 + 9\\)",
        graphData: null
      },
      {
        explanation: "Combine the results.",
        workingOut: "\\(= 99940009\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "aba4cc9411144cb3c382006e15973594",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using algebraic expansion: \\(99.5^2\\)",
    options: [
      {
        text: "\\(11385.29\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9900.25\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(8415.21\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10692.27\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\((100 - 0.5)^2 = 100^2 - 2(100)(0.5) + 0.5^2 = 9900.25\\)",
    solutionSteps: [
      {
        explanation: "Express 99.5 as a difference: \\(99.5 = 100 - 0.5\\).",
        workingOut: "\\(99.5^2 = (100 - 0.5)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\((100 - 0.5)^2 = (100)^2 - 2(100)(0.5) + (0.5)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: \\((100)^2 = 10000\\), \\(2(100)(0.5) = 100\\), \\((0.5)^2 = 0.25\\).",
        workingOut: "\\(= 10000 - 100 + 0.25\\)",
        graphData: null
      },
      {
        explanation: "Combine the results.",
        workingOut: "\\(= 9900.25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ac18a4cf31141b0861fecce5695457d5",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((p^2 + 2p + 5)(p^2 - 2p + 5)\\)",
    options: [
      {
        text: "\\(p^4 + 6p^2 + 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 6p^2 + 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^4 - 6p^2 - 25\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^4 + 10p^2 + 25\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((p^2 + 2p + 5)(p^2 - 2p + 5) = p^4 + 6p^2 + 25\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as a conjugate product: \\((p^2 + 2p + 5)(p^2 - 2p + 5)\\).",
        workingOut: "\\((p^2 + 2p + 5)(p^2 - 2p + 5)\\)",
        graphData: null
      },
      {
        explanation: "Regroup to identify the structure: \\([(p^2 + 5) + 2p][(p^2 + 5) - 2p]\\)",
        workingOut: "\\([(p^2 + 5) + 2p][(p^2 + 5) - 2p]\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares \\((A + B)(A - B) = A^2 - B^2\\).",
        workingOut: "\\(= (p^2 + 5)^2 - (2p)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand: \\((p^2 + 5)^2 = p^4 + 10p^2 + 25\\) and \\((2p)^2 = 4p^2\\).",
        workingOut: "\\(= p^4 + 10p^2 + 25 - 4p^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms.",
        workingOut: "\\(= p^4 + 6p^2 + 25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "af3b769ff778d9cb1a3dc9e9de443ce8",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Find the value of \\(103^2\\) using special expansions.",
    options: [
      {
        text: "\\(10600\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10009\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10906\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(10609\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(103^2 = 10609\\)",
    solutionSteps: [
      {
        explanation: "Recognize that 103 = 100 + 3. We can use the square of a binomial identity (A+B)² = A² + 2AB + B² where A = 100 and B = 3.",
        workingOut: "\\(103^2 = (100 + 3)^2\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial square formula with A² = 100² and B² = 3².",
        workingOut: "\\(= 100^2 + 2(100)(3) + 3^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: 100² = 10000, 2(100)(3) = 600, and 3² = 9.",
        workingOut: "\\(= 10000 + 600 + 9\\)",
        graphData: null
      },
      {
        explanation: "Add the terms together to find the final result.",
        workingOut: "\\(= 10609\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "b12ba318cac0703eee7a8dfd84df1a1e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + 2)^3\\)",
    options: [
      {
        text: "\\(x^3 + 12x^2 + 24x + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 6x^2 + 12x + 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 6x^2 - 12x + 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(x^3 + 6x^2 + 12x + 8\\)",
    solutionSteps: [
      {
        explanation: "Recognize the cubic expansion pattern (A+B)³ = A³ + 3A²B + 3AB² + B³ where A = x and B = 2.",
        workingOut: "\\((x + 2)^3 = x^3 + 3(x)^2(2) + 3(x)(2)^2 + 2^3\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the powers and products for each term: x³ remains x³, 3x²(2) = 6x², 3x(4) = 12x, and 2³ = 8.",
        workingOut: "\\(= x^3 + 6x^2 + 12x + 8\\)",
        graphData: null
      },
      {
        explanation: "Verify this is already in simplified form with all like terms combined.",
        workingOut: "\\(x^3 + 6x^2 + 12x + 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "b3e4b358ae5305ba2c7fb7f27eaf86a6",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(4(3x - 2y)\\)",
    options: [
      {
        text: "\\(14x-10y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(12x+8y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(12x-8y\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(12x - 8y\\)",
    solutionSteps: [
      {
        explanation: "Distribute the coefficient 4 to each term inside the parentheses.",
        workingOut: "\\(4(3x - 2y) = 4 \\cdot 3x + 4 \\cdot (-2y)\\)",
        graphData: null
      },
      {
        explanation: "Multiply the coefficients: 4 × 3 = 12 for the x term, and 4 × (-2) = -8 for the y term.",
        workingOut: "\\(= 12x - 8y\\)",
        graphData: null
      },
      {
        explanation: "Write the final expanded form.",
        workingOut: "\\(12x - 8y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "b4bf9576a5389ddedd9367525f7bcbc6",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((3k - 2)(k + 4)\\)",
    options: [
      {
        text: "\\(3k^2 - 10k - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3k^2 + 10k - 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3k^2 + 10k + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(3k^2 + 12k - 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(3k^2 + 10k - 8\\)",
    solutionSteps: [
      {
        explanation: "Use the FOIL method (First, Outer, Inner, Last) to expand (3k - 2)(k + 4).",
        workingOut: "\\((3k - 2)(k + 4) = 3k \\cdot k + 3k \\cdot 4 + (-2) \\cdot k + (-2) \\cdot 4\\)",
        graphData: null
      },
      {
        explanation: "Calculate each product: 3k × k = 3k², 3k × 4 = 12k, (-2) × k = -2k, (-2) × 4 = -8.",
        workingOut: "\\(= 3k^2 + 12k - 2k - 8\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 12k - 2k = 10k.",
        workingOut: "\\(= 3k^2 + 10k - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "b6c600a1feb66c0ef210d4f0bddb4339",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(4(x - 3)\\)",
    options: [
      {
        text: "\\(6x-14\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x+12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x-12\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(4x - 12\\)",
    solutionSteps: [
      {
        explanation: "Distribute the coefficient 4 to each term inside the parentheses.",
        workingOut: "\\(4(x - 3) = 4 \\cdot x + 4 \\cdot (-3)\\)",
        graphData: null
      },
      {
        explanation: "Multiply each coefficient: 4 × x = 4x and 4 × (-3) = -12.",
        workingOut: "\\(= 4x - 12\\)",
        graphData: null
      },
      {
        explanation: "The result is already in simplified form.",
        workingOut: "\\(4x - 12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "b95551a331c1f79d6004faea9ab095d2",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 - \\frac{5}{x^2})^2\\)",
    options: [
      {
        text: "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  + \\frac{25}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - 5 + \\frac{25}{x^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4  + 10 + \\frac{25}{x^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(x^4 - 10 + \\frac{25}{x^4}\\)",
    solutionSteps: [
      {
        explanation: "Recognize the binomial square pattern (A - B)² = A² - 2AB + B² where A = x² and B = 5/x².",
        workingOut: "\\((x^2 - \\frac{5}{x^2})^2 = (x^2)^2 - 2(x^2)(\\frac{5}{x^2}) + (\\frac{5}{x^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the powers: (x²)² = x⁴, 2x²(5/x²) = 10, and (5/x²)² = 25/x⁴.",
        workingOut: "\\(= x^4 - 2 \\cdot x^2 \\cdot \\frac{5}{x^2} + \\frac{25}{x^4}\\)",
        graphData: null
      },
      {
        explanation: "Combine the simplified terms.",
        workingOut: "\\(= x^4 - 10 + \\frac{25}{x^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "bad544268ea88a90fef3728da02cb05c",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x - 3)^3\\)",
    options: [
      {
        text: "\\(x^3 - 9x^2 + 27x - 27\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 - 9x^2 - 27x - 27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 27\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 18x^2 + 54x - 27\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(x^3 - 9x^2 + 27x - 27\\)",
    solutionSteps: [
      {
        explanation: "Recognize the cubic expansion (A - B)³ = A³ - 3A²B + 3AB² - B³ where A = x and B = 3.",
        workingOut: "\\((x - 3)^3 = x^3 - 3(x)^2(3) + 3(x)(3)^2 - 3^3\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the powers: x³ stays as is, 3x²(3) = 9x², 3x(9) = 27x, and 3³ = 27.",
        workingOut: "\\(= x^3 - 9x^2 + 27x - 27\\)",
        graphData: null
      },
      {
        explanation: "The cubic expansion is now complete and fully simplified.",
        workingOut: "\\(x^3 - 9x^2 + 27x - 27\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "bb16cc8cd28522791b40372c22d4832e",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2)(x + 3)(x - 5)\\)",
    options: [
      {
        text: "\\(x^2 - 19x - 30\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 30\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 19x - 30\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^3 + 19x + 30\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\(x^3 - 19x - 30\\)",
    solutionSteps: [
      {
        explanation: "Start by expanding the first two binomials (x + 2)(x + 3) using FOIL.",
        workingOut: "\\((x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6\\)",
        graphData: null
      },
      {
        explanation: "Now multiply this result by the third binomial (x - 5).",
        workingOut: "\\((x^2 + 5x + 6)(x - 5) = x^2 \\cdot x + 5x \\cdot x + 6 \\cdot x + x^2 \\cdot (-5) + 5x \\cdot (-5) + 6 \\cdot (-5)\\)",
        graphData: null
      },
      {
        explanation: "Simplify each product: x³, 5x², 6x, -5x², -25x, -30.",
        workingOut: "\\(= x^3 + 5x^2 + 6x - 5x^2 - 25x - 30\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 5x² - 5x² = 0, and 6x - 25x = -19x.",
        workingOut: "\\(= x^3 - 19x - 30\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "bb58cca282a5452627f8836127f60dfb",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((6 + 7n)(6 - 7n)\\)",
    options: [
      {
        text: "\\(36 - 49n^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(36 - 14n\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(49n^2 - 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36 + 49n^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(36 - 49n^2\\)",
    solutionSteps: [
      {
        explanation: "Recognize the difference of squares pattern (A + B)(A - B) = A² - B² where A = 6 and B = 7n.",
        workingOut: "\\((6 + 7n)(6 - 7n) = 6^2 - (7n)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squares: 6² = 36 and (7n)² = 49n².",
        workingOut: "\\(= 36 - 49n^2\\)",
        graphData: null
      },
      {
        explanation: "The expansion using the difference of squares formula is complete.",
        workingOut: "\\(36 - 49n^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "bc3bf8b668a797bdf19f540a3375917c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "Expand: \\((11 - g)^2\\)",
    options: [
      {
        text: "\\(121-22g+g^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(11-2g+g^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(11+2g+g^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(121+22g+g^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(121 - 22g + g^2\\)",
    solutionSteps: [
      {
        explanation: "Recognize the binomial square pattern (A - B)² = A² - 2AB + B² where A = 11 and B = g.",
        workingOut: "\\((11 - g)^2 = 11^2 - 2(11)(g) + g^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: 11² = 121, 2(11)(g) = 22g, and g² remains g².",
        workingOut: "\\(= 121 - 22g + g^2\\)",
        graphData: null
      },
      {
        explanation: "Write in standard form with terms in descending order of degree.",
        workingOut: "\\(= 121 - 22g + g^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "bdf4a25350a86886fd26d7b48df6d158",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(-(x + 7)\\)",
    options: [
      {
        text: "\\(-x-7\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(+x+7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-x-9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(-x - 7\\)",
    solutionSteps: [
      {
        explanation: "Distribute the negative sign to each term inside the parentheses.",
        workingOut: "\\(-(x + 7) = -1 \\cdot x + (-1) \\cdot 7\\)",
        graphData: null
      },
      {
        explanation: "Multiply by -1: -1 × x = -x and -1 × 7 = -7.",
        workingOut: "\\(= -x - 7\\)",
        graphData: null
      },
      {
        explanation: "The expansion is complete.",
        workingOut: "\\(-x - 7\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c08b48a08fd4ed4724aa98c8847ba54d",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((5t + 2)^3\\)",
    options: [
      {
        text: "\\(125t^3 + 300t^2 + 120t + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(125t^3 + 150t^2 + 60t + 8\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(125t^3 + 150t^2 - 60t + 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(125t^3 + 8\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(125t^3 + 150t^2 + 60t + 8\\)",
    solutionSteps: [
      {
        explanation: "Recognize the cubic expansion (A + B)³ = A³ + 3A²B + 3AB² + B³ where A = 5t and B = 2.",
        workingOut: "\\((5t + 2)^3 = (5t)^3 + 3(5t)^2(2) + 3(5t)(2)^2 + 2^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: (5t)³ = 125t³, 3(25t²)(2) = 150t², 3(5t)(4) = 60t, 2³ = 8.",
        workingOut: "\\(= 125t^3 + 150t^2 + 60t + 8\\)",
        graphData: null
      },
      {
        explanation: "The cubic expansion is complete and simplified.",
        workingOut: "\\(125t^3 + 150t^2 + 60t + 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c287f0e4bd209f746ac8bc0d5b30616b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((3x - 2)^3\\)",
    options: [
      {
        text: "\\(27x^3 - 54x^2 - 36x - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27x^3 - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27x^3 - 108x^2 + 72x - 8\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(27x^3 - 54x^2 + 36x - 8\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(27x^3 - 54x^2 + 36x - 8\\)",
    solutionSteps: [
      {
        explanation: "Use the cubic expansion formula (A - B)³ = A³ - 3A²B + 3AB² - B³ where A = 3x and B = 2.",
        workingOut: "\\((3x - 2)^3 = (3x)^3 - 3(3x)^2(2) + 3(3x)(2)^2 - 2^3\\)",
        graphData: null
      },
      {
        explanation: "Compute each term: (3x)³ = 27x³, 3(9x²)(2) = 54x², 3(3x)(4) = 36x, 2³ = 8.",
        workingOut: "\\(= 27x^3 - 54x^2 + 36x - 8\\)",
        graphData: null
      },
      {
        explanation: "The cubic expansion is now complete.",
        workingOut: "\\(27x^3 - 54x^2 + 36x - 8\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c54fd16af88fa9f5e34d2f4c962df923",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(x(x + 5)\\)",
    options: [
      {
        text: "\\(x^4+7x\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2-5x\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2+5x\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(x^2 + 5x\\)",
    solutionSteps: [
      {
        explanation: "Distribute x to each term inside the parentheses.",
        workingOut: "\\(x(x + 5) = x \\cdot x + x \\cdot 5\\)",
        graphData: null
      },
      {
        explanation: "Multiply: x × x = x² and x × 5 = 5x.",
        workingOut: "\\(= x^2 + 5x\\)",
        graphData: null
      },
      {
        explanation: "The distribution is complete.",
        workingOut: "\\(x^2 + 5x\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c74ab9663795b54a6beb6c4df6c735e0",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2x - 1)(4x^2 + 2x + 1)\\)",
    options: [
      {
        text: "\\(8x^3 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^3 - 32x1 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(2x^2 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^3 + 1\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\(8x^3 - 1\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as the difference of cubes pattern (A - B)(A² + AB + B²) = A³ - B³ where A = 2x and B = 1.",
        workingOut: "\\((2x - 1)(4x^2 + 2x + 1) = (2x - 1)((2x)^2 + (2x)(1) + 1^2)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of cubes identity: (A - B)(A² + AB + B²) = A³ - B³.",
        workingOut: "\\(= (2x)^3 - 1^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes: (2x)³ = 8x³ and 1³ = 1.",
        workingOut: "\\(= 8x^3 - 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c80dbf27bc4d091dd73caa7f9c7f64a5",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((a - 5)^3\\)",
    options: [
      {
        text: "\\(a^3 - 15a^2 - 75a - 125\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^3 - 30a^2 + 150a - 125\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(a^3 - 15a^2 + 75a - 125\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a^3 - 125\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use the cubic identity: \\((A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3\\)",
    solution: "\\(a^3 - 15a^2 + 75a - 125\\)",
    solutionSteps: [
      {
        explanation: "Apply the cubic expansion formula (A - B)³ = A³ - 3A²B + 3AB² - B³ where A = a and B = 5.",
        workingOut: "\\((a - 5)^3 = a^3 - 3(a)^2(5) + 3(a)(5)^2 - 5^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: a³ stays as is, 3a²(5) = 15a², 3a(25) = 75a, 5³ = 125.",
        workingOut: "\\(= a^3 - 15a^2 + 75a - 125\\)",
        graphData: null
      },
      {
        explanation: "The cubic expansion is complete and fully simplified.",
        workingOut: "\\(a^3 - 15a^2 + 75a - 125\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c88361554ffd9cc8f75e75cecdf8a6b5",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a - 4)^2 - (a - 4)(a + 4)\\)",
    options: [
      {
        text: "\\(-8a+32\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-8a\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(8a-32\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-8a+16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(-8a + 32\\)",
    solutionSteps: [
      {
        explanation: "Expand the first term (a - 4)² using the binomial square pattern (A - B)² = A² - 2AB + B² where A = a and B = 4.",
        workingOut: "\\((a - 4)^2 = a^2 - 8a + 16\\)",
        graphData: null
      },
      {
        explanation: "Expand the second term (a - 4)(a + 4) using the difference of squares pattern (A - B)(A + B) = A² - B² where A = a and B = 4.",
        workingOut: "\\((a - 4)(a + 4) = a^2 - 16\\)",
        graphData: null
      },
      {
        explanation: "Subtract the second expansion from the first: (a² - 8a + 16) - (a² - 16).",
        workingOut: "\\(= a^2 - 8a + 16 - a^2 + 16\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: a² - a² = 0, leaving -8a + 32.",
        workingOut: "\\(= -8a + 32\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "c8e33bec4228918577f2a979d38cc4aa",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((3x - 2y - z)^2\\)",
    options: [
      {
        text: "\\(9x^2 + 4y^2 + z^2 - 12xy - 4yz + 6zx\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 4y^2 + z^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(9x^2 - 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 4y^2 + z^2 - 12xy + 4yz - 6zx\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\(9x^2 + 4y^2 + z^2 - 12xy - 6xz + 4yz\\)",
    solutionSteps: [
      {
        explanation: "For a trinomial square (A + B + C)², use the pattern: A² + B² + C² + 2AB + 2AC + 2BC. Here A = 3x, B = -2y, C = -z.",
        workingOut: "\\((3x - 2y - z)^2 = (3x)^2 + (-2y)^2 + (-z)^2 + 2(3x)(-2y) + 2(3x)(-z) + 2(-2y)(-z)\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squared terms: (3x)² = 9x², (-2y)² = 4y², (-z)² = z².",
        workingOut: "\\(= 9x^2 + 4y^2 + z^2 + 2(3x)(-2y) + 2(3x)(-z) + 2(-2y)(-z)\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cross terms: 2(3x)(-2y) = -12xy, 2(3x)(-z) = -6xz, 2(-2y)(-z) = 4yz.",
        workingOut: "\\(= 9x^2 + 4y^2 + z^2 - 12xy - 6xz + 4yz\\)",
        graphData: null
      },
      {
        explanation: "Verify the given answer matches only the squared terms (9x² + 4y² + z²), noting this may be an incomplete simplification.",
        workingOut: "\\(\\text{Complete expansion: } 9x^2 + 4y^2 + z^2 - 12xy - 6xz + 4yz\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "cd80c4c72b9e0fb0e277e4e4944244e2",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x^2 + x + 1)(x^2 - x + 1)\\)",
    options: [
      {
        text: "\\(x^2 + x^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + x^2 + 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 - x^2 - 1\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^4 + 2x^2 + 1\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\(x^4 + x^2 + 1\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as the form (A + B)(A - B) = A² - B² where A = x² + 1 and B = x.",
        workingOut: "\\((x^2 + x + 1)(x^2 - x + 1) = ((x^2 + 1) + x)((x^2 + 1) - x)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares: ((x² + 1) + x)((x² + 1) - x) = (x² + 1)² - x².",
        workingOut: "\\(= (x^2 + 1)^2 - x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x² + 1)² using the binomial square formula: (x²)² + 2(x²)(1) + 1² = x⁴ + 2x² + 1.",
        workingOut: "\\(= x^4 + 2x^2 + 1 - x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 2x² - x² = x².",
        workingOut: "\\(= x^4 + x^2 + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ce171b80f1e9031b8fcdc2516f86c7a8",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((p - q)(p^2 + qp + q^2)\\)",
    options: [
      {
        text: "\\(p^3 - 3pq - q^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^3 + q^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^2 - q^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(p^3 - q^3\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\(p^3 - q^3\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as the difference of cubes identity (A - B)(A² + AB + B²) = A³ - B³ where A = p and B = q.",
        workingOut: "\\((p - q)(p^2 + qp + q^2) = p^3 - q^3\\)",
        graphData: null
      },
      {
        explanation: "Verify by expanding directly: p(p² + qp + q²) - q(p² + qp + q²).",
        workingOut: "\\(= p^3 + p^2q + pq^2 - p^2q - pq^2 - q^3\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: p²q terms cancel, pq² terms cancel, leaving p³ - q³.",
        workingOut: "\\(= p^3 - q^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "cedaa53bd385e1dbd8354de2dbbf64e3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((x + y - z)^2\\)",
    options: [
      {
        text: "\\(x^2 + y^2 + z^2 + 2xy - 2yz + 2zx\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + y^2 + z^2 + 2xy - 2yz - 2zx\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 + y^2 + z^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - y^2 + z^2 - 2xy + 2yz - 2zx\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\(x^2 + y^2 + z^2 + 2xy - 2xz - 2yz\\)",
    solutionSteps: [
      {
        explanation: "For the trinomial square (A + B + C)², use A² + B² + C² + 2AB + 2AC + 2BC where A = x, B = y, C = -z.",
        workingOut: "\\((x + y - z)^2 = x^2 + y^2 + z^2 + 2(x)(y) + 2(x)(-z) + 2(y)(-z)\\)",
        graphData: null
      },
      {
        explanation: "Calculate the squared terms: x² = x², y² = y², (-z)² = z².",
        workingOut: "\\(= x^2 + y^2 + z^2 + 2xy - 2xz - 2yz\\)",
        graphData: null
      },
      {
        explanation: "All like terms are combined and the expansion is complete.",
        workingOut: "\\(x^2 + y^2 + z^2 + 2xy - 2xz - 2yz\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "cf3aa66ab87a2e8f8e12c0e69cad355f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand: \\(2(x + 3y)\\)",
    options: [
      {
        text: "\\(2x-6y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x+6y\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4x+8y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "",
    solution: "\\(2x + 6y\\)",
    solutionSteps: [
      {
        explanation: "Distribute the coefficient 2 to each term in the parentheses.",
        workingOut: "\\(2(x + 3y) = 2 \\cdot x + 2 \\cdot 3y\\)",
        graphData: null
      },
      {
        explanation: "Multiply each term: 2 × x = 2x and 2 × 3y = 6y.",
        workingOut: "\\(= 2x + 6y\\)",
        graphData: null
      },
      {
        explanation: "The expansion is complete.",
        workingOut: "\\(2x + 6y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d56435de23d30297015954c609a9f8f1",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((t^2 + 4t + 16)(t^2 - 4t + 16)\\)",
    options: [
      {
        text: "\\(t^4 + 16t^2 + 256\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 16t^2 + 256\\)",
        imageUrl: ""
      },
      {
        text: "\\(t^4 - 16t^2 - 256\\)",
        imageUrl: ""
      },
      {
        text: "\\(t^4 + 32t^2 + 256\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\(t^4 + 16t^2 + 256\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as the form (A + B)(A - B) = A² - B² where A = t² + 16 and B = 4t.",
        workingOut: "\\((t^2 + 4t + 16)(t^2 - 4t + 16) = ((t^2 + 16) + 4t)((t^2 + 16) - 4t)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares: (A + B)(A - B) = A² - B² with A = t² + 16 and B = 4t.",
        workingOut: "\\(= (t^2 + 16)^2 - (4t)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (t² + 16)² = t⁴ + 32t² + 256 and (4t)² = 16t².",
        workingOut: "\\(= t^4 + 32t^2 + 256 - 16t^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 32t² - 16t² = 16t².",
        workingOut: "\\(= t^4 + 16t^2 + 256\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d58d04a4591143b86d87081cfde11bf5",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((8a + 3b)^2\\)",
    options: [
      {
        text: "\\(64a^2 + 24ab + 9b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16a^2 + 48ab + 6b^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64a^2 + 48ab + 9b^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(64a^2 + 9b^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(64a^2 + 48ab + 9b^2\\)",
    solutionSteps: [
      {
        explanation: "Apply the binomial square formula (A + B)² = A² + 2AB + B² where A = 8a and B = 3b.",
        workingOut: "\\((8a + 3b)^2 = (8a)^2 + 2(8a)(3b) + (3b)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the first term: (8a)² = 64a².",
        workingOut: "\\(= 64a^2 + 2(8a)(3b) + (3b)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the middle cross term: 2(8a)(3b) = 48ab.",
        workingOut: "\\(= 64a^2 + 48ab + (3b)^2\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the last term: (3b)² = 9b². Combine all terms.",
        workingOut: "\\(= 64a^2 + 48ab + 9b^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d71ea15ba82ccd89451822f800660528",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((4u - 5)^2\\)",
    options: [
      {
        text: "\\(16u^2 - 40u - 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16u^2 - 20u + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16u^2 + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16u^2 - 40u + 25\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Square the first, twice the product, square the last.",
    solution: "\\(64a^2 + 48ab + 9b^2\\)",
    solutionSteps: [
      {
        explanation: "Use the binomial square formula (A + B)² = A² + 2AB + B² where A = 8a and B = 3b.",
        workingOut: "\\((8a + 3b)^2 = (8a)^2 + 2(8a)(3b) + (3b)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: (8a)² = 64a², 2(8a)(3b) = 48ab, (3b)² = 9b².",
        workingOut: "\\(= 64a^2 + 48ab + 9b^2\\)",
        graphData: null
      },
      {
        explanation: "The binomial square expansion is complete.",
        workingOut: "\\(64a^2 + 48ab + 9b^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d77d2e081d1cd73f9f9c2f5c644619b1",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((y^2 + 2y + 4)(y^2 - 2y + 4)\\)",
    options: [
      {
        text: "\\(y^4 + 4y^2 + 16\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^4 + 8y^2 + 16\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 4y^2 + 16\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^4 - 4y^2 - 16\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\(y^4 + 4y^2 + 16\\)",
    solutionSteps: [
      {
        explanation: "Recognize the pattern (A + B)(A - B) = A² - B² where A = y² + 4 and B = 2y.",
        workingOut: "\\((y^2 + 2y + 4)(y^2 - 2y + 4) = ((y^2 + 4) + 2y)((y^2 + 4) - 2y)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares: (y² + 4)² - (2y)².",
        workingOut: "\\(= (y^2 + 4)^2 - (2y)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (y² + 4)² = y⁴ + 8y² + 16 and (2y)² = 4y².",
        workingOut: "\\(= y^4 + 8y^2 + 16 - 4y^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 8y² - 4y² = 4y².",
        workingOut: "\\(= y^4 + 4y^2 + 16\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d88c5b48aee9daeef75738a4deb8ff22",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((3u - v)(9u^2 + 3uv + v^2)\\)",
    options: [
      {
        text: "\\(27u^3 - v^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(27u^3 + v^3\\)",
        imageUrl: ""
      },
      {
        text: "\\(3u^2 - v^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(27u^3 - 33uv - v^3\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Recognise the sum or difference of cubes identity: \\((A \\pm B)(A^2 \\mp AB + B^2) = A^3 \\pm B^3\\)",
    solution: "\\(27u^3 - v^3\\)",
    solutionSteps: [
      {
        explanation: "Recognize the difference of cubes identity (A - B)(A² + AB + B²) = A³ - B³ where A = 3u and B = v.",
        workingOut: "\\((3u - v)(9u^2 + 3uv + v^2) = ((3u) - v)((3u)^2 + (3u)(v) + v^2)\\)",
        graphData: null
      },
      {
        explanation: "Verify the second factor matches the pattern: (3u)² = 9u², (3u)(v) = 3uv, v² = v².",
        workingOut: "\\(= (3u)^3 - v^3\\)",
        graphData: null
      },
      {
        explanation: "Calculate the cubes: (3u)³ = 27u³ and v³ = v³.",
        workingOut: "\\(= 27u^3 - v^3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d8e0ccd8678f49e677fe74a04044afd8",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand: \\((i + 13)^2\\)",
    options: [
      {
        text: "\\(i^2+169\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(i^2+13i+169\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(i^2+26i+26\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(i^2+26i+169\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "\\(i^2 + 26i + 169\\)",
    solutionSteps: [
      {
        explanation: "Use the binomial square formula (A + B)² = A² + 2AB + B² where A = i and B = 13.",
        workingOut: "\\((i + 13)^2 = i^2 + 2(i)(13) + 13^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: i² = i², 2(i)(13) = 26i, 13² = 169.",
        workingOut: "\\(= i^2 + 26i + 169\\)",
        graphData: null
      },
      {
        explanation: "The binomial square expansion is complete.",
        workingOut: "\\(i^2 + 26i + 169\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "d95106501963f53befad825c74aae4eb",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 90,
    question: "Evaluate using algebraic expansion: \\(1.003^2\\)",
    options: [
      {
        text: "\\(1.006\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1.009\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1.0006\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1.006009\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Express the number as \\((B \\pm d)^2\\) where B is a round base, then apply the perfect square identity.",
    solution: "\\(1.003^2 = 1.006009\\)",
    solutionSteps: [
      {
        explanation: "Write 1.003 as 1 + 0.003. Use the binomial square formula (A + B)² = A² + 2AB + B² where A = 1 and B = 0.003.",
        workingOut: "\\(1.003^2 = (1 + 0.003)^2 = 1^2 + 2(1)(0.003) + (0.003)^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate each term: 1² = 1, 2(1)(0.003) = 0.006, (0.003)² = 0.000009.",
        workingOut: "\\(= 1 + 0.006 + 0.000009\\)",
        graphData: null
      },
      {
        explanation: "Add the terms together.",
        workingOut: "\\(= 1.006009\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e365e257490ef1db888687e68cb34719",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((k^2 + k + 2)(k^2 - k + 2)\\)",
    options: [
      {
        text: "\\(k^4 - 3k^2 - 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(k^4 + 3k^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(k^4 + 4k^2 + 4\\)",
        imageUrl: ""
      },
      {
        text: "\\(x^2 + 3k^2 + 4\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\(k^4 + 3k^2 + 4\\)",
    solutionSteps: [
      {
        explanation: "Recognize this as the form (A + B)(A - B) = A² - B² where A = k² + 2 and B = k.",
        workingOut: "\\((k^2 + k + 2)(k^2 - k + 2) = ((k^2 + 2) + k)((k^2 + 2) - k)\\)",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares: (k² + 2)² - k².",
        workingOut: "\\(= (k^2 + 2)^2 - k^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (k² + 2)²: (k²)² + 2(k²)(2) + 2² = k⁴ + 4k² + 4.",
        workingOut: "\\(= k^4 + 4k^2 + 4 - k^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 4k² - k² = 3k².",
        workingOut: "\\(= k^4 + 3k^2 + 4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e3ebf1ce9443eabd71617c0500f30ec4",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((x - 3)(x + 1)\\)",
    options: [
      {
        text: "\\(x^2 + 2x - 3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 4x - 3\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 - 2x - 3\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^2 - 3\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(x^2 - 2x - 3\\)",
    solutionSteps: [
      {
        explanation: "Use the FOIL method (First, Outer, Inner, Last) to expand (x - 3)(x + 1).",
        workingOut: "\\((x - 3)(x + 1) = x \\cdot x + x \\cdot 1 + (-3) \\cdot x + (-3) \\cdot 1\\)",
        graphData: null
      },
      {
        explanation: "Calculate each product: x², x, -3x, -3.",
        workingOut: "\\(= x^2 + x - 3x - 3\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: x - 3x = -2x.",
        workingOut: "\\(= x^2 - 2x - 3\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e4090d21948122be1bbba8562ef7acd7",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand: \\(5(a - 2)\\)",
    options: [
      {
        text: "\\(5a-2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(5a+10\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(5a-10\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(a-10\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(5a - 10\\)",
    solutionSteps: [
      {
        explanation: "Distribute the coefficient 5 to each term in the parentheses.",
        workingOut: "\\(5(a - 2) = 5 \\cdot a + 5 \\cdot (-2)\\)",
        graphData: null
      },
      {
        explanation: "Multiply: 5 × a = 5a and 5 × (-2) = -10.",
        workingOut: "\\(= 5a - 10\\)",
        graphData: null
      },
      {
        explanation: "The distribution is complete.",
        workingOut: "\\(5a - 10\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e54335b0e14819294690237705b908ed",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "-(2x - 3y) - (3x + 2y)",
    options: [
      {
        text: "\\(-7x + y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-5x - y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(+5x + y\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-5x + y\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "Distribute the negative sign to both terms in each bracket.",
    solution: "\\(-5x + y\\)",
    solutionSteps: [
      {
        explanation: "Distribute the negative sign to each term in the first parentheses: -(2x - 3y) becomes -2x + 3y.",
        workingOut: "\\(-(2x - 3y) - (3x + 2y) = -2x + 3y - 3x - 2y\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: the x terms are -2x - 3x = -5x, and the y terms are 3y - 2y = y.",
        workingOut: "\\(= -5x + y\\)",
        graphData: null
      },
      {
        explanation: "The simplified expression is complete.",
        workingOut: "\\(-5x + y\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e76bac8db2c7d29ac7dfb28070a15681",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((y + 3)(y + 2)\\)",
    options: [
      {
        text: "\\(y^2 + 5y + 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2 + 6y + 5\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(y^2 + 5y + 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(y^2 + 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "\\(y^2 + 5y + 6\\)",
    solutionSteps: [
      {
        explanation: "Use FOIL to expand (y + 3)(y + 2).",
        workingOut: "\\((y + 3)(y + 2) = y \\cdot y + y \\cdot 2 + 3 \\cdot y + 3 \\cdot 2\\)",
        graphData: null
      },
      {
        explanation: "Calculate: y², 2y, 3y, 6.",
        workingOut: "\\(= y^2 + 2y + 3y + 6\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 2y + 3y = 5y.",
        workingOut: "\\(= y^2 + 5y + 6\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e77a551ce169321aab44d54da80b29f0",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((2a^2 + \\frac{3}{a^2})^2\\)",
    options: [
      {
        text: "\\(4a^4  + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^4  - 12 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4a^4 + 6 + \\frac{9}{a^4}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(4a^4 + 12 + \\frac{9}{a^4}\\)",
    solutionSteps: [
      {
        explanation: "Use the binomial square formula (A + B)² = A² + 2AB + B² where A = 2a² and B = 3/a².",
        workingOut: "\\((2a^2 + \\frac{3}{a^2})^2 = (2a^2)^2 + 2(2a^2)(\\frac{3}{a^2}) + (\\frac{3}{a^2})^2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the terms: (2a²)² = 4a⁴, 2(2a²)(3/a²) = 12, (3/a²)² = 9/a⁴.",
        workingOut: "\\(= 4a^4 + 2 \\cdot 2a^2 \\cdot \\frac{3}{a^2} + \\frac{9}{a^4}\\)",
        graphData: null
      },
      {
        explanation: "Simplify: 2 × 2a² × (3/a²) = 12.",
        workingOut: "\\(= 4a^4 + 12 + \\frac{9}{a^4}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "e9292b02a25adc1cc5a2bac50acfc49f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "7(a - 3b) - 5(2a - 4b)",
    options: [
      {
        text: "\\(-3a+b\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3a - b\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(3a-b\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-3a-41b\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Careful with the negative sign when distributing the -5.",
    solution: "\\(-3a - b\\)",
    solutionSteps: [
      {
        explanation: "Distribute 7 to the first parentheses: 7(a - 3b) = 7a - 21b.",
        workingOut: "\\(7(a - 3b) - 5(2a - 4b) = 7a - 21b - 5(2a - 4b)\\)",
        graphData: null
      },
      {
        explanation: "Distribute -5 to the second parentheses: -5(2a - 4b) = -10a + 20b.",
        workingOut: "\\(= 7a - 21b - 10a + 20b\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 7a - 10a = -3a and -21b + 20b = -b.",
        workingOut: "\\(= -3a - b\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ea05ffbc962a5e3def2b1b1984802b90",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 30,
    question: "Expand and simplify: \\(2a + 4 + 3(a - 1)\\)",
    options: [
      {
        text: "\\(5a + 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(5a+7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(5a-1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(6a+1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "\\(5a + 1\\)",
    solutionSteps: [
      {
        explanation: "Distribute 3 to the terms in the parentheses: 3(a - 1) = 3a - 3.",
        workingOut: "\\(2a + 4 + 3(a - 1) = 2a + 4 + 3a - 3\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms: 2a + 3a = 5a and 4 - 3 = 1.",
        workingOut: "\\(= 5a + 1\\)",
        graphData: null
      },
      {
        explanation: "The simplified expression is complete.",
        workingOut: "\\(5a + 1\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ea630096c7f3b14e1a75fc3b439cdd5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand and simplify: \\(7 - (x + 2)\\)",
    options: [
      {
        text: "\\(5 - x\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(5 + x\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(7 - x\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(5 - x\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we need to distribute k to each term in the brackets.",
        workingOut: "k(A ± B)",
        graphData: null
      },
      {
        explanation: "Apply the distributive property: multiply k by each term.",
        workingOut: "= k × A − k × B",
        graphData: null
      },
      {
        explanation: "Perform the multiplications.",
        workingOut: "\\(5 - x\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified result.",
        workingOut: "= \\(5 - x\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "eaa38edeb109ec40aac306929337583f",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2x + y + z)^2\\)",
    options: [
      {
        text: "\\(4x^2 + y^2 + z^2\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 + y^2 + z^2 + 2xy + yz + 2zx\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - y^2 + z^2 - 4xy + 2yz - 4zx\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((2x + y + z)^2 = 4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A + B)². Here, A = (2x and B = y.",
        workingOut: "(A + B)² = A² + 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((2x + y)² = ((2x)² + 2((2x)(y) + (y)²",
        workingOut: "= ((2x)² + 2((2x)(y) + (y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 4x^2 + y^2 + z^2 + 2(2x)(+y) + 2(+y)(+z) + 2(+z)(2x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(4x^2 + y^2 + z^2 + 4xy + 2yz + 4zx\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "eacab14cc2e044edfae21a9e74d617eb",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)\\)",
    options: [
      {
        text: "\\(x^2 + 4b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 - 4b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 + 4b^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(a^4 + 4a^2b^2 + 4b^4\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Regroup terms to use the difference of squares identity: \\((A + B)(A - B) = A^2 - B^2\\). For example, group as \\(((x^2 + 1) + x)((x^2 + 1) - x)\\).",
    solution: "\\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2) = a^4 + 4b^4\\)",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (a^2 + 2b^2)^2 - (2ab)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= a^4 + 4b^4\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(a^4 + 4b^4\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ed2df844ef9b8038d96970c0822341ed",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand: \\((2u - v + 4w)^2\\)",
    options: [
      {
        text: "\\(4u^2 + v^2 + 16w^2 - 4uv + 8vw + 16wu\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4u^2 - v^2 + 16w^2 - 4uv + 8vw - 16wu\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4u^2 + v^2 + 16w^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    blanks: [],
    hint: "Use the trinomial square identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\). Be careful with negative signs.",
    solution: "\\((2u - v + 4w)^2 = 4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (2u and B = v.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((2u - v)² = ((2u)² - 2((2u)(v) + (v)²",
        workingOut: "= ((2u)² - 2((2u)(v) + (v)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 4u^2 + v^2 + 16w^2 + 2(2u)(-v) + 2(-v)(+4w) + 2(+4w)(2u)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(4u^2 + v^2 + 16w^2 - 4uv - 8vw + 16wu\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "ef9c2b627672ac450202d14033a6cd7b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2)(x + 5)\\)",
    options: [
      {
        text: "\\(x^2 + 7x + 7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 10x + 7\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 7x + 10\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x + 7\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "",
    solution: "1. \\(x^2 + 7x + 10\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we need to multiply two binomials, (factor1)(factor2). Use the distributive property (FOIL method): multiply each term of the first bracket by each term of the second.",
        workingOut: "(factor1)(factor2)",
        graphData: null
      },
      {
        explanation: "Perform the four multiplications: First terms, Outer terms, Inner terms, Last terms.",
        workingOut: "= [first term] × [first term] + [first term] × [second term] + [second term] × [first term] + [second term] × [second term]",
        graphData: null
      },
      {
        explanation: "Compute the products and combine any like terms.",
        workingOut: "\\(x^2 + 7x + 10\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified result.",
        workingOut: "= \\(x^2 + 7x + 10\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "f1e5b02aa7fc26ae9cbf63140f404f2b",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((y^3 + \\frac{1}{y^3})^2\\)",
    options: [
      {
        text: "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^6  + \\frac{1}{y^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^6  - 2 + \\frac{1}{y^6}\\)",
        imageUrl: ""
      },
      {
        text: "\\(y^6 + 1 + \\frac{1}{y^6}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    blanks: [],
    hint: "Apply the perfect square expansion formula: \\((A \\pm B)^2 = A^2 \\pm 2AB + B^2\\). Note that the product of reciprocal terms simplifies to a constant.",
    solution: "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
    solutionSteps: [
      {
        explanation: "Identify this as a perfect square binomial with A = y^3 and B = \\frac{1}{y^3}, and apply the identity (A+B)^2 = A^2 + 2AB + B^2.",
        workingOut: "\\(\\left(y^3 + \\frac{1}{y^3}\\right)^2 = (y^3)^2 + 2(y^3)(\\frac{1}{y^3}) + (\\frac{1}{y^3})^2\\)",
        graphData: null
      },
      {
        explanation: "Square the first term: (y^3)^2.",
        workingOut: "\\((y^3)^2 = y^6\\)",
        graphData: null
      },
      {
        explanation: "Compute the middle term: 2 × y^3 × \\frac{1}{y^3} — the variable part cancels, leaving a constant.",
        workingOut: "\\(2(y^3)\\left(\\frac{1}{y^3}\\right) = 2\\)",
        graphData: null
      },
      {
        explanation: "Square the last term: (\\frac{1}{y^3})^2.",
        workingOut: "\\(\\left(\\frac{1}{y^3}\\right)^2 = \\frac{1}{y^6}\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms into the final simplified expression.",
        workingOut: "\\(y^6 + 2 + \\frac{1}{y^6}\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "fb199bfa88eddded10d740e126ee43c5",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((4x - 3)(3x - 2)\\)",
    options: [
      {
        text: "\\(12x^2 + 17x + 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(7x^2 - 17x + 6\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(12x^2 - 17x + 6\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(12x^2 - 17x - 6\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use FOIL.",
    solution: "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we need to multiply two binomials, (factor1)(factor2). Use the distributive property (FOIL method): multiply each term of the first bracket by each term of the second.",
        workingOut: "(factor1)(factor2)",
        graphData: null
      },
      {
        explanation: "Perform the four multiplications: First terms, Outer terms, Inner terms, Last terms.",
        workingOut: "= [first term] × [first term] + [first term] × [second term] + [second term] × [first term] + [second term] × [second term]",
        graphData: null
      },
      {
        explanation: "Compute the products and combine any like terms.",
        workingOut: "\\(12x^2 - 8x - 9x + 6 = 12x^2 - 17x + 6\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified result.",
        workingOut: "= \\(12x^2 - 17x + 6\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "fbe5343b63e5f1ed835ed1468d3c5374",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 120,
    question: "\\((2r + 5)^2\\)",
    options: [
      {
        text: "\\(4r^2 + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2r^2 + 20r + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4r^2 + 20r + 25\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4r^2 + 10r + 25\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    blanks: [],
    hint: "Use $(a+b)^2 = a^2 + 2ab + b^2$.",
    solution: "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A + B)². Here, A = (2r and B = 5.",
        workingOut: "(A + B)² = A² + 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((2r + 5)² = ((2r)² + 2((2r)(5) + (5)²",
        workingOut: "= ((2r)² + 2((2r)(5) + (5)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\((2r)^2 + 2(2r)(5) + 5^2 = 4r^2 + 20r + 25\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(4r^2 + 20r + 25\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "fda842019b9441b6e26f00de6b25a577",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    question: "Expand and simplify: \\((x + 2)(x - 2)(x + 3)\\)",
    options: [
      {
        text: "\\(x^3 - 3x^2 + 4x + 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^2 + 3x^2 - 4x - 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 - 12\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^3 + 3x^2 - 4x - 12\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "First expand the product of the first two brackets, then multiply the resulting quadratic by the third bracket.",
    solution: "\\((x + 2)(x - 2)(x + 3) = x^3 + 3x^2 - 4x - 12\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we need to multiply two binomials, (factor1)(factor2). Use the distributive property (FOIL method): multiply each term of the first bracket by each term of the second.",
        workingOut: "(factor1)(factor2)",
        graphData: null
      },
      {
        explanation: "Perform the four multiplications: First terms, Outer terms, Inner terms, Last terms.",
        workingOut: "= [first term] × [first term] + [first term] × [second term] + [second term] × [first term] + [second term] × [second term]",
        graphData: null
      },
      {
        explanation: "Compute the products and combine any like terms.",
        workingOut: "\\((x^2  4)(x + 3) = x(x^2  4) + 3(x^2  4)\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified result.",
        workingOut: "= \\(x^3 + 3x^2 - 4x - 12\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "feca23651598484bfc36393ea96d936d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand: \\(k(x - 5)\\)",
    options: [
      {
        text: "Alternative D",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(kx-7k\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(kx+5k\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(kx-5k\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    blanks: [],
    hint: "",
    solution: "1. \\(kx - 5k\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: we need to distribute k to each term in the brackets.",
        workingOut: "k(A ± B)",
        graphData: null
      },
      {
        explanation: "Apply the distributive property: multiply k by each term.",
        workingOut: "= k × A − k × B",
        graphData: null
      },
      {
        explanation: "Perform the multiplications.",
        workingOut: "\\(kx-5k\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified result.",
        workingOut: "= \\(kx-5k\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "fed13b15a7557fe63eaf8ddf308448cc",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 30,
    question: "Expand: \\((A - B)^2\\)",
    options: [
      {
        text: "\\(A^2 - 2AB + B^2\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(A^2 - B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 + 2AB + B^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(A^2 - 2AB - B^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    blanks: [],
    hint: "",
    solution: "1. \\(A^2 - 2AB + B^2\\)",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (A and B = B.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((A - B)² = ((A)² - 2((A)(B) + (B)²",
        workingOut: "= ((A)² - 2((A)(B) + (B)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(A^2 - 2AB + B^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(A^2 - 2AB + B^2\\)",
        graphData: null
      }
    ],
    graphData: null,
    requiresManualGrading: false
  },
  {
    id: "y11-1a-high-q1",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((2x - 1y + 11z)^2\\)",
    options: [
      {
        text: "\\(4x^2 + 1y^2 + 121z^2 + 4xy + 22yz + 44xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^2 + 1y^2 + 121z^2 - 4xy - 22yz + 44xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4x^2 + 1y^2 + 121z^2 - 4xy + 22yz - 44xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^2 - 1y^2 + 121z^2 - 4xy - 22yz + 44xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (2x and B = 1y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((2x - 1y)² = ((2x)² - 2((2x)(1y) + (1y)²",
        workingOut: "= ((2x)² - 2((2x)(1y) + (1y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 4x^2 + 1y^2 + 121z^2 + 2(2x)(-1y) + 2(-1y)(11z) + 2(11z)(2x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(4x^2 + 1y^2 + 121z^2 - 4xy - 22yz + 44xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q2",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((3x - 2y + 10z)^2\\)",
    options: [
      {
        text: "\\(9x^2 + 4y^2 + 100z^2 - 12xy - 40yz + 60xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(9x^2 + 4y^2 + 100z^2 + 12xy + 40yz + 60xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 + 4y^2 + 100z^2 - 12xy + 40yz - 60xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^2 - 4y^2 + 100z^2 - 12xy - 40yz + 60xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (3x and B = 2y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((3x - 2y)² = ((3x)² - 2((3x)(2y) + (2y)²",
        workingOut: "= ((3x)² - 2((3x)(2y) + (2y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 9x^2 + 4y^2 + 100z^2 + 2(3x)(-2y) + 2(-2y)(10z) + 2(10z)(3x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(9x^2 + 4y^2 + 100z^2 - 12xy - 40yz + 60xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q3",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((4x - 3y + 9z)^2\\)",
    options: [
      {
        text: "\\(16x^2 + 9y^2 + 81z^2 - 24xy - 54yz + 72xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(16x^2 + 9y^2 + 81z^2 - 24xy + 54yz - 72xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16x^2 + 9y^2 + 81z^2 + 24xy + 54yz + 72xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16x^2 - 9y^2 + 81z^2 - 24xy - 54yz + 72xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (4x and B = 3y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((4x - 3y)² = ((4x)² - 2((4x)(3y) + (3y)²",
        workingOut: "= ((4x)² - 2((4x)(3y) + (3y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 16x^2 + 9y^2 + 81z^2 + 2(4x)(-3y) + 2(-3y)(9z) + 2(9z)(4x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(16x^2 + 9y^2 + 81z^2 - 24xy - 54yz + 72xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q4",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((5x - 4y + 8z)^2\\)",
    options: [
      {
        text: "\\(25x^2 + 16y^2 + 64z^2 - 40xy - 64yz + 80xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(25x^2 + 16y^2 + 64z^2 - 40xy + 64yz - 80xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^2 + 16y^2 + 64z^2 + 40xy + 64yz + 80xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^2 - 16y^2 + 64z^2 - 40xy - 64yz + 80xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (5x and B = 4y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((5x - 4y)² = ((5x)² - 2((5x)(4y) + (4y)²",
        workingOut: "= ((5x)² - 2((5x)(4y) + (4y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 25x^2 + 16y^2 + 64z^2 + 2(5x)(-4y) + 2(-4y)(8z) + 2(8z)(5x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(25x^2 + 16y^2 + 64z^2 - 40xy - 64yz + 80xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q5",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((6x - 5y + 7z)^2\\)",
    options: [
      {
        text: "\\(36x^2 + 25y^2 + 49z^2 + 60xy + 70yz + 84xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^2 + 25y^2 + 49z^2 - 60xy - 70yz + 84xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(36x^2 + 25y^2 + 49z^2 - 60xy + 70yz - 84xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^2 - 25y^2 + 49z^2 - 60xy - 70yz + 84xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (6x and B = 5y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((6x - 5y)² = ((6x)² - 2((6x)(5y) + (5y)²",
        workingOut: "= ((6x)² - 2((6x)(5y) + (5y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 36x^2 + 25y^2 + 49z^2 + 2(6x)(-5y) + 2(-5y)(7z) + 2(7z)(6x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(36x^2 + 25y^2 + 49z^2 - 60xy - 70yz + 84xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q6",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((7x - 6y + 6z)^2\\)",
    options: [
      {
        text: "\\(49x^2 + 36y^2 + 36z^2 - 84xy + 72yz - 84xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(49x^2 + 36y^2 + 36z^2 - 84xy - 72yz + 84xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(49x^2 + 36y^2 + 36z^2 + 84xy + 72yz + 84xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(49x^2 - 36y^2 + 36z^2 - 84xy - 72yz + 84xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (7x and B = 6y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((7x - 6y)² = ((7x)² - 2((7x)(6y) + (6y)²",
        workingOut: "= ((7x)² - 2((7x)(6y) + (6y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 49x^2 + 36y^2 + 36z^2 + 2(7x)(-6y) + 2(-6y)(6z) + 2(6z)(7x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(49x^2 + 36y^2 + 36z^2 - 84xy - 72yz + 84xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q7",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((8x - 7y + 5z)^2\\)",
    options: [
      {
        text: "\\(64x^2 + 49y^2 + 25z^2 - 112xy + 70yz - 80xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64x^2 - 49y^2 + 25z^2 - 112xy - 70yz + 80xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64x^2 + 49y^2 + 25z^2 - 112xy - 70yz + 80xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(64x^2 + 49y^2 + 25z^2 + 112xy + 70yz + 80xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (8x and B = 7y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((8x - 7y)² = ((8x)² - 2((8x)(7y) + (7y)²",
        workingOut: "= ((8x)² - 2((8x)(7y) + (7y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 64x^2 + 49y^2 + 25z^2 + 2(8x)(-7y) + 2(-7y)(5z) + 2(5z)(8x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(64x^2 + 49y^2 + 25z^2 - 112xy - 70yz + 80xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q8",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((9x - 8y + 4z)^2\\)",
    options: [
      {
        text: "\\(81x^2 + 64y^2 + 16z^2 + 144xy + 64yz + 72xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81x^2 - 64y^2 + 16z^2 - 144xy - 64yz + 72xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81x^2 + 64y^2 + 16z^2 - 144xy - 64yz + 72xz\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(81x^2 + 64y^2 + 16z^2 - 144xy + 64yz - 72xz\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (9x and B = 8y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((9x - 8y)² = ((9x)² - 2((9x)(8y) + (8y)²",
        workingOut: "= ((9x)² - 2((9x)(8y) + (8y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 81x^2 + 64y^2 + 16z^2 + 2(9x)(-8y) + 2(-8y)(4z) + 2(4z)(9x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(81x^2 + 64y^2 + 16z^2 - 144xy - 64yz + 72xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q9",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((10x - 9y + 3z)^2\\)",
    options: [
      {
        text: "\\(100x^2 - 81y^2 + 9z^2 - 180xy - 54yz + 60xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100x^2 + 81y^2 + 9z^2 + 180xy + 54yz + 60xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100x^2 + 81y^2 + 9z^2 - 180xy + 54yz - 60xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100x^2 + 81y^2 + 9z^2 - 180xy - 54yz + 60xz\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (10x and B = 9y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((10x - 9y)² = ((10x)² - 2((10x)(9y) + (9y)²",
        workingOut: "= ((10x)² - 2((10x)(9y) + (9y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 100x^2 + 81y^2 + 9z^2 + 2(10x)(-9y) + 2(-9y)(3z) + 2(3z)(10x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(100x^2 + 81y^2 + 9z^2 - 180xy - 54yz + 60xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q10",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the trinomial square: \\((11x - 10y + 2z)^2\\)",
    options: [
      {
        text: "\\(121x^2 + 100y^2 + 4z^2 - 220xy + 40yz - 44xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(121x^2 - 100y^2 + 4z^2 - 220xy - 40yz + 44xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(121x^2 + 100y^2 + 4z^2 + 220xy + 40yz + 44xz\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(121x^2 + 100y^2 + 4z^2 - 220xy - 40yz + 44xz\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a perfect square binomial of the form (A - B)². Here, A = (11x and B = 10y.",
        workingOut: "(A - B)² = A² - 2AB + B²",
        graphData: null
      },
      {
        explanation: "Apply the perfect square identity. For our specific terms, we get: ((11x - 10y)² = ((11x)² - 2((11x)(10y) + (10y)²",
        workingOut: "= ((11x)² - 2((11x)(10y) + (10y)²",
        graphData: null
      },
      {
        explanation: "Calculate each power and product. Compute the square of the first term, twice the product of both terms, and the square of the second term.",
        workingOut: "\\(= 121x^2 + 100y^2 + 4z^2 + 2(11x)(-10y) + 2(-10y)(2z) + 2(2z)(11x)\\)",
        graphData: null
      },
      {
        explanation: "Simplify all coefficients and combine any like terms to reach the final expanded form.",
        workingOut: "= \\(121x^2 + 100y^2 + 4z^2 - 220xy - 40yz + 44xz\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q11",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(2x^{2} - \\frac{1}{x^{2}}\\right)^3\\)",
    options: [
      {
        text: "\\(8x^{6} -12x^{2} - \\frac{6}{x^{2}} -\\frac{1}{x^{6}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^{6} - 12x^{2} + \\frac{6}{x^{2}} - \\frac{1}{x^{6}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^{6} + 12x^{2} + \\frac{6}{x^{2}} + \\frac{1}{x^{6}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^{6} -12x^{2} + \\frac{6}{x^{2}} -\\frac{1}{x^{6}}\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(2x^{2} and B = \\frac{1}{x^{2}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(2x^{2} - \\frac{1}{x^{2}}\\right)³ = (\\left(2x^{2})³ - 3(\\left(2x^{2})²(\\frac{1}{x^{2}}\\right) + 3(\\left(2x^{2})(\\frac{1}{x^{2}}\\right)² - (\\frac{1}{x^{2}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(2x^{2} - \\frac{1}{x^{2}}\\right)^3 = (2x^{2})^3 - 3(2x^{2})^2\\left(\\frac{1}{x^{2}}\\right) + 3(2x^{2})\\left(\\frac{1}{x^{2}}\\right)^2 - \\left(\\frac{1}{x^{2}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 8x^{6} -12x^{2} + \\frac{6}{x^{2}} -\\frac{1}{x^{6}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(8x^{6} -12x^{2} + \\frac{6}{x^{2}} -\\frac{1}{x^{6}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q12",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(3x^{3} - \\frac{2}{x^{3}}\\right)^3\\)",
    options: [
      {
        text: "\\(27x^{9} -54x^{3} + \\frac{36}{x^{3}} -\\frac{8}{x^{9}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^{9} -54x^{3} - \\frac{36}{x^{3}} -\\frac{8}{x^{9}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^{9} + 54x^{3} + \\frac{36}{x^{3}} + \\frac{8}{x^{9}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^{9} - 54x^{3} + \\frac{36}{x^{3}} - \\frac{8}{x^{9}}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(3x^{3} and B = \\frac{2}{x^{3}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(3x^{3} - \\frac{2}{x^{3}}\\right)³ = (\\left(3x^{3})³ - 3(\\left(3x^{3})²(\\frac{2}{x^{3}}\\right) + 3(\\left(3x^{3})(\\frac{2}{x^{3}}\\right)² - (\\frac{2}{x^{3}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(3x^{3} - \\frac{2}{x^{3}}\\right)^3 = (3x^{3})^3 - 3(3x^{3})^2\\left(\\frac{2}{x^{3}}\\right) + 3(3x^{3})\\left(\\frac{2}{x^{3}}\\right)^2 - \\left(\\frac{2}{x^{3}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 27x^{9} -54x^{3} + \\frac{36}{x^{3}} -\\frac{8}{x^{9}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(27x^{9} -54x^{3} + \\frac{36}{x^{3}} -\\frac{8}{x^{9}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q13",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(4x^{4} - \\frac{3}{x^{4}}\\right)^3\\)",
    options: [
      {
        text: "\\(64x^{12} -144x^{4} - \\frac{108}{x^{4}} -\\frac{27}{x^{12}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^{12} -144x^{4} + \\frac{108}{x^{4}} -\\frac{27}{x^{12}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^{12} - 144x^{4} + \\frac{108}{x^{4}} - \\frac{27}{x^{12}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^{12} + 144x^{4} + \\frac{108}{x^{4}} + \\frac{27}{x^{12}}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(4x^{4} and B = \\frac{3}{x^{4}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(4x^{4} - \\frac{3}{x^{4}}\\right)³ = (\\left(4x^{4})³ - 3(\\left(4x^{4})²(\\frac{3}{x^{4}}\\right) + 3(\\left(4x^{4})(\\frac{3}{x^{4}}\\right)² - (\\frac{3}{x^{4}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(4x^{4} - \\frac{3}{x^{4}}\\right)^3 = (4x^{4})^3 - 3(4x^{4})^2\\left(\\frac{3}{x^{4}}\\right) + 3(4x^{4})\\left(\\frac{3}{x^{4}}\\right)^2 - \\left(\\frac{3}{x^{4}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 64x^{12} -144x^{4} + \\frac{108}{x^{4}} -\\frac{27}{x^{12}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(64x^{12} -144x^{4} + \\frac{108}{x^{4}} -\\frac{27}{x^{12}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q14",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(5x^{5} - \\frac{4}{x^{5}}\\right)^3\\)",
    options: [
      {
        text: "\\(125x^{15} + 300x^{5} + \\frac{240}{x^{5}} + \\frac{64}{x^{15}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(125x^{15} - 300x^{5} + \\frac{240}{x^{5}} - \\frac{64}{x^{15}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(125x^{15} -300x^{5} - \\frac{240}{x^{5}} -\\frac{64}{x^{15}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(125x^{15} -300x^{5} + \\frac{240}{x^{5}} -\\frac{64}{x^{15}}\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(5x^{5} and B = \\frac{4}{x^{5}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(5x^{5} - \\frac{4}{x^{5}}\\right)³ = (\\left(5x^{5})³ - 3(\\left(5x^{5})²(\\frac{4}{x^{5}}\\right) + 3(\\left(5x^{5})(\\frac{4}{x^{5}}\\right)² - (\\frac{4}{x^{5}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(5x^{5} - \\frac{4}{x^{5}}\\right)^3 = (5x^{5})^3 - 3(5x^{5})^2\\left(\\frac{4}{x^{5}}\\right) + 3(5x^{5})\\left(\\frac{4}{x^{5}}\\right)^2 - \\left(\\frac{4}{x^{5}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 125x^{15} -300x^{5} + \\frac{240}{x^{5}} -\\frac{64}{x^{15}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(125x^{15} -300x^{5} + \\frac{240}{x^{5}} -\\frac{64}{x^{15}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q15",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(6x^{6} - \\frac{5}{x^{6}}\\right)^3\\)",
    options: [
      {
        text: "\\(216x^{18} -540x^{6} - \\frac{450}{x^{6}} -\\frac{125}{x^{18}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(216x^{18} + 540x^{6} + \\frac{450}{x^{6}} + \\frac{125}{x^{18}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(216x^{18} -540x^{6} + \\frac{450}{x^{6}} -\\frac{125}{x^{18}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(216x^{18} - 540x^{6} + \\frac{450}{x^{6}} - \\frac{125}{x^{18}}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(6x^{6} and B = \\frac{5}{x^{6}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(6x^{6} - \\frac{5}{x^{6}}\\right)³ = (\\left(6x^{6})³ - 3(\\left(6x^{6})²(\\frac{5}{x^{6}}\\right) + 3(\\left(6x^{6})(\\frac{5}{x^{6}}\\right)² - (\\frac{5}{x^{6}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(6x^{6} - \\frac{5}{x^{6}}\\right)^3 = (6x^{6})^3 - 3(6x^{6})^2\\left(\\frac{5}{x^{6}}\\right) + 3(6x^{6})\\left(\\frac{5}{x^{6}}\\right)^2 - \\left(\\frac{5}{x^{6}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 216x^{18} -540x^{6} + \\frac{450}{x^{6}} -\\frac{125}{x^{18}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(216x^{18} -540x^{6} + \\frac{450}{x^{6}} -\\frac{125}{x^{18}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q16",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(7x^{7} - \\frac{6}{x^{7}}\\right)^3\\)",
    options: [
      {
        text: "\\(343x^{21} -882x^{7} - \\frac{756}{x^{7}} -\\frac{216}{x^{21}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(343x^{21} - 882x^{7} + \\frac{756}{x^{7}} - \\frac{216}{x^{21}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(343x^{21} + 882x^{7} + \\frac{756}{x^{7}} + \\frac{216}{x^{21}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(343x^{21} -882x^{7} + \\frac{756}{x^{7}} -\\frac{216}{x^{21}}\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(7x^{7} and B = \\frac{6}{x^{7}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(7x^{7} - \\frac{6}{x^{7}}\\right)³ = (\\left(7x^{7})³ - 3(\\left(7x^{7})²(\\frac{6}{x^{7}}\\right) + 3(\\left(7x^{7})(\\frac{6}{x^{7}}\\right)² - (\\frac{6}{x^{7}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(7x^{7} - \\frac{6}{x^{7}}\\right)^3 = (7x^{7})^3 - 3(7x^{7})^2\\left(\\frac{6}{x^{7}}\\right) + 3(7x^{7})\\left(\\frac{6}{x^{7}}\\right)^2 - \\left(\\frac{6}{x^{7}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 343x^{21} -882x^{7} + \\frac{756}{x^{7}} -\\frac{216}{x^{21}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(343x^{21} -882x^{7} + \\frac{756}{x^{7}} -\\frac{216}{x^{21}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q17",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(8x^{8} - \\frac{7}{x^{8}}\\right)^3\\)",
    options: [
      {
        text: "\\(512x^{24} - 1344x^{8} + \\frac{1176}{x^{8}} - \\frac{343}{x^{24}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(512x^{24} -1344x^{8} - \\frac{1176}{x^{8}} -\\frac{343}{x^{24}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(512x^{24} -1344x^{8} + \\frac{1176}{x^{8}} -\\frac{343}{x^{24}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(512x^{24} + 1344x^{8} + \\frac{1176}{x^{8}} + \\frac{343}{x^{24}}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(8x^{8} and B = \\frac{7}{x^{8}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(8x^{8} - \\frac{7}{x^{8}}\\right)³ = (\\left(8x^{8})³ - 3(\\left(8x^{8})²(\\frac{7}{x^{8}}\\right) + 3(\\left(8x^{8})(\\frac{7}{x^{8}}\\right)² - (\\frac{7}{x^{8}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(8x^{8} - \\frac{7}{x^{8}}\\right)^3 = (8x^{8})^3 - 3(8x^{8})^2\\left(\\frac{7}{x^{8}}\\right) + 3(8x^{8})\\left(\\frac{7}{x^{8}}\\right)^2 - \\left(\\frac{7}{x^{8}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 512x^{24} -1344x^{8} + \\frac{1176}{x^{8}} -\\frac{343}{x^{24}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(512x^{24} -1344x^{8} + \\frac{1176}{x^{8}} -\\frac{343}{x^{24}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q18",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(9x^{9} - \\frac{8}{x^{9}}\\right)^3\\)",
    options: [
      {
        text: "\\(729x^{27} - 1944x^{9} + \\frac{1728}{x^{9}} - \\frac{512}{x^{27}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(729x^{27} -1944x^{9} - \\frac{1728}{x^{9}} -\\frac{512}{x^{27}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(729x^{27} -1944x^{9} + \\frac{1728}{x^{9}} -\\frac{512}{x^{27}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(729x^{27} + 1944x^{9} + \\frac{1728}{x^{9}} + \\frac{512}{x^{27}}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(9x^{9} and B = \\frac{8}{x^{9}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(9x^{9} - \\frac{8}{x^{9}}\\right)³ = (\\left(9x^{9})³ - 3(\\left(9x^{9})²(\\frac{8}{x^{9}}\\right) + 3(\\left(9x^{9})(\\frac{8}{x^{9}}\\right)² - (\\frac{8}{x^{9}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(9x^{9} - \\frac{8}{x^{9}}\\right)^3 = (9x^{9})^3 - 3(9x^{9})^2\\left(\\frac{8}{x^{9}}\\right) + 3(9x^{9})\\left(\\frac{8}{x^{9}}\\right)^2 - \\left(\\frac{8}{x^{9}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 729x^{27} -1944x^{9} + \\frac{1728}{x^{9}} -\\frac{512}{x^{27}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(729x^{27} -1944x^{9} + \\frac{1728}{x^{9}} -\\frac{512}{x^{27}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q19",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(10x^{10} - \\frac{9}{x^{10}}\\right)^3\\)",
    options: [
      {
        text: "\\(1000x^{30} - 2700x^{10} + \\frac{2430}{x^{10}} - \\frac{729}{x^{30}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^{30} -2700x^{10} + \\frac{2430}{x^{10}} -\\frac{729}{x^{30}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^{30} + 2700x^{10} + \\frac{2430}{x^{10}} + \\frac{729}{x^{30}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^{30} -2700x^{10} - \\frac{2430}{x^{10}} -\\frac{729}{x^{30}}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(10x^{10} and B = \\frac{9}{x^{10}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(10x^{10} - \\frac{9}{x^{10}}\\right)³ = (\\left(10x^{10})³ - 3(\\left(10x^{10})²(\\frac{9}{x^{10}}\\right) + 3(\\left(10x^{10})(\\frac{9}{x^{10}}\\right)² - (\\frac{9}{x^{10}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(10x^{10} - \\frac{9}{x^{10}}\\right)^3 = (10x^{10})^3 - 3(10x^{10})^2\\left(\\frac{9}{x^{10}}\\right) + 3(10x^{10})\\left(\\frac{9}{x^{10}}\\right)^2 - \\left(\\frac{9}{x^{10}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 1000x^{30} -2700x^{10} + \\frac{2430}{x^{10}} -\\frac{729}{x^{30}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(1000x^{30} -2700x^{10} + \\frac{2430}{x^{10}} -\\frac{729}{x^{30}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q20",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the binomial: \\(\\left(11x^{11} - \\frac{10}{x^{11}}\\right)^3\\)",
    options: [
      {
        text: "\\(1331x^{33} - 3630x^{11} + \\frac{3300}{x^{11}} - \\frac{1000}{x^{33}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^{33} -3630x^{11} + \\frac{3300}{x^{11}} -\\frac{1000}{x^{33}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^{33} -3630x^{11} - \\frac{3300}{x^{11}} -\\frac{1000}{x^{33}}\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^{33} + 3630x^{11} + \\frac{3300}{x^{11}} + \\frac{1000}{x^{33}}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the structure: this is a cubic binomial expansion of the form (A - B)³ = A³ - 3A²B + 3AB² - B³. Here, A = \\left(11x^{11} and B = \\frac{10}{x^{11}}\\right.",
        workingOut: "(A - B)³ = A³ - 3A²B + 3AB² - B³",
        graphData: null
      },
      {
        explanation: "Apply the cubic binomial identity with our specific values.",
        workingOut: "(\\left(11x^{11} - \\frac{10}{x^{11}}\\right)³ = (\\left(11x^{11})³ - 3(\\left(11x^{11})²(\\frac{10}{x^{11}}\\right) + 3(\\left(11x^{11})(\\frac{10}{x^{11}}\\right)² - (\\frac{10}{x^{11}}\\right)³",
        graphData: null
      },
      {
        explanation: "Calculate each term: cube the first term, compute 3 times the square of the first times the second, compute 3 times the first times the square of the second, and cube the second term.",
        workingOut: "\\(\\left(11x^{11} - \\frac{10}{x^{11}}\\right)^3 = (11x^{11})^3 - 3(11x^{11})^2\\left(\\frac{10}{x^{11}}\\right) + 3(11x^{11})\\left(\\frac{10}{x^{11}}\\right)^2 - \\left(\\frac{10}{x^{11}}\\right)^3\\)",
        graphData: null
      },
      {
        explanation: "Simplify all the coefficients and powers.",
        workingOut: "\\(= 1331x^{33} -3630x^{11} + \\frac{3300}{x^{11}} -\\frac{1000}{x^{33}}\\)",
        graphData: null
      },
      {
        explanation: "State the final expanded form.",
        workingOut: "= \\(1331x^{33} -3630x^{11} + \\frac{3300}{x^{11}} -\\frac{1000}{x^{33}}\\)",
        graphData: null
      }
    ],
    solution: null,
    graphData: null
  },
  {
    id: "y11-1a-high-q21",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 3x + 2)(x^2 - 3x + 2)\\)",
    options: [
      {
        text: "\\(x^4 + (-5)x^2 + 4\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - (-5)x^2 - 4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (13)x^2 + 4\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-5)x^2 - 4\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 3x + 2)(x^2 - 3x + 2)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 2)^2 - (3x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 4x^2 + 4) - 9x^2 = x^4 + (-5)x^2 + 4\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-5)x^2 + 4\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q22",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 4x + 3)(x^2 - 4x + 3)\\)",
    options: [
      {
        text: "\\(x^4 + (-10)x^2 - 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - (-10)x^2 - 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (22)x^2 + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-10)x^2 + 9\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 4x + 3)(x^2 - 4x + 3)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 3)^2 - (4x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 6x^2 + 9) - 16x^2 = x^4 + (-10)x^2 + 9\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-10)x^2 + 9\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q23",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 5x + 4)(x^2 - 5x + 4)\\)",
    options: [
      {
        text: "\\(x^4 + (-17)x^2 + 16\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - (-17)x^2 - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-17)x^2 - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (33)x^2 + 16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 5x + 4)(x^2 - 5x + 4)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 4)^2 - (5x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 8x^2 + 16) - 25x^2 = x^4 + (-17)x^2 + 16\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-17)x^2 + 16\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q24",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 6x + 5)(x^2 - 6x + 5)\\)",
    options: [
      {
        text: "\\(x^4 + (-26)x^2 + 25\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - (-26)x^2 - 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-26)x^2 - 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (46)x^2 + 25\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 6x + 5)(x^2 - 6x + 5)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 5)^2 - (6x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 10x^2 + 25) - 36x^2 = x^4 + (-26)x^2 + 25\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-26)x^2 + 25\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q25",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 7x + 6)(x^2 - 7x + 6)\\)",
    options: [
      {
        text: "\\(x^4 + (61)x^2 + 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-37)x^2 - 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - (-37)x^2 - 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-37)x^2 + 36\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 7x + 6)(x^2 - 7x + 6)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 6)^2 - (7x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 12x^2 + 36) - 49x^2 = x^4 + (-37)x^2 + 36\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-37)x^2 + 36\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q26",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 8x + 7)(x^2 - 8x + 7)\\)",
    options: [
      {
        text: "\\(x^4 + (-50)x^2 - 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-50)x^2 + 49\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - (-50)x^2 - 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (78)x^2 + 49\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the pattern: this is a product that can be regrouped to use the difference of squares identity or a similar special product.",
        workingOut: "Examine: Expand and simplify: \\((x^2 + 8x + 7)(x^2 - 8x + 7)\\)",
        graphData: null
      },
      {
        explanation: "Regroup the terms to identify the pattern: (A + B)(A - B) = A² - B², or similar conjugate structure.",
        workingOut: "Regroup factors to expose the identity structure.",
        graphData: null
      },
      {
        explanation: "Apply the relevant algebraic identity to simplify the product.",
        workingOut: "\\(= (x^2 + 7)^2 - (8x)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify and combine any like terms.",
        workingOut: "\\(= (x^4 + 14x^2 + 49) - 64x^2 = x^4 + (-50)x^2 + 49\\)",
        graphData: null
      },
      {
        explanation: "State the final simplified answer.",
        workingOut: "= \\(x^4 + (-50)x^2 + 49\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q27",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 9x + 8)(x^2 - 9x + 8)\\)",
    options: [
      {
        text: "\\(x^4 + (-65)x^2 - 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-65)x^2 + 64\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - (-65)x^2 - 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (97)x^2 + 64\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify this as a difference of squares pattern. Regroup: (x²+9x+8)(x²-9x+8) = [(x²+8)+9x][(x²+8)-9x].",
        workingOut: "Notice both expressions share (x² + 8) with ±9x. This forms (A+B)(A-B) where A = x²+8 and B = 9x.",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: (A+B)(A-B) = A² - B².",
        workingOut: "\\((x^2 + 8)^2 - (9x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²+8)²: Apply (A+B)² = A² + 2AB + B².",
        workingOut: "\\((x^2 + 8)^2 = (x^2)^2 + 2(x^2)(8) + 8^2 = x^4 + 16x^2 + 64\\)",
        graphData: null
      },
      {
        explanation: "Expand (9x)².",
        workingOut: "\\((9x)^2 = 81x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract and combine like terms.",
        workingOut: "\\((x^4 + 16x^2 + 64) - 81x^2 = x^4 + (16-81)x^2 + 64 = x^4 - 65x^2 + 64\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 65x² + 64",
    graphData: null
  },
  {
    id: "y11-1a-high-q28",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 10x + 9)(x^2 - 10x + 9)\\)",
    options: [
      {
        text: "\\(x^4 - (-82)x^2 - 81\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-82)x^2 - 81\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-82)x^2 + 81\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + (118)x^2 + 81\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify this as a difference of squares pattern. Regroup: (x²+10x+9)(x²-10x+9) = [(x²+9)+10x][(x²+9)-10x].",
        workingOut: "Notice both expressions share (x² + 9) with ±10x. This forms (A+B)(A-B) where A = x²+9 and B = 10x.",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: (A+B)(A-B) = A² - B².",
        workingOut: "\\((x^2 + 9)^2 - (10x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²+9)² using (A+B)² = A² + 2AB + B².",
        workingOut: "\\((x^2 + 9)^2 = x^4 + 18x^2 + 81\\)",
        graphData: null
      },
      {
        explanation: "Expand (10x)².",
        workingOut: "\\((10x)^2 = 100x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract and combine like terms.",
        workingOut: "\\((x^4 + 18x^2 + 81) - 100x^2 = x^4 - 82x^2 + 81\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 82x² + 81",
    graphData: null
  },
  {
    id: "y11-1a-high-q29",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 11x + 10)(x^2 - 11x + 10)\\)",
    options: [
      {
        text: "\\(x^4 + (-101)x^2 + 100\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + (-101)x^2 - 100\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (141)x^2 + 100\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - (-101)x^2 - 100\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify this as a difference of squares pattern. Regroup: (x²+11x+10)(x²-11x+10) = [(x²+10)+11x][(x²+10)-11x].",
        workingOut: "Notice both expressions share (x² + 10) with ±11x. This forms (A+B)(A-B) where A = x²+10 and B = 11x.",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: (A+B)(A-B) = A² - B².",
        workingOut: "\\((x^2 + 10)^2 - (11x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²+10)² using (A+B)² = A² + 2AB + B².",
        workingOut: "\\((x^2 + 10)^2 = x^4 + 20x^2 + 100\\)",
        graphData: null
      },
      {
        explanation: "Expand (11x)².",
        workingOut: "\\((11x)^2 = 121x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract and combine like terms.",
        workingOut: "\\((x^4 + 20x^2 + 100) - 121x^2 = x^4 - 101x^2 + 100\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 101x² + 100",
    graphData: null
  },
  {
    id: "y11-1a-high-q30",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((x^2 + 12x + 11)(x^2 - 12x + 11)\\)",
    options: [
      {
        text: "\\(x^4 + (166)x^2 + 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-122)x^2 - 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - (-122)x^2 - 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + (-122)x^2 + 121\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify this as a difference of squares pattern. Regroup: (x²+12x+11)(x²-12x+11) = [(x²+11)+12x][(x²+11)-12x].",
        workingOut: "Notice both expressions share (x² + 11) with ±12x. This forms (A+B)(A-B) where A = x²+11 and B = 12x.",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: (A+B)(A-B) = A² - B².",
        workingOut: "\\((x^2 + 11)^2 - (12x)^2\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²+11)² using (A+B)² = A² + 2AB + B².",
        workingOut: "\\((x^2 + 11)^2 = x^4 + 22x^2 + 121\\)",
        graphData: null
      },
      {
        explanation: "Expand (12x)².",
        workingOut: "\\((12x)^2 = 144x^2\\)",
        graphData: null
      },
      {
        explanation: "Subtract and combine like terms.",
        workingOut: "\\((x^4 + 22x^2 + 121) - 144x^2 = x^4 - 122x^2 + 121\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 122x² + 121",
    graphData: null
  },
  {
    id: "y11-1a-high-q31",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((2x^2 + 1y^2)(4x^4 - 2x^2y^2 + 1y^4)\\)",
    options: [
      {
        text: "\\(8x^6 + 1y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^6 - 1y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^4 + 1y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^6 + 34x^4y^2 + 32x^2y^4 + 1y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 2x², B = y².",
        workingOut: "The pattern (2x²+y²)(4x⁴-2x²y²+y⁴) matches (A+B)(A²-AB+B²) with A = 2x² and B = y².",
        graphData: null
      },
      {
        explanation: "Verify the middle term expansion: (A+B)(A²-AB+B²).",
        workingOut: "Check: (2x²)² = 4x⁴, -(2x²)(y²) = -2x²y², (y²)² = y⁴. Matches the second factor ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula directly.",
        workingOut: "\\((2x^2)^3 + (y^2)^3 = 8x^6 + y^6\\)",
        graphData: null
      }
    ],
    solution: "8x⁶ + y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q32",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((3x^2 + 2y^2)(9x^4 - 6x^2y^2 + 4y^4)\\)",
    options: [
      {
        text: "\\(9x^4 + 4y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^6 + 318x^4y^2 + 312x^2y^4 + 8y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^6 + 8y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(27x^6 - 8y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 3x², B = 2y².",
        workingOut: "The pattern (3x²+2y²)(9x⁴-6x²y²+4y⁴) matches (A+B)(A²-AB+B²).",
        graphData: null
      },
      {
        explanation: "Verify the middle term expansion: (A+B)(A²-AB+B²).",
        workingOut: "Check: (3x²)² = 9x⁴, -(3x²)(2y²) = -6x²y², (2y²)² = 4y⁴. Matches ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((3x^2)^3 + (2y^2)^3 = 27x^6 + 8y^6\\)",
        graphData: null
      }
    ],
    solution: "27x⁶ + 8y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q33",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((4x^2 + 3y^2)(16x^4 - 12x^2y^2 + 9y^4)\\)",
    options: [
      {
        text: "\\(64x^6 + 348x^4y^2 + 336x^2y^4 + 27y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^6 - 27y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^6 + 27y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(16x^4 + 9y^4\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 4x², B = 3y².",
        workingOut: "The pattern (4x²+3y²)(16x⁴-12x²y²+9y⁴) matches (A+B)(A²-AB+B²).",
        graphData: null
      },
      {
        explanation: "Verify the expansion terms: A² = 16x⁴, -AB = -12x²y², B² = 9y⁴.",
        workingOut: "Check: (4x²)² = 16x⁴, -(4x²)(3y²) = -12x²y², (3y²)² = 9y⁴. Matches ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((4x^2)^3 + (3y^2)^3 = 64x^6 + 27y^6\\)",
        graphData: null
      }
    ],
    solution: "64x⁶ + 27y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q34",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((5x^2 + 4y^2)(25x^4 - 20x^2y^2 + 16y^4)\\)",
    options: [
      {
        text: "\\(125x^6 + 64y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(125x^6 + 3100x^4y^2 + 380x^2y^4 + 64y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(125x^6 - 64y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(25x^4 + 16y^4\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 5x², B = 4y².",
        workingOut: "The pattern (5x²+4y²)(25x⁴-20x²y²+16y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (5x²)² = 25x⁴, -(5x²)(4y²) = -20x²y², (4y²)² = 16y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((5x^2)^3 + (4y^2)^3 = 125x^6 + 64y^6\\)",
        graphData: null
      }
    ],
    solution: "125x⁶ + 64y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q35",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((6x^2 + 5y^2)(36x^4 - 30x^2y^2 + 25y^4)\\)",
    options: [
      {
        text: "\\(216x^6 - 125y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(36x^4 + 25y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(216x^6 + 3180x^4y^2 + 3150x^2y^4 + 125y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(216x^6 + 125y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 6x², B = 5y².",
        workingOut: "The pattern (6x²+5y²)(36x⁴-30x²y²+25y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (6x²)² = 36x⁴, -(6x²)(5y²) = -30x²y², (5y²)² = 25y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((6x^2)^3 + (5y^2)^3 = 216x^6 + 125y^6\\)",
        graphData: null
      }
    ],
    solution: "216x⁶ + 125y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q36",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((7x^2 + 6y^2)(49x^4 - 42x^2y^2 + 36y^4)\\)",
    options: [
      {
        text: "\\(343x^6 + 3294x^4y^2 + 3252x^2y^4 + 216y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(49x^4 + 36y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(343x^6 + 216y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(343x^6 - 216y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 7x², B = 6y².",
        workingOut: "The pattern (7x²+6y²)(49x⁴-42x²y²+36y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (7x²)² = 49x⁴, -(7x²)(6y²) = -42x²y², (6y²)² = 36y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((7x^2)^3 + (6y^2)^3 = 343x^6 + 216y^6\\)",
        graphData: null
      }
    ],
    solution: "343x⁶ + 216y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q37",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((8x^2 + 7y^2)(64x^4 - 56x^2y^2 + 49y^4)\\)",
    options: [
      {
        text: "\\(512x^6 + 3448x^4y^2 + 3392x^2y^4 + 343y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(512x^6 - 343y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(64x^4 + 49y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(512x^6 + 343y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 8x², B = 7y².",
        workingOut: "The pattern (8x²+7y²)(64x⁴-56x²y²+49y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (8x²)² = 64x⁴, -(8x²)(7y²) = -56x²y², (7y²)² = 49y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((8x^2)^3 + (7y^2)^3 = 512x^6 + 343y^6\\)",
        graphData: null
      }
    ],
    solution: "512x⁶ + 343y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q38",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((9x^2 + 8y^2)(81x^4 - 72x^2y^2 + 64y^4)\\)",
    options: [
      {
        text: "\\(729x^6 + 3648x^4y^2 + 3576x^2y^4 + 512y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(729x^6 - 512y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(81x^4 + 64y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(729x^6 + 512y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 9x², B = 8y².",
        workingOut: "The pattern (9x²+8y²)(81x⁴-72x²y²+64y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (9x²)² = 81x⁴, -(9x²)(8y²) = -72x²y², (8y²)² = 64y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((9x^2)^3 + (8y^2)^3 = 729x^6 + 512y^6\\)",
        graphData: null
      }
    ],
    solution: "729x⁶ + 512y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q39",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((10x^2 + 9y^2)(100x^4 - 90x^2y^2 + 81y^4)\\)",
    options: [
      {
        text: "\\(100x^4 + 81y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^6 - 729y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^6 + 729y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(1000x^6 + 3900x^4y^2 + 3810x^2y^4 + 729y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 10x², B = 9y².",
        workingOut: "The pattern (10x²+9y²)(100x⁴-90x²y²+81y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (10x²)² = 100x⁴, -(10x²)(9y²) = -90x²y², (9y²)² = 81y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((10x^2)^3 + (9y^2)^3 = 1000x^6 + 729y^6\\)",
        graphData: null
      }
    ],
    solution: "1000x⁶ + 729y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q40",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify: \\((11x^2 + 10y^2)(121x^4 - 110x^2y^2 + 100y^4)\\)",
    options: [
      {
        text: "\\(121x^4 + 100y^4\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^6 + 31210x^4y^2 + 31100x^2y^4 + 1000y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^6 - 1000y^6\\)",
        imageUrl: ""
      },
      {
        text: "\\(1331x^6 + 1000y^6\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Identify the sum of cubes identity: (A+B)(A²-AB+B²) = A³+B³. Here A = 11x², B = 10y².",
        workingOut: "The pattern (11x²+10y²)(121x⁴-110x²y²+100y⁴) matches the sum of cubes formula.",
        graphData: null
      },
      {
        explanation: "Verify all three expansion terms match.",
        workingOut: "Check: (11x²)² = 121x⁴, -(11x²)(10y²) = -110x²y², (10y²)² = 100y⁴. All match ✓",
        graphData: null
      },
      {
        explanation: "Apply the sum of cubes formula: A³ + B³.",
        workingOut: "\\((11x^2)^3 + (10y^2)^3 = 1331x^6 + 1000y^6\\)",
        graphData: null
      }
    ],
    solution: "1331x⁶ + 1000y⁶",
    graphData: null
  },
  {
    id: "y11-1a-high-q41",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 1)(x - 2)(x - 3)(x - 4)\\)",
    options: [
      {
        text: "\\(x^4 - 10x^3 - 35x^2 - 50x + 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 10x^3 + 35x^2 - 50x - 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 10x^3 + 35x^2 + 50x + 24\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 10x^3 + 35x^2 - 50x + 24\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Group the four factors strategically: (x-1)(x-4) and (x-2)(x-3) so each pair yields (x²-5x+c).",
        workingOut: "\\((x-1)(x-4) = x^2 - 5x + 4\\) and \\((x-2)(x-3) = x^2 - 5x + 6\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-5x+4)(x²-5x+6). Substitute u = x²-5x to simplify.",
        workingOut: "\\((u+4)(u+6) = u^2 + 10u + 24\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 10u + 24 where u = x²-5x.",
        workingOut: "\\((x^2-5x)^2 + 10(x^2-5x) + 24\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-5x)² = x⁴ - 10x³ + 25x².",
        workingOut: "\\((x^2-5x)^2 = x^4 - 10x^3 + 25x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 10(x²-5x) = 10x² - 50x.",
        workingOut: "\\(10(x^2-5x) = 10x^2 - 50x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 10x^3 + 25x^2 + 10x^2 - 50x + 24 = x^4 - 10x^3 + 35x^2 - 50x + 24\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 10x³ + 35x² - 50x + 24",
    graphData: null
  },
  {
    id: "y11-1a-high-q42",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 2)(x - 4)(x - 6)(x - 8)\\)",
    options: [
      {
        text: "\\(x^4 - 20x^3 - 140x^2 - 400x + 384\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 20x^3 + 140x^2 + 400x + 384\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 20x^3 + 140x^2 - 400x + 384\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 20x^3 + 140x^2 - 400x - 384\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-2)(x-8) and (x-4)(x-6) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-2)(x-8) = x^2 - 10x + 16\\) and \\((x-4)(x-6) = x^2 - 10x + 24\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-10x+16)(x²-10x+24). Substitute u = x²-10x.",
        workingOut: "\\((u+16)(u+24) = u^2 + 40u + 384\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 40u + 384 where u = x²-10x.",
        workingOut: "\\((x^2-10x)^2 + 40(x^2-10x) + 384\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-10x)² = x⁴ - 20x³ + 100x².",
        workingOut: "\\((x^2-10x)^2 = x^4 - 20x^3 + 100x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 40(x²-10x) = 40x² - 400x.",
        workingOut: "\\(40(x^2-10x) = 40x^2 - 400x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 20x^3 + 100x^2 + 40x^2 - 400x + 384 = x^4 - 20x^3 + 140x^2 - 400x + 384\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 20x³ + 140x² - 400x + 384",
    graphData: null
  },
  {
    id: "y11-1a-high-q43",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 3)(x - 6)(x - 9)(x - 12)\\)",
    options: [
      {
        text: "\\(x^4 - 30x^3 + 315x^2 - 1350x - 1944\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 30x^3 + 315x^2 + 1350x + 1944\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 30x^3 - 315x^2 - 1350x + 1944\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 30x^3 + 315x^2 - 1350x + 1944\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-3)(x-12) and (x-6)(x-9) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-3)(x-12) = x^2 - 15x + 36\\) and \\((x-6)(x-9) = x^2 - 15x + 54\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-15x+36)(x²-15x+54). Substitute u = x²-15x.",
        workingOut: "\\((u+36)(u+54) = u^2 + 90u + 1944\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 90u + 1944 where u = x²-15x.",
        workingOut: "\\((x^2-15x)^2 + 90(x^2-15x) + 1944\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-15x)² = x⁴ - 30x³ + 225x².",
        workingOut: "\\((x^2-15x)^2 = x^4 - 30x^3 + 225x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 90(x²-15x) = 90x² - 1350x.",
        workingOut: "\\(90(x^2-15x) = 90x^2 - 1350x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 30x^3 + 225x^2 + 90x^2 - 1350x + 1944 = x^4 - 30x^3 + 315x^2 - 1350x + 1944\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 30x³ + 315x² - 1350x + 1944",
    graphData: null
  },
  {
    id: "y11-1a-high-q44",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 4)(x - 8)(x - 12)(x - 16)\\)",
    options: [
      {
        text: "\\(x^4 - 40x^3 + 560x^2 - 3200x - 6144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 40x^3 + 560x^2 - 3200x + 6144\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + 40x^3 + 560x^2 + 3200x + 6144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 40x^3 - 560x^2 - 3200x + 6144\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-4)(x-16) and (x-8)(x-12) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-4)(x-16) = x^2 - 20x + 64\\) and \\((x-8)(x-12) = x^2 - 20x + 96\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-20x+64)(x²-20x+96). Substitute u = x²-20x.",
        workingOut: "\\((u+64)(u+96) = u^2 + 160u + 6144\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 160u + 6144 where u = x²-20x.",
        workingOut: "\\((x^2-20x)^2 + 160(x^2-20x) + 6144\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-20x)² = x⁴ - 40x³ + 400x².",
        workingOut: "\\((x^2-20x)^2 = x^4 - 40x^3 + 400x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 160(x²-20x) = 160x² - 3200x.",
        workingOut: "\\(160(x^2-20x) = 160x^2 - 3200x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 40x^3 + 400x^2 + 160x^2 - 3200x + 6144 = x^4 - 40x^3 + 560x^2 - 3200x + 6144\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 40x³ + 560x² - 3200x + 6144",
    graphData: null
  },
  {
    id: "y11-1a-high-q45",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 5)(x - 10)(x - 15)(x - 20)\\)",
    options: [
      {
        text: "\\(x^4 - 50x^3 + 875x^2 - 6250x - 15000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 50x^3 + 875x^2 + 6250x + 15000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 50x^3 + 875x^2 - 6250x + 15000\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 50x^3 - 875x^2 - 6250x + 15000\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-5)(x-20) and (x-10)(x-15) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-5)(x-20) = x^2 - 25x + 100\\) and \\((x-10)(x-15) = x^2 - 25x + 150\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-25x+100)(x²-25x+150). Substitute u = x²-25x.",
        workingOut: "\\((u+100)(u+150) = u^2 + 250u + 15000\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 250u + 15000 where u = x²-25x.",
        workingOut: "\\((x^2-25x)^2 + 250(x^2-25x) + 15000\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-25x)² = x⁴ - 50x³ + 625x².",
        workingOut: "\\((x^2-25x)^2 = x^4 - 50x^3 + 625x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 250(x²-25x) = 250x² - 6250x.",
        workingOut: "\\(250(x^2-25x) = 250x^2 - 6250x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 50x^3 + 625x^2 + 250x^2 - 6250x + 15000 = x^4 - 50x^3 + 875x^2 - 6250x + 15000\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 50x³ + 875x² - 6250x + 15000",
    graphData: null
  },
  {
    id: "y11-1a-high-q46",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 6)(x - 12)(x - 18)(x - 24)\\)",
    options: [
      {
        text: "\\(x^4 + 60x^3 + 1260x^2 + 10800x + 31104\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 60x^3 - 1260x^2 - 10800x + 31104\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 60x^3 + 1260x^2 - 10800x + 31104\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 60x^3 + 1260x^2 - 10800x - 31104\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-6)(x-24) and (x-12)(x-18) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-6)(x-24) = x^2 - 30x + 144\\) and \\((x-12)(x-18) = x^2 - 30x + 216\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-30x+144)(x²-30x+216). Substitute u = x²-30x.",
        workingOut: "\\((u+144)(u+216) = u^2 + 360u + 31104\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 360u + 31104 where u = x²-30x.",
        workingOut: "\\((x^2-30x)^2 + 360(x^2-30x) + 31104\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-30x)² = x⁴ - 60x³ + 900x².",
        workingOut: "\\((x^2-30x)^2 = x^4 - 60x^3 + 900x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 360(x²-30x) = 360x² - 10800x.",
        workingOut: "\\(360(x^2-30x) = 360x^2 - 10800x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 60x^3 + 900x^2 + 360x^2 - 10800x + 31104 = x^4 - 60x^3 + 1260x^2 - 10800x + 31104\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 60x³ + 1260x² - 10800x + 31104",
    graphData: null
  },
  {
    id: "y11-1a-high-q47",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 7)(x - 14)(x - 21)(x - 28)\\)",
    options: [
      {
        text: "\\(x^4 - 70x^3 - 1715x^2 - 17150x + 57624\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 70x^3 + 1715x^2 - 17150x + 57624\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + 70x^3 + 1715x^2 + 17150x + 57624\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 70x^3 + 1715x^2 - 17150x - 57624\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-7)(x-28) and (x-14)(x-21) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-7)(x-28) = x^2 - 35x + 196\\) and \\((x-14)(x-21) = x^2 - 35x + 294\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-35x+196)(x²-35x+294). Substitute u = x²-35x.",
        workingOut: "\\((u+196)(u+294) = u^2 + 490u + 57624\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 490u + 57624 where u = x²-35x.",
        workingOut: "\\((x^2-35x)^2 + 490(x^2-35x) + 57624\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-35x)² = x⁴ - 70x³ + 1225x².",
        workingOut: "\\((x^2-35x)^2 = x^4 - 70x^3 + 1225x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 490(x²-35x) = 490x² - 17150x.",
        workingOut: "\\(490(x^2-35x) = 490x^2 - 17150x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 70x^3 + 1225x^2 + 490x^2 - 17150x + 57624 = x^4 - 70x^3 + 1715x^2 - 17150x + 57624\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 70x³ + 1715x² - 17150x + 57624",
    graphData: null
  },
  {
    id: "y11-1a-high-q48",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 8)(x - 16)(x - 24)(x - 32)\\)",
    options: [
      {
        text: "\\(x^4 - 80x^3 + 2240x^2 - 25600x - 98304\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 80x^3 - 2240x^2 - 25600x + 98304\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 80x^3 + 2240x^2 + 25600x + 98304\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 80x^3 + 2240x^2 - 25600x + 98304\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-8)(x-32) and (x-16)(x-24) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-8)(x-32) = x^2 - 40x + 256\\) and \\((x-16)(x-24) = x^2 - 40x + 384\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-40x+256)(x²-40x+384). Substitute u = x²-40x.",
        workingOut: "\\((u+256)(u+384) = u^2 + 640u + 98304\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 640u + 98304 where u = x²-40x.",
        workingOut: "\\((x^2-40x)^2 + 640(x^2-40x) + 98304\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-40x)² = x⁴ - 80x³ + 1600x².",
        workingOut: "\\((x^2-40x)^2 = x^4 - 80x^3 + 1600x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 640(x²-40x) = 640x² - 25600x.",
        workingOut: "\\(640(x^2-40x) = 640x^2 - 25600x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 80x^3 + 1600x^2 + 640x^2 - 25600x + 98304 = x^4 - 80x^3 + 2240x^2 - 25600x + 98304\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 80x³ + 2240x² - 25600x + 98304",
    graphData: null
  },
  {
    id: "y11-1a-high-q49",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 9)(x - 18)(x - 27)(x - 36)\\)",
    options: [
      {
        text: "\\(x^4 + 90x^3 + 2835x^2 + 36450x + 157464\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 90x^3 + 2835x^2 - 36450x + 157464\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 90x^3 - 2835x^2 - 36450x + 157464\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 90x^3 + 2835x^2 - 36450x - 157464\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-9)(x-36) and (x-18)(x-27) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-9)(x-36) = x^2 - 45x + 324\\) and \\((x-18)(x-27) = x^2 - 45x + 486\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-45x+324)(x²-45x+486). Substitute u = x²-45x.",
        workingOut: "\\((u+324)(u+486) = u^2 + 810u + 157464\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 810u + 157464 where u = x²-45x.",
        workingOut: "\\((x^2-45x)^2 + 810(x^2-45x) + 157464\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-45x)² = x⁴ - 90x³ + 2025x².",
        workingOut: "\\((x^2-45x)^2 = x^4 - 90x^3 + 2025x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 810(x²-45x) = 810x² - 36450x.",
        workingOut: "\\(810(x^2-45x) = 810x^2 - 36450x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 90x^3 + 2025x^2 + 810x^2 - 36450x + 157464 = x^4 - 90x^3 + 2835x^2 - 36450x + 157464\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 90x³ + 2835x² - 36450x + 157464",
    graphData: null
  },
  {
    id: "y11-1a-high-q50",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the product of four linear factors: \\((x - 10)(x - 20)(x - 30)(x - 40)\\)",
    options: [
      {
        text: "\\(x^4 + 100x^3 + 3500x^2 + 50000x + 240000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 100x^3 + 3500x^2 - 50000x + 240000\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 100x^3 + 3500x^2 - 50000x - 240000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 100x^3 - 3500x^2 - 50000x + 240000\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Group strategically: (x-10)(x-40) and (x-20)(x-30) to get pairs with the same linear coefficient.",
        workingOut: "\\((x-10)(x-40) = x^2 - 50x + 400\\) and \\((x-20)(x-30) = x^2 - 50x + 600\\)",
        graphData: null
      },
      {
        explanation: "The product becomes (x²-50x+400)(x²-50x+600). Substitute u = x²-50x.",
        workingOut: "\\((u+400)(u+600) = u^2 + 1000u + 240000\\)",
        graphData: null
      },
      {
        explanation: "Expand u² + 1000u + 240000 where u = x²-50x.",
        workingOut: "\\((x^2-50x)^2 + 1000(x^2-50x) + 240000\\)",
        graphData: null
      },
      {
        explanation: "Expand (x²-50x)² = x⁴ - 100x³ + 2500x².",
        workingOut: "\\((x^2-50x)^2 = x^4 - 100x^3 + 2500x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand 1000(x²-50x) = 1000x² - 50000x.",
        workingOut: "\\(1000(x^2-50x) = 1000x^2 - 50000x\\)",
        graphData: null
      },
      {
        explanation: "Combine all terms and collect like powers.",
        workingOut: "\\(x^4 - 100x^3 + 2500x^2 + 1000x^2 - 50000x + 240000 = x^4 - 100x^3 + 3500x^2 - 50000x + 240000\\)",
        graphData: null
      }
    ],
    solution: "x⁴ - 100x³ + 3500x² - 50000x + 240000",
    graphData: null
  },
  {
    id: "y11-1a-high-q51",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 2)^3 - (x - 2)^3\\)",
    options: [
      {
        text: "\\(2x^3 + 12x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(12x^2 + 16\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(12x^2 - 16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+2)³.",
        workingOut: "\\((x+2)^3 = x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3 = x^3 + 6x^2 + 12x + 8\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-2)³.",
        workingOut: "\\((x-2)^3 = x^3 - 3(x^2)(2) + 3(x)(2^2) - 2^3 = x^3 - 6x^2 + 12x - 8\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+2)^3 - (x-2)^3 = (x^3 + 6x^2 + 12x + 8) - (x^3 - 6x^2 + 12x - 8)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 6x^2 + 6x^2 + 12x - 12x + 8 + 8 = 12x^2 + 16\\)",
        graphData: null
      }
    ],
    solution: "12x² + 16",
    graphData: null
  },
  {
    id: "y11-1a-high-q52",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 3)^3 - (x - 3)^3\\)",
    options: [
      {
        text: "\\(18x^2 + 54\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(18x^2 - 54\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 18x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 54\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+3)³.",
        workingOut: "\\((x+3)^3 = x^3 + 3(x^2)(3) + 3(x)(3^2) + 3^3 = x^3 + 9x^2 + 27x + 27\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-3)³.",
        workingOut: "\\((x-3)^3 = x^3 - 3(x^2)(3) + 3(x)(3^2) - 3^3 = x^3 - 9x^2 + 27x - 27\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+3)^3 - (x-3)^3 = (x^3 + 9x^2 + 27x + 27) - (x^3 - 9x^2 + 27x - 27)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 9x^2 + 9x^2 + 27x - 27x + 27 + 27 = 18x^2 + 54\\)",
        graphData: null
      }
    ],
    solution: "18x² + 54",
    graphData: null
  },
  {
    id: "y11-1a-high-q53",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 4)^3 - (x - 4)^3\\)",
    options: [
      {
        text: "\\(2x^3 + 24x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 128\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(24x^2 + 128\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(24x^2 - 128\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+4)³.",
        workingOut: "\\((x+4)^3 = x^3 + 3(x^2)(4) + 3(x)(4^2) + 4^3 = x^3 + 12x^2 + 48x + 64\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-4)³.",
        workingOut: "\\((x-4)^3 = x^3 - 3(x^2)(4) + 3(x)(4^2) - 4^3 = x^3 - 12x^2 + 48x - 64\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+4)^3 - (x-4)^3 = (x^3 + 12x^2 + 48x + 64) - (x^3 - 12x^2 + 48x - 64)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 12x^2 + 12x^2 + 48x - 48x + 64 + 64 = 24x^2 + 128\\)",
        graphData: null
      }
    ],
    solution: "24x² + 128",
    graphData: null
  },
  {
    id: "y11-1a-high-q54",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 5)^3 - (x - 5)^3\\)",
    options: [
      {
        text: "\\(30x^2 - 250\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 250\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 30x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(30x^2 + 250\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+5)³.",
        workingOut: "\\((x+5)^3 = x^3 + 3(x^2)(5) + 3(x)(5^2) + 5^3 = x^3 + 15x^2 + 75x + 125\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-5)³.",
        workingOut: "\\((x-5)^3 = x^3 - 3(x^2)(5) + 3(x)(5^2) - 5^3 = x^3 - 15x^2 + 75x - 125\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+5)^3 - (x-5)^3 = (x^3 + 15x^2 + 75x + 125) - (x^3 - 15x^2 + 75x - 125)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 15x^2 + 15x^2 + 75x - 75x + 125 + 125 = 30x^2 + 250\\)",
        graphData: null
      }
    ],
    solution: "30x² + 250",
    graphData: null
  },
  {
    id: "y11-1a-high-q55",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 6)^3 - (x - 6)^3\\)",
    options: [
      {
        text: "\\(36x^2 - 432\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^2 + 432\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x^3 + 432\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 36x^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+6)³.",
        workingOut: "\\((x+6)^3 = x^3 + 3(x^2)(6) + 3(x)(6^2) + 6^3 = x^3 + 18x^2 + 108x + 216\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-6)³.",
        workingOut: "\\((x-6)^3 = x^3 - 3(x^2)(6) + 3(x)(6^2) - 6^3 = x^3 - 18x^2 + 108x - 216\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+6)^3 - (x-6)^3 = (x^3 + 18x^2 + 108x + 216) - (x^3 - 18x^2 + 108x - 216)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 18x^2 + 18x^2 + 108x - 108x + 216 + 216 = 36x^2 + 432\\)",
        graphData: null
      }
    ],
    solution: "36x² + 432",
    graphData: null
  },
  {
    id: "y11-1a-high-q56",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 7)^3 - (x - 7)^3\\)",
    options: [
      {
        text: "\\(2x^3 + 42x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(42x^2 + 686\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(42x^2 - 686\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 686\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+7)³.",
        workingOut: "\\((x+7)^3 = x^3 + 3(x^2)(7) + 3(x)(7^2) + 7^3 = x^3 + 21x^2 + 147x + 343\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-7)³.",
        workingOut: "\\((x-7)^3 = x^3 - 3(x^2)(7) + 3(x)(7^2) - 7^3 = x^3 - 21x^2 + 147x - 343\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+7)^3 - (x-7)^3 = (x^3 + 21x^2 + 147x + 343) - (x^3 - 21x^2 + 147x - 343)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 21x^2 + 21x^2 + 147x - 147x + 343 + 343 = 42x^2 + 686\\)",
        graphData: null
      }
    ],
    solution: "42x² + 686",
    graphData: null
  },
  {
    id: "y11-1a-high-q57",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 8)^3 - (x - 8)^3\\)",
    options: [
      {
        text: "\\(2x^3 + 1024\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(48x^2 - 1024\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(48x^2 + 1024\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x^3 + 48x^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+8)³.",
        workingOut: "\\((x+8)^3 = x^3 + 3(x^2)(8) + 3(x)(8^2) + 8^3 = x^3 + 24x^2 + 192x + 512\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-8)³.",
        workingOut: "\\((x-8)^3 = x^3 - 3(x^2)(8) + 3(x)(8^2) - 8^3 = x^3 - 24x^2 + 192x - 512\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+8)^3 - (x-8)^3 = (x^3 + 24x^2 + 192x + 512) - (x^3 - 24x^2 + 192x - 512)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 24x^2 + 24x^2 + 192x - 192x + 512 + 512 = 48x^2 + 1024\\)",
        graphData: null
      }
    ],
    solution: "48x² + 1024",
    graphData: null
  },
  {
    id: "y11-1a-high-q58",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 9)^3 - (x - 9)^3\\)",
    options: [
      {
        text: "\\(2x^3 + 54x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(54x^2 - 1458\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 1458\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(54x^2 + 1458\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+9)³.",
        workingOut: "\\((x+9)^3 = x^3 + 3(x^2)(9) + 3(x)(9^2) + 9^3 = x^3 + 27x^2 + 243x + 729\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-9)³.",
        workingOut: "\\((x-9)^3 = x^3 - 3(x^2)(9) + 3(x)(9^2) - 9^3 = x^3 - 27x^2 + 243x - 729\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+9)^3 - (x-9)^3 = (x^3 + 27x^2 + 243x + 729) - (x^3 - 27x^2 + 243x - 729)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 27x^2 + 27x^2 + 243x - 243x + 729 + 729 = 54x^2 + 1458\\)",
        graphData: null
      }
    ],
    solution: "54x² + 1458",
    graphData: null
  },
  {
    id: "y11-1a-high-q59",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 10)^3 - (x - 10)^3\\)",
    options: [
      {
        text: "\\(60x^2 - 2000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 2000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 60x^2\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(60x^2 + 2000\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+10)³.",
        workingOut: "\\((x+10)^3 = x^3 + 3(x^2)(10) + 3(x)(10^2) + 10^3 = x^3 + 30x^2 + 300x + 1000\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-10)³.",
        workingOut: "\\((x-10)^3 = x^3 - 3(x^2)(10) + 3(x)(10^2) - 10^3 = x^3 - 30x^2 + 300x - 1000\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+10)^3 - (x-10)^3 = (x^3 + 30x^2 + 300x + 1000) - (x^3 - 30x^2 + 300x - 1000)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 30x^2 + 30x^2 + 300x - 300x + 1000 + 1000 = 60x^2 + 2000\\)",
        graphData: null
      }
    ],
    solution: "60x² + 2000",
    graphData: null
  },
  {
    id: "y11-1a-high-q60",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Simplify the symmetric cubic difference: \\((x + 11)^3 - (x - 11)^3\\)",
    options: [
      {
        text: "\\(66x^2 + 2662\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(2x^3 + 2662\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(66x^2 - 2662\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(2x^3 + 66x^2\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the binomial expansion formula (a+b)³ = a³ + 3a²b + 3ab² + b³ to (x+11)³.",
        workingOut: "\\((x+11)^3 = x^3 + 3(x^2)(11) + 3(x)(11^2) + 11^3 = x^3 + 33x^2 + 363x + 1331\\)",
        graphData: null
      },
      {
        explanation: "Apply the binomial expansion formula (a-b)³ = a³ - 3a²b + 3ab² - b³ to (x-11)³.",
        workingOut: "\\((x-11)^3 = x^3 - 3(x^2)(11) + 3(x)(11^2) - 11^3 = x^3 - 33x^2 + 363x - 1331\\)",
        graphData: null
      },
      {
        explanation: "Subtract the two expanded forms.",
        workingOut: "\\((x+11)^3 - (x-11)^3 = (x^3 + 33x^2 + 363x + 1331) - (x^3 - 33x^2 + 363x - 1331)\\)",
        graphData: null
      },
      {
        explanation: "Distribute the negative sign and combine like terms.",
        workingOut: "\\(= x^3 - x^3 + 33x^2 + 33x^2 + 363x - 363x + 1331 + 1331 = 66x^2 + 2662\\)",
        graphData: null
      }
    ],
    solution: "66x² + 2662",
    graphData: null
  },
  {
    id: "y11-1a-high-q61",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{2}x - \\frac{3}{\\sqrt{2}x}\\right)^2\\)",
    options: [
      {
        text: "\\(2x^2 - 6 - \\frac{9}{2x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(2x^2 - 6 + \\frac{9}{2x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(2x^2 - 3 + \\frac{9}{2x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(2x^2 + 6 + \\frac{9}{2x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Identify the perfect square pattern (A-B)² = A² - 2AB + B². Here A = √2·x and B = 3/(√2·x).",
        workingOut: "The expression is \\((\\sqrt{2}x - \\frac{3}{\\sqrt{2}x})^2\\) with A = √2·x and B = 3/(√2·x).",
        graphData: null
      },
      {
        explanation: "Expand A² = (√2·x)² = 2x².",
        workingOut: "\\((\\sqrt{2}x)^2 = 2x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand -2AB = -2(√2·x)(3/(√2·x)) = -6.",
        workingOut: "\\(-2(\\sqrt{2}x) \\cdot \\frac{3}{\\sqrt{2}x} = -2 \\cdot 3 = -6\\)",
        graphData: null
      },
      {
        explanation: "Expand B² = (3/(√2·x))² = 9/(2x²).",
        workingOut: "\\(\\left(\\frac{3}{\\sqrt{2}x}\\right)^2 = \\frac{9}{2x^2}\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms: A² - 2AB + B².",
        workingOut: "\\(2x^2 - 6 + \\frac{9}{2x^2}\\)",
        graphData: null
      }
    ],
    solution: "2x² - 6 + 9/(2x²)",
    graphData: null
  },
  {
    id: "y11-1a-high-q62",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{3}x - \\frac{4}{\\sqrt{3}x}\\right)^2\\)",
    options: [
      {
        text: "\\(3x^2 - 8 + \\frac{16}{3x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(3x^2 + 8 + \\frac{16}{3x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(3x^2 - 4 + \\frac{16}{3x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(3x^2 - 8 - \\frac{16}{3x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Identify the perfect square pattern (A-B)² = A² - 2AB + B². Here A = √3·x and B = 4/(√3·x).",
        workingOut: "The expression is \\((\\sqrt{3}x - \\frac{4}{\\sqrt{3}x})^2\\) with A = √3·x and B = 4/(√3·x).",
        graphData: null
      },
      {
        explanation: "Expand A² = (√3·x)² = 3x².",
        workingOut: "\\((\\sqrt{3}x)^2 = 3x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand -2AB = -2(√3·x)(4/(√3·x)) = -8.",
        workingOut: "\\(-2(\\sqrt{3}x) \\cdot \\frac{4}{\\sqrt{3}x} = -2 \\cdot 4 = -8\\)",
        graphData: null
      },
      {
        explanation: "Expand B² = (4/(√3·x))² = 16/(3x²).",
        workingOut: "\\(\\left(\\frac{4}{\\sqrt{3}x}\\right)^2 = \\frac{16}{3x^2}\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms: A² - 2AB + B².",
        workingOut: "\\(3x^2 - 8 + \\frac{16}{3x^2}\\)",
        graphData: null
      }
    ],
    solution: "3x² - 8 + 16/(3x²)",
    graphData: null
  },
  {
    id: "y11-1a-high-q63",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{4}x - \\frac{5}{\\sqrt{4}x}\\right)^2\\)",
    options: [
      {
        text: "\\(4x^2 + 10 + \\frac{25}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - 5 + \\frac{25}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - 10 + \\frac{25}{4x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(4x^2 - 10 - \\frac{25}{4x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Identify the perfect square pattern (A-B)² = A² - 2AB + B². Note: √4 = 2, so A = 2x and B = 5/(2x).",
        workingOut: "The expression is \\((\\sqrt{4}x - \\frac{5}{\\sqrt{4}x})^2 = (2x - \\frac{5}{2x})^2\\) with A = 2x and B = 5/(2x).",
        graphData: null
      },
      {
        explanation: "Expand A² = (2x)² = 4x².",
        workingOut: "\\((2x)^2 = 4x^2\\)",
        graphData: null
      },
      {
        explanation: "Expand -2AB = -2(2x)(5/(2x)) = -10.",
        workingOut: "\\(-2(2x) \\cdot \\frac{5}{2x} = -2 \\cdot 5 = -10\\)",
        graphData: null
      },
      {
        explanation: "Expand B² = (5/(2x))² = 25/(4x²).",
        workingOut: "\\(\\left(\\frac{5}{2x}\\right)^2 = \\frac{25}{4x^2}\\)",
        graphData: null
      },
      {
        explanation: "Combine all three terms: A² - 2AB + B².",
        workingOut: "\\(4x^2 - 10 + \\frac{25}{4x^2}\\)",
        graphData: null
      }
    ],
    solution: "4x² - 10 + 25/(4x²)",
    graphData: null
  },
  {
    id: "y11-1a-high-q64",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{5}x - \\frac{6}{\\sqrt{5}x}\\right)^2\\)",
    options: [
      {
        text: "\\(5x^2 - 12 + \\frac{36}{5x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(5x^2 - 12 - \\frac{36}{5x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(5x^2 + 12 + \\frac{36}{5x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(5x^2 - 6 + \\frac{36}{5x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{5}x, quad B = \\frac{6}{\\sqrt{5}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{5}x - \\frac{6}{\\sqrt{5}x}\\right)^2 = (\\sqrt{5}x)^2 - 2(\\sqrt{5}x)\\left(\\frac{6}{\\sqrt{5}x}\\right) + \\left(\\frac{6}{\\sqrt{5}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 5x^2 - 12 + \\frac{36}{5x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q65",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{6}x - \\frac{7}{\\sqrt{6}x}\\right)^2\\)",
    options: [
      {
        text: "\\(6x^2 - 7 + \\frac{49}{6x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(6x^2 + 14 + \\frac{49}{6x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(6x^2 - 14 + \\frac{49}{6x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(6x^2 - 14 - \\frac{49}{6x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{6}x, quad B = \\frac{7}{\\sqrt{6}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{6}x - \\frac{7}{\\sqrt{6}x}\\right)^2 = (\\sqrt{6}x)^2 - 2(\\sqrt{6}x)\\left(\\frac{7}{\\sqrt{6}x}\\right) + \\left(\\frac{7}{\\sqrt{6}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 6x^2 - 14 + \\frac{49}{6x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q66",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{7}x - \\frac{8}{\\sqrt{7}x}\\right)^2\\)",
    options: [
      {
        text: "\\(7x^2 - 16 - \\frac{64}{7x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(7x^2 - 16 + \\frac{64}{7x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(7x^2 - 8 + \\frac{64}{7x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(7x^2 + 16 + \\frac{64}{7x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{7}x, quad B = \\frac{8}{\\sqrt{7}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{7}x - \\frac{8}{\\sqrt{7}x}\\right)^2 = (\\sqrt{7}x)^2 - 2(\\sqrt{7}x)\\left(\\frac{8}{\\sqrt{7}x}\\right) + \\left(\\frac{8}{\\sqrt{7}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 7x^2 - 16 + \\frac{64}{7x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q67",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{8}x - \\frac{9}{\\sqrt{8}x}\\right)^2\\)",
    options: [
      {
        text: "\\(8x^2 - 9 + \\frac{81}{8x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^2 + 18 + \\frac{81}{8x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^2 - 18 - \\frac{81}{8x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(8x^2 - 18 + \\frac{81}{8x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{8}x, quad B = \\frac{9}{\\sqrt{8}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{8}x - \\frac{9}{\\sqrt{8}x}\\right)^2 = (\\sqrt{8}x)^2 - 2(\\sqrt{8}x)\\left(\\frac{9}{\\sqrt{8}x}\\right) + \\left(\\frac{9}{\\sqrt{8}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 8x^2 - 18 + \\frac{81}{8x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q68",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{9}x - \\frac{10}{\\sqrt{9}x}\\right)^2\\)",
    options: [
      {
        text: "\\(9x^2 + 20 + \\frac{100}{9x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9x^2 - 20 - \\frac{100}{9x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9x^2 - 20 + \\frac{100}{9x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(9x^2 - 10 + \\frac{100}{9x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{9}x, quad B = \\frac{10}{\\sqrt{9}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{9}x - \\frac{10}{\\sqrt{9}x}\\right)^2 = (\\sqrt{9}x)^2 - 2(\\sqrt{9}x)\\left(\\frac{10}{\\sqrt{9}x}\\right) + \\left(\\frac{10}{\\sqrt{9}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 9x^2 - 20 + \\frac{100}{9x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q69",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{10}x - \\frac{11}{\\sqrt{10}x}\\right)^2\\)",
    options: [
      {
        text: "\\(10x^2 - 22 + \\frac{121}{10x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(10x^2 - 11 + \\frac{121}{10x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(10x^2 + 22 + \\frac{121}{10x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(10x^2 - 22 - \\frac{121}{10x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{10}x, quad B = \\frac{11}{\\sqrt{10}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{10}x - \\frac{11}{\\sqrt{10}x}\\right)^2 = (\\sqrt{10}x)^2 - 2(\\sqrt{10}x)\\left(\\frac{11}{\\sqrt{10}x}\\right) + \\left(\\frac{11}{\\sqrt{10}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 10x^2 - 22 + \\frac{121}{10x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q70",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the algebraic surd expression: \\(\\left(\\sqrt{11}x - \\frac{12}{\\sqrt{11}x}\\right)^2\\)",
    options: [
      {
        text: "\\(11x^2 - 12 + \\frac{144}{11x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(11x^2 + 24 + \\frac{144}{11x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(11x^2 - 24 - \\frac{144}{11x^2}\\)",
        imageUrl: ""
      },
      {
        text: "\\(11x^2 - 24 + \\frac{144}{11x^2}\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the perfect square expansion formula: \\((A - B)^2 = A^2 - 2AB + B^2\\).",
        workingOut: "\\(A = \\sqrt{11}x, quad B = \\frac{12}{\\sqrt{11}x}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the surd terms into the perfect square expression.",
        workingOut: "\\(\\left(\\sqrt{11}x - \\frac{12}{\\sqrt{11}x}\\right)^2 = (\\sqrt{11}x)^2 - 2(\\sqrt{11}x)\\left(\\frac{12}{\\sqrt{11}x}\\right) + \\left(\\frac{12}{\\sqrt{11}x}\\right)^2\\)",
        graphData: null
      },
      {
        explanation: "Simplify the radical products and fractional powers.",
        workingOut: "\\(= 11x^2 - 24 + \\frac{144}{11x^2}\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q71",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((1x^2 - 2x + 3)^2\\)",
    options: [
      {
        text: "\\(1x^4 + 4x^3 + 10x^2 + 12x + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1x^4 - 4x^3 - 10x^2 - 12x + 9\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(1x^4 - 4x^3 + 10x^2 - 12x + 9\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(1x^4 - 4x^3 + 10x^2 - 12x - 9\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((1x^2 - 2x + 3)^2 = (1x^2)^2 + (-2x)^2 + (3)^2 + 2(1x^2)(-2x) + 2(-2x)(3) + 2(3)(1x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 1x^4 + 4x^2 + 9 - 4x^3 - 12x + 6x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 1x^4 - 4x^3 + 10x^2 - 12x + 9\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q72",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((2x^2 - 3x + 4)^2\\)",
    options: [
      {
        text: "\\(4x^4 - 12x^3 + 25x^2 - 24x + 16\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(4x^4 - 12x^3 - 25x^2 - 24x + 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^4 - 12x^3 + 25x^2 - 24x - 16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(4x^4 + 12x^3 + 25x^2 + 24x + 16\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((2x^2 - 3x + 4)^2 = (2x^2)^2 + (-3x)^2 + (4)^2 + 2(2x^2)(-3x) + 2(-3x)(4) + 2(4)(2x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 4x^4 + 9x^2 + 16 - 12x^3 - 24x + 16x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 4x^4 - 12x^3 + 25x^2 - 24x + 16\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q73",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((3x^2 - 4x + 5)^2\\)",
    options: [
      {
        text: "\\(9x^4 + 24x^3 + 46x^2 + 40x + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^4 - 24x^3 - 46x^2 - 40x + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(9x^4 - 24x^3 + 46x^2 - 40x + 25\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(9x^4 - 24x^3 + 46x^2 - 40x - 25\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((3x^2 - 4x + 5)^2 = (3x^2)^2 + (-4x)^2 + (5)^2 + 2(3x^2)(-4x) + 2(-4x)(5) + 2(5)(3x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 9x^4 + 16x^2 + 25 - 24x^3 - 40x + 30x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 9x^4 - 24x^3 + 46x^2 - 40x + 25\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q74",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((4x^2 - 5x + 6)^2\\)",
    options: [
      {
        text: "\\(16x^4 - 40x^3 - 73x^2 - 60x + 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16x^4 - 40x^3 + 73x^2 - 60x + 36\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(16x^4 - 40x^3 + 73x^2 - 60x - 36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(16x^4 + 40x^3 + 73x^2 + 60x + 36\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((4x^2 - 5x + 6)^2 = (4x^2)^2 + (-5x)^2 + (6)^2 + 2(4x^2)(-5x) + 2(-5x)(6) + 2(6)(4x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 16x^4 + 25x^2 + 36 - 40x^3 - 60x + 48x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 16x^4 - 40x^3 + 73x^2 - 60x + 36\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q75",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((5x^2 - 6x + 7)^2\\)",
    options: [
      {
        text: "\\(25x^4 - 60x^3 + 106x^2 - 84x + 49\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(25x^4 - 60x^3 - 106x^2 - 84x + 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^4 - 60x^3 + 106x^2 - 84x - 49\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(25x^4 + 60x^3 + 106x^2 + 84x + 49\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((5x^2 - 6x + 7)^2 = (5x^2)^2 + (-6x)^2 + (7)^2 + 2(5x^2)(-6x) + 2(-6x)(7) + 2(7)(5x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 25x^4 + 36x^2 + 49 - 60x^3 - 84x + 70x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 25x^4 - 60x^3 + 106x^2 - 84x + 49\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q76",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((6x^2 - 7x + 8)^2\\)",
    options: [
      {
        text: "\\(36x^4 - 84x^3 - 145x^2 - 112x + 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^4 + 84x^3 + 145x^2 + 112x + 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^4 - 84x^3 + 145x^2 - 112x - 64\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(36x^4 - 84x^3 + 145x^2 - 112x + 64\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((6x^2 - 7x + 8)^2 = (6x^2)^2 + (-7x)^2 + (8)^2 + 2(6x^2)(-7x) + 2(-7x)(8) + 2(8)(6x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 36x^4 + 49x^2 + 64 - 84x^3 - 112x + 96x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 36x^4 - 84x^3 + 145x^2 - 112x + 64\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q77",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((7x^2 - 8x + 9)^2\\)",
    options: [
      {
        text: "\\(49x^4 - 112x^3 + 190x^2 - 144x + 81\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(49x^4 - 112x^3 - 190x^2 - 144x + 81\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(49x^4 + 112x^3 + 190x^2 + 144x + 81\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(49x^4 - 112x^3 + 190x^2 - 144x - 81\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((7x^2 - 8x + 9)^2 = (7x^2)^2 + (-8x)^2 + (9)^2 + 2(7x^2)(-8x) + 2(-8x)(9) + 2(9)(7x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 49x^4 + 64x^2 + 81 - 112x^3 - 144x + 126x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 49x^4 - 112x^3 + 190x^2 - 144x + 81\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q78",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((8x^2 - 9x + 10)^2\\)",
    options: [
      {
        text: "\\(64x^4 - 144x^3 - 241x^2 - 180x + 100\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64x^4 - 144x^3 + 241x^2 - 180x - 100\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(64x^4 - 144x^3 + 241x^2 - 180x + 100\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(64x^4 + 144x^3 + 241x^2 + 180x + 100\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((8x^2 - 9x + 10)^2 = (8x^2)^2 + (-9x)^2 + (10)^2 + 2(8x^2)(-9x) + 2(-9x)(10) + 2(10)(8x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 64x^4 + 81x^2 + 100 - 144x^3 - 180x + 160x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 64x^4 - 144x^3 + 241x^2 - 180x + 100\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q79",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((9x^2 - 10x + 11)^2\\)",
    options: [
      {
        text: "\\(81x^4 - 180x^3 + 298x^2 - 220x + 121\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(81x^4 + 180x^3 + 298x^2 + 220x + 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81x^4 - 180x^3 - 298x^2 - 220x + 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(81x^4 - 180x^3 + 298x^2 - 220x - 121\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((9x^2 - 10x + 11)^2 = (9x^2)^2 + (-10x)^2 + (11)^2 + 2(9x^2)(-10x) + 2(-10x)(11) + 2(11)(9x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 81x^4 + 100x^2 + 121 - 180x^3 - 220x + 198x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 81x^4 - 180x^3 + 298x^2 - 220x + 121\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q80",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the quadratic trinomial square: \\((10x^2 - 11x + 12)^2\\)",
    options: [
      {
        text: "\\(100x^4 + 220x^3 + 361x^2 + 264x + 144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100x^4 - 220x^3 + 361x^2 - 264x - 144\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(100x^4 - 220x^3 + 361x^2 - 264x + 144\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(100x^4 - 220x^3 - 361x^2 - 264x + 144\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Apply the trinomial square expansion identity: \\((A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2BC + 2CA\\).",
        workingOut: "\\((10x^2 - 11x + 12)^2 = (10x^2)^2 + (-11x)^2 + (12)^2 + 2(10x^2)(-11x) + 2(-11x)(12) + 2(12)(10x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand the squares of each individual term.",
        workingOut: "\\(= 100x^4 + 121x^2 + 144 - 220x^3 - 264x + 240x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in descending order.",
        workingOut: "\\(= 100x^4 - 220x^3 + 361x^2 - 264x + 144\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q81",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 1)(x + 2)(3x - 4)^2\\)",
    options: [
      {
        text: "\\(-36\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-14\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-16\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-26\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 1)(x + 2) = x^2 + (2 - 1)x - 2 = x^2 + 1x - 2\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((3x - 4)^2 = 9x^2 - 24x + 16\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 2)(9x^2 - 24x + 16)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 16) + (1 \\times -24) + (-2 \\times 9) = 16 + (-24) + (-18) = -26\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q82",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 2)(x + 3)(4x - 5)^2\\)",
    options: [
      {
        text: "\\(-91\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-111\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-101\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 2)(x + 3) = x^2 + (3 - 2)x - 6 = x^2 + 1x - 6\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((4x - 5)^2 = 16x^2 - 40x + 25\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 6)(16x^2 - 40x + 25)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 25) + (1 \\times -40) + (-6 \\times 16) = 25 + (-40) + (-96) = -111\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q83",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 3)(x + 4)(5x - 6)^2\\)",
    options: [
      {
        text: "\\(-334\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-294\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-324\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-314\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 3)(x + 4) = x^2 + (4 - 3)x - 12 = x^2 + 1x - 12\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((5x - 6)^2 = 25x^2 - 60x + 36\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 12)(25x^2 - 60x + 36)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 36) + (1 \\times -60) + (-12 \\times 25) = 36 + (-60) + (-300) = -324\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q84",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 4)(x + 5)(6x - 7)^2\\)",
    options: [
      {
        text: "\\(-755\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-765\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-713\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-745\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 4)(x + 5) = x^2 + (5 - 4)x - 20 = x^2 + 1x - 20\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((6x - 7)^2 = 36x^2 - 84x + 49\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 20)(36x^2 - 84x + 49)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 49) + (1 \\times -84) + (-20 \\times 36) = 49 + (-84) + (-720) = -755\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q85",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 5)(x + 6)(7x - 8)^2\\)",
    options: [
      {
        text: "\\(-1518\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-1462\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-1528\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-1508\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 5)(x + 6) = x^2 + (6 - 5)x - 30 = x^2 + 1x - 30\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((7x - 8)^2 = 49x^2 - 112x + 64\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 30)(49x^2 - 112x + 64)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 64) + (1 \\times -112) + (-30 \\times 49) = 64 + (-112) + (-1470) = -1518\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q86",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 6)(x + 7)(8x - 9)^2\\)",
    options: [
      {
        text: "\\(-2679\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-2751\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-2761\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-2741\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 6)(x + 7) = x^2 + (7 - 6)x - 42 = x^2 + 1x - 42\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((8x - 9)^2 = 64x^2 - 144x + 81\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 42)(64x^2 - 144x + 81)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 81) + (1 \\times -144) + (-42 \\times 64) = 81 + (-144) + (-2688) = -2751\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q87",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 7)(x + 8)(9x - 10)^2\\)",
    options: [
      {
        text: "\\(-4606\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-4616\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-4626\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-4526\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 7)(x + 8) = x^2 + (8 - 7)x - 56 = x^2 + 1x - 56\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((9x - 10)^2 = 81x^2 - 180x + 100\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 56)(81x^2 - 180x + 100)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 100) + (1 \\times -180) + (-56 \\times 81) = 100 + (-180) + (-4536) = -4616\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q88",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 8)(x + 9)(10x - 11)^2\\)",
    options: [
      {
        text: "\\(-7309\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-7289\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-7299\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-7189\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 8)(x + 9) = x^2 + (9 - 8)x - 72 = x^2 + 1x - 72\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((10x - 11)^2 = 100x^2 - 220x + 121\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 72)(100x^2 - 220x + 121)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 121) + (1 \\times -220) + (-72 \\times 100) = 121 + (-220) + (-7200) = -7299\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q89",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 9)(x + 10)(11x - 12)^2\\)",
    options: [
      {
        text: "\\(-11000\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-10878\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-11010\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-11020\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 9)(x + 10) = x^2 + (10 - 9)x - 90 = x^2 + 1x - 90\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((11x - 12)^2 = 121x^2 - 264x + 144\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 90)(121x^2 - 264x + 144)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 144) + (1 \\times -264) + (-90 \\times 121) = 144 + (-264) + (-10890) = -11010\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q90",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Without fully expanding the polynomial, find the coefficient of \\(x^2\\) in the product: \\((x - 10)(x + 11)(12x - 13)^2\\)",
    options: [
      {
        text: "\\(-15827\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-15983\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(-15993\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(-15973\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "Expand the first two linear factors to form a quadratic expression.",
        workingOut: "\\((x - 10)(x + 11) = x^2 + (11 - 10)x - 110 = x^2 + 1x - 110\\)",
        graphData: null
      },
      {
        explanation: "Expand the perfect square binomial term.",
        workingOut: "\\((12x - 13)^2 = 144x^2 - 312x + 169\\)",
        graphData: null
      },
      {
        explanation: "Identify the combinations of terms from both parts that multiply to yield an x^2 term.",
        workingOut: "\\(\\text{Part A} \\times \\text{Part B} = (x^2 + 1x - 110)(144x^2 - 312x + 169)\\)",
        graphData: null
      },
      {
        explanation: "Extract and sum the coefficients of the resulting x^2 terms.",
        workingOut: "\\(\\text{Coeff} = (1 \\times 169) + (1 \\times -312) + (-110 \\times 144) = 169 + (-312) + (-15840) = -15983\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q91",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 1)^2 - 2\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 + 4x^3 + 2x^2 - 4x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 4x^3 + 2x^2 + 4x - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 4x^3 - 2x^2 + 4x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 4x^3 + 2x^2 + 4x + 1\\)",
        imageUrl: ""
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 1)^2 - 2 = (x^2 - 2x + 1) - 2 = x^2 - 2x + (-1)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -2x, and C = -1, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-2x)^2 + (-1)^2 + 2(x^2)(-2x) + 2(-2x)(-1) + 2(-1)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 4x^2 + 1 - 4x^3 - -4x + -2x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 4x^3 + 2x^2 - -4x + 1\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q92",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 2)^2 - 3\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 8x^3 + 18x^2 - 8x - 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 8x^3 + 18x^2 + 8x + 1\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 8x^3 + 18x^2 - 8x + 1\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 8x^3 - 18x^2 - 8x + 1\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 2)^2 - 3 = (x^2 - 4x + 4) - 3 = x^2 - 4x + (1)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -4x, and C = 1, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-4x)^2 + (1)^2 + 2(x^2)(-4x) + 2(-4x)(1) + 2(1)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 16x^2 + 1 - 8x^3 - 8x + 2x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 8x^3 + 18x^2 - 8x + 1\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q93",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 3)^2 - 4\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 + 12x^3 + 46x^2 + 60x + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 12x^3 - 46x^2 - 60x + 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 12x^3 + 46x^2 - 60x - 25\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 12x^3 + 46x^2 - 60x + 25\\)",
        imageUrl: "",
        isCorrect: true
      }
    ],
    answer: "3",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 3)^2 - 4 = (x^2 - 6x + 9) - 4 = x^2 - 6x + (5)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -6x, and C = 5, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-6x)^2 + (5)^2 + 2(x^2)(-6x) + 2(-6x)(5) + 2(5)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 36x^2 + 25 - 12x^3 - 60x + 10x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 12x^3 + 46x^2 - 60x + 25\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q94",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 4)^2 - 5\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 16x^3 + 86x^2 - 176x + 121\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 16x^3 - 86x^2 - 176x + 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 16x^3 + 86x^2 + 176x + 121\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 16x^3 + 86x^2 - 176x - 121\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 4)^2 - 5 = (x^2 - 8x + 16) - 5 = x^2 - 8x + (11)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -8x, and C = 11, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-8x)^2 + (11)^2 + 2(x^2)(-8x) + 2(-8x)(11) + 2(11)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 64x^2 + 121 - 16x^3 - 176x + 22x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 16x^3 + 86x^2 - 176x + 121\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q95",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 5)^2 - 6\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 + 20x^3 + 138x^2 + 380x + 361\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 20x^3 - 138x^2 - 380x + 361\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 20x^3 + 138x^2 - 380x + 361\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 20x^3 + 138x^2 - 380x - 361\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 5)^2 - 6 = (x^2 - 10x + 25) - 6 = x^2 - 10x + (19)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -10x, and C = 19, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-10x)^2 + (19)^2 + 2(x^2)(-10x) + 2(-10x)(19) + 2(19)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 100x^2 + 361 - 20x^3 - 380x + 38x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 20x^3 + 138x^2 - 380x + 361\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q96",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 6)^2 - 7\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 24x^3 + 202x^2 - 696x + 841\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + 24x^3 + 202x^2 + 696x + 841\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 24x^3 - 202x^2 - 696x + 841\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 24x^3 + 202x^2 - 696x - 841\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "0",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 6)^2 - 7 = (x^2 - 12x + 36) - 7 = x^2 - 12x + (29)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -12x, and C = 29, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-12x)^2 + (29)^2 + 2(x^2)(-12x) + 2(-12x)(29) + 2(29)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 144x^2 + 841 - 24x^3 - 696x + 58x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 24x^3 + 202x^2 - 696x + 841\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q97",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 7)^2 - 8\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 28x^3 + 278x^2 - 1148x - 1681\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 + 28x^3 + 278x^2 + 1148x + 1681\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 28x^3 + 278x^2 - 1148x + 1681\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 28x^3 - 278x^2 - 1148x + 1681\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 7)^2 - 8 = (x^2 - 14x + 49) - 8 = x^2 - 14x + (41)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -14x, and C = 41, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-14x)^2 + (41)^2 + 2(x^2)(-14x) + 2(-14x)(41) + 2(41)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 196x^2 + 1681 - 28x^3 - 1148x + 82x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 28x^3 + 278x^2 - 1148x + 1681\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q98",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 8)^2 - 9\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 32x^3 - 366x^2 - 1760x + 3025\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 32x^3 + 366x^2 - 1760x + 3025\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + 32x^3 + 366x^2 + 1760x + 3025\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 32x^3 + 366x^2 - 1760x - 3025\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 8)^2 - 9 = (x^2 - 16x + 64) - 9 = x^2 - 16x + (55)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -16x, and C = 55, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-16x)^2 + (55)^2 + 2(x^2)(-16x) + 2(-16x)(55) + 2(55)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 256x^2 + 3025 - 32x^3 - 1760x + 110x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 32x^3 + 366x^2 - 1760x + 3025\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q99",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 9)^2 - 10\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 - 36x^3 + 466x^2 - 2556x - 5041\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 36x^3 - 466x^2 - 2556x + 5041\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 36x^3 + 466x^2 - 2556x + 5041\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 + 36x^3 + 466x^2 + 2556x + 5041\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "2",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 9)^2 - 10 = (x^2 - 18x + 81) - 10 = x^2 - 18x + (71)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -18x, and C = 71, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-18x)^2 + (71)^2 + 2(x^2)(-18x) + 2(-18x)(71) + 2(71)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 324x^2 + 5041 - 36x^3 - 2556x + 142x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 36x^3 + 466x^2 - 2556x + 5041\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  },
  {
    id: "y11-1a-high-q100",
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: "Algebraic expansion",
    question: "Expand and simplify the nested binomial square: \\(\\left((x - 10)^2 - 11\\right)^2\\)",
    options: [
      {
        text: "\\(x^4 + 40x^3 + 578x^2 + 3560x + 7921\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 40x^3 + 578x^2 - 3560x + 7921\\)",
        imageUrl: "",
        isCorrect: true
      },
      {
        text: "\\(x^4 - 40x^3 - 578x^2 - 3560x + 7921\\)",
        imageUrl: "",
        isCorrect: false
      },
      {
        text: "\\(x^4 - 40x^3 + 578x^2 - 3560x - 7921\\)",
        imageUrl: "",
        isCorrect: false
      }
    ],
    answer: "1",
    solutionSteps: [
      {
        explanation: "First, expand the inner perfect square expression.",
        workingOut: "\\((x - 10)^2 - 11 = (x^2 - 20x + 100) - 11 = x^2 - 20x + (89)\\)",
        graphData: null
      },
      {
        explanation: "Treat the result as a trinomial with terms A = x^2, B = -20x, and C = 89, then apply the trinomial square identity (A+B+C)^2 = A^2+B^2+C^2+2AB+2BC+2CA.",
        workingOut: "\\(= (x^2)^2 + (-20x)^2 + (89)^2 + 2(x^2)(-20x) + 2(-20x)(89) + 2(89)(x^2)\\)",
        graphData: null
      },
      {
        explanation: "Expand each product and power.",
        workingOut: "\\(= x^4 + 400x^2 + 7921 - 40x^3 - 3560x + 178x^2\\)",
        graphData: null
      },
      {
        explanation: "Combine like terms of x^2 and arrange the polynomial in standard order.",
        workingOut: "\\(= x^4 - 40x^3 + 578x^2 - 3560x + 7921\\)",
        graphData: null
      }
    ],
    solution: "",
    graphData: null
  }
];
