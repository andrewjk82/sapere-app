export const Y10_CH14D_QUESTIONS = [
  {
      "id": "y10-14d-q1",
      "type": "short_answer",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "A culture of bacteria initially has a mass of \\(5\\) grams and its mass triples in size every hour. How long will it take to reach a mass of \\(405\\) grams?",
      "a": "4",
      "solution": "Let \\(t\\) be the number of hours. The mass after \\(t\\) hours is given by \\(M = 5 \\times 3^t\\). Setting \\(M = 405\\), we solve for \\(t\\).",
      "t": "Applications to science, population growth and finance",
      "hint": "Set up an exponential equation: Initial mass \\(\\times\\) base\\(^t =\\) Final mass.",
      "solutionSteps": [
          {
              "explanation": "Write the formula for the mass \\(M\\) of the bacteria after \\(t\\) hours.",
              "workingOut": "M = 5 \\times 3^t"
          },
          {
              "explanation": "Substitute the target mass \\(M = 405\\) into the equation.",
              "workingOut": "405 = 5 \\times 3^t"
          },
          {
              "explanation": "Divide both sides by \\(5\\).",
              "workingOut": "81 = 3^t"
          },
          {
              "explanation": "Express \\(81\\) as a power of \\(3\\) to solve for \\(t\\).",
              "workingOut": "3^4 = 3^t \\implies t = 4"
          },
          {
              "explanation": "It will take 4 hours to reach a mass of 405 grams.",
              "workingOut": "\\therefore 4 \\text{ hours}"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q2",
      "type": "teacher_review",
      "difficulty": "easy",
      "timeLimit": 60,
      "question": "A culture of bacteria initially weighs \\(0.5\\) grams and is multiplying in size by a factor of four every day.",
      "a": "Review answers",
      "solution": "Completed in parts.",
      "t": "Applications to science, population growth and finance",
      "hint": "Read each part carefully.",
      "subQuestions": [
          {
              "id": "y10-14d-q2a",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Write down a formula for \\(M\\), the weight of the bacteria in grams after \\(t\\) days.",
              "a": "M = 0.5 \\times 4^t",
              "solution": "The initial mass is \\(0.5\\) and it multiplies by \\(4\\) every day.",
              "hint": "Use the standard exponential growth formula \\(M = M_0 \\times a^t\\).",
              "solutionSteps": [
                  {
                      "explanation": "Identify the initial amount \\(M_0\\).",
                      "workingOut": "M_0 = 0.5"
                  },
                  {
                      "explanation": "Identify the growth factor per day \\(a\\).",
                      "workingOut": "a = 4"
                  },
                  {
                      "explanation": "Write the exponential formula.",
                      "workingOut": "M = 0.5 \\times 4^t"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q2b",
              "type": "short_answer",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "What is the weight after \\(3\\) days?",
              "a": "32",
              "solution": "Substitute \\(t = 3\\) into the formula \\(M = 0.5 \\times 4^t\\).",
              "hint": "Substitute \\(t = 3\\) into your formula from part a.",
              "solutionSteps": [
                  {
                      "explanation": "Substitute \\(t = 3\\) into the formula.",
                      "workingOut": "M = 0.5 \\times 4^3"
                  },
                  {
                      "explanation": "Calculate \\(4^3\\).",
                      "workingOut": "4^3 = 64"
                  },
                  {
                      "explanation": "Multiply by \\(0.5\\).",
                      "workingOut": "M = 0.5 \\times 64 = 32"
                  },
                  {
                      "explanation": "State the final weight.",
                      "workingOut": "\\therefore 32 \\text{ grams}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q2c",
              "type": "short_answer",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "How long will the culture take to double its weight? (in days)",
              "a": "0.5",
              "solution": "Set \\(M\\) to twice the initial weight (\\(1.0\\)) and solve for \\(t\\).",
              "hint": "Substitute \\(M = 1.0\\) into the formula and solve for \\(t\\).",
              "solutionSteps": [
                  {
                      "explanation": "The initial weight is \\(0.5\\) grams. Double this weight is \\(1.0\\) gram.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Set the formula equal to \\(1.0\\).",
                      "workingOut": "1.0 = 0.5 \\times 4^t"
                  },
                  {
                      "explanation": "Divide both sides by \\(0.5\\).",
                      "workingOut": "2 = 4^t"
                  },
                  {
                      "explanation": "Express \\(4\\) as a power of \\(2\\).",
                      "workingOut": "2 = (2^2)^t = 2^{2t}"
                  },
                  {
                      "explanation": "Equate the exponents and solve for \\(t\\).",
                      "workingOut": "1 = 2t \\implies t = 0.5"
                  },
                  {
                      "explanation": "State the final time.",
                      "workingOut": "\\therefore 0.5 \\text{ days}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q2d",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "The mass of the Earth is about \\(5.972 \\times 10^{24}\\) kg. After how many days will the culture weigh the same as the Earth? (Write down the equation, you do not need to compute the exact value without a calculator, but express \\(t\\) exactly using logarithms).",
              "a": "t = \\log_4 (1.1944 \\times 10^{28})",
              "solution": "Convert the mass of the Earth to grams and set it equal to \\(M\\).",
              "hint": "Remember to convert kilograms to grams first! (Multiply by \\(10^3\\)).",
              "solutionSteps": [
                  {
                      "explanation": "Convert the Earth's mass from kg to grams.",
                      "workingOut": "5.972 \\times 10^{24} \\text{ kg} = 5.972 \\times 10^{27} \\text{ grams}"
                  },
                  {
                      "explanation": "Set the formula for \\(M\\) equal to this mass.",
                      "workingOut": "0.5 \\times 4^t = 5.972 \\times 10^{27}"
                  },
                  {
                      "explanation": "Divide both sides by \\(0.5\\) (which is the same as multiplying by 2).",
                      "workingOut": "4^t = 11.944 \\times 10^{27} = 1.1944 \\times 10^{28}"
                  },
                  {
                      "explanation": "Take the logarithm of both sides to express \\(t\\).",
                      "workingOut": "t = \\log_4 (1.1944 \\times 10^{28})"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q2e",
              "type": "teacher_review",
              "difficulty": "easy",
              "timeLimit": 60,
              "question": "Discuss your answer to part d.",
              "a": "The model becomes unrealistic as physical constraints apply.",
              "solution": "Exponential models of population growth are only accurate for an initial phase. Eventually, limitations such as food, space, and resources will stop the growth long before it reaches the mass of the Earth.",
              "hint": "Consider the reality of unlimited exponential growth.",
              "solutionSteps": [
                  {
                      "explanation": "Consider the physical limitations of the environment.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Bacteria need nutrients, space, and suitable conditions to multiply.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "A simple exponential model assumes unlimited resources. In reality, growth will level off due to environmental constraints (carrying capacity), meaning the bacteria will never actually reach the mass of the Earth.",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q3",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The population of the Earth at the beginning of 1980 was five billion. Assume that the rate of growth is \\(3\\%\\) per year.",
      "a": "Review answers",
      "solution": "Completed in parts.",
      "t": "Applications to science, population growth and finance",
      "hint": "Read each part carefully.",
      "subQuestions": [
          {
              "id": "y10-14d-q3a",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Write a formula for \\(P\\), the population of the Earth (in billions) in year \\(t\\), for \\(t \\ge 1980\\).",
              "a": "P = 5 \\times 1.03^{t - 1980}",
              "solution": "Initial population is 5 billion. Rate is 3% growth, so multiplier is 1.03. Time elapsed is \\(t - 1980\\).",
              "hint": "Use \\(P = P_0 (1 + r)^n\\) where \\(n = t - 1980\\).",
              "solutionSteps": [
                  {
                      "explanation": "Identify the initial population \\(P_0\\) at the start year (1980).",
                      "workingOut": "P_0 = 5 \\text{ (billion)}"
                  },
                  {
                      "explanation": "Determine the growth multiplier from the 3% growth rate.",
                      "workingOut": "1 + 0.03 = 1.03"
                  },
                  {
                      "explanation": "Determine the number of years elapsed since 1980.",
                      "workingOut": "n = t - 1980"
                  },
                  {
                      "explanation": "Write the final formula.",
                      "workingOut": "P = 5 \\times (1.03)^{t - 1980}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q3b",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "What will be the population in \\(2080\\)? Give your answer in billions, correct to two decimal places.",
              "a": "96.09",
              "solution": "Substitute \\(t = 2080\\) into the formula. \\(P = 5 \\times 1.03^{100} \\approx 96.09\\).",
              "hint": "Calculate \\(t - 1980\\) first, then substitute into the formula.",
              "solutionSteps": [
                  {
                      "explanation": "Calculate the number of years elapsed from 1980 to 2080.",
                      "workingOut": "2080 - 1980 = 100 \\text{ years}"
                  },
                  {
                      "explanation": "Substitute this into the formula.",
                      "workingOut": "P = 5 \\times (1.03)^{100}"
                  },
                  {
                      "explanation": "Evaluate the expression.",
                      "workingOut": "P \\approx 5 \\times 19.2186 = 96.093..."
                  },
                  {
                      "explanation": "Round to two decimal places.",
                      "workingOut": "\\therefore 96.09 \\text{ billion}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q3c",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "In what year will the population reach \\(15\\) billion? (Round to the nearest whole year)",
              "a": "2017",
              "solution": "Solve \\(15 = 5 \\times 1.03^{t - 1980}\\). \\(3 = 1.03^n\\). \\(n = \\log(3) / \\log(1.03) \\approx 37.16\\). The year is \\(1980 + 37 = 2017\\).",
              "hint": "Set \\(P = 15\\) and solve for the exponent using logarithms.",
              "solutionSteps": [
                  {
                      "explanation": "Set the population \\(P\\) to 15 billion in the formula.",
                      "workingOut": "15 = 5 \\times (1.03)^{t - 1980}"
                  },
                  {
                      "explanation": "Divide both sides by 5.",
                      "workingOut": "3 = (1.03)^{t - 1980}"
                  },
                  {
                      "explanation": "Take the logarithm of both sides to solve for the exponent.",
                      "workingOut": "\\log_{10}(3) = (t - 1980) \\log_{10}(1.03)"
                  },
                  {
                      "explanation": "Divide by \\(\\log_{10}(1.03)\\).",
                      "workingOut": "t - 1980 = \\frac{\\log_{10}(3)}{\\log_{10}(1.03)} \\approx \\frac{0.4771}{0.0128} \\approx 37.167"
                  },
                  {
                      "explanation": "Add 1980 to find the year.",
                      "workingOut": "t \\approx 1980 + 37.167 = 2017.167"
                  },
                  {
                      "explanation": "Round to the nearest whole year.",
                      "workingOut": "\\therefore 2017"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q4",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The population of Country X in 1980 was \\(800\\) million. Assume that its rate of growth is \\(5\\%\\) per annum.",
      "a": "Review answers",
      "solution": "Completed in parts.",
      "t": "Applications to science, population growth and finance",
      "hint": "Read each part carefully.",
      "subQuestions": [
          {
              "id": "y10-14d-q4a",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Write down a formula for \\(C\\), the population of Country X (in millions) in year \\(t\\), for \\(t \\ge 1980\\).",
              "a": "C = 800 \\times 1.05^{t - 1980}",
              "solution": "Initial population is 800 million. Rate is 5% growth, so multiplier is 1.05. Time elapsed is \\(t - 1980\\).",
              "hint": "Use the standard exponential growth formula.",
              "solutionSteps": [
                  {
                      "explanation": "Identify the initial population \\(C_0\\) at the start year (1980).",
                      "workingOut": "C_0 = 800 \\text{ (million)}"
                  },
                  {
                      "explanation": "Determine the growth multiplier from the 5% growth rate.",
                      "workingOut": "1 + 0.05 = 1.05"
                  },
                  {
                      "explanation": "Determine the number of years elapsed since 1980.",
                      "workingOut": "n = t - 1980"
                  },
                  {
                      "explanation": "Write the final formula.",
                      "workingOut": "C = 800 \\times (1.05)^{t - 1980}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q4b",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "In what year would the population of Country X reach \\(2000\\) million (i.e. two billion)? (Round up to the next whole year)",
              "a": "1999",
              "solution": "Solve \\(2000 = 800 \\times 1.05^n\\). \\(2.5 = 1.05^n\\). \\(n \\approx 18.78\\). Year is 1998 + fraction, so round up to 1999.",
              "hint": "Set \\(C = 2000\\) and solve using logarithms.",
              "solutionSteps": [
                  {
                      "explanation": "Set the population \\(C\\) to 2000 in the formula.",
                      "workingOut": "2000 = 800 \\times (1.05)^{t - 1980}"
                  },
                  {
                      "explanation": "Divide both sides by 800.",
                      "workingOut": "2.5 = (1.05)^{t - 1980}"
                  },
                  {
                      "explanation": "Take the logarithm of both sides.",
                      "workingOut": "\\log_{10}(2.5) = (t - 1980) \\log_{10}(1.05)"
                  },
                  {
                      "explanation": "Divide to solve for \\(t - 1980\\).",
                      "workingOut": "t - 1980 = \\frac{\\log_{10}(2.5)}{\\log_{10}(1.05)} \\approx 18.78"
                  },
                  {
                      "explanation": "Add 1980 and round up to the next whole year.",
                      "workingOut": "t = 1980 + 18.78 = 1998.78 \\implies 1999"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q4c",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "With the assumptions of question 3 (Earth population: \\(E = 5000 \\times 1.03^{t - 1980}\\) in millions), in what year would the population of Country X be equal to half the population of the Earth? (Round up to the next whole year)",
              "a": "2039",
              "solution": "Solve \\(800 \\times 1.05^n = 0.5 \\times 5000 \\times 1.03^n\\).",
              "hint": "Set \\(C = \\frac{1}{2} E\\) and use index laws to group the terms with exponent \\(t - 1980\\).",
              "solutionSteps": [
                  {
                      "explanation": "Write the Earth's population formula in millions (5 billion = 5000 million).",
                      "workingOut": "E = 5000 \\times (1.03)^{t - 1980}"
                  },
                  {
                      "explanation": "Set Country X's population equal to half of Earth's population.",
                      "workingOut": "800 \\times (1.05)^{t - 1980} = \\frac{1}{2} \\times 5000 \\times (1.03)^{t - 1980}"
                  },
                  {
                      "explanation": "Simplify the right side.",
                      "workingOut": "800 \\times (1.05)^{t - 1980} = 2500 \\times (1.03)^{t - 1980}"
                  },
                  {
                      "explanation": "Group the exponential terms on one side and constants on the other by division. Let \\(n = t - 1980\\).",
                      "workingOut": "\\frac{1.05^n}{1.03^n} = \\frac{2500}{800} = 3.125"
                  },
                  {
                      "explanation": "Combine the powers.",
                      "workingOut": "\\left(\\frac{1.05}{1.03}\\right)^n = 3.125"
                  },
                  {
                      "explanation": "Take the logarithm of both sides.",
                      "workingOut": "n \\log_{10}\\left(\\frac{1.05}{1.03}\\right) = \\log_{10}(3.125)"
                  },
                  {
                      "explanation": "Solve for \\(n\\).",
                      "workingOut": "n = \\frac{\\log_{10}(3.125)}{\\log_{10}(1.05 / 1.03)} \\approx \\frac{0.49485}{0.00835} \\approx 59.26"
                  },
                  {
                      "explanation": "Add 1980 to find the year and round up.",
                      "workingOut": "t = 1980 + 59.26 = 2039.26 \\implies 2040 \\text{ (wait, technically 1980 + 59 = 2039. Rounding up to the next year as in the previous part means during 2039, it's reached. The question says 'in what year', so 2039.)}"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q4d",
              "type": "teacher_review",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "When would everyone in the world be from Country X? (Discuss your answer.)",
              "a": "Check discussion",
              "solution": "Solving \\(800 \\times 1.05^n = 5000 \\times 1.03^n\\) gives a mathematical year. However, in reality, Country X's population is a subset of the world's population, so it's impossible for a subset to grow faster indefinitely and eventually overtake the whole. The Earth's total population includes Country X.",
              "hint": "Set \\(C = E\\) mathematically, but think about whether this is logically possible.",
              "solutionSteps": [
                  {
                      "explanation": "Mathematically, we could set the two equations equal: \\(C = E\\).",
                      "workingOut": "\\left(\\frac{1.05}{1.03}\\right)^n = \\frac{5000}{800} = 6.25"
                  },
                  {
                      "explanation": "Solving for \\(n\\) would give approximately \\(96\\) years.",
                      "workingOut": "n \\approx 96 \\implies \\text{Year } 2076"
                  },
                  {
                      "explanation": "However, this is logically impossible in reality.",
                      "workingOut": ""
                  },
                  {
                      "explanation": "Country X is part of the Earth. If Country X grows at 5% and the rest of the Earth grows at a lower rate, the Earth's overall average growth rate must increase as Country X becomes a larger proportion of the whole. The two equations cannot both remain independently true forever.",
                      "workingOut": ""
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q5",
      "type": "teacher_review",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The mass \\(M\\) of a radioactive substance is initially \\(20\\) g and \\(10\\) years later its mass is \\(18\\) g. If the relationship between \\(M\\) grams and \\(t\\) years is of the form \\(M = M_0 10^{-kt}\\), find:",
      "a": "Review answers",
      "solution": "Completed in parts.",
      "t": "Applications to science, population growth and finance",
      "hint": "Read each part carefully.",
      "subQuestions": [
          {
              "id": "y10-14d-q5a",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Find \\(M_0\\) and \\(k\\). Provide \\(k\\) correct to four decimal places.",
              "a": "M_0 = 20, k = 0.0046",
              "solution": "Initially (t=0) M = 20, so M_0 = 20. At t=10, M=18. 18 = 20 * 10^{-10k}. 0.9 = 10^{-10k}. log10(0.9) = -10k. k = -log10(0.9)/10 approx 0.0046.",
              "hint": "Use the initial condition \\(t = 0\\) to find \\(M_0\\), then use \\(t = 10\\) to find \\(k\\).",
              "solutionSteps": [
                  {
                      "explanation": "Use the initial condition where \\(t = 0\\) and \\(M = 20\\) to find \\(M_0\\).",
                      "workingOut": "20 = M_0 \\times 10^{-k(0)} \\implies 20 = M_0 \\times 1 \\implies M_0 = 20"
                  },
                  {
                      "explanation": "Substitute \\(M_0 = 20\\), \\(t = 10\\), and \\(M = 18\\) into the formula to find \\(k\\).",
                      "workingOut": "18 = 20 \\times 10^{-10k}"
                  },
                  {
                      "explanation": "Divide both sides by 20.",
                      "workingOut": "0.9 = 10^{-10k}"
                  },
                  {
                      "explanation": "Take the base 10 logarithm of both sides.",
                      "workingOut": "\\log_{10}(0.9) = -10k"
                  },
                  {
                      "explanation": "Solve for \\(k\\).",
                      "workingOut": "k = \\frac{-\\log_{10}(0.9)}{10} \\approx \\frac{-(-0.04576)}{10} \\approx 0.004576"
                  },
                  {
                      "explanation": "Round to four decimal places.",
                      "workingOut": "\\therefore M_0 = 20, \\; k = 0.0046"
                  }
              ],
              "graphData": null
          },
          {
              "id": "y10-14d-q5b",
              "type": "short_answer",
              "difficulty": "medium",
              "timeLimit": 90,
              "question": "Find the half-life of the radioactive substance (in years, rounded to one decimal place).",
              "a": "65.7",
              "solution": "Set M = 10 (half of 20). 10 = 20 * 10^{-0.004576t}. 0.5 = 10^{-0.004576t}. log10(0.5) = -0.004576t. t approx 65.8 years.",
              "hint": "The half-life is the time \\(t\\) it takes for the mass to become half of its initial value.",
              "solutionSteps": [
                  {
                      "explanation": "Set \\(M\\) to half of the initial mass \\(M_0\\).",
                      "workingOut": "M = 10"
                  },
                  {
                      "explanation": "Substitute into the formula with the precise \\(k\\) value.",
                      "workingOut": "10 = 20 \\times 10^{-0.004576t}"
                  },
                  {
                      "explanation": "Divide by 20.",
                      "workingOut": "0.5 = 10^{-0.004576t}"
                  },
                  {
                      "explanation": "Take the base 10 logarithm of both sides.",
                      "workingOut": "\\log_{10}(0.5) = -0.004576t"
                  },
                  {
                      "explanation": "Solve for \\(t\\).",
                      "workingOut": "t = \\frac{\\log_{10}(0.5)}{-0.004576} \\approx \\frac{-0.30103}{-0.004576} \\approx 65.78"
                  },
                  {
                      "explanation": "Round to one decimal place.",
                      "workingOut": "\\therefore 65.8 \\text{ years}"
                  }
              ],
              "graphData": null
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q6a",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "An amount of \\(50\\,000\\) dollars is invested on 1 Jan at a compound interest rate of \\(6\\%\\) per annum. Interest is only paid on 1 Jan of each year. At the end of how many years will the investment be worth \\(80\\,000\\) dollars? (Round up to the next whole year)",
      "a": "9",
      "solution": "80000 = 50000 * 1.06^n. 1.6 = 1.06^n. n = log(1.6)/log(1.06) approx 8.06. Next whole year is 9.",
      "t": "Applications to science, population growth and finance",
      "hint": "Use the compound interest formula \\(A = P(1 + r)^n\\).",
      "solutionSteps": [
          {
              "explanation": "Write down the compound interest formula with the given values.",
              "workingOut": "80\\,000 = 50\\,000 \\times (1 + 0.06)^n"
          },
          {
              "explanation": "Simplify the equation by dividing by \\(50\\,000\\).",
              "workingOut": "1.6 = (1.06)^n"
          },
          {
              "explanation": "Take the logarithm of both sides.",
              "workingOut": "\\log_{10}(1.6) = n \\log_{10}(1.06)"
          },
          {
              "explanation": "Solve for \\(n\\).",
              "workingOut": "n = \\frac{\\log_{10}(1.6)}{\\log_{10}(1.06)} \\approx 8.066"
          },
          {
              "explanation": "Since interest is only paid annually, it will take 9 full years to reach or exceed the target amount.",
              "workingOut": "\\therefore 9 \\text{ years}"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q6b",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "An amount of \\(50\\,000\\) dollars is invested on 1 Jan at a compound interest rate of \\(6\\%\\) per annum. Interest is only paid on 1 Jan of each year. At the end of how many years will the investment be worth \\(150\\,000\\) dollars? (Round up to the next whole year)",
      "a": "19",
      "solution": "150000 = 50000 * 1.06^n. 3 = 1.06^n. n = log(3)/log(1.06) approx 18.85. Next whole year is 19.",
      "t": "Applications to science, population growth and finance",
      "hint": "Use the compound interest formula \\(A = P(1 + r)^n\\).",
      "solutionSteps": [
          {
              "explanation": "Write down the compound interest formula with the given values.",
              "workingOut": "150\\,000 = 50\\,000 \\times (1.06)^n"
          },
          {
              "explanation": "Divide by \\(50\\,000\\).",
              "workingOut": "3 = (1.06)^n"
          },
          {
              "explanation": "Take the logarithm of both sides.",
              "workingOut": "\\log_{10}(3) = n \\log_{10}(1.06)"
          },
          {
              "explanation": "Solve for \\(n\\).",
              "workingOut": "n = \\frac{\\log_{10}(3)}{\\log_{10}(1.06)} \\approx 18.854"
          },
          {
              "explanation": "Round up to the next whole year.",
              "workingOut": "\\therefore 19 \\text{ years}"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q7",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "A person now owes the bank \\(60\\,000\\) dollars, after taking out a loan \\(n\\) years ago with an interest rate of \\(8\\%\\) per annum. They borrowed \\(30\\,000\\) dollars. Find \\(n\\), correct to one decimal place.",
      "a": "9.0",
      "solution": "60000 = 30000 * 1.08^n. 2 = 1.08^n. n = log(2)/log(1.08) approx 9.006.",
      "t": "Applications to science, population growth and finance",
      "hint": "The debt grows according to compound interest. Set up the equation \\(A = P(1 + r)^n\\).",
      "solutionSteps": [
          {
              "explanation": "Write down the compound interest formula with the given values.",
              "workingOut": "60\\,000 = 30\\,000 \\times (1 + 0.08)^n"
          },
          {
              "explanation": "Divide by \\(30\\,000\\).",
              "workingOut": "2 = (1.08)^n"
          },
          {
              "explanation": "Take the logarithm of both sides.",
              "workingOut": "\\log_{10}(2) = n \\log_{10}(1.08)"
          },
          {
              "explanation": "Solve for \\(n\\).",
              "workingOut": "n = \\frac{\\log_{10}(2)}{\\log_{10}(1.08)} \\approx 9.006"
          },
          {
              "explanation": "Round to one decimal place.",
              "workingOut": "\\therefore 9.0"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q8a",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The formula for the calculation of compound interest is \\(A_n = P(1 + R)^n\\). Find, correct to one decimal place:<br><br>\\(A_n\\) if \\(P = 60\\,000\\) dollars, \\(R = 7\\%\\) and \\(n = 4\\)",
      "a": "78647.8",
      "solution": "A_n = 60000 * (1.07)^4 = 78647.7606 -> 78647.8",
      "t": "Applications to science, population growth and finance",
      "hint": "Substitute the given values directly into the formula and evaluate.",
      "solutionSteps": [
          {
              "explanation": "Substitute the values into the formula.",
              "workingOut": "A_n = 60\\,000 \\times (1 + 0.07)^4"
          },
          {
              "explanation": "Evaluate the expression.",
              "workingOut": "A_n = 60\\,000 \\times (1.07)^4 = 60\\,000 \\times 1.31079601"
          },
          {
              "explanation": "Calculate the final amount.",
              "workingOut": "A_n = 78\\,647.7606"
          },
          {
              "explanation": "Round to one decimal place.",
              "workingOut": "\\therefore 78\\,647.8"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q8b",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The formula for the calculation of compound interest is \\(A_n = P(1 + R)^n\\). Find, correct to one decimal place:<br><br>\\(P\\) if \\(A_n = 90\\,000\\) dollars, \\(R = 6\\%\\) and \\(n = 5\\)",
      "a": "67253.3",
      "solution": "90000 = P * 1.06^5. P = 90000 / 1.06^5 = 67253.259 -> 67253.3",
      "t": "Applications to science, population growth and finance",
      "hint": "Substitute the knowns into the formula and rearrange to make \\(P\\) the subject.",
      "solutionSteps": [
          {
              "explanation": "Substitute the known values into the formula.",
              "workingOut": "90\\,000 = P \\times (1 + 0.06)^5"
          },
          {
              "explanation": "Rearrange to solve for \\(P\\).",
              "workingOut": "P = \\frac{90\\,000}{(1.06)^5}"
          },
          {
              "explanation": "Evaluate the expression.",
              "workingOut": "P \\approx \\frac{90\\,000}{1.3382256} \\approx 67\\,253.259"
          },
          {
              "explanation": "Round to one decimal place.",
              "workingOut": "\\therefore 67\\,253.3"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q8c",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The formula for the calculation of compound interest is \\(A_n = P(1 + R)^n\\). Find, correct to one decimal place:<br><br>\\(n\\) if \\(A_n = 70\\,000\\) dollars, \\(R = 3\\%\\) and \\(P = 30\\,000\\) dollars",
      "a": "28.7",
      "solution": "70000 = 30000 * 1.03^n. 7/3 = 1.03^n. n = log(7/3)/log(1.03) approx 28.66 -> 28.7",
      "t": "Applications to science, population growth and finance",
      "hint": "Substitute the knowns, then use logarithms to solve for the exponent \\(n\\).",
      "solutionSteps": [
          {
              "explanation": "Substitute the known values into the formula.",
              "workingOut": "70\\,000 = 30\\,000 \\times (1 + 0.03)^n"
          },
          {
              "explanation": "Divide both sides by \\(30\\,000\\).",
              "workingOut": "\\frac{7}{3} = (1.03)^n"
          },
          {
              "explanation": "Take the logarithm of both sides.",
              "workingOut": "\\log_{10}\\left(\\frac{7}{3}\\right) = n \\log_{10}(1.03)"
          },
          {
              "explanation": "Solve for \\(n\\).",
              "workingOut": "n = \\frac{\\log_{10}(7/3)}{\\log_{10}(1.03)} \\approx 28.66"
          },
          {
              "explanation": "Round to one decimal place.",
              "workingOut": "\\therefore 28.7"
          }
      ],
      "graphData": null
  },
  {
      "id": "y10-14d-q8d",
      "type": "short_answer",
      "difficulty": "medium",
      "timeLimit": 90,
      "question": "The formula for the calculation of compound interest is \\(A_n = P(1 + R)^n\\). Find, correct to one decimal place:<br><br>\\(n\\) if \\(A_n = 100\\,000\\) dollars, \\(R = 5\\%\\) and \\(P = 25\\,000\\) dollars",
      "a": "28.4",
      "solution": "100000 = 25000 * 1.05^n. 4 = 1.05^n. n = log(4)/log(1.05) approx 28.41 -> 28.4",
      "t": "Applications to science, population growth and finance",
      "hint": "Substitute the knowns, then use logarithms to solve for the exponent \\(n\\).",
      "solutionSteps": [
          {
              "explanation": "Substitute the known values into the formula.",
              "workingOut": "100\\,000 = 25\\,000 \\times (1 + 0.05)^n"
          },
          {
              "explanation": "Divide both sides by \\(25\\,000\\).",
              "workingOut": "4 = (1.05)^n"
          },
          {
              "explanation": "Take the logarithm of both sides.",
              "workingOut": "\\log_{10}(4) = n \\log_{10}(1.05)"
          },
          {
              "explanation": "Solve for \\(n\\).",
              "workingOut": "n = \\frac{\\log_{10}(4)}{\\log_{10}(1.05)} \\approx 28.41"
          },
          {
              "explanation": "Round to one decimal place.",
              "workingOut": "\\therefore 28.4"
          }
      ],
      "graphData": null
  },
];
