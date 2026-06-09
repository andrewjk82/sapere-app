export const Y12A_CH8D_QUESTIONS = [
  {
    "id": "y12a-8d-q1",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Suppose that an instalment of \\( \\$800 \\) is invested in a superannuation scheme on 1st January each year for four years, beginning in 2022. The money earns interest at \\( 8\\% \\) pa, compounded annually.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q1ai",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) What is the value of the first instalment on 31st December 2025? Give your answer correct to the nearest cent.",
        "a": "1088.39",
        "solutionSteps": [
          {
            "explanation": "Identify parameters for the first instalment. It is invested on 1st January 2022 and earns interest for 4 full years (to 31st December 2025).",
            "workingOut": "P = 800, \\quad R = 0.08, \\quad n = 4"
          },
          {
            "explanation": "Substitute into compound interest formula: \\( A = P(1+R)^n \\)",
            "workingOut": "A_1 = 800 \\times (1.08)^4 = 1088.391168"
          },
          {
            "explanation": "Round to the nearest cent",
            "workingOut": "A_1 \\approx 1088.39"
          }
        ]
      },
      {
        "id": "y12a-8d-q1aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) What is the value of the second instalment on 31st December 2025? Give your answer correct to the nearest cent.",
        "a": "1007.77",
        "solutionSteps": [
          {
            "explanation": "The second instalment is invested on 1st January 2023 and earns interest for 3 full years.",
            "workingOut": "P = 800, \\quad R = 0.08, \\quad n = 3"
          },
          {
            "explanation": "Substitute into compound interest formula",
            "workingOut": "A_2 = 800 \\times (1.08)^3 = 1007.7696"
          },
          {
            "explanation": "Round to the nearest cent",
            "workingOut": "A_2 \\approx 1007.77"
          }
        ]
      },
      {
        "id": "y12a-8d-q1aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) What is the value of the third instalment on 31st December 2025? Give your answer correct to the nearest cent.",
        "a": "933.12",
        "solutionSteps": [
          {
            "explanation": "The third instalment is invested on 1st January 2024 and earns interest for 2 full years.",
            "workingOut": "P = 800, \\quad R = 0.08, \\quad n = 2"
          },
          {
            "explanation": "Substitute into compound interest formula",
            "workingOut": "A_3 = 800 \\times (1.08)^2 = 933.12"
          }
        ]
      },
      {
        "id": "y12a-8d-q1aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) What is the value of the fourth instalment on 31st December 2025? Give your answer correct to the nearest cent.",
        "a": "864.00",
        "solutionSteps": [
          {
            "explanation": "The fourth instalment is invested on 1st January 2025 and earns interest for 1 full year.",
            "workingOut": "P = 800, \\quad R = 0.08, \\quad n = 1"
          },
          {
            "explanation": "Substitute into compound interest formula",
            "workingOut": "A_4 = 800 \\times 1.08 = 864"
          }
        ]
      },
      {
        "id": "y12a-8d-q1av",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) v) What is the total value of the superannuation on 31st December 2025? Give your answer correct to the nearest cent.",
        "a": "3893.28",
        "solutionSteps": [
          {
            "explanation": "Sum the values of all four instalments calculated in parts i) to iv)",
            "workingOut": "A_{\\text{total}} = 1088.39 + 1007.77 + 933.12 + 864.00"
          },
          {
            "explanation": "Evaluate the sum",
            "workingOut": "A_{\\text{total}} = 3893.28"
          }
        ]
      },
      {
        "id": "y12a-8d-q1bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) Write down the four answers to parts i to iv in increasing order (separate by commas).",
        "a": "864, 933.12, 1007.77, 1088.39",
        "solutionSteps": [
          {
            "explanation": "Arrange the values from smallest (fourth instalment) to largest (first instalment)",
            "workingOut": "\\text{Values: } 864, \\; 933.12, \\; 1007.77, \\; 1088.39"
          }
        ]
      },
      {
        "id": "y12a-8d-q1bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) Write down the first term \\( a \\), common ratio \\( r \\) and number of terms \\( n \\) of the GP. (Format: 'a=864, r=1.08, n=4')",
        "a": "a=864, r=1.08, n=4",
        "solutionSteps": [
          {
            "explanation": "Observe the terms of the GP: \\( 864, \\; 864(1.08), \\; 864(1.08)^2, \\; 864(1.08)^3 \\)",
            "workingOut": "a = 864, \\quad r = \\frac{933.12}{864} = 1.08, \\quad n = 4"
          }
        ]
      },
      {
        "id": "y12a-8d-q1biii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) iii) Use the formula \\( S_n = \\frac{a(r^n - 1)}{r - 1} \\) to find the sum of the GP, and hence check your answer to part a v.",
        "a": "3893.28",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( a = 864, \\; r = 1.08, \\; n = 4 \\) into the GP sum formula",
            "workingOut": "S_4 = \\frac{864 \\times (1.08^4 - 1)}{1.08 - 1}"
          },
          {
            "explanation": "Calculate the sum and round to two decimal places",
            "workingOut": "S_4 = \\frac{864 \\times 0.36048896}{0.08} = 3893.28"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q2",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Suppose that an instalment of \\( \\$1500 \\) is invested in a superannuation scheme on 1st April each year for five years, beginning in 2018. The money earns interest at \\( 6\\% \\) pa, compounded annually. In each part round your answer correct to the nearest cent.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q2ai",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) What is the value of the first instalment on 31st March 2023?",
        "a": "2007.34",
        "solutionSteps": [
          {
            "explanation": "The first instalment (1st April 2018) is invested for 5 full years (to 31st March 2023).",
            "workingOut": "P = 1500, \\quad R = 0.06, \\quad n = 5"
          },
          {
            "explanation": "Apply formula: \\( A = P(1+R)^n \\)",
            "workingOut": "A_1 = 1500 \\times (1.06)^5 \\approx 2007.338"
          },
          {
            "explanation": "Round to nearest cent",
            "workingOut": "A_1 \\approx 2007.34"
          }
        ]
      },
      {
        "id": "y12a-8d-q2aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) What is the value of the second instalment on 31st March 2023?",
        "a": "1893.72",
        "solutionSteps": [
          {
            "explanation": "The second instalment (1st April 2019) is invested for 4 years.",
            "workingOut": "A_2 = 1500 \\times (1.06)^4 = 1893.7155"
          },
          {
            "explanation": "Round to nearest cent",
            "workingOut": "A_2 \\approx 1893.72"
          }
        ]
      },
      {
        "id": "y12a-8d-q2aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) Write the value of the third, fourth, and fifth instalments on 31st March 2023 (separate by commas).",
        "a": "1786.52, 1685.40, 1590.00",
        "solutionSteps": [
          {
            "explanation": "The 3rd instalment earns 3 years of interest; 4th earns 2 years; 5th earns 1 year.",
            "workingOut": "A_3 = 1500(1.06)^3 \\approx 1786.52, \\quad A_4 = 1500(1.06)^2 = 1685.40, \\quad A_5 = 1500(1.06)^1 = 1590.00"
          }
        ]
      },
      {
        "id": "y12a-8d-q2aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) What is the total value of the superannuation on 31st March 2023?",
        "a": "8962.98",
        "solutionSteps": [
          {
            "explanation": "Sum the values of all five instalments",
            "workingOut": "A_{\\text{total}} = 2007.34 + 1893.72 + 1786.52 + 1685.40 + 1590.00"
          },
          {
            "explanation": "Calculate the sum",
            "workingOut": "A_{\\text{total}} = 8962.98"
          }
        ]
      },
      {
        "id": "y12a-8d-q2bi",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) i) Write down the five instalment values in increasing order (separate by commas).",
        "a": "1590, 1685.40, 1786.52, 1893.72, 2007.34",
        "solutionSteps": [
          {
            "explanation": "Arrange the calculated values from 5th instalment to 1st instalment",
            "workingOut": "\\text{Values: } 1590, \\; 1685.40, \\; 1786.52, \\; 1893.72, \\; 2007.34"
          }
        ]
      },
      {
        "id": "y12a-8d-q2bii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) ii) Write down the first term \\( a \\), common ratio \\( r \\) and number of terms \\( n \\). (Format: 'a=1590, r=1.06, n=5')",
        "a": "a=1590, r=1.06, n=5",
        "solutionSteps": [
          {
            "explanation": "Observe terms of the GP: \\( 1590, \\; 1590(1.06), \\dots \\)",
            "workingOut": "a = 1590, \\quad r = 1.06, \\quad n = 5"
          }
        ]
      },
      {
        "id": "y12a-8d-q2biii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) iii) Use the formula \\( S_n = \\frac{a(r^n - 1)}{r - 1} \\) to find the sum of the GP, rounding to the nearest cent.",
        "a": "8962.98",
        "solutionSteps": [
          {
            "explanation": "Substitute GP parameters into sum formula",
            "workingOut": "S_5 = \\frac{1590 \\times (1.06^5 - 1)}{1.06 - 1}"
          },
          {
            "explanation": "Calculate and round to two decimal places",
            "workingOut": "S_5 = \\frac{1590 \\times 0.33822558}{0.06} \\approx 8962.98"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q3",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "David makes 10 contributions of \\( \\$2000 \\) to his superannuation scheme on 1st April each year. The money earns compound interest at \\( 8\\% \\) per annum. He calculates what the scheme will be worth at a target date 10 years later.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q3ai",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) How much does the first instalment amount to at the target date? (Write as a formula, e.g. 2000*(1.08)^10)",
        "a": "2000*(1.08)^10",
        "solutionSteps": [
          {
            "explanation": "The first contribution is made at the start and earns interest for all 10 years.",
            "workingOut": "A_1 = 2000 \\times (1.08)^{10}"
          }
        ]
      },
      {
        "id": "y12a-8d-q3aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) How much does the second instalment amount to at the target date? (Write as a formula, e.g. 2000*(1.08)^9)",
        "a": "2000*(1.08)^9",
        "solutionSteps": [
          {
            "explanation": "The second contribution is invested 1 year later, earning interest for 9 years.",
            "workingOut": "A_2 = 2000 \\times (1.08)^{9}"
          }
        ]
      },
      {
        "id": "y12a-8d-q3aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) How much does the last contribution amount to invested for just one year? (Write as a formula, e.g. 2000*1.08)",
        "a": "2000*1.08",
        "solutionSteps": [
          {
            "explanation": "The tenth contribution is made at the start of the final year and compounds for 1 year.",
            "workingOut": "A_{10} = 2000 \\times 1.08"
          }
        ]
      },
      {
        "id": "y12a-8d-q3aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) Write down a GP series for the total value \\( A_{10} \\). (Format: '2000*1.08 + ... + 2000*1.08^10')",
        "a": "2000*1.08 + ... + 2000*1.08^10",
        "solutionSteps": [
          {
            "explanation": "Sum the compounding value of all 10 instalments in ascending order",
            "workingOut": "A_{10} = 2000(1.08) + 2000(1.08)^2 + \\dots + 2000(1.08)^{10}"
          }
        ]
      },
      {
        "id": "y12a-8d-q3b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Show that the final value of the fund is \\( A_{10} = \\frac{2000 \\times 1.08 \\times (1.08^{10} - 1)}{0.08} \\), and evaluate this correct to the nearest dollar.",
        "a": "Using GP sum formula with \\( a = 2000 \\times 1.08 = 2160 \\), \\( r = 1.08 \\), and \\( n = 10 \\):\n\\( A_{10} = \\frac{2160(1.08^{10} - 1)}{1.08 - 1} = \\frac{2000 \\times 1.08 \\times (1.08^{10} - 1)}{0.08} \\).\nEvaluating: \\( A_{10} \\approx \\frac{2160(2.158925 - 1)}{0.08} = 31290.97 \\approx \\$31291 \\).",
        "solutionSteps": [
          {
            "explanation": "Apply GP sum formula",
            "workingOut": "S_{10} = \\frac{a(r^{10} - 1)}{r - 1} = \\frac{2000 \\times 1.08 \\times (1.08^{10} - 1)}{1.08 - 1}"
          },
          {
            "explanation": "Simplify denominator",
            "workingOut": "A_{10} = \\frac{2000 \\times 1.08 \\times (1.08^{10} - 1)}{0.08}"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "A_{10} = 27000 \\times (1.08^{10} - 1) \\approx 27000 \\times 1.158925 = 31291"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q4",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sarah makes 36 contributions of \\( \\$400 \\) to her superannuation scheme on the first day of each month. The money earns interest at \\( 4.8\\% \\) per annum, compounded monthly. She calculates the scheme's value at a target date 36 months later.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q4ai",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) How much does the first instalment amount to at the target date? (Write as a formula, e.g. 400*(1.004)^36)",
        "a": "400*(1.004)^36",
        "solutionSteps": [
          {
            "explanation": "Determine monthly interest rate: \\( 4.8\\% / 12 = 0.4\\% = 0.004 \\). First instalment compounds for 36 months.",
            "workingOut": "A_1 = 400 \\times (1 + 0.004)^{36} = 400 \\times (1.004)^{36}"
          }
        ]
      },
      {
        "id": "y12a-8d-q4aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) How much does the second instalment amount to at the target date? (Write as a formula, e.g. 400*(1.004)^35)",
        "a": "400*(1.004)^35",
        "solutionSteps": [
          {
            "explanation": "The second contribution is made 1 month later and compounds for 35 months.",
            "workingOut": "A_2 = 400 \\times (1.004)^{35}"
          }
        ]
      },
      {
        "id": "y12a-8d-q4aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) What is the value of the last contribution, invested for just one month? (Write as a formula, e.g. 400*1.004)",
        "a": "400*1.004",
        "solutionSteps": [
          {
            "explanation": "The 36th contribution is made at the start of the final month and compounds for 1 month.",
            "workingOut": "A_{36} = 400 \\times 1.004"
          }
        ]
      },
      {
        "id": "y12a-8d-q4aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) Write down a GP series for the total value \\( A_{36} \\). (Format: '400*1.004 + ... + 400*1.004^36')",
        "a": "400*1.004 + ... + 400*1.004^36",
        "solutionSteps": [
          {
            "explanation": "Sum the compounding value of all 36 instalments in ascending order",
            "workingOut": "A_{36} = 400(1.004) + 400(1.004)^2 + \\dots + 400(1.004)^{36}"
          }
        ]
      },
      {
        "id": "y12a-8d-q4b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Show that the total value of the fund after contributions have been made for three years is \\( A_{36} = \\frac{400 \times 1.004 \times (1.004^{36} - 1)}{0.004} \\), and evaluate this correct to the nearest dollar.",
        "a": "Using GP sum formula with \\( a = 400 \\times 1.004 = 401.6 \\), \\( r = 1.004 \\), and \\( n = 36 \\):\n\\( A_{36} = \\frac{401.6(1.004^{36} - 1)}{1.004 - 1} = \\frac{400 \\times 1.004 \times (1.004^{36} - 1)}{0.004} \\).\nEvaluating: \\( A_{36} \\approx 100400(1.004^{36} - 1) = 15486.90 \\approx \\$15487 \\).",
        "solutionSteps": [
          {
            "explanation": "Apply GP sum formula",
            "workingOut": "S_{36} = \\frac{a(r^{36} - 1)}{r - 1} = \\frac{400 \\times 1.004 \\times (1.004^{36} - 1)}{1.004 - 1}"
          },
          {
            "explanation": "Simplify denominator",
            "workingOut": "A_{36} = \\frac{400 \\times 1.004 \\times (1.004^{36} - 1)}{0.004}"
          },
          {
            "explanation": "Calculate value and round to the nearest dollar",
            "workingOut": "A_{36} = 100400 \\times (1.004^{36} - 1) \\approx 100400 \\times 0.15425 = 15487"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q5",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "A company makes contributions of \\( \\$4000 \\) to the superannuation fund of one of its employees on 1st July each year. The money earns compound interest at \\( 7.5\\% \\) per annum. Round all currency amounts correct to the nearest dollar.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q5ai",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) How much does the first instalment amount to at the end of 20 years?",
        "a": "16991",
        "solutionSteps": [
          {
            "explanation": "The first contribution compounds for 20 years.",
            "workingOut": "A_1 = 4000 \\times (1.075)^{20}"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "A_1 = 4000 \\times 4.247851 = 16991.40 \\approx 16991"
          }
        ]
      },
      {
        "id": "y12a-8d-q5aii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) How much does the second instalment amount to at the end of 20 years?",
        "a": "15806",
        "solutionSteps": [
          {
            "explanation": "The second contribution is made 1 year later and compounds for 19 years.",
            "workingOut": "A_2 = 4000 \\times (1.075)^{19}"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "A_2 = 4000 \\times 3.951489 = 15805.96 \\approx 15806"
          }
        ]
      },
      {
        "id": "y12a-8d-q5aiii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) How much does the last instalment amount to at the end of just one year?",
        "a": "4300",
        "solutionSteps": [
          {
            "explanation": "The 20th contribution is made at the start of the final year and compounds for 1 year.",
            "workingOut": "A_{20} = 4000 \\times 1.075 = 4300"
          }
        ]
      },
      {
        "id": "y12a-8d-q5aiv",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iv) Write down a GP series for \\( A_{20} \\). (Format: '4000*1.075 + ... + 4000*1.075^20')",
        "a": "4000*1.075 + ... + 4000*1.075^20",
        "solutionSteps": [
          {
            "explanation": "Sum the compounding value of all 20 instalments in ascending order",
            "workingOut": "A_{20} = 4000(1.075) + 4000(1.075)^2 + \\dots + 4000(1.075)^{20}"
          }
        ]
      },
      {
        "id": "y12a-8d-q5b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Show that the final value of the fund is \\( A_{20} = \\frac{4000 \\times 1.075 \\times (1.075^{20} - 1)}{0.075} \\).",
        "a": "The GP series has first term \\( a = 4000 \\times 1.075 = 4300 \\), ratio \\( r = 1.075 \\), and \\( n = 20 \\).\nSubstituting into the GP sum formula yields:\n\\( A_{20} = \\frac{4300(1.075^{20} - 1)}{1.075 - 1} = \\frac{4000 \\times 1.075 \\times (1.075^{20} - 1)}{0.075} \\).",
        "solutionSteps": [
          {
            "explanation": "Apply GP sum formula",
            "workingOut": "A_{20} = \\frac{4300(1.075^{20} - 1)}{1.075 - 1}"
          },
          {
            "explanation": "Write in specified format",
            "workingOut": "A_{20} = \\frac{4000 \\times 1.075 \\times (1.075^{20} - 1)}{0.075}"
          }
        ]
      },
      {
        "id": "y12a-8d-q5c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) What will be the value of the fund after 20 years, and what will be the total amount of the contributions? (Format: '$186,214 value, $80,000 contributions')",
        "a": "$186,214 value, $80,000 contributions",
        "solutionSteps": [
          {
            "explanation": "Evaluate the formula for \\( A_{20} \\) to the nearest dollar",
            "workingOut": "A_{20} = \\frac{4300 \\times (1.075^{20} - 1)}{0.075} \\approx 186213.91 \\implies \\$186214"
          },
          {
            "explanation": "Calculate the total contribution amount",
            "workingOut": "\\text{Contributions} = 20 \\times 4000 = \\$80000"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q6",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Finster and Finster Superannuation offer a superannuation scheme with annual contributions of \\( \\$15000 \\) invested at an interest rate of \\( 8\\% \\) pa, compounded annually. Contributions are paid on 1st of January each year.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q6a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Zoya decides to invest in the fund for the next 25 years. Show that the final value of her investment is given by \\( A_{25} = \\frac{15000 \\times 1.08 \times (1.08^{25} - 1)}{0.08} \\).",
        "a": "Each contribution of \\( \\$15000 \\) earns compound interest. The first compounds for 25 years, the last for 1 year.\n\\( A_{25} = 15000(1.08) + 15000(1.08)^2 + \\dots + 15000(1.08)^{25} \\).\nThis is a GP with \\( a = 15000(1.08) = 16200 \\), \\( r = 1.08 \\), and \\( n = 25 \\).\n\\( A_{25} = \\frac{16200(1.08^{25} - 1)}{1.08 - 1} = \\frac{15000 \\times 1.08 \\times (1.08^{25} - 1)}{0.08} \\).",
        "solutionSteps": [
          {
            "explanation": "Form the geometric series",
            "workingOut": "A_{25} = 15000(1.08)^1 + \\dots + 15000(1.08)^{25}"
          },
          {
            "explanation": "Use GP sum formula",
            "workingOut": "A_{25} = \\frac{15000 \\times 1.08 \\times (1.08^{25} - 1)}{0.08}"
          }
        ]
      },
      {
        "id": "y12a-8d-q6b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) Evaluate \\( A_{25} \\) correct to the nearest dollar.",
        "a": "1184316",
        "solutionSteps": [
          {
            "explanation": "Substitute and evaluate the GP sum",
            "workingOut": "A_{25} = \\frac{16200 \\times (1.08^{25} - 1)}{0.08}"
          },
          {
            "explanation": "Evaluate term to the nearest integer",
            "workingOut": "A_{25} \\approx 202500 \\times 5.848475 = 1184316.22 \\implies 1184316"
          }
        ]
      },
      {
        "id": "y12a-8d-q6c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) By how much does this exceed the total contributions Zoya made? Give your answer to the nearest dollar.",
        "a": "809316",
        "solutionSteps": [
          {
            "explanation": "Calculate total contributions",
            "workingOut": "\\text{Total contributions} = 15000 \\times 25 = 375000"
          },
          {
            "explanation": "Subtract contributions from the total final value",
            "workingOut": "\\text{Excess} = 1184316 - 375000 = 809316"
          }
        ]
      },
      {
        "id": "y12a-8d-q6d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "d) The company agrees to let Zoya make a higher contribution to the scheme. Let this instalment be \\( M \\). Show that in this case \\( A_{25} = \\frac{M \\times 1.08 \\times (1.08^{25} - 1)}{0.08} \\).",
        "a": "If the contribution size changes to \\( M \\), the series becomes:\n\\( A_{25} = M(1.08) + M(1.08)^2 + \\dots + M(1.08)^{25} \\).\nThis is a GP with first term \\( a = 1.08M \\), common ratio \\( r = 1.08 \\), and \\( n = 25 \\).\nUsing the GP sum formula:\n\\( A_{25} = \\frac{1.08M(1.08^{25} - 1)}{1.08 - 1} = \\frac{M \\times 1.08 \\times (1.08^{25} - 1)}{0.08} \\).",
        "solutionSteps": [
          {
            "explanation": "Write the new geometric series",
            "workingOut": "A_{25} = M(1.08) + \\dots + M(1.08)^{25}"
          },
          {
            "explanation": "Apply GP sum formula",
            "workingOut": "A_{25} = \\frac{M \\times 1.08 \\times (1.08^{25} - 1)}{0.08}"
          }
        ]
      },
      {
        "id": "y12a-8d-q6e",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "e) What would Zoya's annual contribution have to be in order for her superannuation to have a total value of \\( \\$1500000 \\) at the end of the 25 years? Give your answer to the nearest dollar.",
        "a": "18998",
        "solutionSteps": [
          {
            "explanation": "Set the formula equal to 1500000",
            "workingOut": "1500000 = \\frac{M \\times 1.08 \\times (1.08^{25} - 1)}{0.08}"
          },
          {
            "explanation": "Solve for \\( M \\)",
            "workingOut": "M = \\frac{1500000 \\times 0.08}{1.08 \\times (1.08^{25} - 1)} = \\frac{120000}{1.08 \\times 5.848475}"
          },
          {
            "explanation": "Evaluate the expression",
            "workingOut": "M \\approx 18998.31 \\implies 18998"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q7",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "The company that Itsushi works for makes contributions to his superannuation scheme on 1st January each year. Any amount invested in this scheme earns interest at the rate of \\( 6.5\\% \\) pa.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q7a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Let \\( M \\) be the annual contribution. Show that the value of the investment at the end of the \\( n \\)th year is \\( A_n = \\frac{M \\times 1.065 \\times (1.065^n - 1)}{0.065} \\).",
        "a": "The series of contributions is paid at the start of each year. At the end of the \\( n \\)th year:\n\\( A_n = M(1.065) + M(1.065)^2 + \\dots + M(1.065)^n \\).\nThis is a GP with first term \\( a = 1.065M \\), ratio \\( r = 1.065 \\), and \\( n \\) terms.\nApplying sum formula: \\( A_n = \\frac{1.065M(1.065^n - 1)}{1.065 - 1} = \\frac{M \\times 1.065 \\times (1.065^n - 1)}{0.065} \\).",
        "solutionSteps": [
          {
            "explanation": "Form the GP series representing the future value of the annuity",
            "workingOut": "A_n = M(1.065) + \\dots + M(1.065)^n"
          },
          {
            "explanation": "Apply GP sum formula",
            "workingOut": "A_n = \\frac{M \\times 1.065 \\times (1.065^n - 1)}{0.065}"
          }
        ]
      },
      {
        "id": "y12a-8d-q7b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) Itsushi plans to have \\( \\$2000000 \\) in superannuation when he retires in 30 years' time. Show that the company must contribute \\( \\$21741.66 \\) each year, correct to the nearest cent.",
        "a": "Set \\( A_{30} = 2000000 \\) and \\( n = 30 \\):\n\\( 2000000 = \\frac{M \\times 1.065 \\times (1.065^{30} - 1)}{0.065} \\).\n\\( 2000000 = M \\times 91.989278 \\implies M = \\frac{2000000}{91.989278} = 21741.664 \\approx 21741.66 \\).",
        "solutionSteps": [
          {
            "explanation": "Substitute parameters into formula",
            "workingOut": "2000000 = \\frac{M \\times 1.065 \\times (1.065^{30} - 1)}{0.065}"
          },
          {
            "explanation": "Solve for \\( M \\)",
            "workingOut": "M = \\frac{2000000 \\times 0.065}{1.065 \\times (1.065^{30} - 1)}"
          },
          {
            "explanation": "Evaluate",
            "workingOut": "M \\approx 21741.664 \\implies \\$21741.66"
          }
        ]
      },
      {
        "id": "y12a-8d-q7ci",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) i) The first year that Itsushi's superannuation is worth more than \\( \\$1000000 \\), he decides to change jobs. Let this year be \\( n \\).\nShow that \\( n \\) is the smallest integer solution of \\( (1.065)^n > \\frac{1000000 \\times 0.065}{21741.66 \\times 1.065} + 1 \\).",
        "a": "Set the value of the fund greater than 1000000:\n\\( \\frac{21741.66 \\times 1.065 \\times (1.065^n - 1)}{0.065} > 1000000 \\).\nRearrange to isolate the term with n:\n\\( 1.065^n - 1 > \\frac{1000000 \\times 0.065}{21741.66 \\times 1.065} \\implies (1.065)^n > \\frac{1000000 \\times 0.065}{21741.66 \times 1.065} + 1 \\).",
        "solutionSteps": [
          {
            "explanation": "Write inequality",
            "workingOut": "\\frac{21741.66 \\times 1.065 \\times (1.065^n - 1)}{0.065} > 1000000"
          },
          {
            "explanation": "Multiply by 0.065 and divide by coefficients",
            "workingOut": "1.065^n - 1 > \\frac{1000000 \\times 0.065}{21741.66 \\times 1.065}"
          },
          {
            "explanation": "Add 1 to both sides",
            "workingOut": "(1.065)^n > \\frac{1000000 \\times 0.065}{21741.66 \\times 1.065} + 1"
          }
        ]
      },
      {
        "id": "y12a-8d-q7cii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) ii) Evaluate the right-hand side and hence show that \\( (1.065)^n > 3.8072 \\).",
        "a": "Evaluate the RHS expression:\n\\( \\frac{65000}{23154.8679} + 1 \\approx 2.80718 + 1 = 3.80718 \\approx 3.8072 \\).\nThus, \\( (1.065)^n > 3.8072 \\).",
        "solutionSteps": [
          {
            "explanation": "Compute value of fractional term",
            "workingOut": "\\frac{65000}{23154.8679} \\approx 2.80718"
          },
          {
            "explanation": "Add 1 and state result",
            "workingOut": "2.80718 + 1 = 3.8072 \\implies (1.065)^n > 3.8072"
          }
        ]
      },
      {
        "id": "y12a-8d-q7ciii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) iii) Use logarithms or trial-and-error to find the value of \\( n \\).",
        "a": "22",
        "solutionSteps": [
          {
            "explanation": "Take the logarithm of both sides of the inequality",
            "workingOut": "n \\log(1.065) > \\log(3.8072)"
          },
          {
            "explanation": "Solve for \\( n \\)",
            "workingOut": "n > \\frac{\\log(3.8072)}{\\log(1.065)} \\approx 21.23"
          },
          {
            "explanation": "Find smallest integer solution",
            "workingOut": "n = 22"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q8",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "A person invests \\( \\$12000 \\) each year in a superannuation fund. Compound interest is paid at \\( 8\\% \\) per annum on the investment. The first payment is made on 1st January 2023 and the last payment is made on 1st January 2042.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q8a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) How much did the person invest over the life of the fund?",
        "a": "240000",
        "solutionSteps": [
          {
            "explanation": "Count number of annual payments: from 2023 to 2042 inclusive is 20 payments.",
            "workingOut": "\\text{Payments} = 2042 - 2023 + 1 = 20"
          },
          {
            "explanation": "Multiply number of payments by the instalment size",
            "workingOut": "\\text{Total investment} = 20 \\times 12000 = 240000"
          }
        ]
      },
      {
        "id": "y12a-8d-q8b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) Calculate, correct to the nearest dollar, the amount to which the 2023 payment has grown by the beginning of 2043.",
        "a": "55931",
        "solutionSteps": [
          {
            "explanation": "The 2023 payment compounds for 20 years (from 1st Jan 2023 to 1st Jan 2043).",
            "workingOut": "P = 12000, \\quad R = 0.08, \\quad n = 20"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "A = 12000 \\times (1.08)^{20} = 55931.48"
          },
          {
            "explanation": "Round to nearest dollar",
            "workingOut": "A \\approx 55931"
          }
        ]
      },
      {
        "id": "y12a-8d-q8c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) Find the total value of the fund when it is paid out on 1st January 2043. Give your answer to the nearest dollar.",
        "a": "593075",
        "solutionSteps": [
          {
            "explanation": "The total value after 20 years is the sum of a GP with \\( a = 12000(1.08) = 12960 \\), \\( r = 1.08 \\), and \\( n = 20 \\).",
            "workingOut": "A_{20} = \\frac{12960 \\times (1.08^{20} - 1)}{1.08 - 1}"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "A_{20} = 162000 \\times (1.08^{20} - 1) \\approx 162000 \\times 3.660957 = 593075.05"
          },
          {
            "explanation": "Round to nearest dollar",
            "workingOut": "A_{20} \\approx 593075"
          }
        ]
      },
      {
        "id": "y12a-8d-q8di",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "d) i) The person wants to reach a total value of \\( \\$1200000 \\) in superannuation. Find a formula for \\( A_n \\), the value of the investment after \\( n \\) years in simplified factorised form. (Format: '162000*(1.08^n - 1)')",
        "a": "162000*(1.08^n - 1)",
        "solutionSteps": [
          {
            "explanation": "Set up sum formula for GP representing \\( n \\) annual instalments",
            "workingOut": "A_n = \\frac{12000 \\times 1.08 \\times (1.08^n - 1)}{0.08}"
          },
          {
            "explanation": "Simplify coefficient",
            "workingOut": "A_n = 162000 \\times (1.08^n - 1)"
          }
        ]
      },
      {
        "id": "y12a-8d-q8dii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "d) ii) Show that the target is reached when \\( 1.08^n > \\frac{200}{27} + 1 \\).",
        "a": "Set \\( A_n > 1200000 \\):\n\\( 162000(1.08^n - 1) > 1200000 \\).\nDivide by 162000:\n\\( 1.08^n - 1 > \\frac{1200000}{162000} = \\frac{1200}{162} = \\frac{200}{27} \\).\nAdd 1 to both sides:\n\\( 1.08^n > \\frac{200}{27} + 1 \\).",
        "solutionSteps": [
          {
            "explanation": "Write inequality",
            "workingOut": "162000(1.08^n - 1) > 1200000"
          },
          {
            "explanation": "Simplify fraction",
            "workingOut": "1.08^n - 1 > \\frac{200}{27}"
          },
          {
            "explanation": "Final form",
            "workingOut": "1.08^n > \\frac{200}{27} + 1"
          }
        ]
      },
      {
        "id": "y12a-8d-q8diii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "d) iii) At the end of which year will the superannuation be worth \\( \\$1200000 \\)?",
        "a": "28",
        "solutionSteps": [
          {
            "explanation": "Evaluate the inequality: \\( 1.08^n > \\frac{227}{27} \\approx 8.4074 \\)",
            "workingOut": "n \\log(1.08) > \\log(8.4074)"
          },
          {
            "explanation": "Solve for \\( n \\)",
            "workingOut": "n > \\frac{\\log(8.4074)}{\\log(1.08)} \\approx 27.66"
          },
          {
            "explanation": "Find smallest integer n",
            "workingOut": "n = 28"
          }
        ]
      },
      {
        "id": "y12a-8d-q8e",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "e) Suppose instead that the person wanted to achieve the same total investment of \\( \\$1200000 \\) after only 20 years. What annual contribution would produce this amount? Give your answer to the nearest dollar.",
        "a": "24280",
        "solutionSteps": [
          {
            "explanation": "Let \\( M \\) be the contribution. Set final value equal to 1200000 at \\( n = 20 \\):",
            "workingOut": "1200000 = \\frac{M \\times 1.08 \\times (1.08^{20} - 1)}{0.08}"
          },
          {
            "explanation": "Solve for \\( M \\)",
            "workingOut": "M = \\frac{1200000 \\times 0.08}{1.08 \\times (1.08^{20} - 1)} = \\frac{96000}{1.08 \\times 3.660957}"
          },
          {
            "explanation": "Evaluate value",
            "workingOut": "M \\approx 24280.22 \\implies 24280"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q9",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Each year on her birthday, Jane's parents put \\( \\$50 \\) into an investment account earning \\( 8.5\\% \\) per annum compound interest. The first deposit took place on the day of her birth. On her 21st birthday, Jane's parents gave her the account and \\( \\$50 \\) cash in hand.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q9a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) How much money had Jane's parents deposited in the account?",
        "a": "1050",
        "solutionSteps": [
          {
            "explanation": "Jane has birthdays from age 0 to age 20. This counts the number of deposits into the account.",
            "workingOut": "\\text{Deposits} = 21 \\text{ deposits (birth, 1st, ..., 20th birthday)}"
          },
          {
            "explanation": "Multiply by deposit amount",
            "workingOut": "\\text{Total account deposits} = 21 \\times 50 = 1050"
          }
        ]
      },
      {
        "id": "y12a-8d-q9b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) How much money did she receive from her parents on her 21st birthday in total (including the cash in hand)? Give your answer to the nearest cent.",
        "a": "2928.23",
        "solutionSteps": [
          {
            "explanation": "The 21 deposits compound to age 21. Deposit 1 (age 0) compounds for 21 years; deposit 21 (age 20) compounds for 1 year.",
            "workingOut": "S_{21} = \\frac{50 \\times 1.085 \\times (1.085^{21} - 1)}{1.085 - 1}"
          },
          {
            "explanation": "Calculate account value",
            "workingOut": "S_{21} = \\frac{54.25 \\times (1.085^{21} - 1)}{0.085} \\approx 2878.23"
          },
          {
            "explanation": "Add the \\( \\$50 \\) cash given in hand on the 21st birthday",
            "workingOut": "\\text{Total received} = S_{21} + 50 = 2878.23 + 50 = 2928.23"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q10",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "A man about to turn 25 is getting married. He has decided to pay \\( \\$6000 \\) each year on his birthday into a combination life insurance and superannuation scheme that pays \\( 7.5\\% \\) compound interest per annum. If he dies before age 65, his wife will inherit the value of the insurance to that point. If he lives to age 65, the insurance company will pay out the value of the policy in full. Answer these questions correct to the nearest dollar.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q10a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) The man is in a dangerous job. What will be the payout if he dies just before he turns 32?",
        "a": "56678",
        "solutionSteps": [
          {
            "explanation": "He makes contributions on birthdays 25, 26, 27, 28, 29, 30, 31 (7 contributions). They compound to age 32.",
            "workingOut": "n = 32 - 25 = 7 \\text{ years (first payment compounds for 7 years)}"
          },
          {
            "explanation": "Apply GP sum formula for 7 payments",
            "workingOut": "S_7 = \\frac{6000 \\times 1.075 \\times (1.075^7 - 1)}{0.075}"
          },
          {
            "explanation": "Evaluate sum and round to nearest dollar",
            "workingOut": "S_7 = 86000 \\times (1.075^7 - 1) \\approx 56678.18 \\implies 56678"
          }
        ]
      },
      {
        "id": "y12a-8d-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) The man's father died of a heart attack just before age 52. Suppose that the man also dies of a heart attack just before age 52. How much will his wife inherit?",
        "a": "518709",
        "solutionSteps": [
          {
            "explanation": "He makes contributions from age 25 to age 51 (27 contributions) compounding to age 52.",
            "workingOut": "n = 52 - 25 = 27 \\text{ years}"
          },
          {
            "explanation": "Apply GP sum formula for 27 payments",
            "workingOut": "S_{27} = \\frac{6000 \\times 1.075 \\times (1.075^{27} - 1)}{0.075}"
          },
          {
            "explanation": "Evaluate sum and round to nearest dollar",
            "workingOut": "S_{27} = 86000 \\times (1.075^{27} - 1) \\approx 86000 \\times 6.03149 = 518708.52 \\implies 518709"
          }
        ]
      },
      {
        "id": "y12a-8d-q10c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) What will the insurance company pay the man if he survives to his 65th birthday?",
        "a": "1465805",
        "solutionSteps": [
          {
            "explanation": "He makes contributions from age 25 to age 64 (40 contributions) compounding to age 65.",
            "workingOut": "n = 65 - 25 = 40 \\text{ years}"
          },
          {
            "explanation": "Apply GP sum formula for 40 payments",
            "workingOut": "S_{40} = \\frac{6000 \\times 1.075 \\times (1.075^{40} - 1)}{0.075}"
          },
          {
            "explanation": "Evaluate sum and round to nearest dollar",
            "workingOut": "S_{40} = 86000 \\times (1.075^{40} - 1) \\approx 86000 \\times 17.04424 = 1465804.70 \\implies 1465805"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "In 2021, the school fees at a private girls' school are \\( \\$24000 \\) per year. Each year the fees rise by \\( 3.5\\% \\) due to inflation.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Susan is sent to the school, starting in Year 7 in 2021. If she continues through to her HSC year, how much will her parents have paid the school over the six years? Give your answer to the nearest dollar.",
        "a": "157204",
        "solutionSteps": [
          {
            "explanation": "Fees are paid at the start of each year for 6 years: Year 7 fee = \\( 24000 \\), Year 8 fee = \\( 24000 \\times 1.035 \\), ..., Year 12 fee = \\( 24000 \\times 1.035^5 \\).",
            "workingOut": "\\text{Total} = 24000 + 24000(1.035) + \\dots + 24000(1.035)^5"
          },
          {
            "explanation": "This is a GP sum with \\( a = 24000 \\), \\( r = 1.035 \\), and \\( n = 6 \\).",
            "workingOut": "S_6 = \\frac{24000 \\times (1.035^6 - 1)}{1.035 - 1}"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "S_6 = \\frac{24000 \\times 0.229255}{0.035} \\approx 157203.66 \\implies 157204"
          }
        ]
      },
      {
        "id": "y12a-8d-q11b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) Susan's younger sister is starting in Year 1 in 2021. How much will they spend on her school fees over the next 12 years if she goes through to her HSC? Give your answer to the nearest dollar.",
        "a": "350447",
        "solutionSteps": [
          {
            "explanation": "The sister goes to school for 12 years. This is a GP sum with \\( a = 24000 \\), \\( r = 1.035 \\), and \\( n = 12 \\).",
            "workingOut": "S_{12} = \\frac{24000 \\times (1.035^{12} - 1)}{1.035 - 1}"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "S_{12} = \\frac{24000 \\times 0.511069}{0.035} \\approx 350447.09 \\implies 350447"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q12",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "A woman has just retired with a payment of \\( \\$800000 \\), having contributed for 20 years to a superannuation fund that pays compound interest at the rate of \\( 9.5\\% \\) per annum. What was the size of her annual premium, correct to the nearest dollar?",
    "a": "13499",
    "t": "Investing money by regular instalments",
    "solutionSteps": [
      {
        "explanation": "Let \\( M \\) be the annual premium. The future value after 20 years is \\( \\$800000 \\).",
        "workingOut": "800000 = \\frac{M \\times 1.095 \\times (1.095^{20} - 1)}{0.095}"
      },
      {
        "explanation": "Isolate \\( M \\)",
        "workingOut": "M = \\frac{800000 \\times 0.095}{1.095 \\times (1.095^{20} - 1)}"
      },
      {
        "explanation": "Evaluate the terms",
        "workingOut": "1.095^{20} - 1 \\approx 5.14165 \\implies M \\approx \\frac{76000}{1.095 \\times 5.14165}"
      },
      {
        "explanation": "Calculate the result and round to the nearest dollar",
        "workingOut": "M \\approx 13498.96 \\implies 13499"
      }
    ]
  },
  {
    "id": "y12a-8d-q13",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "At age 25, a woman takes out a life insurance policy under which she agrees to pay premiums of \\( \\$800 \\) per year until she turns 65, when she is to be paid a lump sum. The insurance company invests the money and gives a return of \\( 8\\% \\) per annum, compounded annually. If she dies before age 65, the company pays out the current value of the fund plus \\( 25\\% \\) of the difference between the current value and what the value would have been had she lived until 65.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q13a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) What is the value of the payout, correct to the nearest dollar, at age 65?",
        "a": "223825",
        "solutionSteps": [
          {
            "explanation": "She makes contributions from age 25 to 64 inclusive (40 payments). Find the future value of the fund at age 65.",
            "workingOut": "S_{40} = \\frac{800 \\times 1.08 \\times (1.08^{40} - 1)}{0.08}"
          },
          {
            "explanation": "Calculate the sum",
            "workingOut": "S_{40} = 10800 \\times (1.08^{40} - 1) \\approx 10800 \\times 20.72452 = 223824.83"
          },
          {
            "explanation": "Round to the nearest dollar",
            "workingOut": "S_{40} \\approx 223825"
          }
        ]
      },
      {
        "id": "y12a-8d-q13bi",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) i) Unfortunately she dies at age 50, just before her 26th premium is due. What is the current value of the life insurance, correct to the nearest dollar?",
        "a": "63164",
        "solutionSteps": [
          {
            "explanation": "She has made 25 payments (ages 25 to 49) which have compounded for 25 years to age 50.",
            "workingOut": "S_{25} = \\frac{800 \\times 1.08 \\times (1.08^{25} - 1)}{0.08}"
          },
          {
            "explanation": "Calculate value",
            "workingOut": "S_{25} = 10800 \\times (1.08^{25} - 1) \\approx 10800 \\times 5.848475 = 63163.53"
          },
          {
            "explanation": "Round to the nearest dollar",
            "workingOut": "S_{25} \\approx 63164"
          }
        ]
      },
      {
        "id": "y12a-8d-q13bii",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) ii) How much does the life insurance company pay her family, correct to the nearest dollar?",
        "a": "103329",
        "solutionSteps": [
          {
            "explanation": "The company pays the current value plus 25% of the difference between the target value at age 65 and the current value.",
            "workingOut": "\\text{Payout} = S_{25} + 0.25 \\times (S_{40} - S_{25})"
          },
          {
            "explanation": "Substitute the rounded values",
            "workingOut": "\\text{Payout} = 63164 + 0.25 \\times (223825 - 63164)"
          },
          {
            "explanation": "Calculate and round to the nearest dollar",
            "workingOut": "\\text{Payout} = 63164 + 0.25 \\times 160661 = 63164 + 40165.25 = 103329.25 \\approx 103329"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8d-q14",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "A person pays \\( \\$3000 \\) into an investment fund every year, and it earns compound interest at a rate of \\( 7\\% \\) pa.",
    "t": "Investing money by regular instalments",
    "subQuestions": [
      {
        "id": "y12a-8d-q14a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) How much is the fund worth at the end of 10 years? Give your answer to the nearest dollar.",
        "a": "44351",
        "solutionSteps": [
          {
            "explanation": "Accumulate 10 annual payments of 3000 at 7% simple-compound structure (first term is \\( 3000 \\times 1.07 = 3210 \\)).",
            "workingOut": "S_{10} = \\frac{3210 \\times (1.07^{10} - 1)}{0.07}"
          },
          {
            "explanation": "Evaluate sum",
            "workingOut": "S_{10} = 45857.14 \\times (1.07^{10} - 1) \\approx 45857.14 \\times 0.967151 = 44350.86"
          },
          {
            "explanation": "Round to the nearest dollar",
            "workingOut": "S_{10} \\approx 44351"
          }
        ]
      },
      {
        "id": "y12a-8d-q14b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) In which year will the fund reach \\( \\$100000 \\)?",
        "a": "18",
        "solutionSteps": [
          {
            "explanation": "Set up inequality for fund reaching 100000:",
            "workingOut": "\\frac{3210 \\times (1.07^n - 1)}{0.07} \\ge 100000"
          },
          {
            "explanation": "Solve for \\( 1.07^n \\)",
            "workingOut": "1.07^n - 1 \\ge \\frac{7000}{3210} \\approx 2.180685 \\implies 1.07^n \\ge 3.180685"
          },
          {
            "explanation": "Solve using logarithms",
            "workingOut": "n \\ge \\frac{\\log(3.180685)}{\\log(1.07)} \\approx 17.10"
          },
          {
            "explanation": "Find smallest integer n",
            "workingOut": "n = 18"
          }
        ]
      }
    ]
  }
];
