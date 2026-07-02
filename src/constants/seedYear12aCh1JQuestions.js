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
        "text": "\\(37\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(41\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(38\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
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
      },
      {
        "text": "\\(101\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
      },
      {
        "text": "\\(\\frac{1023}{256}\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
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
        "text": "\\(\\frac{63\\pi}{16}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\pi\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{63\\pi}{32}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{63\\pi}{64}\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
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
        "text": "\\(\\frac{1}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{2}{3}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{4}\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
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
        "text": "\\(106\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(100\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(98\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(112\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
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
    "question": "The numbers \\(p\\), \\(p+2\\) and 9 form consecutive terms of a geometric sequence. Find the positive value of \\(p\\).",
    "opts": [
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
        "text": "\\(3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(8\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5\\)",
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
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
        "text": "\\(900\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(841\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(59\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(61\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
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
        "text": "\\(24500\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(24100\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(24900\\) m",
        "imageUrl": ""
      },
      {
        "text": "\\(23600\\) m",
        "imageUrl": ""
      }
    ],
    "a": 0,
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
        "text": "\\(76.2\\) km",
        "imageUrl": ""
      },
      {
        "text": "\\(782\\) km",
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
        "workingOut": "\\(S_n = \\frac{n}{2}(a + L)\\)",
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
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-1 < x < 1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0 < x < 2\\)",
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
        "text": "\\(14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(11\\)",
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
      },
      {
        "text": "\\(17\\) minutes",
        "imageUrl": ""
      }
    ],
    "a": 1,
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
        "text": "\\(5\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\) minutes",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\) minutes",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
        "text": "\\(6n - 14\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6n - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3n - 20\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6n - 17\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
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
        "text": "\\(1.3 \\times 10^9\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.2 \\times 10^9\\text{ m}^3\\)",
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
    "a": 0,
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
        "text": "\\(1.2 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.1 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.3 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1.17 \\times 10^{10}\\text{ m}^3\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
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
        "text": "\\(90\\)",
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
        "text": "\\(86\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
        "text": "\\(18\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(25\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
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
        "text": "\\(2e^x\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{1}{2}e^{\\frac{x}{2}}\\)",
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
    "question": "A superelastic ball is dropped from a height of 10 metres. Each time it hits the ground, it rebounds to exactly 70\\% of the height from which it fell. Find the total distance the ball travels before coming to rest.",
    "opts": [
      {
        "text": "\\(50\\) metres",
        "imageUrl": ""
      },
      {
        "text": "\\(33\\frac{1}{3}\\) metres",
        "imageUrl": ""
      },
      {
        "text": "\\(56\\frac{2}{3}\\) metres",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\) metres",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Calculate the first drop distance separately, and treat the subsequent upward and downward bounces as an infinite GP.",
    "solutionSteps": [
      {
        "explanation": "Identify the initial drop distance and the subsequent rebound heights.",
        "workingOut": "\\(\\text{First drop} = 10\\text{ m}. \\quad \\text{Subsequent bounces involve going up and down } 70\\%\\text{ of the previous height.}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the total distance traveled as a sum of the first drop plus twice the sum of the subsequent rebounds.",
        "workingOut": "\\(D = 10 + 2 \\times (7 + 4.9 + 3.43 + \\dots)\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters of the infinite geometric progression for the rebound heights.",
        "workingOut": "\\(a = 7\\text{ m}, \\quad r = 0.70\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the sum of the infinite geometric progression using the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{7}{1 - 0.7} = \\frac{7}{0.3} = \\frac{70}{3} = 23\\frac{1}{3}\\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the initial drop and twice the limiting sum of rebounds to find the total distance.",
        "workingOut": "\\(D = 10 + 2 \\times \\frac{70}{3} = 10 + \\frac{140}{3} = \\frac{170}{3} = 56\\frac{2}{3}\\text{ m}\\)",
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
    "question": "An initial square has a side length of 8 cm. A second square is drawn inside the first square by joining the midpoints of the sides of the first square. This process is repeated infinitely. Find the sum of the areas of all the squares.",
    "opts": [
      {
        "text": "\\(160\\text{ cm}^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\text{ cm}^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(128\\text{ cm}^2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(96\\text{ cm}^2\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Find the area of the first few squares to identify the common ratio, then use the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the initial square.",
        "workingOut": "\\(A_1 = 8 \\times 8 = 64\\text{ cm}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Find the side length and area of the second square using Pythagoras' theorem.",
        "workingOut": "\\(\\text{Side}_2 = \\sqrt{4^2 + 4^2} = \\sqrt{32}\\text{ cm} \\implies A_2 = (\\sqrt{32})^2 = 32\\text{ cm}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the common ratio \\(r\\) by comparing the areas of successive squares.",
        "workingOut": "\\(r = \\frac{A_2}{A_1} = \\frac{32}{64} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the limiting sum formula to find the sum of all areas.",
        "workingOut": "\\(S_{\\infty} = \\frac{A_1}{1 - r} = \\frac{64}{1 - \\frac{1}{2}} = \\frac{64}{\\frac{1}{2}} = 128\\text{ cm}^2\\)",
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
    "question": "Olivia deposits $1000 at the beginning of each year into a superannuation fund that pays 5\\% per annum compound interest. Find the total value of her investment at the end of 20 years (to the nearest dollar).",
    "opts": [
      {
        "text": "\\(32115\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(34719\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(33066\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(35288\\) dollars",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Write the value of each deposit as a compounded term and sum them as a GP where the first term is 1000 * 1.05.",
    "solutionSteps": [
      {
        "explanation": "Represent the future value of each deposit at the end of 20 years. The first deposit compounds for 20 years, the second for 19 years, and the last for 1 year.",
        "workingOut": "\\(A = 1000(1.05)^{20} + 1000(1.05)^{19} + \\dots + 1000(1.05)^1\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the terms in ascending order to identify the geometric progression.",
        "workingOut": "\\(A = 1000(1.05) + 1000(1.05)^2 + \\dots + 1000(1.05)^{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters of the geometric progression.",
        "workingOut": "\\(a = 1000 \\times 1.05 = 1050\\), \\(r = 1.05\\), \\(n = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the geometric progression sum formula.",
        "workingOut": "\\(S_{20} = \\frac{1050(1.05^{20} - 1)}{1.05 - 1} = \\frac{1050(2.653298 - 1)}{0.05}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the final future value and round to the nearest integer.",
        "workingOut": "\\(S_{20} = 21000 \\times 1.653298 \\approx 34719.25 \\implies 34719\\) dollars",
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
    "question": "A scholarship fund needs to provide $5000 at the end of each year for the next 15 years. If the fund earns 6\\% per annum compound interest, what is the minimum lump sum that must be invested today to fund these payments?",
    "opts": [
      {
        "text": "\\(48561\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(45611\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(47155\\) dollars",
        "imageUrl": ""
      },
      {
        "text": "\\(51200\\) dollars",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Find the present value of each payment by discounting them, and sum them as a GP.",
    "solutionSteps": [
      {
        "explanation": "Represent the present value of all 15 annual payments of \\(5000.\\)",
        "workingOut": "\\(PV = \\frac{5000}{1.06} + \\frac{5000}{1.06^2} + \\dots + \\frac{5000}{1.06^{15}}\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters of this geometric progression.",
        "workingOut": "\\(a = \\frac{5000}{1.06}\\), \\(r = \\frac{1}{1.06}\\), \\(n = 15\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the geometric progression sum formula.",
        "workingOut": "\\(PV = \\frac{\\frac{5000}{1.06} \\left(1 - \\left(\\frac{1}{1.06}\\right)^{15}\\right)}{1 - \\frac{1}{1.06}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the denominator and evaluate the expression.",
        "workingOut": "\\(PV = \\frac{5000}{1.06} \\times \\frac{1.06}{0.06} \\left(1 - 1.06^{-15}\\right) = \\frac{5000}{0.06} \\left(1 - 0.417265\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the final lump sum to the nearest dollar.",
        "workingOut": "\\(PV \\approx 83333.33 \\times 0.582735 \\approx 48561.25 \\implies 48561\\) dollars",
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
    "question": "The first, third, and ninth terms of an arithmetic progression (with non-zero common difference) form a geometric progression in that order. Find the common ratio of this geometric progression.",
    "opts": [
      {
        "text": "\\(2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(\\frac{3}{2}\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Write the AP terms in terms of a and d, set up the GP ratio condition, and solve for the common ratio.",
    "solutionSteps": [
      {
        "explanation": "Express the first, third, and ninth terms of the arithmetic progression.",
        "workingOut": "\\(T_1 = a\\), \\(T_3 = a + 2d\\), \\(T_9 = a + 8d\\)",
        "graphData": null
      },
      {
        "explanation": "Since these terms form a geometric progression, set up the ratio equality.",
        "workingOut": "\\(\\frac{a + 2d}{a} = \\frac{a + 8d}{a + 2d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((a + 2d)^2 = a(a + 8d) \\implies a^2 + 4ad + 4d^2 = a^2 + 8ad\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation to find a relation between \\(a\\) and \\(d\\).",
        "workingOut": "\\(4d^2 = 4ad \\implies d = a \\quad \\text{(since } d \\ne 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(d = a\\) back into the terms and find the common ratio of the GP.",
        "workingOut": "\\(T_1 = a\\), \\(T_3 = 3a \\implies \\text{Ratio} = \\frac{T_3}{T_1} = 3\\)",
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
    "question": "Calculate the exact value of the sum of the first 8 terms of the series:\n\\(\\sum_{k=1}^8 (3^k + 2k)\\)",
    "opts": [
      {
        "text": "\\(9984\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9912\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9840\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(9720\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Split the sum into a geometric series sum and an arithmetic series sum, then calculate them separately.",
    "solutionSteps": [
      {
        "explanation": "Split the sum into two separate series: a geometric progression and an arithmetic progression.",
        "workingOut": "\\(S = \\sum_{k=1}^8 3^k + \\sum_{k=1}^8 2k\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters and sum formula for the GP part.",
        "workingOut": "\\(\\text{GP Part: } a = 3, r = 3, n = 8 \\implies S_{\\text{GP}} = \\frac{3(3^8 - 1)}{3-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the sum of the GP part.",
        "workingOut": "\\(S_{\\text{GP}} = \\frac{3(6561 - 1)}{2} = \\frac{3 \\times 6560}{2} = 9840\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters and sum formula for the AP part.",
        "workingOut": "\\(\\text{AP Part: } a = 2, d = 2, n = 8 \\implies S_{\\text{AP}} = \\frac{8}{2}(2 + 16) = 4 \\times 18 = 72\\)",
        "graphData": null
      },
      {
        "explanation": "Add the two sums together to find the final total.",
        "workingOut": "\\(S = 9840 + 72 = 9912\\)",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2020\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1577\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1482\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1535 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1678\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 2020\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 2020 \\times (0.94)^{4} = 2020 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1577\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(154\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(14\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(4522\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2632\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4536\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4508\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 154\\), \\(d = 14\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 154 + (17-1) \\times 14]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[308 + 16 \\times 14] = 8.5[532] = 4522\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(83\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(87\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(638.46\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(72.21\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(95.40\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(638.46\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 83\\), \\(r = 0.87\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.87 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{83}{1 - 0.87}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{83}{0.13} = 638.46\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2100\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1240\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1378\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1116\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1050 \\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 2100\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 2100 \\times (0.9)^{5} = 2100 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1240\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(162\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(13\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(4535\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4509\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2767\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4522\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 162\\), \\(d = 13\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 162 + (17-1) \\times 13]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[324 + 16 \\times 13] = 8.5[532] = 4522\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(87\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(83\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(72.21\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(104.82\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(511.76\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(511.76\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 87\\), \\(r = 0.83\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.83 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{87}{1 - 0.83}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{87}{0.17} = 511.76\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2180\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1845\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1562\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1698\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1657 \\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 2180\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 2180 \\times (0.92)^{3} = 2180 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1698\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(170\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(12\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(4510\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2902\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4522\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4534\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 170\\), \\(d = 12\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 170 + (17-1) \\times 12]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[340 + 16 \\times 12] = 8.5[532] = 4522\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(91\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(90\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(81.90\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(101.11\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(910.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(910.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 91\\), \\(r = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.9 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{91}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{91}{0.10} = 910.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2260\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1764\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1718 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1659\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1877\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 2260\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 2260 \\times (0.94)^{4} = 2260 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1764\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(178\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(16\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5202\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5218\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5186\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3042\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 178\\), \\(d = 16\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 178 + (17-1) \\times 16]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[356 + 16 \\times 16] = 8.5[612] = 5202\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(95\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(86\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(678.57\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(81.70\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(678.57\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(110.47\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 95\\), \\(r = 0.86\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.86 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{95}{1 - 0.86}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{95}{0.14} = 678.57\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2340\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1244\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1535\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1170 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1382\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 2340\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 2340 \\times (0.9)^{5} = 2340 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1382\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(186\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(15\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5187\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3177\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5217\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5202\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 186\\), \\(d = 15\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 186 + (17-1) \\times 15]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[372 + 16 \\times 15] = 8.5[612] = 5202\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(99\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(82\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(120.73\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(550.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(81.18\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(550.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 99\\), \\(r = 0.82\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.82 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{99}{1 - 0.82}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{99}{0.18} = 550.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2420\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1839 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1734\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1884\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2048\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 2420\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 2420 \\times (0.92)^{3} = 2420 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1884\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(194\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(14\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(3312\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5188\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5216\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5202\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 194\\), \\(d = 14\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 194 + (17-1) \\times 14]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[388 + 16 \\times 14] = 8.5[612] = 5202\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(103\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(89\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(936.36\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(936.36\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(115.73\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(91.67\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 103\\), \\(r = 0.89\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.89 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{103}{1 - 0.89}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{103}{0.11} = 936.36\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2500\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1900 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2076\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1835\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1952\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 2500\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 2500 \\times (0.94)^{4} = 2500 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1952\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(202\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(13\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(3447\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5189\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5202\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5215\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 202\\), \\(d = 13\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 202 + (17-1) \\times 13]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[404 + 16 \\times 13] = 8.5[612] = 5202\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(107\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(85\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(125.88\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(713.33\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(90.95\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(713.33\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 107\\), \\(r = 0.85\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.85 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{107}{1 - 0.85}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{107}{0.15} = 713.33\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2580\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1523\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1371\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1693\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1290 \\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 2580\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 2580 \\times (0.9)^{5} = 2580 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1523\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(210\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(12\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5214\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3582\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5202\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5190\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 210\\), \\(d = 12\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 210 + (17-1) \\times 12]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[420 + 16 \\times 12] = 8.5[612] = 5202\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(111\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(81\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(89.91\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(584.21\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(137.04\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(584.21\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 111\\), \\(r = 0.81\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.81 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{111}{1 - 0.81}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{111}{0.19} = 584.21\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2660\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2022 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2251\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1906\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2071\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 2660\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 2660 \\times (0.92)^{3} = 2660 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2071\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(218\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(16\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(3722\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5882\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5866\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5898\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 218\\), \\(d = 16\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 218 + (17-1) \\times 16]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[436 + 16 \\times 16] = 8.5[692] = 5882\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(115\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(88\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(958.33\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(958.33\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(101.20\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(130.68\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 115\\), \\(r = 0.88\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.88 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{115}{1 - 0.88}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{115}{0.12} = 958.33\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2740\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2139\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2011\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2276\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2082 \\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 2740\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 2740 \\times (0.94)^{4} = 2740 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2139\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(226\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(15\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5867\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5897\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5882\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3857\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 226\\), \\(d = 15\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 226 + (17-1) \\times 15]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[452 + 16 \\times 15] = 8.5[692] = 5882\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(119\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(84\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(141.67\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(743.75\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(743.75\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(99.96\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 119\\), \\(r = 0.84\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.84 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{119}{1 - 0.84}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{119}{0.16} = 743.75\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2820\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1410 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1665\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1850\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1499\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 2820\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 2820 \\times (0.9)^{5} = 2820 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1665\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(234\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(14\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5896\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5868\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5882\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3992\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 234\\), \\(d = 14\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 234 + (17-1) \\times 14]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[468 + 16 \\times 14] = 8.5[692] = 5882\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(123\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(80\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(98.40\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(615.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(153.75\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(615.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 123\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.8 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{123}{1 - 0.8}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{123}{0.20} = 615.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2900\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2204 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2258\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2455\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2078\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 2900\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 2900 \\times (0.92)^{3} = 2900 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2258\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(242\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(13\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5895\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5882\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4127\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5869\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 242\\), \\(d = 13\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 242 + (17-1) \\times 13]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[484 + 16 \\times 13] = 8.5[692] = 5882\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(127\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(87\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(976.92\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(110.49\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(976.92\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(145.98\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 127\\), \\(r = 0.87\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.87 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{127}{1 - 0.87}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{127}{0.13} = 976.92\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(2980\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2327\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2187\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2475\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2265 \\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 2980\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 2980 \\times (0.94)^{4} = 2980 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2327\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(250\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(12\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5882\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4262\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5894\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5870\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 250\\), \\(d = 12\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 250 + (17-1) \\times 12]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[500 + 16 \\times 12] = 8.5[692] = 5882\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(131\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(83\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(157.83\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(770.59\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(108.73\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(770.59\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 131\\), \\(r = 0.83\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.83 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{131}{1 - 0.83}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{131}{0.17} = 770.59\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3060\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1530 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2008\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1807\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1626\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 3060\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 3060 \\times (0.9)^{5} = 3060 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1807\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(258\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(16\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(6562\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6578\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6546\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4402\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 258\\), \\(d = 16\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 258 + (17-1) \\times 16]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[516 + 16 \\times 16] = 8.5[772] = 6562\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(135\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(90\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(150.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(121.50\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1350.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1350.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 135\\), \\(r = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.9 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{135}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{135}{0.10} = 1350.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3140\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2658\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2386 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2445\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2249\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 3140\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 3140 \\times (0.92)^{3} = 3140 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2445\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(266\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(15\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(6562\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6577\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4537\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6547\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 266\\), \\(d = 15\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 266 + (17-1) \\times 15]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[532 + 16 \\times 15] = 8.5[772] = 6562\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(139\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(86\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(161.63\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(992.86\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(119.54\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(992.86\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 139\\), \\(r = 0.86\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.86 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{139}{1 - 0.86}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{139}{0.14} = 992.86\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3220\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2674\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2363\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2447 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2514\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 3220\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 3220 \\times (0.94)^{4} = 3220 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2514\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(274\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(14\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(6576\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6562\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4672\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6548\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 274\\), \\(d = 14\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 274 + (17-1) \\times 14]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[548 + 16 \\times 14] = 8.5[772] = 6562\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(143\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(82\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(117.26\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(794.44\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(794.44\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(174.39\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 143\\), \\(r = 0.82\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.82 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{143}{1 - 0.82}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{143}{0.18} = 794.44\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3300\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1949\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1754\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1650 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2165\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 3300\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 3300 \\times (0.9)^{5} = 3300 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 1949\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(282\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(13\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(6562\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6549\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4807\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6575\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 282\\), \\(d = 13\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 282 + (17-1) \\times 13]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[564 + 16 \\times 13] = 8.5[772] = 6562\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(147\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(89\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(1336.36\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(165.17\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1336.36\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(130.83\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 147\\), \\(r = 0.89\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.89 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{147}{1 - 0.89}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{147}{0.11} = 1336.36\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3380\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2861\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2632\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2421\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2569 \\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 3380\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 3380 \\times (0.92)^{3} = 3380 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2632\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(290\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(12\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(6550\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(4942\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6574\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(6562\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 290\\), \\(d = 12\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 290 + (17-1) \\times 12]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[580 + 16 \\times 12] = 8.5[772] = 6562\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(151\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(85\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(177.65\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1006.67\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(128.35\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1006.67\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 151\\), \\(r = 0.85\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.85 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{151}{1 - 0.85}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{151}{0.15} = 1006.67\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3460\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2630 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2539\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2701\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2874\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 3460\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 3460 \\times (0.94)^{4} = 3460 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2701\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(298\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(16\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(7258\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7226\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5082\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7242\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 298\\), \\(d = 16\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 298 + (17-1) \\times 16]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[596 + 16 \\times 16] = 8.5[852] = 7242\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(155\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(81\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(815.79\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(815.79\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(191.36\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(125.55\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 155\\), \\(r = 0.81\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.81 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{155}{1 - 0.81}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{155}{0.19} = 815.79\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3540\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(1770 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1881\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2090\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2323\\)",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 3540\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 3540 \\times (0.9)^{5} = 3540 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2090\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(306\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(15\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5217\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7242\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7227\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7257\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 306\\), \\(d = 15\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 306 + (17-1) \\times 15]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[612 + 16 \\times 15] = 8.5[852] = 7242\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(159\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(88\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(139.92\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1325.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(180.68\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1325.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 159\\), \\(r = 0.88\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.88 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{159}{1 - 0.88}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{159}{0.12} = 1325.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3620\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(3064\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2751 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2593\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2819\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 3620\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 3620 \\times (0.92)^{3} = 3620 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2819\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(314\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(14\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(7228\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7256\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5352\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7242\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 314\\), \\(d = 14\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 314 + (17-1) \\times 14]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[628 + 16 \\times 14] = 8.5[852] = 7242\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(163\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(84\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(194.05\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(136.92\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1018.75\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1018.75\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 163\\), \\(r = 0.84\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.84 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{163}{1 - 0.84}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{163}{0.16} = 1018.75\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3700\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2889\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3073\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2812 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2715\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 3700\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 3700 \\times (0.94)^{4} = 3700 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2889\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(322\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(13\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(7255\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7242\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5487\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7229\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 322\\), \\(d = 13\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 322 + (17-1) \\times 13]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[644 + 16 \\times 13] = 8.5[852] = 7242\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(167\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(80\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(208.75\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(835.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(133.60\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(835.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 167\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.8 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{167}{1 - 0.8}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{167}{0.20} = 835.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3780\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(10\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(6\\) (after \\(5\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(2480\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2232\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2009\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(1890 \\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{10}{100} = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{6} = a r^{5}\\), with \\(a = 3780\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{6} = 3780 \\times (0.9)^{5} = 3780 \\times 0.590490\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 2232\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(330\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(12\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(5622\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7242\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7230\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7254\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 330\\), \\(d = 12\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 330 + (17-1) \\times 12]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[660 + 16 \\times 12] = 8.5[852] = 7242\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(171\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(87\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(1315.38\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(196.55\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(148.77\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1315.38\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 171\\), \\(r = 0.87\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.87 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{171}{1 - 0.87}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{171}{0.13} = 1315.38\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(12\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(48\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(192\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(188\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(197\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 12\\), \\(T_2 = 12 + d\\), \\(T_5 = 12 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{12 + d}{12} = \\frac{12 + 4d}{12 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((12 + d)^2 = 12(12 + 4d) \\implies 144 + 24d + d^2 = 144 + 48d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 24d \\implies d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 12 + 4(24) = 12 + 96 = 192\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3860\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(8\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(4\\) (after \\(3\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(3267\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2765\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2934 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3006\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{8}{100} = 0.92\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{4} = a r^{3}\\), with \\(a = 3860\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{4} = 3860 \\times (0.92)^{3} = 3860 \\times 0.778688\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 3006\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(338\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(16\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(7922\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5762\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7938\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7906\\)",
        "imageUrl": ""
      }
    ],
    "a": 0,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 338\\), \\(d = 16\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 338 + (17-1) \\times 16]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[676 + 16 \\times 16] = 8.5[932] = 7922\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(175\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(83\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(145.25\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(210.84\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1029.41\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1029.41\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 175\\), \\(r = 0.83\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.83 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{175}{1 - 0.83}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{175}{0.17} = 1029.41\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(10\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(20\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(40\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(36\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(45\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 10\\), \\(T_2 = 10 + d\\), \\(T_5 = 10 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{10 + d}{10} = \\frac{10 + 4d}{10 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((10 + d)^2 = 10(10 + 4d) \\implies 100 + 20d + d^2 = 100 + 40d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 20d \\implies d = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 10 + 4(20) = 10 + 80 = 40\\) tokens",
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
    "question": "A conservation project monitors a local penguin colony. The initial colony size is estimated at \\(3940\\) penguins. Due to shifting climate conditions, the colony size decreases by \\(6\\%\\) each year.\\nFind the predicted penguin population at the start of year \\(5\\) (after \\(4\\) years of decline), rounded to the nearest integer.",
    "opts": [
      {
        "text": "\\(3273\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2994 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2892\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3076\\)",
        "imageUrl": ""
      }
    ],
    "a": 3,
    "hint": "Identify the common ratio based on the annual percentage decline, and apply the GP general term formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\) from the percentage decline.",
        "workingOut": "\\(r = 1 - \\frac{6}{100} = 0.94\\)",
        "graphData": null
      },
      {
        "explanation": "State the GP general term formula to find the population after \\(n\\) years.",
        "workingOut": "\\(T_{5} = a r^{4}\\), with \\(a = 3940\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and perform the calculation.",
        "workingOut": "\\(T_{5} = 3940 \\times (0.94)^{4} = 3940 \\times 0.780749\\)",
        "graphData": null
      },
      {
        "explanation": "Round the result to the nearest integer to find the final population.",
        "workingOut": "\\(\\text{Population} \\approx 3076\\)",
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
    "question": "A hydroponic greenhouse tracks crop biomass yields. On Week 1, the system harvests \\(346\\) grams of organic greens. Each week, the greenhouse's yield increases by \\(15\\) grams compared to the previous week.\\nDetermine the total crop yield harvested across the first \\(17\\) weeks.",
    "opts": [
      {
        "text": "\\(7937\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7922\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(5897\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7907\\)",
        "imageUrl": ""
      }
    ],
    "a": 1,
    "hint": "Use the AP sum formula to sum the weekly yields.",
    "solutionSteps": [
      {
        "explanation": "Identify the arithmetic sequence parameters from the crop growth details.",
        "workingOut": "\\(a = 346\\), \\(d = 15\\), \\(n = 17\\)",
        "graphData": null
      },
      {
        "explanation": "State the arithmetic series sum formula.",
        "workingOut": "\\(S_n = \\frac{n}{2}[2a + (n-1)d]\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the crop growth parameters into the formula.",
        "workingOut": "\\(S_{17} = \\frac{17}{2}[2 \\times 346 + (17-1) \\times 15]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the expression step-by-step.",
        "workingOut": "\\(S_{17} = 8.5[692 + 16 \\times 15] = 8.5[932] = 7922\\)",
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
    "question": "A laboratory chemical mixture evaporates over consecutive heating cycles. In the first cycle, \\(179\\) millilitres evaporate. In each subsequent cycle, the volume evaporated is exactly \\(90\\%\\) of the volume evaporated in the previous cycle.\\nFind the theoretical maximum limit of the total volume evaporated across infinite cycles (to 2 decimal places).",
    "opts": [
      {
        "text": "\\(161.10\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(198.89\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1790.00\\) mL",
        "imageUrl": ""
      },
      {
        "text": "\\(1790.00\\) mL",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Identify the common ratio, check if |r| < 1, and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the chemical evaporation description.",
        "workingOut": "\\(a = 179\\), \\(r = 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "Verify if the infinite series converges.",
        "workingOut": "\\(|r| = 0.9 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = \\frac{179}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the final calculation.",
        "workingOut": "\\(S_{\\infty} = \\frac{179}{0.10} = 1790.00\\) mL",
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
    "question": "A cryptocurrency token distribution launches with a base minting fee. The fees for the 1st, 2nd, and 5th minting blocks form an arithmetic sequence with a non-zero common difference. If the 1st minting fee is \\(14\\) tokens, and the 1st, 2nd, and 5th fees also form a geometric progression, find the 5th minting block fee.",
    "opts": [
      {
        "text": "\\(131\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(122\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(126\\) tokens",
        "imageUrl": ""
      },
      {
        "text": "\\(42\\) tokens",
        "imageUrl": ""
      }
    ],
    "a": 2,
    "hint": "Express the terms as AP elements, apply the GP geometric mean condition, and solve for the common difference.",
    "solutionSteps": [
      {
        "explanation": "Write the three minting fees in terms of the first fee \\(a\\) and common difference \\(d\\).",
        "workingOut": "\\(T_1 = 14\\), \\(T_2 = 14 + d\\), \\(T_5 = 14 + 4d\\)",
        "graphData": null
      },
      {
        "explanation": "Use the geometric progression property for the terms \\(T_1\\), \\(T_2\\), and \\(T_5\\).",
        "workingOut": "\\(\\frac{14 + d}{14} = \\frac{14 + 4d}{14 + d}\\)",
        "graphData": null
      },
      {
        "explanation": "Cross-multiply and expand the terms.",
        "workingOut": "\\((14 + d)^2 = 14(14 + 4d) \\implies 196 + 28d + d^2 = 196 + 56d\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for the non-zero common difference \\(d\\).",
        "workingOut": "\\(d^2 = 28d \\implies d = 28\\)",
        "graphData": null
      },
      {
        "explanation": "Find the 5th minting block fee.",
        "workingOut": "\\(T_5 = 14 + 4(28) = 14 + 112 = 126\\) tokens",
        "graphData": null
      }
    ]
  }
];
