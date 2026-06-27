export const Y12A_CH1J_QUESTIONS = [
  {
    "id": "y12a-1j-q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "Find the 12th term of the arithmetic sequence:\n\\(-3, 1, 5, \\dots\\)",
    "opts": [
      {
        "text": "\\(41\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(38\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(37\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the first term and common difference, then use the general term formula for an AP.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common difference \\(d\\) from the sequence.",
        "workingOut": "\\(a = -3\\), \\(d = 1 - (-3) = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the \\(n\\)th term of an arithmetic sequence.",
        "workingOut": "\\(T_n = a + (n - 1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 12\\), \\(a = -3\\), and \\(d = 4\\) into the formula.",
        "workingOut": "\\(T_{12} = -3 + (12 - 1) \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(T_{12} = -3 + 11 \\times 4 = -3 + 44 = 41\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "The first and last terms of an arithmetic series are 10 and 60 respectively. If the sum of the series is 3535, how many terms are there in the series?",
    "opts": [
      {
        "text": "\\(101\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(51\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(110\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(102\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the arithmetic series sum formula containing the first and last terms.",
    "solutionSteps": [
      {
        "explanation": "Identify the given parameters of the arithmetic series.",
        "workingOut": "\\(a = 10\\), \\(L = 60\\), \\(S_n = 3535\\)",
        "graphData": null
      },
      {
        "explanation": "State the sum formula of an arithmetic series involving the first and last terms.",
        "workingOut": "\\(S_n = \\frac{n}{2}(a + L)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given parameters into the sum formula.",
        "workingOut": "\\(3535 = \\frac{n}{2}(10 + 60)\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear equation for the number of terms \\(n\\).",
        "workingOut": "\\(3535 = 35n \\implies n = 101\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q3",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "Find the sum of the first 11 terms of the geometric series:\n\\(2 - 1 + \\frac{1}{2} - \\frac{1}{4} + \\dots\\)",
    "opts": [
      {
        "text": "\\(\\frac{1023}{256}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{683}{512}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{341}{512}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2047}{1536}\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Determine the first term and the common ratio, then use the sum formula for a GP.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) from the geometric series.",
        "workingOut": "\\(a = 2\\), \\(r = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the formula for the sum of the first \\(n\\) terms of a geometric progression.",
        "workingOut": "\\(S_n = \\frac{a(1 - r^n)}{1 - r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 11\\), \\(a = 2\\), and \\(r = -\\frac{1}{2}\\) into the formula.",
        "workingOut": "\\(S_{11} = \\frac{2 \\left(1 - \\left(-\\frac{1}{2}\\right)^{11}\\right)}{1 - \\left(-\\frac{1}{2}\\right)}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction terms and calculate the exact sum value.",
        "workingOut": "\\(S_{11} = \\frac{2 \\left(1 + \\frac{1}{2048}\\right)}{\\frac{3}{2}} = \\frac{4}{3} \\times \\frac{2049}{2048} = \\frac{683}{512}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q4",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "For the geometric series:\n\\(2\\pi + \\pi + \\frac{\\pi}{2} + \\dots\\)\n\nCalculate the exact value of the sum of the first 6 terms.",
    "opts": [
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{63\\pi}{64}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{63\\pi}{32}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{63\\pi}{16}\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and the common ratio, then use the GP sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) from the geometric series.",
        "workingOut": "\\(a = 2\\pi\\), \\(r = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the sum formula of a geometric progression.",
        "workingOut": "\\(S_n = \\frac{a(1 - r^n)}{1 - r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 6\\), \\(a = 2\\pi\\), and \\(r = \\frac{1}{2}\\) into the sum formula.",
        "workingOut": "\\(S_6 = \\frac{2\\pi \\left(1 - \\left(\\frac{1}{2}\\right)^6\\right)}{1 - \\frac{1}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the denominator and evaluate the expression.",
        "workingOut": "\\(S_6 = \\frac{2\\pi \\left(1 - \\frac{1}{64}\\right)}{\\frac{1}{2}} = 4\\pi \\times \\frac{63}{64} = \\frac{63\\pi}{16}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q5",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "An infinite geometric series has a first term of 12 and a limiting sum of 36. What is the common ratio?",
    "opts": [
      {
        "text": "\\(\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{4}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the limiting sum formula and solve for r.",
    "solutionSteps": [
      {
        "explanation": "Identify the given variables and state the limiting sum formula.",
        "workingOut": "\\(a = 12\\), \\(S_{\\infty} = 36\\), \\(S_{\\infty} = \\frac{a}{1 - r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given parameters into the limiting sum equation.",
        "workingOut": "\\(36 = \\frac{12}{1 - r}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the common ratio term \\(1 - r\\).",
        "workingOut": "\\(1 - r = \\frac{12}{36} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the variable \\(r\\).",
        "workingOut": "\\(r = 1 - \\frac{1}{3} = \\frac{2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q6",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Revision",
    "question": "In an arithmetic progression, the second term is -2 and the sixth term is 22. Find the twentieth term.",
    "opts": [
      {
        "text": "\\(98\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(106\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(112\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up a system of linear equations for a and d, solve them, and find the 20th term.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the given terms using \\(T_n = a + (n-1)d\\).",
        "workingOut": "\\(T_2 = a + d = -2\\) (Eq. 1) \\\\ \\(T_6 = a + 5d = 22\\) (Eq. 2)",
        "graphData": null
      },
      {
        "explanation": "Subtract the first equation from the second equation to solve for the common difference \\(d\\).",
        "workingOut": "\\((a + 5d) - (a + d) = 22 - (-2) \\implies 4d = 24 \\implies d = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(d = 6\\) back into the first equation to find the first term \\(a\\).",
        "workingOut": "\\(a + 6 = -2 \\implies a = -8\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the twentieth term using the general term formula.",
        "workingOut": "\\(T_{20} = a + 19d = -8 + 19 \\times 6 = -8 + 114 = 106\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "The numbers \\(p\\), \\(p+2\\) and 9 are consecutive terms in a geometric sequence. Find the positive value of \\(p\\).",
    "opts": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Set up the common ratio relationship between consecutive terms of a GP.",
    "solutionSteps": [
      {
        "explanation": "Use the property that consecutive terms in a GP have a constant ratio.",
        "workingOut": "\\(\\frac{p+2}{p} = \\frac{9}{p+2}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply to get a quadratic equation.",
        "workingOut": "\\((p+2)^2 = 9p \\implies p^2 + 4p + 4 = 9p\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the quadratic equation into standard form.",
        "workingOut": "\\(p^2 - 5p + 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Factorize the quadratic equation to find the roots.",
        "workingOut": "\\((p-1)(p-4) = 0 \\implies p = 1 \\text{ or } p = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Select the required value of \\(p\\). Here, the positive value is \\(p = 4\\).",
        "workingOut": "\\(p = 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Find a positive integer \\(n\\) which, when added to each of 2, 5 and 9, will give a set of three numbers in geometric progression.",
    "opts": [
      {
        "text": "\\(7\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Let the terms be 2+n, 5+n, 9+n, and apply the geometric progression ratio rule.",
    "solutionSteps": [
      {
        "explanation": "Define the three terms in geometric progression after adding \\(n\\).",
        "workingOut": "\\(T_1 = 2+n\\), \\(T_2 = 5+n\\), \\(T_3 = 9+n\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the geometric progression ratio equality.",
        "workingOut": "\\(\\frac{5+n}{2+n} = \\frac{9+n}{5+n}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply the fractions to solve for \\(n\\).",
        "workingOut": "\\((5+n)^2 = (2+n)(9+n)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand both sides of the equation.",
        "workingOut": "\\(25 + 10n + n^2 = 18 + 11n + n^2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify and isolate \\(n\\).",
        "workingOut": "\\(25 - 18 = 11n - 10n \\implies n = 7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "The sum of the first \\(n\\) terms of a series is given by \\(S_n = n^2\\). Find the first term.",
    "opts": [
      {
        "text": "\\(0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the fact that the first term of any series equals the first partial sum.",
    "solutionSteps": [
      {
        "explanation": "Recall the relationship between the first term of a sequence and the first partial sum.",
        "workingOut": "\\(T_1 = S_1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 1\\) into the given sum formula \\(S_n = n^2\\).",
        "workingOut": "\\(S_1 = 1^2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the value of the first term.",
        "workingOut": "\\(T_1 = 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "The sum of the first \\(n\\) terms of a series is given by \\(S_n = n^2\\). Find the thirtieth term.",
    "opts": [
      {
        "text": "\\(59\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(841\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(900\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(61\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relationship T_n = S_n - S_{n-1} for n = 30.",
    "solutionSteps": [
      {
        "explanation": "Recall the formula relating the general term to the partial sums.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 30\\) to write the expression for the thirtieth term.",
        "workingOut": "\\(T_{30} = S_{30} - S_{29}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(S_{30}\\) and \\(S_{29}\\) using the sum formula \\(S_n = n^2\\).",
        "workingOut": "\\(S_{30} = 30^2 = 900\\) \\\\ \\(S_{29} = 29^2 = 841\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the subtraction to find the thirtieth term.",
        "workingOut": "\\(T_{30} = 900 - 841 = 59\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q10a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "A marathon runner begins to train by running 900 metres on the first day. He then increases his run to 1300 metres on the second day, 1700 metres on the third day, and so on. Determine how far he will run on the 60th day (in metres).",
    "opts": [
      {
        "text": "\\(23600\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(24900\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(24100\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(24500\\) m",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the AP parameters and use the general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common difference \\(d\\) from the runner's schedule.",
        "workingOut": "\\(a = 900\\), \\(d = 1300 - 900 = 400\\)",
        "graphData": null
      },
      {
        "explanation": "State the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n - 1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 60\\), \\(a = 900\\), and \\(d = 400\\) into the formula.",
        "workingOut": "\\(T_{60} = 900 + (60 - 1) \\times 400\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify and calculate the running distance.",
        "workingOut": "\\(T_{60} = 900 + 59 \\times 400 = 900 + 23600 = 24500\\) m",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q10b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "A marathon runner begins to train by running 900 metres on the first day. He then increases his run to 1300 metres on the second day, 1700 metres on the third day, and so on. Find the total number of kilometres he runs over the first 60 days.",
    "opts": [
      {
        "text": "\\(762\\) km",
        "imageUrl": ""
      },
      {
        "text": "\\(782\\) km",
        "imageUrl": ""
      },
      {
        "text": "\\(76.2\\) km",
        "imageUrl": ""
      },
      {
        "text": "\\(742\\) km",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to find the total distance in metres, then convert to kilometres.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the arithmetic sum: first term \\(a\\) and last term \\(T_{60}\\).",
        "workingOut": "\\(a = 900\\), \\(T_{60} = 24500\\), \\(n = 60\\)",
        "graphData": null
      },
      {
        "explanation": "State the AP sum formula.",
        "workingOut": "\\(S_n = \frac{n}{2}(a + L)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters to calculate the total sum in metres.",
        "workingOut": "\\(S_{60} = \\frac{60}{2}(900 + 24500) = 30 \\times 25400 = 762000\\) m",
        "graphData": null
      },
      {
        "explanation": "Convert the total distance from metres to kilometres.",
        "workingOut": "\\(\\text{Distance} = \\frac{762000}{1000} = 762\\) km",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q11",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "For what values of \\(x\\) will the geometric series:\n\\(1 + (1 + x) + (1 + x)^2 + \\dots\\)\nhave a limiting sum?",
    "opts": [
      {
        "text": "\\(-1 < x < 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 0\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence condition |r| < 1 for the common ratio r.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(r = 1 + x\\)",
        "graphData": null
      },
      {
        "explanation": "State the condition under which an infinite geometric series converges to a limiting sum.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Write the inequality for \\(x\\).",
        "workingOut": "\\(-1 < 1 + x < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 1 from all parts of the inequality to solve for \\(x\\).",
        "workingOut": "\\(-2 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q12",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "For the sequence \\(243, 81, 27, \\dots\\), find the least value of \\(n\\) such that \\(T_n < \\frac{1}{1000}\\).",
    "opts": [
      {
        "text": "\\(12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(14\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the general term of the GP and solve the inequality using logarithms or division.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 243\\), \\(r = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the inequality for \\(T_n < \\frac{1}{1000}\\).",
        "workingOut": "\\(243 \\times \\left(\\frac{1}{3}\\right)^{n-1} < \\frac{1}{1000}\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the exponential term.",
        "workingOut": "\\(3^{n-1} > 243000\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(n\\) using logarithms.",
        "workingOut": "\\(n - 1 > \\log_3(243000) \\implies n - 1 > 11.2877 \\implies n > 12.2877\\)",
        "graphData": null
      },
      {
        "explanation": "Select the least integer value of \\(n\\) that satisfies the inequality.",
        "workingOut": "\\(n = 13\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q13a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Mary decides to train for a marathon by running each day \\(d\\) minutes longer than the previous day. On the third day she is running for 21 minutes, and on the tenth day she is running for 49 minutes. Find how long she was running on the first day (in minutes).",
    "opts": [
      {
        "text": "\\(17\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(13\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(15\\) minutes",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up simultaneous equations for a and d, then solve for the first term a.",
    "solutionSteps": [
      {
        "explanation": "Write the formulas for the given terms of the AP using \\(T_n = a + (n-1)d\\).",
        "workingOut": "\\(T_3 = a + 2d = 21\\) (Eq. 1) \\\\ \\(T_{10} = a + 9d = 49\\) (Eq. 2)",
        "graphData": null
      },
      {
        "explanation": "Subtract Equation 1 from Equation 2 to find the daily increment \\(d\\).",
        "workingOut": "\\(7d = 28 \\implies d = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(d = 4\\) back into the first equation to solve for the first day's run time \\(a\\).",
        "workingOut": "\\(a + 2(4) = 21 \\implies a + 8 = 21 \\implies a = 13\\) minutes",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q13b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Revision",
    "question": "Mary decides to train for a marathon by running each day \\(d\\) minutes longer than the previous day. On the third day she is running for 21 minutes, and on the tenth day she is running for 49 minutes. Find the daily increase in running time \\(d\\) (in minutes).",
    "opts": [
      {
        "text": "\\(4\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\) minutes",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Solve the simultaneous equations for the common difference d.",
    "solutionSteps": [
      {
        "explanation": "Write the expressions for \\(T_3\\) and \\(T_{10}\\) using the AP general term formula.",
        "workingOut": "\\(a + 2d = 21\\) \\\\ \\(a + 9d = 49\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the two equations to isolate the common difference term.",
        "workingOut": "\\((a + 9d) - (a + 2d) = 49 - 21 \\implies 7d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(d\\) by dividing both sides by 7.",
        "workingOut": "\\(d = 4\\) minutes",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q14",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The sum of the first \\(n\\) terms of an arithmetic series is given by \\(S_n = 3n^2 - 17n\\) for \\(n > 0\\). Find an expression for the \\(n\\)th term of the series.",
    "opts": [
      {
        "text": "\\(6n - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6n - 17\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3n - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6n - 14\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the relationship T_n = S_n - S_{n-1} and simplify the algebra.",
    "solutionSteps": [
      {
        "explanation": "State the relation between the general term \\(T_n\\) and the partial sums \\(S_n\\).",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given formula for \\(S_n\\) and \\(S_{n-1}\\).",
        "workingOut": "\\(T_n = (3n^2 - 17n) - [3(n-1)^2 - 17(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the terms inside the bracket.",
        "workingOut": "\\(3(n-1)^2 - 17(n-1) = 3(n^2 - 2n + 1) - 17n + 17 = 3n^2 - 6n + 3 - 17n + 17\\)",
        "graphData": null
      },
      {
        "explanation": "Combine and simplify the expression for \\(T_n\\).",
        "workingOut": "\\(T_n = (3n^2 - 17n) - (3n^2 - 23n + 20) = 3n^2 - 17n - 3n^2 + 23n - 20 = 6n - 20\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q15a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A city is suffering through a drought and adopts a plan to import water from another city. The volume of water imported in the 1st year is \\(1.8 \\times 10^9\\text{ m}^3\\). In subsequent years, the volume imported is 90\\% of the volume of the previous year. Find how much water was imported in the 4th year. Give your answer correct to 1 decimal place.",
    "opts": [
      {
        "text": "\\(1.2 \\times 10^9\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.3 \\times 10^9\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.5 \\times 10^9\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.4 \\times 10^9\\text{ m}^3\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the situation as a GP and find the 4th term T_4.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 1.8 \\times 10^9\\), \\(r = 0.90\\)",
        "graphData": null
      },
      {
        "explanation": "Write the formula for the \\(n\\)th term of a GP.",
        "workingOut": "\\(T_n = a r^{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 4\\) and the parameters into the formula.",
        "workingOut": "\\(T_4 = 1.8 \\times 10^9 \\times (0.9)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the calculation and round to one decimal place.",
        "workingOut": "\\(T_4 = 1.8 \\times 10^9 \\times 0.729 = 1.3122 \\times 10^9 \\approx 1.3 \\times 10^9\\text{ m}^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q15b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A city is suffering through a drought and adopts a plan to import water from another city. The volume of water imported in the 1st year is \\(1.8 \\times 10^9\\text{ m}^3\\). In subsequent years, the volume imported is 90\\% of the volume of the previous year. Find the total volume of water imported in the first 10 years. Give your answer correct to 1 decimal place.",
    "opts": [
      {
        "text": "\\(1.17 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.2 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.3 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.1 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the GP sum formula for n = 10, then round to 1 decimal place.",
    "solutionSteps": [
      {
        "explanation": "Recall the given GP parameters: first term \\(a\\) and common ratio \\(r\\).",
        "workingOut": "\\(a = 1.8 \\times 10^9\\), \\(r = 0.90\\)",
        "graphData": null
      },
      {
        "explanation": "State the geometric progression sum formula.",
        "workingOut": "\\(S_n = \\frac{a(1 - r^n)}{1 - r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(n = 10\\) into the sum formula.",
        "workingOut": "\\(S_{10} = \\frac{1.8 \\times 10^9(1 - 0.9^{10})}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the term and round to 1 decimal place.",
        "workingOut": "\\(S_{10} = \\frac{1.8 \\times 10^9(1 - 0.348678)}{0.1} = 1.8 \\times 10^{10} \\times 0.651322 \\approx 1.172 \\times 10^{10} \\approx 1.2 \\times 10^{10}\\text{ m}^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q15c",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A city is suffering through a drought and adopts a plan to import water. The volume imported in the 1st year is \\(1.8 \\times 10^9\\text{ m}^3\\), and each subsequent year is 90\\% of the previous year.\\nExplain why the total volume of water imported since the start of the plan will never exceed \\(1.9 \\times 10^{10}\\text{ m}^3\\).",
    "opts": [],
    "answer": "The water imports form an infinite geometric series with first term \\(a = 1.8 \\times 10^9\\text{ m}^3\\) and common ratio \\(r = 0.90\\).\\nSince \\(|r| < 1\\), the limiting sum exists and is given by \\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1.8 \\times 10^9}{1-0.9} = 1.8 \\times 10^{10}\\text{ m}^3\\).\\nBecause this infinite sum is exactly \\(1.8 \\times 10^{10}\\text{ m}^3\\), the total volume of water imported can never exceed this limit, which is strictly less than \\(1.9 \\times 10^{10}\\text{ m}^3\\).",
    "hint": "Determine the limiting sum of the infinite series and compare it with the given value.",
    "solutionSteps": [
      {
        "explanation": "Represent the total volume of water imported since the start of the plan as an infinite geometric series.",
        "workingOut": "\\(S_{\\infty} = a + ar + ar^2 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "State the parameters and calculate the limiting sum using the formula.",
        "workingOut": "\\(a = 1.8 \\times 10^9\\), \\(r = 0.9\\) \\\\ \\(S_{\\infty} = \\frac{1.8 \\times 10^9}{1 - 0.9} = 1.8 \\times 10^{10}\\text{ m}^3\\)",
        "graphData": null
      },
      {
        "explanation": "Compare the calculated limiting sum with the upper bound given in the question to formulate the explanation.",
        "workingOut": "\\(1.8 \\times 10^{10}\\text{ m}^3 < 1.9 \\times 10^{10}\\text{ m}^3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q16a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A tap and \\(n\\) water troughs are in a straight line. The tap is first in line, 6 metres from the first trough. A person fills the troughs by carrying a bucket of water from the tap to each trough and then returning to the tap. They repeat this process with each successive trough 4 metres further from the tap than the previous trough. How many troughs would there be if the trough furthest from the tap is 346m away from the tap?",
    "opts": [
      {
        "text": "\\(86\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(87\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(85\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(90\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Express the distance of the nth trough as an AP term and solve T_n = 346.",
    "solutionSteps": [
      {
        "explanation": "Define the distance of the \\(n\\)th trough from the tap as an arithmetic sequence.",
        "workingOut": "\\(D_n = 6 + (n-1) \\times 4\\)",
        "graphData": null
      },
      {
        "explanation": "Set the distance of the furthest trough equal to 346 metres.",
        "workingOut": "\\(6 + 4(n-1) = 346\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the equation for the number of troughs \\(n\\).",
        "workingOut": "\\(4(n-1) = 340 \\implies n-1 = 85 \\implies n = 86\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q16b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A tap and \\(n\\) water troughs are in a straight line. The tap is first in line, 6 metres from the first trough. A person fills the troughs by carrying a bucket of water from the tap to each trough and then returning to the tap. They repeat this process with each successive trough 4 metres further from the tap. How many troughs would there be if the person walks a total of 1760 metres to fill all the troughs?",
    "opts": [
      {
        "text": "\\(22\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the total distance walked as a sum of 2 * D_i and solve the quadratic equation.",
    "solutionSteps": [
      {
        "explanation": "Calculate the distance walked to fill the \\(i\\)th trough and return.",
        "workingOut": "\\(\\text{Distance for trough } i = 2 \\times D_i = 2(6 + 4(i-1)) = 8i + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Express the total distance walked to fill all \\(n\\) troughs as a sum series.",
        "workingOut": "\\(S_n = \\sum_{i=1}^n (8i + 4) = 8 \\frac{n(n+1)}{2} + 4n = 4n(n+1) + 4n = 4n^2 + 8n\\)",
        "graphData": null
      },
      {
        "explanation": "Set the total sum equal to 1760 metres to form a quadratic equation.",
        "workingOut": "\\(4n^2 + 8n = 1760 \\implies n^2 + 2n - 440 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation by factoring.",
        "workingOut": "\\((n - 20)(n + 22) = 0 \\implies n = 20 \\text{ (since } n > 0\\text{)}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q17",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A geometric sequence is formed by the terms \\(f(x) + f'(x) + f''(x) + f'''(x) + \\dots\\) where \\(f(x) = e^{\\frac{x}{2}}\\). Find the limiting sum of this sequence in terms of \\(x\\).",
    "opts": [
      {
        "text": "\\(2e^{\\frac{x}{2}}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(e^{\\frac{x}{2}}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{2}e^{\\frac{x}{2}}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2e^x\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the derivatives of f(x) to identify the first term and the common ratio, then use the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Write down the first term of the series which is \\(f(x)\\).",
        "workingOut": "\\(a = f(x) = e^{\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate \\(f(x)\\) successively to find the subsequent terms of the sequence.",
        "workingOut": "\\(f'(x) = \\frac{1}{2}e^{\\frac{x}{2}}\\) \\\\ \\(f''(x) = \\frac{1}{4}e^{\\frac{x}{2}}\\) \\\\ \\(f'''(x) = \\frac{1}{8}e^{\\frac{x}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio \\(r\\) by dividing the second term by the first term.",
        "workingOut": "\\(r = \\frac{f'(x)}{f(x)} = \\frac{\\frac{1}{2}e^{\\frac{x}{2}}}{e^{\\frac{x}{2}}} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(|r| = \\frac{1}{2} < 1\\), calculate the limiting sum using the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{e^{\\frac{x}{2}}}{1 - \\frac{1}{2}} = \\frac{e^{\\frac{x}{2}}}{\\frac{1}{2}} = 2e^{\\frac{x}{2}}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q18",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(125\\) tokens. Every day, the output increases by a constant common difference of \\(18\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(11\\).",
    "opts": [
      {
        "text": "\\(305\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(269\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(323\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(287\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 125\\), \\(d = 18\\), \\(n = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{11} = 125 + (11-1) \\times 18\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{11} = 125 + 10 \\times 18 = 305\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q19",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(520\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2860\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2340\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3120\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2600\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 520\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{520}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{520}{\\frac{1}{5}} = 520 \\times 5 = 2600\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q20",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q21",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 5}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-7 < x < -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\le x \\le -3\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 5}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 5 < 2 \\implies -7 < x < -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q22",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(145\\) megawatts. Every day, the output increases by a constant common difference of \\(30\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(10\\).",
    "opts": [
      {
        "text": "\\(445\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(385\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(355\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(415\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 145\\), \\(d = 30\\), \\(n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{10} = 145 + (10-1) \\times 30\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{10} = 145 + 9 \\times 30 = 415\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q23",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(560\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(1680\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2240\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1848\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1400\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 560\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{560}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{560}{\\frac{1}{3}} = 560 \\times 3 = 1680\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q24",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q25",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 4}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-6 < x < -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\le x \\le -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 4}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 4 < 2 \\implies -6 < x < -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q26",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(165\\) tokens. Every day, the output increases by a constant common difference of \\(21\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(14\\).",
    "opts": [
      {
        "text": "\\(396\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(417\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(438\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(459\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 165\\), \\(d = 21\\), \\(n = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{14} = 165 + (14-1) \\times 21\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{14} = 165 + 13 \\times 21 = 438\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q27",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(600\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3000\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2640\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2400\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 600\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{600}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{600}{\\frac{1}{4}} = 600 \\times 4 = 2400\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q28",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q29",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 3}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\le x \\le -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < -1\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 3}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 3 < 2 \\implies -5 < x < -1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q30",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(185\\) megawatts. Every day, the output increases by a constant common difference of \\(33\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(13\\).",
    "opts": [
      {
        "text": "\\(581\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(548\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(614\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(515\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 185\\), \\(d = 33\\), \\(n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{13} = 185 + (13-1) \\times 33\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{13} = 185 + 12 \\times 33 = 581\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q31",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(640\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2880\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3520\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3840\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 640\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{640}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{640}{\\frac{1}{5}} = 640 \\times 5 = 3200\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q32",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q33",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 2}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 \\le x \\le 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 2}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 2 < 2 \\implies -4 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q34",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(205\\) tokens. Every day, the output increases by a constant common difference of \\(24\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(12\\).",
    "opts": [
      {
        "text": "\\(493\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(445\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(421\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(469\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 205\\), \\(d = 24\\), \\(n = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{12} = 205 + (12-1) \\times 24\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{12} = 205 + 11 \\times 24 = 469\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q35",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(680\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2720\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2244\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2040\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1700\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 680\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{680}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{680}{\\frac{1}{3}} = 680 \\times 3 = 2040\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q36",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q37",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 1}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-1 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 \\le x \\le 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 1\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 1}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 1 < 2 \\implies -3 < x < 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q38",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(225\\) megawatts. Every day, the output increases by a constant common difference of \\(15\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(11\\).",
    "opts": [
      {
        "text": "\\(360\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(345\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(390\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(375\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 225\\), \\(d = 15\\), \\(n = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{11} = 225 + (11-1) \\times 15\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{11} = 225 + 10 \\times 15 = 375\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q39",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(720\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(3600\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2520\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2880\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3168\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 720\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{720}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{720}{\\frac{1}{4}} = 720 \\times 4 = 2880\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q40",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q41",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 5}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 < x < -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\le x \\le -3\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 5}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 5 < 2 \\implies -7 < x < -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q42",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(245\\) tokens. Every day, the output increases by a constant common difference of \\(27\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(10\\).",
    "opts": [
      {
        "text": "\\(434\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(461\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(488\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(515\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 245\\), \\(d = 27\\), \\(n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{10} = 245 + (10-1) \\times 27\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{10} = 245 + 9 \\times 27 = 488\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q43",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(760\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(4560\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4180\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3800\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3420\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 760\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{760}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{760}{\\frac{1}{5}} = 760 \\times 5 = 3800\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q44",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q45",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 4}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\le x \\le -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 < x < -2\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 4}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 4 < 2 \\implies -6 < x < -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q46",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(265\\) megawatts. Every day, the output increases by a constant common difference of \\(18\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(14\\).",
    "opts": [
      {
        "text": "\\(463\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(499\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(517\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(481\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 265\\), \\(d = 18\\), \\(n = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{14} = 265 + (14-1) \\times 18\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{14} = 265 + 13 \\times 18 = 499\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q47",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(800\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2000\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2400\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2640\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3200\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 800\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{800}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{800}{\\frac{1}{3}} = 800 \\times 3 = 2400\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q48",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q49",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 3}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-5 < x < -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\le x \\le -1\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 3}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 3 < 2 \\implies -5 < x < -1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q50",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(285\\) tokens. Every day, the output increases by a constant common difference of \\(30\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(13\\).",
    "opts": [
      {
        "text": "\\(585\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(675\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(645\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(615\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 285\\), \\(d = 30\\), \\(n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{13} = 285 + (13-1) \\times 30\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{13} = 285 + 12 \\times 30 = 645\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q51",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(840\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(3696\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3360\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2940\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 840\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{840}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{840}{\\frac{1}{4}} = 840 \\times 4 = 3360\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q52",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q53",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 2}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 \\le x \\le 0\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 2}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 2 < 2 \\implies -4 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q54",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(305\\) megawatts. Every day, the output increases by a constant common difference of \\(21\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(12\\).",
    "opts": [
      {
        "text": "\\(515\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(494\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(536\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(557\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 305\\), \\(d = 21\\), \\(n = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{12} = 305 + (12-1) \\times 21\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{12} = 305 + 11 \\times 21 = 536\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q55",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(880\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5280\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4840\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4400\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3960\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 880\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{880}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{880}{\\frac{1}{5}} = 880 \\times 5 = 4400\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q56",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q57",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 1}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-3 \\le x \\le 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 1\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 1}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 1 < 2 \\implies -3 < x < 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q58",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(325\\) tokens. Every day, the output increases by a constant common difference of \\(33\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(11\\).",
    "opts": [
      {
        "text": "\\(589\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(688\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(655\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(622\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 325\\), \\(d = 33\\), \\(n = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{11} = 325 + (11-1) \\times 33\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{11} = 325 + 10 \\times 33 = 655\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q59",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(920\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(2300\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3680\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3036\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2760\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 920\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{920}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{920}{\\frac{1}{3}} = 920 \\times 3 = 2760\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q60",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q61",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 5}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-7 < x < -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\le x \\le -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 5}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 5 < 2 \\implies -7 < x < -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q62",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(345\\) megawatts. Every day, the output increases by a constant common difference of \\(24\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(10\\).",
    "opts": [
      {
        "text": "\\(561\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(585\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(513\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(537\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 345\\), \\(d = 24\\), \\(n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{10} = 345 + (10-1) \\times 24\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{10} = 345 + 9 \\times 24 = 561\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q63",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(960\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(4800\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3840\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3360\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4224\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 960\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{960}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{960}{\\frac{1}{4}} = 960 \\times 4 = 3840\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q64",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q65",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 4}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-6 < x < -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\le x \\le -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 4}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 4 < 2 \\implies -6 < x < -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q66",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(365\\) tokens. Every day, the output increases by a constant common difference of \\(15\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(14\\).",
    "opts": [
      {
        "text": "\\(530\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(560\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(575\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(545\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 365\\), \\(d = 15\\), \\(n = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{14} = 365 + (14-1) \\times 15\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{14} = 365 + 13 \\times 15 = 560\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q67",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1000\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(6000\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5000\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4500\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5500\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1000\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1000}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1000}{\\frac{1}{5}} = 1000 \\times 5 = 5000\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q68",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q69",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 3}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\le x \\le -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 3}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 3 < 2 \\implies -5 < x < -1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q70",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(385\\) megawatts. Every day, the output increases by a constant common difference of \\(27\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(13\\).",
    "opts": [
      {
        "text": "\\(682\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(709\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(736\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(655\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 385\\), \\(d = 27\\), \\(n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{13} = 385 + (13-1) \\times 27\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{13} = 385 + 12 \\times 27 = 709\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q71",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1040\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(4160\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3120\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2600\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3432\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1040\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1040}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1040}{\\frac{1}{3}} = 1040 \\times 3 = 3120\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q72",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q73",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 2}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 \\le x \\le 0\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 2}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 2 < 2 \\implies -4 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q74",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(405\\) tokens. Every day, the output increases by a constant common difference of \\(18\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(12\\).",
    "opts": [
      {
        "text": "\\(585\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(567\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(621\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(603\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 405\\), \\(d = 18\\), \\(n = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{12} = 405 + (12-1) \\times 18\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{12} = 405 + 11 \\times 18 = 603\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q75",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1080\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5400\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4320\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3780\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4752\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1080\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1080}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1080}{\\frac{1}{4}} = 1080 \\times 4 = 4320\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q76",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q77",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 1}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-3 \\le x \\le 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 1}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 1 < 2 \\implies -3 < x < 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q78",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(425\\) megawatts. Every day, the output increases by a constant common difference of \\(30\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(11\\).",
    "opts": [
      {
        "text": "\\(665\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(725\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(755\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(695\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 425\\), \\(d = 30\\), \\(n = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{11} = 425 + (11-1) \\times 30\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{11} = 425 + 10 \\times 30 = 725\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q79",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1120\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5040\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5600\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6720\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6160\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1120\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1120}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1120}{\\frac{1}{5}} = 1120 \\times 5 = 5600\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q80",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q81",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 5}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-7 \\le x \\le -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 < x < -3\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 5}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 5 < 2 \\implies -7 < x < -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q82",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(445\\) tokens. Every day, the output increases by a constant common difference of \\(21\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(10\\).",
    "opts": [
      {
        "text": "\\(613\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(655\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(592\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(634\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 445\\), \\(d = 21\\), \\(n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{10} = 445 + (10-1) \\times 21\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{10} = 445 + 9 \\times 21 = 634\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q83",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1160\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(3828\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4640\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2900\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3480\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1160\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1160}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1160}{\\frac{1}{3}} = 1160 \\times 3 = 3480\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q84",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q85",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 4}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-6 < x < -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 \\le x \\le -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 4}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 4 < 2 \\implies -6 < x < -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q86",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(465\\) megawatts. Every day, the output increases by a constant common difference of \\(33\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(14\\).",
    "opts": [
      {
        "text": "\\(927\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(894\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(828\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(861\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 465\\), \\(d = 33\\), \\(n = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{14} = 465 + (14-1) \\times 33\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{14} = 465 + 13 \\times 33 = 894\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q87",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1200\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(4800\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6000\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5280\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4200\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1200\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1200}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1200}{\\frac{1}{4}} = 1200 \\times 4 = 4800\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q88",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q89",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 3}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-5 < x < -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\le x \\le -1\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 3}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 3 < 2 \\implies -5 < x < -1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q90",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(485\\) tokens. Every day, the output increases by a constant common difference of \\(24\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(13\\).",
    "opts": [
      {
        "text": "\\(797\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(725\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(749\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(773\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 485\\), \\(d = 24\\), \\(n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{13} = 485 + (13-1) \\times 24\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{13} = 485 + 12 \\times 24 = 773\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q91",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1240\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5580\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7440\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6820\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6200\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1240\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1240}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1240}{\\frac{1}{5}} = 1240 \\times 5 = 6200\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q92",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q93",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 2}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 \\le x \\le 0\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 2}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 2 < 2 \\implies -4 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q94",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(505\\) megawatts. Every day, the output increases by a constant common difference of \\(15\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(12\\).",
    "opts": [
      {
        "text": "\\(640\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(685\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(670\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(655\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 505\\), \\(d = 15\\), \\(n = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{12} = 505 + (12-1) \\times 15\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{12} = 505 + 11 \\times 15 = 670\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q95",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1280\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5120\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4224\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3840\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1280\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1280}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1280}{\\frac{1}{3}} = 1280 \\times 3 = 3840\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q96",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q97",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 1}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-3 \\le x \\le 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 1\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 1}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 1 < 2 \\implies -3 < x < 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q98",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(525\\) tokens. Every day, the output increases by a constant common difference of \\(27\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(11\\).",
    "opts": [
      {
        "text": "\\(741\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(822\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(768\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(795\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 525\\), \\(d = 27\\), \\(n = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{11} = 525 + (11-1) \\times 27\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{11} = 525 + 10 \\times 27 = 795\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q99",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1320\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5280\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4620\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5808\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6600\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1320\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1320}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1320}{\\frac{1}{4}} = 1320 \\times 4 = 5280\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q100",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q101",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 5}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-5 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\le x \\le -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 < x < -3\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 5}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 5 < 2 \\implies -7 < x < -3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q102",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(545\\) megawatts. Every day, the output increases by a constant common difference of \\(18\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(10\\).",
    "opts": [
      {
        "text": "\\(689\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(725\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(707\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(671\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 545\\), \\(d = 18\\), \\(n = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{10} = 545 + (10-1) \\times 18\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{10} = 545 + 9 \\times 18 = 707\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q103",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1360\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(6120\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6800\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8160\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7480\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1360\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1360}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1360}{\\frac{1}{5}} = 1360 \\times 5 = 6800\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q104",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q105",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 4}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-6 \\le x \\le -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-6 < x < -2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 4}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 4 < 2 \\implies -6 < x < -2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q106",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(565\\) tokens. Every day, the output increases by a constant common difference of \\(30\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(14\\).",
    "opts": [
      {
        "text": "\\(985\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(925\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(955\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(895\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 565\\), \\(d = 30\\), \\(n = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{14} = 565 + (14-1) \\times 30\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{14} = 565 + 13 \\times 30 = 955\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q107",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1400\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{2}{3}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5600\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4200\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3500\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4620\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1400\\), \\(r = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{2}{3} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1400}{1 - \\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1400}{\\frac{1}{3}} = 1400 \\times 3 = 4200\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q108",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -6n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 11\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -6\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 11\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -6n) - [5(n-1)^2 + -6(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -6n - -6 = 5n^2 - 10n + 5 + -6n - -6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (11)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q109",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 3}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 < x < -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-5 \\le x \\le -1\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 3}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 3}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 3 < 2 \\implies -5 < x < -1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q110",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized solar farm panel power grid efficiency system starts on Day 1 with a production of \\(585\\) megawatts. Every day, the output increases by a constant common difference of \\(21\\) megawatts due to system optimization.\\nCalculate the exact output on Day \\(13\\).",
    "opts": [
      {
        "text": "\\(837\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(858\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(795\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(816\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 585\\), \\(d = 21\\), \\(n = 13\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{13} = 585 + (13-1) \\times 21\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{13} = 585 + 12 \\times 21 = 837\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q111",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A subsea deepwater oil rig pressure output has an initial quantity of \\(1440\\) bar. In subsequent cycles, the quantity is exactly \\(\\frac{3}{4}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(5760\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6336\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5040\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7200\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1440\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{3}{4} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1440}{1 - \\frac{3}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1440}{\\frac{1}{4}} = 1440 \\times 4 = 5760\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q112",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total biopharmaceutical cell culture count over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -10n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n + 15\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -10\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -10n) - [5(n-1)^2 + -10(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -10n - -10 = 5n^2 - 10n + 5 + -10n - -10\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (15)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q113",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the industrial robotics logistics output has a common ratio \\(r = \\frac{x + 2}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 \\le x \\le 0\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 2}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 2 < 2 \\implies -4 < x < 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q114",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A specialized cryptocurrency token distribution supply system starts on Day 1 with a production of \\(605\\) tokens. Every day, the output increases by a constant common difference of \\(33\\) tokens due to system optimization.\\nCalculate the exact output on Day \\(12\\).",
    "opts": [
      {
        "text": "\\(935\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1001\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(902\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(968\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the first term and common difference, then use the AP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the AP parameters from the problem description.",
        "workingOut": "\\(a = 605\\), \\(d = 33\\), \\(n = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Recall the formula for the general term of an AP.",
        "workingOut": "\\(T_n = a + (n-1)d\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(T_{12} = 605 + (12-1) \\times 33\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final term value.",
        "workingOut": "\\(T_{12} = 605 + 11 \\times 33 = 968\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q115",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "A chemical mixture concentrate yield has an initial quantity of \\(1480\\) litres. In subsequent cycles, the quantity is exactly \\(\\frac{4}{5}\\) of the previous cycle's quantity.\\nFind the limiting sum of the total quantity across infinite cycles.",
    "opts": [
      {
        "text": "\\(7400\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6660\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8140\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8880\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the first term and common ratio, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the GP parameters from the problem context.",
        "workingOut": "\\(a = 1480\\), \\(r = \\frac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the common ratio satisfies the convergence condition.",
        "workingOut": "\\(|r| = \\frac{4}{5} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{1480}{1 - \\frac{4}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction to find the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1480}{\\frac{1}{5}} = 1480 \\times 5 = 7400\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q116",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "The total local wildlife population colony size over \\(n\\) cycles is modeled by the sum formula \\(S_n = 5n^2 -8n\\). Find an algebraic expression for the output \\(T_n\\) on the \\(n\\)th cycle.",
    "opts": [
      {
        "text": "\\(10n + 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - 13\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(10n - -8\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Apply the relation T_n = S_n - S_{n-1} and simplify the algebraic expression.",
    "solutionSteps": [
      {
        "explanation": "State the relationship between the term formula and the sum formulas.",
        "workingOut": "\\(T_n = S_n - S_{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given sum formula into the relation.",
        "workingOut": "\\(T_n = (5n^2 + -8n) - [5(n-1)^2 + -8(n-1)]\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the bracketed terms.",
        "workingOut": "\\(S_{n-1} = 5(n^2 - 2n + 1) + -8n - -8 = 5n^2 - 10n + 5 + -8n - -8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the expanded expression from S_n and collect like terms.",
        "workingOut": "\\(T_n = 10n - (13)\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1j-q117",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Revision",
    "question": "An infinite series modeling the hydroponic crop growth biomass output has a common ratio \\(r = \\frac{x + 1}{2}\\).\\nDetermine the range of values for \\(x\\) for which the series converges to a limiting sum.",
    "opts": [
      {
        "text": "\\(-3 \\le x \\le 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-3 < x < 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Set up the convergence inequality |r| < 1 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio from the GP description.",
        "workingOut": "\\(r = \\frac{x + 1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for an infinite geometric series.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for r into the inequality.",
        "workingOut": "\\(\\left| \\frac{x + 1}{2} \\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the absolute value inequality to find the range of x.",
        "workingOut": "\\(-2 < x + 1 < 2 \\implies -3 < x < 1\\)",
        "graphData": null
      }
    ]
  }
];
