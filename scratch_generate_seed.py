# -*- coding: utf-8: -*-
import json
import random

# Seed values slightly adjusted/randomized but keeping the same structure and difficulty level.
# All questions Q1-Q15 split into top level.

questions = []

# Q1: Increase each amount by the given percentage
# Original: a) $570, 10%  b) $9320, 5%  c) $456, 6%  d) $3120, 8%
# New: a) 680 dollars, 10%  b) 8450 dollars, 5%  c) 350 dollars, 8%  d) 4250 dollars, 6%
q1_data = [
    {"sub": "a", "amount": 680, "pct": 10},
    {"sub": "b", "amount": 8450, "pct": 5},
    {"sub": "c", "amount": 350, "pct": 8},
    {"sub": "d", "amount": 4250, "pct": 6}
]
for item in q1_data:
    amt = item["amount"]
    p = item["pct"]
    ans = amt * (1 + p/100)
    # If integer, output as int, else round to 2 dec
    ans_str = f"{ans:.2f}" if ans % 1 != 0 else f"{int(ans)}"
    questions.append({
        "id": f"y10-1b-q1{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Increase {amt} dollars by \\({p}\\%\\).",
        "a": ans_str,
        "solutionSteps": [
            {
                "explanation": f"To increase an amount by a percentage, find \\({p}\\%\\) of the amount and add it, or multiply by \\(100\\% + {p}\\% = {100+p}\\%\\).",
                "workingOut": f"\\({100+p}\\% = {1 + p/100:.2f}\\)"
            },
            {
                "explanation": "Multiply the original amount by this factor.",
                "workingOut": f"\\({amt} \\times {1 + p/100:.2f} = {ans_str}\\)"
            },
            {
                "explanation": f"The increased amount is {ans_str} dollars.",
                "workingOut": ""
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q2: Decrease each amount by the given percentage
# Original: a) $9000, 10%  b) $4560, 5%  c) $826, 3%  d) $9520, 4%
# New: a) 8000 dollars, 10%  b) 3680 dollars, 5%  c) 750 dollars, 4%  d) 8240 dollars, 3%
q2_data = [
    {"sub": "a", "amount": 8000, "pct": 10},
    {"sub": "b", "amount": 3680, "pct": 5},
    {"sub": "c", "amount": 750, "pct": 4},
    {"sub": "d", "amount": 8240, "pct": 3}
]
for item in q2_data:
    amt = item["amount"]
    p = item["pct"]
    ans = amt * (1 - p/100)
    ans_str = f"{ans:.2f}" if ans % 1 != 0 else f"{int(ans)}"
    questions.append({
        "id": f"y10-1b-q2{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Decrease {amt} dollars by \\({p}\\%\\).",
        "a": ans_str,
        "solutionSteps": [
            {
                "explanation": f"To decrease an amount by a percentage, multiply by \\(100\\% - {p}\\% = {100-p}\\%\\).",
                "workingOut": f"\\({100-p}\\% = {1 - p/100:.2f}\\)"
            },
            {
                "explanation": "Multiply the original amount by this factor.",
                "workingOut": f"\\({amt} \\times {1 - p/100:.2f} = {ans_str}\\)"
            },
            {
                "explanation": f"The decreased amount is {ans_str} dollars.",
                "workingOut": ""
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q3: Traffic on all roads has increased...
# Original: average 12%, mult by 1.12. a) 32000  b) 153000  c) 248
# New: average 15%, mult by 1.15. a) 42000  b) 124000  c) 350
q3_data = [
    {"sub": "a", "val": 42000},
    {"sub": "b", "val": 124000},
    {"sub": "c", "val": 350}
]
for item in q3_data:
    val = item["val"]
    ans = val * 1.15
    ans_str = f"{ans:.2f}" if ans % 1 != 0 else f"{int(ans)}"
    questions.append({
        "id": f"y10-1b-q3{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Traffic on all roads has increased by an average of \\(15\\%\\) during the past 12 months. By multiplying by \\(115\\% = 1.15\\), estimate the number of vehicles now on a road where the number of vehicles a year ago was {val} per day.",
        "a": ans_str,
        "solutionSteps": [
            {
                "explanation": "To apply a percentage increase of \\(15\\%\\), multiply the original daily traffic count by \\(1.15\\).",
                "workingOut": f"\\({val} \\times 1.15\\)"
            },
            {
                "explanation": "Calculate the result.",
                "workingOut": f"\\({val} \\times 1.15 = {ans_str}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q4: Rainfall across Victoria has decreased...
# Original: decreased by 38%, mult by 0.62. a) 700 mm  b) 142 mm  c) 1268 mm (correct to nearest mm)
# New: decreased by 35%, mult by 0.65. a) 800 mm  b) 164 mm  c) 1342 mm (correct to nearest mm)
q4_data = [
    {"sub": "a", "val": 800},
    {"sub": "b", "val": 164},
    {"sub": "c", "val": 1342}
]
for item in q4_data:
    val = item["val"]
    ans = round(val * 0.65)
    questions.append({
        "id": f"y10-1b-q4{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Rainfall has decreased over the last 10 years by about \\(35\\%\\). By multiplying by \\(65\\% = 0.65\\), estimate, correct to the nearest mm, the annual rainfall this year at a place where the rainfall 10 years ago was {val} mm.",
        "a": str(ans),
        "solutionSteps": [
            {
                "explanation": "Since the rainfall decreased by \\(35\\%\\), the new rainfall is \\(65\\%\\) of the original value.",
                "workingOut": f"\\({val} \\times 0.65\\)"
            },
            {
                "explanation": "Calculate the amount and round to the nearest integer.",
                "workingOut": f"\\({val} \\times 0.65 = {val * 0.65:.2f} \\approx {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q5: The number of shops... find percentage increase/decrease
# Original: a) 200 and 212 (6% inc) b) 85 and 160 (88.24% inc) c) 156 and 122 (21.79% dec) d) 198 and 110 (44.44% dec)
# New: a) 250 and 265 (6% inc) b) 80 and 150 (87.5% inc) c) 160 and 124 (22.5% dec) d) 150 and 96 (36% dec)
q5_data = [
    {"sub": "a", "v1": 250, "v2": 265, "type": "increase"},
    {"sub": "b", "v1": 80, "v2": 150, "type": "increase"},
    {"sub": "c", "v1": 160, "v2": 124, "type": "decrease"},
    {"sub": "d", "v1": 150, "v2": 96, "type": "decrease"}
]
for item in q5_data:
    v1 = item["v1"]
    v2 = item["v2"]
    diff = abs(v2 - v1)
    pct = (diff / v1) * 100
    pct_str = f"{pct:.2f}%" if pct % 1 != 0 else f"{int(pct)}%"
    change_type = "increase" if v2 > v1 else "decrease"
    questions.append({
        "id": f"y10-1b-q5{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"The number of shops changed from {v1} in 2011 to {v2} in 2012. Find the percentage increase or decrease, correct to two decimal places if necessary. (State if it is an increase or decrease in your working, but enter only the percentage value with \\(\\%\\), e.g. 15% or 12.5%)",
        "a": pct_str,
        "solutionSteps": [
            {
                "explanation": f"First find the change in the number of shops.",
                "workingOut": f"\\(\\text{{Change}} = |{v2} - {v1}| = {diff}\\)"
            },
            {
                "explanation": f"Determine if it is an increase or decrease: since it went from {v1} to {v2}, it is a {change_type}.",
                "workingOut": ""
            },
            {
                "explanation": "Calculate the percentage change relative to the original value (2011).",
                "workingOut": f"\\(\\text{{Percentage change}} = \\frac{{{diff}}}{{{v1}}} \\times 100\\% = {pct_str}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q6: Original amount finding
# Original: a) decreased by 10%, new is $567.  b) increased by 10%, new is $5676.
# New: a) decreased by 15%, new is 510 dollars. b) increased by 15%, new is 5980 dollars.
# Wait: 510 / 0.85 = 600. Perfect. 5980 / 1.15 = 5200. Perfect.
q6_data = [
    {"sub": "a", "pct": 15, "new_val": 510, "mode": "decreased", "factor": 0.85, "ans": 600},
    {"sub": "b", "pct": 15, "new_val": 5980, "mode": "increased", "factor": 1.15, "ans": 5200}
]
for item in q6_data:
    p = item["pct"]
    nv = item["new_val"]
    mode = item["mode"]
    factor = item["factor"]
    ans = item["ans"]
    questions.append({
        "id": f"y10-1b-q6{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"An amount is {mode} by {p}% and the new amount is {nv} dollars. What was the original amount?",
        "a": f"{ans}",
        "solutionSteps": [
            {
                "explanation": f"Since the amount was {mode} by {p}%, the new amount represents {100-p if mode=='decreased' else 100+p}% of the original amount.",
                "workingOut": f"\\(\\text{{Original}} \\times {factor} = {nv}\\)"
            },
            {
                "explanation": "Divide the new amount by the multiplier to find the original amount.",
                "workingOut": f"\\(\\text{{Original}} = {nv} \\div {factor} = {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q7: Phoenix Finance... increased by 14%, find original holding
# Original: a) 228 shares  b) 8321 shares  c) 77682 shares
# New: increased by 12%, mult by 1.12. a) 336 shares  b) 6160 shares  c) 35840 shares
# Wait: 336 / 1.12 = 300. 6160 / 1.12 = 5500. 35840 / 1.12 = 32000.
q7_data = [
    {"sub": "a", "new_val": 336, "ans": 300},
    {"sub": "b", "new_val": 6160, "ans": 5500},
    {"sub": "c", "new_val": 35840, "ans": 32000}
]
for item in q7_data:
    nv = item["new_val"]
    ans = item["ans"]
    questions.append({
        "id": f"y10-1b-q7{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"A company issued bonus shares that increased the number of shares held by each shareholder by \\(12\\%\\). By dividing by \\(112\\% = 1.12\\), find the original holding of a shareholder who now holds {nv} shares.",
        "a": f"{ans}",
        "solutionSteps": [
            {
                "explanation": "The current holding represents \\(112\\%\\) of the original holding.",
                "workingOut": f"\\(\\text{{Original}} \\times 1.12 = {nv}\\)"
            },
            {
                "explanation": "Divide by \\(1.12\\) to find the original holding.",
                "workingOut": f"\\({nv} \\div 1.12 = {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q8: Lake William... volume has:
# Original: now 7600 ML. a) risen by 60%  b) fallen by 33%  c) risen by 312%  d) fallen by 88%
# New: now 8400 megalitres. a) risen by 50%  b) fallen by 30%  c) risen by 250%  d) fallen by 75%
# Math for new:
# a) x * 1.50 = 8400 => x = 5600
# b) x * 0.70 = 8400 => x = 12000
# c) x * 3.50 = 8400 => x = 2400
# d) x * 0.25 = 8400 => x = 33600
# Round to nearest 10 megalitres. All these are exact.
q8_data = [
    {"sub": "a", "mode": "risen", "pct": 50, "factor": 1.5, "ans": 5600},
    {"sub": "b", "mode": "fallen", "pct": 30, "factor": 0.7, "ans": 12000},
    {"sub": "c", "mode": "risen", "pct": 250, "factor": 3.5, "ans": 2400},
    {"sub": "d", "mode": "fallen", "pct": 75, "factor": 0.25, "ans": 33600}
]
for item in q8_data:
    p = item["pct"]
    mode = item["mode"]
    factor = item["factor"]
    ans = item["ans"]
    questions.append({
        "id": f"y10-1b-q8{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A lake now contains 8400 megalitres of water. Find how much water the lake had 8000 years ago, correct to the nearest 10 megalitres, if the volume has {mode} by {p}% over this period.",
        "a": f"{ans}",
        "solutionSteps": [
            {
                "explanation": f"If the volume has {mode} by {p}%, the current 8400 megalitres is equal to \\({100 + p if mode=='risen' else 100 - p}\\%\\) of the original volume.",
                "workingOut": f"\\(\\text{{Multiplier}} = {factor}\\)"
            },
            {
                "explanation": "Divide the current volume by the multiplier.",
                "workingOut": f"\\(8400 \\div {factor} = {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q9: Clothing store discount 35%...
# Original: marked price: a) $80  b) $48  c) $680  d) $1.60
# New: discount 30%. marked price: a) 90 dollars  b) 64 dollars  c) 450 dollars  d) 2.50 dollars
# Math:
# a) 90 * 0.7 = 63
# b) 64 * 0.7 = 44.80
# c) 450 * 0.7 = 315
# d) 2.50 * 0.7 = 1.75
q9_data = [
    {"sub": "a", "marked": 90, "ans": "63"},
    {"sub": "b", "marked": 64, "ans": "44.80"},
    {"sub": "c", "marked": 450, "ans": "315"},
    {"sub": "d", "marked": 2.50, "ans": "1.75"}
]
for item in q9_data:
    marked = item["marked"]
    ans = item["ans"]
    questions.append({
        "id": f"y10-1b-q9{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A clothing store is offering a \\(30\\%\\) discount on all summer stock. Find the discounted price of an item with a marked price of {marked:.2f} dollars.",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "A discount of \\(30\\%\\) means the customer pays \\(70\\%\\) of the marked price.",
                "workingOut": f"\\(100\\% - 30\\% = 70\\% = 0.7\\)"
            },
            {
                "explanation": "Multiply the marked price by \\(0.7\\).",
                "workingOut": f"\\({marked:.2f} \\times 0.7 = {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q10: Furniture shop 55% discount... find original price
# Original: discounted: a) $1400  b) $327  c) $24.50
# New: 45% discount (so pays 55%). discounted: a) 1650 dollars  b) 220 dollars  c) 44 dollars
# Math:
# a) x * 0.55 = 1650 => x = 3000
# b) x * 0.55 = 220 => x = 400
# c) x * 0.55 = 44 => x = 80
q10_data = [
    {"sub": "a", "disc": 1650, "ans": 3000},
    {"sub": "b", "disc": 220, "ans": 400},
    {"sub": "c", "disc": 44, "ans": 80}
]
for item in q10_data:
    disc = item["disc"]
    ans = item["ans"]
    questions.append({
        "id": f"y10-1b-q10{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A shop is offering a \\(45\\%\\) discount. Find the original price of an item with a discounted price of {disc} dollars.",
        "a": f"{ans}",
        "solutionSteps": [
            {
                "explanation": "Since there is a \\(45\\%\\) discount, the discounted price is \\(55\\%\\) of the original price.",
                "workingOut": f"\\(100\\% - 45\\% = 55\\% = 0.55\\)"
            },
            {
                "explanation": "Divide the discounted price by \\(0.55\\) to find the original price.",
                "workingOut": f"\\({disc} \\div 0.55 = {ans}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q11: spreadsheet missing values
# Let's formulate these as individual questions.
# a) purchase: 20000, pct_inc: 40% => 31 Dec value
# b) purchase: 14268, pct_inc: -58% => 31 Dec value
# c) purchase: 3128.72, pct_inc: 341.27% => 31 Dec value
# d) purchase: ?, 31 Dec: 80000, pct_inc: 15% => purchase value
# e) purchase: ?, 31 Dec: 114262, pct_inc: 258.3% => purchase value
# f) purchase: ?, 31 Dec: 32516.24, pct_inc: -92.29% => purchase value
# g) purchase: 50000, 31 Dec: 52000 => pct_inc
# h) purchase: 21625, 31 Dec: 34648 => pct_inc
# i) purchase: 48372.11, 31 Dec: 40072.11 => pct_inc
# Let's change the numbers slightly to make it original:
# a) purchase: 30000, pct_inc: 30% => 31 Dec: 39000
# b) purchase: 15000, pct_inc: -45% => 31 Dec: 8250
# c) purchase: 4500, pct_inc: 220% => 31 Dec: 14400
# d) purchase: ?, 31 Dec: 92000, pct_inc: 15% => purchase: 80000
# e) purchase: ?, 31 Dec: 180000, pct_inc: 200% => purchase: 60000
# f) purchase: ?, 31 Dec: 45000, pct_inc: -90% => purchase: 450000
# g) purchase: 60000, 31 Dec: 69000 => pct_inc: 15%
# h) purchase: 25000, 31 Dec: 35000 => pct_inc: 40%
# i) purchase: 80000, 31 Dec: 68000 => pct_inc: -15%
q11_data = [
    {"sub": "a", "q": "Mr Brown bought shares with a purchase value of 30000 dollars. The percentage change by 31 December was an increase of \\(30\\%\\). Find the value of the shares at 31 December.", "a": "39000"},
    {"sub": "b", "q": "Mr Brown bought shares with a purchase value of 15000 dollars. The percentage change by 31 December was a decrease of \\(45\\%\\) (represented as \\(-45\\%\\)). Find the value of the shares at 31 December.", "a": "8250"},
    {"sub": "c", "q": "Mr Brown bought shares with a purchase value of 4500 dollars. The percentage change by 31 December was an increase of \\(220\\%\\). Find the value of the shares at 31 December.", "a": "14400"},
    {"sub": "d", "q": "Shares had a value of 92000 dollars on 31 December, representing an increase of \\(15\\%\\) since purchase. Find the value at purchase.", "a": "80000"},
    {"sub": "e", "q": "Shares had a value of 180000 dollars on 31 December, representing an increase of \\(200\\%\\) since purchase. Find the value at purchase.", "a": "60000"},
    {"sub": "f", "q": "Shares had a value of 45000 dollars on 31 December, representing a decrease of \\(90\\%\\) (or \\(-90\\%\\)) since purchase. Find the value at purchase.", "a": "450000"},
    {"sub": "g", "q": "Shares purchased for 60000 dollars were valued at 69000 dollars on 31 December. Find the percentage change (enter a positive percentage for increase, e.g. 15%).", "a": "15%"},
    {"sub": "h", "q": "Shares purchased for 25000 dollars were valued at 35000 dollars on 31 December. Find the percentage change (enter a positive percentage for increase, e.g. 40%).", "a": "40%"},
    {"sub": "i", "q": "Shares purchased for 80000 dollars were valued at 68000 dollars on 31 December. Find the percentage change (use a negative sign for decrease, e.g. -15%).", "a": "-15%"}
]
for item in q11_data:
    questions.append({
        "id": f"y10-1b-q11{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": item["q"],
        "a": item["a"],
        "solutionSteps": [
            {
                "explanation": "Use the percentage increase/decrease formula: \\(\\text{{New}} = \\text{{Original}} \\times (1 + \\text{{percentage change}})\\).",
                "workingOut": ""
            },
            {
                "explanation": "Substitute the given values to solve for the missing variable.",
                "workingOut": f"\\(\\text{{Answer}} = {item['a']}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q12: GST is calculated at 10%
# Original:
# a) after-tax for pre-tax of: i) $2740 ii) $134 000 iii) $8.20
# b) pre-tax for after-tax of: i) $3927 ii) $426 877 iii) $3.19
# c) after-tax for GST of: i) $442 ii) $347 114 iii) $0.47
# Let's change the values:
# a) pre-tax: i) 3500 dollars  ii) 125000 dollars  iii) 6.40 dollars
#    => after-tax = pre-tax * 1.10
#    i) 3850  ii) 137500  iii) 7.04
# b) after-tax: i) 4400 dollars  ii) 165000 dollars  iii) 5.50 dollars
#    => pre-tax = after-tax / 1.10
#    i) 4000  ii) 150000  iii) 5.00
# c) GST: i) 150 dollars  ii) 3200 dollars  iii) 0.85 dollars
#    => after-tax = GST * 11
#    i) 1650  ii) 35200  iii) 9.35
q12_data = [
    {"sub": "ai", "q": "Pre-tax price is 3500 dollars. Find the after-tax price including GST (10%).", "ans": "3850", "exp": "Multiply by 1.10"},
    {"sub": "aii", "q": "Pre-tax price is 125000 dollars. Find the after-tax price including GST (10%).", "ans": "137500", "exp": "Multiply by 1.10"},
    {"sub": "aiii", "q": "Pre-tax price is 6.40 dollars. Find the after-tax price including GST (10%).", "ans": "7.04", "exp": "Multiply by 1.10"},
    {"sub": "bi", "q": "After-tax price is 4400 dollars. Find the pre-tax price (excluding 10% GST).", "ans": "4000", "exp": "Divide by 1.10"},
    {"sub": "bii", "q": "After-tax price is 165000 dollars. Find the pre-tax price (excluding 10% GST).", "ans": "150000", "exp": "Divide by 1.10"},
    {"sub": "biii", "q": "After-tax price is 5.50 dollars. Find the pre-tax price (excluding 10% GST).", "ans": "5.00", "exp": "Divide by 1.10"},
    {"sub": "ci", "q": "The GST amount is 150 dollars. Find the after-tax price (pre-tax + GST, where GST is 10% of pre-tax).", "ans": "1650", "exp": "GST is 10% of pre-tax, so pre-tax is 1500, after-tax is 1500 + 150 = 1650."},
    {"sub": "cii", "q": "The GST amount is 3200 dollars. Find the after-tax price (pre-tax + GST, where GST is 10% of pre-tax).", "ans": "35200", "exp": "GST is 10% of pre-tax, so pre-tax is 32000, after-tax is 32000 + 3200 = 35200."},
    {"sub": "ciii", "q": "The GST amount is 0.85 dollars. Find the after-tax price (pre-tax + GST, where GST is 10% of pre-tax).", "ans": "9.35", "exp": "GST is 10% of pre-tax, so pre-tax is 8.50, after-tax is 8.50 + 0.85 = 9.35."}
]
for item in q12_data:
    questions.append({
        "id": f"y10-1b-q12{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"GST is calculated at the rate of \\(10\\%\\) of the pre-tax price. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": item["exp"],
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q13: inflation 3.4%
# Original:
# a) pre-tax: i) $3000 ii) $24.15 iii) $361 => estimate today's price (pre-tax * 1.034)
# b) now costs: i) $4200 ii) $14.30 iii) $76 => estimate price year ago (costs / 1.034)
# Let's change inflation to 3.5%
# a) cost year ago: i) 4000 dollars  ii) 60 dollars  iii) 500 dollars
#    => today = year_ago * 1.035
#    i) 4140  ii) 62.10  iii) 517.50
# b) costs today: i) 8280 dollars  ii) 207 dollars  iii) 621 dollars
#    => year ago = today / 1.035
#    i) 8000  ii) 200  iii) 600
q13_data = [
    {"sub": "ai", "q": "An item cost 4000 dollars one year ago. Estimate today's price, correct to two decimal places.", "ans": "4140", "exp": "Multiply by 1.035"},
    {"sub": "aii", "q": "An item cost 60 dollars one year ago. Estimate today's price, correct to two decimal places.", "ans": "62.10", "exp": "Multiply by 1.035"},
    {"sub": "aiii", "q": "An item cost 500 dollars one year ago. Estimate today's price, correct to two decimal places.", "ans": "517.50", "exp": "Multiply by 1.035"},
    {"sub": "bi", "q": "An item costs 8280 dollars today. Estimate its price a year ago, correct to two decimal places.", "ans": "8000", "exp": "Divide by 1.035"},
    {"sub": "bii", "q": "An item costs 207 dollars today. Estimate its price a year ago, correct to two decimal places.", "ans": "200", "exp": "Divide by 1.035"},
    {"sub": "biii", "q": "An item costs 621 dollars today. Estimate its price a year ago, correct to two decimal places.", "ans": "600", "exp": "Divide by 1.035"}
]
for item in q13_data:
    questions.append({
        "id": f"y10-1b-q13{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Prices have increased with inflation by an average of \\(3.5\\%\\) since the same time last year. {item['q']}",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": item["exp"],
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q14: restore to original percentage values
# a) Table priced at 370 dollars increased by 100%. What pct discount restores it?
#    Original value: V. Increased to 2V. Discount to go from 2V to V is 50%.
#    Let's change numbers: "A table originally priced at 420 dollars was increased in price by 100%. What percentage discount will restore it to its original price?" => Ans: 50%
# b) Passengers 156, increased by 25%. What pct decrease next year restores it?
#    V -> 1.25V. Decrease to go from 1.25V to V is (0.25/1.25)*100 = 20%.
#    Let's change numbers: "The number of daily passengers on a ferry was 180, and in one year it increased by 25%. What percentage decrease next year would restore the number of passengers to its original value?" => Ans: 20%
# c) Savings 15000, spent 45%. By what pct of the new amount must he increase savings to restore them?
#    V -> 0.55V. Increase to go from 0.55V to V is (0.45/0.55)*100 = 81.82%.
#    Let's change numbers: "A student had savings of 8000 dollars, but spent 40% of this last year. By what percentage of the new amount must he increase his savings to restore them to their original value? Correct to two decimal places."
#    V -> 0.60V. Change is 0.40V. (0.40/0.60)*100 = 66.67%. => Ans: 66.67%
# d) Profit 3650, decreased by 42%. By what percentage must profit increase next year to restore it?
#    V -> 0.58V. Increase to go from 0.58V to V is (0.42/0.58)*100 = 72.41%.
#    Let's change numbers: "The profit of a company last year was 5000 dollars, but this year it decreased by 30%. By what percentage must the profit increase next year to restore it to its original value? Correct to two decimal places."
#    V -> 0.70V. (0.30/0.70)*100 = 42.86%. => Ans: 42.86%
q14_data = [
    {"sub": "a", "q": "A table originally priced at 420 dollars was increased in price by 100%. What percentage discount will restore it to its original price? (Enter the percentage value only, e.g. 50%)", "ans": "50%"},
    {"sub": "b", "q": "The number of daily passengers on a ferry was 180, and in one year it increased by 25%. What percentage decrease next year would restore the number of passengers to its original value? (Enter the percentage value only, e.g. 20%)", "ans": "20%"},
    {"sub": "c", "q": "A student had savings of 8000 dollars, but spent 40% of this last year. By what percentage of the new amount must he increase his savings to restore them to their original value? Correct to two decimal places. (Enter the percentage value only, e.g. 66.67%)", "ans": "66.67%"},
    {"sub": "d", "q": "The profit of a company last year was 5000 dollars, but this year it decreased by 30%. By what percentage must the profit increase next year to restore it to its original value? Correct to two decimal places. (Enter the percentage value only, e.g. 42.86%)", "ans": "42.86%"}
]
for item in q14_data:
    questions.append({
        "id": f"y10-1b-q14{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": item["q"],
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "To restore to original, calculate the change required divided by the current (new) value.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Q15: percentage change required to restore
# a) increased by: i) 10% ii) 18% iii) 360% iv) 4.1%
#    => decrease needed = (x / (100 + x)) * 100
#    Let's change numbers:
#    i) 15% => (15/115)*100 = 13.04%
#    ii) 25% => (25/125)*100 = 20.00%
#    iii) 300% => (300/400)*100 = 75.00%
#    iv) 8.5% => (8.5/108.5)*100 = 7.83%
# b) decreased by: i) 10% ii) 18% iii) 80% iv) 4.1%
#    => increase needed = (x / (100 - x)) * 100
#    Let's change numbers:
#    i) 15% => (15/85)*100 = 17.65%
#    ii) 25% => (25/75)*100 = 33.33%
#    iii) 60% => (60/40)*100 = 150.00%
#    iv) 8.5% => (8.5/91.5)*100 = 9.29%
q15_data = [
    {"sub": "ai", "q": "Find, correct to two decimal places, the percentage decrease necessary to restore a quantity to its original value if it has been increased by \\(15\\%\\).", "ans": "13.04%"},
    {"sub": "aii", "q": "Find, correct to two decimal places, the percentage decrease necessary to restore a quantity to its original value if it has been increased by \\(25\\%\\).", "ans": "20%"},
    {"sub": "aiii", "q": "Find, correct to two decimal places, the percentage decrease necessary to restore a quantity to its original value if it has been increased by \\(300\\%\\).", "ans": "75%"},
    {"sub": "aiv", "q": "Find, correct to two decimal places, the percentage decrease necessary to restore a quantity to its original value if it has been increased by \\(8.5\\%\\).", "ans": "7.83%"},
    {"sub": "bi", "q": "Find, correct to two decimal places, the percentage increase necessary to restore a quantity to its original value if it has been decreased by \\(15\\%\\).", "ans": "17.65%"},
    {"sub": "bii", "q": "Find, correct to two decimal places, the percentage increase necessary to restore a quantity to its original value if it has been decreased by \\(25\\%\\).", "ans": "33.33%"},
    {"sub": "biii", "q": "Find, correct to two decimal places, the percentage increase necessary to restore a quantity to its original value if it has been decreased by \\(60\\%\\).", "ans": "150%"},
    {"sub": "biv", "q": "Find, correct to two decimal places, the percentage increase necessary to restore a quantity to its original value if it has been decreased by \\(8.5\\%\\).", "ans": "9.29%"}
]
for item in q15_data:
    questions.append({
        "id": f"y10-1b-q15{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": item["q"],
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "To restore to original, calculate the change required divided by the current (new) value.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Percentage increase and decrease"
    })

# Write file
output = "export const Y10_CH1B_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch1BQuestions.js", "w", encoding="utf-8") as f:
    f.write(output)

print("Done! Generated", len(questions), "questions.")
