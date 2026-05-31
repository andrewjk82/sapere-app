export const Y12A_CH8F_QUESTIONS = [
  {
    "id": "y12a-8f-q1",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Consider the series \\( 25 + 38 + 51 + \\dots + 272 \\).",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q1a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Show that it is an AP and write down the first term and the common difference.",
        "a": "The difference between consecutive terms is constant: \\( 38 - 25 = 13 \\) and \\( 51 - 38 = 13 \\). Thus, it is an arithmetic progression with first term \\( a = 25 \\) and common difference \\( d = 13 \\).",
        "solutionSteps": [
          {
            "explanation": "Check differences between successive terms to show they are constant.",
            "workingOut": "T_2 - T_1 = 38 - 25 = 13, \\quad T_3 - T_2 = 51 - 38 = 13"
          },
          {
            "explanation": "Write down the first term and common difference.",
            "workingOut": "a = 25, \\quad d = 13"
          }
        ]
      },
      {
        "id": "y12a-8f-q1b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) How many terms are there in this series?",
        "a": "20",
        "solutionSteps": [
          {
            "explanation": "Use the arithmetic term formula: \\( T_n = a + (n-1)d \\) with \\( T_n = 272 \\).",
            "workingOut": "272 = 25 + 13(n-1)"
          },
          {
            "explanation": "Solve for \\( n \\).",
            "workingOut": "13(n-1) = 247 \\implies n-1 = 19 \\implies n = 20"
          }
        ]
      },
      {
        "id": "y12a-8f-q1c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) Find the sum of the series.",
        "a": "2970",
        "solutionSteps": [
          {
            "explanation": "Use the arithmetic sum formula: \\( S_n = \\frac{n}{2}(a + L) \\) with \\( n = 20 \\), \\( a = 25 \\), and \\( L = 272 \\).",
            "workingOut": "S_{20} = \\frac{20}{2}(25 + 272)"
          },
          {
            "explanation": "Evaluate the sum.",
            "workingOut": "S_{20} = 10 \\times 297 = 2970"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q2",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Consider the series \\( 16 + 8 + 4 + \\dots \\).",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q2a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Show that it is a geometric series and find the common ratio.",
        "a": "The ratio between consecutive terms is constant: \\( \\frac{8}{16} = 0.5 \\) and \\( \\frac{4}{8} = 0.5 \\). Thus, it is a geometric series with common ratio \\( r = 0.5 \\).",
        "solutionSteps": [
          {
            "explanation": "Find the ratio between successive terms.",
            "workingOut": "\\frac{T_2}{T_1} = \\frac{8}{16} = 0.5, \\quad \\frac{T_3}{T_2} = \\frac{4}{8} = 0.5"
          }
        ]
      },
      {
        "id": "y12a-8f-q2b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) Explain why this geometric series has a limiting sum.",
        "a": "A geometric series has a limiting sum if and only if the absolute value of the common ratio is strictly less than 1, i.e., \\( |r| < 1 \\). Here, \\( |0.5| = 0.5 < 1 \\), so a limiting sum exists.",
        "solutionSteps": [
          {
            "explanation": "Check if the ratio satisfies the convergence condition.",
            "workingOut": "|r| = 0.5 < 1"
          }
        ]
      },
      {
        "id": "y12a-8f-q2ci",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) i) Find the limiting sum of the series.",
        "a": "32",
        "solutionSteps": [
          {
            "explanation": "Use the limiting sum formula \\( S_{\\infty} = \\frac{a}{1-r} \\) with \\( a = 16 \\) and \\( r = 0.5 \\).",
            "workingOut": "S_{\\infty} = \\frac{16}{1 - 0.5}"
          },
          {
            "explanation": "Evaluate.",
            "workingOut": "S_{\\infty} = \\frac{16}{0.5} = 32"
          }
        ]
      },
      {
        "id": "y12a-8f-q2cii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) ii) Find the sum of the first 10 terms of the series, correct to three decimal places.",
        "a": "31.969",
        "solutionSteps": [
          {
            "explanation": "Use the geometric sum formula \\( S_n = \\frac{a(1-r^n)}{1-r} \\) with \\( n = 10 \\).",
            "workingOut": "S_{10} = \\frac{16 \\times (1 - 0.5^{10})}{1 - 0.5}"
          },
          {
            "explanation": "Evaluate the formula.",
            "workingOut": "S_{10} = 32 \\times \\left(1 - \\frac{1}{1024}\\right) = 32 \\times \\frac{1023}{1024} = 31.96875"
          },
          {
            "explanation": "Round to three decimal places.",
            "workingOut": "S_{10} \\approx 31.969"
          }
        ]
      },
      {
        "id": "y12a-8f-q2ciii",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) iii) Show that the limiting sum and the sum of the first 10 terms are approximately equal, correct to the first three significant figures.",
        "a": "Rounding both results to three significant figures yields: \\( S_{\\infty} \\approx 32.0 \\) and \\( S_{10} \\approx 32.0 \\). Thus, they are approximately equal to three significant figures.",
        "solutionSteps": [
          {
            "explanation": "Round the limiting sum to three significant figures.",
            "workingOut": "S_{\\infty} = 32 \\approx 32.0"
          },
          {
            "explanation": "Round the 10-term sum to three significant figures.",
            "workingOut": "S_{10} = 31.96875 \\approx 32.0"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q3",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Find the smallest integer \\( n \\) such that:",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q3a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) \\( 3^n > 5000 \\)",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Use logarithms to solve the inequality.",
            "workingOut": "n \\log 3 > \\log 5000"
          },
          {
            "explanation": "Calculate the division limit.",
            "workingOut": "n > \\frac{\\log 5000}{\\log 3} \\approx \\frac{8.51719}{1.09861} \\approx 7.75"
          },
          {
            "explanation": "Find the smallest integer.",
            "workingOut": "n = 8"
          }
        ]
      },
      {
        "id": "y12a-8f-q3b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) \\( (1.06)^n > 1000 \\)",
        "a": "119",
        "solutionSteps": [
          {
            "explanation": "Use logarithms to solve the inequality.",
            "workingOut": "n \\log 1.06 > \\log 1000"
          },
          {
            "explanation": "Calculate the division limit.",
            "workingOut": "n > \\frac{\\log 1000}{\\log 1.06} \\approx \\frac{6.90776}{0.05827} \\approx 118.54"
          },
          {
            "explanation": "Find the smallest integer.",
            "workingOut": "n = 119"
          }
        ]
      },
      {
        "id": "y12a-8f-q3c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "c) \\( (0.95)^n < 0.05 \\)",
        "a": "59",
        "solutionSteps": [
          {
            "explanation": "Use logarithms to solve the inequality. Remember to reverse the sign when dividing by a negative log.",
            "workingOut": "n \\log 0.95 < \\log 0.05"
          },
          {
            "explanation": "Calculate the division limit.",
            "workingOut": "n > \\frac{\\log 0.05}{\\log 0.95} \\approx \\frac{-2.99573}{-0.05129} \\approx 58.41"
          },
          {
            "explanation": "Find the smallest integer.",
            "workingOut": "n = 59"
          }
        ]
      },
      {
        "id": "y12a-8f-q3d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "d) \\( (0.4)^n < 0.001 \\)",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Use logarithms to solve the inequality.",
            "workingOut": "n \\log 0.4 < \\log 0.001"
          },
          {
            "explanation": "Calculate the division limit.",
            "workingOut": "n > \\frac{\\log 0.001}{\\log 0.4} \\approx \\frac{-6.90776}{-0.91629} \\approx 7.54"
          },
          {
            "explanation": "Find the smallest integer.",
            "workingOut": "n = 8"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q4",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "On a certain day at the start of a drought, 800 litres of water flowed from the Neverfail Well. The next day, only 760 litres flowed from the well, and each day, the volume of water flowing from the well was \\( \\frac{19}{20} \\) of the previous day's volume. Find the total volume of water in litres that would have flowed from the well if the drought had continued indefinitely.",
    "a": "16000",
    "t": "Chapter review exercise",
    "solutionSteps": [
      {
        "explanation": "Identify the parameters of the infinite geometric series representing the total volume.",
        "workingOut": "a = 800, \\quad r = \\frac{19}{20}"
      },
      {
        "explanation": "Use the infinite GP sum formula: \\( S_{\\infty} = \\frac{a}{1-r} \\).",
        "workingOut": "S_{\\infty} = \\frac{800}{1 - 19/20}"
      },
      {
        "explanation": "Evaluate the sum.",
        "workingOut": "S_{\\infty} = \\frac{800}{1/20} = 16000"
      }
    ]
  },
  {
    "id": "y12a-8f-q5",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "The profits of a company are growing at 12% per year. If this trend continues, how many full years will it be before the profit has increased by over 1500%? (Note: an increase of 1500% means profit is more than 16 times the original amount.)",
    "a": "25",
    "t": "Chapter review exercise",
    "solutionSteps": [
      {
        "explanation": "Set up the growth inequality where the growth factor is 1.12.",
        "workingOut": "(1.12)^n > 16"
      },
      {
        "explanation": "Take logarithms of both sides to solve for \\( n \\).",
        "workingOut": "n \\log 1.12 > \\log 16"
      },
      {
        "explanation": "Evaluate the division.",
        "workingOut": "n > \\frac{\\log 16}{\\log 1.12} \\approx \\frac{2.77259}{0.11333} \\approx 24.46"
      },
      {
        "explanation": "Identify the smallest full year value.",
        "workingOut": "n = 25"
      }
    ]
  },
  {
    "id": "y12a-8f-q6",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "A chef receives an annual salary of \\( \\$45000 \\), with 5% increments each year.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q6a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Show that her annual salaries form a GP and find the common ratio.",
        "a": "The salary in any year is \\( 105\\% \\) of the previous year's salary, so the ratio between consecutive salaries is constant at \\( 1.05 \\). Thus, they form a GP with common ratio \\( r = 1.05 \\).",
        "solutionSteps": [
          {
            "explanation": "State the multiplier for consecutive years.",
            "workingOut": "T_{k+1} = T_k \\times 1.05 \\implies r = 1.05"
          }
        ]
      },
      {
        "id": "y12a-8f-q6bi",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) i) Find her annual salary in the 10th year, correct to the nearest dollar.",
        "a": "69810",
        "solutionSteps": [
          {
            "explanation": "Use the GP term formula: \\( T_n = a \\times r^{n-1} \\) with \\( a = 45000 \\), \\( r = 1.05 \\), and \\( n = 10 \\).",
            "workingOut": "T_{10} = 45000 \\times (1.05)^9"
          },
          {
            "explanation": "Evaluate and round to the nearest dollar.",
            "workingOut": "T_{10} \\approx 45000 \\times 1.551328 \\approx 69809.77 \\implies 69810"
          }
        ]
      },
      {
        "id": "y12a-8f-q6bii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) ii) Find her total earnings over the 10 years, correct to the nearest dollar.",
        "a": "566005",
        "solutionSteps": [
          {
            "explanation": "Use the GP sum formula: \\( S_n = \\frac{a(r^n - 1)}{r - 1} \\) with \\( n = 10 \\).",
            "workingOut": "S_{10} = \\frac{45000 \\times (1.05^{10} - 1)}{1.05 - 1}"
          },
          {
            "explanation": "Evaluate the formula.",
            "workingOut": "S_{10} = \\frac{45000 \\times 0.6288946}{0.05} = 900000 \\times 0.6288946"
          },
          {
            "explanation": "Evaluate and round to the nearest dollar.",
            "workingOut": "S_{10} \\approx 566005.14 \\implies 566005"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q7",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Leo's salary is \\( \\$52000 \\) at the beginning of 2012, and it will increase by \\( \\$5000 \\) each year.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q7a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "a) Find a formula for \\( T_n \\), his salary in the \\( n \\)th year. (Note: use n as the variable, write without spaces, e.g. 47000+5000*n or 47000+5000n)",
        "a": "47000+5000n",
        "solutionSteps": [
          {
            "explanation": "This is an AP with \\( a = 52000 \\) and \\( d = 5000 \\). Apply term formula: \\( T_n = a + (n-1)d \\).",
            "workingOut": "T_n = 52000 + 5000(n-1)"
          },
          {
            "explanation": "Simplify the expression.",
            "workingOut": "T_n = 52000 + 5000n - 5000 = 47000 + 5000n"
          }
        ]
      },
      {
        "id": "y12a-8f-q7b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 240,
        "question": "b) In which year will Leo's salary first be at least twice what it was in 2012?",
        "a": "2023",
        "solutionSteps": [
          {
            "explanation": "Determine the target salary.",
            "workingOut": "\\text{Target} = 2 \\times 52000 = 104000"
          },
          {
            "explanation": "Set up the inequality using the term formula.",
            "workingOut": "47000 + 5000n \\geq 104000"
          },
          {
            "explanation": "Solve for \\( n \\).",
            "workingOut": "5000n \\geq 57000 \\implies n \\geq 11.4 \\implies n = 12"
          },
          {
            "explanation": "Find the year corresponding to \\( n = 12 \\). Note 2012 corresponds to \\( n = 1 \\).",
            "workingOut": "\\text{Year} = 2012 + 11 = 2023"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 240,
    "question": "Ms. Chen begins her new job in 2015 on a salary of \\( \\$60000 \\), and it is increased by 4% each year. In which year will her salary first be at least twice her original salary?",
    "a": "2033",
    "t": "Chapter review exercise",
    "solutionSteps": [
      {
        "explanation": "The salary grows by a factor of 1.04 each year. Set up the inequality.",
        "workingOut": "60000 \\times (1.04)^{n-1} \\geq 120000"
      },
      {
        "explanation": "Simplify and solve for \\( n-1 \\) using logarithms.",
        "workingOut": "(1.04)^{n-1} \\geq 2 \\implies (n-1) \\log 1.04 \\geq \\log 2"
      },
      {
        "explanation": "Evaluate the division.",
        "workingOut": "n-1 \\geq \\frac{\\log 2}{\\log 1.04} \\approx 17.67 \\implies n-1 = 18 \\implies n = 19"
      },
      {
        "explanation": "Find the year corresponding to \\( n = 19 \\). Note 2015 corresponds to \\( n = 1 \\).",
        "workingOut": "\\text{Year} = 2015 + 18 = 2033"
      }
    ]
  },
  {
    "id": "y12a-8f-q9",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "An investment of \\( \\$15000 \\) earns 4.8% per annum, compounded monthly, for five years.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q9a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) Find the final value of the investment. Give your answer correct to the nearest cent.",
        "a": "19059.62",
        "solutionSteps": [
          {
            "explanation": "Find the monthly interest rate: \\( 4.8\\%/12 = 0.4\\% = 0.004 \\). Find number of periods: \\( 5 \\times 12 = 60 \\) months.",
            "workingOut": "R = 0.004, \\quad n = 60"
          },
          {
            "explanation": "Use compound interest formula: \\( A = P(1+R)^n \\).",
            "workingOut": "A = 15000 \\times (1.004)^{60}"
          },
          {
            "explanation": "Evaluate and round to the nearest cent.",
            "workingOut": "A \\approx 15000 \\times 1.270641 \\approx 19059.62"
          }
        ]
      },
      {
        "id": "y12a-8f-q9b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) How much interest was earned over the five years? Give your answer correct to the nearest cent.",
        "a": "4059.62",
        "solutionSteps": [
          {
            "explanation": "Subtract the initial principal from the final value.",
            "workingOut": "\\text{Interest} = 19059.62 - 15000"
          },
          {
            "explanation": "Evaluate.",
            "workingOut": "\\text{Interest} = 4059.62"
          }
        ]
      },
      {
        "id": "y12a-8f-q9c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "c) What annual rate of simple interest would yield the same amount of interest? Give your answer as a percentage correct to three significant figures (e.g. 5.41%).",
        "a": "5.41%",
        "solutionSteps": [
          {
            "explanation": "Use simple interest formula: \\( I = P \\times R \\times T \\), where \\( T = 5 \\) years.",
            "workingOut": "4059.62 = 15000 \\times R \\times 5"
          },
          {
            "explanation": "Solve for \\( R \\).",
            "workingOut": "R = \\frac{4059.62}{75000} \\approx 0.054128"
          },
          {
            "explanation": "Convert to percentage and round to three significant figures.",
            "workingOut": "R \\approx 5.41\\%"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q10",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "A car depreciates at 10% per annum. Ryan has just bought one that is four years old at its depreciated value of \\( \\$30000 \\).",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q10a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) What will the car's depreciated value be in another four years? Give your answer correct to the nearest dollar.",
        "a": "19683",
        "solutionSteps": [
          {
            "explanation": "The current value compounds depreciation for another 4 years at 10%.",
            "workingOut": "A = 30000 \\times (1 - 0.10)^4"
          },
          {
            "explanation": "Evaluate the formula.",
            "workingOut": "A = 30000 \\times (0.9)^4 = 30000 \\times 0.6561 = 19683"
          }
        ]
      },
      {
        "id": "y12a-8f-q10b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) Find the average loss in value per year over the next four years. Give your answer correct to the nearest dollar.",
        "a": "2579",
        "solutionSteps": [
          {
            "explanation": "Find the total loss over the 4 years.",
            "workingOut": "\\text{Total Loss} = 30000 - 19683 = 10317"
          },
          {
            "explanation": "Divide the total loss by 4 to get the annual average.",
            "workingOut": "\\text{Average Loss} = \\frac{10317}{4} = 2579.25"
          },
          {
            "explanation": "Round to the nearest dollar.",
            "workingOut": "\\text{Average Loss} \\approx 2579"
          }
        ]
      },
      {
        "id": "y12a-8f-q10c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "c) What was the new price of the car? Give your answer correct to the nearest dollar.",
        "a": "45725",
        "solutionSteps": [
          {
            "explanation": "Set the initial value \\( P_0 \\) such that it depreciates to \\$30000 in 4 years.",
            "workingOut": "P_0 \\times (0.9)^4 = 30000"
          },
          {
            "explanation": "Solve for \\( P_0 \\).",
            "workingOut": "P_0 = \\frac{30000}{0.6561} \\approx 45724.74"
          },
          {
            "explanation": "Round to the nearest dollar.",
            "workingOut": "P_0 \\approx 45725"
          }
        ]
      },
      {
        "id": "y12a-8f-q10d",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "d) Find the average loss in value per year over the first four years from when it was new. Give your answer correct to the nearest dollar.",
        "a": "3931",
        "solutionSteps": [
          {
            "explanation": "Find the total loss from new price to 4-year-old price.",
            "workingOut": "\\text{Total Loss} = 45724.74 - 30000 = 15724.74"
          },
          {
            "explanation": "Divide by 4 to find the annual average.",
            "workingOut": "\\text{Average Loss} = \\frac{15724.74}{4} = 3931.185"
          },
          {
            "explanation": "Round to the nearest dollar.",
            "workingOut": "\\text{Average Loss} \\approx 3931"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q11",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Elena has entered a superannuation scheme into which she makes annual contributions of \\( \\$6000 \\). The investment earns interest of 6% per annum, compounded annually, with contributions made on 1st October each year.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q11a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) Show that after 15 years of contributions, the value of Elena's investment is given by \\( A_{15} = \\frac{6000 \\times 1.06 \\times (1.06^{15} - 1)}{0.06} \\).",
        "a": "Elena makes payments at the beginning of each year. The 1st payment compounds for 15 years, and the 15th payment compounds for 1 year. The total value is: \\( A_{15} = 6000(1.06) + 6000(1.06)^2 + \\dots + 6000(1.06)^{15} \\). This is a GP with \\( a = 6000 \\times 1.06 \\), \\( r = 1.06 \\), and \\( n = 15 \\). Applying GP sum formula: \\( A_{15} = \\frac{6000 \\times 1.06 \\times (1.06^{15} - 1)}{0.06} \\).",
        "solutionSteps": [
          {
            "explanation": "Write the future value of payments as a geometric series.",
            "workingOut": "A_{15} = 6000(1.06)^1 + 6000(1.06)^2 + \\dots + 6000(1.06)^{15}"
          },
          {
            "explanation": "Apply the GP sum formula with \\( a = 6360 \\) and \\( r = 1.06 \\).",
            "workingOut": "A_{15} = \\frac{6360 \\times (1.06^{15} - 1)}{0.06} = \\frac{6000 \\times 1.06 \\times (1.06^{15} - 1)}{0.06}"
          }
        ]
      },
      {
        "id": "y12a-8f-q11b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) Evaluate \\( A_{15} \\) correct to the nearest dollar.",
        "a": "148035",
        "solutionSteps": [
          {
            "explanation": "Evaluate the formula using \\( 1.06^{15} \\approx 2.396558 \\).",
            "workingOut": "A_{15} = 106000 \\times (2.396558 - 1)"
          },
          {
            "explanation": "Multiply and round to the nearest dollar.",
            "workingOut": "A_{15} \\approx 106000 \\times 1.396558 = 148035.148 \\implies 148035"
          }
        ]
      },
      {
        "id": "y12a-8f-q11c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "c) By how much does \\( A_{15} \\) exceed the total contributions Elena made over these years? Give your answer correct to the nearest dollar.",
        "a": "58035",
        "solutionSteps": [
          {
            "explanation": "Calculate total contributions over 15 years.",
            "workingOut": "\\text{Total contributions} = 15 \\times 6000 = 90000"
          },
          {
            "explanation": "Subtract contributions from the final value.",
            "workingOut": "\\text{Excess} = 148035 - 90000 = 58035"
          }
        ]
      },
      {
        "id": "y12a-8f-q11d",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "d) Show that after 22 years of contributions, the value \\( A_{22} \\) of the superannuation is more than double Elena's contributions over the 22 years.",
        "a": "Elena's total contributions over 22 years is \\( 22 \\times 6000 = \\$132000 \\). Double is \\( \\$264000 \\). The value is \\( A_{22} = 106000 \\times (1.06^{22} - 1) \\approx 106000 \\times 2.6035 = \\$275976 \\). Since \\( 275976 > 264000 \\), the value is indeed more than double the contributions.",
        "solutionSteps": [
          {
            "explanation": "Calculate double the contributions for 22 years.",
            "workingOut": "\\text{Double contributions} = 2 \\times (22 \\times 6000) = 264000"
          },
          {
            "explanation": "Evaluate \\( A_{22} \\) using \\( 1.06^{22} \\approx 3.603537 \\).",
            "workingOut": "A_{22} = 106000 \\times (3.603537 - 1) \\approx 275975"
          },
          {
            "explanation": "Verify inequality.",
            "workingOut": "275975 > 264000"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q12",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Omar wishes to retire with superannuation worth \\( \\$600000 \\) in 20 years' time. On 1st August each year he pays a contribution to a scheme that gives interest of 6% per annum, compounded annually.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q12a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) Let \\( M \\) be the annual contribution. Show that the value of the investment at the end of the \\( n \\)th year is \\( A_n = \\frac{M \\times 1.06 \\times (1.06^n - 1)}{0.06} \\).",
        "a": "Each contribution of \\( M \\) is made at the start of the year. After \\( n \\) years: \\( A_n = M(1.06) + M(1.06)^2 + \\dots + M(1.06)^n \\). This forms a GP with \\( a = 1.06 M \\), \\( r = 1.06 \\), and \\( n \\) terms. Sum: \\( A_n = \\frac{1.06M(1.06^n - 1)}{1.06 - 1} = \\frac{M \\times 1.06 \\times (1.06^n - 1)}{0.06} \\).",
        "solutionSteps": [
          {
            "explanation": "Write the sum as a GP series.",
            "workingOut": "A_n = M(1.06)^1 + \\dots + M(1.06)^n"
          },
          {
            "explanation": "Use GP sum formula.",
            "workingOut": "A_n = \\frac{1.06M(1.06^n - 1)}{0.06}"
          }
        ]
      },
      {
        "id": "y12a-8f-q12b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) Find the amount of each contribution \\( M \\), correct to the nearest cent.",
        "a": "15387.48",
        "solutionSteps": [
          {
            "explanation": "Set the balance \\( A_{20} = 600000 \\) and solve for \\( M \\).",
            "workingOut": "600000 = \\frac{M \\times 1.06 \\times (1.06^{20} - 1)}{0.06}"
          },
          {
            "explanation": "Substitute \\( 1.06^{20} \\approx 3.207135 \\).",
            "workingOut": "M = \\frac{600000 \\times 0.06}{1.06 \\times 2.207135}"
          },
          {
            "explanation": "Evaluate and round to the nearest cent.",
            "workingOut": "M = \\frac{36000}{2.339563} \\approx 15387.48"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q13",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Mateo takes out a mortgage on a flat for \\( \\$170000 \\), at an interest rate of 6% per annum, compounded monthly. He agrees to pay the bank \\( \\$1450 \\) each month for 15 years.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q13a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) Let \\( A_{180} \\) be the balance of the loan after 15 years. Find a series expression for \\( A_{180} \\). (Format: '170000*1.005^180 - 1450(1 + ... + 1.005^179)')",
        "a": "170000*1.005^180 - 1450(1 + ... + 1.005^179)",
        "solutionSteps": [
          {
            "explanation": "Find monthly interest rate: \\( 6\\%/12 = 0.5\\% = 0.005 \\). Term is 180 months.",
            "workingOut": "r = 0.005, \\quad n = 180"
          },
          {
            "explanation": "Form the balance expression.",
            "workingOut": "A_{180} = 170000 \\times 1.005^{180} - 1450(1 + 1.005 + \\dots + 1.005^{179})"
          }
        ]
      },
      {
        "id": "y12a-8f-q13b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) Show that \\( A_{180} = 170000 \\times 1.005^{180} - \\frac{1450(1.005^{180} - 1)}{0.005} \\).",
        "a": "The sum of payments is a GP sum with \\( a = 1450 \\), \\( r = 1.005 \\), and \\( n = 180 \\). Sum is \\( \\frac{1450(1.005^{180} - 1)}{0.005} \\). Subtracting from the compounded initial loan yields: \\( A_{180} = 170000 \\times 1.005^{180} - \\frac{1450(1.005^{180} - 1)}{0.005} \\).",
        "solutionSteps": [
          {
            "explanation": "Apply the GP sum formula on the payment series.",
            "workingOut": "S_{180} = 1450 \\times \\frac{1.005^{180} - 1}{0.005}"
          },
          {
            "explanation": "Combine with the compounded loan principal.",
            "workingOut": "A_{180} = 170000 \\times 1.005^{180} - \\frac{1450(1.005^{180} - 1)}{0.005}"
          }
        ]
      },
      {
        "id": "y12a-8f-q13c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "c) Evaluate \\( A_{180} \\) correct to the nearest cent, and hence show that the loan is actually paid out in less than 15 years.",
        "a": "\\( A_{180} = 170000 \\times 1.005^{180} - 290000 \\times (1.005^{180} - 1) \\approx 417195.98 - 421687.26 = -\\$4491.28 \\). Since the final balance is negative, the loan is paid out in less than 15 years.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( 1.005^{180} \\approx 2.454094 \\).",
            "workingOut": "A_{180} = 170000 \\times 2.454094 - 290000 \\times (2.454094 - 1)"
          },
          {
            "explanation": "Evaluate the terms.",
            "workingOut": "A_{180} \\approx 417195.98 - 421687.26 = -4491.28"
          }
        ]
      },
      {
        "id": "y12a-8f-q13d",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "d) What monthly payment, correct to the nearest cent, is needed in order to pay off the loan in exactly 15 years?",
        "a": "1434.56",
        "solutionSteps": [
          {
            "explanation": "Set the balance formula equal to 0 and solve for \\( M \\).",
            "workingOut": "170000 \\times 1.005^{180} - M \\times \\frac{1.005^{180} - 1}{0.005} = 0"
          },
          {
            "explanation": "Isolate \\( M \\). Use \\( 1.005^{180} \\approx 2.454094 \\).",
            "workingOut": "M = \\frac{170000 \\times 0.005 \\times 1.005^{180}}{1.005^{180} - 1} = \\frac{850 \\times 2.454094}{1.454094}"
          },
          {
            "explanation": "Evaluate and round to the nearest cent.",
            "workingOut": "M \\approx 1434.56"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-8f-q14",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 360,
    "question": "Gabrielle borrowed \\( \\$1.5 \\) million from the bank to buy some machinery for her farm. She agreed to pay the bank \\( \\$16500 \\) per month. The interest rate is 4.8% per annum, compounded monthly, and the loan is to be repaid in 10 years.",
    "t": "Chapter review exercise",
    "subQuestions": [
      {
        "id": "y12a-8f-q14a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "a) Let \\( A_n \\) be the balance of the loan after \\( n \\) months. Find a series expression for \\( A_n \\). (Format: '1500000*1.004^n - 16500(1 + ... + 1.004^(n-1))')",
        "a": "1500000*1.004^n - 16500(1 + ... + 1.004^(n-1))",
        "solutionSteps": [
          {
            "explanation": "Identify monthly interest rate: \\( 4.8\\%/12 = 0.4\\% = 0.004 \\).",
            "workingOut": "r = 0.004"
          },
          {
            "explanation": "Write the balance expression after \\( n \\) months.",
            "workingOut": "A_n = 1500000 \\times 1.004^n - 16500(1 + 1.004 + \\dots + 1.004^{n-1})"
          }
        ]
      },
      {
        "id": "y12a-8f-q14b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "b) Hence show that \\( A_n = 1500000 \\times 1.004^n - \\frac{16500(1.004^n - 1)}{0.004} \\).",
        "a": "The payment terms form a GP with \\( a = 16500 \\), \\( r = 1.004 \\), and \\( n \\) terms. Sum of the GP: \\( S_n = \\frac{16500(1.004^n - 1)}{1.004 - 1} = \\frac{16500(1.004^n - 1)}{0.004} \\). Substituting this into the balance equation gives: \\( A_n = 1500000 \\times 1.004^n - \\frac{16500(1.004^n - 1)}{0.004} \\).",
        "solutionSteps": [
          {
            "explanation": "Apply the GP sum formula.",
            "workingOut": "S_n = 16500 \\times \\frac{1.004^n - 1}{0.004}"
          },
          {
            "explanation": "Form the simplified balance expression.",
            "workingOut": "A_n = 1500000 \\times 1.004^n - \\frac{16500(1.004^n - 1)}{0.004}"
          }
        ]
      },
      {
        "id": "y12a-8f-q14c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "c) Find the amount owing on the loan at the end of the fifth year (60 months), and state whether this is more or less than half the amount borrowed. (Format: '$789,567 owing, more')",
        "a": "$789,567 owing, more",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( n = 60 \\) and \\( 1.004^{60} \\approx 1.270641 \\) into the balance equation.",
            "workingOut": "A_{60} = 4125000 - 2625000 \\times 1.270641"
          },
          {
            "explanation": "Evaluate the owing balance.",
            "workingOut": "A_{60} \\approx 4125000 - 3335432.63 = 789567.37 \\implies \\$789,567"
          },
          {
            "explanation": "Compare the owing amount with half of the principal (\\$750000).",
            "workingOut": "789567 > 750000 \\implies \\text{more}"
          }
        ]
      },
      {
        "id": "y12a-8f-q14d",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "d) Find \\( A_{120} \\) correct to the nearest dollar, and hence show that the loan is actually paid out in less than 10 years.",
        "a": "\\( A_{120} = 4125000 - 2625000 \\times 1.004^{120} \\approx 4125000 - 2625000 \\times 1.614529 = -\\$113139 \\). Since the final balance is negative, the loan is paid off in less than 10 years.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( n = 120 \\) and \\( 1.004^{120} \\approx 1.614529 \\).",
            "workingOut": "A_{120} = 4125000 - 2625000 \\times 1.614529"
          },
          {
            "explanation": "Evaluate to the nearest dollar.",
            "workingOut": "A_{120} \\approx -113138.63 \\implies -\\$113139"
          }
        ]
      },
      {
        "id": "y12a-8f-q14e",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "e) If it is paid out after \\( n \\) months (that is, put \\( A_n = 0 \\)), show that \\( 1.004^n = \\frac{11}{7} \\), and hence that \\( n = \frac{\\log_{10}(11/7)}{\\log_{10}1.004} \\).",
        "a": "Set \\( A_n = 0 \\implies 1500000 \\times 1.004^n - 4125000(1.004^n - 1) = 0 \\implies 2625000 \\times 1.004^n = 4125000 \\implies 1.004^n = \\frac{4125000}{2625000} = \\frac{11}{7} \\). Taking base-10 logarithms: \\( n \\log_{10} 1.004 = \\log_{10}(11/7) \\implies n = \\frac{\\log_{10}(11/7)}{\\log_{10} 1.004} \\).",
        "solutionSteps": [
          {
            "explanation": "Equate balance to 0 and group the terms of \\( 1.004^n \\).",
            "workingOut": "4125000 - 2625000 \\times 1.004^n = 0"
          },
          {
            "explanation": "Solve for \\( 1.004^n \\).",
            "workingOut": "1.004^n = \\frac{4125}{2625} = \\frac{11}{7}"
          },
          {
            "explanation": "Take base-10 logarithms of both sides.",
            "workingOut": "n \\log_{10} 1.004 = \\log_{10}(11/7) \\implies n = \\frac{\\log_{10}(11/7)}{\\log_{10} 1.004}"
          }
        ]
      },
      {
        "id": "y12a-8f-q14f",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 360,
        "question": "f) Find how many months early the loan is paid off. Give your answer to the nearest integer.",
        "a": "6",
        "solutionSteps": [
          {
            "explanation": "Calculate the exact number of months needed to pay off the loan.",
            "workingOut": "n = \\frac{\\log(11/7)}{\\log 1.004} \\approx \\frac{0.451985}{0.003992} \\approx 113.2"
          },
          {
            "explanation": "Round up to 114 months, then subtract from the contract term (120 months).",
            "workingOut": "\\text{Months early} = 120 - 114 = 6"
          }
        ]
      }
    ]
  }
];
