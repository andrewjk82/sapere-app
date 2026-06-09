# -*- coding: utf-8: -*-
import json
import math

questions = []

# Q1: landlord purchased washing machines for 600000 6 years ago, depreciation rate 30% p.a.
# New: principal = 800000, rate = 25% p.a., years = 6
# Math:
# a) after 1 year: 800000 * 0.75 = 600000.00
# b) after 2 years: 800000 * 0.75^2 = 450000.00
# c) after 6 years: 800000 * 0.75^6 = 142382.81
# d) pct decrease: (1 - 0.75^6)*100 = 82.20%
# e) average reduction: (800000 - 142382.81) / 6 = 109602.87
q1_data = [
    {"sub": "a", "q": "Find the estimated value after one year.", "ans": "600000.00"},
    {"sub": "b", "q": "Find the estimated value after two years.", "ans": "450000.00"},
    {"sub": "c", "q": "Find the estimated value after six years, correct to the nearest cent.", "ans": "142382.81"},
    {"sub": "d", "q": "What is the percentage decrease in value over the six-year period? Correct to two decimal places. (Enter value only, e.g. 82.20%)", "ans": "82.20%"},
    {"sub": "e", "q": "What is the average reduction in value, in dollars p.a., over the six-year period? Correct to the nearest cent.", "ans": "109602.87"}
]
for item in q1_data:
    questions.append({
        "id": f"y10-1e-q1{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A landlord purchased washing machines six years ago for 800000 dollars, and assumes a depreciation rate of \\(25\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Use the compound depreciation formula \\(A = P(1-r)^n\\).",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q2: alarms 320000, rate 20% p.a., 6 years.
# New: alarms 400000, rate 15% p.a., 6 years.
# Math:
# a1) value after 6 years: 400000 * 0.85^6 = 150860.03
# a2) percentage reduction: (1 - 0.85^6)*100 = 62.28%
# b) loan 400000, compound interest 6% p.a. for 6 years => 400000 * 1.06^6 = 567408.06
q2_data = [
    {"sub": "a_val", "q": "Find the estimated value after six years if it depreciates at \\(15\\%\\) p.a. Correct to the nearest cent.", "ans": "150860.03"},
    {"sub": "a_pct", "q": "Find the percentage reduction of value over the six-year period if it depreciates at \\(15\\%\\) p.a. Correct to two decimal places. (Enter value only, e.g. 62.28%)", "ans": "62.28%"},
    {"sub": "b", "q": "If the business borrowed the money to install the alarms, paying \\(6\\%\\) p.a. compound interest for six years, how much did it owe at the end of the six years? Correct to the nearest cent.", "ans": "567408.06"}
]
for item in q2_data:
    questions.append({
        "id": f"y10-1e-q2{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A shop spent 400000 dollars installing security alarms. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Apply the appropriate compound growth or decay formula.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q3: bought bus for 90000, depreciated 30% p.a., sold 5 years later for 20000. Better/worse?
# New: bought bus for 100000, depreciated 25% p.a., sold 5 years later for 22000.
# Math:
# Depreciated value after 5 years = 100000 * 0.75^5 = 23730.47
# Sold for 22000, which is worse than 23730.47.
# Difference = 23730.47 - 22000 = 1730.47
questions.append({
    "id": "y10-1e-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A school bought a bus for 100000 dollars, depreciated it at \\(25\\%\\) p.a. for taxation purposes, and sold it five years later for 22000 dollars. Was the price they obtained better or worse than the depreciated value?",
    "a": "worse",
    "opts": ["worse", "better", "equal"],
    "solutionSteps": [
        {
            "explanation": "Calculate the depreciated value after 5 years.",
            "workingOut": "\\(100000 \\times 0.75^5 = 23730.47\\)"
        },
        {
            "explanation": "Compare the sale price (22000 dollars) with the depreciated value (23730.47 dollars). Since 22000 is less than 23730.47, it is worse.",
            "workingOut": ""
        }
    ],
    "t": "Compound depreciation"
})

questions.append({
    "id": "y10-1e-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A school bought a bus for 100000 dollars, depreciated it at \\(25\\%\\) p.a. for taxation purposes, and sold it five years later for 22000 dollars. By how much was the sale price worse than the depreciated value? Correct to the nearest cent.",
    "a": "1730.47",
    "solutionSteps": [
        {
            "explanation": "Calculate the depreciated value after 5 years.",
            "workingOut": "\\(100000 \\times 0.75^5 = 23730.47\\)"
        },
        {
            "explanation": "Subtract the sale price from the depreciated value.",
            "workingOut": "\\(23730.47 - 22000 = 1730.47\\)"
        }
    ],
    "t": "Compound depreciation"
})

# Q4: Computers 4540000, 40% p.a. Find value and loss claimable for Year 1 to 4.
# Let's simplify and customize:
# Computers 2000000, 30% p.a.
# Math:
# Y1 value: 2000000 * 0.7 = 1400000.  Claimable loss Y1: 600000.
# Y2 value: 1400000 * 0.7 = 980000.   Claimable loss Y2: 420000.
# Y3 value: 980000 * 0.7 = 686000.    Claimable loss Y3: 294000.
# Y4 value: 686000 * 0.7 = 480200.    Claimable loss Y4: 205800.
q4_data = [
    {"sub": "y1_val", "q": "Find the value of the computers at the end of Year 1.", "ans": "1400000"},
    {"sub": "y1_loss", "q": "Find the claimable loss (depreciation amount) during Year 1.", "ans": "600000"},
    {"sub": "y2_val", "q": "Find the value of the computers at the end of Year 2.", "ans": "980000"},
    {"sub": "y2_loss", "q": "Find the claimable loss (depreciation amount) during Year 2.", "ans": "420000"},
    {"sub": "y3_val", "q": "Find the value of the computers at the end of Year 3.", "ans": "686000"},
    {"sub": "y3_loss", "q": "Find the claimable loss (depreciation amount) during Year 3.", "ans": "294000"},
    {"sub": "y4_val", "q": "Find the value of the computers at the end of Year 4.", "ans": "480200"},
    {"sub": "y4_loss", "q": "Find the claimable loss (depreciation amount) during Year 4.", "ans": "205800"}
]
for item in q4_data:
    questions.append({
        "id": f"y10-1e-q4{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A grocery store spent 2000000 dollars buying computers, and depreciated them at \\(30\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Calculate value and depreciation for each successive year.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q5: Sandra & Kevin 80000.
# New: 100000 from parents. Sandra invested 7% p.a. compounded annually. Kevin sports car depreciated 18% p.a.
# Math:
# Sandra end of 6 years: 100000 * 1.07^6 = 150073.04
# Kevin end of 6 years: 100000 * 0.82^6 = 30400.67
q5_data = [
    {"sub": "sandra", "name": "Sandra", "q": "Find the value of Sandra's investment at the end of six years, correct to the nearest cent.", "ans": "150073.04"},
    {"sub": "kevin", "name": "Kevin", "q": "Find the value of Kevin's car at the end of six years, correct to the nearest cent.", "ans": "30400.67"}
]
for item in q5_data:
    questions.append({
        "id": f"y10-1e-q5{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Sandra and Kevin each received 100000 dollars. Sandra invested her money at \\(7\\%\\) p.a. compounded annually, while Kevin bought a car that depreciated at \\(18\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": f"Calculate the compound value after 6 years using the rate of compounding or depreciation.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q6: Taxis 50%, other cars 22.5% p.a.
# New: Taxis 45% p.a., other cars 20% p.a.
# a1) total percentage reduction taxis after 6 years => (1 - 0.55^6)*100 = 97.23%
# a2) total percentage reduction other cars after 6 years => (1 - 0.80^6)*100 = 73.79%
# b) difference in value of fleet if originally 10000000 each:
#    Taxis value: 10000000 * 0.55^6 = 276806.41
#    Other cars value: 10000000 * 0.80^6 = 2621440.00
#    Difference: 2621440 - 276806.41 = 2344633.59
q6_data = [
    {"sub": "taxis_pct", "q": "What is the total percentage reduction in value on taxis after six years? Correct to two decimal places. (Enter value only, e.g. 97.23%)", "ans": "97.23%"},
    {"sub": "cars_pct", "q": "What is the total percentage reduction in value on other cars after six years? Correct to two decimal places. (Enter value only, e.g. 73.79%)", "ans": "73.79%"},
    {"sub": "diff_val", "q": "What is the difference in value after six years of a fleet of taxis and a fleet of other cars, if both fleets originally cost 10000000 dollars? Correct to the nearest cent.", "ans": "2344633.59"}
]
for item in q6_data:
    questions.append({
        "id": f"y10-1e-q6{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Taxis depreciate at \\(45\\%\\) p.a., and other cars depreciate at \\(20\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Evaluate the depreciation factors and apply them to get the final values/percentages.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q7: Mr Startit's 10-year-old car is worth $6500, has been depreciating at 22.5% p.a.
# New: Mr Startit's 10-year-old car is worth 7200 dollars, depreciating at 20% p.a.
# Math:
# a) 1 year ago: 7200 / 0.8 = 9000
# b) 2 years ago: 7200 / 0.8^2 = 11250
# c) 10 years ago: 7200 / 0.8^10 = 67055.22 => 67055
# d) total percentage reduction: (1 - 0.8^10)*100 = 89.26%
# e) average reduction: (67055 - 7200) / 10 = 5985.50
q7_data = [
    {"sub": "a", "q": "Find how much (to the nearest dollar) the car was estimated to be worth one year ago.", "ans": "9000"},
    {"sub": "b", "q": "Find how much (to the nearest dollar) the car was estimated to be worth two years ago.", "ans": "11250"},
    {"sub": "c", "q": "Find how much (to the nearest dollar) the car was estimated to be worth 10 years ago.", "ans": "67055"},
    {"sub": "d", "q": "What is the total percentage reduction in value on the car over the 10-year period? Correct to two decimal places. (Enter value only, e.g. 89.26%)", "ans": "89.26%"},
    {"sub": "e", "q": "What was the average reduction in value in dollars per year over the 10-year period? Correct to the nearest cent.", "ans": "5985.50"}
]
for item in q7_data:
    questions.append({
        "id": f"y10-1e-q7{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Mr Startit's 10-year-old car is worth 7200 dollars, and has been depreciating at \\(20\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Use back-calculation by dividing the current value by the depreciation factors.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q8: Ms Rinoldis' 7-year-old car is worth $5600, depreciating at 22.5% p.a.
# New: Ms Rinoldis' 7-year-old car is worth 6400 dollars, depreciating at 20% p.a.
# Math:
# a) 4 years ago: 6400 / 0.8^4 = 15625
# b) 7 years ago: 6400 / 0.8^7 = 30517.58 => 30518
# c) total percentage reduction: (1 - 0.8^7)*100 = 79.03%
# d) average reduction: (30518 - 6400) / 7 = 3445.43
# e i) bought 4 years ago (value 15625), now 6400. Average loss = (15625 - 6400) / 4 = 2306.25
# e ii) first 3 years: value at birth = 30518, value at 3 years = 15625. Average loss = (30518 - 15625) / 3 = 4964.33
q8_data = [
    {"sub": "a", "q": "How much, correct to the nearest dollar, was it worth four years ago?", "ans": "15625"},
    {"sub": "b", "q": "How much, correct to the nearest dollar, was it worth seven years ago?", "ans": "30518"},
    {"sub": "c", "q": "What is the total percentage reduction in value on the car over the seven-year period? Correct to two decimal places. (Enter value only, e.g. 79.03%)", "ans": "79.03%"},
    {"sub": "d", "q": "What was the average reduction in value in dollars per year over the seven-year period? Correct to the nearest cent.", "ans": "3445.43"},
    {"sub": "ei", "q": "If Ms Rinoldis bought the car four years ago, what has been her average loss in dollars per year over the four years? Correct to the nearest cent.", "ans": "2306.25"},
    {"sub": "eii", "q": "What was the average loss in dollars per year over the first three years of the car's life? Correct to the nearest cent.", "ans": "4964.33"}
]
for item in q8_data:
    questions.append({
        "id": f"y10-1e-q8{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Ms Rinoldis' seven-year-old car is worth 6400 dollars, and has been depreciating at \\(20\\%\\) p.a. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Calculate backwards or forwards based on ownership timeline.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q9: remove 60% of air... do it 6 times altogether.
# New: remove 50% of air... do it 6 times altogether.
# Math: (0.50)^6 * 100 = 1.5625% => 1.56% (or let's round to 2 dec)
questions.append({
    "id": "y10-1e-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "I take a sealed glass container and remove \\(50\\%\\) of the air. Then I remove \\(50\\%\\) of the remaining air. I do this six times altogether. What percentage of the original air is left in the container? Correct to two decimal places. (Enter value only, e.g. 1.56%)",
    "a": "1.56%",
    "solutionSteps": [
        {
            "explanation": "Each removal step leaves behind \\(50\\% = 0.50\\) of the remaining air.",
            "workingOut": "\\(\\text{{Multiplier}} = 0.50^6 = 0.015625\\)"
        },
        {
            "explanation": "Convert this fraction to a percentage.",
            "workingOut": "\\(0.015625 \\times 100\\% \\approx 1.56\\%\\)"
        }
    ],
    "t": "Compound depreciation"
})

# Q10: fell 5% for 10 years, rose 5% for 20 years.
# New: fell 4% for 10 years, rose 4% for 20 years.
# Math:
# Multiplier: 0.96^10 * 1.04^20 = 0.66483 * 2.19112 = 1.4568
# Percentage gain: (1.4568 - 1)*100 = 45.68% gain
questions.append({
    "id": "y10-1e-q10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The number of trees fell by \\(4\\%\\) every year for 10 years, and then rose by \\(4\\%\\) every year for 20 years. What was the total percentage change of trees over the 30-year period? Correct to two decimal places (specify gain or loss, e.g. 'gain of 45.68%').",
    "a": "gain of 45.68%",
    "solutionSteps": [
        {
            "explanation": "The successive multipliers are \\(0.96^{10}\\) and \\(1.04^{20}\\).",
            "workingOut": "\\(0.96^{10} \\times 1.04^{20} \\approx 1.4568\\)"
        },
        {
            "explanation": "Compute the percentage change and determine if it is a gain or loss.",
            "workingOut": "\\((1.4568 - 1) \\times 100\\% = 45.68\\% \\text{ gain}\\)"
        }
    ],
    "t": "Compound depreciation"
})

# Q11: total percentage decrease
# New:
# i) 12% p.a. for two years => (1 - 0.88^2)*100 = 22.56% => 22.6%
# ii) 8% p.a. for three years => (1 - 0.92^3)*100 = 22.13% => 22.1%
# iii) 5% p.a. for five years => (1 - 0.95^5)*100 = 22.62% => 22.6%
# iv) 4% p.a. for six years => (1 - 0.96^6)*100 = 21.72% => 21.7%
# v) 2.5% p.a. for 10 years => (1 - 0.975^10)*100 = 22.37% => 22.4%
# vi) 1.8% p.a. for 15 years => (1 - 0.982^15)*100 = 23.94% => 23.9%
q11_data = [
    {"sub": "ai", "rate": 12, "years": 2, "ans": "22.6%"},
    {"sub": "aii", "rate": 8, "years": 3, "ans": "22.1%"},
    {"sub": "aiii", "rate": 5, "years": 5, "ans": "22.6%"},
    {"sub": "aiv", "rate": 4, "years": 6, "ans": "21.7%"},
    {"sub": "av", "rate": 2.5, "years": 10, "ans": "22.4%"},
    {"sub": "avi", "rate": 1.8, "years": 15, "ans": "23.9%"}
]
for item in q11_data:
    questions.append({
        "id": f"y10-1e-q11{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Find the total percentage decrease, correct to the nearest \\(0.1\\%\\), in an investment with a value that decreased at \\({item['rate']}\\%\\) p.a. for {item['years']} years.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Compute the compound depreciation multiplier and convert to a percentage reduction.",
                "workingOut": f"\\((1 - (1 - {item['rate']/100:.3f})^{{{item['years']}}}) \\times 100\\% = {item['ans']}\\)"
            }
        ],
        "t": "Compound depreciation"
    })

# Q12: 32% for first 4 years, then 22% for second 4 years
# New: 28% for first 4 years, then 18% for second 4 years
# Math:
# Multiplier: 0.72^4 * 0.82^4 = 0.26873 * 0.45212 = 0.1215
# Percentage decrease: (1 - 0.1215)*100 = 87.85%
questions.append({
    "id": "y10-1e-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For the first four years, an apparatus depreciates at \\(28\\%\\) p.a., and for the second four years, it depreciates at \\(18\\%\\) p.a. Find the total percentage decrease in value, correct to two decimal places. (Enter value only, e.g. 87.85%)",
    "a": "87.85%",
    "solutionSteps": [
        {
            "explanation": "Find the combined depreciation multiplier.",
            "workingOut": "\\(M = 0.72^4 \\times 0.82^4 \\approx 0.1215\\)"
        },
        {
            "explanation": "Calculate the percentage reduction.",
            "workingOut": "\\((1 - 0.1215) \\times 100\\% \\approx 87.85\\%\\)"
        }
    ],
    "t": "Compound depreciation"
})

# Q13: dilute 500 mL mixture with 100 mL of water, do it 20 times.
# Original: dilute 500 mL mixture with 100 mL water.
# Dilution step: mixture has 500 mL liquid, we add 100 mL water. New volume is 600 mL.
# Then we take 500 mL of this mixture.
# In the 500 mL we take, the ratio of liquid remaining is 500/600 = 5/6 of the liquid that was in the previous 500 mL.
# If we repeat this 20 times, the fraction of the original liquid remaining is (5/6)^20.
# Math: (5/6)^20 * 100 = 2.608% => 2.61%
# New: Take 400 mL of liquid and dilute with 100 mL of water. Then take 400 mL of mixture and again dilute with 100 mL water. Repeat 15 times.
# Fraction remaining: (400/500)^15 = (4/5)^15 = 0.8^15 = 0.03518 = 3.52%
questions.append({
    "id": "y10-1e-q13",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "I take 400 mL of a liquid and dilute it with 100 mL of water. Then I take 400 mL of the mixture and again dilute it with 100 mL of water. I repeat this process 15 times in all. What percentage of the original liquid remains in the mixture at the end? Correct to two decimal places. (Enter value only, e.g. 3.52%)",
    "a": "3.52%",
    "solutionSteps": [
        {
            "explanation": "Each dilution step reduces the concentration of the liquid by a factor of \\(400 \\div 500 = 0.8\\).",
            "workingOut": "\\(\\text{{Multiplier}} = 0.8^{15} \\approx 0.03518\\)"
        },
        {
            "explanation": "Convert this factor to a percentage.",
            "workingOut": "\\(0.03518 \\times 100\\% \\approx 3.52\\%\\)"
        }
    ],
    "t": "Compound depreciation"
})

# Write file
output = "export const Y10_CH1E_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch1EQuestions.js", "w", encoding="utf-8") as f:
    f.write(output)

print("Done! Generated", len(questions), "questions.")
