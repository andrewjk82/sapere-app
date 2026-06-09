# -*- coding: utf-8: -*-
import json
import math

questions = []

# Q1: Ming invested $100 000 for 5 years at 7% p.a.
# New: principal = 200000, years = 5, rate = 6% p.a.
# Math:
# a) after 1 year: 200000 * 1.06 = 212000.00
# b) after 2 years: 200000 * 1.06^2 = 224720.00
# c) after 5 years: 200000 * 1.06^5 = 267645.12
# d) pct increase: (1.06^5 - 1)*100 = 33.82%
# e) total interest: 267645.12 - 200000 = 67645.12
# f) simple interest: 200000 * 0.06 * 5 = 60000.00
q1_data = [
    {"sub": "a", "q": "Find the amount invested after one year.", "ans": "212000.00"},
    {"sub": "b", "q": "Find the amount invested after two years.", "ans": "224720.00"},
    {"sub": "c", "q": "Find the amount invested after five years, correct to the nearest cent.", "ans": "267645.12"},
    {"sub": "d", "q": "Find the percentage increase in the investment over the five-year period, correct to two decimal places. (Enter value only, e.g. 33.82%)", "ans": "33.82%"},
    {"sub": "e", "q": "Find the total interest earned over the five years, correct to the nearest cent.", "ans": "67645.12"},
    {"sub": "f", "q": "Find the simple interest on the principal of 200000 dollars over the five years at the same annual interest rate of \\(6\\%\\) p.a.", "ans": "60000.00"}
]
for item in q1_data:
    questions.append({
        "id": f"y10-1d-q1{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Ming invested 200000 dollars for five years at \\(6\\%\\) p.a. interest, compounded annually. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Identify the values and formula for compound interest or simple interest.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q2: Town population increases at rate 5.8% p.a. for 10 years. Initially 34000.
# New: increases at rate 4.5% p.a. for 10 years. Initially 45000.
# Math:
# a) end of 10 years: 45000 * 1.045^10 = 69883.69 -> nearest integer = 69884
# b) total percentage increase: (1.045^10 - 1)*100 = 55.29% -> nearest 1% = 55%
q2_data = [
    {"sub": "a", "q": "What was the population at the end of the 10-year period? Correct to the nearest integer.", "ans": "69884"},
    {"sub": "b", "q": "What was the total percentage increase, correct to the nearest \\(1\\%\\)? (Enter value only, e.g. 55%)", "ans": "55%"}
]
for item in q2_data:
    questions.append({
        "id": f"y10-1d-q2{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"The population of a town increases at a rate of \\(4.5\\%\\) p.a. for 10 years, compounded annually. Initially, the population was 45000. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Compute using successive annual growth multiplier.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q3: Housing loan of 380 000 over 25 years.
# New: Housing loan of 400 000 over 25 years.
# a i) owe if compound interest 5% p.a. => 400000 * 1.05^25 = 1353520.62 -> round to nearest cent: 1353520.62
# a ii) pct increase in debt => (1.05^25 - 1)*100 = 238.38% -> nearest 1% = 238%
# b i) owe if compound interest 0.4% per month => 400000 * 1.004^300 = 1324087.05
# b ii) pct increase in debt => (1.004^300 - 1)*100 = 231.02% -> nearest 1% = 231%
q3_data = [
    {"sub": "ai", "q": "How much money would they owe if compound interest were payable at \\(5\\%\\) p.a.? Correct to the nearest cent.", "ans": "1353520.62"},
    {"sub": "aii", "q": "What would the percentage increase in the debt be if compound interest were payable at \\(5\\%\\) p.a.? Correct to the nearest \\(1\\%\\). (Enter value only, e.g. 238%)", "ans": "238%"},
    {"sub": "bi", "q": "How much money would they owe if compound interest were payable at \\(0.4\\%\\) per month? Correct to the nearest cent.", "ans": "1324087.05"},
    {"sub": "bii", "q": "What would the percentage increase in the debt be if compound interest were payable at \\(0.4\\%\\) per month? Correct to the nearest \\(1\\%\\). (Enter value only, e.g. 231%)", "ans": "231%"}
]
for item in q3_data:
    questions.append({
        "id": f"y10-1d-q3{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A couple takes out a housing loan of 400000 dollars over a period of 25 years. They make no repayments during the 25-year period. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Use compound interest formula with correct frequency of compounding.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q4: Emmanuel borrowed $300 000 for 7 years at 9% p.a.
# New: principal = 250000, years = 7, rate = 8% p.a.
# Math:
# a) after 1 year: 250000 * 1.08 = 270000.00
# b) after 7 years: 250000 * 1.08^7 = 428459.78
# c) pct increase: (1.08^7 - 1)*100 = 71.38%
# d) interest: 428459.78 - 250000 = 178459.78
# e) simple interest: 250000 * 0.08 * 7 = 140000.00
q4_data = [
    {"sub": "a", "q": "Find the amount owing after one year.", "ans": "270000.00"},
    {"sub": "b", "q": "Find the amount owing after seven years, correct to the nearest cent.", "ans": "428459.78"},
    {"sub": "c", "q": "Find the percentage increase in the debt over the seven-year period, correct to two decimal places. (Enter value only, e.g. 71.38%)", "ans": "71.38%"},
    {"sub": "d", "q": "Find the total interest charged over the seven years, correct to the nearest cent.", "ans": "178459.78"},
    {"sub": "e", "q": "Find the simple interest on the principal of 250000 dollars over the seven-year period at the same annual interest rate of \\(8\\%\\) p.a.", "ans": "140000.00"}
]
for item in q4_data:
    questions.append({
        "id": f"y10-1d-q4{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Emmanuel has borrowed 250000 dollars for seven years at \\(8\\%\\) p.a. interest, compounded annually, in order to start his business. He intends to pay the whole amount back, plus interest, at the end of seven years. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Apply compound interest formula.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q5: Find compound interest on 1000...
# New: principal = 2000, 100 years.
# a) 12% p.a. for 100 years => 2000 * (1.12^100 - 1) = 167389146.40
# b) 1% per month for 100 years (1200 months) => 2000 * (1.01^1200 - 1) = 295551381.18
# c) simple interest 12% p.a. for 100 years => 2000 * 0.12 * 100 = 24000.00
q5_data = [
    {"sub": "a", "q": "Find the compound interest on 2000 dollars at \\(12\\%\\) p.a. for 100 years, compounded annually. Correct to the nearest cent.", "ans": "167389146.40"},
    {"sub": "b", "q": "Find the compound interest on 2000 dollars at \\(1\\%\\) per month for 100 years (1200 months). Correct to the nearest cent.", "ans": "295551381.18"},
    {"sub": "c", "q": "Find the simple interest on 2000 dollars at \\(12\\%\\) p.a. for 100 years.", "ans": "24000.00"}
]
for item in q5_data:
    questions.append({
        "id": f"y10-1d-q5{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": item["q"],
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Use interest formulas to solve.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q6: borrows 20000 for 6 years, 9% p.a. (uses subQuestions)
# New: borrows 30000 for 6 years, 8% p.a.
# Math:
# a) owed: 30000 * 1.08^6 = 47606.23
# b) interest: 47606.23 - 30000 = 17606.23
questions.append({
    "id": "y10-1d-q6",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A student borrows 30000 dollars from a bank for six years. Compound interest at \\(8\\%\\) p.a. must be paid.",
    "subQuestions": [
        {
            "id": "y10-1d-q6a",
            "type": "short_answer",
            "question": "How much money is owed to the bank at the end of the six-year period? Correct to the nearest cent.",
            "a": "47606.23",
            "solutionSteps": [
                {
                    "explanation": "Apply the compound interest formula: \\(A = P(1+r)^n\\).",
                    "workingOut": "\\(30000 \\times 1.08^6 = 47606.233\\)"
                }
            ]
        },
        {
            "id": "y10-1d-q6b",
            "type": "short_answer",
            "question": "How much of this amount is interest? Correct to the nearest cent.",
            "a": "17606.23",
            "solutionSteps": [
                {
                    "explanation": "Subtract the principal from the final amount owed.",
                    "workingOut": "\\(47606.23 - 30000 = 17606.23\\)"
                }
            ]
        }
    ],
    "t": "Compound interest"
})

# Q7: rate of 8% p.a. grew to 100000 in 7 years. (uses subQuestions)
# New: rate of 6% p.a. grew to 150000 in 8 years.
# Math:
# a) original: 150000 / 1.06^8 = 94112.59
# b) total percentage increase: (1.06^8 - 1)*100 = 59.38% -> nearest 1% = 59%
questions.append({
    "id": "y10-1d-q7",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Money borrowed at an interest rate of \\(6\\%\\) p.a. grew to 150000 dollars in eight years.",
    "subQuestions": [
        {
            "id": "y10-1d-q7a",
            "type": "short_answer",
            "question": "Find the original amount invested, correct to the nearest cent.",
            "a": "94112.59",
            "solutionSteps": [
                {
                    "explanation": "Solve for principal \\(P\\) in \\(A = P(1+r)^n\\).",
                    "workingOut": "\\(150000 \\div 1.06^8 = 94112.585\\)"
                }
            ]
        },
        {
            "id": "y10-1d-q7b",
            "type": "short_answer",
            "question": "Find the total percentage increase in the investment, correct to the nearest \\(1\\%\\). (Enter value only, e.g. 59%)",
            "a": "59%",
            "solutionSteps": [
                {
                    "explanation": "Compute the growth multiplier and convert to percentage increase.",
                    "workingOut": "\\((1.06^8 - 1) \\times 100\\% \\approx 59.38\\% \\approx 59\\%\\)"
                }
            ]
        }
    ],
    "t": "Compound interest"
})

# Q8: grow to 250000 in 8 years, 0.5% per month. (uses subQuestions)
# New: grow to 300000 in 6 years, 0.6% per month (72 months).
# Math:
# a) invest now: 300000 / 1.006^72 = 195079.46
# b) total percentage increase: (1.006^72 - 1)*100 = 53.78% -> nearest 1% = 54%
questions.append({
    "id": "y10-1d-q8",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Emily wants to invest some money now so that it will grow to 300000 dollars in six years' time. The compound interest rate is \\(0.6\\%\\) per month.",
    "subQuestions": [
        {
            "id": "y10-1d-q8a",
            "type": "short_answer",
            "question": "How much should she invest now? Correct to the nearest cent.",
            "a": "195079.46",
            "solutionSteps": [
                {
                    "explanation": "Solve for the principal with monthly compounding over 72 months.",
                    "workingOut": "\\(300000 \\div 1.006^{72} = 195079.458\\)"
                }
            ]
        },
        {
            "id": "y10-1d-q8b",
            "type": "short_answer",
            "question": "What will the total percentage increase be, correct to the nearest \\(1\\%\\)? (Enter value only, e.g. 54%)",
            "a": "54%",
            "solutionSteps": [
                {
                    "explanation": "Calculate the ratio of the increase over the initial principal.",
                    "workingOut": "\\((1.006^{72} - 1) \\times 100\\% \\approx 53.78\\% \\approx 54\\%\\)"
                }
            ]
        }
    ],
    "t": "Compound interest"
})

# Q9: Bank offers 0.7% per month. Worth 100000 in: a) 10 years  b) 25 years
# New: bank offers 0.8% per month. Worth 150000 in: a) 10 years (120 months)  b) 20 years (240 months)
# Math:
# a) 10 years => 150000 / 1.008^120 = 57672.48
# b) 20 years => 150000 / 1.008^240 = 22173.83
q9_data = [
    {"sub": "a", "years": 10, "months": 120, "ans": "57672.48"},
    {"sub": "b", "years": 20, "months": 240, "ans": "22173.83"}
]
for item in q9_data:
    questions.append({
        "id": f"y10-1d-q9{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A bank offers \\(0.8\\%\\) per month compound interest. How much needs to be invested if the investment is to be worth 150000 dollars in {item['years']} years? Correct to the nearest cent.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": f"The number of compounding periods is \\({item['months']}\\) months.",
                "workingOut": f"\\(150000 \\div 1.008^{{{item['months']}}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q10: population Granite Peak growing 7.4%, reached 80000.
# New: growing 6.5%, reached 90000.
# Find population: a) 1 yr ago  b) 2 yrs ago  c) 5 yrs ago  d) 10 yrs ago
# Math:
# a) 90000 / 1.065 = 84507.04 => 84507
# b) 90000 / 1.065^2 = 79349.33 => 79349
# c) 90000 / 1.065^5 = 65690.35 => 65690
# d) 90000 / 1.065^10 = 47942.50 => 47943
q10_data = [
    {"sub": "a", "step": "one year ago", "factor": 1.065, "ans": "84507"},
    {"sub": "b", "step": "two years ago", "factor": 1.065**2, "ans": "79349"},
    {"sub": "c", "step": "five years ago", "factor": 1.065**5, "ans": "65690"},
    {"sub": "d", "step": "10 years ago", "factor": 1.065**10, "ans": "47943"}
]
for item in q10_data:
    questions.append({
        "id": f"y10-1d-q10{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"The population of a town has been growing at \\(6.5\\%\\) every year and has now reached 90000. Find the population {item['step']}, correct to the nearest integer.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Divide the current population by the growth multiplier for the given number of years.",
                "workingOut": f"\\(90000 \\div {item['factor']:.6f} \\approx {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q11: Mr Brown reconstruct missing entries in table (uses SPLIT_MULTI_UNKNOWN = true)
# New table values:
# Row a: Principal: 5000, Rate: 6%, Years: 20 => final amount & total interest
#   Final amount: 5000 * 1.06^20 = 16035.67
#   Total interest: 16035.67 - 5000 = 11035.67
# Row b: Principal: 4000, Rate: 6%, Years: 20 => final amount: 4000 => Principal & Total interest
#   Principal: 4000 / 1.06^20 = 1247.22
#   Total interest: 4000 - 1247.22 = 2752.78
q11_data = [
    {"sub": "a_final", "q": "Reconstruct Mr Brown's spreadsheet entry. Find the final amount if Principal is 5000 dollars, Rate is \\(6\\%\\) p.a., and Number of years is 20. Correct to the nearest cent.", "ans": "16035.67"},
    {"sub": "a_interest", "q": "Reconstruct Mr Brown's spreadsheet entry. Find the total interest if Principal is 5000 dollars, Rate is \\(6\\%\\) p.a., and Number of years is 20. Correct to the nearest cent.", "ans": "11035.67"},
    {"sub": "b_principal", "q": "Reconstruct Mr Brown's spreadsheet entry. Find the principal if Rate is \\(6\\%\\) p.a., Number of years is 20, and the Final amount is 4000 dollars. Correct to the nearest cent.", "ans": "1247.22"},
    {"sub": "b_interest", "q": "Reconstruct Mr Brown's spreadsheet entry. Find the total interest if Rate is \\(6\\%\\) p.a., Number of years is 20, and the Final amount is 4000 dollars. Correct to the nearest cent.", "ans": "2752.78"}
]
for item in q11_data:
    questions.append({
        "id": f"y10-1d-q11{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": item["q"],
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Use the compound interest formulas to find the missing spreadsheet cells.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q12: Mr Yang interest earned each year. (uses subQuestions)
# New: Mr Yang invested 80000 at compound rate of 5% p.a. for 3 years.
# a) Calculate interest earned each year.
#    Year 1: 80000 * 0.05 = 4000.00
#    Year 2: 84000 * 0.05 = 4200.00
#    Year 3: 88200 * 0.05 = 4410.00
# b) Repeat with rate of 0.4% per month (36 months).
#    Since it says "interest earned each year", we calculate:
#    Year 1: 80000 * (1.004^12 - 1) = 3923.63
#    Year 2: (80000 * 1.004^12) * (1.004^12 - 1) = 4116.07
#    Year 3: (80000 * 1.004^24) * (1.004^12 - 1) = 4317.95
questions.append({
    "id": "y10-1d-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Mr Yang invested 80000 dollars for three years.",
    "subQuestions": [
        {
            "id": "y10-1d-q12a",
            "type": "short_answer",
            "question": "Calculate the interest earned in each of the three years if the compound interest rate is \\(5\\%\\) p.a., compounded annually. (Enter the interest earned in Year 3, correct to the nearest cent).",
            "a": "4410.00",
            "solutionSteps": [
                {
                    "explanation": "Year 1 interest: \\(80000 \\times 0.05 = 4000\\). Balance: 84000.",
                    "workingOut": ""
                },
                {
                    "explanation": "Year 2 interest: \\(84000 \\times 0.05 = 4200\\). Balance: 88200.",
                    "workingOut": ""
                },
                {
                    "explanation": "Year 3 interest: \\(88200 \\times 0.05 = 4410\\).",
                    "workingOut": "\\(4410.00\\)"
                }
            ]
        },
        {
            "id": "y10-1d-q12b",
            "type": "short_answer",
            "question": "Calculate the interest earned in Year 3 if the compound interest rate is \\(0.4\\%\\) per month. Correct to the nearest cent.",
            "a": "4317.95",
            "solutionSteps": [
                {
                    "explanation": "Balance at end of Year 2 (24 months): \\(80000 \\times 1.004^{24} = 88043.68\\).",
                    "workingOut": ""
                },
                {
                    "explanation": "Balance at end of Year 3 (36 months): \\(80000 \\times 1.004^{36} = 92361.63\\).",
                    "workingOut": ""
                },
                {
                    "explanation": "Interest earned in Year 3: \\(92361.63 - 88043.68 = 4317.95\\).",
                    "workingOut": "\\(4317.95\\)"
                }
            ]
        }
    ],
    "t": "Compound interest"
})

# Q13: Daily compound interest
# New: 15 000 000 dollars, daily compound rate 0.015%.
# Math: 15000000 * (1.00015^365 - 1) = 842603.95
questions.append({
    "id": "y10-1d-q13",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A holding company sold a property for 15000000 dollars and invested the money at a daily compound interest rate of \\(0.015\\%\\). How much interest did the company earn in the first year (assume 365 days)? Correct to the nearest cent.",
    "a": "842603.95",
    "solutionSteps": [
        {
            "explanation": "The daily interest rate is \\(0.015\\% = 0.00015\\).",
            "workingOut": "\\(\\text{{Multiplier}} = 1.00015^{365} \\approx 1.0561735\\)"
        },
        {
            "explanation": "Calculate the interest earned.",
            "workingOut": "\\(15000000 \\times (1.00015^{365} - 1) = 842603.952\\)"
        }
    ],
    "t": "Compound interest"
})

# Q14: Find percentage increase in each situation (top level split)
# New:
# a) 200000 at 0.01% per day for one year => (1.0001^365 - 1)*100 = 3.72%
# b) 200000 at 0.03% per day for one year => (1.0003^365 - 1)*100 = 11.57%
q14_data = [
    {"sub": "a", "rate": 0.01, "factor": 1.0001, "ans": "3.72%"},
    {"sub": "b", "rate": 0.03, "factor": 1.0003, "ans": "11.57%"}
]
for item in q14_data:
    questions.append({
        "id": f"y10-1d-q14{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Find the total percentage increase for an investment at a compound interest rate of {item['rate']}% per day for one year (365 days), correct to the nearest \\(0.01\\%\\). (Enter value only, e.g. 3.72%)",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Apply daily compounding factor over 365 days.",
                "workingOut": f"\\(({item['factor']:.4f}^{{365}} - 1) \\times 100\\% = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

# Q15: total percentage growth (top-level split)
# New:
# a) 12% p.a. for two years => (1.12^2 - 1)*100 = 25.4%
# b) 8% p.a. for three years => (1.08^3 - 1)*100 = 26.0%
# c) 5% p.a. for five years => (1.05^5 - 1)*100 = 27.6%
# d) 4% p.a. for six years => (1.04^6 - 1)*100 = 26.5%
# e) 2.5% p.a. for 10 years => (1.025^10 - 1)*100 = 28.0%
# f) 1.8% p.a. for 15 years => (1.018^15 - 1)*100 = 30.6%
# g) qualitative: "The products of interest rate and years are similar, yet the final growth varies. In general, higher compounding periods or rates yield larger growth." Let's formulate it as multiple choice.
q15_data = [
    {"sub": "a", "rate": 12, "years": 2, "ans": "25.4%"},
    {"sub": "b", "rate": 8, "years": 3, "ans": "26.0%"},
    {"sub": "c", "rate": 5, "years": 5, "ans": "27.6%"},
    {"sub": "d", "rate": 4, "years": 6, "ans": "26.5%"},
    {"sub": "e", "rate": 2.5, "years": 10, "ans": "28.0%"},
    {"sub": "f", "rate": 1.8, "years": 15, "ans": "30.6%"}
]
for item in q15_data:
    questions.append({
        "id": f"y10-1d-q15{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Find the total percentage growth, correct to the nearest \\(0.1\\%\\), in a compound interest investment at \\({item['rate']}\\%\\) p.a. for {item['years']} years.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Calculate the compound interest growth factor and convert to a percentage.",
                "workingOut": f"\\(((1 + {item['rate']/100:.3f})^{{{item['years']}}} - 1) \\times 100\\% = {item['ans']}\\)"
            }
        ],
        "t": "Compound interest"
    })

questions.append({
    "id": "y10-1d-q15g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "What do you observe about the results of the total growth for products of interest rate and years that are roughly equal (e.g. 12% * 2 = 24, 8% * 3 = 24, etc.)?",
    "a": "Although the simple interest products are similar, higher compound interest rates or longer compounding durations yield different overall growth rates, with longer periods compounding more.",
    "opts": [
        "Although the simple interest products are similar, higher compound interest rates or longer compounding durations yield different overall growth rates, with longer periods compounding more.",
        "All growth rates are mathematically identical regardless of the compounding period.",
        "Longer compounding periods always yield significantly lower growth rates.",
        "Compounding has no effect over long durations."
    ],
    "solutionSteps": [
        {
            "explanation": "Compounding frequency over time means longer durations at even lower rates can accumulate more compound interest than short durations at high rates.",
            "workingOut": ""
        }
    ],
    "t": "Compound interest"
})

# Q16: Doctor loan rate 9% for first 3 years, then 13% for second 3-year period
# New: rate 8% for first 3 years, then 12% for second 3-year period.
# Math:
# Multiplier: 1.08^3 * 1.12^3 = 1.259712 * 1.404928 = 1.7698
# Percentage increase: (1.7698 - 1)*100 = 76.98% => 77%
questions.append({
    "id": "y10-1d-q16",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A doctor took out a six-year loan to start a medical practice. For the first three years, he was charged compound interest at a rate of \\(8\\%\\) p.a. For the second three-year period, he was charged compound interest at a rate of \\(12\\%\\) p.a. Find the total percentage increase in the money owing, correct to the nearest \\(1\\%\\). (Enter value only, e.g. 77%)",
    "a": "77%",
    "solutionSteps": [
        {
            "explanation": "Calculate the multiplier for the first 3 years.",
            "workingOut": "\\(M_1 = 1.08^3 \\approx 1.2597\\)"
        },
        {
            "explanation": "Calculate the multiplier for the next 3 years.",
            "workingOut": "\\(M_2 = 1.12^3 \\approx 1.4049\\)"
        },
        {
            "explanation": "Multiply them to find the overall growth multiplier, and convert to percentage increase.",
            "workingOut": "\\(\\text{{Total Multiplier}} = 1.2597 \\times 1.4049 \\approx 1.7698 \\implies 77\\%\\)"
        }
    ],
    "t": "Compound interest"
})

# Write file
output = "export const Y10_CH1D_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch1DQuestions.js", "w", encoding="utf-8") as f:
    f.write(output)

print("Done! Generated", len(questions), "questions.")
