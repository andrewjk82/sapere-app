export const Y10_CH14A_QUESTIONS = [

  // Q1 Calculate each logarithm
  // Base numbers modified from originals (e.g. log_2 8 -> log_3 9)
  {
    id: "y10-14a-q1a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{3} 9\\)",
    a: "2",
    solution: "\\(\\log_{3} 9 = \\log_{3} (3^2) = 2\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base.",
    solutionSteps: [
      {
        explanation: "Express 9 as a power of 3.",
        workingOut: "9 = 3^2"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{3} (3^2)"
      },
      {
        explanation: "Use the property \\(\\log_{b}(b^x) = x\\).",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{2} 32\\)",
    a: "5",
    solution: "\\(\\log_{2} 32 = \\log_{2} (2^5) = 5\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base.",
    solutionSteps: [
      {
        explanation: "Express 32 as a power of 2.",
        workingOut: "32 = 2^5"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{2} (2^5)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{4} 64\\)",
    a: "3",
    solution: "\\(\\log_{4} 64 = \\log_{4} (4^3) = 3\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base.",
    solutionSteps: [
      {
        explanation: "Express 64 as a power of 4.",
        workingOut: "64 = 4^3"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{4} (4^3)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{8} 1\\)",
    a: "0",
    solution: "\\(\\log_{8} 1 = \\log_{8} (8^0) = 0\\)",
    t: "Logarithm rules",
    hint: "Recall the value of any non-zero number raised to the power of 0.",
    solutionSteps: [
      {
        explanation: "Express 1 as a power of 8.",
        workingOut: "1 = 8^0"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{8} (8^0)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 0"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{6} 216\\)",
    a: "3",
    solution: "\\(\\log_{6} 216 = \\log_{6} (6^3) = 3\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base.",
    solutionSteps: [
      {
        explanation: "Express 216 as a power of 6.",
        workingOut: "216 = 6^3"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{6} (6^3)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{5} 125\\)",
    a: "3",
    solution: "\\(\\log_{5} 125 = \\log_{5} (5^3) = 3\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base.",
    solutionSteps: [
      {
        explanation: "Express 125 as a power of 5.",
        workingOut: "125 = 5^3"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{5} (5^3)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1g",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{10} 100\\)",
    a: "2",
    solution: "\\(\\log_{10} 100 = \\log_{10} (10^2) = 2\\)",
    t: "Logarithm rules",
    hint: "Express the number as a power of the base 10.",
    solutionSteps: [
      {
        explanation: "Express 100 as a power of 10.",
        workingOut: "100 = 10^2"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{10} (10^2)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q1h",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{10} 100\\,000\\)",
    a: "5",
    solution: "\\(\\log_{10} 100\\,000 = \\log_{10} (10^5) = 5\\)",
    t: "Logarithm rules",
    hint: "Count the number of zeros to express the number as a power of 10.",
    solutionSteps: [
      {
        explanation: "Express 100,000 as a power of 10.",
        workingOut: "100\\,000 = 10^5"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{10} (10^5)"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; 5"
      }
    ],
    graphData: null
  },
  
  // Q2 Calculate logarithms with fractions
  {
    id: "y10-14a-q2a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{3} \\frac{1}{9}\\)",
    a: "-2",
    solution: "\\(\\log_{3} \\frac{1}{9} = \\log_{3} (3^{-2}) = -2\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 9 as a power of 3.",
        workingOut: "9 = 3^2"
      },
      {
        explanation: "Use negative index laws to express the fraction.",
        workingOut: "\\frac{1}{9} = 3^{-2}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{3} (3^{-2})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{2} \\frac{1}{32}\\)",
    a: "-5",
    solution: "\\(\\log_{2} \\frac{1}{32} = \\log_{2} (2^{-5}) = -5\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 32 as a power of 2.",
        workingOut: "32 = 2^5"
      },
      {
        explanation: "Use negative index laws to express the fraction.",
        workingOut: "\\frac{1}{32} = 2^{-5}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{2} (2^{-5})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{10} \\frac{1}{100}\\)",
    a: "-2",
    solution: "\\(\\log_{10} \\frac{1}{100} = \\log_{10} (10^{-2}) = -2\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 100 as a power of 10.",
        workingOut: "100 = 10^2"
      },
      {
        explanation: "Use negative index laws.",
        workingOut: "\\frac{1}{100} = 10^{-2}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{10} (10^{-2})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{10} 0.001\\)",
    a: "-3",
    solution: "\\(\\log_{10} 0.001 = \\log_{10} (10^{-3}) = -3\\)",
    t: "Logarithm rules",
    hint: "Convert the decimal to a fraction or directly to a power of 10.",
    solutionSteps: [
      {
        explanation: "Write the decimal as a fraction.",
        workingOut: "0.001 = \\frac{1}{1000}"
      },
      {
        explanation: "Express 1000 as a power of 10 and apply negative index laws.",
        workingOut: "\\frac{1}{1000} = 10^{-3}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{10} (10^{-3})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{4} \\frac{1}{64}\\)",
    a: "-3",
    solution: "\\(\\log_{4} \\frac{1}{64} = \\log_{4} (4^{-3}) = -3\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 64 as a power of 4.",
        workingOut: "64 = 4^3"
      },
      {
        explanation: "Use negative index laws.",
        workingOut: "\\frac{1}{64} = 4^{-3}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{4} (4^{-3})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{5} \\frac{1}{25}\\)",
    a: "-2",
    solution: "\\(\\log_{5} \\frac{1}{25} = \\log_{5} (5^{-2}) = -2\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 25 as a power of 5.",
        workingOut: "25 = 5^2"
      },
      {
        explanation: "Use negative index laws.",
        workingOut: "\\frac{1}{25} = 5^{-2}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{5} (5^{-2})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2g",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{3} \\frac{1}{243}\\)",
    a: "-5",
    solution: "\\(\\log_{3} \\frac{1}{243} = \\log_{3} (3^{-5}) = -5\\)",
    t: "Logarithm rules",
    hint: "Express the fraction using a negative exponent.",
    solutionSteps: [
      {
        explanation: "Express 243 as a power of 3.",
        workingOut: "243 = 3^5"
      },
      {
        explanation: "Use negative index laws.",
        workingOut: "\\frac{1}{243} = 3^{-5}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{3} (3^{-5})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q2h",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Calculate the logarithm: \\(\\log_{10} 0.00001\\)",
    a: "-5",
    solution: "\\(\\log_{10} 0.00001 = \\log_{10} (10^{-5}) = -5\\)",
    t: "Logarithm rules",
    hint: "Convert the decimal to a fraction or directly to a power of 10.",
    solutionSteps: [
      {
        explanation: "Write the decimal as a fraction.",
        workingOut: "0.00001 = \\frac{1}{100000}"
      },
      {
        explanation: "Express 100,000 as a power of 10 and apply negative index laws.",
        workingOut: "\\frac{1}{100000} = 10^{-5}"
      },
      {
        explanation: "Substitute this into the logarithm.",
        workingOut: "\\log_{10} (10^{-5})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -5"
      }
    ],
    graphData: null
  },

  // Q3 Evaluate expressions with surds
  {
    id: "y10-14a-q3a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{3} (3\\sqrt{3})\\)",
    a: "3/2",
    solution: "\\(\\log_{3} (3\\sqrt{3}) = \\log_{3} (3^1 \\times 3^{\\frac{1}{2}}) = \\log_{3} (3^{\\frac{3}{2}}) = \\frac{3}{2}\\)",
    t: "Logarithm rules",
    hint: "Write the surd using a fractional exponent, then use index laws to combine terms.",
    solutionSteps: [
      {
        explanation: "Express the square root as a fractional exponent.",
        workingOut: "3\\sqrt{3} = 3^1 \\times 3^{\\frac{1}{2}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "3^{1 + \\frac{1}{2}} = 3^{\\frac{3}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{3} (3^{\\frac{3}{2}})"
      },
      {
        explanation: "Apply the logarithm rule to find the value.",
        workingOut: "\\therefore\\; \\frac{3}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{2} (8\\sqrt{2})\\)",
    a: "7/2",
    solution: "\\(\\log_{2} (8\\sqrt{2}) = \\log_{2} (2^3 \\times 2^{\\frac{1}{2}}) = \\log_{2} (2^{\\frac{7}{2}}) = \\frac{7}{2}\\)",
    t: "Logarithm rules",
    hint: "Write both 8 and the surd as powers of 2, then use index laws to combine.",
    solutionSteps: [
      {
        explanation: "Express 8 and the square root as powers of 2.",
        workingOut: "8\\sqrt{2} = 2^3 \\times 2^{\\frac{1}{2}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "2^{3 + \\frac{1}{2}} = 2^{\\frac{7}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{2} (2^{\\frac{7}{2}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; \\frac{7}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{5} (25\\sqrt{5})\\)",
    a: "5/2",
    solution: "\\(\\log_{5} (25\\sqrt{5}) = \\log_{5} (5^2 \\times 5^{\\frac{1}{2}}) = \\log_{5} (5^{\\frac{5}{2}}) = \\frac{5}{2}\\)",
    t: "Logarithm rules",
    hint: "Write both 25 and the surd as powers of 5.",
    solutionSteps: [
      {
        explanation: "Express 25 and the square root as powers of 5.",
        workingOut: "25\\sqrt{5} = 5^2 \\times 5^{\\frac{1}{2}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "5^{2 + \\frac{1}{2}} = 5^{\\frac{5}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{5} (5^{\\frac{5}{2}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; \\frac{5}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{4} (16\\sqrt{4})\\)",
    a: "5/2",
    solution: "\\(\\log_{4} (16\\sqrt{4}) = \\log_{4} (4^2 \\times 4^{\\frac{1}{2}}) = \\log_{4} (4^{\\frac{5}{2}}) = \\frac{5}{2}\\)",
    t: "Logarithm rules",
    hint: "Write both 16 and the surd as powers of 4.",
    solutionSteps: [
      {
        explanation: "Express 16 and the square root as powers of 4.",
        workingOut: "16\\sqrt{4} = 4^2 \\times 4^{\\frac{1}{2}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "4^{2 + \\frac{1}{2}} = 4^{\\frac{5}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{4} (4^{\\frac{5}{2}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; \\frac{5}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{2} (16\\sqrt{2})\\)",
    a: "9/2",
    solution: "\\(\\log_{2} (16\\sqrt{2}) = \\log_{2} (2^4 \\times 2^{\\frac{1}{2}}) = \\log_{2} (2^{\\frac{9}{2}}) = \\frac{9}{2}\\)",
    t: "Logarithm rules",
    hint: "Write both 16 and the surd as powers of 2.",
    solutionSteps: [
      {
        explanation: "Express 16 and the square root as powers of 2.",
        workingOut: "16\\sqrt{2} = 2^4 \\times 2^{\\frac{1}{2}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "2^{4 + \\frac{1}{2}} = 2^{\\frac{9}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{2} (2^{\\frac{9}{2}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; \\frac{9}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{10} \\left(\\frac{1}{1000\\sqrt{10}}\\right)\\)",
    a: "-7/2",
    solution: "\\(\\log_{10} \\left(\\frac{1}{1000\\sqrt{10}}\\right) = \\log_{10} (10^{-3} \\times 10^{-\\frac{1}{2}}) = \\log_{10} (10^{-\\frac{7}{2}}) = -\\frac{7}{2}\\)",
    t: "Logarithm rules",
    hint: "Express the denominator as a power of 10 and then use negative exponents.",
    solutionSteps: [
      {
        explanation: "Express the denominator as powers of 10.",
        workingOut: "1000\\sqrt{10} = 10^3 \\times 10^{\\frac{1}{2}} = 10^{\\frac{7}{2}}"
      },
      {
        explanation: "Move it to the numerator using a negative exponent.",
        workingOut: "\\frac{1}{10^{\\frac{7}{2}}} = 10^{-\\frac{7}{2}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{10} (10^{-\\frac{7}{2}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; -\\frac{7}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3g",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{2} (2^4 \\times \\sqrt[3]{2})\\)",
    a: "13/3",
    solution: "\\(\\log_{2} (2^4 \\times 2^{\\frac{1}{3}}) = \\log_{2} (2^{\\frac{13}{3}}) = \\frac{13}{3}\\)",
    t: "Logarithm rules",
    hint: "Express the cube root as a fractional exponent, then add the exponents.",
    solutionSteps: [
      {
        explanation: "Express the cube root of 2 as a fractional exponent.",
        workingOut: "\\sqrt[3]{2} = 2^{\\frac{1}{3}}"
      },
      {
        explanation: "Use index laws to add the exponents.",
        workingOut: "2^4 \\times 2^{\\frac{1}{3}} = 2^{4 + \\frac{1}{3}} = 2^{\\frac{13}{3}}"
      },
      {
        explanation: "Substitute back into the logarithm.",
        workingOut: "\\log_{2} (2^{\\frac{13}{3}})"
      },
      {
        explanation: "Apply the logarithm rule.",
        workingOut: "\\therefore\\; \\frac{13}{3}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q3h",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Evaluate: \\(\\log_{9} \\sqrt{3}\\)",
    a: "1/4",
    solution: "Let \\(x = \\log_{9} \\sqrt{3}\\). Then \\(9^x = \\sqrt{3}\\). So \\(3^{2x} = 3^{1/2}\\). Therefore \\(2x = \\frac{1}{2} \\implies x = \\frac{1}{4}\\).",
    t: "Logarithm rules",
    hint: "Write an equation with base 9, then convert both sides to base 3.",
    solutionSteps: [
      {
        explanation: "Let the logarithm equal x and rewrite it in exponential form.",
        workingOut: "9^x = \\sqrt{3}"
      },
      {
        explanation: "Express both sides with a common base of 3.",
        workingOut: "(3^2)^x = 3^{\\frac{1}{2}}"
      },
      {
        explanation: "Simplify the exponents.",
        workingOut: "3^{2x} = 3^{\\frac{1}{2}}"
      },
      {
        explanation: "Equate the exponents to solve for x.",
        workingOut: "2x = \\frac{1}{2}"
      },
      {
        explanation: "Divide both sides by 2.",
        workingOut: "\\therefore\\; x = \\frac{1}{4}"
      }
    ],
    graphData: null
  }
,
  // Q4 Solve each equation for x
  {
    id: "y10-14a-q4a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{2} x = 5\\)",
    a: "32",
    solution: "Rewrite in exponential form: \\(x = 2^5 = 32\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in its equivalent exponential form.",
        workingOut: "x = 2^5"
      },
      {
        explanation: "Calculate the value.",
        workingOut: "x = 32"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 32"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{3} x = 4\\)",
    a: "81",
    solution: "Rewrite in exponential form: \\(x = 3^4 = 81\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x = 3^4"
      },
      {
        explanation: "Calculate the value.",
        workingOut: "x = 81"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 81"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{10} x = 3\\)",
    a: "1000",
    solution: "Rewrite in exponential form: \\(x = 10^3 = 1000\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x = 10^3"
      },
      {
        explanation: "Calculate the value.",
        workingOut: "x = 1000"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 1000"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{10} x = -3\\)",
    a: "0.001",
    solution: "Rewrite in exponential form: \\(x = 10^{-3} = 0.001\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x = 10^{-3}"
      },
      {
        explanation: "Express the negative exponent as a fraction or decimal.",
        workingOut: "x = \\frac{1}{10^3} = \\frac{1}{1000}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 0.001"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{10} x = -4\\)",
    a: "0.0001",
    solution: "Rewrite in exponential form: \\(x = 10^{-4} = 0.0001\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x = 10^{-4}"
      },
      {
        explanation: "Express the negative exponent as a decimal.",
        workingOut: "x = \\frac{1}{10000} = 0.0001"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 0.0001"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{5} x = 4\\)",
    a: "625",
    solution: "Rewrite in exponential form: \\(x = 5^4 = 625\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x = 5^4"
      },
      {
        explanation: "Calculate the value.",
        workingOut: "x = 625"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 625"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4g",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{2} (x - 3) = 1\\)",
    a: "5",
    solution: "Rewrite in exponential form: \\(x - 3 = 2^1\\), so \\(x = 5\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation to solve for the expression in the bracket.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x - 3 = 2^1"
      },
      {
        explanation: "Add 3 to both sides to solve for x.",
        workingOut: "x = 2 + 3"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4h",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{2} (x + 4) = 6\\)",
    a: "60",
    solution: "Rewrite in exponential form: \\(x + 4 = 2^6\\), so \\(x = 64 - 4 = 60\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation to solve for the expression in the bracket.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x + 4 = 2^6"
      },
      {
        explanation: "Evaluate the exponent.",
        workingOut: "x + 4 = 64"
      },
      {
        explanation: "Subtract 4 from both sides to solve for x.",
        workingOut: "x = 64 - 4"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 60"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q4i",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation for \\(x\\): \\(\\log_{2} (x - 5) = 3\\)",
    a: "13",
    solution: "Rewrite in exponential form: \\(x - 5 = 2^3\\), so \\(x = 8 + 5 = 13\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation to solve for the expression in the bracket.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x - 5 = 2^3"
      },
      {
        explanation: "Evaluate the exponent.",
        workingOut: "x - 5 = 8"
      },
      {
        explanation: "Add 5 to both sides to solve for x.",
        workingOut: "x = 8 + 5"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 13"
      }
    ],
    graphData: null
  },

  // Q5 Solve each equation (finding the base)
  {
    id: "y10-14a-q5a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 81 = 2\\)",
    a: "9",
    solution: "Rewrite in exponential form: \\(x^2 = 81\\). Since \\(x > 0\\), \\(x = 9\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^2 = 81"
      },
      {
        explanation: "Take the square root. Since a logarithm base must be positive, take the positive root.",
        workingOut: "x = \\sqrt{81}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 9"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q5b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 16 = 4\\)",
    a: "2",
    solution: "Rewrite in exponential form: \\(x^4 = 16\\). The positive base is 2.",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^4 = 16"
      },
      {
        explanation: "Take the fourth root. Since a logarithm base must be positive, take the positive root.",
        workingOut: "x = \\sqrt[4]{16}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q5c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 1024 = 5\\)",
    a: "4",
    solution: "Rewrite in exponential form: \\(x^5 = 1024\\). Thus, \\(x = 4\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^5 = 1024"
      },
      {
        explanation: "Take the fifth root.",
        workingOut: "x = \\sqrt[5]{1024}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 4"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q5d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 1024 = 10\\)",
    a: "2",
    solution: "Rewrite in exponential form: \\(x^{10} = 1024\\). Thus, \\(x = 2\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^{10} = 1024"
      },
      {
        explanation: "Take the tenth root.",
        workingOut: "x = \\sqrt[10]{1024}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q5e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 25 = 2\\)",
    a: "5",
    solution: "Rewrite in exponential form: \\(x^2 = 25\\). Thus, \\(x = 5\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^2 = 25"
      },
      {
        explanation: "Take the square root. The base must be positive.",
        workingOut: "x = \\sqrt{25}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q5f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Solve the equation: \\(\\log_{x} 1000 = 3\\)",
    a: "10",
    solution: "Rewrite in exponential form: \\(x^3 = 1000\\). Thus, \\(x = 10\\).",
    t: "Logarithm rules",
    hint: "Convert the logarithmic equation into an exponential equation.",
    solutionSteps: [
      {
        explanation: "Rewrite the equation in exponential form.",
        workingOut: "x^3 = 1000"
      },
      {
        explanation: "Take the cube root.",
        workingOut: "x = \\sqrt[3]{1000}"
      },
      {
        explanation: "Final answer.",
        workingOut: "\\therefore\\; 10"
      }
    ],
    graphData: null
  },

  // Q6 Write each statement in logarithmic form
  {
    id: "y10-14a-q6a",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(2 = (\\sqrt{2})^2\\)",
    a: "\\log_{\\sqrt{2}} 2 = 2",
    solution: "The base is \\(\\sqrt{2}\\), the exponent is \\(2\\), and the result is \\(2\\). This forms the logarithmic equation \\(\\log_{\\sqrt{2}} 2 = 2\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = \\(\\sqrt{2}\\), exponent = 2, result = 2.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{\\sqrt{2}} 2 = 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6b",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(0.001 = 10^{-3}\\)",
    a: "\\log_{10} 0.001 = -3",
    solution: "The base is \\(10\\), the exponent is \\(-3\\), and the result is \\(0.001\\). This forms the logarithmic equation \\(\\log_{10} 0.001 = -3\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 10, exponent = -3, result = 0.001.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{10} 0.001 = -3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6c",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(\\left(\\frac{1}{2}\\right)^{-1} = 2\\)",
    a: "\\log_{\\frac{1}{2}} 2 = -1",
    solution: "The base is \\(\\frac{1}{2}\\), the exponent is \\(-1\\), and the result is \\(2\\). This forms the logarithmic equation \\(\\log_{\\frac{1}{2}} 2 = -1\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = \\(\\frac{1}{2}\\), exponent = -1, result = 2.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{\\frac{1}{2}} 2 = -1"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6d",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(1024 = 32^2\\)",
    a: "\\log_{32} 1024 = 2",
    solution: "The base is \\(32\\), the exponent is \\(2\\), and the result is \\(1024\\). This forms the logarithmic equation \\(\\log_{32} 1024 = 2\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 32, exponent = 2, result = 1024.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{32} 1024 = 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6e",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(10^x = N\\)",
    a: "\\log_{10} N = x",
    solution: "The base is \\(10\\), the exponent is \\(x\\), and the result is \\(N\\). This forms the logarithmic equation \\(\\log_{10} N = x\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 10, exponent = x, result = N.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{10} N = x"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6f",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(5\\sqrt{5} = 5^{\\frac{3}{2}}\\)",
    a: "\\log_{5} (5\\sqrt{5}) = \\frac{3}{2}",
    solution: "The base is \\(5\\), the exponent is \\(\\frac{3}{2}\\), and the result is \\(5\\sqrt{5}\\). This forms the logarithmic equation \\(\\log_{5} (5\\sqrt{5}) = \\frac{3}{2}\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 5, exponent = \\(\\frac{3}{2}\\), result = \\(5\\sqrt{5}\\).",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{5} (5\\sqrt{5}) = \\frac{3}{2}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6g",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(5^0 = 1\\)",
    a: "\\log_{5} 1 = 0",
    solution: "The base is \\(5\\), the exponent is \\(0\\), and the result is \\(1\\). This forms the logarithmic equation \\(\\log_{5} 1 = 0\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 5, exponent = 0, result = 1.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{5} 1 = 0"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q6h",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in logarithmic form: \\(13^1 = 13\\)",
    a: "\\log_{13} 13 = 1",
    solution: "The base is \\(13\\), the exponent is \\(1\\), and the result is \\(13\\). This forms the logarithmic equation \\(\\log_{13} 13 = 1\\).",
    t: "Logarithm rules",
    hint: "Identify the base, exponent, and the result. The base of the exponent becomes the base of the logarithm.",
    solutionSteps: [
      {
        explanation: "Identify the components of the exponential equation: base = 13, exponent = 1, result = 13.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(b^x = y \\iff \\log_b y = x\\).",
        workingOut: "\\log_{13} 13 = 1"
      }
    ],
    graphData: null
  }
,
  // Q7 Write each statement in exponential form
  {
    id: "y10-14a-q7a",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{2} 32 = 5\\)",
    a: "2^5 = 32",
    solution: "The base is \\(2\\), the exponent is \\(5\\), and the result is \\(32\\). This forms the exponential equation \\(2^5 = 32\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = 2, exponent = 5, result = 32.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "2^5 = 32"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q7b",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{3} 81 = 4\\)",
    a: "3^4 = 81",
    solution: "The base is \\(3\\), the exponent is \\(4\\), and the result is \\(81\\). This forms the exponential equation \\(3^4 = 81\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = 3, exponent = 4, result = 81.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "3^4 = 81"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q7c",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{10} 0.001 = -3\\)",
    a: "10^{-3} = 0.001",
    solution: "The base is \\(10\\), the exponent is \\(-3\\), and the result is \\(0.001\\). This forms the exponential equation \\(10^{-3} = 0.001\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = 10, exponent = -3, result = 0.001.",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "10^{-3} = 0.001"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q7d",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{3} (27\\sqrt{3}) = \\frac{7}{2}\\)",
    a: "3^{\\frac{7}{2}} = 27\\sqrt{3}",
    solution: "The base is \\(3\\), the exponent is \\(\\frac{7}{2}\\), and the result is \\(27\\sqrt{3}\\). This forms the exponential equation \\(3^{\\frac{7}{2}} = 27\\sqrt{3}\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = 3, exponent = \\(\\frac{7}{2}\\), result = \\(27\\sqrt{3}\\).",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "3^{\\frac{7}{2}} = 27\\sqrt{3}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q7e",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{b} y = x\\)",
    a: "b^x = y",
    solution: "The base is \\(b\\), the exponent is \\(x\\), and the result is \\(y\\). This forms the exponential equation \\(b^x = y\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = \\(b\\), exponent = \\(x\\), result = \\(y\\).",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "b^x = y"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q7f",
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 60,
    question: "Write the following statement in exponential form: \\(\\log_{a} N = x\\)",
    a: "a^x = N",
    solution: "The base is \\(a\\), the exponent is \\(x\\), and the result is \\(N\\). This forms the exponential equation \\(a^x = N\\).",
    t: "Logarithm rules",
    hint: "Identify the base, the exponent, and the result. The base of the logarithm becomes the base of the exponential term.",
    solutionSteps: [
      {
        explanation: "Identify the components: base = \\(a\\), exponent = \\(x\\), result = \\(N\\).",
        workingOut: ""
      },
      {
        explanation: "Apply the definition \\(\\log_b y = x \\iff b^x = y\\).",
        workingOut: "a^x = N"
      }
    ],
    graphData: null
  },

  // Q8 Simplify
  {
    id: "y10-14a-q8a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{3} 7 + \\log_{3} 5\\)",
    a: "\\log_{3} 35",
    solution: "Using the product rule of logarithms, \\(\\log_{3} 7 + \\log_{3} 5 = \\log_{3} (7 \\times 5) = \\log_{3} 35\\).",
    t: "Logarithm rules",
    hint: "Use the product rule: \\(\\log_{b} x + \\log_{b} y = \\log_{b} (x \\times y)\\).",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms, which states that the sum of two logarithms with the same base is the logarithm of their product.",
        workingOut: "\\log_{3} (7 \\times 5)"
      },
      {
        explanation: "Multiply the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{3} 35"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q8b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{2} 3 + \\log_{2} 5\\)",
    a: "\\log_{2} 15",
    solution: "Using the product rule of logarithms, \\(\\log_{2} 3 + \\log_{2} 5 = \\log_{2} (3 \\times 5) = \\log_{2} 15\\).",
    t: "Logarithm rules",
    hint: "Use the product rule: \\(\\log_{b} x + \\log_{b} y = \\log_{b} (x \\times y)\\).",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms.",
        workingOut: "\\log_{2} (3 \\times 5)"
      },
      {
        explanation: "Multiply the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{2} 15"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q8c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{2} 9 + \\log_{2} 7\\)",
    a: "\\log_{2} 63",
    solution: "Using the product rule of logarithms, \\(\\log_{2} 9 + \\log_{2} 7 = \\log_{2} (9 \\times 7) = \\log_{2} 63\\).",
    t: "Logarithm rules",
    hint: "Use the product rule: \\(\\log_{b} x + \\log_{b} y = \\log_{b} (x \\times y)\\).",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms.",
        workingOut: "\\log_{2} (9 \\times 7)"
      },
      {
        explanation: "Multiply the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{2} 63"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q8d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{10} 5 + \\log_{10} 20\\)",
    a: "2",
    solution: "Using the product rule, \\(\\log_{10} 5 + \\log_{10} 20 = \\log_{10} (5 \\times 20) = \\log_{10} 100 = 2\\).",
    t: "Logarithm rules",
    hint: "Use the product rule, then evaluate the resulting logarithm if possible.",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms.",
        workingOut: "\\log_{10} (5 \\times 20)"
      },
      {
        explanation: "Multiply the numbers.",
        workingOut: "\\log_{10} 100"
      },
      {
        explanation: "Evaluate the logarithm since \\(100 = 10^2\\).",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q8e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{6} 4 + \\log_{6} 9\\)",
    a: "2",
    solution: "Using the product rule, \\(\\log_{6} 4 + \\log_{6} 9 = \\log_{6} (4 \\times 9) = \\log_{6} 36 = 2\\).",
    t: "Logarithm rules",
    hint: "Use the product rule, then evaluate the resulting logarithm if possible.",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms.",
        workingOut: "\\log_{6} (4 \\times 9)"
      },
      {
        explanation: "Multiply the numbers.",
        workingOut: "\\log_{6} 36"
      },
      {
        explanation: "Evaluate the logarithm since \\(36 = 6^2\\).",
        workingOut: "\\therefore\\; 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q8f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{3} 7 + \\log_{3} \\frac{1}{7}\\)",
    a: "0",
    solution: "Using the product rule, \\(\\log_{3} 7 + \\log_{3} \\frac{1}{7} = \\log_{3} (7 \\times \\frac{1}{7}) = \\log_{3} 1 = 0\\).",
    t: "Logarithm rules",
    hint: "Use the product rule, then evaluate the resulting logarithm if possible.",
    solutionSteps: [
      {
        explanation: "Apply the product rule for logarithms.",
        workingOut: "\\log_{3} \\left(7 \\times \\frac{1}{7}\\right)"
      },
      {
        explanation: "Multiply the numbers.",
        workingOut: "\\log_{3} 1"
      },
      {
        explanation: "Evaluate the logarithm since any base to the power of 0 is 1.",
        workingOut: "\\therefore\\; 0"
      }
    ],
    graphData: null
  },

  // Q9 Simplify
  {
    id: "y10-14a-q9a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{3} 100 - \\log_{3} 10\\)",
    a: "\\log_{3} 10",
    solution: "Using the quotient rule of logarithms, \\(\\log_{3} 100 - \\log_{3} 10 = \\log_{3} \\left(\\frac{100}{10}\\right) = \\log_{3} 10\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule: \\(\\log_{b} x - \\log_{b} y = \\log_{b} \\left(\\frac{x}{y}\\right)\\).",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms, which states that the difference of two logarithms with the same base is the logarithm of their quotient.",
        workingOut: "\\log_{3} \\left(\\frac{100}{10}\\right)"
      },
      {
        explanation: "Divide the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{3} 10"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q9b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{7} 20 - \\log_{7} 10\\)",
    a: "\\log_{7} 2",
    solution: "Using the quotient rule of logarithms, \\(\\log_{7} 20 - \\log_{7} 10 = \\log_{7} \\left(\\frac{20}{10}\\right) = \\log_{7} 2\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule: \\(\\log_{b} x - \\log_{b} y = \\log_{b} \\left(\\frac{x}{y}\\right)\\).",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms.",
        workingOut: "\\log_{7} \\left(\\frac{20}{10}\\right)"
      },
      {
        explanation: "Divide the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{7} 2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q9c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{7} 21 - \\log_{7} 3\\)",
    a: "1",
    solution: "Using the quotient rule, \\(\\log_{7} 21 - \\log_{7} 3 = \\log_{7} \\left(\\frac{21}{3}\\right) = \\log_{7} 7 = 1\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule, then evaluate the resulting logarithm.",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms.",
        workingOut: "\\log_{7} \\left(\\frac{21}{3}\\right)"
      },
      {
        explanation: "Divide the numbers.",
        workingOut: "\\log_{7} 7"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; 1"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q9d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{3} 17 - \\log_{3} 51\\)",
    a: "-1",
    solution: "Using the quotient rule, \\(\\log_{3} 17 - \\log_{3} 51 = \\log_{3} \\left(\\frac{17}{51}\\right) = \\log_{3} \\left(\\frac{1}{3}\\right) = -1\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule, simplify the fraction, and then evaluate the logarithm using negative exponents.",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms.",
        workingOut: "\\log_{3} \\left(\\frac{17}{51}\\right)"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "\\log_{3} \\left(\\frac{1}{3}\\right)"
      },
      {
        explanation: "Rewrite using a negative exponent.",
        workingOut: "\\log_{3} (3^{-1})"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; -1"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q9e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{5} 100 - \\log_{5} 10\\)",
    a: "\\log_{5} 10",
    solution: "Using the quotient rule, \\(\\log_{5} 100 - \\log_{5} 10 = \\log_{5} \\left(\\frac{100}{10}\\right) = \\log_{5} 10\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule: \\(\\log_{b} x - \\log_{b} y = \\log_{b} \\left(\\frac{x}{y}\\right)\\).",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms.",
        workingOut: "\\log_{5} \\left(\\frac{100}{10}\\right)"
      },
      {
        explanation: "Divide the numbers.",
        workingOut: "\\therefore\\; \\log_{5} 10"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q9f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{5} 10 - \\log_{5} 2\\)",
    a: "1",
    solution: "Using the quotient rule, \\(\\log_{5} 10 - \\log_{5} 2 = \\log_{5} \\left(\\frac{10}{2}\\right) = \\log_{5} 5 = 1\\).",
    t: "Logarithm rules",
    hint: "Use the quotient rule, then evaluate the resulting logarithm.",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule for logarithms.",
        workingOut: "\\log_{5} \\left(\\frac{10}{2}\\right)"
      },
      {
        explanation: "Divide the numbers.",
        workingOut: "\\log_{5} 5"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; 1"
      }
    ],
    graphData: null
  },

  // Q10 Simplify complex expressions
  {
    id: "y10-14a-q10a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{2} 3 + \\log_{2} 5 + \\log_{2} 7\\)",
    a: "\\log_{2} 105",
    solution: "Using the product rule, \\(\\log_{2} 3 + \\log_{2} 5 + \\log_{2} 7 = \\log_{2} (3 \\times 5 \\times 7) = \\log_{2} 105\\).",
    t: "Logarithm rules",
    hint: "Apply the product rule successively for all terms being added.",
    solutionSteps: [
      {
        explanation: "Apply the product rule for all logarithms with the same base.",
        workingOut: "\\log_{2} (3 \\times 5 \\times 7)"
      },
      {
        explanation: "Multiply the numbers inside the logarithm.",
        workingOut: "\\therefore\\; \\log_{2} 105"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q10b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{3} 100 - \\log_{3} 10 - \\log_{3} 2\\)",
    a: "\\log_{3} 5",
    solution: "Using quotient rules, \\(\\log_{3} 100 - \\log_{3} 10 - \\log_{3} 2 = \\log_{3} \\left(\\frac{100}{10 \\times 2}\\right) = \\log_{3} 5\\).",
    t: "Logarithm rules",
    hint: "Terms that are subtracted go into the denominator of the single logarithm's argument.",
    solutionSteps: [
      {
        explanation: "Factor out the negative sign for the subtracted terms, or divide successively.",
        workingOut: "\\log_{3} 100 - (\\log_{3} 10 + \\log_{3} 2)"
      },
      {
        explanation: "Apply the product rule to the terms in the bracket.",
        workingOut: "\\log_{3} 100 - \\log_{3} (10 \\times 2) = \\log_{3} 100 - \\log_{3} 20"
      },
      {
        explanation: "Apply the quotient rule.",
        workingOut: "\\log_{3} \\left(\\frac{100}{20}\\right)"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "\\therefore\\; \\log_{3} 5"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q10c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{5} 7 + \\log_{5} 343 - 2\\log_{5} 49\\)",
    a: "0",
    solution: "Use the power rule: \\(2\\log_{5} 49 = \\log_{5} (49^2)\\). Then use product and quotient rules: \\(\\log_{5} \\left(\\frac{7 \\times 343}{49^2}\\right) = \\log_{5} 1 = 0\\).",
    t: "Logarithm rules",
    hint: "Use the power rule first, then combine the logarithms into a single expression.",
    solutionSteps: [
      {
        explanation: "Apply the power rule to the last term.",
        workingOut: "\\log_{5} 7 + \\log_{5} 343 - \\log_{5} (49^2)"
      },
      {
        explanation: "Combine using product and quotient rules.",
        workingOut: "\\log_{5} \\left(\\frac{7 \\times 343}{49^2}\\right)"
      },
      {
        explanation: "Simplify the numbers inside the logarithm.",
        workingOut: "\\log_{5} \\left(\\frac{2401}{2401}\\right) = \\log_{5} 1"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; 0"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q10d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Simplify: \\(\\log_{7} 25 + \\log_{7} 3 - \\log_{7} 75\\)",
    a: "0",
    solution: "Combine using product and quotient rules: \\(\\log_{7} \\left(\\frac{25 \\times 3}{75}\\right) = \\log_{7} 1 = 0\\).",
    t: "Logarithm rules",
    hint: "Combine the terms using the product and quotient rules.",
    solutionSteps: [
      {
        explanation: "Apply the product rule for the terms being added and the quotient rule for the term being subtracted.",
        workingOut: "\\log_{7} \\left(\\frac{25 \\times 3}{75}\\right)"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "\\log_{7} \\left(\\frac{75}{75}\\right) = \\log_{7} 1"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; 0"
      }
    ],
    graphData: null
  }
,
  // Q11 Express in terms of alpha, beta, gamma, delta
  {
    id: "y10-14a-q11a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 12\\)",
    a: "2\\alpha + \\beta",
    solution: "\\(\\log_{10} 12 = \\log_{10} (2^2 \\times 3) = 2\\log_{10} 2 + \\log_{10} 3 = 2\\alpha + \\beta\\).",
    t: "Logarithm rules",
    hint: "Express the number as a product of prime factors (2, 3, 5, or 7) and use logarithm rules to separate them.",
    solutionSteps: [
      {
        explanation: "Find the prime factorization of 12.",
        workingOut: "12 = 2^2 \\times 3"
      },
      {
        explanation: "Substitute this into the logarithm and use the product and power rules.",
        workingOut: "\\log_{10} (2^2 \\times 3) = \\log_{10} (2^2) + \\log_{10} 3 = 2\\log_{10} 2 + \\log_{10} 3"
      },
      {
        explanation: "Substitute the given Greek letters.",
        workingOut: "\\therefore\\; 2\\alpha + \\beta"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 75\\)",
    a: "\\beta + 2\\gamma",
    solution: "\\(\\log_{10} 75 = \\log_{10} (3 \\times 5^2) = \\log_{10} 3 + 2\\log_{10} 5 = \\beta + 2\\gamma\\).",
    t: "Logarithm rules",
    hint: "Express the number as a product of prime factors.",
    solutionSteps: [
      {
        explanation: "Find the prime factorization of 75.",
        workingOut: "75 = 3 \\times 25 = 3 \\times 5^2"
      },
      {
        explanation: "Substitute and expand using logarithm rules.",
        workingOut: "\\log_{10} (3 \\times 5^2) = \\log_{10} 3 + 2\\log_{10} 5"
      },
      {
        explanation: "Substitute the given letters.",
        workingOut: "\\therefore\\; \\beta + 2\\gamma"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 210\\)",
    a: "\\alpha + \\beta + \\gamma + \\delta",
    solution: "\\(\\log_{10} 210 = \\log_{10} (2 \\times 3 \\times 5 \\times 7) = \\alpha + \\beta + \\gamma + \\delta\\).",
    t: "Logarithm rules",
    hint: "Express the number as a product of prime factors.",
    solutionSteps: [
      {
        explanation: "Find the prime factorization of 210.",
        workingOut: "210 = 21 \\times 10 = (3 \\times 7) \\times (2 \\times 5) = 2 \\times 3 \\times 5 \\times 7"
      },
      {
        explanation: "Expand the logarithm.",
        workingOut: "\\log_{10} 2 + \\log_{10} 3 + \\log_{10} 5 + \\log_{10} 7"
      },
      {
        explanation: "Substitute the letters.",
        workingOut: "\\therefore\\; \\alpha + \\beta + \\gamma + \\delta"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11d",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 6\\,000\\,000\\)",
    a: "\\alpha + \\beta + 6",
    solution: "\\(\\log_{10} 6\\,000\\,000 = \\log_{10} (2 \\times 3 \\times 10^6) = \\log_{10} 2 + \\log_{10} 3 + 6\\log_{10} 10 = \\alpha + \\beta + 6\\).",
    t: "Logarithm rules",
    hint: "Write the number using scientific notation.",
    solutionSteps: [
      {
        explanation: "Write the number as a product of a number and a power of 10.",
        workingOut: "6\\,000\\,000 = 6 \\times 10^6 = 2 \\times 3 \\times 10^6"
      },
      {
        explanation: "Expand the logarithm.",
        workingOut: "\\log_{10} 2 + \\log_{10} 3 + \\log_{10} (10^6)"
      },
      {
        explanation: "Evaluate \\(\\log_{10} 10^6 = 6\\) and substitute letters.",
        workingOut: "\\therefore\\; \\alpha + \\beta + 6"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11e",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 1875\\)",
    a: "\\beta + 4\\gamma",
    solution: "\\(\\log_{10} 1875 = \\log_{10} (3 \\times 5^4) = \\beta + 4\\gamma\\).",
    t: "Logarithm rules",
    hint: "Express the number as a product of prime factors.",
    solutionSteps: [
      {
        explanation: "Find the prime factorization. Divide by 5 repeatedly or by 25.",
        workingOut: "1875 = 3 \\times 625 = 3 \\times 5^4"
      },
      {
        explanation: "Expand the logarithm.",
        workingOut: "\\log_{10} 3 + 4\\log_{10} 5"
      },
      {
        explanation: "Substitute letters.",
        workingOut: "\\therefore\\; \\beta + 4\\gamma"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11f",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} 1050\\)",
    a: "\\alpha + \\beta + 2\\gamma + \\delta",
    solution: "\\(\\log_{10} 1050 = \\log_{10} (2 \\times 3 \\times 5^2 \\times 7) = \\alpha + \\beta + 2\\gamma + \\delta\\).",
    t: "Logarithm rules",
    hint: "Express the number as a product of prime factors.",
    solutionSteps: [
      {
        explanation: "Find the prime factorization.",
        workingOut: "1050 = 105 \\times 10 = (3 \\times 5 \\times 7) \\times (2 \\times 5) = 2 \\times 3 \\times 5^2 \\times 7"
      },
      {
        explanation: "Expand the logarithm.",
        workingOut: "\\log_{10} 2 + \\log_{10} 3 + 2\\log_{10} 5 + \\log_{10} 7"
      },
      {
        explanation: "Substitute letters.",
        workingOut: "\\therefore\\; \\alpha + \\beta + 2\\gamma + \\delta"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11g",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), express the following in terms of \\(\\alpha, \\beta, \\gamma\\) and \\(\\delta\\):<br><br>\\(\\log_{10} (2^a 3^b 5^c 7^d)\\)",
    a: "a\\alpha + b\\beta + c\\gamma + d\\delta",
    solution: "\\(\\log_{10} (2^a 3^b 5^c 7^d) = a\\log_{10} 2 + b\\log_{10} 3 + c\\log_{10} 5 + d\\log_{10} 7 = a\\alpha + b\\beta + c\\gamma + d\\delta\\).",
    t: "Logarithm rules",
    hint: "Use the product and power rules to expand the logarithm.",
    solutionSteps: [
      {
        explanation: "Apply the product rule.",
        workingOut: "\\log_{10} (2^a) + \\log_{10} (3^b) + \\log_{10} (5^c) + \\log_{10} (7^d)"
      },
      {
        explanation: "Apply the power rule.",
        workingOut: "a\\log_{10} 2 + b\\log_{10} 3 + c\\log_{10} 5 + d\\log_{10} 7"
      },
      {
        explanation: "Substitute letters.",
        workingOut: "\\therefore\\; a\\alpha + b\\beta + c\\gamma + d\\delta"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q11h",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Given that \\(\\log_{10} 2 = \\alpha\\), \\(\\log_{10} 3 = \\beta\\), \\(\\log_{10} 5 = \\gamma\\) and \\(\\log_{10} 7 = \\delta\\), what does \\(\\alpha + \\gamma\\) equal?",
    a: "1",
    solution: "\\(\\alpha + \\gamma = \\log_{10} 2 + \\log_{10} 5 = \\log_{10} (2 \\times 5) = \\log_{10} 10 = 1\\).",
    t: "Logarithm rules",
    hint: "Substitute the logarithms back in for the letters and simplify.",
    solutionSteps: [
      {
        explanation: "Substitute the logarithmic expressions for the given variables.",
        workingOut: "\\alpha + \\gamma = \\log_{10} 2 + \\log_{10} 5"
      },
      {
        explanation: "Use the product rule to combine the logarithms.",
        workingOut: "\\log_{10} (2 \\times 5) = \\log_{10} 10"
      },
      {
        explanation: "Evaluate the logarithm.",
        workingOut: "\\therefore\\; 1"
      }
    ],
    graphData: null
  },

  // Q12 Find a relation
  {
    id: "y10-14a-q12a",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find a relation between \\(x\\) and \\(y\\) that does not involve logarithms:<br><br>\\(\\log_{3} x + \\log_{3} y = \\log_{3} (x + y)\\)",
    a: "xy = x + y",
    solution: "By the product rule, \\(\\log_{3} (xy) = \\log_{3} (x + y)\\). Equating the arguments gives \\(xy = x + y\\).",
    t: "Logarithm rules",
    hint: "Use logarithm laws to combine terms so there is a single logarithm on both sides of the equation.",
    solutionSteps: [
      {
        explanation: "Apply the product rule on the left side.",
        workingOut: "\\log_{3} (xy) = \\log_{3} (x + y)"
      },
      {
        explanation: "Since the bases are the same, equate the arguments.",
        workingOut: "xy = x + y"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q12b",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find a relation between \\(x\\) and \\(y\\) that does not involve logarithms:<br><br>\\(2\\log_{10} x - 3\\log_{10} y = -1\\)",
    a: "10x^2 = y^3",
    solution: "Use the power and quotient rules: \\(\\log_{10} \\left(\\frac{x^2}{y^3}\\right) = -1\\). Then rewrite in exponential form: \\(\\frac{x^2}{y^3} = 10^{-1} = \\frac{1}{10}\\), so \\(10x^2 = y^3\\).",
    t: "Logarithm rules",
    hint: "Combine the logarithms into a single expression, then convert the equation into exponential form.",
    solutionSteps: [
      {
        explanation: "Apply the power rule to both logarithmic terms.",
        workingOut: "\\log_{10} (x^2) - \\log_{10} (y^3) = -1"
      },
      {
        explanation: "Apply the quotient rule to combine the logarithms.",
        workingOut: "\\log_{10} \\left(\\frac{x^2}{y^3}\\right) = -1"
      },
      {
        explanation: "Rewrite in exponential form.",
        workingOut: "\\frac{x^2}{y^3} = 10^{-1} = \\frac{1}{10}"
      },
      {
        explanation: "Multiply both sides by \\(10y^3\\) to eliminate fractions.",
        workingOut: "10x^2 = y^3"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q12c",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find a relation between \\(x\\) and \\(y\\) that does not involve logarithms:<br><br>\\(\\log_{5} y = 3 + 2\\log_{5} x\\)",
    a: "y = 125x^2",
    solution: "Subtract \\(2\\log_{5} x\\) from both sides: \\(\\log_{5} y - \\log_{5} (x^2) = 3\\). Combine to get \\(\\log_{5} \\left(\\frac{y}{x^2}\\right) = 3\\). Then \\(\\frac{y}{x^2} = 5^3 = 125\\), so \\(y = 125x^2\\).",
    t: "Logarithm rules",
    hint: "Move all logarithm terms to one side, combine them, and convert to exponential form.",
    solutionSteps: [
      {
        explanation: "Move the \\(\\log_{5} x\\) term to the left side and apply the power rule.",
        workingOut: "\\log_{5} y - \\log_{5} (x^2) = 3"
      },
      {
        explanation: "Combine using the quotient rule.",
        workingOut: "\\log_{5} \\left(\\frac{y}{x^2}\\right) = 3"
      },
      {
        explanation: "Convert to exponential form.",
        workingOut: "\\frac{y}{x^2} = 5^3 = 125"
      },
      {
        explanation: "Multiply by \\(x^2\\) to express \\(y\\) in terms of \\(x\\).",
        workingOut: "y = 125x^2"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q12d",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Find a relation between \\(x\\) and \\(y\\) that does not involve logarithms:<br><br>\\(\\log_{7} (1 + y) - \\log_{7} (1 - y) = x\\)",
    a: "\\frac{1+y}{1-y} = 7^x",
    solution: "Combine using the quotient rule: \\(\\log_{7} \\left(\\frac{1+y}{1-y}\\right) = x\\). Rewrite in exponential form: \\(\\frac{1+y}{1-y} = 7^x\\).",
    t: "Logarithm rules",
    hint: "Combine the logarithms into a single expression, then convert the equation into exponential form.",
    solutionSteps: [
      {
        explanation: "Apply the quotient rule to combine the logarithms.",
        workingOut: "\\log_{7} \\left(\\frac{1 + y}{1 - y}\\right) = x"
      },
      {
        explanation: "Rewrite in exponential form.",
        workingOut: "\\frac{1 + y}{1 - y} = 7^x"
      }
    ],
    graphData: null
  },

  // Q13, Q14, Q15 Application questions
  {
    id: "y10-14a-q13",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "The formula \\(V = \\frac{4}{3}\\pi r^3\\) is the volume of a sphere of radius \\(r\\). Express \\(\\log_{2} V\\) in terms of \\(\\log_{2} r\\).",
    a: "\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi\\right) + 3\\log_{2} r",
    solution: "Take base 2 log of both sides: \\(\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi r^3\\right)\\). Using product and power rules: \\(\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi\\right) + \\log_{2} (r^3) = \\log_{2} \\left(\\frac{4}{3}\\pi\\right) + 3\\log_{2} r\\).",
    t: "Logarithm rules",
    hint: "Take the logarithm of both sides of the equation and then use the product and power rules to expand the right side.",
    solutionSteps: [
      {
        explanation: "Take \\(\\log_{2}\\) of both sides.",
        workingOut: "\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi r^3\\right)"
      },
      {
        explanation: "Apply the product rule to split the constant and the variable.",
        workingOut: "\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi\\right) + \\log_{2} (r^3)"
      },
      {
        explanation: "Apply the power rule to bring the exponent 3 down.",
        workingOut: "\\log_{2} V = \\log_{2} \\left(\\frac{4}{3}\\pi\\right) + 3\\log_{2} r"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q14",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "If \\(y = a \\times 10^{bx}\\), express \\(x\\) in terms of the other pronumerals.",
    a: "x = \\frac{1}{b} \\log_{10} \\left(\\frac{y}{a}\\right)",
    solution: "Divide by \\(a\\): \\(\\frac{y}{a} = 10^{bx}\\). Convert to logarithmic form: \\(bx = \\log_{10} \\left(\\frac{y}{a}\\right)\\). Then \\(x = \\frac{1}{b}\\log_{10} \\left(\\frac{y}{a}\\right)\\).",
    t: "Logarithm rules",
    hint: "Isolate the exponential part first, then convert the equation to logarithmic form.",
    solutionSteps: [
      {
        explanation: "Divide both sides by \\(a\\) to isolate the exponential term.",
        workingOut: "\\frac{y}{a} = 10^{bx}"
      },
      {
        explanation: "Rewrite the equation in logarithmic form.",
        workingOut: "\\log_{10} \\left(\\frac{y}{a}\\right) = bx"
      },
      {
        explanation: "Divide by \\(b\\) to solve for \\(x\\).",
        workingOut: "x = \\frac{1}{b} \\log_{10} \\left(\\frac{y}{a}\\right)"
      }
    ],
    graphData: null
  },
  {
    id: "y10-14a-q15",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: "Solve \\(\\log_{10} A = bt + \\log_{10} P\\) for \\(A\\).",
    a: "A = P \\times 10^{bt}",
    solution: "Subtract \\(\\log_{10} P\\): \\(\\log_{10} A - \\log_{10} P = bt\\). Use quotient rule: \\(\\log_{10} \\left(\\frac{A}{P}\\right) = bt\\). Exponential form: \\(\\frac{A}{P} = 10^{bt}\\), so \\(A = P \\times 10^{bt}\\).",
    t: "Logarithm rules",
    hint: "Move all logarithm terms to one side, combine them using rules, and convert to exponential form.",
    solutionSteps: [
      {
        explanation: "Subtract \\(\\log_{10} P\\) from both sides.",
        workingOut: "\\log_{10} A - \\log_{10} P = bt"
      },
      {
        explanation: "Combine using the quotient rule.",
        workingOut: "\\log_{10} \\left(\\frac{A}{P}\\right) = bt"
      },
      {
        explanation: "Rewrite in exponential form.",
        workingOut: "\\frac{A}{P} = 10^{bt}"
      },
      {
        explanation: "Multiply by \\(P\\) to solve for \\(A\\).",
        workingOut: "A = P \\times 10^{bt}"
      }
    ],
    graphData: null
  }
];
