export const Y11_CH4D_QUESTIONS = [
  // Q1
  {
    id: "y11a-4d-q1",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "It is known that \\(a(x+3) + b(x-2) = 6x + 8\\) for all values of \\(x\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a and b.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q1a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 2\\) to find \\(a\\).",
        a: "4",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 2\\) into the identity to eliminate the term containing \\(b\\).",
            workingOut: "a(2+3) + b(2-2) = 6(2) + 8",
            graphData: null
          },
          {
            explanation: "Simplify both sides of the equation.",
            workingOut: "5a + 0 = 12 + 8 \\implies 5a = 20",
            graphData: null
          },
          {
            explanation: "Solve for \\(a\\) by dividing by 5.",
            workingOut: "a = 4",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q1b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = -3\\) to find \\(b\\).",
        a: "2",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = -3\\) into the identity to eliminate the term containing \\(a\\).",
            workingOut: "a(-3+3) + b(-3-2) = 6(-3) + 8",
            graphData: null
          },
          {
            explanation: "Simplify the resulting expression.",
            workingOut: "0 - 5b = -18 + 8 \\implies -5b = -10",
            graphData: null
          },
          {
            explanation: "Solve for \\(b\\) by dividing by -5.",
            workingOut: "b = 2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q1c",
        type: "teacher_review",
        difficulty: "easy",
        timeLimit: 60,
        question: "Why were the values \\(x = 2\\) and \\(x = -3\\) chosen?",
        a: "They make one of the linear factors equal to zero, isolating the other constant.",
        solutionSteps: [
          {
            explanation: "Identify the linear factors attached to the coefficients \\(a\\) and \\(b\\).",
            workingOut: "\\mathrm{Factors\\:are\\:} (x+3) \\mathrm{\\:and\\:} (x-2)",
            graphData: null
          },
          {
            explanation: "Find the roots of these linear factors by setting them to zero.",
            workingOut: "x + 3 = 0 \\implies x = -3 \\\\ x - 2 = 0 \\implies x = 2",
            graphData: null
          },
          {
            explanation: "Choosing these values makes one of the coefficients zero, which simplifies the equation to directly solve for the other constant.",
            workingOut: "\\mathrm{Isolates\\:one\\:variable\\:at\\:a\\:time}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q1d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Equate the coefficients of like terms on both sides of the identity to get a pair of simultaneous equations in \\(a\\) and \\(b\\), and solve them. Do you get the same answer?",
        a: "a = 4, b = 2",
        solutionSteps: [
          {
            explanation: "Expand the left-hand side of the identity and group the terms by powers of \\(x\\).",
            workingOut: "ax + 3a + bx - 2b = (a+b)x + (3a-2b)",
            graphData: null
          },
          {
            explanation: "Equate the coefficients of \\(x\\) and the constant terms to the right-hand side \\(6x + 8\\).",
            workingOut: "a + b = 6 \\quad \\mathrm{and} \\quad 3a - 2b = 8",
            graphData: null
          },
          {
            explanation: "Solve the simultaneous equations. Multiply the first equation by 2 and add to the second.",
            workingOut: "2(a+b) + (3a-2b) = 2(6) + 8 \\implies 5a = 20 \\implies a = 4",
            graphData: null
          },
          {
            explanation: "Substitute \\(a = 4\\) back to find \\(b\\), confirming it yields the same values.",
            workingOut: "4 + b = 6 \\implies b = 2",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q2
  {
    id: "y11a-4d-q2",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "It is given that \\(a(x+4) + b(x-1) = 5x + 5\\) for all values of \\(x\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a and b.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q2a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 1\\) to find \\(a\\).",
        a: "2",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 1\\) into the identity to eliminate \\(b(x-1)\\).",
            workingOut: "a(1+4) + b(1-1) = 5(1) + 5",
            graphData: null
          },
          {
            explanation: "Simplify the equation.",
            workingOut: "5a = 10",
            graphData: null
          },
          {
            explanation: "Divide by 5 to solve for \\(a\\).",
            workingOut: "a = 2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q2b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = -4\\) to find \\(b\\).",
        a: "3",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = -4\\) to make the term \\(a(x+4)\\) zero.",
            workingOut: "a(-4+4) + b(-4-1) = 5(-4) + 5",
            graphData: null
          },
          {
            explanation: "Simplify the equation.",
            workingOut: "-5b = -15",
            graphData: null
          },
          {
            explanation: "Divide by -5 to solve for \\(b\\).",
            workingOut: "b = 3",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q2c",
        type: "teacher_review",
        difficulty: "easy",
        timeLimit: 60,
        question: "Why were the values \\(x = 1\\) and \\(x = -4\\) chosen?",
        a: "They are the roots of the linear factors, which makes them vanish.",
        solutionSteps: [
          {
            explanation: "Identify the linear expressions on the left-hand side.",
            workingOut: "\\mathrm{Expressions\\:are\\:} x+4 \\mathrm{\\:and\\:} x-1",
            graphData: null
          },
          {
            explanation: "Determine the roots of these expressions.",
            workingOut: "x + 4 = 0 \\implies x = -4 \\\\ x - 1 = 0 \\implies x = 1",
            graphData: null
          },
          {
            explanation: "Using these roots eliminates one variable and allows solving for the other directly.",
            workingOut: "\\mathrm{Eliminates\\:one\\:term\\:at\\:a\\:time}",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q2d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Equate the coefficients of like terms to get a pair of simultaneous equations in \\(a\\) and \\(b\\), and solve them.",
        a: "a = 2, b = 3",
        solutionSteps: [
          {
            explanation: "Expand and collect like terms on the left-hand side.",
            workingOut: "(a+b)x + (4a-b) = 5x + 5",
            graphData: null
          },
          {
            explanation: "Equate the coefficient of \\(x\\) and the constant term.",
            workingOut: "a + b = 5 \\quad \\mathrm{and} \\quad 4a - b = 5",
            graphData: null
          },
          {
            explanation: "Add the two equations to eliminate \\(b\\).",
            workingOut: "(a+b) + (4a-b) = 5 + 5 \\implies 5a = 10 \\implies a = 2",
            graphData: null
          },
          {
            explanation: "Substitute \\(a = 2\\) back into \\(a+b = 5\\) to find \\(b\\).",
            workingOut: "2 + b = 5 \\implies b = 3",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q3
  {
    id: "y11a-4d-q3",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Let \\(3x^2 - 4x + 2 = a(x-1)^2 + b(x-1) + c\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a, b, and c.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q3a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Equate the coefficients of \\(x^2\\) to find the value of \\(a\\).",
        a: "3",
        solutionSteps: [
          {
            explanation: "Identify the term containing \\(x^2\\) on the right-hand side when expanded.",
            workingOut: "a(x-1)^2 = a(x^2 - 2x + 1) \\implies ax^2",
            graphData: null
          },
          {
            explanation: "Identify the coefficient of \\(x^2\\) on the left-hand side.",
            workingOut: "3x^2",
            graphData: null
          },
          {
            explanation: "Equate the coefficients of the quadratic term from both sides.",
            workingOut: "a = 3",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q3b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 1\\) into the identity to find the value of \\(c\\).",
        a: "1",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 1\\) into the entire quadratic identity.",
            workingOut: "3(1)^2 - 4(1) + 2 = a(1-1)^2 + b(1-1) + c",
            graphData: null
          },
          {
            explanation: "Evaluate the left-hand side.",
            workingOut: "3 - 4 + 2 = 1",
            graphData: null
          },
          {
            explanation: "Evaluate the right-hand side, noting that the terms with \\(a\\) and \\(b\\) become zero.",
            workingOut: "c = 1",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q3c",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 2\\) into the identity to find the value of \\(b\\).",
        a: "2",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 2\\), \\(a = 3\\), and \\(c = 1\\) into the identity.",
            workingOut: "3(2)^2 - 4(2) + 2 = 3(2-1)^2 + b(2-1) + 1",
            graphData: null
          },
          {
            explanation: "Simplify the left-hand side and right-hand side expressions.",
            workingOut: "12 - 8 + 2 = 3(1) + b(1) + 1 \\implies 6 = 4 + b",
            graphData: null
          },
          {
            explanation: "Solve the linear equation for \\(b\\).",
            workingOut: "b = 2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q3d",
        type: "teacher_review",
        difficulty: "easy",
        timeLimit: 60,
        question: "Why was the value \\(x = 2\\) chosen in part c?",
        a: "It makes the linear term (x - 1) equal to 1, simplifying the calculation.",
        solutionSteps: [
          {
            explanation: "Examine the linear factor in the identity.",
            workingOut: "x - 1",
            graphData: null
          },
          {
            explanation: "Determine the value of \\(x\\) that makes the factor equal to 1.",
            workingOut: "x - 1 = 1 \\implies x = 2",
            graphData: null
          },
          {
            explanation: "Using this value simplifies the expanded terms \\((x-1)^2\\) and \\((x-1)\\) to 1, leaving a very simple equation to solve for \\(b\\).",
            workingOut: "\\mathrm{Simplifies\\:arithmetic\\:to\\:1}",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q4
  {
    id: "y11a-4d-q4",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Suppose that \\(x^2 - x + 3 = a(x-2)^2 + b(x-2) + c\\) for all values of \\(x\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a, b, and c.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q4a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Equate the coefficients of \\(x^2\\) to find the value of \\(a\\).",
        a: "1",
        solutionSteps: [
          {
            explanation: "Identify the leading coefficient on the left hand side of the equation.",
            workingOut: "x^2 \\implies 1",
            graphData: null
          },
          {
            explanation: "Determine the leading term after expanding the right hand side, where \\(a(x-2)^2\\) expands to \\(ax^2 - 4ax + 4a\\).",
            workingOut: "a(x-2)^2 \\implies ax^2",
            graphData: null
          },
          {
            explanation: "Equate the coefficients of \\(x^2\\) from both sides to find the value of \\(a\\).",
            workingOut: "a = 1",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q4b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 2\\) into the identity to find the value of \\(c\\).",
        a: "5",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 2\\) into both sides of the identity.",
            workingOut: "2^2 - 2 + 3 = a(2-2)^2 + b(2-2) + c",
            graphData: null
          },
          {
            explanation: "Evaluate the left-hand side.",
            workingOut: "4 - 2 + 3 = 5",
            graphData: null
          },
          {
            explanation: "State the value of \\(c\\).",
            workingOut: "c = 5",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q4c",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = 3\\) into the identity to find the value of \\(b\\).",
        a: "3",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 3\\), \\(a = 1\\), and \\(c = 5\\) into the equation.",
            workingOut: "3^2 - 3 + 3 = 1(3-2)^2 + b(3-2) + 5",
            graphData: null
          },
          {
            explanation: "Simplify the equation.",
            workingOut: "9 = 1(1) + b(1) + 5 \\implies 9 = 6 + b",
            graphData: null
          },
          {
            explanation: "Solve for \\(b\\).",
            workingOut: "b = 3",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q4d",
        type: "teacher_review",
        difficulty: "easy",
        timeLimit: 60,
        question: "Why was the value \\(x = 3\\) chosen in part c?",
        a: "It makes the linear term (x - 2) equal to 1, simplifying the calculation.",
        solutionSteps: [
          {
            explanation: "Look at the factor \\(x-2\\).",
            workingOut: "x - 2",
            graphData: null
          },
          {
            explanation: "Solve for when this factor is 1.",
            workingOut: "x - 2 = 1 \\implies x = 3",
            graphData: null
          },
          {
            explanation: "Using \\(x=3\\) reduces all powers of \\((x-2)\\) to 1, which simplifies substitution math.",
            workingOut: "\\mathrm{Reduces\\:arithmetic\\:complexity}",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q5
  {
    id: "y11a-4d-q5",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "The quadratic \\(f(x) = a(x+2)^2 + b(x+2) + c\\) has the same graph as \\(g(x) = 3x^2 - 2x + 1\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a, b, and c.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q5a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Compare the coefficients of \\(x^2\\) to find the value of \\(a\\).",
        a: "3",
        solutionSteps: [
          {
            explanation: "Write down the expanded leading term of \\(f(x)\\).",
            workingOut: "a(x+2)^2 = ax^2 + 4ax + 4a",
            graphData: null
          },
          {
            explanation: "Identify the leading coefficient of \\(g(x)\\).",
            workingOut: "3x^2",
            graphData: null
          },
          {
            explanation: "Equate the coefficients of \\(x^2\\).",
            workingOut: "a = 3",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q5b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute \\(x = -2\\) to find the value of \\(c\\).",
        a: "17",
        solutionSteps: [
          {
            explanation: "Evaluate \\(f(-2)\\) and set it equal to \\(g(-2)\\).",
            workingOut: "f(-2) = c \\quad \\mathrm{and} \\quad g(-2) = 3(-2)^2 - 2(-2) + 1",
            graphData: null
          },
          {
            explanation: "Calculate the value.",
            workingOut: "c = 3(4) + 4 + 1",
            graphData: null
          },
          {
            explanation: "State the final value of \\(c\\).",
            workingOut: "c = 17",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q5c",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Substitute another suitable value of \\(x\\) to determine \\(b\\).",
        a: "-14",
        solutionSteps: [
          {
            explanation: "Choose a simple value, e.g., \\(x = -1\\), and substitute it along with \\(a = 3\\) and \\(c = 17\\).",
            workingOut: "f(-1) = 3(-1+2)^2 + b(-1+2) + 17 = 3 + b + 17",
            graphData: null
          },
          {
            explanation: "Evaluate \\(g(-1)\\).",
            workingOut: "g(-1) = 3(-1)^2 - 2(-1) + 1 = 3 + 2 + 1 = 6",
            graphData: null
          },
          {
            explanation: "Set \\(f(-1) = g(-1)\\) and solve for \\(b\\).",
            workingOut: "20 + b = 6 \\implies b = -14",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q5d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Write down the resulting quadratic identity.",
        a: "3x^2-2x+1 = 3(x+2)^2-14(x+2)+17",
        solutionSteps: [
          {
            explanation: "Collect the calculated coefficients.",
            workingOut: "a = 3, \\quad b = -14, \\quad c = 17",
            graphData: null
          },
          {
            explanation: "Substitute these coefficients back into \\(f(x)\\).",
            workingOut: "f(x) = 3(x+2)^2 - 14(x+2) + 17",
            graphData: null
          },
          {
            explanation: "Equate to \\(g(x)\\) to state the identity.",
            workingOut: "3x^2 - 2x + 1 = 3(x+2)^2 - 14(x+2) + 17",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q6a
  {
    id: "y11a-4d-q6a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find \\(a\\), \\(b\\) and \\(c\\) if \\(n^2 + n = a(n-3)^2 + b(n-3) + c\\) for all values of \\(n\\).",
    a: "a = 1, b = 7, c = 12",
    solution: "By comparing the coefficients of \\(n^2\\), we find \\(a = 1\\). Substituting \\(n = 3\\) yields \\(c = 3^2 + 3 = 12\\). Substituting \\(n = 4\\) yields \\(a(1) + b(1) + c = 4^2 + 4 \\implies 1 + b + 12 = 20 \\implies b = 7\\). Thus, \\(a = 1\\), \\(b = 7\\), and \\(c = 12\\).",
    t: "Quadratic identities",
    hint: "Use coefficient matching for the quadratic term, then substitute key values to solve for the other constants.",
    solutionSteps: [
      {
        explanation: "Equate coefficients of \\(n^2\\) from both sides.",
        workingOut: "a = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(n = 3\\) into the identity to eliminate the terms with \\(a\\) and \\(b\\).",
        workingOut: "3^2 + 3 = c \\implies c = 12",
        graphData: null
      },
      {
        explanation: "Substitute \\(n = 4\\), \\(a = 1\\), and \\(c = 12\\) into the identity to solve for \\(b\\).",
        workingOut: "1(4-3)^2 + b(4-3) + 12 = 4^2 + 4 \\implies 1 + b + 12 = 20 \\implies b = 7",
        graphData: null
      }
    ]
  },
  // Q6b
  {
    id: "y11a-4d-q6b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find \\(a\\), \\(b\\) and \\(c\\) if \\(3x^2 - 2x + 4 = a(x-2)^2 + b(x-2) + c\\) for all values of \\(x\\).",
    a: "a = 3, b = 10, c = 12",
    solution: "Comparing the coefficient of \\(x^2\\) gives \\(a = 3\\). Substituting \\(x = 2\\) yields \\(c = 3(2)^2 - 2(2) + 4 = 12\\). Substituting \\(x = 3\\) yields \\(a(1) + b(1) + c = 3(3)^2 - 2(3) + 4 \\implies 3 + b + 12 = 25 \\implies b = 10\\). Thus, \\(a = 3\\), \\(b = 10\\), and \\(c = 12\\).",
    t: "Quadratic identities",
    hint: "Equate \\(x^2\\) coefficients, then substitute \\(x = 2\\) and \\(x = 3\\).",
    solutionSteps: [
      {
        explanation: "Match the leading quadratic term coefficients.",
        workingOut: "a = 3",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 2\\) into the identity.",
        workingOut: "3(2)^2 - 2(2) + 4 = c \\implies c = 12",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 3\\), \\(a = 3\\), and \\(c = 12\\) to solve for \\(b\\).",
        workingOut: "3(3-2)^2 + b(3-2) + 12 = 3(3)^2 - 2(3) + 4 \\implies 15 + b = 25 \\implies b = 10",
        graphData: null
      }
    ]
  },
  // Q7a
  {
    id: "y11a-4d-q7a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Express \\(x^2\\) in the form \\(A(x+3)^2 + B(x+3) + C\\).",
    a: "A = 1, B = -6, C = 9",
    solution: "We compare coefficients: \\(A = 1\\). Substitute \\(x = -3 \\implies C = (-3)^2 = 9\\). Substitute \\(x = -2 \\implies A(1)^2 + B(1) + C = (-2)^2 \\implies 1 + B + 9 = 4 \\implies B = -6\\). Thus, \\(x^2 = (x+3)^2 - 6(x+3) + 9\\).",
    t: "Quadratic identities",
    hint: "Match the coefficients of \\(x^2\\), then substitute \\(x = -3\\) and \\(x = -2\\).",
    solutionSteps: [
      {
        explanation: "Match the coefficient of \\(x^2\\) to determine \\(A\\).",
        workingOut: "A = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = -3\\) to isolate the constant term \\(C\\).",
        workingOut: "(-3)^2 = C \\implies C = 9",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = -2\\), \\(A = 1\\), and \\(C = 9\\) into the identity to find \\(B\\).",
        workingOut: "1(-2+3)^2 + B(-2+3) + 9 = (-2)^2 \\implies 1 + B + 9 = 4 \\implies B = -6",
        graphData: null
      }
    ]
  },
  // Q7b
  {
    id: "y11a-4d-q7b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Express \\(x^2\\) in the form \\(A(x-3)^2 + B(x-3) + C\\).",
    a: "A = 1, B = 6, C = 9",
    solution: "Comparing coefficients yields \\(A = 1\\). Substituting \\(x = 3\\) yields \\(C = 3^2 = 9\\). Substituting \\(x = 4\\) yields \\(A(1)^2 + B(1) + C = 4^2 \\implies 1 + B + 9 = 16 \\implies B = 6\\). Thus, \\(x^2 = (x-3)^2 + 6(x-3) + 9\\).",
    t: "Quadratic identities",
    hint: "Identify the leading coefficient, then evaluate the identity at the root \\(x = 3\\).",
    solutionSteps: [
      {
        explanation: "Find \\(A\\) by comparing the quadratic term coefficient.",
        workingOut: "A = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 3\\) to eliminate terms with \\(A\\) and \\(B\\).",
        workingOut: "3^2 = C \\implies C = 9",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 4\\), \\(A = 1\\), and \\(C = 9\\) to solve for \\(B\\).",
        workingOut: "1(4-3)^2 + B(4-3) + 9 = 4^2 \\implies 1 + B + 9 = 16 \\implies B = 6",
        graphData: null
      }
    ]
  },
  // Q7c
  {
    id: "y11a-4d-q7c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Express \\(x^2\\) in the form \\(A(x+4)^2 + B(x+4) + C\\).",
    a: "A = 1, B = -8, C = 16",
    solution: "Comparing coefficients gives \\(A = 1\\). Substitute \\(x = -4 \\implies C = (-4)^2 = 16\\). Substitute \\(x = -3 \\implies 1(1) + B(1) + 16 = (-3)^2 \\implies 17 + B = 9 \\implies B = -8\\). Thus, \\(x^2 = (x+4)^2 - 8(x+4) + 16\\).",
    t: "Quadratic identities",
    hint: "Identify \\(A = 1\\), then substitute \\(x = -4\\) and \\(x = -3\\).",
    solutionSteps: [
      {
        explanation: "Determine the leading coefficient.",
        workingOut: "A = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = -4\\) to find the constant term \\(C\\).",
        workingOut: "(-4)^2 = C \\implies C = 16",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = -3\\), \\(A = 1\\), and \\(C = 16\\) to find \\(B\\).",
        workingOut: "1(-3+4)^2 + B(-3+4) + 16 = (-3)^2 \\implies 17 + B = 9 \\implies B = -8",
        graphData: null
      }
    ]
  },
  // Q8a
  {
    id: "y11a-4d-q8a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Express \\(3x^2 + 2x - 4\\) in the form \\(A(x+2)^2 + B(x+2) + C\\).",
    a: "A = 3, B = -10, C = 4",
    solution: "Comparing coefficients: \\(A = 3\\). Substitute \\(x = -2 \\implies C = 3(-2)^2 + 2(-2) - 4 = 12 - 4 - 4 = 4\\). Substitute \\(x = -1 \\implies A(1)^2 + B(1) + C = 3(-1)^2 + 2(-1) - 4 \\implies 3 + B + 4 = -3 \\implies 7 + B = -3 \\implies B = -10\\). Thus, \\(3x^2 + 2x - 4 = 3(x+2)^2 - 10(x+2) + 4\\).",
    t: "Quadratic identities",
    hint: "Identify the leading coefficient \\(A\\), then substitute \\(x = -2\\) and \\(x = -1\\).",
    solutionSteps: [
      {
        explanation: "Match the coefficient of the quadratic term to find \\(A\\).",
        workingOut: "A = 3",
        graphData: null
      },
      {
        explanation: "Substitute the root of the binomial term, \\(x = -2\\), to find \\(C\\).",
        workingOut: "3(-2)^2 + 2(-2) - 4 = C \\implies 12 - 4 - 4 = C \\implies C = 4",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = -1\\) along with \\(A = 3\\) and \\(C = 4\\) to find \\(B\\).",
        workingOut: "3(-1+2)^2 + B(-1+2) + 4 = 3(-1)^2 + 2(-1) - 4 \\implies 7 + B = -3 \\implies B = -10",
        graphData: null
      }
    ]
  },
  // Q8b
  {
    id: "y11a-4d-q8b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Express \\(2x^2 - 5x - 3\\) in the form \\(p(x-2)^2 + q(x-2) + r\\).",
    a: "p = 2, q = 3, r = -5",
    solution: "Comparing coefficients: \\(p = 2\\). Substitute \\(x = 2 \\implies r = 2(2)^2 - 5(2) - 3 = 8 - 10 - 3 = -5\\). Substitute \\(x = 3 \\implies p(1)^2 + q(1) + r = 2(3)^2 - 5(3) - 3 \\implies 2 + q - 5 = 0 \\implies q - 3 = 0 \\implies q = 3\\). Thus, \\(2x^2 - 5x - 3 = 2(x-2)^2 + 3(x-2) - 5\\).",
    t: "Quadratic identities",
    hint: "Set \\(p = 2\\), then substitute the root \\(x = 2\\) to determine \\(r\\).",
    solutionSteps: [
      {
        explanation: "Identify the leading coefficient directly.",
        workingOut: "p = 2",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 2\\) to isolate and calculate the constant term \\(r\\).",
        workingOut: "2(2)^2 - 5(2) - 3 = r \\implies 8 - 10 - 3 = r \\implies r = -5",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 3\\) along with \\(p = 2\\) and \\(r = -5\\) to find \\(q\\).",
        workingOut: "2(3-2)^2 + q(3-2) - 5 = 2(3)^2 - 5(3) - 3 \\implies 2 + q - 5 = 0 \\implies q = 3",
        graphData: null
      }
    ]
  },
  // Q9
  {
    id: "y11a-4d-q9",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Determine the equation of the parabola \\(y = ax^2 + bx + c\\) that passes through the three points \\(A(-1, 2)\\), \\(B(0, 5)\\) and \\(C(1, 12)\\).",
    a: "y = 2x^2 + 5x + 5",
    solution: "Substitute \\(B(0,5) \\implies c = 5\\). Substitute \\(A(-1,2) \\implies a - b + 5 = 2 \\implies a - b = -3\\). Substitute \\(C(1,12) \\implies a + b + 5 = 12 \\implies a + b = 7\\). Adding these equations gives \\(2a = 4 \\implies a = 2\\), which yields \\(b = 5\\). The equation is \\(y = 2x^2 + 5x + 5\\).",
    t: "Quadratic identities",
    hint: "Substitute \\(x = 0\\) first to find the value of \\(c\\). Then set up a system of two equations for \\(a\\) and \\(b\\).",
    solutionSteps: [
      {
        explanation: "Use the point \\(B(0, 5)\\) to find the constant term \\(c\\).",
        workingOut: "y(0) = a(0)^2 + b(0) + c = 5 \\implies c = 5",
        graphData: null
      },
      {
        explanation: "Substitute the point \\(A(-1, 2)\\) and \\(c = 5\\) into the equation.",
        workingOut: "a(-1)^2 + b(-1) + 5 = 2 \\implies a - b = -3",
        graphData: null
      },
      {
        explanation: "Substitute the point \\(C(1, 12)\\) and \\(c = 5\\) into the equation.",
        workingOut: "a(1)^2 + b(1) + 5 = 12 \\implies a + b = 7",
        graphData: null
      },
      {
        explanation: "Solve the linear system for \\(a\\) and \\(b\\) by adding the two equations.",
        workingOut: "(a - b) + (a + b) = -3 + 7 \\implies 2a = 4 \\implies a = 2 \\\\ 2 + b = 7 \\implies b = 5",
        graphData: null
      },
      {
        explanation: "State the final equation of the parabola.",
        workingOut: "y = 2x^2 + 5x + 5",
        graphData: null
      }
    ]
  },
  // Q10
  {
    id: "y11a-4d-q10",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the values of \\(a\\), \\(b\\) and \\(c\\) for which \\(2x^2 = a(x-1)^2 + b(x-2)^2 + c(x-3)^2\\) is an identity.",
    a: "a = 6, b = -6, c = 2",
    solution: "Substitute \\(x = 2 \\implies a(1) + c(1) = 2(2^2) = 8 \\implies a+c = 8\\). Substitute \\(x = 1 \\implies b(1) + c(4) = 2 \\implies b+4c = 2\\). Substitute \\(x = 3 \\implies a(4) + b(1) = 18 \\implies 4a+b = 18\\). Solving this system gives \\(a = 6\\), \\(b = -6\\), and \\(c = 2\\).",
    t: "Quadratic identities",
    hint: "Substitute \\(x = 1\\), \\(x = 2\\), and \\(x = 3\\) to generate three simultaneous equations.",
    solutionSteps: [
      {
        explanation: "Substitute \\(x = 2\\) into the identity.",
        workingOut: "a(2-1)^2 + b(2-2)^2 + c(2-3)^2 = 2(2)^2 \\implies a + c = 8",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 1\\) into the identity.",
        workingOut: "a(1-1)^2 + b(1-2)^2 + c(1-3)^2 = 2(1)^2 \\implies b + 4c = 2",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = 3\\) into the identity.",
        workingOut: "a(3-1)^2 + b(3-2)^2 + c(3-3)^2 = 2(3)^2 \\implies 4a + b = 18",
        graphData: null
      },
      {
        explanation: "Solve the system. Express \\(b\\) as \\(18-4a\\), substitute it into \\(b+4c=2\\), and combine with \\(a+c=8\\).",
        workingOut: "18 - 4a + 4c = 2 \\implies a - c = 4 \\\\ (a+c) + (a-c) = 8 + 4 \\implies 2a = 12 \\implies a = 6 \\\\ c = 8 - 6 = 2 \\\\ b = 18 - 4(6) = -6",
        graphData: null
      }
    ]
  },
  // Q11
  {
    id: "y11a-4d-q11",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find the unknown constants \\(a\\), \\(b\\) and \\(c\\) if \\(P(x) = ax^2 + b(x+1)^2 + c(x+2)^2\\) and \\(Q(x) = 5x^2 + 8x + 6\\) have the same graph.",
    a: "a = 2, b = 2, c = 1",
    solution: "Expand \\(P(x) = (a+b+c)x^2 + (2b+4c)x + (b+4c)\\). Compare with \\(Q(x)\\): \\(a+b+c=5\\), \\(2b+4c=8\\), and \\(b+4c=6\\). Subtracting the last two gives \\(b = 2\\), which yields \\(c = 1\\). Then \\(a = 2\\).",
    t: "Quadratic identities",
    hint: "Expand P(x) fully, group like terms, and equate the resulting coefficients to those of Q(x).",
    solutionSteps: [
      {
        explanation: "Expand \\(P(x)\\) and group by powers of \\(x\\).",
        workingOut: "P(x) = ax^2 + b(x^2 + 2x + 1) + c(x^2 + 4x + 4) = (a+b+c)x^2 + (2b+4c)x + (b+4c)",
        graphData: null
      },
      {
        explanation: "Equate the coefficients to those of \\(Q(x) = 5x^2 + 8x + 6\\).",
        workingOut: "a + b + c = 5 \\\\ 2b + 4c = 8 \\\\ b + 4c = 6",
        graphData: null
      },
      {
        explanation: "Solve the linear equations for \\(b\\) and \\(c\\).",
        workingOut: "(2b + 4c) - (b + 4c) = 8 - 6 \\implies b = 2 \\\\ 2 + 4c = 6 \\implies c = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(b=2\\) and \\(c=1\\) into the first equation to solve for \\(a\\).",
        workingOut: "a + 2 + 1 = 5 \\implies a = 2",
        graphData: null
      }
    ]
  },
  // Q12
  {
    id: "y11a-4d-q12",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Consider the identity \\(Am^2 + B(m-1)^2 = 4m - 2\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of A and B and the sum.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q12a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Find \\(A\\) and \\(B\\) such that \\(Am^2 + B(m-1)^2 = 4m - 2\\).",
        a: "A = 2, B = -2",
        solutionSteps: [
          {
            explanation: "Expand the left-hand side of the equation.",
            workingOut: "Am^2 + B(m^2 - 2m + 1) = (A + B)m^2 - 2Bm + B",
            graphData: null
          },
          {
            explanation: "Equate the coefficients to the right-hand side \\(4m - 2\\).",
            workingOut: "A + B = 0 \\\\ -2B = 4 \\\\ B = -2",
            graphData: null
          },
          {
            explanation: "Solve for \\(A\\) using \\(A = -B\\).",
            workingOut: "A = 2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q12b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Hence find the sum of \\(2 + 6 + 10 + \\dots + 98\\).",
        a: "1250",
        solutionSteps: [
          {
            explanation: "Identify the general term of the sequence \\(2, 6, 10, \\dots\\). The terms are of the form \\(4m - 2\\). Find the number of terms \\(N\\).",
            workingOut: "4m - 2 = 98 \\implies 4m = 100 \\implies m = 25",
            graphData: null
          },
          {
            explanation: "Rewrite the sum using the identity \\(4m - 2 = 2m^2 - 2(m-1)^2\\).",
            workingOut: "\\sum_{m=1}^{25} (4m - 2) = \\sum_{m=1}^{25} [2m^2 - 2(m-1)^2]",
            graphData: null
          },
          {
            explanation: "Observe that this is a telescoping sum and simplify.",
            workingOut: "2(1^2 - 0^2) + 2(2^2 - 1^2) + \\dots + 2(25^2 - 24^2) = 2(25^2 - 0) = 2(625) = 1250",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q13
  {
    id: "y11a-4d-q13",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Let \\(11x^2 - 5x + 4 = a(3-x)^2 + b(3-x) + c\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of a, b, and c.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q13a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Evaluate the constants \\(a\\), \\(b\\) and \\(c\\).",
        a: "a = 11, b = -61, c = 88",
        solutionSteps: [
          {
            explanation: "Determine \\(a\\) by matching the coefficient of \\(x^2\\). Note that \\(a(3-x)^2 = ax^2 + \\dots\\).",
            workingOut: "a = 11",
            graphData: null
          },
          {
            explanation: "Substitute \\(x = 3\\) to find \\(c\\).",
            workingOut: "11(3)^2 - 5(3) + 4 = c \\implies 99 - 15 + 4 = c \\implies c = 88",
            graphData: null
          },
          {
            explanation: "Substitute \\(x = 2\\) along with \\(a = 11\\) and \\(c = 88\\) to solve for \\(b\\).",
            workingOut: "11(2)^2 - 5(2) + 4 = 11(3-2)^2 + b(3-2) + 88 \\implies 38 = 11 + b + 88 \\implies b = -61",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q13b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Hence evaluate \\(11x^2 - 5x + 4\\) when \\(x = 2.99\\) without using a calculator.",
        a: "87.3911",
        solutionSteps: [
          {
            explanation: "Substitute \\(x = 2.99\\) into the identity form using \\(a = 11\\), \\(b = -61\\), and \\(c = 88\\).",
            workingOut: "11(3 - 2.99)^2 - 61(3 - 2.99) + 88",
            graphData: null
          },
          {
            explanation: "Evaluate the term \\(3 - 2.99\\).",
            workingOut: "3 - 2.99 = 0.01",
            graphData: null
          },
          {
            explanation: "Perform the arithmetic calculation.",
            workingOut: "11(0.01)^2 - 61(0.01) + 88 = 11(0.0001) - 0.61 + 88 = 0.0011 - 0.61 + 88 = 87.3911",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q14
  {
    id: "y11a-4d-q14",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Consider the identity \\(A(m+1)^2 + B(m-1)^2 = 8m\\). Complete the sub-questions.",
    a: "Refer to sub-questions for values of A and B and the sum.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q14a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Find \\(A\\) and \\(B\\) such that \\(A(m+1)^2 + B(m-1)^2 = 8m\\).",
        a: "A = 2, B = -2",
        solutionSteps: [
          {
            explanation: "Expand the left-hand side.",
            workingOut: "A(m^2 + 2m + 1) + B(m^2 - 2m + 1) = (A + B)m^2 + 2(A - B)m + (A + B)",
            graphData: null
          },
          {
            explanation: "Equate the coefficients to the right-hand side \\(8m\\).",
            workingOut: "A + B = 0 \\quad \\mathrm{and} \\quad 2(A - B) = 8",
            graphData: null
          },
          {
            explanation: "Solve the system: \\(A = -B \\implies -4B = 8 \\implies B = -2\\) and \\(A = 2\\).",
            workingOut: "A = 2, \\quad B = -2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q14b",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 120,
        question: "Hence find the sum of the first twelve multiples of 8.",
        a: "624",
        solutionSteps: [
          {
            explanation: "Express the sum of the first twelve multiples of 8 (8, 16, \\dots, 96) in sigma notation.",
            workingOut: "\\mathrm{Sum} = \\sum_{m=1}^{12} 8m",
            graphData: null
          },
          {
            explanation: "Substitute the identity \\(8m = 2(m+1)^2 - 2(m-1)^2\\) into the sum.",
            workingOut: "\\mathrm{Sum} = \\sum_{m=1}^{12} [2(m+1)^2 - 2(m-1)^2]",
            graphData: null
          },
          {
            explanation: "Expand the telescoping terms to cancel middle terms.",
            workingOut: "\\mathrm{Sum} = 2(12^2) + 2(13^2) - 2(0^2) - 2(1^2)",
            graphData: null
          },
          {
            explanation: "Evaluate the final arithmetic expression.",
            workingOut: "\\mathrm{Sum} = 2(144) + 2(169) - 2 = 288 + 338 - 2 = 624",
            graphData: null
          }
        ]
      }
    ]
  },
  // Q15
  {
    id: "y11a-4d-q15",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "Let \\(u\\), \\(v\\) and \\(w\\) be distinct real numbers. Substitute three appropriate values of \\(x\\) in order to show that the quadratic equation \\(\\frac{(u - x)(v - x)}{(u - w)(v - w)} + \\frac{(v - x)(w - x)}{(v - u)(w - u)} + \\frac{(w - x)(u - x)}{(w - v)(u - v)} = 1\\) holds for all values of \\(x\\).",
    a: "Substitute x = u, x = v, and x = w to show the quadratic equation holds at three distinct points.",
    solution: "Since the left-hand side is a quadratic expression in \\(x\\) (at most degree 2) and it equals the constant 1 (degree 0) at three distinct points \\(x = u\\), \\(x = v\\), and \\(x = w\\), by the uniqueness of quadratic identities, it must be an identity for all \\(x\\).",
    t: "Quadratic identities",
    hint: "Identify three values of x that make two of the three fractions vanish.",
    solutionSteps: [
      {
        explanation: "Substitute \\(x = u\\) into the left-hand side.",
        workingOut: "\\frac{(u - u)(v - u)}{(u - w)(v - w)} + \\frac{(v - u)(w - u)}{(v - u)(w - u)} + \\frac{(w - u)(u - u)}{(w - v)(u - v)} = 0 + 1 + 0 = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = v\\) into the left-hand side.",
        workingOut: "\\frac{(u - v)(v - v)}{(u - w)(v - w)} + \\frac{(v - v)(w - v)}{(v - u)(w - u)} + \\frac{(w - v)(u - v)}{(w - v)(u - v)} = 0 + 0 + 1 = 1",
        graphData: null
      },
      {
        explanation: "Substitute \\(x = w\\) into the left-hand side.",
        workingOut: "\\frac{(u - w)(v - w)}{(u - w)(v - w)} + \\frac{(v - w)(w - w)}{(v - u)(w - u)} + \\frac{(w - w)(u - w)}{(w - v)(u - v)} = 1 + 0 + 0 = 1",
        graphData: null
      },
      {
        explanation: "State the identity theorem: since two quadratics (the LHS and the RHS) agree at three distinct points, they must be identical for all values of \\(x\\).",
        workingOut: "\\mathrm{Identity\\:holds\\:for\\:all\\:} x",
        graphData: null
      }
    ]
  },
  // Q16
  {
    id: "y11a-4d-q16",
    type: "teacher_review",
    difficulty: "hard",
    timeLimit: 120,
    question: "An alternative approach to expressing quadratics in shifted forms. Complete the sub-questions.",
    a: "Refer to sub-questions for expressions.",
    solution: "See detailed steps below.",
    t: "Quadratic identities",
    subQuestions: [
      {
        id: "y11a-4d-q16a",
        type: "teacher_review",
        difficulty: "medium",
        timeLimit: 90,
        question: "Express \\(x^2\\) as a quadratic in \\((x - d)\\). Begin by writing \\(x^2 = ((x - d) + d)^2\\), then expand only the outer brackets of the RHS.",
        a: "(x-d)^2 + 2d(x-d) + d^2",
        solutionSteps: [
          {
            explanation: "Write \\(x^2\\) by adding and subtracting \\(d\\) inside the brackets.",
            workingOut: "x^2 = ((x-d) + d)^2",
            graphData: null
          },
          {
            explanation: "Treat \\((x-d)\\) as a single term and expand using the identity \\((A+B)^2 = A^2 + 2AB + B^2\\).",
            workingOut: "((x-d) + d)^2 = (x-d)^2 + 2d(x-d) + d^2",
            graphData: null
          },
          {
            explanation: "State the final algebraic identity.",
            workingOut: "x^2 = (x-d)^2 + 2d(x-d) + d^2",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q16b",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Use the formula found in part a to quickly find \\(x^2\\) as a quadratic in the given expressions.",
        a: "Refer to steps for parts i, ii, and iii.",
        solutionSteps: [
          {
            explanation: "For part (i) \\(x - 2\\), substitute \\(d = 2\\) into the identity.",
            workingOut: "x^2 = (x - 2)^2 + 4(x - 2) + 4",
            graphData: null
          },
          {
            explanation: "For part (ii) \\(x + 4\\), substitute \\(d = -4\\) into the identity.",
            workingOut: "x^2 = (x + 4)^2 - 8(x + 4) + 16",
            graphData: null
          },
          {
            explanation: "For part (iii) \\(x - 12\\), substitute \\(d = 12\\) into the identity.",
            workingOut: "x^2 = (x - 12)^2 + 24(x - 12) + 144",
            graphData: null
          }
        ]
      },
      {
        id: "y11a-4d-q16c",
        type: "teacher_review",
        difficulty: "hard",
        timeLimit: 120,
        question: "Use this method to express \\(3x^2 - 4x + 5\\) in terms of \\((x - 2)\\).",
        a: "3(x-2)^2 + 8(x-2) + 9",
        solutionSteps: [
          {
            explanation: "Substitute the expansion of \\(x^2\\) in terms of \\((x-2)\\) and \\(x = (x-2) + 2\\) into the expression.",
            workingOut: "3[(x-2)^2 + 4(x-2) + 4] - 4[(x-2) + 2] + 5",
            graphData: null
          },
          {
            explanation: "Distribute the coefficients.",
            workingOut: "[3(x-2)^2 + 12(x-2) + 12] - [4(x-2) + 8] + 5",
            graphData: null
          },
          {
            explanation: "Collect and simplify the terms.",
            workingOut: "3(x-2)^2 + (12 - 4)(x-2) + (12 - 8 + 5) = 3(x-2)^2 + 8(x-2) + 9",
            graphData: null
          }
        ]
      }
    ]
  }
];
