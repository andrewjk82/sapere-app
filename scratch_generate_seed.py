# -*- coding: utf-8: -*-
import json
import math

questions = []

# Q1: Find final value after successive change
# Original: a) 10000 increased by 5%, 8%, 10%  b) 10000 decreased by 8%, 7%, 6%  c) 90000 increased by 10% ten times
# New: a) 20000 increased by 4%, 6%, 12%  b) 20000 decreased by 5%, 6%, 8%  c) 80000 increased by 8% ten times
# Math:
# a) 20000 * 1.04 * 1.06 * 1.12 = 24693.76
# b) 20000 * 0.95 * 0.94 * 0.92 = 16431.20
# c) 80000 * (1.08)^10 = 172714.00
q1_data = [
    {"sub": "a", "orig": 20000, "pcts": [4, 6, 12], "mode": "increased", "ans": "24693.76"},
    {"sub": "b", "orig": 20000, "pcts": [5, 6, 8], "mode": "decreased", "ans": "16431.20"},
    {"sub": "c", "orig": 80000, "pcts": [8]*10, "mode": "increased", "ans": "172714.00"}
]
for item in q1_data:
    if item["sub"] == "c":
        q_text = f"Find the final value after {item['orig']} dollars has been increased by \\(8\\%\\) ten times successively. Give your answer correct to the nearest cent."
    else:
        pct_list_str = ", ".join(f"\\({p}\\%\\)" for p in item["pcts"][:-1]) + f" and \\({item['pcts'][-1]}\\%\\)"
        q_text = f"Find the final value after {item['orig']} dollars is successively {item['mode']} by {pct_list_str}."
    
    questions.append({
        "id": f"y10-1c-q1{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": q_text,
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Identify the multiplier for each successive change.",
                "workingOut": ""
            },
            {
                "explanation": "Multiply the original value by the successive multipliers.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q2: Apples cost...
# Original: Three years ago $2.80, increased by 8%, 15% and 10%.
# New: Three years ago apples cost 3.20 dollars per kg, but the price has increased by 5%, 12% and 10% in the past three successive years.
# Math: 3.20 * 1.05 * 1.12 * 1.10 = 4.14
questions.append({
    "id": "y10-1c-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Three years ago, apples cost 3.20 dollars per kg, but the price has increased by \\(5\\%\\), \\(12\\%\\) and \\(10\\%\\) in the past three successive years. Multiply by \\(1.05 \\times 1.12 \\times 1.10\\) to find the price of apples now, correct to two decimal places.",
    "a": "4.14",
    "solutionSteps": [
        {
            "explanation": "Write down the expression with the original price and successive increase factors.",
            "workingOut": "\\(3.20 \\times 1.05 \\times 1.12 \\times 1.10\\)"
        },
        {
            "explanation": "Evaluate the product and round to two decimal places.",
            "workingOut": "\\(= 4.14336 \\approx 4.14\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

# Q3: Knowledge Bank Company dividend
# Original: risen by 32%, 112%, 155% and 8%. Find dividend for: a) $1000  b) $12472  c) $16.64  d) $512.21
# New: risen by 25%, 100%, 150% and 10%. Multiplier: 1.25 * 2.0 * 2.50 * 1.10 = 6.875
# a) 1000 => 6875
# b) 8000 => 55000
# c) 16.00 => 110.00
# d) 400.00 => 2750.00
q3_data = [
    {"sub": "a", "orig": 1000, "ans": "6875"},
    {"sub": "b", "orig": 8000, "ans": "55000"},
    {"sub": "c", "orig": 16.00, "ans": "110.00"},
    {"sub": "d", "orig": 400.00, "ans": "2750"}
]
for item in q3_data:
    questions.append({
        "id": f"y10-1c-q3{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"The dividend per share in a bank company has risen over the last four years by \\(25\\%\\), \\(100\\%\\), \\(150\\%\\) and \\(10\\%\\), respectively. Find the total dividend received now by a shareholder whose dividend four years ago was {item['orig']} dollars.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "The successive increase factors are \\(1.25\\), \\(2.00\\), \\(2.50\\), and \\(1.10\\).",
                "workingOut": "\\(\\text{{Multiplier}} = 1.25 \\times 2.00 \\times 2.50 \\times 1.10 = 6.875\\)"
            },
            {
                "explanation": "Multiply the original dividend by the total multiplier.",
                "workingOut": f"\\({item['orig']} \\times 6.875 = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q4: Land rates Crookwell Shire
# Original: risen 6% every year for last seven years.
# a) By what percentage have the land rates risen? (1.06^7 - 1 = 50.1%)
# b) Find rates now for: i) $1000  ii) $17268.24  iii) $216.04
# New: risen 5% every year for last seven years.
# a) Multiplier = 1.05^7 = 1.4071 (40.7% rise)
# b) i) 2000 => 2000 * 1.05^7 = 2814.20
#    ii) 15000 => 15000 * 1.05^7 = 21106.50
#    iii) 300 => 300 * 1.05^7 = 422.13
questions.append({
    "id": "y10-1c-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Land rates in a shire have risen by \\(5\\%\\) every year for the last seven years. By what percentage have the land rates risen over the seven-year period? Correct to one decimal place.",
    "a": "40.7%",
    "solutionSteps": [
        {
            "explanation": "The multiplier for a \\(5\\%\\) increase is \\(1.05\\). Since this happens for 7 years, the overall multiplier is \\(1.05^7\\).",
            "workingOut": "\\(1.05^7 \\approx 1.4071\\)"
        },
        {
            "explanation": "Convert this multiplier to a percentage increase.",
            "workingOut": "\\((1.4071 - 1) \\times 100\\% \\approx 40.7\\%\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

q4b_data = [
    {"sub": "bi", "orig": 2000, "ans": "2814.20"},
    {"sub": "bii", "orig": 15000, "ans": "21106.50"},
    {"sub": "biii", "orig": 300, "ans": "422.13"}
]
for item in q4b_data:
    questions.append({
        "id": f"y10-1c-q4{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Land rates in a shire have risen by \\(5\\%\\) every year for the last seven years. Find the rates now payable by a landowner whose rates seven years ago were {item['orig']} dollars, correct to the nearest cent.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Using the overall multiplier of \\(1.05^7\\) for the 7 years.",
                "workingOut": f"\\({item['orig']} \\times 1.05^7\\)"
            },
            {
                "explanation": "Evaluate and round to the nearest cent.",
                "workingOut": f"\\({item['orig']} \\times 1.407100 = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q5: Overweight falling
# Original: fell by 4.8%, 7.1%, 10.5% and 6.2%. Find pct decrease. (1 - 0.952*0.929*0.895*0.938 = 25.66%)
# New: fell by 5%, 8%, 10% and 6%.
# Math: 0.95 * 0.92 * 0.90 * 0.94 = 0.739224
# Percentage decrease: (1 - 0.739224) * 100 = 26.08%
questions.append({
    "id": "y10-1c-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In four successive years, the number of overweight people in a community fell by \\(5\\%\\), \\(8\\%\\), \\(10\\%\\) and \\(6\\%\\), respectively. Find, correct to two decimal places, the percentage decrease over the four-year period.",
    "a": "26.08%",
    "solutionSteps": [
        {
            "explanation": "The successive multipliers for the decreases are \\(0.95\\), \\(0.92\\), \\(0.90\\), and \\(0.94\\).",
            "workingOut": "\\(\\text{{Overall multiplier}} = 0.95 \\times 0.92 \\times 0.90 \\times 0.94 = 0.739224\\)"
        },
        {
            "explanation": "Calculate the percentage decrease from the multiplier.",
            "workingOut": "\\((1 - 0.739224) \\times 100\\% \\approx 26.08\\%\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

# Q6: Calculate total increase or decrease
# Original: a) inc 20% then dec 20% (dec 4%)  b) inc 80% then dec 80% (dec 64%)
# New: a) inc 30% then dec 30% (dec 9%) b) inc 60% then dec 60% (dec 36%)
q6_data = [
    {"sub": "a", "pct": 30, "ans": "decrease of 9%"},
    {"sub": "b", "pct": 60, "ans": "decrease of 36%"}
]
for item in q6_data:
    p = item["pct"]
    factor = (1 + p/100) * (1 - p/100)
    change = round((1 - factor)*100)
    questions.append({
        "id": f"y10-1c-q6{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Calculate the total percentage change (stating if it is an increase or decrease, e.g. 'decrease of 9%') when a quantity is increased by \\({p}\\%\\) and then decreased by \\({p}\\%\\).",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Let the original quantity be \\(x\\). Multiply by the increase and decrease factors.",
                "workingOut": f"\\(x \\times {1 + p/100:.2f} \\times {1 - p/100:.2f}\\)"
            },
            {
                "explanation": "Simplify the product.",
                "workingOut": f"\\(x \\times {factor:.4f}\\)"
            },
            {
                "explanation": f"Since the multiplier is less than 1, it is a decrease.",
                "workingOut": f"\\((1 - {factor:.4f}) \\times 100\\% = {change}\\%\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q7: Price of beans rising...
# Original: risen 10%, 15%, 35% in three years, now cost $3.40. Find: a) price 1 yr ago  b) price 2 yrs ago  c) price 3 yrs ago
# New: risen 8%, 12%, 30% in three years, now cost 4.50 dollars per kg.
# Math:
# Now = 4.50
# 1 year ago = 4.50 / 1.30 = 3.46
# 2 years ago = (4.50 / 1.30) / 1.12 = 3.09
# 3 years ago = ((4.50 / 1.30) / 1.12) / 1.08 = 2.86
q7_data = [
    {"sub": "a", "step": "price one year ago", "ans": "3.46"},
    {"sub": "b", "step": "price two years ago", "ans": "3.09"},
    {"sub": "c", "step": "original price three years ago", "ans": "2.86"}
]
for item in q7_data:
    questions.append({
        "id": f"y10-1c-q7{item['sub']}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"The price of beans has risen by \\(8\\%\\), \\(12\\%\\) and \\(30\\%\\) in three successive years, and they now cost 4.50 dollars per kg. Find the {item['step']}, correct to two decimal places.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Work backwards from the current price by dividing by the successive percentage increase factors.",
                "workingOut": f"\\(\\text{{Answer}} = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q8: Shares Value Radios falling
# Original: falling 18% per year for last 5 years.
# a) Present worth of: i) $1000  ii) $24000  iii) $11328512
# b) By what percentage has value fallen?
# New: falling 15% per year for last 5 years.
# Multiplier: 0.85^5 = 0.4437
# a) i) 1000 => 1000 * 0.85^5 = 443.71
#    ii) 25000 => 25000 * 0.85^5 = 11092.63
#    iii) 80000 => 80000 * 0.85^5 = 35496.42
# b) fallen pct: (1 - 0.443705) * 100 = 55.63%
q8a_data = [
    {"sub": "ai", "orig": 1000, "ans": "443.71"},
    {"sub": "aii", "orig": 25000, "ans": "11092.63"},
    {"sub": "aiii", "orig": 80000, "ans": "35496.42"}
]
for item in q8a_data:
    questions.append({
        "id": f"y10-1c-q8{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Shares have been falling by \\(15\\%\\) per year for the last five years. Find the present worth of a parcel of shares with an original worth five years ago of {item['orig']} dollars, correct to the nearest cent.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "Apply the five successive decreases of \\(15\\%\\) using the multiplier \\(0.85^5\\).",
                "workingOut": f"\\({item['orig']} \\times 0.85^5\\)"
            },
            {
                "explanation": "Evaluate the value and round to two decimal places.",
                "workingOut": f"\\({item['orig']} \\times 0.443705 = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

questions.append({
    "id": "y10-1c-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Shares have been falling by \\(15\\%\\) per year for the last five years. By what percentage has the value fallen over the five-year period? Correct to two decimal places.",
    "a": "55.63%",
    "solutionSteps": [
        {
            "explanation": "The overall multiplier after five years of \\(15\\%\\) annual decrease is \\(0.85^5\\).",
            "workingOut": "\\(0.85^5 \\approx 0.443705\\)"
        },
        {
            "explanation": "Subtract this multiplier from 1 to find the percentage decrease.",
            "workingOut": "\\((1 - 0.443705) \\times 100\\% \\approx 55.63\\%\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

# Q9: Bacteria increases 18%... original population 4 hours ago:
# Original: now a) 10000  b) 1000000  c) 120000
# New: increase 15% every hour. now: a) 20000  b) 500000  c) 150000
# Math:
# Multiplier: 1.15^4 = 1.749006
# a) 20000 / 1.749006 = 11435.07 -> nearest integer = 11435
# b) 500000 / 1.749006 = 285876.6 => 285877
# c) 150000 / 1.749006 = 85762.98 => 85763
q9_data = [
    {"sub": "a", "now": 20000, "ans": "11435"},
    {"sub": "b", "now": 500000, "ans": "285877"},
    {"sub": "c", "now": 150000, "ans": "85763"}
]
for item in q9_data:
    questions.append({
        "id": f"y10-1c-q9{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A particular strain of bacteria increases its population by \\(15\\%\\) every hour. Calculate the size of the original population four hours ago if there are now {item['now']} bacteria, correct to the nearest integer.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": "To find the original population four hours ago, divide the current population by the growth factor \\(1.15^4\\).",
                "workingOut": f"\\({item['now']} \\div 1.15^4\\)"
            },
            {
                "explanation": "Evaluate the division and round to the nearest whole number.",
                "workingOut": f"\\({item['now']} \\div 1.749006 \\approx {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q10: Potato drops 16% per minute
# Original:
# a) temp after: i) 4 min ii) 8 min iii) 20 min
# b) temp now 12C. temp at: i) 3 min ago ii) 6 min ago iii) 10 min ago
# New: drops 15% per minute.
# a) temp after:
#    i) 4 min => 100 * 0.85^4 = 52.20
#    ii) 8 min => 100 * 0.85^8 = 27.25
#    iii) 20 min => 100 * 0.85^20 = 3.88
# b) temp now 15C. temp at:
#    i) 3 min ago => 15 / 0.85^3 = 24.43
#    ii) 6 min ago => 15 / 0.85^6 = 39.77
#    iii) 10 min ago => 15 / 0.85^10 = 76.20
# Round correct to two decimal places.
q10a_data = [
    {"sub": "ai", "min": 4, "ans": "52.20"},
    {"sub": "aii", "min": 8, "ans": "27.25"},
    {"sub": "aiii", "min": 20, "ans": "3.88"}
]
for item in q10a_data:
    questions.append({
        "id": f"y10-1c-q10{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A potato is taken from boiling water at \\(100^\\circ\\mathrm{{C}}\\) and placed in a fridge. Every minute, the temperature of the potato drops by \\(15\\%\\). Find the temperature of the potato after {item['min']} minutes, correct to two decimal places.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": f"Using the decay formula: \\(T = 100 \\times 0.85^{{{item['min']}}}\\).",
                "workingOut": f"\\(100 \\times 0.85^{{{item['min']}}} = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

q10b_data = [
    {"sub": "bi", "min": 3, "ans": "24.43"},
    {"sub": "bii", "min": 6, "ans": "39.77"},
    {"sub": "biii", "min": 10, "ans": "76.20"}
]
for item in q10b_data:
    questions.append({
        "id": f"y10-1c-q10{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"A potato drops temperature by \\(15\\%\\) every minute in a fridge. If its temperature is now \\(15^\\circ\\mathrm{{C}}\\), find its temperature {item['min']} minutes ago, correct to two decimal places.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": f"To find the temperature in the past, divide by \\(0.85^{{{item['min']}}}\\).",
                "workingOut": f"\\(15 \\div 0.85^{{{item['min']}}} = {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q11: Inflation rate table
# 2005: 2.3%, 2006: 2.7%, 2007: 3.8%, 2008: 2.3%, 2009: 4.4%, 2010: 1.8%
# Let's change rates slightly:
# 2005: 2.5%, 2006: 3.0%, 2007: 3.5%, 2008: 2.0%, 2009: 4.0%, 2010: 2.0%
# Math:
# a) whole six-year: 1.025 * 1.03 * 1.035 * 1.02 * 1.04 * 1.02 = 1.1843 => 18.4%
# b) first four-year (2005-2008): 1.025 * 1.03 * 1.035 * 1.02 = 1.1147 => 11.5%
q11_table = "Years: 2005 (2.5%), 2006 (3.0%), 2007 (3.5%), 2008 (2.0%), 2009 (4.0%), 2010 (2.0%)"
questions.append({
    "id": "y10-1c-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": f"Given the annual inflation rates: {q11_table}. Calculate the percentage increase in prices, correct to one decimal place, over the whole six-year period.",
    "a": "18.4%",
    "solutionSteps": [
        {
            "explanation": "Determine the overall price multiplier by multiplying successive inflation factors.",
            "workingOut": "\\(1.025 \\times 1.03 \\times 1.035 \\times 1.02 \\times 1.04 \\times 1.02 \\approx 1.1843\\)"
        },
        {
            "explanation": "Convert the multiplier to a percentage increase.",
            "workingOut": "\\((1.1843 - 1) \\times 100\\% \\approx 18.4\\%\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

questions.append({
    "id": "y10-1c-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": f"Given the annual inflation rates: {q11_table}. Calculate the percentage increase in prices, correct to one decimal place, during the first four-year period (2005 to 2008 inclusive).",
    "a": "11.5%",
    "solutionSteps": [
        {
            "explanation": "Multiply the inflation factors for 2005, 2006, 2007, and 2008.",
            "workingOut": "\\(1.025 \\times 1.03 \\times 1.035 \\times 1.02 \\approx 1.1147\\)"
        },
        {
            "explanation": "Convert this multiplier to a percentage increase.",
            "workingOut": "\\((1.1147 - 1) \\times 100\\% \\approx 11.5\\%\\)"
        }
    ],
    "t": "Repeated increases and decreases"
})

# Q12: iodine-131 radioactivity decreases 55% every seven days
# Original: find percentage reduction in radioactivity over: a) 3 weeks  b) 10 weeks  c) 26 weeks
# New: decreases by 50% every seven days.
# Multiplier after w weeks (which is 7w days => w periods of 7 days): 0.50^w.
# Pct reduction: (1 - 0.50^w) * 100.
# a) 3 weeks => 1 - 0.5^3 = 1 - 0.125 = 87.5%
# b) 5 weeks => 1 - 0.5^5 = 1 - 0.03125 = 96.9%
# c) 10 weeks => 1 - 0.5^10 = 1 - 0.000976 = 99.9%
q12_data = [
    {"sub": "a", "weeks": 3, "ans": "87.5%"},
    {"sub": "b", "weeks": 5, "ans": "96.9%"},
    {"sub": "c", "weeks": 10, "ans": "99.9%"}
]
for item in q12_data:
    questions.append({
        "id": f"y10-1c-q12{item['sub']}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"The radioactivity of a sample decreases by \\(50\\%\\) every seven days. Find the percentage reduction in radioactivity over a period of {item['weeks']} weeks, correct to one decimal place.",
        "a": item["ans"],
        "solutionSteps": [
            {
                "explanation": f"Since 7 days is 1 week, {item['weeks']} weeks represents {item['weeks']} decay cycles. The multiplier for each cycle is \\(0.50\\).",
                "workingOut": f"\\(\\text{{Overall multiplier}} = 0.50^{{{item['weeks']}}} = {0.50**item['weeks']:.6f}\\)"
            },
            {
                "explanation": "Compute the percentage reduction.",
                "workingOut": f"\\((1 - {0.50**item['weeks']:.6f}) \\times 100\\% \\approx {item['ans']}\\)"
            }
        ],
        "t": "Repeated increases and decreases"
    })

# Q13: coat discount 50%... not top-level split, will use subQuestions
# Let's change 50% to 40% discount and 40% increase.
# a) coat is discounted by 40%, and then increased by 40%. By what percentage is it increased or decreased from original?
#    Math: 1 * 0.60 * 1.40 = 0.84 => 16% decrease
# b) coat is increased by 40%, then decreased by 40%.
#    Math: 1 * 1.40 * 0.60 = 0.84 => 16% decrease
# c) explain relationship: they are both the same because multiplication is commutative.
questions.append({
    "id": "y10-1c-q13",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Analyze successive price changes on a coat.",
    "subQuestions": [
        {
            "id": "y10-1c-q13a",
            "type": "short_answer",
            "question": "A coat is discounted by \\(40\\%\\), and the resulting price is then increased by \\(40\\%\\). By what percentage is the price increased or decreased from its original value? (e.g. 'decrease of 16%')",
            "a": "decrease of 16%",
            "solutionSteps": [
                {
                    "explanation": "Calculate the combined multiplier.",
                    "workingOut": "\\(0.60 \\times 1.40 = 0.84\\)"
                },
                {
                    "explanation": "Convert this multiplier into percentage change.",
                    "workingOut": "\\((1 - 0.84) \\times 100\\% = 16\\% \\text{ decrease}\\)"
                }
            ]
        },
        {
            "id": "y10-1c-q13b",
            "type": "short_answer",
            "question": "The price of a coat is increased by \\(40\\%\\), and the resulting price is then decreased by \\(40\\%\\). By what percentage is the price increased or decreased from its original value? (e.g. 'decrease of 16%')",
            "a": "decrease of 16%",
            "solutionSteps": [
                {
                    "explanation": "Calculate the combined multiplier.",
                    "workingOut": "\\(1.40 \\times 0.60 = 0.84\\)"
                },
                {
                    "explanation": "Convert this multiplier into percentage change.",
                    "workingOut": "\\((1 - 0.84) \\times 100\\% = 16\\% \\text{ decrease}\\)"
                }
            ]
        },
        {
            "id": "y10-1c-q13c",
            "type": "teacher_review",
            "question": "Explain the relationship between the results of parts a and b.",
            "a": "Both successive operations yield the same final result of a 16% decrease because multiplication is commutative, i.e., 1.40 * 0.60 = 0.60 * 1.40.",
            "solutionSteps": [
                {
                    "explanation": "Multiplication is commutative.",
                    "workingOut": "\\(0.60 \\times 1.40 = 1.40 \\times 0.60 = 0.84\\)"
                }
            ]
        }
    ],
    "t": "Repeated increases and decreases"
})

# Write file
output = "export const Y10_CH1C_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch1CQuestions.js", "w", encoding="utf-8") as f:
    f.write(output)

print("Done! Generated", len(questions), "questions.")
