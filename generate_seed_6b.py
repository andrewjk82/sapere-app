import json
import math

questions = []

def add_q(id_str, q_text, ans, diff="easy", time=90, qtype="short_answer", t="6B"):
    questions.append({
        "id": id_str,
        "type": qtype,
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "a": ans,
        "t": t,
        "solutionSteps": [{"explanation": "Working out", "workingOut": ans}] if qtype == "short_answer" else [{"explanation": "Proof or sketch", "workingOut": ""}]
    })

def add_multi(id_str, q_text, subQs, diff="hard", time=180, t="6B"):
    questions.append({
        "id": id_str,
        "type": "subquestions",
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "t": t,
        "subQuestions": subQs
    })

# Q1
q1_data = [
    ("a", "y = \\sin x", "\\cos x"),
    ("b", "y = \\cos x", "-\\sin x"),
    ("c", "y = \\tan x", "\\sec^2 x"),
    ("d", "y = 2 \\sin x", "2 \\cos x"),
    ("e", "y = \\sin 2x", "2 \\cos 2x"),
    ("f", "y = 3 \\cos x", "-3 \\sin x"),
    ("g", "y = \\cos 3x", "-3 \\sin 3x"),
    ("h", "y = \\tan 4x", "4 \\sec^2 4x"),
    ("i", "y = 4 \\tan x", "4 \\sec^2 x"),
    ("j", "y = 2 \\sin 3x", "6 \\cos 3x"),
    ("k", "y = 2 \\tan 2x", "4 \\sec^2 2x"),
    ("l", "y = 4 \\cos 2x", "-8 \\sin 2x"),
    ("m", "y = -\\sin 2x", "-2 \\cos 2x"),
    ("n", "y = -\\cos 2x", "2 \\sin 2x"),
    ("o", "y = -\\tan 2x", "-2 \\sec^2 2x"),
    ("p", "y = \\tan \\frac{1}{2}x", "\\frac{1}{2} \\sec^2 \\frac{1}{2}x"),
    ("q", "y = \\cos \\frac{1}{2}x", "-\\frac{1}{2} \\sin \\frac{1}{2}x"),
    ("r", "y = \\sin \\frac{x}{2}", "\\frac{1}{2} \\cos \\frac{x}{2}"),
    ("s", "y = 5 \\tan \\frac{1}{3}x", "\\frac{5}{3} \\sec^2 \\frac{1}{3}x"),
    ("t", "y = 6 \\cos \\frac{x}{3}", "-2 \\sin \\frac{x}{3}"),
    ("u", "y = 12 \\sin \\frac{x}{4}", "3 \\cos \\frac{x}{4}")
]
for sub, expr, ans in q1_data:
    add_q("y12a-6b-q1" + sub, "Use the standard forms to differentiate with respect to \\( x \\): \\( " + expr + " \\)", ans, "easy", 90)

# Q2
q2_data = [
    ("a", "\\sin 2\\pi x", "2\\pi \\cos 2\\pi x"),
    ("b", "\\tan \\frac{\\pi}{2} x", "\\frac{\\pi}{2} \\sec^2 \\frac{\\pi}{2} x"),
    ("c", "3 \\sin x + \\cos 5x", "3 \\cos x - 5 \\sin 5x"),
    ("d", "4 \\sin \\pi x + 3 \\cos \\pi x", "4\\pi \\cos \\pi x - 3\\pi \\sin \\pi x"),
    ("e", "\\sin(2x - 1)", "2 \\cos(2x - 1)"),
    ("f", "\\tan(1 + 3x)", "3 \\sec^2(1 + 3x)"),
    ("g", "2 \\cos(1 - x)", "2 \\sin(1 - x)"),
    ("h", "\\cos(5x + 4)", "-5 \\sin(5x + 4)"),
    ("i", "7 \\sin(2 - 3x)", "-21 \\cos(2 - 3x)"),
    ("j", "10 \\tan(10 - x)", "-10 \\sec^2(10 - x)"),
    ("k", "6 \\sin\\left(\\frac{x+1}{2}\\right)", "3 \\cos\\left(\\frac{x+1}{2}\\right)"),
    ("l", "15 \\cos\\left(\\frac{2x+1}{5}\\right)", "-6 \\sin\\left(\\frac{2x+1}{5}\\right)")
]
for sub, expr, ans in q2_data:
    add_q("y12a-6b-q2" + sub, "Differentiate with respect to \\( x \\): \\( " + expr + " \\)", ans, "easy", 90)

# Q3
q3_data = [
    ("a", "y = \\sin 2x", "2 \\cos 2x, -4 \\sin 2x, -8 \\cos 2x, 16 \\sin 2x"),
    ("b", "y = \\cos 10x", "-10 \\sin 10x, -100 \\cos 10x, 1000 \\sin 10x, 10000 \\cos 10x"),
    ("c", "y = \\sin \\frac{1}{2}x", "\\frac{1}{2} \\cos \\frac{1}{2}x, -\\frac{1}{4} \\sin \\frac{1}{2}x, -\\frac{1}{8} \\cos \\frac{1}{2}x, \\frac{1}{16} \\sin \\frac{1}{2}x"),
    ("d", "y = \\cos \\frac{1}{3}x", "-\\frac{1}{3} \\sin \\frac{1}{3}x, -\\frac{1}{9} \\cos \\frac{1}{3}x, \\frac{1}{27} \\sin \\frac{1}{3}x, \\frac{1}{81} \\cos \\frac{1}{3}x")
]
for sub, expr, ans in q3_data:
    add_q("y12a-6b-q3" + sub, "Find the first, second, third and fourth derivatives of \\( " + expr + " \\).", ans, "easy", 90)

add_q("y12a-6b-q3a_amp", "In part a (\\( y = \\sin 2x \\)), write down the amplitudes of the four resulting functions.", "2, 4, 8, 16", "easy", 90)
add_q("y12a-6b-q3d_amp", "In part d (\\( y = \\cos \\frac{1}{3}x \\)), write down the amplitudes of the four resulting functions.", "1/3, 1/9, 1/27, 1/81", "easy", 90)

# Q4
q4_data = [
    ("a", "0", "0"),
    ("b", "\\frac{\\pi}{12}", "-1"),
    ("c", "\\frac{\\pi}{6}", "-\\sqrt{3}"),
    ("d", "\\frac{\\pi}{4}", "-2")
]
for sub, val, ans in q4_data:
    add_q("y12a-6b-q4" + sub, "If \\( f(x) = \\cos 2x \\), find \\( f'(" + val + ") \\).", ans, "easy", 90)

# Q5
q5_data = [
    ("a", "0", "0"),
    ("b", "2\\pi", "-\\frac{1}{4}"),
    ("c", "-\\pi", "\\frac{1}{4\\sqrt{2}}"),
    ("d", "\\pi", "-\\frac{1}{4\\sqrt{2}}")
]
for sub, val, ans in q5_data:
    add_q("y12a-6b-q5" + sub, "If \\( f(x) = \\sin(\\frac{1}{4}x + \\frac{\\pi}{2}) \\), find \\( f'(" + val + ") \\).", ans, "easy", 90)

# Q6
q6_data = [
    ("a", "y = x \\sin x", "\\sin x + x \\cos x"),
    ("b", "y = 2x \\tan 2x", "2 \\tan 2x + 4x \\sec^2 2x"),
    ("c", "y = x^2 \\cos 2x", "2x \\cos 2x - 2x^2 \\sin 2x"),
    ("d", "y = x^3 \\sin 3x", "3x^2 \\sin 3x + 3x^3 \\cos 3x")
]
for sub, expr, ans in q6_data:
    add_q("y12a-6b-q6" + sub, "Find \\( \\frac{dy}{dx} \\) using the product rule: \\( " + expr + " \\)", ans, "medium", 120)

# Q7
q7_data = [
    ("a", "y = \\frac{\\sin x}{x}", "\\frac{x \\cos x - \\sin x}{x^2}"),
    ("b", "y = \\frac{\\cos x}{x}", "\\frac{-x \\sin x - \\cos x}{x^2}"),
    ("c", "y = \\frac{x^2}{\\cos x}", "\\frac{2x \\cos x + x^2 \\sin x}{\\cos^2 x}"),
    ("d", "y = \\frac{x}{1 + \\sin x}", "\\frac{1 + \\sin x - x \\cos x}{(1 + \\sin x)^2}")
]
for sub, expr, ans in q7_data:
    add_q("y12a-6b-q7" + sub, "Find \\( \\frac{dy}{dx} \\) using the quotient rule: \\( " + expr + " \\)", ans, "medium", 120)

# Q8
q8_data = [
    ("a", "y = \\sin(x^2)", "2x \\cos(x^2)"),
    ("b", "y = \\sin(1 - x^2)", "-2x \\cos(1 - x^2)"),
    ("c", "y = \\cos(x^3 + 1)", "-3x^2 \\sin(x^3 + 1)"),
    ("d", "y = \\sin \\frac{1}{x}", "-\\frac{1}{x^2} \\cos \\frac{1}{x}"),
    ("e", "y = \\cos^2 x", "-2 \\cos x \\sin x"),
    ("f", "y = \\sin^3 x", "3 \\sin^2 x \\cos x"),
    ("g", "y = \\tan^2 x", "2 \\tan x \\sec^2 x"),
    ("h", "y = \\tan \\sqrt{x}", "\\frac{\\sec^2 \\sqrt{x}}{2\\sqrt{x}}")
]
for sub, expr, ans in q8_data:
    add_q("y12a-6b-q8" + sub, "Find \\( \\frac{dy}{dx} \\) using the chain rule: \\( " + expr + " \\). Remember that \\( \\cos^2 x \\) means \\( (\\cos x)^2 \\).", ans, "medium", 120)

# Q11
q11_data = [
    ("a", "f(x) = e^{\\tan x}", "e^{\\tan x} \\sec^2 x"),
    ("b", "f(x) = e^{\\sin 2x}", "2e^{\\sin 2x} \\cos 2x"),
    ("c", "f(x) = \\sin(e^{2x})", "2e^{2x} \\cos(e^{2x})"),
    ("d", "f(x) = \\log_e(\\cos x)", "-\\tan x"),
    ("e", "f(x) = \\log_e(\\sin x)", "\\cot x"),
    ("f", "f(x) = \\log_e(\\cos 4x)", "-4 \\tan 4x")
]
for sub, expr, ans in q11_data:
    add_q("y12a-6b-q11" + sub, "Differentiate: \\( " + expr + " \\)", ans, "medium", 120)

# Q12
q12_data = [
    ("a", "y = \\sin x \\cos x", "\\cos^2 x - \\sin^2 x"),
    ("b", "y = \\sin^2 7x", "14 \\sin 7x \\cos 7x"),
    ("c", "y = \\cos^5 3x", "-15 \\cos^4 3x \\sin 3x"),
    ("d", "y = (1 - \\cos 3x)^3", "9 (1 - \\cos 3x)^2 \\sin 3x"),
    ("e", "y = \\sin 2x \\sin 4x", "2 \\cos 2x \\sin 4x + 4 \\sin 2x \\cos 4x"),
    ("f", "y = \\tan^3(5x - 4)", "15 \\tan^2(5x - 4) \\sec^2(5x - 4)")
]
for sub, expr, ans in q12_data:
    add_q("y12a-6b-q12" + sub, "Differentiate this function: \\( " + expr + " \\)", ans, "medium", 120)

# Q13
q13_data = [
    ("a", "f(x) = \\frac{1}{1 + \\sin x}", "-\\frac{\\cos x}{(1 + \\sin x)^2}"),
    ("b", "f(x) = \\frac{\\sin x}{1 + \\cos x}", "\\frac{1}{1 + \\cos x}"),
    ("c", "f(x) = \\frac{1 - \\sin x}{\\cos x}", "-\\frac{1}{1 + \\sin x}"), 
    ("d", "f(x) = \\frac{\\cos x}{\\cos x + \\sin x}", "-\\frac{1}{(\\cos x + \\sin x)^2}")
]
for sub, expr, ans in q13_data:
    add_q("y12a-6b-q13" + sub, "Find \\( f'(x) \\), given that: \\( " + expr + " \\)", ans, "medium", 120)

# Q14
add_multi("y12a-6b-q14", "", [
    {
        "id": "y12a-6b-q14a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Sketch \\( y = \\cos x \\), for \\( -3\\pi \\le x \\le 3\\pi \\).",
        "a": "Sketch of cosine curve from -3pi to 3pi",
        "solutionSteps": [{"explanation": "Draw the cosine curve...", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find \\( y', y'', y''' \\) and \\( y'''' \\), and sketch them underneath the first graph.",
        "a": "y'=-sin x, y''=-cos x, y'''=sin x, y''''=cos x",
        "solutionSteps": [{"explanation": "Find derivatives...", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14c_i",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) What geometric relationship between the two graphs is indicated by the fact that i) \\( y'' = -y \\)?",
        "a": "Reflection in the x-axis",
        "solutionSteps": [{"explanation": "Negative sign indicates reflection in x-axis", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14c_ii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) What geometric relationship between the two graphs is indicated by the fact that ii) \\( y'''' = y \\)?",
        "a": "The graphs are identical",
        "solutionSteps": [{"explanation": "They are the same function", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14d_i",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Find which of the functions \\( y = e^x, y = e^{-x}, y = \\sin x \\) and \\( y = x^n \\) satisfy i) \\( y' = y \\).",
        "a": "y = e^x",
        "solutionSteps": [{"explanation": "Test each function.", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14d_ii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Find which of the functions \\( y = e^x, y = e^{-x}, y = \\sin x \\) and \\( y = x^n \\) satisfy ii) \\( y'' = y \\).",
        "a": "y = e^x, y = e^{-x}",
        "solutionSteps": [{"explanation": "Test each function.", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14d_iii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Find which of the functions \\( y = e^x, y = e^{-x}, y = \\sin x \\) and \\( y = x^n \\) satisfy iii) \\( y''' = y \\).",
        "a": "y = e^x",
        "solutionSteps": [{"explanation": "Test each function.", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q14d_iv",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Find which of the functions \\( y = e^x, y = e^{-x}, y = \\sin x \\) and \\( y = x^n \\) satisfy iv) \\( y'''' = y \\).",
        "a": "y = e^x, y = e^{-x}, y = \\sin x",
        "solutionSteps": [{"explanation": "Test each function.", "workingOut": ""}]
    }
], "medium", 120)

# Q16
add_multi("y12a-6b-q16a", "If \\( y = e^x \\sin x \\)", [
    {
        "id": "y12a-6b-q16a_1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\( y' \\).",
        "a": "e^x(\\sin x + \\cos x)",
        "solutionSteps": [{"explanation": "Product rule", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q16a_2",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\( y'' \\).",
        "a": "2e^x \\cos x",
        "solutionSteps": [{"explanation": "Product rule again", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q16a_3",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Show that \\( y'' - 2y' + 2y = 0 \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Substitute into expression", "workingOut": ""}]
    }
], "medium", 120)

add_multi("y12a-6b-q16b", "If \\( y = e^{-x} \\cos x \\)", [
    {
        "id": "y12a-6b-q16b_1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\( y' \\).",
        "a": "-e^{-x}(\\cos x + \\sin x)",
        "solutionSteps": [{"explanation": "Product rule", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q16b_2",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Find \\( y'' \\).",
        "a": "2e^{-x} \\sin x",
        "solutionSteps": [{"explanation": "Product rule again", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q16b_3",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "Show that \\( y'' + 2y' + 2y = 0 \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Substitute into expression", "workingOut": ""}]
    }
], "medium", 120)

# Q17
add_multi("y12a-6b-q17", "Consider the function \\( y = \\frac{1}{3} \\tan^3 x - \\tan x + x \\).", [
    {
        "id": "y12a-6b-q17a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Show that \\( \\frac{dy}{dx} = \\tan^2 x \\sec^2 x - \\sec^2 x + 1 \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Differentiate each term.", "workingOut": ""}]
    },
    {
        "id": "y12a-6b-q17b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Hence use the identity \\( \\sec^2 x = 1 + \\tan^2 x \\) to show that \\( \\frac{dy}{dx} = \\tan^4 x \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Substitute the identity.", "workingOut": ""}]
    }
], "medium", 120)

with open('src/constants/seedYear12aCh6BQuestions.js', 'w') as f:
    f.write("export const Y12A_CH6B_QUESTIONS = " + json.dumps(questions, indent=2) + ";\n")
