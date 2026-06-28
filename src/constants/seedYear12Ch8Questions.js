export const Y12_CH8_QUESTIONS = [
  {
    "id": "y12a-8a-q1",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Answer the following questions about arithmetic sequences:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q1a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) Show that the sequence 7, 13, 19, 25, \\dots is an arithmetic sequence.",
        "a": "To show it is an arithmetic sequence, we verify that the difference between consecutive terms is constant:\n\\( 13 - 7 = 6 \\)\n\\( 19 - 13 = 6 \\)\n\\( 25 - 19 = 6 \\)\nSince the common difference \\( d = 6 \\) is constant, the sequence is arithmetic.",
        "solutionSteps": [
          {
            "explanation": "Calculate differences between consecutive terms",
            "workingOut": "13 - 7 = 6, \\quad 19 - 13 = 6, \\quad 25 - 19 = 6"
          },
          {
            "explanation": "Conclude that the sequence is arithmetic",
            "workingOut": "\\text{Common difference } d = 6 \\text{ is constant}"
          }
        ]
      },
      {
        "id": "y12a-8a-q1bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) State the first term \\( a \\) of the sequence.",
        "a": "7",
        "solutionSteps": [
          {
            "explanation": "Identify the first term",
            "workingOut": "a = 7"
          }
        ]
      },
      {
        "id": "y12a-8a-q1bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) State the common difference \\( d \\) of the sequence.",
        "a": "6",
        "solutionSteps": [
          {
            "explanation": "Identify the common difference",
            "workingOut": "d = 6"
          }
        ]
      },
      {
        "id": "y12a-8a-q1c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) Use the formula \\( T_n = a + (n-1)d \\) to find the 41st term \\( T_{41} \\).",
        "a": "247",
        "solutionSteps": [
          {
            "explanation": "Identify parameters",
            "workingOut": "a = 7, \\quad d = 6, \\quad n = 41"
          },
          {
            "explanation": "Substitute into the term formula",
            "workingOut": "T_{41} = 7 + (41-1) \\times 6"
          },
          {
            "explanation": "Simplify and calculate",
            "workingOut": "T_{41} = 7 + 40 \\times 6 = 7 + 240 = 247"
          }
        ]
      },
      {
        "id": "y12a-8a-q1d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "d) Use the formula \\( S_n = \\frac{1}{2}n(2a + (n-1)d) \\) to find the sum \\( S_{30} \\) of the first 30 terms.",
        "a": "2820",
        "solutionSteps": [
          {
            "explanation": "Identify parameters",
            "workingOut": "a = 7, \\quad d = 6, \\quad n = 30"
          },
          {
            "explanation": "Substitute into the sum formula",
            "workingOut": "S_{30} = \\frac{30}{2} \\left(2 \\times 7 + (30-1) \\times 6\\right)"
          },
          {
            "explanation": "Simplify the terms",
            "workingOut": "S_{30} = 15 \\left(14 + 29 \\times 6\\right)"
          },
          {
            "explanation": "Calculate final sum",
            "workingOut": "S_{30} = 15 \\left(14 + 174\\right) = 15 \\times 188 = 2820"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q2",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the sum of the first 400 even numbers: \\( 2 + 4 + 6 + \\dots + 800 \\).",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q2ai",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) Show that the terms form an arithmetic progression.",
        "a": "The terms are 2, 4, 6, ..., 800. The difference between consecutive terms is constant: \\( 4 - 2 = 2 \\) and \\( 6 - 4 = 2 \\). Hence, it is an AP with first term \\( a = 2 \\) and common difference \\( d = 2 \\).",
        "solutionSteps": [
          {
            "explanation": "Find differences",
            "workingOut": "4 - 2 = 2, \\quad 6 - 4 = 2"
          },
          {
            "explanation": "Confirm constant difference",
            "workingOut": "\\text{AP with } a=2, \\; d=2"
          }
        ]
      },
      {
        "id": "y12a-8a-q2aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) State the first term \\( a \\).",
        "a": "2",
        "solutionSteps": [
          {
            "explanation": "Read first term",
            "workingOut": "a = 2"
          }
        ]
      },
      {
        "id": "y12a-8a-q2aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) State the common difference \\( d \\).",
        "a": "2",
        "solutionSteps": [
          {
            "explanation": "Read common difference",
            "workingOut": "d = 2"
          }
        ]
      },
      {
        "id": "y12a-8a-q2aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) Find the number of terms \\( n \\) in this arithmetic progression.",
        "a": "400",
        "solutionSteps": [
          {
            "explanation": "Set last term equal to term formula",
            "workingOut": "T_n = a + (n-1)d = 800"
          },
          {
            "explanation": "Substitute a and d",
            "workingOut": "2 + (n-1) \\times 2 = 800"
          },
          {
            "explanation": "Solve for n",
            "workingOut": "2n = 800 \\implies n = 400"
          }
        ]
      },
      {
        "id": "y12a-8a-q2b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Use the formula \\( S_n = \\frac{1}{2}n(a + l) \\) to find the sum.",
        "a": "160400",
        "solutionSteps": [
          {
            "explanation": "Identify parameters",
            "workingOut": "n = 400, \\quad a = 2, \\quad l = 800"
          },
          {
            "explanation": "Substitute into the sum formula",
            "workingOut": "S_{400} = \\frac{400}{2} (2 + 800)"
          },
          {
            "explanation": "Calculate final sum",
            "workingOut": "S_{400} = 200 \\times 802 = 160400"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q3",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Answer the following questions about geometric sequences:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q3a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) Show that 4, 12, 36, 108, \\dots is a geometric sequence.",
        "a": "To show it is a geometric sequence, we verify that the ratio between consecutive terms is constant:\n\\( \\frac{12}{4} = 3 \\)\n\\( \\frac{36}{12} = 3 \\)\n\\( \\frac{108}{36} = 3 \\)\nSince the common ratio \\( r = 3 \\) is constant, the sequence is geometric.",
        "solutionSteps": [
          {
            "explanation": "Calculate ratios between consecutive terms",
            "workingOut": "\\frac{12}{4} = 3, \\quad \\frac{36}{12} = 3, \\quad \\frac{108}{36} = 3"
          },
          {
            "explanation": "Conclude that the sequence is geometric",
            "workingOut": "\\text{Common ratio } r = 3 \\text{ is constant}"
          }
        ]
      },
      {
        "id": "y12a-8a-q3bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) State the first term \\( a \\) of the sequence.",
        "a": "4",
        "solutionSteps": [
          {
            "explanation": "Identify the first term",
            "workingOut": "a = 4"
          }
        ]
      },
      {
        "id": "y12a-8a-q3bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) State the common ratio \\( r \\) of the sequence.",
        "a": "3",
        "solutionSteps": [
          {
            "explanation": "Identify the common ratio",
            "workingOut": "r = 3"
          }
        ]
      },
      {
        "id": "y12a-8a-q3c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) Use the formula \\( T_n = a r^{n-1} \\) to find the sixth term \\( T_6 \\).",
        "a": "972",
        "solutionSteps": [
          {
            "explanation": "Identify parameters",
            "workingOut": "a = 4, \\quad r = 3, \\quad n = 6"
          },
          {
            "explanation": "Substitute into the term formula",
            "workingOut": "T_6 = 4 \\times 3^{6-1}"
          },
          {
            "explanation": "Calculate the power and final value",
            "workingOut": "T_6 = 4 \\times 3^5 = 4 \\times 243 = 972"
          }
        ]
      },
      {
        "id": "y12a-8a-q3d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "d) Use the formula \\( S_n = \\frac{a(r^n - 1)}{r - 1} \\) to find the sum \\( S_6 \\) of the first six terms.",
        "a": "1456",
        "solutionSteps": [
          {
            "explanation": "Identify parameters",
            "workingOut": "a = 4, \\quad r = 3, \\quad n = 6"
          },
          {
            "explanation": "Substitute into the sum formula",
            "workingOut": "S_6 = \\frac{4(3^6 - 1)}{3 - 1}"
          },
          {
            "explanation": "Simplify the denominator and evaluate",
            "workingOut": "S_6 = \\frac{4(729 - 1)}{2} = 2 \\times 728 = 1456"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q4",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Answer the following questions about decaying geometric series:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q4a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) Show that the sequence 162, 54, 18, \\dots is a GP.",
        "a": "We check that the ratio of consecutive terms is constant:\n\\( \\frac{54}{162} = \\frac{1}{3} \\)\n\\( \\frac{18}{54} = \\frac{1}{3} \\)\nSince the common ratio is constant at \\( r = \\frac{1}{3} \\), it is a geometric progression.",
        "solutionSteps": [
          {
            "explanation": "Calculate consecutive ratios",
            "workingOut": "\\frac{54}{162} = \\frac{1}{3}, \\quad \\frac{18}{54} = \\frac{1}{3}"
          },
          {
            "explanation": "Confirm constant ratio",
            "workingOut": "\\text{GP with } r = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q4bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) Write down the first term \\( a \\).",
        "a": "162",
        "solutionSteps": [
          {
            "explanation": "State first term",
            "workingOut": "a = 162"
          }
        ]
      },
      {
        "id": "y12a-8a-q4bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) Write down the common ratio \\( r \\).",
        "a": "1/3",
        "solutionSteps": [
          {
            "explanation": "State common ratio",
            "workingOut": "r = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q4c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) Use the formula \\( T_n = a r^{n-1} \\) to find the sixth term \\( T_6 \\).",
        "a": "2/3",
        "solutionSteps": [
          {
            "explanation": "Substitute into the term formula",
            "workingOut": "T_6 = 162 \\times \\left(\\frac{1}{3}\\right)^{6-1}"
          },
          {
            "explanation": "Calculate power",
            "workingOut": "T_6 = 162 \\times \\frac{1}{243}"
          },
          {
            "explanation": "Simplify the fraction",
            "workingOut": "T_6 = \\frac{162}{243} = \\frac{2}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q4d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "d) Use the formula \\( S_n = \\frac{a(1-r^n)}{1-r} \\) to find the sum \\( S_6 \\) of the first six terms.",
        "a": "728/3",
        "solutionSteps": [
          {
            "explanation": "Substitute values into sum formula",
            "workingOut": "S_6 = \\frac{162 \\left(1 - \\left(\\frac{1}{3}\\right)^6\\right)}{1 - \\frac{1}{3}}"
          },
          {
            "explanation": "Simplify denominator and power",
            "workingOut": "S_6 = \\frac{162 \\left(1 - \\frac{1}{729}\\right)}{\\frac{2}{3}}"
          },
          {
            "explanation": "Calculate product",
            "workingOut": "S_6 = 162 \\times \\frac{3}{2} \\times \\frac{728}{729} = 243 \\times \\frac{728}{729} = \\frac{728}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q4ei",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "e) i) Give a reason why this series has a limiting sum.",
        "a": "A geometric series has a limiting sum if the absolute value of the common ratio is strictly less than 1. Here, \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), so a limiting sum exists.",
        "solutionSteps": [
          {
            "explanation": "State convergence condition",
            "workingOut": "|r| < 1 \\text{ for convergence}"
          },
          {
            "explanation": "Compare ratio",
            "workingOut": "\\left|\\frac{1}{3}\\right| < 1 \\implies \\text{converges}"
          }
        ]
      },
      {
        "id": "y12a-8a-q4eii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "e) ii) Use the formula \\( S_{\\infty} = \\frac{a}{1-r} \\) to find the limiting sum.",
        "a": "243",
        "solutionSteps": [
          {
            "explanation": "Substitute into the limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{162}{1 - \\frac{1}{3}}"
          },
          {
            "explanation": "Calculate final sum",
            "workingOut": "S_{\\infty} = \\frac{162}{\\frac{2}{3}} = 162 \\times \\frac{3}{2} = 243"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q5",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to arithmetic progressions:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q5ai",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) Consider the series \\( 43 + 49 + 55 + \\dots + 115 \\). Show that it is an arithmetic progression.",
        "a": "Consecutive differences are constant: \\( 49 - 43 = 6 \\) and \\( 55 - 49 = 6 \\). Thus it is an AP with \\( a = 43 \\) and \\( d = 6 \\).",
        "solutionSteps": [
          {
            "explanation": "Verify differences",
            "workingOut": "49 - 43 = 6, \\quad 55 - 49 = 6"
          }
        ]
      },
      {
        "id": "y12a-8a-q5aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) State the first term \\( a \\) of the series.",
        "a": "43",
        "solutionSteps": [
          {
            "explanation": "Identify first term",
            "workingOut": "a = 43"
          }
        ]
      },
      {
        "id": "y12a-8a-q5aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) State the common difference \\( d \\) of the series.",
        "a": "6",
        "solutionSteps": [
          {
            "explanation": "Identify common difference",
            "workingOut": "d = 6"
          }
        ]
      },
      {
        "id": "y12a-8a-q5aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) How many terms are there in this series?",
        "a": "13",
        "solutionSteps": [
          {
            "explanation": "Solve term equation",
            "workingOut": "T_n = 43 + (n-1) \\times 6 = 115"
          },
          {
            "explanation": "Find n",
            "workingOut": "6(n-1) = 72 \\implies n - 1 = 12 \\implies n = 13"
          }
        ]
      },
      {
        "id": "y12a-8a-q5av",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) v) Find the sum of the series.",
        "a": "1027",
        "solutionSteps": [
          {
            "explanation": "Use AP sum formula",
            "workingOut": "S_{13} = \\frac{13}{2} (43 + 115)"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "S_{13} = \\frac{13}{2} \\times 158 = 13 \\times 79 = 1027"
          }
        ]
      },
      {
        "id": "y12a-8a-q5bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) In a particular arithmetic series, the first term is 20 and the 41st term is -20. What is the sum of all the terms?",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Identify given values",
            "workingOut": "n = 41, \\quad a = 20, \\quad l = -20"
          },
          {
            "explanation": "Use first/last term sum formula",
            "workingOut": "S_{41} = \\frac{41}{2} (20 + (-20))"
          },
          {
            "explanation": "Calculate sum",
            "workingOut": "S_{41} = \\frac{41}{2} \\times 0 = 0"
          }
        ]
      },
      {
        "id": "y12a-8a-q5bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) What is the common difference?",
        "a": "-1",
        "solutionSteps": [
          {
            "explanation": "Use term formula for 41st term",
            "workingOut": "T_{41} = a + 40d = -20"
          },
          {
            "explanation": "Substitute a = 20",
            "workingOut": "20 + 40d = -20"
          },
          {
            "explanation": "Solve for d",
            "workingOut": "40d = -40 \\implies d = -1"
          }
        ]
      },
      {
        "id": "y12a-8a-q5ci",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) i) Consider the series \\( 80 + 76 + 72 + \\dots \\). Show that the series is an AP.",
        "a": "The differences are constant: \\( 76 - 80 = -4 \\) and \\( 72 - 76 = -4 \\). Thus it is an AP with \\( a = 80 \\) and \\( d = -4 \\).",
        "solutionSteps": [
          {
            "explanation": "Calculate differences",
            "workingOut": "76 - 80 = -4, \\quad 72 - 76 = -4"
          }
        ]
      },
      {
        "id": "y12a-8a-q5cii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) ii) Find the common difference \\( d \\) of this series.",
        "a": "-4",
        "solutionSteps": [
          {
            "explanation": "Identify common difference",
            "workingOut": "d = -4"
          }
        ]
      },
      {
        "id": "y12a-8a-q5ciii",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) iii) Show that the \\( n \\)th term is \\( T_n = 84 - 4n \\).",
        "a": "Using the formula \\( T_n = a + (n-1)d \\) with \\( a = 80 \\) and \\( d = -4 \\):\n\\( T_n = 80 + (n-1)(-4) = 80 - 4n + 4 = 84 - 4n \\).",
        "solutionSteps": [
          {
            "explanation": "Substitute into the term formula",
            "workingOut": "T_n = 80 + (n-1)(-4)"
          },
          {
            "explanation": "Simplify",
            "workingOut": "T_n = 80 - 4n + 4 = 84 - 4n"
          }
        ]
      },
      {
        "id": "y12a-8a-q5civ",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) iv) Find the value of the first negative term of this series.",
        "a": "-4",
        "solutionSteps": [
          {
            "explanation": "Set term formula less than 0",
            "workingOut": "84 - 4n < 0"
          },
          {
            "explanation": "Solve for n",
            "workingOut": "4n > 84 \\implies n > 21"
          },
          {
            "explanation": "Find the 22nd term value",
            "workingOut": "T_{22} = 84 - 4 \\times 22 = 84 - 88 = -4"
          }
        ]
      },
      {
        "id": "y12a-8a-q5cv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) v) Find an expression for the sum \\( S_n \\) of the first \\( n \\) terms of the series.",
        "a": "82n - 2n^2",
        "solutionSteps": [
          {
            "explanation": "Use AP sum formula",
            "workingOut": "S_n = \\frac{n}{2} \\left(2 \\times 80 + (n-1) \\times (-4)\\right)"
          },
          {
            "explanation": "Simplify inside brackets",
            "workingOut": "S_n = \\frac{n}{2} \\left(160 - 4n + 4\\right) = \\frac{n}{2} \\left(164 - 4n\\right)"
          },
          {
            "explanation": "Multiply out",
            "workingOut": "S_n = n(82 - 2n) = 82n - 2n^2"
          }
        ]
      },
      {
        "id": "y12a-8a-q5cvi",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) vi) Show that 42 is the minimum number of terms for which \\( S_n \\) is negative.",
        "a": "Set \\( S_n < 0 \\):\n\\( 82n - 2n^2 < 0 \\implies n(82 - 2n) < 0 \\)\nSince \\( n > 0 \\), we require \\( 82 - 2n < 0 \\implies 2n > 82 \\implies n > 41 \\).\nThe smallest integer value of \\( n \\) satisfying this is \\( n = 42 \\). Thus, 42 is the minimum number of terms.",
        "solutionSteps": [
          {
            "explanation": "Set sum formula less than 0",
            "workingOut": "n(82 - 2n) < 0"
          },
          {
            "explanation": "Solve inequality for positive n",
            "workingOut": "82 - 2n < 0 \\implies 2n > 82 \\implies n > 41"
          },
          {
            "explanation": "Find least integer",
            "workingOut": "n_{\\text{min}} = 42"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q6",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problems relating to geometric progressions:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q6ai",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) Consider the sequence 200, 204, 208.08, \\dots. Show that it is a geometric sequence.",
        "a": "The ratios of consecutive terms are constant:\n\\( \\frac{204}{200} = 1.02 \\)\n\\( \\frac{208.08}{204} = 1.02 \\)\nSince the common ratio is constant at \\( r = 1.02 \\), it is a geometric sequence.",
        "solutionSteps": [
          {
            "explanation": "Calculate consecutive ratios",
            "workingOut": "\\frac{204}{200} = 1.02, \\quad \\frac{208.08}{204} = 1.02"
          }
        ]
      },
      {
        "id": "y12a-8a-q6aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) Find the common ratio of the sequence.",
        "a": "1.02",
        "solutionSteps": [
          {
            "explanation": "State common ratio",
            "workingOut": "r = 1.02"
          }
        ]
      },
      {
        "id": "y12a-8a-q6aiiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) Find the 15th term, correct to two decimal places.",
        "a": "263.90",
        "solutionSteps": [
          {
            "explanation": "Use term formula",
            "workingOut": "T_{15} = 200 \\times 1.02^{14}"
          },
          {
            "explanation": "Calculate value and round",
            "workingOut": "T_{15} \\approx 200 \\times 1.31947879 = 263.8957 \\approx 263.90"
          }
        ]
      },
      {
        "id": "y12a-8a-q6aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) Find the sum of the first 15 terms, correct to two decimal places.",
        "a": "3458.69",
        "solutionSteps": [
          {
            "explanation": "Use geometric sum formula",
            "workingOut": "S_{15} = \\frac{200(1.02^{15} - 1)}{1.02 - 1}"
          },
          {
            "explanation": "Simplify and calculate",
            "workingOut": "S_{15} = \\frac{200(1.34586897 - 1)}{0.02} = 10000 \\times 0.34586897 = 3458.6897"
          },
          {
            "explanation": "Round to two decimal places",
            "workingOut": "3458.69"
          }
        ]
      },
      {
        "id": "y12a-8a-q6bi",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) The first few terms of a particular series are 1000 + 1200 + 1440 + \\dots. Show that it is a geometric series.",
        "a": "The ratios of consecutive terms are constant:\n\\( \\frac{1200}{1000} = 1.2 \\)\n\\( \\frac{1440}{1200} = 1.2 \\)\nHence, it is a geometric series with common ratio \\( r = 1.2 \\).",
        "solutionSteps": [
          {
            "explanation": "Calculate ratios",
            "workingOut": "\\frac{1200}{1000} = 1.2, \\quad \\frac{1440}{1200} = 1.2"
          }
        ]
      },
      {
        "id": "y12a-8a-q6bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) Find the common ratio.",
        "a": "1.2",
        "solutionSteps": [
          {
            "explanation": "State common ratio",
            "workingOut": "r = 1.2"
          }
        ]
      },
      {
        "id": "y12a-8a-q6biii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) iii) What is the sum of the first five terms?",
        "a": "7441.6",
        "solutionSteps": [
          {
            "explanation": "Use GP sum formula",
            "workingOut": "S_5 = \\frac{1000(1.2^5 - 1)}{1.2 - 1}"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "S_5 = \\frac{1000(2.48832 - 1)}{0.2} = 5000 \\times 1.48832 = 7441.6"
          }
        ]
      },
      {
        "id": "y12a-8a-q6biv",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) iv) Explain why the series does not have a limiting sum.",
        "a": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1. Since \\( r = 1.2 > 1 \\), the terms increase in magnitude, and the series diverges, meaning it has no limiting sum.",
        "solutionSteps": [
          {
            "explanation": "State convergence criteria",
            "workingOut": "|r| < 1 \\text{ required for limiting sum}"
          },
          {
            "explanation": "Compare ratio",
            "workingOut": "1.2 > 1 \\implies \\text{no limiting sum}"
          }
        ]
      },
      {
        "id": "y12a-8a-q6ci",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) i) Consider the series 36 + 12 + 4 + \\dots. Show that it is a geometric series.",
        "a": "The ratios of consecutive terms are constant:\n\\( \\frac{12}{36} = \\frac{1}{3} \\)\n\\( \\frac{4}{12} = \\frac{1}{3} \\)\nThus, it is a geometric series with common ratio \\( r = \\frac{1}{3} \\).",
        "solutionSteps": [
          {
            "explanation": "Verify consecutive ratios",
            "workingOut": "\\frac{12}{36} = \\frac{1}{3}, \\quad \\frac{4}{12} = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q6cii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) ii) Find the common ratio.",
        "a": "1/3",
        "solutionSteps": [
          {
            "explanation": "State common ratio",
            "workingOut": "r = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y12a-8a-q6ciii",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) iii) Explain why this geometric series has a limiting sum, and find its value.",
        "a": "Since \\( |r| = \\left|\\frac{1}{3}\\right| = \\frac{1}{3} < 1 \\), the series converges and has a limiting sum.\nIts value is \\( S_{\\infty} = \\frac{a}{1-r} = \\frac{36}{1 - \\frac{1}{3}} = \\frac{36}{\\frac{2}{3}} = 54 \\).",
        "solutionSteps": [
          {
            "explanation": "Justify convergence",
            "workingOut": "|r| = \\frac{1}{3} < 1"
          },
          {
            "explanation": "Calculate limiting sum",
            "workingOut": "S_{\\infty} = \\frac{36}{1 - \\frac{1}{3}} = 54"
          }
        ]
      },
      {
        "id": "y12a-8a-q6civ",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) iv) Find the sum of the first ten terms, correct to three decimal places.",
        "a": "53.999",
        "solutionSteps": [
          {
            "explanation": "Use GP sum formula for 10 terms",
            "workingOut": "S_{10} = \\frac{36(1 - (1/3)^{10})}{1 - 1/3}"
          },
          {
            "explanation": "Simplify and calculate",
            "workingOut": "S_{10} = 54 \\left(1 - \\frac{1}{59049}\\right) = 54 - \\frac{54}{59049} \\approx 53.99908"
          },
          {
            "explanation": "Round to 3 decimal places",
            "workingOut": "53.999"
          }
        ]
      },
      {
        "id": "y12a-8a-q6cv",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) v) Explain why the sum of the first ten terms and the limiting sum are approximately equal.",
        "a": "The sum of the first ten terms is \\( 53.999 \\) (correct to 3 decimal places) and the limiting sum is \\( 54 \\). The difference is only \\( 54 \\times (1/3)^{10} \\approx 0.0009 \\), which is negligible.",
        "solutionSteps": [
          {
            "explanation": "Identify the difference",
            "workingOut": "S_{\\infty} - S_{10} = 54 \\times \\left(\\frac{1}{3}\\right)^{10} \\approx 0.000915"
          },
          {
            "explanation": "Conclude they are approximately equal",
            "workingOut": "53.999 \\approx 54.000"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q7",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about arithmetic salary growth:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q7a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) A graphic designer starts on an annual salary of $65,000, with annual increments of $4,500. Find his annual salary in the 8th year.",
        "a": "96500",
        "solutionSteps": [
          {
            "explanation": "Set up arithmetic sequence",
            "workingOut": "a = 65000, \\quad d = 4500, \\quad n = 8"
          },
          {
            "explanation": "Use term formula",
            "workingOut": "T_8 = 65000 + 7 \\times 4500"
          },
          {
            "explanation": "Calculate salary",
            "workingOut": "T_8 = 65000 + 31500 = 96500"
          }
        ]
      },
      {
        "id": "y12a-8a-q7b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Find his total earnings at the end of 8 years.",
        "a": "646000",
        "solutionSteps": [
          {
            "explanation": "Use AP sum formula with n=8",
            "workingOut": "S_8 = \\frac{8}{2}(a + T_8)"
          },
          {
            "explanation": "Substitute a = 65000, T_8 = 96500",
            "workingOut": "S_8 = 4(65000 + 96500)"
          },
          {
            "explanation": "Calculate total earnings",
            "workingOut": "S_8 = 4 \\times 161500 = 646000"
          }
        ]
      },
      {
        "id": "y12a-8a-q7c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) In which year will his salary first reach $101,000? State the year as an integer (e.g. 9).",
        "a": "9",
        "solutionSteps": [
          {
            "explanation": "Set term formula equal to 101000",
            "workingOut": "T_n = 65000 + (n-1) \\times 4500 = 101000"
          },
          {
            "explanation": "Solve for n - 1",
            "workingOut": "4500(n-1) = 36000 \\implies n-1 = 8"
          },
          {
            "explanation": "Find n",
            "workingOut": "n = 9"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q8",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Solve the following problem about compound interest salary growth:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q8a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) A software engineer receives an annual salary of $90,000, with 6% increments each year. Show that her annual salary forms a GP.",
        "a": "Each year, the salary is multiplied by a factor of \\( 1 + 0.06 = 1.06 \\). Since the multiplier is constant, the salary sequence is geometric: \\( 90000, 95400, 101124, \\dots \\) with common ratio \\( r = 1.06 \\).",
        "solutionSteps": [
          {
            "explanation": "Determine consecutive term ratio",
            "workingOut": "T_{n+1} = T_n \\times 1.06 \\implies \\frac{T_{n+1}}{T_n} = 1.06"
          },
          {
            "explanation": "Conclude it is GP",
            "workingOut": "\\text{GP with ratio } 1.06"
          }
        ]
      },
      {
        "id": "y12a-8a-q8b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) State the common ratio of the geometric progression.",
        "a": "1.06",
        "solutionSteps": [
          {
            "explanation": "Identify ratio",
            "workingOut": "r = 1.06"
          }
        ]
      },
      {
        "id": "y12a-8a-q8c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) Find her annual salary in the 8th year, correct to the nearest dollar.",
        "a": "135327",
        "solutionSteps": [
          {
            "explanation": "Set up GP term formula",
            "workingOut": "a = 90000, \\quad r = 1.06, \\quad n = 8"
          },
          {
            "explanation": "Use term formula",
            "workingOut": "T_8 = 90000 \\times 1.06^7"
          },
          {
            "explanation": "Calculate value and round",
            "workingOut": "T_8 \\approx 90000 \\times 1.503630 = 135326.72 \\approx 135327"
          }
        ]
      },
      {
        "id": "y12a-8a-q8d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "d) Find her total earnings at the end of 8 years, correct to the nearest dollar.",
        "a": "890772",
        "solutionSteps": [
          {
            "explanation": "Use GP sum formula",
            "workingOut": "S_8 = \\frac{90000(1.06^8 - 1)}{1.06 - 1}"
          },
          {
            "explanation": "Substitute and compute",
            "workingOut": "S_8 = \\frac{90000(1.5938481 - 1)}{0.06}"
          },
          {
            "explanation": "Calculate total sum and round",
            "workingOut": "S_8 = 1500000 \\times 0.5938481 \\approx 890772.15 \\approx 890772"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q9",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Answer the following theoretical questions about APs and GPs:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q9ai",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) i) What can be said about the terms of an AP in which the common difference is zero?",
        "a": "All terms in the sequence are identical (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "solutionSteps": [
          {
            "explanation": "Analyze term formula with d = 0",
            "workingOut": "T_n = a + (n-1)(0) = a"
          }
        ]
      },
      {
        "id": "y12a-8a-q9aii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) ii) What can be said about the terms of an AP in which the common difference is negative?",
        "a": "The terms decrease in value as \\( n \\) increases. The sequence is strictly decreasing.",
        "solutionSteps": [
          {
            "explanation": "Analyze term difference",
            "workingOut": "T_{n+1} - T_n = d < 0 \\implies T_{n+1} < T_n"
          }
        ]
      },
      {
        "id": "y12a-8a-q9b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Why can't the common ratio of a GP be zero?",
        "a": "If the common ratio were zero, every term after the first term would be zero (e.g. \\( a, 0, 0, 0, \\dots \\)). By definition, a geometric sequence consists of non-zero terms so that the ratio of consecutive terms \\( \\frac{T_{n+1}}{T_n} \\) is defined.",
        "solutionSteps": [
          {
            "explanation": "Show terms if r = 0",
            "workingOut": "T_n = a \\times 0^{n-1} = 0 \\text{ for } n > 1"
          },
          {
            "explanation": "Explain division by zero issue",
            "workingOut": "\\text{Ratio } \\frac{T_{n+1}}{T_n} = \\frac{0}{0} \\text{ is undefined}"
          }
        ]
      },
      {
        "id": "y12a-8a-q9ci",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) i) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r < 0 \\)?",
        "a": "The signs of the terms alternate between positive and negative (e.g. \\( a, -ar, ar^2, -ar^3, \\dots \\)).",
        "solutionSteps": [
          {
            "explanation": "Examine term signs",
            "workingOut": "\\text{Sign}(T_{n+1}) = -\\text{Sign}(T_n)"
          }
        ]
      },
      {
        "id": "y12a-8a-q9cii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) ii) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r = 1 \\)?",
        "a": "All terms in the sequence are identical to the first term (it is a constant sequence: \\( a, a, a, \\dots \\)).",
        "solutionSteps": [
          {
            "explanation": "Use term formula with r = 1",
            "workingOut": "T_n = a \\times 1^{n-1} = a"
          }
        ]
      },
      {
        "id": "y12a-8a-q9ciii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) iii) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( r = -1 \\)?",
        "a": "The terms alternate in sign but remain constant in absolute value (e.g. \\( a, -a, a, -a, \\dots \\)).",
        "solutionSteps": [
          {
            "explanation": "Analyze term formula with r = -1",
            "workingOut": "T_n = a \\times (-1)^{n-1}"
          }
        ]
      },
      {
        "id": "y12a-8a-q9civ",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) iv) What can be said about the terms of a GP with common ratio \\( r \\) in which \\( 0 < |r| < 1 \\)?",
        "a": "The absolute value of the terms decreases, and the sequence converges towards zero.",
        "solutionSteps": [
          {
            "explanation": "Evaluate limit as n approaches infinity",
            "workingOut": "\\lim_{n \\to \\infty} |T_n| = \\lim_{n \\to \\infty} |a| |r|^{n-1} = 0"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q10",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Oliver and Sophia start their first jobs. Oliver starts at $55,000 per annum, with annual increases of $6,000. Sophia starts at $45,000 per annum, with annual increases of 12%.",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q10a1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find Oliver's wages in Year 1.",
        "a": "55000",
        "solutionSteps": [
          {
            "explanation": "Wages in Year 1 is first term",
            "workingOut": "T_1 = 55000"
          }
        ]
      },
      {
        "id": "y12a-8a-q10a2",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find Oliver's wages in Year 2.",
        "a": "61000",
        "solutionSteps": [
          {
            "explanation": "Add increment",
            "workingOut": "T_2 = 55000 + 6000 = 61000"
          }
        ]
      },
      {
        "id": "y12a-8a-q10a3",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find Oliver's wages in Year 3.",
        "a": "67000",
        "solutionSteps": [
          {
            "explanation": "Add increment to Year 2",
            "workingOut": "T_3 = 61000 + 6000 = 67000"
          }
        ]
      },
      {
        "id": "y12a-8a-q10a4",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Explain why Oliver's wages form an arithmetic sequence.",
        "a": "Oliver's annual wages increase by a constant amount of $6,000 each year. Since the difference between consecutive years is constant, they form an arithmetic sequence.",
        "solutionSteps": [
          {
            "explanation": "State constant difference",
            "workingOut": "T_{n+1} - T_n = 6000 \\text{ is constant}"
          }
        ]
      },
      {
        "id": "y12a-8a-q10b1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find Sophia's wages in Year 1.",
        "a": "45000",
        "solutionSteps": [
          {
            "explanation": "Year 1 salary is starting salary",
            "workingOut": "T_1 = 45000"
          }
        ]
      },
      {
        "id": "y12a-8a-q10b2",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find Sophia's wages in Year 2.",
        "a": "50400",
        "solutionSteps": [
          {
            "explanation": "Multiply Year 1 salary by 1.12",
            "workingOut": "T_2 = 45000 \\times 1.12 = 50400"
          }
        ]
      },
      {
        "id": "y12a-8a-q10b3",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find Sophia's wages in Year 3, correct to the nearest dollar.",
        "a": "56448",
        "solutionSteps": [
          {
            "explanation": "Multiply Year 2 salary by 1.12",
            "workingOut": "T_3 = 50400 \\times 1.12 = 56448"
          }
        ]
      },
      {
        "id": "y12a-8a-q10b4",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Explain why Sophia's wages form a geometric sequence.",
        "a": "Sophia's wages in each successive year are multiplied by a constant ratio of \\( 1 + 0.12 = 1.12 \\). Since the ratio of consecutive years' salaries is constant, they form a geometric sequence.",
        "solutionSteps": [
          {
            "explanation": "State constant ratio",
            "workingOut": "\\frac{T_{n+1}}{T_n} = 1.12 \\text{ is constant}"
          }
        ]
      },
      {
        "id": "y12a-8a-q10c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find the first year in which Sophia's annual wage is greater than Oliver's. State the year as an integer (e.g. 8).",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Formulate term equations",
            "workingOut": "W_{\\text{Oliver}}(n) = 55000 + 6000(n-1), \\quad W_{\\text{Sophia}}(n) = 45000 \\times 1.12^{n-1}"
          },
          {
            "explanation": "Compare salaries for n = 7",
            "workingOut": "W_{\\text{Oliver}}(7) = 91000, \\quad W_{\\text{Sophia}}(7) = 45000 \\times 1.12^6 \\approx 88822"
          },
          {
            "explanation": "Compare salaries for n = 8",
            "workingOut": "W_{\\text{Oliver}}(8) = 97000, \\quad W_{\\text{Sophia}}(8) = 45000 \\times 1.12^7 \\approx 99481"
          },
          {
            "explanation": "Conclude year",
            "workingOut": "W_{\\text{Sophia}}(8) > W_{\\text{Oliver}}(8) \\implies \\text{Year } 8"
          }
        ]
      },
      {
        "id": "y12a-8a-q10d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Find the difference in their wages in this first year (Year 8), correct to the nearest dollar.",
        "a": "2481",
        "solutionSteps": [
          {
            "explanation": "Calculate Oliver's Year 8 wage",
            "workingOut": "W_{\\text{Oliver}}(8) = 97000"
          },
          {
            "explanation": "Calculate Sophia's Year 8 wage",
            "workingOut": "W_{\\text{Sophia}}(8) = 45000 \\times 1.12^7 \\approx 99480.66"
          },
          {
            "explanation": "Find absolute difference",
            "workingOut": "\\text{Diff} = 99480.66 - 97000 = 2480.66"
          },
          {
            "explanation": "Round to nearest dollar",
            "workingOut": "\\text{Diff} \\approx 2481"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Compare the following linear and exponential wage scenarios:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q11ai",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) i) An initial salary of $60,000 increases by $4,000 each year. Find a formula for \\( T_n \\), the salary in the \\( n \\)th year.",
        "a": "4000n + 56000",
        "solutionSteps": [
          {
            "explanation": "Use AP term formula",
            "workingOut": "T_n = a + (n-1)d = 60000 + (n-1) \\times 4000"
          },
          {
            "explanation": "Simplify the expression",
            "workingOut": "T_n = 60000 + 4000n - 4000 = 4000n + 56000"
          }
        ]
      },
      {
        "id": "y12a-8a-q11aii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) ii) In which year will the salary first be at least twice the original salary? State the year as an integer.",
        "a": "16",
        "solutionSteps": [
          {
            "explanation": "Set up inequality for double salary",
            "workingOut": "T_n \\ge 120000"
          },
          {
            "explanation": "Substitute formula",
            "workingOut": "4000n + 56000 \\ge 120000"
          },
          {
            "explanation": "Solve for n",
            "workingOut": "4000n \\ge 64000 \\implies n \\ge 16"
          }
        ]
      },
      {
        "id": "y12a-8a-q11b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) An initial salary of $60,000 increases by 5% each year. What will the salary be in the tenth year, correct to the nearest dollar?",
        "a": "93080",
        "solutionSteps": [
          {
            "explanation": "Use GP term formula",
            "workingOut": "T_n = a r^{n-1} \\text{ with } a = 60000, \\; r = 1.05"
          },
          {
            "explanation": "Substitute n = 10",
            "workingOut": "T_{10} = 60000 \\times 1.05^9"
          },
          {
            "explanation": "Evaluate and round",
            "workingOut": "T_{10} \\approx 60000 \\times 1.551328 = 93079.69 \\approx 93080"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q12",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Refer to the diagram of the silo and troughs to solve the following problem:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q12ai",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) i) A farmhand is filling a row of feed troughs. The distance from the silo to the first trough is 8m, and adjacent troughs are 4m apart. He carries enough grain for one trough at a time. How far does he walk to fill the 1st trough and return to the silo?",
        "a": "16",
        "solutionSteps": [
          {
            "explanation": "Calculate round trip to 1st trough",
            "workingOut": "\\text{Distance} = 2 \\times 8 = 16"
          }
        ]
      },
      {
        "id": "y12a-8a-q12aii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) ii) How far does he walk to fill the 2nd trough and return to the silo?",
        "a": "24",
        "solutionSteps": [
          {
            "explanation": "Calculate distance to 2nd trough",
            "workingOut": "\\text{One way} = 8 + 4 = 12"
          },
          {
            "explanation": "Calculate round trip",
            "workingOut": "\\text{Distance} = 2 \\times 12 = 24"
          }
        ]
      },
      {
        "id": "y12a-8a-q12aiii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) iii) How far does he walk to fill the 3rd trough and return to the silo?",
        "a": "32",
        "solutionSteps": [
          {
            "explanation": "Calculate distance to 3rd trough",
            "workingOut": "\\text{One way} = 8 + 4 + 4 = 16"
          },
          {
            "explanation": "Calculate round trip",
            "workingOut": "\\text{Distance} = 2 \\times 16 = 32"
          }
        ]
      },
      {
        "id": "y12a-8a-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) How far will the farmhand walk to fill the \\( n \\)th trough and return to the silo?",
        "a": "8n + 8",
        "solutionSteps": [
          {
            "explanation": "Find distance of one way trip for nth trough",
            "workingOut": "d_n = 8 + 4(n-1) = 4n + 4"
          },
          {
            "explanation": "Multiply by 2 for round trip",
            "workingOut": "\\text{Distance} = 2(4n + 4) = 8n + 8"
          }
        ]
      },
      {
        "id": "y12a-8a-q12ci",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) i) If he walks a total of 72 metres to fill the furthest trough, how many feed troughs are there?",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Set round trip distance to 72",
            "workingOut": "8n + 8 = 72"
          },
          {
            "explanation": "Solve for n",
            "workingOut": "8n = 64 \\implies n = 8"
          }
        ]
      },
      {
        "id": "y12a-8a-q12cii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) ii) What is the total distance he will walk to fill all the troughs?",
        "a": "352",
        "solutionSteps": [
          {
            "explanation": "Express total distance as sum of AP",
            "workingOut": "S_8 = \\sum_{k=1}^8 (8k + 8)"
          },
          {
            "explanation": "Identify AP parameters",
            "workingOut": "n = 8, \\quad a = 16, \\quad T_8 = 72"
          },
          {
            "explanation": "Use AP sum formula",
            "workingOut": "S_8 = \\frac{8}{2}(16 + 72) = 4 \\times 88 = 352"
          }
        ]
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "SL": [-1, 0],
          "SR": [1, 0],
          "TL": [-1, 4],
          "TR": [1, 4],
          "R": [0, 5],
          "G1": [-2, 0],
          "G2": [18, 0],
          "T1L": [7.6, 0.4],
          "T1M": [8, 0],
          "T1R": [8.4, 0.4],
          "T2L": [11.6, 0.4],
          "T2M": [12, 0],
          "T2R": [12.4, 0.4],
          "T3L": [15.6, 0.4],
          "T3M": [16, 0],
          "T3R": [16.4, 0.4]
        },
        "segments": [
          { "from": "G1", "to": "G2" },
          { "from": "SL", "to": "TL" },
          { "from": "SR", "to": "TR" },
          { "from": "TL", "to": "TR" },
          { "from": "TL", "to": "R" },
          { "from": "TR", "to": "R" },
          { "from": "T1L", "to": "T1M" },
          { "from": "T1M", "to": "T1R" },
          { "from": "T2L", "to": "T2M" },
          { "from": "T2M", "to": "T2R" },
          { "from": "T3L", "to": "T3M" },
          { "from": "T3M", "to": "T3R" }
        ],
        "sideLabels": [
          { "between": ["SR", "T1M"], "text": "8 m" },
          { "between": ["T1M", "T2M"], "text": "4 m" },
          { "between": ["T2M", "T3M"], "text": "4 m" }
        ]
      }
    }
  },
  {
    "id": "y12a-8a-q13",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve the following problem about shopping days advertisement count:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q13a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) One Sunday, 150 days before Christmas, a store publishes an advertisement saying '150 shopping days until Christmas'. The store subsequently publishes similar advertisements every Sunday until Christmas. How many times does the store advertise?",
        "a": "22",
        "solutionSteps": [
          {
            "explanation": "Identify arithmetic progression of days remaining",
            "workingOut": "T_1 = 150, \\quad d = -7"
          },
          {
            "explanation": "Find the last term value on the last Sunday",
            "workingOut": "150 divided by 7 leaves a remainder of 3, so the term matches"
          },
          {
            "explanation": "Solve term equation for number of terms",
            "workingOut": "150 - 7(n-1) = 3"
          },
          {
            "explanation": "Calculate n",
            "workingOut": "7(n-1) = 147 \\implies n - 1 = 21 \\implies n = 22"
          }
        ]
      },
      {
        "id": "y12a-8a-q13b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the sum of the numbers of days published in all the advertisements.",
        "a": "1683",
        "solutionSteps": [
          {
            "explanation": "Identify sequence parameters",
            "workingOut": "n = 22, \\quad a = 150, \\quad l = 3"
          },
          {
            "explanation": "Use AP sum formula",
            "workingOut": "S_{22} = \\frac{22}{2} (150 + 3)"
          },
          {
            "explanation": "Calculate sum",
            "workingOut": "S_{22} = 11 \\times 153 = 1683"
          }
        ]
      },
      {
        "id": "y12a-8a-q13c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) On which day of the week is Christmas?",
        "a": "Wednesday",
        "solutionSteps": [
          {
            "explanation": "Find the number of days from the last advertisement (Sunday) to Christmas",
            "workingOut": "\\text{Last ad is } 3 \\text{ days before Christmas}"
          },
          {
            "explanation": "Count days forward from Sunday",
            "workingOut": "\\text{Sunday } + 3 \\text{ days} = \\text{Wednesday}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q14",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze the difference between linear and geometric user growth:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q14a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) The number of active users on a platform rose from 20,000 on 1st January to 180,000 on 1st of March. If the number of active users increased by a constant difference each month, what was the number of active users on 1st February?",
        "a": "100000",
        "solutionSteps": [
          {
            "explanation": "Identify arithmetic progression terms",
            "workingOut": "T_1 = 20000, \\quad T_3 = 180000"
          },
          {
            "explanation": "Apply AP mean to find T_2",
            "workingOut": "T_2 = \\frac{T_1 + T_3}{2}"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "T_2 = \\frac{20000 + 180000}{2} = 100000"
          }
        ]
      },
      {
        "id": "y12a-8a-q14b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) If the number of active users increased by a constant ratio each month, what was the number of active users on 1st February?",
        "a": "60000",
        "solutionSteps": [
          {
            "explanation": "Identify geometric progression terms",
            "workingOut": "T_1 = 20000, \\quad T_3 = 180000"
          },
          {
            "explanation": "Apply GP geometric mean to find T_2",
            "workingOut": "T_2 = \\sqrt{T_1 \\times T_3}"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "T_2 = \\sqrt{20000 \\times 180000} = \\sqrt{3600000000} = 60000"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q15",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Daniel earns $70,000 in his first year of work, and his salary increases each year by a fixed amount $D.",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q15a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find D if his salary in his tenth year is $115,000.",
        "a": "5000",
        "solutionSteps": [
          {
            "explanation": "Write expression for T_10",
            "workingOut": "T_{10} = a + 9D = 70000 + 9D"
          },
          {
            "explanation": "Set equal to 115000",
            "workingOut": "70000 + 9D = 115000"
          },
          {
            "explanation": "Solve for D",
            "workingOut": "9D = 45000 \\implies D = 5000"
          }
        ]
      },
      {
        "id": "y12a-8a-q15b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find D if his total earnings in the first ten years are $970,000.",
        "a": "6000",
        "solutionSteps": [
          {
            "explanation": "Write expression for S_10",
            "workingOut": "S_{10} = \\frac{10}{2} (2a + 9D) = 5 (140000 + 9D)"
          },
          {
            "explanation": "Set equal to 970000",
            "workingOut": "5(140000 + 9D) = 970000"
          },
          {
            "explanation": "Solve for D",
            "workingOut": "140000 + 9D = 194000 \\implies 9D = 54000 \\implies D = 6000"
          }
        ]
      },
      {
        "id": "y12a-8a-q15c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) If D = 5,000, in which year will his salary first exceed $130,000?",
        "a": "14",
        "solutionSteps": [
          {
            "explanation": "Set up inequality",
            "workingOut": "T_n = 70000 + (n-1) \\times 5000 > 130000"
          },
          {
            "explanation": "Solve for n - 1",
            "workingOut": "5000(n-1) > 60000 \\implies n - 1 > 12"
          },
          {
            "explanation": "Find smallest integer n",
            "workingOut": "n > 13 \\implies n_{\\text{min}} = 14"
          }
        ]
      },
      {
        "id": "y12a-8a-q15d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) If D = 4,000, show that his total earnings first exceed $1,300,000 during his 14th year.",
        "a": "We find the sum expression:\n\\( S_n = \\frac{n}{2} \\left(2 \\times 70000 + (n-1) \\times 4000\\right) = n(70000 + 2000n - 2000) = 2000n^2 + 68000n \\).\nFor \\( n = 13 \\):\n\\( S_{13} = 2000(169) + 68000(13) = 338000 + 884000 = 1222000 < 1300000 \\).\nFor \\( n = 14 \\):\n\\( S_{14} = 2000(196) + 68000(14) = 392000 + 952000 = 1344000 > 1300000 \\).\nHence, his total earnings first exceed $1,300,000 during the 14th year.",
        "solutionSteps": [
          {
            "explanation": "Find sum formula S_n",
            "workingOut": "S_n = 2000n^2 + 68000n"
          },
          {
            "explanation": "Calculate sum at n = 13",
            "workingOut": "S_{13} = 2000(169) + 68000(13) = 1,222,000"
          },
          {
            "explanation": "Calculate sum at n = 14",
            "workingOut": "S_{14} = 2000(196) + 68000(14) = 1,344,000"
          },
          {
            "explanation": "Conclude the year",
            "workingOut": "S_{13} < 1,300,000 < S_{14} \\implies \\text{Year } 14"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q16",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A line of cones is used in a fitness test. John starts at the first cone, runs 32m to the last cone and back, then runs 16m to the third cone and back, then runs 8m to the second cone and back.",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q16a1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) i) Write down the distances that John travels on each run as a comma-separated list.",
        "a": "64, 32, 16",
        "solutionSteps": [
          {
            "explanation": "Find distance for each run (each is double the one-way distance)",
            "workingOut": "d_1 = 2 \\times 32 = 64, \\quad d_2 = 2 \\times 16 = 32, \\quad d_3 = 2 \\times 8 = 16"
          }
        ]
      },
      {
        "id": "y12a-8a-q16a2",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) ii) Show that the distances form a GP.",
        "a": "The sequence of distances is 64, 32, 16. The ratio between consecutive terms is constant:\n\\( \\frac{32}{64} = \\frac{1}{2} \\)\n\\( \\frac{16}{32} = \\frac{1}{2} \\)\nSince the ratio is constant, the distances form a GP with common ratio \\( r = \\frac{1}{2} \\).",
        "solutionSteps": [
          {
            "explanation": "Compute ratios of consecutive terms",
            "workingOut": "\\frac{32}{64} = \\frac{1}{2}, \\quad \\frac{16}{32} = \\frac{1}{2}"
          }
        ]
      },
      {
        "id": "y12a-8a-q16a3",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) iii) Write down the first term \\( a \\) of the GP.",
        "a": "64",
        "solutionSteps": [
          {
            "explanation": "Identify first term",
            "workingOut": "a = 64"
          }
        ]
      },
      {
        "id": "y12a-8a-q16a4",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) iv) Write down the common ratio \\( r \\) of the GP.",
        "a": "1/2",
        "solutionSteps": [
          {
            "explanation": "Identify common ratio",
            "workingOut": "r = 1/2"
          }
        ]
      },
      {
        "id": "y12a-8a-q16b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Suppose that more and more cones are added to continue this pattern of runs. What total distance will John eventually travel?",
        "a": "128",
        "solutionSteps": [
          {
            "explanation": "Identify the infinite geometric series",
            "workingOut": "64 + 32 + 16 + \\dots"
          },
          {
            "explanation": "Use limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{a}{1-r} = \\frac{64}{1 - \\frac{1}{2}}"
          },
          {
            "explanation": "Calculate distance",
            "workingOut": "S_{\\infty} = \\frac{64}{0.5} = 128"
          }
        ]
      },
      {
        "id": "y12a-8a-q16c",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) The coach asks Stewart to run the original course in reverse, which he does. Explain why Stewart does not want more and more cones to be added to continue with his pattern.",
        "a": "In reverse, the distances are 16m, 32m, 64m, ... which forms a GP with common ratio \\( r = 2 \\). Since the common ratio is greater than 1 (\\( |r| = 2 \\ge 1 \\)), the terms grow indefinitely. The series does not converge and has no limiting sum, so Stewart would have to run an infinite total distance if more cones were added.",
        "solutionSteps": [
          {
            "explanation": "Identify the reverse sequence of distances",
            "workingOut": "16, \\; 32, \\; 64, \\; \\dots"
          },
          {
            "explanation": "Find common ratio",
            "workingOut": "r = 2"
          },
          {
            "explanation": "Explain divergence",
            "workingOut": "|r| \\ge 1 \\implies \\text{series diverges (no limiting sum)}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q17",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Solve the following challenge question about business sales modeling:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q17a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Sophia opens a boutique. Sales in successive years form a GP, and sales in the sixth year are two-thirds of the sales in the first year. Let sales in the first year be $S. Find, in exact form, the common ratio of the GP.",
        "a": "(2/3)^{1/5}",
        "solutionSteps": [
          {
            "explanation": "Write the term formula for the sixth year",
            "workingOut": "T_6 = S r^5 = \\frac{2}{3} S"
          },
          {
            "explanation": "Solve for r^5",
            "workingOut": "r^5 = \\frac{2}{3}"
          },
          {
            "explanation": "Find r",
            "workingOut": "r = \\left(\\frac{2}{3}\\right)^{\\frac{1}{5}}"
          }
        ]
      },
      {
        "id": "y12a-8a-q17b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Find the total sales of the company as time goes on, as a multiple of the first year's sales, correct to two decimal places.",
        "a": "12.84",
        "solutionSteps": [
          {
            "explanation": "Use limiting sum formula for GP",
            "workingOut": "S_{\\infty} = \\frac{S}{1 - r} = S \\times \\frac{1}{1 - \\left(\\frac{2}{3}\\right)^{\\frac{1}{5}}}"
          },
          {
            "explanation": "Calculate numerical value of ratio r",
            "workingOut": "r = (0.666667)^{0.2} \\approx 0.922108"
          },
          {
            "explanation": "Calculate the sum multiple",
            "workingOut": "\\text{Multiple} = \\frac{1}{1 - 0.922108} = \\frac{1}{0.077892} \\approx 12.838"
          },
          {
            "explanation": "Round to 2 decimal places",
            "workingOut": "12.84"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q18",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Solve the following theoretical problems about limiting sums of trigonometric series:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q18ai",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) i) Consider the series \\( 1 + \\cos^2 x + \\cos^4 x + \\dots \\). Show that the series is a GP, and find its common ratio.",
        "a": "The terms are \\( T_1 = 1 \\), \\( T_2 = \\cos^2 x \\), \\( T_3 = \\cos^4 x \\), etc. The ratio between consecutive terms is constant:\n\\( \\frac{T_{n+1}}{T_n} = \\frac{\\cos^{2n} x}{\\cos^{2(n-1)} x} = \\cos^2 x \\).\nSince this ratio is constant, the series is a GP with common ratio \\( r = \\cos^2 x \\).",
        "solutionSteps": [
          {
            "explanation": "Find the ratio of consecutive terms",
            "workingOut": "\\frac{T_2}{T_1} = \\frac{\\cos^2 x}{1} = \\cos^2 x"
          },
          {
            "explanation": "Confirm constant ratio",
            "workingOut": "r = \\cos^2 x"
          }
        ]
      },
      {
        "id": "y12a-8a-q18aii",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) ii) For which angles in the domain \\( 0 \\le x \\le 2\\pi \\) does this series not converge?",
        "a": "0, \\pi, 2\\pi",
        "solutionSteps": [
          {
            "explanation": "Recall convergence condition",
            "workingOut": "|r| < 1 \\implies \\cos^2 x < 1"
          },
          {
            "explanation": "Identify non-convergence condition",
            "workingOut": "\\cos^2 x = 1 \\implies \\cos x = \\pm 1"
          },
          {
            "explanation": "Solve in domain 0 to 2pi",
            "workingOut": "x = 0, \\; \\pi, \\; 2\\pi"
          }
        ]
      },
      {
        "id": "y12a-8a-q18aiii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) iii) Use the formula for the limiting sum of a GP to show that for other angles, the series converges to \\( S_{\\infty} = \\text{cosec}^2 x \\).",
        "a": "For other angles, \\( |\\cos^2 x| < 1 \\). The limiting sum is:\n\\( S_{\\infty} = \\frac{a}{1-r} = \\frac{1}{1 - \\cos^2 x} \\).\nUsing the trigonometric identity \\( 1 - \\cos^2 x = \\sin^2 x \\):\n\\( S_{\\infty} = \\frac{1}{\\sin^2 x} = \\text{cosec}^2 x \\).",
        "solutionSteps": [
          {
            "explanation": "Apply limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{1}{1 - \\cos^2 x}"
          },
          {
            "explanation": "Substitute trigonometric identity",
            "workingOut": "S_{\\infty} = \\frac{1}{\\sin^2 x} = \\text{cosec}^2 x"
          }
        ]
      },
      {
        "id": "y12a-8a-q18aiv",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) iv) What happens when \\( \\cos x = 0 \\)?",
        "a": "When \\( \\cos x = 0 \\), the series becomes \\( 1 + 0 + 0 + \\dots = 1 \\).\nUsing the limiting sum formula: \\( S_{\\infty} = \\text{cosec}^2 x = \\frac{1}{\\sin^2 x} = \\frac{1}{1 - 0} = 1 \\), which is consistent with the direct sum.",
        "solutionSteps": [
          {
            "explanation": "Directly substitute cos x = 0 into series",
            "workingOut": "1 + 0 + 0 + \\dots = 1"
          },
          {
            "explanation": "Compare with limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{1}{\\sin^2 x} = \\frac{1}{1 - 0} = 1"
          }
        ]
      },
      {
        "id": "y12a-8a-q18bi",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) i) Consider the series \\( 1 + \\sin^2 x + \\sin^4 x + \\dots \\). Show that the series is a GP, and find its common ratio.",
        "a": "The terms are \\( T_1 = 1 \\), \\( T_2 = \\sin^2 x \\), \\( T_3 = \\sin^4 x \\), etc. The ratio between consecutive terms is constant:\n\\( \\frac{T_{n+1}}{T_n} = \\frac{\\sin^{2n} x}{\\sin^{2(n-1)} x} = \\sin^2 x \\).\nSince this ratio is constant, the series is a GP with common ratio \\( r = \\sin^2 x \\).",
        "solutionSteps": [
          {
            "explanation": "Find the ratio of consecutive terms",
            "workingOut": "\\frac{T_2}{T_1} = \\frac{\\sin^2 x}{1} = \\sin^2 x"
          },
          {
            "explanation": "Confirm constant ratio",
            "workingOut": "r = \\sin^2 x"
          }
        ]
      },
      {
        "id": "y12a-8a-q18bii",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) ii) For which angles in the domain \\( 0 \\le x \\le 2\\pi \\) does this series not converge?",
        "a": "\\frac{\\pi}{2}, \\frac{3\\pi}{2}",
        "solutionSteps": [
          {
            "explanation": "Recall convergence condition",
            "workingOut": "|r| < 1 \\implies \\sin^2 x < 1"
          },
          {
            "explanation": "Identify non-convergence condition",
            "workingOut": "\\sin^2 x = 1 \\implies \\sin x = \\pm 1"
          },
          {
            "explanation": "Solve in domain 0 to 2pi",
            "workingOut": "x = \\frac{\\pi}{2}, \\; \\frac{3\\pi}{2}"
          }
        ]
      },
      {
        "id": "y12a-8a-q18biii",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) iii) Use the formula for the limiting sum of a GP to show that for other angles, the series converges to \\( S_{\\infty} = \\sec^2 x \\).",
        "a": "For other angles, \\( |\\sin^2 x| < 1 \\). The limiting sum is:\n\\( S_{\\infty} = \\frac{a}{1-r} = \\frac{1}{1 - \\sin^2 x} \\).\nUsing the trigonometric identity \\( 1 - \\sin^2 x = \\cos^2 x \\):\n\\( S_{\\infty} = \\frac{1}{\\cos^2 x} = \\sec^2 x \\).",
        "solutionSteps": [
          {
            "explanation": "Apply limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{1}{1 - \\sin^2 x}"
          },
          {
            "explanation": "Substitute trigonometric identity",
            "workingOut": "S_{\\infty} = \\frac{1}{\\cos^2 x} = \\sec^2 x"
          }
        ]
      },
      {
        "id": "y12a-8a-q18biv",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) iv) What happens when \\( \\sin x = 0 \\)?",
        "a": "When \\( \\sin x = 0 \\), the series becomes \\( 1 + 0 + 0 + \\dots = 1 \\).\nUsing the limiting sum formula: \\( S_{\\infty} = \\sec^2 x = \\frac{1}{\\cos^2 x} = \\frac{1}{1 - 0} = 1 \\), which is consistent with the direct sum.",
        "solutionSteps": [
          {
            "explanation": "Directly substitute sin x = 0 into series",
            "workingOut": "1 + 0 + 0 + \\dots = 1"
          },
          {
            "explanation": "Compare with limiting sum formula",
            "workingOut": "S_{\\infty} = \\frac{1}{\\cos^2 x} = \\frac{1}{1 - 0} = 1"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8a-q19",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Refer to the diagram of the two bulldozers and the bee to solve this problem:",
    "t": "Applications of APs and GPs",
    "subQuestions": [
      {
        "id": "y12a-8a-q19a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Two bulldozers are sitting in a construction site facing each other. Bulldozer A is at x = 0 and bulldozer B is 48m away at x = 48. There is a bee sitting on the scoop of bulldozer A. At 7:00 am, both bulldozers start moving towards each other at speed V m/s. The bee flies at 3V m/s back and forth. Show that the bee reaches bulldozer B when B is at x = 36.",
        "a": "Let the speed of the bulldozers be \\( V \\) m/s, so the bee flies at \\( 3V \\) m/s. At \\( t = 0 \\), B is at \\( x_B(0) = 48 \\). The position of B is \\( x_B(t) = 48 - Vt \\) and the bee is \\( x_{\\text{bee}}(t) = 3Vt \\). They meet when:\n\\( 3Vt = 48 - Vt \\implies 4Vt = 48 \\implies t = \\frac{12}{V} \\).\nAt this time, the position of B is:\n\\( x_B\\left(\\frac{12}{V}\\right) = 48 - V\\left(\\frac{12}{V}\\right) = 36 \\).\nHence, the bee reaches B when B is at \\( x = 36 \\).",
        "solutionSteps": [
          {
            "explanation": "Write positions as functions of time",
            "workingOut": "x_{\\text{bee}}(t) = 3Vt, \\quad x_B(t) = 48 - Vt"
          },
          {
            "explanation": "Solve for meeting time t",
            "workingOut": "3Vt = 48 - Vt \\implies 4Vt = 48 \\implies t = \\frac{12}{V}"
          },
          {
            "explanation": "Calculate position of B at meeting time",
            "workingOut": "x_B\\left(\\frac{12}{V}\\right) = 48 - V \\times \\frac{12}{V} = 36"
          }
        ]
      },
      {
        "id": "y12a-8a-q19b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Immediately the bee lands on B, it flies back to bulldozer A. Where is bulldozer A when the two meet?",
        "a": "18",
        "solutionSteps": [
          {
            "explanation": "Identify initial positions at start of second flight",
            "workingOut": "t_1 = \\frac{12}{V}, \\; x_A(t_1) = 12, \\; x_{\\text{bee}}(t_1) = 36"
          },
          {
            "explanation": "Formulate positions for t > t_1",
            "workingOut": "x_A(t) = Vt, \\; x_{\\text{bee}}(t) = 36 - 3V(t - t_1)"
          },
          {
            "explanation": "Solve for second meeting time t_2",
            "workingOut": "Vt = 36 - 3V(t - t_1) \\implies Vt = 36 - 3Vt + 36 \\implies 4Vt = 72 \\implies t = \\frac{18}{V}"
          },
          {
            "explanation": "Find position of A at this time",
            "workingOut": "x_A\\left(\\frac{18}{V}\\right) = V \\left(\\frac{18}{V}\\right) = 18"
          }
        ]
      },
      {
        "id": "y12a-8a-q19ci",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) i) Assume that the bulldozers keep moving towards each other and the bee keeps flying between the two. Where will they all eventually meet?",
        "a": "24",
        "solutionSteps": [
          {
            "explanation": "Identify when the two bulldozers meet",
            "workingOut": "x_A(t) = Vt, \\quad x_B(t) = 48 - Vt"
          },
          {
            "explanation": "Solve for meeting time",
            "workingOut": "Vt = 48 - Vt \\implies 2Vt = 48 \\implies t = \\frac{24}{V}"
          },
          {
            "explanation": "Find meeting position",
            "workingOut": "x_A\\left(\\frac{24}{V}\\right) = V \\left(\\frac{24}{V}\\right) = 24"
          }
        ]
      },
      {
        "id": "y12a-8a-q19cii",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) ii) How far will the bee have flown in total?",
        "a": "72",
        "solutionSteps": [
          {
            "explanation": "Identify total flight time and speed of bee",
            "workingOut": "t_{\\text{total}} = \\frac{24}{V}, \\quad \\text{speed} = 3V"
          },
          {
            "explanation": "Calculate total distance",
            "workingOut": "\\text{Distance} = 3V \\times \\frac{24}{V} = 72"
          }
        ]
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "G1": [-5, 0],
          "G2": [53, 0],
          "A1": [-3, 0],
          "A2": [0, 0],
          "A3": [0, 1.2],
          "A4": [-3, 1.2],
          "A5": [0.8, 0.5],
          "B1": [48, 0],
          "B2": [51, 0],
          "B3": [51, 1.2],
          "B4": [48, 1.2],
          "B5": [47.2, 0.5]
        },
        "segments": [
          { "from": "G1", "to": "G2" },
          { "from": "A1", "to": "A2" },
          { "from": "A2", "to": "A3" },
          { "from": "A3", "to": "A4" },
          { "from": "A4", "to": "A1" },
          { "from": "A2", "to": "A5" },
          { "from": "B1", "to": "B2" },
          { "from": "B2", "to": "B3" },
          { "from": "B3", "to": "B4" },
          { "from": "B4", "to": "B1" },
          { "from": "B1", "to": "B5" }
        ],
        "sideLabels": [
          { "between": ["A2", "B1"], "text": "48 m" }
        ]
      }
    }
  }
];
