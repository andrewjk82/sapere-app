export const Y12A_CH1H_QUESTIONS = [
  {
    "id": "y12a-1h-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 24\\) and the common ratio \\(r = \\frac{1}{4}\\).\n\nFind the first six terms of the sequence of partial sums, \\(S_1, S_2, S_3, S_4, S_5, S_6\\).",
    "opts": [
      "\\(24, 30, 31\\frac{1}{2}, 31\\frac{7}{8}, 31\\frac{31}{32}, 31\\frac{127}{128}\\)",
      "\\(24, 26, 27\\frac{1}{2}, 27\\frac{7}{8}, 27\\frac{31}{32}, 27\\frac{127}{128}\\)",
      "\\(24, 30, 31\\frac{1}{4}, 31\\frac{5}{8}, 31\\frac{21}{32}, 31\\frac{85}{128}\\)",
      "\\(24, 28, 29\\frac{1}{2}, 29\\frac{7}{8}, 29\\frac{31}{32}, 29\\frac{127}{128}\\)"
    ],
    "a": 0,
    "hint": "Calculate the terms of the GP: \\(24, 6, 1.5, \\dots\\) and add them progressively to find the partial sums.",
    "solutionSteps": [
      {
        "explanation": "Write down the first six terms of the geometric progression by using \\(T_n = a r^{n-1}\\).",
        "workingOut": "\\(T_1 = 24\\), \\(T_2 = 6\\), \\(T_3 = 1.5 = \\frac{3}{2}\\), \\(T_4 = \\frac{3}{8}\\), \\(T_5 = \\frac{3}{32}\\), \\(T_6 = \\frac{3}{128}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the first three partial sums progressively.",
        "workingOut": "\\(S_1 = T_1 = 24\\)\n\\(S_2 = S_1 + T_2 = 24 + 6 = 30\\)\n\\(S_3 = S_2 + T_3 = 30 + 1.5 = 31\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the next three partial sums by adding each subsequent term to the previous sum.",
        "workingOut": "\\(S_4 = 31\\frac{1}{2} + \\frac{3}{8} = 31\\frac{7}{8}\\)\n\\(S_5 = 31\\frac{7}{8} + \\frac{3}{32} = 31\\frac{31}{32}\\)\n\\(S_6 = 31\\frac{31}{32} + \\frac{3}{128} = 31\\frac{127}{128}\\)",
        "graphData": null
      },
      {
        "explanation": "Combine these results to state the sequence of partial sums.",
        "workingOut": "\\(24, 30, 31\\frac{1}{2}, 31\\frac{7}{8}, 31\\frac{31}{32}, 31\\frac{127}{128}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 24\\) and the common ratio \\(r = \\frac{1}{4}\\).\n\nFind the limiting sum \\(S_{\\infty}\\) using the formula:\n\\(S_{\\infty} = \\frac{a}{1-r}\\).",
    "opts": [
      "\\(32\\)",
      "\\(30\\)",
      "\\(28\\)",
      "\\(36\\)"
    ],
    "a": 0,
    "hint": "Substitute \\(a = 24\\) and \\(r = \\frac{1}{4}\\) into the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters and state the limiting sum formula.",
        "workingOut": "\\(a = 24\\), \\(r = \\frac{1}{4}\\), \\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{24}{1 - \\frac{1}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the denominator and calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{24}{\\frac{3}{4}} = 24 \\times \\frac{4}{3} = 32\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 24\\) and the common ratio \\(r = \\frac{1}{4}\\).\n\nFind the difference between the limiting sum and the sixth partial sum, \\(S_{\\infty} - S_6\\).",
    "opts": [
      "\\(\\frac{1}{256}\\)",
      "\\(\\frac{1}{64}\\)",
      "\\(\\frac{1}{128}\\)",
      "\\(\\frac{3}{128}\\)"
    ],
    "a": 2,
    "hint": "Subtract the sixth partial sum \\(S_6 = 31\\frac{127}{128}\\) from the limiting sum \\(S_{\\infty} = 32\\).",
    "solutionSteps": [
      {
        "explanation": "Retrieve the values of \\(S_{\\infty}\\) and \\(S_6\\) from the previous parts.",
        "workingOut": "\\(S_{\\infty} = 32\\), \\(S_6 = 31\\frac{127}{128} = \\frac{4095}{128}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the subtraction.",
        "workingOut": "\\(S_{\\infty} - S_6 = 32 - \\frac{4095}{128}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the subtraction to find the difference.",
        "workingOut": "\\(S_{\\infty} - S_6 = \\frac{4096}{128} - \\frac{4095}{128} = \\frac{1}{128}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 18\\) and the common ratio \\(r = -\\frac{1}{3}\\).\n\nFind the first six terms of the sequence of partial sums, \\(S_1, S_2, S_3, S_4, S_5, S_6\\).",
    "opts": [
      "\\(18, 12, 16, 14\\frac{2}{3}, 15\\frac{1}{9}, 14\\frac{20}{27}\\)",
      "\\(18, 15, 16, 15\\frac{1}{3}, 15\\frac{5}{9}, 15\\frac{13}{27}\\)",
      "\\(18, 12, 14, 13\\frac{1}{3}, 13\\frac{5}{9}, 13\\frac{13}{27}\\)",
      "\\(18, 12, 14, 13\\frac{2}{3}, 13\\frac{7}{9}, 13\\frac{19}{27}\\)"
    ],
    "a": 2,
    "hint": "The terms of this GP alternate in sign: \\(18, -6, 2, -\\frac{2}{3}, \\dots\\). Sum them sequentially.",
    "solutionSteps": [
      {
        "explanation": "List the first six terms of the progression using \\(T_n = a r^{n-1}\\).",
        "workingOut": "\\(T_1 = 18\\), \\(T_2 = -6\\), \\(T_3 = 2\\), \\(T_4 = -\\frac{2}{3}\\), \\(T_5 = \\frac{2}{9}\\), \\(T_6 = -\\frac{2}{27}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the first three partial sums step-by-step.",
        "workingOut": "\\(S_1 = 18\\)\n\\(S_2 = 18 + (-6) = 12\\)\n\\(S_3 = 12 + 2 = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the remaining partial sums by adding each successive term.",
        "workingOut": "\\(S_4 = 14 - \\frac{2}{3} = 13\\frac{1}{3} = \\frac{40}{3}\\)\n\\(S_5 = \\frac{40}{3} + \\frac{2}{9} = 13\\frac{5}{9}\\)\n\\(S_6 = 13\\frac{5}{9} - \\frac{2}{27} = 13\\frac{13}{27}\\)",
        "graphData": null
      },
      {
        "explanation": "State the complete sequence of partial sums.",
        "workingOut": "\\(18, 12, 14, 13\\frac{1}{3}, 13\\frac{5}{9}, 13\\frac{13}{27}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 18\\) and the common ratio \\(r = -\\frac{1}{3}\\).\n\nFind the limiting sum \\(S_{\\infty}\\) using the formula:\n\\(S_{\\infty} = \\frac{a}{1-r}\\).",
    "opts": [
      "\\(12\\)",
      "\\(18\\)",
      "\\(14.5\\)",
      "\\(13.5\\)"
    ],
    "a": 3,
    "hint": "Substitute the negative common ratio \\(r = -\\frac{1}{3}\\) carefully into the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters and write the formula.",
        "workingOut": "\\(a = 18\\), \\(r = -\\frac{1}{3}\\), \\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{18}{1 - (-\\frac{1}{3})}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the denominator and compute the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{18}{\\frac{4}{3}} = 18 \\times \\frac{3}{4} = \\frac{54}{4} = 13.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression has the first term \\(a = 18\\) and the common ratio \\(r = -\\frac{1}{3}\\).\n\nFind the difference between the limiting sum and the sixth partial sum, \\(S_{\\infty} - S_6\\).",
    "opts": [
      "\\(\\frac{1}{18}\\)",
      "\\(\\frac{1}{108}\\)",
      "\\(\\frac{1}{27}\\)",
      "\\(\\frac{1}{54}\\)"
    ],
    "a": 3,
    "hint": "Convert both values to fractions with a common denominator and subtract.",
    "solutionSteps": [
      {
        "explanation": "Retrieve the values of \\(S_{\\infty}\\) and \\(S_6\\).",
        "workingOut": "\\(S_{\\infty} = 13.5 = \\frac{27}{2}\\), \\(S_6 = 13\\frac{13}{27} = \\frac{364}{27}\\)",
        "graphData": null
      },
      {
        "explanation": "Find a common denominator to set up the subtraction.",
        "workingOut": "\\(S_{\\infty} - S_6 = \\frac{27 \\times 27}{54} - \\frac{364 \\times 2}{54}\\)",
        "graphData": null
      },
      {
        "explanation": "Perform the arithmetic to find the final difference.",
        "workingOut": "\\(\\frac{729}{54} - \\frac{728}{54} = \\frac{1}{54}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(2 + 1 + \\frac{1}{2} + \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = 2\\), \\(S_{\\infty} = 4\\)",
      "\\(a = 2\\), \\(S_{\\infty} = 8\\)",
      "\\(a = 2\\), \\(S_{\\infty} = 3\\)",
      "\\(a = 1\\), \\(S_{\\infty} = 2\\)"
    ],
    "a": 0,
    "hint": "The first term is the first number in the series, and the ratio \\(r\\) is found by dividing the second term by the first term.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) from the given series.",
        "workingOut": "\\(a = 2\\), \\(r = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the identified values into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{1 - \\frac{1}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{\\frac{1}{2}} = 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(12 + 6 + 3 + \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = 6\\), \\(S_{\\infty} = 12\\)",
      "\\(a = 12\\), \\(S_{\\infty} = 24\\)",
      "\\(a = 12\\), \\(S_{\\infty} = 18\\)",
      "\\(a = 12\\), \\(S_{\\infty} = 48\\)"
    ],
    "a": 1,
    "hint": "Find \\(r\\) by dividing any term by the preceding term, then apply the formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = 12\\), \\(r = \\frac{6}{12} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{12}{1 - \\frac{1}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to obtain the final answer.",
        "workingOut": "\\(S_{\\infty} = \\frac{12}{\\frac{1}{2}} = 24\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(-6 - 3 - 1.5 - \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = -6\\), \\(S_{\\infty} = -24\\)",
      "\\(a = -3\\), \\(S_{\\infty} = -6\\)",
      "\\(a = -6\\), \\(S_{\\infty} = -9\\)",
      "\\(a = -6\\), \\(S_{\\infty} = -12\\)"
    ],
    "a": 3,
    "hint": "Ensure the negative sign is retained for the first term.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters from the series.",
        "workingOut": "\\(a = -6\\), \\(r = \\frac{-3}{-6} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a\\) and \\(r\\) into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{-6}{1 - \\frac{1}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{-6}{\\frac{1}{2}} = -12\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q4a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(3 - 1 + \\frac{1}{3} - \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = 3\\), \\(S_{\\infty} = 1\\frac{1}{2}\\)",
      "\\(a = 3\\), \\(S_{\\infty} = 2\\frac{1}{4}\\)",
      "\\(a = 3\\), \\(S_{\\infty} = 4\\frac{1}{2}\\)",
      "\\(a = 3\\), \\(S_{\\infty} = 2\\)"
    ],
    "a": 1,
    "hint": "The common ratio is negative because the terms alternate signs.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and calculate the common ratio \\(r\\).",
        "workingOut": "\\(a = 3\\), \\(r = \\frac{-1}{3} = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{1 - (-\\frac{1}{3})}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the denominator and compute the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{\\frac{4}{3}} = \\frac{9}{4} = 2\\frac{1}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q4b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(45 - 15 + 5 - \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = 45\\), \\(S_{\\infty} = 37\\frac{1}{2}\\)",
      "\\(a = 45\\), \\(S_{\\infty} = 33\\frac{3}{4}\\)",
      "\\(a = 45\\), \\(S_{\\infty} = 30\\)",
      "\\(a = 45\\), \\(S_{\\infty} = 27\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio by finding the ratio of the second term to the first term.",
    "solutionSteps": [
      {
        "explanation": "Find the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 45\\), \\(r = \\frac{-15}{45} = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{45}{1 - (-\\frac{1}{3})}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the final fraction.",
        "workingOut": "\\(S_{\\infty} = \\frac{45}{\\frac{4}{3}} = \\frac{135}{4} = 33\\frac{3}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q4c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(-48 + 16 - 5\\frac{1}{3} + \\dots\\)\n\nIdentify the first term \\(a\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(a = -48\\), \\(S_{\\infty} = -40\\)",
      "\\(a = -48\\), \\(S_{\\infty} = -36\\)",
      "\\(a = -48\\), \\(S_{\\infty} = -32\\)",
      "\\(a = -48\\), \\(S_{\\infty} = -44\\)"
    ],
    "a": 1,
    "hint": "Note that \\(-5\\frac{1}{3} = -\\frac{16}{3}\\). Find \\(r\\) and use the formula.",
    "solutionSteps": [
      {
        "explanation": "Determine \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = -48\\), \\(r = \\frac{16}{-48} = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute parameters into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{-48}{1 - (-\\frac{1}{3})}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to find the final negative value.",
        "workingOut": "\\(S_{\\infty} = \\frac{-48}{\\frac{4}{3}} = -48 \\times \\frac{3}{4} = -36\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(80 + 20 + 5 + \\dots\\)\n\nIdentify the common ratio \\(r\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(r = \\frac{1}{4}\\), \\(S_{\\infty} = 100\\)",
      "\\(r = \\frac{1}{4}\\), \\(S_{\\infty} = 110\\)",
      "\\(r = \\frac{1}{4}\\), \\(S_{\\infty} = 106\\frac{2}{3}\\)",
      "\\(r = \\frac{1}{5}\\), \\(S_{\\infty} = 100\\)"
    ],
    "a": 2,
    "hint": "Identify the common ratio by dividing 20 by 80.",
    "solutionSteps": [
      {
        "explanation": "Determine the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = 80\\), \\(r = \\frac{20}{80} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a\\) and \\(r\\) into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{1 - \\frac{1}{4}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{\\frac{3}{4}} = \\frac{320}{3} = 106\\frac{2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(80 + 26\\frac{2}{3} + 8\\frac{8}{9} + \\dots\\)\n\nIdentify the common ratio \\(r\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 120\\)",
      "\\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 100\\)",
      "\\(r = \\frac{1}{4}\\), \\(S_{\\infty} = 120\\)",
      "\\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 115\\)"
    ],
    "a": 0,
    "hint": "Note that \\(26\\frac{2}{3} = \\frac{80}{3}\\). Find \\(r\\) using this term.",
    "solutionSteps": [
      {
        "explanation": "Determine the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = 80\\), \\(r = \\frac{80/3}{80} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{1 - \\frac{1}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction to get the final integer sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{\\frac{2}{3}} = 80 \\times \\frac{3}{2} = 120\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric progression is given by the series:\n\\(80 - 16 + 3.2 - \\dots\\)\n\nIdentify the common ratio \\(r\\) and find the limiting sum \\(S_{\\infty}\\).",
    "opts": [
      "\\(r = -\\frac{1}{4}\\), \\(S_{\\infty} = 64\\)",
      "\\(r = -\\frac{1}{5}\\), \\(S_{\\infty} = 75\\)",
      "\\(r = -\\frac{1}{5}\\), \\(S_{\\infty} = 60\\)",
      "\\(r = -\\frac{1}{5}\\), \\(S_{\\infty} = 66\\frac{2}{3}\\)"
    ],
    "a": 3,
    "hint": "Divide \\(-16\\) by \\(80\\) to find the common ratio.",
    "solutionSteps": [
      {
        "explanation": "Determine the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = 80\\), \\(r = \\frac{-16}{80} = -\\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute these values into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{1 - (-\\frac{1}{5})}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the final result.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{\\frac{6}{5}} = 80 \\times \\frac{5}{6} = \\frac{400}{6} = 66\\frac{2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(2 - 1 + \\frac{1}{2} - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 1\\frac{2}{3}\\)",
      "\\(S_{\\infty} = 1\\frac{1}{2}\\)",
      "\\(S_{\\infty} = 1\\frac{1}{3}\\)",
      "No limiting sum exists"
    ],
    "a": 2,
    "hint": "Calculate \\(r = -1/2\\). Since \\(|r| < 1\\), a limiting sum exists.",
    "solutionSteps": [
      {
        "explanation": "Find the common ratio \\(r\\) and check the existence condition \\(|r| < 1\\).",
        "workingOut": "\\(r = \\frac{-1}{2} = -\\frac{1}{2}\\), and \\(|-\\frac{1}{2}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the formula using \\(a = 2\\) and \\(r = -\\frac{1}{2}\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{1 - (-\\frac{1}{2})}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum value.",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{\\frac{3}{2}} = \\frac{4}{3} = 1\\frac{1}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(3 + 1 + \\frac{1}{3} + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 4.5\\)",
      "\\(S_{\\infty} = 4.2\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 5\\)"
    ],
    "a": 0,
    "hint": "The common ratio is \\(1/3\\). Since \\(1/3 < 1\\), the limiting sum exists.",
    "solutionSteps": [
      {
        "explanation": "Identify the common ratio \\(r\\) and confirm existence.",
        "workingOut": "\\(r = \\frac{1}{3}\\), and \\(|\\frac{1}{3}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a = 3\\) and \\(r = \\frac{1}{3}\\) into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{1 - \\frac{1}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{\\frac{2}{3}} = 4.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(3 - 2 + \\frac{4}{3} - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 1\\frac{3}{5}\\)",
      "\\(S_{\\infty} = 1\\frac{4}{5}\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 2\\)"
    ],
    "a": 1,
    "hint": "The ratio is \\(r = -2/3\\). Compare its absolute value with 1.",
    "solutionSteps": [
      {
        "explanation": "Find \\(r\\) and check the convergence condition.",
        "workingOut": "\\(r = -\\frac{2}{3}\\), and \\(|-\\frac{2}{3}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a = 3\\) and \\(r = -\\frac{2}{3}\\) into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{1 - (-\\frac{2}{3})}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the resulting fraction.",
        "workingOut": "\\(S_{\\infty} = \\frac{3}{\\frac{5}{3}} = \\frac{9}{5} = 1\\frac{4}{5}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(2 + \\frac{6}{5} + \\frac{18}{25} + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "No limiting sum exists",
      "\\(S_{\\infty} = 4\\)",
      "\\(S_{\\infty} = 5\\)",
      "\\(S_{\\infty} = 6\\)"
    ],
    "a": 2,
    "hint": "The common ratio is \\(r = 3/5\\). Check if the absolute value is less than 1.",
    "solutionSteps": [
      {
        "explanation": "Find the ratio \\(r\\) and test convergence.",
        "workingOut": "\\(r = \\frac{6/5}{2} = \\frac{3}{5}\\), and \\(|\\frac{3}{5}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a = 2\\) and \\(r = \\frac{3}{5}\\) into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{1 - \\frac{3}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{2}{\\frac{2}{5}} = 5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(6 - 9 + 13.5 - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 2.4\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 15\\)",
      "\\(S_{\\infty} = -12\\)"
    ],
    "a": 1,
    "hint": "Find the ratio \\(r\\) by dividing \\(-9\\) by \\(6\\). A limiting sum exists only if \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\).",
        "workingOut": "\\(r = \\frac{-9}{6} = -1.5\\)",
        "graphData": null
      },
      {
        "explanation": "Test the convergence condition \\(|r| < 1\\).",
        "workingOut": "\\(|-1.5| = 1.5 \\ge 1\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude whether a limiting sum exists.",
        "workingOut": "Since \\(|r| \\ge 1\\), no limiting sum exists.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(18 + 6 + 2 + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 27\\)",
      "\\(S_{\\infty} = 36\\)",
      "\\(S_{\\infty} = 24\\)",
      "No limiting sum exists"
    ],
    "a": 0,
    "hint": "Identify \\(a = 18\\) and \\(r = 1/3\\). Calculate the sum.",
    "solutionSteps": [
      {
        "explanation": "Find the ratio \\(r\\) and check the convergence condition.",
        "workingOut": "\\(r = \\frac{6}{18} = \\frac{1}{3}\\), and \\(|\\frac{1}{3}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum formula with \\(a = 18\\) and \\(r = \\frac{1}{3}\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{18}{1 - \\frac{1}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the value.",
        "workingOut": "\\(S_{\\infty} = \\frac{18}{\\frac{2}{3}} = 27\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(2000 + 200 + 20 + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 2200\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 2222\\)",
      "\\(S_{\\infty} = 2222\\frac{2}{9}\\)"
    ],
    "a": 3,
    "hint": "The ratio is \\(0.1\\), which is less than 1. Apply the formula.",
    "solutionSteps": [
      {
        "explanation": "Determine the ratio \\(r\\) and test convergence.",
        "workingOut": "\\(r = \\frac{200}{2000} = 0.1\\), and \\(|0.1| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a = 2000\\) and \\(r = 0.1\\) into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{2000}{1 - 0.1} = \\frac{2000}{0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the exact fraction.",
        "workingOut": "\\(S_{\\infty} = \\frac{20000}{9} = 2222\\frac{2}{9}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6h",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(2000 - 200 + 20 - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 1818\\frac{2}{11}\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 1818\\)",
      "\\(S_{\\infty} = 1800\\)"
    ],
    "a": 0,
    "hint": "The ratio is \\(-0.1\\). Apply the formula with this negative ratio.",
    "solutionSteps": [
      {
        "explanation": "Determine the ratio \\(r\\) and test convergence.",
        "workingOut": "\\(r = \\frac{-200}{2000} = -0.1\\), and \\(|-0.1| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(a = 2000\\) and \\(r = -0.1\\) into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{2000}{1 - (-0.1)} = \\frac{2000}{1.1}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction to get the final exact value.",
        "workingOut": "\\(S_{\\infty} = \\frac{20000}{11} = 1818\\frac{2}{11}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6i",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(3 - 3 + 3 - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "No limiting sum exists",
      "\\(S_{\\infty} = 0\\)",
      "\\(S_{\\infty} = 3\\)",
      "\\(S_{\\infty} = 1.5\\)"
    ],
    "a": 0,
    "hint": "Find the ratio \\(r = -1\\). Check if the absolute value is strictly less than 1.",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\).",
        "workingOut": "\\(r = \\frac{-3}{3} = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Test the convergence condition \\(|r| < 1\\).",
        "workingOut": "\\(|-1| = 1 \\ge 1\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude whether a limiting sum exists.",
        "workingOut": "Since the condition \\(|r| < 1\\) is not met, no limiting sum exists.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6j",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(200 + 180 + 162 + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = 1800\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = 2200\\)",
      "\\(S_{\\infty} = 2000\\)"
    ],
    "a": 3,
    "hint": "The common ratio is \\(r = 0.9\\). Verify convergence and calculate.",
    "solutionSteps": [
      {
        "explanation": "Find the ratio \\(r\\) and test convergence.",
        "workingOut": "\\(r = \\frac{180}{200} = 0.9\\), and \\(|0.9| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum formula with \\(a = 200\\) and \\(r = 0.9\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{200}{1 - 0.9}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the result.",
        "workingOut": "\\(S_{\\infty} = \\frac{200}{0.1} = 2000\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6k",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(-3 + \\frac{3}{5} - \\frac{3}{25} + \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "No limiting sum exists",
      "\\(S_{\\infty} = -3\\frac{1}{3}\\)",
      "\\(S_{\\infty} = -2\\frac{1}{2}\\)",
      "\\(S_{\\infty} = -2\\)"
    ],
    "a": 2,
    "hint": "The ratio is \\(r = -1/5\\). Apply the formula with \\(a = -3\\).",
    "solutionSteps": [
      {
        "explanation": "Find the ratio \\(r\\) and verify that a limiting sum exists.",
        "workingOut": "\\(r = \\frac{3/5}{-3} = -\\frac{1}{5}\\), and \\(|-\\frac{1}{5}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Use the formula with \\(a = -3\\) and \\(r = -\\frac{1}{5}\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{-3}{1 - (-\\frac{1}{5})}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expression to find the final value.",
        "workingOut": "\\(S_{\\infty} = \\frac{-3}{\\frac{6}{5}} = -3 \\times \\frac{5}{6} = -2.5 = -2\\frac{1}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q6l",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "Determine whether the geometric progression:\n\\(-\\frac{3}{4} - \\frac{3}{20} - \\frac{3}{100} - \\dots\\)\nhas a limiting sum. If it exists, find the limiting sum.",
    "opts": [
      "\\(S_{\\infty} = -\\frac{15}{16}\\)",
      "No limiting sum exists",
      "\\(S_{\\infty} = -1\\frac{1}{8}\\)",
      "\\(S_{\\infty} = -\\frac{3}{4}\\)"
    ],
    "a": 0,
    "hint": "Identify \\(a = -3/4\\) and the ratio \\(r = 1/5\\). Apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Find the ratio \\(r\\) and test for convergence.",
        "workingOut": "\\(r = \\frac{-3/20}{-3/4} = \\frac{1}{5}\\), and \\(|\\frac{1}{5}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{-\\frac{3}{4}}{1 - \\frac{1}{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the fraction.",
        "workingOut": "\\(S_{\\infty} = \\frac{-\\frac{3}{4}}{\\frac{4}{5}} = -\\frac{3}{4} \\times \\frac{5}{4} = -\\frac{15}{16}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q7a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A bouncy ball is dropped from a height of 18 metres. It bounces continually, each successive bounce height being one-third of the previous height.\n\nShow that the first distance travelled down-and-up is 24 metres, and explain why the successive down-and-up distances form a geometric progression with \\(r = \\frac{1}{3}\\).",
    "opts": [],
    "answer": "The first down-and-up distance consists of the initial drop of 18 metres plus the first upward bounce of 6 metres.\\nThis sum is \\(18 + 6 = 24\\) metres.\\nEach subsequent bounce is exactly one-third of the height of the previous bounce.\\nTherefore, both the downward and upward paths are multiplied by \\(\\frac{1}{3}\\), meaning the total distance for each bounce cycle is one-third of the previous cycle.\\nThis forms a geometric progression with common ratio \\(r = \\frac{1}{3}\\).",
    "hint": "The first down-and-up cycle includes the initial 18 m drop and the first 6 m bounce up.",
    "solutionSteps": [
      {
        "explanation": "Write down the component distances of the first down-and-up cycle.",
        "workingOut": "\\(\\text{First Down} = 18\\text{ m}\\), \\(\\text{First Up} = 18 \\times \\frac{1}{3} = 6\\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Sum these components to show the first down-and-up distance is 24 metres.",
        "workingOut": "\\(\\text{First Cycle} = 18 + 6 = 24\\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Explain why subsequent cycles scale by a factor of one-third.",
        "workingOut": "Since each subsequent height is scaled by \\(\\frac{1}{3}\\), the sum of the downward and upward paths in the next cycle will also be scaled by \\(\\frac{1}{3}\\), producing a GP with \\(r = \\frac{1}{3}\\).",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The limiting sum of a geometric series",
    "question": "A bouncy ball is dropped from a height of 18 metres. It bounces continually, each successive bounce height being one-third of the previous height.\n\nThrough what total distance did the ball eventually travel?",
    "opts": [
      "\\(45\\text{ metres}\\)",
      "\\(36\\text{ metres}\\)",
      "\\(30\\text{ metres}\\)",
      "\\(27\\text{ metres}\\)"
    ],
    "a": 1,
    "hint": "Use the limiting sum formula with the first cycle distance \\(a = 24\\) and ratio \\(r = 1/3\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first cycle distance \\(a\\) and common ratio \\(r\\) from the previous part.",
        "workingOut": "\\(a = 24\\), \\(r = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula to the sequence of down-and-up cycles.",
        "workingOut": "\\(S_{\\infty} = \\frac{24}{1 - \\frac{1}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the total distance.",
        "workingOut": "\\(S_{\\infty} = \\frac{24}{\\frac{2}{3}} = 24 \\times \\frac{3}{2} = 36\\text{ metres}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q8a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For a geometric progression with first term \\(a = 8\\) and common ratio \\(r = 1\\):\n\nWrite down the first six terms of \\(T_n\\) and the partial sums \\(S_n\\), and describe the behaviour of \\(S_n\\) as \\(n \\to \\infty\\).",
    "opts": [],
    "answer": "The terms of the progression are all 8, so \\(T_n = 8\\) for all \\(n\\).\\nSequence of partial sums: \\(8, 16, 24, 32, 40, 48\\).\\nSince \\(S_n = 8n\\), as \\(n\\) increases, \\(S_n\\) grows without bound.\\nTherefore, \\(S_n \\to \\infty\\) as \\(n \\to \\infty\\), meaning the series diverges and has no limiting sum.",
    "hint": "For \\(r=1\\), every term is equal to the first term.",
    "solutionSteps": [
      {
        "explanation": "Determine the terms \\(T_n\\) of the GP.",
        "workingOut": "\\(T_n = 8 \\times 1^{n-1} = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Find the sequence of partial sums \\(S_n\\) for \\(n = 1, 2, 3, 4, 5, 6\\).",
        "workingOut": "\\(S_1 = 8\\)\n\\(S_2 = 16\\)\n\\(S_3 = 24\\)\n\\(S_4 = 32\\)\n\\(S_5 = 40\\)\n\\(S_6 = 48\\)",
        "graphData": null
      },
      {
        "explanation": "Analyze the behavior of \\(S_n\\) as \\(n\\) approaches infinity.",
        "workingOut": "\\(S_n = 8n \\implies \\lim_{n\\to\\infty} S_n = \\infty\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q8b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For a geometric progression with first term \\(a = 12\\) and common ratio \\(r = -1\\):\n\nWrite down the first six terms of \\(T_n\\) and the partial sums \\(S_n\\), and describe the behaviour of \\(S_n\\) as \\(n \\to \\infty\\).",
    "opts": [],
    "answer": "The terms of the progression alternate in sign: \\(12, -12, 12, -12, 12, -12\\).\\nSequence of partial sums: \\(12, 0, 12, 0, 12, 0\\).\\nAs \\(n \\to \\infty\\), the partial sums oscillate between 12 and 0.\\nSince they do not approach a single fixed limit, the series diverges and has no limiting sum.",
    "hint": "Alternate the signs of the terms and calculate the running totals.",
    "solutionSteps": [
      {
        "explanation": "Generate the first six terms \\(T_n\\) of the sequence.",
        "workingOut": "\\(T_n = 12 \\times (-1)^{n-1} \\implies 12, -12, 12, -12, 12, -12\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the corresponding partial sums \\(S_n\\).",
        "workingOut": "\\(S_1 = 12\\)\n\\(S_2 = 12 - 12 = 0\\)\n\\(S_3 = 0 + 12 = 12\\)\n\\(S_4 = 12 - 12 = 0\\)\n\\(S_5 = 0 + 12 = 12\\)\n\\(S_6 = 12 - 12 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Examine the limit of \\(S_n\\) as \\(n \\to \\infty\\).",
        "workingOut": "\\(S_n\\) oscillates between 12 and 0, thus having no unique limit.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q8c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For a geometric progression with first term \\(a = 5\\) and common ratio \\(r = 3\\):\n\nWrite down the first six terms of \\(T_n\\) and the partial sums \\(S_n\\), and describe the behaviour of \\(S_n\\) as \\(n \\to \\infty\\).",
    "opts": [],
    "answer": "The terms of the progression are \\(5, 15, 45, 135, 405, 1215\\).\\nSequence of partial sums: \\(5, 20, 65, 200, 605, 1820\\).\\nSince \\(r = 3 > 1\\), the terms grow exponentially.\\nConsequently, \\(S_n \\to \\infty\\) as \\(n \\to \\infty\\), meaning the series diverges and has no limiting sum.",
    "hint": "Calculate the terms by multiplying by 3 at each step, then sum them.",
    "solutionSteps": [
      {
        "explanation": "Generate the first six terms \\(T_n\\).",
        "workingOut": "\\(T_n = 5 \\times 3^{n-1} \\implies 5, 15, 45, 135, 405, 1215\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the partial sums \\(S_n\\) for \\(n = 1\\) to \\(6\\).",
        "workingOut": "\\(S_1 = 5\\)\n\\(S_2 = 20\\)\n\\(S_3 = 65\\)\n\\(S_4 = 200\\)\n\\(S_5 = 605\\)\n\\(S_6 = 1820\\)",
        "graphData": null
      },
      {
        "explanation": "Analyze the behavior of \\(S_n\\) as \\(n\\) increases.",
        "workingOut": "Since the terms grow exponentially, \\(\\lim_{n\\to\\infty} S_n = \\infty\\).",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q8d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For a geometric progression with first term \\(a = 6\\) and common ratio \\(r = -3\\):\n\nWrite down the first six terms of \\(T_n\\) and the partial sums \\(S_n\\), and describe the behaviour of \\(S_n\\) as \\(n \\to \\infty\\).",
    "opts": [],
    "answer": "The terms of the progression are \\(6, -18, 54, -162, 486, -1458\\).\\nSequence of partial sums: \\(6, -12, 42, -120, 366, -1092\\).\\nAs \\(n\\) increases, the partial sums oscillate with an ever-increasing magnitude.\\nTherefore, \\(S_n\\) does not approach any limit, and the series diverges with no limiting sum.",
    "hint": "Each term is multiplied by \\(-3\\). Sum the alternating terms.",
    "solutionSteps": [
      {
        "explanation": "Determine the first six terms \\(T_n\\).",
        "workingOut": "\\(T_n = 6 \\times (-3)^{n-1} \\implies 6, -18, 54, -162, 486, -1458\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the partial sums \\(S_n\\).",
        "workingOut": "\\(S_1 = 6\\)\n\\(S_2 = -12\\)\n\\(S_3 = 42\\)\n\\(S_4 = -120\\)\n\\(S_5 = 366\\)\n\\(S_6 = -1092\\)",
        "graphData": null
      },
      {
        "explanation": "Examine the behavior as \\(n \\to \\infty\\).",
        "workingOut": "The values oscillate with growing absolute values: \\(6, -12, 42, -120, dots\\) which diverges.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For the geometric series:\n\\(96 + 48 + 24 + \\dots\\)\n\nFind the difference between its limiting sum and its fourth partial sum, \\(S_{\\infty} - S_4\\).",
    "opts": [
      "\\(18\\)",
      "\\(6\\)",
      "\\(8\\)",
      "\\(12\\)"
    ],
    "a": 3,
    "hint": "Identify \\(a = 96\\) and \\(r = 1/2\\). Calculate \\(S_{\\infty}\\) and the sum of the first four terms.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\) of the series.",
        "workingOut": "\\(a = 96\\), \\(r = \\frac{48}{96} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum \\(S_{\\infty}\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{96}{1 - \\frac{1}{2}} = 192\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the fourth partial sum \\(S_4\\).",
        "workingOut": "\\(S_4 = 96 + 48 + 24 + 12 = 180\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(S_4\\) from \\(S_{\\infty}\\) to find the difference.",
        "workingOut": "\\(S_{\\infty} - S_4 = 192 - 180 = 12\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For the geometric series:\n\\(200 + 20 + 2 + \\dots\\)\n\nFind the difference between its limiting sum and its fourth partial sum, \\(S_{\\infty} - S_4\\).",
    "opts": [
      "\\(\\frac{1}{90}\\)",
      "\\(\\frac{1}{45}\\)",
      "\\(\\frac{1}{50}\\)",
      "\\(\\frac{2}{45}\\)"
    ],
    "a": 1,
    "hint": "Write the fourth partial sum as a fraction or decimal, and calculate \\(S_{\\infty}\\) as a fraction.",
    "solutionSteps": [
      {
        "explanation": "Identify \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 200\\), \\(r = 0.1 = \\frac{1}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate \\(S_{\\infty}\\) as a fraction.",
        "workingOut": "\\(S_{\\infty} = \\frac{200}{1 - 0.1} = \\frac{2000}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the sum of the first four terms \\(S_4\\).",
        "workingOut": "\\(S_4 = 200 + 20 + 2 + 0.2 = 222.2 = 222\\frac{1}{5} = \\frac{1111}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract to find the difference.",
        "workingOut": "\\(S_{\\infty} - S_4 = \\frac{2000}{9} - \\frac{1111}{5} = \\frac{10000 - 9999}{45} = \\frac{1}{45}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "For the geometric series:\n\\(50 - 30 + 18 - \\dots\\)\n\nFind the difference between its limiting sum and its fourth partial sum, \\(S_{\\infty} - S_4\\).",
    "opts": [
      "\\(4.15\\)",
      "\\(4.25\\)",
      "\\(3.95\\)",
      "\\(4.05\\)"
    ],
    "a": 3,
    "hint": "Identify the negative common ratio \\(r = -0.6\\) and find the first four terms to sum.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 50\\), \\(r = \\frac{-30}{50} = -0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum \\(S_{\\infty}\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{50}{1 - (-0.6)} = \\frac{50}{1.6} = 31.25\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the fourth partial sum by writing down the first four terms.",
        "workingOut": "\\(T_1 = 50\\), \\(T_2 = -30\\), \\(T_3 = 18\\), \\(T_4 = 18 \\times (-0.6) = -10.8\\)\n\\(S_4 = 50 - 30 + 18 - 10.8 = 27.2\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract to find the difference.",
        "workingOut": "\\(S_{\\infty} - S_4 = 31.25 - 27.2 = 4.05\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q10a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "A local council offered free reflective house numbers to its 20000 home owners. In the first month, 20% of the owners installed them. In each subsequent month, the number of owners installing them was exactly 20% of the number who installed them in the previous month.\n\nShow that the numbers of installations each month form a geometric progression.",
    "opts": [],
    "answer": "In the first month, the number of installations is \\(20000 \\times 0.20 = 4000\\).\\nIn the second month, the number of installations is \\(4000 \\times 0.20 = 800\\).\\nIn the third month, the number of installations is \\(800 \\times 0.20 = 160\\).\\nSince each month's installation number is obtained by multiplying the previous month's number by a constant factor of \\(0.20\\), the sequence of installations \\(4000, 800, 160, \\dots\\) forms a geometric progression with first term \\(a = 4000\\) and common ratio \\(r = 0.2\\).",
    "hint": "Verify that the ratio between consecutive months' installations is a constant.",
    "solutionSteps": [
      {
        "explanation": "Calculate the installations for the first three months.",
        "workingOut": "\\(M_1 = 20000 \\times 0.2 = 4000\\)\n\\(M_2 = 4000 \\times 0.2 = 800\\)\n\\(M_3 = 800 \\times 0.2 = 160\\)",
        "graphData": null
      },
      {
        "explanation": "Write down the ratio of consecutive terms.",
        "workingOut": "\\(\\frac{M_2}{M_1} = \\frac{800}{4000} = 0.2\\)\n\\(\\frac{M_3}{M_2} = \\frac{160}{800} = 0.2\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude that it forms a GP.",
        "workingOut": "Because the ratio between successive terms is a constant \\(0.2\\), the sequence forms a GP with \\(a = 4000\\) and \\(r = 0.2\\).",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q10b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "A local council offered free reflective house numbers to its 20000 home owners. In the first month, 20% of the owners installed them. In each subsequent month, the number of owners installing them was exactly 20% of the number who installed them in the previous month.\n\nHow many home owners will eventually install the house numbers?",
    "opts": [
      "\\(5000\\)",
      "\\(4000\\)",
      "\\(4500\\)",
      "\\(6000\\)"
    ],
    "a": 0,
    "hint": "Identify the first term \\(a = 4000\\) and ratio \\(r = 0.2\\) and use the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters for the limiting sum.",
        "workingOut": "\\(a = 4000\\), \\(r = 0.2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the parameters into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{4000}{1 - 0.2}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the total eventual installations.",
        "workingOut": "\\(S_{\\infty} = \\frac{4000}{0.8} = 5000\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q10c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "A local council offered free reflective house numbers to its 20000 home owners. In the first month, 20% of the owners installed them. In each subsequent month, the number of owners installing them was exactly 20% of the number who installed them in the previous month.\n\nHow many eventual installations were not done in the first four months?",
    "opts": [
      "\\(16\\)",
      "\\(32\\)",
      "\\(8\\)",
      "\\(4\\)"
    ],
    "a": 2,
    "hint": "Find the difference between the limiting sum \\(S_{\\infty} = 5000\\) and the sum of the first four months \\(S_4\\).",
    "solutionSteps": [
      {
        "explanation": "Retrieve \\(S_{\\infty} = 5000\\) and calculate the first four months of installations.",
        "workingOut": "\\(T_1 = 4000\\), \\(T_2 = 800\\), \\(T_3 = 160\\), \\(T_4 = 32\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the sum of installations in the first four months, \\(S_4\\).",
        "workingOut": "\\(S_4 = 4000 + 800 + 160 + 32 = 4992\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(S_4\\) from \\(S_{\\infty}\\) to find the remaining installations.",
        "workingOut": "\\(S_{\\infty} - S_4 = 5000 - 4992 = 8\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q11a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "The Wellington Widget Factory has been advertising its unbreakable widgets every month. The first advertisement brought in 1500 sales, but every successive advertisement is only bringing in 80% of the previous month's sales.\n\nHow many widget sales will the advertisements eventually bring in?",
    "opts": [
      "\\(8000\\)",
      "\\(9000\\)",
      "\\(6000\\)",
      "\\(7500\\)"
    ],
    "a": 3,
    "hint": "Find the limiting sum with first term \\(a = 1500\\) and common ratio \\(r = 0.8\\).",
    "solutionSteps": [
      {
        "explanation": "State the parameters of the geometric progression.",
        "workingOut": "\\(a = 1500\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{1500}{1 - 0.8}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the total widget sales.",
        "workingOut": "\\(S_{\\infty} = \\frac{1500}{0.2} = 7500\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q11b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "The Wellington Widget Factory has been advertising its unbreakable widgets every month. The first advertisement brought in 1500 sales, but every successive advertisement is only bringing in 80% of the previous month's sales.\n\nAbout how many eventual sales were not brought in by the first 10 advertisements? (Round to the nearest whole number.)",
    "opts": [
      "\\(805\\)",
      "\\(680\\)",
      "\\(750\\)",
      "\\(920\\)"
    ],
    "a": 0,
    "hint": "The number of eventual sales not yet achieved after 10 advertisements is given by \\(S_{\\infty} - S_{10} = S_{\\infty} \\times r^{10}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the formula for the remaining sales after \\(n\\) terms.",
        "workingOut": "\\(\\text{Remaining Sales} = S_{\\infty} - S_n = S_{\\infty} \\times r^n\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(S_{\\infty} = 7500\\), \\(r = 0.8\\), and \\(n = 10\\) into the formula.",
        "workingOut": "\\(\\text{Remaining Sales} = 7500 \\times (0.8)^{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the exponential expression and round to the nearest whole number.",
        "workingOut": "\\(7500 \\times 0.107374 \\approx 805.3 \\approx 805\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(4 + 4x + 4x^2 + \\dots\\)\nand solve the equation \\(4 + 4x + 4x^2 + \\dots = 8\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{2}{3}\\)",
      "\\(S_{\\infty} = 4(1+x)\\), \\(x = \\frac{1}{2}\\)",
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{1}{2}\\)",
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{1}{3}\\)"
    ],
    "a": 2,
    "hint": "Equate the limiting sum formula to 8 and solve for \\(x\\). Ensure \\(|x| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the series and write the expression for the limiting sum.",
        "workingOut": "\\(a = 4\\), \\(r = x\\), so \\(S_{\\infty} = \\frac{4}{1-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the limiting sum equal to 8.",
        "workingOut": "\\(\\frac{4}{1-x} = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the equation for \\(x\\).",
        "workingOut": "\\(1-x = \\frac{4}{8} = \\frac{1}{2} \\implies x = 1 - \\frac{1}{2} = \\frac{1}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(4 + 4x + 4x^2 + \\dots\\)\nand solve the equation \\(4 + 4x + 4x^2 + \\dots = 6\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = 4(1+x)\\), \\(x = \\frac{1}{3}\\)",
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{1}{4}\\)",
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{1}{2}\\)",
      "\\(S_{\\infty} = \\frac{4}{1-x}\\), \\(x = \\frac{1}{3}\\)"
    ],
    "a": 3,
    "hint": "Set the limiting sum formula equal to 6 and solve for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Write the formula for the limiting sum of the series.",
        "workingOut": "\\(S_{\\infty} = \\frac{4}{1-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the expression equal to 6.",
        "workingOut": "\\(\\frac{4}{1-x} = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\(1-x = \\frac{4}{6} = \\frac{2}{3} \\implies x = 1 - \\frac{2}{3} = \\frac{1}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(6 - 6x + 6x^2 - \\dots\\)\nand solve the equation \\(6 - 6x + 6x^2 - \\dots = 9\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = \\frac{6}{1-x}\\), \\(x = \\frac{1}{3}\\)",
      "\\(S_{\\infty} = \\frac{6}{1+x}\\), \\(x = -\\frac{1}{2}\\)",
      "\\(S_{\\infty} = \\frac{6}{1+x}\\), \\(x = \\frac{1}{3}\\)",
      "\\(S_{\\infty} = \\frac{6}{1+x}\\), \\(x = -\\frac{1}{3}\\)"
    ],
    "a": 3,
    "hint": "Note that the common ratio is \\(-x\\) because the signs alternate.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\) of the series.",
        "workingOut": "\\(a = 6\\), \\(r = -x\\), so \\(S_{\\infty} = \\frac{6}{1 - (-x)} = \\frac{6}{1+x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set this sum equal to 9.",
        "workingOut": "\\(\\frac{6}{1+x} = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "\\(1+x = \\frac{6}{9} = \\frac{2}{3} \\implies x = \\frac{2}{3} - 1 = -\\frac{1}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(x + \\frac{x}{4} + \\frac{x}{16} + \\dots\\)\nand solve the equation \\(x + \\frac{x}{4} + \\frac{x}{16} + \\dots = 8\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = \\frac{4x}{3}\\), \\(x = 6\\)",
      "\\(S_{\\infty} = \\frac{4x}{3}\\), \\(x = 8\\)",
      "\\(S_{\\infty} = \\frac{5x}{4}\\), \\(x = 6.4\\)",
      "\\(S_{\\infty} = \\frac{3x}{4}\\), \\(x = 6\\)"
    ],
    "a": 0,
    "hint": "The first term is \\(x\\) and the common ratio is \\(1/4\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and ratio \\(r\\).",
        "workingOut": "\\(a = x\\), \\(r = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the limiting sum in terms of \\(x\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{x}{1 - \\frac{1}{4}} = \\frac{x}{\\frac{3}{4}} = \\frac{4x}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the limiting sum equal to 8 and solve for \\(x\\).",
        "workingOut": "\\(\\frac{4x}{3} = 8 \\implies 4x = 24 \\implies x = 6\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(x - \\frac{x}{4} + \\frac{x}{16} - \\dots\\)\nand solve the equation \\(x - \\frac{x}{4} + \\frac{x}{16} - \\dots = 5\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = \\frac{4x}{5}\\), \\(x = 6.25\\)",
      "\\(S_{\\infty} = \\frac{4x}{5}\\), \\(x = 5\\)",
      "\\(S_{\\infty} = \\frac{5x}{4}\\), \\(x = 4\\)",
      "\\(S_{\\infty} = \\frac{4x}{3}\\), \\(x = 3.75\\)"
    ],
    "a": 0,
    "hint": "The common ratio is negative, \\(r = -1/4\\). Apply the formula and solve.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = x\\), \\(r = -\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the limiting sum in terms of \\(x\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{x}{1 - (-\\frac{1}{4})} = \\frac{x}{\\frac{5}{4}} = \\frac{4x}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Equate to 5 and solve for \\(x\\).",
        "workingOut": "\\(\\frac{4x}{5} = 5 \\implies 4x = 25 \\implies x = 6.25\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q12f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find, in terms of \\(x\\), an expression for the limiting sum of the series:\n\\(x + \\frac{3x}{4} + \\frac{9x}{16} + \\dots\\)\nand solve the equation \\(x + \\frac{3x}{4} + \\frac{9x}{16} + \\dots = 8\\) to find \\(x\\).",
    "opts": [
      "\\(S_{\\infty} = 4x\\), \\(x = 2\\)",
      "\\(S_{\\infty} = \\frac{4x}{3}\\), \\(x = 6\\)",
      "\\(S_{\\infty} = 4x\\), \\(x = 4\\)",
      "\\(S_{\\infty} = \\frac{x}{4}\\), \\(x = 32\\)"
    ],
    "a": 0,
    "hint": "Identify the first term \\(a = x\\) and common ratio \\(r = 3/4\\).",
    "solutionSteps": [
      {
        "explanation": "Find the parameters of the GP.",
        "workingOut": "\\(a = x\\), \\(r = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum expression in terms of \\(x\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{x}{1 - \\frac{3}{4}} = \\frac{x}{\\frac{1}{4}} = 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Set equal to 8 and solve for \\(x\\).",
        "workingOut": "\\(4x = 8 \\implies x = 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q13a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric progression:\n\\(6 + 6x + 6x^2 + \\dots\\)\nto have a limiting sum, then find that limiting sum in terms of \\(x\\).",
    "opts": [
      "Condition: \\(|x| < 6\\), Limiting sum: \\(\\frac{6}{1-x}\\)",
      "Condition: \\(|x| < 1\\), Limiting sum: \\(\\frac{6}{1+x}\\)",
      "Condition: \\(x < 1\\), Limiting sum: \\(\\frac{6}{1-x}\\)",
      "Condition: \\(|x| < 1\\), Limiting sum: \\(\\frac{6}{1-x}\\)"
    ],
    "a": 3,
    "hint": "A geometric progression has a limiting sum if and only if its common ratio satisfies \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = 6\\), \\(r = x\\)",
        "graphData": null
      },
      {
        "explanation": "State the convergence condition for a GP.",
        "workingOut": "\\(|r| < 1 \\implies |x| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate the limiting sum using the standard formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{6}{1-x}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q13b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric progression:\n\\(3x + 12x^2 + 48x^3 + \\dots\\)\nto have a limiting sum, then find that limiting sum in terms of \\(x\\).",
    "opts": [
      "Condition: \\(|x| < 1\\), Limiting sum: \\(\\frac{3x}{1 - 4x}\\)",
      "Condition: \\(|x| < \\frac{1}{4}\\), Limiting sum: \\(\\frac{3x}{1 + 4x}\\)",
      "Condition: \\(|x| < 4\\), Limiting sum: \\(\\frac{3x}{1 - 4x}\\)",
      "Condition: \\(|x| < \\frac{1}{4}\\), Limiting sum: \\(\\frac{3x}{1 - 4x}\\)"
    ],
    "a": 3,
    "hint": "The common ratio is \\(4x\\). Require \\(|4x| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Find the parameters of the GP.",
        "workingOut": "\\(a = 3x\\), \\(r = \\frac{12x^2}{3x} = 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Establish the convergence condition.",
        "workingOut": "\\(|r| < 1 \\implies |4x| < 1 \\implies |x| < \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{3x}{1 - 4x}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q13c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric progression:\n\\(1 + (x - 2) + (x - 2)^2 + \\dots\\)\nto have a limiting sum, then find that limiting sum in terms of \\(x\\).",
    "opts": [
      "Condition: \\(-1 < x < 1\\), Limiting sum: \\(\\frac{1}{3-x}\\)",
      "Condition: \\(2 < x < 3\\), Limiting sum: \\(\\frac{1}{3-x}\\)",
      "Condition: \\(1 < x < 3\\), Limiting sum: \\(\\frac{1}{3-x}\\)",
      "Condition: \\(1 < x < 3\\), Limiting sum: \\(\\frac{1}{x-1}\\)"
    ],
    "a": 2,
    "hint": "The ratio is \\(x-2\\). Solve the inequality \\(|x-2| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 1\\), \\(r = x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the convergence condition inequality.",
        "workingOut": "\\(|x - 2| < 1 \\implies -1 < x - 2 < 1 \\implies 1 < x < 3\\)",
        "graphData": null
      },
      {
        "explanation": "Write the limiting sum expression.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (x-2)} = \\frac{1}{3-x}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q13d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric progression:\n\\(1 + (2 + x) + (2 + x)^2 + \\dots\\)\nto have a limiting sum, then find that limiting sum in terms of \\(x\\).",
    "opts": [
      "Condition: \\(-3 < x < 1\\), Limiting sum: \\(\\frac{-1}{1+x}\\)",
      "Condition: \\(-1 < x < 1\\), Limiting sum: \\(\\frac{1}{1+x}\\)",
      "Condition: \\(-3 < x < -1\\), Limiting sum: \\(\\frac{-1}{1+x}\\)",
      "Condition: \\(-3 < x < -1\\), Limiting sum: \\(\\frac{1}{3+x}\\)"
    ],
    "a": 2,
    "hint": "Solve the inequality \\(|2+x| < 1\\) and simplify the sum expression.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the progression.",
        "workingOut": "\\(a = 1\\), \\(r = 2 + x\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the convergence condition.",
        "workingOut": "\\(|2 + x| < 1 \\implies -1 < 2 + x < 1 \\implies -3 < x < -1\\)",
        "graphData": null
      },
      {
        "explanation": "Formulate and simplify the limiting sum expression.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (2 + x)} = \\frac{1}{-1 - x} = \\frac{-1}{1+x}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q14a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum of the series, if it exists:\n\\(1 + (1.02) + (1.02)^2 + \\dots\\)",
    "opts": [
      "\\(-50\\)",
      "\\(100\\)",
      "Does not exist",
      "\\(50\\)"
    ],
    "a": 2,
    "hint": "Identify the common ratio \\(r = 1.02\\) and check if \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Find the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(r = 1.02\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the condition for the existence of a limiting sum.",
        "workingOut": "\\(|1.02| = 1.02 \\ge 1\\)",
        "graphData": null
      },
      {
        "explanation": "State whether the limiting sum exists.",
        "workingOut": "Since the absolute value of the common ratio is not strictly less than 1, the series diverges and the limiting sum does not exist.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q14b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum of the series, if it exists:\n\\(1 - 0.98 + (0.98)^2 - \\dots\\)",
    "opts": [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{50}{99}\\)",
      "\\(\\frac{100}{99}\\)",
      "Does not exist"
    ],
    "a": 1,
    "hint": "The common ratio is \\(-0.98\\). Verify that its absolute value is less than 1.",
    "solutionSteps": [
      {
        "explanation": "Determine the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 1\\), \\(r = -0.98\\)",
        "graphData": null
      },
      {
        "explanation": "Check the convergence criteria.",
        "workingOut": "\\(|-0.98| = 0.98 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values into the limiting sum formula and simplify.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (-0.98)} = \\frac{1}{1.98} = \\frac{100}{198} = \\frac{50}{99}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q14c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum of the series, if it exists:\n\\(1 + (1.02)^{-1} + (1.02)^{-2} + \\dots\\)",
    "opts": [
      "\\(49\\)",
      "Does not exist",
      "\\(50\\)",
      "\\(51\\)"
    ],
    "a": 3,
    "hint": "Note that \\((1.02)^{-1} = \\frac{1}{1.02} = \\frac{50}{51}\\).",
    "solutionSteps": [
      {
        "explanation": "Find the common ratio \\(r\\).",
        "workingOut": "\\(r = (1.02)^{-1} = \\frac{1}{1.02} = \\frac{100}{102} = \\frac{50}{51}\\)",
        "graphData": null
      },
      {
        "explanation": "Check if the series converges.",
        "workingOut": "\\(|\\frac{50}{51}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum using the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - \\frac{50}{51}} = \\frac{1}{\\frac{1}{51}} = 51\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q14d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum of the series, if it exists:\n\\(0.96 - 0.24 + 0.06 - \\dots\\)",
    "opts": [
      "\\(0.8\\)",
      "\\(0.72\\)",
      "\\(0.768\\)",
      "Does not exist"
    ],
    "a": 2,
    "hint": "Identify \\(a = 0.96\\) and the common ratio \\(r = -0.25\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 0.96\\), \\(r = \\frac{-0.24}{0.96} = -0.25 = -\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Test the convergence condition.",
        "workingOut": "\\(|-0.25| = 0.25 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Compute the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{0.96}{1 - (-\\frac{1}{4})} = \\frac{0.96}{1.25} = 0.768\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(18\\sqrt{3} + 6\\sqrt{3} + 2\\sqrt{3} + \\dots\\)",
    "opts": [
      "\\(36\\sqrt{3}\\)",
      "\\(27\\sqrt{3}\\)",
      "\\(24\\sqrt{3}\\)",
      "Does not exist"
    ],
    "a": 1,
    "hint": "The first term is \\(18\\sqrt{3}\\) and the common ratio is \\(1/3\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 18\\sqrt{3}\\), \\(r = \\frac{6\\sqrt{3}}{18\\sqrt{3}} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Check the convergence criteria.",
        "workingOut": "\\(|\\frac{1}{3}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{18\\sqrt{3}}{1 - \\frac{1}{3}} = \\frac{18\\sqrt{3}}{\\frac{2}{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "\\(S_{\\infty} = 18\\sqrt{3} \\times \\frac{3}{2} = 27\\sqrt{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(32\\sqrt{5} - 16\\sqrt{5} + 8\\sqrt{5} - \\dots\\)",
    "opts": [
      "\\(\\frac{64\\sqrt{5}}{3}\\)",
      "\\(\\frac{32\\sqrt{5}}{3}\\)",
      "\\(24\\sqrt{5}\\)",
      "Does not exist"
    ],
    "a": 0,
    "hint": "Identify the alternating ratio \\(r = -1/2\\).",
    "solutionSteps": [
      {
        "explanation": "Determine \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 32\\sqrt{5}\\), \\(r = \\frac{-16\\sqrt{5}}{32\\sqrt{5}} = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the convergence condition.",
        "workingOut": "\\(|-\\frac{1}{2}| = 0.5 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{32\\sqrt{5}}{1 - (-\\frac{1}{2})} = \\frac{32\\sqrt{5}}{\\frac{3}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the resulting expression.",
        "workingOut": "\\(S_{\\infty} = 32\\sqrt{5} \\times \\frac{2}{3} = \\frac{64\\sqrt{5}}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(5 + \\sqrt{5} + 1 + \\dots\\)",
    "opts": [
      "\\(\\frac{25 + 5\\sqrt{5}}{4}\\)",
      "Does not exist",
      "\\(\\frac{25 - 5\\sqrt{5}}{4}\\)",
      "\\(\\frac{5\\sqrt{5} - 5}{4}\\)"
    ],
    "a": 0,
    "hint": "The common ratio is \\(1/\\sqrt{5}\\). Rationalize the denominator of your result.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 5\\), \\(r = \\frac{\\sqrt{5}}{5} = \\frac{1}{\\sqrt{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify convergence.",
        "workingOut": "\\(|\\frac{1}{\\sqrt{5}}| \\approx 0.447 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula and simplify.",
        "workingOut": "\\(S_{\\infty} = \\frac{5}{1 - \\frac{1}{\\sqrt{5}}} = \\frac{5\\sqrt{5}}{\\sqrt{5} - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rationalize the denominator by multiplying by the conjugate \\(\\sqrt{5} + 1\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{5\\sqrt{5}(\\sqrt{5} + 1)}{(\\sqrt{5}-1)(\\sqrt{5}+1)} = \\frac{25 + 5\\sqrt{5}}{5 - 1} = \\frac{25 + 5\\sqrt{5}}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(6 - 2\\sqrt{3} + 2 - \\dots\\)",
    "opts": [
      "\\(9 + 3\\sqrt{3}\\)",
      "\\(6 - 2\\sqrt{3}\\)",
      "Does not exist",
      "\\(9 - 3\\sqrt{3}\\)"
    ],
    "a": 3,
    "hint": "The ratio is \\(r = -2\\sqrt{3}/6 = -1/\\sqrt{3}\\). Rationalize the denominator.",
    "solutionSteps": [
      {
        "explanation": "Determine \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 6\\), \\(r = \\frac{-2\\sqrt{3}}{6} = -\\frac{1}{\\sqrt{3}}\\)",
        "graphData": null
      },
      {
        "explanation": "Test the convergence criterion.",
        "workingOut": "\\(|-\\frac{1}{\\sqrt{3}}| \\approx 0.577 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the limiting sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{6}{1 - (-\\frac{1}{\\sqrt{3}})} = \\frac{6}{1 + \\frac{1}{\\sqrt{3}}} = \\frac{6\\sqrt{3}}{\\sqrt{3} + 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rationalize the denominator using the conjugate \\(\\sqrt{3} - 1\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{6\\sqrt{3}(\\sqrt{3} - 1)}{(\\sqrt{3}+1)(\\sqrt{3}-1)} = \\frac{18 - 6\\sqrt{3}}{3-1} = \\frac{18 - 6\\sqrt{3}}{2} = 9 - 3\\sqrt{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(7 - 2\\sqrt{7} + 4 - \\dots\\)",
    "opts": [
      "\\(\\frac{49 - 14\\sqrt{7}}{3}\\)",
      "\\(\\frac{35 - 7\\sqrt{7}}{3}\\)",
      "\\(\\frac{49 + 14\\sqrt{7}}{3}\\)",
      "Does not exist"
    ],
    "a": 0,
    "hint": "The common ratio is \\(-2/\\sqrt{7}\\). Verify convergence.",
    "solutionSteps": [
      {
        "explanation": "Determine \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 7\\), \\(r = \\frac{-2\\sqrt{7}}{7} = -\\frac{2}{\\sqrt{7}}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the convergence condition.",
        "workingOut": "\\(|-\\frac{2}{\\sqrt{7}}| \\approx 0.756 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula and simplify.",
        "workingOut": "\\(S_{\\infty} = \\frac{7}{1 - (-\\frac{2}{\\sqrt{7}})} = \\frac{7}{1 + \\frac{2}{\\sqrt{7}}} = \\frac{7\\sqrt{7}}{\\sqrt{7} + 2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rationalize the denominator using the conjugate \\(\\sqrt{7} - 2\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{7\\sqrt{7}(\\sqrt{7} - 2)}{(\\sqrt{7}+2)(\\sqrt{7}-2)} = \\frac{49 - 14\\sqrt{7}}{7 - 4} = \\frac{49 - 14\\sqrt{7}}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(4 + 2\\sqrt{5} + 5 + \\dots\\)",
    "opts": [
      "\\(4\\sqrt{5} - 8\\)",
      "\\(4\\sqrt{5} + 8\\)",
      "Does not exist",
      "\\(8\\sqrt{5} + 12\\)"
    ],
    "a": 2,
    "hint": "Calculate the common ratio \\(r\\) and check if \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the common ratio \\(r\\).",
        "workingOut": "\\(r = \\frac{2\\sqrt{5}}{4} = \\frac{\\sqrt{5}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the condition for convergence.",
        "workingOut": "\\(\\sqrt{5} \\approx 2.236 \\implies r \\approx 1.118 \\ge 1\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude whether the limiting sum exists.",
        "workingOut": "Since the common ratio \\(r \\ge 1\\), the series diverges and the limiting sum does not exist.",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(1 + (2 - \\sqrt{5}) + (2 - \\sqrt{5})^2 + \\dots\\)",
    "opts": [
      "\\(\\frac{\\sqrt{5} - 1}{4}\\)",
      "Does not exist",
      "\\(\\frac{\\sqrt{5} + 1}{4}\\)",
      "\\(\\frac{\\sqrt{5} + 3}{4}\\)"
    ],
    "a": 2,
    "hint": "The common ratio is \\(2 - \\sqrt{5}\\). Since \\(\\sqrt{5} \\approx 2.236\\), the ratio is negative.",
    "solutionSteps": [
      {
        "explanation": "Determine the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 1\\), \\(r = 2 - \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the convergence condition.",
        "workingOut": "\\(2 - \\sqrt{5} \\approx -0.236 \\implies |2 - \\sqrt{5}| < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (2 - \\sqrt{5})} = \\frac{1}{\\sqrt{5} - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Rationalize the denominator by multiplying by \\(\\sqrt{5} + 1\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{\\sqrt{5} + 1}{(\\sqrt{5}-1)(\\sqrt{5}+1)} = \\frac{\\sqrt{5} + 1}{5 - 1} = \\frac{\\sqrt{5} + 1}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q15h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Find the limiting sum, if it exists, of the series:\n\\(1 + (3 - \\sqrt{7}) + (3 - \\sqrt{7})^2 + \\dots\\)",
    "opts": [
      "\\(\\frac{\\sqrt{7} + 2}{3}\\)",
      "Does not exist",
      "\\(\\frac{\\sqrt{7} + 1}{3}\\)",
      "\\(\\frac{\\sqrt{7} - 2}{3}\\)"
    ],
    "a": 0,
    "hint": "Identify \\(r = 3 - \\sqrt{7}\\). Apply the formula and rationalize.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 1\\), \\(r = 3 - \\sqrt{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify convergence.",
        "workingOut": "\\(\\sqrt{7} \\approx 2.646 \\implies r \\approx 0.354 < 1\\) (exists)",
        "graphData": null
      },
      {
        "explanation": "Apply the sum formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (3 - \\sqrt{7})} = \\frac{1}{\\sqrt{7} - 2}\\)",
        "graphData": null
      },
      {
        "explanation": "Rationalize the denominator using the conjugate \\(\\sqrt{7} + 2\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{\\sqrt{7} + 2}{(\\sqrt{7}-2)(\\sqrt{7}+2)} = \\frac{\\sqrt{7} + 2}{7 - 4} = \\frac{\\sqrt{7} + 2}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q16a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Expand the geometric series given below for the first few terms, write down \\(a\\) and \\(r\\), and find its limiting sum:\n\\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{4}\\right)^n\\)",
    "opts": [
      "\\(a = 1\\), \\(r = \\frac{1}{4}\\), \\(S_{\\infty} = \\frac{4}{3}\\)",
      "\\(a = \\frac{1}{4}\\), \\(r = \\frac{1}{4}\\), \\(S_{\\infty} = \\frac{1}{4}\\)",
      "\\(a = \\frac{1}{4}\\), \\(r = \\frac{1}{4}\\), \\(S_{\\infty} = \\frac{1}{3}\\)",
      "\\(a = \\frac{1}{4}\\), \\(r = \\frac{1}{2}\\), \\(S_{\\infty} = \\frac{1}{2}\\)"
    ],
    "a": 2,
    "hint": "Expand the sigma notation by substituting \\(n=1, 2, 3\\).",
    "solutionSteps": [
      {
        "explanation": "Expand the summation for the first few terms.",
        "workingOut": "\\(\\sum_{n=1}^{\\infty} \\left(\\frac{1}{4}\\right)^n = \\frac{1}{4} + \\frac{1}{16} + \\frac{1}{64} + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the first term \\(a\\) and the common ratio \\(r\\).",
        "workingOut": "\\(a = \\frac{1}{4}\\), \\(r = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{\\frac{1}{4}}{1 - \\frac{1}{4}} = \\frac{\\frac{1}{4}}{\\frac{3}{4}} = \\frac{1}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q16b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Expand the geometric series given below for the first few terms, write down \\(a\\) and \\(r\\), and find its limiting sum:\n\\(\\sum_{n=1}^{\\infty} 5 \\times \\left(\\frac{1}{3}\\right)^n\\)",
    "opts": [
      "\\(a = \\frac{5}{3}\\), \\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 2.5\\)",
      "\\(a = \\frac{5}{3}\\), \\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 5\\)",
      "\\(a = \\frac{5}{3}\\), \\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 3\\)",
      "\\(a = 5\\), \\(r = \\frac{1}{3}\\), \\(S_{\\infty} = 7.5\\)"
    ],
    "a": 0,
    "hint": "Substitute \\(n=1\\) to find the first term, then find the ratio.",
    "solutionSteps": [
      {
        "explanation": "Expand the summation to list the first few terms.",
        "workingOut": "\\(\\sum_{n=1}^{\\infty} 5 \\times \\left(\\frac{1}{3}\\right)^n = \\frac{5}{3} + \\frac{5}{9} + \\frac{5}{27} + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = \\frac{5}{3}\\), \\(r = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{\\frac{5}{3}}{1 - \\frac{1}{3}} = \\frac{\\frac{5}{3}}{\\frac{2}{3}} = \\frac{5}{2} = 2.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q16c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The limiting sum of a geometric series",
    "question": "Expand the geometric series given below for the first few terms, write down \\(a\\) and \\(r\\), and find its limiting sum:\n\\(\\sum_{n=1}^{\\infty} 50 \\times \\left(-\\frac{2}{5}\\right)^n\\)",
    "opts": [
      "\\(a = -20\\), \\(r = -\\frac{2}{5}\\), \\(S_{\\infty} = -14\\frac{2}{7}\\)",
      "\\(a = -20\\), \\(r = \\frac{2}{5}\\), \\(S_{\\infty} = -14\\frac{2}{7}\\)",
      "\\(a = 50\\), \\(r = -\\frac{2}{5}\\), \\(S_{\\infty} = 35\\frac{5}{7}\\)",
      "\\(a = -20\\), \\(r = -\\frac{2}{5}\\), \\(S_{\\infty} = -33\\frac{1}{3}\\)"
    ],
    "a": 0,
    "hint": "Note that the base is negative, so the first term will be negative and the terms will alternate.",
    "solutionSteps": [
      {
        "explanation": "Write out the first few terms by substituting \\(n=1, 2, 3\\).",
        "workingOut": "\\(50 \\times (-\\frac{2}{5})^1 + 50 \\times (-\\frac{2}{5})^2 + 50 \\times (-\\frac{2}{5})^3 + \\dots = -20 + 8 - 3.2 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = -20\\), \\(r = -\\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{-20}{1 - (-\\frac{2}{5})} = \\frac{-20}{\\frac{7}{5}} = -\\frac{100}{7} = -14\\frac{2}{7}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum.\n\nFind the common ratio \\(r\\) if the limiting sum equals 4 times the first term.",
    "opts": [
      "\\(r = \\frac{3}{4}\\)",
      "\\(r = \\frac{1}{4}\\)",
      "\\(r = \\frac{2}{3}\\)",
      "\\(r = \\frac{1}{2}\\)"
    ],
    "a": 0,
    "hint": "Write down the equation setting \\(S_{\\infty} = 4a\\) and solve for \\(r\\).",
    "solutionSteps": [
      {
        "explanation": "State the equation representing the given condition.",
        "workingOut": "\\(S_{\\infty} = 4a\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the formula for \\(S_{\\infty}\\) into the equation.",
        "workingOut": "\\(\\frac{a}{1-r} = 4a\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\(a\\) (assuming \\(a \\neq 0\\)) and solve for \\(r\\).",
        "workingOut": "\\(\\frac{1}{1-r} = 4 \\implies 1-r = \\frac{1}{4} \\implies r = 1 - \\frac{1}{4} = \\frac{3}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum.\n\nFind the first three terms of this progression if the second term is 8 and the limiting sum is 32.",
    "opts": [
      "\\(24, 8, frac{8}{3}\\)",
      "\\(18, 8, frac{32}{9}\\)",
      "\\(12, 8, frac{16}{3}\\)",
      "\\(16, 8, 4\\)"
    ],
    "a": 3,
    "hint": "Express the second term \\(ar = 8\\) and the limiting sum \\(\\frac{a}{1-r} = 32\\), then solve for \\(a\\) and \\(r\\).",
    "solutionSteps": [
      {
        "explanation": "Write the system of equations based on the given information.",
        "workingOut": "\\(T_2 = ar = 8\\)\n\\(S_{\\infty} = \\frac{a}{1-r} = 32\\)",
        "graphData": null
      },
      {
        "explanation": "Express the first term \\(a\\) in terms of \\(r\\) and substitute it into the second equation.",
        "workingOut": "\\(a = \\frac{8}{r} \\implies \\frac{\\frac{8}{r}}{1-r} = 32 \\implies \\frac{8}{r(1-r)} = 32\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation into a quadratic form.",
        "workingOut": "\\(\\frac{1}{r(1-r)} = 4 \\implies 4r(1-r) = 1 \\implies 4r - 4r^2 = 1 \\implies 4r^2 - 4r + 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for \\(r\\) and find the corresponding first term \\(a\\).",
        "workingOut": "\\((2r - 1)^2 = 0 \\implies r = \\frac{1}{2}\\)\n\\(a = \\frac{8}{1/2} = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Generate the first three terms of the sequence.",
        "workingOut": "\\(T_1 = 16\\), \\(T_2 = 8\\), \\(T_3 = 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum.\n\nFind the common ratio \\(r\\) if the sum of all terms except the first term equals 3 times the first term.",
    "opts": [
      "\\(r = \\frac{1}{3}\\)",
      "\\(r = \\frac{2}{3}\\)",
      "\\(r = \\frac{3}{4}\\)",
      "\\(r = \\frac{1}{2}\\)"
    ],
    "a": 2,
    "hint": "The sum of all terms except the first is \\(S_{\\infty} - a\\). Set this equal to \\(3a\\) and solve.",
    "solutionSteps": [
      {
        "explanation": "Set up the algebraic equation from the given description.",
        "workingOut": "\\(S_{\\infty} - a = 3a \\implies S_{\\infty} = 4a\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the formula for the limiting sum.",
        "workingOut": "\\(\\frac{a}{1-r} = 4a\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by \\(a\\) and solve the resulting simple linear equation.",
        "workingOut": "\\(\\frac{1}{1-r} = 4 \\implies 1-r = \\frac{1}{4} \\implies r = \\frac{3}{4}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17d",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum.\n\nShow that the sum \\(S\\) of all terms from the third term onwards (i.e. \\(T_3 + T_4 + T_5 + \\dots\\)) is given by:\n\\(S = \\frac{ar^2}{1-r}\\).",
    "opts": [],
    "answer": "The terms from the third term onwards are \\(ar^2, ar^3, ar^4, \\dots\\).\\nThis series is a geometric progression with first term \\(A = ar^2\\) and common ratio \\(R = r\\).\\nSince the original series converges, we have \\(|r| < 1\\), so this subseries also converges.\\nApplying the limiting sum formula, we get:\\n\\(S = \\frac{A}{1-R} = \\frac{ar^2}{1-r}\\).",
    "hint": "Identify the first term of the subseries starting at \\(T_3\\) and apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "List the terms of the series starting from the third term.",
        "workingOut": "\\(S = T_3 + T_4 + T_5 + \\dots = ar^2 + ar^3 + ar^4 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the first term and common ratio of this subseries.",
        "workingOut": "\\(\\text{First term } A = ar^2\\), \\(\\text{Ratio } R = r\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the standard formula for the limiting sum of a GP.",
        "workingOut": "\\(S = \\frac{A}{1-R} = \\frac{ar^2}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17di",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum, and \\(S\\) is the sum of all terms from the third term onwards:\n\\(S = \\frac{ar^2}{1-r}\\)\n\nFind the common ratio \\(r\\) if \\(S\\) is equal to the first term.",
    "opts": [
      "\\(r = \\frac{1}{2}\\)",
      "\\(r = \\frac{\\sqrt{5}+1}{2}\\)",
      "\\(r = \\frac{\\sqrt{3}-1}{2}\\)",
      "\\(r = \\frac{\\sqrt{5}-1}{2}\\)"
    ],
    "a": 3,
    "hint": "Set \\(S = a\\) and solve the quadratic equation \\(r^2 + r - 1 = 0\\), selecting the root where \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Equate \\(S\\) to the first term \\(a\\).",
        "workingOut": "\\(\\frac{ar^2}{1-r} = a\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\(a\\) and multiply by \\(1-r\\).",
        "workingOut": "\\(r^2 = 1 - r \\implies r^2 + r - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation using the quadratic formula.",
        "workingOut": "\\(r = \\frac{-1 \\pm \\sqrt{1^2 - 4(1)(-1)}}{2} = \\frac{-1 \\pm \\sqrt{5}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the valid root satisfying the convergence condition \\(|r| < 1\\).",
        "workingOut": "Since \\(\\frac{-1-\\sqrt{5}}{2} < -1\\), we must have \\(r = \\frac{\\sqrt{5}-1}{2} \\approx 0.618\\) (which satisfies \\(|r| < 1\\)).",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17dii",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum, and \\(S\\) is the sum of all terms from the third term onwards:\n\\(S = \\frac{ar^2}{1-r}\\)\n\nFind the common ratio \\(r\\) if \\(S\\) is equal to the second term.",
    "opts": [
      "\\(r = \\frac{1}{4}\\)",
      "\\(r = \\frac{1}{2}\\)",
      "\\(r = \\frac{1}{3}\\)",
      "\\(r = \\frac{2}{3}\\)"
    ],
    "a": 1,
    "hint": "Set \\(S = ar\\) and solve the resulting equation.",
    "solutionSteps": [
      {
        "explanation": "Equate \\(S\\) to the second term \\(ar\\).",
        "workingOut": "\\(\\frac{ar^2}{1-r} = ar\\)",
        "graphData": null
      },
      {
        "explanation": "Assuming \\(a \\neq 0\\) and \\(r \\neq 0\\), divide both sides by \\(ar\\).",
        "workingOut": "\\(\\frac{r}{1-r} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear equation for \\(r\\).",
        "workingOut": "\\(r = 1 - r \\implies 2r = 1 \\implies r = \\frac{1}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q17diii",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that \\(T_n = ar^{n-1}\\) is a geometric progression with a limiting sum, and \\(S\\) is the sum of all terms from the third term onwards:\n\\(S = \\frac{ar^2}{1-r}\\)\n\nFind the positive common ratio \\(r\\) if \\(S\\) is equal to the sum of the first and second terms.",
    "opts": [
      "\\(r = \\frac{1}{2}\\)",
      "\\(r = \\frac{1}{3}\\)",
      "\\(r = \\sqrt{2} - 1\\)",
      "\\(r = \\frac{1}{\\sqrt{2}}\\)"
    ],
    "a": 3,
    "hint": "Set \\(S = a + ar = a(1+r)\\) and solve for \\(r\\).",
    "solutionSteps": [
      {
        "explanation": "Equate \\(S\\) to the sum of the first and second terms.",
        "workingOut": "\\(\\frac{ar^2}{1-r} = a + ar = a(1+r)\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\(a\\) and multiply by \\(1-r\\).",
        "workingOut": "\\(r^2 = (1+r)(1-r)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the right side using the difference of squares.",
        "workingOut": "\\(r^2 = 1 - r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic equation for a positive value of \\(r\\).",
        "workingOut": "\\(2r^2 = 1 \\implies r^2 = \\frac{1}{2} \\implies r = \\frac{1}{\\sqrt{2}}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q18a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric series:\n\\(1 + (x^2 - 2) + (x^2 - 2)^2 + \\dots\\)\nto have a limiting sum, and find that limiting sum.",
    "opts": [
      "Condition: \\(-\\sqrt{2} < x < \\sqrt{2}\\), Limiting sum: \\(\\frac{1}{2 - x^2}\\)",
      "Condition: \\(-1 < x < 1\\), Limiting sum: \\(\\frac{1}{1 - x^2}\\)",
      "Condition: \\(-\\sqrt{3} < x < \\sqrt{3}\\), Limiting sum: \\(\\frac{1}{3 - x^2}\\)",
      "Condition: \\(-\\sqrt{3} < x < -1\\) or \\(1 < x < \\sqrt{3}\\), Limiting sum: \\(\\frac{1}{3 - x^2}\\)"
    ],
    "a": 3,
    "hint": "Identify the ratio \\(r = x^2 - 2\\). Set up the inequality \\(|x^2 - 2| < 1\\) and solve.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the geometric progression.",
        "workingOut": "\\(a = 1\\), \\(r = x^2 - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Establish the convergence condition inequality.",
        "workingOut": "\\(|x^2 - 2| < 1 \\implies -1 < x^2 - 2 < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the double inequality for \\(x\\).",
        "workingOut": "Adding 2 to all parts:\n\\(1 < x^2 < 3 \\implies 1 < |x| < \\sqrt{3}\\)\nThis gives two intervals:\n\\(-\\sqrt{3} < x < -1\\) or \\(1 < x < \\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum expression.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - (x^2 - 2)} = \\frac{1}{3 - x^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q18b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the condition for the geometric series:\n\\(1 + \\frac{2}{2 + x^2} + \\frac{4}{(2 + x^2)^2} + \\dots\\)\nto have a limiting sum, and find that limiting sum.",
    "opts": [
      "Condition: \\(x > 0\\), Limiting sum: \\(1 + \\frac{2}{x^2}\\)",
      "Condition: \\(x \\neq 0\\), Limiting sum: \\(\\frac{x^2}{2+x^2}\\)",
      "Condition: All real \\(x\\), Limiting sum: \\(\\frac{2+x^2}{x^2}\\)",
      "Condition: \\(x \\neq 0\\), Limiting sum: \\(1 + \\frac{2}{x^2}\\)"
    ],
    "a": 3,
    "hint": "The common ratio is \\(r = \\frac{2}{2+x^2}\\). Solve \\(|r| < 1\\) given \\(x^2 \\geq 0\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters \\(a\\) and \\(r\\).",
        "workingOut": "\\(a = 1\\), \\(r = \\frac{2}{2+x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the condition for convergence.",
        "workingOut": "\\(\\left|\\frac{2}{2+x^2}\\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(x^2 \\geq 0\\), the denominator \\(2+x^2\\) is always positive. Solve the inequality.",
        "workingOut": "\\(\\frac{2}{2+x^2} < 1 \\implies 2 < 2 + x^2 \\implies x^2 > 0 \\implies x \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate and simplify the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1}{1 - \\frac{2}{2+x^2}} = \\frac{1}{\\frac{2+x^2 - 2}{2+x^2}} = \\frac{2+x^2}{x^2} = 1 + \\frac{2}{x^2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q19a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that the geometric series:\n\\(v + v^2 + v^3 + \\dots\\)\nhas a limiting sum \\(w\\).\n\nWrite down an expression for \\(w\\) in terms of \\(v\\).",
    "opts": [
      "\\(w = v(1-v)\\)",
      "\\(w = \\frac{v}{1+v}\\)",
      "\\(w = \\frac{v}{1-v}\\)",
      "\\(w = \\frac{1}{1-v}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term \\(a = v\\) and the common ratio \\(r = v\\) and apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the given geometric series.",
        "workingOut": "\\(a = v\\), \\(r = v\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the formula for the limiting sum of a geometric progression.",
        "workingOut": "\\(w = \\frac{a}{1-r} = \\frac{v}{1-v}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q19b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that the geometric series:\n\\(v + v^2 + v^3 + \\dots\\)\nhas a limiting sum \\(w\\).\n\nFind \\(v\\) in terms of \\(w\\).",
    "opts": [
      "\\(v = w(1+w)\\)",
      "\\(v = \\frac{w}{1+w}\\)",
      "\\(v = \\frac{w}{1-w}\\)",
      "\\(v = \\frac{1+w}{w}\\)"
    ],
    "a": 1,
    "hint": "Rearrange the equation \\(w = \\frac{v}{1-v}\\) to make \\(v\\) the subject.",
    "solutionSteps": [
      {
        "explanation": "Start with the equation relating \\(w\\) and \\(v\\).",
        "workingOut": "\\(w = \\frac{v}{1-v}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply both sides by \\(1-v\\) to clear the fraction.",
        "workingOut": "\\(w(1-v) = v \\implies w - wv = v\\)",
        "graphData": null
      },
      {
        "explanation": "Collect all terms containing \\(v\\) on one side and factor out \\(v\\).",
        "workingOut": "\\(w = v + wv \\implies w = v(1+w)\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by \\(1+w\\) to isolate \\(v\\).",
        "workingOut": "\\(v = \\frac{w}{1+w}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q19c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that the geometric series:\n\\(v + v^2 + v^3 + \\dots\\)\nhas a limiting sum \\(w\\).\n\nFind the limiting sum of the series \\(w - w^2 + w^3 - \\dots\\), assuming \\(|w| < 1\\), in terms of \\(v\\).",
    "opts": [
      "\\(\\frac{v}{1-v}\\)",
      "\\(1-v\\)",
      "\\(\\frac{v}{1+v}\\)",
      "\\(v\\)"
    ],
    "a": 3,
    "hint": "Find the limiting sum of the new series in terms of \\(w\\) first, then substitute the expression for \\(v\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the new series \\(w - w^2 + w^3 - \\dots\\).",
        "workingOut": "\\(\\text{First term } A = w\\), \\(\\text{Ratio } R = -w\\)",
        "graphData": null
      },
      {
        "explanation": "Find the limiting sum of this series in terms of \\(w\\).",
        "workingOut": "\\(S_{\\infty} = \\frac{A}{1-R} = \\frac{w}{1 - (-w)} = \\frac{w}{1+w}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the result from the previous part to express this sum in terms of \\(v\\).",
        "workingOut": "From part (b), we know that \\(\\frac{w}{1+w} = v\\). Therefore, \\(S_{\\infty} = v\\).",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q19d",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Suppose that the geometric series:\n\\(v + v^2 + v^3 + \\dots\\)\nhas a limiting sum \\(w\\).\n\nTest the algebraic results from the previous parts by substituting \\(v = \\frac{1}{4}\\).",
    "opts": [],
    "answer": "If \\(v = \\frac{1}{4}\\), the series \\(v + v^2 + v^3 + \\dots\\) has first term \\(\\frac{1}{4}\\) and common ratio \\(\\frac{1}{4}\\).\\nIts limiting sum is:\\n\\(w = \\frac{1/4}{1 - 1/4} = \\frac{1/4}{3/4} = \\frac{1}{3}\\).\\nUsing the formula from part (b), we find:\\n\\(v = \\frac{w}{1+w} = \\frac{1/3}{1 + 1/3} = \\frac{1/3}{4/3} = \\frac{1}{4}\\), which matches our initial value.\\nFor part (c), the series \\(w - w^2 + w^3 - \\dots\\) becomes:\\n\\(\\frac{1}{3} - \\frac{1}{9} + \\frac{1}{27} - \\dots\\).\\nIts limiting sum is:\\n\\(S = \\frac{1/3}{1 - (-1/3)} = \\frac{1/3}{4/3} = \\frac{1}{4}\\).\\nThis matches \\(v = \\frac{1}{4}\\), confirming our algebraic results.",
    "hint": "Substitute \\(v = 1/4\\) into the formulas and calculate the numerical values to check if they match.",
    "solutionSteps": [
      {
        "explanation": "Calculate the numerical value of \\(w\\) when \\(v = \\frac{1}{4}\\).",
        "workingOut": "\\(w = \\frac{1/4}{1 - 1/4} = \\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the relation from part (b) using the calculated value of \\(w\\).",
        "workingOut": "\\(\\frac{w}{1+w} = \\frac{1/3}{1 + 1/3} = \\frac{1}{4}\\) (matches \\(v\\))",
        "graphData": null
      },
      {
        "explanation": "Calculate the limiting sum of the series \\(w - w^2 + w^3 - \\dots\\) directly.",
        "workingOut": "\\(S = \\frac{1/3}{1 - (-1/3)} = \\frac{1/3}{4/3} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify that the sum matches \\(v = \\frac{1}{4}\\).",
        "workingOut": "\\(S = v = \\frac{1}{4}\\) (verified)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q20",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A fiber-optic network signal is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(22.50\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(18.75\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 22.0\\)",
      "\\(a = 14.4\\)",
      "\\(a = 18\\)",
      "\\(a = 21.6\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 22.50\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 18.75\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(18.75 = 22.50 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{22.50}{18.75} = 1.20\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.20 = 0.2\\)\\n\\(a = S_{\\infty}(1-r) = 22.50 \\times (1 - 0.2) = 18\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q21",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An industrial cooling tower's heat dissipation rate is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(32.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(25.60\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 19.2\\)",
      "\\(a = 28.0\\)",
      "\\(a = 24\\)",
      "\\(a = 28.8\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 32.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 25.60\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(25.60 = 32.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{32.00}{25.60} = 1.25\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.25 = 0.25\\)\\n\\(a = S_{\\infty}(1-r) = 32.00 \\times (1 - 0.25) = 24\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q22",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A deep-sea sonar pulse reflection is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(45.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(37.50\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 43.2\\)",
      "\\(a = 36\\)",
      "\\(a = 28.8\\)",
      "\\(a = 40.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 45.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 37.50\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(37.50 = 45.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{45.00}{37.50} = 1.20\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.20 = 0.2\\)\\n\\(a = S_{\\infty}(1-r) = 45.00 \\times (1 - 0.2) = 36\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q23",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A precision robotic joint's rotational drift is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(24.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(16.00\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 14.4\\)",
      "\\(a = 12\\)",
      "\\(a = 16.0\\)",
      "\\(a = 9.6\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 24.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 16.00\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(16.00 = 24.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{24.00}{16.00} = 1.50\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.50 = 0.5\\)\\n\\(a = S_{\\infty}(1-r) = 24.00 \\times (1 - 0.5) = 12\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q24",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A quantum particle emission decay series is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(50.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(41.67\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 48.0\\)",
      "\\(a = 32.0\\)",
      "\\(a = 40\\)",
      "\\(a = 44.0\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 50.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 41.67\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(41.67 = 50.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{50.00}{41.67} = 1.20\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.20 = 0.2\\)\\n\\(a = S_{\\infty}(1-r) = 50.00 \\times (1 - 0.2) = 40\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q25",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A high-performance drone motor efficiency coefficient is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(25.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(17.86\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 12.0\\)",
      "\\(a = 19.0\\)",
      "\\(a = 18.0\\)",
      "\\(a = 15\\)"
    ],
    "a": 3,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 25.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 17.86\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(17.86 = 25.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{25.00}{17.86} = 1.40\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.40 = 0.4\\)\\n\\(a = S_{\\infty}(1-r) = 25.00 \\times (1 - 0.4) = 15\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q26",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An automated satellite telemetry transmitter rate is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(40.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(32.00\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 36.0\\)",
      "\\(a = 24.0\\)",
      "\\(a = 30\\)",
      "\\(a = 34.0\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 40.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 32.00\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(32.00 = 40.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{40.00}{32.00} = 1.25\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.25 = 0.25\\)\\n\\(a = S_{\\infty}(1-r) = 40.00 \\times (1 - 0.25) = 30\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q27",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A solar panel array degradation model is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(55.56\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(50.51\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 40.0\\)",
      "\\(a = 50\\)",
      "\\(a = 54.0\\)",
      "\\(a = 60.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 55.56\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 50.51\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(50.51 = 55.56 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{55.56}{50.51} = 1.10\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.10 = 0.1\\)\\n\\(a = S_{\\infty}(1-r) = 55.56 \\times (1 - 0.1) = 50\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q28",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A biotechnology bioreactor growth rate is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(60.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(50.00\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 38.4\\)",
      "\\(a = 57.6\\)",
      "\\(a = 52.0\\)",
      "\\(a = 48\\)"
    ],
    "a": 3,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 60.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 50.00\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(50.00 = 60.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{60.00}{50.00} = 1.20\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.20 = 0.2\\)\\n\\(a = S_{\\infty}(1-r) = 60.00 \\times (1 - 0.2) = 48\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q29",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A seismic sensor vibration damping factor is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(50.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(31.25\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 24.0\\)",
      "\\(a = 16.0\\)",
      "\\(a = 20\\)",
      "\\(a = 24.0\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 50.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 31.25\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(31.25 = 50.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{50.00}{31.25} = 1.60\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.60 = 0.6\\)\\n\\(a = S_{\\infty}(1-r) = 50.00 \\times (1 - 0.6) = 20\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q30",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A hydraulic pump flow pressure decay is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(75.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(62.50\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 72.0\\)",
      "\\(a = 60\\)",
      "\\(a = 48.0\\)",
      "\\(a = 64.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 75.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 62.50\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(62.50 = 75.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{75.00}{62.50} = 1.20\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.20 = 0.2\\)\\n\\(a = S_{\\infty}(1-r) = 75.00 \\times (1 - 0.2) = 60\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q31",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An electric car battery self-discharge sequence is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(40.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(25.00\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 20.0\\)",
      "\\(a = 16\\)",
      "\\(a = 12.8\\)",
      "\\(a = 19.2\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 40.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 25.00\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(25.00 = 40.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{40.00}{25.00} = 1.60\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.60 = 0.6\\)\\n\\(a = S_{\\infty}(1-r) = 40.00 \\times (1 - 0.6) = 16\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q32",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A wind turbine blade aerodynamic resistance factor is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(60.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(48.00\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 45\\)",
      "\\(a = 49.0\\)",
      "\\(a = 54.0\\)",
      "\\(a = 36.0\\)"
    ],
    "a": 0,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 60.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 48.00\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(48.00 = 60.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{60.00}{48.00} = 1.25\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.25 = 0.25\\)\\n\\(a = S_{\\infty}(1-r) = 60.00 \\times (1 - 0.25) = 45\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q33",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A laser pulse energy attenuation cascade is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(77.78\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(70.71\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 74.0\\)",
      "\\(a = 70\\)",
      "\\(a = 84.0\\)",
      "\\(a = 56.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 77.78\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 70.71\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(70.71 = 77.78 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{77.78}{70.71} = 1.10\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.10 = 0.1\\)\\n\\(a = S_{\\infty}(1-r) = 77.78 \\times (1 - 0.1) = 70\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q34",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A cryptographic token burn rate progression is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(40.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(30.77\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 33.6\\)",
      "\\(a = 28\\)",
      "\\(a = 22.4\\)",
      "\\(a = 32.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 40.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 30.77\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(30.77 = 40.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{40.00}{30.77} = 1.30\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.30 = 0.3\\)\\n\\(a = S_{\\infty}(1-r) = 40.00 \\times (1 - 0.3) = 28\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q35",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A precision balance beam gravitational oscillation is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(64.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(42.67\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 25.6\\)",
      "\\(a = 36.0\\)",
      "\\(a = 32\\)",
      "\\(a = 38.4\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 64.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 42.67\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(42.67 = 64.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{64.00}{42.67} = 1.50\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.50 = 0.5\\)\\n\\(a = S_{\\infty}(1-r) = 64.00 \\times (1 - 0.5) = 32\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q36",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An aircraft stabilizer hydraulic pressure drop is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(60.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(54.55\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 64.8\\)",
      "\\(a = 58.0\\)",
      "\\(a = 54\\)",
      "\\(a = 43.2\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 60.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 54.55\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(54.55 = 60.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{60.00}{54.55} = 1.10\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.10 = 0.1\\)\\n\\(a = S_{\\infty}(1-r) = 60.00 \\times (1 - 0.1) = 54\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q37",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A pharmaceutical capsule release rate profile is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(50.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(33.33\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 30.0\\)",
      "\\(a = 29.0\\)",
      "\\(a = 25\\)",
      "\\(a = 20.0\\)"
    ],
    "a": 2,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 50.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 33.33\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(33.33 = 50.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{50.00}{33.33} = 1.50\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.50 = 0.5\\)\\n\\(a = S_{\\infty}(1-r) = 50.00 \\times (1 - 0.5) = 25\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q38",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A computer CPU cache miss decay model is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(100.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(90.91\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 94.0\\)",
      "\\(a = 90\\)",
      "\\(a = 72.0\\)",
      "\\(a = 108.0\\)"
    ],
    "a": 1,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 100.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 90.91\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(90.91 = 100.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{100.00}{90.91} = 1.10\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.10 = 0.1\\)\\n\\(a = S_{\\infty}(1-r) = 100.00 \\times (1 - 0.1) = 90\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q39",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A chemical catalyst reaction rate cascade is modeled as a convergent infinite geometric progression. The limiting sum of the progression is \\(60.00\\) and the sum of all its odd-numbered terms (i.e., \\(T_1 + T_3 + T_5 + \\dots\\)) is \\(46.15\\).\n\nFind the first term \\(a\\) of the geometric progression.",
    "opts": [
      "\\(a = 33.6\\)",
      "\\(a = 46.0\\)",
      "\\(a = 50.4\\)",
      "\\(a = 42\\)"
    ],
    "a": 3,
    "hint": "Use the formulas \\(S_{\\infty} = \\frac{a}{1-r}\\) and \\(S_{\\text{odd}} = \\frac{a}{1-r^2}\\) to set up a system of equations.",
    "solutionSteps": [
      {
        "explanation": "Write down the equations for the limiting sum of all terms and the sum of the odd terms.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r} = 60.00\\), \\(S_{\\text{odd}} = \\frac{a}{1-r^2} = 46.15\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the denominator of the odd sum formula using the difference of squares.",
        "workingOut": "\\(S_{\\text{odd}} = \\frac{a}{(1-r)(1+r)} = \\frac{a}{1-r} \\times \\frac{1}{1+r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(S_{\\infty}\\) into the equation to find \\(r\\).",
        "workingOut": "\\(46.15 = 60.00 \\times \\frac{1}{1+r} \\implies 1+r = \\frac{60.00}{46.15} = 1.30\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(r\\) and then calculate \\(a\\).",
        "workingOut": "\\(r = 0.30 = 0.3\\)\\n\\(a = S_{\\infty}(1-r) = 60.00 \\times (1 - 0.3) = 42\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q40",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested squares. The first square has a area of \\(256\\) \\(\\text{cm}^2\\), and each subsequent square has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the areas for all infinite elements in this sequence.",
    "opts": [
      "\\(563.2\\text{ }\\text{cm}^2\\)",
      "\\(460.8\\text{ }\\text{cm}^2\\)",
      "\\(768.0\\text{ }\\text{cm}^2\\)",
      "\\(512.0\\text{ }\\text{cm}^2\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 256\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{256}{1 - 0.5} = \\frac{256}{0.50} = 512.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q41",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested equilateral triangles. The first triangle has a perimeter of \\(108\\) \\(\\text{cm}\\), and each subsequent triangle has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the perimeters for all infinite elements in this sequence.",
    "opts": [
      "\\(324.0\\text{ }\\text{cm}\\)",
      "\\(216.0\\text{ }\\text{cm}\\)",
      "\\(194.4\\text{ }\\text{cm}\\)",
      "\\(237.6\\text{ }\\text{cm}\\)"
    ],
    "a": 1,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 108\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{108}{1 - 0.5} = \\frac{108}{0.50} = 216.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q42",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of an oscillating pendulum. The first swing has a total distance of \\(80\\) \\(\\text{cm}\\), and each subsequent swing has its value reduced by a constant factor of \\(0.75\\).\n\nFind the total sum of the total distances for all infinite elements in this sequence.",
    "opts": [
      "\\(320.0\\text{ }\\text{cm}\\)",
      "\\(288.0\\text{ }\\text{cm}\\)",
      "\\(400.0\\text{ }\\text{cm}\\)",
      "\\(352.0\\text{ }\\text{cm}\\)"
    ],
    "a": 0,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 80\\), \\(r = 0.75\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{80}{1 - 0.75} = \\frac{80}{0.25} = 320.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q43",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a robotic arm overshoot. The first arc has a total displacement of \\(32\\) \\(\\text{cm}\\), and each subsequent arc has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the total displacements for all infinite elements in this sequence.",
    "opts": [
      "\\(96.0\\text{ }\\text{cm}\\)",
      "\\(57.6\\text{ }\\text{cm}\\)",
      "\\(70.4\\text{ }\\text{cm}\\)",
      "\\(64.0\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 32\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{32}{1 - 0.5} = \\frac{32}{0.50} = 64.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q44",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a spiral of right-angled triangles. The first segment has a total length of \\(120\\) \\(\\text{cm}\\), and each subsequent segment has its value reduced by a constant factor of \\(0.8\\).\n\nFind the total sum of the total lengths for all infinite elements in this sequence.",
    "opts": [
      "\\(720.0\\text{ }\\text{cm}\\)",
      "\\(660.0\\text{ }\\text{cm}\\)",
      "\\(540.0\\text{ }\\text{cm}\\)",
      "\\(600.0\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 120\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{120}{1 - 0.8} = \\frac{120}{0.20} = 600.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q45",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of concentric circles with geometric radii. The first circle has a sum of circumferences of \\(64\\) \\(\\text{cm}\\), and each subsequent circle has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the sum of circumferencess for all infinite elements in this sequence.",
    "opts": [
      "\\(140.8\\text{ }\\text{cm}\\)",
      "\\(192.0\\text{ }\\text{cm}\\)",
      "\\(128.0\\text{ }\\text{cm}\\)",
      "\\(115.2\\text{ }\\text{cm}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 64\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{64}{1 - 0.5} = \\frac{64}{0.50} = 128.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q46",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested regular hexagons. The first hexagon has a sum of perimeters of \\(180\\) \\(\\text{cm}\\), and each subsequent hexagon has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the sum of perimeterss for all infinite elements in this sequence.",
    "opts": [
      "\\(396.0\\text{ }\\text{cm}\\)",
      "\\(324.0\\text{ }\\text{cm}\\)",
      "\\(360.0\\text{ }\\text{cm}\\)",
      "\\(540.0\\text{ }\\text{cm}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 180\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{180}{1 - 0.5} = \\frac{180}{0.50} = 360.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q47",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a particle rebounding on a track. The first rebound has a total travel path of \\(150\\) \\(\\text{cm}\\), and each subsequent rebound has its value reduced by a constant factor of \\(0.6\\).\n\nFind the total sum of the total travel paths for all infinite elements in this sequence.",
    "opts": [
      "\\(525.0\\text{ }\\text{cm}\\)",
      "\\(375.0\\text{ }\\text{cm}\\)",
      "\\(337.5\\text{ }\\text{cm}\\)",
      "\\(412.5\\text{ }\\text{cm}\\)"
    ],
    "a": 1,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 150\\), \\(r = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{150}{1 - 0.6} = \\frac{150}{0.40} = 375.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q48",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a mathematical fractal tree. The first level has a sum of branch lengths of \\(100\\) \\(\\text{cm}\\), and each subsequent level has its value reduced by a constant factor of \\(0.6\\).\n\nFind the total sum of the sum of branch lengthss for all infinite elements in this sequence.",
    "opts": [
      "\\(275.0\\text{ }\\text{cm}\\)",
      "\\(350.0\\text{ }\\text{cm}\\)",
      "\\(250.0\\text{ }\\text{cm}\\)",
      "\\(225.0\\text{ }\\text{cm}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 100\\), \\(r = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{100}{1 - 0.6} = \\frac{100}{0.40} = 250.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q49",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested pentagons drawn inside each other. The first pentagon has a total area of \\(400\\) \\(\\text{cm}^2\\), and each subsequent pentagon has its value reduced by a constant factor of \\(0.4\\).\n\nFind the total sum of the total areas for all infinite elements in this sequence.",
    "opts": [
      "\\(666.7\\text{ }\\text{cm}^2\\)",
      "\\(600.0\\text{ }\\text{cm}^2\\)",
      "\\(733.3\\text{ }\\text{cm}^2\\)",
      "\\(1066.7\\text{ }\\text{cm}^2\\)"
    ],
    "a": 0,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 400\\), \\(r = 0.4\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{400}{1 - 0.4} = \\frac{400}{0.60} = 666.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q50",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a piston bouncing due to backpressure. The first stroke has a total travel of \\(45\\) \\(\\text{cm}\\), and each subsequent stroke has its value reduced by a constant factor of \\(0.6\\).\n\nFind the total sum of the total travels for all infinite elements in this sequence.",
    "opts": [
      "\\(112.5\\text{ }\\text{cm}\\)",
      "\\(157.5\\text{ }\\text{cm}\\)",
      "\\(123.8\\text{ }\\text{cm}\\)",
      "\\(101.3\\text{ }\\text{cm}\\)"
    ],
    "a": 0,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 45\\), \\(r = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{45}{1 - 0.6} = \\frac{45}{0.40} = 112.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q51",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested right isosceles triangles. The first hypotenuse has a sum of hypotenuse lengths of \\(90\\) \\(\\text{cm}\\), and each subsequent hypotenuse has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the sum of hypotenuse lengthss for all infinite elements in this sequence.",
    "opts": [
      "\\(270.0\\text{ }\\text{cm}\\)",
      "\\(198.0\\text{ }\\text{cm}\\)",
      "\\(162.0\\text{ }\\text{cm}\\)",
      "\\(180.0\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 90\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{90}{1 - 0.5} = \\frac{90}{0.50} = 180.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q52",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a drone adjusting its hover position. The first shift has a total corrections of \\(50\\) \\(\\text{cm}\\), and each subsequent shift has its value reduced by a constant factor of \\(0.4\\).\n\nFind the total sum of the total correctionss for all infinite elements in this sequence.",
    "opts": [
      "\\(91.7\\text{ }\\text{cm}\\)",
      "\\(75.0\\text{ }\\text{cm}\\)",
      "\\(133.3\\text{ }\\text{cm}\\)",
      "\\(83.3\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 50\\), \\(r = 0.4\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{50}{1 - 0.4} = \\frac{50}{0.60} = 83.3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q53",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a light beam reflecting between mirror plates. The first bounce has a total path length of \\(300\\) \\(\\text{cm}\\), and each subsequent bounce has its value reduced by a constant factor of \\(0.8\\).\n\nFind the total sum of the total path lengths for all infinite elements in this sequence.",
    "opts": [
      "\\(1350.0\\text{ }\\text{cm}\\)",
      "\\(1650.0\\text{ }\\text{cm}\\)",
      "\\(1500.0\\text{ }\\text{cm}\\)",
      "\\(1800.0\\text{ }\\text{cm}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 300\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{300}{1 - 0.8} = \\frac{300}{0.20} = 1500.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q54",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of concentric spheres inscribed in cones. The first sphere has a sum of surface areas of \\(160\\) \\(\\text{cm}\\), and each subsequent sphere has its value reduced by a constant factor of \\(0.25\\).\n\nFind the total sum of the sum of surface areass for all infinite elements in this sequence.",
    "opts": [
      "\\(373.3\\text{ }\\text{cm}\\)",
      "\\(234.7\\text{ }\\text{cm}\\)",
      "\\(192.0\\text{ }\\text{cm}\\)",
      "\\(213.3\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 160\\), \\(r = 0.25\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{160}{1 - 0.25} = \\frac{160}{0.75} = 213.3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q55",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested regular octagons. The first octagon has a sum of areas of \\(240\\) \\(\\text{cm}^2\\), and each subsequent octagon has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the sum of areass for all infinite elements in this sequence.",
    "opts": [
      "\\(528.0\\text{ }\\text{cm}^2\\)",
      "\\(720.0\\text{ }\\text{cm}^2\\)",
      "\\(432.0\\text{ }\\text{cm}^2\\)",
      "\\(480.0\\text{ }\\text{cm}^2\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 240\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{240}{1 - 0.5} = \\frac{240}{0.50} = 480.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q56",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a shock absorber testing rig. The first rebound has a total displacement of \\(140\\) \\(\\text{cm}\\), and each subsequent rebound has its value reduced by a constant factor of \\(0.7\\).\n\nFind the total sum of the total displacements for all infinite elements in this sequence.",
    "opts": [
      "\\(420.0\\text{ }\\text{cm}\\)",
      "\\(466.7\\text{ }\\text{cm}\\)",
      "\\(513.3\\text{ }\\text{cm}\\)",
      "\\(606.7\\text{ }\\text{cm}\\)"
    ],
    "a": 1,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 140\\), \\(r = 0.7\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{140}{1 - 0.7} = \\frac{140}{0.30} = 466.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q57",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a sound wave reflecting off parallel acoustic baffles. The first reflection has a total travel distance of \\(85\\) \\(\\text{cm}\\), and each subsequent reflection has its value reduced by a constant factor of \\(0.8\\).\n\nFind the total sum of the total travel distances for all infinite elements in this sequence.",
    "opts": [
      "\\(510.0\\text{ }\\text{cm}\\)",
      "\\(382.5\\text{ }\\text{cm}\\)",
      "\\(425.0\\text{ }\\text{cm}\\)",
      "\\(467.5\\text{ }\\text{cm}\\)"
    ],
    "a": 2,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 85\\), \\(r = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{85}{1 - 0.8} = \\frac{85}{0.20} = 425.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q58",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of nested golden rectangles. The first rectangle has a sum of perimeters of \\(220\\) \\(\\text{cm}\\), and each subsequent rectangle has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the sum of perimeterss for all infinite elements in this sequence.",
    "opts": [
      "\\(396.0\\text{ }\\text{cm}\\)",
      "\\(440.0\\text{ }\\text{cm}\\)",
      "\\(660.0\\text{ }\\text{cm}\\)",
      "\\(484.0\\text{ }\\text{cm}\\)"
    ],
    "a": 1,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 220\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{220}{1 - 0.5} = \\frac{220}{0.50} = 440.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q59",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geometric model describes the geometry of a precision gyroscope settling. The first precession has a total angle rotated of \\(720\\) \\(\\text{cm}\\), and each subsequent precession has its value reduced by a constant factor of \\(0.5\\).\n\nFind the total sum of the total angle rotateds for all infinite elements in this sequence.",
    "opts": [
      "\\(2160.0\\text{ }\\text{cm}\\)",
      "\\(1584.0\\text{ }\\text{cm}\\)",
      "\\(1296.0\\text{ }\\text{cm}\\)",
      "\\(1440.0\\text{ }\\text{cm}\\)"
    ],
    "a": 3,
    "hint": "Identify the first term and common ratio of the geometric series, then apply the limiting sum formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\) of the geometric progression.",
        "workingOut": "\\(a = 720\\), \\(r = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum of a geometric series.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values and simplify to calculate the final sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{720}{1 - 0.5} = \\frac{720}{0.50} = 1440.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q60",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(5 + 5(\\cos(x)) + 5(\\cos(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x \\neq n\\pi\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 5\\), \\(r = \\cos(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\cos(x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q61",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(3 + 3(\\sin(x)) + 3(\\sin(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\neq \\frac{\\pi}{2} + n\\pi\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 3\\), \\(r = \\sin(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\sin(x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq \\frac{\\pi}{2} + n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q62",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(e^{-kx}) + 1(e^{-kx})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = e^{-kx}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies e^{-kx} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q63",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(2 + 2(\\ln(x)) + 2(\\ln(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(e^{-1} < x < e\\)",
      "\\(x > 0\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 2\\), \\(r = \\ln(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\ln(x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(e^{-1} < x < e\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q64",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(4 + 4(\\tan^2(x)) + 4(\\tan^2(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-\\frac{\\pi}{4} + n\\pi < x < \\frac{\\pi}{4} + n\\pi\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 4\\), \\(r = \\tan^2(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies \\tan^2(x) < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-\\frac{\\pi}{4} + n\\pi < x < \\frac{\\pi}{4} + n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q65",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(x + x(\\frac{x}{3}) + x(\\frac{x}{3})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-3 < x < 3\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = x\\), \\(r = \\frac{x}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x| < 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-3 < x < 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q66",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\cos(2x)) + 1(\\cos(2x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\neq \\frac{n\\pi}{2}\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\cos(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\cos(2x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq \\frac{n\\pi}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q67",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(6 + 6(\\sin\\left(\\frac{x}{2}\\right)) + 6(\\sin\\left(\\frac{x}{2}\\right))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\neq \\pi + 2n\\pi\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 6\\), \\(r = \\sin\\left(\\frac{x}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\sin\\left(\\frac{x}{2}\\right)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq \\pi + 2n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q68",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(2x - 1) + 1(2x - 1)^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(0 < x < 1\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = 2x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |2x - 1| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(0 < x < 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q69",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(x+2 + x+2(\\frac{x+2}{5}) + x+2(\\frac{x+2}{5})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-7 < x < 3\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = x+2\\), \\(r = \\frac{x+2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x + 2| < 5\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-7 < x < 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q70",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(3 + 3(2^{-x}) + 3(2^{-x})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 3\\), \\(r = 2^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies 2^{-x} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q71",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(5 + 5(\\log_{10}(x)) + 5(\\log_{10}(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)",
      "\\(0.1 < x < 10\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 2,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 5\\), \\(r = \\log_{10}(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\log_{10}(x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(0.1 < x < 10\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q72",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\frac{1}{2}\\sec(x)) + 1(\\frac{1}{2}\\sec(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-\\frac{\\pi}{3} + 2n\\pi < x < \\frac{\\pi}{3} + 2n\\pi\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\frac{1}{2}\\sec(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\sec(x)| < 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-\\frac{\\pi}{3} + 2n\\pi < x < \\frac{\\pi}{3} + 2n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q73",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(2x + 2x(\\frac{2x}{x+3}) + 2x(\\frac{2x}{x+3})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 3\\)",
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 2x\\), \\(r = \\frac{2x}{x+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |2x| < |x+3|\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-1 < x < 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q74",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(x^2 + x^2(x^2 - 1) + x^2(x^2 - 1)^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(-\\sqrt{2} < x < \\sqrt{2}, x \\neq 0\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = x^2\\), \\(r = x^2 - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x^2 - 1| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-\\sqrt{2} < x < \\sqrt{2}, x \\neq 0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q75",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(2 + 2(\\cos\\left(\\frac{x}{3}\\right)) + 2(\\cos\\left(\\frac{x}{3}\\right))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(x \\neq 3n\\pi\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 2,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 2\\), \\(r = \\cos\\left(\\frac{x}{3}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\cos\\left(\\frac{x}{3}\\right)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq 3n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q76",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\frac{1}{x}) + 1(\\frac{1}{x})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(x < -1 \\text{ or } x > 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-1 < x < 1\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\frac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x| > 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x < -1 \\text{ or } x > 1\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q77",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(10 + 10(e^{2-x}) + 10(e^{2-x})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 2\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 10\\), \\(r = e^{2-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies e^{2-x} < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x > 2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q78",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\ln(2x)) + 1(\\ln(2x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(\\frac{1}{2e} < x < \\frac{e}{2}\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\ln(2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\ln(2x)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(\\frac{1}{2e} < x < \\frac{e}{2}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q79",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(2 + 2(\\sin^2(x)) + 2(\\sin^2(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x \\neq \\frac{\\pi}{2} + n\\pi\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 2\\), \\(r = \\sin^2(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies \\sin^2(x) < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq \\frac{\\pi}{2} + n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q80",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(x-1 + x-1(\\frac{x-1}{3}) + x-1(\\frac{x-1}{3})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-2 < x < 4\\)",
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)"
    ],
    "a": 1,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = x-1\\), \\(r = \\frac{x-1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x - 1| < 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-2 < x < 4\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q81",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\cos^2(x)) + 1(\\cos^2(x))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x \\neq n\\pi\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x > 0\\)"
    ],
    "a": 0,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\cos^2(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies \\cos^2(x) < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x \\neq n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q82",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(3x+2 + 3x+2(3x + 2) + 3x+2(3x + 2)^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-1 < x < -\\frac{1}{3}\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 3x+2\\), \\(r = 3x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |3x + 2| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-1 < x < -\\frac{1}{3}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q83",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(3 + 3(\\frac{3}{x}) + 3(\\frac{3}{x})^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(x > 0\\)",
      "\\(-1 < x < 1\\)",
      "\\(x < -3 \\text{ or } x > 3\\)",
      "\\(x \\in \\mathbb{R}\\)"
    ],
    "a": 2,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 3\\), \\(r = \\frac{3}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |x| > 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(x < -3 \\text{ or } x > 3\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q84",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Find the set of real values of \\(x\\) for which the infinite geometric series:\n\\(1 + 1(\\tan\\left(\\frac{x}{2}\\right)) + 1(\\tan\\left(\\frac{x}{2}\\right))^2 + \\dots\\)\nconverges to a limiting sum.",
    "opts": [
      "\\(-1 < x < 1\\)",
      "\\(x > 0\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(-\\frac{\\pi}{2} + 2n\\pi < x < \\frac{\\pi}{2} + 2n\\pi\\)"
    ],
    "a": 3,
    "hint": "Identify the common ratio of the geometric series, then solve the inequality \\(|r| < 1\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term and the common ratio \\(r\\) of the geometric series.",
        "workingOut": "\\(a = 1\\), \\(r = \\tan\\left(\\frac{x}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for convergence of the infinite series.",
        "workingOut": "\\(|r| < 1 \\implies |\\tan\\left(\\frac{x}{2}\\right)| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this inequality to find the range of valid \\(x\\) values.",
        "workingOut": "\\(-\\frac{\\pi}{2} + 2n\\pi < x < \\frac{\\pi}{2} + 2n\\pi\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q85",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A patient receives a daily drug injection of 150 mg. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated drug.",
    "opts": [
      "\\(850\\text{ }\\text{mg}\\)",
      "\\(675\\text{ }\\text{mg}\\)",
      "\\(825\\text{ }\\text{mg}\\)",
      "\\(750\\text{ }\\text{mg}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 150\\), \\(r = 1 - 20\\% = 0.8000\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{150}{20\\%} = 750.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q86",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A perpetuity scholarship fund pays out 8000 dollars annually. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated scholarship.",
    "opts": [
      "\\(200,100\\text{ }\\text{dollars}\\)",
      "\\(220,000\\text{ }\\text{dollars}\\)",
      "\\(180,000\\text{ }\\text{dollars}\\)",
      "\\(200,000\\text{ }\\text{dollars}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 8000\\), \\(r = 1 - 4\\% = 0.9600\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{8000}{4\\%} = 200000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q87",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A water tank leaks 15% of its remaining volume each hour. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated water.",
    "opts": [
      "\\(766.7\\text{ }\\text{litres}\\)",
      "\\(733.37\\text{ }\\text{litres}\\)",
      "\\(666.7\\text{ }\\text{litres}\\)",
      "\\(600.03\\text{ }\\text{litres}\\)"
    ],
    "a": 2,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 15\\), \\(r = 1 - 15\\% = 0.8500\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{15}{15\\%} = 666.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q88",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A chemical plant releases 40 kg of waste into a pond weekly, and 25% degrades each week. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated waste.",
    "opts": [
      "\\(176\\text{ }\\text{kg}\\)",
      "\\(160\\text{ }\\text{kg}\\)",
      "\\(260\\text{ }\\text{kg}\\)",
      "\\(144\\text{ }\\text{kg}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 40\\), \\(r = 1 - 25\\% = 0.7500\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{40}{25\\%} = 160.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q89",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An investment trust pays a perpetual monthly dividend of 250 dollars at a monthly rate of 0.5%. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated investment.",
    "opts": [
      "\\(50,000\\text{ }\\text{dollars}\\)",
      "\\(55,000\\text{ }\\text{dollars}\\)",
      "\\(45,000\\text{ }\\text{dollars}\\)",
      "\\(50,100\\text{ }\\text{dollars}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 250\\), \\(r = 1 - 0.5\\% = 0.9950\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{250}{0.5\\%} = 50000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q90",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A precision machine tool experiences wear of 0.02 mm in the first month, and each month's wear is 90% of the previous. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated wear.",
    "opts": [
      "\\(0.2\\text{ }\\text{mm}\\)",
      "\\(0.18\\text{ }\\text{mm}\\)",
      "\\(100.2\\text{ }\\text{mm}\\)",
      "\\(0.22\\text{ }\\text{mm}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 0.02\\), \\(r = 1 - 10\\% = 0.9000\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{0.02}{10\\%} = 0.2\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q91",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A coal mine extracts 80000 tonnes in the first year, with production decreasing by 12% annually. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated coal.",
    "opts": [
      "\\(600,000.03\\text{ }\\text{tonnes}\\)",
      "\\(666,666.7\\text{ }\\text{tonnes}\\)",
      "\\(733,333.37\\text{ }\\text{tonnes}\\)",
      "\\(666,766.7\\text{ }\\text{tonnes}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 80000\\), \\(r = 1 - 12\\% = 0.8800\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{80000}{12\\%} = 666666.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q92",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An oil well produces 500 barrels on its first day, with daily output decreasing by 2%. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated oil.",
    "opts": [
      "\\(22,500\\text{ }\\text{barrels}\\)",
      "\\(25,100\\text{ }\\text{barrels}\\)",
      "\\(27,500\\text{ }\\text{barrels}\\)",
      "\\(25,000\\text{ }\\text{barrels}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 500\\), \\(r = 1 - 2\\% = 0.9800\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{500}{2\\%} = 25000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q93",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A soil remediation process extracts 45 kg of contaminants in the first week, decreasing by 8% weekly. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated contaminant.",
    "opts": [
      "\\(506.25\\text{ }\\text{kg}\\)",
      "\\(562.5\\text{ }\\text{kg}\\)",
      "\\(662.5\\text{ }\\text{kg}\\)",
      "\\(618.75\\text{ }\\text{kg}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 45\\), \\(r = 1 - 8\\% = 0.9200\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{45}{8\\%} = 562.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q94",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geothermal heating system loses 6% of its thermal energy reserves each winter. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated energy.",
    "opts": [
      "\\(1,833.37\\text{ }\\text{MJ}\\)",
      "\\(1,766.7\\text{ }\\text{MJ}\\)",
      "\\(1,666.7\\text{ }\\text{MJ}\\)",
      "\\(1,500.03\\text{ }\\text{MJ}\\)"
    ],
    "a": 2,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 6\\), \\(r = 1 - 6\\% = 0.9400\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{6}{6\\%} = 1666.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q95",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A corporate perpetual bond pays 1200 dollars annually at an interest rate of 3%. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated bond.",
    "opts": [
      "\\(40,100\\text{ }\\text{dollars}\\)",
      "\\(36,000\\text{ }\\text{dollars}\\)",
      "\\(44,000\\text{ }\\text{dollars}\\)",
      "\\(40,000\\text{ }\\text{dollars}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 1200\\), \\(r = 1 - 3\\% = 0.9700\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{1200}{3\\%} = 40000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q96",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A manufacturing filter collects 12 g of particulate matter on the first day, with capacity dropping by 5% daily. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated particulate.",
    "opts": [
      "\\(240\\text{ }\\text{g}\\)",
      "\\(264\\text{ }\\text{g}\\)",
      "\\(340\\text{ }\\text{g}\\)",
      "\\(216\\text{ }\\text{g}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 12\\), \\(r = 1 - 5\\% = 0.9500\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{12}{5\\%} = 240.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q97",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An agricultural soil patch absorbs 35 kg of nitrogen fertilizer in the first application, with 70% retention. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated nitrogen.",
    "opts": [
      "\\(128.37\\text{ }\\text{kg}\\)",
      "\\(105.03\\text{ }\\text{kg}\\)",
      "\\(216.7\\text{ }\\text{kg}\\)",
      "\\(116.7\\text{ }\\text{kg}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 35\\), \\(r = 1 - 30\\% = 0.7000\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{35}{30\\%} = 116.7\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q98",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A satellite solar array generates 600 W initially, with output dropping by 1.5% annually due to space radiation. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated power.",
    "opts": [
      "\\(36,000\\text{ }\\text{W}\\)",
      "\\(40,100\\text{ }\\text{W}\\)",
      "\\(44,000\\text{ }\\text{W}\\)",
      "\\(40,000\\text{ }\\text{W}\\)"
    ],
    "a": 3,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 600\\), \\(r = 1 - 1.5\\% = 0.9850\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{600}{1.5\\%} = 40000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q99",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "An industrial dye mixer has 10 kg of dye added each cycle, with 10% flushed out. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated dye.",
    "opts": [
      "\\(90\\text{ }\\text{kg}\\)",
      "\\(100\\text{ }\\text{kg}\\)",
      "\\(200\\text{ }\\text{kg}\\)",
      "\\(110\\text{ }\\text{kg}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 10\\), \\(r = 1 - 10\\% = 0.9000\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{10}{10\\%} = 100.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q100",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A gas pipeline leaks 0.08 cubic meters of gas per hour, with leak rates dropping by 4% hourly as pressure drops. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated gas.",
    "opts": [
      "\\(102\\text{ }\\text{cubic meters}\\)",
      "\\(2\\text{ }\\text{cubic meters}\\)",
      "\\(2.2\\text{ }\\text{cubic meters}\\)",
      "\\(1.8\\text{ }\\text{cubic meters}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 0.08\\), \\(r = 1 - 4\\% = 0.9600\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{0.08}{4\\%} = 2.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q101",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A reservoir receives 2400 cubic meters of silt annually, and 8% is flushed over the spillway. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated silt.",
    "opts": [
      "\\(33,000\\text{ }\\text{cubic meters}\\)",
      "\\(30,100\\text{ }\\text{cubic meters}\\)",
      "\\(30,000\\text{ }\\text{cubic meters}\\)",
      "\\(27,000\\text{ }\\text{cubic meters}\\)"
    ],
    "a": 2,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 2400\\), \\(r = 1 - 8\\% = 0.9200\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{2400}{8\\%} = 30000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q102",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A deep space probe transmits data at 128 kbps initially, with signal strength dropping by 12.5% each astronomical unit. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated undefined.",
    "opts": [
      "\\(1,024\\text{ }\\text{bandwidth}\\)",
      "\\(1,126.4\\text{ }\\text{bandwidth}\\)",
      "\\(1,124\\text{ }\\text{bandwidth}\\)",
      "\\(921.6\\text{ }\\text{bandwidth}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 128\\), \\(r = 1 - 12.5\\% = 0.8750\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{128}{12.5\\%} = 1024.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q103",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A battery manufacturer calculates that a cell loses 0.05 V capacity in the first charge cycle, with degradation rate dropping by 8% per cycle. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated voltage.",
    "opts": [
      "\\(0.563\\text{ }\\text{V}\\)",
      "\\(0.625\\text{ }\\text{V}\\)",
      "\\(0.688\\text{ }\\text{V}\\)",
      "\\(100.625\\text{ }\\text{V}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 0.05\\), \\(r = 1 - 8\\% = 0.9200\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{0.05}{8\\%} = 0.6\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q104",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A pharmaceutical drug delivery patch releases 18 micrograms of compound in the first hour, decreasing by 6% hourly. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated dosage.",
    "opts": [
      "\\(300\\text{ }\\text{micrograms}\\)",
      "\\(330\\text{ }\\text{micrograms}\\)",
      "\\(270\\text{ }\\text{micrograms}\\)",
      "\\(400\\text{ }\\text{micrograms}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 18\\), \\(r = 1 - 6\\% = 0.9400\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{18}{6\\%} = 300.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q105",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A forestry reserve logs 2500 trees in the first year, with logging reduced by 5% annually for conservation. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated reserve.",
    "opts": [
      "\\(55,000\\text{ }\\text{trees}\\)",
      "\\(50,100\\text{ }\\text{trees}\\)",
      "\\(50,000\\text{ }\\text{trees}\\)",
      "\\(45,000\\text{ }\\text{trees}\\)"
    ],
    "a": 2,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 2500\\), \\(r = 1 - 5\\% = 0.9500\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{2500}{5\\%} = 50000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q106",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A precision clock pendulum loses 0.01 degrees of swing amplitude per swing due to friction. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated amplitude.",
    "opts": [
      "\\(0.45\\text{ }\\text{degrees}\\)",
      "\\(0.5\\text{ }\\text{degrees}\\)",
      "\\(100.5\\text{ }\\text{degrees}\\)",
      "\\(0.55\\text{ }\\text{degrees}\\)"
    ],
    "a": 1,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 0.01\\), \\(r = 1 - 2\\% = 0.9800\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{0.01}{2\\%} = 0.5\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q107",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A marine ecosystem accumulates 15 tonnes of microplastics annually, with 5% consumed or buried. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated microplastics.",
    "opts": [
      "\\(300\\text{ }\\text{tonnes}\\)",
      "\\(270\\text{ }\\text{tonnes}\\)",
      "\\(330\\text{ }\\text{tonnes}\\)",
      "\\(400\\text{ }\\text{tonnes}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 15\\), \\(r = 1 - 5\\% = 0.9500\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{15}{5\\%} = 300.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q108",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A geothermal turbine loses 2.5 MW output capacity in the first year, with loss rates dropping by 10% annually. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated capacity.",
    "opts": [
      "\\(25\\text{ }\\text{MW}\\)",
      "\\(125\\text{ }\\text{MW}\\)",
      "\\(27.5\\text{ }\\text{MW}\\)",
      "\\(22.5\\text{ }\\text{MW}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 2.5\\), \\(r = 1 - 10\\% = 0.9000\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{2.5}{10\\%} = 25.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q109",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "A pension fund withdraws 15000 dollars in the first year, decreasing withdrawals by 2.5% annually to adjust for assets. If this process continues indefinitely, find the limiting value (limiting sum) of the total accumulated pension.",
    "opts": [
      "\\(600,000\\text{ }\\text{dollars}\\)",
      "\\(660,000\\text{ }\\text{dollars}\\)",
      "\\(600,100\\text{ }\\text{dollars}\\)",
      "\\(540,000\\text{ }\\text{dollars}\\)"
    ],
    "a": 0,
    "hint": "Identify the initial quantity and the rate of reduction, then calculate the limiting sum using the formula.",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the problem.",
        "workingOut": "\\(a = 15000\\), \\(r = 1 - 2.5\\% = 0.9750\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the formula for the limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final limiting sum.",
        "workingOut": "\\(S_{\\infty} = \\frac{15000}{2.5\\%} = 600000.0\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q110",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding pharmacokinetics of periodic dosing:\n\nProve that a drug level in the blood stabilizes at a maximum value \\(M = \\frac{D}{1-e^{-kt}}\\) after infinite periodic doses \\(D\\) administered at time intervals \\(t\\) with elimination rate constant \\(k\\).",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q111",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Nested fractal squares perimeter:\n\nShow that for nested squares where each subsequent square is formed by connecting the midpoints of the previous square, the sum of all perimeters forms a geometric progression. Prove its limiting sum exists and find it in terms of the initial square side length \\(S\\).",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q112",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding The Present Value of a Perpetuity:\n\nShow that the present value of a perpetuity paying a fixed amount \\(C\\) at the end of each year with annual interest rate \\(i\\) is given by \\(PV = \\frac{C}{i}\\). Explain this using the limiting sum of a geometric series.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q113",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Oscillatory system settling bounds:\n\nFor a pendulum with amplitude decreasing by 10% each swing, show that the total angle traversed before coming to a stop is exactly 19 times the first swing amplitude \\(\\theta_0\\), assuming it swings back and forth.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q114",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Spirals inside equilateral triangles:\n\nProve that the sum of the altitudes of an infinite set of nested equilateral triangles, where each triangle is inscribed inside the previous by joining the midpoints, converges to twice the altitude of the outermost triangle.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q115",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Fractional step search algorithm limits:\n\nIn a search algorithm, the step size is halved at each iteration. Prove that the maximum total distance the algorithm can move from its starting point in one direction is twice the initial step size \\(L_0\\).",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q116",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Buildup of soil salt concentration:\n\nShow that if an irrigation system adds \\(S\\) units of salt to the soil annually, and 15% of the salt is washed away by rainfall each year, the total amount of salt in the soil will eventually stabilize. Find the limiting value.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q117",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Repeated chemical extraction yield:\n\nIn a chemical extraction process, the first run yields 75% of the compound. Each subsequent run yields 75% of the remaining compound. Prove that the total amount extracted after infinite runs is 100% of the initial compound.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q118",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Energy loss in bouncing hydraulic cylinder:\n\nProve that a hydraulic piston losing 20% of its kinetic energy with each rebound will travel a total vertical distance proportional to the initial drop height \\(H\\). Find the constant of proportionality.",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y12a-1h-q119",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The limiting sum of a geometric series",
    "question": "Regarding Damped harmonic oscillator total distance:\n\nShow that a damped harmonic oscillator with initial amplitude \\(A_0\\) and damping ratio \\(e^{-\\alpha}\\) per cycle traverses a total distance that converges to a finite value. Find the limiting sum in terms of \\(A_0\\) and \\(\\alpha\\).",
    "opts": [],
    "answer": "Step 1: Write down the general terms of the infinite geometric series.\\nStep 2: Identify the first term and the common ratio from the physical setup.\\nStep 3: Verify that the absolute value of the common ratio is less than 1 to guarantee convergence.\\nStep 4: Substitute the parameters into the limiting sum formula to derive the required expression.",
    "hint": "Identify the first term and the common ratio from the geometric progression of the physical model, then apply the sum formula.",
    "solutionSteps": [
      {
        "explanation": "Set up the model by writing the sequence of terms representing the system's states.",
        "workingOut": "\\(S = T_1 + T_2 + T_3 + \\dots\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the common ratio and check the convergence condition.",
        "workingOut": "\\(|r| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the limiting sum using the standard algebraic formula.",
        "workingOut": "\\(S_{\\infty} = \\frac{a}{1-r}\\)",
        "graphData": null
      }
    ]
  }
];
